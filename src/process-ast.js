'use strict';

/**
 * AST-based export analyzer (Layer 3 of the processing pipeline).
 *
 * Parses source files with @babel/parser to discover the export tree:
 *  - Named exports (export const x = { ... })
 *  - Re-exports (export * from './file')
 *  - Default exports
 *  - Object children (const x = { a() {}, b() {} })
 *  - Function property attachment (Object.assign(fn, { ... }))
 *  - Class members
 *
 * Each file is parsed in a try/catch — one bad file doesn't break the rest.
 * Re-exports are followed transitively with cycle detection.
 */

const fs = require('fs');
const path = require('path');

let babelParser;
try {
  babelParser = require('@babel/parser');
} catch (_) {
  // @babel/parser not available — analyzeExports will return empty map
}

const EXTENSIONS = ['.js', '.mjs', '.cjs', '.jsx'];

const BABEL_OPTIONS = {
  sourceType: 'module',
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  plugins: [
    'classProperties',
    'classPrivateProperties',
    'classPrivateMethods',
    'classStaticBlock',
    'exportDefaultFrom',
    'exportNamespaceFrom',
    'dynamicImport',
    'nullishCoalescingOperator',
    'optionalChaining',
    'objectRestSpread',
    'numericSeparator',
    'logicalAssignment',
  ],
};

/**
 * Analyze all exports from a source tree.
 *
 * @param {string} sourceRoot - Root directory to scan.
 * @returns {Map<string, ExportInfo>} Map of export name → info.
 *
 * ExportInfo shape:
 *   { name, file, line, type, children: [{ name, type, line, kind }] }
 */
function analyzeExports(sourceRoot) {
  const exports = new Map();

  if (!babelParser) {
    return exports;
  }

  // Find all source files
  const files = findFiles(sourceRoot);

  // Parse each file and collect exports
  // We process entry points (index files) last so re-exports resolve
  const parsed = new Map(); // file → AST + export info (cache)
  const visiting = new Set(); // cycle detection

  for (const file of files) {
    try {
      collectFileExports(file, sourceRoot, exports, parsed, visiting);
    } catch (err) {
      // Skip files that fail to parse — Layer 1+2 handles them
      if (process.env.JSDOC_DEBUG) {
        console.warn('[process-ast] Failed to parse ' + file + ': ' + err.message);
      }
    }
  }

  return exports;
}

/**
 * Collect exports from a single file, following re-exports transitively.
 */
