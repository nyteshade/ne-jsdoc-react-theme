import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { analyzeExports } = require('../src/process-ast');

function makeTmpDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'ast-test-'));
}

function writeFile(dir, name, content) {
  const full = path.join(dir, name);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
  return full;
}

function cleanup(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

// ── Named exports ────────────────────────────────────────

describe('analyzeExports', () => {
  describe('named function exports', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'index.js', `
        export function greet(name) { return 'hi ' + name; }
        export function farewell(name) { return 'bye ' + name; }
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('detects exported functions', () => {
      expect(result.has('greet')).toBe(true);
      expect(result.has('farewell')).toBe(true);
    });

    it('sets type to function', () => {
      expect(result.get('greet').type).toBe('function');
      expect(result.get('farewell').type).toBe('function');
    });

    it('records file path', () => {
      expect(result.get('greet').file).toBe('index.js');
    });
  });

  describe('exported object with children', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'utils.js', `
        export const helpers = {
          add(a, b) { return a + b; },
          subtract(a, b) { return a - b; },
          PI: 3.14,
        };
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('detects object export', () => {
      expect(result.has('helpers')).toBe(true);
      expect(result.get('helpers').type).toBe('object');
    });

    it('extracts object children', () => {
      const children = result.get('helpers').children;
      expect(children).toHaveLength(3);
      const names = children.map(c => c.name);
      expect(names).toContain('add');
      expect(names).toContain('subtract');
      expect(names).toContain('PI');
    });

    it('marks function children correctly', () => {
      const add = result.get('helpers').children.find(c => c.name === 'add');
      expect(add.kind).toBe('function');
    });

    it('marks property children correctly', () => {
      const pi = result.get('helpers').children.find(c => c.name === 'PI');
      expect(pi.kind).toBe('property');
    });
  });

  describe('class exports', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'models.js', `
        export class Animal {
          constructor(name) { this.name = name; }
          speak() { return this.name + ' speaks'; }
          static create(name) { return new Animal(name); }
          get species() { return 'unknown'; }
        }
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('detects class export', () => {
      expect(result.has('Animal')).toBe(true);
      expect(result.get('Animal').type).toBe('class');
    });

    it('extracts class methods', () => {
      const children = result.get('Animal').children;
      const names = children.map(c => c.name);
      expect(names).toContain('constructor');
      expect(names).toContain('speak');
      expect(names).toContain('create');
      expect(names).toContain('species');
    });

    it('marks static methods', () => {
      const create = result.get('Animal').children.find(c => c.name === 'create');
      expect(create.static).toBe(true);
    });

    it('marks instance methods', () => {
      const speak = result.get('Animal').children.find(c => c.name === 'speak');
      expect(speak.static).toBe(false);
    });

    it('detects getters', () => {
      const species = result.get('Animal').children.find(c => c.name === 'species');
      expect(species.type).toBe('getter');
    });
  });

  describe('Object.assign property attachment', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'toolkit.js', `
        function has(target, key) { return key in target; }
        Object.assign(has, {
          all(target, keys) { return keys.every(k => k in target); },
          some(target, keys) { return keys.some(k => k in target); },
        });
        export { has };
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('detects function export', () => {
      expect(result.has('has')).toBe(true);
      expect(result.get('has').type).toBe('function');
    });

    it('attaches Object.assign properties as children', () => {
      const children = result.get('has').children;
      const names = children.map(c => c.name);
      expect(names).toContain('all');
      expect(names).toContain('some');
    });
  });

  describe('target.prop = value attachment', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'fn.js', `
        function myFn() {}
        myFn.VERSION = '1.0';
        myFn.helper = function() {};
        export { myFn };
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('attaches direct property assignments', () => {
      const children = result.get('myFn').children;
      const names = children.map(c => c.name);
      expect(names).toContain('VERSION');
      expect(names).toContain('helper');
    });

    it('infers child kinds correctly', () => {
      const version = result.get('myFn').children.find(c => c.name === 'VERSION');
      expect(version.kind).toBe('property');
      const helper = result.get('myFn').children.find(c => c.name === 'helper');
      expect(helper.kind).toBe('function');
    });
  });

  describe('export * from re-exports', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'sub/math.js', `
        export function add(a, b) { return a + b; }
        export const ZERO = 0;
      `);
      writeFile(dir, 'index.js', `
        export * from './sub/math.js';
        export function main() {}
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('follows export * re-exports', () => {
      expect(result.has('add')).toBe(true);
      expect(result.has('ZERO')).toBe(true);
      expect(result.has('main')).toBe(true);
    });
  });

  describe('transitive re-exports with cycle detection', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'a.js', `
        export * from './b.js';
        export function fromA() {}
      `);
      writeFile(dir, 'b.js', `
        export * from './a.js';
        export function fromB() {}
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('handles circular re-exports without infinite loop', () => {
      expect(result.has('fromA')).toBe(true);
      expect(result.has('fromB')).toBe(true);
    });
  });

  describe('default exports are excluded from global map', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'main.js', `
        const config = { debug: false };
        export default config;
        export function init() {}
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('does not include default export in the map', () => {
      expect(result.has('default')).toBe(false);
    });

    it('includes named exports', () => {
      expect(result.has('init')).toBe(true);
    });
  });

  describe('NewExpression children', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'patch.js', `
        export const arrayPatch = new Patch(Array, {
          flat() { return []; },
          flatMap(fn) { return []; },
        });
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('extracts children from NewExpression object args', () => {
      expect(result.has('arrayPatch')).toBe(true);
      const children = result.get('arrayPatch').children;
      const names = children.map(c => c.name);
      expect(names).toContain('flat');
      expect(names).toContain('flatMap');
    });
  });

  describe('arrow function exports', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'arrows.js', `
        export const double = (x) => x * 2;
        export const identity = x => x;
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('detects arrow functions as function type', () => {
      expect(result.get('double').type).toBe('function');
      expect(result.get('identity').type).toBe('function');
    });
  });

  describe('resilience to parse errors', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'good.js', `export function good() {}`);
      writeFile(dir, 'bad.js', `export function bad( {{{ not valid`);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('still processes valid files when one file fails', () => {
      expect(result.has('good')).toBe(true);
    });
  });

  describe('skips excluded directories', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'src/main.js', `export function main() {}`);
      writeFile(dir, 'node_modules/dep/index.js', `export function dep() {}`);
      writeFile(dir, 'dist/bundle.js', `export function bundle() {}`);
      writeFile(dir, 'test/helper.js', `export function helper() {}`);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('finds exports from src/', () => {
      expect(result.has('main')).toBe(true);
    });

    it('skips node_modules/', () => {
      expect(result.has('dep')).toBe(false);
    });

    it('skips dist/', () => {
      expect(result.has('bundle')).toBe(false);
    });

    it('skips test/', () => {
      expect(result.has('helper')).toBe(false);
    });
  });

  describe('export { renamed } specifiers', () => {
    let dir;
    let result;

    beforeAll(() => {
      dir = makeTmpDir();
      writeFile(dir, 'lib.js', `
        function internalName() {}
        const obj = { a: 1 };
        export { internalName as publicName, obj as config };
      `);
      result = analyzeExports(dir);
    });

    afterAll(() => cleanup(dir));

    it('uses exported name, not local name', () => {
      expect(result.has('publicName')).toBe(true);
      expect(result.has('internalName')).toBe(false);
      expect(result.has('config')).toBe(true);
      expect(result.has('obj')).toBe(false);
    });

    it('resolves the declaration behind the alias', () => {
      expect(result.get('publicName').type).toBe('function');
      expect(result.get('config').type).toBe('object');
    });
  });
});
