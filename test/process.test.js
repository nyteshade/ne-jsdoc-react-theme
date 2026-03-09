import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import os from 'os';

const require = createRequire(import.meta.url);
const { processDoclets } = require('../src/process');

/**
 * Create a minimal TaffyDB-compatible mock.
 *
 * TaffyDB returns a function. When called with a filter it returns
 * an object with .get() → filtered array. When called with no args
 * it returns { get: () => allDoclets, each: (fn) => ... }.
 */
function mockTaffyDB(doclets) {
  function db(filter) {
    if (!filter) {
      return {
        get() { return doclets.slice(); },
        each(fn) { doclets.forEach(fn); },
      };
    }
    const filtered = doclets.filter(d => {
      for (const key of Object.keys(filter)) {
        if (d[key] !== filter[key]) return false;
      }
      return true;
    });
    return {
      get() { return filtered; },
      each(fn) { filtered.forEach(fn); },
    };
  }
  return db;
}

// ── Basic pipeline ───────────────────────────────────────

describe('processDoclets', () => {
  describe('basic class processing', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        { kind: 'class', name: 'Foo', longname: 'Foo', scope: 'global', description: 'A class' },
        { kind: 'function', name: 'bar', longname: 'Foo#bar', memberof: 'Foo', scope: 'instance', description: 'Method bar' },
        { kind: 'member', name: 'baz', longname: 'Foo#baz', memberof: 'Foo', scope: 'instance', description: 'Prop baz' },
        { kind: 'function', name: 'create', longname: 'Foo.create', memberof: 'Foo', scope: 'static', description: 'Static factory' },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('creates a home page', () => {
      expect(result.pages['home']).toBeDefined();
      expect(result.pages['home'].kind).toBe('home');
    });

    it('creates a page for the class', () => {
      const page = result.pages['Foo'];
      expect(page).toBeDefined();
      expect(page.kind).toBe('class');
      expect(page.name).toBe('Foo');
    });

    it('puts instance methods in methods', () => {
      const page = result.pages['Foo'];
      expect(page.members.methods).toHaveLength(1);
      expect(page.members.methods[0].name).toBe('bar');
    });

    it('puts static methods in staticMethods', () => {
      const page = result.pages['Foo'];
      expect(page.members.staticMethods).toHaveLength(1);
      expect(page.members.staticMethods[0].name).toBe('create');
    });

    it('puts instance properties in properties', () => {
      const page = result.pages['Foo'];
      expect(page.members.properties).toHaveLength(1);
      expect(page.members.properties[0].name).toBe('baz');
    });

    it('adds class to nav', () => {
      const classNav = result.nav.find(g => g.title === 'Classes');
      expect(classNav).toBeDefined();
      expect(classNav.items.some(i => i.name === 'Foo')).toBe(true);
    });
  });

  describe('function with signature', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        {
          kind: 'function', name: 'greet', longname: 'greet', scope: 'global',
          params: [{ name: 'name', type: { names: ['string'] } }],
          returns: [{ type: { names: ['string'] } }],
        },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('creates a function page with signature', () => {
      const page = result.pages['greet'];
      expect(page).toBeDefined();
      expect(page.kind).toBe('function');
      expect(page.signature).not.toBeNull();
      expect(page.signature.params).toHaveLength(1);
      expect(page.signature.returns).toHaveLength(1);
    });
  });

  describe('constant processing', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        { kind: 'constant', name: 'MAX_SIZE', longname: 'MAX_SIZE', scope: 'global', description: 'Maximum size' },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('creates a constant page', () => {
      const page = result.pages['MAX_SIZE'];
      expect(page).toBeDefined();
      expect(page.kind).toBe('constant');
    });

    it('adds constant to Constants nav group', () => {
      const nav = result.nav.find(g => g.title === 'Constants');
      expect(nav).toBeDefined();
      expect(nav.items.some(i => i.name === 'MAX_SIZE')).toBe(true);
    });
  });

  describe('typedef processing', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        {
          kind: 'typedef', name: 'Options', longname: 'Options', scope: 'global',
          properties: [{ name: 'debug', type: { names: ['boolean'] } }],
        },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('creates a typedef page', () => {
      const page = result.pages['Options'];
      expect(page).toBeDefined();
      expect(page.kind).toBe('typedef');
    });

    it('adds to Type Definitions nav', () => {
      const nav = result.nav.find(g => g.title === 'Type Definitions');
      expect(nav).toBeDefined();
    });
  });

  describe('event processing', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        { kind: 'event', name: 'click', longname: 'Widget#event:click', scope: 'instance', description: 'Fired on click' },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('creates an event page', () => {
      const slug = Object.keys(result.pages).find(s => s !== 'home');
      expect(slug).toBeDefined();
      const page = result.pages[slug];
      expect(page.kind).toBe('event');
    });
  });

  // ── Filtering ──────────────────────────────────────────

  describe('phantom filtering', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        { kind: 'class', name: 'Obj', longname: 'Obj', scope: 'global' },
        { kind: 'function', name: 'real', longname: 'real', scope: 'global' },
        // Phantom created by JSDoc for Obj#Symbol
        { kind: 'namespace', name: 'Symbol', longname: 'Obj#Symbol', scope: 'instance', memberof: 'Obj' },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('filters items with # in longname from becoming standalone pages', () => {
      // Obj#Symbol should not appear as its own page in functions/constants
      const slugs = Object.keys(result.pages);
      expect(slugs.every(s => !s.includes('Symbol'))).toBe(true);
    });
  });

  describe('quoted artifact filtering', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        { kind: 'function', name: 'good', longname: 'good', scope: 'global' },
        { kind: 'member', name: '"bad"', longname: '"bad"', scope: 'global' },
        { kind: 'member', name: "'also_bad'", longname: "'also_bad'", scope: 'global' },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('excludes items with quoted longnames', () => {
      expect(result.pages['good']).toBeDefined();
      const slugs = Object.keys(result.pages);
      expect(slugs.every(s => !s.includes('bad'))).toBe(true);
    });
  });

  // ── Kind inference ─────────────────────────────────────

  describe('kind inference', () => {
    it('infers function when doclet has params', () => {
      const doclets = [
        {
          kind: 'constant', name: 'doStuff', longname: 'doStuff', scope: 'global',
          params: [{ name: 'x', type: { names: ['number'] } }],
        },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      expect(result.pages['doStuff'].kind).toBe('function');
    });

    it('infers object when constant has children', () => {
      const doclets = [
        { kind: 'constant', name: 'utils', longname: 'utils', scope: 'global' },
        { kind: 'function', name: 'helper', longname: 'utils.helper', memberof: 'utils', scope: 'static' },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      expect(result.pages['utils'].kind).toBe('object');
    });
  });

  // ── Non-class parent categorization ────────────────────

  describe('non-class parent member categorization', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        { kind: 'constant', name: 'si', longname: 'si', scope: 'global' },
        { kind: 'function', name: 'array', longname: 'si.array', memberof: 'si', scope: 'static' },
        { kind: 'function', name: 'string', longname: 'si.string', memberof: 'si', scope: 'static' },
        { kind: 'member', name: 'VERSION', longname: 'si.VERSION', memberof: 'si', scope: 'static' },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('puts all functions in methods (not staticMethods) for non-class parents', () => {
      const page = result.pages['si'];
      expect(page.members.methods).toHaveLength(2);
      expect(page.members.staticMethods).toHaveLength(0);
    });

    it('puts all properties in properties (not staticProperties)', () => {
      const page = result.pages['si'];
      expect(page.members.properties).toHaveLength(1);
      expect(page.members.staticProperties).toHaveLength(0);
    });
  });

  // ── Class vs non-class scoping ─────────────────────────

  describe('class parent member categorization uses scope', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        { kind: 'class', name: 'Widget', longname: 'Widget', scope: 'global' },
        { kind: 'function', name: 'render', longname: 'Widget#render', memberof: 'Widget', scope: 'instance' },
        { kind: 'function', name: 'factory', longname: 'Widget.factory', memberof: 'Widget', scope: 'static' },
        { kind: 'member', name: 'width', longname: 'Widget#width', memberof: 'Widget', scope: 'instance' },
        { kind: 'member', name: 'count', longname: 'Widget.count', memberof: 'Widget', scope: 'static' },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('separates instance methods from static methods', () => {
      const page = result.pages['Widget'];
      expect(page.members.methods).toHaveLength(1);
      expect(page.members.methods[0].name).toBe('render');
      expect(page.members.staticMethods).toHaveLength(1);
      expect(page.members.staticMethods[0].name).toBe('factory');
    });

    it('separates instance properties from static properties', () => {
      const page = result.pages['Widget'];
      expect(page.members.properties).toHaveLength(1);
      expect(page.members.properties[0].name).toBe('width');
      expect(page.members.staticProperties).toHaveLength(1);
      expect(page.members.staticProperties[0].name).toBe('count');
    });
  });

  // ── Deduplication ──────────────────────────────────────

  describe('class deduplication', () => {
    it('deduplicates multiple class doclets with same longname', () => {
      const doclets = [
        { kind: 'class', name: 'Dupe', longname: 'Dupe', scope: 'global', description: 'First' },
        { kind: 'class', name: 'Dupe', longname: 'Dupe', scope: 'global', description: 'Second' },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      const classNav = result.nav.find(g => g.title === 'Classes');
      const dupeItems = classNav.items.filter(i => i.name === 'Dupe');
      expect(dupeItems).toHaveLength(1);
    });
  });

  describe('instance-scoped class phantoms are excluded', () => {
    it('filters out instance-scoped class doclets', () => {
      const doclets = [
        { kind: 'class', name: 'Base', longname: 'Base', scope: 'global' },
        // JSDoc creates phantom instance-scoped class for inherited classes
        { kind: 'class', name: 'Base', longname: 'Child#Base', scope: 'instance', memberof: 'Child' },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      const classNav = result.nav.find(g => g.title === 'Classes');
      expect(classNav.items).toHaveLength(1);
    });
  });

  // ── Serialization ──────────────────────────────────────

  describe('param serialization', () => {
    it('serializes params with all fields', () => {
      const doclets = [
        {
          kind: 'function', name: 'test', longname: 'test', scope: 'global',
          params: [{
            name: 'opts',
            type: { names: ['Object'] },
            description: 'Options',
            optional: true,
            nullable: true,
            defaultvalue: '{}',
          }],
        },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      const param = result.pages['test'].signature.params[0];
      expect(param.name).toBe('opts');
      expect(param.type).toEqual(['Object']);
      expect(param.description).toBe('Options');
      expect(param.optional).toBe(true);
      expect(param.nullable).toBe(true);
      expect(param.defaultvalue).toBe('{}');
    });
  });

  describe('return serialization', () => {
    it('serializes returns with type and description', () => {
      const doclets = [
        {
          kind: 'function', name: 'compute', longname: 'compute', scope: 'global',
          returns: [{ type: { names: ['number'] }, description: 'The result' }],
        },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      const ret = result.pages['compute'].signature.returns[0];
      expect(ret.type).toEqual(['number']);
      expect(ret.description).toBe('The result');
    });
  });

  // ── Page shape ─────────────────────────────────────────

  describe('page shape completeness', () => {
    it('has all expected fields', () => {
      const doclets = [
        {
          kind: 'function', name: 'full', longname: 'full', scope: 'global',
          description: 'A function',
          params: [{ name: 'x' }],
          returns: [{ type: { names: ['void'] } }],
          examples: ['full(1)'],
          see: ['other'],
          since: '1.0',
          deprecated: 'Use something else',
          access: 'public',
          meta: { filename: 'test.js', lineno: 10, shortpath: 'test.js' },
        },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      const page = result.pages['full'];

      expect(page.slug).toBe('full');
      expect(page.name).toBe('full');
      expect(page.kind).toBe('function');
      expect(page.title).toBe('full');
      expect(page.description).toBe('A function');
      expect(page.signature).not.toBeNull();
      expect(page.augments).toEqual([]);
      expect(page.deprecated).toBe('Use something else');
      expect(page.examples).toEqual(['full(1)']);
      expect(page.see).toEqual(['other']);
      expect(page.since).toBe('1.0');
      expect(page.access).toBe('public');
      expect(page.source).toEqual({ file: 'test.js', line: 10 });
      expect(page.members).toBeDefined();
    });
  });

  // ── Nav sorting ────────────────────────────────────────

  describe('nav items are sorted alphabetically', () => {
    it('sorts function nav items', () => {
      const doclets = [
        { kind: 'function', name: 'zebra', longname: 'zebra', scope: 'global' },
        { kind: 'function', name: 'alpha', longname: 'alpha', scope: 'global' },
        { kind: 'function', name: 'middle', longname: 'middle', scope: 'global' },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      const fnNav = result.nav.find(g => g.title === 'Functions');
      const names = fnNav.items.map(i => i.name);
      expect(names).toEqual(['alpha', 'middle', 'zebra']);
    });
  });

  // ── Package info ───────────────────────────────────────

  describe('package info', () => {
    it('includes package doclet when present', () => {
      const doclets = [
        { kind: 'package', name: 'my-lib', version: '2.0.0', longname: 'package:my-lib' },
        { kind: 'function', name: 'fn', longname: 'fn', scope: 'global' },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      expect(result.packageInfo).toBeDefined();
      expect(result.packageInfo.name).toBe('my-lib');
    });

    it('is null when no package doclet', () => {
      const doclets = [
        { kind: 'function', name: 'fn', longname: 'fn', scope: 'global' },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      expect(result.packageInfo).toBeNull();
    });
  });

  // ── Slug sanitization ─────────────────────────────────

  describe('slug sanitization', () => {
    it('replaces module: prefix', () => {
      const doclets = [
        { kind: 'function', name: 'init', longname: 'module:core.init', scope: 'global', memberof: 'module:core' },
      ];
      // The function should get processed — its slug should not have module: prefix
      const result = processDoclets(mockTaffyDB(doclets));
      const slugs = Object.keys(result.pages);
      expect(slugs.every(s => !s.includes(':'))).toBe(true);
    });
  });

  // ── Mixed content ──────────────────────────────────────

  describe('mixed content - classes, functions, constants, typedefs', () => {
    let result;

    beforeAll(() => {
      const doclets = [
        { kind: 'class', name: 'User', longname: 'User', scope: 'global' },
        { kind: 'function', name: 'save', longname: 'User#save', memberof: 'User', scope: 'instance' },
        { kind: 'function', name: 'formatName', longname: 'formatName', scope: 'global' },
        { kind: 'constant', name: 'MAX', longname: 'MAX', scope: 'global' },
        { kind: 'typedef', name: 'Config', longname: 'Config', scope: 'global' },
      ];
      result = processDoclets(mockTaffyDB(doclets));
    });

    it('has all pages', () => {
      expect(result.pages['User']).toBeDefined();
      expect(result.pages['formatName']).toBeDefined();
      expect(result.pages['MAX']).toBeDefined();
      expect(result.pages['Config']).toBeDefined();
    });

    it('class members are not standalone pages', () => {
      expect(result.pages['User-save']).toBeUndefined();
    });

    it('has correct nav groups', () => {
      const titles = result.nav.map(g => g.title);
      expect(titles).toContain('Classes');
      expect(titles).toContain('Functions');
      expect(titles).toContain('Constants');
      expect(titles).toContain('Type Definitions');
    });
  });

  // ── AST-claimed children preserve JSDoc descriptions ──

  describe('AST-claimed children preserve JSDoc descriptions', () => {
    let result;
    let tmpDir;

    beforeAll(() => {
      // Create a real source file so the AST pass can discover children
      tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'process-test-'));
      fs.writeFileSync(path.join(tmpDir, 'toolkit.js'), `
        function has(target, key) { return key in target; }
        Object.assign(has, {
          all(target, keys) { return keys.every(k => k in target); },
          some(target, keys) { return keys.some(k => k in target); },
        });
        export { has };
      `);

      // Simulate JSDoc doclets: `has` is a function, `all` and `some` are
      // standalone doclets with full descriptions (not memberof `has`)
      const doclets = [
        {
          kind: 'constant', name: 'has', longname: 'has', scope: 'global',
          description: 'Check if target has key',
          params: [
            { name: 'target', type: { names: ['Object'] }, description: 'The target' },
            { name: 'key', type: { names: ['string'] }, description: 'The key' },
          ],
          returns: [{ type: { names: ['boolean'] }, description: 'True if key exists' }],
          meta: { filename: 'toolkit.js', lineno: 1, shortpath: 'toolkit.js' },
        },
        {
          kind: 'function', name: 'all', longname: 'all', scope: 'global',
          description: 'Check if target has ALL keys',
          params: [
            { name: 'target', type: { names: ['Object'] }, description: 'The target' },
            { name: 'keys', type: { names: ['Array'] }, description: 'Keys to check' },
          ],
          returns: [{ type: { names: ['boolean'] }, description: 'True if all keys exist' }],
          meta: { filename: 'toolkit.js', lineno: 3, shortpath: 'toolkit.js' },
        },
        {
          kind: 'function', name: 'some', longname: 'some', scope: 'global',
          description: 'Check if target has SOME keys',
          params: [
            { name: 'target', type: { names: ['Object'] }, description: 'The target' },
            { name: 'keys', type: { names: ['Array'] }, description: 'Keys to check' },
          ],
          returns: [{ type: { names: ['boolean'] }, description: 'True if some keys exist' }],
          meta: { filename: 'toolkit.js', lineno: 4, shortpath: 'toolkit.js' },
        },
      ];
      result = processDoclets(mockTaffyDB(doclets), { sourceRoot: tmpDir });
    });

    afterAll(() => {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    });

    it('claims children under the parent page', () => {
      const page = result.pages['has'];
      expect(page).toBeDefined();
      expect(page.kind).toBe('function');
      expect(page.members.methods.length).toBeGreaterThanOrEqual(2);
    });

    it('does not create standalone pages for claimed children', () => {
      expect(result.pages['all']).toBeUndefined();
      expect(result.pages['some']).toBeUndefined();
    });

    it('preserves JSDoc descriptions on claimed children', () => {
      const page = result.pages['has'];
      const allMember = page.members.methods.find(m => m.name === 'all');
      const someMember = page.members.methods.find(m => m.name === 'some');
      expect(allMember).toBeDefined();
      expect(someMember).toBeDefined();
      expect(allMember.description).toBe('Check if target has ALL keys');
      expect(someMember.description).toBe('Check if target has SOME keys');
    });

    it('preserves JSDoc params on claimed children', () => {
      const page = result.pages['has'];
      const allMember = page.members.methods.find(m => m.name === 'all');
      expect(allMember.signature).not.toBeNull();
      expect(allMember.signature.params).toHaveLength(2);
      expect(allMember.signature.params[0].name).toBe('target');
      expect(allMember.signature.params[1].name).toBe('keys');
    });

    it('preserves JSDoc returns on claimed children', () => {
      const page = result.pages['has'];
      const allMember = page.members.methods.find(m => m.name === 'all');
      expect(allMember.signature.returns).toHaveLength(1);
      expect(allMember.signature.returns[0].type).toEqual(['boolean']);
    });
  });

  describe('AST children from different files still get JSDoc descriptions', () => {
    let result;
    let tmpDir;

    beforeAll(() => {
      // Object defined in one file, but children documented as standalone
      // doclets from a different file (common with re-exports)
      tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'process-test-difffile-'));
      fs.writeFileSync(path.join(tmpDir, 'si.js'), `
        export const si = {
          array(v) { return Array.isArray(v); },
          string(v) { return typeof v === 'string'; },
          number(v) { return typeof v === 'number'; },
        };
      `);

      const doclets = [
        {
          kind: 'constant', name: 'si', longname: 'si', scope: 'global',
          description: 'Type checks',
          meta: { filename: 'si.js', lineno: 1, shortpath: 'si.js' },
        },
        // Children documented as standalone — different file or no memberof
        {
          kind: 'function', name: 'array', longname: 'array', scope: 'global',
          description: 'Check if value is an array',
          params: [{ name: 'v', type: { names: ['*'] } }],
          returns: [{ type: { names: ['boolean'] } }],
          meta: { filename: 'checks.js', lineno: 10, shortpath: 'checks.js' },
        },
        {
          kind: 'function', name: 'string', longname: 'string', scope: 'global',
          description: 'Check if value is a string',
          params: [{ name: 'v', type: { names: ['*'] } }],
          returns: [{ type: { names: ['boolean'] } }],
          meta: { filename: 'checks.js', lineno: 20, shortpath: 'checks.js' },
        },
      ];
      result = processDoclets(mockTaffyDB(doclets), { sourceRoot: tmpDir });
    });

    afterAll(() => {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    });

    it('uses real JSDoc doclets for children even from different files', () => {
      const page = result.pages['si'];
      expect(page).toBeDefined();
      const arrayMember = page.members.methods.find(m => m.name === 'array');
      const stringMember = page.members.methods.find(m => m.name === 'string');
      expect(arrayMember).toBeDefined();
      expect(stringMember).toBeDefined();
      expect(arrayMember.description).toBe('Check if value is an array');
      expect(stringMember.description).toBe('Check if value is a string');
    });

    it('preserves params from real doclets', () => {
      const page = result.pages['si'];
      const arrayMember = page.members.methods.find(m => m.name === 'array');
      expect(arrayMember.signature).not.toBeNull();
      expect(arrayMember.signature.params).toHaveLength(1);
    });

    it('does not create standalone pages for claimed children', () => {
      expect(result.pages['array']).toBeUndefined();
      expect(result.pages['string']).toBeUndefined();
    });
  });

  // ── Orphan rescue ──────────────────────────────────────

  describe('orphan rescue', () => {
    it('groups orphaned children under a synthetic parent', () => {
      const doclets = [
        // Children whose parent was pruned (not in the doclet set)
        { kind: 'function', name: 'sub1', longname: 'missing.sub1', memberof: 'missing', scope: 'static' },
        { kind: 'function', name: 'sub2', longname: 'missing.sub2', memberof: 'missing', scope: 'static' },
      ];
      const result = processDoclets(mockTaffyDB(doclets));
      // Should create a synthetic parent page for "missing"
      const page = result.pages['missing'];
      expect(page).toBeDefined();
      expect(page.members.methods).toHaveLength(2);
    });
  });

  describe('child deduplication by name', () => {
    let tmpDir, result;

    beforeAll(() => {
      // Create a source file where `descriptor` is both a JSDoc-documented
      // member of Toolkit AND a standalone export (same name, different longname).
      tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'jsdoc-dedup-'));
      fs.writeFileSync(path.join(tmpDir, 'toolkit.js'), [
        '/** @function */',
        'function descriptor(target) { return target; }',
        '',
        '/** Parent object */',
        'export const Toolkit = { descriptor };',
        'Object.assign(Toolkit, { descriptor });',
      ].join('\n'));

      const doclets = [
        {
          kind: 'constant', name: 'Toolkit', longname: 'Toolkit', scope: 'global',
          description: 'Parent object',
          meta: { filename: 'toolkit.js', lineno: 5, shortpath: 'toolkit.js', path: tmpDir },
        },
        // JSDoc sees descriptor as a child of Toolkit via memberof
        {
          kind: 'function', name: 'descriptor', longname: 'Toolkit.descriptor',
          memberof: 'Toolkit', scope: 'static',
          description: 'Describe a target',
          meta: { filename: 'toolkit.js', lineno: 2, shortpath: 'toolkit.js', path: tmpDir },
        },
        // JSDoc also creates a standalone doclet for the function declaration
        {
          kind: 'function', name: 'descriptor', longname: 'descriptor', scope: 'global',
          description: 'Describe a target',
          meta: { filename: 'toolkit.js', lineno: 2, shortpath: 'toolkit.js', path: tmpDir },
        },
      ];

      result = processDoclets(mockTaffyDB(doclets), { sourceRoot: tmpDir });
    });

    afterAll(() => {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    });

    it('does not duplicate members with the same name', () => {
      const page = result.pages['Toolkit'];
      expect(page).toBeDefined();

      // descriptor should appear exactly once, not twice
      const allMethods = page.members.methods.concat(page.members.staticMethods);
      const descriptorEntries = allMethods.filter(m => m.name === 'descriptor');
      expect(descriptorEntries).toHaveLength(1);
      expect(descriptorEntries[0].description).toBe('Describe a target');
    });

    it('does not create a standalone page for the claimed duplicate', () => {
      // The standalone 'descriptor' doclet should be claimed as a child
      // and not get its own page
      expect(result.pages['descriptor']).toBeUndefined();
    });
  });

  describe('class member deduplication (same longname)', () => {
    it('does not show duplicate static methods when JSDoc creates multiple doclets', () => {
      // JSDoc often creates two doclets for the same static method
      // (one from the comment, one from code analysis), both with
      // the same longname and memberof.
      const doclets = [
        {
          kind: 'class', name: 'Property', longname: 'Property', scope: 'global',
          description: 'Property class',
        },
        {
          kind: 'function', name: 'descriptor', longname: 'Property.descriptor',
          memberof: 'Property', scope: 'static',
          description: 'Check if value is a property descriptor.',
          params: [{ name: 'value', type: { names: ['*'] }, description: 'The value to check.' }],
          returns: [{ type: { names: ['boolean'] }, description: 'True if descriptor' }],
          meta: { filename: 'toolkit.js', lineno: 224, shortpath: 'toolkit.js' },
        },
        // Duplicate doclet — same longname, same memberof, same everything
        {
          kind: 'function', name: 'descriptor', longname: 'Property.descriptor',
          memberof: 'Property', scope: 'static',
          description: 'Check if value is a property descriptor.',
          params: [{ name: 'value', type: { names: ['*'] }, description: 'The value to check.' }],
          returns: [{ type: { names: ['boolean'] }, description: 'True if descriptor' }],
          meta: { filename: 'toolkit.js', lineno: 224, shortpath: 'toolkit.js' },
        },
      ];

      const result = processDoclets(mockTaffyDB(doclets));
      const page = result.pages['Property'];
      expect(page).toBeDefined();

      const staticMethods = page.members.staticMethods;
      const descriptorEntries = staticMethods.filter(m => m.name === 'descriptor');
      expect(descriptorEntries).toHaveLength(1);
      expect(descriptorEntries[0].description).toContain('property descriptor');
    });
  });
});
