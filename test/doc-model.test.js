import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load DocEntry and DocContent by evaluating doc-model.js in a controlled scope
function loadDocModel() {
  const source = fs.readFileSync(path.join(__dirname, '..', 'src', 'doc-model.js'), 'utf8');
  const fn = new Function(`
    ${source}
    return { DocEntry, DocContent };
  `);
  return fn();
}

const { DocEntry, DocContent } = loadDocModel();

// ── DocEntry ─────────────────────────────────────────────

describe('DocEntry', () => {
  it('copies data properties onto instance', () => {
    const entry = new DocEntry({ name: 'foo', kind: 'function', description: 'A foo' });
    expect(entry.name).toBe('foo');
    expect(entry.kind).toBe('function');
    expect(entry.description).toBe('A foo');
  });

  it('does not copy the members key directly (wraps instead)', () => {
    const entry = new DocEntry({
      name: 'bar',
      members: {
        methods: [{ name: 'doStuff', kind: 'function' }],
        properties: [],
      },
    });
    // members should be an object with DocEntry children, not raw data
    expect(entry.members.methods).toHaveLength(1);
    expect(entry.members.methods[0]).toBeInstanceOf(DocEntry);
    expect(entry.members.methods[0].name).toBe('doStuff');
  });

  it('initializes empty member categories when absent', () => {
    const entry = new DocEntry({ name: 'empty' });
    expect(entry.members.classes).toEqual([]);
    expect(entry.members.methods).toEqual([]);
    expect(entry.members.staticMethods).toEqual([]);
    expect(entry.members.properties).toEqual([]);
    expect(entry.members.staticProperties).toEqual([]);
    expect(entry.members.events).toEqual([]);
    expect(entry.members.typedefs).toEqual([]);
  });

  describe('parent back-reference', () => {
    it('sets parent to null when no parent provided', () => {
      const entry = new DocEntry({ name: 'root' });
      expect(entry.parent).toBeNull();
    });

    it('sets parent when provided', () => {
      const parent = new DocEntry({ name: 'parent' });
      const child = new DocEntry({ name: 'child' }, parent);
      expect(child.parent).toBe(parent);
    });

    it('parent is non-enumerable', () => {
      const parent = new DocEntry({ name: 'parent' });
      const child = new DocEntry({ name: 'child' }, parent);
      expect(Object.keys(child)).not.toContain('parent');
    });

    it('automatically sets parent on wrapped member children', () => {
      const entry = new DocEntry({
        name: 'cls',
        members: {
          methods: [{ name: 'method1' }],
          properties: [{ name: 'prop1' }],
        },
      });
      expect(entry.members.methods[0].parent).toBe(entry);
      expect(entry.members.properties[0].parent).toBe(entry);
    });
  });

  describe('allMembers getter', () => {
    it('returns empty array when no members', () => {
      const entry = new DocEntry({ name: 'empty' });
      expect(entry.allMembers).toEqual([]);
    });

    it('flattens all member categories', () => {
      const entry = new DocEntry({
        name: 'full',
        members: {
          methods: [{ name: 'm1' }, { name: 'm2' }],
          staticMethods: [{ name: 'sm1' }],
          properties: [{ name: 'p1' }],
          events: [{ name: 'e1' }],
        },
      });
      const all = entry.allMembers;
      expect(all).toHaveLength(5);
      const names = all.map(m => m.name);
      expect(names).toContain('m1');
      expect(names).toContain('m2');
      expect(names).toContain('sm1');
      expect(names).toContain('p1');
      expect(names).toContain('e1');
    });
  });

  describe('isCallable getter', () => {
    it('returns true when signature is present', () => {
      const entry = new DocEntry({ name: 'fn', signature: { params: [], returns: [] } });
      expect(entry.isCallable).toBe(true);
    });

    it('returns false when signature is null', () => {
      const entry = new DocEntry({ name: 'obj', signature: null });
      expect(entry.isCallable).toBe(false);
    });

    it('returns false when signature is undefined', () => {
      const entry = new DocEntry({ name: 'obj' });
      expect(entry.isCallable).toBe(false);
    });
  });

  describe('hasMembers getter', () => {
    it('returns true when there are members', () => {
      const entry = new DocEntry({
        name: 'obj',
        members: { methods: [{ name: 'a' }] },
      });
      expect(entry.hasMembers).toBe(true);
    });

    it('returns false when no members', () => {
      const entry = new DocEntry({ name: 'leaf' });
      expect(entry.hasMembers).toBe(false);
    });
  });

  describe('find(name)', () => {
    let root;

    beforeEach(() => {
      root = new DocEntry({
        name: 'root',
        members: {
          methods: [
            { name: 'alpha' },
            {
              name: 'beta',
              members: {
                properties: [{ name: 'gamma' }],
              },
            },
          ],
        },
      });
    });

    it('finds a direct child', () => {
      const result = root.find('alpha');
      expect(result).not.toBeNull();
      expect(result.name).toBe('alpha');
    });

    it('finds a deeply nested child', () => {
      const result = root.find('gamma');
      expect(result).not.toBeNull();
      expect(result.name).toBe('gamma');
    });

    it('returns null for non-existent name', () => {
      expect(root.find('nonexistent')).toBeNull();
    });
  });

  describe('membersByKind(kind)', () => {
    it('filters members by kind', () => {
      const entry = new DocEntry({
        name: 'mixed',
        members: {
          methods: [
            { name: 'fn1', kind: 'function' },
            { name: 'fn2', kind: 'function' },
          ],
          properties: [{ name: 'p1', kind: 'property' }],
        },
      });
      expect(entry.membersByKind('function')).toHaveLength(2);
      expect(entry.membersByKind('property')).toHaveLength(1);
      expect(entry.membersByKind('event')).toHaveLength(0);
    });
  });

  describe('ancestry()', () => {
    it('returns just self when no parent', () => {
      const entry = new DocEntry({ name: 'root' });
      const chain = entry.ancestry();
      expect(chain).toHaveLength(1);
      expect(chain[0].name).toBe('root');
    });

    it('returns full chain from root to leaf', () => {
      const root = new DocEntry({
        name: 'root',
        members: {
          methods: [
            {
              name: 'mid',
              members: {
                properties: [{ name: 'leaf' }],
              },
            },
          ],
        },
      });
      const leaf = root.members.methods[0].members.properties[0];
      const chain = leaf.ancestry();
      expect(chain).toHaveLength(3);
      expect(chain.map(e => e.name)).toEqual(['root', 'mid', 'leaf']);
    });
  });
});