function collectFileExports(filePath, sourceRoot, exports, parsed, visiting) {
  const resolved = path.resolve(filePath);

  // Cycle detection
  if (visiting.has(resolved)) return;
  visiting.add(resolved);

  // Cache check
  if (parsed.has(resolved)) {
    mergeFileExports(parsed.get(resolved), exports);
    visiting.delete(resolved);
    return;
  }

  const source = fs.readFileSync(resolved, 'utf8');
  const ast = babelParser.parse(source, BABEL_OPTIONS);
  const fileRelative = path.relative(sourceRoot, resolved);

  // Collect all top-level declarations for reference
  const declarations = new Map(); // name → node
  const propertyAttachments = new Map(); // name → [{ propName, node }]

  for (const node of ast.program.body) {
    collectDeclarations(node, declarations);
    collectPropertyAttachments(node, declarations, propertyAttachments);
  }

  const fileExports = [];

  for (const node of ast.program.body) {
    // export const x = ..., export function x() {}, export class X {}
    if (node.type === 'ExportNamedDeclaration' && node.declaration) {
      const decl = node.declaration;

      if (decl.type === 'VariableDeclaration') {
        for (const declarator of decl.declarations) {
          if (declarator.id && declarator.id.type === 'Identifier' && declarator.init) {
            const info = analyzeNode(declarator.id.name, declarator.init, fileRelative, declarator.loc);
            attachProperties(info, propertyAttachments);
            fileExports.push(info);
          }
        }
      } else if (decl.type === 'FunctionDeclaration' && decl.id) {
        const info = {
          name: decl.id.name,
          file: fileRelative,
          line: decl.loc ? decl.loc.start.line : null,
          type: 'function',
          children: extractFunctionParams(decl),
        };
        attachProperties(info, propertyAttachments);
        fileExports.push(info);
      } else if (decl.type === 'ClassDeclaration' && decl.id) {
        const info = {
          name: decl.id.name,
          file: fileRelative,
          line: decl.loc ? decl.loc.start.line : null,
          type: 'class',
          children: extractClassMembers(decl),
        };
        fileExports.push(info);
      }
    }

    // export { a, b, c }
    if (node.type === 'ExportNamedDeclaration' && !node.declaration && node.specifiers.length > 0 && !node.source) {
      for (const spec of node.specifiers) {
        if (spec.type === 'ExportSpecifier') {
          const localName = spec.local.name;
          const exportedName = spec.exported.name || spec.exported.value;
          const declNode = declarations.get(localName);
          if (declNode) {
            const info = analyzeNode(exportedName, declNode, fileRelative, declNode.loc || spec.loc);
            attachProperties(info, propertyAttachments.get(localName) ? new Map([[localName, propertyAttachments.get(localName)]]) : propertyAttachments);
            // Check attachments by local name
            const localAttachments = propertyAttachments.get(localName);
            if (localAttachments && localAttachments.length > 0) {
              for (const att of localAttachments) {
                if (!info.children.some(c => c.name === att.propName)) {
                  info.children.push({
                    name: att.propName,
                    type: getNodeType(att.node),
                    line: att.node.loc ? att.node.loc.start.line : null,
                    kind: inferChildKind(att.node),
                  });
                }
              }
            }
            fileExports.push(info);
          } else {
            // Declaration not found in this file — add a minimal entry
            fileExports.push({
              name: exportedName,
              file: fileRelative,
              line: spec.loc ? spec.loc.start.line : null,
              type: 'unknown',
              children: [],
            });
          }
        }
      }
    }

    // export default ...
    if (node.type === 'ExportDefaultDeclaration') {
      const decl = node.declaration;
      if (decl.type === 'Identifier') {
        const declNode = declarations.get(decl.name);
        if (declNode) {
          const info = analyzeNode('default', declNode, fileRelative, declNode.loc || node.loc);
          info.localName = decl.name;
          fileExports.push(info);
        }
      } else {
        const info = analyzeNode('default', decl, fileRelative, node.loc);
        fileExports.push(info);
      }
    }

    // export * from './file'
    if (node.type === 'ExportAllDeclaration' && node.source) {
      const targetPath = resolveImportPath(node.source.value, resolved, sourceRoot);
      if (targetPath) {
        try {
          collectFileExports(targetPath, sourceRoot, exports, parsed, visiting);
        } catch (err) {
          if (process.env.JSDOC_DEBUG) {
            console.warn('[process-ast] Failed to follow re-export ' + node.source.value + ' from ' + filePath + ': ' + err.message);
          }
        }
      }
    }

    // export { a, b } from './file'
    if (node.type === 'ExportNamedDeclaration' && node.source && node.specifiers.length > 0) {
      const targetPath = resolveImportPath(node.source.value, resolved, sourceRoot);
      if (targetPath) {
        try {
          // Parse the target and extract specific exports
          collectFileExports(targetPath, sourceRoot, exports, parsed, visiting);
        } catch (err) {
          if (process.env.JSDOC_DEBUG) {
            console.warn('[process-ast] Failed to follow re-export from ' + filePath + ': ' + err.message);
          }
        }
      }
    }
  }

  parsed.set(resolved, fileExports);
  mergeFileExports(fileExports, exports);
  visiting.delete(resolved);
}

/**
 * Merge file-level exports into the global export map.
 * Later files overwrite earlier ones (barrel files win).
 */
