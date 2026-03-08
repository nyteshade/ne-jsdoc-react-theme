(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l7 = Symbol.for("react.element");
      var n12 = Symbol.for("react.portal");
      var p15 = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r26 = Symbol.for("react.profiler");
      var t17 = Symbol.for("react.provider");
      var u5 = Symbol.for("react.context");
      var v3 = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x2 = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A2(a17) {
        if (null === a17 || "object" !== typeof a17) return null;
        a17 = z && a17[z] || a17["@@iterator"];
        return "function" === typeof a17 ? a17 : null;
      }
      var B2 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D2 = {};
      function E2(a17, b3, e24) {
        this.props = a17;
        this.context = b3;
        this.refs = D2;
        this.updater = e24 || B2;
      }
      E2.prototype.isReactComponent = {};
      E2.prototype.setState = function(a17, b3) {
        if ("object" !== typeof a17 && "function" !== typeof a17 && null != a17) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a17, b3, "setState");
      };
      E2.prototype.forceUpdate = function(a17) {
        this.updater.enqueueForceUpdate(this, a17, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E2.prototype;
      function G(a17, b3, e24) {
        this.props = a17;
        this.context = b3;
        this.refs = D2;
        this.updater = e24 || B2;
      }
      var H2 = G.prototype = new F();
      H2.constructor = G;
      C(H2, E2.prototype);
      H2.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a17, b3, e24) {
        var d8, c4 = {}, k = null, h = null;
        if (null != b3) for (d8 in void 0 !== b3.ref && (h = b3.ref), void 0 !== b3.key && (k = "" + b3.key), b3) J.call(b3, d8) && !L.hasOwnProperty(d8) && (c4[d8] = b3[d8]);
        var g3 = arguments.length - 2;
        if (1 === g3) c4.children = e24;
        else if (1 < g3) {
          for (var f12 = Array(g3), m7 = 0; m7 < g3; m7++) f12[m7] = arguments[m7 + 2];
          c4.children = f12;
        }
        if (a17 && a17.defaultProps) for (d8 in g3 = a17.defaultProps, g3) void 0 === c4[d8] && (c4[d8] = g3[d8]);
        return { $$typeof: l7, type: a17, key: k, ref: h, props: c4, _owner: K.current };
      }
      function N2(a17, b3) {
        return { $$typeof: l7, type: a17.type, key: b3, ref: a17.ref, props: a17.props, _owner: a17._owner };
      }
      function O(a17) {
        return "object" === typeof a17 && null !== a17 && a17.$$typeof === l7;
      }
      function escape(a17) {
        var b3 = { "=": "=0", ":": "=2" };
        return "$" + a17.replace(/[=:]/g, function(a18) {
          return b3[a18];
        });
      }
      var P4 = /\/+/g;
      function Q(a17, b3) {
        return "object" === typeof a17 && null !== a17 && null != a17.key ? escape("" + a17.key) : b3.toString(36);
      }
      function R4(a17, b3, e24, d8, c4) {
        var k = typeof a17;
        if ("undefined" === k || "boolean" === k) a17 = null;
        var h = false;
        if (null === a17) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a17.$$typeof) {
              case l7:
              case n12:
                h = true;
            }
        }
        if (h) return h = a17, c4 = c4(h), a17 = "" === d8 ? "." + Q(h, 0) : d8, I2(c4) ? (e24 = "", null != a17 && (e24 = a17.replace(P4, "$&/") + "/"), R4(c4, b3, e24, "", function(a18) {
          return a18;
        })) : null != c4 && (O(c4) && (c4 = N2(c4, e24 + (!c4.key || h && h.key === c4.key ? "" : ("" + c4.key).replace(P4, "$&/") + "/") + a17)), b3.push(c4)), 1;
        h = 0;
        d8 = "" === d8 ? "." : d8 + ":";
        if (I2(a17)) for (var g3 = 0; g3 < a17.length; g3++) {
          k = a17[g3];
          var f12 = d8 + Q(k, g3);
          h += R4(k, b3, e24, f12, c4);
        }
        else if (f12 = A2(a17), "function" === typeof f12) for (a17 = f12.call(a17), g3 = 0; !(k = a17.next()).done; ) k = k.value, f12 = d8 + Q(k, g3++), h += R4(k, b3, e24, f12, c4);
        else if ("object" === k) throw b3 = String(a17), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b3 ? "object with keys {" + Object.keys(a17).join(", ") + "}" : b3) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S2(a17, b3, e24) {
        if (null == a17) return a17;
        var d8 = [], c4 = 0;
        R4(a17, d8, "", "", function(a18) {
          return b3.call(e24, a18, c4++);
        });
        return d8;
      }
      function T2(a17) {
        if (-1 === a17._status) {
          var b3 = a17._result;
          b3 = b3();
          b3.then(function(b4) {
            if (0 === a17._status || -1 === a17._status) a17._status = 1, a17._result = b4;
          }, function(b4) {
            if (0 === a17._status || -1 === a17._status) a17._status = 2, a17._result = b4;
          });
          -1 === a17._status && (a17._status = 0, a17._result = b3);
        }
        if (1 === a17._status) return a17._result.default;
        throw a17._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S2, forEach: function(a17, b3, e24) {
        S2(a17, function() {
          b3.apply(this, arguments);
        }, e24);
      }, count: function(a17) {
        var b3 = 0;
        S2(a17, function() {
          b3++;
        });
        return b3;
      }, toArray: function(a17) {
        return S2(a17, function(a18) {
          return a18;
        }) || [];
      }, only: function(a17) {
        if (!O(a17)) throw Error("React.Children.only expected to receive a single React element child.");
        return a17;
      } };
      exports.Component = E2;
      exports.Fragment = p15;
      exports.Profiler = r26;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X;
      exports.cloneElement = function(a17, b3, e24) {
        if (null === a17 || void 0 === a17) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a17 + ".");
        var d8 = C({}, a17.props), c4 = a17.key, k = a17.ref, h = a17._owner;
        if (null != b3) {
          void 0 !== b3.ref && (k = b3.ref, h = K.current);
          void 0 !== b3.key && (c4 = "" + b3.key);
          if (a17.type && a17.type.defaultProps) var g3 = a17.type.defaultProps;
          for (f12 in b3) J.call(b3, f12) && !L.hasOwnProperty(f12) && (d8[f12] = void 0 === b3[f12] && void 0 !== g3 ? g3[f12] : b3[f12]);
        }
        var f12 = arguments.length - 2;
        if (1 === f12) d8.children = e24;
        else if (1 < f12) {
          g3 = Array(f12);
          for (var m7 = 0; m7 < f12; m7++) g3[m7] = arguments[m7 + 2];
          d8.children = g3;
        }
        return { $$typeof: l7, type: a17.type, key: c4, ref: k, props: d8, _owner: h };
      };
      exports.createContext = function(a17) {
        a17 = { $$typeof: u5, _currentValue: a17, _currentValue2: a17, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a17.Provider = { $$typeof: t17, _context: a17 };
        return a17.Consumer = a17;
      };
      exports.createElement = M;
      exports.createFactory = function(a17) {
        var b3 = M.bind(null, a17);
        b3.type = a17;
        return b3;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a17) {
        return { $$typeof: v3, render: a17 };
      };
      exports.isValidElement = O;
      exports.lazy = function(a17) {
        return { $$typeof: y, _payload: { _status: -1, _result: a17 }, _init: T2 };
      };
      exports.memo = function(a17, b3) {
        return { $$typeof: x2, type: a17, compare: void 0 === b3 ? null : b3 };
      };
      exports.startTransition = function(a17) {
        var b3 = V.transition;
        V.transition = {};
        try {
          a17();
        } finally {
          V.transition = b3;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a17, b3) {
        return U.current.useCallback(a17, b3);
      };
      exports.useContext = function(a17) {
        return U.current.useContext(a17);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a17) {
        return U.current.useDeferredValue(a17);
      };
      exports.useEffect = function(a17, b3) {
        return U.current.useEffect(a17, b3);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a17, b3, e24) {
        return U.current.useImperativeHandle(a17, b3, e24);
      };
      exports.useInsertionEffect = function(a17, b3) {
        return U.current.useInsertionEffect(a17, b3);
      };
      exports.useLayoutEffect = function(a17, b3) {
        return U.current.useLayoutEffect(a17, b3);
      };
      exports.useMemo = function(a17, b3) {
        return U.current.useMemo(a17, b3);
      };
      exports.useReducer = function(a17, b3, e24) {
        return U.current.useReducer(a17, b3, e24);
      };
      exports.useRef = function(a17) {
        return U.current.useRef(a17);
      };
      exports.useState = function(a17) {
        return U.current.useState(a17);
      };
      exports.useSyncExternalStore = function(a17, b3, e24) {
        return U.current.useSyncExternalStore(a17, b3, e24);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f12(a17, b3) {
        var c4 = a17.length;
        a17.push(b3);
        a: for (; 0 < c4; ) {
          var d8 = c4 - 1 >>> 1, e24 = a17[d8];
          if (0 < g3(e24, b3)) a17[d8] = b3, a17[c4] = e24, c4 = d8;
          else break a;
        }
      }
      function h(a17) {
        return 0 === a17.length ? null : a17[0];
      }
      function k(a17) {
        if (0 === a17.length) return null;
        var b3 = a17[0], c4 = a17.pop();
        if (c4 !== b3) {
          a17[0] = c4;
          a: for (var d8 = 0, e24 = a17.length, w = e24 >>> 1; d8 < w; ) {
            var m7 = 2 * (d8 + 1) - 1, C = a17[m7], n12 = m7 + 1, x2 = a17[n12];
            if (0 > g3(C, c4)) n12 < e24 && 0 > g3(x2, C) ? (a17[d8] = x2, a17[n12] = c4, d8 = n12) : (a17[d8] = C, a17[m7] = c4, d8 = m7);
            else if (n12 < e24 && 0 > g3(x2, c4)) a17[d8] = x2, a17[n12] = c4, d8 = n12;
            else break a;
          }
        }
        return b3;
      }
      function g3(a17, b3) {
        var c4 = a17.sortIndex - b3.sortIndex;
        return 0 !== c4 ? c4 : a17.id - b3.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l7 = performance;
        exports.unstable_now = function() {
          return l7.now();
        };
      } else {
        p15 = Date, q = p15.now();
        exports.unstable_now = function() {
          return p15.now() - q;
        };
      }
      var l7;
      var p15;
      var q;
      var r26 = [];
      var t17 = [];
      var u5 = 1;
      var v3 = null;
      var y = 3;
      var z = false;
      var A2 = false;
      var B2 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E2 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a17) {
        for (var b3 = h(t17); null !== b3; ) {
          if (null === b3.callback) k(t17);
          else if (b3.startTime <= a17) k(t17), b3.sortIndex = b3.expirationTime, f12(r26, b3);
          else break;
          b3 = h(t17);
        }
      }
      function H2(a17) {
        B2 = false;
        G(a17);
        if (!A2) if (null !== h(r26)) A2 = true, I2(J);
        else {
          var b3 = h(t17);
          null !== b3 && K(H2, b3.startTime - a17);
        }
      }
      function J(a17, b3) {
        A2 = false;
        B2 && (B2 = false, E2(L), L = -1);
        z = true;
        var c4 = y;
        try {
          G(b3);
          for (v3 = h(r26); null !== v3 && (!(v3.expirationTime > b3) || a17 && !M()); ) {
            var d8 = v3.callback;
            if ("function" === typeof d8) {
              v3.callback = null;
              y = v3.priorityLevel;
              var e24 = d8(v3.expirationTime <= b3);
              b3 = exports.unstable_now();
              "function" === typeof e24 ? v3.callback = e24 : v3 === h(r26) && k(r26);
              G(b3);
            } else k(r26);
            v3 = h(r26);
          }
          if (null !== v3) var w = true;
          else {
            var m7 = h(t17);
            null !== m7 && K(H2, m7.startTime - b3);
            w = false;
          }
          return w;
        } finally {
          v3 = null, y = c4, z = false;
        }
      }
      var N2 = false;
      var O = null;
      var L = -1;
      var P4 = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P4 ? false : true;
      }
      function R4() {
        if (null !== O) {
          var a17 = exports.unstable_now();
          Q = a17;
          var b3 = true;
          try {
            b3 = O(true, a17);
          } finally {
            b3 ? S2() : (N2 = false, O = null);
          }
        } else N2 = false;
      }
      var S2;
      if ("function" === typeof F) S2 = function() {
        F(R4);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U = T2.port2;
        T2.port1.onmessage = R4;
        S2 = function() {
          U.postMessage(null);
        };
      } else S2 = function() {
        D2(R4, 0);
      };
      var T2;
      var U;
      function I2(a17) {
        O = a17;
        N2 || (N2 = true, S2());
      }
      function K(a17, b3) {
        L = D2(function() {
          a17(exports.unstable_now());
        }, b3);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a17) {
        a17.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z || (A2 = true, I2(J));
      };
      exports.unstable_forceFrameRate = function(a17) {
        0 > a17 || 125 < a17 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P4 = 0 < a17 ? Math.floor(1e3 / a17) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r26);
      };
      exports.unstable_next = function(a17) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b3 = 3;
            break;
          default:
            b3 = y;
        }
        var c4 = y;
        y = b3;
        try {
          return a17();
        } finally {
          y = c4;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a17, b3) {
        switch (a17) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a17 = 3;
        }
        var c4 = y;
        y = a17;
        try {
          return b3();
        } finally {
          y = c4;
        }
      };
      exports.unstable_scheduleCallback = function(a17, b3, c4) {
        var d8 = exports.unstable_now();
        "object" === typeof c4 && null !== c4 ? (c4 = c4.delay, c4 = "number" === typeof c4 && 0 < c4 ? d8 + c4 : d8) : c4 = d8;
        switch (a17) {
          case 1:
            var e24 = -1;
            break;
          case 2:
            e24 = 250;
            break;
          case 5:
            e24 = 1073741823;
            break;
          case 4:
            e24 = 1e4;
            break;
          default:
            e24 = 5e3;
        }
        e24 = c4 + e24;
        a17 = { id: u5++, callback: b3, priorityLevel: a17, startTime: c4, expirationTime: e24, sortIndex: -1 };
        c4 > d8 ? (a17.sortIndex = c4, f12(t17, a17), null === h(r26) && a17 === h(t17) && (B2 ? (E2(L), L = -1) : B2 = true, K(H2, c4 - d8))) : (a17.sortIndex = e24, f12(r26, a17), A2 || z || (A2 = true, I2(J)));
        return a17;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a17) {
        var b3 = y;
        return function() {
          var c4 = y;
          y = b3;
          try {
            return a17.apply(this, arguments);
          } finally {
            y = c4;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p15(a17) {
        for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a17, c4 = 1; c4 < arguments.length; c4++) b3 += "&args[]=" + encodeURIComponent(arguments[c4]);
        return "Minified React error #" + a17 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a17, b3) {
        ha(a17, b3);
        ha(a17 + "Capture", b3);
      }
      function ha(a17, b3) {
        ea[a17] = b3;
        for (a17 = 0; a17 < b3.length; a17++) da.add(b3[a17]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a17) {
        if (ja.call(ma, a17)) return true;
        if (ja.call(la, a17)) return false;
        if (ka.test(a17)) return ma[a17] = true;
        la[a17] = true;
        return false;
      }
      function pa(a17, b3, c4, d8) {
        if (null !== c4 && 0 === c4.type) return false;
        switch (typeof b3) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d8) return false;
            if (null !== c4) return !c4.acceptsBooleans;
            a17 = a17.toLowerCase().slice(0, 5);
            return "data-" !== a17 && "aria-" !== a17;
          default:
            return false;
        }
      }
      function qa(a17, b3, c4, d8) {
        if (null === b3 || "undefined" === typeof b3 || pa(a17, b3, c4, d8)) return true;
        if (d8) return false;
        if (null !== c4) switch (c4.type) {
          case 3:
            return !b3;
          case 4:
            return false === b3;
          case 5:
            return isNaN(b3);
          case 6:
            return isNaN(b3) || 1 > b3;
        }
        return false;
      }
      function v3(a17, b3, c4, d8, e24, f12, g3) {
        this.acceptsBooleans = 2 === b3 || 3 === b3 || 4 === b3;
        this.attributeName = d8;
        this.attributeNamespace = e24;
        this.mustUseProperty = c4;
        this.propertyName = a17;
        this.type = b3;
        this.sanitizeURL = f12;
        this.removeEmptyString = g3;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a17) {
        z[a17] = new v3(a17, 0, false, a17, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a17) {
        var b3 = a17[0];
        z[b3] = new v3(b3, 1, false, a17[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a17) {
        z[a17] = new v3(a17, 2, false, a17.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a17) {
        z[a17] = new v3(a17, 2, false, a17, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a17) {
        z[a17] = new v3(a17, 3, false, a17.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a17) {
        z[a17] = new v3(a17, 3, true, a17, null, false, false);
      });
      ["capture", "download"].forEach(function(a17) {
        z[a17] = new v3(a17, 4, false, a17, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a17) {
        z[a17] = new v3(a17, 6, false, a17, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a17) {
        z[a17] = new v3(a17, 5, false, a17.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a17) {
        return a17[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a17) {
        var b3 = a17.replace(
          ra,
          sa
        );
        z[b3] = new v3(b3, 1, false, a17, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a17) {
        var b3 = a17.replace(ra, sa);
        z[b3] = new v3(b3, 1, false, a17, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a17) {
        var b3 = a17.replace(ra, sa);
        z[b3] = new v3(b3, 1, false, a17, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a17) {
        z[a17] = new v3(a17, 1, false, a17.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a17) {
        z[a17] = new v3(a17, 1, false, a17.toLowerCase(), null, true, true);
      });
      function ta(a17, b3, c4, d8) {
        var e24 = z.hasOwnProperty(b3) ? z[b3] : null;
        if (null !== e24 ? 0 !== e24.type : d8 || !(2 < b3.length) || "o" !== b3[0] && "O" !== b3[0] || "n" !== b3[1] && "N" !== b3[1]) qa(b3, c4, e24, d8) && (c4 = null), d8 || null === e24 ? oa(b3) && (null === c4 ? a17.removeAttribute(b3) : a17.setAttribute(b3, "" + c4)) : e24.mustUseProperty ? a17[e24.propertyName] = null === c4 ? 3 === e24.type ? false : "" : c4 : (b3 = e24.attributeName, d8 = e24.attributeNamespace, null === c4 ? a17.removeAttribute(b3) : (e24 = e24.type, c4 = 3 === e24 || 4 === e24 && true === c4 ? "" : "" + c4, d8 ? a17.setAttributeNS(d8, b3, c4) : a17.setAttribute(b3, c4)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a17) {
        if (null === a17 || "object" !== typeof a17) return null;
        a17 = Ja && a17[Ja] || a17["@@iterator"];
        return "function" === typeof a17 ? a17 : null;
      }
      var A2 = Object.assign;
      var La;
      function Ma(a17) {
        if (void 0 === La) try {
          throw Error();
        } catch (c4) {
          var b3 = c4.stack.trim().match(/\n( *(at )?)/);
          La = b3 && b3[1] || "";
        }
        return "\n" + La + a17;
      }
      var Na = false;
      function Oa(a17, b3) {
        if (!a17 || Na) return "";
        Na = true;
        var c4 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b3) if (b3 = function() {
            throw Error();
          }, Object.defineProperty(b3.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b3, []);
            } catch (l7) {
              var d8 = l7;
            }
            Reflect.construct(a17, [], b3);
          } else {
            try {
              b3.call();
            } catch (l7) {
              d8 = l7;
            }
            a17.call(b3.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l7) {
              d8 = l7;
            }
            a17();
          }
        } catch (l7) {
          if (l7 && d8 && "string" === typeof l7.stack) {
            for (var e24 = l7.stack.split("\n"), f12 = d8.stack.split("\n"), g3 = e24.length - 1, h = f12.length - 1; 1 <= g3 && 0 <= h && e24[g3] !== f12[h]; ) h--;
            for (; 1 <= g3 && 0 <= h; g3--, h--) if (e24[g3] !== f12[h]) {
              if (1 !== g3 || 1 !== h) {
                do
                  if (g3--, h--, 0 > h || e24[g3] !== f12[h]) {
                    var k = "\n" + e24[g3].replace(" at new ", " at ");
                    a17.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a17.displayName));
                    return k;
                  }
                while (1 <= g3 && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c4;
        }
        return (a17 = a17 ? a17.displayName || a17.name : "") ? Ma(a17) : "";
      }
      function Pa(a17) {
        switch (a17.tag) {
          case 5:
            return Ma(a17.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a17 = Oa(a17.type, false), a17;
          case 11:
            return a17 = Oa(a17.type.render, false), a17;
          case 1:
            return a17 = Oa(a17.type, true), a17;
          default:
            return "";
        }
      }
      function Qa(a17) {
        if (null == a17) return null;
        if ("function" === typeof a17) return a17.displayName || a17.name || null;
        if ("string" === typeof a17) return a17;
        switch (a17) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a17) switch (a17.$$typeof) {
          case Ca:
            return (a17.displayName || "Context") + ".Consumer";
          case Ba:
            return (a17._context.displayName || "Context") + ".Provider";
          case Da:
            var b3 = a17.render;
            a17 = a17.displayName;
            a17 || (a17 = b3.displayName || b3.name || "", a17 = "" !== a17 ? "ForwardRef(" + a17 + ")" : "ForwardRef");
            return a17;
          case Ga:
            return b3 = a17.displayName || null, null !== b3 ? b3 : Qa(a17.type) || "Memo";
          case Ha:
            b3 = a17._payload;
            a17 = a17._init;
            try {
              return Qa(a17(b3));
            } catch (c4) {
            }
        }
        return null;
      }
      function Ra(a17) {
        var b3 = a17.type;
        switch (a17.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b3.displayName || "Context") + ".Consumer";
          case 10:
            return (b3._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a17 = b3.render, a17 = a17.displayName || a17.name || "", b3.displayName || ("" !== a17 ? "ForwardRef(" + a17 + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b3;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b3);
          case 8:
            return b3 === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b3) return b3.displayName || b3.name || null;
            if ("string" === typeof b3) return b3;
        }
        return null;
      }
      function Sa(a17) {
        switch (typeof a17) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a17;
          case "object":
            return a17;
          default:
            return "";
        }
      }
      function Ta(a17) {
        var b3 = a17.type;
        return (a17 = a17.nodeName) && "input" === a17.toLowerCase() && ("checkbox" === b3 || "radio" === b3);
      }
      function Ua(a17) {
        var b3 = Ta(a17) ? "checked" : "value", c4 = Object.getOwnPropertyDescriptor(a17.constructor.prototype, b3), d8 = "" + a17[b3];
        if (!a17.hasOwnProperty(b3) && "undefined" !== typeof c4 && "function" === typeof c4.get && "function" === typeof c4.set) {
          var e24 = c4.get, f12 = c4.set;
          Object.defineProperty(a17, b3, { configurable: true, get: function() {
            return e24.call(this);
          }, set: function(a18) {
            d8 = "" + a18;
            f12.call(this, a18);
          } });
          Object.defineProperty(a17, b3, { enumerable: c4.enumerable });
          return { getValue: function() {
            return d8;
          }, setValue: function(a18) {
            d8 = "" + a18;
          }, stopTracking: function() {
            a17._valueTracker = null;
            delete a17[b3];
          } };
        }
      }
      function Va(a17) {
        a17._valueTracker || (a17._valueTracker = Ua(a17));
      }
      function Wa(a17) {
        if (!a17) return false;
        var b3 = a17._valueTracker;
        if (!b3) return true;
        var c4 = b3.getValue();
        var d8 = "";
        a17 && (d8 = Ta(a17) ? a17.checked ? "true" : "false" : a17.value);
        a17 = d8;
        return a17 !== c4 ? (b3.setValue(a17), true) : false;
      }
      function Xa(a17) {
        a17 = a17 || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a17) return null;
        try {
          return a17.activeElement || a17.body;
        } catch (b3) {
          return a17.body;
        }
      }
      function Ya(a17, b3) {
        var c4 = b3.checked;
        return A2({}, b3, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c4 ? c4 : a17._wrapperState.initialChecked });
      }
      function Za(a17, b3) {
        var c4 = null == b3.defaultValue ? "" : b3.defaultValue, d8 = null != b3.checked ? b3.checked : b3.defaultChecked;
        c4 = Sa(null != b3.value ? b3.value : c4);
        a17._wrapperState = { initialChecked: d8, initialValue: c4, controlled: "checkbox" === b3.type || "radio" === b3.type ? null != b3.checked : null != b3.value };
      }
      function ab(a17, b3) {
        b3 = b3.checked;
        null != b3 && ta(a17, "checked", b3, false);
      }
      function bb(a17, b3) {
        ab(a17, b3);
        var c4 = Sa(b3.value), d8 = b3.type;
        if (null != c4) if ("number" === d8) {
          if (0 === c4 && "" === a17.value || a17.value != c4) a17.value = "" + c4;
        } else a17.value !== "" + c4 && (a17.value = "" + c4);
        else if ("submit" === d8 || "reset" === d8) {
          a17.removeAttribute("value");
          return;
        }
        b3.hasOwnProperty("value") ? cb(a17, b3.type, c4) : b3.hasOwnProperty("defaultValue") && cb(a17, b3.type, Sa(b3.defaultValue));
        null == b3.checked && null != b3.defaultChecked && (a17.defaultChecked = !!b3.defaultChecked);
      }
      function db(a17, b3, c4) {
        if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
          var d8 = b3.type;
          if (!("submit" !== d8 && "reset" !== d8 || void 0 !== b3.value && null !== b3.value)) return;
          b3 = "" + a17._wrapperState.initialValue;
          c4 || b3 === a17.value || (a17.value = b3);
          a17.defaultValue = b3;
        }
        c4 = a17.name;
        "" !== c4 && (a17.name = "");
        a17.defaultChecked = !!a17._wrapperState.initialChecked;
        "" !== c4 && (a17.name = c4);
      }
      function cb(a17, b3, c4) {
        if ("number" !== b3 || Xa(a17.ownerDocument) !== a17) null == c4 ? a17.defaultValue = "" + a17._wrapperState.initialValue : a17.defaultValue !== "" + c4 && (a17.defaultValue = "" + c4);
      }
      var eb = Array.isArray;
      function fb(a17, b3, c4, d8) {
        a17 = a17.options;
        if (b3) {
          b3 = {};
          for (var e24 = 0; e24 < c4.length; e24++) b3["$" + c4[e24]] = true;
          for (c4 = 0; c4 < a17.length; c4++) e24 = b3.hasOwnProperty("$" + a17[c4].value), a17[c4].selected !== e24 && (a17[c4].selected = e24), e24 && d8 && (a17[c4].defaultSelected = true);
        } else {
          c4 = "" + Sa(c4);
          b3 = null;
          for (e24 = 0; e24 < a17.length; e24++) {
            if (a17[e24].value === c4) {
              a17[e24].selected = true;
              d8 && (a17[e24].defaultSelected = true);
              return;
            }
            null !== b3 || a17[e24].disabled || (b3 = a17[e24]);
          }
          null !== b3 && (b3.selected = true);
        }
      }
      function gb(a17, b3) {
        if (null != b3.dangerouslySetInnerHTML) throw Error(p15(91));
        return A2({}, b3, { value: void 0, defaultValue: void 0, children: "" + a17._wrapperState.initialValue });
      }
      function hb(a17, b3) {
        var c4 = b3.value;
        if (null == c4) {
          c4 = b3.children;
          b3 = b3.defaultValue;
          if (null != c4) {
            if (null != b3) throw Error(p15(92));
            if (eb(c4)) {
              if (1 < c4.length) throw Error(p15(93));
              c4 = c4[0];
            }
            b3 = c4;
          }
          null == b3 && (b3 = "");
          c4 = b3;
        }
        a17._wrapperState = { initialValue: Sa(c4) };
      }
      function ib(a17, b3) {
        var c4 = Sa(b3.value), d8 = Sa(b3.defaultValue);
        null != c4 && (c4 = "" + c4, c4 !== a17.value && (a17.value = c4), null == b3.defaultValue && a17.defaultValue !== c4 && (a17.defaultValue = c4));
        null != d8 && (a17.defaultValue = "" + d8);
      }
      function jb(a17) {
        var b3 = a17.textContent;
        b3 === a17._wrapperState.initialValue && "" !== b3 && null !== b3 && (a17.value = b3);
      }
      function kb(a17) {
        switch (a17) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a17, b3) {
        return null == a17 || "http://www.w3.org/1999/xhtml" === a17 ? kb(b3) : "http://www.w3.org/2000/svg" === a17 && "foreignObject" === b3 ? "http://www.w3.org/1999/xhtml" : a17;
      }
      var mb;
      var nb = (function(a17) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b3, c4, d8, e24) {
          MSApp.execUnsafeLocalFunction(function() {
            return a17(b3, c4, d8, e24);
          });
        } : a17;
      })(function(a17, b3) {
        if ("http://www.w3.org/2000/svg" !== a17.namespaceURI || "innerHTML" in a17) a17.innerHTML = b3;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
          for (b3 = mb.firstChild; a17.firstChild; ) a17.removeChild(a17.firstChild);
          for (; b3.firstChild; ) a17.appendChild(b3.firstChild);
        }
      });
      function ob(a17, b3) {
        if (b3) {
          var c4 = a17.firstChild;
          if (c4 && c4 === a17.lastChild && 3 === c4.nodeType) {
            c4.nodeValue = b3;
            return;
          }
        }
        a17.textContent = b3;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a17) {
        qb.forEach(function(b3) {
          b3 = b3 + a17.charAt(0).toUpperCase() + a17.substring(1);
          pb[b3] = pb[a17];
        });
      });
      function rb(a17, b3, c4) {
        return null == b3 || "boolean" === typeof b3 || "" === b3 ? "" : c4 || "number" !== typeof b3 || 0 === b3 || pb.hasOwnProperty(a17) && pb[a17] ? ("" + b3).trim() : b3 + "px";
      }
      function sb(a17, b3) {
        a17 = a17.style;
        for (var c4 in b3) if (b3.hasOwnProperty(c4)) {
          var d8 = 0 === c4.indexOf("--"), e24 = rb(c4, b3[c4], d8);
          "float" === c4 && (c4 = "cssFloat");
          d8 ? a17.setProperty(c4, e24) : a17[c4] = e24;
        }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a17, b3) {
        if (b3) {
          if (tb[a17] && (null != b3.children || null != b3.dangerouslySetInnerHTML)) throw Error(p15(137, a17));
          if (null != b3.dangerouslySetInnerHTML) {
            if (null != b3.children) throw Error(p15(60));
            if ("object" !== typeof b3.dangerouslySetInnerHTML || !("__html" in b3.dangerouslySetInnerHTML)) throw Error(p15(61));
          }
          if (null != b3.style && "object" !== typeof b3.style) throw Error(p15(62));
        }
      }
      function vb(a17, b3) {
        if (-1 === a17.indexOf("-")) return "string" === typeof b3.is;
        switch (a17) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a17) {
        a17 = a17.target || a17.srcElement || window;
        a17.correspondingUseElement && (a17 = a17.correspondingUseElement);
        return 3 === a17.nodeType ? a17.parentNode : a17;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a17) {
        if (a17 = Cb(a17)) {
          if ("function" !== typeof yb) throw Error(p15(280));
          var b3 = a17.stateNode;
          b3 && (b3 = Db(b3), yb(a17.stateNode, a17.type, b3));
        }
      }
      function Eb(a17) {
        zb ? Ab ? Ab.push(a17) : Ab = [a17] : zb = a17;
      }
      function Fb() {
        if (zb) {
          var a17 = zb, b3 = Ab;
          Ab = zb = null;
          Bb(a17);
          if (b3) for (a17 = 0; a17 < b3.length; a17++) Bb(b3[a17]);
        }
      }
      function Gb(a17, b3) {
        return a17(b3);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a17, b3, c4) {
        if (Ib) return a17(b3, c4);
        Ib = true;
        try {
          return Gb(a17, b3, c4);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a17, b3) {
        var c4 = a17.stateNode;
        if (null === c4) return null;
        var d8 = Db(c4);
        if (null === d8) return null;
        c4 = d8[b3];
        a: switch (b3) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d8 = !d8.disabled) || (a17 = a17.type, d8 = !("button" === a17 || "input" === a17 || "select" === a17 || "textarea" === a17));
            a17 = !d8;
            break a;
          default:
            a17 = false;
        }
        if (a17) return null;
        if (c4 && "function" !== typeof c4) throw Error(p15(231, b3, typeof c4));
        return c4;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a17) {
        Lb = false;
      }
      var Mb;
      function Nb(a17, b3, c4, d8, e24, f12, g3, h, k) {
        var l7 = Array.prototype.slice.call(arguments, 3);
        try {
          b3.apply(c4, l7);
        } catch (m7) {
          this.onError(m7);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a17) {
        Ob = true;
        Pb = a17;
      } };
      function Tb(a17, b3, c4, d8, e24, f12, g3, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a17, b3, c4, d8, e24, f12, g3, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l7 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p15(198));
          Qb || (Qb = true, Rb = l7);
        }
      }
      function Vb(a17) {
        var b3 = a17, c4 = a17;
        if (a17.alternate) for (; b3.return; ) b3 = b3.return;
        else {
          a17 = b3;
          do
            b3 = a17, 0 !== (b3.flags & 4098) && (c4 = b3.return), a17 = b3.return;
          while (a17);
        }
        return 3 === b3.tag ? c4 : null;
      }
      function Wb(a17) {
        if (13 === a17.tag) {
          var b3 = a17.memoizedState;
          null === b3 && (a17 = a17.alternate, null !== a17 && (b3 = a17.memoizedState));
          if (null !== b3) return b3.dehydrated;
        }
        return null;
      }
      function Xb(a17) {
        if (Vb(a17) !== a17) throw Error(p15(188));
      }
      function Yb(a17) {
        var b3 = a17.alternate;
        if (!b3) {
          b3 = Vb(a17);
          if (null === b3) throw Error(p15(188));
          return b3 !== a17 ? null : a17;
        }
        for (var c4 = a17, d8 = b3; ; ) {
          var e24 = c4.return;
          if (null === e24) break;
          var f12 = e24.alternate;
          if (null === f12) {
            d8 = e24.return;
            if (null !== d8) {
              c4 = d8;
              continue;
            }
            break;
          }
          if (e24.child === f12.child) {
            for (f12 = e24.child; f12; ) {
              if (f12 === c4) return Xb(e24), a17;
              if (f12 === d8) return Xb(e24), b3;
              f12 = f12.sibling;
            }
            throw Error(p15(188));
          }
          if (c4.return !== d8.return) c4 = e24, d8 = f12;
          else {
            for (var g3 = false, h = e24.child; h; ) {
              if (h === c4) {
                g3 = true;
                c4 = e24;
                d8 = f12;
                break;
              }
              if (h === d8) {
                g3 = true;
                d8 = e24;
                c4 = f12;
                break;
              }
              h = h.sibling;
            }
            if (!g3) {
              for (h = f12.child; h; ) {
                if (h === c4) {
                  g3 = true;
                  c4 = f12;
                  d8 = e24;
                  break;
                }
                if (h === d8) {
                  g3 = true;
                  d8 = f12;
                  c4 = e24;
                  break;
                }
                h = h.sibling;
              }
              if (!g3) throw Error(p15(189));
            }
          }
          if (c4.alternate !== d8) throw Error(p15(190));
        }
        if (3 !== c4.tag) throw Error(p15(188));
        return c4.stateNode.current === c4 ? a17 : b3;
      }
      function Zb(a17) {
        a17 = Yb(a17);
        return null !== a17 ? $b(a17) : null;
      }
      function $b(a17) {
        if (5 === a17.tag || 6 === a17.tag) return a17;
        for (a17 = a17.child; null !== a17; ) {
          var b3 = $b(a17);
          if (null !== b3) return b3;
          a17 = a17.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B2 = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a17) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a17, void 0, 128 === (a17.current.flags & 128));
        } catch (b3) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a17) {
        a17 >>>= 0;
        return 0 === a17 ? 32 : 31 - (pc(a17) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a17) {
        switch (a17 & -a17) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a17 & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a17 & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a17;
        }
      }
      function uc(a17, b3) {
        var c4 = a17.pendingLanes;
        if (0 === c4) return 0;
        var d8 = 0, e24 = a17.suspendedLanes, f12 = a17.pingedLanes, g3 = c4 & 268435455;
        if (0 !== g3) {
          var h = g3 & ~e24;
          0 !== h ? d8 = tc(h) : (f12 &= g3, 0 !== f12 && (d8 = tc(f12)));
        } else g3 = c4 & ~e24, 0 !== g3 ? d8 = tc(g3) : 0 !== f12 && (d8 = tc(f12));
        if (0 === d8) return 0;
        if (0 !== b3 && b3 !== d8 && 0 === (b3 & e24) && (e24 = d8 & -d8, f12 = b3 & -b3, e24 >= f12 || 16 === e24 && 0 !== (f12 & 4194240))) return b3;
        0 !== (d8 & 4) && (d8 |= c4 & 16);
        b3 = a17.entangledLanes;
        if (0 !== b3) for (a17 = a17.entanglements, b3 &= d8; 0 < b3; ) c4 = 31 - oc(b3), e24 = 1 << c4, d8 |= a17[c4], b3 &= ~e24;
        return d8;
      }
      function vc(a17, b3) {
        switch (a17) {
          case 1:
          case 2:
          case 4:
            return b3 + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b3 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a17, b3) {
        for (var c4 = a17.suspendedLanes, d8 = a17.pingedLanes, e24 = a17.expirationTimes, f12 = a17.pendingLanes; 0 < f12; ) {
          var g3 = 31 - oc(f12), h = 1 << g3, k = e24[g3];
          if (-1 === k) {
            if (0 === (h & c4) || 0 !== (h & d8)) e24[g3] = vc(h, b3);
          } else k <= b3 && (a17.expiredLanes |= h);
          f12 &= ~h;
        }
      }
      function xc(a17) {
        a17 = a17.pendingLanes & -1073741825;
        return 0 !== a17 ? a17 : a17 & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a17 = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a17;
      }
      function zc(a17) {
        for (var b3 = [], c4 = 0; 31 > c4; c4++) b3.push(a17);
        return b3;
      }
      function Ac(a17, b3, c4) {
        a17.pendingLanes |= b3;
        536870912 !== b3 && (a17.suspendedLanes = 0, a17.pingedLanes = 0);
        a17 = a17.eventTimes;
        b3 = 31 - oc(b3);
        a17[b3] = c4;
      }
      function Bc(a17, b3) {
        var c4 = a17.pendingLanes & ~b3;
        a17.pendingLanes = b3;
        a17.suspendedLanes = 0;
        a17.pingedLanes = 0;
        a17.expiredLanes &= b3;
        a17.mutableReadLanes &= b3;
        a17.entangledLanes &= b3;
        b3 = a17.entanglements;
        var d8 = a17.eventTimes;
        for (a17 = a17.expirationTimes; 0 < c4; ) {
          var e24 = 31 - oc(c4), f12 = 1 << e24;
          b3[e24] = 0;
          d8[e24] = -1;
          a17[e24] = -1;
          c4 &= ~f12;
        }
      }
      function Cc(a17, b3) {
        var c4 = a17.entangledLanes |= b3;
        for (a17 = a17.entanglements; c4; ) {
          var d8 = 31 - oc(c4), e24 = 1 << d8;
          e24 & b3 | a17[d8] & b3 && (a17[d8] |= b3);
          c4 &= ~e24;
        }
      }
      var C = 0;
      function Dc(a17) {
        a17 &= -a17;
        return 1 < a17 ? 4 < a17 ? 0 !== (a17 & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a17, b3) {
        switch (a17) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b3.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b3.pointerId);
        }
      }
      function Tc(a17, b3, c4, d8, e24, f12) {
        if (null === a17 || a17.nativeEvent !== f12) return a17 = { blockedOn: b3, domEventName: c4, eventSystemFlags: d8, nativeEvent: f12, targetContainers: [e24] }, null !== b3 && (b3 = Cb(b3), null !== b3 && Fc(b3)), a17;
        a17.eventSystemFlags |= d8;
        b3 = a17.targetContainers;
        null !== e24 && -1 === b3.indexOf(e24) && b3.push(e24);
        return a17;
      }
      function Uc(a17, b3, c4, d8, e24) {
        switch (b3) {
          case "focusin":
            return Lc = Tc(Lc, a17, b3, c4, d8, e24), true;
          case "dragenter":
            return Mc = Tc(Mc, a17, b3, c4, d8, e24), true;
          case "mouseover":
            return Nc = Tc(Nc, a17, b3, c4, d8, e24), true;
          case "pointerover":
            var f12 = e24.pointerId;
            Oc.set(f12, Tc(Oc.get(f12) || null, a17, b3, c4, d8, e24));
            return true;
          case "gotpointercapture":
            return f12 = e24.pointerId, Pc.set(f12, Tc(Pc.get(f12) || null, a17, b3, c4, d8, e24)), true;
        }
        return false;
      }
      function Vc(a17) {
        var b3 = Wc(a17.target);
        if (null !== b3) {
          var c4 = Vb(b3);
          if (null !== c4) {
            if (b3 = c4.tag, 13 === b3) {
              if (b3 = Wb(c4), null !== b3) {
                a17.blockedOn = b3;
                Ic(a17.priority, function() {
                  Gc(c4);
                });
                return;
              }
            } else if (3 === b3 && c4.stateNode.current.memoizedState.isDehydrated) {
              a17.blockedOn = 3 === c4.tag ? c4.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a17.blockedOn = null;
      }
      function Xc(a17) {
        if (null !== a17.blockedOn) return false;
        for (var b3 = a17.targetContainers; 0 < b3.length; ) {
          var c4 = Yc(a17.domEventName, a17.eventSystemFlags, b3[0], a17.nativeEvent);
          if (null === c4) {
            c4 = a17.nativeEvent;
            var d8 = new c4.constructor(c4.type, c4);
            wb = d8;
            c4.target.dispatchEvent(d8);
            wb = null;
          } else return b3 = Cb(c4), null !== b3 && Fc(b3), a17.blockedOn = c4, false;
          b3.shift();
        }
        return true;
      }
      function Zc(a17, b3, c4) {
        Xc(a17) && c4.delete(b3);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a17, b3) {
        a17.blockedOn === b3 && (a17.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a17) {
        function b3(b4) {
          return ad(b4, a17);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a17);
          for (var c4 = 1; c4 < Kc.length; c4++) {
            var d8 = Kc[c4];
            d8.blockedOn === a17 && (d8.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a17);
        null !== Mc && ad(Mc, a17);
        null !== Nc && ad(Nc, a17);
        Oc.forEach(b3);
        Pc.forEach(b3);
        for (c4 = 0; c4 < Qc.length; c4++) d8 = Qc[c4], d8.blockedOn === a17 && (d8.blockedOn = null);
        for (; 0 < Qc.length && (c4 = Qc[0], null === c4.blockedOn); ) Vc(c4), null === c4.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a17, b3, c4, d8) {
        var e24 = C, f12 = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a17, b3, c4, d8);
        } finally {
          C = e24, cd.transition = f12;
        }
      }
      function gd(a17, b3, c4, d8) {
        var e24 = C, f12 = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a17, b3, c4, d8);
        } finally {
          C = e24, cd.transition = f12;
        }
      }
      function fd(a17, b3, c4, d8) {
        if (dd) {
          var e24 = Yc(a17, b3, c4, d8);
          if (null === e24) hd(a17, b3, d8, id, c4), Sc(a17, d8);
          else if (Uc(e24, a17, b3, c4, d8)) d8.stopPropagation();
          else if (Sc(a17, d8), b3 & 4 && -1 < Rc.indexOf(a17)) {
            for (; null !== e24; ) {
              var f12 = Cb(e24);
              null !== f12 && Ec(f12);
              f12 = Yc(a17, b3, c4, d8);
              null === f12 && hd(a17, b3, d8, id, c4);
              if (f12 === e24) break;
              e24 = f12;
            }
            null !== e24 && d8.stopPropagation();
          } else hd(a17, b3, d8, null, c4);
        }
      }
      var id = null;
      function Yc(a17, b3, c4, d8) {
        id = null;
        a17 = xb(d8);
        a17 = Wc(a17);
        if (null !== a17) if (b3 = Vb(a17), null === b3) a17 = null;
        else if (c4 = b3.tag, 13 === c4) {
          a17 = Wb(b3);
          if (null !== a17) return a17;
          a17 = null;
        } else if (3 === c4) {
          if (b3.stateNode.current.memoizedState.isDehydrated) return 3 === b3.tag ? b3.stateNode.containerInfo : null;
          a17 = null;
        } else b3 !== a17 && (a17 = null);
        id = a17;
        return null;
      }
      function jd(a17) {
        switch (a17) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a17, b3 = ld, c4 = b3.length, d8, e24 = "value" in kd ? kd.value : kd.textContent, f12 = e24.length;
        for (a17 = 0; a17 < c4 && b3[a17] === e24[a17]; a17++) ;
        var g3 = c4 - a17;
        for (d8 = 1; d8 <= g3 && b3[c4 - d8] === e24[f12 - d8]; d8++) ;
        return md = e24.slice(a17, 1 < d8 ? 1 - d8 : void 0);
      }
      function od(a17) {
        var b3 = a17.keyCode;
        "charCode" in a17 ? (a17 = a17.charCode, 0 === a17 && 13 === b3 && (a17 = 13)) : a17 = b3;
        10 === a17 && (a17 = 13);
        return 32 <= a17 || 13 === a17 ? a17 : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a17) {
        function b3(b4, d8, e24, f12, g3) {
          this._reactName = b4;
          this._targetInst = e24;
          this.type = d8;
          this.nativeEvent = f12;
          this.target = g3;
          this.currentTarget = null;
          for (var c4 in a17) a17.hasOwnProperty(c4) && (b4 = a17[c4], this[c4] = b4 ? b4(f12) : f12[c4]);
          this.isDefaultPrevented = (null != f12.defaultPrevented ? f12.defaultPrevented : false === f12.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b3.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a18 = this.nativeEvent;
          a18 && (a18.preventDefault ? a18.preventDefault() : "unknown" !== typeof a18.returnValue && (a18.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a18 = this.nativeEvent;
          a18 && (a18.stopPropagation ? a18.stopPropagation() : "unknown" !== typeof a18.cancelBubble && (a18.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b3;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a17) {
        return a17.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A2({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a17) {
        return void 0 === a17.relatedTarget ? a17.fromElement === a17.srcElement ? a17.toElement : a17.fromElement : a17.relatedTarget;
      }, movementX: function(a17) {
        if ("movementX" in a17) return a17.movementX;
        a17 !== yd && (yd && "mousemove" === a17.type ? (wd = a17.screenX - yd.screenX, xd = a17.screenY - yd.screenY) : xd = wd = 0, yd = a17);
        return wd;
      }, movementY: function(a17) {
        return "movementY" in a17 ? a17.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A2({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A2({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A2({}, sd, { clipboardData: function(a17) {
        return "clipboardData" in a17 ? a17.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A2({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a17) {
        var b3 = this.nativeEvent;
        return b3.getModifierState ? b3.getModifierState(a17) : (a17 = Od[a17]) ? !!b3[a17] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A2({}, ud, { key: function(a17) {
        if (a17.key) {
          var b3 = Md[a17.key] || a17.key;
          if ("Unidentified" !== b3) return b3;
        }
        return "keypress" === a17.type ? (a17 = od(a17), 13 === a17 ? "Enter" : String.fromCharCode(a17)) : "keydown" === a17.type || "keyup" === a17.type ? Nd[a17.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a17) {
        return "keypress" === a17.type ? od(a17) : 0;
      }, keyCode: function(a17) {
        return "keydown" === a17.type || "keyup" === a17.type ? a17.keyCode : 0;
      }, which: function(a17) {
        return "keypress" === a17.type ? od(a17) : "keydown" === a17.type || "keyup" === a17.type ? a17.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A2({}, Ad, {
        deltaX: function(a17) {
          return "deltaX" in a17 ? a17.deltaX : "wheelDeltaX" in a17 ? -a17.wheelDeltaX : 0;
        },
        deltaY: function(a17) {
          return "deltaY" in a17 ? a17.deltaY : "wheelDeltaY" in a17 ? -a17.wheelDeltaY : "wheelDelta" in a17 ? -a17.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a17, b3) {
        switch (a17) {
          case "keyup":
            return -1 !== $d.indexOf(b3.keyCode);
          case "keydown":
            return 229 !== b3.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a17) {
        a17 = a17.detail;
        return "object" === typeof a17 && "data" in a17 ? a17.data : null;
      }
      var ie = false;
      function je(a17, b3) {
        switch (a17) {
          case "compositionend":
            return he(b3);
          case "keypress":
            if (32 !== b3.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a17 = b3.data, a17 === ee && fe ? null : a17;
          default:
            return null;
        }
      }
      function ke(a17, b3) {
        if (ie) return "compositionend" === a17 || !ae && ge(a17, b3) ? (a17 = nd(), md = ld = kd = null, ie = false, a17) : null;
        switch (a17) {
          case "paste":
            return null;
          case "keypress":
            if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
              if (b3.char && 1 < b3.char.length) return b3.char;
              if (b3.which) return String.fromCharCode(b3.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b3.locale ? null : b3.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a17) {
        var b3 = a17 && a17.nodeName && a17.nodeName.toLowerCase();
        return "input" === b3 ? !!le[a17.type] : "textarea" === b3 ? true : false;
      }
      function ne(a17, b3, c4, d8) {
        Eb(d8);
        b3 = oe(b3, "onChange");
        0 < b3.length && (c4 = new td("onChange", "change", null, c4, d8), a17.push({ event: c4, listeners: b3 }));
      }
      var pe = null;
      var qe = null;
      function re(a17) {
        se(a17, 0);
      }
      function te(a17) {
        var b3 = ue(a17);
        if (Wa(b3)) return a17;
      }
      function ve(a17, b3) {
        if ("change" === a17) return b3;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a17) {
        if ("value" === a17.propertyName && te(qe)) {
          var b3 = [];
          ne(b3, qe, a17, xb(a17));
          Jb(re, b3);
        }
      }
      function Ce(a17, b3, c4) {
        "focusin" === a17 ? (Ae(), pe = b3, qe = c4, pe.attachEvent("onpropertychange", Be)) : "focusout" === a17 && Ae();
      }
      function De(a17) {
        if ("selectionchange" === a17 || "keyup" === a17 || "keydown" === a17) return te(qe);
      }
      function Ee(a17, b3) {
        if ("click" === a17) return te(b3);
      }
      function Fe(a17, b3) {
        if ("input" === a17 || "change" === a17) return te(b3);
      }
      function Ge(a17, b3) {
        return a17 === b3 && (0 !== a17 || 1 / a17 === 1 / b3) || a17 !== a17 && b3 !== b3;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a17, b3) {
        if (He(a17, b3)) return true;
        if ("object" !== typeof a17 || null === a17 || "object" !== typeof b3 || null === b3) return false;
        var c4 = Object.keys(a17), d8 = Object.keys(b3);
        if (c4.length !== d8.length) return false;
        for (d8 = 0; d8 < c4.length; d8++) {
          var e24 = c4[d8];
          if (!ja.call(b3, e24) || !He(a17[e24], b3[e24])) return false;
        }
        return true;
      }
      function Je(a17) {
        for (; a17 && a17.firstChild; ) a17 = a17.firstChild;
        return a17;
      }
      function Ke(a17, b3) {
        var c4 = Je(a17);
        a17 = 0;
        for (var d8; c4; ) {
          if (3 === c4.nodeType) {
            d8 = a17 + c4.textContent.length;
            if (a17 <= b3 && d8 >= b3) return { node: c4, offset: b3 - a17 };
            a17 = d8;
          }
          a: {
            for (; c4; ) {
              if (c4.nextSibling) {
                c4 = c4.nextSibling;
                break a;
              }
              c4 = c4.parentNode;
            }
            c4 = void 0;
          }
          c4 = Je(c4);
        }
      }
      function Le(a17, b3) {
        return a17 && b3 ? a17 === b3 ? true : a17 && 3 === a17.nodeType ? false : b3 && 3 === b3.nodeType ? Le(a17, b3.parentNode) : "contains" in a17 ? a17.contains(b3) : a17.compareDocumentPosition ? !!(a17.compareDocumentPosition(b3) & 16) : false : false;
      }
      function Me() {
        for (var a17 = window, b3 = Xa(); b3 instanceof a17.HTMLIFrameElement; ) {
          try {
            var c4 = "string" === typeof b3.contentWindow.location.href;
          } catch (d8) {
            c4 = false;
          }
          if (c4) a17 = b3.contentWindow;
          else break;
          b3 = Xa(a17.document);
        }
        return b3;
      }
      function Ne(a17) {
        var b3 = a17 && a17.nodeName && a17.nodeName.toLowerCase();
        return b3 && ("input" === b3 && ("text" === a17.type || "search" === a17.type || "tel" === a17.type || "url" === a17.type || "password" === a17.type) || "textarea" === b3 || "true" === a17.contentEditable);
      }
      function Oe(a17) {
        var b3 = Me(), c4 = a17.focusedElem, d8 = a17.selectionRange;
        if (b3 !== c4 && c4 && c4.ownerDocument && Le(c4.ownerDocument.documentElement, c4)) {
          if (null !== d8 && Ne(c4)) {
            if (b3 = d8.start, a17 = d8.end, void 0 === a17 && (a17 = b3), "selectionStart" in c4) c4.selectionStart = b3, c4.selectionEnd = Math.min(a17, c4.value.length);
            else if (a17 = (b3 = c4.ownerDocument || document) && b3.defaultView || window, a17.getSelection) {
              a17 = a17.getSelection();
              var e24 = c4.textContent.length, f12 = Math.min(d8.start, e24);
              d8 = void 0 === d8.end ? f12 : Math.min(d8.end, e24);
              !a17.extend && f12 > d8 && (e24 = d8, d8 = f12, f12 = e24);
              e24 = Ke(c4, f12);
              var g3 = Ke(
                c4,
                d8
              );
              e24 && g3 && (1 !== a17.rangeCount || a17.anchorNode !== e24.node || a17.anchorOffset !== e24.offset || a17.focusNode !== g3.node || a17.focusOffset !== g3.offset) && (b3 = b3.createRange(), b3.setStart(e24.node, e24.offset), a17.removeAllRanges(), f12 > d8 ? (a17.addRange(b3), a17.extend(g3.node, g3.offset)) : (b3.setEnd(g3.node, g3.offset), a17.addRange(b3)));
            }
          }
          b3 = [];
          for (a17 = c4; a17 = a17.parentNode; ) 1 === a17.nodeType && b3.push({ element: a17, left: a17.scrollLeft, top: a17.scrollTop });
          "function" === typeof c4.focus && c4.focus();
          for (c4 = 0; c4 < b3.length; c4++) a17 = b3[c4], a17.element.scrollLeft = a17.left, a17.element.scrollTop = a17.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a17, b3, c4) {
        var d8 = c4.window === c4 ? c4.document : 9 === c4.nodeType ? c4 : c4.ownerDocument;
        Te || null == Qe || Qe !== Xa(d8) || (d8 = Qe, "selectionStart" in d8 && Ne(d8) ? d8 = { start: d8.selectionStart, end: d8.selectionEnd } : (d8 = (d8.ownerDocument && d8.ownerDocument.defaultView || window).getSelection(), d8 = { anchorNode: d8.anchorNode, anchorOffset: d8.anchorOffset, focusNode: d8.focusNode, focusOffset: d8.focusOffset }), Se && Ie(Se, d8) || (Se = d8, d8 = oe(Re, "onSelect"), 0 < d8.length && (b3 = new td("onSelect", "select", null, b3, c4), a17.push({ event: b3, listeners: d8 }), b3.target = Qe)));
      }
      function Ve(a17, b3) {
        var c4 = {};
        c4[a17.toLowerCase()] = b3.toLowerCase();
        c4["Webkit" + a17] = "webkit" + b3;
        c4["Moz" + a17] = "moz" + b3;
        return c4;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a17) {
        if (Xe[a17]) return Xe[a17];
        if (!We[a17]) return a17;
        var b3 = We[a17], c4;
        for (c4 in b3) if (b3.hasOwnProperty(c4) && c4 in Ye) return Xe[a17] = b3[c4];
        return a17;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a17, b3) {
        df.set(a17, b3);
        fa(b3, [a17]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a17, b3, c4) {
        var d8 = a17.type || "unknown-event";
        a17.currentTarget = c4;
        Ub(d8, b3, void 0, a17);
        a17.currentTarget = null;
      }
      function se(a17, b3) {
        b3 = 0 !== (b3 & 4);
        for (var c4 = 0; c4 < a17.length; c4++) {
          var d8 = a17[c4], e24 = d8.event;
          d8 = d8.listeners;
          a: {
            var f12 = void 0;
            if (b3) for (var g3 = d8.length - 1; 0 <= g3; g3--) {
              var h = d8[g3], k = h.instance, l7 = h.currentTarget;
              h = h.listener;
              if (k !== f12 && e24.isPropagationStopped()) break a;
              nf(e24, h, l7);
              f12 = k;
            }
            else for (g3 = 0; g3 < d8.length; g3++) {
              h = d8[g3];
              k = h.instance;
              l7 = h.currentTarget;
              h = h.listener;
              if (k !== f12 && e24.isPropagationStopped()) break a;
              nf(e24, h, l7);
              f12 = k;
            }
          }
        }
        if (Qb) throw a17 = Rb, Qb = false, Rb = null, a17;
      }
      function D2(a17, b3) {
        var c4 = b3[of];
        void 0 === c4 && (c4 = b3[of] = /* @__PURE__ */ new Set());
        var d8 = a17 + "__bubble";
        c4.has(d8) || (pf(b3, a17, 2, false), c4.add(d8));
      }
      function qf(a17, b3, c4) {
        var d8 = 0;
        b3 && (d8 |= 4);
        pf(c4, a17, d8, b3);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a17) {
        if (!a17[rf]) {
          a17[rf] = true;
          da.forEach(function(b4) {
            "selectionchange" !== b4 && (mf.has(b4) || qf(b4, false, a17), qf(b4, true, a17));
          });
          var b3 = 9 === a17.nodeType ? a17 : a17.ownerDocument;
          null === b3 || b3[rf] || (b3[rf] = true, qf("selectionchange", false, b3));
        }
      }
      function pf(a17, b3, c4, d8) {
        switch (jd(b3)) {
          case 1:
            var e24 = ed;
            break;
          case 4:
            e24 = gd;
            break;
          default:
            e24 = fd;
        }
        c4 = e24.bind(null, b3, c4, a17);
        e24 = void 0;
        !Lb || "touchstart" !== b3 && "touchmove" !== b3 && "wheel" !== b3 || (e24 = true);
        d8 ? void 0 !== e24 ? a17.addEventListener(b3, c4, { capture: true, passive: e24 }) : a17.addEventListener(b3, c4, true) : void 0 !== e24 ? a17.addEventListener(b3, c4, { passive: e24 }) : a17.addEventListener(b3, c4, false);
      }
      function hd(a17, b3, c4, d8, e24) {
        var f12 = d8;
        if (0 === (b3 & 1) && 0 === (b3 & 2) && null !== d8) a: for (; ; ) {
          if (null === d8) return;
          var g3 = d8.tag;
          if (3 === g3 || 4 === g3) {
            var h = d8.stateNode.containerInfo;
            if (h === e24 || 8 === h.nodeType && h.parentNode === e24) break;
            if (4 === g3) for (g3 = d8.return; null !== g3; ) {
              var k = g3.tag;
              if (3 === k || 4 === k) {
                if (k = g3.stateNode.containerInfo, k === e24 || 8 === k.nodeType && k.parentNode === e24) return;
              }
              g3 = g3.return;
            }
            for (; null !== h; ) {
              g3 = Wc(h);
              if (null === g3) return;
              k = g3.tag;
              if (5 === k || 6 === k) {
                d8 = f12 = g3;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d8 = d8.return;
        }
        Jb(function() {
          var d9 = f12, e25 = xb(c4), g4 = [];
          a: {
            var h2 = df.get(a17);
            if (void 0 !== h2) {
              var k2 = td, n12 = a17;
              switch (a17) {
                case "keypress":
                  if (0 === od(c4)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n12 = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n12 = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c4.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t17 = 0 !== (b3 & 4), J = !t17 && "scroll" === a17, x2 = t17 ? null !== h2 ? h2 + "Capture" : null : h2;
              t17 = [];
              for (var w = d9, u5; null !== w; ) {
                u5 = w;
                var F = u5.stateNode;
                5 === u5.tag && null !== F && (u5 = F, null !== x2 && (F = Kb(w, x2), null != F && t17.push(tf(w, F, u5))));
                if (J) break;
                w = w.return;
              }
              0 < t17.length && (h2 = new k2(h2, n12, null, c4, e25), g4.push({ event: h2, listeners: t17 }));
            }
          }
          if (0 === (b3 & 7)) {
            a: {
              h2 = "mouseover" === a17 || "pointerover" === a17;
              k2 = "mouseout" === a17 || "pointerout" === a17;
              if (h2 && c4 !== wb && (n12 = c4.relatedTarget || c4.fromElement) && (Wc(n12) || n12[uf])) break a;
              if (k2 || h2) {
                h2 = e25.window === e25 ? e25 : (h2 = e25.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n12 = c4.relatedTarget || c4.toElement, k2 = d9, n12 = n12 ? Wc(n12) : null, null !== n12 && (J = Vb(n12), n12 !== J || 5 !== n12.tag && 6 !== n12.tag)) n12 = null;
                } else k2 = null, n12 = d9;
                if (k2 !== n12) {
                  t17 = Bd;
                  F = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a17 || "pointerover" === a17) t17 = Td, F = "onPointerLeave", x2 = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u5 = null == n12 ? h2 : ue(n12);
                  h2 = new t17(F, w + "leave", k2, c4, e25);
                  h2.target = J;
                  h2.relatedTarget = u5;
                  F = null;
                  Wc(e25) === d9 && (t17 = new t17(x2, w + "enter", n12, c4, e25), t17.target = u5, t17.relatedTarget = J, F = t17);
                  J = F;
                  if (k2 && n12) b: {
                    t17 = k2;
                    x2 = n12;
                    w = 0;
                    for (u5 = t17; u5; u5 = vf(u5)) w++;
                    u5 = 0;
                    for (F = x2; F; F = vf(F)) u5++;
                    for (; 0 < w - u5; ) t17 = vf(t17), w--;
                    for (; 0 < u5 - w; ) x2 = vf(x2), u5--;
                    for (; w--; ) {
                      if (t17 === x2 || null !== x2 && t17 === x2.alternate) break b;
                      t17 = vf(t17);
                      x2 = vf(x2);
                    }
                    t17 = null;
                  }
                  else t17 = null;
                  null !== k2 && wf(g4, h2, k2, t17, false);
                  null !== n12 && null !== J && wf(g4, J, n12, t17, true);
                }
              }
            }
            a: {
              h2 = d9 ? ue(d9) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
              else if (me(h2)) if (we) na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
              else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a17, d9))) {
                ne(g4, na, c4, e25);
                break a;
              }
              xa && xa(a17, h2, d9);
              "focusout" === a17 && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d9 ? ue(d9) : window;
            switch (a17) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d9, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g4, c4, e25);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue(g4, c4, e25);
            }
            var $a;
            if (ae) b: {
              switch (a17) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie ? ge(a17, c4) && (ba = "onCompositionEnd") : "keydown" === a17 && 229 === c4.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c4.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e25, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d9, ba), 0 < xa.length && (ba = new Ld(ba, a17, null, c4, e25), g4.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c4), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a17, c4) : ke(a17, c4)) d9 = oe(d9, "onBeforeInput"), 0 < d9.length && (e25 = new Ld("onBeforeInput", "beforeinput", null, c4, e25), g4.push({ event: e25, listeners: d9 }), e25.data = $a);
          }
          se(g4, b3);
        });
      }
      function tf(a17, b3, c4) {
        return { instance: a17, listener: b3, currentTarget: c4 };
      }
      function oe(a17, b3) {
        for (var c4 = b3 + "Capture", d8 = []; null !== a17; ) {
          var e24 = a17, f12 = e24.stateNode;
          5 === e24.tag && null !== f12 && (e24 = f12, f12 = Kb(a17, c4), null != f12 && d8.unshift(tf(a17, f12, e24)), f12 = Kb(a17, b3), null != f12 && d8.push(tf(a17, f12, e24)));
          a17 = a17.return;
        }
        return d8;
      }
      function vf(a17) {
        if (null === a17) return null;
        do
          a17 = a17.return;
        while (a17 && 5 !== a17.tag);
        return a17 ? a17 : null;
      }
      function wf(a17, b3, c4, d8, e24) {
        for (var f12 = b3._reactName, g3 = []; null !== c4 && c4 !== d8; ) {
          var h = c4, k = h.alternate, l7 = h.stateNode;
          if (null !== k && k === d8) break;
          5 === h.tag && null !== l7 && (h = l7, e24 ? (k = Kb(c4, f12), null != k && g3.unshift(tf(c4, k, h))) : e24 || (k = Kb(c4, f12), null != k && g3.push(tf(c4, k, h))));
          c4 = c4.return;
        }
        0 !== g3.length && a17.push({ event: b3, listeners: g3 });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a17) {
        return ("string" === typeof a17 ? a17 : "" + a17).replace(xf, "\n").replace(yf, "");
      }
      function Af(a17, b3, c4) {
        b3 = zf(b3);
        if (zf(a17) !== b3 && c4) throw Error(p15(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a17, b3) {
        return "textarea" === a17 || "noscript" === a17 || "string" === typeof b3.children || "number" === typeof b3.children || "object" === typeof b3.dangerouslySetInnerHTML && null !== b3.dangerouslySetInnerHTML && null != b3.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a17) {
        return Hf.resolve(null).then(a17).catch(If);
      } : Ff;
      function If(a17) {
        setTimeout(function() {
          throw a17;
        });
      }
      function Kf(a17, b3) {
        var c4 = b3, d8 = 0;
        do {
          var e24 = c4.nextSibling;
          a17.removeChild(c4);
          if (e24 && 8 === e24.nodeType) if (c4 = e24.data, "/$" === c4) {
            if (0 === d8) {
              a17.removeChild(e24);
              bd(b3);
              return;
            }
            d8--;
          } else "$" !== c4 && "$?" !== c4 && "$!" !== c4 || d8++;
          c4 = e24;
        } while (c4);
        bd(b3);
      }
      function Lf(a17) {
        for (; null != a17; a17 = a17.nextSibling) {
          var b3 = a17.nodeType;
          if (1 === b3 || 3 === b3) break;
          if (8 === b3) {
            b3 = a17.data;
            if ("$" === b3 || "$!" === b3 || "$?" === b3) break;
            if ("/$" === b3) return null;
          }
        }
        return a17;
      }
      function Mf(a17) {
        a17 = a17.previousSibling;
        for (var b3 = 0; a17; ) {
          if (8 === a17.nodeType) {
            var c4 = a17.data;
            if ("$" === c4 || "$!" === c4 || "$?" === c4) {
              if (0 === b3) return a17;
              b3--;
            } else "/$" === c4 && b3++;
          }
          a17 = a17.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a17) {
        var b3 = a17[Of];
        if (b3) return b3;
        for (var c4 = a17.parentNode; c4; ) {
          if (b3 = c4[uf] || c4[Of]) {
            c4 = b3.alternate;
            if (null !== b3.child || null !== c4 && null !== c4.child) for (a17 = Mf(a17); null !== a17; ) {
              if (c4 = a17[Of]) return c4;
              a17 = Mf(a17);
            }
            return b3;
          }
          a17 = c4;
          c4 = a17.parentNode;
        }
        return null;
      }
      function Cb(a17) {
        a17 = a17[Of] || a17[uf];
        return !a17 || 5 !== a17.tag && 6 !== a17.tag && 13 !== a17.tag && 3 !== a17.tag ? null : a17;
      }
      function ue(a17) {
        if (5 === a17.tag || 6 === a17.tag) return a17.stateNode;
        throw Error(p15(33));
      }
      function Db(a17) {
        return a17[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a17) {
        return { current: a17 };
      }
      function E2(a17) {
        0 > Tf || (a17.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a17, b3) {
        Tf++;
        Sf[Tf] = a17.current;
        a17.current = b3;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a17, b3) {
        var c4 = a17.type.contextTypes;
        if (!c4) return Vf;
        var d8 = a17.stateNode;
        if (d8 && d8.__reactInternalMemoizedUnmaskedChildContext === b3) return d8.__reactInternalMemoizedMaskedChildContext;
        var e24 = {}, f12;
        for (f12 in c4) e24[f12] = b3[f12];
        d8 && (a17 = a17.stateNode, a17.__reactInternalMemoizedUnmaskedChildContext = b3, a17.__reactInternalMemoizedMaskedChildContext = e24);
        return e24;
      }
      function Zf(a17) {
        a17 = a17.childContextTypes;
        return null !== a17 && void 0 !== a17;
      }
      function $f() {
        E2(Wf);
        E2(H2);
      }
      function ag(a17, b3, c4) {
        if (H2.current !== Vf) throw Error(p15(168));
        G(H2, b3);
        G(Wf, c4);
      }
      function bg(a17, b3, c4) {
        var d8 = a17.stateNode;
        b3 = b3.childContextTypes;
        if ("function" !== typeof d8.getChildContext) return c4;
        d8 = d8.getChildContext();
        for (var e24 in d8) if (!(e24 in b3)) throw Error(p15(108, Ra(a17) || "Unknown", e24));
        return A2({}, c4, d8);
      }
      function cg(a17) {
        a17 = (a17 = a17.stateNode) && a17.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G(H2, a17);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a17, b3, c4) {
        var d8 = a17.stateNode;
        if (!d8) throw Error(p15(169));
        c4 ? (a17 = bg(a17, b3, Xf), d8.__reactInternalMemoizedMergedChildContext = a17, E2(Wf), E2(H2), G(H2, a17)) : E2(Wf);
        G(Wf, c4);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a17) {
        null === eg ? eg = [a17] : eg.push(a17);
      }
      function ig(a17) {
        fg = true;
        hg(a17);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a17 = 0, b3 = C;
          try {
            var c4 = eg;
            for (C = 1; a17 < c4.length; a17++) {
              var d8 = c4[a17];
              do
                d8 = d8(true);
              while (null !== d8);
            }
            eg = null;
            fg = false;
          } catch (e24) {
            throw null !== eg && (eg = eg.slice(a17 + 1)), ac(fc, jg), e24;
          } finally {
            C = b3, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a17, b3) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a17;
        ng = b3;
      }
      function ug(a17, b3, c4) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a17;
        var d8 = rg;
        a17 = sg;
        var e24 = 32 - oc(d8) - 1;
        d8 &= ~(1 << e24);
        c4 += 1;
        var f12 = 32 - oc(b3) + e24;
        if (30 < f12) {
          var g3 = e24 - e24 % 5;
          f12 = (d8 & (1 << g3) - 1).toString(32);
          d8 >>= g3;
          e24 -= g3;
          rg = 1 << 32 - oc(b3) + e24 | c4 << e24 | d8;
          sg = f12 + a17;
        } else rg = 1 << f12 | c4 << e24 | d8, sg = a17;
      }
      function vg(a17) {
        null !== a17.return && (tg(a17, 1), ug(a17, 1, 0));
      }
      function wg(a17) {
        for (; a17 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a17 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a17, b3) {
        var c4 = Bg(5, null, null, 0);
        c4.elementType = "DELETED";
        c4.stateNode = b3;
        c4.return = a17;
        b3 = a17.deletions;
        null === b3 ? (a17.deletions = [c4], a17.flags |= 16) : b3.push(c4);
      }
      function Cg(a17, b3) {
        switch (a17.tag) {
          case 5:
            var c4 = a17.type;
            b3 = 1 !== b3.nodeType || c4.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
            return null !== b3 ? (a17.stateNode = b3, xg = a17, yg = Lf(b3.firstChild), true) : false;
          case 6:
            return b3 = "" === a17.pendingProps || 3 !== b3.nodeType ? null : b3, null !== b3 ? (a17.stateNode = b3, xg = a17, yg = null, true) : false;
          case 13:
            return b3 = 8 !== b3.nodeType ? null : b3, null !== b3 ? (c4 = null !== qg ? { id: rg, overflow: sg } : null, a17.memoizedState = { dehydrated: b3, treeContext: c4, retryLane: 1073741824 }, c4 = Bg(18, null, null, 0), c4.stateNode = b3, c4.return = a17, a17.child = c4, xg = a17, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a17) {
        return 0 !== (a17.mode & 1) && 0 === (a17.flags & 128);
      }
      function Eg(a17) {
        if (I2) {
          var b3 = yg;
          if (b3) {
            var c4 = b3;
            if (!Cg(a17, b3)) {
              if (Dg(a17)) throw Error(p15(418));
              b3 = Lf(c4.nextSibling);
              var d8 = xg;
              b3 && Cg(a17, b3) ? Ag(d8, c4) : (a17.flags = a17.flags & -4097 | 2, I2 = false, xg = a17);
            }
          } else {
            if (Dg(a17)) throw Error(p15(418));
            a17.flags = a17.flags & -4097 | 2;
            I2 = false;
            xg = a17;
          }
        }
      }
      function Fg(a17) {
        for (a17 = a17.return; null !== a17 && 5 !== a17.tag && 3 !== a17.tag && 13 !== a17.tag; ) a17 = a17.return;
        xg = a17;
      }
      function Gg(a17) {
        if (a17 !== xg) return false;
        if (!I2) return Fg(a17), I2 = true, false;
        var b3;
        (b3 = 3 !== a17.tag) && !(b3 = 5 !== a17.tag) && (b3 = a17.type, b3 = "head" !== b3 && "body" !== b3 && !Ef(a17.type, a17.memoizedProps));
        if (b3 && (b3 = yg)) {
          if (Dg(a17)) throw Hg(), Error(p15(418));
          for (; b3; ) Ag(a17, b3), b3 = Lf(b3.nextSibling);
        }
        Fg(a17);
        if (13 === a17.tag) {
          a17 = a17.memoizedState;
          a17 = null !== a17 ? a17.dehydrated : null;
          if (!a17) throw Error(p15(317));
          a: {
            a17 = a17.nextSibling;
            for (b3 = 0; a17; ) {
              if (8 === a17.nodeType) {
                var c4 = a17.data;
                if ("/$" === c4) {
                  if (0 === b3) {
                    yg = Lf(a17.nextSibling);
                    break a;
                  }
                  b3--;
                } else "$" !== c4 && "$!" !== c4 && "$?" !== c4 || b3++;
              }
              a17 = a17.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a17.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a17 = yg; a17; ) a17 = Lf(a17.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a17) {
        null === zg ? zg = [a17] : zg.push(a17);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a17, b3, c4) {
        a17 = c4.ref;
        if (null !== a17 && "function" !== typeof a17 && "object" !== typeof a17) {
          if (c4._owner) {
            c4 = c4._owner;
            if (c4) {
              if (1 !== c4.tag) throw Error(p15(309));
              var d8 = c4.stateNode;
            }
            if (!d8) throw Error(p15(147, a17));
            var e24 = d8, f12 = "" + a17;
            if (null !== b3 && null !== b3.ref && "function" === typeof b3.ref && b3.ref._stringRef === f12) return b3.ref;
            b3 = function(a18) {
              var b4 = e24.refs;
              null === a18 ? delete b4[f12] : b4[f12] = a18;
            };
            b3._stringRef = f12;
            return b3;
          }
          if ("string" !== typeof a17) throw Error(p15(284));
          if (!c4._owner) throw Error(p15(290, a17));
        }
        return a17;
      }
      function Mg(a17, b3) {
        a17 = Object.prototype.toString.call(b3);
        throw Error(p15(31, "[object Object]" === a17 ? "object with keys {" + Object.keys(b3).join(", ") + "}" : a17));
      }
      function Ng(a17) {
        var b3 = a17._init;
        return b3(a17._payload);
      }
      function Og(a17) {
        function b3(b4, c5) {
          if (a17) {
            var d9 = b4.deletions;
            null === d9 ? (b4.deletions = [c5], b4.flags |= 16) : d9.push(c5);
          }
        }
        function c4(c5, d9) {
          if (!a17) return null;
          for (; null !== d9; ) b3(c5, d9), d9 = d9.sibling;
          return null;
        }
        function d8(a18, b4) {
          for (a18 = /* @__PURE__ */ new Map(); null !== b4; ) null !== b4.key ? a18.set(b4.key, b4) : a18.set(b4.index, b4), b4 = b4.sibling;
          return a18;
        }
        function e24(a18, b4) {
          a18 = Pg(a18, b4);
          a18.index = 0;
          a18.sibling = null;
          return a18;
        }
        function f12(b4, c5, d9) {
          b4.index = d9;
          if (!a17) return b4.flags |= 1048576, c5;
          d9 = b4.alternate;
          if (null !== d9) return d9 = d9.index, d9 < c5 ? (b4.flags |= 2, c5) : d9;
          b4.flags |= 2;
          return c5;
        }
        function g3(b4) {
          a17 && null === b4.alternate && (b4.flags |= 2);
          return b4;
        }
        function h(a18, b4, c5, d9) {
          if (null === b4 || 6 !== b4.tag) return b4 = Qg(c5, a18.mode, d9), b4.return = a18, b4;
          b4 = e24(b4, c5);
          b4.return = a18;
          return b4;
        }
        function k(a18, b4, c5, d9) {
          var f13 = c5.type;
          if (f13 === ya) return m7(a18, b4, c5.props.children, d9, c5.key);
          if (null !== b4 && (b4.elementType === f13 || "object" === typeof f13 && null !== f13 && f13.$$typeof === Ha && Ng(f13) === b4.type)) return d9 = e24(b4, c5.props), d9.ref = Lg(a18, b4, c5), d9.return = a18, d9;
          d9 = Rg(c5.type, c5.key, c5.props, null, a18.mode, d9);
          d9.ref = Lg(a18, b4, c5);
          d9.return = a18;
          return d9;
        }
        function l7(a18, b4, c5, d9) {
          if (null === b4 || 4 !== b4.tag || b4.stateNode.containerInfo !== c5.containerInfo || b4.stateNode.implementation !== c5.implementation) return b4 = Sg(c5, a18.mode, d9), b4.return = a18, b4;
          b4 = e24(b4, c5.children || []);
          b4.return = a18;
          return b4;
        }
        function m7(a18, b4, c5, d9, f13) {
          if (null === b4 || 7 !== b4.tag) return b4 = Tg(c5, a18.mode, d9, f13), b4.return = a18, b4;
          b4 = e24(b4, c5);
          b4.return = a18;
          return b4;
        }
        function q(a18, b4, c5) {
          if ("string" === typeof b4 && "" !== b4 || "number" === typeof b4) return b4 = Qg("" + b4, a18.mode, c5), b4.return = a18, b4;
          if ("object" === typeof b4 && null !== b4) {
            switch (b4.$$typeof) {
              case va:
                return c5 = Rg(b4.type, b4.key, b4.props, null, a18.mode, c5), c5.ref = Lg(a18, null, b4), c5.return = a18, c5;
              case wa:
                return b4 = Sg(b4, a18.mode, c5), b4.return = a18, b4;
              case Ha:
                var d9 = b4._init;
                return q(a18, d9(b4._payload), c5);
            }
            if (eb(b4) || Ka(b4)) return b4 = Tg(b4, a18.mode, c5, null), b4.return = a18, b4;
            Mg(a18, b4);
          }
          return null;
        }
        function r26(a18, b4, c5, d9) {
          var e25 = null !== b4 ? b4.key : null;
          if ("string" === typeof c5 && "" !== c5 || "number" === typeof c5) return null !== e25 ? null : h(a18, b4, "" + c5, d9);
          if ("object" === typeof c5 && null !== c5) {
            switch (c5.$$typeof) {
              case va:
                return c5.key === e25 ? k(a18, b4, c5, d9) : null;
              case wa:
                return c5.key === e25 ? l7(a18, b4, c5, d9) : null;
              case Ha:
                return e25 = c5._init, r26(
                  a18,
                  b4,
                  e25(c5._payload),
                  d9
                );
            }
            if (eb(c5) || Ka(c5)) return null !== e25 ? null : m7(a18, b4, c5, d9, null);
            Mg(a18, c5);
          }
          return null;
        }
        function y(a18, b4, c5, d9, e25) {
          if ("string" === typeof d9 && "" !== d9 || "number" === typeof d9) return a18 = a18.get(c5) || null, h(b4, a18, "" + d9, e25);
          if ("object" === typeof d9 && null !== d9) {
            switch (d9.$$typeof) {
              case va:
                return a18 = a18.get(null === d9.key ? c5 : d9.key) || null, k(b4, a18, d9, e25);
              case wa:
                return a18 = a18.get(null === d9.key ? c5 : d9.key) || null, l7(b4, a18, d9, e25);
              case Ha:
                var f13 = d9._init;
                return y(a18, b4, c5, f13(d9._payload), e25);
            }
            if (eb(d9) || Ka(d9)) return a18 = a18.get(c5) || null, m7(b4, a18, d9, e25, null);
            Mg(b4, d9);
          }
          return null;
        }
        function n12(e25, g4, h2, k2) {
          for (var l8 = null, m8 = null, u5 = g4, w = g4 = 0, x2 = null; null !== u5 && w < h2.length; w++) {
            u5.index > w ? (x2 = u5, u5 = null) : x2 = u5.sibling;
            var n13 = r26(e25, u5, h2[w], k2);
            if (null === n13) {
              null === u5 && (u5 = x2);
              break;
            }
            a17 && u5 && null === n13.alternate && b3(e25, u5);
            g4 = f12(n13, g4, w);
            null === m8 ? l8 = n13 : m8.sibling = n13;
            m8 = n13;
            u5 = x2;
          }
          if (w === h2.length) return c4(e25, u5), I2 && tg(e25, w), l8;
          if (null === u5) {
            for (; w < h2.length; w++) u5 = q(e25, h2[w], k2), null !== u5 && (g4 = f12(u5, g4, w), null === m8 ? l8 = u5 : m8.sibling = u5, m8 = u5);
            I2 && tg(e25, w);
            return l8;
          }
          for (u5 = d8(e25, u5); w < h2.length; w++) x2 = y(u5, e25, w, h2[w], k2), null !== x2 && (a17 && null !== x2.alternate && u5.delete(null === x2.key ? w : x2.key), g4 = f12(x2, g4, w), null === m8 ? l8 = x2 : m8.sibling = x2, m8 = x2);
          a17 && u5.forEach(function(a18) {
            return b3(e25, a18);
          });
          I2 && tg(e25, w);
          return l8;
        }
        function t17(e25, g4, h2, k2) {
          var l8 = Ka(h2);
          if ("function" !== typeof l8) throw Error(p15(150));
          h2 = l8.call(h2);
          if (null == h2) throw Error(p15(151));
          for (var u5 = l8 = null, m8 = g4, w = g4 = 0, x2 = null, n13 = h2.next(); null !== m8 && !n13.done; w++, n13 = h2.next()) {
            m8.index > w ? (x2 = m8, m8 = null) : x2 = m8.sibling;
            var t18 = r26(e25, m8, n13.value, k2);
            if (null === t18) {
              null === m8 && (m8 = x2);
              break;
            }
            a17 && m8 && null === t18.alternate && b3(e25, m8);
            g4 = f12(t18, g4, w);
            null === u5 ? l8 = t18 : u5.sibling = t18;
            u5 = t18;
            m8 = x2;
          }
          if (n13.done) return c4(
            e25,
            m8
          ), I2 && tg(e25, w), l8;
          if (null === m8) {
            for (; !n13.done; w++, n13 = h2.next()) n13 = q(e25, n13.value, k2), null !== n13 && (g4 = f12(n13, g4, w), null === u5 ? l8 = n13 : u5.sibling = n13, u5 = n13);
            I2 && tg(e25, w);
            return l8;
          }
          for (m8 = d8(e25, m8); !n13.done; w++, n13 = h2.next()) n13 = y(m8, e25, w, n13.value, k2), null !== n13 && (a17 && null !== n13.alternate && m8.delete(null === n13.key ? w : n13.key), g4 = f12(n13, g4, w), null === u5 ? l8 = n13 : u5.sibling = n13, u5 = n13);
          a17 && m8.forEach(function(a18) {
            return b3(e25, a18);
          });
          I2 && tg(e25, w);
          return l8;
        }
        function J(a18, d9, f13, h2) {
          "object" === typeof f13 && null !== f13 && f13.type === ya && null === f13.key && (f13 = f13.props.children);
          if ("object" === typeof f13 && null !== f13) {
            switch (f13.$$typeof) {
              case va:
                a: {
                  for (var k2 = f13.key, l8 = d9; null !== l8; ) {
                    if (l8.key === k2) {
                      k2 = f13.type;
                      if (k2 === ya) {
                        if (7 === l8.tag) {
                          c4(a18, l8.sibling);
                          d9 = e24(l8, f13.props.children);
                          d9.return = a18;
                          a18 = d9;
                          break a;
                        }
                      } else if (l8.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l8.type) {
                        c4(a18, l8.sibling);
                        d9 = e24(l8, f13.props);
                        d9.ref = Lg(a18, l8, f13);
                        d9.return = a18;
                        a18 = d9;
                        break a;
                      }
                      c4(a18, l8);
                      break;
                    } else b3(a18, l8);
                    l8 = l8.sibling;
                  }
                  f13.type === ya ? (d9 = Tg(f13.props.children, a18.mode, h2, f13.key), d9.return = a18, a18 = d9) : (h2 = Rg(f13.type, f13.key, f13.props, null, a18.mode, h2), h2.ref = Lg(a18, d9, f13), h2.return = a18, a18 = h2);
                }
                return g3(a18);
              case wa:
                a: {
                  for (l8 = f13.key; null !== d9; ) {
                    if (d9.key === l8) if (4 === d9.tag && d9.stateNode.containerInfo === f13.containerInfo && d9.stateNode.implementation === f13.implementation) {
                      c4(a18, d9.sibling);
                      d9 = e24(d9, f13.children || []);
                      d9.return = a18;
                      a18 = d9;
                      break a;
                    } else {
                      c4(a18, d9);
                      break;
                    }
                    else b3(a18, d9);
                    d9 = d9.sibling;
                  }
                  d9 = Sg(f13, a18.mode, h2);
                  d9.return = a18;
                  a18 = d9;
                }
                return g3(a18);
              case Ha:
                return l8 = f13._init, J(a18, d9, l8(f13._payload), h2);
            }
            if (eb(f13)) return n12(a18, d9, f13, h2);
            if (Ka(f13)) return t17(a18, d9, f13, h2);
            Mg(a18, f13);
          }
          return "string" === typeof f13 && "" !== f13 || "number" === typeof f13 ? (f13 = "" + f13, null !== d9 && 6 === d9.tag ? (c4(a18, d9.sibling), d9 = e24(d9, f13), d9.return = a18, a18 = d9) : (c4(a18, d9), d9 = Qg(f13, a18.mode, h2), d9.return = a18, a18 = d9), g3(a18)) : c4(a18, d9);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a17) {
        var b3 = Wg.current;
        E2(Wg);
        a17._currentValue = b3;
      }
      function bh(a17, b3, c4) {
        for (; null !== a17; ) {
          var d8 = a17.alternate;
          (a17.childLanes & b3) !== b3 ? (a17.childLanes |= b3, null !== d8 && (d8.childLanes |= b3)) : null !== d8 && (d8.childLanes & b3) !== b3 && (d8.childLanes |= b3);
          if (a17 === c4) break;
          a17 = a17.return;
        }
      }
      function ch(a17, b3) {
        Xg = a17;
        Zg = Yg = null;
        a17 = a17.dependencies;
        null !== a17 && null !== a17.firstContext && (0 !== (a17.lanes & b3) && (dh = true), a17.firstContext = null);
      }
      function eh(a17) {
        var b3 = a17._currentValue;
        if (Zg !== a17) if (a17 = { context: a17, memoizedValue: b3, next: null }, null === Yg) {
          if (null === Xg) throw Error(p15(308));
          Yg = a17;
          Xg.dependencies = { lanes: 0, firstContext: a17 };
        } else Yg = Yg.next = a17;
        return b3;
      }
      var fh = null;
      function gh(a17) {
        null === fh ? fh = [a17] : fh.push(a17);
      }
      function hh(a17, b3, c4, d8) {
        var e24 = b3.interleaved;
        null === e24 ? (c4.next = c4, gh(b3)) : (c4.next = e24.next, e24.next = c4);
        b3.interleaved = c4;
        return ih(a17, d8);
      }
      function ih(a17, b3) {
        a17.lanes |= b3;
        var c4 = a17.alternate;
        null !== c4 && (c4.lanes |= b3);
        c4 = a17;
        for (a17 = a17.return; null !== a17; ) a17.childLanes |= b3, c4 = a17.alternate, null !== c4 && (c4.childLanes |= b3), c4 = a17, a17 = a17.return;
        return 3 === c4.tag ? c4.stateNode : null;
      }
      var jh = false;
      function kh(a17) {
        a17.updateQueue = { baseState: a17.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a17, b3) {
        a17 = a17.updateQueue;
        b3.updateQueue === a17 && (b3.updateQueue = { baseState: a17.baseState, firstBaseUpdate: a17.firstBaseUpdate, lastBaseUpdate: a17.lastBaseUpdate, shared: a17.shared, effects: a17.effects });
      }
      function mh(a17, b3) {
        return { eventTime: a17, lane: b3, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a17, b3, c4) {
        var d8 = a17.updateQueue;
        if (null === d8) return null;
        d8 = d8.shared;
        if (0 !== (K & 2)) {
          var e24 = d8.pending;
          null === e24 ? b3.next = b3 : (b3.next = e24.next, e24.next = b3);
          d8.pending = b3;
          return ih(a17, c4);
        }
        e24 = d8.interleaved;
        null === e24 ? (b3.next = b3, gh(d8)) : (b3.next = e24.next, e24.next = b3);
        d8.interleaved = b3;
        return ih(a17, c4);
      }
      function oh(a17, b3, c4) {
        b3 = b3.updateQueue;
        if (null !== b3 && (b3 = b3.shared, 0 !== (c4 & 4194240))) {
          var d8 = b3.lanes;
          d8 &= a17.pendingLanes;
          c4 |= d8;
          b3.lanes = c4;
          Cc(a17, c4);
        }
      }
      function ph(a17, b3) {
        var c4 = a17.updateQueue, d8 = a17.alternate;
        if (null !== d8 && (d8 = d8.updateQueue, c4 === d8)) {
          var e24 = null, f12 = null;
          c4 = c4.firstBaseUpdate;
          if (null !== c4) {
            do {
              var g3 = { eventTime: c4.eventTime, lane: c4.lane, tag: c4.tag, payload: c4.payload, callback: c4.callback, next: null };
              null === f12 ? e24 = f12 = g3 : f12 = f12.next = g3;
              c4 = c4.next;
            } while (null !== c4);
            null === f12 ? e24 = f12 = b3 : f12 = f12.next = b3;
          } else e24 = f12 = b3;
          c4 = { baseState: d8.baseState, firstBaseUpdate: e24, lastBaseUpdate: f12, shared: d8.shared, effects: d8.effects };
          a17.updateQueue = c4;
          return;
        }
        a17 = c4.lastBaseUpdate;
        null === a17 ? c4.firstBaseUpdate = b3 : a17.next = b3;
        c4.lastBaseUpdate = b3;
      }
      function qh(a17, b3, c4, d8) {
        var e24 = a17.updateQueue;
        jh = false;
        var f12 = e24.firstBaseUpdate, g3 = e24.lastBaseUpdate, h = e24.shared.pending;
        if (null !== h) {
          e24.shared.pending = null;
          var k = h, l7 = k.next;
          k.next = null;
          null === g3 ? f12 = l7 : g3.next = l7;
          g3 = k;
          var m7 = a17.alternate;
          null !== m7 && (m7 = m7.updateQueue, h = m7.lastBaseUpdate, h !== g3 && (null === h ? m7.firstBaseUpdate = l7 : h.next = l7, m7.lastBaseUpdate = k));
        }
        if (null !== f12) {
          var q = e24.baseState;
          g3 = 0;
          m7 = l7 = k = null;
          h = f12;
          do {
            var r26 = h.lane, y = h.eventTime;
            if ((d8 & r26) === r26) {
              null !== m7 && (m7 = m7.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n12 = a17, t17 = h;
                r26 = b3;
                y = c4;
                switch (t17.tag) {
                  case 1:
                    n12 = t17.payload;
                    if ("function" === typeof n12) {
                      q = n12.call(y, q, r26);
                      break a;
                    }
                    q = n12;
                    break a;
                  case 3:
                    n12.flags = n12.flags & -65537 | 128;
                  case 0:
                    n12 = t17.payload;
                    r26 = "function" === typeof n12 ? n12.call(y, q, r26) : n12;
                    if (null === r26 || void 0 === r26) break a;
                    q = A2({}, q, r26);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a17.flags |= 64, r26 = e24.effects, null === r26 ? e24.effects = [h] : r26.push(h));
            } else y = { eventTime: y, lane: r26, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m7 ? (l7 = m7 = y, k = q) : m7 = m7.next = y, g3 |= r26;
            h = h.next;
            if (null === h) if (h = e24.shared.pending, null === h) break;
            else r26 = h, h = r26.next, r26.next = null, e24.lastBaseUpdate = r26, e24.shared.pending = null;
          } while (1);
          null === m7 && (k = q);
          e24.baseState = k;
          e24.firstBaseUpdate = l7;
          e24.lastBaseUpdate = m7;
          b3 = e24.shared.interleaved;
          if (null !== b3) {
            e24 = b3;
            do
              g3 |= e24.lane, e24 = e24.next;
            while (e24 !== b3);
          } else null === f12 && (e24.shared.lanes = 0);
          rh |= g3;
          a17.lanes = g3;
          a17.memoizedState = q;
        }
      }
      function sh(a17, b3, c4) {
        a17 = b3.effects;
        b3.effects = null;
        if (null !== a17) for (b3 = 0; b3 < a17.length; b3++) {
          var d8 = a17[b3], e24 = d8.callback;
          if (null !== e24) {
            d8.callback = null;
            d8 = c4;
            if ("function" !== typeof e24) throw Error(p15(191, e24));
            e24.call(d8);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a17) {
        if (a17 === th) throw Error(p15(174));
        return a17;
      }
      function yh(a17, b3) {
        G(wh, b3);
        G(vh, a17);
        G(uh, th);
        a17 = b3.nodeType;
        switch (a17) {
          case 9:
          case 11:
            b3 = (b3 = b3.documentElement) ? b3.namespaceURI : lb(null, "");
            break;
          default:
            a17 = 8 === a17 ? b3.parentNode : b3, b3 = a17.namespaceURI || null, a17 = a17.tagName, b3 = lb(b3, a17);
        }
        E2(uh);
        G(uh, b3);
      }
      function zh() {
        E2(uh);
        E2(vh);
        E2(wh);
      }
      function Ah(a17) {
        xh(wh.current);
        var b3 = xh(uh.current);
        var c4 = lb(b3, a17.type);
        b3 !== c4 && (G(vh, a17), G(uh, c4));
      }
      function Bh(a17) {
        vh.current === a17 && (E2(uh), E2(vh));
      }
      var L = Uf(0);
      function Ch(a17) {
        for (var b3 = a17; null !== b3; ) {
          if (13 === b3.tag) {
            var c4 = b3.memoizedState;
            if (null !== c4 && (c4 = c4.dehydrated, null === c4 || "$?" === c4.data || "$!" === c4.data)) return b3;
          } else if (19 === b3.tag && void 0 !== b3.memoizedProps.revealOrder) {
            if (0 !== (b3.flags & 128)) return b3;
          } else if (null !== b3.child) {
            b3.child.return = b3;
            b3 = b3.child;
            continue;
          }
          if (b3 === a17) break;
          for (; null === b3.sibling; ) {
            if (null === b3.return || b3.return === a17) return null;
            b3 = b3.return;
          }
          b3.sibling.return = b3.return;
          b3 = b3.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a17 = 0; a17 < Dh.length; a17++) Dh[a17]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N2 = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P4() {
        throw Error(p15(321));
      }
      function Mh(a17, b3) {
        if (null === b3) return false;
        for (var c4 = 0; c4 < b3.length && c4 < a17.length; c4++) if (!He(a17[c4], b3[c4])) return false;
        return true;
      }
      function Nh(a17, b3, c4, d8, e24, f12) {
        Hh = f12;
        M = b3;
        b3.memoizedState = null;
        b3.updateQueue = null;
        b3.lanes = 0;
        Fh.current = null === a17 || null === a17.memoizedState ? Oh : Ph;
        a17 = c4(d8, e24);
        if (Jh) {
          f12 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f12) throw Error(p15(301));
            f12 += 1;
            O = N2 = null;
            b3.updateQueue = null;
            Fh.current = Qh;
            a17 = c4(d8, e24);
          } while (Jh);
        }
        Fh.current = Rh;
        b3 = null !== N2 && null !== N2.next;
        Hh = 0;
        O = N2 = M = null;
        Ih = false;
        if (b3) throw Error(p15(300));
        return a17;
      }
      function Sh() {
        var a17 = 0 !== Kh;
        Kh = 0;
        return a17;
      }
      function Th() {
        var a17 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a17 : O = O.next = a17;
        return O;
      }
      function Uh() {
        if (null === N2) {
          var a17 = M.alternate;
          a17 = null !== a17 ? a17.memoizedState : null;
        } else a17 = N2.next;
        var b3 = null === O ? M.memoizedState : O.next;
        if (null !== b3) O = b3, N2 = a17;
        else {
          if (null === a17) throw Error(p15(310));
          N2 = a17;
          a17 = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
          null === O ? M.memoizedState = O = a17 : O = O.next = a17;
        }
        return O;
      }
      function Vh(a17, b3) {
        return "function" === typeof b3 ? b3(a17) : b3;
      }
      function Wh(a17) {
        var b3 = Uh(), c4 = b3.queue;
        if (null === c4) throw Error(p15(311));
        c4.lastRenderedReducer = a17;
        var d8 = N2, e24 = d8.baseQueue, f12 = c4.pending;
        if (null !== f12) {
          if (null !== e24) {
            var g3 = e24.next;
            e24.next = f12.next;
            f12.next = g3;
          }
          d8.baseQueue = e24 = f12;
          c4.pending = null;
        }
        if (null !== e24) {
          f12 = e24.next;
          d8 = d8.baseState;
          var h = g3 = null, k = null, l7 = f12;
          do {
            var m7 = l7.lane;
            if ((Hh & m7) === m7) null !== k && (k = k.next = { lane: 0, action: l7.action, hasEagerState: l7.hasEagerState, eagerState: l7.eagerState, next: null }), d8 = l7.hasEagerState ? l7.eagerState : a17(d8, l7.action);
            else {
              var q = {
                lane: m7,
                action: l7.action,
                hasEagerState: l7.hasEagerState,
                eagerState: l7.eagerState,
                next: null
              };
              null === k ? (h = k = q, g3 = d8) : k = k.next = q;
              M.lanes |= m7;
              rh |= m7;
            }
            l7 = l7.next;
          } while (null !== l7 && l7 !== f12);
          null === k ? g3 = d8 : k.next = h;
          He(d8, b3.memoizedState) || (dh = true);
          b3.memoizedState = d8;
          b3.baseState = g3;
          b3.baseQueue = k;
          c4.lastRenderedState = d8;
        }
        a17 = c4.interleaved;
        if (null !== a17) {
          e24 = a17;
          do
            f12 = e24.lane, M.lanes |= f12, rh |= f12, e24 = e24.next;
          while (e24 !== a17);
        } else null === e24 && (c4.lanes = 0);
        return [b3.memoizedState, c4.dispatch];
      }
      function Xh(a17) {
        var b3 = Uh(), c4 = b3.queue;
        if (null === c4) throw Error(p15(311));
        c4.lastRenderedReducer = a17;
        var d8 = c4.dispatch, e24 = c4.pending, f12 = b3.memoizedState;
        if (null !== e24) {
          c4.pending = null;
          var g3 = e24 = e24.next;
          do
            f12 = a17(f12, g3.action), g3 = g3.next;
          while (g3 !== e24);
          He(f12, b3.memoizedState) || (dh = true);
          b3.memoizedState = f12;
          null === b3.baseQueue && (b3.baseState = f12);
          c4.lastRenderedState = f12;
        }
        return [f12, d8];
      }
      function Yh() {
      }
      function Zh(a17, b3) {
        var c4 = M, d8 = Uh(), e24 = b3(), f12 = !He(d8.memoizedState, e24);
        f12 && (d8.memoizedState = e24, dh = true);
        d8 = d8.queue;
        $h(ai.bind(null, c4, d8, a17), [a17]);
        if (d8.getSnapshot !== b3 || f12 || null !== O && O.memoizedState.tag & 1) {
          c4.flags |= 2048;
          bi(9, ci.bind(null, c4, d8, e24, b3), void 0, null);
          if (null === Q) throw Error(p15(349));
          0 !== (Hh & 30) || di(c4, b3, e24);
        }
        return e24;
      }
      function di(a17, b3, c4) {
        a17.flags |= 16384;
        a17 = { getSnapshot: b3, value: c4 };
        b3 = M.updateQueue;
        null === b3 ? (b3 = { lastEffect: null, stores: null }, M.updateQueue = b3, b3.stores = [a17]) : (c4 = b3.stores, null === c4 ? b3.stores = [a17] : c4.push(a17));
      }
      function ci(a17, b3, c4, d8) {
        b3.value = c4;
        b3.getSnapshot = d8;
        ei(b3) && fi(a17);
      }
      function ai(a17, b3, c4) {
        return c4(function() {
          ei(b3) && fi(a17);
        });
      }
      function ei(a17) {
        var b3 = a17.getSnapshot;
        a17 = a17.value;
        try {
          var c4 = b3();
          return !He(a17, c4);
        } catch (d8) {
          return true;
        }
      }
      function fi(a17) {
        var b3 = ih(a17, 1);
        null !== b3 && gi(b3, a17, 1, -1);
      }
      function hi(a17) {
        var b3 = Th();
        "function" === typeof a17 && (a17 = a17());
        b3.memoizedState = b3.baseState = a17;
        a17 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a17 };
        b3.queue = a17;
        a17 = a17.dispatch = ii.bind(null, M, a17);
        return [b3.memoizedState, a17];
      }
      function bi(a17, b3, c4, d8) {
        a17 = { tag: a17, create: b3, destroy: c4, deps: d8, next: null };
        b3 = M.updateQueue;
        null === b3 ? (b3 = { lastEffect: null, stores: null }, M.updateQueue = b3, b3.lastEffect = a17.next = a17) : (c4 = b3.lastEffect, null === c4 ? b3.lastEffect = a17.next = a17 : (d8 = c4.next, c4.next = a17, a17.next = d8, b3.lastEffect = a17));
        return a17;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a17, b3, c4, d8) {
        var e24 = Th();
        M.flags |= a17;
        e24.memoizedState = bi(1 | b3, c4, void 0, void 0 === d8 ? null : d8);
      }
      function li(a17, b3, c4, d8) {
        var e24 = Uh();
        d8 = void 0 === d8 ? null : d8;
        var f12 = void 0;
        if (null !== N2) {
          var g3 = N2.memoizedState;
          f12 = g3.destroy;
          if (null !== d8 && Mh(d8, g3.deps)) {
            e24.memoizedState = bi(b3, c4, f12, d8);
            return;
          }
        }
        M.flags |= a17;
        e24.memoizedState = bi(1 | b3, c4, f12, d8);
      }
      function mi(a17, b3) {
        return ki(8390656, 8, a17, b3);
      }
      function $h(a17, b3) {
        return li(2048, 8, a17, b3);
      }
      function ni(a17, b3) {
        return li(4, 2, a17, b3);
      }
      function oi(a17, b3) {
        return li(4, 4, a17, b3);
      }
      function pi(a17, b3) {
        if ("function" === typeof b3) return a17 = a17(), b3(a17), function() {
          b3(null);
        };
        if (null !== b3 && void 0 !== b3) return a17 = a17(), b3.current = a17, function() {
          b3.current = null;
        };
      }
      function qi(a17, b3, c4) {
        c4 = null !== c4 && void 0 !== c4 ? c4.concat([a17]) : null;
        return li(4, 4, pi.bind(null, b3, a17), c4);
      }
      function ri() {
      }
      function si(a17, b3) {
        var c4 = Uh();
        b3 = void 0 === b3 ? null : b3;
        var d8 = c4.memoizedState;
        if (null !== d8 && null !== b3 && Mh(b3, d8[1])) return d8[0];
        c4.memoizedState = [a17, b3];
        return a17;
      }
      function ti(a17, b3) {
        var c4 = Uh();
        b3 = void 0 === b3 ? null : b3;
        var d8 = c4.memoizedState;
        if (null !== d8 && null !== b3 && Mh(b3, d8[1])) return d8[0];
        a17 = a17();
        c4.memoizedState = [a17, b3];
        return a17;
      }
      function ui(a17, b3, c4) {
        if (0 === (Hh & 21)) return a17.baseState && (a17.baseState = false, dh = true), a17.memoizedState = c4;
        He(c4, b3) || (c4 = yc(), M.lanes |= c4, rh |= c4, a17.baseState = true);
        return b3;
      }
      function vi(a17, b3) {
        var c4 = C;
        C = 0 !== c4 && 4 > c4 ? c4 : 4;
        a17(true);
        var d8 = Gh.transition;
        Gh.transition = {};
        try {
          a17(false), b3();
        } finally {
          C = c4, Gh.transition = d8;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a17, b3, c4) {
        var d8 = yi(a17);
        c4 = { lane: d8, action: c4, hasEagerState: false, eagerState: null, next: null };
        if (zi(a17)) Ai(b3, c4);
        else if (c4 = hh(a17, b3, c4, d8), null !== c4) {
          var e24 = R4();
          gi(c4, a17, d8, e24);
          Bi(c4, b3, d8);
        }
      }
      function ii(a17, b3, c4) {
        var d8 = yi(a17), e24 = { lane: d8, action: c4, hasEagerState: false, eagerState: null, next: null };
        if (zi(a17)) Ai(b3, e24);
        else {
          var f12 = a17.alternate;
          if (0 === a17.lanes && (null === f12 || 0 === f12.lanes) && (f12 = b3.lastRenderedReducer, null !== f12)) try {
            var g3 = b3.lastRenderedState, h = f12(g3, c4);
            e24.hasEagerState = true;
            e24.eagerState = h;
            if (He(h, g3)) {
              var k = b3.interleaved;
              null === k ? (e24.next = e24, gh(b3)) : (e24.next = k.next, k.next = e24);
              b3.interleaved = e24;
              return;
            }
          } catch (l7) {
          } finally {
          }
          c4 = hh(a17, b3, e24, d8);
          null !== c4 && (e24 = R4(), gi(c4, a17, d8, e24), Bi(c4, b3, d8));
        }
      }
      function zi(a17) {
        var b3 = a17.alternate;
        return a17 === M || null !== b3 && b3 === M;
      }
      function Ai(a17, b3) {
        Jh = Ih = true;
        var c4 = a17.pending;
        null === c4 ? b3.next = b3 : (b3.next = c4.next, c4.next = b3);
        a17.pending = b3;
      }
      function Bi(a17, b3, c4) {
        if (0 !== (c4 & 4194240)) {
          var d8 = b3.lanes;
          d8 &= a17.pendingLanes;
          c4 |= d8;
          b3.lanes = c4;
          Cc(a17, c4);
        }
      }
      var Rh = { readContext: eh, useCallback: P4, useContext: P4, useEffect: P4, useImperativeHandle: P4, useInsertionEffect: P4, useLayoutEffect: P4, useMemo: P4, useReducer: P4, useRef: P4, useState: P4, useDebugValue: P4, useDeferredValue: P4, useTransition: P4, useMutableSource: P4, useSyncExternalStore: P4, useId: P4, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a17, b3) {
        Th().memoizedState = [a17, void 0 === b3 ? null : b3];
        return a17;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a17, b3, c4) {
        c4 = null !== c4 && void 0 !== c4 ? c4.concat([a17]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b3, a17),
          c4
        );
      }, useLayoutEffect: function(a17, b3) {
        return ki(4194308, 4, a17, b3);
      }, useInsertionEffect: function(a17, b3) {
        return ki(4, 2, a17, b3);
      }, useMemo: function(a17, b3) {
        var c4 = Th();
        b3 = void 0 === b3 ? null : b3;
        a17 = a17();
        c4.memoizedState = [a17, b3];
        return a17;
      }, useReducer: function(a17, b3, c4) {
        var d8 = Th();
        b3 = void 0 !== c4 ? c4(b3) : b3;
        d8.memoizedState = d8.baseState = b3;
        a17 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a17, lastRenderedState: b3 };
        d8.queue = a17;
        a17 = a17.dispatch = xi.bind(null, M, a17);
        return [d8.memoizedState, a17];
      }, useRef: function(a17) {
        var b3 = Th();
        a17 = { current: a17 };
        return b3.memoizedState = a17;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a17) {
        return Th().memoizedState = a17;
      }, useTransition: function() {
        var a17 = hi(false), b3 = a17[0];
        a17 = vi.bind(null, a17[1]);
        Th().memoizedState = a17;
        return [b3, a17];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a17, b3, c4) {
        var d8 = M, e24 = Th();
        if (I2) {
          if (void 0 === c4) throw Error(p15(407));
          c4 = c4();
        } else {
          c4 = b3();
          if (null === Q) throw Error(p15(349));
          0 !== (Hh & 30) || di(d8, b3, c4);
        }
        e24.memoizedState = c4;
        var f12 = { value: c4, getSnapshot: b3 };
        e24.queue = f12;
        mi(ai.bind(
          null,
          d8,
          f12,
          a17
        ), [a17]);
        d8.flags |= 2048;
        bi(9, ci.bind(null, d8, f12, c4, b3), void 0, null);
        return c4;
      }, useId: function() {
        var a17 = Th(), b3 = Q.identifierPrefix;
        if (I2) {
          var c4 = sg;
          var d8 = rg;
          c4 = (d8 & ~(1 << 32 - oc(d8) - 1)).toString(32) + c4;
          b3 = ":" + b3 + "R" + c4;
          c4 = Kh++;
          0 < c4 && (b3 += "H" + c4.toString(32));
          b3 += ":";
        } else c4 = Lh++, b3 = ":" + b3 + "r" + c4.toString(32) + ":";
        return a17.memoizedState = b3;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a17) {
          var b3 = Uh();
          return ui(b3, N2.memoizedState, a17);
        },
        useTransition: function() {
          var a17 = Wh(Vh)[0], b3 = Uh().memoizedState;
          return [a17, b3];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a17) {
        var b3 = Uh();
        return null === N2 ? b3.memoizedState = a17 : ui(b3, N2.memoizedState, a17);
      }, useTransition: function() {
        var a17 = Xh(Vh)[0], b3 = Uh().memoizedState;
        return [a17, b3];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a17, b3) {
        if (a17 && a17.defaultProps) {
          b3 = A2({}, b3);
          a17 = a17.defaultProps;
          for (var c4 in a17) void 0 === b3[c4] && (b3[c4] = a17[c4]);
          return b3;
        }
        return b3;
      }
      function Di(a17, b3, c4, d8) {
        b3 = a17.memoizedState;
        c4 = c4(d8, b3);
        c4 = null === c4 || void 0 === c4 ? b3 : A2({}, b3, c4);
        a17.memoizedState = c4;
        0 === a17.lanes && (a17.updateQueue.baseState = c4);
      }
      var Ei = { isMounted: function(a17) {
        return (a17 = a17._reactInternals) ? Vb(a17) === a17 : false;
      }, enqueueSetState: function(a17, b3, c4) {
        a17 = a17._reactInternals;
        var d8 = R4(), e24 = yi(a17), f12 = mh(d8, e24);
        f12.payload = b3;
        void 0 !== c4 && null !== c4 && (f12.callback = c4);
        b3 = nh(a17, f12, e24);
        null !== b3 && (gi(b3, a17, e24, d8), oh(b3, a17, e24));
      }, enqueueReplaceState: function(a17, b3, c4) {
        a17 = a17._reactInternals;
        var d8 = R4(), e24 = yi(a17), f12 = mh(d8, e24);
        f12.tag = 1;
        f12.payload = b3;
        void 0 !== c4 && null !== c4 && (f12.callback = c4);
        b3 = nh(a17, f12, e24);
        null !== b3 && (gi(b3, a17, e24, d8), oh(b3, a17, e24));
      }, enqueueForceUpdate: function(a17, b3) {
        a17 = a17._reactInternals;
        var c4 = R4(), d8 = yi(a17), e24 = mh(c4, d8);
        e24.tag = 2;
        void 0 !== b3 && null !== b3 && (e24.callback = b3);
        b3 = nh(a17, e24, d8);
        null !== b3 && (gi(b3, a17, d8, c4), oh(b3, a17, d8));
      } };
      function Fi(a17, b3, c4, d8, e24, f12, g3) {
        a17 = a17.stateNode;
        return "function" === typeof a17.shouldComponentUpdate ? a17.shouldComponentUpdate(d8, f12, g3) : b3.prototype && b3.prototype.isPureReactComponent ? !Ie(c4, d8) || !Ie(e24, f12) : true;
      }
      function Gi(a17, b3, c4) {
        var d8 = false, e24 = Vf;
        var f12 = b3.contextType;
        "object" === typeof f12 && null !== f12 ? f12 = eh(f12) : (e24 = Zf(b3) ? Xf : H2.current, d8 = b3.contextTypes, f12 = (d8 = null !== d8 && void 0 !== d8) ? Yf(a17, e24) : Vf);
        b3 = new b3(c4, f12);
        a17.memoizedState = null !== b3.state && void 0 !== b3.state ? b3.state : null;
        b3.updater = Ei;
        a17.stateNode = b3;
        b3._reactInternals = a17;
        d8 && (a17 = a17.stateNode, a17.__reactInternalMemoizedUnmaskedChildContext = e24, a17.__reactInternalMemoizedMaskedChildContext = f12);
        return b3;
      }
      function Hi(a17, b3, c4, d8) {
        a17 = b3.state;
        "function" === typeof b3.componentWillReceiveProps && b3.componentWillReceiveProps(c4, d8);
        "function" === typeof b3.UNSAFE_componentWillReceiveProps && b3.UNSAFE_componentWillReceiveProps(c4, d8);
        b3.state !== a17 && Ei.enqueueReplaceState(b3, b3.state, null);
      }
      function Ii(a17, b3, c4, d8) {
        var e24 = a17.stateNode;
        e24.props = c4;
        e24.state = a17.memoizedState;
        e24.refs = {};
        kh(a17);
        var f12 = b3.contextType;
        "object" === typeof f12 && null !== f12 ? e24.context = eh(f12) : (f12 = Zf(b3) ? Xf : H2.current, e24.context = Yf(a17, f12));
        e24.state = a17.memoizedState;
        f12 = b3.getDerivedStateFromProps;
        "function" === typeof f12 && (Di(a17, b3, f12, c4), e24.state = a17.memoizedState);
        "function" === typeof b3.getDerivedStateFromProps || "function" === typeof e24.getSnapshotBeforeUpdate || "function" !== typeof e24.UNSAFE_componentWillMount && "function" !== typeof e24.componentWillMount || (b3 = e24.state, "function" === typeof e24.componentWillMount && e24.componentWillMount(), "function" === typeof e24.UNSAFE_componentWillMount && e24.UNSAFE_componentWillMount(), b3 !== e24.state && Ei.enqueueReplaceState(e24, e24.state, null), qh(a17, c4, e24, d8), e24.state = a17.memoizedState);
        "function" === typeof e24.componentDidMount && (a17.flags |= 4194308);
      }
      function Ji(a17, b3) {
        try {
          var c4 = "", d8 = b3;
          do
            c4 += Pa(d8), d8 = d8.return;
          while (d8);
          var e24 = c4;
        } catch (f12) {
          e24 = "\nError generating stack: " + f12.message + "\n" + f12.stack;
        }
        return { value: a17, source: b3, stack: e24, digest: null };
      }
      function Ki(a17, b3, c4) {
        return { value: a17, source: null, stack: null != c4 ? c4 : null, digest: null != b3 ? b3 : null };
      }
      function Li(a17, b3) {
        try {
          console.error(b3.value);
        } catch (c4) {
          setTimeout(function() {
            throw c4;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a17, b3, c4) {
        c4 = mh(-1, c4);
        c4.tag = 3;
        c4.payload = { element: null };
        var d8 = b3.value;
        c4.callback = function() {
          Oi || (Oi = true, Pi = d8);
          Li(a17, b3);
        };
        return c4;
      }
      function Qi(a17, b3, c4) {
        c4 = mh(-1, c4);
        c4.tag = 3;
        var d8 = a17.type.getDerivedStateFromError;
        if ("function" === typeof d8) {
          var e24 = b3.value;
          c4.payload = function() {
            return d8(e24);
          };
          c4.callback = function() {
            Li(a17, b3);
          };
        }
        var f12 = a17.stateNode;
        null !== f12 && "function" === typeof f12.componentDidCatch && (c4.callback = function() {
          Li(a17, b3);
          "function" !== typeof d8 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c5 = b3.stack;
          this.componentDidCatch(b3.value, { componentStack: null !== c5 ? c5 : "" });
        });
        return c4;
      }
      function Si(a17, b3, c4) {
        var d8 = a17.pingCache;
        if (null === d8) {
          d8 = a17.pingCache = new Mi();
          var e24 = /* @__PURE__ */ new Set();
          d8.set(b3, e24);
        } else e24 = d8.get(b3), void 0 === e24 && (e24 = /* @__PURE__ */ new Set(), d8.set(b3, e24));
        e24.has(c4) || (e24.add(c4), a17 = Ti.bind(null, a17, b3, c4), b3.then(a17, a17));
      }
      function Ui(a17) {
        do {
          var b3;
          if (b3 = 13 === a17.tag) b3 = a17.memoizedState, b3 = null !== b3 ? null !== b3.dehydrated ? true : false : true;
          if (b3) return a17;
          a17 = a17.return;
        } while (null !== a17);
        return null;
      }
      function Vi(a17, b3, c4, d8, e24) {
        if (0 === (a17.mode & 1)) return a17 === b3 ? a17.flags |= 65536 : (a17.flags |= 128, c4.flags |= 131072, c4.flags &= -52805, 1 === c4.tag && (null === c4.alternate ? c4.tag = 17 : (b3 = mh(-1, 1), b3.tag = 2, nh(c4, b3, 1))), c4.lanes |= 1), a17;
        a17.flags |= 65536;
        a17.lanes = e24;
        return a17;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a17, b3, c4, d8) {
        b3.child = null === a17 ? Vg(b3, null, c4, d8) : Ug(b3, a17.child, c4, d8);
      }
      function Yi(a17, b3, c4, d8, e24) {
        c4 = c4.render;
        var f12 = b3.ref;
        ch(b3, e24);
        d8 = Nh(a17, b3, c4, d8, f12, e24);
        c4 = Sh();
        if (null !== a17 && !dh) return b3.updateQueue = a17.updateQueue, b3.flags &= -2053, a17.lanes &= ~e24, Zi(a17, b3, e24);
        I2 && c4 && vg(b3);
        b3.flags |= 1;
        Xi(a17, b3, d8, e24);
        return b3.child;
      }
      function $i(a17, b3, c4, d8, e24) {
        if (null === a17) {
          var f12 = c4.type;
          if ("function" === typeof f12 && !aj(f12) && void 0 === f12.defaultProps && null === c4.compare && void 0 === c4.defaultProps) return b3.tag = 15, b3.type = f12, bj(a17, b3, f12, d8, e24);
          a17 = Rg(c4.type, null, d8, b3, b3.mode, e24);
          a17.ref = b3.ref;
          a17.return = b3;
          return b3.child = a17;
        }
        f12 = a17.child;
        if (0 === (a17.lanes & e24)) {
          var g3 = f12.memoizedProps;
          c4 = c4.compare;
          c4 = null !== c4 ? c4 : Ie;
          if (c4(g3, d8) && a17.ref === b3.ref) return Zi(a17, b3, e24);
        }
        b3.flags |= 1;
        a17 = Pg(f12, d8);
        a17.ref = b3.ref;
        a17.return = b3;
        return b3.child = a17;
      }
      function bj(a17, b3, c4, d8, e24) {
        if (null !== a17) {
          var f12 = a17.memoizedProps;
          if (Ie(f12, d8) && a17.ref === b3.ref) if (dh = false, b3.pendingProps = d8 = f12, 0 !== (a17.lanes & e24)) 0 !== (a17.flags & 131072) && (dh = true);
          else return b3.lanes = a17.lanes, Zi(a17, b3, e24);
        }
        return cj(a17, b3, c4, d8, e24);
      }
      function dj(a17, b3, c4) {
        var d8 = b3.pendingProps, e24 = d8.children, f12 = null !== a17 ? a17.memoizedState : null;
        if ("hidden" === d8.mode) if (0 === (b3.mode & 1)) b3.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c4;
        else {
          if (0 === (c4 & 1073741824)) return a17 = null !== f12 ? f12.baseLanes | c4 : c4, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = { baseLanes: a17, cachePool: null, transitions: null }, b3.updateQueue = null, G(ej, fj), fj |= a17, null;
          b3.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d8 = null !== f12 ? f12.baseLanes : c4;
          G(ej, fj);
          fj |= d8;
        }
        else null !== f12 ? (d8 = f12.baseLanes | c4, b3.memoizedState = null) : d8 = c4, G(ej, fj), fj |= d8;
        Xi(a17, b3, e24, c4);
        return b3.child;
      }
      function gj(a17, b3) {
        var c4 = b3.ref;
        if (null === a17 && null !== c4 || null !== a17 && a17.ref !== c4) b3.flags |= 512, b3.flags |= 2097152;
      }
      function cj(a17, b3, c4, d8, e24) {
        var f12 = Zf(c4) ? Xf : H2.current;
        f12 = Yf(b3, f12);
        ch(b3, e24);
        c4 = Nh(a17, b3, c4, d8, f12, e24);
        d8 = Sh();
        if (null !== a17 && !dh) return b3.updateQueue = a17.updateQueue, b3.flags &= -2053, a17.lanes &= ~e24, Zi(a17, b3, e24);
        I2 && d8 && vg(b3);
        b3.flags |= 1;
        Xi(a17, b3, c4, e24);
        return b3.child;
      }
      function hj(a17, b3, c4, d8, e24) {
        if (Zf(c4)) {
          var f12 = true;
          cg(b3);
        } else f12 = false;
        ch(b3, e24);
        if (null === b3.stateNode) ij(a17, b3), Gi(b3, c4, d8), Ii(b3, c4, d8, e24), d8 = true;
        else if (null === a17) {
          var g3 = b3.stateNode, h = b3.memoizedProps;
          g3.props = h;
          var k = g3.context, l7 = c4.contextType;
          "object" === typeof l7 && null !== l7 ? l7 = eh(l7) : (l7 = Zf(c4) ? Xf : H2.current, l7 = Yf(b3, l7));
          var m7 = c4.getDerivedStateFromProps, q = "function" === typeof m7 || "function" === typeof g3.getSnapshotBeforeUpdate;
          q || "function" !== typeof g3.UNSAFE_componentWillReceiveProps && "function" !== typeof g3.componentWillReceiveProps || (h !== d8 || k !== l7) && Hi(b3, g3, d8, l7);
          jh = false;
          var r26 = b3.memoizedState;
          g3.state = r26;
          qh(b3, d8, g3, e24);
          k = b3.memoizedState;
          h !== d8 || r26 !== k || Wf.current || jh ? ("function" === typeof m7 && (Di(b3, c4, m7, d8), k = b3.memoizedState), (h = jh || Fi(b3, c4, h, d8, r26, k, l7)) ? (q || "function" !== typeof g3.UNSAFE_componentWillMount && "function" !== typeof g3.componentWillMount || ("function" === typeof g3.componentWillMount && g3.componentWillMount(), "function" === typeof g3.UNSAFE_componentWillMount && g3.UNSAFE_componentWillMount()), "function" === typeof g3.componentDidMount && (b3.flags |= 4194308)) : ("function" === typeof g3.componentDidMount && (b3.flags |= 4194308), b3.memoizedProps = d8, b3.memoizedState = k), g3.props = d8, g3.state = k, g3.context = l7, d8 = h) : ("function" === typeof g3.componentDidMount && (b3.flags |= 4194308), d8 = false);
        } else {
          g3 = b3.stateNode;
          lh(a17, b3);
          h = b3.memoizedProps;
          l7 = b3.type === b3.elementType ? h : Ci(b3.type, h);
          g3.props = l7;
          q = b3.pendingProps;
          r26 = g3.context;
          k = c4.contextType;
          "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c4) ? Xf : H2.current, k = Yf(b3, k));
          var y = c4.getDerivedStateFromProps;
          (m7 = "function" === typeof y || "function" === typeof g3.getSnapshotBeforeUpdate) || "function" !== typeof g3.UNSAFE_componentWillReceiveProps && "function" !== typeof g3.componentWillReceiveProps || (h !== q || r26 !== k) && Hi(b3, g3, d8, k);
          jh = false;
          r26 = b3.memoizedState;
          g3.state = r26;
          qh(b3, d8, g3, e24);
          var n12 = b3.memoizedState;
          h !== q || r26 !== n12 || Wf.current || jh ? ("function" === typeof y && (Di(b3, c4, y, d8), n12 = b3.memoizedState), (l7 = jh || Fi(b3, c4, l7, d8, r26, n12, k) || false) ? (m7 || "function" !== typeof g3.UNSAFE_componentWillUpdate && "function" !== typeof g3.componentWillUpdate || ("function" === typeof g3.componentWillUpdate && g3.componentWillUpdate(d8, n12, k), "function" === typeof g3.UNSAFE_componentWillUpdate && g3.UNSAFE_componentWillUpdate(d8, n12, k)), "function" === typeof g3.componentDidUpdate && (b3.flags |= 4), "function" === typeof g3.getSnapshotBeforeUpdate && (b3.flags |= 1024)) : ("function" !== typeof g3.componentDidUpdate || h === a17.memoizedProps && r26 === a17.memoizedState || (b3.flags |= 4), "function" !== typeof g3.getSnapshotBeforeUpdate || h === a17.memoizedProps && r26 === a17.memoizedState || (b3.flags |= 1024), b3.memoizedProps = d8, b3.memoizedState = n12), g3.props = d8, g3.state = n12, g3.context = k, d8 = l7) : ("function" !== typeof g3.componentDidUpdate || h === a17.memoizedProps && r26 === a17.memoizedState || (b3.flags |= 4), "function" !== typeof g3.getSnapshotBeforeUpdate || h === a17.memoizedProps && r26 === a17.memoizedState || (b3.flags |= 1024), d8 = false);
        }
        return jj(a17, b3, c4, d8, f12, e24);
      }
      function jj(a17, b3, c4, d8, e24, f12) {
        gj(a17, b3);
        var g3 = 0 !== (b3.flags & 128);
        if (!d8 && !g3) return e24 && dg(b3, c4, false), Zi(a17, b3, f12);
        d8 = b3.stateNode;
        Wi.current = b3;
        var h = g3 && "function" !== typeof c4.getDerivedStateFromError ? null : d8.render();
        b3.flags |= 1;
        null !== a17 && g3 ? (b3.child = Ug(b3, a17.child, null, f12), b3.child = Ug(b3, null, h, f12)) : Xi(a17, b3, h, f12);
        b3.memoizedState = d8.state;
        e24 && dg(b3, c4, true);
        return b3.child;
      }
      function kj(a17) {
        var b3 = a17.stateNode;
        b3.pendingContext ? ag(a17, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && ag(a17, b3.context, false);
        yh(a17, b3.containerInfo);
      }
      function lj(a17, b3, c4, d8, e24) {
        Ig();
        Jg(e24);
        b3.flags |= 256;
        Xi(a17, b3, c4, d8);
        return b3.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a17) {
        return { baseLanes: a17, cachePool: null, transitions: null };
      }
      function oj(a17, b3, c4) {
        var d8 = b3.pendingProps, e24 = L.current, f12 = false, g3 = 0 !== (b3.flags & 128), h;
        (h = g3) || (h = null !== a17 && null === a17.memoizedState ? false : 0 !== (e24 & 2));
        if (h) f12 = true, b3.flags &= -129;
        else if (null === a17 || null !== a17.memoizedState) e24 |= 1;
        G(L, e24 & 1);
        if (null === a17) {
          Eg(b3);
          a17 = b3.memoizedState;
          if (null !== a17 && (a17 = a17.dehydrated, null !== a17)) return 0 === (b3.mode & 1) ? b3.lanes = 1 : "$!" === a17.data ? b3.lanes = 8 : b3.lanes = 1073741824, null;
          g3 = d8.children;
          a17 = d8.fallback;
          return f12 ? (d8 = b3.mode, f12 = b3.child, g3 = { mode: "hidden", children: g3 }, 0 === (d8 & 1) && null !== f12 ? (f12.childLanes = 0, f12.pendingProps = g3) : f12 = pj(g3, d8, 0, null), a17 = Tg(a17, d8, c4, null), f12.return = b3, a17.return = b3, f12.sibling = a17, b3.child = f12, b3.child.memoizedState = nj(c4), b3.memoizedState = mj, a17) : qj(b3, g3);
        }
        e24 = a17.memoizedState;
        if (null !== e24 && (h = e24.dehydrated, null !== h)) return rj(a17, b3, g3, d8, h, e24, c4);
        if (f12) {
          f12 = d8.fallback;
          g3 = b3.mode;
          e24 = a17.child;
          h = e24.sibling;
          var k = { mode: "hidden", children: d8.children };
          0 === (g3 & 1) && b3.child !== e24 ? (d8 = b3.child, d8.childLanes = 0, d8.pendingProps = k, b3.deletions = null) : (d8 = Pg(e24, k), d8.subtreeFlags = e24.subtreeFlags & 14680064);
          null !== h ? f12 = Pg(h, f12) : (f12 = Tg(f12, g3, c4, null), f12.flags |= 2);
          f12.return = b3;
          d8.return = b3;
          d8.sibling = f12;
          b3.child = d8;
          d8 = f12;
          f12 = b3.child;
          g3 = a17.child.memoizedState;
          g3 = null === g3 ? nj(c4) : { baseLanes: g3.baseLanes | c4, cachePool: null, transitions: g3.transitions };
          f12.memoizedState = g3;
          f12.childLanes = a17.childLanes & ~c4;
          b3.memoizedState = mj;
          return d8;
        }
        f12 = a17.child;
        a17 = f12.sibling;
        d8 = Pg(f12, { mode: "visible", children: d8.children });
        0 === (b3.mode & 1) && (d8.lanes = c4);
        d8.return = b3;
        d8.sibling = null;
        null !== a17 && (c4 = b3.deletions, null === c4 ? (b3.deletions = [a17], b3.flags |= 16) : c4.push(a17));
        b3.child = d8;
        b3.memoizedState = null;
        return d8;
      }
      function qj(a17, b3) {
        b3 = pj({ mode: "visible", children: b3 }, a17.mode, 0, null);
        b3.return = a17;
        return a17.child = b3;
      }
      function sj(a17, b3, c4, d8) {
        null !== d8 && Jg(d8);
        Ug(b3, a17.child, null, c4);
        a17 = qj(b3, b3.pendingProps.children);
        a17.flags |= 2;
        b3.memoizedState = null;
        return a17;
      }
      function rj(a17, b3, c4, d8, e24, f12, g3) {
        if (c4) {
          if (b3.flags & 256) return b3.flags &= -257, d8 = Ki(Error(p15(422))), sj(a17, b3, g3, d8);
          if (null !== b3.memoizedState) return b3.child = a17.child, b3.flags |= 128, null;
          f12 = d8.fallback;
          e24 = b3.mode;
          d8 = pj({ mode: "visible", children: d8.children }, e24, 0, null);
          f12 = Tg(f12, e24, g3, null);
          f12.flags |= 2;
          d8.return = b3;
          f12.return = b3;
          d8.sibling = f12;
          b3.child = d8;
          0 !== (b3.mode & 1) && Ug(b3, a17.child, null, g3);
          b3.child.memoizedState = nj(g3);
          b3.memoizedState = mj;
          return f12;
        }
        if (0 === (b3.mode & 1)) return sj(a17, b3, g3, null);
        if ("$!" === e24.data) {
          d8 = e24.nextSibling && e24.nextSibling.dataset;
          if (d8) var h = d8.dgst;
          d8 = h;
          f12 = Error(p15(419));
          d8 = Ki(f12, d8, void 0);
          return sj(a17, b3, g3, d8);
        }
        h = 0 !== (g3 & a17.childLanes);
        if (dh || h) {
          d8 = Q;
          if (null !== d8) {
            switch (g3 & -g3) {
              case 4:
                e24 = 2;
                break;
              case 16:
                e24 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e24 = 32;
                break;
              case 536870912:
                e24 = 268435456;
                break;
              default:
                e24 = 0;
            }
            e24 = 0 !== (e24 & (d8.suspendedLanes | g3)) ? 0 : e24;
            0 !== e24 && e24 !== f12.retryLane && (f12.retryLane = e24, ih(a17, e24), gi(d8, a17, e24, -1));
          }
          tj();
          d8 = Ki(Error(p15(421)));
          return sj(a17, b3, g3, d8);
        }
        if ("$?" === e24.data) return b3.flags |= 128, b3.child = a17.child, b3 = uj.bind(null, a17), e24._reactRetry = b3, null;
        a17 = f12.treeContext;
        yg = Lf(e24.nextSibling);
        xg = b3;
        I2 = true;
        zg = null;
        null !== a17 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a17.id, sg = a17.overflow, qg = b3);
        b3 = qj(b3, d8.children);
        b3.flags |= 4096;
        return b3;
      }
      function vj(a17, b3, c4) {
        a17.lanes |= b3;
        var d8 = a17.alternate;
        null !== d8 && (d8.lanes |= b3);
        bh(a17.return, b3, c4);
      }
      function wj(a17, b3, c4, d8, e24) {
        var f12 = a17.memoizedState;
        null === f12 ? a17.memoizedState = { isBackwards: b3, rendering: null, renderingStartTime: 0, last: d8, tail: c4, tailMode: e24 } : (f12.isBackwards = b3, f12.rendering = null, f12.renderingStartTime = 0, f12.last = d8, f12.tail = c4, f12.tailMode = e24);
      }
      function xj(a17, b3, c4) {
        var d8 = b3.pendingProps, e24 = d8.revealOrder, f12 = d8.tail;
        Xi(a17, b3, d8.children, c4);
        d8 = L.current;
        if (0 !== (d8 & 2)) d8 = d8 & 1 | 2, b3.flags |= 128;
        else {
          if (null !== a17 && 0 !== (a17.flags & 128)) a: for (a17 = b3.child; null !== a17; ) {
            if (13 === a17.tag) null !== a17.memoizedState && vj(a17, c4, b3);
            else if (19 === a17.tag) vj(a17, c4, b3);
            else if (null !== a17.child) {
              a17.child.return = a17;
              a17 = a17.child;
              continue;
            }
            if (a17 === b3) break a;
            for (; null === a17.sibling; ) {
              if (null === a17.return || a17.return === b3) break a;
              a17 = a17.return;
            }
            a17.sibling.return = a17.return;
            a17 = a17.sibling;
          }
          d8 &= 1;
        }
        G(L, d8);
        if (0 === (b3.mode & 1)) b3.memoizedState = null;
        else switch (e24) {
          case "forwards":
            c4 = b3.child;
            for (e24 = null; null !== c4; ) a17 = c4.alternate, null !== a17 && null === Ch(a17) && (e24 = c4), c4 = c4.sibling;
            c4 = e24;
            null === c4 ? (e24 = b3.child, b3.child = null) : (e24 = c4.sibling, c4.sibling = null);
            wj(b3, false, e24, c4, f12);
            break;
          case "backwards":
            c4 = null;
            e24 = b3.child;
            for (b3.child = null; null !== e24; ) {
              a17 = e24.alternate;
              if (null !== a17 && null === Ch(a17)) {
                b3.child = e24;
                break;
              }
              a17 = e24.sibling;
              e24.sibling = c4;
              c4 = e24;
              e24 = a17;
            }
            wj(b3, true, c4, null, f12);
            break;
          case "together":
            wj(b3, false, null, null, void 0);
            break;
          default:
            b3.memoizedState = null;
        }
        return b3.child;
      }
      function ij(a17, b3) {
        0 === (b3.mode & 1) && null !== a17 && (a17.alternate = null, b3.alternate = null, b3.flags |= 2);
      }
      function Zi(a17, b3, c4) {
        null !== a17 && (b3.dependencies = a17.dependencies);
        rh |= b3.lanes;
        if (0 === (c4 & b3.childLanes)) return null;
        if (null !== a17 && b3.child !== a17.child) throw Error(p15(153));
        if (null !== b3.child) {
          a17 = b3.child;
          c4 = Pg(a17, a17.pendingProps);
          b3.child = c4;
          for (c4.return = b3; null !== a17.sibling; ) a17 = a17.sibling, c4 = c4.sibling = Pg(a17, a17.pendingProps), c4.return = b3;
          c4.sibling = null;
        }
        return b3.child;
      }
      function yj(a17, b3, c4) {
        switch (b3.tag) {
          case 3:
            kj(b3);
            Ig();
            break;
          case 5:
            Ah(b3);
            break;
          case 1:
            Zf(b3.type) && cg(b3);
            break;
          case 4:
            yh(b3, b3.stateNode.containerInfo);
            break;
          case 10:
            var d8 = b3.type._context, e24 = b3.memoizedProps.value;
            G(Wg, d8._currentValue);
            d8._currentValue = e24;
            break;
          case 13:
            d8 = b3.memoizedState;
            if (null !== d8) {
              if (null !== d8.dehydrated) return G(L, L.current & 1), b3.flags |= 128, null;
              if (0 !== (c4 & b3.child.childLanes)) return oj(a17, b3, c4);
              G(L, L.current & 1);
              a17 = Zi(a17, b3, c4);
              return null !== a17 ? a17.sibling : null;
            }
            G(L, L.current & 1);
            break;
          case 19:
            d8 = 0 !== (c4 & b3.childLanes);
            if (0 !== (a17.flags & 128)) {
              if (d8) return xj(a17, b3, c4);
              b3.flags |= 128;
            }
            e24 = b3.memoizedState;
            null !== e24 && (e24.rendering = null, e24.tail = null, e24.lastEffect = null);
            G(L, L.current);
            if (d8) break;
            else return null;
          case 22:
          case 23:
            return b3.lanes = 0, dj(a17, b3, c4);
        }
        return Zi(a17, b3, c4);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a17, b3) {
        for (var c4 = b3.child; null !== c4; ) {
          if (5 === c4.tag || 6 === c4.tag) a17.appendChild(c4.stateNode);
          else if (4 !== c4.tag && null !== c4.child) {
            c4.child.return = c4;
            c4 = c4.child;
            continue;
          }
          if (c4 === b3) break;
          for (; null === c4.sibling; ) {
            if (null === c4.return || c4.return === b3) return;
            c4 = c4.return;
          }
          c4.sibling.return = c4.return;
          c4 = c4.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a17, b3, c4, d8) {
        var e24 = a17.memoizedProps;
        if (e24 !== d8) {
          a17 = b3.stateNode;
          xh(uh.current);
          var f12 = null;
          switch (c4) {
            case "input":
              e24 = Ya(a17, e24);
              d8 = Ya(a17, d8);
              f12 = [];
              break;
            case "select":
              e24 = A2({}, e24, { value: void 0 });
              d8 = A2({}, d8, { value: void 0 });
              f12 = [];
              break;
            case "textarea":
              e24 = gb(a17, e24);
              d8 = gb(a17, d8);
              f12 = [];
              break;
            default:
              "function" !== typeof e24.onClick && "function" === typeof d8.onClick && (a17.onclick = Bf);
          }
          ub(c4, d8);
          var g3;
          c4 = null;
          for (l7 in e24) if (!d8.hasOwnProperty(l7) && e24.hasOwnProperty(l7) && null != e24[l7]) if ("style" === l7) {
            var h = e24[l7];
            for (g3 in h) h.hasOwnProperty(g3) && (c4 || (c4 = {}), c4[g3] = "");
          } else "dangerouslySetInnerHTML" !== l7 && "children" !== l7 && "suppressContentEditableWarning" !== l7 && "suppressHydrationWarning" !== l7 && "autoFocus" !== l7 && (ea.hasOwnProperty(l7) ? f12 || (f12 = []) : (f12 = f12 || []).push(l7, null));
          for (l7 in d8) {
            var k = d8[l7];
            h = null != e24 ? e24[l7] : void 0;
            if (d8.hasOwnProperty(l7) && k !== h && (null != k || null != h)) if ("style" === l7) if (h) {
              for (g3 in h) !h.hasOwnProperty(g3) || k && k.hasOwnProperty(g3) || (c4 || (c4 = {}), c4[g3] = "");
              for (g3 in k) k.hasOwnProperty(g3) && h[g3] !== k[g3] && (c4 || (c4 = {}), c4[g3] = k[g3]);
            } else c4 || (f12 || (f12 = []), f12.push(
              l7,
              c4
            )), c4 = k;
            else "dangerouslySetInnerHTML" === l7 ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f12 = f12 || []).push(l7, k)) : "children" === l7 ? "string" !== typeof k && "number" !== typeof k || (f12 = f12 || []).push(l7, "" + k) : "suppressContentEditableWarning" !== l7 && "suppressHydrationWarning" !== l7 && (ea.hasOwnProperty(l7) ? (null != k && "onScroll" === l7 && D2("scroll", a17), f12 || h === k || (f12 = [])) : (f12 = f12 || []).push(l7, k));
          }
          c4 && (f12 = f12 || []).push("style", c4);
          var l7 = f12;
          if (b3.updateQueue = l7) b3.flags |= 4;
        }
      };
      Cj = function(a17, b3, c4, d8) {
        c4 !== d8 && (b3.flags |= 4);
      };
      function Dj(a17, b3) {
        if (!I2) switch (a17.tailMode) {
          case "hidden":
            b3 = a17.tail;
            for (var c4 = null; null !== b3; ) null !== b3.alternate && (c4 = b3), b3 = b3.sibling;
            null === c4 ? a17.tail = null : c4.sibling = null;
            break;
          case "collapsed":
            c4 = a17.tail;
            for (var d8 = null; null !== c4; ) null !== c4.alternate && (d8 = c4), c4 = c4.sibling;
            null === d8 ? b3 || null === a17.tail ? a17.tail = null : a17.tail.sibling = null : d8.sibling = null;
        }
      }
      function S2(a17) {
        var b3 = null !== a17.alternate && a17.alternate.child === a17.child, c4 = 0, d8 = 0;
        if (b3) for (var e24 = a17.child; null !== e24; ) c4 |= e24.lanes | e24.childLanes, d8 |= e24.subtreeFlags & 14680064, d8 |= e24.flags & 14680064, e24.return = a17, e24 = e24.sibling;
        else for (e24 = a17.child; null !== e24; ) c4 |= e24.lanes | e24.childLanes, d8 |= e24.subtreeFlags, d8 |= e24.flags, e24.return = a17, e24 = e24.sibling;
        a17.subtreeFlags |= d8;
        a17.childLanes = c4;
        return b3;
      }
      function Ej(a17, b3, c4) {
        var d8 = b3.pendingProps;
        wg(b3);
        switch (b3.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S2(b3), null;
          case 1:
            return Zf(b3.type) && $f(), S2(b3), null;
          case 3:
            d8 = b3.stateNode;
            zh();
            E2(Wf);
            E2(H2);
            Eh();
            d8.pendingContext && (d8.context = d8.pendingContext, d8.pendingContext = null);
            if (null === a17 || null === a17.child) Gg(b3) ? b3.flags |= 4 : null === a17 || a17.memoizedState.isDehydrated && 0 === (b3.flags & 256) || (b3.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a17, b3);
            S2(b3);
            return null;
          case 5:
            Bh(b3);
            var e24 = xh(wh.current);
            c4 = b3.type;
            if (null !== a17 && null != b3.stateNode) Bj(a17, b3, c4, d8, e24), a17.ref !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
            else {
              if (!d8) {
                if (null === b3.stateNode) throw Error(p15(166));
                S2(b3);
                return null;
              }
              a17 = xh(uh.current);
              if (Gg(b3)) {
                d8 = b3.stateNode;
                c4 = b3.type;
                var f12 = b3.memoizedProps;
                d8[Of] = b3;
                d8[Pf] = f12;
                a17 = 0 !== (b3.mode & 1);
                switch (c4) {
                  case "dialog":
                    D2("cancel", d8);
                    D2("close", d8);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d8);
                    break;
                  case "video":
                  case "audio":
                    for (e24 = 0; e24 < lf.length; e24++) D2(lf[e24], d8);
                    break;
                  case "source":
                    D2("error", d8);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d8
                    );
                    D2("load", d8);
                    break;
                  case "details":
                    D2("toggle", d8);
                    break;
                  case "input":
                    Za(d8, f12);
                    D2("invalid", d8);
                    break;
                  case "select":
                    d8._wrapperState = { wasMultiple: !!f12.multiple };
                    D2("invalid", d8);
                    break;
                  case "textarea":
                    hb(d8, f12), D2("invalid", d8);
                }
                ub(c4, f12);
                e24 = null;
                for (var g3 in f12) if (f12.hasOwnProperty(g3)) {
                  var h = f12[g3];
                  "children" === g3 ? "string" === typeof h ? d8.textContent !== h && (true !== f12.suppressHydrationWarning && Af(d8.textContent, h, a17), e24 = ["children", h]) : "number" === typeof h && d8.textContent !== "" + h && (true !== f12.suppressHydrationWarning && Af(
                    d8.textContent,
                    h,
                    a17
                  ), e24 = ["children", "" + h]) : ea.hasOwnProperty(g3) && null != h && "onScroll" === g3 && D2("scroll", d8);
                }
                switch (c4) {
                  case "input":
                    Va(d8);
                    db(d8, f12, true);
                    break;
                  case "textarea":
                    Va(d8);
                    jb(d8);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f12.onClick && (d8.onclick = Bf);
                }
                d8 = e24;
                b3.updateQueue = d8;
                null !== d8 && (b3.flags |= 4);
              } else {
                g3 = 9 === e24.nodeType ? e24 : e24.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a17 && (a17 = kb(c4));
                "http://www.w3.org/1999/xhtml" === a17 ? "script" === c4 ? (a17 = g3.createElement("div"), a17.innerHTML = "<script><\/script>", a17 = a17.removeChild(a17.firstChild)) : "string" === typeof d8.is ? a17 = g3.createElement(c4, { is: d8.is }) : (a17 = g3.createElement(c4), "select" === c4 && (g3 = a17, d8.multiple ? g3.multiple = true : d8.size && (g3.size = d8.size))) : a17 = g3.createElementNS(a17, c4);
                a17[Of] = b3;
                a17[Pf] = d8;
                zj(a17, b3, false, false);
                b3.stateNode = a17;
                a: {
                  g3 = vb(c4, d8);
                  switch (c4) {
                    case "dialog":
                      D2("cancel", a17);
                      D2("close", a17);
                      e24 = d8;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a17);
                      e24 = d8;
                      break;
                    case "video":
                    case "audio":
                      for (e24 = 0; e24 < lf.length; e24++) D2(lf[e24], a17);
                      e24 = d8;
                      break;
                    case "source":
                      D2("error", a17);
                      e24 = d8;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a17
                      );
                      D2("load", a17);
                      e24 = d8;
                      break;
                    case "details":
                      D2("toggle", a17);
                      e24 = d8;
                      break;
                    case "input":
                      Za(a17, d8);
                      e24 = Ya(a17, d8);
                      D2("invalid", a17);
                      break;
                    case "option":
                      e24 = d8;
                      break;
                    case "select":
                      a17._wrapperState = { wasMultiple: !!d8.multiple };
                      e24 = A2({}, d8, { value: void 0 });
                      D2("invalid", a17);
                      break;
                    case "textarea":
                      hb(a17, d8);
                      e24 = gb(a17, d8);
                      D2("invalid", a17);
                      break;
                    default:
                      e24 = d8;
                  }
                  ub(c4, e24);
                  h = e24;
                  for (f12 in h) if (h.hasOwnProperty(f12)) {
                    var k = h[f12];
                    "style" === f12 ? sb(a17, k) : "dangerouslySetInnerHTML" === f12 ? (k = k ? k.__html : void 0, null != k && nb(a17, k)) : "children" === f12 ? "string" === typeof k ? ("textarea" !== c4 || "" !== k) && ob(a17, k) : "number" === typeof k && ob(a17, "" + k) : "suppressContentEditableWarning" !== f12 && "suppressHydrationWarning" !== f12 && "autoFocus" !== f12 && (ea.hasOwnProperty(f12) ? null != k && "onScroll" === f12 && D2("scroll", a17) : null != k && ta(a17, f12, k, g3));
                  }
                  switch (c4) {
                    case "input":
                      Va(a17);
                      db(a17, d8, false);
                      break;
                    case "textarea":
                      Va(a17);
                      jb(a17);
                      break;
                    case "option":
                      null != d8.value && a17.setAttribute("value", "" + Sa(d8.value));
                      break;
                    case "select":
                      a17.multiple = !!d8.multiple;
                      f12 = d8.value;
                      null != f12 ? fb(a17, !!d8.multiple, f12, false) : null != d8.defaultValue && fb(
                        a17,
                        !!d8.multiple,
                        d8.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e24.onClick && (a17.onclick = Bf);
                  }
                  switch (c4) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d8 = !!d8.autoFocus;
                      break a;
                    case "img":
                      d8 = true;
                      break a;
                    default:
                      d8 = false;
                  }
                }
                d8 && (b3.flags |= 4);
              }
              null !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
            }
            S2(b3);
            return null;
          case 6:
            if (a17 && null != b3.stateNode) Cj(a17, b3, a17.memoizedProps, d8);
            else {
              if ("string" !== typeof d8 && null === b3.stateNode) throw Error(p15(166));
              c4 = xh(wh.current);
              xh(uh.current);
              if (Gg(b3)) {
                d8 = b3.stateNode;
                c4 = b3.memoizedProps;
                d8[Of] = b3;
                if (f12 = d8.nodeValue !== c4) {
                  if (a17 = xg, null !== a17) switch (a17.tag) {
                    case 3:
                      Af(d8.nodeValue, c4, 0 !== (a17.mode & 1));
                      break;
                    case 5:
                      true !== a17.memoizedProps.suppressHydrationWarning && Af(d8.nodeValue, c4, 0 !== (a17.mode & 1));
                  }
                }
                f12 && (b3.flags |= 4);
              } else d8 = (9 === c4.nodeType ? c4 : c4.ownerDocument).createTextNode(d8), d8[Of] = b3, b3.stateNode = d8;
            }
            S2(b3);
            return null;
          case 13:
            E2(L);
            d8 = b3.memoizedState;
            if (null === a17 || null !== a17.memoizedState && null !== a17.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b3.mode & 1) && 0 === (b3.flags & 128)) Hg(), Ig(), b3.flags |= 98560, f12 = false;
              else if (f12 = Gg(b3), null !== d8 && null !== d8.dehydrated) {
                if (null === a17) {
                  if (!f12) throw Error(p15(318));
                  f12 = b3.memoizedState;
                  f12 = null !== f12 ? f12.dehydrated : null;
                  if (!f12) throw Error(p15(317));
                  f12[Of] = b3;
                } else Ig(), 0 === (b3.flags & 128) && (b3.memoizedState = null), b3.flags |= 4;
                S2(b3);
                f12 = false;
              } else null !== zg && (Fj(zg), zg = null), f12 = true;
              if (!f12) return b3.flags & 65536 ? b3 : null;
            }
            if (0 !== (b3.flags & 128)) return b3.lanes = c4, b3;
            d8 = null !== d8;
            d8 !== (null !== a17 && null !== a17.memoizedState) && d8 && (b3.child.flags |= 8192, 0 !== (b3.mode & 1) && (null === a17 || 0 !== (L.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
            null !== b3.updateQueue && (b3.flags |= 4);
            S2(b3);
            return null;
          case 4:
            return zh(), Aj(a17, b3), null === a17 && sf(b3.stateNode.containerInfo), S2(b3), null;
          case 10:
            return ah(b3.type._context), S2(b3), null;
          case 17:
            return Zf(b3.type) && $f(), S2(b3), null;
          case 19:
            E2(L);
            f12 = b3.memoizedState;
            if (null === f12) return S2(b3), null;
            d8 = 0 !== (b3.flags & 128);
            g3 = f12.rendering;
            if (null === g3) if (d8) Dj(f12, false);
            else {
              if (0 !== T2 || null !== a17 && 0 !== (a17.flags & 128)) for (a17 = b3.child; null !== a17; ) {
                g3 = Ch(a17);
                if (null !== g3) {
                  b3.flags |= 128;
                  Dj(f12, false);
                  d8 = g3.updateQueue;
                  null !== d8 && (b3.updateQueue = d8, b3.flags |= 4);
                  b3.subtreeFlags = 0;
                  d8 = c4;
                  for (c4 = b3.child; null !== c4; ) f12 = c4, a17 = d8, f12.flags &= 14680066, g3 = f12.alternate, null === g3 ? (f12.childLanes = 0, f12.lanes = a17, f12.child = null, f12.subtreeFlags = 0, f12.memoizedProps = null, f12.memoizedState = null, f12.updateQueue = null, f12.dependencies = null, f12.stateNode = null) : (f12.childLanes = g3.childLanes, f12.lanes = g3.lanes, f12.child = g3.child, f12.subtreeFlags = 0, f12.deletions = null, f12.memoizedProps = g3.memoizedProps, f12.memoizedState = g3.memoizedState, f12.updateQueue = g3.updateQueue, f12.type = g3.type, a17 = g3.dependencies, f12.dependencies = null === a17 ? null : { lanes: a17.lanes, firstContext: a17.firstContext }), c4 = c4.sibling;
                  G(L, L.current & 1 | 2);
                  return b3.child;
                }
                a17 = a17.sibling;
              }
              null !== f12.tail && B2() > Gj && (b3.flags |= 128, d8 = true, Dj(f12, false), b3.lanes = 4194304);
            }
            else {
              if (!d8) if (a17 = Ch(g3), null !== a17) {
                if (b3.flags |= 128, d8 = true, c4 = a17.updateQueue, null !== c4 && (b3.updateQueue = c4, b3.flags |= 4), Dj(f12, true), null === f12.tail && "hidden" === f12.tailMode && !g3.alternate && !I2) return S2(b3), null;
              } else 2 * B2() - f12.renderingStartTime > Gj && 1073741824 !== c4 && (b3.flags |= 128, d8 = true, Dj(f12, false), b3.lanes = 4194304);
              f12.isBackwards ? (g3.sibling = b3.child, b3.child = g3) : (c4 = f12.last, null !== c4 ? c4.sibling = g3 : b3.child = g3, f12.last = g3);
            }
            if (null !== f12.tail) return b3 = f12.tail, f12.rendering = b3, f12.tail = b3.sibling, f12.renderingStartTime = B2(), b3.sibling = null, c4 = L.current, G(L, d8 ? c4 & 1 | 2 : c4 & 1), b3;
            S2(b3);
            return null;
          case 22:
          case 23:
            return Hj(), d8 = null !== b3.memoizedState, null !== a17 && null !== a17.memoizedState !== d8 && (b3.flags |= 8192), d8 && 0 !== (b3.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b3), b3.subtreeFlags & 6 && (b3.flags |= 8192)) : S2(b3), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p15(156, b3.tag));
      }
      function Ij(a17, b3) {
        wg(b3);
        switch (b3.tag) {
          case 1:
            return Zf(b3.type) && $f(), a17 = b3.flags, a17 & 65536 ? (b3.flags = a17 & -65537 | 128, b3) : null;
          case 3:
            return zh(), E2(Wf), E2(H2), Eh(), a17 = b3.flags, 0 !== (a17 & 65536) && 0 === (a17 & 128) ? (b3.flags = a17 & -65537 | 128, b3) : null;
          case 5:
            return Bh(b3), null;
          case 13:
            E2(L);
            a17 = b3.memoizedState;
            if (null !== a17 && null !== a17.dehydrated) {
              if (null === b3.alternate) throw Error(p15(340));
              Ig();
            }
            a17 = b3.flags;
            return a17 & 65536 ? (b3.flags = a17 & -65537 | 128, b3) : null;
          case 19:
            return E2(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b3.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a17, b3) {
        var c4 = a17.ref;
        if (null !== c4) if ("function" === typeof c4) try {
          c4(null);
        } catch (d8) {
          W(a17, b3, d8);
        }
        else c4.current = null;
      }
      function Mj(a17, b3, c4) {
        try {
          c4();
        } catch (d8) {
          W(a17, b3, d8);
        }
      }
      var Nj = false;
      function Oj(a17, b3) {
        Cf = dd;
        a17 = Me();
        if (Ne(a17)) {
          if ("selectionStart" in a17) var c4 = { start: a17.selectionStart, end: a17.selectionEnd };
          else a: {
            c4 = (c4 = a17.ownerDocument) && c4.defaultView || window;
            var d8 = c4.getSelection && c4.getSelection();
            if (d8 && 0 !== d8.rangeCount) {
              c4 = d8.anchorNode;
              var e24 = d8.anchorOffset, f12 = d8.focusNode;
              d8 = d8.focusOffset;
              try {
                c4.nodeType, f12.nodeType;
              } catch (F) {
                c4 = null;
                break a;
              }
              var g3 = 0, h = -1, k = -1, l7 = 0, m7 = 0, q = a17, r26 = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q !== c4 || 0 !== e24 && 3 !== q.nodeType || (h = g3 + e24);
                  q !== f12 || 0 !== d8 && 3 !== q.nodeType || (k = g3 + d8);
                  3 === q.nodeType && (g3 += q.nodeValue.length);
                  if (null === (y = q.firstChild)) break;
                  r26 = q;
                  q = y;
                }
                for (; ; ) {
                  if (q === a17) break b;
                  r26 === c4 && ++l7 === e24 && (h = g3);
                  r26 === f12 && ++m7 === d8 && (k = g3);
                  if (null !== (y = q.nextSibling)) break;
                  q = r26;
                  r26 = q.parentNode;
                }
                q = y;
              }
              c4 = -1 === h || -1 === k ? null : { start: h, end: k };
            } else c4 = null;
          }
          c4 = c4 || { start: 0, end: 0 };
        } else c4 = null;
        Df = { focusedElem: a17, selectionRange: c4 };
        dd = false;
        for (V = b3; null !== V; ) if (b3 = V, a17 = b3.child, 0 !== (b3.subtreeFlags & 1028) && null !== a17) a17.return = b3, V = a17;
        else for (; null !== V; ) {
          b3 = V;
          try {
            var n12 = b3.alternate;
            if (0 !== (b3.flags & 1024)) switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n12) {
                  var t17 = n12.memoizedProps, J = n12.memoizedState, x2 = b3.stateNode, w = x2.getSnapshotBeforeUpdate(b3.elementType === b3.type ? t17 : Ci(b3.type, t17), J);
                  x2.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u5 = b3.stateNode.containerInfo;
                1 === u5.nodeType ? u5.textContent = "" : 9 === u5.nodeType && u5.documentElement && u5.removeChild(u5.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p15(163));
            }
          } catch (F) {
            W(b3, b3.return, F);
          }
          a17 = b3.sibling;
          if (null !== a17) {
            a17.return = b3.return;
            V = a17;
            break;
          }
          V = b3.return;
        }
        n12 = Nj;
        Nj = false;
        return n12;
      }
      function Pj(a17, b3, c4) {
        var d8 = b3.updateQueue;
        d8 = null !== d8 ? d8.lastEffect : null;
        if (null !== d8) {
          var e24 = d8 = d8.next;
          do {
            if ((e24.tag & a17) === a17) {
              var f12 = e24.destroy;
              e24.destroy = void 0;
              void 0 !== f12 && Mj(b3, c4, f12);
            }
            e24 = e24.next;
          } while (e24 !== d8);
        }
      }
      function Qj(a17, b3) {
        b3 = b3.updateQueue;
        b3 = null !== b3 ? b3.lastEffect : null;
        if (null !== b3) {
          var c4 = b3 = b3.next;
          do {
            if ((c4.tag & a17) === a17) {
              var d8 = c4.create;
              c4.destroy = d8();
            }
            c4 = c4.next;
          } while (c4 !== b3);
        }
      }
      function Rj(a17) {
        var b3 = a17.ref;
        if (null !== b3) {
          var c4 = a17.stateNode;
          switch (a17.tag) {
            case 5:
              a17 = c4;
              break;
            default:
              a17 = c4;
          }
          "function" === typeof b3 ? b3(a17) : b3.current = a17;
        }
      }
      function Sj(a17) {
        var b3 = a17.alternate;
        null !== b3 && (a17.alternate = null, Sj(b3));
        a17.child = null;
        a17.deletions = null;
        a17.sibling = null;
        5 === a17.tag && (b3 = a17.stateNode, null !== b3 && (delete b3[Of], delete b3[Pf], delete b3[of], delete b3[Qf], delete b3[Rf]));
        a17.stateNode = null;
        a17.return = null;
        a17.dependencies = null;
        a17.memoizedProps = null;
        a17.memoizedState = null;
        a17.pendingProps = null;
        a17.stateNode = null;
        a17.updateQueue = null;
      }
      function Tj(a17) {
        return 5 === a17.tag || 3 === a17.tag || 4 === a17.tag;
      }
      function Uj(a17) {
        a: for (; ; ) {
          for (; null === a17.sibling; ) {
            if (null === a17.return || Tj(a17.return)) return null;
            a17 = a17.return;
          }
          a17.sibling.return = a17.return;
          for (a17 = a17.sibling; 5 !== a17.tag && 6 !== a17.tag && 18 !== a17.tag; ) {
            if (a17.flags & 2) continue a;
            if (null === a17.child || 4 === a17.tag) continue a;
            else a17.child.return = a17, a17 = a17.child;
          }
          if (!(a17.flags & 2)) return a17.stateNode;
        }
      }
      function Vj(a17, b3, c4) {
        var d8 = a17.tag;
        if (5 === d8 || 6 === d8) a17 = a17.stateNode, b3 ? 8 === c4.nodeType ? c4.parentNode.insertBefore(a17, b3) : c4.insertBefore(a17, b3) : (8 === c4.nodeType ? (b3 = c4.parentNode, b3.insertBefore(a17, c4)) : (b3 = c4, b3.appendChild(a17)), c4 = c4._reactRootContainer, null !== c4 && void 0 !== c4 || null !== b3.onclick || (b3.onclick = Bf));
        else if (4 !== d8 && (a17 = a17.child, null !== a17)) for (Vj(a17, b3, c4), a17 = a17.sibling; null !== a17; ) Vj(a17, b3, c4), a17 = a17.sibling;
      }
      function Wj(a17, b3, c4) {
        var d8 = a17.tag;
        if (5 === d8 || 6 === d8) a17 = a17.stateNode, b3 ? c4.insertBefore(a17, b3) : c4.appendChild(a17);
        else if (4 !== d8 && (a17 = a17.child, null !== a17)) for (Wj(a17, b3, c4), a17 = a17.sibling; null !== a17; ) Wj(a17, b3, c4), a17 = a17.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a17, b3, c4) {
        for (c4 = c4.child; null !== c4; ) Zj(a17, b3, c4), c4 = c4.sibling;
      }
      function Zj(a17, b3, c4) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c4);
        } catch (h) {
        }
        switch (c4.tag) {
          case 5:
            U || Lj(c4, b3);
          case 6:
            var d8 = X, e24 = Xj;
            X = null;
            Yj(a17, b3, c4);
            X = d8;
            Xj = e24;
            null !== X && (Xj ? (a17 = X, c4 = c4.stateNode, 8 === a17.nodeType ? a17.parentNode.removeChild(c4) : a17.removeChild(c4)) : X.removeChild(c4.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a17 = X, c4 = c4.stateNode, 8 === a17.nodeType ? Kf(a17.parentNode, c4) : 1 === a17.nodeType && Kf(a17, c4), bd(a17)) : Kf(X, c4.stateNode));
            break;
          case 4:
            d8 = X;
            e24 = Xj;
            X = c4.stateNode.containerInfo;
            Xj = true;
            Yj(a17, b3, c4);
            X = d8;
            Xj = e24;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d8 = c4.updateQueue, null !== d8 && (d8 = d8.lastEffect, null !== d8))) {
              e24 = d8 = d8.next;
              do {
                var f12 = e24, g3 = f12.destroy;
                f12 = f12.tag;
                void 0 !== g3 && (0 !== (f12 & 2) ? Mj(c4, b3, g3) : 0 !== (f12 & 4) && Mj(c4, b3, g3));
                e24 = e24.next;
              } while (e24 !== d8);
            }
            Yj(a17, b3, c4);
            break;
          case 1:
            if (!U && (Lj(c4, b3), d8 = c4.stateNode, "function" === typeof d8.componentWillUnmount)) try {
              d8.props = c4.memoizedProps, d8.state = c4.memoizedState, d8.componentWillUnmount();
            } catch (h) {
              W(c4, b3, h);
            }
            Yj(a17, b3, c4);
            break;
          case 21:
            Yj(a17, b3, c4);
            break;
          case 22:
            c4.mode & 1 ? (U = (d8 = U) || null !== c4.memoizedState, Yj(a17, b3, c4), U = d8) : Yj(a17, b3, c4);
            break;
          default:
            Yj(a17, b3, c4);
        }
      }
      function ak(a17) {
        var b3 = a17.updateQueue;
        if (null !== b3) {
          a17.updateQueue = null;
          var c4 = a17.stateNode;
          null === c4 && (c4 = a17.stateNode = new Kj());
          b3.forEach(function(b4) {
            var d8 = bk.bind(null, a17, b4);
            c4.has(b4) || (c4.add(b4), b4.then(d8, d8));
          });
        }
      }
      function ck(a17, b3) {
        var c4 = b3.deletions;
        if (null !== c4) for (var d8 = 0; d8 < c4.length; d8++) {
          var e24 = c4[d8];
          try {
            var f12 = a17, g3 = b3, h = g3;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X) throw Error(p15(160));
            Zj(f12, g3, e24);
            X = null;
            Xj = false;
            var k = e24.alternate;
            null !== k && (k.return = null);
            e24.return = null;
          } catch (l7) {
            W(e24, b3, l7);
          }
        }
        if (b3.subtreeFlags & 12854) for (b3 = b3.child; null !== b3; ) dk(b3, a17), b3 = b3.sibling;
      }
      function dk(a17, b3) {
        var c4 = a17.alternate, d8 = a17.flags;
        switch (a17.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b3, a17);
            ek(a17);
            if (d8 & 4) {
              try {
                Pj(3, a17, a17.return), Qj(3, a17);
              } catch (t17) {
                W(a17, a17.return, t17);
              }
              try {
                Pj(5, a17, a17.return);
              } catch (t17) {
                W(a17, a17.return, t17);
              }
            }
            break;
          case 1:
            ck(b3, a17);
            ek(a17);
            d8 & 512 && null !== c4 && Lj(c4, c4.return);
            break;
          case 5:
            ck(b3, a17);
            ek(a17);
            d8 & 512 && null !== c4 && Lj(c4, c4.return);
            if (a17.flags & 32) {
              var e24 = a17.stateNode;
              try {
                ob(e24, "");
              } catch (t17) {
                W(a17, a17.return, t17);
              }
            }
            if (d8 & 4 && (e24 = a17.stateNode, null != e24)) {
              var f12 = a17.memoizedProps, g3 = null !== c4 ? c4.memoizedProps : f12, h = a17.type, k = a17.updateQueue;
              a17.updateQueue = null;
              if (null !== k) try {
                "input" === h && "radio" === f12.type && null != f12.name && ab(e24, f12);
                vb(h, g3);
                var l7 = vb(h, f12);
                for (g3 = 0; g3 < k.length; g3 += 2) {
                  var m7 = k[g3], q = k[g3 + 1];
                  "style" === m7 ? sb(e24, q) : "dangerouslySetInnerHTML" === m7 ? nb(e24, q) : "children" === m7 ? ob(e24, q) : ta(e24, m7, q, l7);
                }
                switch (h) {
                  case "input":
                    bb(e24, f12);
                    break;
                  case "textarea":
                    ib(e24, f12);
                    break;
                  case "select":
                    var r26 = e24._wrapperState.wasMultiple;
                    e24._wrapperState.wasMultiple = !!f12.multiple;
                    var y = f12.value;
                    null != y ? fb(e24, !!f12.multiple, y, false) : r26 !== !!f12.multiple && (null != f12.defaultValue ? fb(
                      e24,
                      !!f12.multiple,
                      f12.defaultValue,
                      true
                    ) : fb(e24, !!f12.multiple, f12.multiple ? [] : "", false));
                }
                e24[Pf] = f12;
              } catch (t17) {
                W(a17, a17.return, t17);
              }
            }
            break;
          case 6:
            ck(b3, a17);
            ek(a17);
            if (d8 & 4) {
              if (null === a17.stateNode) throw Error(p15(162));
              e24 = a17.stateNode;
              f12 = a17.memoizedProps;
              try {
                e24.nodeValue = f12;
              } catch (t17) {
                W(a17, a17.return, t17);
              }
            }
            break;
          case 3:
            ck(b3, a17);
            ek(a17);
            if (d8 & 4 && null !== c4 && c4.memoizedState.isDehydrated) try {
              bd(b3.containerInfo);
            } catch (t17) {
              W(a17, a17.return, t17);
            }
            break;
          case 4:
            ck(b3, a17);
            ek(a17);
            break;
          case 13:
            ck(b3, a17);
            ek(a17);
            e24 = a17.child;
            e24.flags & 8192 && (f12 = null !== e24.memoizedState, e24.stateNode.isHidden = f12, !f12 || null !== e24.alternate && null !== e24.alternate.memoizedState || (fk = B2()));
            d8 & 4 && ak(a17);
            break;
          case 22:
            m7 = null !== c4 && null !== c4.memoizedState;
            a17.mode & 1 ? (U = (l7 = U) || m7, ck(b3, a17), U = l7) : ck(b3, a17);
            ek(a17);
            if (d8 & 8192) {
              l7 = null !== a17.memoizedState;
              if ((a17.stateNode.isHidden = l7) && !m7 && 0 !== (a17.mode & 1)) for (V = a17, m7 = a17.child; null !== m7; ) {
                for (q = V = m7; null !== V; ) {
                  r26 = V;
                  y = r26.child;
                  switch (r26.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r26, r26.return);
                      break;
                    case 1:
                      Lj(r26, r26.return);
                      var n12 = r26.stateNode;
                      if ("function" === typeof n12.componentWillUnmount) {
                        d8 = r26;
                        c4 = r26.return;
                        try {
                          b3 = d8, n12.props = b3.memoizedProps, n12.state = b3.memoizedState, n12.componentWillUnmount();
                        } catch (t17) {
                          W(d8, c4, t17);
                        }
                      }
                      break;
                    case 5:
                      Lj(r26, r26.return);
                      break;
                    case 22:
                      if (null !== r26.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r26, V = y) : gk(q);
                }
                m7 = m7.sibling;
              }
              a: for (m7 = null, q = a17; ; ) {
                if (5 === q.tag) {
                  if (null === m7) {
                    m7 = q;
                    try {
                      e24 = q.stateNode, l7 ? (f12 = e24.style, "function" === typeof f12.setProperty ? f12.setProperty("display", "none", "important") : f12.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g3 = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g3));
                    } catch (t17) {
                      W(a17, a17.return, t17);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m7) try {
                    q.stateNode.nodeValue = l7 ? "" : q.memoizedProps;
                  } catch (t17) {
                    W(a17, a17.return, t17);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a17) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a17) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a17) break a;
                  m7 === q && (m7 = null);
                  q = q.return;
                }
                m7 === q && (m7 = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b3, a17);
            ek(a17);
            d8 & 4 && ak(a17);
            break;
          case 21:
            break;
          default:
            ck(
              b3,
              a17
            ), ek(a17);
        }
      }
      function ek(a17) {
        var b3 = a17.flags;
        if (b3 & 2) {
          try {
            a: {
              for (var c4 = a17.return; null !== c4; ) {
                if (Tj(c4)) {
                  var d8 = c4;
                  break a;
                }
                c4 = c4.return;
              }
              throw Error(p15(160));
            }
            switch (d8.tag) {
              case 5:
                var e24 = d8.stateNode;
                d8.flags & 32 && (ob(e24, ""), d8.flags &= -33);
                var f12 = Uj(a17);
                Wj(a17, f12, e24);
                break;
              case 3:
              case 4:
                var g3 = d8.stateNode.containerInfo, h = Uj(a17);
                Vj(a17, h, g3);
                break;
              default:
                throw Error(p15(161));
            }
          } catch (k) {
            W(a17, a17.return, k);
          }
          a17.flags &= -3;
        }
        b3 & 4096 && (a17.flags &= -4097);
      }
      function hk(a17, b3, c4) {
        V = a17;
        ik(a17, b3, c4);
      }
      function ik(a17, b3, c4) {
        for (var d8 = 0 !== (a17.mode & 1); null !== V; ) {
          var e24 = V, f12 = e24.child;
          if (22 === e24.tag && d8) {
            var g3 = null !== e24.memoizedState || Jj;
            if (!g3) {
              var h = e24.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Jj;
              var l7 = U;
              Jj = g3;
              if ((U = k) && !l7) for (V = e24; null !== V; ) g3 = V, k = g3.child, 22 === g3.tag && null !== g3.memoizedState ? jk(e24) : null !== k ? (k.return = g3, V = k) : jk(e24);
              for (; null !== f12; ) V = f12, ik(f12, b3, c4), f12 = f12.sibling;
              V = e24;
              Jj = h;
              U = l7;
            }
            kk(a17, b3, c4);
          } else 0 !== (e24.subtreeFlags & 8772) && null !== f12 ? (f12.return = e24, V = f12) : kk(a17, b3, c4);
        }
      }
      function kk(a17) {
        for (; null !== V; ) {
          var b3 = V;
          if (0 !== (b3.flags & 8772)) {
            var c4 = b3.alternate;
            try {
              if (0 !== (b3.flags & 8772)) switch (b3.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b3);
                  break;
                case 1:
                  var d8 = b3.stateNode;
                  if (b3.flags & 4 && !U) if (null === c4) d8.componentDidMount();
                  else {
                    var e24 = b3.elementType === b3.type ? c4.memoizedProps : Ci(b3.type, c4.memoizedProps);
                    d8.componentDidUpdate(e24, c4.memoizedState, d8.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f12 = b3.updateQueue;
                  null !== f12 && sh(b3, f12, d8);
                  break;
                case 3:
                  var g3 = b3.updateQueue;
                  if (null !== g3) {
                    c4 = null;
                    if (null !== b3.child) switch (b3.child.tag) {
                      case 5:
                        c4 = b3.child.stateNode;
                        break;
                      case 1:
                        c4 = b3.child.stateNode;
                    }
                    sh(b3, g3, c4);
                  }
                  break;
                case 5:
                  var h = b3.stateNode;
                  if (null === c4 && b3.flags & 4) {
                    c4 = h;
                    var k = b3.memoizedProps;
                    switch (b3.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c4.focus();
                        break;
                      case "img":
                        k.src && (c4.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b3.memoizedState) {
                    var l7 = b3.alternate;
                    if (null !== l7) {
                      var m7 = l7.memoizedState;
                      if (null !== m7) {
                        var q = m7.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p15(163));
              }
              U || b3.flags & 512 && Rj(b3);
            } catch (r26) {
              W(b3, b3.return, r26);
            }
          }
          if (b3 === a17) {
            V = null;
            break;
          }
          c4 = b3.sibling;
          if (null !== c4) {
            c4.return = b3.return;
            V = c4;
            break;
          }
          V = b3.return;
        }
      }
      function gk(a17) {
        for (; null !== V; ) {
          var b3 = V;
          if (b3 === a17) {
            V = null;
            break;
          }
          var c4 = b3.sibling;
          if (null !== c4) {
            c4.return = b3.return;
            V = c4;
            break;
          }
          V = b3.return;
        }
      }
      function jk(a17) {
        for (; null !== V; ) {
          var b3 = V;
          try {
            switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                var c4 = b3.return;
                try {
                  Qj(4, b3);
                } catch (k) {
                  W(b3, c4, k);
                }
                break;
              case 1:
                var d8 = b3.stateNode;
                if ("function" === typeof d8.componentDidMount) {
                  var e24 = b3.return;
                  try {
                    d8.componentDidMount();
                  } catch (k) {
                    W(b3, e24, k);
                  }
                }
                var f12 = b3.return;
                try {
                  Rj(b3);
                } catch (k) {
                  W(b3, f12, k);
                }
                break;
              case 5:
                var g3 = b3.return;
                try {
                  Rj(b3);
                } catch (k) {
                  W(b3, g3, k);
                }
            }
          } catch (k) {
            W(b3, b3.return, k);
          }
          if (b3 === a17) {
            V = null;
            break;
          }
          var h = b3.sibling;
          if (null !== h) {
            h.return = b3.return;
            V = h;
            break;
          }
          V = b3.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K = 0;
      var Q = null;
      var Y = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T2 = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R4() {
        return 0 !== (K & 6) ? B2() : -1 !== Ak ? Ak : Ak = B2();
      }
      function yi(a17) {
        if (0 === (a17.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a17 = C;
        if (0 !== a17) return a17;
        a17 = window.event;
        a17 = void 0 === a17 ? 16 : jd(a17.type);
        return a17;
      }
      function gi(a17, b3, c4, d8) {
        if (50 < yk) throw yk = 0, zk = null, Error(p15(185));
        Ac(a17, c4, d8);
        if (0 === (K & 2) || a17 !== Q) a17 === Q && (0 === (K & 2) && (qk |= c4), 4 === T2 && Ck(a17, Z)), Dk(a17, d8), 1 === c4 && 0 === K && 0 === (b3.mode & 1) && (Gj = B2() + 500, fg && jg());
      }
      function Dk(a17, b3) {
        var c4 = a17.callbackNode;
        wc(a17, b3);
        var d8 = uc(a17, a17 === Q ? Z : 0);
        if (0 === d8) null !== c4 && bc(c4), a17.callbackNode = null, a17.callbackPriority = 0;
        else if (b3 = d8 & -d8, a17.callbackPriority !== b3) {
          null != c4 && bc(c4);
          if (1 === b3) 0 === a17.tag ? ig(Ek.bind(null, a17)) : hg(Ek.bind(null, a17)), Jf(function() {
            0 === (K & 6) && jg();
          }), c4 = null;
          else {
            switch (Dc(d8)) {
              case 1:
                c4 = fc;
                break;
              case 4:
                c4 = gc;
                break;
              case 16:
                c4 = hc;
                break;
              case 536870912:
                c4 = jc;
                break;
              default:
                c4 = hc;
            }
            c4 = Fk(c4, Gk.bind(null, a17));
          }
          a17.callbackPriority = b3;
          a17.callbackNode = c4;
        }
      }
      function Gk(a17, b3) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p15(327));
        var c4 = a17.callbackNode;
        if (Hk() && a17.callbackNode !== c4) return null;
        var d8 = uc(a17, a17 === Q ? Z : 0);
        if (0 === d8) return null;
        if (0 !== (d8 & 30) || 0 !== (d8 & a17.expiredLanes) || b3) b3 = Ik(a17, d8);
        else {
          b3 = d8;
          var e24 = K;
          K |= 2;
          var f12 = Jk();
          if (Q !== a17 || Z !== b3) uk = null, Gj = B2() + 500, Kk(a17, b3);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a17, h);
            }
          while (1);
          $g();
          mk.current = f12;
          K = e24;
          null !== Y ? b3 = 0 : (Q = null, Z = 0, b3 = T2);
        }
        if (0 !== b3) {
          2 === b3 && (e24 = xc(a17), 0 !== e24 && (d8 = e24, b3 = Nk(a17, e24)));
          if (1 === b3) throw c4 = pk, Kk(a17, 0), Ck(a17, d8), Dk(a17, B2()), c4;
          if (6 === b3) Ck(a17, d8);
          else {
            e24 = a17.current.alternate;
            if (0 === (d8 & 30) && !Ok(e24) && (b3 = Ik(a17, d8), 2 === b3 && (f12 = xc(a17), 0 !== f12 && (d8 = f12, b3 = Nk(a17, f12))), 1 === b3)) throw c4 = pk, Kk(a17, 0), Ck(a17, d8), Dk(a17, B2()), c4;
            a17.finishedWork = e24;
            a17.finishedLanes = d8;
            switch (b3) {
              case 0:
              case 1:
                throw Error(p15(345));
              case 2:
                Pk(a17, tk, uk);
                break;
              case 3:
                Ck(a17, d8);
                if ((d8 & 130023424) === d8 && (b3 = fk + 500 - B2(), 10 < b3)) {
                  if (0 !== uc(a17, 0)) break;
                  e24 = a17.suspendedLanes;
                  if ((e24 & d8) !== d8) {
                    R4();
                    a17.pingedLanes |= a17.suspendedLanes & e24;
                    break;
                  }
                  a17.timeoutHandle = Ff(Pk.bind(null, a17, tk, uk), b3);
                  break;
                }
                Pk(a17, tk, uk);
                break;
              case 4:
                Ck(a17, d8);
                if ((d8 & 4194240) === d8) break;
                b3 = a17.eventTimes;
                for (e24 = -1; 0 < d8; ) {
                  var g3 = 31 - oc(d8);
                  f12 = 1 << g3;
                  g3 = b3[g3];
                  g3 > e24 && (e24 = g3);
                  d8 &= ~f12;
                }
                d8 = e24;
                d8 = B2() - d8;
                d8 = (120 > d8 ? 120 : 480 > d8 ? 480 : 1080 > d8 ? 1080 : 1920 > d8 ? 1920 : 3e3 > d8 ? 3e3 : 4320 > d8 ? 4320 : 1960 * lk(d8 / 1960)) - d8;
                if (10 < d8) {
                  a17.timeoutHandle = Ff(Pk.bind(null, a17, tk, uk), d8);
                  break;
                }
                Pk(a17, tk, uk);
                break;
              case 5:
                Pk(a17, tk, uk);
                break;
              default:
                throw Error(p15(329));
            }
          }
        }
        Dk(a17, B2());
        return a17.callbackNode === c4 ? Gk.bind(null, a17) : null;
      }
      function Nk(a17, b3) {
        var c4 = sk;
        a17.current.memoizedState.isDehydrated && (Kk(a17, b3).flags |= 256);
        a17 = Ik(a17, b3);
        2 !== a17 && (b3 = tk, tk = c4, null !== b3 && Fj(b3));
        return a17;
      }
      function Fj(a17) {
        null === tk ? tk = a17 : tk.push.apply(tk, a17);
      }
      function Ok(a17) {
        for (var b3 = a17; ; ) {
          if (b3.flags & 16384) {
            var c4 = b3.updateQueue;
            if (null !== c4 && (c4 = c4.stores, null !== c4)) for (var d8 = 0; d8 < c4.length; d8++) {
              var e24 = c4[d8], f12 = e24.getSnapshot;
              e24 = e24.value;
              try {
                if (!He(f12(), e24)) return false;
              } catch (g3) {
                return false;
              }
            }
          }
          c4 = b3.child;
          if (b3.subtreeFlags & 16384 && null !== c4) c4.return = b3, b3 = c4;
          else {
            if (b3 === a17) break;
            for (; null === b3.sibling; ) {
              if (null === b3.return || b3.return === a17) return true;
              b3 = b3.return;
            }
            b3.sibling.return = b3.return;
            b3 = b3.sibling;
          }
        }
        return true;
      }
      function Ck(a17, b3) {
        b3 &= ~rk;
        b3 &= ~qk;
        a17.suspendedLanes |= b3;
        a17.pingedLanes &= ~b3;
        for (a17 = a17.expirationTimes; 0 < b3; ) {
          var c4 = 31 - oc(b3), d8 = 1 << c4;
          a17[c4] = -1;
          b3 &= ~d8;
        }
      }
      function Ek(a17) {
        if (0 !== (K & 6)) throw Error(p15(327));
        Hk();
        var b3 = uc(a17, 0);
        if (0 === (b3 & 1)) return Dk(a17, B2()), null;
        var c4 = Ik(a17, b3);
        if (0 !== a17.tag && 2 === c4) {
          var d8 = xc(a17);
          0 !== d8 && (b3 = d8, c4 = Nk(a17, d8));
        }
        if (1 === c4) throw c4 = pk, Kk(a17, 0), Ck(a17, b3), Dk(a17, B2()), c4;
        if (6 === c4) throw Error(p15(345));
        a17.finishedWork = a17.current.alternate;
        a17.finishedLanes = b3;
        Pk(a17, tk, uk);
        Dk(a17, B2());
        return null;
      }
      function Qk(a17, b3) {
        var c4 = K;
        K |= 1;
        try {
          return a17(b3);
        } finally {
          K = c4, 0 === K && (Gj = B2() + 500, fg && jg());
        }
      }
      function Rk(a17) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b3 = K;
        K |= 1;
        var c4 = ok.transition, d8 = C;
        try {
          if (ok.transition = null, C = 1, a17) return a17();
        } finally {
          C = d8, ok.transition = c4, K = b3, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E2(ej);
      }
      function Kk(a17, b3) {
        a17.finishedWork = null;
        a17.finishedLanes = 0;
        var c4 = a17.timeoutHandle;
        -1 !== c4 && (a17.timeoutHandle = -1, Gf(c4));
        if (null !== Y) for (c4 = Y.return; null !== c4; ) {
          var d8 = c4;
          wg(d8);
          switch (d8.tag) {
            case 1:
              d8 = d8.type.childContextTypes;
              null !== d8 && void 0 !== d8 && $f();
              break;
            case 3:
              zh();
              E2(Wf);
              E2(H2);
              Eh();
              break;
            case 5:
              Bh(d8);
              break;
            case 4:
              zh();
              break;
            case 13:
              E2(L);
              break;
            case 19:
              E2(L);
              break;
            case 10:
              ah(d8.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c4 = c4.return;
        }
        Q = a17;
        Y = a17 = Pg(a17.current, null);
        Z = fj = b3;
        T2 = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b3 = 0; b3 < fh.length; b3++) if (c4 = fh[b3], d8 = c4.interleaved, null !== d8) {
            c4.interleaved = null;
            var e24 = d8.next, f12 = c4.pending;
            if (null !== f12) {
              var g3 = f12.next;
              f12.next = e24;
              d8.next = g3;
            }
            c4.pending = d8;
          }
          fh = null;
        }
        return a17;
      }
      function Mk(a17, b3) {
        do {
          var c4 = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d8 = M.memoizedState; null !== d8; ) {
                var e24 = d8.queue;
                null !== e24 && (e24.pending = null);
                d8 = d8.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N2 = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c4 || null === c4.return) {
              T2 = 1;
              pk = b3;
              Y = null;
              break;
            }
            a: {
              var f12 = a17, g3 = c4.return, h = c4, k = b3;
              b3 = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l7 = k, m7 = h, q = m7.tag;
                if (0 === (m7.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r26 = m7.alternate;
                  r26 ? (m7.updateQueue = r26.updateQueue, m7.memoizedState = r26.memoizedState, m7.lanes = r26.lanes) : (m7.updateQueue = null, m7.memoizedState = null);
                }
                var y = Ui(g3);
                if (null !== y) {
                  y.flags &= -257;
                  Vi(y, g3, h, f12, b3);
                  y.mode & 1 && Si(f12, l7, b3);
                  b3 = y;
                  k = l7;
                  var n12 = b3.updateQueue;
                  if (null === n12) {
                    var t17 = /* @__PURE__ */ new Set();
                    t17.add(k);
                    b3.updateQueue = t17;
                  } else n12.add(k);
                  break a;
                } else {
                  if (0 === (b3 & 1)) {
                    Si(f12, l7, b3);
                    tj();
                    break a;
                  }
                  k = Error(p15(426));
                }
              } else if (I2 && h.mode & 1) {
                var J = Ui(g3);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g3, h, f12, b3);
                  Jg(Ji(k, h));
                  break a;
                }
              }
              f12 = k = Ji(k, h);
              4 !== T2 && (T2 = 2);
              null === sk ? sk = [f12] : sk.push(f12);
              f12 = g3;
              do {
                switch (f12.tag) {
                  case 3:
                    f12.flags |= 65536;
                    b3 &= -b3;
                    f12.lanes |= b3;
                    var x2 = Ni(f12, k, b3);
                    ph(f12, x2);
                    break a;
                  case 1:
                    h = k;
                    var w = f12.type, u5 = f12.stateNode;
                    if (0 === (f12.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u5 && "function" === typeof u5.componentDidCatch && (null === Ri || !Ri.has(u5)))) {
                      f12.flags |= 65536;
                      b3 &= -b3;
                      f12.lanes |= b3;
                      var F = Qi(f12, h, b3);
                      ph(f12, F);
                      break a;
                    }
                }
                f12 = f12.return;
              } while (null !== f12);
            }
            Sk(c4);
          } catch (na) {
            b3 = na;
            Y === c4 && null !== c4 && (Y = c4 = c4.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a17 = mk.current;
        mk.current = Rh;
        return null === a17 ? Rh : a17;
      }
      function tj() {
        if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a17, b3) {
        var c4 = K;
        K |= 2;
        var d8 = Jk();
        if (Q !== a17 || Z !== b3) uk = null, Kk(a17, b3);
        do
          try {
            Tk();
            break;
          } catch (e24) {
            Mk(a17, e24);
          }
        while (1);
        $g();
        K = c4;
        mk.current = d8;
        if (null !== Y) throw Error(p15(261));
        Q = null;
        Z = 0;
        return T2;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a17) {
        var b3 = Vk(a17.alternate, a17, fj);
        a17.memoizedProps = a17.pendingProps;
        null === b3 ? Sk(a17) : Y = b3;
        nk.current = null;
      }
      function Sk(a17) {
        var b3 = a17;
        do {
          var c4 = b3.alternate;
          a17 = b3.return;
          if (0 === (b3.flags & 32768)) {
            if (c4 = Ej(c4, b3, fj), null !== c4) {
              Y = c4;
              return;
            }
          } else {
            c4 = Ij(c4, b3);
            if (null !== c4) {
              c4.flags &= 32767;
              Y = c4;
              return;
            }
            if (null !== a17) a17.flags |= 32768, a17.subtreeFlags = 0, a17.deletions = null;
            else {
              T2 = 6;
              Y = null;
              return;
            }
          }
          b3 = b3.sibling;
          if (null !== b3) {
            Y = b3;
            return;
          }
          Y = b3 = a17;
        } while (null !== b3);
        0 === T2 && (T2 = 5);
      }
      function Pk(a17, b3, c4) {
        var d8 = C, e24 = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a17, b3, c4, d8);
        } finally {
          ok.transition = e24, C = d8;
        }
        return null;
      }
      function Wk(a17, b3, c4, d8) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p15(327));
        c4 = a17.finishedWork;
        var e24 = a17.finishedLanes;
        if (null === c4) return null;
        a17.finishedWork = null;
        a17.finishedLanes = 0;
        if (c4 === a17.current) throw Error(p15(177));
        a17.callbackNode = null;
        a17.callbackPriority = 0;
        var f12 = c4.lanes | c4.childLanes;
        Bc(a17, f12);
        a17 === Q && (Y = Q = null, Z = 0);
        0 === (c4.subtreeFlags & 2064) && 0 === (c4.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f12 = 0 !== (c4.flags & 15990);
        if (0 !== (c4.subtreeFlags & 15990) || f12) {
          f12 = ok.transition;
          ok.transition = null;
          var g3 = C;
          C = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a17, c4);
          dk(c4, a17);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a17.current = c4;
          hk(c4, a17, e24);
          dc();
          K = h;
          C = g3;
          ok.transition = f12;
        } else a17.current = c4;
        vk && (vk = false, wk = a17, xk = e24);
        f12 = a17.pendingLanes;
        0 === f12 && (Ri = null);
        mc(c4.stateNode, d8);
        Dk(a17, B2());
        if (null !== b3) for (d8 = a17.onRecoverableError, c4 = 0; c4 < b3.length; c4++) e24 = b3[c4], d8(e24.value, { componentStack: e24.stack, digest: e24.digest });
        if (Oi) throw Oi = false, a17 = Pi, Pi = null, a17;
        0 !== (xk & 1) && 0 !== a17.tag && Hk();
        f12 = a17.pendingLanes;
        0 !== (f12 & 1) ? a17 === zk ? yk++ : (yk = 0, zk = a17) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a17 = Dc(xk), b3 = ok.transition, c4 = C;
          try {
            ok.transition = null;
            C = 16 > a17 ? 16 : a17;
            if (null === wk) var d8 = false;
            else {
              a17 = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p15(331));
              var e24 = K;
              K |= 4;
              for (V = a17.current; null !== V; ) {
                var f12 = V, g3 = f12.child;
                if (0 !== (V.flags & 16)) {
                  var h = f12.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l7 = h[k];
                      for (V = l7; null !== V; ) {
                        var m7 = V;
                        switch (m7.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m7, f12);
                        }
                        var q = m7.child;
                        if (null !== q) q.return = m7, V = q;
                        else for (; null !== V; ) {
                          m7 = V;
                          var r26 = m7.sibling, y = m7.return;
                          Sj(m7);
                          if (m7 === l7) {
                            V = null;
                            break;
                          }
                          if (null !== r26) {
                            r26.return = y;
                            V = r26;
                            break;
                          }
                          V = y;
                        }
                      }
                    }
                    var n12 = f12.alternate;
                    if (null !== n12) {
                      var t17 = n12.child;
                      if (null !== t17) {
                        n12.child = null;
                        do {
                          var J = t17.sibling;
                          t17.sibling = null;
                          t17 = J;
                        } while (null !== t17);
                      }
                    }
                    V = f12;
                  }
                }
                if (0 !== (f12.subtreeFlags & 2064) && null !== g3) g3.return = f12, V = g3;
                else b: for (; null !== V; ) {
                  f12 = V;
                  if (0 !== (f12.flags & 2048)) switch (f12.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f12, f12.return);
                  }
                  var x2 = f12.sibling;
                  if (null !== x2) {
                    x2.return = f12.return;
                    V = x2;
                    break b;
                  }
                  V = f12.return;
                }
              }
              var w = a17.current;
              for (V = w; null !== V; ) {
                g3 = V;
                var u5 = g3.child;
                if (0 !== (g3.subtreeFlags & 2064) && null !== u5) u5.return = g3, V = u5;
                else b: for (g3 = w; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                  if (h === g3) {
                    V = null;
                    break b;
                  }
                  var F = h.sibling;
                  if (null !== F) {
                    F.return = h.return;
                    V = F;
                    break b;
                  }
                  V = h.return;
                }
              }
              K = e24;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a17);
              } catch (na) {
              }
              d8 = true;
            }
            return d8;
          } finally {
            C = c4, ok.transition = b3;
          }
        }
        return false;
      }
      function Xk(a17, b3, c4) {
        b3 = Ji(c4, b3);
        b3 = Ni(a17, b3, 1);
        a17 = nh(a17, b3, 1);
        b3 = R4();
        null !== a17 && (Ac(a17, 1, b3), Dk(a17, b3));
      }
      function W(a17, b3, c4) {
        if (3 === a17.tag) Xk(a17, a17, c4);
        else for (; null !== b3; ) {
          if (3 === b3.tag) {
            Xk(b3, a17, c4);
            break;
          } else if (1 === b3.tag) {
            var d8 = b3.stateNode;
            if ("function" === typeof b3.type.getDerivedStateFromError || "function" === typeof d8.componentDidCatch && (null === Ri || !Ri.has(d8))) {
              a17 = Ji(c4, a17);
              a17 = Qi(b3, a17, 1);
              b3 = nh(b3, a17, 1);
              a17 = R4();
              null !== b3 && (Ac(b3, 1, a17), Dk(b3, a17));
              break;
            }
          }
          b3 = b3.return;
        }
      }
      function Ti(a17, b3, c4) {
        var d8 = a17.pingCache;
        null !== d8 && d8.delete(b3);
        b3 = R4();
        a17.pingedLanes |= a17.suspendedLanes & c4;
        Q === a17 && (Z & c4) === c4 && (4 === T2 || 3 === T2 && (Z & 130023424) === Z && 500 > B2() - fk ? Kk(a17, 0) : rk |= c4);
        Dk(a17, b3);
      }
      function Yk(a17, b3) {
        0 === b3 && (0 === (a17.mode & 1) ? b3 = 1 : (b3 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c4 = R4();
        a17 = ih(a17, b3);
        null !== a17 && (Ac(a17, b3, c4), Dk(a17, c4));
      }
      function uj(a17) {
        var b3 = a17.memoizedState, c4 = 0;
        null !== b3 && (c4 = b3.retryLane);
        Yk(a17, c4);
      }
      function bk(a17, b3) {
        var c4 = 0;
        switch (a17.tag) {
          case 13:
            var d8 = a17.stateNode;
            var e24 = a17.memoizedState;
            null !== e24 && (c4 = e24.retryLane);
            break;
          case 19:
            d8 = a17.stateNode;
            break;
          default:
            throw Error(p15(314));
        }
        null !== d8 && d8.delete(b3);
        Yk(a17, c4);
      }
      var Vk;
      Vk = function(a17, b3, c4) {
        if (null !== a17) if (a17.memoizedProps !== b3.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a17.lanes & c4) && 0 === (b3.flags & 128)) return dh = false, yj(a17, b3, c4);
          dh = 0 !== (a17.flags & 131072) ? true : false;
        }
        else dh = false, I2 && 0 !== (b3.flags & 1048576) && ug(b3, ng, b3.index);
        b3.lanes = 0;
        switch (b3.tag) {
          case 2:
            var d8 = b3.type;
            ij(a17, b3);
            a17 = b3.pendingProps;
            var e24 = Yf(b3, H2.current);
            ch(b3, c4);
            e24 = Nh(null, b3, d8, a17, e24, c4);
            var f12 = Sh();
            b3.flags |= 1;
            "object" === typeof e24 && null !== e24 && "function" === typeof e24.render && void 0 === e24.$$typeof ? (b3.tag = 1, b3.memoizedState = null, b3.updateQueue = null, Zf(d8) ? (f12 = true, cg(b3)) : f12 = false, b3.memoizedState = null !== e24.state && void 0 !== e24.state ? e24.state : null, kh(b3), e24.updater = Ei, b3.stateNode = e24, e24._reactInternals = b3, Ii(b3, d8, a17, c4), b3 = jj(null, b3, d8, true, f12, c4)) : (b3.tag = 0, I2 && f12 && vg(b3), Xi(null, b3, e24, c4), b3 = b3.child);
            return b3;
          case 16:
            d8 = b3.elementType;
            a: {
              ij(a17, b3);
              a17 = b3.pendingProps;
              e24 = d8._init;
              d8 = e24(d8._payload);
              b3.type = d8;
              e24 = b3.tag = Zk(d8);
              a17 = Ci(d8, a17);
              switch (e24) {
                case 0:
                  b3 = cj(null, b3, d8, a17, c4);
                  break a;
                case 1:
                  b3 = hj(null, b3, d8, a17, c4);
                  break a;
                case 11:
                  b3 = Yi(null, b3, d8, a17, c4);
                  break a;
                case 14:
                  b3 = $i(null, b3, d8, Ci(d8.type, a17), c4);
                  break a;
              }
              throw Error(p15(
                306,
                d8,
                ""
              ));
            }
            return b3;
          case 0:
            return d8 = b3.type, e24 = b3.pendingProps, e24 = b3.elementType === d8 ? e24 : Ci(d8, e24), cj(a17, b3, d8, e24, c4);
          case 1:
            return d8 = b3.type, e24 = b3.pendingProps, e24 = b3.elementType === d8 ? e24 : Ci(d8, e24), hj(a17, b3, d8, e24, c4);
          case 3:
            a: {
              kj(b3);
              if (null === a17) throw Error(p15(387));
              d8 = b3.pendingProps;
              f12 = b3.memoizedState;
              e24 = f12.element;
              lh(a17, b3);
              qh(b3, d8, null, c4);
              var g3 = b3.memoizedState;
              d8 = g3.element;
              if (f12.isDehydrated) if (f12 = { element: d8, isDehydrated: false, cache: g3.cache, pendingSuspenseBoundaries: g3.pendingSuspenseBoundaries, transitions: g3.transitions }, b3.updateQueue.baseState = f12, b3.memoizedState = f12, b3.flags & 256) {
                e24 = Ji(Error(p15(423)), b3);
                b3 = lj(a17, b3, d8, c4, e24);
                break a;
              } else if (d8 !== e24) {
                e24 = Ji(Error(p15(424)), b3);
                b3 = lj(a17, b3, d8, c4, e24);
                break a;
              } else for (yg = Lf(b3.stateNode.containerInfo.firstChild), xg = b3, I2 = true, zg = null, c4 = Vg(b3, null, d8, c4), b3.child = c4; c4; ) c4.flags = c4.flags & -3 | 4096, c4 = c4.sibling;
              else {
                Ig();
                if (d8 === e24) {
                  b3 = Zi(a17, b3, c4);
                  break a;
                }
                Xi(a17, b3, d8, c4);
              }
              b3 = b3.child;
            }
            return b3;
          case 5:
            return Ah(b3), null === a17 && Eg(b3), d8 = b3.type, e24 = b3.pendingProps, f12 = null !== a17 ? a17.memoizedProps : null, g3 = e24.children, Ef(d8, e24) ? g3 = null : null !== f12 && Ef(d8, f12) && (b3.flags |= 32), gj(a17, b3), Xi(a17, b3, g3, c4), b3.child;
          case 6:
            return null === a17 && Eg(b3), null;
          case 13:
            return oj(a17, b3, c4);
          case 4:
            return yh(b3, b3.stateNode.containerInfo), d8 = b3.pendingProps, null === a17 ? b3.child = Ug(b3, null, d8, c4) : Xi(a17, b3, d8, c4), b3.child;
          case 11:
            return d8 = b3.type, e24 = b3.pendingProps, e24 = b3.elementType === d8 ? e24 : Ci(d8, e24), Yi(a17, b3, d8, e24, c4);
          case 7:
            return Xi(a17, b3, b3.pendingProps, c4), b3.child;
          case 8:
            return Xi(a17, b3, b3.pendingProps.children, c4), b3.child;
          case 12:
            return Xi(a17, b3, b3.pendingProps.children, c4), b3.child;
          case 10:
            a: {
              d8 = b3.type._context;
              e24 = b3.pendingProps;
              f12 = b3.memoizedProps;
              g3 = e24.value;
              G(Wg, d8._currentValue);
              d8._currentValue = g3;
              if (null !== f12) if (He(f12.value, g3)) {
                if (f12.children === e24.children && !Wf.current) {
                  b3 = Zi(a17, b3, c4);
                  break a;
                }
              } else for (f12 = b3.child, null !== f12 && (f12.return = b3); null !== f12; ) {
                var h = f12.dependencies;
                if (null !== h) {
                  g3 = f12.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d8) {
                      if (1 === f12.tag) {
                        k = mh(-1, c4 & -c4);
                        k.tag = 2;
                        var l7 = f12.updateQueue;
                        if (null !== l7) {
                          l7 = l7.shared;
                          var m7 = l7.pending;
                          null === m7 ? k.next = k : (k.next = m7.next, m7.next = k);
                          l7.pending = k;
                        }
                      }
                      f12.lanes |= c4;
                      k = f12.alternate;
                      null !== k && (k.lanes |= c4);
                      bh(
                        f12.return,
                        c4,
                        b3
                      );
                      h.lanes |= c4;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f12.tag) g3 = f12.type === b3.type ? null : f12.child;
                else if (18 === f12.tag) {
                  g3 = f12.return;
                  if (null === g3) throw Error(p15(341));
                  g3.lanes |= c4;
                  h = g3.alternate;
                  null !== h && (h.lanes |= c4);
                  bh(g3, c4, b3);
                  g3 = f12.sibling;
                } else g3 = f12.child;
                if (null !== g3) g3.return = f12;
                else for (g3 = f12; null !== g3; ) {
                  if (g3 === b3) {
                    g3 = null;
                    break;
                  }
                  f12 = g3.sibling;
                  if (null !== f12) {
                    f12.return = g3.return;
                    g3 = f12;
                    break;
                  }
                  g3 = g3.return;
                }
                f12 = g3;
              }
              Xi(a17, b3, e24.children, c4);
              b3 = b3.child;
            }
            return b3;
          case 9:
            return e24 = b3.type, d8 = b3.pendingProps.children, ch(b3, c4), e24 = eh(e24), d8 = d8(e24), b3.flags |= 1, Xi(a17, b3, d8, c4), b3.child;
          case 14:
            return d8 = b3.type, e24 = Ci(d8, b3.pendingProps), e24 = Ci(d8.type, e24), $i(a17, b3, d8, e24, c4);
          case 15:
            return bj(a17, b3, b3.type, b3.pendingProps, c4);
          case 17:
            return d8 = b3.type, e24 = b3.pendingProps, e24 = b3.elementType === d8 ? e24 : Ci(d8, e24), ij(a17, b3), b3.tag = 1, Zf(d8) ? (a17 = true, cg(b3)) : a17 = false, ch(b3, c4), Gi(b3, d8, e24), Ii(b3, d8, e24, c4), jj(null, b3, d8, true, a17, c4);
          case 19:
            return xj(a17, b3, c4);
          case 22:
            return dj(a17, b3, c4);
        }
        throw Error(p15(156, b3.tag));
      };
      function Fk(a17, b3) {
        return ac(a17, b3);
      }
      function $k(a17, b3, c4, d8) {
        this.tag = a17;
        this.key = c4;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b3;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d8;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a17, b3, c4, d8) {
        return new $k(a17, b3, c4, d8);
      }
      function aj(a17) {
        a17 = a17.prototype;
        return !(!a17 || !a17.isReactComponent);
      }
      function Zk(a17) {
        if ("function" === typeof a17) return aj(a17) ? 1 : 0;
        if (void 0 !== a17 && null !== a17) {
          a17 = a17.$$typeof;
          if (a17 === Da) return 11;
          if (a17 === Ga) return 14;
        }
        return 2;
      }
      function Pg(a17, b3) {
        var c4 = a17.alternate;
        null === c4 ? (c4 = Bg(a17.tag, b3, a17.key, a17.mode), c4.elementType = a17.elementType, c4.type = a17.type, c4.stateNode = a17.stateNode, c4.alternate = a17, a17.alternate = c4) : (c4.pendingProps = b3, c4.type = a17.type, c4.flags = 0, c4.subtreeFlags = 0, c4.deletions = null);
        c4.flags = a17.flags & 14680064;
        c4.childLanes = a17.childLanes;
        c4.lanes = a17.lanes;
        c4.child = a17.child;
        c4.memoizedProps = a17.memoizedProps;
        c4.memoizedState = a17.memoizedState;
        c4.updateQueue = a17.updateQueue;
        b3 = a17.dependencies;
        c4.dependencies = null === b3 ? null : { lanes: b3.lanes, firstContext: b3.firstContext };
        c4.sibling = a17.sibling;
        c4.index = a17.index;
        c4.ref = a17.ref;
        return c4;
      }
      function Rg(a17, b3, c4, d8, e24, f12) {
        var g3 = 2;
        d8 = a17;
        if ("function" === typeof a17) aj(a17) && (g3 = 1);
        else if ("string" === typeof a17) g3 = 5;
        else a: switch (a17) {
          case ya:
            return Tg(c4.children, e24, f12, b3);
          case za:
            g3 = 8;
            e24 |= 8;
            break;
          case Aa:
            return a17 = Bg(12, c4, b3, e24 | 2), a17.elementType = Aa, a17.lanes = f12, a17;
          case Ea:
            return a17 = Bg(13, c4, b3, e24), a17.elementType = Ea, a17.lanes = f12, a17;
          case Fa:
            return a17 = Bg(19, c4, b3, e24), a17.elementType = Fa, a17.lanes = f12, a17;
          case Ia:
            return pj(c4, e24, f12, b3);
          default:
            if ("object" === typeof a17 && null !== a17) switch (a17.$$typeof) {
              case Ba:
                g3 = 10;
                break a;
              case Ca:
                g3 = 9;
                break a;
              case Da:
                g3 = 11;
                break a;
              case Ga:
                g3 = 14;
                break a;
              case Ha:
                g3 = 16;
                d8 = null;
                break a;
            }
            throw Error(p15(130, null == a17 ? a17 : typeof a17, ""));
        }
        b3 = Bg(g3, c4, b3, e24);
        b3.elementType = a17;
        b3.type = d8;
        b3.lanes = f12;
        return b3;
      }
      function Tg(a17, b3, c4, d8) {
        a17 = Bg(7, a17, d8, b3);
        a17.lanes = c4;
        return a17;
      }
      function pj(a17, b3, c4, d8) {
        a17 = Bg(22, a17, d8, b3);
        a17.elementType = Ia;
        a17.lanes = c4;
        a17.stateNode = { isHidden: false };
        return a17;
      }
      function Qg(a17, b3, c4) {
        a17 = Bg(6, a17, null, b3);
        a17.lanes = c4;
        return a17;
      }
      function Sg(a17, b3, c4) {
        b3 = Bg(4, null !== a17.children ? a17.children : [], a17.key, b3);
        b3.lanes = c4;
        b3.stateNode = { containerInfo: a17.containerInfo, pendingChildren: null, implementation: a17.implementation };
        return b3;
      }
      function al(a17, b3, c4, d8, e24) {
        this.tag = b3;
        this.containerInfo = a17;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d8;
        this.onRecoverableError = e24;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a17, b3, c4, d8, e24, f12, g3, h, k) {
        a17 = new al(a17, b3, c4, h, k);
        1 === b3 ? (b3 = 1, true === f12 && (b3 |= 8)) : b3 = 0;
        f12 = Bg(3, null, null, b3);
        a17.current = f12;
        f12.stateNode = a17;
        f12.memoizedState = { element: d8, isDehydrated: c4, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f12);
        return a17;
      }
      function cl(a17, b3, c4) {
        var d8 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d8 ? null : "" + d8, children: a17, containerInfo: b3, implementation: c4 };
      }
      function dl(a17) {
        if (!a17) return Vf;
        a17 = a17._reactInternals;
        a: {
          if (Vb(a17) !== a17 || 1 !== a17.tag) throw Error(p15(170));
          var b3 = a17;
          do {
            switch (b3.tag) {
              case 3:
                b3 = b3.stateNode.context;
                break a;
              case 1:
                if (Zf(b3.type)) {
                  b3 = b3.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b3 = b3.return;
          } while (null !== b3);
          throw Error(p15(171));
        }
        if (1 === a17.tag) {
          var c4 = a17.type;
          if (Zf(c4)) return bg(a17, c4, b3);
        }
        return b3;
      }
      function el(a17, b3, c4, d8, e24, f12, g3, h, k) {
        a17 = bl(c4, d8, true, a17, e24, f12, g3, h, k);
        a17.context = dl(null);
        c4 = a17.current;
        d8 = R4();
        e24 = yi(c4);
        f12 = mh(d8, e24);
        f12.callback = void 0 !== b3 && null !== b3 ? b3 : null;
        nh(c4, f12, e24);
        a17.current.lanes = e24;
        Ac(a17, e24, d8);
        Dk(a17, d8);
        return a17;
      }
      function fl(a17, b3, c4, d8) {
        var e24 = b3.current, f12 = R4(), g3 = yi(e24);
        c4 = dl(c4);
        null === b3.context ? b3.context = c4 : b3.pendingContext = c4;
        b3 = mh(f12, g3);
        b3.payload = { element: a17 };
        d8 = void 0 === d8 ? null : d8;
        null !== d8 && (b3.callback = d8);
        a17 = nh(e24, b3, g3);
        null !== a17 && (gi(a17, e24, g3, f12), oh(a17, e24, g3));
        return g3;
      }
      function gl(a17) {
        a17 = a17.current;
        if (!a17.child) return null;
        switch (a17.child.tag) {
          case 5:
            return a17.child.stateNode;
          default:
            return a17.child.stateNode;
        }
      }
      function hl(a17, b3) {
        a17 = a17.memoizedState;
        if (null !== a17 && null !== a17.dehydrated) {
          var c4 = a17.retryLane;
          a17.retryLane = 0 !== c4 && c4 < b3 ? c4 : b3;
        }
      }
      function il(a17, b3) {
        hl(a17, b3);
        (a17 = a17.alternate) && hl(a17, b3);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a17) {
        console.error(a17);
      };
      function ll(a17) {
        this._internalRoot = a17;
      }
      ml.prototype.render = ll.prototype.render = function(a17) {
        var b3 = this._internalRoot;
        if (null === b3) throw Error(p15(409));
        fl(a17, b3, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a17 = this._internalRoot;
        if (null !== a17) {
          this._internalRoot = null;
          var b3 = a17.containerInfo;
          Rk(function() {
            fl(null, a17, null, null);
          });
          b3[uf] = null;
        }
      };
      function ml(a17) {
        this._internalRoot = a17;
      }
      ml.prototype.unstable_scheduleHydration = function(a17) {
        if (a17) {
          var b3 = Hc();
          a17 = { blockedOn: null, target: a17, priority: b3 };
          for (var c4 = 0; c4 < Qc.length && 0 !== b3 && b3 < Qc[c4].priority; c4++) ;
          Qc.splice(c4, 0, a17);
          0 === c4 && Vc(a17);
        }
      };
      function nl(a17) {
        return !(!a17 || 1 !== a17.nodeType && 9 !== a17.nodeType && 11 !== a17.nodeType);
      }
      function ol(a17) {
        return !(!a17 || 1 !== a17.nodeType && 9 !== a17.nodeType && 11 !== a17.nodeType && (8 !== a17.nodeType || " react-mount-point-unstable " !== a17.nodeValue));
      }
      function pl() {
      }
      function ql(a17, b3, c4, d8, e24) {
        if (e24) {
          if ("function" === typeof d8) {
            var f12 = d8;
            d8 = function() {
              var a18 = gl(g3);
              f12.call(a18);
            };
          }
          var g3 = el(b3, d8, a17, 0, null, false, false, "", pl);
          a17._reactRootContainer = g3;
          a17[uf] = g3.current;
          sf(8 === a17.nodeType ? a17.parentNode : a17);
          Rk();
          return g3;
        }
        for (; e24 = a17.lastChild; ) a17.removeChild(e24);
        if ("function" === typeof d8) {
          var h = d8;
          d8 = function() {
            var a18 = gl(k);
            h.call(a18);
          };
        }
        var k = bl(a17, 0, false, null, null, false, false, "", pl);
        a17._reactRootContainer = k;
        a17[uf] = k.current;
        sf(8 === a17.nodeType ? a17.parentNode : a17);
        Rk(function() {
          fl(b3, k, c4, d8);
        });
        return k;
      }
      function rl(a17, b3, c4, d8, e24) {
        var f12 = c4._reactRootContainer;
        if (f12) {
          var g3 = f12;
          if ("function" === typeof e24) {
            var h = e24;
            e24 = function() {
              var a18 = gl(g3);
              h.call(a18);
            };
          }
          fl(b3, g3, a17, e24);
        } else g3 = ql(c4, b3, a17, e24, d8);
        return gl(g3);
      }
      Ec = function(a17) {
        switch (a17.tag) {
          case 3:
            var b3 = a17.stateNode;
            if (b3.current.memoizedState.isDehydrated) {
              var c4 = tc(b3.pendingLanes);
              0 !== c4 && (Cc(b3, c4 | 1), Dk(b3, B2()), 0 === (K & 6) && (Gj = B2() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b4 = ih(a17, 1);
              if (null !== b4) {
                var c5 = R4();
                gi(b4, a17, 1, c5);
              }
            }), il(a17, 1);
        }
      };
      Fc = function(a17) {
        if (13 === a17.tag) {
          var b3 = ih(a17, 134217728);
          if (null !== b3) {
            var c4 = R4();
            gi(b3, a17, 134217728, c4);
          }
          il(a17, 134217728);
        }
      };
      Gc = function(a17) {
        if (13 === a17.tag) {
          var b3 = yi(a17), c4 = ih(a17, b3);
          if (null !== c4) {
            var d8 = R4();
            gi(c4, a17, b3, d8);
          }
          il(a17, b3);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a17, b3) {
        var c4 = C;
        try {
          return C = a17, b3();
        } finally {
          C = c4;
        }
      };
      yb = function(a17, b3, c4) {
        switch (b3) {
          case "input":
            bb(a17, c4);
            b3 = c4.name;
            if ("radio" === c4.type && null != b3) {
              for (c4 = a17; c4.parentNode; ) c4 = c4.parentNode;
              c4 = c4.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
              for (b3 = 0; b3 < c4.length; b3++) {
                var d8 = c4[b3];
                if (d8 !== a17 && d8.form === a17.form) {
                  var e24 = Db(d8);
                  if (!e24) throw Error(p15(90));
                  Wa(d8);
                  bb(d8, e24);
                }
              }
            }
            break;
          case "textarea":
            ib(a17, c4);
            break;
          case "select":
            b3 = c4.value, null != b3 && fb(a17, !!c4.multiple, b3, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a17) {
        a17 = Zb(a17);
        return null === a17 ? null : a17.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a17) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a17, b3) {
        var c4 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b3)) throw Error(p15(200));
        return cl(a17, b3, null, c4);
      };
      exports.createRoot = function(a17, b3) {
        if (!nl(a17)) throw Error(p15(299));
        var c4 = false, d8 = "", e24 = kl;
        null !== b3 && void 0 !== b3 && (true === b3.unstable_strictMode && (c4 = true), void 0 !== b3.identifierPrefix && (d8 = b3.identifierPrefix), void 0 !== b3.onRecoverableError && (e24 = b3.onRecoverableError));
        b3 = bl(a17, 1, false, null, null, c4, false, d8, e24);
        a17[uf] = b3.current;
        sf(8 === a17.nodeType ? a17.parentNode : a17);
        return new ll(b3);
      };
      exports.findDOMNode = function(a17) {
        if (null == a17) return null;
        if (1 === a17.nodeType) return a17;
        var b3 = a17._reactInternals;
        if (void 0 === b3) {
          if ("function" === typeof a17.render) throw Error(p15(188));
          a17 = Object.keys(a17).join(",");
          throw Error(p15(268, a17));
        }
        a17 = Zb(b3);
        a17 = null === a17 ? null : a17.stateNode;
        return a17;
      };
      exports.flushSync = function(a17) {
        return Rk(a17);
      };
      exports.hydrate = function(a17, b3, c4) {
        if (!ol(b3)) throw Error(p15(200));
        return rl(null, a17, b3, true, c4);
      };
      exports.hydrateRoot = function(a17, b3, c4) {
        if (!nl(a17)) throw Error(p15(405));
        var d8 = null != c4 && c4.hydratedSources || null, e24 = false, f12 = "", g3 = kl;
        null !== c4 && void 0 !== c4 && (true === c4.unstable_strictMode && (e24 = true), void 0 !== c4.identifierPrefix && (f12 = c4.identifierPrefix), void 0 !== c4.onRecoverableError && (g3 = c4.onRecoverableError));
        b3 = el(b3, null, a17, 1, null != c4 ? c4 : null, e24, false, f12, g3);
        a17[uf] = b3.current;
        sf(a17);
        if (d8) for (a17 = 0; a17 < d8.length; a17++) c4 = d8[a17], e24 = c4._getVersion, e24 = e24(c4._source), null == b3.mutableSourceEagerHydrationData ? b3.mutableSourceEagerHydrationData = [c4, e24] : b3.mutableSourceEagerHydrationData.push(
          c4,
          e24
        );
        return new ml(b3);
      };
      exports.render = function(a17, b3, c4) {
        if (!ol(b3)) throw Error(p15(200));
        return rl(null, a17, b3, false, c4);
      };
      exports.unmountComponentAtNode = function(a17) {
        if (!ol(a17)) throw Error(p15(40));
        return a17._reactRootContainer ? (Rk(function() {
          rl(null, null, a17, false, function() {
            a17._reactRootContainer = null;
            a17[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a17, b3, c4, d8) {
        if (!ol(c4)) throw Error(p15(200));
        if (null == a17 || void 0 === a17._reactInternals) throw Error(p15(38));
        return rl(a17, b3, c4, false, d8);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m7 = require_react_dom();
      if (true) {
        exports.createRoot = m7.createRoot;
        exports.hydrateRoot = m7.hydrateRoot;
      } else {
        i6 = m7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c4, o22) {
          i6.usingClientEntryPoint = true;
          try {
            return m7.createRoot(c4, o22);
          } finally {
            i6.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c4, h, o22) {
          i6.usingClientEntryPoint = true;
          try {
            return m7.hydrateRoot(c4, h, o22);
          } finally {
            i6.usingClientEntryPoint = false;
          }
        };
      }
      var i6;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f12 = require_react();
      var k = Symbol.for("react.element");
      var l7 = Symbol.for("react.fragment");
      var m7 = Object.prototype.hasOwnProperty;
      var n12 = f12.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p15 = { key: true, ref: true, __self: true, __source: true };
      function q(c4, a17, g3) {
        var b3, d8 = {}, e24 = null, h = null;
        void 0 !== g3 && (e24 = "" + g3);
        void 0 !== a17.key && (e24 = "" + a17.key);
        void 0 !== a17.ref && (h = a17.ref);
        for (b3 in a17) m7.call(a17, b3) && !p15.hasOwnProperty(b3) && (d8[b3] = a17[b3]);
        if (c4 && c4.defaultProps) for (b3 in a17 = c4.defaultProps, a17) void 0 === d8[b3] && (d8[b3] = a17[b3]);
        return { $$typeof: k, type: c4, key: e24, ref: h, props: d8, _owner: n12.current };
      }
      exports.Fragment = l7;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          var classes = "";
          for (var i6 = 0; i6 < arguments.length; i6++) {
            var arg = arguments[i6];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames;
          });
        } else {
          window.classNames = classNames;
        }
      })();
    }
  });

  // node_modules/highlight.js/lib/core.js
  var require_core = __commonJS({
    "node_modules/highlight.js/lib/core.js"(exports, module) {
      function deepFreeze(obj) {
        if (obj instanceof Map) {
          obj.clear = obj.delete = obj.set = function() {
            throw new Error("map is read-only");
          };
        } else if (obj instanceof Set) {
          obj.add = obj.clear = obj.delete = function() {
            throw new Error("set is read-only");
          };
        }
        Object.freeze(obj);
        Object.getOwnPropertyNames(obj).forEach((name) => {
          const prop = obj[name];
          const type = typeof prop;
          if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
            deepFreeze(prop);
          }
        });
        return obj;
      }
      var Response = class {
        /**
         * @param {CompiledMode} mode
         */
        constructor(mode) {
          if (mode.data === void 0) mode.data = {};
          this.data = mode.data;
          this.isMatchIgnored = false;
        }
        ignoreMatch() {
          this.isMatchIgnored = true;
        }
      };
      function escapeHTML(value) {
        return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
      }
      function inherit$1(original, ...objects) {
        const result = /* @__PURE__ */ Object.create(null);
        for (const key in original) {
          result[key] = original[key];
        }
        objects.forEach(function(obj) {
          for (const key in obj) {
            result[key] = obj[key];
          }
        });
        return (
          /** @type {T} */
          result
        );
      }
      var SPAN_CLOSE = "</span>";
      var emitsWrappingTags = (node) => {
        return !!node.scope;
      };
      var scopeToCSSClass = (name, { prefix }) => {
        if (name.startsWith("language:")) {
          return name.replace("language:", "language-");
        }
        if (name.includes(".")) {
          const pieces = name.split(".");
          return [
            `${prefix}${pieces.shift()}`,
            ...pieces.map((x2, i6) => `${x2}${"_".repeat(i6 + 1)}`)
          ].join(" ");
        }
        return `${prefix}${name}`;
      };
      var HTMLRenderer = class {
        /**
         * Creates a new HTMLRenderer
         *
         * @param {Tree} parseTree - the parse tree (must support `walk` API)
         * @param {{classPrefix: string}} options
         */
        constructor(parseTree, options) {
          this.buffer = "";
          this.classPrefix = options.classPrefix;
          parseTree.walk(this);
        }
        /**
         * Adds texts to the output stream
         *
         * @param {string} text */
        addText(text) {
          this.buffer += escapeHTML(text);
        }
        /**
         * Adds a node open to the output stream (if needed)
         *
         * @param {Node} node */
        openNode(node) {
          if (!emitsWrappingTags(node)) return;
          const className = scopeToCSSClass(
            node.scope,
            { prefix: this.classPrefix }
          );
          this.span(className);
        }
        /**
         * Adds a node close to the output stream (if needed)
         *
         * @param {Node} node */
        closeNode(node) {
          if (!emitsWrappingTags(node)) return;
          this.buffer += SPAN_CLOSE;
        }
        /**
         * returns the accumulated buffer
        */
        value() {
          return this.buffer;
        }
        // helpers
        /**
         * Builds a span element
         *
         * @param {string} className */
        span(className) {
          this.buffer += `<span class="${className}">`;
        }
      };
      var newNode = (opts = {}) => {
        const result = { children: [] };
        Object.assign(result, opts);
        return result;
      };
      var TokenTree = class _TokenTree {
        constructor() {
          this.rootNode = newNode();
          this.stack = [this.rootNode];
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        /** @param {Node} node */
        add(node) {
          this.top.children.push(node);
        }
        /** @param {string} scope */
        openNode(scope) {
          const node = newNode({ scope });
          this.add(node);
          this.stack.push(node);
        }
        closeNode() {
          if (this.stack.length > 1) {
            return this.stack.pop();
          }
          return void 0;
        }
        closeAllNodes() {
          while (this.closeNode()) ;
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        /**
         * @typedef { import("./html_renderer").Renderer } Renderer
         * @param {Renderer} builder
         */
        walk(builder) {
          return this.constructor._walk(builder, this.rootNode);
        }
        /**
         * @param {Renderer} builder
         * @param {Node} node
         */
        static _walk(builder, node) {
          if (typeof node === "string") {
            builder.addText(node);
          } else if (node.children) {
            builder.openNode(node);
            node.children.forEach((child) => this._walk(builder, child));
            builder.closeNode(node);
          }
          return builder;
        }
        /**
         * @param {Node} node
         */
        static _collapse(node) {
          if (typeof node === "string") return;
          if (!node.children) return;
          if (node.children.every((el) => typeof el === "string")) {
            node.children = [node.children.join("")];
          } else {
            node.children.forEach((child) => {
              _TokenTree._collapse(child);
            });
          }
        }
      };
      var TokenTreeEmitter = class extends TokenTree {
        /**
         * @param {*} options
         */
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @param {string} text
         */
        addText(text) {
          if (text === "") {
            return;
          }
          this.add(text);
        }
        /** @param {string} scope */
        startScope(scope) {
          this.openNode(scope);
        }
        endScope() {
          this.closeNode();
        }
        /**
         * @param {Emitter & {root: DataNode}} emitter
         * @param {string} name
         */
        __addSublanguage(emitter, name) {
          const node = emitter.root;
          if (name) node.scope = `language:${name}`;
          this.add(node);
        }
        toHTML() {
          const renderer = new HTMLRenderer(this, this.options);
          return renderer.value();
        }
        finalize() {
          this.closeAllNodes();
          return true;
        }
      };
      function source(re) {
        if (!re) return null;
        if (typeof re === "string") return re;
        return re.source;
      }
      function lookahead(re) {
        return concat("(?=", re, ")");
      }
      function anyNumberOfTimes(re) {
        return concat("(?:", re, ")*");
      }
      function optional(re) {
        return concat("(?:", re, ")?");
      }
      function concat(...args) {
        const joined = args.map((x2) => source(x2)).join("");
        return joined;
      }
      function stripOptionsFromArgs(args) {
        const opts = args[args.length - 1];
        if (typeof opts === "object" && opts.constructor === Object) {
          args.splice(args.length - 1, 1);
          return opts;
        } else {
          return {};
        }
      }
      function either(...args) {
        const opts = stripOptionsFromArgs(args);
        const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
        return joined;
      }
      function countMatchGroups(re) {
        return new RegExp(re.toString() + "|").exec("").length - 1;
      }
      function startsWith(re, lexeme) {
        const match = re && re.exec(lexeme);
        return match && match.index === 0;
      }
      var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      function _rewriteBackreferences(regexps, { joinWith }) {
        let numCaptures = 0;
        return regexps.map((regex) => {
          numCaptures += 1;
          const offset4 = numCaptures;
          let re = source(regex);
          let out = "";
          while (re.length > 0) {
            const match = BACKREF_RE.exec(re);
            if (!match) {
              out += re;
              break;
            }
            out += re.substring(0, match.index);
            re = re.substring(match.index + match[0].length);
            if (match[0][0] === "\\" && match[1]) {
              out += "\\" + String(Number(match[1]) + offset4);
            } else {
              out += match[0];
              if (match[0] === "(") {
                numCaptures++;
              }
            }
          }
          return out;
        }).map((re) => `(${re})`).join(joinWith);
      }
      var MATCH_NOTHING_RE = /\b\B/;
      var IDENT_RE3 = "[a-zA-Z]\\w*";
      var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
      var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
      var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
      var BINARY_NUMBER_RE = "\\b(0b[01]+)";
      var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
      var SHEBANG = (opts = {}) => {
        const beginShebang = /^#![ ]*\//;
        if (opts.binary) {
          opts.begin = concat(
            beginShebang,
            /.*\b/,
            opts.binary,
            /\b.*/
          );
        }
        return inherit$1({
          scope: "meta",
          begin: beginShebang,
          end: /$/,
          relevance: 0,
          /** @type {ModeCallback} */
          "on:begin": (m7, resp) => {
            if (m7.index !== 0) resp.ignoreMatch();
          }
        }, opts);
      };
      var BACKSLASH_ESCAPE = {
        begin: "\\\\[\\s\\S]",
        relevance: 0
      };
      var APOS_STRING_MODE = {
        scope: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [BACKSLASH_ESCAPE]
      };
      var QUOTE_STRING_MODE = {
        scope: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [BACKSLASH_ESCAPE]
      };
      var PHRASAL_WORDS_MODE = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      };
      var COMMENT = function(begin, end, modeOptions = {}) {
        const mode = inherit$1(
          {
            scope: "comment",
            begin,
            end,
            contains: []
          },
          modeOptions
        );
        mode.contains.push({
          scope: "doctag",
          // hack to avoid the space from being included. the space is necessary to
          // match here to prevent the plain text rule below from gobbling up doctags
          begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: true,
          relevance: 0
        });
        const ENGLISH_WORD = either(
          // list of common 1 and 2 letter words in English
          "I",
          "a",
          "is",
          "so",
          "us",
          "to",
          "at",
          "if",
          "in",
          "it",
          "on",
          // note: this is not an exhaustive list of contractions, just popular ones
          /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
          // contractions - can't we'd they're let's, etc
          /[A-Za-z]+[-][a-z]+/,
          // `no-way`, etc.
          /[A-Za-z][a-z]{2,}/
          // allow capitalized words at beginning of sentences
        );
        mode.contains.push(
          {
            // TODO: how to include ", (, ) without breaking grammars that use these for
            // comment delimiters?
            // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
            // ---
            // this tries to find sequences of 3 english words in a row (without any
            // "programming" type syntax) this gives us a strong signal that we've
            // TRULY found a comment - vs perhaps scanning with the wrong language.
            // It's possible to find something that LOOKS like the start of the
            // comment - but then if there is no readable text - good chance it is a
            // false match and not a comment.
            //
            // for a visual example please see:
            // https://github.com/highlightjs/highlight.js/issues/2827
            begin: concat(
              /[ ]+/,
              // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
              "(",
              ENGLISH_WORD,
              /[.]?[:]?([.][ ]|[ ])/,
              "){3}"
            )
            // look for 3 words in a row
          }
        );
        return mode;
      };
      var C_LINE_COMMENT_MODE = COMMENT("//", "$");
      var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
      var HASH_COMMENT_MODE = COMMENT("#", "$");
      var NUMBER_MODE = {
        scope: "number",
        begin: NUMBER_RE,
        relevance: 0
      };
      var C_NUMBER_MODE = {
        scope: "number",
        begin: C_NUMBER_RE,
        relevance: 0
      };
      var BINARY_NUMBER_MODE = {
        scope: "number",
        begin: BINARY_NUMBER_RE,
        relevance: 0
      };
      var REGEXP_MODE = {
        scope: "regexp",
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [
          BACKSLASH_ESCAPE,
          {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [BACKSLASH_ESCAPE]
          }
        ]
      };
      var TITLE_MODE = {
        scope: "title",
        begin: IDENT_RE3,
        relevance: 0
      };
      var UNDERSCORE_TITLE_MODE = {
        scope: "title",
        begin: UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var METHOD_GUARD = {
        // excludes method names from keyword processing
        begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var END_SAME_AS_BEGIN = function(mode) {
        return Object.assign(
          mode,
          {
            /** @type {ModeCallback} */
            "on:begin": (m7, resp) => {
              resp.data._beginMatch = m7[1];
            },
            /** @type {ModeCallback} */
            "on:end": (m7, resp) => {
              if (resp.data._beginMatch !== m7[1]) resp.ignoreMatch();
            }
          }
        );
      };
      var MODES2 = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        APOS_STRING_MODE,
        BACKSLASH_ESCAPE,
        BINARY_NUMBER_MODE,
        BINARY_NUMBER_RE,
        COMMENT,
        C_BLOCK_COMMENT_MODE,
        C_LINE_COMMENT_MODE,
        C_NUMBER_MODE,
        C_NUMBER_RE,
        END_SAME_AS_BEGIN,
        HASH_COMMENT_MODE,
        IDENT_RE: IDENT_RE3,
        MATCH_NOTHING_RE,
        METHOD_GUARD,
        NUMBER_MODE,
        NUMBER_RE,
        PHRASAL_WORDS_MODE,
        QUOTE_STRING_MODE,
        REGEXP_MODE,
        RE_STARTERS_RE,
        SHEBANG,
        TITLE_MODE,
        UNDERSCORE_IDENT_RE,
        UNDERSCORE_TITLE_MODE
      });
      function skipIfHasPrecedingDot(match, response) {
        const before = match.input[match.index - 1];
        if (before === ".") {
          response.ignoreMatch();
        }
      }
      function scopeClassName(mode, _parent) {
        if (mode.className !== void 0) {
          mode.scope = mode.className;
          delete mode.className;
        }
      }
      function beginKeywords(mode, parent) {
        if (!parent) return;
        if (!mode.beginKeywords) return;
        mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
        mode.__beforeBegin = skipIfHasPrecedingDot;
        mode.keywords = mode.keywords || mode.beginKeywords;
        delete mode.beginKeywords;
        if (mode.relevance === void 0) mode.relevance = 0;
      }
      function compileIllegal(mode, _parent) {
        if (!Array.isArray(mode.illegal)) return;
        mode.illegal = either(...mode.illegal);
      }
      function compileMatch(mode, _parent) {
        if (!mode.match) return;
        if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
        mode.begin = mode.match;
        delete mode.match;
      }
      function compileRelevance(mode, _parent) {
        if (mode.relevance === void 0) mode.relevance = 1;
      }
      var beforeMatchExt = (mode, parent) => {
        if (!mode.beforeMatch) return;
        if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
        const originalMode = Object.assign({}, mode);
        Object.keys(mode).forEach((key) => {
          delete mode[key];
        });
        mode.keywords = originalMode.keywords;
        mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
        mode.starts = {
          relevance: 0,
          contains: [
            Object.assign(originalMode, { endsParent: true })
          ]
        };
        mode.relevance = 0;
        delete originalMode.beforeMatch;
      };
      var COMMON_KEYWORDS = [
        "of",
        "and",
        "for",
        "in",
        "not",
        "or",
        "if",
        "then",
        "parent",
        // common variable name
        "list",
        // common variable name
        "value"
        // common variable name
      ];
      var DEFAULT_KEYWORD_SCOPE = "keyword";
      function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
        const compiledKeywords = /* @__PURE__ */ Object.create(null);
        if (typeof rawKeywords === "string") {
          compileList(scopeName, rawKeywords.split(" "));
        } else if (Array.isArray(rawKeywords)) {
          compileList(scopeName, rawKeywords);
        } else {
          Object.keys(rawKeywords).forEach(function(scopeName2) {
            Object.assign(
              compiledKeywords,
              compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
            );
          });
        }
        return compiledKeywords;
        function compileList(scopeName2, keywordList) {
          if (caseInsensitive) {
            keywordList = keywordList.map((x2) => x2.toLowerCase());
          }
          keywordList.forEach(function(keyword) {
            const pair = keyword.split("|");
            compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
          });
        }
      }
      function scoreForKeyword(keyword, providedScore) {
        if (providedScore) {
          return Number(providedScore);
        }
        return commonKeyword(keyword) ? 0 : 1;
      }
      function commonKeyword(keyword) {
        return COMMON_KEYWORDS.includes(keyword.toLowerCase());
      }
      var seenDeprecations = {};
      var error = (message) => {
        console.error(message);
      };
      var warn = (message, ...args) => {
        console.log(`WARN: ${message}`, ...args);
      };
      var deprecated = (version2, message) => {
        if (seenDeprecations[`${version2}/${message}`]) return;
        console.log(`Deprecated as of ${version2}. ${message}`);
        seenDeprecations[`${version2}/${message}`] = true;
      };
      var MultiClassError = new Error();
      function remapScopeNames(mode, regexes, { key }) {
        let offset4 = 0;
        const scopeNames = mode[key];
        const emit = {};
        const positions = {};
        for (let i6 = 1; i6 <= regexes.length; i6++) {
          positions[i6 + offset4] = scopeNames[i6];
          emit[i6 + offset4] = true;
          offset4 += countMatchGroups(regexes[i6 - 1]);
        }
        mode[key] = positions;
        mode[key]._emit = emit;
        mode[key]._multi = true;
      }
      function beginMultiClass(mode) {
        if (!Array.isArray(mode.begin)) return;
        if (mode.skip || mode.excludeBegin || mode.returnBegin) {
          error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
          throw MultiClassError;
        }
        if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
          error("beginScope must be object");
          throw MultiClassError;
        }
        remapScopeNames(mode, mode.begin, { key: "beginScope" });
        mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
      }
      function endMultiClass(mode) {
        if (!Array.isArray(mode.end)) return;
        if (mode.skip || mode.excludeEnd || mode.returnEnd) {
          error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
          throw MultiClassError;
        }
        if (typeof mode.endScope !== "object" || mode.endScope === null) {
          error("endScope must be object");
          throw MultiClassError;
        }
        remapScopeNames(mode, mode.end, { key: "endScope" });
        mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
      }
      function scopeSugar(mode) {
        if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
          mode.beginScope = mode.scope;
          delete mode.scope;
        }
      }
      function MultiClass(mode) {
        scopeSugar(mode);
        if (typeof mode.beginScope === "string") {
          mode.beginScope = { _wrap: mode.beginScope };
        }
        if (typeof mode.endScope === "string") {
          mode.endScope = { _wrap: mode.endScope };
        }
        beginMultiClass(mode);
        endMultiClass(mode);
      }
      function compileLanguage(language) {
        function langRe(value, global) {
          return new RegExp(
            source(value),
            "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
          );
        }
        class MultiRegex {
          constructor() {
            this.matchIndexes = {};
            this.regexes = [];
            this.matchAt = 1;
            this.position = 0;
          }
          // @ts-ignore
          addRule(re, opts) {
            opts.position = this.position++;
            this.matchIndexes[this.matchAt] = opts;
            this.regexes.push([opts, re]);
            this.matchAt += countMatchGroups(re) + 1;
          }
          compile() {
            if (this.regexes.length === 0) {
              this.exec = () => null;
            }
            const terminators = this.regexes.map((el) => el[1]);
            this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
            this.lastIndex = 0;
          }
          /** @param {string} s */
          exec(s13) {
            this.matcherRe.lastIndex = this.lastIndex;
            const match = this.matcherRe.exec(s13);
            if (!match) {
              return null;
            }
            const i6 = match.findIndex((el, i7) => i7 > 0 && el !== void 0);
            const matchData = this.matchIndexes[i6];
            match.splice(0, i6);
            return Object.assign(match, matchData);
          }
        }
        class ResumableMultiRegex {
          constructor() {
            this.rules = [];
            this.multiRegexes = [];
            this.count = 0;
            this.lastIndex = 0;
            this.regexIndex = 0;
          }
          // @ts-ignore
          getMatcher(index2) {
            if (this.multiRegexes[index2]) return this.multiRegexes[index2];
            const matcher = new MultiRegex();
            this.rules.slice(index2).forEach(([re, opts]) => matcher.addRule(re, opts));
            matcher.compile();
            this.multiRegexes[index2] = matcher;
            return matcher;
          }
          resumingScanAtSamePosition() {
            return this.regexIndex !== 0;
          }
          considerAll() {
            this.regexIndex = 0;
          }
          // @ts-ignore
          addRule(re, opts) {
            this.rules.push([re, opts]);
            if (opts.type === "begin") this.count++;
          }
          /** @param {string} s */
          exec(s13) {
            const m7 = this.getMatcher(this.regexIndex);
            m7.lastIndex = this.lastIndex;
            let result = m7.exec(s13);
            if (this.resumingScanAtSamePosition()) {
              if (result && result.index === this.lastIndex) ;
              else {
                const m22 = this.getMatcher(0);
                m22.lastIndex = this.lastIndex + 1;
                result = m22.exec(s13);
              }
            }
            if (result) {
              this.regexIndex += result.position + 1;
              if (this.regexIndex === this.count) {
                this.considerAll();
              }
            }
            return result;
          }
        }
        function buildModeRegex(mode) {
          const mm = new ResumableMultiRegex();
          mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
          if (mode.terminatorEnd) {
            mm.addRule(mode.terminatorEnd, { type: "end" });
          }
          if (mode.illegal) {
            mm.addRule(mode.illegal, { type: "illegal" });
          }
          return mm;
        }
        function compileMode(mode, parent) {
          const cmode = (
            /** @type CompiledMode */
            mode
          );
          if (mode.isCompiled) return cmode;
          [
            scopeClassName,
            // do this early so compiler extensions generally don't have to worry about
            // the distinction between match/begin
            compileMatch,
            MultiClass,
            beforeMatchExt
          ].forEach((ext) => ext(mode, parent));
          language.compilerExtensions.forEach((ext) => ext(mode, parent));
          mode.__beforeBegin = null;
          [
            beginKeywords,
            // do this later so compiler extensions that come earlier have access to the
            // raw array if they wanted to perhaps manipulate it, etc.
            compileIllegal,
            // default to 1 relevance if not specified
            compileRelevance
          ].forEach((ext) => ext(mode, parent));
          mode.isCompiled = true;
          let keywordPattern = null;
          if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
            mode.keywords = Object.assign({}, mode.keywords);
            keywordPattern = mode.keywords.$pattern;
            delete mode.keywords.$pattern;
          }
          keywordPattern = keywordPattern || /\w+/;
          if (mode.keywords) {
            mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
          }
          cmode.keywordPatternRe = langRe(keywordPattern, true);
          if (parent) {
            if (!mode.begin) mode.begin = /\B|\b/;
            cmode.beginRe = langRe(cmode.begin);
            if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
            if (mode.end) cmode.endRe = langRe(cmode.end);
            cmode.terminatorEnd = source(cmode.end) || "";
            if (mode.endsWithParent && parent.terminatorEnd) {
              cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
            }
          }
          if (mode.illegal) cmode.illegalRe = langRe(
            /** @type {RegExp | string} */
            mode.illegal
          );
          if (!mode.contains) mode.contains = [];
          mode.contains = [].concat(...mode.contains.map(function(c4) {
            return expandOrCloneMode(c4 === "self" ? mode : c4);
          }));
          mode.contains.forEach(function(c4) {
            compileMode(
              /** @type Mode */
              c4,
              cmode
            );
          });
          if (mode.starts) {
            compileMode(mode.starts, parent);
          }
          cmode.matcher = buildModeRegex(cmode);
          return cmode;
        }
        if (!language.compilerExtensions) language.compilerExtensions = [];
        if (language.contains && language.contains.includes("self")) {
          throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
        }
        language.classNameAliases = inherit$1(language.classNameAliases || {});
        return compileMode(
          /** @type Mode */
          language
        );
      }
      function dependencyOnParent(mode) {
        if (!mode) return false;
        return mode.endsWithParent || dependencyOnParent(mode.starts);
      }
      function expandOrCloneMode(mode) {
        if (mode.variants && !mode.cachedVariants) {
          mode.cachedVariants = mode.variants.map(function(variant) {
            return inherit$1(mode, { variants: null }, variant);
          });
        }
        if (mode.cachedVariants) {
          return mode.cachedVariants;
        }
        if (dependencyOnParent(mode)) {
          return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
        }
        if (Object.isFrozen(mode)) {
          return inherit$1(mode);
        }
        return mode;
      }
      var version = "11.11.1";
      var HTMLInjectionError = class extends Error {
        constructor(reason, html) {
          super(reason);
          this.name = "HTMLInjectionError";
          this.html = html;
        }
      };
      var escape = escapeHTML;
      var inherit = inherit$1;
      var NO_MATCH = Symbol("nomatch");
      var MAX_KEYWORD_HITS = 7;
      var HLJS = function(hljs) {
        const languages = /* @__PURE__ */ Object.create(null);
        const aliases = /* @__PURE__ */ Object.create(null);
        const plugins = [];
        let SAFE_MODE = true;
        const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
        const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
        let options = {
          ignoreUnescapedHTML: false,
          throwUnescapedHTML: false,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          // beta configuration options, subject to change, welcome to discuss
          // https://github.com/highlightjs/highlight.js/issues/1086
          __emitter: TokenTreeEmitter
        };
        function shouldNotHighlight(languageName) {
          return options.noHighlightRe.test(languageName);
        }
        function blockLanguage(block) {
          let classes = block.className + " ";
          classes += block.parentNode ? block.parentNode.className : "";
          const match = options.languageDetectRe.exec(classes);
          if (match) {
            const language = getLanguage(match[1]);
            if (!language) {
              warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
              warn("Falling back to no-highlight mode for this block.", block);
            }
            return language ? match[1] : "no-highlight";
          }
          return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
        }
        function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
          let code = "";
          let languageName = "";
          if (typeof optionsOrCode === "object") {
            code = codeOrLanguageName;
            ignoreIllegals = optionsOrCode.ignoreIllegals;
            languageName = optionsOrCode.language;
          } else {
            deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
            deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
            languageName = codeOrLanguageName;
            code = optionsOrCode;
          }
          if (ignoreIllegals === void 0) {
            ignoreIllegals = true;
          }
          const context = {
            code,
            language: languageName
          };
          fire("before:highlight", context);
          const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
          result.code = context.code;
          fire("after:highlight", result);
          return result;
        }
        function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
          const keywordHits = /* @__PURE__ */ Object.create(null);
          function keywordData(mode, matchText) {
            return mode.keywords[matchText];
          }
          function processKeywords() {
            if (!top.keywords) {
              emitter.addText(modeBuffer);
              return;
            }
            let lastIndex = 0;
            top.keywordPatternRe.lastIndex = 0;
            let match = top.keywordPatternRe.exec(modeBuffer);
            let buf = "";
            while (match) {
              buf += modeBuffer.substring(lastIndex, match.index);
              const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
              const data2 = keywordData(top, word);
              if (data2) {
                const [kind, keywordRelevance] = data2;
                emitter.addText(buf);
                buf = "";
                keywordHits[word] = (keywordHits[word] || 0) + 1;
                if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
                if (kind.startsWith("_")) {
                  buf += match[0];
                } else {
                  const cssClass = language.classNameAliases[kind] || kind;
                  emitKeyword(match[0], cssClass);
                }
              } else {
                buf += match[0];
              }
              lastIndex = top.keywordPatternRe.lastIndex;
              match = top.keywordPatternRe.exec(modeBuffer);
            }
            buf += modeBuffer.substring(lastIndex);
            emitter.addText(buf);
          }
          function processSubLanguage() {
            if (modeBuffer === "") return;
            let result2 = null;
            if (typeof top.subLanguage === "string") {
              if (!languages[top.subLanguage]) {
                emitter.addText(modeBuffer);
                return;
              }
              result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
              continuations[top.subLanguage] = /** @type {CompiledMode} */
              result2._top;
            } else {
              result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
            }
            if (top.relevance > 0) {
              relevance += result2.relevance;
            }
            emitter.__addSublanguage(result2._emitter, result2.language);
          }
          function processBuffer() {
            if (top.subLanguage != null) {
              processSubLanguage();
            } else {
              processKeywords();
            }
            modeBuffer = "";
          }
          function emitKeyword(keyword, scope) {
            if (keyword === "") return;
            emitter.startScope(scope);
            emitter.addText(keyword);
            emitter.endScope();
          }
          function emitMultiClass(scope, match) {
            let i6 = 1;
            const max2 = match.length - 1;
            while (i6 <= max2) {
              if (!scope._emit[i6]) {
                i6++;
                continue;
              }
              const klass = language.classNameAliases[scope[i6]] || scope[i6];
              const text = match[i6];
              if (klass) {
                emitKeyword(text, klass);
              } else {
                modeBuffer = text;
                processKeywords();
                modeBuffer = "";
              }
              i6++;
            }
          }
          function startNewMode(mode, match) {
            if (mode.scope && typeof mode.scope === "string") {
              emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
            }
            if (mode.beginScope) {
              if (mode.beginScope._wrap) {
                emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
                modeBuffer = "";
              } else if (mode.beginScope._multi) {
                emitMultiClass(mode.beginScope, match);
                modeBuffer = "";
              }
            }
            top = Object.create(mode, { parent: { value: top } });
            return top;
          }
          function endOfMode(mode, match, matchPlusRemainder) {
            let matched = startsWith(mode.endRe, matchPlusRemainder);
            if (matched) {
              if (mode["on:end"]) {
                const resp = new Response(mode);
                mode["on:end"](match, resp);
                if (resp.isMatchIgnored) matched = false;
              }
              if (matched) {
                while (mode.endsParent && mode.parent) {
                  mode = mode.parent;
                }
                return mode;
              }
            }
            if (mode.endsWithParent) {
              return endOfMode(mode.parent, match, matchPlusRemainder);
            }
          }
          function doIgnore(lexeme) {
            if (top.matcher.regexIndex === 0) {
              modeBuffer += lexeme[0];
              return 1;
            } else {
              resumeScanAtSamePosition = true;
              return 0;
            }
          }
          function doBeginMatch(match) {
            const lexeme = match[0];
            const newMode = match.rule;
            const resp = new Response(newMode);
            const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
            for (const cb of beforeCallbacks) {
              if (!cb) continue;
              cb(match, resp);
              if (resp.isMatchIgnored) return doIgnore(lexeme);
            }
            if (newMode.skip) {
              modeBuffer += lexeme;
            } else {
              if (newMode.excludeBegin) {
                modeBuffer += lexeme;
              }
              processBuffer();
              if (!newMode.returnBegin && !newMode.excludeBegin) {
                modeBuffer = lexeme;
              }
            }
            startNewMode(newMode, match);
            return newMode.returnBegin ? 0 : lexeme.length;
          }
          function doEndMatch(match) {
            const lexeme = match[0];
            const matchPlusRemainder = codeToHighlight.substring(match.index);
            const endMode = endOfMode(top, match, matchPlusRemainder);
            if (!endMode) {
              return NO_MATCH;
            }
            const origin = top;
            if (top.endScope && top.endScope._wrap) {
              processBuffer();
              emitKeyword(lexeme, top.endScope._wrap);
            } else if (top.endScope && top.endScope._multi) {
              processBuffer();
              emitMultiClass(top.endScope, match);
            } else if (origin.skip) {
              modeBuffer += lexeme;
            } else {
              if (!(origin.returnEnd || origin.excludeEnd)) {
                modeBuffer += lexeme;
              }
              processBuffer();
              if (origin.excludeEnd) {
                modeBuffer = lexeme;
              }
            }
            do {
              if (top.scope) {
                emitter.closeNode();
              }
              if (!top.skip && !top.subLanguage) {
                relevance += top.relevance;
              }
              top = top.parent;
            } while (top !== endMode.parent);
            if (endMode.starts) {
              startNewMode(endMode.starts, match);
            }
            return origin.returnEnd ? 0 : lexeme.length;
          }
          function processContinuations() {
            const list = [];
            for (let current = top; current !== language; current = current.parent) {
              if (current.scope) {
                list.unshift(current.scope);
              }
            }
            list.forEach((item) => emitter.openNode(item));
          }
          let lastMatch = {};
          function processLexeme(textBeforeMatch, match) {
            const lexeme = match && match[0];
            modeBuffer += textBeforeMatch;
            if (lexeme == null) {
              processBuffer();
              return 0;
            }
            if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
              modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
              if (!SAFE_MODE) {
                const err = new Error(`0 width match regex (${languageName})`);
                err.languageName = languageName;
                err.badRule = lastMatch.rule;
                throw err;
              }
              return 1;
            }
            lastMatch = match;
            if (match.type === "begin") {
              return doBeginMatch(match);
            } else if (match.type === "illegal" && !ignoreIllegals) {
              const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
              err.mode = top;
              throw err;
            } else if (match.type === "end") {
              const processed = doEndMatch(match);
              if (processed !== NO_MATCH) {
                return processed;
              }
            }
            if (match.type === "illegal" && lexeme === "") {
              modeBuffer += "\n";
              return 1;
            }
            if (iterations > 1e5 && iterations > match.index * 3) {
              const err = new Error("potential infinite loop, way more iterations than matches");
              throw err;
            }
            modeBuffer += lexeme;
            return lexeme.length;
          }
          const language = getLanguage(languageName);
          if (!language) {
            error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
            throw new Error('Unknown language: "' + languageName + '"');
          }
          const md = compileLanguage(language);
          let result = "";
          let top = continuation || md;
          const continuations = {};
          const emitter = new options.__emitter(options);
          processContinuations();
          let modeBuffer = "";
          let relevance = 0;
          let index2 = 0;
          let iterations = 0;
          let resumeScanAtSamePosition = false;
          try {
            if (!language.__emitTokens) {
              top.matcher.considerAll();
              for (; ; ) {
                iterations++;
                if (resumeScanAtSamePosition) {
                  resumeScanAtSamePosition = false;
                } else {
                  top.matcher.considerAll();
                }
                top.matcher.lastIndex = index2;
                const match = top.matcher.exec(codeToHighlight);
                if (!match) break;
                const beforeMatch = codeToHighlight.substring(index2, match.index);
                const processedCount = processLexeme(beforeMatch, match);
                index2 = match.index + processedCount;
              }
              processLexeme(codeToHighlight.substring(index2));
            } else {
              language.__emitTokens(codeToHighlight, emitter);
            }
            emitter.finalize();
            result = emitter.toHTML();
            return {
              language: languageName,
              value: result,
              relevance,
              illegal: false,
              _emitter: emitter,
              _top: top
            };
          } catch (err) {
            if (err.message && err.message.includes("Illegal")) {
              return {
                language: languageName,
                value: escape(codeToHighlight),
                illegal: true,
                relevance: 0,
                _illegalBy: {
                  message: err.message,
                  index: index2,
                  context: codeToHighlight.slice(index2 - 100, index2 + 100),
                  mode: err.mode,
                  resultSoFar: result
                },
                _emitter: emitter
              };
            } else if (SAFE_MODE) {
              return {
                language: languageName,
                value: escape(codeToHighlight),
                illegal: false,
                relevance: 0,
                errorRaised: err,
                _emitter: emitter,
                _top: top
              };
            } else {
              throw err;
            }
          }
        }
        function justTextHighlightResult(code) {
          const result = {
            value: escape(code),
            illegal: false,
            relevance: 0,
            _top: PLAINTEXT_LANGUAGE,
            _emitter: new options.__emitter(options)
          };
          result._emitter.addText(code);
          return result;
        }
        function highlightAuto(code, languageSubset) {
          languageSubset = languageSubset || options.languages || Object.keys(languages);
          const plaintext = justTextHighlightResult(code);
          const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
            (name) => _highlight(name, code, false)
          );
          results.unshift(plaintext);
          const sorted = results.sort((a17, b3) => {
            if (a17.relevance !== b3.relevance) return b3.relevance - a17.relevance;
            if (a17.language && b3.language) {
              if (getLanguage(a17.language).supersetOf === b3.language) {
                return 1;
              } else if (getLanguage(b3.language).supersetOf === a17.language) {
                return -1;
              }
            }
            return 0;
          });
          const [best, secondBest] = sorted;
          const result = best;
          result.secondBest = secondBest;
          return result;
        }
        function updateClassName(element, currentLang, resultLang) {
          const language = currentLang && aliases[currentLang] || resultLang;
          element.classList.add("hljs");
          element.classList.add(`language-${language}`);
        }
        function highlightElement(element) {
          let node = null;
          const language = blockLanguage(element);
          if (shouldNotHighlight(language)) return;
          fire(
            "before:highlightElement",
            { el: element, language }
          );
          if (element.dataset.highlighted) {
            console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
            return;
          }
          if (element.children.length > 0) {
            if (!options.ignoreUnescapedHTML) {
              console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
              console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
              console.warn("The element with unescaped HTML:");
              console.warn(element);
            }
            if (options.throwUnescapedHTML) {
              const err = new HTMLInjectionError(
                "One of your code blocks includes unescaped HTML.",
                element.innerHTML
              );
              throw err;
            }
          }
          node = element;
          const text = node.textContent;
          const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
          element.innerHTML = result.value;
          element.dataset.highlighted = "yes";
          updateClassName(element, language, result.language);
          element.result = {
            language: result.language,
            // TODO: remove with version 11.0
            re: result.relevance,
            relevance: result.relevance
          };
          if (result.secondBest) {
            element.secondBest = {
              language: result.secondBest.language,
              relevance: result.secondBest.relevance
            };
          }
          fire("after:highlightElement", { el: element, result, text });
        }
        function configure(userOptions) {
          options = inherit(options, userOptions);
        }
        const initHighlighting = () => {
          highlightAll();
          deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
        };
        function initHighlightingOnLoad() {
          highlightAll();
          deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
        }
        let wantsHighlight = false;
        function highlightAll() {
          function boot() {
            highlightAll();
          }
          if (document.readyState === "loading") {
            if (!wantsHighlight) {
              window.addEventListener("DOMContentLoaded", boot, false);
            }
            wantsHighlight = true;
            return;
          }
          const blocks = document.querySelectorAll(options.cssSelector);
          blocks.forEach(highlightElement);
        }
        function registerLanguage(languageName, languageDefinition) {
          let lang = null;
          try {
            lang = languageDefinition(hljs);
          } catch (error$1) {
            error("Language definition for '{}' could not be registered.".replace("{}", languageName));
            if (!SAFE_MODE) {
              throw error$1;
            } else {
              error(error$1);
            }
            lang = PLAINTEXT_LANGUAGE;
          }
          if (!lang.name) lang.name = languageName;
          languages[languageName] = lang;
          lang.rawDefinition = languageDefinition.bind(null, hljs);
          if (lang.aliases) {
            registerAliases(lang.aliases, { languageName });
          }
        }
        function unregisterLanguage(languageName) {
          delete languages[languageName];
          for (const alias of Object.keys(aliases)) {
            if (aliases[alias] === languageName) {
              delete aliases[alias];
            }
          }
        }
        function listLanguages() {
          return Object.keys(languages);
        }
        function getLanguage(name) {
          name = (name || "").toLowerCase();
          return languages[name] || languages[aliases[name]];
        }
        function registerAliases(aliasList, { languageName }) {
          if (typeof aliasList === "string") {
            aliasList = [aliasList];
          }
          aliasList.forEach((alias) => {
            aliases[alias.toLowerCase()] = languageName;
          });
        }
        function autoDetection(name) {
          const lang = getLanguage(name);
          return lang && !lang.disableAutodetect;
        }
        function upgradePluginAPI(plugin) {
          if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
            plugin["before:highlightElement"] = (data2) => {
              plugin["before:highlightBlock"](
                Object.assign({ block: data2.el }, data2)
              );
            };
          }
          if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
            plugin["after:highlightElement"] = (data2) => {
              plugin["after:highlightBlock"](
                Object.assign({ block: data2.el }, data2)
              );
            };
          }
        }
        function addPlugin(plugin) {
          upgradePluginAPI(plugin);
          plugins.push(plugin);
        }
        function removePlugin(plugin) {
          const index2 = plugins.indexOf(plugin);
          if (index2 !== -1) {
            plugins.splice(index2, 1);
          }
        }
        function fire(event, args) {
          const cb = event;
          plugins.forEach(function(plugin) {
            if (plugin[cb]) {
              plugin[cb](args);
            }
          });
        }
        function deprecateHighlightBlock(el) {
          deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
          deprecated("10.7.0", "Please use highlightElement now.");
          return highlightElement(el);
        }
        Object.assign(hljs, {
          highlight: highlight2,
          highlightAuto,
          highlightAll,
          highlightElement,
          // TODO: Remove with v12 API
          highlightBlock: deprecateHighlightBlock,
          configure,
          initHighlighting,
          initHighlightingOnLoad,
          registerLanguage,
          unregisterLanguage,
          listLanguages,
          getLanguage,
          registerAliases,
          autoDetection,
          inherit,
          addPlugin,
          removePlugin
        });
        hljs.debugMode = function() {
          SAFE_MODE = false;
        };
        hljs.safeMode = function() {
          SAFE_MODE = true;
        };
        hljs.versionString = version;
        hljs.regex = {
          concat,
          lookahead,
          either,
          optional,
          anyNumberOfTimes
        };
        for (const key in MODES2) {
          if (typeof MODES2[key] === "object") {
            deepFreeze(MODES2[key]);
          }
        }
        Object.assign(hljs, MODES2);
        return hljs;
      };
      var highlight = HLJS({});
      highlight.newInstance = () => HLJS({});
      module.exports = highlight;
      highlight.HighlightJS = highlight;
      highlight.default = highlight;
    }
  });

  // src/index.jsx
  var import_react9 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // src/App.jsx
  var import_react8 = __toESM(require_react());

  // node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
  var dist_exports2 = {};
  __export(dist_exports2, {
    Root: () => Root,
    VISUALLY_HIDDEN_STYLES: () => VISUALLY_HIDDEN_STYLES,
    VisuallyHidden: () => VisuallyHidden
  });
  var React4 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-primitive/dist/index.mjs
  var React3 = __toESM(require_react(), 1);
  var ReactDOM = __toESM(require_react_dom(), 1);

  // node_modules/@radix-ui/react-slot/dist/index.mjs
  var dist_exports = {};
  __export(dist_exports, {
    Root: () => Slot,
    Slot: () => Slot,
    Slottable: () => Slottable,
    createSlot: () => createSlot,
    createSlottable: () => createSlottable
  });
  var React2 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-compose-refs/dist/index.mjs
  var React = __toESM(require_react(), 1);
  function setRef(ref, value) {
    if (typeof ref === "function") {
      return ref(value);
    } else if (ref !== null && ref !== void 0) {
      ref.current = value;
    }
  }
  function composeRefs(...refs) {
    return (node) => {
      let hasCleanup = false;
      const cleanups = refs.map((ref) => {
        const cleanup = setRef(ref, node);
        if (!hasCleanup && typeof cleanup == "function") {
          hasCleanup = true;
        }
        return cleanup;
      });
      if (hasCleanup) {
        return () => {
          for (let i6 = 0; i6 < cleanups.length; i6++) {
            const cleanup = cleanups[i6];
            if (typeof cleanup == "function") {
              cleanup();
            } else {
              setRef(refs[i6], null);
            }
          }
        };
      }
    };
  }
  function useComposedRefs(...refs) {
    return React.useCallback(composeRefs(...refs), refs);
  }

  // node_modules/@radix-ui/react-slot/dist/index.mjs
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  // @__NO_SIDE_EFFECTS__
  function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot22 = React2.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      const childrenArray = React2.Children.toArray(children);
      const slottable = childrenArray.find(isSlottable);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
            return React2.isValidElement(newElement) ? newElement.props.children : null;
          } else {
            return child;
          }
        });
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
    });
    Slot22.displayName = `${ownerName}.Slot`;
    return Slot22;
  }
  var Slot = /* @__PURE__ */ createSlot("Slot");
  // @__NO_SIDE_EFFECTS__
  function createSlotClone(ownerName) {
    const SlotClone = React2.forwardRef((props, forwardedRef) => {
      const { children, ...slotProps } = props;
      if (React2.isValidElement(children)) {
        const childrenRef = getElementRef(children);
        const props2 = mergeProps(slotProps, children.props);
        if (children.type !== React2.Fragment) {
          props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
        }
        return React2.cloneElement(children, props2);
      }
      return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
  }
  var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
  // @__NO_SIDE_EFFECTS__
  function createSlottable(ownerName) {
    const Slottable22 = ({ children }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
    };
    Slottable22.displayName = `${ownerName}.Slottable`;
    Slottable22.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable22;
  }
  var Slottable = /* @__PURE__ */ createSlottable("Slottable");
  function isSlottable(child) {
    return React2.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
  }
  function mergeProps(slotProps, childProps) {
    const overrideProps = { ...childProps };
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue) {
          overrideProps[propName] = (...args) => {
            const result = childPropValue(...args);
            slotPropValue(...args);
            return result;
          };
        } else if (slotPropValue) {
          overrideProps[propName] = slotPropValue;
        }
      } else if (propName === "style") {
        overrideProps[propName] = { ...slotPropValue, ...childPropValue };
      } else if (propName === "className") {
        overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
      }
    }
    return { ...slotProps, ...overrideProps };
  }
  function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }

  // node_modules/@radix-ui/react-primitive/dist/index.mjs
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ];
  var Primitive = NODES.reduce((primitive, node) => {
    const Slot3 = createSlot(`Primitive.${node}`);
    const Node2 = React3.forwardRef((props, forwardedRef) => {
      const { asChild, ...primitiveProps } = props;
      const Comp = asChild ? Slot3 : node;
      if (typeof window !== "undefined") {
        window[Symbol.for("radix-ui")] = true;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
    });
    Node2.displayName = `Primitive.${node}`;
    return { ...primitive, [node]: Node2 };
  }, {});
  function dispatchDiscreteCustomEvent(target, event) {
    if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
  }

  // node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var VISUALLY_HIDDEN_STYLES = Object.freeze({
    // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  });
  var NAME = "VisuallyHidden";
  var VisuallyHidden = React4.forwardRef(
    (props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Primitive.span,
        {
          ...props,
          ref: forwardedRef,
          style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
        }
      );
    }
  );
  VisuallyHidden.displayName = NAME;
  var Root = VisuallyHidden;

  // node_modules/@radix-ui/react-context/dist/index.mjs
  var React5 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  function createContext2(rootComponentName, defaultContext) {
    const Context = React5.createContext(defaultContext);
    const Provider3 = (props) => {
      const { children, ...context } = props;
      const value = React5.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext22(consumerName) {
      const context = React5.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext22];
  }
  function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext32(rootComponentName, defaultContext) {
      const BaseContext = React5.createContext(defaultContext);
      const index2 = defaultContexts.length;
      defaultContexts = [...defaultContexts, defaultContext];
      const Provider3 = (props) => {
        const { scope, children, ...context } = props;
        const Context = scope?.[scopeName]?.[index2] || BaseContext;
        const value = React5.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Context.Provider, { value, children });
      };
      Provider3.displayName = rootComponentName + "Provider";
      function useContext22(consumerName, scope) {
        const Context = scope?.[scopeName]?.[index2] || BaseContext;
        const context = React5.useContext(Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      return [Provider3, useContext22];
    }
    const createScope = () => {
      const scopeContexts = defaultContexts.map((defaultContext) => {
        return React5.createContext(defaultContext);
      });
      return function useScope(scope) {
        const contexts = scope?.[scopeName] || scopeContexts;
        return React5.useMemo(
          () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
          [scope, contexts]
        );
      };
    };
    createScope.scopeName = scopeName;
    return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
  }
  function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = () => {
      const scopeHooks = scopes.map((createScope2) => ({
        useScope: createScope2(),
        scopeName: createScope2.scopeName
      }));
      return function useComposedScopes(overrideScopes) {
        const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
          const scopeProps = useScope(overrideScopes);
          const currentScope = scopeProps[`__scope${scopeName}`];
          return { ...nextScopes2, ...currentScope };
        }, {});
        return React5.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
      };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
  }

  // node_modules/@radix-ui/react-collection/dist/index.mjs
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  function createCollection(name) {
    const PROVIDER_NAME2 = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME2);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
      PROVIDER_NAME2,
      { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
    );
    const CollectionProvider = (props) => {
      const { scope, children } = props;
      const ref = import_react.default.useRef(null);
      const itemMap = import_react.default.useRef(/* @__PURE__ */ new Map()).current;
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
    };
    CollectionProvider.displayName = PROVIDER_NAME2;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
    const CollectionSlot = import_react.default.forwardRef(
      (props, forwardedRef) => {
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CollectionSlotImpl, { ref: composedRefs, children });
      }
    );
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
    const CollectionItemSlot = import_react.default.forwardRef(
      (props, forwardedRef) => {
        const { scope, children, ...itemData } = props;
        const ref = import_react.default.useRef(null);
        const composedRefs = useComposedRefs(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        import_react.default.useEffect(() => {
          context.itemMap.set(ref, { ref, ...itemData });
          return () => void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
      }
    );
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection2(scope) {
      const context = useCollectionContext(name + "CollectionConsumer", scope);
      const getItems = import_react.default.useCallback(() => {
        const collectionNode = context.collectionRef.current;
        if (!collectionNode) return [];
        const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
        const items = Array.from(context.itemMap.values());
        const orderedItems = items.sort(
          (a17, b3) => orderedNodes.indexOf(a17.ref.current) - orderedNodes.indexOf(b3.ref.current)
        );
        return orderedItems;
      }, [context.collectionRef, context.itemMap]);
      return getItems;
    }
    return [
      { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
      useCollection2,
      createCollectionScope2
    ];
  }

  // node_modules/@radix-ui/primitive/dist/index.mjs
  var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
      originalEventHandler?.(event);
      if (checkForDefaultPrevented === false || !event.defaultPrevented) {
        return ourEventHandler?.(event);
      }
    };
  }

  // node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
  var React8 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
  var React7 = __toESM(require_react(), 1);
  var useLayoutEffect2 = globalThis?.document ? React7.useLayoutEffect : () => {
  };

  // node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
  var React23 = __toESM(require_react(), 1);
  var useInsertionEffect = React8[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
  function useControllableState({
    prop,
    defaultProp,
    onChange = () => {
    },
    caller
  }) {
    const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
      defaultProp,
      onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    if (true) {
      const isControlledRef = React8.useRef(prop !== void 0);
      React8.useEffect(() => {
        const wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) {
          const from = wasControlled ? "controlled" : "uncontrolled";
          const to = isControlled ? "controlled" : "uncontrolled";
          console.warn(
            `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
          );
        }
        isControlledRef.current = isControlled;
      }, [isControlled, caller]);
    }
    const setValue = React8.useCallback(
      (nextValue) => {
        if (isControlled) {
          const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
          if (value2 !== prop) {
            onChangeRef.current?.(value2);
          }
        } else {
          setUncontrolledProp(nextValue);
        }
      },
      [isControlled, prop, setUncontrolledProp, onChangeRef]
    );
    return [value, setValue];
  }
  function useUncontrolledState({
    defaultProp,
    onChange
  }) {
    const [value, setValue] = React8.useState(defaultProp);
    const prevValueRef = React8.useRef(value);
    const onChangeRef = React8.useRef(onChange);
    useInsertionEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);
    React8.useEffect(() => {
      if (prevValueRef.current !== value) {
        onChangeRef.current?.(value);
        prevValueRef.current = value;
      }
    }, [value, prevValueRef]);
    return [value, setValue, onChangeRef];
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

  // node_modules/@radix-ui/react-presence/dist/index.mjs
  var React24 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  function useStateMachine(initialState, machine) {
    return React9.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState ?? state;
    }, initialState);
  }
  var Presence = (props) => {
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({ present: presence.isPresent }) : React24.Children.only(children);
    const ref = useComposedRefs(presence.ref, getElementRef2(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? React24.cloneElement(child, { ref }) : null;
  };
  Presence.displayName = "Presence";
  function usePresence(present) {
    const [node, setNode] = React24.useState();
    const stylesRef = React24.useRef(null);
    const prevPresentRef = React24.useRef(present);
    const prevAnimationNameRef = React24.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    React24.useEffect(() => {
      const currentAnimationName = getAnimationName(stylesRef.current);
      prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [state]);
    useLayoutEffect2(() => {
      const styles = stylesRef.current;
      const wasPresent = prevPresentRef.current;
      const hasPresentChanged = wasPresent !== present;
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.current;
        const currentAnimationName = getAnimationName(styles);
        if (present) {
          send("MOUNT");
        } else if (currentAnimationName === "none" || styles?.display === "none") {
          send("UNMOUNT");
        } else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (wasPresent && isAnimating) {
            send("ANIMATION_OUT");
          } else {
            send("UNMOUNT");
          }
        }
        prevPresentRef.current = present;
      }
    }, [present, send]);
    useLayoutEffect2(() => {
      if (node) {
        let timeoutId;
        const ownerWindow = node.ownerDocument.defaultView ?? window;
        const handleAnimationEnd = (event) => {
          const currentAnimationName = getAnimationName(stylesRef.current);
          const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
          if (event.target === node && isCurrentAnimation) {
            send("ANIMATION_END");
            if (!prevPresentRef.current) {
              const currentFillMode = node.style.animationFillMode;
              node.style.animationFillMode = "forwards";
              timeoutId = ownerWindow.setTimeout(() => {
                if (node.style.animationFillMode === "forwards") {
                  node.style.animationFillMode = currentFillMode;
                }
              });
            }
          }
        };
        const handleAnimationStart = (event) => {
          if (event.target === node) {
            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
          }
        };
        node.addEventListener("animationstart", handleAnimationStart);
        node.addEventListener("animationcancel", handleAnimationEnd);
        node.addEventListener("animationend", handleAnimationEnd);
        return () => {
          ownerWindow.clearTimeout(timeoutId);
          node.removeEventListener("animationstart", handleAnimationStart);
          node.removeEventListener("animationcancel", handleAnimationEnd);
          node.removeEventListener("animationend", handleAnimationEnd);
        };
      } else {
        send("ANIMATION_END");
      }
    }, [node, send]);
    return {
      isPresent: ["mounted", "unmountSuspended"].includes(state),
      ref: React24.useCallback((node2) => {
        stylesRef.current = node2 ? getComputedStyle(node2) : null;
        setNode(node2);
      }, [])
    };
  }
  function getAnimationName(styles) {
    return styles?.animationName || "none";
  }
  function getElementRef2(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }

  // node_modules/@radix-ui/react-id/dist/index.mjs
  var React10 = __toESM(require_react(), 1);
  var useReactId = React10[" useId ".trim().toString()] || (() => void 0);
  var count = 0;
  function useId(deterministicId) {
    const [id, setId] = React10.useState(useReactId());
    useLayoutEffect2(() => {
      if (!deterministicId) setId((reactId) => reactId ?? String(count++));
    }, [deterministicId]);
    return deterministicId || (id ? `radix-${id}` : "");
  }

  // node_modules/@radix-ui/react-direction/dist/index.mjs
  var dist_exports3 = {};
  __export(dist_exports3, {
    DirectionProvider: () => DirectionProvider,
    Provider: () => Provider,
    useDirection: () => useDirection
  });
  var React11 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var DirectionContext = React11.createContext(void 0);
  var DirectionProvider = (props) => {
    const { dir, children } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DirectionContext.Provider, { value: dir, children });
  };
  function useDirection(localDir) {
    const globalDir = React11.useContext(DirectionContext);
    return localDir || globalDir || "ltr";
  }
  var Provider = DirectionProvider;

  // node_modules/@radix-ui/react-dialog/dist/index.mjs
  var dist_exports4 = {};
  __export(dist_exports4, {
    Close: () => Close,
    Content: () => Content,
    Description: () => Description,
    Dialog: () => Dialog,
    DialogClose: () => DialogClose,
    DialogContent: () => DialogContent,
    DialogDescription: () => DialogDescription,
    DialogOverlay: () => DialogOverlay,
    DialogPortal: () => DialogPortal,
    DialogTitle: () => DialogTitle,
    DialogTrigger: () => DialogTrigger,
    Overlay: () => Overlay,
    Portal: () => Portal2,
    Root: () => Root2,
    Title: () => Title,
    Trigger: () => Trigger,
    WarningProvider: () => WarningProvider,
    createDialogScope: () => createDialogScope
  });
  var React28 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
  var React14 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
  var React12 = __toESM(require_react(), 1);
  function useCallbackRef(callback) {
    const callbackRef = React12.useRef(callback);
    React12.useEffect(() => {
      callbackRef.current = callback;
    });
    return React12.useMemo(() => (...args) => callbackRef.current?.(...args), []);
  }

  // node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
  var React13 = __toESM(require_react(), 1);
  function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
    const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
    React13.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          onEscapeKeyDown(event);
        }
      };
      ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
      return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
    }, [onEscapeKeyDown, ownerDocument]);
  }

  // node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var DISMISSABLE_LAYER_NAME = "DismissableLayer";
  var CONTEXT_UPDATE = "dismissableLayer.update";
  var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
  var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
  var originalBodyPointerEvents;
  var DismissableLayerContext = React14.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  });
  var DismissableLayer = React14.forwardRef(
    (props, forwardedRef) => {
      const {
        disableOutsidePointerEvents = false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        onDismiss,
        ...layerProps
      } = props;
      const context = React14.useContext(DismissableLayerContext);
      const [node, setNode] = React14.useState(null);
      const ownerDocument = node?.ownerDocument ?? globalThis?.document;
      const [, force] = React14.useState({});
      const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
      const layers = Array.from(context.layers);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      const index2 = node ? layers.indexOf(node) : -1;
      const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
      const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
      const pointerDownOutside = usePointerDownOutside((event) => {
        const target = event.target;
        const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
      }, ownerDocument);
      const focusOutside = useFocusOutside((event) => {
        const target = event.target;
        const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
        if (isFocusInBranch) return;
        onFocusOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
      }, ownerDocument);
      useEscapeKeydown((event) => {
        const isHighestLayer = index2 === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown?.(event);
        if (!event.defaultPrevented && onDismiss) {
          event.preventDefault();
          onDismiss();
        }
      }, ownerDocument);
      React14.useEffect(() => {
        if (!node) return;
        if (disableOutsidePointerEvents) {
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
            ownerDocument.body.style.pointerEvents = "none";
          }
          context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return () => {
          if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
            ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
          }
        };
      }, [node, ownerDocument, disableOutsidePointerEvents, context]);
      React14.useEffect(() => {
        return () => {
          if (!node) return;
          context.layers.delete(node);
          context.layersWithOutsidePointerEventsDisabled.delete(node);
          dispatchUpdate();
        };
      }, [node, context]);
      React14.useEffect(() => {
        const handleUpdate = () => force({});
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Primitive.div,
        {
          ...layerProps,
          ref: composedRefs,
          style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
          },
          onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
          onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
          onPointerDownCapture: composeEventHandlers(
            props.onPointerDownCapture,
            pointerDownOutside.onPointerDownCapture
          )
        }
      );
    }
  );
  DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
  var BRANCH_NAME = "DismissableLayerBranch";
  var DismissableLayerBranch = React14.forwardRef((props, forwardedRef) => {
    const context = React14.useContext(DismissableLayerContext);
    const ref = React14.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React14.useEffect(() => {
      const node = ref.current;
      if (node) {
        context.branches.add(node);
        return () => {
          context.branches.delete(node);
        };
      }
    }, [context.branches]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Primitive.div, { ...props, ref: composedRefs });
  });
  DismissableLayerBranch.displayName = BRANCH_NAME;
  function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
    const isPointerInsideReactTreeRef = React14.useRef(false);
    const handleClickRef = React14.useRef(() => {
    });
    React14.useEffect(() => {
      const handlePointerDown = (event) => {
        if (event.target && !isPointerInsideReactTreeRef.current) {
          let handleAndDispatchPointerDownOutsideEvent2 = function() {
            handleAndDispatchCustomEvent(
              POINTER_DOWN_OUTSIDE,
              handlePointerDownOutside,
              eventDetail,
              { discrete: true }
            );
          };
          var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
          const eventDetail = { originalEvent: event };
          if (event.pointerType === "touch") {
            ownerDocument.removeEventListener("click", handleClickRef.current);
            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
            ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
          } else {
            handleAndDispatchPointerDownOutsideEvent2();
          }
        } else {
          ownerDocument.removeEventListener("click", handleClickRef.current);
        }
        isPointerInsideReactTreeRef.current = false;
      };
      const timerId = window.setTimeout(() => {
        ownerDocument.addEventListener("pointerdown", handlePointerDown);
      }, 0);
      return () => {
        window.clearTimeout(timerId);
        ownerDocument.removeEventListener("pointerdown", handlePointerDown);
        ownerDocument.removeEventListener("click", handleClickRef.current);
      };
    }, [ownerDocument, handlePointerDownOutside]);
    return {
      // ensures we check React component tree (not just DOM tree)
      onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
    };
  }
  function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = useCallbackRef(onFocusOutside);
    const isFocusInsideReactTreeRef = React14.useRef(false);
    React14.useEffect(() => {
      const handleFocus = (event) => {
        if (event.target && !isFocusInsideReactTreeRef.current) {
          const eventDetail = { originalEvent: event };
          handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
            discrete: false
          });
        }
      };
      ownerDocument.addEventListener("focusin", handleFocus);
      return () => ownerDocument.removeEventListener("focusin", handleFocus);
    }, [ownerDocument, handleFocusOutside]);
    return {
      onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
      onBlurCapture: () => isFocusInsideReactTreeRef.current = false
    };
  }
  function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
  }
  function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
    if (handler) target.addEventListener(name, handler, { once: true });
    if (discrete) {
      dispatchDiscreteCustomEvent(target, event);
    } else {
      target.dispatchEvent(event);
    }
  }

  // node_modules/@radix-ui/react-focus-scope/dist/index.mjs
  var React15 = __toESM(require_react(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
  var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
  var EVENT_OPTIONS = { bubbles: false, cancelable: true };
  var FOCUS_SCOPE_NAME = "FocusScope";
  var FocusScope = React15.forwardRef((props, forwardedRef) => {
    const {
      loop = false,
      trapped = false,
      onMountAutoFocus: onMountAutoFocusProp,
      onUnmountAutoFocus: onUnmountAutoFocusProp,
      ...scopeProps
    } = props;
    const [container, setContainer] = React15.useState(null);
    const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = React15.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
    const focusScope = React15.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    React15.useEffect(() => {
      if (trapped) {
        let handleFocusIn2 = function(event) {
          if (focusScope.paused || !container) return;
          const target = event.target;
          if (container.contains(target)) {
            lastFocusedElementRef.current = target;
          } else {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleFocusOut2 = function(event) {
          if (focusScope.paused || !container) return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null) return;
          if (!container.contains(relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleMutations2 = function(mutations) {
          const focusedElement = document.activeElement;
          if (focusedElement !== document.body) return;
          for (const mutation of mutations) {
            if (mutation.removedNodes.length > 0) focus(container);
          }
        };
        var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
        document.addEventListener("focusin", handleFocusIn2);
        document.addEventListener("focusout", handleFocusOut2);
        const mutationObserver = new MutationObserver(handleMutations2);
        if (container) mutationObserver.observe(container, { childList: true, subtree: true });
        return () => {
          document.removeEventListener("focusin", handleFocusIn2);
          document.removeEventListener("focusout", handleFocusOut2);
          mutationObserver.disconnect();
        };
      }
    }, [trapped, container, focusScope.paused]);
    React15.useEffect(() => {
      if (container) {
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
            if (document.activeElement === previouslyFocusedElement) {
              focus(container);
            }
          }
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          setTimeout(() => {
            const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement ?? document.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          }, 0);
        };
      }
    }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
    const handleKeyDown = React15.useCallback(
      (event) => {
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
          const container2 = event.currentTarget;
          const [first, last] = getTabbableEdges(container2);
          const hasTabbableElementsInside = first && last;
          if (!hasTabbableElementsInside) {
            if (focusedElement === container2) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (loop) focus(first, { select: true });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (loop) focus(last, { select: true });
            }
          }
        }
      },
      [loop, trapped, focusScope.paused]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
  });
  FocusScope.displayName = FOCUS_SCOPE_NAME;
  function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates) {
      focus(candidate, { select });
      if (document.activeElement !== previouslyFocusedElement) return;
    }
  }
  function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [first, last];
  }
  function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (node) => {
        const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
        if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
        return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }
  function findVisible(elements, container) {
    for (const element of elements) {
      if (!isHidden(element, { upTo: container })) return element;
    }
  }
  function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while (node) {
      if (upTo !== void 0 && node === upTo) return false;
      if (getComputedStyle(node).display === "none") return true;
      node = node.parentElement;
    }
    return false;
  }
  function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
  }
  function focus(element, { select = false } = {}) {
    if (element && element.focus) {
      const previouslyFocusedElement = document.activeElement;
      element.focus({ preventScroll: true });
      if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
        element.select();
    }
  }
  var focusScopesStack = createFocusScopesStack();
  function createFocusScopesStack() {
    let stack = [];
    return {
      add(focusScope) {
        const activeFocusScope = stack[0];
        if (focusScope !== activeFocusScope) {
          activeFocusScope?.pause();
        }
        stack = arrayRemove(stack, focusScope);
        stack.unshift(focusScope);
      },
      remove(focusScope) {
        stack = arrayRemove(stack, focusScope);
        stack[0]?.resume();
      }
    };
  }
  function arrayRemove(array, item) {
    const updatedArray = [...array];
    const index2 = updatedArray.indexOf(item);
    if (index2 !== -1) {
      updatedArray.splice(index2, 1);
    }
    return updatedArray;
  }
  function removeLinks(items) {
    return items.filter((item) => item.tagName !== "A");
  }

  // node_modules/@radix-ui/react-portal/dist/index.mjs
  var React16 = __toESM(require_react(), 1);
  var import_react_dom = __toESM(require_react_dom(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var PORTAL_NAME = "Portal";
  var Portal = React16.forwardRef((props, forwardedRef) => {
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = React16.useState(false);
    useLayoutEffect2(() => setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? import_react_dom.default.createPortal(/* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
  });
  Portal.displayName = PORTAL_NAME;

  // node_modules/@radix-ui/react-focus-guards/dist/index.mjs
  var React17 = __toESM(require_react(), 1);
  var count2 = 0;
  function useFocusGuards() {
    React17.useEffect(() => {
      const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
      document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
      document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
      count2++;
      return () => {
        if (count2 === 1) {
          document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
        }
        count2--;
      };
    }, []);
  }
  function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
  }

  // node_modules/tslib/tslib.es6.mjs
  var __assign = function() {
    __assign = Object.assign || function __assign2(t17) {
      for (var s13, i6 = 1, n12 = arguments.length; i6 < n12; i6++) {
        s13 = arguments[i6];
        for (var p15 in s13) if (Object.prototype.hasOwnProperty.call(s13, p15)) t17[p15] = s13[p15];
      }
      return t17;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s13, e24) {
    var t17 = {};
    for (var p15 in s13) if (Object.prototype.hasOwnProperty.call(s13, p15) && e24.indexOf(p15) < 0)
      t17[p15] = s13[p15];
    if (s13 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i6 = 0, p15 = Object.getOwnPropertySymbols(s13); i6 < p15.length; i6++) {
        if (e24.indexOf(p15[i6]) < 0 && Object.prototype.propertyIsEnumerable.call(s13, p15[i6]))
          t17[p15[i6]] = s13[p15[i6]];
      }
    return t17;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i6 = 0, l7 = from.length, ar; i6 < l7; i6++) {
      if (ar || !(i6 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i6);
        ar[i6] = from[i6];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  // node_modules/react-remove-scroll/dist/es2015/Combination.js
  var React27 = __toESM(require_react());

  // node_modules/react-remove-scroll/dist/es2015/UI.js
  var React20 = __toESM(require_react());

  // node_modules/react-remove-scroll-bar/dist/es2015/constants.js
  var zeroRightClassName = "right-scroll-bar-position";
  var fullWidthClassName = "width-before-scroll-bar";
  var noScrollbarsClassName = "with-scroll-bars-hidden";
  var removedBarSizeVariable = "--removed-body-scroll-bar-size";

  // node_modules/use-callback-ref/dist/es2015/assignRef.js
  function assignRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
    return ref;
  }

  // node_modules/use-callback-ref/dist/es2015/useRef.js
  var import_react3 = __toESM(require_react());
  function useCallbackRef2(initialValue, callback) {
    var ref = (0, import_react3.useState)(function() {
      return {
        // value
        value: initialValue,
        // last callback
        callback,
        // "memoized" public interface
        facade: {
          get current() {
            return ref.value;
          },
          set current(value) {
            var last = ref.value;
            if (last !== value) {
              ref.value = value;
              ref.callback(value, last);
            }
          }
        }
      };
    })[0];
    ref.callback = callback;
    return ref.facade;
  }

  // node_modules/use-callback-ref/dist/es2015/useMergeRef.js
  var React18 = __toESM(require_react());
  var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React18.useLayoutEffect : React18.useEffect;
  var currentValues = /* @__PURE__ */ new WeakMap();
  function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
      return refs.forEach(function(ref) {
        return assignRef(ref, newValue);
      });
    });
    useIsomorphicLayoutEffect(function() {
      var oldValue = currentValues.get(callbackRef);
      if (oldValue) {
        var prevRefs_1 = new Set(oldValue);
        var nextRefs_1 = new Set(refs);
        var current_1 = callbackRef.current;
        prevRefs_1.forEach(function(ref) {
          if (!nextRefs_1.has(ref)) {
            assignRef(ref, null);
          }
        });
        nextRefs_1.forEach(function(ref) {
          if (!prevRefs_1.has(ref)) {
            assignRef(ref, current_1);
          }
        });
      }
      currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
  }

  // node_modules/use-sidecar/dist/es2015/medium.js
  function ItoI(a17) {
    return a17;
  }
  function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
      middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
      read: function() {
        if (assigned) {
          throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        }
        if (buffer.length) {
          return buffer[buffer.length - 1];
        }
        return defaults;
      },
      useMedium: function(data2) {
        var item = middleware(data2, assigned);
        buffer.push(item);
        return function() {
          buffer = buffer.filter(function(x2) {
            return x2 !== item;
          });
        };
      },
      assignSyncMedium: function(cb) {
        assigned = true;
        while (buffer.length) {
          var cbs = buffer;
          buffer = [];
          cbs.forEach(cb);
        }
        buffer = {
          push: function(x2) {
            return cb(x2);
          },
          filter: function() {
            return buffer;
          }
        };
      },
      assignMedium: function(cb) {
        assigned = true;
        var pendingQueue = [];
        if (buffer.length) {
          var cbs = buffer;
          buffer = [];
          cbs.forEach(cb);
          pendingQueue = buffer;
        }
        var executeQueue = function() {
          var cbs2 = pendingQueue;
          pendingQueue = [];
          cbs2.forEach(cb);
        };
        var cycle = function() {
          return Promise.resolve().then(executeQueue);
        };
        cycle();
        buffer = {
          push: function(x2) {
            pendingQueue.push(x2);
            cycle();
          },
          filter: function(filter) {
            pendingQueue = pendingQueue.filter(filter);
            return buffer;
          }
        };
      }
    };
    return medium;
  }
  function createSidecarMedium(options) {
    if (options === void 0) {
      options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
  }

  // node_modules/use-sidecar/dist/es2015/exports.js
  var React19 = __toESM(require_react());
  var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
      throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    }
    var Target = sideCar.read();
    if (!Target) {
      throw new Error("Sidecar medium not found");
    }
    return React19.createElement(Target, __assign({}, rest));
  };
  SideCar.isSideCarExport = true;
  function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
  }

  // node_modules/react-remove-scroll/dist/es2015/medium.js
  var effectCar = createSidecarMedium();

  // node_modules/react-remove-scroll/dist/es2015/UI.js
  var nothing = function() {
    return;
  };
  var RemoveScroll = React20.forwardRef(function(props, parentRef) {
    var ref = React20.useRef(null);
    var _a = React20.useState({
      onScrollCapture: nothing,
      onWheelCapture: nothing,
      onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar2 = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return React20.createElement(
      React20.Fragment,
      null,
      enabled && React20.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
      forwardProps ? React20.cloneElement(React20.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React20.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
    );
  });
  RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
  };
  RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName
  };

  // node_modules/react-remove-scroll/dist/es2015/SideEffect.js
  var React26 = __toESM(require_react());

  // node_modules/react-remove-scroll-bar/dist/es2015/component.js
  var React25 = __toESM(require_react());

  // node_modules/react-style-singleton/dist/es2015/hook.js
  var React21 = __toESM(require_react());

  // node_modules/get-nonce/dist/es2015/index.js
  var currentNonce;
  var getNonce = function() {
    if (currentNonce) {
      return currentNonce;
    }
    if (typeof __webpack_nonce__ !== "undefined") {
      return __webpack_nonce__;
    }
    return void 0;
  };

  // node_modules/react-style-singleton/dist/es2015/singleton.js
  function makeStyleTag() {
    if (!document)
      return null;
    var tag = document.createElement("style");
    tag.type = "text/css";
    var nonce = getNonce();
    if (nonce) {
      tag.setAttribute("nonce", nonce);
    }
    return tag;
  }
  function injectStyles(tag, css2) {
    if (tag.styleSheet) {
      tag.styleSheet.cssText = css2;
    } else {
      tag.appendChild(document.createTextNode(css2));
    }
  }
  function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(tag);
  }
  var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
      add: function(style) {
        if (counter == 0) {
          if (stylesheet = makeStyleTag()) {
            injectStyles(stylesheet, style);
            insertStyleTag(stylesheet);
          }
        }
        counter++;
      },
      remove: function() {
        counter--;
        if (!counter && stylesheet) {
          stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
          stylesheet = null;
        }
      }
    };
  };

  // node_modules/react-style-singleton/dist/es2015/hook.js
  var styleHookSingleton = function() {
    var sheet = stylesheetSingleton();
    return function(styles, isDynamic) {
      React21.useEffect(function() {
        sheet.add(styles);
        return function() {
          sheet.remove();
        };
      }, [styles && isDynamic]);
    };
  };

  // node_modules/react-style-singleton/dist/es2015/component.js
  var styleSingleton = function() {
    var useStyle = styleHookSingleton();
    var Sheet = function(_a) {
      var styles = _a.styles, dynamic = _a.dynamic;
      useStyle(styles, dynamic);
      return null;
    };
    return Sheet;
  };

  // node_modules/react-remove-scroll-bar/dist/es2015/utils.js
  var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  };
  var parse = function(x2) {
    return parseInt(x2 || "", 10) || 0;
  };
  var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
    var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
    var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
    return [parse(left), parse(top), parse(right)];
  };
  var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
      gapMode = "margin";
    }
    if (typeof window === "undefined") {
      return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
      left: offsets[0],
      top: offsets[1],
      right: offsets[2],
      gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
  };

  // node_modules/react-remove-scroll-bar/dist/es2015/component.js
  var Style = styleSingleton();
  var lockAttribute = "data-scroll-locked";
  var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
      gapMode = "margin";
    }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
      allowRelative && "position: relative ".concat(important, ";"),
      gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
      gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
  };
  var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
    return isFinite(counter) ? counter : 0;
  };
  var useLockAttribute = function() {
    React25.useEffect(function() {
      document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
      return function() {
        var newCounter = getCurrentUseCounter() - 1;
        if (newCounter <= 0) {
          document.body.removeAttribute(lockAttribute);
        } else {
          document.body.setAttribute(lockAttribute, newCounter.toString());
        }
      };
    }, []);
  };
  var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
    useLockAttribute();
    var gap = React25.useMemo(function() {
      return getGapWidth(gapMode);
    }, [gapMode]);
    return React25.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
  };

  // node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
  var passiveSupported = false;
  if (typeof window !== "undefined") {
    try {
      options = Object.defineProperty({}, "passive", {
        get: function() {
          passiveSupported = true;
          return true;
        }
      });
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (err) {
      passiveSupported = false;
    }
  }
  var options;
  var nonPassive = passiveSupported ? { passive: false } : false;

  // node_modules/react-remove-scroll/dist/es2015/handleScroll.js
  var alwaysContainsScroll = function(node) {
    return node.tagName === "TEXTAREA";
  };
  var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
      return false;
    }
    var styles = window.getComputedStyle(node);
    return (
      // not-not-scrollable
      styles[overflow] !== "hidden" && // contains scroll inside self
      !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
    );
  };
  var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, "overflowY");
  };
  var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, "overflowX");
  };
  var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
      if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
        current = current.host;
      }
      var isScrollable = elementCouldBeScrolled(axis, current);
      if (isScrollable) {
        var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
        if (scrollHeight > clientHeight) {
          return true;
        }
      }
      current = current.parentNode;
    } while (current && current !== ownerDocument.body);
    return false;
  };
  var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
      scrollTop,
      scrollHeight,
      clientHeight
    ];
  };
  var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
      scrollLeft,
      scrollWidth,
      clientWidth
    ];
  };
  var elementCouldBeScrolled = function(axis, node) {
    return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
  };
  var getScrollVariables = function(axis, node) {
    return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
  };
  var getDirectionFactor = function(axis, direction) {
    return axis === "h" && direction === "rtl" ? -1 : 1;
  };
  var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
      if (!target) {
        break;
      }
      var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
      var elementScroll = scroll_1 - capacity - directionFactor * position;
      if (position || elementScroll) {
        if (elementCouldBeScrolled(axis, target)) {
          availableScroll += elementScroll;
          availableScrollTop += position;
        }
      }
      var parent_1 = target.parentNode;
      target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    } while (
      // portaled content
      !targetInLock && target !== document.body || // self content
      targetInLock && (endTarget.contains(target) || endTarget === target)
    );
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
      shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
      shouldCancelScroll = true;
    }
    return shouldCancelScroll;
  };

  // node_modules/react-remove-scroll/dist/es2015/SideEffect.js
  var getTouchXY = function(event) {
    return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
  };
  var getDeltaXY = function(event) {
    return [event.deltaX, event.deltaY];
  };
  var extractRef = function(ref) {
    return ref && "current" in ref ? ref.current : ref;
  };
  var deltaCompare = function(x2, y) {
    return x2[0] === y[0] && x2[1] === y[1];
  };
  var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
  };
  var idCounter = 0;
  var lockStack = [];
  function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React26.useRef([]);
    var touchStartRef = React26.useRef([0, 0]);
    var activeAxis = React26.useRef();
    var id = React26.useState(idCounter++)[0];
    var Style2 = React26.useState(styleSingleton)[0];
    var lastProps = React26.useRef(props);
    React26.useEffect(function() {
      lastProps.current = props;
    }, [props]);
    React26.useEffect(function() {
      if (props.inert) {
        document.body.classList.add("block-interactivity-".concat(id));
        var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
        allow_1.forEach(function(el) {
          return el.classList.add("allow-interactivity-".concat(id));
        });
        return function() {
          document.body.classList.remove("block-interactivity-".concat(id));
          allow_1.forEach(function(el) {
            return el.classList.remove("allow-interactivity-".concat(id));
          });
        };
      }
      return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React26.useCallback(function(event, parent) {
      if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
        return !lastProps.current.allowPinchZoom;
      }
      var touch = getTouchXY(event);
      var touchStart = touchStartRef.current;
      var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
      var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
      var currentAxis;
      var target = event.target;
      var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
      if ("touches" in event && moveDirection === "h" && target.type === "range") {
        return false;
      }
      var selection = window.getSelection();
      var anchorNode = selection && selection.anchorNode;
      var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
      if (isTouchingSelection) {
        return false;
      }
      var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
      if (!canBeScrolledInMainDirection) {
        return true;
      }
      if (canBeScrolledInMainDirection) {
        currentAxis = moveDirection;
      } else {
        currentAxis = moveDirection === "v" ? "h" : "v";
        canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
      }
      if (!canBeScrolledInMainDirection) {
        return false;
      }
      if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
        activeAxis.current = currentAxis;
      }
      if (!currentAxis) {
        return true;
      }
      var cancelingAxis = activeAxis.current || currentAxis;
      return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React26.useCallback(function(_event) {
      var event = _event;
      if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
        return;
      }
      var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
      var sourceEvent = shouldPreventQueue.current.filter(function(e24) {
        return e24.name === event.type && (e24.target === event.target || event.target === e24.shadowParent) && deltaCompare(e24.delta, delta);
      })[0];
      if (sourceEvent && sourceEvent.should) {
        if (event.cancelable) {
          event.preventDefault();
        }
        return;
      }
      if (!sourceEvent) {
        var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
          return node.contains(event.target);
        });
        var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
        if (shouldStop) {
          if (event.cancelable) {
            event.preventDefault();
          }
        }
      }
    }, []);
    var shouldCancel = React26.useCallback(function(name, delta, target, should) {
      var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
      shouldPreventQueue.current.push(event);
      setTimeout(function() {
        shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e24) {
          return e24 !== event;
        });
      }, 1);
    }, []);
    var scrollTouchStart = React26.useCallback(function(event) {
      touchStartRef.current = getTouchXY(event);
      activeAxis.current = void 0;
    }, []);
    var scrollWheel = React26.useCallback(function(event) {
      shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React26.useCallback(function(event) {
      shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React26.useEffect(function() {
      lockStack.push(Style2);
      props.setCallbacks({
        onScrollCapture: scrollWheel,
        onWheelCapture: scrollWheel,
        onTouchMoveCapture: scrollTouchMove
      });
      document.addEventListener("wheel", shouldPrevent, nonPassive);
      document.addEventListener("touchmove", shouldPrevent, nonPassive);
      document.addEventListener("touchstart", scrollTouchStart, nonPassive);
      return function() {
        lockStack = lockStack.filter(function(inst) {
          return inst !== Style2;
        });
        document.removeEventListener("wheel", shouldPrevent, nonPassive);
        document.removeEventListener("touchmove", shouldPrevent, nonPassive);
        document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
      };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return React26.createElement(
      React26.Fragment,
      null,
      inert ? React26.createElement(Style2, { styles: generateStyle(id) }) : null,
      removeScrollBar ? React26.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
    );
  }
  function getOutermostShadowParent(node) {
    var shadowParent = null;
    while (node !== null) {
      if (node instanceof ShadowRoot) {
        shadowParent = node.host;
        node = node.host;
      }
      node = node.parentNode;
    }
    return shadowParent;
  }

  // node_modules/react-remove-scroll/dist/es2015/sidecar.js
  var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

  // node_modules/react-remove-scroll/dist/es2015/Combination.js
  var ReactRemoveScroll = React27.forwardRef(function(props, ref) {
    return React27.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
  });
  ReactRemoveScroll.classNames = RemoveScroll.classNames;
  var Combination_default = ReactRemoveScroll;

  // node_modules/aria-hidden/dist/es2015/index.js
  var getDefaultParent = function(originalTarget) {
    if (typeof document === "undefined") {
      return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
  };
  var counterMap = /* @__PURE__ */ new WeakMap();
  var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
  var markerMap = {};
  var lockCount = 0;
  var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
  };
  var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
      if (parent.contains(target)) {
        return target;
      }
      var correctedTarget = unwrapHost(target);
      if (correctedTarget && parent.contains(correctedTarget)) {
        return correctedTarget;
      }
      console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
      return null;
    }).filter(function(x2) {
      return Boolean(x2);
    });
  };
  var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
      markerMap[markerName] = /* @__PURE__ */ new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = /* @__PURE__ */ new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
      if (!el || elementsToKeep.has(el)) {
        return;
      }
      elementsToKeep.add(el);
      keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
      if (!parent || elementsToStop.has(parent)) {
        return;
      }
      Array.prototype.forEach.call(parent.children, function(node) {
        if (elementsToKeep.has(node)) {
          deep(node);
        } else {
          try {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          } catch (e24) {
            console.error("aria-hidden: cannot operate on ", node, e24);
          }
        }
      });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
      hiddenNodes.forEach(function(node) {
        var counterValue = counterMap.get(node) - 1;
        var markerValue = markerCounter.get(node) - 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        if (!counterValue) {
          if (!uncontrolledNodes.has(node)) {
            node.removeAttribute(controlAttribute);
          }
          uncontrolledNodes.delete(node);
        }
        if (!markerValue) {
          node.removeAttribute(markerName);
        }
      });
      lockCount--;
      if (!lockCount) {
        counterMap = /* @__PURE__ */ new WeakMap();
        counterMap = /* @__PURE__ */ new WeakMap();
        uncontrolledNodes = /* @__PURE__ */ new WeakMap();
        markerMap = {};
      }
    };
  };
  var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
      markerName = "data-aria-hidden";
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
      return function() {
        return null;
      };
    }
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
    return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
  };

  // node_modules/@radix-ui/react-dialog/dist/index.mjs
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var DIALOG_NAME = "Dialog";
  var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
  var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
  var Dialog = (props) => {
    const {
      __scopeDialog,
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      modal = true
    } = props;
    const triggerRef = React28.useRef(null);
    const contentRef = React28.useRef(null);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: DIALOG_NAME
    });
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      DialogProvider,
      {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: useId(),
        titleId: useId(),
        descriptionId: useId(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: React28.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        modal,
        children
      }
    );
  };
  Dialog.displayName = DIALOG_NAME;
  var TRIGGER_NAME = "DialogTrigger";
  var DialogTrigger = React28.forwardRef(
    (props, forwardedRef) => {
      const { __scopeDialog, ...triggerProps } = props;
      const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
      const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        Primitive.button,
        {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": context.open,
          "aria-controls": context.contentId,
          "data-state": getState(context.open),
          ...triggerProps,
          ref: composedTriggerRef,
          onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
        }
      );
    }
  );
  DialogTrigger.displayName = TRIGGER_NAME;
  var PORTAL_NAME2 = "DialogPortal";
  var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME2, {
    forceMount: void 0
  });
  var DialogPortal = (props) => {
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME2, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PortalProvider, { scope: __scopeDialog, forceMount, children: React28.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Portal, { asChild: true, container, children: child }) })) });
  };
  DialogPortal.displayName = PORTAL_NAME2;
  var OVERLAY_NAME = "DialogOverlay";
  var DialogOverlay = React28.forwardRef(
    (props, forwardedRef) => {
      const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
      const { forceMount = portalContext.forceMount, ...overlayProps } = props;
      const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
      return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
    }
  );
  DialogOverlay.displayName = OVERLAY_NAME;
  var Slot2 = createSlot("DialogOverlay.RemoveScroll");
  var DialogOverlayImpl = React28.forwardRef(
    (props, forwardedRef) => {
      const { __scopeDialog, ...overlayProps } = props;
      const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
      return (
        // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
        // ie. when `Overlay` and `Content` are siblings
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Combination_default, { as: Slot2, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Primitive.div,
          {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: { pointerEvents: "auto", ...overlayProps.style }
          }
        ) })
      );
    }
  );
  var CONTENT_NAME = "DialogContent";
  var DialogContent = React28.forwardRef(
    (props, forwardedRef) => {
      const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
      const { forceMount = portalContext.forceMount, ...contentProps } = props;
      const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
    }
  );
  DialogContent.displayName = CONTENT_NAME;
  var DialogContentModal = React28.forwardRef(
    (props, forwardedRef) => {
      const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
      const contentRef = React28.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
      React28.useEffect(() => {
        const content = contentRef.current;
        if (content) return hideOthers(content);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        DialogContentImpl,
        {
          ...props,
          ref: composedRefs,
          trapFocus: context.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
            event.preventDefault();
            context.triggerRef.current?.focus();
          }),
          onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
          }),
          onFocusOutside: composeEventHandlers(
            props.onFocusOutside,
            (event) => event.preventDefault()
          )
        }
      );
    }
  );
  var DialogContentNonModal = React28.forwardRef(
    (props, forwardedRef) => {
      const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
      const hasInteractedOutsideRef = React28.useRef(false);
      const hasPointerDownOutsideRef = React28.useRef(false);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        DialogContentImpl,
        {
          ...props,
          ref: forwardedRef,
          trapFocus: false,
          disableOutsidePointerEvents: false,
          onCloseAutoFocus: (event) => {
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
              if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
              event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
          },
          onInteractOutside: (event) => {
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
              hasInteractedOutsideRef.current = true;
              if (event.detail.originalEvent.type === "pointerdown") {
                hasPointerDownOutsideRef.current = true;
              }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
              event.preventDefault();
            }
          }
        }
      );
    }
  );
  var DialogContentImpl = React28.forwardRef(
    (props, forwardedRef) => {
      const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
      const context = useDialogContext(CONTENT_NAME, __scopeDialog);
      const contentRef = React28.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, contentRef);
      useFocusGuards();
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          FocusScope,
          {
            asChild: true,
            loop: true,
            trapped: trapFocus,
            onMountAutoFocus: onOpenAutoFocus,
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              DismissableLayer,
              {
                role: "dialog",
                id: context.contentId,
                "aria-describedby": context.descriptionId,
                "aria-labelledby": context.titleId,
                "data-state": getState(context.open),
                ...contentProps,
                ref: composedRefs,
                onDismiss: () => context.onOpenChange(false)
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TitleWarning, { titleId: context.titleId }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
        ] })
      ] });
    }
  );
  var TITLE_NAME = "DialogTitle";
  var DialogTitle = React28.forwardRef(
    (props, forwardedRef) => {
      const { __scopeDialog, ...titleProps } = props;
      const context = useDialogContext(TITLE_NAME, __scopeDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
    }
  );
  DialogTitle.displayName = TITLE_NAME;
  var DESCRIPTION_NAME = "DialogDescription";
  var DialogDescription = React28.forwardRef(
    (props, forwardedRef) => {
      const { __scopeDialog, ...descriptionProps } = props;
      const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
    }
  );
  DialogDescription.displayName = DESCRIPTION_NAME;
  var CLOSE_NAME = "DialogClose";
  var DialogClose = React28.forwardRef(
    (props, forwardedRef) => {
      const { __scopeDialog, ...closeProps } = props;
      const context = useDialogContext(CLOSE_NAME, __scopeDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        Primitive.button,
        {
          type: "button",
          ...closeProps,
          ref: forwardedRef,
          onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
        }
      );
    }
  );
  DialogClose.displayName = CLOSE_NAME;
  function getState(open) {
    return open ? "open" : "closed";
  }
  var TITLE_WARNING_NAME = "DialogTitleWarning";
  var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
  });
  var TitleWarning = ({ titleId }) => {
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    React28.useEffect(() => {
      if (titleId) {
        const hasTitle = document.getElementById(titleId);
        if (!hasTitle) console.error(MESSAGE);
      }
    }, [MESSAGE, titleId]);
    return null;
  };
  var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
  var DescriptionWarning = ({ contentRef, descriptionId }) => {
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    React28.useEffect(() => {
      const describedById = contentRef.current?.getAttribute("aria-describedby");
      if (descriptionId && describedById) {
        const hasDescription = document.getElementById(descriptionId);
        if (!hasDescription) console.warn(MESSAGE);
      }
    }, [MESSAGE, contentRef, descriptionId]);
    return null;
  };
  var Root2 = Dialog;
  var Trigger = DialogTrigger;
  var Portal2 = DialogPortal;
  var Overlay = DialogOverlay;
  var Content = DialogContent;
  var Title = DialogTitle;
  var Description = DialogDescription;
  var Close = DialogClose;

  // node_modules/@radix-ui/react-use-size/dist/index.mjs
  var React29 = __toESM(require_react(), 1);
  function useSize(element) {
    const [size4, setSize] = React29.useState(void 0);
    useLayoutEffect2(() => {
      if (element) {
        setSize({ width: element.offsetWidth, height: element.offsetHeight });
        const resizeObserver = new ResizeObserver((entries) => {
          if (!Array.isArray(entries)) {
            return;
          }
          if (!entries.length) {
            return;
          }
          const entry = entries[0];
          let width;
          let height;
          if ("borderBoxSize" in entry) {
            const borderSizeEntry = entry["borderBoxSize"];
            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
            width = borderSize["inlineSize"];
            height = borderSize["blockSize"];
          } else {
            width = element.offsetWidth;
            height = element.offsetHeight;
          }
          setSize({ width, height });
        });
        resizeObserver.observe(element, { box: "border-box" });
        return () => resizeObserver.unobserve(element);
      } else {
        setSize(void 0);
      }
    }, [element]);
    return size4;
  }

  // node_modules/@radix-ui/react-popper/dist/index.mjs
  var React32 = __toESM(require_react(), 1);

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  var sides = ["top", "right", "bottom", "left"];
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v3) => ({
    x: v3,
    y: v3
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    const firstChar = placement[0];
    return firstChar === "t" || firstChar === "b" ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
  }
  var lrPlacement = ["left", "right"];
  var rlPlacement = ["right", "left"];
  var tbPlacement = ["top", "bottom"];
  var btPlacement = ["bottom", "top"];
  function getSideList(side, isStart, rtl) {
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rlPlacement : lrPlacement;
        return isStart ? lrPlacement : rlPlacement;
      case "left":
      case "right":
        return isStart ? tbPlacement : btPlacement;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    const side = getSide(placement);
    return oppositeSideMap[side] + placement.slice(side.length);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x: x2,
      y,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y,
      left: x2,
      right: x2 + width,
      bottom: y + height,
      x: x2,
      y
    };
  }

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x2,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x: x2,
      y,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var MAX_RESET_COUNT = 50;
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const platformWithDetectOverflow = platform2.detectOverflow ? platform2 : {
      ...platform2,
      detectOverflow
    };
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x2,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let resetCount = 0;
    const middlewareData = {};
    for (let i6 = 0; i6 < middleware.length; i6++) {
      const currentMiddleware = middleware[i6];
      if (!currentMiddleware) {
        continue;
      }
      const {
        name,
        fn
      } = currentMiddleware;
      const {
        x: nextX,
        y: nextY,
        data: data2,
        reset
      } = await fn({
        x: x2,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platformWithDetectOverflow,
        elements: {
          reference,
          floating
        }
      });
      x2 = nextX != null ? nextX : x2;
      y = nextY != null ? nextY : y;
      middlewareData[name] = {
        ...middlewareData[name],
        ...data2
      };
      if (reset && resetCount < MAX_RESET_COUNT) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x: x2,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i6 = -1;
      }
    }
    return {
      x: x2,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  var arrow = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x: x2,
        y,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x: x2,
        y
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset4 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset4,
          centerOffset: center - offset4 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
            // overflows the main axis.
            overflowsData.every((d8) => getSideAxis(d8.placement) === initialSideAxis ? d8.overflows[0] > 0 : true)) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d8) => d8.overflows[0] <= 0).sort((a17, b3) => a17.overflows[1] - b3.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d8) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d8.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d8) => [d8.placement, d8.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a17, b3) => a17[1] - b3[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  function getSideOffsets(overflow, rect) {
    return {
      top: overflow.top - rect.height,
      right: overflow.right - rect.width,
      bottom: overflow.bottom - rect.height,
      left: overflow.left - rect.width
    };
  }
  function isAnySideFullyClipped(overflow) {
    return sides.some((side) => overflow[side] >= 0);
  }
  var hide = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "hide",
      options,
      async fn(state) {
        const {
          rects,
          platform: platform2
        } = state;
        const {
          strategy = "referenceHidden",
          ...detectOverflowOptions
        } = evaluate(options, state);
        switch (strategy) {
          case "referenceHidden": {
            const overflow = await platform2.detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: "reference"
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
          case "escaped": {
            const overflow = await platform2.detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
          default: {
            return {};
          }
        }
      }
    };
  };
  var originSides = /* @__PURE__ */ new Set(["left", "top"]);
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x2,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x2 + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x: x2,
          y,
          placement,
          platform: platform2
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x3,
                y: y2
              } = _ref;
              return {
                x: x3,
                y: y2
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x: x2,
          y
        };
        const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x2,
            y: limitedCoords.y - y,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };
  var limitShift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      options,
      fn(state) {
        const {
          x: x2,
          y,
          placement,
          rects,
          middlewareData
        } = state;
        const {
          offset: offset4 = 0,
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true
        } = evaluate(options, state);
        const coords = {
          x: x2,
          y
        };
        const crossAxis = getSideAxis(placement);
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        const rawOffset = evaluate(offset4, state);
        const computedOffset = typeof rawOffset === "number" ? {
          mainAxis: rawOffset,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...rawOffset
        };
        if (checkMainAxis) {
          const len = mainAxis === "y" ? "height" : "width";
          const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
          const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
          if (mainAxisCoord < limitMin) {
            mainAxisCoord = limitMin;
          } else if (mainAxisCoord > limitMax) {
            mainAxisCoord = limitMax;
          }
        }
        if (checkCrossAxis) {
          var _middlewareData$offse, _middlewareData$offse2;
          const len = mainAxis === "y" ? "width" : "height";
          const isOriginSide = originSides.has(getSide(placement));
          const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
          const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
          if (crossAxisCoord < limitMin) {
            crossAxisCoord = limitMin;
          } else if (crossAxisCoord > limitMax) {
            crossAxisCoord = limitMax;
          }
        }
        return {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        };
      }
    };
  };
  var size = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
  }
  function isTableElement(element) {
    return /^(table|td|th)$/.test(getNodeName(element));
  }
  function isTopLayer(element) {
    try {
      if (element.matches(":popover-open")) {
        return true;
      }
    } catch (_e) {
    }
    try {
      return element.matches(":modal");
    } catch (_e) {
      return false;
    }
  }
  var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
  var containRe = /paint|layout|strict|content/;
  var isNotNone = (value) => !!value && value !== "none";
  var isWebKitValue;
  function isContainingBlock(elementOrCss) {
    const css2 = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
    return isNotNone(css2.transform) || isNotNone(css2.translate) || isNotNone(css2.scale) || isNotNone(css2.rotate) || isNotNone(css2.perspective) || !isWebKit() && (isNotNone(css2.backdropFilter) || isNotNone(css2.filter)) || willChangeRe.test(css2.willChange || "") || containRe.test(css2.contain || "");
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (isWebKitValue == null) {
      isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
    }
    return isWebKitValue;
  }
  function isLastTraversableNode(node) {
    return /^(html|body|#document)$/.test(getNodeName(node));
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    } else {
      return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
    }
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  function getCssDimensions(element) {
    const css2 = getComputedStyle2(element);
    let width = parseFloat(css2.width) || 0;
    let height = parseFloat(css2.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x2 = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;
    if (!x2 || !Number.isFinite(x2)) {
      x2 = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x: x2,
      y
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x2 = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css2 = getComputedStyle2(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css2.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css2.paddingTop)) * iframeScale.y;
        x2 *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x2 += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x2,
      y
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x2 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
      x: x2,
      y
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle2(body).direction === "rtl") {
      x2 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x2,
      y
    };
  }
  var SCROLLBAR_MAX = 25;
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x2 = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    if (windowScrollbarX <= 0) {
      const doc = html.ownerDocument;
      const body = doc.body;
      const bodyStyles = getComputedStyle(body);
      const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
      const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
      if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
        width -= clippingStableScrollbarWidth;
      }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
      width += windowScrollbarX;
    }
    return {
      width,
      height,
      x: x2,
      y
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x2 = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x: x2,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle2(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle2(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
    let top = firstRect.top;
    let right = firstRect.right;
    let bottom = firstRect.bottom;
    let left = firstRect.left;
    for (let i6 = 1; i6 < clippingAncestors.length; i6++) {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i6], strategy);
      top = max(rect.top, top);
      right = min(rect.right, right);
      bottom = min(rect.bottom, bottom);
      left = max(rect.left, left);
    }
    return {
      width: right - left,
      height: bottom - top,
      x: left,
      y: top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    function setLeftRTLScrollbarOffset() {
      offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        setLeftRTLScrollbarOffset();
      }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
      setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x: x2,
      y,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle2(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  var getElementRects = async function(data2) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data2.floating);
    return {
      reference: getRectRelativeToOffsetParent(data2.reference, await getOffsetParentFn(data2.floating), data2.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle2(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a17, b3) {
    return a17.x === b3.x && a17.y === b3.y && a17.width === b3.width && a17.height === b3.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root2 = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root2.clientWidth - (left + width));
      const insetBottom = floor(root2.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root2.ownerDocument
        });
      } catch (_e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      if (floating) {
        resizeObserver.observe(floating);
      }
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var offset2 = offset;
  var shift2 = shift;
  var flip2 = flip;
  var size2 = size;
  var hide2 = hide;
  var arrow2 = arrow;
  var limitShift2 = limitShift;
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  // node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
  var React30 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var ReactDOM3 = __toESM(require_react_dom(), 1);
  var isClient = typeof document !== "undefined";
  var noop = function noop2() {
  };
  var index = isClient ? import_react4.useLayoutEffect : noop;
  function deepEqual(a17, b3) {
    if (a17 === b3) {
      return true;
    }
    if (typeof a17 !== typeof b3) {
      return false;
    }
    if (typeof a17 === "function" && a17.toString() === b3.toString()) {
      return true;
    }
    let length;
    let i6;
    let keys;
    if (a17 && b3 && typeof a17 === "object") {
      if (Array.isArray(a17)) {
        length = a17.length;
        if (length !== b3.length) return false;
        for (i6 = length; i6-- !== 0; ) {
          if (!deepEqual(a17[i6], b3[i6])) {
            return false;
          }
        }
        return true;
      }
      keys = Object.keys(a17);
      length = keys.length;
      if (length !== Object.keys(b3).length) {
        return false;
      }
      for (i6 = length; i6-- !== 0; ) {
        if (!{}.hasOwnProperty.call(b3, keys[i6])) {
          return false;
        }
      }
      for (i6 = length; i6-- !== 0; ) {
        const key = keys[i6];
        if (key === "_owner" && a17.$$typeof) {
          continue;
        }
        if (!deepEqual(a17[key], b3[key])) {
          return false;
        }
      }
      return true;
    }
    return a17 !== a17 && b3 !== b3;
  }
  function getDPR(element) {
    if (typeof window === "undefined") {
      return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
  }
  function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
  }
  function useLatestRef(value) {
    const ref = React30.useRef(value);
    index(() => {
      ref.current = value;
    });
    return ref;
  }
  function useFloating(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2,
      elements: {
        reference: externalReference,
        floating: externalFloating
      } = {},
      transform = true,
      whileElementsMounted,
      open
    } = options;
    const [data2, setData] = React30.useState({
      x: 0,
      y: 0,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = React30.useState(middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
      setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = React30.useState(null);
    const [_floating, _setFloating] = React30.useState(null);
    const setReference = React30.useCallback((node) => {
      if (node !== referenceRef.current) {
        referenceRef.current = node;
        _setReference(node);
      }
    }, []);
    const setFloating = React30.useCallback((node) => {
      if (node !== floatingRef.current) {
        floatingRef.current = node;
        _setFloating(node);
      }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = React30.useRef(null);
    const floatingRef = React30.useRef(null);
    const dataRef = React30.useRef(data2);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform2);
    const openRef = useLatestRef(open);
    const update = React30.useCallback(() => {
      if (!referenceRef.current || !floatingRef.current) {
        return;
      }
      const config = {
        placement,
        strategy,
        middleware: latestMiddleware
      };
      if (platformRef.current) {
        config.platform = platformRef.current;
      }
      computePosition2(referenceRef.current, floatingRef.current, config).then((data3) => {
        const fullData = {
          ...data3,
          // The floating element's position may be recomputed while it's closed
          // but still mounted (such as when transitioning out). To ensure
          // `isPositioned` will be `false` initially on the next open, avoid
          // setting it to `true` when `open === false` (must be specified).
          isPositioned: openRef.current !== false
        };
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          ReactDOM3.flushSync(() => {
            setData(fullData);
          });
        }
      });
    }, [latestMiddleware, placement, strategy, platformRef, openRef]);
    index(() => {
      if (open === false && dataRef.current.isPositioned) {
        dataRef.current.isPositioned = false;
        setData((data3) => ({
          ...data3,
          isPositioned: false
        }));
      }
    }, [open]);
    const isMountedRef = React30.useRef(false);
    index(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    index(() => {
      if (referenceEl) referenceRef.current = referenceEl;
      if (floatingEl) floatingRef.current = floatingEl;
      if (referenceEl && floatingEl) {
        if (whileElementsMountedRef.current) {
          return whileElementsMountedRef.current(referenceEl, floatingEl, update);
        }
        update();
      }
    }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
    const refs = React30.useMemo(() => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }), [setReference, setFloating]);
    const elements = React30.useMemo(() => ({
      reference: referenceEl,
      floating: floatingEl
    }), [referenceEl, floatingEl]);
    const floatingStyles = React30.useMemo(() => {
      const initialStyles = {
        position: strategy,
        left: 0,
        top: 0
      };
      if (!elements.floating) {
        return initialStyles;
      }
      const x2 = roundByDPR(elements.floating, data2.x);
      const y = roundByDPR(elements.floating, data2.y);
      if (transform) {
        return {
          ...initialStyles,
          transform: "translate(" + x2 + "px, " + y + "px)",
          ...getDPR(elements.floating) >= 1.5 && {
            willChange: "transform"
          }
        };
      }
      return {
        position: strategy,
        left: x2,
        top: y
      };
    }, [strategy, transform, elements.floating, data2.x, data2.y]);
    return React30.useMemo(() => ({
      ...data2,
      update,
      refs,
      elements,
      floatingStyles
    }), [data2, update, refs, elements, floatingStyles]);
  }
  var arrow$1 = (options) => {
    function isRef(value) {
      return {}.hasOwnProperty.call(value, "current");
    }
    return {
      name: "arrow",
      options,
      fn(state) {
        const {
          element,
          padding
        } = typeof options === "function" ? options(state) : options;
        if (element && isRef(element)) {
          if (element.current != null) {
            return arrow2({
              element: element.current,
              padding
            }).fn(state);
          }
          return {};
        }
        if (element) {
          return arrow2({
            element,
            padding
          }).fn(state);
        }
        return {};
      }
    };
  };
  var offset3 = (options, deps) => {
    const result = offset2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var shift3 = (options, deps) => {
    const result = shift2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var limitShift3 = (options, deps) => {
    const result = limitShift2(options);
    return {
      fn: result.fn,
      options: [options, deps]
    };
  };
  var flip3 = (options, deps) => {
    const result = flip2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var size3 = (options, deps) => {
    const result = size2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var hide3 = (options, deps) => {
    const result = hide2(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };
  var arrow3 = (options, deps) => {
    const result = arrow$1(options);
    return {
      name: result.name,
      fn: result.fn,
      options: [options, deps]
    };
  };

  // node_modules/@radix-ui/react-arrow/dist/index.mjs
  var React31 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var NAME2 = "Arrow";
  var Arrow = React31.forwardRef((props, forwardedRef) => {
    const { children, width = 10, height = 5, ...arrowProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Primitive.svg,
      {
        ...arrowProps,
        ref: forwardedRef,
        width,
        height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: props.asChild ? children : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  });
  Arrow.displayName = NAME2;
  var Root3 = Arrow;

  // node_modules/@radix-ui/react-popper/dist/index.mjs
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var POPPER_NAME = "Popper";
  var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
  var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
  var Popper = (props) => {
    const { __scopePopper, children } = props;
    const [anchor, setAnchor] = React32.useState(null);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
  };
  Popper.displayName = POPPER_NAME;
  var ANCHOR_NAME = "PopperAnchor";
  var PopperAnchor = React32.forwardRef(
    (props, forwardedRef) => {
      const { __scopePopper, virtualRef, ...anchorProps } = props;
      const context = usePopperContext(ANCHOR_NAME, __scopePopper);
      const ref = React32.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const anchorRef = React32.useRef(null);
      React32.useEffect(() => {
        const previousAnchor = anchorRef.current;
        anchorRef.current = virtualRef?.current || ref.current;
        if (previousAnchor !== anchorRef.current) {
          context.onAnchorChange(anchorRef.current);
        }
      });
      return virtualRef ? null : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Primitive.div, { ...anchorProps, ref: composedRefs });
    }
  );
  PopperAnchor.displayName = ANCHOR_NAME;
  var CONTENT_NAME2 = "PopperContent";
  var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME2);
  var PopperContent = React32.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopePopper,
        side = "bottom",
        sideOffset = 0,
        align = "center",
        alignOffset = 0,
        arrowPadding = 0,
        avoidCollisions = true,
        collisionBoundary = [],
        collisionPadding: collisionPaddingProp = 0,
        sticky = "partial",
        hideWhenDetached = false,
        updatePositionStrategy = "optimized",
        onPlaced,
        ...contentProps
      } = props;
      const context = usePopperContext(CONTENT_NAME2, __scopePopper);
      const [content, setContent] = React32.useState(null);
      const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
      const [arrow4, setArrow] = React32.useState(null);
      const arrowSize = useSize(arrow4);
      const arrowWidth = arrowSize?.width ?? 0;
      const arrowHeight = arrowSize?.height ?? 0;
      const desiredPlacement = side + (align !== "center" ? "-" + align : "");
      const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
      const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
      const hasExplicitBoundaries = boundary.length > 0;
      const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter(isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
      };
      const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: desiredPlacement,
        whileElementsMounted: (...args) => {
          const cleanup = autoUpdate(...args, {
            animationFrame: updatePositionStrategy === "always"
          });
          return cleanup;
        },
        elements: {
          reference: context.anchor
        },
        middleware: [
          offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
          avoidCollisions && shift3({
            mainAxis: true,
            crossAxis: false,
            limiter: sticky === "partial" ? limitShift3() : void 0,
            ...detectOverflowOptions
          }),
          avoidCollisions && flip3({ ...detectOverflowOptions }),
          size3({
            ...detectOverflowOptions,
            apply: ({ elements, rects, availableWidth, availableHeight }) => {
              const { width: anchorWidth, height: anchorHeight } = rects.reference;
              const contentStyle = elements.floating.style;
              contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
              contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
              contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
              contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
            }
          }),
          arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
          transformOrigin({ arrowWidth, arrowHeight }),
          hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
        ]
      });
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const handlePlaced = useCallbackRef(onPlaced);
      useLayoutEffect2(() => {
        if (isPositioned) {
          handlePlaced?.();
        }
      }, [isPositioned, handlePlaced]);
      const arrowX = middlewareData.arrow?.x;
      const arrowY = middlewareData.arrow?.y;
      const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
      const [contentZIndex, setContentZIndex] = React32.useState();
      useLayoutEffect2(() => {
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
      }, [content]);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "div",
        {
          ref: refs.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
            // keep off the page when measuring
            minWidth: "max-content",
            zIndex: contentZIndex,
            ["--radix-popper-transform-origin"]: [
              middlewareData.transformOrigin?.x,
              middlewareData.transformOrigin?.y
            ].join(" "),
            // hide the content if using the hide middleware and should be hidden
            // set visibility to hidden and disable pointer events so the UI behaves
            // as if the PopperContent isn't there at all
            ...middlewareData.hide?.referenceHidden && {
              visibility: "hidden",
              pointerEvents: "none"
            }
          },
          dir: props.dir,
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            PopperContentProvider,
            {
              scope: __scopePopper,
              placedSide,
              onArrowChange: setArrow,
              arrowX,
              arrowY,
              shouldHideArrow: cannotCenterArrow,
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                Primitive.div,
                {
                  "data-side": placedSide,
                  "data-align": placedAlign,
                  ...contentProps,
                  ref: composedRefs,
                  style: {
                    ...contentProps.style,
                    // if the PopperContent hasn't been placed yet (not all measurements done)
                    // we prevent animations so that users's animation don't kick in too early referring wrong sides
                    animation: !isPositioned ? "none" : void 0
                  }
                }
              )
            }
          )
        }
      );
    }
  );
  PopperContent.displayName = CONTENT_NAME2;
  var ARROW_NAME = "PopperArrow";
  var OPPOSITE_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  };
  var PopperArrow = React32.forwardRef(function PopperArrow2(props, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;
    const contentContext = useContentContext(ARROW_NAME, __scopePopper);
    const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "span",
        {
          ref: contentContext.onArrowChange,
          style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[contentContext.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: `rotate(180deg)`,
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Root3,
            {
              ...arrowProps,
              ref: forwardedRef,
              style: {
                ...arrowProps.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
              }
            }
          )
        }
      )
    );
  });
  PopperArrow.displayName = ARROW_NAME;
  function isNotNull(value) {
    return value !== null;
  }
  var transformOrigin = (options) => ({
    name: "transformOrigin",
    options,
    fn(data2) {
      const { placement, rects, middlewareData } = data2;
      const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
      const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
      const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
      let x2 = "";
      let y = "";
      if (placedSide === "bottom") {
        x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x2 = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x2 = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: { x: x2, y } };
    }
  });
  function getSideAndAlignFromPlacement(placement) {
    const [side, align = "center"] = placement.split("-");
    return [side, align];
  }
  var Root22 = Popper;
  var Anchor = PopperAnchor;
  var Content2 = PopperContent;
  var Arrow2 = PopperArrow;

  // node_modules/@radix-ui/react-roving-focus/dist/index.mjs
  var React33 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
  var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
  var GROUP_NAME = "RovingFocusGroup";
  var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
  var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
    GROUP_NAME,
    [createCollectionScope]
  );
  var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
  var RovingFocusGroup = React33.forwardRef(
    (props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
    }
  );
  RovingFocusGroup.displayName = GROUP_NAME;
  var RovingFocusGroupImpl = React33.forwardRef((props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      orientation,
      loop = false,
      dir,
      currentTabStopId: currentTabStopIdProp,
      defaultCurrentTabStopId,
      onCurrentTabStopIdChange,
      onEntryFocus,
      preventScrollOnEntryFocus = false,
      ...groupProps
    } = props;
    const ref = React33.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const direction = useDirection(dir);
    const [currentTabStopId, setCurrentTabStopId] = useControllableState({
      prop: currentTabStopIdProp,
      defaultProp: defaultCurrentTabStopId ?? null,
      onChange: onCurrentTabStopIdChange,
      caller: GROUP_NAME
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = React33.useState(false);
    const handleEntryFocus = useCallbackRef(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = React33.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = React33.useState(0);
    React33.useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
        return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
      }
    }, [handleEntryFocus]);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      RovingFocusProvider,
      {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: React33.useCallback(
          (tabStopId) => setCurrentTabStopId(tabStopId),
          [setCurrentTabStopId]
        ),
        onItemShiftTab: React33.useCallback(() => setIsTabbingBackOut(true), []),
        onFocusableItemAdd: React33.useCallback(
          () => setFocusableItemsCount((prevCount) => prevCount + 1),
          []
        ),
        onFocusableItemRemove: React33.useCallback(
          () => setFocusableItemsCount((prevCount) => prevCount - 1),
          []
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Primitive.div,
          {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: { outline: "none", ...props.style },
            onMouseDown: composeEventHandlers(props.onMouseDown, () => {
              isClickFocusRef.current = true;
            }),
            onFocus: composeEventHandlers(props.onFocus, (event) => {
              const isKeyboardFocus = !isClickFocusRef.current;
              if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS2);
                event.currentTarget.dispatchEvent(entryFocusEvent);
                if (!entryFocusEvent.defaultPrevented) {
                  const items = getItems().filter((item) => item.focusable);
                  const activeItem = items.find((item) => item.active);
                  const currentItem = items.find((item) => item.id === currentTabStopId);
                  const candidateItems = [activeItem, currentItem, ...items].filter(
                    Boolean
                  );
                  const candidateNodes = candidateItems.map((item) => item.ref.current);
                  focusFirst2(candidateNodes, preventScrollOnEntryFocus);
                }
              }
              isClickFocusRef.current = false;
            }),
            onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
          }
        )
      }
    );
  });
  var ITEM_NAME = "RovingFocusGroupItem";
  var RovingFocusGroupItem = React33.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeRovingFocusGroup,
        focusable = true,
        active = false,
        tabStopId,
        children,
        ...itemProps
      } = props;
      const autoId = useId();
      const id = tabStopId || autoId;
      const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
      const isCurrentTabStop = context.currentTabStopId === id;
      const getItems = useCollection(__scopeRovingFocusGroup);
      const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
      React33.useEffect(() => {
        if (focusable) {
          onFocusableItemAdd();
          return () => onFocusableItemRemove();
        }
      }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        Collection.ItemSlot,
        {
          scope: __scopeRovingFocusGroup,
          id,
          focusable,
          active,
          children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            Primitive.span,
            {
              tabIndex: isCurrentTabStop ? 0 : -1,
              "data-orientation": context.orientation,
              ...itemProps,
              ref: forwardedRef,
              onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
              }),
              onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
              onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                if (event.key === "Tab" && event.shiftKey) {
                  context.onItemShiftTab();
                  return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                  event.preventDefault();
                  const items = getItems().filter((item) => item.focusable);
                  let candidateNodes = items.map((item) => item.ref.current);
                  if (focusIntent === "last") candidateNodes.reverse();
                  else if (focusIntent === "prev" || focusIntent === "next") {
                    if (focusIntent === "prev") candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                  }
                  setTimeout(() => focusFirst2(candidateNodes));
                }
              }),
              children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
            }
          )
        }
      );
    }
  );
  RovingFocusGroupItem.displayName = ITEM_NAME;
  var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
  }
  function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
    if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
  }
  function focusFirst2(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
      candidate.focus({ preventScroll });
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
  }
  function wrapArray(array, startIndex) {
    return array.map((_, index2) => array[(startIndex + index2) % array.length]);
  }
  var Root4 = RovingFocusGroup;
  var Item = RovingFocusGroupItem;

  // node_modules/@radix-ui/number/dist/index.mjs
  function clamp2(value, [min2, max2]) {
    return Math.min(max2, Math.max(min2, value));
  }

  // node_modules/@radix-ui/react-scroll-area/dist/index.mjs
  var dist_exports6 = {};
  __export(dist_exports6, {
    Corner: () => Corner,
    Root: () => Root5,
    ScrollArea: () => ScrollArea,
    ScrollAreaCorner: () => ScrollAreaCorner,
    ScrollAreaScrollbar: () => ScrollAreaScrollbar,
    ScrollAreaThumb: () => ScrollAreaThumb,
    ScrollAreaViewport: () => ScrollAreaViewport,
    Scrollbar: () => Scrollbar,
    Thumb: () => Thumb,
    Viewport: () => Viewport,
    createScrollAreaScope: () => createScrollAreaScope
  });
  var React210 = __toESM(require_react(), 1);
  var React34 = __toESM(require_react(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  function useStateMachine2(initialState, machine) {
    return React34.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState ?? state;
    }, initialState);
  }
  var SCROLL_AREA_NAME = "ScrollArea";
  var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
  var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
  var ScrollArea = React210.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeScrollArea,
        type = "hover",
        dir,
        scrollHideDelay = 600,
        ...scrollAreaProps
      } = props;
      const [scrollArea, setScrollArea] = React210.useState(null);
      const [viewport, setViewport] = React210.useState(null);
      const [content, setContent] = React210.useState(null);
      const [scrollbarX, setScrollbarX] = React210.useState(null);
      const [scrollbarY, setScrollbarY] = React210.useState(null);
      const [cornerWidth, setCornerWidth] = React210.useState(0);
      const [cornerHeight, setCornerHeight] = React210.useState(0);
      const [scrollbarXEnabled, setScrollbarXEnabled] = React210.useState(false);
      const [scrollbarYEnabled, setScrollbarYEnabled] = React210.useState(false);
      const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
      const direction = useDirection(dir);
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        ScrollAreaProvider,
        {
          scope: __scopeScrollArea,
          type,
          dir: direction,
          scrollHideDelay,
          scrollArea,
          viewport,
          onViewportChange: setViewport,
          content,
          onContentChange: setContent,
          scrollbarX,
          onScrollbarXChange: setScrollbarX,
          scrollbarXEnabled,
          onScrollbarXEnabledChange: setScrollbarXEnabled,
          scrollbarY,
          onScrollbarYChange: setScrollbarY,
          scrollbarYEnabled,
          onScrollbarYEnabledChange: setScrollbarYEnabled,
          onCornerWidthChange: setCornerWidth,
          onCornerHeightChange: setCornerHeight,
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            Primitive.div,
            {
              dir: direction,
              ...scrollAreaProps,
              ref: composedRefs,
              style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
                ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
                ...props.style
              }
            }
          )
        }
      );
    }
  );
  ScrollArea.displayName = SCROLL_AREA_NAME;
  var VIEWPORT_NAME = "ScrollAreaViewport";
  var ScrollAreaViewport = React210.forwardRef(
    (props, forwardedRef) => {
      const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
      const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
      const ref = React210.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
            },
            nonce
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          Primitive.div,
          {
            "data-radix-scroll-area-viewport": "",
            ...viewportProps,
            ref: composedRefs,
            style: {
              /**
               * We don't support `visible` because the intention is to have at least one scrollbar
               * if this component is used and `visible` will behave like `auto` in that case
               * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
               *
               * We don't handle `auto` because the intention is for the native implementation
               * to be hidden if using this component. We just want to ensure the node is scrollable
               * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
               * the browser from having to work out whether to render native scrollbars or not,
               * we tell it to with the intention of hiding them in CSS.
               */
              overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
              overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
              ...props.style
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
          }
        )
      ] });
    }
  );
  ScrollAreaViewport.displayName = VIEWPORT_NAME;
  var SCROLLBAR_NAME = "ScrollAreaScrollbar";
  var ScrollAreaScrollbar = React210.forwardRef(
    (props, forwardedRef) => {
      const { forceMount, ...scrollbarProps } = props;
      const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
      const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
      const isHorizontal = props.orientation === "horizontal";
      React210.useEffect(() => {
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return () => {
          isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
      }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
      return context.type === "hover" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
    }
  );
  ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
  var ScrollAreaScrollbarHover = React210.forwardRef((props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = React210.useState(false);
    React210.useEffect(() => {
      const scrollArea = context.scrollArea;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
    }, [context.scrollArea, context.scrollHideDelay]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Presence, { present: forceMount || visible, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      ScrollAreaScrollbarAuto,
      {
        "data-state": visible ? "visible" : "hidden",
        ...scrollbarProps,
        ref: forwardedRef
      }
    ) });
  });
  var ScrollAreaScrollbarScroll = React210.forwardRef((props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === "horizontal";
    const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
    const [state, send] = useStateMachine2("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    React210.useEffect(() => {
      if (state === "idle") {
        const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
        return () => window.clearTimeout(hideTimer);
      }
    }, [state, context.scrollHideDelay, send]);
    React210.useEffect(() => {
      const viewport = context.viewport;
      const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
      if (viewport) {
        let prevScrollPos = viewport[scrollDirection];
        const handleScroll2 = () => {
          const scrollPos = viewport[scrollDirection];
          const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
          if (hasScrollInDirectionChanged) {
            send("SCROLL");
            debounceScrollEnd();
          }
          prevScrollPos = scrollPos;
        };
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
    }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      ScrollAreaScrollbarVisible,
      {
        "data-state": state === "hidden" ? "hidden" : "visible",
        ...scrollbarProps,
        ref: forwardedRef,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
      }
    ) });
  });
  var ScrollAreaScrollbarAuto = React210.forwardRef((props, forwardedRef) => {
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = React210.useState(false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebounceCallback(() => {
      if (context.viewport) {
        const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
        const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
        setVisible(isHorizontal ? isOverflowX : isOverflowY);
      }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Presence, { present: forceMount || visible, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      ScrollAreaScrollbarVisible,
      {
        "data-state": visible ? "visible" : "hidden",
        ...scrollbarProps,
        ref: forwardedRef
      }
    ) });
  });
  var ScrollAreaScrollbarVisible = React210.forwardRef((props, forwardedRef) => {
    const { orientation = "vertical", ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = React210.useRef(null);
    const pointerOffsetRef = React210.useRef(0);
    const [sizes, setSizes] = React210.useState({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    });
    const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = {
      ...scrollbarProps,
      sizes,
      onSizesChange: setSizes,
      hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
      onThumbChange: (thumb) => thumbRef.current = thumb,
      onThumbPointerUp: () => pointerOffsetRef.current = 0,
      onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
    };
    function getScrollPosition(pointerPos, dir) {
      return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === "horizontal") {
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        ScrollAreaScrollbarX,
        {
          ...commonProps,
          ref: forwardedRef,
          onThumbPositionChange: () => {
            if (context.viewport && thumbRef.current) {
              const scrollPos = context.viewport.scrollLeft;
              const offset4 = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
              thumbRef.current.style.transform = `translate3d(${offset4}px, 0, 0)`;
            }
          },
          onWheelScroll: (scrollPos) => {
            if (context.viewport) context.viewport.scrollLeft = scrollPos;
          },
          onDragScroll: (pointerPos) => {
            if (context.viewport) {
              context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
            }
          }
        }
      );
    }
    if (orientation === "vertical") {
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        ScrollAreaScrollbarY,
        {
          ...commonProps,
          ref: forwardedRef,
          onThumbPositionChange: () => {
            if (context.viewport && thumbRef.current) {
              const scrollPos = context.viewport.scrollTop;
              const offset4 = getThumbOffsetFromScroll(scrollPos, sizes);
              thumbRef.current.style.transform = `translate3d(0, ${offset4}px, 0)`;
            }
          },
          onWheelScroll: (scrollPos) => {
            if (context.viewport) context.viewport.scrollTop = scrollPos;
          },
          onDragScroll: (pointerPos) => {
            if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
          }
        }
      );
    }
    return null;
  });
  var ScrollAreaScrollbarX = React210.forwardRef((props, forwardedRef) => {
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = React210.useState();
    const ref = React210.useRef(null);
    const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
    React210.useEffect(() => {
      if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      ScrollAreaScrollbarImpl,
      {
        "data-orientation": "horizontal",
        ...scrollbarProps,
        ref: composeRefs2,
        sizes,
        style: {
          bottom: 0,
          left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
          ...props.style
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollWidth,
              viewport: context.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight)
              }
            });
          }
        }
      }
    );
  });
  var ScrollAreaScrollbarY = React210.forwardRef((props, forwardedRef) => {
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = React210.useState();
    const ref = React210.useRef(null);
    const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
    React210.useEffect(() => {
      if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      ScrollAreaScrollbarImpl,
      {
        "data-orientation": "vertical",
        ...scrollbarProps,
        ref: composeRefs2,
        sizes,
        style: {
          top: 0,
          right: context.dir === "ltr" ? 0 : void 0,
          left: context.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
          ...props.style
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom)
              }
            });
          }
        }
      }
    );
  });
  var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
  var ScrollAreaScrollbarImpl = React210.forwardRef((props, forwardedRef) => {
    const {
      __scopeScrollArea,
      sizes,
      hasThumb,
      onThumbChange,
      onThumbPointerUp,
      onThumbPointerDown,
      onThumbPositionChange,
      onDragScroll,
      onWheelScroll,
      onResize,
      ...scrollbarProps
    } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = React210.useState(null);
    const composeRefs2 = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
    const rectRef = React210.useRef(null);
    const prevWebkitUserSelectRef = React210.useRef("");
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = useCallbackRef(onWheelScroll);
    const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
      if (rectRef.current) {
        const x2 = event.clientX - rectRef.current.left;
        const y = event.clientY - rectRef.current.top;
        onDragScroll({ x: x2, y });
      }
    }
    React210.useEffect(() => {
      const handleWheel = (event) => {
        const element = event.target;
        const isScrollbarWheel = scrollbar?.contains(element);
        if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
      };
      document.addEventListener("wheel", handleWheel, { passive: false });
      return () => document.removeEventListener("wheel", handleWheel, { passive: false });
    }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
    React210.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      ScrollbarProvider,
      {
        scope: __scopeScrollArea,
        scrollbar,
        hasThumb,
        onThumbChange: useCallbackRef(onThumbChange),
        onThumbPointerUp: useCallbackRef(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: useCallbackRef(onThumbPointerDown),
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          Primitive.div,
          {
            ...scrollbarProps,
            ref: composeRefs2,
            style: { position: "absolute", ...scrollbarProps.style },
            onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
              const mainPointer = 0;
              if (event.button === mainPointer) {
                const element = event.target;
                element.setPointerCapture(event.pointerId);
                rectRef.current = scrollbar.getBoundingClientRect();
                prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                document.body.style.webkitUserSelect = "none";
                if (context.viewport) context.viewport.style.scrollBehavior = "auto";
                handleDragScroll(event);
              }
            }),
            onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
            onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
              const element = event.target;
              if (element.hasPointerCapture(event.pointerId)) {
                element.releasePointerCapture(event.pointerId);
              }
              document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
              if (context.viewport) context.viewport.style.scrollBehavior = "";
              rectRef.current = null;
            })
          }
        )
      }
    );
  });
  var THUMB_NAME = "ScrollAreaThumb";
  var ScrollAreaThumb = React210.forwardRef(
    (props, forwardedRef) => {
      const { forceMount, ...thumbProps } = props;
      const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
    }
  );
  var ScrollAreaThumbImpl = React210.forwardRef(
    (props, forwardedRef) => {
      const { __scopeScrollArea, style, ...thumbProps } = props;
      const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
      const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
      const { onThumbPositionChange } = scrollbarContext;
      const composedRef = useComposedRefs(
        forwardedRef,
        (node) => scrollbarContext.onThumbChange(node)
      );
      const removeUnlinkedScrollListenerRef = React210.useRef(void 0);
      const debounceScrollEnd = useDebounceCallback(() => {
        if (removeUnlinkedScrollListenerRef.current) {
          removeUnlinkedScrollListenerRef.current();
          removeUnlinkedScrollListenerRef.current = void 0;
        }
      }, 100);
      React210.useEffect(() => {
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
          const handleScroll2 = () => {
            debounceScrollEnd();
            if (!removeUnlinkedScrollListenerRef.current) {
              const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
              removeUnlinkedScrollListenerRef.current = listener;
              onThumbPositionChange();
            }
          };
          onThumbPositionChange();
          viewport.addEventListener("scroll", handleScroll2);
          return () => viewport.removeEventListener("scroll", handleScroll2);
        }
      }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Primitive.div,
        {
          "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
          ...thumbProps,
          ref: composedRef,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...style
          },
          onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x2 = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({ x: x2, y });
          }),
          onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
        }
      );
    }
  );
  ScrollAreaThumb.displayName = THUMB_NAME;
  var CORNER_NAME = "ScrollAreaCorner";
  var ScrollAreaCorner = React210.forwardRef(
    (props, forwardedRef) => {
      const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
      const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
      const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
      return hasCorner ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
    }
  );
  ScrollAreaCorner.displayName = CORNER_NAME;
  var ScrollAreaCornerImpl = React210.forwardRef((props, forwardedRef) => {
    const { __scopeScrollArea, ...cornerProps } = props;
    const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
    const [width, setWidth] = React210.useState(0);
    const [height, setHeight] = React210.useState(0);
    const hasSize = Boolean(width && height);
    useResizeObserver(context.scrollbarX, () => {
      const height2 = context.scrollbarX?.offsetHeight || 0;
      context.onCornerHeightChange(height2);
      setHeight(height2);
    });
    useResizeObserver(context.scrollbarY, () => {
      const width2 = context.scrollbarY?.offsetWidth || 0;
      context.onCornerWidthChange(width2);
      setWidth(width2);
    });
    return hasSize ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      Primitive.div,
      {
        ...cornerProps,
        ref: forwardedRef,
        style: {
          width,
          height,
          position: "absolute",
          right: context.dir === "ltr" ? 0 : void 0,
          left: context.dir === "rtl" ? 0 : void 0,
          bottom: 0,
          ...props.style
        }
      }
    ) : null;
  });
  function toInt(value) {
    return value ? parseInt(value, 10) : 0;
  }
  function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
  }
  function getThumbSize(sizes) {
    const ratio = getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
  }
  function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset4 = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset4;
    const minPointerPos = sizes.scrollbar.paddingStart + offset4;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
    const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
    return interpolate(pointerPos);
  }
  function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
    const scrollWithoutMomentum = clamp2(scrollPos, scrollClampRange);
    const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
    return interpolate(scrollWithoutMomentum);
  }
  function linearScale(input, output) {
    return (value) => {
      if (input[0] === input[1] || output[0] === output[1]) return output[0];
      const ratio = (output[1] - output[0]) / (input[1] - input[0]);
      return output[0] + ratio * (value - input[0]);
    };
  }
  function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
  }
  var addUnlinkedScrollListener = (node, handler = () => {
  }) => {
    let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
    let rAF = 0;
    (function loop() {
      const position = { left: node.scrollLeft, top: node.scrollTop };
      const isHorizontalScroll = prevPosition.left !== position.left;
      const isVerticalScroll = prevPosition.top !== position.top;
      if (isHorizontalScroll || isVerticalScroll) handler();
      prevPosition = position;
      rAF = window.requestAnimationFrame(loop);
    })();
    return () => window.cancelAnimationFrame(rAF);
  };
  function useDebounceCallback(callback, delay) {
    const handleCallback = useCallbackRef(callback);
    const debounceTimerRef = React210.useRef(0);
    React210.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
    return React210.useCallback(() => {
      window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = window.setTimeout(handleCallback, delay);
    }, [handleCallback, delay]);
  }
  function useResizeObserver(element, onResize) {
    const handleResize = useCallbackRef(onResize);
    useLayoutEffect2(() => {
      let rAF = 0;
      if (element) {
        const resizeObserver = new ResizeObserver(() => {
          cancelAnimationFrame(rAF);
          rAF = window.requestAnimationFrame(handleResize);
        });
        resizeObserver.observe(element);
        return () => {
          window.cancelAnimationFrame(rAF);
          resizeObserver.unobserve(element);
        };
      }
    }, [element, handleResize]);
  }
  var Root5 = ScrollArea;
  var Viewport = ScrollAreaViewport;
  var Scrollbar = ScrollAreaScrollbar;
  var Thumb = ScrollAreaThumb;
  var Corner = ScrollAreaCorner;

  // node_modules/@radix-ui/react-tabs/dist/index.mjs
  var dist_exports7 = {};
  __export(dist_exports7, {
    Content: () => Content3,
    List: () => List,
    Root: () => Root23,
    Tabs: () => Tabs,
    TabsContent: () => TabsContent,
    TabsList: () => TabsList,
    TabsTrigger: () => TabsTrigger,
    Trigger: () => Trigger2,
    createTabsScope: () => createTabsScope
  });
  var React35 = __toESM(require_react(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var TABS_NAME = "Tabs";
  var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
    createRovingFocusGroupScope
  ]);
  var useRovingFocusGroupScope = createRovingFocusGroupScope();
  var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
  var Tabs = React35.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeTabs,
        value: valueProp,
        onValueChange,
        defaultValue,
        orientation = "horizontal",
        dir,
        activationMode = "automatic",
        ...tabsProps
      } = props;
      const direction = useDirection(dir);
      const [value, setValue] = useControllableState({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue ?? "",
        caller: TABS_NAME
      });
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        TabsProvider,
        {
          scope: __scopeTabs,
          baseId: useId(),
          value,
          onValueChange: setValue,
          orientation,
          dir: direction,
          activationMode,
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            Primitive.div,
            {
              dir: direction,
              "data-orientation": orientation,
              ...tabsProps,
              ref: forwardedRef
            }
          )
        }
      );
    }
  );
  Tabs.displayName = TABS_NAME;
  var TAB_LIST_NAME = "TabsList";
  var TabsList = React35.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, loop = true, ...listProps } = props;
      const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Root4,
        {
          asChild: true,
          ...rovingFocusGroupScope,
          orientation: context.orientation,
          dir: context.dir,
          loop,
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            Primitive.div,
            {
              role: "tablist",
              "aria-orientation": context.orientation,
              ...listProps,
              ref: forwardedRef
            }
          )
        }
      );
    }
  );
  TabsList.displayName = TAB_LIST_NAME;
  var TRIGGER_NAME2 = "TabsTrigger";
  var TabsTrigger = React35.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
      const context = useTabsContext(TRIGGER_NAME2, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Item,
        {
          asChild: true,
          ...rovingFocusGroupScope,
          focusable: !disabled,
          active: isSelected,
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            Primitive.button,
            {
              type: "button",
              role: "tab",
              "aria-selected": isSelected,
              "aria-controls": contentId,
              "data-state": isSelected ? "active" : "inactive",
              "data-disabled": disabled ? "" : void 0,
              disabled,
              id: triggerId,
              ...triggerProps,
              ref: forwardedRef,
              onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                  context.onValueChange(value);
                } else {
                  event.preventDefault();
                }
              }),
              onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
              }),
              onFocus: composeEventHandlers(props.onFocus, () => {
                const isAutomaticActivation = context.activationMode !== "manual";
                if (!isSelected && !disabled && isAutomaticActivation) {
                  context.onValueChange(value);
                }
              })
            }
          )
        }
      );
    }
  );
  TabsTrigger.displayName = TRIGGER_NAME2;
  var CONTENT_NAME3 = "TabsContent";
  var TabsContent = React35.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
      const context = useTabsContext(CONTENT_NAME3, __scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      const isMountAnimationPreventedRef = React35.useRef(isSelected);
      React35.useEffect(() => {
        const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
        return () => cancelAnimationFrame(rAF);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Primitive.div,
        {
          "data-state": isSelected ? "active" : "inactive",
          "data-orientation": context.orientation,
          role: "tabpanel",
          "aria-labelledby": triggerId,
          hidden: !present,
          id: contentId,
          tabIndex: 0,
          ...contentProps,
          ref: forwardedRef,
          style: {
            ...props.style,
            animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
          },
          children: present && children
        }
      ) });
    }
  );
  TabsContent.displayName = CONTENT_NAME3;
  function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
  }
  function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
  }
  var Root23 = Tabs;
  var List = TabsList;
  var Trigger2 = TabsTrigger;
  var Content3 = TabsContent;

  // node_modules/@radix-ui/react-tooltip/dist/index.mjs
  var dist_exports9 = {};
  __export(dist_exports9, {
    Arrow: () => Arrow22,
    Content: () => Content22,
    Portal: () => Portal3,
    Provider: () => Provider2,
    Root: () => Root32,
    Tooltip: () => Tooltip,
    TooltipArrow: () => TooltipArrow,
    TooltipContent: () => TooltipContent,
    TooltipPortal: () => TooltipPortal,
    TooltipProvider: () => TooltipProvider,
    TooltipTrigger: () => TooltipTrigger,
    Trigger: () => Trigger3,
    createTooltipScope: () => createTooltipScope
  });
  var React36 = __toESM(require_react(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
    createPopperScope
  ]);
  var usePopperScope = createPopperScope();
  var PROVIDER_NAME = "TooltipProvider";
  var DEFAULT_DELAY_DURATION = 700;
  var TOOLTIP_OPEN = "tooltip.open";
  var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
  var TooltipProvider = (props) => {
    const {
      __scopeTooltip,
      delayDuration = DEFAULT_DELAY_DURATION,
      skipDelayDuration = 300,
      disableHoverableContent = false,
      children
    } = props;
    const isOpenDelayedRef = React36.useRef(true);
    const isPointerInTransitRef = React36.useRef(false);
    const skipDelayTimerRef = React36.useRef(0);
    React36.useEffect(() => {
      const skipDelayTimer = skipDelayTimerRef.current;
      return () => window.clearTimeout(skipDelayTimer);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      TooltipProviderContextProvider,
      {
        scope: __scopeTooltip,
        isOpenDelayedRef,
        delayDuration,
        onOpen: React36.useCallback(() => {
          window.clearTimeout(skipDelayTimerRef.current);
          isOpenDelayedRef.current = false;
        }, []),
        onClose: React36.useCallback(() => {
          window.clearTimeout(skipDelayTimerRef.current);
          skipDelayTimerRef.current = window.setTimeout(
            () => isOpenDelayedRef.current = true,
            skipDelayDuration
          );
        }, [skipDelayDuration]),
        isPointerInTransitRef,
        onPointerInTransitChange: React36.useCallback((inTransit) => {
          isPointerInTransitRef.current = inTransit;
        }, []),
        disableHoverableContent,
        children
      }
    );
  };
  TooltipProvider.displayName = PROVIDER_NAME;
  var TOOLTIP_NAME = "Tooltip";
  var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
  var Tooltip = (props) => {
    const {
      __scopeTooltip,
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      disableHoverableContent: disableHoverableContentProp,
      delayDuration: delayDurationProp
    } = props;
    const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const [trigger, setTrigger] = React36.useState(null);
    const contentId = useId();
    const openTimerRef = React36.useRef(0);
    const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
    const delayDuration = delayDurationProp ?? providerContext.delayDuration;
    const wasOpenDelayedRef = React36.useRef(false);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: (open2) => {
        if (open2) {
          providerContext.onOpen();
          document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
        } else {
          providerContext.onClose();
        }
        onOpenChange?.(open2);
      },
      caller: TOOLTIP_NAME
    });
    const stateAttribute = React36.useMemo(() => {
      return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
    }, [open]);
    const handleOpen = React36.useCallback(() => {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = 0;
      wasOpenDelayedRef.current = false;
      setOpen(true);
    }, [setOpen]);
    const handleClose = React36.useCallback(() => {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = 0;
      setOpen(false);
    }, [setOpen]);
    const handleDelayedOpen = React36.useCallback(() => {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = window.setTimeout(() => {
        wasOpenDelayedRef.current = true;
        setOpen(true);
        openTimerRef.current = 0;
      }, delayDuration);
    }, [delayDuration, setOpen]);
    React36.useEffect(() => {
      return () => {
        if (openTimerRef.current) {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = 0;
        }
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Root22, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      TooltipContextProvider,
      {
        scope: __scopeTooltip,
        contentId,
        open,
        stateAttribute,
        trigger,
        onTriggerChange: setTrigger,
        onTriggerEnter: React36.useCallback(() => {
          if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
          else handleOpen();
        }, [providerContext.isOpenDelayedRef, handleDelayedOpen, handleOpen]),
        onTriggerLeave: React36.useCallback(() => {
          if (disableHoverableContent) {
            handleClose();
          } else {
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = 0;
          }
        }, [handleClose, disableHoverableContent]),
        onOpen: handleOpen,
        onClose: handleClose,
        disableHoverableContent,
        children
      }
    ) });
  };
  Tooltip.displayName = TOOLTIP_NAME;
  var TRIGGER_NAME3 = "TooltipTrigger";
  var TooltipTrigger = React36.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTooltip, ...triggerProps } = props;
      const context = useTooltipContext(TRIGGER_NAME3, __scopeTooltip);
      const providerContext = useTooltipProviderContext(TRIGGER_NAME3, __scopeTooltip);
      const popperScope = usePopperScope(__scopeTooltip);
      const ref = React36.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
      const isPointerDownRef = React36.useRef(false);
      const hasPointerMoveOpenedRef = React36.useRef(false);
      const handlePointerUp = React36.useCallback(() => isPointerDownRef.current = false, []);
      React36.useEffect(() => {
        return () => document.removeEventListener("pointerup", handlePointerUp);
      }, [handlePointerUp]);
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        Primitive.button,
        {
          "aria-describedby": context.open ? context.contentId : void 0,
          "data-state": context.stateAttribute,
          ...triggerProps,
          ref: composedRefs,
          onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
            if (event.pointerType === "touch") return;
            if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
              context.onTriggerEnter();
              hasPointerMoveOpenedRef.current = true;
            }
          }),
          onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
            context.onTriggerLeave();
            hasPointerMoveOpenedRef.current = false;
          }),
          onPointerDown: composeEventHandlers(props.onPointerDown, () => {
            if (context.open) {
              context.onClose();
            }
            isPointerDownRef.current = true;
            document.addEventListener("pointerup", handlePointerUp, { once: true });
          }),
          onFocus: composeEventHandlers(props.onFocus, () => {
            if (!isPointerDownRef.current) context.onOpen();
          }),
          onBlur: composeEventHandlers(props.onBlur, context.onClose),
          onClick: composeEventHandlers(props.onClick, context.onClose)
        }
      ) });
    }
  );
  TooltipTrigger.displayName = TRIGGER_NAME3;
  var PORTAL_NAME3 = "TooltipPortal";
  var [PortalProvider2, usePortalContext2] = createTooltipContext(PORTAL_NAME3, {
    forceMount: void 0
  });
  var TooltipPortal = (props) => {
    const { __scopeTooltip, forceMount, children, container } = props;
    const context = useTooltipContext(PORTAL_NAME3, __scopeTooltip);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(PortalProvider2, { scope: __scopeTooltip, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Portal, { asChild: true, container, children }) }) });
  };
  TooltipPortal.displayName = PORTAL_NAME3;
  var CONTENT_NAME4 = "TooltipContent";
  var TooltipContent = React36.forwardRef(
    (props, forwardedRef) => {
      const portalContext = usePortalContext2(CONTENT_NAME4, props.__scopeTooltip);
      const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
      const context = useTooltipContext(CONTENT_NAME4, props.__scopeTooltip);
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
    }
  );
  var TooltipContentHoverable = React36.forwardRef((props, forwardedRef) => {
    const context = useTooltipContext(CONTENT_NAME4, props.__scopeTooltip);
    const providerContext = useTooltipProviderContext(CONTENT_NAME4, props.__scopeTooltip);
    const ref = React36.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [pointerGraceArea, setPointerGraceArea] = React36.useState(null);
    const { trigger, onClose } = context;
    const content = ref.current;
    const { onPointerInTransitChange } = providerContext;
    const handleRemoveGraceArea = React36.useCallback(() => {
      setPointerGraceArea(null);
      onPointerInTransitChange(false);
    }, [onPointerInTransitChange]);
    const handleCreateGraceArea = React36.useCallback(
      (event, hoverTarget) => {
        const currentTarget = event.currentTarget;
        const exitPoint = { x: event.clientX, y: event.clientY };
        const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
        const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
        const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
        const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
        setPointerGraceArea(graceArea);
        onPointerInTransitChange(true);
      },
      [onPointerInTransitChange]
    );
    React36.useEffect(() => {
      return () => handleRemoveGraceArea();
    }, [handleRemoveGraceArea]);
    React36.useEffect(() => {
      if (trigger && content) {
        const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
        const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
        trigger.addEventListener("pointerleave", handleTriggerLeave);
        content.addEventListener("pointerleave", handleContentLeave);
        return () => {
          trigger.removeEventListener("pointerleave", handleTriggerLeave);
          content.removeEventListener("pointerleave", handleContentLeave);
        };
      }
    }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
    React36.useEffect(() => {
      if (pointerGraceArea) {
        const handleTrackPointerGrace = (event) => {
          const target = event.target;
          const pointerPosition = { x: event.clientX, y: event.clientY };
          const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
          const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
          if (hasEnteredTarget) {
            handleRemoveGraceArea();
          } else if (isPointerOutsideGraceArea) {
            handleRemoveGraceArea();
            onClose();
          }
        };
        document.addEventListener("pointermove", handleTrackPointerGrace);
        return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
      }
    }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TooltipContentImpl, { ...props, ref: composedRefs });
  });
  var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
  var Slottable2 = createSlottable("TooltipContent");
  var TooltipContentImpl = React36.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeTooltip,
        children,
        "aria-label": ariaLabel,
        onEscapeKeyDown,
        onPointerDownOutside,
        ...contentProps
      } = props;
      const context = useTooltipContext(CONTENT_NAME4, __scopeTooltip);
      const popperScope = usePopperScope(__scopeTooltip);
      const { onClose } = context;
      React36.useEffect(() => {
        document.addEventListener(TOOLTIP_OPEN, onClose);
        return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
      }, [onClose]);
      React36.useEffect(() => {
        if (context.trigger) {
          const handleScroll2 = (event) => {
            const target = event.target;
            if (target?.contains(context.trigger)) onClose();
          };
          window.addEventListener("scroll", handleScroll2, { capture: true });
          return () => window.removeEventListener("scroll", handleScroll2, { capture: true });
        }
      }, [context.trigger, onClose]);
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        DismissableLayer,
        {
          asChild: true,
          disableOutsidePointerEvents: false,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside: (event) => event.preventDefault(),
          onDismiss: onClose,
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
            Content2,
            {
              "data-state": context.stateAttribute,
              ...popperScope,
              ...contentProps,
              ref: forwardedRef,
              style: {
                ...contentProps.style,
                // re-namespace exposed content custom properties
                ...{
                  "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                }
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Slottable2, { children }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Root, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
              ]
            }
          )
        }
      );
    }
  );
  TooltipContent.displayName = CONTENT_NAME4;
  var ARROW_NAME2 = "TooltipArrow";
  var TooltipArrow = React36.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTooltip, ...arrowProps } = props;
      const popperScope = usePopperScope(__scopeTooltip);
      const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
        ARROW_NAME2,
        __scopeTooltip
      );
      return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
    }
  );
  TooltipArrow.displayName = ARROW_NAME2;
  function getExitSideFromRect(point, rect) {
    const top = Math.abs(rect.top - point.y);
    const bottom = Math.abs(rect.bottom - point.y);
    const right = Math.abs(rect.right - point.x);
    const left = Math.abs(rect.left - point.x);
    switch (Math.min(top, bottom, right, left)) {
      case left:
        return "left";
      case right:
        return "right";
      case top:
        return "top";
      case bottom:
        return "bottom";
      default:
        throw new Error("unreachable");
    }
  }
  function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
    const paddedExitPoints = [];
    switch (exitSide) {
      case "top":
        paddedExitPoints.push(
          { x: exitPoint.x - padding, y: exitPoint.y + padding },
          { x: exitPoint.x + padding, y: exitPoint.y + padding }
        );
        break;
      case "bottom":
        paddedExitPoints.push(
          { x: exitPoint.x - padding, y: exitPoint.y - padding },
          { x: exitPoint.x + padding, y: exitPoint.y - padding }
        );
        break;
      case "left":
        paddedExitPoints.push(
          { x: exitPoint.x + padding, y: exitPoint.y - padding },
          { x: exitPoint.x + padding, y: exitPoint.y + padding }
        );
        break;
      case "right":
        paddedExitPoints.push(
          { x: exitPoint.x - padding, y: exitPoint.y - padding },
          { x: exitPoint.x - padding, y: exitPoint.y + padding }
        );
        break;
    }
    return paddedExitPoints;
  }
  function getPointsFromRect(rect) {
    const { top, right, bottom, left } = rect;
    return [
      { x: left, y: top },
      { x: right, y: top },
      { x: right, y: bottom },
      { x: left, y: bottom }
    ];
  }
  function isPointInPolygon(point, polygon) {
    const { x: x2, y } = point;
    let inside = false;
    for (let i6 = 0, j = polygon.length - 1; i6 < polygon.length; j = i6++) {
      const ii = polygon[i6];
      const jj = polygon[j];
      const xi = ii.x;
      const yi = ii.y;
      const xj = jj.x;
      const yj = jj.y;
      const intersect = yi > y !== yj > y && x2 < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }
  function getHull(points) {
    const newPoints = points.slice();
    newPoints.sort((a17, b3) => {
      if (a17.x < b3.x) return -1;
      else if (a17.x > b3.x) return 1;
      else if (a17.y < b3.y) return -1;
      else if (a17.y > b3.y) return 1;
      else return 0;
    });
    return getHullPresorted(newPoints);
  }
  function getHullPresorted(points) {
    if (points.length <= 1) return points.slice();
    const upperHull = [];
    for (let i6 = 0; i6 < points.length; i6++) {
      const p15 = points[i6];
      while (upperHull.length >= 2) {
        const q = upperHull[upperHull.length - 1];
        const r26 = upperHull[upperHull.length - 2];
        if ((q.x - r26.x) * (p15.y - r26.y) >= (q.y - r26.y) * (p15.x - r26.x)) upperHull.pop();
        else break;
      }
      upperHull.push(p15);
    }
    upperHull.pop();
    const lowerHull = [];
    for (let i6 = points.length - 1; i6 >= 0; i6--) {
      const p15 = points[i6];
      while (lowerHull.length >= 2) {
        const q = lowerHull[lowerHull.length - 1];
        const r26 = lowerHull[lowerHull.length - 2];
        if ((q.x - r26.x) * (p15.y - r26.y) >= (q.y - r26.y) * (p15.x - r26.x)) lowerHull.pop();
        else break;
      }
      lowerHull.push(p15);
    }
    lowerHull.pop();
    if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
      return upperHull;
    } else {
      return upperHull.concat(lowerHull);
    }
  }
  var Provider2 = TooltipProvider;
  var Root32 = Tooltip;
  var Trigger3 = TooltipTrigger;
  var Portal3 = TooltipPortal;
  var Content22 = TooltipContent;
  var Arrow22 = TooltipArrow;

  // node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js
  var o = { asChild: { type: "boolean" } };

  // node_modules/@radix-ui/themes/dist/esm/props/width.props.js
  var t = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: true }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: true }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/props/height.props.js
  var e = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: true }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: true }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/components/dialog.props.js
  var r = ["1", "2", "3", "4"];
  var s = { ...o, align: { type: "enum", className: "rt-r-align", values: ["start", "center"], default: "center" }, size: { type: "enum", className: "rt-r-size", values: r, default: "3", responsive: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "600px" }, ...e };

  // node_modules/@radix-ui/themes/dist/esm/components/heading.js
  var o5 = __toESM(require_react(), 1);
  var import_classnames2 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/props/color.prop.js
  var o2 = ["gray", "gold", "bronze", "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "lime", "mint", "sky"];
  var e2 = ["auto", "gray", "mauve", "slate", "sage", "olive", "sand"];
  var r2 = { color: { type: "enum", values: o2, default: void 0 } };
  var s2 = { color: { type: "enum", values: o2, default: "" } };

  // node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js
  var o3 = { highContrast: { type: "boolean", className: "rt-high-contrast", default: void 0 } };

  // node_modules/@radix-ui/themes/dist/esm/props/leading-trim.prop.js
  var e3 = ["normal", "start", "end", "both"];
  var r3 = { trim: { type: "enum", className: "rt-r-lt", values: e3, responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/props/text-align.prop.js
  var e4 = ["left", "center", "right"];
  var t2 = { align: { type: "enum", className: "rt-r-ta", values: e4, responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/props/text-wrap.prop.js
  var e5 = ["wrap", "nowrap", "pretty", "balance"];
  var r4 = { wrap: { type: "enum", className: "rt-r-tw", values: e5, responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/props/truncate.prop.js
  var e6 = { truncate: { type: "boolean", className: "rt-truncate" } };

  // node_modules/@radix-ui/themes/dist/esm/props/weight.prop.js
  var e7 = ["light", "regular", "medium", "bold"];
  var t3 = { weight: { type: "enum", className: "rt-r-weight", values: e7, responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/components/heading.props.js
  var m = ["h1", "h2", "h3", "h4", "h5", "h6"];
  var a = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var n = { as: { type: "enum", values: m, default: "h1" }, ...o, size: { type: "enum", className: "rt-r-size", values: a, default: "6", responsive: true }, ...t3, ...t2, ...r3, ...e6, ...r4, ...r2, ...o3 };

  // node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js
  var import_classnames = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/props/prop-def.js
  var e8 = ["initial", "xs", "sm", "md", "lg", "xl"];
  var r5 = new Set(e8);

  // node_modules/@radix-ui/themes/dist/esm/helpers/has-own-property.js
  function e9(n12, r26) {
    return Object.prototype.hasOwnProperty.call(n12, r26);
  }

  // node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js
  function r6(e24) {
    return typeof e24 == "object" && e24 !== null && Object.keys(e24).some((s13) => r5.has(s13));
  }

  // node_modules/@radix-ui/themes/dist/esm/helpers/get-responsive-styles.js
  function R({ className: r26, customProperties: s13, ...i6 }) {
    const p15 = g({ allowArbitraryValues: true, className: r26, ...i6 }), n12 = m2({ customProperties: s13, ...i6 });
    return [p15, n12];
  }
  function g({ allowArbitraryValues: r26, value: s13, className: i6, propValues: p15, parseValue: n12 = (e24) => e24 }) {
    const e24 = [];
    if (s13) {
      if (typeof s13 == "string" && p15.includes(s13)) return l(i6, s13, n12);
      if (r6(s13)) {
        const t17 = s13;
        for (const o22 in t17) {
          if (!e9(t17, o22) || !r5.has(o22)) continue;
          const u5 = t17[o22];
          if (u5 !== void 0) {
            if (p15.includes(u5)) {
              const f12 = l(i6, u5, n12), v3 = o22 === "initial" ? f12 : `${o22}:${f12}`;
              e24.push(v3);
            } else if (r26) {
              const f12 = o22 === "initial" ? i6 : `${o22}:${i6}`;
              e24.push(f12);
            }
          }
        }
        return e24.join(" ");
      }
      if (r26) return i6;
    }
  }
  function l(r26, s13, i6) {
    const p15 = r26 ? "-" : "", n12 = i6(s13), e24 = n12?.startsWith("-"), t17 = e24 ? "-" : "", o22 = e24 ? n12?.substring(1) : n12;
    return `${t17}${r26}${p15}${o22}`;
  }
  function m2({ customProperties: r26, value: s13, propValues: i6, parseValue: p15 = (n12) => n12 }) {
    let n12 = {};
    if (!(!s13 || typeof s13 == "string" && i6.includes(s13))) {
      if (typeof s13 == "string" && (n12 = Object.fromEntries(r26.map((e24) => [e24, s13]))), r6(s13)) {
        const e24 = s13;
        for (const t17 in e24) {
          if (!e9(e24, t17) || !r5.has(t17)) continue;
          const o22 = e24[t17];
          if (!i6.includes(o22)) for (const u5 of r26) n12 = { [t17 === "initial" ? u5 : `${u5}-${t17}`]: o22, ...n12 };
        }
      }
      for (const e24 in n12) {
        const t17 = n12[e24];
        t17 !== void 0 && (n12[e24] = p15(t17));
      }
      return n12;
    }
  }

  // node_modules/@radix-ui/themes/dist/esm/helpers/merge-styles.js
  function l2(...t17) {
    let e24 = {};
    for (const n12 of t17) n12 && (e24 = { ...e24, ...n12 });
    return Object.keys(e24).length ? e24 : void 0;
  }

  // node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js
  function N(...r26) {
    return Object.assign({}, ...r26);
  }
  function v(r26, ...m7) {
    let t17, l7;
    const a17 = { ...r26 }, f12 = N(...m7);
    for (const n12 in f12) {
      let s13 = a17[n12];
      const e24 = f12[n12];
      if (e24.default !== void 0 && s13 === void 0 && (s13 = e24.default), e24.type === "enum" && ![e24.default, ...e24.values].includes(s13) && !r6(s13) && (s13 = e24.default), a17[n12] = s13, "className" in e24 && e24.className) {
        delete a17[n12];
        const u5 = "responsive" in e24;
        if (!s13 || r6(s13) && !u5) continue;
        if (r6(s13) && (e24.default !== void 0 && s13.initial === void 0 && (s13.initial = e24.default), e24.type === "enum" && ([e24.default, ...e24.values].includes(s13.initial) || (s13.initial = e24.default))), e24.type === "enum") {
          const i6 = g({ allowArbitraryValues: false, value: s13, className: e24.className, propValues: e24.values, parseValue: e24.parseValue });
          t17 = (0, import_classnames.default)(t17, i6);
          continue;
        }
        if (e24.type === "string" || e24.type === "enum | string") {
          const i6 = e24.type === "string" ? [] : e24.values, [d8, y] = R({ className: e24.className, customProperties: e24.customProperties, propValues: i6, parseValue: e24.parseValue, value: s13 });
          l7 = l2(l7, y), t17 = (0, import_classnames.default)(t17, d8);
          continue;
        }
        if (e24.type === "boolean" && s13) {
          t17 = (0, import_classnames.default)(t17, e24.className);
          continue;
        }
      }
    }
    return a17.className = (0, import_classnames.default)(t17, r26.className), a17.style = l2(l7, r26.style), a17;
  }

  // node_modules/@radix-ui/themes/dist/esm/props/margin.props.js
  var e10 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
  var r7 = { m: { type: "enum | string", values: e10, responsive: true, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: e10, responsive: true, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: e10, responsive: true, className: "rt-r-ml", customProperties: ["--ml"] } };

  // node_modules/@radix-ui/themes/dist/esm/components/heading.js
  var r8 = o5.forwardRef((p15, t17) => {
    const { children: e24, className: s13, asChild: a17, as: n12 = "h1", color: i6, ...m7 } = v(p15, n, r7);
    return o5.createElement(dist_exports.Root, { "data-accent-color": i6, ...m7, ref: t17, className: (0, import_classnames2.default)("rt-Heading", s13) }, a17 ? e24 : o5.createElement(n12, null, e24));
  });
  r8.displayName = "Heading";

  // node_modules/@radix-ui/themes/dist/esm/components/text.js
  var o6 = __toESM(require_react(), 1);
  var import_classnames3 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/text.props.js
  var m3 = ["span", "div", "label", "p"];
  var a2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var n2 = { as: { type: "enum", values: m3, default: "span" }, ...o, size: { type: "enum", className: "rt-r-size", values: a2, responsive: true }, ...t3, ...t2, ...r3, ...e6, ...r4, ...r2, ...o3 };

  // node_modules/@radix-ui/themes/dist/esm/components/text.js
  var p = o6.forwardRef((t17, r26) => {
    const { children: e24, className: s13, asChild: m7, as: a17 = "span", color: n12, ...P4 } = v(t17, n2, r7);
    return o6.createElement(dist_exports.Root, { "data-accent-color": n12, ...P4, ref: r26, className: (0, import_classnames3.default)("rt-Text", s13) }, m7 ? e24 : o6.createElement(a17, null, e24));
  });
  p.displayName = "Text";

  // node_modules/@radix-ui/themes/dist/esm/components/theme.js
  var e12 = __toESM(require_react(), 1);
  var import_classnames4 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/helpers/get-matching-gray-color.js
  function a3(e24) {
    switch (e24) {
      case "tomato":
      case "red":
      case "ruby":
      case "crimson":
      case "pink":
      case "plum":
      case "purple":
      case "violet":
        return "mauve";
      case "iris":
      case "indigo":
      case "blue":
      case "sky":
      case "cyan":
        return "slate";
      case "teal":
      case "jade":
      case "mint":
      case "green":
        return "sage";
      case "grass":
      case "lime":
        return "olive";
      case "yellow":
      case "amber":
      case "orange":
      case "brown":
      case "gold":
      case "bronze":
        return "sand";
      case "gray":
        return "gray";
    }
  }

  // node_modules/@radix-ui/themes/dist/esm/props/radius.prop.js
  var e11 = ["none", "small", "medium", "large", "full"];
  var r9 = { radius: { type: "enum", values: e11, default: void 0 } };

  // node_modules/@radix-ui/themes/dist/esm/components/theme.props.js
  var p2 = ["inherit", "light", "dark"];
  var t4 = ["solid", "translucent"];
  var n3 = ["90%", "95%", "100%", "105%", "110%"];
  var s3 = { ...o, hasBackground: { type: "boolean", default: true }, appearance: { type: "enum", values: p2, default: "inherit" }, accentColor: { type: "enum", values: o2, default: "indigo" }, grayColor: { type: "enum", values: e2, default: "auto" }, panelBackground: { type: "enum", values: t4, default: "translucent" }, radius: { type: "enum", values: e11, default: "medium" }, scaling: { type: "enum", values: n3, default: "100%" } };

  // node_modules/@radix-ui/themes/dist/esm/components/theme.js
  var d2 = () => {
  };
  var P = e12.createContext(void 0);
  var R2 = e12.forwardRef((a17, s13) => e12.useContext(P) === void 0 ? e12.createElement(dist_exports9.Provider, { delayDuration: 200 }, e12.createElement(dist_exports3.Provider, { dir: "ltr" }, e12.createElement(I, { ...a17, ref: s13 }))) : e12.createElement(A, { ...a17, ref: s13 }));
  R2.displayName = "Theme";
  var I = e12.forwardRef((a17, s13) => {
    const { appearance: r26 = s3.appearance.default, accentColor: c4 = s3.accentColor.default, grayColor: l7 = s3.grayColor.default, panelBackground: p15 = s3.panelBackground.default, radius: n12 = s3.radius.default, scaling: t17 = s3.scaling.default, hasBackground: i6 = s3.hasBackground.default, ...u5 } = a17, [h, m7] = e12.useState(r26);
    e12.useEffect(() => m7(r26), [r26]);
    const [y, g3] = e12.useState(c4);
    e12.useEffect(() => g3(c4), [c4]);
    const [v3, C] = e12.useState(l7);
    e12.useEffect(() => C(l7), [l7]);
    const [k, f12] = e12.useState(p15);
    e12.useEffect(() => f12(p15), [p15]);
    const [B2, x2] = e12.useState(n12);
    e12.useEffect(() => x2(n12), [n12]);
    const [T2, b3] = e12.useState(t17);
    return e12.useEffect(() => b3(t17), [t17]), e12.createElement(A, { ...u5, ref: s13, isRoot: true, hasBackground: i6, appearance: h, accentColor: y, grayColor: v3, panelBackground: k, radius: B2, scaling: T2, onAppearanceChange: m7, onAccentColorChange: g3, onGrayColorChange: C, onPanelBackgroundChange: f12, onRadiusChange: x2, onScalingChange: b3 });
  });
  I.displayName = "ThemeRoot";
  var A = e12.forwardRef((a17, s13) => {
    const r26 = e12.useContext(P), { asChild: c4, isRoot: l7, hasBackground: p15, appearance: n12 = r26?.appearance ?? s3.appearance.default, accentColor: t17 = r26?.accentColor ?? s3.accentColor.default, grayColor: i6 = r26?.resolvedGrayColor ?? s3.grayColor.default, panelBackground: u5 = r26?.panelBackground ?? s3.panelBackground.default, radius: h = r26?.radius ?? s3.radius.default, scaling: m7 = r26?.scaling ?? s3.scaling.default, onAppearanceChange: y = d2, onAccentColorChange: g3 = d2, onGrayColorChange: v3 = d2, onPanelBackgroundChange: C = d2, onRadiusChange: k = d2, onScalingChange: f12 = d2, ...B2 } = a17, x2 = c4 ? dist_exports.Root : "div", T2 = i6 === "auto" ? a3(t17) : i6, b3 = a17.appearance === "light" || a17.appearance === "dark", S2 = p15 === void 0 ? l7 || b3 : p15;
    return e12.createElement(P.Provider, { value: e12.useMemo(() => ({ appearance: n12, accentColor: t17, grayColor: i6, resolvedGrayColor: T2, panelBackground: u5, radius: h, scaling: m7, onAppearanceChange: y, onAccentColorChange: g3, onGrayColorChange: v3, onPanelBackgroundChange: C, onRadiusChange: k, onScalingChange: f12 }), [n12, t17, i6, T2, u5, h, m7, y, g3, v3, C, k, f12]) }, e12.createElement(x2, { "data-is-root-theme": l7 ? "true" : "false", "data-accent-color": t17, "data-gray-color": T2, "data-has-background": S2 ? "true" : "false", "data-panel-background": u5, "data-radius": h, "data-scaling": m7, ref: s13, ...B2, className: (0, import_classnames4.default)("radix-themes", { light: n12 === "light", dark: n12 === "dark" }, B2.className) }));
  });
  A.displayName = "ThemeImpl";

  // node_modules/@radix-ui/themes/dist/esm/helpers/require-react-element.js
  var o7 = __toESM(require_react(), 1);
  var a4 = (t17) => {
    if (!o7.isValidElement(t17)) throw Error(`Expected a single React Element child, but got: ${o7.Children.toArray(t17).map((e24) => typeof e24 == "object" && "type" in e24 && typeof e24.type == "string" ? e24.type : typeof e24).join(", ")}`);
    return t17;
  };

  // node_modules/@radix-ui/themes/dist/esm/helpers/get-subtree.js
  var a5 = __toESM(require_react(), 1);
  function d3(i6, e24) {
    const { asChild: r26, children: c4 } = i6;
    if (!r26) return typeof e24 == "function" ? e24(c4) : e24;
    const t17 = a5.Children.only(c4);
    return a5.cloneElement(t17, { children: typeof e24 == "function" ? e24(t17.props.children) : e24 });
  }

  // node_modules/@radix-ui/themes/dist/esm/components/badge.js
  var o8 = __toESM(require_react(), 1);
  var import_classnames5 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/badge.props.js
  var t5 = ["1", "2", "3"];
  var a6 = ["solid", "soft", "surface", "outline"];
  var p3 = { ...o, size: { type: "enum", className: "rt-r-size", values: t5, default: "1", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a6, default: "soft" }, ...s2, ...o3, ...r9 };

  // node_modules/@radix-ui/themes/dist/esm/components/badge.js
  var e13 = o8.forwardRef((r26, p15) => {
    const { asChild: t17, className: s13, color: a17, radius: m7, ...n12 } = v(r26, p3, r7), d8 = t17 ? dist_exports.Root : "span";
    return o8.createElement(d8, { "data-accent-color": a17, "data-radius": m7, ...n12, ref: p15, className: (0, import_classnames5.default)("rt-reset", "rt-Badge", s13) });
  });
  e13.displayName = "Badge";

  // node_modules/@radix-ui/themes/dist/esm/components/box.js
  var o10 = __toESM(require_react(), 1);
  var import_classnames6 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/slot.js
  var l3 = dist_exports.Root;
  var e14 = dist_exports.Root;
  var r10 = dist_exports.Slottable;

  // node_modules/@radix-ui/themes/dist/esm/components/box.props.js
  var s4 = ["div", "span"];
  var o9 = ["none", "inline", "inline-block", "block", "contents"];
  var p4 = { as: { type: "enum", values: s4, default: "div" }, ...o, display: { type: "enum", className: "rt-r-display", values: o9, responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/props/padding.props.js
  var e15 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var p5 = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: e15, responsive: true }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: e15, responsive: true }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: e15, responsive: true }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: e15, responsive: true }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: e15, responsive: true }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: e15, responsive: true }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: e15, responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/props/layout.props.js
  var r11 = ["visible", "hidden", "clip", "scroll", "auto"];
  var i = ["static", "relative", "absolute", "fixed", "sticky"];
  var e16 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
  var p6 = ["0", "1"];
  var n4 = ["0", "1"];
  var a7 = ["start", "center", "end", "baseline", "stretch"];
  var u = ["start", "center", "end", "baseline", "stretch"];
  var l4 = { ...p5, ...t, ...e, position: { type: "enum", className: "rt-r-position", values: i, responsive: true }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: e16, responsive: true }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: e16, responsive: true }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: e16, responsive: true }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: e16, responsive: true }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: e16, responsive: true }, overflow: { type: "enum", className: "rt-r-overflow", values: r11, responsive: true }, overflowX: { type: "enum", className: "rt-r-ox", values: r11, responsive: true }, overflowY: { type: "enum", className: "rt-r-oy", values: r11, responsive: true }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: true }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: p6, responsive: true }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: n4, responsive: true }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: true }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: true }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: true }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: true }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: true }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: true }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: true }, alignSelf: { type: "enum", className: "rt-r-as", values: a7, responsive: true }, justifySelf: { type: "enum", className: "rt-r-js", values: u, responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/components/box.js
  var p7 = o10.forwardRef((r26, s13) => {
    const { className: t17, asChild: e24, as: m7 = "div", ...a17 } = v(r26, p4, l4, r7);
    return o10.createElement(e24 ? e14 : m7, { ...a17, ref: s13, className: (0, import_classnames6.default)("rt-Box", t17) });
  });
  p7.displayName = "Box";

  // node_modules/@radix-ui/themes/dist/esm/components/_internal/base-button.js
  var o13 = __toESM(require_react(), 1);
  var import_classnames9 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/_internal/base-button.props.js
  var t6 = ["1", "2", "3", "4"];
  var a8 = ["classic", "solid", "soft", "surface", "outline", "ghost"];
  var i2 = { ...o, size: { type: "enum", className: "rt-r-size", values: t6, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a8, default: "solid" }, ...s2, ...o3, ...r9, loading: { type: "boolean", className: "rt-loading", default: false } };

  // node_modules/@radix-ui/themes/dist/esm/components/flex.js
  var o12 = __toESM(require_react(), 1);
  var import_classnames7 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/props/gap.props.js
  var e17 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var p8 = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: e17, responsive: true }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: e17, responsive: true }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: e17, responsive: true } };

  // node_modules/@radix-ui/themes/dist/esm/components/flex.props.js
  var t7 = ["div", "span"];
  var p9 = ["none", "inline-flex", "flex"];
  var a9 = ["row", "column", "row-reverse", "column-reverse"];
  var o11 = ["start", "center", "end", "baseline", "stretch"];
  var n6 = ["start", "center", "end", "between"];
  var l5 = ["nowrap", "wrap", "wrap-reverse"];
  var u2 = { as: { type: "enum", values: t7, default: "div" }, ...o, display: { type: "enum", className: "rt-r-display", values: p9, responsive: true }, direction: { type: "enum", className: "rt-r-fd", values: a9, responsive: true }, align: { type: "enum", className: "rt-r-ai", values: o11, responsive: true }, justify: { type: "enum", className: "rt-r-jc", values: n6, parseValue: f2, responsive: true }, wrap: { type: "enum", className: "rt-r-fw", values: l5, responsive: true }, ...p8 };
  function f2(e24) {
    return e24 === "between" ? "space-between" : e24;
  }

  // node_modules/@radix-ui/themes/dist/esm/components/flex.js
  var p10 = o12.forwardRef((r26, e24) => {
    const { className: s13, asChild: t17, as: m7 = "div", ...l7 } = v(r26, u2, l4, r7);
    return o12.createElement(t17 ? e14 : m7, { ...l7, ref: e24, className: (0, import_classnames7.default)("rt-Flex", s13) });
  });
  p10.displayName = "Flex";

  // node_modules/@radix-ui/themes/dist/esm/components/spinner.js
  var n7 = __toESM(require_react(), 1);
  var import_classnames8 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/spinner.props.js
  var e18 = ["1", "2", "3"];
  var s5 = { size: { type: "enum", className: "rt-r-size", values: e18, default: "2", responsive: true }, loading: { type: "boolean", default: true } };

  // node_modules/@radix-ui/themes/dist/esm/components/spinner.js
  var s6 = n7.forwardRef((i6, o22) => {
    const { className: a17, children: e24, loading: t17, ...m7 } = v(i6, s5, r7);
    if (!t17) return e24;
    const r26 = n7.createElement("span", { ...m7, ref: o22, className: (0, import_classnames8.default)("rt-Spinner", a17) }, n7.createElement("span", { className: "rt-SpinnerLeaf" }), n7.createElement("span", { className: "rt-SpinnerLeaf" }), n7.createElement("span", { className: "rt-SpinnerLeaf" }), n7.createElement("span", { className: "rt-SpinnerLeaf" }), n7.createElement("span", { className: "rt-SpinnerLeaf" }), n7.createElement("span", { className: "rt-SpinnerLeaf" }), n7.createElement("span", { className: "rt-SpinnerLeaf" }), n7.createElement("span", { className: "rt-SpinnerLeaf" }));
    return e24 === void 0 ? r26 : n7.createElement(p10, { asChild: true, position: "relative", align: "center", justify: "center" }, n7.createElement("span", null, n7.createElement("span", { "aria-hidden": true, style: { display: "contents", visibility: "hidden" }, inert: void 0 }, e24), n7.createElement(p10, { asChild: true, align: "center", justify: "center", position: "absolute", inset: "0" }, n7.createElement("span", null, r26))));
  });
  s6.displayName = "Spinner";

  // node_modules/@radix-ui/themes/dist/esm/components/visually-hidden.js
  var d4 = dist_exports2.Root;
  var e19 = dist_exports2.Root;

  // node_modules/@radix-ui/themes/dist/esm/helpers/map-prop-values.js
  function s7(e24, t17) {
    if (e24 !== void 0) return typeof e24 == "string" ? t17(e24) : Object.fromEntries(Object.entries(e24).map(([n12, o22]) => [n12, t17(o22)]));
  }
  function r12(e24) {
    switch (e24) {
      case "1":
        return "1";
      case "2":
      case "3":
        return "2";
      case "4":
        return "3";
    }
  }

  // node_modules/@radix-ui/themes/dist/esm/components/_internal/base-button.js
  var n8 = o13.forwardRef((t17, p15) => {
    const { size: i6 = i2.size.default } = t17, { className: a17, children: e24, asChild: m7, color: d8, radius: l7, disabled: s13 = t17.loading, ...u5 } = v(t17, i2, r7), f12 = m7 ? dist_exports.Root : "button";
    return o13.createElement(f12, { "data-disabled": s13 || void 0, "data-accent-color": d8, "data-radius": l7, ...u5, ref: p15, className: (0, import_classnames9.default)("rt-reset", "rt-BaseButton", a17), disabled: s13 }, t17.loading ? o13.createElement(o13.Fragment, null, o13.createElement("span", { style: { display: "contents", visibility: "hidden" }, "aria-hidden": true }, e24), o13.createElement(d4, null, e24), o13.createElement(p10, { asChild: true, align: "center", justify: "center", position: "absolute", inset: "0" }, o13.createElement("span", null, o13.createElement(s6, { size: s7(i6, r12) })))) : e24);
  });
  n8.displayName = "BaseButton";

  // node_modules/@radix-ui/themes/dist/esm/components/card.js
  var r14 = __toESM(require_react(), 1);
  var import_classnames10 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/card.props.js
  var e20 = ["1", "2", "3", "4", "5"];
  var r13 = ["surface", "classic", "ghost"];
  var a11 = { ...o, size: { type: "enum", className: "rt-r-size", values: e20, default: "1", responsive: true }, variant: { type: "enum", className: "rt-variant", values: r13, default: "surface" } };

  // node_modules/@radix-ui/themes/dist/esm/components/card.js
  var o14 = r14.forwardRef((p15, e24) => {
    const { asChild: t17, className: s13, ...a17 } = v(p15, a11, r7), m7 = t17 ? dist_exports.Root : "div";
    return r14.createElement(m7, { ref: e24, ...a17, className: (0, import_classnames10.default)("rt-reset", "rt-BaseCard", "rt-Card", s13) });
  });
  o14.displayName = "Card";

  // node_modules/radix-ui/dist/internal.mjs
  var Primitive2 = Primitive;
  Primitive2.dispatchDiscreteCustomEvent = dispatchDiscreteCustomEvent;
  Primitive2.Root = Primitive;

  // node_modules/@radix-ui/themes/dist/esm/components/code.js
  var r15 = __toESM(require_react(), 1);
  var import_classnames11 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/code.props.js
  var a12 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var i3 = ["solid", "soft", "outline", "ghost"];
  var f4 = { ...o, size: { type: "enum", className: "rt-r-size", values: a12, responsive: true }, variant: { type: "enum", className: "rt-variant", values: i3, default: "soft" }, ...t3, ...s2, ...o3, ...e6, ...r4 };

  // node_modules/@radix-ui/themes/dist/esm/components/code.js
  var p11 = r15.forwardRef((o22, t17) => {
    const { asChild: s13, className: m7, color: e24, ...d8 } = v(o22, f4, r7), n12 = o22.variant === "ghost" ? e24 || void 0 : e24, a17 = s13 ? dist_exports.Root : "code";
    return r15.createElement(a17, { "data-accent-color": n12, ...d8, ref: t17, className: (0, import_classnames11.default)("rt-reset", "rt-Code", m7) });
  });
  p11.displayName = "Code";

  // node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js
  var r18 = __toESM(require_react(), 1);
  var import_classnames13 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/scroll-area.props.js
  var r16 = ["1", "2", "3"];
  var o15 = ["vertical", "horizontal", "both"];
  var t8 = { ...o, size: { type: "enum", className: "rt-r-size", values: r16, default: "1", responsive: true }, ...r9, scrollbars: { type: "enum", values: o15, default: "both" } };

  // node_modules/@radix-ui/themes/dist/esm/helpers/extract-margin-props.js
  function a13(r26) {
    const { m: t17, mx: m7, my: o22, mt: p15, mr: n12, mb: s13, ml: e24, ...i6 } = r26;
    return { m: t17, mx: m7, my: o22, mt: p15, mr: n12, mb: s13, ml: e24, rest: i6 };
  }

  // node_modules/@radix-ui/themes/dist/esm/helpers/get-margin-styles.js
  var import_classnames12 = __toESM(require_classnames(), 1);
  var r17 = r7.m.values;
  function S(s13) {
    const [e24, t17] = R({ className: "rt-r-m", customProperties: ["--margin"], propValues: r17, value: s13.m }), [a17, o22] = R({ className: "rt-r-mx", customProperties: ["--margin-left", "--margin-right"], propValues: r17, value: s13.mx }), [l7, i6] = R({ className: "rt-r-my", customProperties: ["--margin-top", "--margin-bottom"], propValues: r17, value: s13.my }), [p15, u5] = R({ className: "rt-r-mt", customProperties: ["--margin-top"], propValues: r17, value: s13.mt }), [n12, c4] = R({ className: "rt-r-mr", customProperties: ["--margin-right"], propValues: r17, value: s13.mr }), [g3, P4] = R({ className: "rt-r-mb", customProperties: ["--margin-bottom"], propValues: r17, value: s13.mb }), [N2, C] = R({ className: "rt-r-ml", customProperties: ["--margin-left"], propValues: r17, value: s13.ml });
    return [(0, import_classnames12.default)(e24, a17, l7, p15, n12, g3, N2), l2(t17, o22, i6, u5, c4, P4, C)];
  }

  // node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js
  var c = r18.forwardRef((n12, S2) => {
    const { rest: f12, ...P4 } = a13(n12), [u5, A2] = S(P4), { asChild: a17, children: d8, className: y, style: v3, type: t17, scrollHideDelay: N2 = t17 !== "scroll" ? 0 : void 0, dir: V, size: i6 = t8.size.default, radius: p15 = t8.radius.default, scrollbars: l7 = t8.scrollbars.default, ...b3 } = f12;
    return r18.createElement(dist_exports6.Root, { type: t17, scrollHideDelay: N2, className: (0, import_classnames13.default)("rt-ScrollAreaRoot", u5, y), style: l2(A2, v3), asChild: a17 }, d3({ asChild: a17, children: d8 }, (g3) => r18.createElement(r18.Fragment, null, r18.createElement(dist_exports6.Viewport, { ...b3, ref: S2, className: "rt-ScrollAreaViewport" }, g3), r18.createElement("div", { className: "rt-ScrollAreaViewportFocusRing" }), l7 !== "vertical" ? r18.createElement(dist_exports6.Scrollbar, { "data-radius": p15, orientation: "horizontal", className: (0, import_classnames13.default)("rt-ScrollAreaScrollbar", g({ className: "rt-r-size", value: i6, propValues: t8.size.values })) }, r18.createElement(dist_exports6.Thumb, { className: "rt-ScrollAreaThumb" })) : null, l7 !== "horizontal" ? r18.createElement(dist_exports6.Scrollbar, { "data-radius": p15, orientation: "vertical", className: (0, import_classnames13.default)("rt-ScrollAreaScrollbar", g({ className: "rt-r-size", value: i6, propValues: t8.size.values })) }, r18.createElement(dist_exports6.Thumb, { className: "rt-ScrollAreaThumb" })) : null, l7 === "both" ? r18.createElement(dist_exports6.Corner, { className: "rt-ScrollAreaCorner" }) : null)));
  });
  c.displayName = "ScrollArea";

  // node_modules/@radix-ui/themes/dist/esm/components/dialog.js
  var dialog_exports = {};
  __export(dialog_exports, {
    Close: () => D,
    Content: () => p12,
    Description: () => m4,
    Root: () => s9,
    Title: () => g2,
    Trigger: () => n9
  });
  var o16 = __toESM(require_react(), 1);
  var import_classnames14 = __toESM(require_classnames(), 1);
  var s9 = (e24) => o16.createElement(dist_exports4.Root, { ...e24, modal: true });
  s9.displayName = "Dialog.Root";
  var n9 = o16.forwardRef(({ children: e24, ...i6 }, r26) => o16.createElement(dist_exports4.Trigger, { ...i6, ref: r26, asChild: true }, a4(e24)));
  n9.displayName = "Dialog.Trigger";
  var p12 = o16.forwardRef(({ align: e24, ...i6 }, r26) => {
    const { align: P4, ...f12 } = s, { className: C } = v({ align: e24 }, { align: P4 }), { className: d8, forceMount: c4, container: y, ...T2 } = v(i6, f12);
    return o16.createElement(dist_exports4.Portal, { container: y, forceMount: c4 }, o16.createElement(R2, { asChild: true }, o16.createElement(dist_exports4.Overlay, { className: "rt-BaseDialogOverlay rt-DialogOverlay" }, o16.createElement("div", { className: "rt-BaseDialogScroll rt-DialogScroll" }, o16.createElement("div", { className: `rt-BaseDialogScrollPadding rt-DialogScrollPadding ${C}` }, o16.createElement(dist_exports4.Content, { ...T2, ref: r26, className: (0, import_classnames14.default)("rt-BaseDialogContent", "rt-DialogContent", d8) }))))));
  });
  p12.displayName = "Dialog.Content";
  var g2 = o16.forwardRef((e24, i6) => o16.createElement(dist_exports4.Title, { asChild: true }, o16.createElement(r8, { size: "5", mb: "3", trim: "start", ...e24, asChild: false, ref: i6 })));
  g2.displayName = "Dialog.Title";
  var m4 = o16.forwardRef((e24, i6) => o16.createElement(dist_exports4.Description, { asChild: true }, o16.createElement(p, { as: "p", size: "3", ...e24, asChild: false, ref: i6 })));
  m4.displayName = "Dialog.Description";
  var D = o16.forwardRef(({ children: e24, ...i6 }, r26) => o16.createElement(dist_exports4.Close, { ...i6, ref: r26, asChild: true }, a4(e24)));
  D.displayName = "Dialog.Close";

  // node_modules/@radix-ui/themes/dist/esm/components/icon-button.js
  var t9 = __toESM(require_react(), 1);
  var import_classnames15 = __toESM(require_classnames(), 1);
  var o17 = t9.forwardRef(({ className: e24, ...n12 }, r26) => t9.createElement(n8, { ...n12, ref: r26, className: (0, import_classnames15.default)("rt-IconButton", e24) }));
  o17.displayName = "IconButton";

  // node_modules/@radix-ui/themes/dist/esm/components/kbd.js
  var o18 = __toESM(require_react(), 1);
  var import_classnames16 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/kbd.props.js
  var e21 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var r19 = ["classic", "soft"];
  var t10 = { ...o, size: { type: "enum", className: "rt-r-size", values: e21, responsive: true }, variant: { type: "enum", className: "rt-variant", values: r19, default: "classic" } };

  // node_modules/@radix-ui/themes/dist/esm/components/kbd.js
  var r20 = o18.forwardRef((p15, e24) => {
    const { asChild: t17, className: s13, ...m7 } = v(p15, t10, r7), d8 = t17 ? dist_exports.Root : "kbd";
    return o18.createElement(d8, { ...m7, ref: e24, className: (0, import_classnames16.default)("rt-reset", "rt-Kbd", s13) });
  });
  r20.displayName = "Kbd";

  // node_modules/@radix-ui/themes/dist/esm/components/separator.js
  var r22 = __toESM(require_react(), 1);
  var import_classnames17 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/separator.props.js
  var e22 = ["horizontal", "vertical"];
  var r21 = ["1", "2", "3", "4"];
  var t11 = { orientation: { type: "enum", className: "rt-r-orientation", values: e22, default: "horizontal", responsive: true }, size: { type: "enum", className: "rt-r-size", values: r21, default: "1", responsive: true }, color: { ...r2.color, default: "gray" }, decorative: { type: "boolean", default: true } };

  // node_modules/@radix-ui/themes/dist/esm/components/separator.js
  var o19 = r22.forwardRef((p15, e24) => {
    const { className: t17, color: a17, decorative: s13, ...m7 } = v(p15, t11, r7);
    return r22.createElement("span", { "data-accent-color": a17, role: s13 ? void 0 : "separator", ...m7, ref: e24, className: (0, import_classnames17.default)("rt-Separator", t17) });
  });
  o19.displayName = "Separator";

  // node_modules/@radix-ui/themes/dist/esm/components/_internal/base-tab-list.props.js
  var r23 = ["1", "2"];
  var t12 = ["nowrap", "wrap", "wrap-reverse"];
  var o20 = ["start", "center", "end"];
  var p13 = { size: { type: "enum", className: "rt-r-size", values: r23, default: "2", responsive: true }, wrap: { type: "enum", className: "rt-r-fw", values: t12, responsive: true }, justify: { type: "enum", className: "rt-r-jc", values: o20, responsive: true }, ...r2, ...o3 };

  // node_modules/@radix-ui/themes/dist/esm/components/table.js
  var table_exports = {};
  __export(table_exports, {
    Body: () => b,
    Cell: () => T,
    ColumnHeaderCell: () => f9,
    Header: () => d6,
    Root: () => m5,
    Row: () => P2,
    RowHeaderCell: () => R3
  });
  var e23 = __toESM(require_react(), 1);
  var import_classnames18 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/table.props.js
  var r24 = ["1", "2", "3"];
  var a14 = ["surface", "ghost"];
  var o21 = ["auto", "fixed"];
  var n11 = { size: { type: "enum", className: "rt-r-size", values: r24, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a14, default: "ghost" }, layout: { type: "enum", className: "rt-r-tl", values: o21, responsive: true } };
  var i4 = ["start", "center", "end", "baseline"];
  var u3 = { align: { type: "enum", className: "rt-r-va", values: i4, parseValue: l6, responsive: true } };
  function l6(e24) {
    return { baseline: "baseline", start: "top", center: "middle", end: "bottom" }[e24];
  }
  var p14 = ["start", "center", "end"];
  var f8 = { justify: { type: "enum", className: "rt-r-ta", values: p14, parseValue: c2, responsive: true }, ...t, ...p5 };
  function c2(e24) {
    return { start: "left", center: "center", end: "right" }[e24];
  }

  // node_modules/@radix-ui/themes/dist/esm/components/table.js
  var m5 = e23.forwardRef((o22, l7) => {
    const { layout: a17, ...r26 } = n11, { className: C, children: c4, layout: y, ...i6 } = v(o22, r26, r7), w = g({ value: y, className: n11.layout.className, propValues: n11.layout.values });
    return e23.createElement("div", { ref: l7, className: (0, import_classnames18.default)("rt-TableRoot", C), ...i6 }, e23.createElement(c, null, e23.createElement("table", { className: (0, import_classnames18.default)("rt-TableRootTable", w) }, c4)));
  });
  m5.displayName = "Table.Root";
  var d6 = e23.forwardRef(({ className: o22, ...l7 }, a17) => e23.createElement("thead", { ...l7, ref: a17, className: (0, import_classnames18.default)("rt-TableHeader", o22) }));
  d6.displayName = "Table.Header";
  var b = e23.forwardRef(({ className: o22, ...l7 }, a17) => e23.createElement("tbody", { ...l7, ref: a17, className: (0, import_classnames18.default)("rt-TableBody", o22) }));
  b.displayName = "Table.Body";
  var P2 = e23.forwardRef((o22, l7) => {
    const { className: a17, ...r26 } = v(o22, u3);
    return e23.createElement("tr", { ...r26, ref: l7, className: (0, import_classnames18.default)("rt-TableRow", a17) });
  });
  P2.displayName = "Table.Row";
  var T = e23.forwardRef((o22, l7) => {
    const { className: a17, ...r26 } = v(o22, f8);
    return e23.createElement("td", { className: (0, import_classnames18.default)("rt-TableCell", a17), ref: l7, ...r26 });
  });
  T.displayName = "Table.Cell";
  var f9 = e23.forwardRef((o22, l7) => {
    const { className: a17, ...r26 } = v(o22, f8);
    return e23.createElement("th", { className: (0, import_classnames18.default)("rt-TableCell", "rt-TableColumnHeaderCell", a17), scope: "col", ref: l7, ...r26 });
  });
  f9.displayName = "Table.ColumnHeaderCell";
  var R3 = e23.forwardRef((o22, l7) => {
    const { className: a17, ...r26 } = v(o22, f8);
    return e23.createElement("th", { className: (0, import_classnames18.default)("rt-TableCell", "rt-TableRowHeaderCell", a17), scope: "row", ref: l7, ...r26 });
  });
  R3.displayName = "Table.RowHeaderCell";

  // node_modules/@radix-ui/themes/dist/esm/components/tabs.js
  var tabs_exports = {};
  __export(tabs_exports, {
    Content: () => f10,
    List: () => b2,
    Root: () => m6,
    Trigger: () => P3
  });
  var s12 = __toESM(require_react(), 1);
  var import_classnames19 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/tabs.props.js
  var s11 = { ...o };
  var t14 = { ...o };

  // node_modules/@radix-ui/themes/dist/esm/components/tabs.js
  var m6 = s12.forwardRef((t17, o22) => {
    const { className: r26, ...e24 } = v(t17, r7);
    return s12.createElement(dist_exports7.Root, { ...e24, ref: o22, className: (0, import_classnames19.default)("rt-TabsRoot", r26) });
  });
  m6.displayName = "Tabs.Root";
  var b2 = s12.forwardRef((t17, o22) => {
    const { className: r26, color: e24, ...n12 } = v(t17, p13, r7);
    return s12.createElement(dist_exports7.List, { "data-accent-color": e24, ...n12, asChild: false, ref: o22, className: (0, import_classnames19.default)("rt-BaseTabList", "rt-TabsList", r26) });
  });
  b2.displayName = "Tabs.List";
  var P3 = s12.forwardRef((t17, o22) => {
    const { className: r26, children: e24, ...n12 } = t17;
    return s12.createElement(dist_exports7.Trigger, { ...n12, asChild: false, ref: o22, className: (0, import_classnames19.default)("rt-reset", "rt-BaseTabListTrigger", "rt-TabsTrigger", r26) }, s12.createElement("span", { className: "rt-BaseTabListTriggerInner rt-TabsTriggerInner" }, e24), s12.createElement("span", { className: "rt-BaseTabListTriggerInnerHidden rt-TabsTriggerInnerHidden" }, e24));
  });
  P3.displayName = "Tabs.Trigger";
  var f10 = s12.forwardRef((t17, o22) => {
    const { className: r26, ...e24 } = v(t17, r7);
    return s12.createElement(dist_exports7.Content, { ...e24, ref: o22, className: (0, import_classnames19.default)("rt-TabsContent", r26) });
  });
  f10.displayName = "Tabs.Content";

  // node_modules/@radix-ui/themes/dist/esm/components/text-field.js
  var text_field_exports = {};
  __export(text_field_exports, {
    Root: () => u4,
    Slot: () => c3
  });
  var t16 = __toESM(require_react(), 1);
  var import_classnames20 = __toESM(require_classnames(), 1);

  // node_modules/@radix-ui/themes/dist/esm/components/text-field.props.js
  var r25 = ["1", "2", "3"];
  var t15 = ["classic", "surface", "soft"];
  var f11 = { size: { type: "enum", className: "rt-r-size", values: r25, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t15, default: "surface" }, ...r2, ...r9 };
  var a16 = ["left", "right"];
  var i5 = { side: { type: "enum", values: a16 }, ...r2, gap: u2.gap, px: p5.px, pl: p5.pl, pr: p5.pr };

  // node_modules/@radix-ui/themes/dist/esm/components/text-field.js
  var u4 = t16.forwardRef((r26, s13) => {
    const e24 = t16.useRef(null), { children: l7, className: i6, color: p15, radius: f12, style: x2, ...P4 } = v(r26, f11, r7);
    return t16.createElement("div", { "data-accent-color": p15, "data-radius": f12, style: x2, className: (0, import_classnames20.default)("rt-TextFieldRoot", i6), onPointerDown: (T2) => {
      const n12 = T2.target;
      if (n12.closest("input, button, a")) return;
      const o22 = e24.current;
      if (!o22) return;
      const a17 = n12.closest(`
            .rt-TextFieldSlot[data-side='right'],
            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])
          `) ? o22.value.length : 0;
      requestAnimationFrame(() => {
        try {
          o22.setSelectionRange(a17, a17);
        } catch {
        }
        o22.focus();
      });
    } }, t16.createElement("input", { spellCheck: "false", ...P4, ref: composeRefs(e24, s13), className: "rt-reset rt-TextFieldInput" }), l7);
  });
  u4.displayName = "TextField.Root";
  var c3 = t16.forwardRef((r26, s13) => {
    const { className: e24, color: l7, side: i6, ...p15 } = v(r26, i5);
    return t16.createElement("div", { "data-accent-color": l7, "data-side": i6, ...p15, ref: s13, className: (0, import_classnames20.default)("rt-TextFieldSlot", e24) });
  });
  c3.displayName = "TextField.Slot";

  // src/Layout.jsx
  var import_react6 = __toESM(require_react());

  // node_modules/@radix-ui/react-icons/dist/react-icons.esm.js
  var import_react5 = __toESM(require_react());
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i6;
    for (i6 = 0; i6 < sourceKeys.length; i6++) {
      key = sourceKeys[i6];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  var _excluded$1c = ["color"];
  var ComponentInstanceIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$1c);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M7.1465 1.48959C7.34176 1.29432 7.65835 1.29432 7.85361 1.48959L13.5105 7.14644C13.7057 7.3417 13.7057 7.65829 13.5105 7.85355L7.85361 13.5104C7.65835 13.7057 7.34176 13.7057 7.1465 13.5104L1.48965 7.85355C1.29439 7.65829 1.29439 7.3417 1.48965 7.14644L7.1465 1.48959ZM7.50005 2.55025L2.55031 7.49999L7.50005 12.4497L12.4498 7.49999L7.50005 2.55025Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$1q = ["color"];
  var Cross1Icon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$1q);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$1w = ["color"];
  var CubeIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$1w);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$2c = ["color"];
  var FileTextIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2c);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$2n = ["color"];
  var GlobeIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2n);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }), (0, import_react5.createElement)("path", {
      d: "M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }), (0, import_react5.createElement)("path", {
      d: "M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }), (0, import_react5.createElement)("path", {
      d: "M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$2s = ["color"];
  var HamburgerMenuIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2s);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$2z = ["color"];
  var HomeIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2z);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$2J = ["color"];
  var LayersIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2J);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M7.75432 0.819537C7.59742 0.726821 7.4025 0.726821 7.24559 0.819537L1.74559 4.06954C1.59336 4.15949 1.49996 4.32317 1.49996 4.5C1.49996 4.67683 1.59336 4.84051 1.74559 4.93046L7.24559 8.18046C7.4025 8.27318 7.59742 8.27318 7.75432 8.18046L13.2543 4.93046C13.4066 4.84051 13.5 4.67683 13.5 4.5C13.5 4.32317 13.4066 4.15949 13.2543 4.06954L7.75432 0.819537ZM7.49996 7.16923L2.9828 4.5L7.49996 1.83077L12.0171 4.5L7.49996 7.16923ZM1.5695 7.49564C1.70998 7.2579 2.01659 7.17906 2.25432 7.31954L7.49996 10.4192L12.7456 7.31954C12.9833 7.17906 13.2899 7.2579 13.4304 7.49564C13.5709 7.73337 13.4921 8.03998 13.2543 8.18046L7.75432 11.4305C7.59742 11.5232 7.4025 11.5232 7.24559 11.4305L1.74559 8.18046C1.50786 8.03998 1.42901 7.73337 1.5695 7.49564ZM1.56949 10.4956C1.70998 10.2579 2.01658 10.1791 2.25432 10.3195L7.49996 13.4192L12.7456 10.3195C12.9833 10.1791 13.2899 10.2579 13.4304 10.4956C13.5709 10.7334 13.4921 11.04 13.2543 11.1805L7.75432 14.4305C7.59742 14.5232 7.4025 14.5232 7.24559 14.4305L1.74559 11.1805C1.50785 11.04 1.42901 10.7334 1.56949 10.4956Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$2Z = ["color"];
  var ListBulletIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2Z);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M1.5 5.25C1.91421 5.25 2.25 4.91421 2.25 4.5C2.25 4.08579 1.91421 3.75 1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25ZM4 4.5C4 4.22386 4.22386 4 4.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H4.5ZM2.25 7.5C2.25 7.91421 1.91421 8.25 1.5 8.25C1.08579 8.25 0.75 7.91421 0.75 7.5C0.75 7.08579 1.08579 6.75 1.5 6.75C1.91421 6.75 2.25 7.08579 2.25 7.5ZM1.5 11.25C1.91421 11.25 2.25 10.9142 2.25 10.5C2.25 10.0858 1.91421 9.75 1.5 9.75C1.08579 9.75 0.75 10.0858 0.75 10.5C0.75 10.9142 1.08579 11.25 1.5 11.25Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$33 = ["color"];
  var MagnifyingGlassIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$33);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$39 = ["color"];
  var MixIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$39);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M2.14921 3.99996C2.14921 2.97778 2.97784 2.14915 4.00002 2.14915C5.02219 2.14915 5.85083 2.97778 5.85083 3.99996C5.85083 5.02213 5.02219 5.85077 4.00002 5.85077C2.97784 5.85077 2.14921 5.02213 2.14921 3.99996ZM4.00002 1.24915C2.48079 1.24915 1.24921 2.48073 1.24921 3.99996C1.24921 5.51919 2.48079 6.75077 4.00002 6.75077C5.51925 6.75077 6.75083 5.51919 6.75083 3.99996C6.75083 2.48073 5.51925 1.24915 4.00002 1.24915ZM5.82034 11.0001L2.49998 12.8369V9.16331L5.82034 11.0001ZM2.63883 8.21159C2.17228 7.9535 1.59998 8.29093 1.59998 8.82411V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21159ZM8.30001 9.00003C8.30001 8.61343 8.61341 8.30003 9.00001 8.30003H13C13.3866 8.30003 13.7 8.61343 13.7 9.00003V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00003ZM9.20001 9.20003V12.8H12.8V9.20003H9.20001ZM13.4432 2.19311C13.6189 2.01737 13.6189 1.73245 13.4432 1.55671C13.2675 1.38098 12.9826 1.38098 12.8068 1.55671L11 3.36353L9.19321 1.55674C9.01748 1.381 8.73255 1.381 8.55682 1.55674C8.38108 1.73247 8.38108 2.0174 8.55682 2.19313L10.3636 3.99992L8.55682 5.80671C8.38108 5.98245 8.38108 6.26737 8.55682 6.44311C8.73255 6.61885 9.01748 6.61885 9.19321 6.44311L11 4.63632L12.8068 6.44314C12.9826 6.61887 13.2675 6.61887 13.4432 6.44314C13.6189 6.2674 13.6189 5.98247 13.4432 5.80674L11.6364 3.99992L13.4432 2.19311Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$3e = ["color"];
  var MoonIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$3e);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$3H = ["color"];
  var RocketIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$3H);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$49 = ["color"];
  var StackIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$49);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M7.75432 1.81954C7.59742 1.72682 7.4025 1.72682 7.24559 1.81954L1.74559 5.06954C1.59336 5.15949 1.49996 5.32317 1.49996 5.5C1.49996 5.67683 1.59336 5.84051 1.74559 5.93046L7.24559 9.18046C7.4025 9.27318 7.59742 9.27318 7.75432 9.18046L13.2543 5.93046C13.4066 5.84051 13.5 5.67683 13.5 5.5C13.5 5.32317 13.4066 5.15949 13.2543 5.06954L7.75432 1.81954ZM7.49996 8.16923L2.9828 5.5L7.49996 2.83077L12.0171 5.5L7.49996 8.16923ZM2.25432 8.31954C2.01658 8.17906 1.70998 8.2579 1.56949 8.49564C1.42901 8.73337 1.50785 9.03998 1.74559 9.18046L7.24559 12.4305C7.4025 12.5232 7.59742 12.5232 7.75432 12.4305L13.2543 9.18046C13.4921 9.03998 13.5709 8.73337 13.4304 8.49564C13.2899 8.2579 12.9833 8.17906 12.7456 8.31954L7.49996 11.4192L2.25432 8.31954Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$4i = ["color"];
  var SunIcon = /* @__PURE__ */ (0, import_react5.forwardRef)(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$4i);
    return (0, import_react5.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react5.createElement)("path", {
      d: "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });

  // src/Layout.jsx
  var import_jsx_runtime18 = __toESM(require_jsx_runtime());
  var KIND_ICONS = {
    module: FileTextIcon,
    class: CubeIcon,
    interface: ComponentInstanceIcon,
    namespace: MixIcon,
    mixin: MixIcon,
    global: GlobeIcon
  };
  var MIN_SIDEBAR = 200;
  var MAX_SIDEBAR = 480;
  var DEFAULT_SIDEBAR = 280;
  var VIEW_MODES = [
    { id: "default", label: "Default", icon: ListBulletIcon },
    { id: "type", label: "By Type", icon: LayersIcon },
    { id: "file", label: "By File", icon: StackIcon }
  ];
  var TYPE_ORDER = {
    class: { title: "Classes", order: 0 },
    function: { title: "Functions", order: 1 },
    constant: { title: "Constants", order: 2 },
    member: { title: "Members", order: 3 },
    typedef: { title: "Type Definitions", order: 4 },
    module: { title: "Modules", order: 5 },
    interface: { title: "Interfaces", order: 6 },
    namespace: { title: "Namespaces", order: 7 },
    mixin: { title: "Mixins", order: 8 },
    event: { title: "Events", order: 9 }
  };
  function collectAllNavItems(nav) {
    const items = [];
    for (const group of nav) {
      if (group.globalItems) {
        for (const gi of group.globalItems) {
          items.push(gi);
        }
      }
      for (const item of group.items) {
        if (item.kind !== "global") {
          items.push(item);
        }
      }
    }
    return items;
  }
  function buildNavByType(nav) {
    const allItems = collectAllNavItems(nav);
    const groups = {};
    for (const item of allItems) {
      const kind = item.kind || "member";
      const info = TYPE_ORDER[kind] || { title: kind.charAt(0).toUpperCase() + kind.slice(1), order: 99 };
      if (!groups[kind]) {
        groups[kind] = { title: info.title, order: info.order, items: [] };
      }
      groups[kind].items.push(item);
    }
    return Object.values(groups).sort((a17, b3) => a17.order - b3.order).map((g3) => ({
      title: g3.title,
      items: g3.items.sort((a17, b3) => a17.name.localeCompare(b3.name))
    })).filter((g3) => g3.items.length > 0);
  }
  function buildNavByFile(nav) {
    const allItems = collectAllNavItems(nav);
    const groups = {};
    for (const item of allItems) {
      const fname = item.filename || "Unknown";
      if (!groups[fname]) {
        groups[fname] = { title: fname, items: [] };
      }
      groups[fname].items.push(item);
    }
    return Object.values(groups).sort((a17, b3) => a17.title.localeCompare(b3.title)).map((g3) => ({
      ...g3,
      items: g3.items.sort((a17, b3) => a17.name.localeCompare(b3.name))
    })).filter((g3) => g3.items.length > 0);
  }
  function buildNavDefault(nav) {
    return nav.map((group) => ({
      ...group,
      items: [...group.items].sort((a17, b3) => a17.name.localeCompare(b3.name))
    }));
  }
  function Layout({ nav, currentSlug, onNavigate, packageInfo, pages, children, appearance, onToggleAppearance }) {
    const [searchOpen, setSearchOpen] = (0, import_react6.useState)(false);
    const [searchQuery, setSearchQuery] = (0, import_react6.useState)("");
    const [activeIndex, setActiveIndex] = (0, import_react6.useState)(0);
    const [mobileOpen, setMobileOpen] = (0, import_react6.useState)(false);
    const [viewMode, setViewMode] = (0, import_react6.useState)(() => {
      try {
        const saved = localStorage.getItem("jsdoc-nav-view");
        if (saved && VIEW_MODES.some((m7) => m7.id === saved)) return saved;
      } catch (_) {
      }
      return "default";
    });
    const [sidebarWidth, setSidebarWidth] = (0, import_react6.useState)(() => {
      try {
        const saved = localStorage.getItem("jsdoc-sidebar-width");
        if (saved) return Math.min(Math.max(Number(saved), MIN_SIDEBAR), MAX_SIDEBAR);
      } catch (_) {
      }
      return DEFAULT_SIDEBAR;
    });
    const [isResizing, setIsResizing] = (0, import_react6.useState)(false);
    const searchInputRef = (0, import_react6.useRef)(null);
    (0, import_react6.useEffect)(() => {
      try {
        localStorage.setItem("jsdoc-sidebar-width", String(sidebarWidth));
      } catch (_) {
      }
    }, [sidebarWidth]);
    (0, import_react6.useEffect)(() => {
      try {
        localStorage.setItem("jsdoc-nav-view", viewMode);
      } catch (_) {
      }
    }, [viewMode]);
    const computedNav = (0, import_react6.useMemo)(() => {
      switch (viewMode) {
        case "type":
          return buildNavByType(nav);
        case "file":
          return buildNavByFile(nav);
        default:
          return buildNavDefault(nav);
      }
    }, [nav, viewMode]);
    const handleResizeStart = (0, import_react6.useCallback)((e24) => {
      e24.preventDefault();
      setIsResizing(true);
      const startX = e24.clientX;
      const startWidth = sidebarWidth;
      const onMouseMove = (e25) => {
        const newWidth = Math.min(Math.max(startWidth + (e25.clientX - startX), MIN_SIDEBAR), MAX_SIDEBAR);
        setSidebarWidth(newWidth);
      };
      const onMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }, [sidebarWidth]);
    (0, import_react6.useEffect)(() => {
      const handler = (e24) => {
        if ((e24.metaKey || e24.ctrlKey) && e24.key === "k") {
          e24.preventDefault();
          setSearchOpen(true);
        }
      };
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }, []);
    const searchIndex = (0, import_react6.useMemo)(() => {
      const index2 = [];
      for (const page of pages) {
        if (page.kind === "home") continue;
        index2.push({
          name: page.title,
          slug: page.slug,
          kind: page.kind,
          description: page.doclet?.description || page.doclet?.classdesc || ""
        });
        if (page.members) {
          for (const [category, items] of Object.entries(page.members)) {
            for (const item of items) {
              index2.push({
                name: `${page.title}.${item.name}`,
                slug: page.slug,
                anchor: item.name,
                kind: item.kind,
                description: item.description || "",
                parent: page.title
              });
            }
          }
        }
      }
      return index2;
    }, [pages]);
    const searchResults = (0, import_react6.useMemo)(() => {
      if (!searchQuery.trim()) return [];
      const q = searchQuery.toLowerCase();
      return searchIndex.filter(
        (item) => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
      ).slice(0, 15);
    }, [searchQuery, searchIndex]);
    const handleSearchKeyDown = (0, import_react6.useCallback)((e24) => {
      if (e24.key === "ArrowDown") {
        e24.preventDefault();
        setActiveIndex((i6) => Math.min(i6 + 1, searchResults.length - 1));
      } else if (e24.key === "ArrowUp") {
        e24.preventDefault();
        setActiveIndex((i6) => Math.max(i6 - 1, 0));
      } else if (e24.key === "Enter" && searchResults[activeIndex]) {
        const result = searchResults[activeIndex];
        onNavigate(result.slug);
        setSearchOpen(false);
        setSearchQuery("");
        if (result.anchor) {
          setTimeout(() => {
            document.getElementById(result.anchor)?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [searchResults, activeIndex, onNavigate]);
    const handleNavClick = (0, import_react6.useCallback)((slug) => {
      onNavigate(slug);
      setMobileOpen(false);
    }, [onNavigate]);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p10, { className: `app-layout ${isResizing ? "app-layout--resizing" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        o17,
        {
          className: "mobile-toggle",
          variant: "ghost",
          color: "gray",
          size: "3",
          onClick: () => setMobileOpen(!mobileOpen),
          children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Cross1Icon, {}) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(HamburgerMenuIcon, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        p7,
        {
          className: `sidebar ${mobileOpen ? "sidebar--open" : ""}`,
          style: { width: sidebarWidth, minWidth: sidebarWidth },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p10, { direction: "column", height: "100%", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p10, { className: "sidebar-brand", align: "center", justify: "between", p: "4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p10, { align: "center", gap: "3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p7, { className: "sidebar-logo", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p10, { direction: "column", gap: "0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p, { size: "2", weight: "bold", className: "sidebar-title", children: packageInfo?.name || "API Docs" }),
                    packageInfo?.version && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p, { size: "1", color: "gray", children: packageInfo.version })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                  o17,
                  {
                    variant: "ghost",
                    color: "gray",
                    size: "2",
                    onClick: onToggleAppearance,
                    title: appearance === "dark" ? "Switch to light mode" : "Switch to dark mode",
                    className: "theme-toggle",
                    children: appearance === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SunIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MoonIcon, {})
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p7, { px: "3", pb: "3", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
                "button",
                {
                  className: "search-trigger",
                  onClick: () => setSearchOpen(true),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MagnifyingGlassIcon, {}),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "Search docs..." }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(r20, { size: "1", children: "\u2318K" })
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(o19, { size: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p10, { className: "view-mode-bar", px: "3", py: "2", gap: "1", children: VIEW_MODES.map((mode) => {
                const Icon = mode.icon;
                return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
                  "button",
                  {
                    className: `view-mode-btn ${viewMode === mode.id ? "view-mode-btn--active" : ""}`,
                    onClick: () => setViewMode(mode.id),
                    title: mode.label,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Icon, { width: "14", height: "14" }),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: mode.label })
                    ]
                  },
                  mode.id
                );
              }) }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(o19, { size: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(c, { className: "sidebar-scroll", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p7, { p: "3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
                  "a",
                  {
                    href: "#home",
                    className: `nav-link ${currentSlug === "home" ? "nav-link--active" : ""}`,
                    onClick: (e24) => {
                      e24.preventDefault();
                      handleNavClick("home");
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(HomeIcon, {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p, { size: "2", children: "Overview" })
                    ]
                  }
                ),
                computedNav.map((group) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p7, { mt: "4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p, { size: "1", weight: "medium", color: "gray", className: "nav-group-title", children: group.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p10, { direction: "column", gap: "1", mt: "2", children: group.items.map((item) => {
                    const Icon = KIND_ICONS[item.kind] || FileTextIcon;
                    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                      "a",
                      {
                        href: `#${item.slug}`,
                        className: `nav-link ${currentSlug === item.slug ? "nav-link--active" : ""}`,
                        onClick: (e24) => {
                          e24.preventDefault();
                          handleNavClick(item.slug);
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p, { size: "2", children: item.name })
                      },
                      item.slug
                    );
                  }) })
                ] }, group.title))
              ] }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "div",
              {
                className: "sidebar-resize-handle",
                onMouseDown: handleResizeStart,
                onDoubleClick: () => setSidebarWidth(DEFAULT_SIDEBAR)
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p7, { className: "main-content", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(c, { className: "main-scroll", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p7, { className: "content-inner", p: "5", pb: "9", children }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(dialog_exports.Root, { open: searchOpen, onOpenChange: setSearchOpen, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(dialog_exports.Content, { className: "search-dialog", size: "3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p10, { align: "center", gap: "2", className: "search-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MagnifyingGlassIcon, { width: "18", height: "18" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            text_field_exports.Root,
            {
              ref: searchInputRef,
              placeholder: "Search documentation...",
              value: searchQuery,
              onChange: (e24) => {
                setSearchQuery(e24.target.value);
                setActiveIndex(0);
              },
              onKeyDown: handleSearchKeyDown,
              size: "3",
              variant: "surface",
              className: "search-input"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(r20, { size: "1", children: "esc" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(o19, { size: "4" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p7, { className: "search-results", py: "2", children: !searchQuery.trim() ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p, { size: "2", color: "gray", align: "center", className: "search-hint", children: "Type to search across all documentation..." }) : searchResults.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p, { size: "2", color: "gray", align: "center", className: "search-hint", children: "No results found." }) : searchResults.map((result, i6) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
          "a",
          {
            href: `#${result.slug}`,
            className: `search-result ${i6 === activeIndex ? "search-result--active" : ""}`,
            onClick: (e24) => {
              e24.preventDefault();
              onNavigate(result.slug);
              setSearchOpen(false);
              setSearchQuery("");
              if (result.anchor) {
                setTimeout(() => {
                  document.getElementById(result.anchor)?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            },
            onMouseEnter: () => setActiveIndex(i6),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(p10, { align: "center", gap: "2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                  e13,
                  {
                    variant: "surface",
                    color: result.kind === "class" ? "red" : result.kind === "function" ? "green" : "gray",
                    size: "1",
                    children: result.kind
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(p, { size: "2", weight: "medium", children: result.name })
              ] }),
              result.description && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                p,
                {
                  size: "1",
                  color: "gray",
                  className: "search-result-desc",
                  dangerouslySetInnerHTML: { __html: result.description.slice(0, 100) }
                }
              )
            ]
          },
          `${result.slug}-${result.name}`
        )) })
      ] }) })
    ] });
  }

  // src/HomePage.jsx
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  function HomePage({ readme, packageInfo }) {
    const title = packageInfo?.name || "API Documentation";
    const version = packageInfo?.version;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(p7, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(p7, { className: "hero-section", mb: "6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(p10, { align: "center", gap: "3", mb: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(p7, { className: "hero-icon", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RocketIcon, { width: "24", height: "24" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(r8, { size: "8", weight: "bold", className: "hero-title", children: title }),
          version && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(e13, { variant: "surface", color: "red", size: "2", children: version })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(p, { size: "3", color: "gray", className: "hero-subtitle", children: "API Reference & Documentation" })
      ] }),
      readme ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(p7, { className: "readme-content", dangerouslySetInnerHTML: { __html: readme } }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(p7, { className: "empty-state", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(p, { size: "3", color: "gray", children: "Use the sidebar to navigate through the API documentation." }) })
    ] });
  }

  // src/DocEntry.jsx
  var import_react7 = __toESM(require_react());

  // node_modules/highlight.js/es/core.js
  var import_core2 = __toESM(require_core(), 1);
  var core_default = import_core2.default;

  // node_modules/highlight.js/es/languages/javascript.js
  var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
  var KEYWORDS = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    // It's reached stage 3, which is "recommended for implementation":
    "using"
  ];
  var LITERALS = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ];
  var TYPES = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ];
  var ERROR_TYPES = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ];
  var BUILT_IN_GLOBALS = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ];
  var BUILT_IN_VARIABLES = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ];
  var BUILT_INS = [].concat(
    BUILT_IN_GLOBALS,
    TYPES,
    ERROR_TYPES
  );
  function javascript(hljs) {
    const regex = hljs.regex;
    const hasClosingTag = (match, { after }) => {
      const tag = "</" + match[0].slice(1);
      const pos = match.input.indexOf(tag, after);
      return pos !== -1;
    };
    const IDENT_RE$1 = IDENT_RE;
    const FRAGMENT = {
      begin: "<>",
      end: "</>"
    };
    const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
    const XML_TAG = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (match, response) => {
        const afterMatchIndex = match[0].length + match.index;
        const nextChar = match.input[afterMatchIndex];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          nextChar === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          nextChar === ","
        ) {
          response.ignoreMatch();
          return;
        }
        if (nextChar === ">") {
          if (!hasClosingTag(match, { after: afterMatchIndex })) {
            response.ignoreMatch();
          }
        }
        let m7;
        const afterMatch = match.input.substring(afterMatchIndex);
        if (m7 = afterMatch.match(/^\s*=/)) {
          response.ignoreMatch();
          return;
        }
        if (m7 = afterMatch.match(/^\s+extends\s+/)) {
          if (m7.index === 0) {
            response.ignoreMatch();
            return;
          }
        }
      }
    };
    const KEYWORDS$1 = {
      $pattern: IDENT_RE,
      keyword: KEYWORDS,
      literal: LITERALS,
      built_in: BUILT_INS,
      "variable.language": BUILT_IN_VARIABLES
    };
    const decimalDigits = "[0-9](_?[0-9])*";
    const frac = `\\.(${decimalDigits})`;
    const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
    const NUMBER = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
        { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
        // DecimalBigIntegerLiteral
        { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    };
    const SUBST = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: KEYWORDS$1,
      contains: []
      // defined later
    };
    const HTML_TEMPLATE = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "xml"
      }
    };
    const CSS_TEMPLATE = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "css"
      }
    };
    const GRAPHQL_TEMPLATE = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "graphql"
      }
    };
    const TEMPLATE_STRING = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ]
    };
    const JSDOC_COMMENT = hljs.COMMENT(
      /\/\*\*(?!\/)/,
      "\\*/",
      {
        relevance: 0,
        contains: [
          {
            begin: "(?=@[A-Za-z]+)",
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              },
              {
                className: "type",
                begin: "\\{",
                end: "\\}",
                excludeEnd: true,
                excludeBegin: true,
                relevance: 0
              },
              {
                className: "variable",
                begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                endsParent: true,
                relevance: 0
              },
              // eat spaces (not newlines) so we can find
              // types or variables
              {
                begin: /(?=[^\n])\s/,
                relevance: 0
              }
            ]
          }
        ]
      }
    );
    const COMMENT = {
      className: "comment",
      variants: [
        JSDOC_COMMENT,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE
      ]
    };
    const SUBST_INTERNALS = [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    SUBST.contains = SUBST_INTERNALS.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
    const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
    const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: KEYWORDS$1,
        contains: ["self"].concat(SUBST_AND_COMMENTS)
      }
    ]);
    const PARAMS = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      keywords: KEYWORDS$1,
      contains: PARAMS_CONTAINS
    };
    const CLASS_OR_EXTENDS = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            IDENT_RE$1,
            /\s+/,
            /extends/,
            /\s+/,
            regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            IDENT_RE$1
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    };
    const CLASS_REFERENCE = {
      relevance: 0,
      match: regex.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...TYPES,
          ...ERROR_TYPES
        ]
      }
    };
    const USE_STRICT = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    };
    const FUNCTION_DEFINITION = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            IDENT_RE$1,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [PARAMS],
      illegal: /%/
    };
    const UPPER_CASE_CONSTANT = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function noneOf(list) {
      return regex.concat("(?!", list.join("|"), ")");
    }
    const FUNCTION_CALL = {
      match: regex.concat(
        /\b/,
        noneOf([
          ...BUILT_IN_GLOBALS,
          "super",
          "import"
        ].map((x2) => `${x2}\\s*\\(`)),
        IDENT_RE$1,
        regex.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    };
    const PROPERTY_ACCESS = {
      begin: regex.concat(/\./, regex.lookahead(
        regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
      )),
      end: IDENT_RE$1,
      excludeBegin: true,
      keywords: "prototype",
      className: "property",
      relevance: 0
    };
    const GETTER_OR_SETTER = {
      match: [
        /get|set/,
        /\s+/,
        IDENT_RE$1,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        PARAMS
      ]
    };
    const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
    const FUNCTION_VARIABLE = {
      match: [
        /const|var|let/,
        /\s+/,
        IDENT_RE$1,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        regex.lookahead(FUNC_LEAD_IN_RE)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        PARAMS
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: KEYWORDS$1,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
      illegal: /#(?![$_A-z])/,
      contains: [
        hljs.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        USE_STRICT,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        GRAPHQL_TEMPLATE,
        TEMPLATE_STRING,
        COMMENT,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        NUMBER,
        CLASS_REFERENCE,
        {
          scope: "attr",
          match: IDENT_RE$1 + regex.lookahead(":"),
          relevance: 0
        },
        FUNCTION_VARIABLE,
        {
          // "value" container
          begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            COMMENT,
            hljs.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: FUNC_LEAD_IN_RE,
              returnBegin: true,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: hljs.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: true
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: true,
                      excludeEnd: true,
                      keywords: KEYWORDS$1,
                      contains: PARAMS_CONTAINS
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: FRAGMENT.begin, end: FRAGMENT.end },
                { match: XML_SELF_CLOSING },
                {
                  begin: XML_TAG.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": XML_TAG.isTrulyOpeningTag,
                  end: XML_TAG.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: XML_TAG.begin,
                  end: XML_TAG.end,
                  skip: true,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        FUNCTION_DEFINITION,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: true,
          label: "func.def",
          contains: [
            PARAMS,
            hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        PROPERTY_ACCESS,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + IDENT_RE$1,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [PARAMS]
        },
        FUNCTION_CALL,
        UPPER_CASE_CONSTANT,
        CLASS_OR_EXTENDS,
        GETTER_OR_SETTER,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }

  // node_modules/highlight.js/es/languages/typescript.js
  var IDENT_RE2 = "[A-Za-z$_][0-9A-Za-z$_]*";
  var KEYWORDS2 = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    // It's reached stage 3, which is "recommended for implementation":
    "using"
  ];
  var LITERALS2 = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ];
  var TYPES2 = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ];
  var ERROR_TYPES2 = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ];
  var BUILT_IN_GLOBALS2 = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ];
  var BUILT_IN_VARIABLES2 = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ];
  var BUILT_INS2 = [].concat(
    BUILT_IN_GLOBALS2,
    TYPES2,
    ERROR_TYPES2
  );
  function javascript2(hljs) {
    const regex = hljs.regex;
    const hasClosingTag = (match, { after }) => {
      const tag = "</" + match[0].slice(1);
      const pos = match.input.indexOf(tag, after);
      return pos !== -1;
    };
    const IDENT_RE$1 = IDENT_RE2;
    const FRAGMENT = {
      begin: "<>",
      end: "</>"
    };
    const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
    const XML_TAG = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (match, response) => {
        const afterMatchIndex = match[0].length + match.index;
        const nextChar = match.input[afterMatchIndex];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          nextChar === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          nextChar === ","
        ) {
          response.ignoreMatch();
          return;
        }
        if (nextChar === ">") {
          if (!hasClosingTag(match, { after: afterMatchIndex })) {
            response.ignoreMatch();
          }
        }
        let m7;
        const afterMatch = match.input.substring(afterMatchIndex);
        if (m7 = afterMatch.match(/^\s*=/)) {
          response.ignoreMatch();
          return;
        }
        if (m7 = afterMatch.match(/^\s+extends\s+/)) {
          if (m7.index === 0) {
            response.ignoreMatch();
            return;
          }
        }
      }
    };
    const KEYWORDS$1 = {
      $pattern: IDENT_RE2,
      keyword: KEYWORDS2,
      literal: LITERALS2,
      built_in: BUILT_INS2,
      "variable.language": BUILT_IN_VARIABLES2
    };
    const decimalDigits = "[0-9](_?[0-9])*";
    const frac = `\\.(${decimalDigits})`;
    const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
    const NUMBER = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
        { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
        // DecimalBigIntegerLiteral
        { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    };
    const SUBST = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: KEYWORDS$1,
      contains: []
      // defined later
    };
    const HTML_TEMPLATE = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "xml"
      }
    };
    const CSS_TEMPLATE = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "css"
      }
    };
    const GRAPHQL_TEMPLATE = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "graphql"
      }
    };
    const TEMPLATE_STRING = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ]
    };
    const JSDOC_COMMENT = hljs.COMMENT(
      /\/\*\*(?!\/)/,
      "\\*/",
      {
        relevance: 0,
        contains: [
          {
            begin: "(?=@[A-Za-z]+)",
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              },
              {
                className: "type",
                begin: "\\{",
                end: "\\}",
                excludeEnd: true,
                excludeBegin: true,
                relevance: 0
              },
              {
                className: "variable",
                begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                endsParent: true,
                relevance: 0
              },
              // eat spaces (not newlines) so we can find
              // types or variables
              {
                begin: /(?=[^\n])\s/,
                relevance: 0
              }
            ]
          }
        ]
      }
    );
    const COMMENT = {
      className: "comment",
      variants: [
        JSDOC_COMMENT,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE
      ]
    };
    const SUBST_INTERNALS = [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    SUBST.contains = SUBST_INTERNALS.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
    const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
    const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: KEYWORDS$1,
        contains: ["self"].concat(SUBST_AND_COMMENTS)
      }
    ]);
    const PARAMS = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      keywords: KEYWORDS$1,
      contains: PARAMS_CONTAINS
    };
    const CLASS_OR_EXTENDS = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            IDENT_RE$1,
            /\s+/,
            /extends/,
            /\s+/,
            regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            IDENT_RE$1
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    };
    const CLASS_REFERENCE = {
      relevance: 0,
      match: regex.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...TYPES2,
          ...ERROR_TYPES2
        ]
      }
    };
    const USE_STRICT = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    };
    const FUNCTION_DEFINITION = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            IDENT_RE$1,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [PARAMS],
      illegal: /%/
    };
    const UPPER_CASE_CONSTANT = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function noneOf(list) {
      return regex.concat("(?!", list.join("|"), ")");
    }
    const FUNCTION_CALL = {
      match: regex.concat(
        /\b/,
        noneOf([
          ...BUILT_IN_GLOBALS2,
          "super",
          "import"
        ].map((x2) => `${x2}\\s*\\(`)),
        IDENT_RE$1,
        regex.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    };
    const PROPERTY_ACCESS = {
      begin: regex.concat(/\./, regex.lookahead(
        regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
      )),
      end: IDENT_RE$1,
      excludeBegin: true,
      keywords: "prototype",
      className: "property",
      relevance: 0
    };
    const GETTER_OR_SETTER = {
      match: [
        /get|set/,
        /\s+/,
        IDENT_RE$1,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        PARAMS
      ]
    };
    const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
    const FUNCTION_VARIABLE = {
      match: [
        /const|var|let/,
        /\s+/,
        IDENT_RE$1,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        regex.lookahead(FUNC_LEAD_IN_RE)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        PARAMS
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: KEYWORDS$1,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
      illegal: /#(?![$_A-z])/,
      contains: [
        hljs.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        USE_STRICT,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        GRAPHQL_TEMPLATE,
        TEMPLATE_STRING,
        COMMENT,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        NUMBER,
        CLASS_REFERENCE,
        {
          scope: "attr",
          match: IDENT_RE$1 + regex.lookahead(":"),
          relevance: 0
        },
        FUNCTION_VARIABLE,
        {
          // "value" container
          begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            COMMENT,
            hljs.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: FUNC_LEAD_IN_RE,
              returnBegin: true,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: hljs.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: true
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: true,
                      excludeEnd: true,
                      keywords: KEYWORDS$1,
                      contains: PARAMS_CONTAINS
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: FRAGMENT.begin, end: FRAGMENT.end },
                { match: XML_SELF_CLOSING },
                {
                  begin: XML_TAG.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": XML_TAG.isTrulyOpeningTag,
                  end: XML_TAG.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: XML_TAG.begin,
                  end: XML_TAG.end,
                  skip: true,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        FUNCTION_DEFINITION,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: true,
          label: "func.def",
          contains: [
            PARAMS,
            hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        PROPERTY_ACCESS,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + IDENT_RE$1,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [PARAMS]
        },
        FUNCTION_CALL,
        UPPER_CASE_CONSTANT,
        CLASS_OR_EXTENDS,
        GETTER_OR_SETTER,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function typescript(hljs) {
    const regex = hljs.regex;
    const tsLanguage = javascript2(hljs);
    const IDENT_RE$1 = IDENT_RE2;
    const TYPES3 = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "symbol",
      "bigint",
      "unknown"
    ];
    const NAMESPACE = {
      begin: [
        /namespace/,
        /\s+/,
        hljs.IDENT_RE
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      }
    };
    const INTERFACE = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: true,
      keywords: {
        keyword: "interface extends",
        built_in: TYPES3
      },
      contains: [tsLanguage.exports.CLASS_REFERENCE]
    };
    const USE_STRICT = {
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    };
    const TS_SPECIFIC_KEYWORDS = [
      "type",
      // "namespace",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly",
      "enum",
      "override",
      "satisfies"
    ];
    const KEYWORDS$1 = {
      $pattern: IDENT_RE2,
      keyword: KEYWORDS2.concat(TS_SPECIFIC_KEYWORDS),
      literal: LITERALS2,
      built_in: BUILT_INS2.concat(TYPES3),
      "variable.language": BUILT_IN_VARIABLES2
    };
    const DECORATOR = {
      className: "meta",
      begin: "@" + IDENT_RE$1
    };
    const swapMode = (mode, label, replacement) => {
      const indx = mode.contains.findIndex((m7) => m7.label === label);
      if (indx === -1) {
        throw new Error("can not find mode to replace");
      }
      mode.contains.splice(indx, 1, replacement);
    };
    Object.assign(tsLanguage.keywords, KEYWORDS$1);
    tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
    const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c4) => c4.scope === "attr");
    const OPTIONAL_KEY_OR_ARGUMENT = Object.assign(
      {},
      ATTRIBUTE_HIGHLIGHT,
      { match: regex.concat(IDENT_RE$1, regex.lookahead(/\s*\?:/)) }
    );
    tsLanguage.exports.PARAMS_CONTAINS.push([
      tsLanguage.exports.CLASS_REFERENCE,
      // class reference for highlighting the params types
      ATTRIBUTE_HIGHLIGHT,
      // highlight the params key
      OPTIONAL_KEY_OR_ARGUMENT
      // Added for optional property assignment highlighting
    ]);
    tsLanguage.contains = tsLanguage.contains.concat([
      DECORATOR,
      NAMESPACE,
      INTERFACE,
      OPTIONAL_KEY_OR_ARGUMENT
      // Added for optional property assignment highlighting
    ]);
    swapMode(tsLanguage, "shebang", hljs.SHEBANG());
    swapMode(tsLanguage, "use_strict", USE_STRICT);
    const functionDeclaration = tsLanguage.contains.find((m7) => m7.label === "func.def");
    functionDeclaration.relevance = 0;
    Object.assign(tsLanguage, {
      name: "TypeScript",
      aliases: [
        "ts",
        "tsx",
        "mts",
        "cts"
      ]
    });
    return tsLanguage;
  }

  // node_modules/highlight.js/es/languages/json.js
  function json(hljs) {
    const ATTRIBUTE = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01
    };
    const PUNCTUATION = {
      match: /[{}[\],:]/,
      className: "punctuation",
      relevance: 0
    };
    const LITERALS3 = [
      "true",
      "false",
      "null"
    ];
    const LITERALS_MODE = {
      scope: "literal",
      beginKeywords: LITERALS3.join(" ")
    };
    return {
      name: "JSON",
      aliases: ["jsonc"],
      keywords: {
        literal: LITERALS3
      },
      contains: [
        ATTRIBUTE,
        PUNCTUATION,
        hljs.QUOTE_STRING_MODE,
        LITERALS_MODE,
        hljs.C_NUMBER_MODE,
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE
      ],
      illegal: "\\S"
    };
  }

  // node_modules/highlight.js/es/languages/xml.js
  function xml(hljs) {
    const regex = hljs.regex;
    const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
    const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
    const XML_ENTITIES = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    };
    const XML_META_KEYWORDS = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    };
    const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
      begin: /\(/,
      end: /\)/
    });
    const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
    const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
    const TAG_INTERNALS = {
      endsWithParent: true,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: XML_IDENT_RE,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: true,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [XML_ENTITIES]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [XML_ENTITIES]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: true,
      unicodeRegex: true,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            XML_META_KEYWORDS,
            QUOTE_META_STRING_MODE,
            APOS_META_STRING_MODE,
            XML_META_PAR_KEYWORDS,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    XML_META_KEYWORDS,
                    XML_META_PAR_KEYWORDS,
                    QUOTE_META_STRING_MODE,
                    APOS_META_STRING_MODE
                  ]
                }
              ]
            }
          ]
        },
        hljs.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        XML_ENTITIES,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                QUOTE_META_STRING_MODE
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [TAG_INTERNALS],
          starts: {
            end: /<\/style>/,
            returnEnd: true,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [TAG_INTERNALS],
          starts: {
            end: /<\/script>/,
            returnEnd: true,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: regex.concat(
            /</,
            regex.lookahead(regex.concat(
              TAG_NAME_RE,
              // <tag/>
              // <tag>
              // <tag ...
              regex.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: TAG_NAME_RE,
              relevance: 0,
              starts: TAG_INTERNALS
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: regex.concat(
            /<\//,
            regex.lookahead(regex.concat(
              TAG_NAME_RE,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: TAG_NAME_RE,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: true
            }
          ]
        }
      ]
    };
  }

  // node_modules/highlight.js/es/languages/css.js
  var MODES = (hljs) => {
    return {
      IMPORTANT: {
        scope: "meta",
        begin: "!important"
      },
      BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
      },
      FUNCTION_DISPATCH: {
        className: "built_in",
        begin: /[\w-]+(?=\()/
      },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0
      },
      CSS_VARIABLE: {
        className: "attr",
        begin: /--[A-Za-z_][A-Za-z0-9_-]*/
      }
    };
  };
  var HTML_TAGS = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ];
  var SVG_TAGS = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ];
  var TAGS = [
    ...HTML_TAGS,
    ...SVG_TAGS
  ];
  var MEDIA_FEATURES = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse();
  var PSEUDO_CLASSES = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse();
  var PSEUDO_ELEMENTS = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse();
  var ATTRIBUTES = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse();
  function css(hljs) {
    const regex = hljs.regex;
    const modes = MODES(hljs);
    const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
    const AT_MODIFIERS = "and or not only";
    const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
    const IDENT_RE3 = "[a-zA-Z-][a-zA-Z0-9_-]*";
    const STRINGS = [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ];
    return {
      name: "CSS",
      case_insensitive: true,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: {
        // for visual continuity with `tag {}` and because we
        // don't have a great class for this?
        keyframePosition: "selector-tag"
      },
      contains: [
        modes.BLOCK_COMMENT,
        VENDOR_PREFIX,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        modes.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\." + IDENT_RE3,
          relevance: 0
        },
        modes.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
            { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
          ]
        },
        // we may actually need this (12/2020)
        // { // pseudo-selector params
        //   begin: /\(/,
        //   end: /\)/,
        //   contains: [ hljs.CSS_NUMBER_MODE ]
        // },
        modes.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
        },
        // attribute values
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            modes.BLOCK_COMMENT,
            modes.HEXCOLOR,
            modes.IMPORTANT,
            modes.CSS_NUMBER_MODE,
            ...STRINGS,
            // needed to highlight these as strings and to avoid issues with
            // illegal characters that might be inside urls that would tigger the
            // languages illegal stack
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              // from keywords
              keywords: { built_in: "url data-uri" },
              contains: [
                ...STRINGS,
                {
                  className: "string",
                  // any character other than `)` as in `url()` will be the start
                  // of a string, which ends with `)` (from the parent mode)
                  begin: /[^)]/,
                  endsWithParent: true,
                  excludeEnd: true
                }
              ]
            },
            modes.FUNCTION_DISPATCH
          ]
        },
        {
          begin: regex.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          // break on Less variables @var: ...
          contains: [
            {
              className: "keyword",
              begin: AT_PROPERTY_RE
            },
            {
              begin: /\s/,
              endsWithParent: true,
              excludeEnd: true,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: AT_MODIFIERS,
                attribute: MEDIA_FEATURES.join(" ")
              },
              contains: [
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                ...STRINGS,
                modes.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: "selector-tag",
          begin: "\\b(" + TAGS.join("|") + ")\\b"
        }
      ]
    };
  }

  // node_modules/highlight.js/es/languages/bash.js
  function bash(hljs) {
    const regex = hljs.regex;
    const VAR = {};
    const BRACED_VAR = {
      begin: /\$\{/,
      end: /\}/,
      contains: [
        "self",
        {
          begin: /:-/,
          contains: [VAR]
        }
        // default values
      ]
    };
    Object.assign(VAR, {
      className: "variable",
      variants: [
        { begin: regex.concat(
          /\$[\w\d#@][\w\d_]*/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          `(?![\\w\\d])(?![$])`
        ) },
        BRACED_VAR
      ]
    });
    const SUBST = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [hljs.BACKSLASH_ESCAPE]
    };
    const COMMENT = hljs.inherit(
      hljs.COMMENT(),
      {
        match: [
          /(^|\s)/,
          /#.*$/
        ],
        scope: {
          2: "comment"
        }
      }
    );
    const HERE_DOC = {
      begin: /<<-?\s*(?=\w+)/,
      starts: { contains: [
        hljs.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ] }
    };
    const QUOTE_STRING = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        VAR,
        SUBST
      ]
    };
    SUBST.contains.push(QUOTE_STRING);
    const ESCAPED_QUOTE = {
      match: /\\"/
    };
    const APOS_STRING = {
      className: "string",
      begin: /'/,
      end: /'/
    };
    const ESCAPED_APOS = {
      match: /\\'/
    };
    const ARITHMETIC = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [
        {
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        },
        hljs.NUMBER_MODE,
        VAR
      ]
    };
    const SH_LIKE_SHELLS = [
      "fish",
      "bash",
      "zsh",
      "sh",
      "csh",
      "ksh",
      "tcsh",
      "dash",
      "scsh"
    ];
    const KNOWN_SHEBANG = hljs.SHEBANG({
      binary: `(${SH_LIKE_SHELLS.join("|")})`,
      relevance: 10
    });
    const FUNCTION = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0
    };
    const KEYWORDS3 = [
      "if",
      "then",
      "else",
      "elif",
      "fi",
      "time",
      "for",
      "while",
      "until",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "coproc",
      "function",
      "select"
    ];
    const LITERALS3 = [
      "true",
      "false"
    ];
    const PATH_MODE = { match: /(\/[a-z._-]+)+/ };
    const SHELL_BUILT_INS = [
      "break",
      "cd",
      "continue",
      "eval",
      "exec",
      "exit",
      "export",
      "getopts",
      "hash",
      "pwd",
      "readonly",
      "return",
      "shift",
      "test",
      "times",
      "trap",
      "umask",
      "unset"
    ];
    const BASH_BUILT_INS = [
      "alias",
      "bind",
      "builtin",
      "caller",
      "command",
      "declare",
      "echo",
      "enable",
      "help",
      "let",
      "local",
      "logout",
      "mapfile",
      "printf",
      "read",
      "readarray",
      "source",
      "sudo",
      "type",
      "typeset",
      "ulimit",
      "unalias"
    ];
    const ZSH_BUILT_INS = [
      "autoload",
      "bg",
      "bindkey",
      "bye",
      "cap",
      "chdir",
      "clone",
      "comparguments",
      "compcall",
      "compctl",
      "compdescribe",
      "compfiles",
      "compgroups",
      "compquote",
      "comptags",
      "comptry",
      "compvalues",
      "dirs",
      "disable",
      "disown",
      "echotc",
      "echoti",
      "emulate",
      "fc",
      "fg",
      "float",
      "functions",
      "getcap",
      "getln",
      "history",
      "integer",
      "jobs",
      "kill",
      "limit",
      "log",
      "noglob",
      "popd",
      "print",
      "pushd",
      "pushln",
      "rehash",
      "sched",
      "setcap",
      "setopt",
      "stat",
      "suspend",
      "ttyctl",
      "unfunction",
      "unhash",
      "unlimit",
      "unsetopt",
      "vared",
      "wait",
      "whence",
      "where",
      "which",
      "zcompile",
      "zformat",
      "zftp",
      "zle",
      "zmodload",
      "zparseopts",
      "zprof",
      "zpty",
      "zregexparse",
      "zsocket",
      "zstyle",
      "ztcp"
    ];
    const GNU_CORE_UTILS = [
      "chcon",
      "chgrp",
      "chown",
      "chmod",
      "cp",
      "dd",
      "df",
      "dir",
      "dircolors",
      "ln",
      "ls",
      "mkdir",
      "mkfifo",
      "mknod",
      "mktemp",
      "mv",
      "realpath",
      "rm",
      "rmdir",
      "shred",
      "sync",
      "touch",
      "truncate",
      "vdir",
      "b2sum",
      "base32",
      "base64",
      "cat",
      "cksum",
      "comm",
      "csplit",
      "cut",
      "expand",
      "fmt",
      "fold",
      "head",
      "join",
      "md5sum",
      "nl",
      "numfmt",
      "od",
      "paste",
      "ptx",
      "pr",
      "sha1sum",
      "sha224sum",
      "sha256sum",
      "sha384sum",
      "sha512sum",
      "shuf",
      "sort",
      "split",
      "sum",
      "tac",
      "tail",
      "tr",
      "tsort",
      "unexpand",
      "uniq",
      "wc",
      "arch",
      "basename",
      "chroot",
      "date",
      "dirname",
      "du",
      "echo",
      "env",
      "expr",
      "factor",
      // "false", // keyword literal already
      "groups",
      "hostid",
      "id",
      "link",
      "logname",
      "nice",
      "nohup",
      "nproc",
      "pathchk",
      "pinky",
      "printenv",
      "printf",
      "pwd",
      "readlink",
      "runcon",
      "seq",
      "sleep",
      "stat",
      "stdbuf",
      "stty",
      "tee",
      "test",
      "timeout",
      // "true", // keyword literal already
      "tty",
      "uname",
      "unlink",
      "uptime",
      "users",
      "who",
      "whoami",
      "yes"
    ];
    return {
      name: "Bash",
      aliases: [
        "sh",
        "zsh"
      ],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: KEYWORDS3,
        literal: LITERALS3,
        built_in: [
          ...SHELL_BUILT_INS,
          ...BASH_BUILT_INS,
          // Shell modifiers
          "set",
          "shopt",
          ...ZSH_BUILT_INS,
          ...GNU_CORE_UTILS
        ]
      },
      contains: [
        KNOWN_SHEBANG,
        // to catch known shells and boost relevancy
        hljs.SHEBANG(),
        // to catch unknown shells but still highlight the shebang
        FUNCTION,
        ARITHMETIC,
        COMMENT,
        HERE_DOC,
        PATH_MODE,
        QUOTE_STRING,
        ESCAPED_QUOTE,
        APOS_STRING,
        ESCAPED_APOS,
        VAR
      ]
    };
  }

  // src/DocEntry.jsx
  var import_jsx_runtime20 = __toESM(require_jsx_runtime());
  core_default.registerLanguage("javascript", javascript);
  core_default.registerLanguage("js", javascript);
  core_default.registerLanguage("typescript", typescript);
  core_default.registerLanguage("ts", typescript);
  core_default.registerLanguage("json", json);
  core_default.registerLanguage("xml", xml);
  core_default.registerLanguage("html", xml);
  core_default.registerLanguage("css", css);
  core_default.registerLanguage("bash", bash);
  core_default.registerLanguage("shell", bash);
  function highlightCode(code, lang) {
    try {
      if (lang && core_default.getLanguage(lang)) {
        return core_default.highlight(code, { language: lang }).value;
      }
      return core_default.highlightAuto(code).value;
    } catch (_) {
      return code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
  function Signature({ doclet, isConstructor }) {
    if (doclet.kind !== "function" && !isConstructor) return null;
    const params = (doclet.params || []).filter((p15) => p15.name && !p15.name.includes(".")).map((p15) => {
      let str = "";
      if (p15.variable) str += "...";
      str += p15.name;
      if (p15.optional) str += "?";
      if (p15.type) str += ": " + p15.type.join(" | ");
      return str;
    });
    const name = isConstructor ? `new ${doclet.name}` : doclet.name;
    const ret = doclet.returns?.[0]?.type ? ` \u2192 ${doclet.returns[0].type.join(" | ")}` : "";
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p7, { className: "signature-block", my: "3", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p11, { size: "2", className: "signature-code", children: [
      name,
      "(",
      params.join(", "),
      ")",
      ret
    ] }) });
  }
  function ParamsTable({ params }) {
    if (!params || params.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p7, { mt: "3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", weight: "medium", color: "gray", mb: "2", className: "subsection-label", children: "Parameters" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(table_exports.Root, { variant: "surface", size: "1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(table_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.ColumnHeaderCell, { children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.ColumnHeaderCell, { children: "Type" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.ColumnHeaderCell, { children: "Default" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.ColumnHeaderCell, { children: "Description" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Body, { children: params.map((p15, i6) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(table_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Cell, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p10, { align: "center", gap: "1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p11, { size: "1", variant: "ghost", children: p15.name }),
            p15.optional && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { size: "1", variant: "surface", color: "gray", children: "opt" }),
            p15.variable && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { size: "1", variant: "surface", color: "plum", children: "rest" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Cell, { children: p15.type ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p10, { gap: "1", wrap: "wrap", children: p15.type.map((t17, j) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "soft", color: "red", size: "1", children: t17 }, j)) }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", color: "gray", children: "*" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Cell, { children: p15.defaultvalue ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p11, { size: "1", variant: "ghost", children: p15.defaultvalue }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", color: "gray", children: "\u2014" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Cell, { children: p15.description ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", dangerouslySetInnerHTML: { __html: p15.description } }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", color: "gray", children: "\u2014" }) })
        ] }, p15.name + "-" + i6)) })
      ] })
    ] });
  }
  function PropertiesTable({ properties }) {
    if (!properties || properties.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p7, { mt: "3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", weight: "medium", color: "gray", mb: "2", className: "subsection-label", children: "Properties" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(table_exports.Root, { variant: "surface", size: "1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(table_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.ColumnHeaderCell, { children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.ColumnHeaderCell, { children: "Type" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.ColumnHeaderCell, { children: "Description" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Body, { children: properties.map((p15, i6) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(table_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Cell, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p11, { size: "1", variant: "ghost", children: p15.name }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Cell, { children: p15.type ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p10, { gap: "1", wrap: "wrap", children: p15.type.map((t17, j) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "soft", color: "red", size: "1", children: t17 }, j)) }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", color: "gray", children: "*" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(table_exports.Cell, { children: p15.description ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", dangerouslySetInnerHTML: { __html: p15.description } }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", color: "gray", children: "\u2014" }) })
        ] }, p15.name + "-" + i6)) })
      ] })
    ] });
  }
  function Returns({ returns }) {
    if (!returns || returns.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p7, { mt: "3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", weight: "medium", color: "gray", mb: "1", className: "subsection-label", children: "Returns" }),
      returns.map((r26, i6) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p10, { gap: "2", align: "center", mt: "1", children: [
        r26.type && r26.type.map((t17, j) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "soft", color: "green", size: "1", children: t17 }, j)),
        r26.description && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", dangerouslySetInnerHTML: { __html: r26.description } })
      ] }, i6))
    ] });
  }
  function Throws({ exceptions }) {
    if (!exceptions || exceptions.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p7, { mt: "3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", weight: "medium", color: "gray", mb: "1", className: "subsection-label", children: "Throws" }),
      exceptions.map((e24, i6) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p10, { gap: "2", align: "center", mt: "1", children: [
        e24.type && e24.type.map((t17, j) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "soft", color: "red", size: "1", children: t17 }, j)),
        e24.description && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", dangerouslySetInnerHTML: { __html: e24.description } })
      ] }, i6))
    ] });
  }
  function Examples({ examples }) {
    if (!examples || examples.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p7, { mt: "3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", weight: "medium", color: "gray", mb: "2", className: "subsection-label", children: "Examples" }),
      examples.map((ex, i6) => {
        let caption = null;
        let code = ex;
        const match = ex.match(/^\s*<caption>(.*?)<\/caption>\s*([\s\S]*)/);
        if (match) {
          caption = match[1];
          code = match[2];
        }
        const highlighted = highlightCode(code.trim(), "javascript");
        return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p7, { className: "code-block-wrap", mt: "2", children: [
          caption && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", color: "gray", className: "code-caption", children: caption }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("pre", { className: "code-block", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("code", { dangerouslySetInnerHTML: { __html: highlighted } }) })
        ] }, i6);
      })
    ] });
  }
  function MetaBadges({ doclet }) {
    const badges = [];
    if (doclet.access && doclet.access !== "public") {
      badges.push(/* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "surface", color: doclet.access === "private" ? "red" : "orange", size: "1", children: doclet.access }, "access"));
    }
    if (doclet.scope === "static") {
      badges.push(/* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "surface", color: "blue", size: "1", children: "static" }, "static"));
    }
    if (doclet.async) {
      badges.push(/* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "surface", color: "cyan", size: "1", children: "async" }, "async"));
    }
    if (doclet.generator) {
      badges.push(/* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "surface", color: "plum", size: "1", children: "generator" }, "gen"));
    }
    if (doclet.readonly) {
      badges.push(/* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "surface", color: "gray", size: "1", children: "readonly" }, "ro"));
    }
    if (doclet.since) {
      badges.push(/* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(e13, { variant: "outline", color: "gray", size: "1", children: [
        "since ",
        doclet.since
      ] }, "since"));
    }
    return badges.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p10, { gap: "1", children: badges }) : null;
  }
  function SeeAlso({ see }) {
    if (!see || see.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p7, { mt: "3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", weight: "medium", color: "gray", mb: "1", className: "subsection-label", children: "See also" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "see-list", children: see.map((s13, i6) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "2", dangerouslySetInnerHTML: { __html: s13 } }) }, i6)) })
    ] });
  }
  function DocEntry({ doclet, isConstructor = false }) {
    const isFn = doclet.kind === "function" || isConstructor;
    const isTypedef = doclet.kind === "typedef";
    const isEvent = doclet.kind === "event";
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(o14, { id: doclet.name, className: "doc-entry", variant: "surface", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p10, { justify: "between", align: "start", mb: "2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p10, { direction: "column", gap: "1", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p10, { align: "center", gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MetaBadges, { doclet }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "3", weight: "bold", className: "entry-name", children: doclet.name }),
          !isFn && doclet.type && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p10, { gap: "1", children: doclet.type.map((t17, i6) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(e13, { variant: "soft", color: "red", size: "1", children: t17 }, i6)) })
        ] }) }),
        doclet.meta && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p, { size: "1", color: "gray", className: "source-ref", children: [
          doclet.meta.filename,
          doclet.meta.lineno ? `:${doclet.meta.lineno}` : ""
        ] })
      ] }),
      doclet.deprecated && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p7, { className: "deprecated-notice", mb: "2", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p, { size: "2", color: "red", children: [
        "\u26A0 Deprecated",
        typeof doclet.deprecated === "string" ? `: ${doclet.deprecated}` : ""
      ] }) }),
      (isFn || isConstructor) && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Signature, { doclet, isConstructor }),
      doclet.description && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p7, { className: "entry-description", mt: "2", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { dangerouslySetInnerHTML: { __html: doclet.description } }) }),
      isFn && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ParamsTable, { params: doclet.params }),
      isTypedef && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PropertiesTable, { properties: doclet.properties }),
      isTypedef && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ParamsTable, { params: doclet.params }),
      isEvent && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ParamsTable, { params: doclet.params }),
      !isFn && !isTypedef && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PropertiesTable, { properties: doclet.properties }),
      isFn && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Returns, { returns: doclet.returns }),
      isFn && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Throws, { exceptions: doclet.exceptions }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Examples, { examples: doclet.examples }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SeeAlso, { see: doclet.see }),
      doclet.defaultvalue && !isFn && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(p10, { mt: "2", gap: "2", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p, { size: "1", weight: "medium", color: "gray", children: "Default:" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(p11, { size: "1", children: doclet.defaultvalue })
      ] })
    ] });
  }

  // src/EntityPage.jsx
  var import_jsx_runtime21 = __toESM(require_jsx_runtime());
  var KIND_COLORS = {
    class: "red",
    module: "cyan",
    interface: "orange",
    namespace: "green",
    mixin: "plum",
    global: "gray"
  };
  function Section({ title, items }) {
    if (!items || items.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p7, { className: "doc-section", mt: "6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(r8, { size: "4", mb: "4", className: "section-title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(p10, { direction: "column", gap: "3", children: items.map((item, i6) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DocEntry, { doclet: item }, item.name + "-" + i6)) })
    ] });
  }
  function ClassLinks({ classes }) {
    if (!classes || classes.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p7, { className: "doc-section", mt: "6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(r8, { size: "4", mb: "4", className: "section-title", children: "Classes" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(p10, { direction: "column", gap: "2", children: classes.map((cls) => {
        const slug = cls.longname.replace(/^module:/, "module-").replace(/[~#.]/g, "-").replace(/[^a-zA-Z0-9_-]/g, "_");
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { href: `#${slug}`, className: "class-link-card", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(o14, { variant: "surface", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p10, { align: "center", gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(CubeIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(p, { size: "2", weight: "medium", children: cls.name }),
          cls.description && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p, { size: "1", color: "gray", className: "class-link-desc", children: [
            "\u2014 ",
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { dangerouslySetInnerHTML: { __html: cls.description.slice(0, 80) } })
          ] })
        ] }) }) }, cls.name);
      }) })
    ] });
  }
  function EntityPage({ page }) {
    const d8 = page.doclet;
    const m7 = page.members;
    const kindColor = KIND_COLORS[page.kind] || "gray";
    if (page.kind === "global") {
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p7, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p10, { align: "center", gap: "3", mb: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(e13, { variant: "solid", color: "gray", size: "2", children: "Global" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(r8, { size: "7", children: "Global" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(o19, { size: "4", my: "4" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ClassLinks, { classes: m7.classes }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Functions", items: m7.methods }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Members", items: m7.properties }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Type Definitions", items: m7.typedefs }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Events", items: m7.events })
      ] });
    }
    const hasManyCategories = [
      m7.classes,
      m7.methods,
      m7.staticMethods,
      m7.properties,
      m7.staticProperties,
      m7.events,
      m7.typedefs
    ].filter((arr) => arr && arr.length > 0).length > 2;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p7, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p10, { align: "center", gap: "3", mb: "2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(e13, { variant: "solid", color: kindColor, size: "2", children: page.kind.charAt(0).toUpperCase() + page.kind.slice(1) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(r8, { size: "7", className: "entity-title", children: page.title })
      ] }),
      d8.meta && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p, { size: "1", color: "gray", className: "source-ref", children: [
        d8.meta.filename,
        d8.meta.lineno ? `:${d8.meta.lineno}` : ""
      ] }),
      d8.augments && d8.augments.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p10, { gap: "2", mt: "2", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(p, { size: "2", color: "gray", children: "extends" }),
        d8.augments.map((a17) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(e13, { variant: "outline", color: "gray", children: a17 }, a17))
      ] }),
      d8.implements && d8.implements.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p10, { gap: "2", mt: "2", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(p, { size: "2", color: "gray", children: "implements" }),
        d8.implements.map((i6) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(e13, { variant: "outline", color: "gray", children: i6 }, i6))
      ] }),
      d8.deprecated && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(p7, { className: "deprecated-notice", mt: "3", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p, { size: "2", weight: "medium", color: "red", children: [
        "\u26A0 Deprecated",
        typeof d8.deprecated === "string" ? `: ${d8.deprecated}` : ""
      ] }) }),
      (d8.classdesc || d8.description) && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(p7, { className: "entity-description", mt: "4", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { dangerouslySetInnerHTML: { __html: d8.classdesc || d8.description } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(o19, { size: "4", my: "5" }),
      page.kind === "class" && d8.params && d8.params.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p7, { className: "doc-section", mt: "2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(r8, { size: "4", mb: "4", className: "section-title", children: "Constructor" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DocEntry, { doclet: d8, isConstructor: true })
      ] }),
      hasManyCategories ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(tabs_exports.Root, { defaultValue: getDefaultTab(m7), children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(tabs_exports.List, { children: [
          m7.properties?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(tabs_exports.Trigger, { value: "properties", children: "Properties" }),
          m7.staticProperties?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(tabs_exports.Trigger, { value: "staticProperties", children: "Static Properties" }),
          m7.methods?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(tabs_exports.Trigger, { value: "methods", children: "Methods" }),
          m7.staticMethods?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(tabs_exports.Trigger, { value: "staticMethods", children: "Static Methods" }),
          m7.events?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(tabs_exports.Trigger, { value: "events", children: "Events" }),
          m7.typedefs?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(tabs_exports.Trigger, { value: "typedefs", children: "Types" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(p7, { mt: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TabContent, { value: "properties", items: m7.properties }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TabContent, { value: "staticProperties", items: m7.staticProperties }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TabContent, { value: "methods", items: m7.methods }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TabContent, { value: "staticMethods", items: m7.staticMethods }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TabContent, { value: "events", items: m7.events }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TabContent, { value: "typedefs", items: m7.typedefs })
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ClassLinks, { classes: m7.classes }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Properties", items: m7.properties }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Static Properties", items: m7.staticProperties }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Methods", items: m7.methods }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Static Methods", items: m7.staticMethods }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Events", items: m7.events }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Section, { title: "Type Definitions", items: m7.typedefs })
      ] })
    ] });
  }
  function TabContent({ value, items }) {
    if (!items || items.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(tabs_exports.Content, { value, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(p10, { direction: "column", gap: "3", children: items.map((item, i6) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DocEntry, { doclet: item }, item.name + "-" + i6)) }) });
  }
  function getDefaultTab(members) {
    if (members.methods?.length) return "methods";
    if (members.properties?.length) return "properties";
    if (members.staticMethods?.length) return "staticMethods";
    if (members.staticProperties?.length) return "staticProperties";
    if (members.events?.length) return "events";
    return "typedefs";
  }

  // src/App.jsx
  var import_jsx_runtime22 = __toESM(require_jsx_runtime());
  function getHash() {
    return window.location.hash.slice(1) || "home";
  }
  function getInitialAppearance() {
    try {
      const saved = localStorage.getItem("jsdoc-appearance");
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) {
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }
  function App({ data: data2 }) {
    const [currentSlug, setCurrentSlug] = (0, import_react8.useState)(getHash);
    const [appearance, setAppearance] = (0, import_react8.useState)(getInitialAppearance);
    (0, import_react8.useEffect)(() => {
      const handler = () => setCurrentSlug(getHash());
      window.addEventListener("hashchange", handler);
      return () => window.removeEventListener("hashchange", handler);
    }, []);
    (0, import_react8.useEffect)(() => {
      try {
        localStorage.setItem("jsdoc-appearance", appearance);
      } catch (_) {
      }
    }, [appearance]);
    const toggleAppearance = (0, import_react8.useCallback)(() => {
      setAppearance((a17) => a17 === "dark" ? "light" : "dark");
    }, []);
    const navigate = (0, import_react8.useCallback)((slug) => {
      window.location.hash = slug;
    }, []);
    const currentPage = (0, import_react8.useMemo)(
      () => data2.pages.find((p15) => p15.slug === currentSlug) || data2.pages[0],
      [data2.pages, currentSlug]
    );
    const content = currentPage.kind === "home" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(HomePage, { readme: data2.readme, packageInfo: data2.packageInfo }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(EntityPage, { page: currentPage });
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      R2,
      {
        appearance,
        accentColor: "red",
        grayColor: "slate",
        radius: "medium",
        scaling: "100%",
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Layout,
          {
            nav: data2.nav,
            currentSlug,
            onNavigate: navigate,
            packageInfo: data2.packageInfo,
            pages: data2.pages,
            appearance,
            onToggleAppearance: toggleAppearance,
            children: content
          }
        )
      }
    );
  }

  // src/index.jsx
  var import_jsx_runtime23 = __toESM(require_jsx_runtime());
  var data = window.__JSDOC_DATA__;
  var root = (0, import_client.createRoot)(document.getElementById("root"));
  root.render(
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react9.default.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(App, { data }) })
  );
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=index.js.map