// ── DocContent ───────────────────────────────────────────

describe('DocContent', () => {
  let docs;

  const rawData = {
    themeVersion: '1.2.3',
    generatedAt: '2025-01-01T00:00:00Z',
    packageInfo: { name: 'test-pkg', version: '0.1.0' },
    readme: '<p>Hello</p>',
    nav: [
      { title: 'Classes', items: [{ name: 'User', slug: 'User' }] },
      { title: 'Functions', items: [{ name: 'fmt', slug: 'fmt' }] },
      { title: 'Empty', items: [] },
    ],
    pages: {
      User: {
        slug: 'User',
        name: 'User',
        kind: 'class',
        description: 'A user class',
        members: {
          methods: [
            { name: 'save', kind: 'function', description: 'Save the user' },
            { name: 'delete', kind: 'function', description: 'Delete the user' },
          ],
          properties: [
            { name: 'email', kind: 'property', description: 'Email address' },
          ],
        },
      },
      fmt: {
        slug: 'fmt',
        name: 'fmt',
        kind: 'function',
        description: 'Format something',
        members: {},
      },
    },
  };

  beforeEach(() => {
    docs = new DocContent(rawData);
  });

  it('stores metadata', () => {
    expect(docs.themeVersion).toBe('1.2.3');
    expect(docs.generatedAt).toBe('2025-01-01T00:00:00Z');
    expect(docs.packageInfo.name).toBe('test-pkg');
    expect(docs.readme).toBe('<p>Hello</p>');
  });

  it('wraps pages as DocEntry instances', () => {
    expect(docs.pages.User).toBeInstanceOf(DocEntry);
    expect(docs.pages.fmt).toBeInstanceOf(DocEntry);
  });

  describe('page(slug)', () => {
    it('returns the DocEntry for a valid slug', () => {
      const user = docs.page('User');
      expect(user).toBeInstanceOf(DocEntry);
      expect(user.name).toBe('User');
    });

    it('returns null for unknown slug', () => {
      expect(docs.page('nonexistent')).toBeNull();
    });
  });

  describe('search(query)', () => {
    it('finds pages by name', () => {
      const results = docs.search('User');
      expect(results.length).toBeGreaterThanOrEqual(1);
      expect(results.some(r => r.entry.name === 'User')).toBe(true);
    });

    it('finds pages by description', () => {
      const results = docs.search('Format');
      expect(results.some(r => r.entry.name === 'fmt')).toBe(true);
    });

    it('finds members by name', () => {
      const results = docs.search('save');
      expect(results.some(r => r.entry.name === 'save')).toBe(true);
      expect(results.some(r => r.pageSlug === 'User')).toBe(true);
    });

    it('finds members by description', () => {
      const results = docs.search('Email address');
      expect(results.some(r => r.entry.name === 'email')).toBe(true);
    });

    it('is case insensitive', () => {
      const results = docs.search('user');
      expect(results.some(r => r.entry.name === 'User')).toBe(true);
    });

    it('returns empty for no matches', () => {
      expect(docs.search('zzzznonexistent')).toEqual([]);
    });

    it('includes anchor for member matches', () => {
      const results = docs.search('save');
      const saveResult = results.find(r => r.entry.name === 'save');
      expect(saveResult.anchor).toBe('save');
    });

    it('has null anchor for page-level matches', () => {
      const results = docs.search('User');
      const pageResult = results.find(r => r.entry.name === 'User' && r.anchor === null);
      expect(pageResult).toBeDefined();
    });
  });

  describe('byKind(kind)', () => {
    it('returns all pages of a given kind', () => {
      const classes = docs.byKind('class');
      expect(classes).toHaveLength(1);
      expect(classes[0].name).toBe('User');
    });

    it('returns empty for non-existent kind', () => {
      expect(docs.byKind('mixin')).toEqual([]);
    });
  });

  describe('sections()', () => {
    it('returns only non-empty nav group titles', () => {
      const sections = docs.sections();
      expect(sections).toContain('Classes');
      expect(sections).toContain('Functions');
      expect(sections).not.toContain('Empty');
    });
  });

  describe('defaults for missing data', () => {
    it('handles missing fields gracefully', () => {
      const minimal = new DocContent({});
      expect(minimal.themeVersion).toBeNull();
      expect(minimal.generatedAt).toBeNull();
      expect(minimal.packageInfo).toBeNull();
      expect(minimal.readme).toBe('');
      expect(minimal.nav).toEqual([]);
      expect(Object.keys(minimal.pages)).toHaveLength(0);
    });
  });
});