function mergeFileExports(fileExports, globalExports) {
  for (const info of fileExports) {
    if (info.name === 'default') continue; // Skip default exports in global map
    const existing = globalExports.get(info.name);
    if (!existing || info.children.length > existing.children.length) {
      globalExports.set(info.name, info);
    }
  }
}

/**
 * Analyze an AST node to determine its export type and children.
 */
function analyzeNode(name, node, file, loc) {
  const line = loc ? loc.start ? loc.start.line : loc.line : null;

  if (!node) {
    return { name, file, line, type: 'unknown', children: [] };
  }

  // Unwrap assignment expressions: const x = something
  var target = node;
  if (target.type === 'AssignmentExpression') {
    target = target.right;
  }

  switch (target.type) {
    case 'ObjectExpression':
      return {
        name, file, line,
        type: 'object',
        children: extractObjectChildren(target),
      };

    case 'FunctionExpression':
    case 'ArrowFunctionExpression':
      return {
        name, file, line,
        type: 'function',
        children: extractFunctionParams(target),
      };

    case 'FunctionDeclaration':
      return {
        name, file, line,
        type: 'function',
        children: extractFunctionParams(target),
      };

    case 'ClassExpression':
    case 'ClassDeclaration':
      return {
        name, file, line,
        type: 'class',
        children: extractClassMembers(target),
      };

    case 'NewExpression':
      // new Patch(target, { ... }) — extract the second arg as children
      return {
        name, file, line,
        type: 'instance',
        children: extractNewExpressionChildren(target),
      };

    case 'CallExpression':
      // Factory calls — try to extract children from arguments
      return {
        name, file, line,
        type: 'call-result',
        children: extractCallChildren(target),
      };

    default:
      return {
        name, file, line,
        type: inferLiteralType(target),
        children: [],
      };
  }
}

/**
 * Extract children from an ObjectExpression (const x = { a() {}, b: 1 }).
 */
function extractObjectChildren(node) {
  var children = [];

  for (const prop of node.properties) {
    if (prop.type === 'SpreadElement') continue;

    var propName = null;
    if (prop.key) {
      if (prop.key.type === 'Identifier') propName = prop.key.name;
      else if (prop.key.type === 'StringLiteral') propName = prop.key.value;
      else if (prop.key.type === 'NumericLiteral') propName = String(prop.key.value);
    }

    if (!propName) continue;

    var kind = 'property';
    if (prop.type === 'ObjectMethod' || (prop.value && (prop.value.type === 'FunctionExpression' || prop.value.type === 'ArrowFunctionExpression'))) {
      kind = 'function';
    }

    children.push({
      name: propName,
      type: prop.value ? getNodeType(prop.value) : 'method',
      line: prop.loc ? prop.loc.start.line : null,
      kind: kind,
    });
  }

  return children;
}

/**
 * Extract class members (methods and properties).
 */
function extractClassMembers(node) {
  var children = [];
  if (!node.body || !node.body.body) return children;

  for (const member of node.body.body) {
    if (member.type === 'ClassMethod' || member.type === 'ClassPrivateMethod') {
      var methodName = null;
      if (member.key) {
        if (member.key.type === 'Identifier') methodName = member.key.name;
        else if (member.key.type === 'StringLiteral') methodName = member.key.value;
      }
      if (!methodName) continue;

      children.push({
        name: methodName,
        type: member.kind === 'get' ? 'getter' : member.kind === 'set' ? 'setter' : 'method',
        line: member.loc ? member.loc.start.line : null,
        kind: 'function',
        static: !!member.static,
        constructorMethod: member.kind === 'constructor',
      });
    }

    if (member.type === 'ClassProperty' || member.type === 'ClassPrivateProperty') {
      var propName = null;
      if (member.key) {
        if (member.key.type === 'Identifier') propName = member.key.name;
        else if (member.key.type === 'StringLiteral') propName = member.key.value;
      }
      if (!propName) continue;

      children.push({
        name: propName,
        type: member.value ? getNodeType(member.value) : 'property',
        line: member.loc ? member.loc.start.line : null,
        kind: 'property',
        static: !!member.static,
      });
    }
  }

  return children;
}

