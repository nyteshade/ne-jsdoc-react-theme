/**
 * DocEntry and DocContent — the documentation data model.
 *
 * This file is inlined into the generated content.js output.
 * It must be self-contained (no imports) and ES5-compatible
 * so it works in any browser without transpilation.
 *
 * DocEntry wraps every documented item (pages and members alike).
 * DocContent wraps the entire documentation set and provides
 * query methods over it.
 */

/* eslint-disable no-var */
/* istanbul ignore file */

function DocEntry(data, parent) {
  var self = this;
  var key;

  // Copy all data properties onto this instance
  for (key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key) && key !== 'members') {
      self[key] = data[key];
    }
  }

  // Parent back-reference (not enumerable to avoid circular JSON issues)
  Object.defineProperty(self, 'parent', {
    value: parent || null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  // Recursively wrap members as DocEntry instances
  var rawMembers = data.members || {};
  var members = {};
  var categories = [
    'classes', 'methods', 'staticMethods',
    'properties', 'staticProperties',
    'events', 'typedefs'
  ];

  for (var i = 0; i < categories.length; i++) {
    var cat = categories[i];
    var items = rawMembers[cat] || [];
    members[cat] = [];
    for (var j = 0; j < items.length; j++) {
      members[cat].push(new DocEntry(items[j], self));
    }
  }

  self.members = members;
}

/** All members flattened into a single array */
Object.defineProperty(DocEntry.prototype, 'allMembers', {
  get: function () {
    var result = [];
    var members = this.members || {};
    var keys = Object.keys(members);
    for (var i = 0; i < keys.length; i++) {
      var arr = members[keys[i]];
      for (var j = 0; j < arr.length; j++) {
        result.push(arr[j]);
      }
    }
    return result;
  },
  enumerable: true,
  configurable: true,
});

/** Whether this entry is callable (has a function signature) */
Object.defineProperty(DocEntry.prototype, 'isCallable', {
  get: function () {
    return this.signature !== null && this.signature !== undefined;
  },
  enumerable: true,
  configurable: true,
});

/** Whether this entry has any child members */
Object.defineProperty(DocEntry.prototype, 'hasMembers', {
  get: function () {
    return this.allMembers.length > 0;
  },
  enumerable: true,
  configurable: true,
});

/**
 * Find a member by name, searching deeply through all
 * nested members.
 *
 * @param {string} name - The member name to find.
 * @returns {DocEntry|null} The matching entry, or null.
 */
DocEntry.prototype.find = function find(name) {
  var members = this.allMembers;
  for (var i = 0; i < members.length; i++) {
    if (members[i].name === name) return members[i];
    var deep = members[i].find(name);
    if (deep) return deep;
  }
  return null;
};

/**
 * Return all members matching a given kind.
 *
 * @param {string} kind - The kind to filter by (e.g., 'function', 'member').
 * @returns {DocEntry[]}
 */
DocEntry.prototype.membersByKind = function membersByKind(kind) {
  return this.allMembers.filter(function (m) { return m.kind === kind; });
};

/**
 * Walk up the parent chain and return the ancestry as an array,
 * starting from the root and ending at this entry.
 *
 * @returns {DocEntry[]}
 */
DocEntry.prototype.ancestry = function ancestry() {
  var chain = [this];
  var current = this;
  while (current.parent) {
    chain.unshift(current.parent);
    current = current.parent;
  }
  return chain;
};

// ──────────────────────────────────────────────────────────────

function DocContent(raw) {
  this.themeVersion = raw.themeVersion || null;
  this.generatedAt = raw.generatedAt || null;
  this.packageInfo = raw.packageInfo || null;
  this.readme = raw.readme || '';
  this.nav = raw.nav || [];

  // Pre-highlighted source files
  this.sources = raw.sources || {};

  // Wrap every page in DocEntry
  this.pages = {};
  var rawPages = raw.pages || {};
  var slugs = Object.keys(rawPages);
  for (var i = 0; i < slugs.length; i++) {
    this.pages[slugs[i]] = new DocEntry(rawPages[slugs[i]], null);
  }
}

/**
 * Get a page by slug.
 *
 * @param {string} slug
 * @returns {DocEntry|null}
 */
DocContent.prototype.page = function page(slug) {
  return this.pages[slug] || null;
};

/**
 * Get pre-highlighted source HTML for a file.
 *
 * @param {string} file - The source file short path.
 * @returns {string|null} The highlighted HTML, or null.
 */
DocContent.prototype.source = function source(file) {
  if (!file) return null;

  // Exact match
  if (this.sources[file]) return this.sources[file];

  // Fallback: match by basename or suffix (handles path prefix mismatches
  // between AST-relative paths and JSDoc shortpaths)
  var keys = Object.keys(this.sources);
  var fileLower = file.toLowerCase();
  var sep = file.lastIndexOf('/');
  var basename = sep >= 0 ? file.substring(sep + 1) : file;

  // Try suffix match (e.g., "descriptor.utils.js" matches "utils/descriptor.utils.js")
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase().endsWith(fileLower) || fileLower.endsWith(keys[i].toLowerCase())) {
      return this.sources[keys[i]];
    }
  }

  // Try basename match (last resort)
  var basenameLower = basename.toLowerCase();
  for (var j = 0; j < keys.length; j++) {
    var keySep = keys[j].lastIndexOf('/');
    var keyBase = keySep >= 0 ? keys[j].substring(keySep + 1) : keys[j];
    if (keyBase.toLowerCase() === basenameLower) {
      return this.sources[keys[j]];
    }
  }

  return null;
};

