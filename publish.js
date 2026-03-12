'use strict';

const path = require('path');
const fs = require('fs');
const helper = require('jsdoc/util/templateHelper');
const { processDoclets } = require('./src/process');

exports.publish = function (taffyData, opts) {
  const outDir = path.normalize(opts.destination);
  fs.mkdirSync(outDir, { recursive: true });

  // Determine source root for AST pass
  const sourceRoot = findSourceRoot(opts, taffyData);

  // Mark undocumented classes as documented if they have documented members.
  // JSDoc prunes classes without a JSDoc comment on the class line itself,
  // even when their methods and properties are fully documented.
  const undocClasses = taffyData({ kind: 'class', undocumented: true }).get();
  for (const cls of undocClasses) {
    const hasMembers = taffyData({ memberof: cls.longname }).get().length > 0;
    if (hasMembers) {
      delete cls.undocumented;
      cls.comment = cls.comment || '';
    }
  }

  // Prune undocumented, sort
  const data = helper.prune(taffyData);
  data.sort('longname, version, since');
  helper.addEventListeners(data);

  // First pass to register links for {@link} resolution
  const processOpts = { sourceRoot: sourceRoot };
  const initial = processDoclets(data, processOpts);
  for (const slug of Object.keys(initial.pages)) {
    const page = initial.pages[slug];
    if (page.slug && page.slug !== 'home') {
      helper.registerLink(page.name, '#' + page.slug);
    }
  }

  // Resolve {@link} tags in all text fields
  data().each(function (doclet) {
    ['description', 'classdesc', 'summary'].forEach(function (field) {
      if (doclet[field]) {
        doclet[field] = helper.resolveLinks(doclet[field]);
      }
    });
    if (doclet.params) {
      doclet.params.forEach(function (p) {
        if (p.description) p.description = helper.resolveLinks(p.description);
      });
    }
    if (doclet.properties) {
      doclet.properties.forEach(function (p) {
        if (p.description) p.description = helper.resolveLinks(p.description);
      });
    }
    if (doclet.returns) {
      doclet.returns.filter(Boolean).forEach(function (r) {
        if (r.description) r.description = helper.resolveLinks(r.description);
      });
    }
    if (doclet.exceptions) {
      doclet.exceptions.filter(Boolean).forEach(function (e) {
        if (e.description) e.description = helper.resolveLinks(e.description);
      });
    }
    if (doclet.see) {
      doclet.see = doclet.see.map(function (s) { return helper.resolveLinks(s); });
    }
    if (doclet.examples) {
      doclet.examples = doclet.examples.map(function (e) { return helper.resolveLinks(e); });
    }
  });

  // Read and render README
  let readme = '';
  if (opts.readme) {
    const { Marked } = require('marked');
    const { markedHighlight } = require('marked-highlight');
    const hljs = require('highlight.js');

    const markedInstance = new Marked(
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
          }
          return hljs.highlightAuto(code).value;
        },
      })
    );

    if (opts.readme.startsWith('<')) {
      readme = opts.readme;
    } else if (fs.existsSync(opts.readme)) {
      readme = markedInstance.parse(fs.readFileSync(opts.readme, 'utf8'));
    }
  }

  // Re-process after link resolution to get final data
  const processed = processDoclets(data, processOpts);

  // Collect and highlight source files
  const hljs = require('highlight.js');
  const sources = {};
  const sourcePathMap = {}; // shortpath → absolute path
  data().each(function (doclet) {
    if (doclet.meta && doclet.meta.path && doclet.meta.filename) {
      var shortpath = doclet.meta.shortpath || doclet.meta.filename;
      if (!sourcePathMap[shortpath]) {
        sourcePathMap[shortpath] = path.join(doclet.meta.path, doclet.meta.filename);
      }
    }
  });
  for (var shortpath in sourcePathMap) {
    if (!Object.prototype.hasOwnProperty.call(sourcePathMap, shortpath)) continue;
    try {
      var src = fs.readFileSync(sourcePathMap[shortpath], 'utf8');
      var highlighted = hljs.highlightAuto(src).value;
      sources[shortpath] = highlighted;
    } catch (_) {}
  }

  // Read theme version from package.json
  let themeVersion = null;
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    themeVersion = pkg.version;
  } catch (_) {}

  const rawData = {
    themeVersion: themeVersion,
    generatedAt: new Date().toISOString(),
    packageInfo: processed.packageInfo
      ? { name: processed.packageInfo.name, version: processed.packageInfo.version }
      : null,
    nav: processed.nav,
    pages: processed.pages,
    readme: readme,
    sources: sources,
  };

  // Read doc-model.js source for inlining into content.js
  const docModelSource = fs.readFileSync(path.join(__dirname, 'src', 'doc-model.js'), 'utf8');

  // Generate content.js
  const contentJs = `;(function() {
${docModelSource}

var raw = ${JSON.stringify(rawData, function(key, value) {
  return typeof value === 'bigint' ? value.toString() : value;
})};

globalThis[Symbol.for('jsdoc.DocEntry')] = DocEntry;
globalThis[Symbol.for('jsdoc.DocContent')] = DocContent;
globalThis[Symbol.for('jsdoc.content')] = new DocContent(raw);
})();
`;

  // Copy bundled React app assets
  const distDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(path.join(distDir, 'index.js'))) {
    console.error(
      'Error: dist/ not found. Run "npm run build" in the jsdoc-react-theme directory first.'
    );
    process.exit(1);
  }

  for (const file of fs.readdirSync(distDir)) {
    fs.copyFileSync(path.join(distDir, file), path.join(outDir, file));
  }

  // Write content.js
  fs.writeFileSync(path.join(outDir, 'content.js'), contentJs);

  // Generate index.html
  const projectName = processed.packageInfo ? processed.packageInfo.name || 'API Docs' : 'API Docs';
  const cssLink = fs.existsSync(path.join(distDir, 'index.css'))
    ? '<link rel="stylesheet" href="index.css">'
    : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(projectName)} — Documentation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  ${cssLink}
