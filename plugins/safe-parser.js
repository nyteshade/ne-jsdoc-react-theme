'use strict';

/**
 * JSDoc plugin: safe-parser
 *
 * Works around JSDoc 4.x crashes caused by computed property keys
 * like [Symbol.for('...')] and [Symbol.toStringTag]. JSDoc's parser
 * returns a null doclet for these nodes, then crashes when trying to
 * access .memberof on null.
 *
 * This plugin monkey-patches Parser.prototype.astnodeToMemberof to
 * return an empty string instead of crashing on a null doclet.
 */

let patched = false;

exports.handlers = {
  beforeParse: function () {
    if (patched) return;
    patched = true;

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
      // The worst case is the original crash still happens.
    }
  },
};
