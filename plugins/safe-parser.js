'use strict';

/**
 * JSDoc plugin: safe-parser
 *
 * Applies two patches to JSDoc 4.x:
 *
 * 1. Monkey-patches Parser.prototype.astnodeToMemberof to handle computed
 *    property keys like [Symbol.for('...')] and [Symbol.toStringTag] without
 *    crashing when the doclet is null.
 *
 * 2. Enables the Flow type annotation plugin in JSDoc's internal @babel/parser
 *    options so that files with // @flow pragmas and Flow type syntax parse
 *    correctly instead of throwing "This experimental syntax requires enabling
 *    one of the following parser plugin(s): flow".
 */

let patched = false;

exports.handlers = {
  beforeParse: function () {
    if (patched) return;
    patched = true;

    // ── Patch 1: Handle computed Symbol property keys ─────
    try {
      const Parser = require('jsdoc/lib/jsdoc/src/parser').Parser;
      const original = Parser.prototype.astnodeToMemberof;

      if (original) {
        Parser.prototype.astnodeToMemberof = function (node) {
          try {
            return original.call(this, node);
          } catch (e) {
            // Swallow the "Cannot read properties of null" crash
            // that occurs with computed Symbol property keys.
            if (e instanceof TypeError && e.message.includes('null')) {
              return '';
            }
            throw e;
          }
        };
      }
    } catch (_) {
      // If we can't patch (different JSDoc version, etc.), just continue.
    }

    // ── Patch 2: Enable Flow plugin in JSDoc's babel parser ─
    // JSDoc uses @babel/parser internally (jsdoc/lib/jsdoc/src/astbuilder.js)
    // and exports parserOptions so plugins can extend them.
    // Note: 'flow' and 'typescript' are mutually exclusive in @babel/parser.
    // JSDoc's default options do not include 'typescript', so this is safe.
    try {
      const astbuilder = require('jsdoc/lib/jsdoc/src/astbuilder');
      if (astbuilder.parserOptions && Array.isArray(astbuilder.parserOptions.plugins)) {
        if (!astbuilder.parserOptions.plugins.includes('flow')) {
          astbuilder.parserOptions.plugins.push('flow');
        }
      }
    } catch (_) {
      // If astbuilder is unavailable or structured differently, skip gracefully.
    }
  },
};
