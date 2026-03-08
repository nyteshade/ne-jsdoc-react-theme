'use strict';

/**
 * Process JSDoc's TaffyDB data into JSON-serializable page objects
 * for the React frontend to consume.
 */
function processDoclets(data) {
  const nav = [];
  const pages = [];

  const packageArr = data({ kind: 'package' }).get();
  const packageDoclet = packageArr.length ? packageArr[0] : null;

  const classes = data({ kind: 'class' }).get();
  const modules = data({ kind: 'module' }).get();
  const namespaces = data({ kind: 'namespace' }).get().filter(d => !d.memberof);
  const interfaces = data({ kind: 'interface' }).get().filter(d => !d.memberof);
  const mixins = data({ kind: 'mixin' }).get().filter(d => !d.memberof);

  // Home page
  pages.push({ slug: 'home', kind: 'home', title: 'Home' });

  // Modules
  if (modules.length) {
    const navGroup = { title: 'Modules', items: [] };
    for (const mod of modules) {
      const slug = sanitize(mod.longname);
      const children = data({ memberof: mod.longname }).get();
      pages.push({
        slug,
        kind: 'module',
        title: mod.name,
        doclet: serializeDoclet(mod),
        members: serializeChildren(children),
      });
      navGroup.items.push({ name: mod.name, slug, kind: 'module', filename: mod.meta ? (mod.meta.shortpath || mod.meta.filename || '') : '' });
    }
    nav.push(navGroup);
  }

  // Classes
  if (classes.length) {
    const navGroup = { title: 'Classes', items: [] };
    for (const cls of classes) {
      const slug = sanitize(cls.longname);
      const children = data({ memberof: cls.longname }).get();
      pages.push({
        slug,
        kind: 'class',
        title: cls.name,
        doclet: serializeDoclet(cls),
        members: serializeChildren(children),
      });
      navGroup.items.push({ name: cls.name, slug, kind: 'class', filename: cls.meta ? (cls.meta.shortpath || cls.meta.filename || '') : '' });
    }
    nav.push(navGroup);
  }

  // Interfaces
  if (interfaces.length) {
    const navGroup = { title: 'Interfaces', items: [] };
    for (const iface of interfaces) {
      const slug = sanitize(iface.longname);
      const children = data({ memberof: iface.longname }).get();
      pages.push({
        slug,
        kind: 'interface',
        title: iface.name,
        doclet: serializeDoclet(iface),
        members: serializeChildren(children),
      });
      navGroup.items.push({ name: iface.name, slug, kind: 'interface', filename: iface.meta ? (iface.meta.shortpath || iface.meta.filename || '') : '' });
    }
    nav.push(navGroup);
  }

  // Namespaces
  if (namespaces.length) {
    const navGroup = { title: 'Namespaces', items: [] };
    for (const ns of namespaces) {
      const slug = sanitize(ns.longname);
      const children = data({ memberof: ns.longname }).get();
      pages.push({
        slug,
        kind: 'namespace',
        title: ns.name,
        doclet: serializeDoclet(ns),
        members: serializeChildren(children),
      });
      navGroup.items.push({ name: ns.name, slug, kind: 'namespace', filename: ns.meta ? (ns.meta.shortpath || ns.meta.filename || '') : '' });
    }
    nav.push(navGroup);
  }

  // Mixins
  if (mixins.length) {
    const navGroup = { title: 'Mixins', items: [] };
    for (const mixin of mixins) {
      const slug = sanitize(mixin.longname);
      const children = data({ memberof: mixin.longname }).get();
      pages.push({
        slug,
        kind: 'mixin',
        title: mixin.name,
        doclet: serializeDoclet(mixin),
        members: serializeChildren(children),
      });
      navGroup.items.push({ name: mixin.name, slug, kind: 'mixin', filename: mixin.meta ? (mixin.meta.shortpath || mixin.meta.filename || '') : '' });
    }
    nav.push(navGroup);
  }

  // Globals
  const globalFunctions = data({ kind: 'function', memberof: { isUndefined: true } }).get();
  const globalMembers = data({ kind: 'member', memberof: { isUndefined: true } }).get()
    .filter(d => d.kind !== 'package');
  const globalConstants = data({ kind: 'constant', memberof: { isUndefined: true } }).get();
  const globalTypedefs = data({ kind: 'typedef', memberof: { isUndefined: true } }).get();
  const globalEvents = data({ kind: 'event', memberof: { isUndefined: true } }).get();

  const allGlobals = [
    ...globalFunctions, ...globalMembers, ...globalConstants,
    ...globalTypedefs, ...globalEvents,
  ];

  if (allGlobals.length) {
    // For "by type" and "by file" views, create individual nav items for each global
    const globalNavItems = [];
    for (const g of allGlobals) {
      const fname = g.meta ? (g.meta.shortpath || g.meta.filename || '') : '';
      globalNavItems.push({ name: g.name, slug: 'global', kind: g.kind, filename: fname });
    }

    nav.push({
      title: 'Global',
      items: [{ name: 'Global', slug: 'global', kind: 'global', filename: '' }],
      // Individual items for alternative views
      globalItems: globalNavItems,
    });
    pages.push({
      slug: 'global',
      kind: 'global',
      title: 'Global',
      members: {
        classes: [],
        methods: globalFunctions.map(serializeDoclet),
        staticMethods: [],
        properties: [...globalMembers, ...globalConstants].map(serializeDoclet),
        staticProperties: [],
        events: globalEvents.map(serializeDoclet),
        typedefs: globalTypedefs.map(serializeDoclet),
      },
    });
  }

  return { pages, nav, packageInfo: packageDoclet };
}