/**
 * Return all available source file paths.
 *
 * @returns {string[]}
 */
DocContent.prototype.sourceFiles = function sourceFiles() {
  return Object.keys(this.sources);
};

/**
 * Search across all pages and their members by name or description.
 *
 * @param {string} query - The search string.
 * @returns {{ entry: DocEntry, pageSlug: string }[]}
 */
DocContent.prototype.search = function search(query) {
  var q = query.toLowerCase();
  var results = [];
  var slugs = Object.keys(this.pages);

  for (var i = 0; i < slugs.length; i++) {
    var slug = slugs[i];
    var entry = this.pages[slug];

    if (entry.name && entry.name.toLowerCase().indexOf(q) !== -1) {
      results.push({ entry: entry, pageSlug: slug, anchor: null });
    }
    if (entry.description && entry.description.toLowerCase().indexOf(q) !== -1) {
      results.push({ entry: entry, pageSlug: slug, anchor: null });
    }

    // Search members recursively
    var stack = entry.allMembers.slice();
    while (stack.length > 0) {
      var m = stack.pop();
      var nameMatch = m.name && m.name.toLowerCase().indexOf(q) !== -1;
      var descMatch = m.description && m.description.toLowerCase().indexOf(q) !== -1;
      if (nameMatch || descMatch) {
        results.push({ entry: m, pageSlug: slug, anchor: m.name });
      }
      var children = m.allMembers;
      for (var j = 0; j < children.length; j++) {
        stack.push(children[j]);
      }
    }
  }

  return results;
};

/**
 * Return all pages matching a given kind.
 *
 * @param {string} kind
 * @returns {DocEntry[]}
 */
DocContent.prototype.byKind = function byKind(kind) {
  var result = [];
  var slugs = Object.keys(this.pages);
  for (var i = 0; i < slugs.length; i++) {
    if (this.pages[slugs[i]].kind === kind) {
      result.push(this.pages[slugs[i]]);
    }
  }
  return result;
};

/**
 * Return all nav group titles that have items.
 *
 * @returns {string[]}
 */
DocContent.prototype.sections = function sections() {
  var result = [];
  for (var i = 0; i < this.nav.length; i++) {
    if (this.nav[i].items && this.nav[i].items.length > 0) {
      result.push(this.nav[i].title);
    }
  }
  return result;
};