</head>
<body>
  <div id="root"></div>
  <script src="content.js"></script>
  <script src="index.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
};

/**
 * Determine the source root directory from JSDoc options.
 * This is used for the AST pass to discover exports.
 */
function findSourceRoot(opts, taffyData) {
  // JSDoc stores source includes in opts._
  if (opts._ && opts._.length > 0) {
    const sources = opts._.map(function (s) { return path.resolve(s); });
    if (sources.length === 1) {
      try {
        const stat = fs.statSync(sources[0]);
        return stat.isDirectory() ? sources[0] : path.dirname(sources[0]);
      } catch (_) {}
    }
    return commonPrefix(sources);
  }

  // Try to get from the template config
  if (opts.configure) {
    try {
      const config = JSON.parse(fs.readFileSync(opts.configure, 'utf8'));
      if (config.source && config.source.include && config.source.include.length > 0) {
        const sources = config.source.include.map(function (s) { return path.resolve(s); });
        if (sources.length === 1) {
          try {
            return fs.statSync(sources[0]).isDirectory() ? sources[0] : path.dirname(sources[0]);
          } catch (_) {
            return sources[0];
          }
        }
        return commonPrefix(sources);
      }
    } catch (_) {}
  }

  // Fallback: infer from doclet source file paths
  if (taffyData) {
    const allPaths = [];
    taffyData().each(function (d) {
      if (d.meta && d.meta.path) allPaths.push(d.meta.path);
    });
    if (allPaths.length > 0) {
      const unique = [...new Set(allPaths)];
      return commonPrefix(unique);
    }
  }

  return null;
}

function commonPrefix(paths) {
  if (paths.length === 0) return null;
  var prefix = paths[0];
  for (var i = 1; i < paths.length; i++) {
    while (paths[i].indexOf(prefix) !== 0) {
      prefix = path.dirname(prefix);
    }
  }
  return prefix;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