function serializeChildren(children) {
  // For modules, members are typically scope:'inner' or scope:'static'
  // For classes, members are scope:'instance' or scope:'static'
  const isFn = c => c.kind === 'function';
  const isProp = c => c.kind === 'member' || c.kind === 'constant';

  return {
    classes: children.filter(c => c.kind === 'class').map(c => {
      // For classes nested inside modules, also gather their own children
      return serializeDoclet(c);
    }),
    methods: children.filter(c => isFn(c) && (c.scope === 'instance' || c.scope === 'inner')).map(serializeDoclet),
    staticMethods: children.filter(c => isFn(c) && c.scope === 'static').map(serializeDoclet),
    properties: children.filter(c => isProp(c) && (c.scope === 'instance' || c.scope === 'inner')).map(serializeDoclet),
    staticProperties: children.filter(c => isProp(c) && c.scope === 'static').map(serializeDoclet),
    events: children.filter(c => c.kind === 'event').map(serializeDoclet),
    typedefs: children.filter(c => c.kind === 'typedef').map(serializeDoclet),
  };
}

function serializeDoclet(d) {
  return {
    name: d.name,
    longname: d.longname,
    kind: d.kind,
    scope: d.scope || null,
    access: d.access || null,
    description: d.description || '',
    classdesc: d.classdesc || '',
    summary: d.summary || '',
    params: (d.params || []).map(serializeParam),
    returns: (d.returns || []).map(serializeReturn),
    exceptions: (d.exceptions || []).map(serializeReturn),
    properties: (d.properties || []).map(serializeParam),
    examples: d.examples || [],
    see: d.see || [],
    since: d.since || null,
    deprecated: d.deprecated || null,
    readonly: !!d.readonly,
    async: !!d.async,
    generator: !!d.generator,
    virtual: !!d.virtual,
    augments: d.augments || [],
    implements: d.implements || [],
    type: d.type && d.type.names ? d.type.names : null,
    defaultvalue: d.defaultvalue !== undefined ? String(d.defaultvalue) : null,
    meta: d.meta
      ? { filename: d.meta.shortpath || d.meta.filename || '', lineno: d.meta.lineno || null }
      : null,
  };
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

function sanitize(longname) {
  return longname
    .replace(/^module:/, 'module-')
    .replace(/[~#.]/g, '-')
    .replace(/[^a-zA-Z0-9_-]/g, '_');
}

module.exports = { processDoclets };