/**
 * Extract children from new SomeClass(target, { methods... }) calls.
 * Common pattern: new Patch(Array, { method1() {}, method2() {} })
 */
function extractNewExpressionChildren(node) {
  var children = [];
  if (!node.arguments) return children;

  for (const arg of node.arguments) {
    if (arg.type === 'ObjectExpression') {
      children = children.concat(extractObjectChildren(arg));
    }
  }

  return children;
}

/**
 * Extract children from call expression arguments.
 */
function extractCallChildren(node) {
  var children = [];
  if (!node.arguments) return children;

  for (const arg of node.arguments) {
    if (arg.type === 'ObjectExpression') {
      children = children.concat(extractObjectChildren(arg));
    }
  }

  return children;
}

/**
 * Extract function parameters (for signature info).
 */
function extractFunctionParams(node) {
  // We don't extract params as children — params come from JSDoc
  // Instead return empty; children will be filled by property attachments
  return [];
}

/**
 * Collect all top-level variable/function/class declarations.
 */
function collectDeclarations(node, declarations) {
  if (node.type === 'VariableDeclaration') {
    for (const decl of node.declarations) {
      if (decl.id && decl.id.type === 'Identifier') {
        declarations.set(decl.id.name, decl.init || decl);
      }
    }
  }
  if (node.type === 'FunctionDeclaration' && node.id) {
    declarations.set(node.id.name, node);
  }
  if (node.type === 'ClassDeclaration' && node.id) {
    declarations.set(node.id.name, node);
  }

  // Also handle: export const/function/class
  if (node.type === 'ExportNamedDeclaration' && node.declaration) {
    collectDeclarations(node.declaration, declarations);
  }
  if (node.type === 'ExportDefaultDeclaration' && node.declaration) {
    if (node.declaration.type === 'FunctionDeclaration' && node.declaration.id) {
      declarations.set(node.declaration.id.name, node.declaration);
    }
    if (node.declaration.type === 'ClassDeclaration' && node.declaration.id) {
      declarations.set(node.declaration.id.name, node.declaration);
    }
  }
}

/**
 * Detect Object.assign(target, { props }) and target.prop = value patterns.
 */
function collectPropertyAttachments(node, declarations, attachments) {
  // Handle ExpressionStatement wrappers
  var expr = node;
  if (node.type === 'ExpressionStatement') {
    expr = node.expression;
  }

  if (!expr || !expr.type) return;

  // Object.assign(target, { prop1, prop2 })
  if (expr.type === 'CallExpression' &&
      expr.callee && expr.callee.type === 'MemberExpression' &&
      expr.callee.object && expr.callee.object.name === 'Object' &&
      expr.callee.property && expr.callee.property.name === 'assign' &&
      expr.arguments && expr.arguments.length >= 2) {

    var targetName = null;
    var firstArg = expr.arguments[0];
    if (firstArg.type === 'Identifier') {
      targetName = firstArg.name;
    }

    if (targetName) {
      if (!attachments.has(targetName)) attachments.set(targetName, []);
      for (var i = 1; i < expr.arguments.length; i++) {
        var arg = expr.arguments[i];
        if (arg.type === 'ObjectExpression') {
          for (const prop of arg.properties) {
            if (prop.type === 'SpreadElement') continue;
            var propName = null;
            if (prop.key && prop.key.type === 'Identifier') propName = prop.key.name;
            else if (prop.key && prop.key.type === 'StringLiteral') propName = prop.key.value;
            if (propName) {
              attachments.get(targetName).push({
                propName: propName,
                node: prop.value || prop,
              });
            }
          }
        }
      }
    }
  }

  // target.prop = value
  if (expr.type === 'AssignmentExpression' &&
      expr.left && expr.left.type === 'MemberExpression' &&
      expr.left.object && expr.left.object.type === 'Identifier' &&
      expr.left.property) {

    var objName = expr.left.object.name;
    var propKey = null;
    if (expr.left.property.type === 'Identifier') propKey = expr.left.property.name;
    else if (expr.left.property.type === 'StringLiteral') propKey = expr.left.property.value;

    if (objName && propKey && declarations.has(objName)) {
      if (!attachments.has(objName)) attachments.set(objName, []);
      attachments.get(objName).push({
        propName: propKey,
        node: expr.right,
      });
    }
  }
}

