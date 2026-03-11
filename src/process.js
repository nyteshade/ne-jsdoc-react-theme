'use strict';

/**
 * Three-layer processing pipeline for JSDoc data.
 *
 * Layer 1: JSDoc TaffyDB baseline — doclet descriptions, params, types
 * Layer 2: Structure inference — parent-child assembly, kind correction,
 *          orphan rescue, class rescue, deduplication
 * Layer 3: AST pass — deep export following, ObjectExpression child
 *          discovery, property attachment on functions
 *
 * Each layer is additive and safe to skip. The output is a uniform
 * content model where every documented export is a page with the
 * same shape (DocEntry-compatible).
 */

const { analyzeExports } = require('./process-ast');

function processDoclets(data, opts) {
  opts = opts || {};
  const sourceRoot = opts.sourceRoot || null;

  const nav = [];
  const pages = {};  // slug → page object (keyed for O(1) lookup)
  const seen = new Set();
  var claimedAsChild = new Set();

  // ── Layer 1: Extract all doclets from TaffyDB ────────────

  // Filter out string-keyed property artifacts
  function isQuotedArtifact(d) {
    if (d.longname && (d.longname.charAt(0) === '"' || d.longname.charAt(0) === "'")) return true;
    if (d.memberof && (d.memberof.charAt(0) === '"' || d.memberof.charAt(0) === "'")) return true;
    return false;
  }

  var allDoclets = data().get().filter(function (d) { return !isQuotedArtifact(d); });

  function query(filter) {
    return data(filter).get().filter(function (d) { return !isQuotedArtifact(d); });
  }

  var packageArr = query({ kind: 'package' });
  var packageDoclet = packageArr.length ? packageArr[0] : null;

  // ── Layer 3: AST pass (best-effort) ──────────────────────

  var astExports = new Map();
  if (sourceRoot) {
    try {
      astExports = analyzeExports(sourceRoot);
    } catch (err) {
      if (process.env.JSDOC_DEBUG) {
        console.warn('[jsdoc-react-theme] AST pass failed, falling back to JSDoc only:', err.message);
      }
    }
  }

  // ── Layer 2+3: Build pages ───────────────────────────────

  // Home page
  pages['home'] = { slug: 'home', kind: 'home', name: 'Home', title: 'Home' };

  // Collect all descendant doclets for a given parent longname
  function collectDescendants(parentLongname) {
    var results = [];
    var prefix1 = parentLongname + '#';
    var prefix2 = parentLongname + '~';
    var prefix3 = parentLongname + '.';

    for (var i = 0; i < allDoclets.length; i++) {
      var d = allDoclets[i];
      if (!d.memberof) continue;
      if (d.memberof === parentLongname ||
          d.memberof.startsWith(prefix1) ||
          d.memberof.startsWith(prefix2) ||
          d.memberof.startsWith(prefix3)) {
        results.push(d);
      }
    }
    return results;
  }

  // Build a uniform page object from a doclet and its children
  function buildPage(doclet, children, kindOverride) {
    // Filter out phantoms from children
    children = children
      .filter(function (c) { return c.longname !== doclet.longname; })
      .filter(function (c) { return !(c.kind === 'class' && c.scope === 'instance'); })
      .filter(function (c) { return c.name !== 'constructor' || c.kind !== 'function'; });

    // Deduplicate children by name. Multiple doclets with the same name but
    // different longnames can accumulate (e.g., collectDescendants finds
    // 'Parent.descriptor' and Phase 1 claiming adds standalone 'descriptor').
    // Prefer the entry with a description.
    var childByName = new Map();
    for (var ci = 0; ci < children.length; ci++) {
      var child = children[ci];
      var existing = childByName.get(child.name);
      if (!existing || (child.description && !existing.description)) {
        childByName.set(child.name, child);
      }
    }
    children = Array.from(childByName.values());

    var kind = kindOverride || inferKind(doclet, children);
    var slug = sanitize(doclet.longname);

    // Build signature for callable items
    var signature = null;
    if (kind === 'function' || (doclet.params && doclet.params.length > 0) || (doclet.returns && doclet.returns.length > 0)) {
      signature = {
        params: (doclet.params || []).map(serializeParam),
        returns: (doclet.returns || []).map(serializeReturn),
        exceptions: (doclet.exceptions || []).map(serializeReturn),
        async: !!doclet.async,
        generator: !!doclet.generator,
      };
    }

    // AST enrichment: merge AST-discovered children with JSDoc children
    var astInfo = astExports.get(doclet.name);
    if (astInfo && astInfo.children.length > 0) {
      children = mergeAstChildren(children, astInfo, doclet.longname);
      // Kind correction from AST — instances (new Patch/Extension) and objects
      // with children should be promoted to 'object' kind
      if (kind === 'constant' && (astInfo.type === 'object' || astInfo.type === 'instance') && astInfo.children.length > 0) {
        kind = 'object';
      }
      if (kind === 'member' && (astInfo.type === 'object' || astInfo.type === 'instance') && astInfo.children.length > 0) {
        kind = 'object';
      }
    }

    return {
      slug: slug,
      name: doclet.name,
      kind: kind,
      title: doclet.name,
      source: doclet.meta
        ? { file: doclet.meta.shortpath || doclet.meta.filename || '', line: doclet.meta.lineno || null }
        : null,
      description: doclet.classdesc || doclet.description || '',
      signature: signature,
      augments: doclet.augments || [],
      implements: doclet.implements || [],
      deprecated: doclet.deprecated || null,
      examples: doclet.examples || [],
      see: doclet.see || [],
      since: doclet.since || null,
      access: doclet.access || null,
      readonly: !!doclet.readonly,
      defaultvalue: doclet.defaultvalue !== undefined ? String(doclet.defaultvalue) : null,
      type: doclet.type && doclet.type.names ? doclet.type.names : null,
      members: categorizeChildren(children, kind),
    };
  }

  // Build a member entry (child of a page)
  function buildMember(doclet) {
    var signature = null;
    if (doclet.kind === 'function' || (doclet.params && doclet.params.length > 0)) {
      signature = {
        params: (doclet.params || []).map(serializeParam),
        returns: (doclet.returns || []).map(serializeReturn),
        exceptions: (doclet.exceptions || []).map(serializeReturn),
        async: !!doclet.async,
        generator: !!doclet.generator,
      };
    }

    return {
      slug: null,
      name: doclet.name,
      kind: doclet.kind === 'member' ? 'property' : doclet.kind,
      title: doclet.name,
      source: doclet.meta
        ? { file: doclet.meta.shortpath || doclet.meta.filename || '', line: doclet.meta.lineno || null }
        : null,
      description: doclet.description || '',
      signature: signature,
      augments: doclet.augments || [],
      implements: [],
      deprecated: doclet.deprecated || null,
      examples: doclet.examples || [],
      see: doclet.see || [],
      since: doclet.since || null,
      access: doclet.access || null,
      readonly: !!doclet.readonly,
      defaultvalue: doclet.defaultvalue !== undefined ? String(doclet.defaultvalue) : null,
      type: doclet.type && doclet.type.names ? doclet.type.names : null,
      scope: doclet.scope || null,
      memberof: doclet.memberof || null,
      longname: doclet.longname || null,
      members: { classes: [], methods: [], staticMethods: [], properties: [], staticProperties: [], events: [], typedefs: [] },
    };
  }

  // Categorize children into member buckets.
  // For classes, scope matters (instance vs static).
  // For objects/functions/constants, everything is a direct member —
  // JSDoc marks them as "static" but they're really just properties/methods.
  function categorizeChildren(children, parentKind) {
    var isFn = function (c) { return c.kind === 'function'; };
    var isProp = function (c) { return c.kind === 'member' || c.kind === 'constant'; };
    var useScope = parentKind === 'class' || parentKind === 'interface' || parentKind === 'mixin';

    if (useScope) {
      return {
        classes: children.filter(function (c) { return c.kind === 'class'; }).map(buildMember),
        methods: children.filter(function (c) { return isFn(c) && (c.scope === 'instance' || c.scope === 'inner' || !c.scope); }).map(buildMember),
        staticMethods: children.filter(function (c) { return isFn(c) && c.scope === 'static'; }).map(buildMember),
        properties: children.filter(function (c) { return isProp(c) && (c.scope === 'instance' || c.scope === 'inner' || !c.scope); }).map(buildMember),
        staticProperties: children.filter(function (c) { return isProp(c) && c.scope === 'static'; }).map(buildMember),
        events: children.filter(function (c) { return c.kind === 'event'; }).map(buildMember),
        typedefs: children.filter(function (c) { return c.kind === 'typedef'; }).map(buildMember),
      };
    }

    // For non-class parents, all children are direct members
    return {
      classes: children.filter(function (c) { return c.kind === 'class'; }).map(buildMember),
      methods: children.filter(isFn).map(buildMember),
      staticMethods: [],
      properties: children.filter(isProp).map(buildMember),
      staticProperties: [],
      events: children.filter(function (c) { return c.kind === 'event'; }).map(buildMember),
      typedefs: children.filter(function (c) { return c.kind === 'typedef'; }).map(buildMember),
    };
  }

  // Merge AST-discovered children with JSDoc children
  function mergeAstChildren(jsdocChildren, astInfo, parentLongname) {
    var merged = jsdocChildren.slice();
    var existingNames = new Set(merged.map(function (c) { return c.name; }));

    // Find the shortpath for the parent's file from any real doclet in that file.
    // JSDoc's shortpath may differ from the AST's relative path, and the sources
    // map is keyed by shortpath. Without this, synthetic children can't open the
    // source viewer because their file path won't match the sources map key.
    var parentShortpath = null;
    if (astInfo.file) {
      var astBase = astInfo.file.split('/').pop();
      for (var s = 0; s < allDoclets.length; s++) {
        var dm = allDoclets[s].meta;
        if (dm && dm.shortpath) {
          var dBase = (dm.filename || dm.shortpath || '').split('/').pop();
          if (dBase === astBase) {
            parentShortpath = dm.shortpath;
            break;
          }
        }
      }
    }

    for (var i = 0; i < astInfo.children.length; i++) {
      var astChild = astInfo.children[i];
      if (existingNames.has(astChild.name)) continue;
      if (astChild.constructorMethod) continue; // Skip constructors

      // Look for a real JSDoc doclet with this name before creating a synthetic one.
      // Children may exist as standalone doclets that JSDoc didn't associate
      // via memberof (e.g., Object.assign'd properties, re-exported functions).
      var realDoclet = null;
      for (var k = 0; k < allDoclets.length; k++) {
        if (allDoclets[k].name === astChild.name && allDoclets[k].longname !== parentLongname) {
          // Prefer doclets with descriptions; accept first match otherwise
          if (!realDoclet || (allDoclets[k].description && !realDoclet.description)) {
            realDoclet = allDoclets[k];
          }
        }
      }

      if (realDoclet) {
        // Use the real doclet so descriptions, params, returns are preserved.
        // Mark it as claimed so it doesn't also get its own standalone page.
        claimedAsChild.add(realDoclet.longname);
        merged.push(realDoclet);
      } else {
        // Create a synthetic doclet for AST-discovered children.
        // Use parentShortpath if available so the source viewer can find the file.
        var syntheticMeta = null;
        if (astInfo.file) {
          syntheticMeta = {
            shortpath: parentShortpath || astInfo.file,
            filename: astInfo.file,
            lineno: astChild.line,
          };
        }
        merged.push({
          name: astChild.name,
          longname: parentLongname + '.' + astChild.name,
          kind: astChild.kind === 'function' ? 'function' : 'member',
          scope: astChild.static ? 'static' : 'instance',
          description: '',
          meta: syntheticMeta,
        });
      }
    }

    return merged;
  }

  // Infer kind from doclet + children
  function inferKind(doclet, children) {
    if (doclet.kind === 'class') return 'class';
    if (doclet.kind === 'interface') return 'interface';
    if (doclet.kind === 'namespace') return 'namespace';
    if (doclet.kind === 'mixin') return 'mixin';
    if (doclet.kind === 'typedef') return 'typedef';
    if (doclet.kind === 'event') return 'event';

    // AST-informed kind
    var astInfo = astExports.get(doclet.name);
    if (astInfo) {
      if (astInfo.type === 'class') return 'class';
      if (astInfo.type === 'function') return 'function';
      if (astInfo.type === 'object' && astInfo.children.length > 0) return 'object';
    }

    if (doclet.kind === 'function') return 'function';
    // const fn = function() {} is 'constant' in JSDoc but callable
    if (doclet.params && doclet.params.length > 0) return 'function';

    // Constants/members with children are objects
    if (children && children.length > 0) return 'object';

    if (doclet.kind === 'constant') return 'constant';
    if (doclet.kind === 'member') return 'property';

    return doclet.kind || 'unknown';
  }

  // ── Process classes ──────────────────────────────────────

  var allClasses = query({ kind: 'class' })
    .filter(function (c) { return c.scope !== 'instance'; });

  // Deduplicate: JSDoc creates multiple class doclets per class
  var classMap = new Map();
  for (var i = 0; i < allClasses.length; i++) {
    var cls = allClasses[i];
    if (!classMap.has(cls.longname)) {
      classMap.set(cls.longname, cls);
    }
  }

  var classNavGroup = { title: 'Classes', items: [] };
  for (var entry of classMap.values()) {
    if (seen.has(entry.longname)) continue;
    seen.add(entry.longname);

    var children = collectDescendants(entry.longname)
      .filter(function (c) { return !seen.has(c.longname); });
    for (var j = 0; j < children.length; j++) {
      seen.add(children[j].longname);
    }

    var page = buildPage(entry, children, 'class');
    pages[page.slug] = page;
    classNavGroup.items.push({ name: page.name, slug: page.slug });
  }
  if (classNavGroup.items.length > 0) {
    classNavGroup.items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    nav.push(classNavGroup);
  }

  // ── Process interfaces ───────────────────────────────────

  var interfaceNavGroup = processSimpleKind('interface', 'Interfaces');
  if (interfaceNavGroup) nav.push(interfaceNavGroup);

  // ── Process mixins ───────────────────────────────────────

  var mixinNavGroup = processSimpleKind('mixin', 'Mixins');
  if (mixinNavGroup) nav.push(mixinNavGroup);

  // ── Process namespaces ───────────────────────────────────

  var namespaceNavGroup = processSimpleKind('namespace', 'Namespaces');
  if (namespaceNavGroup) nav.push(namespaceNavGroup);

  // ── Process functions, constants, members ─────────────────
  // These are processed together to handle parent-child relationships
  // correctly (a constant can own function children, etc.)

  var remainingFunctions = query({ kind: 'function' })
    .filter(function (d) { return !seen.has(d.longname); });
  var remainingConstants = query({ kind: 'constant' })
    .filter(function (d) { return !seen.has(d.longname); });
  var remainingMembers = query({ kind: 'member' })
    .filter(function (d) { return !seen.has(d.longname) && d.kind !== 'package'; });

  // Pool of all remaining items
  var pool = new Map();
  var allRemaining = remainingFunctions.concat(remainingConstants).concat(remainingMembers);
  for (var k = 0; k < allRemaining.length; k++) {
    var d = allRemaining[k];
    if (!pool.has(d.longname) && !/[#~]/.test(d.longname)) {
      pool.set(d.longname, d);
    }
  }

  // Phase 1: Items with descendants get their own pages
  var parentPages = [];
  for (var _entry of pool.values()) {
    var longname = _entry.longname;
    if (/[#~]/.test(longname)) continue;

    var _children = collectDescendants(longname)
      .filter(function (c) { return c.longname !== longname && !seen.has(c.longname); })
      .filter(function (c) { return !(c.kind === 'class' && c.scope === 'instance'); });

    // Also check AST for children JSDoc didn't find
    var astInfo = astExports.get(_entry.name);
    var hasAstChildren = astInfo && astInfo.children.length > 0;

    if (_children.length > 0 || hasAstChildren) {
      parentPages.push({ item: _entry, children: _children });
      for (var m = 0; m < _children.length; m++) {
        claimedAsChild.add(_children[m].longname);
      }
      // Also claim pool items that match AST-discovered children.
      // These might exist as separate top-level doclets (e.g., `all` is both
      // a standalone function doclet AND a child of `has` via Object.assign).
      // Only claim if memberof points to this parent OR both are from the
      // same source file and the name matches an AST child.
      if (astInfo) {
        var astChildNames = new Set(astInfo.children.map(function (c) { return c.name; }));
        var parentFile = astInfo.file;
        for (var _poolItem of pool.values()) {
          if (_poolItem.longname === longname) continue;
          if (!astChildNames.has(_poolItem.name)) continue;
          // Match if memberof points to parent
          if (_poolItem.memberof === longname) {
            claimedAsChild.add(_poolItem.longname);
            // Add the real JSDoc doclet to children so its description/params are preserved.
            // Check by name (not just longname) to avoid duplicates when collectDescendants
            // already found a doclet with the same name but a different longname.
            if (!_children.some(function (c) { return c.name === _poolItem.name; })) {
              _children.push(_poolItem);
            }
            continue;
          }
          // Match if same source file (compare basenames since JSDoc
          // and AST may use different path prefixes)
          if (parentFile && _poolItem.meta) {
            var itemFile = _poolItem.meta.shortpath || _poolItem.meta.filename || '';
            var parentBase = parentFile.split('/').pop();
            var itemBase = itemFile.split('/').pop();
            if (parentBase && itemBase && parentBase === itemBase) {
              claimedAsChild.add(_poolItem.longname);
              if (!_children.some(function (c) { return c.name === _poolItem.name; })) {
                _children.push(_poolItem);
              }
            }
          }
        }
      }
    }
  }

  // Phase 2: Orphan groups — children whose parent was pruned
  var orphansByParent = {};
  for (var _d of pool.values()) {
    if (claimedAsChild.has(_d.longname)) continue;
    if (!_d.memberof) continue;
    if (pool.has(_d.memberof) || seen.has(_d.memberof)) continue;
    if (parentPages.some(function (p) { return p.item.longname === _d.memberof; })) continue;

    if (!orphansByParent[_d.memberof]) orphansByParent[_d.memberof] = [];
    orphansByParent[_d.memberof].push(_d);
  }

  for (var memberof in orphansByParent) {
    if (!Object.prototype.hasOwnProperty.call(orphansByParent, memberof)) continue;
    var orphans = orphansByParent[memberof];
    var parentName = shortParent(memberof) || memberof;
    var syntheticParent = {
      name: parentName,
      longname: memberof,
      kind: orphans.some(function (c) { return c.kind === 'function'; }) ? 'function' : 'constant',
      scope: 'global',
      description: '',
      meta: orphans[0].meta,
    };
    parentPages.push({ item: syntheticParent, children: orphans });
    for (var n = 0; n < orphans.length; n++) {
      claimedAsChild.add(orphans[n].longname);
    }
  }

  // Mark parents, children, and AST-claimed items as seen
  for (var p = 0; p < parentPages.length; p++) {
    seen.add(parentPages[p].item.longname);
    for (var q = 0; q < parentPages[p].children.length; q++) {
      seen.add(parentPages[p].children[q].longname);
    }
  }
  // Also mark all AST-claimed children as seen
  for (var claimed of claimedAsChild) {
    seen.add(claimed);
  }

  // Build parent pages
  var fnNavGroup = { title: 'Functions', items: [] };
  var constNavGroup = { title: 'Constants', items: [] };
  var objectNavGroup = { title: 'Objects', items: [] };

  for (var r = 0; r < parentPages.length; r++) {
    var pp = parentPages[r];
    var _page = buildPage(pp.item, pp.children);
    pages[_page.slug] = _page;

    var targetGroup;
    if (_page.kind === 'function') targetGroup = fnNavGroup;
    else if (_page.kind === 'object') targetGroup = objectNavGroup;
    else targetGroup = constNavGroup;

    targetGroup.items.push({ name: _page.name, slug: _page.slug });
  }

  // mergeAstChildren (called inside buildPage above) may have added
  // new items to claimedAsChild — sync them into seen before Phase 3
  for (var _claimed of claimedAsChild) {
    seen.add(_claimed);
  }

  // Phase 3: Leaf items — each gets its own page
  for (var _item of pool.values()) {
    if (seen.has(_item.longname)) continue;
    seen.add(_item.longname);

    var leafPage = buildPage(_item, []);
    pages[leafPage.slug] = leafPage;

    if (leafPage.kind === 'function') {
      fnNavGroup.items.push({ name: leafPage.name, slug: leafPage.slug });
    } else {
      constNavGroup.items.push({ name: leafPage.name, slug: leafPage.slug });
    }
  }

  // Phase 4: AST-only exports — create pages for exports the AST discovered
  // but JSDoc never created doclets for. These would otherwise be silently lost.
  for (var _astEntry of astExports.values()) {
    if (_astEntry.children.length === 0) continue;

    // Skip if we already have a page for this export
    var alreadyCovered = false;
    for (var _slug in pages) {
      if (Object.prototype.hasOwnProperty.call(pages, _slug) && pages[_slug].name === _astEntry.name) {
        alreadyCovered = true;
        break;
      }
    }
    if (alreadyCovered) continue;

    // Create a synthetic doclet for this AST-discovered export
    var syntheticDoclet = {
      name: _astEntry.name,
      longname: _astEntry.name,
      kind: 'constant',
      scope: 'global',
      description: '',
      meta: _astEntry.file ? {
        shortpath: _astEntry.file,
        filename: _astEntry.file,
        lineno: _astEntry.line,
      } : null,
    };

    // Look for a real JSDoc doclet with a matching name that might have a description
    for (var _di = 0; _di < allDoclets.length; _di++) {
      var _dd = allDoclets[_di];
      if (_dd.name === _astEntry.name && _dd.description) {
        syntheticDoclet.description = _dd.classdesc || _dd.description;
        if (_dd.meta) syntheticDoclet.meta = _dd.meta;
        break;
      }
    }

    var _synPage = buildPage(syntheticDoclet, []);
    pages[_synPage.slug] = _synPage;

    if (_synPage.kind === 'function') {
      fnNavGroup.items.push({ name: _synPage.name, slug: _synPage.slug });
    } else if (_synPage.kind === 'object') {
      objectNavGroup.items.push({ name: _synPage.name, slug: _synPage.slug });
    } else {
      constNavGroup.items.push({ name: _synPage.name, slug: _synPage.slug });
    }
  }

  // Add non-empty nav groups
  if (fnNavGroup.items.length > 0) {
    fnNavGroup.items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    nav.push(fnNavGroup);
  }
  if (objectNavGroup.items.length > 0) {
    objectNavGroup.items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    nav.push(objectNavGroup);
  }
  if (constNavGroup.items.length > 0) {
    constNavGroup.items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    nav.push(constNavGroup);
  }

  // ── Process typedefs ─────────────────────────────────────

  var allTypedefs = query({ kind: 'typedef' })
    .filter(function (d) { return !seen.has(d.longname); });

  if (allTypedefs.length > 0) {
    var typeNavGroup = { title: 'Type Definitions', items: [] };
    for (var t = 0; t < allTypedefs.length; t++) {
      seen.add(allTypedefs[t].longname);
      var typePage = buildPage(allTypedefs[t], []);
      pages[typePage.slug] = typePage;
      typeNavGroup.items.push({ name: typePage.name, slug: typePage.slug });
    }
    typeNavGroup.items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    nav.push(typeNavGroup);
  }

  // ── Process events ───────────────────────────────────────

  var allEvents = query({ kind: 'event' })
    .filter(function (d) { return !seen.has(d.longname); });

  if (allEvents.length > 0) {
    var eventNavGroup = { title: 'Events', items: [] };
    for (var e = 0; e < allEvents.length; e++) {
      seen.add(allEvents[e].longname);
      var eventPage = buildPage(allEvents[e], []);
      pages[eventPage.slug] = eventPage;
      eventNavGroup.items.push({ name: eventPage.name, slug: eventPage.slug });
    }
    eventNavGroup.items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    nav.push(eventNavGroup);
  }

  // Helper: process interfaces, mixins, namespaces
  function processSimpleKind(kind, groupTitle) {
    var items = query({ kind: kind })
      .filter(function (d) { return !seen.has(d.longname) && d.scope !== 'instance'; });

    // Deduplicate
    var itemMap = new Map();
    for (var i = 0; i < items.length; i++) {
      if (!itemMap.has(items[i].longname)) {
        itemMap.set(items[i].longname, items[i]);
      }
    }

    if (itemMap.size === 0) return null;

    var navGroup = { title: groupTitle, items: [] };
    for (var item of itemMap.values()) {
      seen.add(item.longname);
      var ch = collectDescendants(item.longname)
        .filter(function (c) { return !seen.has(c.longname) && c.longname !== item.longname; });
      for (var j = 0; j < ch.length; j++) seen.add(ch[j].longname);

      var pg = buildPage(item, ch);
      pages[pg.slug] = pg;
      navGroup.items.push({ name: pg.name, slug: pg.slug });
    }
    navGroup.items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    return navGroup;
  }

  return { pages: pages, nav: nav, packageInfo: packageDoclet };
}

// ── Helpers ────────────────────────────────────────────────

function shortParent(memberof) {
  var name = memberof.replace(/^module:/, '');
  var sep = name.search(/[#~.]/);
  if (sep > 0) name = name.substring(0, sep);
  return name;
}

function sanitize(longname) {
  return longname
    .replace(/^module:/, 'module-')
    .replace(/[~#.]/g, '-')
    .replace(/[^a-zA-Z0-9_-]/g, '_');
}

function serializeParam(p) {
  return {
    name: p.name,
    type: p.type && p.type.names ? p.type.names : null,
    description: p.description || '',
    optional: !!p.optional,
    nullable: !!p.nullable,
    variable: !!p.variable,
    defaultvalue: p.defaultvalue !== undefined ? String(p.defaultvalue) : null,
  };
}

function serializeReturn(r) {
  return {
    type: r.type && r.type.names ? r.type.names : null,
    description: r.description || '',
  };
}

module.exports = { processDoclets };