/**
 * Attach discovered property attachments to an export info.
 */
function attachProperties(info, propertyAttachments) {
  var atts = propertyAttachments.get(info.name);
  if (!atts || atts.length === 0) return;

  for (const att of atts) {
    if (!info.children.some(c => c.name === att.propName)) {
      info.children.push({
        name: att.propName,
        type: getNodeType(att.node),
        line: att.node.loc ? att.node.loc.start.line : null,
        kind: inferChildKind(att.node),
      });
    }
  }
}

// ── Path resolution ──────────────────────────────────────────

/**
 * Resolve an import/export path relative to the importing file.
 */
function resolveImportPath(specifier, fromFile, sourceRoot) {
  // Only resolve relative paths
  if (!specifier.startsWith('.')) return null;

  const dir = path.dirname(fromFile);
  const candidate = path.resolve(dir, specifier);

  // Try exact path first
  if (fileExists(candidate)) return candidate;

  // Try with extensions
  for (const ext of EXTENSIONS) {
    if (fileExists(candidate + ext)) return candidate + ext;
  }

  // Try as directory with index file
  for (const ext of EXTENSIONS) {
    var indexPath = path.join(candidate, 'index' + ext);
    if (fileExists(indexPath)) return indexPath;
  }

  return null;
}

function fileExists(p) {
  try {
    return fs.statSync(p).isFile();
  } catch (_) {
    return false;
  }
}

// ── File discovery ───────────────────────────────────────────

function findFiles(dir) {
  const results = [];
  walkDir(dir, results);
  return results;
}

function walkDir(dir, results) {
  var entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (_) {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip node_modules, hidden dirs, dist, build
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist' ||
          entry.name === 'build' || entry.name.startsWith('.') ||
          entry.name === 'test' || entry.name === 'tests' ||
          entry.name === '__tests__' || entry.name === 'coverage') {
        continue;
      }
      walkDir(fullPath, results);
    } else if (entry.isFile() && EXTENSIONS.some(ext => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
}

// ── Helpers ──────────────────────────────────────────────────

function getNodeType(node) {
  if (!node) return 'unknown';
  switch (node.type) {
    case 'FunctionExpression':
    case 'ArrowFunctionExpression':
    case 'FunctionDeclaration':
      return 'function';
    case 'ObjectExpression':
      return 'object';
    case 'ClassExpression':
    case 'ClassDeclaration':
      return 'class';
    case 'StringLiteral':
      return 'string';
    case 'NumericLiteral':
      return 'number';
    case 'BooleanLiteral':
      return 'boolean';
    case 'NullLiteral':
      return 'null';
    case 'ArrayExpression':
      return 'array';
    case 'NewExpression':
      return 'instance';
    default:
      return 'unknown';
  }
}

function inferChildKind(node) {
  if (!node) return 'property';
  var t = node.type;
  if (t === 'FunctionExpression' || t === 'ArrowFunctionExpression' ||
      t === 'FunctionDeclaration' || t === 'ObjectMethod') {
    return 'function';
  }
  return 'property';
}

function inferLiteralType(node) {
  if (!node) return 'unknown';
  switch (node.type) {
    case 'StringLiteral': return 'string';
    case 'NumericLiteral': return 'number';
    case 'BooleanLiteral': return 'boolean';
    case 'NullLiteral': return 'null';
    case 'ArrayExpression': return 'array';
    case 'TemplateLiteral': return 'string';
    case 'Identifier':
      if (node.name === 'undefined') return 'undefined';
      return 'reference';
    default: return 'unknown';
  }
}

module.exports = { analyzeExports };
