/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.3",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                } return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                } return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ca(b),
            i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {},
            f = a === tb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
            0: 200,
            1223: 204
        },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
});




/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k) {
    k.transit = {
        version: "0.9.9",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var d = document.createElement("div");
    var q = {};

    function b(v) {
        if (v in d.style) {
            return v
        }
        var u = ["Moz", "Webkit", "O", "ms"];
        var r = v.charAt(0).toUpperCase() + v.substr(1);
        if (v in d.style) {
            return v
        }
        for (var t = 0; t < u.length; ++t) {
            var s = u[t] + r;
            if (s in d.style) {
                return s
            }
        }
    }

    function e() {
        d.style[q.transform] = "";
        d.style[q.transform] = "rotateY(90deg)";
        return d.style[q.transform] !== ""
    }
    var a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    q.transition = b("transition");
    q.transitionDelay = b("transitionDelay");
    q.transform = b("transform");
    q.transformOrigin = b("transformOrigin");
    q.transform3d = e();
    var i = {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var f = q.transitionEnd = i[q.transition] || null;
    for (var p in q) {
        if (q.hasOwnProperty(p) && typeof k.support[p] === "undefined") {
            k.support[p] = q[p]
        }
    }
    d = null;
    k.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    k.cssHooks["transit:transform"] = {
        get: function(r) {
            return k(r).data("transform") || new j()
        },
        set: function(s, r) {
            var t = r;
            if (!(t instanceof j)) {
                t = new j(t)
            }
            if (q.transform === "WebkitTransform" && !a) {
                s.style[q.transform] = t.toString(true)
            } else {
                s.style[q.transform] = t.toString()
            }
            k(s).data("transform", t)
        }
    };
    k.cssHooks.transform = {
        set: k.cssHooks["transit:transform"].set
    };
    if (k.fn.jquery < "1.8") {
        k.cssHooks.transformOrigin = {
            get: function(r) {
                return r.style[q.transformOrigin]
            },
            set: function(r, s) {
                r.style[q.transformOrigin] = s
            }
        };
        k.cssHooks.transition = {
            get: function(r) {
                return r.style[q.transition]
            },
            set: function(r, s) {
                r.style[q.transition] = s
            }
        }
    }
    n("scale");
    n("translate");
    n("rotate");
    n("rotateX");
    n("rotateY");
    n("rotate3d");
    n("perspective");
    n("skewX");
    n("skewY");
    n("x", true);
    n("y", true);

    function j(r) {
        if (typeof r === "string") {
            this.parse(r)
        }
        return this
    }
    j.prototype = {
        setFromString: function(t, s) {
            var r = (typeof s === "string") ? s.split(",") : (s.constructor === Array) ? s : [s];
            r.unshift(t);
            j.prototype.set.apply(this, r)
        },
        set: function(s) {
            var r = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[s]) {
                this.setter[s].apply(this, r)
            } else {
                this[s] = r.join(",")
            }
        },
        get: function(r) {
            if (this.getter[r]) {
                return this.getter[r].apply(this)
            } else {
                return this[r] || 0
            }
        },
        setter: {
            rotate: function(r) {
                this.rotate = o(r, "deg")
            },
            rotateX: function(r) {
                this.rotateX = o(r, "deg")
            },
            rotateY: function(r) {
                this.rotateY = o(r, "deg")
            },
            scale: function(r, s) {
                if (s === undefined) {
                    s = r
                }
                this.scale = r + "," + s
            },
            skewX: function(r) {
                this.skewX = o(r, "deg")
            },
            skewY: function(r) {
                this.skewY = o(r, "deg")
            },
            perspective: function(r) {
                this.perspective = o(r, "px")
            },
            x: function(r) {
                this.set("translate", r, null)
            },
            y: function(r) {
                this.set("translate", null, r)
            },
            translate: function(r, s) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (r !== null && r !== undefined) {
                    this._translateX = o(r, "px")
                }
                if (s !== null && s !== undefined) {
                    this._translateY = o(s, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var r = (this.scale || "1,1").split(",");
                if (r[0]) {
                    r[0] = parseFloat(r[0])
                }
                if (r[1]) {
                    r[1] = parseFloat(r[1])
                }
                return (r[0] === r[1]) ? r[0] : r
            },
            rotate3d: function() {
                var t = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var r = 0; r <= 3; ++r) {
                    if (t[r]) {
                        t[r] = parseFloat(t[r])
                    }
                }
                if (t[3]) {
                    t[3] = o(t[3], "deg")
                }
                return t
            }
        },
        parse: function(s) {
            var r = this;
            s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, v, u) {
                r.setFromString(v, u)
            })
        },
        toString: function(t) {
            var s = [];
            for (var r in this) {
                if (this.hasOwnProperty(r)) {
                    if ((!q.transform3d) && ((r === "rotateX") || (r === "rotateY") || (r === "perspective") || (r === "transformOrigin"))) {
                        continue
                    }
                    if (r[0] !== "_") {
                        if (t && (r === "scale")) {
                            s.push(r + "3d(" + this[r] + ",1)")
                        } else {
                            if (t && (r === "translate")) {
                                s.push(r + "3d(" + this[r] + ",0)")
                            } else {
                                s.push(r + "(" + this[r] + ")")
                            }
                        }
                    }
                }
            }
            return s.join(" ")
        }
    };

    function m(s, r, t) {
        if (r === true) {
            s.queue(t)
        } else {
            if (r) {
                s.queue(r, t)
            } else {
                t()
            }
        }
    }

    function h(s) {
        var r = [];
        k.each(s, function(t) {
            t = k.camelCase(t);
            t = k.transit.propertyMap[t] || k.cssProps[t] || t;
            t = c(t);
            if (k.inArray(t, r) === -1) {
                r.push(t)
            }
        });
        return r
    }

    function g(s, v, x, r) {
        var t = h(s);
        if (k.cssEase[x]) {
            x = k.cssEase[x]
        }
        var w = "" + l(v) + " " + x;
        if (parseInt(r, 10) > 0) {
            w += " " + l(r)
        }
        var u = [];
        k.each(t, function(z, y) {
            u.push(y + " " + w)
        });
        return u.join(", ")
    }
    k.fn.transition = k.fn.transit = function(z, s, y, C) {
        var D = this;
        var u = 0;
        var w = true;
        if (typeof s === "function") {
            C = s;
            s = undefined
        }
        if (typeof y === "function") {
            C = y;
            y = undefined
        }
        if (typeof z.easing !== "undefined") {
            y = z.easing;
            delete z.easing
        }
        if (typeof z.duration !== "undefined") {
            s = z.duration;
            delete z.duration
        }
        if (typeof z.complete !== "undefined") {
            C = z.complete;
            delete z.complete
        }
        if (typeof z.queue !== "undefined") {
            w = z.queue;
            delete z.queue
        }
        if (typeof z.delay !== "undefined") {
            u = z.delay;
            delete z.delay
        }
        if (typeof s === "undefined") {
            s = k.fx.speeds._default
        }
        if (typeof y === "undefined") {
            y = k.cssEase._default
        }
        s = l(s);
        var E = g(z, s, y, u);
        var B = k.transit.enabled && q.transition;
        var t = B ? (parseInt(s, 10) + parseInt(u, 10)) : 0;
        if (t === 0) {
            var A = function(F) {
                D.css(z);
                if (C) {
                    C.apply(D)
                }
                if (F) {
                    F()
                }
            };
            m(D, w, A);
            return D
        }
        var x = {};
        var r = function(H) {
            var G = false;
            var F = function() {
                if (G) {
                    D.unbind(f, F)
                }
                if (t > 0) {
                    D.each(function() {
                        this.style[q.transition] = (x[this] || null)
                    })
                }
                if (typeof C === "function") {
                    C.apply(D)
                }
                if (typeof H === "function") {
                    H()
                }
            };
            if ((t > 0) && (f) && (k.transit.useTransitionEnd)) {
                G = true;
                D.bind(f, F)
            } else {
                window.setTimeout(F, t)
            }
            D.each(function() {
                if (t > 0) {
                    this.style[q.transition] = E
                }
                k(this).css(z)
            })
        };
        var v = function(F) {
            this.offsetWidth;
            r(F)
        };
        m(D, w, v);
        return this
    };

    function n(s, r) {
        if (!r) {
            k.cssNumber[s] = true
        }
        k.transit.propertyMap[s] = q.transform;
        k.cssHooks[s] = {
            get: function(v) {
                var u = k(v).css("transit:transform");
                return u.get(s)
            },
            set: function(v, w) {
                var u = k(v).css("transit:transform");
                u.setFromString(s, w);
                k(v).css({
                    "transit:transform": u
                })
            }
        }
    }

    function c(r) {
        return r.replace(/([A-Z])/g, function(s) {
            return "-" + s.toLowerCase()
        })
    }

    function o(s, r) {
        if ((typeof s === "string") && (!s.match(/^[\-0-9\.]+$/))) {
            return s
        } else {
            return "" + s + r
        }
    }

    function l(s) {
        var r = s;
        if (k.fx.speeds[r]) {
            r = k.fx.speeds[r]
        }
        return o(r, "ms")
    }
    k.transit.getTransitionValue = g
})(jQuery);



! function(e) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? e(require("jquery")) : e(jQuery)
}(function(ae) {
    "use strict";
    var ue = "left",
        se = "right",
        ce = "up",
        pe = "down",
        fe = "in",
        he = "out",
        ge = "none",
        de = "auto",
        we = "swipe",
        ve = "pinch",
        Te = "tap",
        ye = "doubletap",
        Ee = "longtap",
        me = "horizontal",
        xe = "vertical",
        be = "all",
        Se = 10,
        Oe = "start",
        Me = "move",
        Pe = "end",
        De = "cancel",
        Le = "ontouchstart" in window,
        Re = window.navigator.msPointerEnabled && !window.PointerEvent && !Le,
        ke = (window.PointerEvent || window.navigator.msPointerEnabled) && !Le,
        Ae = "TouchSwipe";

    function r(e, a) {
        a = ae.extend({}, a);
        isAndApp && (a.threshold = 10, a.triggerOnTouchEnd = !1);
        var t = Le || ke || !a.fallbackToMouseEvents,
            n = t ? ke ? Re ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            r = t ? ke ? Re ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            i = t ? ke ? Re ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            l = t ? ke ? "mouseleave" : null : "mouseleave",
            o = ke ? Re ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            u = 0,
            s = null,
            c = null,
            p = 0,
            f = 0,
            h = 0,
            g = 1,
            d = 0,
            w = 0,
            v = null,
            T = ae(e),
            y = "start",
            E = 0,
            m = {},
            x = 0,
            b = 0,
            S = 0,
            O = 0,
            M = 0,
            P = null,
            D = null;
        try {
            T.on(n, L), T.on(o, A)
        } catch (e) {
            ae.error("events not supported " + n + "," + o + " on jQuery.swipe")
        }

        function L(e) {
            if (!0 !== T.data(Ae + "_intouch") && !(0 < ae(e.target).closest(a.excludedElements, T).length)) {
                var t = e.originalEvent ? e.originalEvent : e;
                if (!t.pointerType || "mouse" != t.pointerType || 0 != a.fallbackToMouseEvents) {
                    var n, r = t.touches,
                        i = r ? r[0] : t;
                    return y = Oe, r ? E = r.length : !1 !== a.preventDefaultEvents && e.preventDefault(), w = c = s = null, g = 1, d = h = f = p = u = 0, v = function() {
                        var e = {};
                        return e[ue] = ne(ue), e[se] = ne(se), e[ce] = ne(ce), e[pe] = ne(pe), e
                    }(), B(), $(0, i), !r || E === a.fingers || a.fingers === be || F() ? (x = oe(), 2 == E && ($(1, r[1]), f = h = ie(m[0].start, m[1].start)), (a.swipeStatus || a.pinchStatus) && (n = N(t, y))) : n = !1, !1 === n ? (N(t, y = De), n) : (a.hold && (D = setTimeout(ae.proxy(function() {
                        T.trigger("hold", [t.target]), a.hold && (n = a.hold.call(T, t, t.target))
                    }, this), a.longTapThreshold)), K(!0), null)
                }
            }
        }

        function R(e) {
            var t = e.originalEvent ? e.originalEvent : e;
            if (y !== Pe && y !== De && !J()) {
                var n, r = t.touches,
                    i = ee(r ? r[0] : t);
                if (b = oe(), r && (E = r.length), a.hold && clearTimeout(D), y = Me, 2 == E && (0 == f ? ($(1, r[1]), f = h = ie(m[0].start, m[1].start)) : (ee(r[1]), h = ie(m[0].end, m[1].end), m[0].end, m[1].end, w = g < 1 ? he : fe), g = function(e, t) {
                        return (t / e * 1).toFixed(2)
                    }(f, h), d = Math.abs(f - h)), E === a.fingers || a.fingers === be || !r || F()) {
                    if (s = le(i.start, i.end), function(e, t) {
                            if (!1 === a.preventDefaultEvents) return;
                            if (a.allowPageScroll === ge) e.preventDefault();
                            else {
                                var n = a.allowPageScroll === de;
                                switch (t) {
                                    case ue:
                                        (a.swipeLeft && n || !n && a.allowPageScroll != me) && e.preventDefault();
                                        break;
                                    case se:
                                        (a.swipeRight && n || !n && a.allowPageScroll != me) && e.preventDefault();
                                        break;
                                    case ce:
                                        (a.swipeUp && n || !n && a.allowPageScroll != xe) && e.preventDefault();
                                        break;
                                    case pe:
                                        (a.swipeDown && n || !n && a.allowPageScroll != xe) && e.preventDefault()
                                }
                            }
                        }(e, c = le(i.last, i.end)), u = function(e, t) {
                            return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
                        }(i.start, i.end), p = re(), function(e, t) {
                            if (e == ge) return;
                            t = Math.max(t, te(e)), v[e].distance = t
                        }(s, u), n = N(t, y), !a.triggerOnTouchEnd || a.triggerOnTouchLeave) {
                        var l = !0;
                        if (a.triggerOnTouchLeave) {
                            var o = function(e) {
                                var t = (e = ae(e)).offset();
                                return {
                                    left: t.left,
                                    right: t.left + e.outerWidth(),
                                    top: t.top,
                                    bottom: t.top + e.outerHeight()
                                }
                            }(this);
                            l = function(e, t) {
                                return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
                            }(i.end, o)
                        }!a.triggerOnTouchEnd && l ? y = j(Me) : a.triggerOnTouchLeave && !l && (y = j(Pe)), y != De && y != Pe || N(t, y)
                    }
                } else N(t, y = De);
                !1 === n && N(t, y = De)
            }
        }

        function k(e) {
            var t = e.originalEvent ? e.originalEvent : e,
                n = t.touches;
            if (n) {
                if (n.length && !J()) return function(e) {
                    S = oe(), O = e.touches.length + 1
                }(t), !0;
                if (n.length && J()) return !0
            }
            return J() && (E = O), b = oe(), p = re(), q() || !_() ? N(t, y = De) : a.triggerOnTouchEnd || !1 === a.triggerOnTouchEnd && y === Me ? (!1 !== a.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), N(t, y = Pe)) : !a.triggerOnTouchEnd && z() ? H(t, y = Pe, Te) : y === Me && N(t, y = De), K(!1), null
        }

        function A() {
            h = f = x = b = E = 0, g = 1, B(), K(!1)
        }

        function I(e) {
            var t = e.originalEvent ? e.originalEvent : e;
            a.triggerOnTouchLeave && N(t, y = j(Pe))
        }

        function U() {
            T.off(n, L), T.off(o, A), T.off(r, R), T.off(i, k), l && T.off(l, I), K(!1)
        }

        function j(e) {
            var t = e,
                n = Q(),
                r = _(),
                i = q();
            return !n || i ? t = De : !r || e != Me || a.triggerOnTouchEnd && !a.triggerOnTouchLeave ? !r && e == Pe && a.triggerOnTouchLeave && (t = De) : t = Pe, t
        }

        function N(e, t) {
            var n, r = e.touches;
            return (X() && Y() || Y()) && (n = H(e, t, we)), (C() && F() || F()) && !1 !== n && (n = H(e, t, ve)), Z() && G() && !1 !== n ? n = H(e, t, ye) : p > a.longTapThreshold && u < Se && a.longTap && !1 !== n ? n = H(e, t, Ee) : 1 !== E && Le || !(isNaN(u) || u < a.threshold) || !z() || !1 === n || (n = H(e, t, Te)), t === De && A(), t === Pe && (r && r.length || A()), n
        }

        function H(e, t, n) {
            var r;
            if (n == we) {
                if (T.trigger("swipeStatus", [t, s || null, u || 0, p || 0, E, m, c]), a.swipeStatus && !1 === (r = a.swipeStatus.call(T, e, t, s || null, u || 0, p || 0, E, m, c))) return !1;
                if (t == Pe && X()) {
                    if (clearTimeout(P), clearTimeout(D), T.trigger("swipe", [s, u, p, E, m, c]), a.swipe && !1 === (r = a.swipe.call(T, e, s, u, p, E, m, c))) return !1;
                    switch (s) {
                        case ue:
                            T.trigger("swipeLeft", [s, u, p, E, m, c]), a.swipeLeft && (r = a.swipeLeft.call(T, e, s, u, p, E, m, c));
                            break;
                        case se:
                            T.trigger("swipeRight", [s, u, p, E, m, c]), a.swipeRight && (r = a.swipeRight.call(T, e, s, u, p, E, m, c));
                            break;
                        case ce:
                            T.trigger("swipeUp", [s, u, p, E, m, c]), a.swipeUp && (r = a.swipeUp.call(T, e, s, u, p, E, m, c));
                            break;
                        case pe:
                            T.trigger("swipeDown", [s, u, p, E, m, c]), a.swipeDown && (r = a.swipeDown.call(T, e, s, u, p, E, m, c))
                    }
                }
            }
            if (n == ve) {
                if (T.trigger("pinchStatus", [t, w || null, d || 0, p || 0, E, g, m]), a.pinchStatus && !1 === (r = a.pinchStatus.call(T, e, t, w || null, d || 0, p || 0, E, g, m))) return !1;
                if (t == Pe && C()) switch (w) {
                    case fe:
                        T.trigger("pinchIn", [w || null, d || 0, p || 0, E, g, m]), a.pinchIn && (r = a.pinchIn.call(T, e, w || null, d || 0, p || 0, E, g, m));
                        break;
                    case he:
                        T.trigger("pinchOut", [w || null, d || 0, p || 0, E, g, m]), a.pinchOut && (r = a.pinchOut.call(T, e, w || null, d || 0, p || 0, E, g, m))
                }
            }
            return n == Te ? t !== De && t !== Pe || (clearTimeout(P), clearTimeout(D), G() && !Z() ? (M = oe(), P = setTimeout(ae.proxy(function() {
                M = null, T.trigger("tap", [e.target]), a.tap && (r = a.tap.call(T, e, e.target))
            }, this), a.doubleTapThreshold)) : (M = null, T.trigger("tap", [e.target]), a.tap && (r = a.tap.call(T, e, e.target)))) : n == ye ? t !== De && t !== Pe || (clearTimeout(P), clearTimeout(D), M = null, T.trigger("doubletap", [e.target]), a.doubleTap && (r = a.doubleTap.call(T, e, e.target))) : n == Ee && (t !== De && t !== Pe || (clearTimeout(P), M = null, T.trigger("longtap", [e.target]), a.longTap && (r = a.longTap.call(T, e, e.target)))), r
        }

        function _() {
            var e = !0;
            return null !== a.threshold && (e = u >= a.threshold), e
        }

        function q() {
            var e = !1;
            return null !== a.cancelThreshold && null !== s && (e = te(s) - u >= a.cancelThreshold), e
        }

        function Q() {
            return !a.maxTimeThreshold || !(p >= a.maxTimeThreshold)
        }

        function C() {
            var e = V(),
                t = W(),
                n = null === a.pinchThreshold || d >= a.pinchThreshold;
            return e && t && n
        }

        function F() {
            return !!(a.pinchStatus || a.pinchIn || a.pinchOut)
        }

        function X() {
            var e = Q(),
                t = _(),
                n = V(),
                r = W();
            return !q() && r && n && t && e
        }

        function Y() {
            return !!(a.swipe || a.swipeStatus || a.swipeLeft || a.swipeRight || a.swipeUp || a.swipeDown)
        }

        function V() {
            return E === a.fingers || a.fingers === be || !Le
        }

        function W() {
            return 0 !== m[0].end.x
        }

        function z() {
            return !!a.tap
        }

        function G() {
            return !!a.doubleTap
        }

        function Z() {
            if (null == M) return !1;
            var e = oe();
            return G() && e - M <= a.doubleTapThreshold
        }

        function B() {
            O = S = 0
        }

        function J() {
            var e = !1;
            S && oe() - S <= a.fingerReleaseThreshold && (e = !0);
            return e
        }

        function K(e) {
            T && (!0 === e ? (T.on(r, R), T.on(i, k), l && T.on(l, I)) : (T.off(r, R, !1), T.off(i, k, !1), l && T.off(l, I, !1)), T.data(Ae + "_intouch", !0 === e))
        }

        function $(e, t) {
            var n = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            return n.start.x = n.last.x = n.end.x = t.pageX || t.clientX, n.start.y = n.last.y = n.end.y = t.pageY || t.clientY, m[e] = n
        }

        function ee(e) {
            var t = void 0 !== e.identifier ? e.identifier : 0,
                n = function(e) {
                    return m[e] || null
                }(t);
            return null === n && (n = $(t, e)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
        }

        function te(e) {
            if (v[e]) return v[e].distance
        }

        function ne(e) {
            return {
                direction: e,
                distance: 0
            }
        }

        function re() {
            return b - x
        }

        function ie(e, t) {
            var n = Math.abs(e.x - t.x),
                r = Math.abs(e.y - t.y);
            return Math.round(Math.sqrt(n * n + r * r))
        }

        function le(e, t) {
            if (function(e, t) {
                    return e.x == t.x && e.y == t.y
                }(e, t)) return ge;
            var n = function(e, t) {
                var n = e.x - t.x,
                    r = t.y - e.y,
                    i = Math.atan2(r, n),
                    l = Math.round(180 * i / Math.PI);
                return l < 0 && (l = 360 - Math.abs(l)), l
            }(e, t);
            return n <= 45 && 0 <= n ? ue : n <= 360 && 315 <= n ? ue : 135 <= n && n <= 225 ? se : 45 < n && n < 135 ? pe : ce
        }

        function oe() {
            return (new Date).getTime()
        }
        this.enable = function() {
            return this.disable(), T.on(n, L), T.on(o, A), T
        }, this.disable = function() {
            return U(), T
        }, this.destroy = function() {
            U(), T.data(Ae, null), T = null
        }, this.option = function(e, t) {
            if ("object" == typeof e) a = ae.extend(a, e);
            else if (void 0 !== a[e]) {
                if (void 0 === t) return a[e];
                a[e] = t
            } else {
                if (!e) return a;
                ae.error("Option " + e + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }
    ae.fn.swipe = function(e) {
        var t = ae(this),
            n = t.data(Ae);
        if (n && "string" == typeof e) {
            if (n[e]) return n[e].apply(n, Array.prototype.slice.call(arguments, 1));
            ae.error("Method " + e + " does not exist on jQuery.swipe")
        } else if (n && "object" == typeof e) n.option.apply(n, arguments);
        else if (!(n || "object" != typeof e && e)) return function(n) {
            !n || void 0 !== n.allowPageScroll || void 0 === n.swipe && void 0 === n.swipeStatus || (n.allowPageScroll = ge);
            void 0 !== n.click && void 0 === n.tap && (n.tap = n.click);
            n = n || {};
            return n = ae.extend({}, ae.fn.swipe.defaults, n), this.each(function() {
                var e = ae(this),
                    t = e.data(Ae);
                t || (t = new r(this, n), e.data(Ae, t))
            })
        }.apply(this, arguments);
        return t
    }, ae.fn.swipe.version = "1.6.18", ae.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".noSwipe",
        preventDefaultEvents: !0
    }, ae.fn.swipe.phases = {
        PHASE_START: Oe,
        PHASE_MOVE: Me,
        PHASE_END: Pe,
        PHASE_CANCEL: De
    }, ae.fn.swipe.directions = {
        LEFT: ue,
        RIGHT: se,
        UP: ce,
        DOWN: pe,
        IN: fe,
        OUT: he
    }, ae.fn.swipe.pageScroll = {
        NONE: ge,
        HORIZONTAL: me,
        VERTICAL: xe,
        AUTO: de
    }, ae.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: be
    }
});




! function(c) {
    c.fn.menu = function(n) {
        "use strict";
        n = c.extend({
            isAnimate: !1
        }, n);
        var e = document.getElementById("pagehead");
        if (null != e) {
            var s = e.getElementsByClassName("menu")[0],
                t = e.getElementsByClassName("option")[0],
                l = document.getElementsByClassName("ui-item-use-window")[0],
                e = t.getElementsByClassName("menu-close")[0],
                a = !1;
            s.addEventListener("click", function(e) {
                o(e)
            }), e.addEventListener("click", function(e) {
                i()
            });
            var o = function(e) {
                    if (e.preventDefault(), e.stopPropagation(), "touchstart" == e.type) a = !0;
                    else if (a) return void(a = !1);
                    if (void 0 !== l && "block" == l.style.display) return !1;
                    !1 === m(s, "menu-close") ? (s.className = s.className + " menu-close", !1 === n.isAnimate ? t.style.display = "block" : c(t).slideDown(), c(window).trigger("open-menu")) : (s.className = s.className.replace(" menu-close", ""), !1 === n.isAnimate ? (t.style.display = "none", c(window).trigger("close-menu")) : c(t).slideUp(function() {
                        c(window).trigger("close-menu")
                    }), document.body.scrollTop = document.documentElement.scrollTop = 0)
                },
                i = function() {
                    s.className = s.className.replace(" menu-close", ""), t.style.display = "none"
                },
                m = function(e, n) {
                    return 0 < e.className.indexOf(n)
                };
            return this
        }
    }, c.fn.footer_menu = function(e) {
        "use strict";
        e = c.extend({
            isAnimate: !1
        }, e);
        e = document.getElementById("pagefoot");
        if (null != e) {
            var n = e.getElementsByClassName("footer-menu")[0],
                s = e.getElementsByClassName("option")[0],
                t = e.getElementsByClassName("global-renewal-menu-bgshadow")[0],
                l = document.getElementsByClassName("ui-item-use-window")[0],
                a = !1;
            n.addEventListener("click", function(e) {
                o(e)
            });
            var o = function(e) {
                    if (e.preventDefault(), e.stopPropagation(), "touchstart" == e.type) a = !0;
                    else if (a) return void(a = !1);
                    if (void 0 !== l && "block" == l.style.display) return !1;
                    !1 === i(n, "menu-close") ? (n.className = n.className + " menu-close", s.style.display = "block", t.classList.add("bg-menu-open"), c(window).trigger("open-menu")) : (n.className = n.className.replace(" menu-close", ""), s.style.display = "none", t.classList.remove("bg-menu-open"), c(window).trigger("close-menu"))
                },
                i = function(e, n) {
                    return 0 < e.className.indexOf(n)
                };
            return this
        }
    }
}(jQuery);



! function(t) {
    t.fn.link = function(e) {
        return e = t.extend({}, e), t('a[href^="#"]').bind("click", function(e) {
            var n = t(this).attr("href");
            if (n.match(/#([^/ ]+)/)) {
                var r = n.match(/#([^/ ]+)/)[1];
                e.preventDefault();
                var o = document.getElementById(r);
                if (null == o) return e.preventDefault(), this;
                var l = o.offsetTop;
                l += 41;
                var a = t(document.body).css("zoom") || 1;
                a && (l *= a = parseFloat(a));
                var i = "html,body";
                "scrollingElement" in document && (i = document.scrollingElement), t(i).animate({
                    scrollTop: l
                }, 300, "swing")
            }
        }), this
    }
}(jQuery);




new function() {
    window.scrollTo(0, -1);
    var b = navigator.userAgent;
    var a = 320;
    var d = 16 / 9.5;
    var c = 2 / 1;
    window.isContentWidthSettingEnabled = function() {
        if (isShellApp || isAndApp || isChromeApp) {
            return false
        }
        var f = window.screen.width;
        var e = window.screen.height;
        if (e < f) {
            f = window.screen.height;
            e = window.screen.width
        }
        var g = e / f;
        return g < d
    };
    window.adjustFullWidth = function() {
        var e = window.innerWidth;
        var f = e / a;
        if (1 <= f && $(document.body).css("zoom") != f) {
            $(document.body).css("zoom", f)
        }
    };
    window.adjustFixedWidth = function() {
        var f = window.screen.width;
        var e = window.screen.height;
        if (e < f) {
            f = window.screen.height;
            e = window.screen.width
        }
        var h = e / f;
        var g = (e / c) / a;
        if (1 <= g && $(document.body).css("zoom") != g) {
            $(document.body).css("zoom", g)
        }
    };
    if (window.isContentWidthSettingEnabled()) {
        if (isFullWidth) {
            window.adjustFullWidth()
        } else {
            window.adjustFixedWidth()
        }
    } else {
        window.adjustFullWidth()
    }
};
$(function() {
    window.scrollTo(0, -1);
    var a = navigator.userAgent;
    if ((a.match(/ChromeApp/)) || (a.match(/iPhone/i)) || (a.match(/iPod/i))) {
        $("#layout").menu({
            isAnimate: true
        });
        $("#layout").footer_menu({
            isAnimate: true
        })
    } else {
        $("#layout").menu();
        $("#layout").footer_menu()
    }
    $("#layout").link();
    $("blink").addClass("blink")
});
var getMobageUrl = function(b) {
    if (!phpConfig) {
        return b
    }
    b = b.replace(/^\/|\/$/, "");
    var c = null;
    if (phpConfig.isMobageGadgetUrl) {
        var a = phpConfig.hostname + "/" + b;
        a = (a + "");
        a = encodeURIComponent(a).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
        c = phpConfig.mobageGadgetUrl + a
    } else {
        c = phpConfig.hostname + "/" + b
    }
    return c
};
window.getMobageUrl = getMobageUrl;




function sprintf() {
    var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
    var a = arguments;
    var i = 0;
    var format = a[i++];

    // pad()
    var pad = function(str, len, chr, leftJustify) {
        if (!chr) {
            chr = ' ';
        }
        var padding = (str.length >= len) ? '' : new Array(1 + len - str.length >>> 0)
            .join(chr);
        return leftJustify ? str + padding : padding + str;
    };

    // justify()
    var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
        var diff = minWidth - value.length;
        if (diff > 0) {
            if (leftJustify || !zeroPad) {
                value = pad(value, minWidth, customPadChar, leftJustify);
            } else {
                value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
            }
        }
        return value;
    };

    // formatBaseX()
    var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
        // Note: casts negative numbers to positive ones
        var number = value >>> 0;
        prefix = prefix && number && {
            '2': '0b',
            '8': '0',
            '16': '0x'
        } [base] || '';
        value = prefix + pad(number.toString(base), precision || 0, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
    };

    // formatString()
    var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
        if (precision != null) {
            value = value.slice(0, precision);
        }
        return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
    };

    // doFormat()
    var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
        var number, prefix, method, textTransform, value;

        if (substring === '%%') {
            return '%';
        }

        // parse flags
        var leftJustify = false;
        var positivePrefix = '';
        var zeroPad = false;
        var prefixBaseX = false;
        var customPadChar = ' ';
        var flagsl = flags.length;
        for (var j = 0; flags && j < flagsl; j++) {
            switch (flags.charAt(j)) {
                case ' ':
                    positivePrefix = ' ';
                    break;
                case '+':
                    positivePrefix = '+';
                    break;
                case '-':
                    leftJustify = true;
                    break;
                case "'":
                    customPadChar = flags.charAt(j + 1);
                    break;
                case '0':
                    zeroPad = true;
                    customPadChar = '0';
                    break;
                case '#':
                    prefixBaseX = true;
                    break;
            }
        }

        // parameters may be null, undefined, empty-string or real valued
        // we want to ignore null, undefined and empty-string values
        if (!minWidth) {
            minWidth = 0;
        } else if (minWidth === '*') {
            minWidth = +a[i++];
        } else if (minWidth.charAt(0) == '*') {
            minWidth = +a[minWidth.slice(1, -1)];
        } else {
            minWidth = +minWidth;
        }

        // Note: undocumented perl feature:
        if (minWidth < 0) {
            minWidth = -minWidth;
            leftJustify = true;
        }

        if (!isFinite(minWidth)) {
            throw new Error('sprintf: (minimum-)width must be finite');
        }

        if (!precision) {
            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
        } else if (precision === '*') {
            precision = +a[i++];
        } else if (precision.charAt(0) == '*') {
            precision = +a[precision.slice(1, -1)];
        } else {
            precision = +precision;
        }

        // grab value using valueIndex if required?
        value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

        switch (type) {
            case 's':
                return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
            case 'c':
                return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
            case 'b':
                return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'o':
                return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'x':
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'X':
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad)
                    .toUpperCase();
            case 'u':
                return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'i':
            case 'd':
                number = +value || 0;
                number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
                prefix = number < 0 ? '-' : positivePrefix;
                value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            case 'e':
            case 'E':
            case 'f': // Should handle locales (as per setlocale)
            case 'F':
            case 'g':
            case 'G':
                number = +value;
                prefix = number < 0 ? '-' : positivePrefix;
                method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                value = prefix + Math.abs(number)[method](precision);
                return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
            default:
                return substring;
        }
    };

    return format.replace(regex, doFormat);
}

function formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return min + ':' + sec;
};

function iOSVersion() {
    if (window.MSStream) {
        return false;
    }
    var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
        version;

    if (match !== undefined && match !== null) {
        version = [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3] || 0, 10)
        ];
        return parseFloat(version.join('.'));
    }

    return false;
}




;
$.loading = function(a, b) {
    var c = $.extend({
        classname: !1,
        style: "",
        text: null,
        callback: null,
        wrap: "#layout",
        key: null
    }, b);
    if (c.key) var d = $('.ui-loading[data-key="' + c.key + '"]');
    else var d = $(".ui-loading");
    if ("remove" == a) d.length && d.remove();
    else if ("show" == a) {
        if (!d.length) {
            if ("string" == typeof c.wrap) var e = $(c.wrap);
            else e = c.wrap;
            var f = $('<div class="ui-loading-body"></div>'),
                d = $('<div class="ui-loading"></div>');
            c.key && d.attr("data-key", c.key), c.style && d.attr("data-style", c.style), c.classname && d.addClass(c.classname), d.append(f), e.prepend(d), c.text && $('<div class="ui-loading-text">' + c.text + "</div>").appendTo(f)
        }
    } else "edit" == a && d.length && (!1 !== c.classname && (d.attr("class", "ui-loading"), d.addClass(c.classname)), d.attr("data-style", c.style), d.find(".ui-loading-text").text(c.text));
    c.callback && "function" == typeof c.callback && c.callback(a, c)
}, $.fn.accordion = function(a) {
    var b = $(this),
        c = $("#" + b.data("target"));
    return disabled = function() {
        return !0 === b.data("disabled")
    }, this.toggle = function() {
        if (!0 === disabled()) return !1;
        b.hasClass("is-open") ? this.hide() : this.show()
    }, this.hide = function() {
        if (!0 === disabled()) return !1;
        b.addClass("is-close").removeClass("is-open"), c.slideUp("fast", function() {
            $(this).removeClass("open")
        })
    }, this.show = function() {
        if (!0 === disabled()) return !1;
        b.addClass("is-open").removeClass("is-close"), c.slideDown("fast", function() {
            $(this).addClass("open")
        })
    }, c.delegate('[data-dismiss="accordion"]', "click", $.proxy(this.hide, this)).trigger("dismiss"), this
}, $.fn.tab = function(a) {
    var b = $.extend({
        callback: null,
        key: null,
        target: null,
        targetprefix: "#"
    }, a);
    $(this);
    if (b.key && ($('[data-tabgroup="' + b.key + '"]').hide().removeClass("active"), $('[data-tabkey="' + b.key + '"]').removeClass("current on").addClass("off")), $('[data-target="' + b.target + '"][data-tabkey="' + b.key + '"]').addClass("current on").removeClass("current off"), b.target) {
        var d = $(b.targetprefix + b.target);
        d.length && d.show().addClass("active")
    }
    return b.callback && "function" == typeof b.callback && b.callback(b), this
}, $.fn.touch = function(a) {
    a = $.extend({
        className: "touch"
    }, a);
    var b = "ontouchstart" in window ? "touchstart" : "mousedown";
    return $(this).on(b, function() {
        $(this).addClass(a.className);
        var b = this;
        setTimeout(function() {
            $(b).removeClass(a.className)
        }, 400)
    }), this
};
var currentPopups = {};
$(document).ready(function() {
    $(".ui-backdrop").bind("click", function() {
        for (var a in currentPopups) {
            var b = currentPopups[a];
            b && !b.backdropDisabledEvent && b.hide()
        }
        return !1
    })
}), $.fn.popup = function(a) {
    var b = $(this),
        c = b.data("target");
    if ("self" == c) var d = b;
    else var d = $("#" + c);
    var e = $(".ui-backdrop"),
        f = b.data("removeonclose") || !1,
        g = b.data("backdrop-disabled-event") || !1,
        h = $("#popups"),
        i = !1,
        j = b.data("prepend"),
        k = b.data("onhide");
    void 0 === j && (j = !0), this.backdropDisabledEvent = g, this.setInit = function(a) {
        i = a
    }, this.init = function() {
        if (i) return !1;
        if (j && h.prepend(d), d.hasClass("fixed-middle")) {
            var a = d.height(),
                b = a / 2;
            d.css({
                top: "50%",
                marginTop: -b + "px"
            })
        } else if (d.hasClass("fixed-scroll")) {
            var c = d.data("top") || 10,
                e = document.documentElement.scrollTop || document.body.scrollTop,
                f = $(document.body).css("zoom") || 1;
            f && (f = parseFloat(f), e -= e - e / f), e += c, d.css("top", e + "px")
        }
        return i = !0, !1
    }, this.show = function() {
        return b.addClass("is-open").removeClass("is-close"), d.hasClass("fade") ? d.addClass("in") : d.hasClass("slide") ? d.slideDown() : d.removeClass("dnone").addClass("dblock"), this.removeCurrentPopups(), d.hasClass("use-backdrop") && (e.css("display", "block"), e.addClass("in")), currentPopups[b.data("target")] = this, this.resizeMain(), !1
    }, this.hide = function() {
        return b.addClass("is-close").removeClass("is-open"), d.hasClass("fade") ? (d.removeClass("in"), f && d.remove()) : d.hasClass("slide") ? d.slideUp(function() {
            f && $(this).remove()
        }) : f ? d.remove() : d.removeClass("dblock").addClass("dnone"), d.hasClass("use-backdrop") && e.removeClass("in"), currentPopups[b.data("target")] = null, k && k in window && "function" == typeof window[k] && window[k](), !1
    }, this.removeCurrentPopups = function() {
        if (!currentPopups) return !1;
        for (var a in currentPopups) currentPopups[a] && currentPopups[a].hide()
    }, this.resizeMain = function() {
        var a = $("#container").height(),
            b = d.height();
        b > a && $("#container").css("height", b + 20 + "px")
    };
    var l = this;
    return d.delegate('[data-dismiss="popup"]', "click", $.proxy(function(a) {
        return l.hide(), !1
    }, this)).trigger("dismiss"), this
}, $.fn.notification = function(a) {
    var b = $(this);
    return delay = b.data("delay"), timeout = null, _this = this, this.init = function() {
        delay > 0 && (timeout = setTimeout(function() {
            _this.hide()
        }, delay))
    }, this.hide = function() {
        null != timeout && clearTimeout(timeout), b.fadeOut()
    }, this.show = function() {
        b.fadeIn()
    }, b.delegate('[data-dismiss="notification"]', "click", $.proxy(this.hide, this)).trigger("dismiss"), this
}, $.fn.scrollTo = function(a, b, c) {
    var d = $(this),
        e = 0,
        b = b || 0,
        c = c || null;
    return void 0 != a && (this.init = function() {
        if (e = parseInt(a), isNaN(e)) {
            var b = $(a);
            if (!b.length) return;
            e = b.offset().top
        }
        this.scroll()
    }, this.scroll = function() {
        $("body").animate({
            scrollTop: e
        }, b, function(a) {
            d.trigger("ui-scroll", [c])
        })
    }, this.init(), this)
}, $.fn.countdown = function(a) {
    if (!a) return !1;
    var b = $(this),
        c = function(b, c, d) {
            var e = a.format.replace("s", d);
            return e = e.replace("m", c), e = e.replace("h", b)
        };
    if (!b.length || !a.time || 0 === a.time) return b.html(c("00", "00", "00")), !1;
    var d = (new Date).getTime() / 1e3,
        e = function() {
            var e = (new Date).getTime() / 1e3 - d,
                g = Math.floor(a.time - e);
            if (a.time <= 0 || g <= 0) return b.html(c("00", "00", "00")), a.callback && "function" == typeof a.callback && a.callback(), void clearInterval(f);
            var h = Math.floor(g / 3600),
                i = Math.floor((g - 3600 * h) / 60),
                j = g - 3600 * h - 60 * i;
            h = ("0" + h).slice(-2), i = ("0" + i).slice(-2), j = ("0" + j).slice(-2), b.html(c(h, i, j))
        },
        f = setInterval(e, 500)
}, window.events = function() {}, window.events.error = function(a) {
    var b = $.extend({
            serif: "ｴﾗｰが発生しました｡<br />お手数をおかけいたしますが､<br />再読み込みしてください",
            btnLabel: "再読み込み"
        }, a),
        c = $("#ui-popup-error-trigger");
    if (!c || !c.length) return !1;
    var d = $("#ui-popup-error");
    if (!d || !d.length) return !1;
    var e = d.find(".error-btn > a");
    d.find(".balloon p").html(b.serif), e.text(b.btnLabel);
    var f = c.popup();
    f.init(), f.show()
}, window.events.popup = function(a) {
    var b = $(a),
        c = $(a).data("on") || "click";
    $(a).data("sound");
    "touchstart" == c && (c = "ontouchstart" in window ? "touchstart" : "mousedown", -1 != navigator.userAgent.indexOf("iPhone OS 10_0") && !0 === isShellApp && (c = "touchstart"));
    var e = function(a, c) {
        var d = b.popup();
        return d.init(), $(window).trigger("ui-popup-before", [a]), b.hasClass("is-close") || b.hasClass("is-open") || b.addClass("is-close"), b.hasClass("is-close") ? d.show() : d.hide(), !1
    };
    if ("tap" == c || "doubleTap" == c) {
        var f = {
            allowPageScroll: "vertical",
            excludedElements: "label, button, input, select, textarea, .noSwipe",
            threshold: 2
        };
        "tap" == c ? f.tap = function(a, b) {
            return e(a, a.target)
        } : "doubleTap" == c && (f.tap = function() {}, f.doubleTap = function(a, b) {
            return e(a, a.target)
        }), b.swipe(f)
    } else if ("init" == c) {
        var g = b.popup();
        g.init(), g.show()
    } else "click" != c && "touchstart" != c ? b.bind(c, function(a) {
        return e(a, this)
    }) : b.on(c, function(a) {
        return e(a, this)
    })
}, window.events.touch = function(a) {
    if (-1 != navigator.userAgent.indexOf("iPhone OS 8_4_1") && !0 === isShellApp) return !1;
    var b = "touch"; - 1 != navigator.userAgent.indexOf("SonySO-04E") && (b = "touchblock");
    var c = $(a);
    c.find("input[type='submit'], a:not(.notouch, .overlink, .disabled, .inactive)").touch({
        className: b
    }), c.find('[class^="ui-button-"]:not(.notouch)').touch({
        className: b
    }), c.find(".overlink.on-next").touch({
        className: b + "-next"
    })
}, window.events.accordion = function(a) {
    $(a).find('[data-ui="accordion"]').on("click", function(a) {
        return $(this).accordion().toggle(), !1
    })
}, $(document).ready(function() {
    "use strict";
    window.events.touch(document.body), window.events.accordion(document.body), $('[data-ui="tab"]').on("click", function(a) {
        return a.preventDefault(), $(this).tab({
            key: $(this).data("tabkey") || null,
            target: $(this).data("target") || null,
            targetprefix: $(this).data("targetprefix") || "#"
        }), !1
    }), $('[data-ui="popup"]').each(function() {
        window.events.popup(this)
    }), $('[data-ui="notification"]').each(function(a) {
        return $(this).notification().init(), !1
    }), $('[data-ui="scroll"]').click(function(a) {
        a.preventDefault();
        var b = $(this),
            c = b.data("target"),
            d = b.data("duration"),
            e = b.data("id");
        return b.scrollTo(c, d, e), !1
    }), $('[data-ui="countdown"]').each(function() {
        var a = $(this);
        a.countdown({
            time: a.data("time") || 0,
            format: a.data("format") || "m:s"
        })
    })
});




"Pex: https://github.com/PexJS/PexJS";
"version: a3f2011(sjis)";
(function() {
    "use strict";
    var a = "1.2.0";

    function aVer() {
        var e = navigator.userAgent;
        if (e.indexOf("Android") > 0) return parseFloat(e.slice(e.indexOf("Android") + 8))
    };

    function cVer() {
        var e = window.navigator.userAgent.toLowerCase();
        if (e.indexOf("chrome") > 0) {
            var r = /chrome\/([\d\.]+)/.exec(e)[1],
                n = parseInt(r);
            if (n >= 57) return n
        }
    };
    var aVer = aVer();
    var cVer = cVer();
    var b = function(a) {
        console.log.apply(console, Array.prototype.slice.apply(arguments))
    };
    var c = function(a) {
        console.error.apply(console, Array.prototype.slice.apply(arguments));
        throw a
    };
    var d = function() {
        console.warn.apply(console, Array.prototype.slice.apply(arguments))
    };
    var e = function(a) {
        if (a.constructor == Array) {
            return [].concat(a)
        }
        var b = {};
        for (var c in a) {
            b[c] = a[c]
        }
        return b
    };
    var f = {
        shapeDetail: null,
        partialDraw: false,
        delayEval: true,
        fixRatio: true,
        width: null,
        height: null,
        transparent: false,
        fps: null,
        frameCallback: {},
        disableFrameSkip: false,
        cacheColoredImage: true,
        stopOnStart: false,
        enableButton: false,
        enableTouch: false,
        debug: false,
        suppressLog: {},
        origin: null,
        frameRect: null,
        compileAction: true,
        operation: {},
        cacheMaxShapeSize: null,
        cacheMaxTotalSize: null,
        onerror: null,
        enableStyleText: false,
        _enableWorkaroundForUnicolor: false,
        colorLevels: 16,
        swfBinary: null,
        forceDisableBlendMode: false
    };
    var g = {};
    g.Ub = 0;
    g._b = 1;
    g.Nb = 2;
    g.Xb = 4;
    g.Cb = 6;
    g.Hb = 7;
    g.Wb = 8;
    g.$b = 9;
    g.Kb = 10;
    g.Rb = 11;
    g.Tb = 12;
    g.Fb = 20;
    g.Db = 21;
    g.Ob = 22;
    g.Yb = 26;
    g.Zb = 28;
    g.Pb = 32;
    g.Sb = 33;
    g.Ib = 34;
    g.Eb = 35;
    g.Gb = 36;
    g.Jb = 37;
    g.Qb = 39;
    g.Vb = 43;
    g.Mb = 46;
    g.Lb = 48;
    var h = {};
    h.Ab = 0;
    h.tb = 1;
    h.Bb = 2;
    var i = {};
    i.zb = 0;
    i.ub = 16;
    i.xb = 18;
    i.yb = 64;
    i.sb = 65;
    i.wb = 66;
    i.vb = 67;
    var j = {};
    j.S = 4;
    j.X = 5;
    j.V = 6;
    j.fb = 7;
    j.ob = 8;
    j.gb = 9;
    j.W = 23;
    j.o = 10;
    j.mb = 11;
    j.R = 12;
    j.w = 13;
    j.A = 14;
    j.M = 15;
    j.q = 16;
    j.U = 17;
    j.T = 18;
    j.ib = 19;
    j.kb = 20;
    j.jb = 21;
    j.nb = 24;
    j.G = 28;
    j.db = 29;
    j.cb = 32;
    j.hb = 33;
    j.C = 34;
    j.ab = 35;
    j.v = 36;
    j._ = 37;
    j.pb = 38;
    j.eb = 39;
    j.z = 40;
    j.lb = 41;
    j.B = 45;
    j.$ = 48;
    j.Q = 49;
    j.u = 50;
    j.r = 51;
    j.D = 52;
    j.P = 53;
    j.O = 54;
    j.N = 55;
    j.Z = 76;
    j.I = 129;
    j.E = 131;
    j.qb = 138;
    j.bb = 139;
    j.H = 140;
    j.Y = 150;
    j.L = 153;
    j.K = 157;
    j.s = 158;
    j.J = 159;
    j.rb = 141;
    j.F = 154;
    var k = function Jc(a) {
        var b = a.charCodeAt(0);
        Jc.Ch = Jc.Ch || new RegExp("[\uff61\uff62\uff63\uff64\uff65\uff66\uff67\uff68\uff69\uff6a\uff6b\uff6c\uff6d\uff6e\uff6f\uff70\uff71\uff72\uff73\uff74\uff75\uff76\uff77\uff78\uff79\uff7a\uff7b\uff7c\uff7d\uff7e\uff7f\uff80\uff81\uff82\uff83\uff84\uff85\uff86\uff87\uff88\uff89\uff8a\uff8b\uff8c\uff8d\uff8e\uff8f\uff90\uff91\uff92\uff93\uff94\uff95\uff96\uff97\uff98\uff99\uff9a\uff9b\uff9c\uff9d\uff9e\uff9f]");
        return 32 <= b && b <= 126 || Jc.Ch.test(a)
    };
    var l = function(a, b, c) {
        return [a[0] * b + a[2] * c + a[4] * 20, a[1] * b + a[3] * c + a[5] * 20]
    };
    var m = function(b, d, e) {
        if (a.indexOf(b.JSON_VERSION) != 0 && a.indexOf(b.JSON_VERSION) != 1) {
            c("src object is not compatible with this Pex version. Please regenerate new one using parse_swf.")
        }
        if (!d) {
            d = {}
        }
        var f = {
            Af: b.Af,
            Ii: [],
            Pd: true,
            loadingImageCount: 0
        };
        var g = b.Ii;
        for (var h = 0, i = g.length; h < i; h++) {
            var j = g[h];
            if (j.hasOwnProperty("img")) {
                var k = d[j.img] || document.createElement("img");
                if (!k.src) {
                    k.onload = function() {
                        if (--f.loadingImageCount === 0) {
                            e && e()
                        }
                    };
                    k.src = j.img;
                    ++f.loadingImageCount
                }
                j.img = k
            }
            f.Ii.push(j)
        }
        if (f.loadingImageCount === 0) {
            e && e()
        }
        return f
    };
    var n = function() {
        this.data = {};
        this.Je = [];
        this.debug = false;
        this.suppressFPS = false;
        this.af = 0;
        this.rg = 0;
        var a = this;
        (function c() {
            setTimeout(c, 1e3 / 60);
            var d = Date.now();
            var e = false;
            for (var f = 0; f < a.Je.length; f++) {
                e = a.Je[f].Qi(d) || e
            }
            e && a.af++;
            var g = a.rg = a.rg || d;
            if (d - g > 1e3) {
                a.debug && !a.suppressFPS && b("fps:" + a.af * 1e3 / (d - g));
                a.af = 0;
                a.rg = d
            }
        })()
    };
    n.rf = function() {
        var a = n;
        if (a.bc) {
            return a.bc
        }
        return a.bc = new a
    };
    n.prototype.Eg = function(a, b, d) {
        var e;
        if (typeof a == "string") {
            var f = d && d.name || a;
            e = this.data[f];
            if (!e) {
                if (typeof f == "string") {
                    if (d && d.ig) {
                        c("unimplemented json reader")
                    } else {
                        var g = new Hb(d);
                        var h = new p(g, b, d);
                        g.Eg(a, function(a) {
                            return function() {
                                a.me.apply(a, arguments)
                            }
                        }(h));
                        if (!d || !d.solo) {
                            this.data[f] = g
                        }
                        this.Je.push(h);
                        return h
                    }
                }
            } else {
                var h = new p(e, b, d);
                e.Ic(function(a) {
                    return function() {
                        a.me.apply(a, arguments)
                    }
                }(h));
                this.Je.push(h);
                return h
            }
            return null
        }
        if (typeof a == "object") {
            e = m(a, d && d.Kf);
            var h = new p(e, b, d);
            h.me();
            this.Je.push(h);
            return h
        }
        return null
    };
    n.prototype.Gj = function(a) {
        var b = this.Je;
        var c = b.length;
        for (var d = 0; d < c; d++) {
            if (b[d] == a) {
                b.splice(d, 1);
                return true
            }
        }
        return false
    };
    var o = function(a, c, d) {
        o.Te = o.Te || Date.now();
        d = d || {};
        var e = n.rf();
        e.debug = e.debug || d.debug;
        for (var g in f) {
            g in d || (d[g] = f[g])
        }
        for (var g in d) {
            if (!g in f) {
                d.debug && b("unknown option: " + g)
            }
        }
        e.suppressFPS |= d.suppressLog.fps;
        return e.Eg(a, c, d)
    };
    window.Pex = o;
    var p = function(a, b, c) {
        this.le = a;
        this.Qd = typeof b == "string" ? document.getElementById(b) : b;
        this.ch = q(c);
        this.canvas = null;
        if (c.partialDraw) {
            this.Ih = new eb(this)
        } else {
            this.Ih = new db(this)
        }
        this.onCreateMC = [];
        this.newMcList = [];
        this.kj = new y(this);
        this.ue = {
            name: ""
        };
        this.Qg = {};
        this.$c = null;
        this.Ri = [];
        this.ag = false;
        this.Sc = null;
        this.jd = [];
        this.Ui = new K(this);
        var d = this;
        this.readyCallbacks = [];
        this.Fj = function() {
            var a = d.readyCallbacks;
            var b = a.length;
            for (var c = 0; c < b; c++) {
                a[c]()
            }
            d.Fj = null
        };
        this.noskip = false;
        this.frameSkipRatio = 0;
        this.logicalRenderCount = 0;
        this.Sf()
    };
    p.prototype.Sf = function() {
        var a = this.ch;
        var b = this.le;
        var c = new x;
        this.Rc = new r(this, c, b.Ii);
        this.Qh = new t(this, c, null, null);
        this.Ri.push(this.Qh);
        var d = b.Af;
        this.Qh.yh["uc"] = d.df;
        this.mf = a.fps || d.mf;
        d.nf && this.Ih._h(d.nf);
        this.df = 0;
        this.renderCount = 0;
        this.Vh = !a.stopOnStart;
        X(a.forceDisableBlendMode, a.debug)
    };
    p.prototype.me = function() {
        var a = this.le;
        if (a.Pd) {
            this.ch.debug && b("parse completed: " + (Date.now() - o.Te));
            this.Fg = true
        }
        var c = a.Af;
        if (this.Qh) {
            this.Qh.yh["uc"] = c.df
        }
        this.mf = this.ch.fps || c.mf;
        this.Rc.Nc(this.ue);
        c.nf && this.Ih._h(c.nf);
        this.Ih.Ej && this.Ih.Ej()
    };
    p.prototype.Qi = function(a) {
        var c = this.df;
        var d;
        if (!this.stopFrame) {
            if (this.yi) {
                d = this.mf * (a - this.yi) / 1e3 | 0;
                if (this.frameSkipRatio) {
                    var e = d * (1 - this.frameSkipRatio) | 0;
                    if (e <= this.logicalRenderCount) {
                        return
                    }
                    this.logicalRenderCount = e
                }
            } else {
                this.yi = a;
                d = 1
            }
        } else {
            d = Number.MAX_VALUE
        }
        if (c == d || this.le.loadingImageCount > 0) {
            return
        }
        this.Fj && this.Fg && this.Fj();
        if (!this.stopFrame) {
            if (!this.Vh) {
                return
            }
            if (c <= 1 || this.ch.disableFrameSkip && d - c > 1 || d - c > 30) {
                d = c + 1;
                this.yi = a - c / this.mf * 1e3
            }
        }
        var f = false;
        var g = false;
        var h = [];
        while (c < d) {
            c++;
            var i;
            if (!this.kj.Vh) {
                if (this.ag) {
                    i = this.Si
                } else {
                    i = this.Ri.length - 1
                }
                for (var j = i; j >= 0; j--) {
                    var k = this.Ri[j];
                    if (k.dg) {
                        var l = 1;
                        if (k.yh.dc < k.yh["uc"]) {
                            l = k.yh.dc + 1
                        }
                        if (!this.gotoFrame(k, l)) {
                            this.ch.debug && b("gotoFrame: try to go to non-loading frame at mclist");
                            this.ag = true;
                            this.Si = j;
                            return false
                        }
                    }
                    if (k.onEnterFrames.length) {
                        h.push(k)
                    }
                }
                var m = h.length;
                for (var j = 0; j < m; j++) {
                    var k = h[j];
                    var n = k.Cc || "/";
                    var o = k.yh.dc;
                    var p = k.onEnterFrames;
                    var q = p.length;
                    for (var r = 0; r < q; r++) {
                        p[r](this.Sc, n, o)
                    }
                }
                h = []
            }
            if (!this.kj.Uh()) {
                this.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM");
                return false
            }
            if (this.ch.enableButton && this.Bj()) {
                if (!this.kj.Uh()) {
                    this.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM");
                    return false
                }
            }
            if (this.onCreateMC.length) {
                var s = this.onCreateMC;
                var t = s.length;
                var u = this.newMcList;
                var m = u.length;
                for (var j = 0; j < m; j++) {
                    var n = u[j].Cc || "/";
                    for (var r = 0; r < t; r++) {
                        s[r](this.Sc, n)
                    }
                }
            }
            this.newMcList = [];
            this.ag = false;
            g = true;
            if (this.noskip) {
                this.ch.debug && b("noskip frame and force rendering");
                this.Ih.Hh();
                f = true;
                this.noskip = false
            }
            if (this.stopFrame) {
                var v = this.Qh.yh["dc"];
                var w = this.stopFrame % this.Qh.yh["uc"];
                if (w == 0) {
                    w = this.Qh.yh["uc"]
                }
                if (v == w) {
                    this.lastStopFrame = this.stopFrame;
                    this.stopFrame = 0;
                    break
                }
            }
        }
        this.df = c;
        if (!f) {
            this.Ih.Hh()
        }
        g && this.renderCount++;
        return true
    };
    p.prototype.Bj = function() {
        var a = false;
        var b = this.jd;
        for (var c = b.length - 1; c >= 0; c--) {
            var d = b[c];
            var e = d.Pg;
            if (d.Yf) {
                continue
            }
            var f = false;
            for (var g in e.fd) {
                if (this.Ui._f(g) && d.Zf(true)) {
                    this.kj.Hc(d.nh, e.fd[g]);
                    f = true;
                    break
                } else if (g == "sh" && this.Ui.Vg) {
                    if (d.$f(this.Ui.Vg.x, this.Ui.Vg.y)) {
                        this.kj.Hc(d.nh, e.fd[g]);
                        f = true;
                        break
                    }
                } else if (g == "Dh" && this.Ui.Wg) {
                    if (d.$f(this.Ui.Wg.x, this.Ui.Wg.y)) {
                        this.kj.Hc(d.nh, e.fd[g]);
                        f = true;
                        break
                    }
                }
            }
            if (f) {
                a = true;
                break
            }
        }
        this.Ui.Cd();
        this.Ui.Dd();
        return a
    };
    p.prototype.gotoFrame = function(a, b, c) {
        b = +b;
        var d = a.yh["dc"];
        b = b < 1 ? 1 : b;
        var e = true;
        if (b > a.yh["uc"]) {
            b = a.yh["uc"];
            e = false
        }
        if (a.Yf || b === d) {
            return true
        }
        if (b > a.yh["gc"]) {
            return false
        }
        var f = false;
        if (b == d + 1) {
            f = true
        }
        var g = a.Pg;
        a.yh["dc"] = b;
        var h = g.bf[b];
        if (e && h) {
            var i = h.length;
            for (var j = 0; j < i; j++) {
                this.kj.Hc(a, h[j])
            }
        }
        if (f) {
            var k = g.ef[b];
            var i = k.length;
            for (var j = 0; j < i; j++) {
                a.Fh(k[j])
            }
            var l = g.cf[b];
            var m = l.length;
            for (var j = 0; j < m; j++) {
                a.ae(b, l[j])
            }
            var n = g.gf[b];
            var o = false;
            for (var j in n) {
                if (n[j]) {
                    o = true;
                    var p = a.zd[j];
                    var q = g.hf[b][j].Mg;
                    if (p && !p.ag && q) {
                        p.ai(q)
                    }
                }
            }
            if (o) {
                a.og = this.df
            }
        } else {
            var r = g.ff[d];
            var s = r.length;
            var t = g.ff[b];
            var u = t.length;
            var j = 0,
                v = 0;
            var l = [];
            var w = [];
            while (j < u && v < s) {
                var x = t[j];
                var y = r[v];
                if (x === y) {
                    w[w.length] = x;
                    j++;
                    v++
                } else if (x < y) {
                    l[l.length] = x;
                    j++
                } else {
                    a.Fh(y);
                    v++
                }
            }
            if (j != u) {
                while (j < u) {
                    l.push(t[j++])
                }
            } else if (v != s) {
                while (v < s) {
                    a.Fh(r[v++])
                }
            }
            var i = l.length;
            for (var j = 0; j < i; j++) {
                var z = l[j];
                a.ae(b, z, g.Df[z].bd != b)
            }
            a.og = this.df;
            i = w.length;
            for (var j = 0; j < i; j++) {
                var z = w[j];
                var p = a.zd[z];
                var q = g.hf[b][z].Mg;
                if (p && !p.ag && q) {
                    p.ai(q)
                }
            }
        }
        var A = this.ch.frameCallback;
        var B = A[a.yh.jc];
        if (!B) {
            B = A[a.Cc === "" ? "/" : a.Cc]
        }
        if (B) {
            var C = g.jf;
            for (var D in C) {
                if (b == C[D] && B[D]) {
                    B[D](this)
                }
            }
            var E = B[b] || b == a.yh["uc"] && B["last"];
            E && E(this)
        }
        if (g.noskipFrameList[b]) {
            this.noskip = true
        }
        return true
    };
    p.prototype.getAPI = function() {
        return this.Sc || (this.Sc = new I(this))
    };
    p.prototype.getFPS = function() {
        return this.mf
    };
    p.prototype.setFPS = function(a) {
        this.yi && (this.yi = Date.now() - this.df / a * 1e3);
        this.mf = this.ch.fps = a
    };
    p.prototype.getFrameSkipRatio = function() {
        return this.frameSkipRatio
    };
    p.prototype.setFrameSkipRatio = function(a) {
        this.logicalRenderCount = this.mf * (Date.now() - this.yi) * (1 - a) / 1e3 | 0;
        this.frameSkipRatio = a;
        return true
    };
    var q = function(a) {
        var b = function(a, c) {
            for (var d in a) {
                var e = a[d];
                if (e instanceof HTMLElement || e instanceof Function) {
                    c[d] = e
                } else if (e instanceof Array) {
                    c[d] = [];
                    b(e, c[d])
                } else if (e instanceof Object) {
                    c[d] = {};
                    b(e, c[d])
                } else {
                    c[d] = e
                }
            }
        };
        var c = {};
        b(a, c);
        return c
    };
    var r = function(a, b, c, d, e) {
        this.Ie = a;
        this.Pg = b;
        this.Ii = c;
        this.hd = d;
        this.gd = e;
        this.Qc = 0;
        this.af = 1;
        this.Cf = 0;
        this.Ef = [];
        this.cd = [];
        this.ne = [];
        this.Gf = {};
        this.Ff = {};
        this.ug = {}
    };
    r.prototype.Nc = function(a) {
        if (this.Ii) {
            this.Pc(a)
        } else {
            this.Oc(a)
        }
    };
    r.prototype.Pc = function(a) {
        var b = this.Ie;
        var c = this.Pg;
        var e = this.Ii;
        var f = e.length;
        a: for (var h = this.Qc; h < f; h++) {
            var i = e[h];
            switch (i.aj) {
                case g.Ub:
                    c.wj = this.af - 1;
                    break a;
                case g.$b:
                    !b.ch.transparent && (b.$c || (b.$c = i.Kd));
                    break;
                case g.Vb:
                    c.jf[i.name] = this.af;
                    if (i.name.toLowerCase() === "_noskip") {
                        c.noskipFrameList[this.af] = true
                    }
                    break;
                case g._b:
                    var j = this.af;
                    c.ff[j] = [].concat(this.Ef);
                    c.cf[j] = this.cd;
                    c.ef[j] = this.ne;
                    c.gf[j] = this.Ff;
                    this.cd = [];
                    this.ne = [];
                    this.Ff = {};
                    var k = {};
                    for (var l in this.Gf) {
                        k[l] = this.Gf[l]
                    }
                    c.hf[j] = k;
                    this.af++;
                    break;
                case g.Yb:
                    var m = i.wd;
                    var n = i.re;
                    var o = this.ug[i.re];
                    var p = m || this.Gf[o].wd;
                    var q = a[p];
                    if (q.aj == g.Mb || p >= 65536 && p <= 4294967295) {
                        if (p >= 65536) {
                            q = a[q.dh]
                        }
                        var r = {};
                        var t = this.Gf[o];
                        for (var l in i) {
                            r[l] = i[l] || t && t[l]
                        }
                        r.wd = s(b, q, i.Ah, a);
                        i = r;
                        m = r.wd
                    }
                    if (i.Xg && !m) {
                        var u = this.Gf[o];
                        var v = {};
                        for (var l in i) {
                            v[l] = i[l]
                        }
                        for (var l in u) {
                            if (i[l] == null && u[l] != null) {
                                v[l] = u[l]
                            }
                        }
                        this.Gf[o] = v;
                        this.Ff[o] = true
                    } else {
                        if (i.Xg) {
                            var u = this.Gf[o];
                            var v = {};
                            for (var l in i) {
                                v[l] = i[l]
                            }
                            for (var l in u) {
                                if (i[l] == null && u[l] != null) {
                                    v[l] = u[l]
                                }
                            }
                            i = v;
                            this.Ef.splice(this.Ef.indexOf(o), 1);
                            this.ne.push(o)
                        }
                        var w = ++this.Cf;
                        this.Ef.push(w);
                        this.Gf[w] = i;
                        this.cd.push(w);
                        var x = {};
                        x.id = w;
                        x.wd = i.wd;
                        x.tg = i.re;
                        x.bd = this.af;
                        x.rh = i;
                        x.Dj = {};
                        c.Df[w] = x;
                        this.ug[i.re] = w
                    }
                    break;
                case g.Zb:
                    var o = this.ug[i.re];
                    this.Ef.splice(this.Ef.indexOf(o), 1);
                    this.ne.push(o);
                    delete this.Gf[o];
                    delete this.ug[i.re];
                    break;
                case g.Tb:
                    var y = (b.ch.compileAction ? z : A)(i.Gc, b.ch.debug);
                    (c.bf[this.af] || (c.bf[this.af] = [])).push(y);
                    break;
                case g.Wb:
                    break;
                case g.Cb:
                case g.Db:
                case g.Eb:
                case g.Fb:
                case g.Gb:
                case g.Nb:
                case g.Ob:
                case g.Pb:
                case g.Hb:
                case g.Ib:
                case g.Kb:
                case g.Lb:
                case g.Rb:
                case g.Sb:
                case g.Jb:
                case g.Mb:
                case g.Qb:
                    a[i.id] = i;
                    break;
                default:
                    d("Analyzer: unknown tag detected [" + i.aj + "]");
                    break
            }
        }
        this.Qc = f;
        c.of = this.af - 1;
        c.Cf = this.Cf;
        c.bj()
    };
    r.prototype.Oc = function(a) {
        var b = this.Ie;
        var c = this.Pg;
        var d = this.hd;
        var e = this.gd;
        var f = [null, [],
            [],
            [],
            []
        ];
        var h = [null, [],
            [],
            [],
            []
        ];
        var i = [null, [],
            [],
            [],
            []
        ];
        var j = [null, {}, {}, {}, {}];
        var k = d.length;
        for (var l = 0; l < k; l++) {
            var m = d[l];
            var n = m.wd;
            var o = a[n];
            var p = ++this.Cf;
            var q = null;
            var r = {
                aj: g.Yb,
                Xg: 0,
                re: m.re,
                wd: n,
                Mg: m.Mg,
                ie: m.Ld,
                name: null,
                Ed: null
            };
            if (m.Ei) {
                f[1].push(p);
                j[1][p] = r;
                h[1].push(p);
                if (!m.Di) {
                    i[2].push(p)
                }
                if (!q) q = 1
            }
            if (m.Di) {
                f[2].push(p);
                j[2][p] = r;
                if (!m.Ei) {
                    h[2].push(p)
                }
                if (!m.Bi) {
                    i[3].push(p)
                }
                if (!q) q = 2
            }
            if (m.Bi) {
                f[3].push(p);
                j[3][p] = r;
                if (!m.Di) {
                    h[3].push(p)
                }
                if (!m.Ci) {
                    i[4].push(p)
                }
                if (!q) q = 3
            }
            if (m.Ci) {
                var s = m.Di;
                for (var t = 1; t <= 3; t++) {
                    f[t].push(p);
                    j[t][p] = r;
                    if (!s) {
                        h[t].push(p)
                    }
                }
                if (!q) q = 4
            }
            var u = {};
            u.id = p;
            u.wd = n;
            u.tg = m.re + (q == 4 ? 65536 : 0);
            u.bd = q;
            u.rh = r;
            u.Dj = {};
            c.Df[p] = u
        }
        for (var l in e) {
            var v = e[l];
            if (v.lg) {
                c.fd[v.lg] = z(v.Gc)
            }
            if (v.mh) {
                c.fd["sh"] = z(v.Gc)
            } else if (v.kh) {
                c.fd["Dh"] = z(v.Gc)
            }
        }
        c.ff = f;
        c.cf = h;
        c.ef = i;
        c.hf = j;
        c.gf = [{}, {}, {}, {}];
        c.jf = {
            ac: 1,
            j: 2,
            d: 3,
            g: 4
        };
        c.bf = {};
        c.of = 3;
        c.Cf = this.Cf;
        c.bj();
        this.Qc = k
    };
    var s = function(a, b, d, e) {
        d = d || 0;
        var f = b.id * 65536 + d;
        var i = e[f];
        if (i) {
            return f
        }
        i = {
            id: f,
            dh: b.id,
            aj: g.Nb
        };
        var j = d / 65536;
        var k = 1 - j;
        var l = [];
        for (var m = 0; m < 4; m++) {
            l.push(b.ti[m] * k + b.Ce[m] * j)
        }
        i.dd = l;
        var n = [];
        var o = b.Qe.length;
        for (var m = 0; m < o; m++) {
            var p = b.Qe[m];
            var q = {
                zf: {}
            };
            q.aj = p.aj;
            if (p.aj == 0) {
                q.Kd = p.start * k + p.end * j
            } else if (p.aj == 16 || p.aj == 18) {
                var r = [];
                for (var s = 0; s < 6; s++) {
                    r[s] = p.start[s] * k + p.end[s] * j
                }
                q.Mg = r;
                var t = [];
                var u = p.zf.Bh.length;
                for (var s = 0; s < u; s++) {
                    var v = p.zf.Bh[s];
                    t[s] = {
                        Ah: v.xi * k + v.Ge * j,
                        Kd: v.ui * k + v.De * j
                    }
                }
                q.zf.Bh = t
            } else {
                c("createVirtualShapeFromMorph: unsupported morphing param:", p.aj)
            }
            n.push(q)
        }
        i.Qe = n;
        var w = [];
        var o = b.Bg.length;
        for (var m = 0; m < o; m++) {
            var x = b.Bg[m];
            var y = {
                width: x.zi * k + x.He * j,
                Kd: x.ui * k + x.De * j
            };
            w.push(y)
        }
        i.Bg = w;
        if (b.vi.length > b.Ee.length) {
            c("createVirtualShapeFromMorph: difference detected at startEdges and endEdges")
        }
        var z = b.vi.length;
        var A = [];
        for (var m = 0; m < z; m++) {
            var B = b.vi[m];
            var C = b.Ee[m];
            var D = {};
            if (B.aj == h.tb && C.aj == h.Ab) {
                C.aj = h.tb;
                C.Wc = C.he = C.x / 2;
                C.Xc = C.ke = C.y / 2
            } else if (B.aj == h.Ab && C.aj == h.tb) {
                B.aj = h.tb;
                B.Wc = B.he = B.x / 2;
                B.Xc = B.ke = B.y / 2
            }
            D.aj = B.aj;
            if (B.aj == h.Bb) {
                D.Ag = B.Ag;
                D.Oe = B.Oe;
                D.Pe = B.Pe;
                D.Ae = B.Ae * k + C.Ae * j;
                D.Be = B.Be * k + C.Be * j;
                D.Bg = B.Bg;
                D.Qe = B.Qe
            } else if (B.aj == h.Ab) {
                D.x = B.x * k + C.x * j;
                D.y = B.y * k + C.y * j
            } else if (B.aj == h.tb) {
                D.he = B.he * k + C.he * j;
                D.ke = B.ke * k + C.ke * j;
                D.Wc = B.Wc * k + C.Wc * j;
                D.Xc = B.Xc * k + C.Xc * j
            } else {
                c("createVirtualShapeFromMorph: unknown edge type:", B.aj)
            }
            A.push(D)
        }
        i.hi = A;
        e[f] = i;
        return f
    };
    var t = function(a, b, c, d, e) {
        this.Ie = a;
        this.Pg = b;
        b.bh = function(a) {
            return function() {
                a.Rg.apply(a, arguments)
            }
        }(this);
        this.we = {};
        this.displayListCount = {};
        this.yh = {
            yc: 0,
            Ac: 0,
            dc: 0,
            uc: b.of,
            cc: 100,
            wc: 1,
            xc: 0,
            hc: 0,
            tc: null,
            gc: b.of,
            jc: null,
            ec: null,
            vc: null,
            ic: 1,
            fc: 0,
            zc: 100,
            Bc: 100,
            nc: 0,
            oc: 90,
            rc: 1,
            sc: 1,
            kc: 0,
            lc: 0
        };
        this.hj = {};
        this.ag = false;
        this.dg = true;
        this.Xf = false;
        this.Vf = false;
        this.Yf = false;
        this.nh = c;
        this.children = [];
        this.Ad = {};
        this.zd = {};
        this.Tf = 0;
        this.og = 0;
        this.Bd = {
            yd: -1,
            Ug: true
        };
        this.Pf(d);
        this.Cc = c ? c.Cc + "/" + this.yh.jc : "";
        this.id = null;
        this.onEnterFrames = [];
        if (e) {
            this.Ke = true
        } else {
            this.Ie.newMcList.push(this)
        }
        this.ue = c && c.ue || a.ue;
        this.Qg = c && c.Qg || a.Qg
    };
    t.prototype.Rg = function() {
        this.yh["gc"] = this.Pg.of;
        if (this.Pg.wj) this.yh["uc"] = this.Pg.wj
    };
    t.prototype.Pf = function(a) {
        var b = this.nh;
        if (a) {
            if (a.name) {
                this.yh.jc = a.name
            } else {
                if (b) {
                    this.yh.jc = "instance" + ++b.Tf
                } else {
                    this.yh.jc = "instance1"
                }
            }
            this.ai(a.Mg)
        }
        if (b) {
            b.children.push(this);
            var c = this.yh.jc;
            b.Ad[c] && b.Ad[c].push(this) || (b.Ad[c] = [this])
        }
    };
    var u = function(a, b, c, d, e, f, h, i) {
        var j = {};
        c *= 20;
        d *= 20;
        var k = h ? c * h : 0;
        var l = i ? d * i : 0;
        var m = w(a);
        a[m] = {
            aj: g.Db,
            id: m,
            img: b
        };
        m++;
        j.shapeId = m;
        a[j.shapeId] = {
            aj: g.Nb,
            id: j.shapeId,
            dd: [-k, c - k, -l, d - l],
            Qe: [{
                aj: 65,
                _c: j.shapeId - 1,
                Mg: [20, 0, 0, 20, -k / 20, -l / 20]
            }],
            Bg: [],
            hi: [{
                aj: 2,
                Ae: c - k,
                Be: d - l,
                Pe: 1
            }, {
                aj: 0,
                x: -c,
                y: 0
            }, {
                aj: 0,
                x: 0,
                y: -d
            }, {
                aj: 0,
                x: c,
                y: 0
            }, {
                aj: 0,
                x: 0,
                y: d
            }]
        };
        m++;
        j.containerId = m;
        a[j.containerId] = {
            aj: g.Qb,
            id: j.containerId,
            df: 1,
            Ji: [{
                aj: g.Yb,
                wd: j.shapeId,
                re: 1,
                Xg: 0,
                Mg: [e, 0, 0, f, 0, 0]
            }, {
                aj: g._b
            }, {
                aj: g.Ub
            }]
        };
        j.rh = {
            aj: g.Yb,
            wd: j.containerId,
            re: 1,
            Mg: [1, 0, 0, 1, 0, 0],
            Xg: 0
        };
        return j
    };
    t.prototype.replaceMovieClip = function(a, b, c, e, f, g) {
        var h = a.width;
        var i = a.height;
        if (!h || !i) {
            d("[MovieClip#replaceMovieClip] Unable to replace because image might not be loaded.");
            return false
        }
        var j = b ? b / h : 1;
        var k = c ? c / i : 1;
        if (e) {
            k = j = Math.min(j, k)
        }
        this._resetDisplayList();
        this.dg = false;
        var l = u(this.ue, a, h, i, j, k, f, g);
        var m = this.nh.Pg;
        m.Cf++;
        var n = m.Cf;
        var o = {};
        var p = this.yh.dc;
        o.id = n;
        o.wd = l.containerId;
        o.tg = 1;
        o.bd = p;
        o.rh = l.rh;
        o.Dj = {};
        this.Pg.Df[n] = o;
        for (var q = 1; q <= this.yh.uc; q++) {
            this.Pg.hf[q][n] = l.rh
        }
        this.ae(this.af, n);
        return true
    };
    t.prototype.Gd = function(a, b) {
        var c = this.nh;
        var d = c.Pg;
        var e = c.Pg.Df[this.id];
        var f = e.id;
        d.Cf++;
        var g = d.Cf;
        var h = G(e.rh);
        h.name = a;
        var i = G(e);
        i.rh = h;
        i.id = g;
        i.tg = b;
        c.Pg.Df[g] = i;
        c.ae(null, g);
        var j = c.zd[g];
        var k = j.yh;
        var l = k.jc;
        k = G(this.yh);
        k.jc = l;
        k.dc = 1;
        j.Xf = true;
        j.og = this.Ie.df;
        var m = d.hf;
        var n = m.length;
        var o = 0;
        var p = 0;
        for (var q = 1; q < n; q++) {
            if (m[q] && m[q][f]) {
                if (o == 0) {
                    o = q
                }
                p = q - o + 1;
                m[p][g] = G(m[q][f]);
                m[p][g].name = a
            } else if (o > 0) {
                p = q - o + 1;
                var r = q - o;
                while (p < n) {
                    m[p][g] = m[p - r][g];
                    p++
                }
                break
            }
        }
        return j
    };
    t.prototype.ae = function(a, c, d) {
        var e = this.ue;
        var f = this.Ie.ch;
        var h = this.Pg.Df[c];
        var i = h.wd;
        var j = e[i];
        var k = h.tg;
        this.og = this.Ie.df;
        if (this.we[k]) {
            var l = this.displayListCount[k] || 0;
            ++l;
            k = k + "." + ("000" + l).slice(-4);
            h.tg = k;
            this.displayListCount[k] = l
        }
        this.we[k] = h;
        var m = false;
        switch (j.aj) {
            case g.Hb:
            case g.Ib:
                m = true;
            case g.Qb:
                var n = h.rh;
                var o = this.Ie;
                var p = this.Qg;
                var q = p[i];
                if (!q) {
                    q = new x;
                    var s = new r(o, q, j.Ji, j.xd, j.Gc);
                    s.Nc(e);
                    p[i] = q
                }
                var u = new t(o, q, this, n);
                h.Dj[c] = u;
                if (m) {
                    u.dg = false;
                    u.Vf = true;
                    this.Ie.jd.push(u)
                }
                o.Ri.push(u);
                var v = o.gotoFrame(u, 1, false);
                u.id = c;
                this.zd[c] = u;
                if (f.replace && n.name) {
                    var w = f.replace;
                    var y = w.length;
                    for (var z = 0; z < y; z++) {
                        var A = w[z];
                        if (n.name == A.name) {
                            u.replaceMovieClip(A.img, A.width, A.height, A.keepAspect, A.xratio, A.yratio)
                        }
                    }
                }
                break;
            case g.Jb:
                var B = e[j.id];
                var C = D(this, B.gj);
                var E = C[0];
                var F = C[1];
                if (E) {
                    if (typeof E.hj[F] == "undefined") {
                        if (F) {
                            E.hj[F] = B.Rf
                        }
                    } else {
                        B.Rf = E.hj[F] + ""
                    }
                } else {
                    this.Ie.ch.debug && b("[DefineEditText:variableName] unable to access: " + B.gj)
                }
                break
        }
    };
    t.prototype.Fh = function(a) {
        var b = this.Pg.Df[a];
        var c = b.wd;
        var d = b.tg;
        this.og = this.Ie.df;
        delete this.we[d];
        var e = this.zd;
        var f = e[a];
        delete e[a];
        f && this.Eh(f)
    };
    t.prototype.Eh = function(a, b) {
        a.og = this.Ie.df;
        if (!b) {
            var c = a.nh;
            c.og = this.Ie.df;
            var d = c.children;
            var e = d.length;
            for (var f = 0; f < e; f++) {
                if (a == d[f]) {
                    d.splice(f, 1);
                    break
                }
            }
            var g = c.Ad[a.yh.jc];
            var e = g.length;
            for (var f = 0; f < e; f++) {
                if (a == g[f]) {
                    g.splice(f, 1);
                    if (g.length == 0) {
                        delete c.Ad[a.yh.jc]
                    }
                    break
                }
            }
        }
        var d = a.children;
        var e = a.children.length;
        for (var f = 0; f < e; f++) {
            a.Eh(d[f], true)
        }
        var h = this.Ie.Ri;
        var e = h.length;
        for (var f = 0; f < e; f++) {
            var i = h[f];
            if (i == a) {
                h.splice(f, 1);
                break
            }
        }
        var j = this.Ie.jd;
        var e = j.length;
        for (var f = 0; f < e; f++) {
            var k = j[f];
            if (k == a) {
                j.splice(f, 1);
                break
            }
        }
        a.Yf = true
    };
    t.prototype.Re = function(a) {
        var b = this.Ad;
        var c = b[a];
        if (c && c[0]) {
            return c[0]
        } else {
            a = a.toLowerCase();
            for (var d in b) {
                if (d.toLowerCase() == a) {
                    return b[d][0]
                }
            }
        }
        return null
    };
    t.prototype.td = function() {
        this.og = this.Ie.df;
        var a = this.yh;
        a.zc = Math.sqrt(a.rc * a.rc + a.kc * a.kc) * 100;
        a.Bc = Math.sqrt(a.sc * a.sc + a.lc * a.lc) * 100;
        a.nc = Math.atan2(a.kc, a.rc) * 180 / Math.PI;
        a.oc = Math.atan2(a.sc, a.lc) * 180 / Math.PI
    };
    t.prototype.sf = function() {
        var a = this.yh;
        return [a.rc, a.kc, a.lc, a.sc, a.yc, a.Ac]
    };
    t.prototype.ci = function(a) {
        var b = this.yh;
        var c = (a - b.nc) / 180 * Math.PI;
        var d = Math.cos(c);
        var e = Math.sin(c);
        var f = [d, e, -e, d, 0, 0];
        var g = l(f, b.rc, b.kc);
        var h = l(f, b.lc, b.sc);
        b.rc = g[0];
        b.kc = g[1];
        b.lc = h[0];
        b.sc = h[1];
        this.td()
    };
    t.prototype.ei = function(a) {
        this.og = this.Ie.df;
        var b = this.yh;
        var c = b.zc;
        if (c != 0) {
            var d = a / c;
            b.rc *= d;
            b.kc *= d;
            if (a == 0) {
                b.nc = v(b.nc)
            } else if (a < 0) {
                b.nc = Math.atan2(b.kc, b.rc) * 180 / Math.PI
            }
        } else {
            var e = b.nc / 180 * Math.PI;
            b.rc = a / 100 * Math.cos(e);
            b.kc = a / 100 * Math.sin(e)
        }
        b.zc = Math.sqrt(b.rc * b.rc + b.kc * b.kc) * 100
    };
    t.prototype.fi = function(a) {
        this.og = this.Ie.df;
        var b = this.yh;
        var c = b.Bc;
        if (c != 0) {
            var d = a / c;
            b.sc *= d;
            b.lc *= d;
            if (a == 0) {
                b.oc = v(b.oc)
            } else if (a < 0) {
                b.oc = Math.atan2(b.sc, b.lc) * 180 / Math.PI
            }
        } else {
            var e = b.oc / 180 * Math.PI;
            b.sc = a / 100 * Math.cos(e);
            b.lc = a / 100 * Math.sin(e)
        }
        b.Bc = Math.sqrt(b.sc * b.sc + b.lc * b.lc) * 100
    };
    t.prototype.bi = function(a, b) {
        this.og = this.Ie.df;
        this.yh[a] = b
    };
    t.prototype.ai = function(a) {
        this.yh.rc = a[0];
        this.yh.kc = a[1];
        this.yh.lc = a[2];
        this.yh.sc = a[3];
        this.yh.yc = a[4];
        this.yh.Ac = a[5];
        this.td()
    };
    t.prototype.wf = function() {
        var a = this.nh;
        if (this.nh) {
            var b = this.ag ? this.sf() : a.Pg.hf[a.yh.dc][this.id].Mg;
            return M(a.wf(), b || [1, 0, 0, 1, 0, 0])
        } else {
            return this.Ie.Sh || [1, 0, 0, 1, 0, 0]
        }
    };
    t.prototype.Zf = function(a) {
        if (a) {
            var b = this;
            while (b) {
                if (!b.Zf()) {
                    return false
                }
                b = b.nh
            }
            return true
        }
        var c = this.yh;
        return c.wc - 0 && c.zc > 0 && c.Bc > 0
    };
    t.prototype.qf = function(a) {
        var b = this.we;
        var d = this.yh.dc;
        var e = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE];
        for (var f in b) {
            var g = b[f];
            var h = g.id;
            var i = this.Pg.hf[d][h];
            var j = this.zd[h];
            var k;
            if (j) {
                var l = j.ag ? j.sf() : i.Mg;
                k = j.qf(l)
            } else {
                var m = this.ue[g.wd];
                var n = m.dd;
                if (n) {
                    k = i.Mg ? N(i.Mg, n) : n
                } else {
                    c("bounds not found")
                }
            }
            if (k[0] < e[0]) {
                e[0] = k[0]
            }
            if (k[1] > e[1]) {
                e[1] = k[1]
            }
            if (k[2] < e[2]) {
                e[2] = k[2]
            }
            if (k[3] > e[3]) {
                e[3] = k[3]
            }
        }
        if (Object.keys(b).length == 0) {
            e = [0, 0, 0, 0]
        }
        if (!a) {
            if (this.ag) {
                a = this.sf()
            } else {
                var o = this.nh;
                if (o) {
                    var p = o.yh.dc;
                    a = o.Pg.hf[p][this.id].Mg
                } else {
                    a = [1, 0, 0, 1, 0, 0]
                }
            }
        }
        return N(a, e)
    };
    t.prototype.$f = function(a, b) {
        var c = this;
        while (c) {
            if (!c.Zf()) {
                return false
            }
            c = c.nh
        }
        a *= 20;
        b *= 20;
        var d = this.qf(this.wf());
        return d[0] <= a && a <= d[1] && d[2] <= b && b <= d[3]
    };
    var v = function(a) {
        while (a > 180) {
            a -= 360
        }
        while (a <= -180) {
            a += 360
        }
        if (a <= -150) {
            return 180
        } else if (a <= -120) {
            return -135
        } else if (a <= -60) {
            return -90
        } else if (a <= -30) {
            return -45
        } else if (a <= 30) {
            return 0
        } else if (a <= 60) {
            return 45
        } else if (a <= 120) {
            return 90
        } else if (a <= 150) {
            return 135
        } else {
            return 180
        }
    };
    t.prototype.bg = function(a) {
        var b = this.og;
        if (b >= a) {
            return true
        }
        if (this.Wf(a)) {
            return true
        }
        var c = this.nh;
        while (c) {
            if (c.og >= a) {
                return true
            }
            c = c.nh
        }
        return false
    };
    t.prototype.Wf = function(a) {
        if (this.Bd.yd == this.Ie.df) {
            return this.Bd.Ug
        } else {
            this.Bd.yd = this.Ie.df;
            var b = this.we;
            var c = this.ue;
            for (var d in b) {
                var e = b[d];
                var f = this.zd[e.id];
                if (f && f.bg(a)) {
                    this.Bd.Ug = true;
                    return true
                }
                if (c[e.rh.wd].aj == 37) {
                    this.Bd.Ug = true;
                    return true
                }
            }
            this.Bd.Ug = false;
            return false
        }
    };
    t.prototype.loadMovie = function(a, b, c) {
        var d;
        var e;
        var f = this;
        var g = function() {
            e.Nc(h);
            if (!d.Pd) {
                return
            }
            if (d.loadingImageCount > 0) {
                setTimeout(g, 0);
                return
            }
            f.ue = h;
            f.Qg = i;
            var a = d.Af.nf;
            var b = (a[1] - a[0]) / 20;
            var k = (a[3] - a[2]) / 20;
            var l = c.width || b;
            var m = c.height || k;
            var n = l / b;
            var o = m / k;
            var p = -l * c.xratio || 0;
            var q = -m * c.yratio || 0;
            f._startMovie(j, d.Ii, n, o, p, q, c.name, c.onready)
        };
        var h = {
            name: this.Cc
        };
        var i = {};
        var j = w(h);
        var k = i[j] = new x;
        if (typeof b == "object") {
            d = m(b, this.Ie.ch.Kf, g);
            e = new r(this.Ie, k, d.Ii);
            e.Nc(h);
            return true
        }
        var l = n.rf().data;
        d = l[b];
        if (d) {
            e = new r(this.Ie, k, d.Ii);
            g();
            return true
        }
        d = l[b] = new Hb({
            onerror: c.onerror,
            delayEval: c.delayEval || c.delayEval == null
        });
        e = new r(this.Ie, k, d.Ii);
        d.Eg(b, g);
        return true
    };
    t.prototype._startMovie = function(a, b, c, d, e, f, h, i) {
        var j = this.Ie;
        this._resetDisplayList();
        this.dg = false;
        var k = this.ue;
        k[a] = {
            aj: g.Qb,
            id: a,
            df: 1,
            Ji: b
        };
        var l = {
            aj: g.Yb,
            wd: a,
            re: 1,
            Mg: [c, 0, 0, d, e, f],
            Xg: 0,
            name: h || ""
        };
        var m = ++this.Pg.Cf;
        var n = this.yh.dc;
        this.Pg.Df[m] = {
            id: m,
            wd: a,
            tg: 1,
            bd: n,
            rh: l,
            Dj: {}
        };
        for (var o = 1; o <= this.yh.uc; o++) {
            this.Pg.hf[o][m] = l
        }
        this.ae(this.af, m, null);
        i && i()
    };
    t.prototype._resetDisplayList = function() {
        var a = this.we;
        for (var b in a) {
            var c = a[b];
            this.Fh(c.id)
        }
    };
    var w = function(a) {
        var b = 4294967296;
        while (a[b]) {
            b++
        }
        return b
    };
    var x = function() {
        this.bh = null;
        this.of = 0;
        this.wj = 0;
        this.ff = [];
        this.cf = [];
        this.ef = [];
        this.hf = [];
        this.gf = [];
        this.Df = {};
        this.jf = {};
        this.bf = {};
        this.fd = {};
        this.noskipFrameList = [];
        this.Cf = 0
    };
    x.prototype.bj = function() {
        this.bh && this.bh()
    };
    var y = function(a) {
        this.Ie = a;
        this.Le = new t(a, new x, null, null, true);
        this.Ec = [];
        this.uh = [];
        this.Vh = false;
        this.Fc = [];
        this.Sd = [];
        this.ce = null
    };
    y.prototype.Hc = function(a, b, c) {
        var d = this.Fc;
        if (d && c) {
            debugger
        }
        var e = d || (c ? this.uh : this.Ec);
        e[e.length] = [a, b]
    };
    y.prototype.executeAction = function(a, c, d) {
        if (a.yh.dc == 0) {
            this.Hc(a, c, d);
            return true
        }
        var e = this.ce;
        var f = this.Fc;
        var g = this.Sd;
        var h = f.splice(0, f.length);
        var i = g.splice(0, g.length);
        this.Hc(a, c, d);
        var j = this.Uh();
        if (!j) {
            this.Ie.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM")
        }
        this.ce = e;
        f.push.apply(f, h);
        g.push.apply(g, i);
        return j
    };
    y.prototype.Uh = function() {
        var a = this.uh;
        var c = this.Ec;
        var e = this.Fc;
        var f = this.Sd;
        a.length && (e = a, this.uh = []);
        c.length && (e.push.apply(e, c), this.Ec = []);
        var g = this.Vh;
        this.Vh = true;
        var h = this.ce;
        this.ce = null;
        while (e.length) {
            var i = e[0];
            var j = i[0];
            h = h || {
                qh: 0,
                Og: j,
                eh: j,
                qi: [],
                Se: false,
                ud: null
            };
            if (!j.Yf) {
                var k = i[1];
                var l = k(this, h, B, C, D, E, F, G, H, b, d);
                if (!l) {
                    this.ce = h;
                    return false
                }
                if (h.Se) {
                    e.shift();
                    h = f.pop()
                } else {
                    f[f.length] = h;
                    e.unshift.apply(e, h.ud);
                    var m = h.ud.length;
                    for (var n = 1; n < m; n++) {
                        f[f.length] = null
                    }
                    h = null
                }
            } else {
                e.shift();
                h = f.pop()
            }
        }
        this.Vh = g;
        return true
    };
    var z = function(a, b) {
        var c = "var c=d.qh;var e=d.Og;var f=d.qi;while(c>=0){switch('o'+c){";
        var e = a.length;
        for (var f = 0; f < e; f++) {
            var g = a[f];
            c += "case 'o" + g._g + "':";
            switch (g.Id) {
                case j.Z:
                    c += "f[f.length]=f[f.length-1];";
                    break;
                case j.W:
                    c += "f.length--;";
                    break;
                case j.o:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "var b=(+f[f.length-2])||0;";
                    c += "f[f.length-2]=a+b;";
                    c += "f.length--;";
                    break;
                case j.mb:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "var b=(+f[f.length-2])||0;";
                    c += "f[f.length-2]=b-a;";
                    c += "f.length--;";
                    break;
                case j.R:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "var b=(+f[f.length-2])||0;";
                    c += "f[f.length-2]=a*b;";
                    c += "f.length--;";
                    break;
                case j.w:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "var b=(+f[f.length-2])||0;";
                    c += "f[f.length-2]=(a==0)?'#ERROR':b/a;";
                    c += "f.length--;";
                    break;
                case j.M:
                    c += "var a=(+f.pop())||0;";
                    c += "var b=(+f.pop())||0;";
                    c += "f[f.length]=(b<a)?1:0;";
                    break;
                case j.A:
                    c += "var a=(+f.pop())||0;";
                    c += "var b=(+f.pop())||0;";
                    c += "f[f.length]=(a==b)?1:0;";
                    break;
                case j.q:
                    c += "var a=(+f.pop())||0;";
                    c += "var b=(+f.pop())||0;";
                    c += "f[f.length]=(a&&b)?1:0;";
                    break;
                case j.U:
                    c += "var a=(+f.pop())||0;";
                    c += "var b=(+f.pop())||0;";
                    c += "f[f.length]=(a||b)?1:0;";
                    break;
                case j.T:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "f[f.length-1]=(a==0)?1:0;";
                    break;
                case j.hb:
                    c += "var a=f[f.length-1];a=(a==null)?'':a;";
                    c += "var b=f[f.length-2];b=(b==null)?'':b;";
                    c += "f[f.length-2]=b+''+a;";
                    c += "f.length--;";
                    break;
                case j.ib:
                    c += "var a=f.pop()+'';";
                    c += "var b=f.pop()+'';";
                    c += "f[f.length]=(a==b)?1:0;";
                    break;
                case j.jb:
                    c += "var g=+f.pop();";
                    c += "var h=+f.pop()-1;";
                    c += "var k=f.pop()+'';";
                    c += "if(isNaN(g)||isNaN(h)){f[f.length]=''}else{";
                    c += "h=(h<0)?0:h;";
                    c += "g=(g<0)?m(k):g;";
                    c += "f[f.length]=n(k,h,g);}";
                    break;
                case j.P:
                    c += "var g=+f.pop();";
                    c += "var h=+f.pop()-1;";
                    c += "var k=f.pop()+'';";
                    c += "if(isNaN(g)||isNaN(h)){f[f.length]=''}else{";
                    c += "h=(h<0)?0:h;";
                    c += "g=(g<0)?k.length:g;";
                    c += "f[f.length]=k.substr(h,g);}";
                    break;
                case j.kb:
                    c += "var k=f[f.length-1]+'';";
                    c += "f[f.length-1]=m(k);";
                    break;
                case j.Q:
                    c += "var k=f[f.length-1]+'';";
                    c += "f[f.length-1]=k.length;";
                    break;
                case j.lb:
                    c += "var b=f.pop()+'';";
                    c += "var a=f.pop()+'';";
                    c += "f[f.length]=(a<b)?1:0;";
                    break;
                case j.nb:
                    c += "f[f.length-1]=(+(f[f.length-1]))|0;";
                    break;
                case j.u:
                    d("ActionCharToAscii: unimplemented correctly");
                    c += "f[f.length-1]=(f[f.length-1]+'').charCodeAt(0);";
                    break;
                case j.r:
                    d("ActionAsciiToChar: unimplemented correctly");
                    c += "f[f.length-1]=String.fromCharCode(f[f.length-1]);";
                    break;
                case j.O:
                    c += "f[f.length-1]=(f[f.length-1]+'').charCodeAt(0);";
                    break;
                case j.N:
                    c += "f[f.length-1]=String.fromCharCode(f[f.length-1]);";
                    break;
                case j.K:
                    c += "var b=+f.pop();";
                    c += "if(b){c=" + (g.ed == null ? "-1" : g.$g + g.ed) + ";break;}";
                    break;
                case j.L:
                    c += "c=" + (g.ed == null ? "-1" : g.$g + g.ed) + ";break;";
                    break;
                case j.Y:
                    var h = g.fj.length;
                    for (var i = 0; i < h; i++) {
                        var k = g.fj[i];
                        c += "f[f.length]=";
                        if (k == null) {
                            c += "null;"
                        } else if (typeof k == "string") {
                            c += "unescape('" + escape(k) + "');"
                        } else {
                            c += k + ";"
                        }
                    }
                    break;
                case j.G:
                    c += "var o=f.pop();";
                    c += "var value;";
                    c += "var q=r(e,o);";
                    c += "var s=q[0];var t=q[1];";
                    c += "value=(s&&(((s==u.Le)?u.Ie.Qh:s).hj[t]));";
                    c += "value=(typeof(value)=='undefined')?'':value;";
                    c += "f[f.length]=value;";
                    break;
                case j.db:
                    c += "var value=f.pop();";
                    c += "var t=f.pop();";
                    c += "var q=r(e,t);";
                    c += "q[0] && (((q[0]==u.Le)?u.Ie.Qh:q[0]).hj[q[1]]=value);";
                    break;
                case j.C:
                    c += "var p=f.pop();";
                    c += "var v=f.pop();";
                    c += "var w=x(e,v);";
                    c += "var name=z[p];";
                    c += "if(w&&w!=u.Le){if(!name){f[f.length]=0}else{";
                    c += "switch(name){case'tc':f[f.length]=(w.nh&&w.Cc)||'/';break;";
                    c += "case'xc':var A=w.qf();f[f.length]=(A[1]-A[0])/20;break;";
                    c += "case'hc':var A=w.qf();f[f.length]=(A[3]-A[2])/20;break;";
                    c += "case'yc':case'Ac':if(w.ag){f[f.length]=((w.yh[name]*50)|0)/50;}";
                    c += "else{var B=w.nh;var C=B&&B.yh.dc;var h=(name=='yc'?4:5);";
                    c += "f[f.length]=B?((B.Pg.hf[C][w.id].Mg[h]*50)|0)/50:0}break;";
                    c += "default:f[f.length]=w.yh[name];}}}else{f[f.length]=p;}";
                    break;
                case j.ab:
                    c += "var value=f.pop();";
                    c += "var p=f.pop();";
                    c += "var v=f.pop();";
                    c += "var w=x(e,v);";
                    c += "var name=z[p];";
                    c += "if(w&&w!=u.Le){var D=(value==parseFloat(value));switch(name){";
                    c += "case'nc':if(D){w.ag=true;w.ci(+value);}break;";
                    c += "case'zc':if(D){w.ag=true;w.ei(+value);}break;";
                    c += "case'Bc':if(D){w.ag=true;w.fi(+value);}break;";
                    c += "case'cc':case'yc':case'Ac':if(D){w.ag=true;w.bi(name,(+value)||0);}break;";
                    c += "case'fc':case'ic':case'wc':if(value==0||value==1){w.bi(name,+value);}break;";
                    c += "case'xc':var A=w.qf();var E=(A[1]-A[0])/20;var F=w.yh.zc;";
                    c += "if(F!=0){E/=Math.abs(F)};w.ag=true;w.ei(+value/(E||1));break;";
                    c += "case'hc':var A=w.qf();var E=(A[3]-A[2])/20;var F=w.yh.Bc;";
                    c += "if(F!=0){E/=Math.abs(F)};w.ag=true;w.fi(+value/(E||1));break;";
                    c += "case'dc':case'tc':case'uc':case'jc':break;";
                    c += "default:w.yh[name]=value;break;}}";
                    break;
                case j.V:
                    c += "e.dg=true;";
                    break;
                case j.fb:
                    c += "e.dg=false;";
                    break;
                case j.s:
                    c += "var o=f.pop();";
                    c += "var q=r(e,o);";
                    c += "var w=q[0];if(w&&!w.Yf){";
                    c += "var G=q[1];var H=w.Pg.jf[(G+'')]||G;";
                    c += "if(!isNaN(parseInt(H))){var I=w.Pg.bf[H];if(I){";
                    c += "var J=I.length;var q=[];for(var i=0;i<J;i++){q[q.length]=[w,I[i]];}";
                    c += "d.Se=false;d.qh=" + g.$g + ";d.Og=e;d.ud=q;return true;}}}";
                    break;
                case j.H:
                    c += "e.dg=false;var H=e.Pg.jf[unescape('" + escape(g.ng) + "')];";
                    c += "if(H){var q=u.Ie.gotoFrame(e,H);if(!q){d.qh=" + g._g + ";d.Og=e;return false;}}";
                    break;
                case j.I:
                    c += "if(e!=u.Le){e.dg=false;var q=u.Ie.gotoFrame(e," + g.af + ");";
                    c += "if(!q){d.qh=" + g._g + ";d.Og=e;return false;}}";
                    break;
                case j.J:
                    c += "var o=f.pop()+'';var q=r(e,o);var w=q[0];";
                    c += "if(w&&w!=u.Le){var G=q[1];var H=w.Pg.jf[(G+'')]||G;";
                    c += "if(!isNaN(parseInt(H))){w.dg=" + (g.play ? "true" : "false") + ";var q=u.Ie.gotoFrame(w,H);";
                    c += "if(!q){d.qh=" + g._g + ";d.Og=e;f[f.length]=o;return false;}}}";
                    break;
                case j.S:
                    c += "e.dg=false;var q=u.Ie.gotoFrame(e,e.yh.dc+1);";
                    c += "if(!q){d.qh=" + g._g + ";d.Og=e;return false;}";
                    break;
                case j.X:
                    c += "e.dg=false;var q=u.Ie.gotoFrame(e,e.yh.dc-1);";
                    break;
                case j.bb:
                    c += "e=x(d.eh,'" + g.name + "')||u.Le;";
                    break;
                case j.cb:
                    c += "var K=f.pop();e=x(d.eh,K)||u.Le;";
                    break;
                case j.F:
                    c += "var L=f.pop();var M=f.pop();";
                    if (g.Gg) {
                        d("not implemented:GetURL2 load sprite. ignored")
                    }
                    c += "if(M){";
                    if (g.$h == 1 || g.$h == 2) {
                        c += "var N=e.hj;";
                        c += "var O=[];for(var P in N){O.push(P+'='+(encodeURI(N[P])||''))}";
                        c += "if(O.length>0)M+=(M.indexOf('?')>=0?'&':'?')+O.join('&');"
                    }
                    if (g.Hg) {
                        c += "var Q=new XMLHttpRequest();";
                        switch (g.$h) {
                            case 0:
                            case 1:
                                c += "Q.open('GET', M, true);";
                                c += "Q.send('');";
                                break;
                            case 2:
                                c += "Q.open('POST', M, true);";
                                c += "Q.setRequestHeader('Content-Type' ,'application/x-www-form-urlencoded; charset=Shift-jis');";
                                c += "Q.send(O.join('&'));";
                                break
                        }
                        c += "Q.onreadystatechange=(function(R){return function(){if(Q.readyState == 4 && Q.status == 200){";
                        c += "var S=x(R,L);";
                        c += "if(!S){console.warn('[getURL2] Not found S');S=R}";
                        c += "var T=decodeURI(Q.responseText).split('&');var J=T.length;";
                        c += "for(var P=0;P<J;P++){var U=T[P].split('=');S.hj[U[0]]=U[1];}";
                        c += "}};})(e);"
                    } else {
                        switch (g.$h) {
                            case 0:
                            case 1:
                                c += "location.href=M;";
                                break;
                            case 2:
                                c += "var form = document.createElement('form');document.body.appendChild(form);";
                                c += "form.action=M;form.method='post';var N=e.hj;";
                                c += "for(var P in N){var input=document.createElement('input');input.aj='hidden';input.name=P;input.value=encodeURI(N[P]||'');form.appendChild(input);}";
                                c += "form.submit();";
                                break
                        }
                    }
                    c += "}else{EngineLogW(\"'cj' argument of getURL() is empty\");V(e,L);}";
                    break;
                case j.v:
                    c += "var W=f.pop();var X=''+f.pop();var Y=''+f.pop();";
                    c += "var Z=x(e,Y);";
                    c += "var $=Z&&Z.wd;";
                    c += "var B=(Z&&Z.nh)||null;";
                    c += "if(B!=null){var _ = B.we[W];";
                    c += "if(_){var ab=_.id;if(_.Dj&&_.Dj[ab]&&_.Dj[ab].Xf){B.Fh(ab);}else{break;}}";
                    c += "var bb=Z.Gd(X,W);bb.yh.wc=1;}";
                    break;
                case j._:
                    c += "var L=''+f.pop();V(e,L);";
                    break;
                case j.D:
                    c += "f[f.length]=Date.now();";
                    break;
                case j.$:
                    c += "f[f.length-1]=(Math.random()*f[f.length-1])|0;";
                    break;
                case j.B:
                    c += "var cb=f.pop();var db=f.length;";
                    c += "if(f[db-1]=='JavaScript'){";
                    c += "var eb=[];var jsFuncName = f[db-2];var fb=eval(jsFuncName);if(typeof fb!=='function'){EngineLogW('Function \"'+jsFuncName+'\" does not exist in the global');f.length-=cb;f[f.length]=-1;}else{f.length-=2;var J=cb-2;for(var i=0;i<J;i++){eb[i]=f.pop();}fb.apply(null,eb);f[f.length]=0;}";
                    c += "}else{f.length-=cb;f[f.length]=-1;}";
                    break;
                case j.pb:
                    c += b ? "EngineLogD('Trace: '+f.pop());" : "f.pop();";
                    break;
                case 0:
                    break;
                default:
                    d("not implemented action:" + g.Id);
                    c += "/* not implemented */";
                    break
            }
        }
        c += "c=-1;break;default:gb('jump miss');}}d.Se=true;return true;";
        return new Function("u,d,m,n,r,x,z,hb,V,EngineLogD,EngineLogW", c)
    };
    var A = function(a, b) {
        return function(c, d, e, f, g, h, i, k, l, m, n) {
            var o = d.Og;
            var p = d.qi;
            var q = {};
            var r = a.length;
            for (var s = 0; s < r; s++) {
                var t = a[s];
                q[t._g] = s
            }
            for (var s = q[d.qh]; s < r; s++) {
                var t = a[s];
                switch (t.Id) {
                    case j.Z:
                        p[p.length] = p[p.length - 1];
                        break;
                    case j.W:
                        p.length--;
                        break;
                    case j.o:
                        var u = +p[p.length - 1] || 0;
                        var v = +p[p.length - 2] || 0;
                        p[p.length - 2] = u + v;
                        p.length--;
                        break;
                    case j.mb:
                        var u = +p[p.length - 1] || 0;
                        var v = +p[p.length - 2] || 0;
                        p[p.length - 2] = v - u;
                        p.length--;
                        break;
                    case j.R:
                        var u = +p[p.length - 1] || 0;
                        var v = +p[p.length - 2] || 0;
                        p[p.length - 2] = u * v;
                        p.length--;
                        break;
                    case j.w:
                        var u = +p[p.length - 1] || 0;
                        var v = +p[p.length - 2] || 0;
                        p[p.length - 2] = u == 0 ? "#ERROR" : v / u;
                        p.length--;
                        break;
                    case j.M:
                        var u = +p.pop() || 0;
                        var v = +p.pop() || 0;
                        p[p.length] = v < u ? 1 : 0;
                        break;
                    case j.A:
                        var u = +p.pop() || 0;
                        var v = +p.pop() || 0;
                        p[p.length] = u == v ? 1 : 0;
                        break;
                    case j.q:
                        var u = +p.pop() || 0;
                        var v = +p.pop() || 0;
                        p[p.length] = u && v ? 1 : 0;
                        break;
                    case j.U:
                        var u = +p.pop() || 0;
                        var v = +p.pop() || 0;
                        p[p.length] = u || v ? 1 : 0;
                        break;
                    case j.T:
                        var u = +p[p.length - 1] || 0;
                        p[p.length - 1] = u == 0 ? 1 : 0;
                        break;
                    case j.hb:
                        var u = p[p.length - 1];
                        u = u == null ? "" : u;
                        var v = p[p.length - 2];
                        v = v == null ? "" : v;
                        p[p.length - 2] = v + "" + u;
                        p.length--;
                        break;
                    case j.ib:
                        var u = p.pop() + "";
                        var v = p.pop() + "";
                        p[p.length] = u == v ? 1 : 0;
                        break;
                    case j.jb:
                        var w = +p.pop();
                        var x = +p.pop() - 1;
                        var y = p.pop() + "";
                        if (isNaN(w) || isNaN(x)) {
                            p[p.length] = ""
                        } else {
                            x = x < 0 ? 0 : x;
                            w = w < 0 ? e(y) : w;
                            p[p.length] = f(y, x, w)
                        }
                        break;
                    case j.P:
                        var w = +p.pop();
                        var x = +p.pop() - 1;
                        var y = p.pop() + "";
                        if (isNaN(w) || isNaN(x)) {
                            p[p.length] = ""
                        } else {
                            x = x < 0 ? 0 : x;
                            w = w < 0 ? y.length : w;
                            p[p.length] = y.substr(x, w)
                        }
                        break;
                    case j.kb:
                        var y = p[p.length - 1] + "";
                        p[p.length - 1] = e(y);
                        break;
                    case j.Q:
                        var y = p[p.length - 1] + "";
                        p[p.length - 1] = y.length;
                        break;
                    case j.lb:
                        var v = p.pop() + "";
                        var u = p.pop() + "";
                        p[p.length] = u < v ? 1 : 0;
                        break;
                    case j.nb:
                        p[p.length - 1] = +p[p.length - 1] | 0;
                        break;
                    case j.u:
                        n("ActionCharToAscii: unimplemented correctly");
                        p[p.length - 1] = (p[p.length - 1] + "").charCodeAt(0);
                        break;
                    case j.r:
                        n("ActionAsciiToChar: unimplemented correctly");
                        p[p.length - 1] = String.fromCharCode(p[p.length - 1]);
                        break;
                    case j.O:
                        p[p.length - 1] = (p[p.length - 1] + "").charCodeAt(0);
                        break;
                    case j.N:
                        p[p.length - 1] = String.fromCharCode(p[p.length - 1]);
                        break;
                    case j.K:
                        var v = +p.pop();
                        if (v) s = t.ed == null ? r : q[t.$g + t.ed] - 1;
                        break;
                    case j.L:
                        s = t.ed == null ? r : q[t.$g + t.ed] - 1;
                        break;
                    case j.Y:
                        Array.prototype.push.apply(p, t.fj);
                        break;
                    case j.G:
                        var z = p.pop();
                        var A;
                        var B = g(o, z);
                        var C = B[0];
                        var D = B[1];
                        A = C && (C == c.Le ? c.Ie.Qh : C).hj[D];
                        A = typeof A == "undefined" ? "" : A;
                        p[p.length] = A;
                        break;
                    case j.db:
                        var A = p.pop();
                        var D = p.pop();
                        var B = g(o, D);
                        B[0] && ((B[0] == c.Le ? c.Ie.Qh : B[0]).hj[B[1]] = A);
                        break;
                    case j.C:
                        var E = p.pop();
                        var F = p.pop();
                        var G = h(o, F);
                        var H = i[E];
                        if (G && G != c.Le) {
                            if (!H) {
                                p[p.length] = 0
                            } else {
                                switch (H) {
                                    case "tc":
                                        p[p.length] = G.nh && G.Cc || "/";
                                        break;
                                    case "xc":
                                        var I = G.qf();
                                        p[p.length] = (I[1] - I[0]) / 20;
                                        break;
                                    case "hc":
                                        var I = G.qf();
                                        p[p.length] = (I[3] - I[2]) / 20;
                                        break;
                                    case "yc":
                                    case "Ac":
                                        if (G.ag) {
                                            p[p.length] = (G.yh[H] * 50 | 0) / 50
                                        } else {
                                            var J = G.nh;
                                            var K = J && J.yh.dc;
                                            var x = H == "yc" ? 4 : 5;
                                            p[p.length] = J ? (J.Pg.hf[K][G.id].Mg[x] * 50 | 0) / 50 : 0
                                        }
                                        break;
                                    default:
                                        p[p.length] = G.yh[H]
                                }
                            }
                        } else {
                            p[p.length] = E
                        }
                        break;
                    case j.ab:
                        var A = p.pop();
                        var E = p.pop();
                        var F = p.pop();
                        var G = h(o, F);
                        var H = i[E];
                        if (G && G != c.Le) {
                            var L = A == parseFloat(A);
                            switch (H) {
                                case "nc":
                                    if (L) {
                                        G.ag = true;
                                        G.ci(+A)
                                    }
                                    break;
                                case "zc":
                                    if (L) {
                                        G.ag = true;
                                        G.ei(+A)
                                    }
                                    break;
                                case "Bc":
                                    if (L) {
                                        G.ag = true;
                                        G.fi(+A)
                                    }
                                    break;
                                case "cc":
                                case "yc":
                                case "Ac":
                                    if (L) {
                                        G.ag = true;
                                        G.bi(H, +A || 0)
                                    }
                                    break;
                                case "fc":
                                case "ic":
                                case "wc":
                                    if (A == 0 || A == 1) {
                                        G.bi(H, +A)
                                    }
                                    break;
                                case "xc":
                                    var I = G.qf();
                                    var M = (I[1] - I[0]) / 20;
                                    var N = G.yh.zc;
                                    if (N != 0) {
                                        M /= Math.abs(N)
                                    }
                                    G.ag = true;
                                    G.ei(+A / (M || 1));
                                    break;
                                case "hc":
                                    var I = G.qf();
                                    var M = (I[3] - I[2]) / 20;
                                    var N = G.yh.Bc;
                                    if (N != 0) {
                                        M /= Math.abs(N)
                                    }
                                    G.ag = true;
                                    G.fi(+A / (M || 1));
                                    break;
                                case "dc":
                                case "tc":
                                case "uc":
                                case "jc":
                                    break;
                                default:
                                    G.yh[H] = A;
                                    break
                            }
                        }
                        break;
                    case j.V:
                        o.dg = true;
                        break;
                    case j.fb:
                        o.dg = false;
                        break;
                    case j.s:
                        var z = p.pop();
                        var B = g(o, z);
                        var G = B[0];
                        if (G && !G.Yf) {
                            var O = B[1];
                            var P = G.Pg.jf[O + ""] || O;
                            if (!isNaN(parseInt(P))) {
                                var Q = G.Pg.bf[P];
                                if (Q) {
                                    var R = Q.length;
                                    var B = [];
                                    for (var S = 0; S < R; S++) {
                                        B[B.length] = [G, Q[S]]
                                    }
                                    d.Se = false;
                                    d.qh = t.$g;
                                    d.Og = o;
                                    d.ud = B;
                                    return true
                                }
                            }
                        }
                        break;
                    case j.H:
                        o.dg = false;
                        var P = o.Pg.jf[t.ng];
                        if (P) {
                            var B = c.Ie.gotoFrame(o, P);
                            if (!B) {
                                d.qh = t._g;
                                d.Og = o;
                                return false
                            }
                        }
                        break;
                    case j.I:
                        if (o != c.Le) {
                            o.dg = false;
                            var B = c.Ie.gotoFrame(o, t.af);
                            if (!B) {
                                d.qh = t.af;
                                d.Og = o;
                                return false
                            }
                        }
                        break;
                    case j.J:
                        var z = p.pop() + "";
                        var B = g(o, z);
                        var G = B[0];
                        if (G && G != c.Le) {
                            var O = B[1];
                            var P = G.Pg.jf[O + ""] || O;
                            if (!isNaN(parseInt(P))) {
                                G.dg = t.play;
                                var B = c.Ie.gotoFrame(G, P);
                                if (!B) {
                                    d.qh = t._g;
                                    d.Og = o;
                                    p[p.length] = z;
                                    return false
                                }
                            }
                        }
                        break;
                    case j.S:
                        o.dg = false;
                        var B = c.Ie.gotoFrame(o, o.yh.dc + 1);
                        if (!B) {
                            d.qh = t._g;
                            d.Og = o;
                            return false
                        }
                        break;
                    case j.X:
                        o.dg = false;
                        var B = c.Ie.gotoFrame(o, o.yh.dc - 1);
                        break;
                    case j.bb:
                        o = h(d.eh, t.name) || c.Le;
                        break;
                    case j.cb:
                        var T = p.pop();
                        o = h(d.eh, T) || c.Le;
                        break;
                    case j.F:
                        if (t.Gg) {
                            n("not implemented:GetURL2 load sprite. ignored")
                        }
                        var U = p.pop();
                        var V = p.pop();
                        if (V) {
                            if (t.$h == 1 || t.$h == 2) {
                                var W = o.hj;
                                var X = [];
                                for (var Y in W) {
                                    X.push(Y + "=" + (encodeURI(W[Y]) || ""))
                                }
                                if (X.length > 0) V += (V.indexOf("?") >= 0 ? "&" : "?") + X.join("&")
                            }
                            if (t.Hg) {
                                var Z = new XMLHttpRequest;
                                switch (t.$h) {
                                    case 0:
                                    case 1:
                                        Z.open("GET", V, true);
                                        Z.send("");
                                        break;
                                    case 2:
                                        Z.open("POST", V, true);
                                        Z.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=Shift-jis");
                                        Z.send(X.join("&"));
                                        break
                                }
                                Z.onreadystatechange = function(a) {
                                    return function() {
                                        if (Z.readyState == 4 && Z.status == 200) {
                                            var b = h(a, U);
                                            if (!b) {
                                                console.warn("[getURL2] Not found targetMC");
                                                b = a
                                            }
                                            var c = decodeURI(Z.responseText).split("&");
                                            var d = c.length;
                                            for (var e = 0; e < d; e++) {
                                                var f = c[e].split("=");
                                                b.hj[f[0]] = f[1]
                                            }
                                        }
                                    }
                                }(o)
                            } else {
                                switch (t.$h) {
                                    case 0:
                                    case 1:
                                        location.href = V;
                                        break;
                                    case 2:
                                        var $ = document.createElement("form");
                                        document.body.appendChild($);
                                        $.action = V;
                                        $.method = "post";
                                        var W = o.hj;
                                        for (var Y in W) {
                                            var _ = document.createElement("input");
                                            _.aj = "hidden";
                                            _.name = Y;
                                            _.value = encodeURI(W[Y] || "");
                                            $.appendChild(_)
                                        }
                                        $.submit();
                                        break
                                }
                            }
                        } else {
                            n("'url' argument of getURL() is empty");
                            l(o, U)
                        }
                        break;
                    case j.v:
                        var ab = p.pop();
                        var bb = "" + p.pop();
                        var cb = "" + p.pop();
                        var db = h(o, cb);
                        var eb = db && db.wd;
                        var J = db && db.nh || null;
                        if (J != null) {
                            var fb = J.we[ab];
                            if (fb) {
                                var gb = fb.id;
                                if (fb.Dj && fb.Dj[gb] && fb.Dj[gb].Xf) {
                                    J.Fh(gb)
                                } else {
                                    return -1
                                }
                            }
                            var hb = db.Gd(bb, ab);
                            hb.yh.wc = 1
                        }
                        break;
                    case j._:
                        var U = "" + p.pop();
                        l(o, U);
                        break;
                    case j.D:
                        p[p.length] = Date.now();
                        break;
                    case j.$:
                        p[p.length - 1] = Math.random() * p[p.length - 1] | 0;
                        break;
                    case j.B:
                        var ib = p.pop();
                        var jb = p.length;
                        if (p[jb - 1] == "JavaScript") {
                            var kb = [];
                            var lb = p[jb - 2];
                            var mb = eval(lb);
                            if (typeof mb !== "function") {
                                n('Function "' + lb + '" does not exist in the global');
                                p.length -= ib;
                                p[p.length] = -1;
                                break
                            }
                            p.length -= 2;
                            var nb = ib - 2;
                            for (var S = 0; S < nb; S++) {
                                kb[S] = p.pop()
                            }
                            mb.apply(null, kb);
                            p[p.length] = 0
                        } else {
                            p.length -= ib;
                            p[p.length] = -1
                        }
                        break;
                    case j.pb:
                        b ? m("Trace: " + p.pop()) : p.pop();
                        break;
                    case 0:
                        break;
                    default:
                        n("not implemented action:" + t.Id);
                        break
                }
            }
            d.Se = true;
            return true
        }
    };
    var B = function(a) {
        var b = 0;
        for (var c = 0; c < a.length; c++) {
            b += k(a.charAt(c)) ? 1 : 2
        }
        return b
    };
    var C = function(a, b, c) {
        var d = 0;
        var e = 0;
        var f = [];
        var g = 0;
        while (e < b) {
            var h = a.charAt(d);
            var i = k(h) ? 1 : 2;
            e += i;
            d++
        }
        if (e != b) {
            f.push("\uff65");
            g = 1
        }
        for (; d < a.length && g < c; d++) {
            var h = a.charAt(d);
            var i = k(h) ? 1 : 2;
            if (g + i > c) {
                f[f.length] = "\uff65";
                g += 1
            } else {
                f[f.length] = h;
                g += i
            }
        }
        return f.join("")
    };
    var D = function(a, b) {
        var c = a.Vf && a.nh || a;
        var d = b + "";
        var e = d.split(":");
        if (e.length == 2) {
            c = E(a, e[0]);
            d = e[1]
        }
        return [c, d]
    };
    var E = function(a, b) {
        if (b == "") {
            return !a.Ke && a || null
        }
        a = a.Ke && a.Ie.Qh || a;
        if (b == "_level0") {
            return a.Ie.Qh
        }
        var c = b.split("/");
        var d = 0;
        if (c[0] == "") {
            a = a.Ie.Qh;
            d++
        }
        var e;
        for (; d < c.length; d++) {
            e = c[d];
            if (e == "" || e == ".") {} else if (e == "..") {
                if (a.nh) {
                    a = a.nh;
                    while (a.Vf) {
                        a = a.nh
                    }
                } else {
                    return null
                }
            } else {
                e.charAt(0) == "." && (e = e.substring(1));
                a = a.Re(e);
                if (!a) {
                    return null
                }
            }
        }
        return a
    };
    var F = ["yc", "Ac", "zc", "Bc", "dc", "uc", "cc", "wc", "xc", "hc", "nc", "tc", "gc", "jc", "ec", "vc", "ic", "fc"];
    var G = function(a) {
        var b = {};
        for (var c in a) {
            b[c] = a[c]
        }
        return b
    };
    var H = function(a, b) {
        var c = E(a, b);
        var e = c ? c.nh : null;
        if (e == null || c == null) {
            return
        }
        for (var f in e.we) {
            if (f >= 16384) {
                var g = e.we[f];
                a = g.Dj[g.id];
                if (a == c) {
                    if (a.Xf) {
                        e.Fh(g.id);
                        return
                    } else {
                        d("[removeSprite] not cloned", a, b)
                    }
                }
            }
        }
    };
    var I = function(a) {
        this.Ie = a
    };
    I.prototype.gotoFrame = function(a, b, c) {
        var d = this.Ie;
        var e = E(d.Qh, a);
        if (!e) {
            return false
        }
        b = +(e.Pg.jf[b + ""] || b);
        if (!b) {
            return false
        }
        var f = z([{
            Id: j.I,
            af: b,
            _g: 0
        }, {
            Id: j.V,
            _g: 4
        }]);
        if (c || typeof c === "undefined") {
            d.kj.executeAction(e, f);
            return true
        }
        d.kj.Hc(e, f);
        return true
    };
    I.prototype.gotoAndStop = function(a, b, c) {
        var d = this.Ie;
        var e = E(d.Qh, a);
        if (!e) {
            return false
        }
        b = +(e.Pg.jf[b + ""] || b);
        var f = z([{
            Id: j.I,
            af: b,
            _g: 0
        }, {
            Id: j.fb,
            _g: 0
        }]);
        if (c || typeof c === "undefined") {
            d.kj.executeAction(e, f);
            return true
        }
        d.kj.Hc(e, f);
        return true
    };
    I.prototype.keyDown = function(a) {
        this.Ie.Ui.keyDown(a)
    };
    I.prototype.play = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return false
        }
        c.dg = true;
        return true
    };
    I.prototype.stop = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return false
        }
        var d = z([{
            Id: j.fb,
            _g: 0
        }]);
        b.kj.Hc(c, d);
        return true
    };
    I.prototype.stopAll = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return false
        }
        var d = function(a) {
            var c = z([{
                Id: j.fb,
                _g: 0
            }]);
            b.kj.Hc(a, c);
            var e = a.children;
            var f = e.length;
            for (var g = 0; g < f; g++) {
                d(e[g])
            }
        };
        d(c);
        return true
    };
    I.prototype.getVariable = function(a, b) {
        var c = this.Ie;
        var d = E(c.Qh, a);
        if (!d) {
            return undefined
        }
        return d.hj[b]
    };
    I.prototype.getVariables = function(a, b) {
        var c = E(this.Ie.Qh, a);
        if (!c) {
            return
        }
        if (!b) {
            return c.hj
        } else if (!(b instanceof Array)) {
            d("variableNames should be an Array.");
            return
        }
        var e = {};
        var f = c.hj;
        var g = b.length;
        var h;
        for (var i = 0; i < g; i++) {
            h = b[i];
            if (f.hasOwnProperty(h)) {
                e[h] = f[h]
            }
        }
        return e
    };
    I.prototype.destroy = function() {
        this.Ie.Ui.removeAllListeners();
        var a = n.rf();
        return a.Gj(this.Ie)
    };
    I.prototype.setVariable = function(a, b, c) {
        var d = this.Ie;
        var e = E(d.Qh, a);
        if (!e) {
            return false
        }
        e.hj[b] = c;
        return true
    };
    I.prototype.setVariables = function(a, b) {
        var c = E(this.Ie.Qh, a);
        if (!c) {
            return false
        }
        var d = c.hj;
        for (var e in b) {
            d[e] = b[e]
        }
        return true
    };
    var J = function(a, b, c) {
        var d = a.Ie;
        var e = b && E(d.Qh, b);
        if (!e) {
            return void 0
        }
        return e.yh[c]
    };
    I.prototype.getCurrentFrame = function(a) {
        return J(this, a || "/", "dc")
    };
    I.prototype.getTotalFrames = function(a) {
        return J(this, a || "/", "uc")
    };
    I.prototype.getVisible = function(a) {
        return J(this, a || "/", "wc")
    };
    I.prototype.setVisible = function(a, b) {
        var c = this.Ie;
        var e = E(c.Qh, a);
        if (!e) {
            return false
        }
        var f = +b;
        if (f == 0 || f == 1) {
            e.bi("wc", f);
            return true
        } else {
            d("Invalid value: " + b);
            return false
        }
    };
    I.prototype.setPosition = function(a, b, c) {
        var d = E(this.Ie.Qh, a);
        if (!d) {
            return false
        }
        d.ag = true;
        d.bi("yc", +b || 0);
        d.bi("Ac", +c || 0);
        return true
    };
    I.prototype.setMovieClipProperty = function(a, b, c) {
        var d = this.Ie;
        var e = E(d.Qh, a);
        if (!e) {
            return false
        }
        switch (b) {
            case "zc":
                e.ag = true;
                e.ei(+c || 0);
                break;
            case "Bc":
                e.ag = true;
                e.fi(+c || 0);
                break;
            case "nc":
                e.ag = true;
                e.ci(+c || 0);
                break;
            case "yc":
            case "Ac":
            case "cc":
                e.ag = true;
                e.bi(b, +c || 0);
                break;
            case "fc":
            case "ic":
            case "wc":
                if (c == 0 || c == 1) {
                    e.bi(b, +c)
                }
                break;
            default:
                return false
        }
        return true
    };
    I.prototype.getMovieClipProperty = function(a, b) {
        var c = this.Ie;
        var d = E(c.Qh, a);
        if (d) {
            return d.yh[b]
        }
    };
    I.prototype.ready = function(a) {
        if (!this.Ie.Fg) {
            this.Ie.readyCallbacks.push(a)
        } else {
            a()
        }
    };
    I.prototype.engineStart = function() {
        this.Ie.Vh = true;
        return true
    };
    I.prototype.engineStop = function() {
        this.Ie.Vh = false;
        return true
    };
    I.prototype.getMovieClipNames = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return null
        }
        return Object.keys(c.Ad)
    };
    I.prototype.getFrameLabelMap = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return null
        }
        var d = c.Pg.jf;
        var e = {};
        for (var f in d) {
            e[f] = d[f]
        }
        return e
    };
    I.prototype._getCacheImageInfo = function() {
        var a = this.Ie.Ih;
        return a && a.pd
    };
    I.prototype.replaceMovieClip = function(a, b, c, d, e, f, g) {
        var h = this.Ie;
        var i = h.Ri;
        for (var j = 0; j < i.length; j++) {
            var k = i[j];
            if (k.yh.jc == a) {
                k.replaceMovieClip(b, c, d, e, f, g)
            }
        }
        var l = h.ch.replace || (h.ch.replace = []);
        for (var j = 0; j < l.length; j++) {
            var m = l[j];
            if (m.name == a) {
                m.img = b;
                m.width = c;
                m.height = d;
                m.keepAspect = e;
                m.xratio = f;
                m.yratio = g;
                return
            }
        }
        l.push({
            name: a,
            img: b,
            width: c,
            height: d,
            keepAspect: e,
            xratio: f,
            yratio: g
        });
        return
    };
    I.prototype.getRenderingContext = function() {
        return this.Ie && this.Ie.Ih && this.Ie.Ih.be
    };
    I.prototype._getStatics = function() {
        return {
            _frameCount: this.Ie.df,
            renderCount: this.Ie.renderCount
        }
    };
    I.prototype.getMovieClipNamesAtPoint = function(a, b) {
        var c = [];
        a *= 20;
        b *= 20;
        var d = function(e) {
            var f = e.qf(e.wf());
            if (f[0] <= a && a <= f[1] && f[2] <= b && b <= f[3]) {
                c.push(e.Cc || "/");
                var g = e.children;
                var h = g.length;
                for (var i = 0; i < h; i++) {
                    d(g[i])
                }
            }
        };
        d(this.Ie.Qh);
        return c
    };
    I.prototype.addEventListener = function(a, b, c) {
        switch (a.toLowerCase()) {
            case "enterframe":
                var e = E(this.Ie.Qh, c);
                if (!e) {
                    return false
                }
                var f = e.onEnterFrames.indexOf(b);
                if (f !== -1) {
                    return false
                }
                e.onEnterFrames.push(b);
                break;
            case "movieclipcreate":
                var g = this.Ie;
                var f = g.onCreateMC.indexOf(b);
                if (f !== -1) {
                    return false
                }
                g.onCreateMC.push(b);
                break;
            default:
                d("Invalid event: " + a);
                break
        }
        return true
    };
    I.prototype.removeEventListener = function(a, b, c) {
        switch (a.toLowerCase()) {
            case "enterframe":
                var e = E(this.Ie.Qh, c);
                if (!e) {
                    return false
                }
                var f = e.onEnterFrames.indexOf(b);
                if (f === -1) {
                    return false
                }
                e.onEnterFrames.splice(f, 1);
                break;
            case "movieclipcreate":
                var g = this.Ie;
                var f = g.onCreateMC.indexOf(b);
                if (f === -1) {
                    return false
                }
                g.onCreateMC.splice(f, 1);
                break;
            default:
                d("Invalid event: " + a);
                break
        }
        return true
    };
    I.prototype.redraw = function() {
        this.Ie.Ih.Hh()
    };
    I.prototype.getFPS = function() {
        return this.Ie.getFPS()
    };
    I.prototype.setFPS = function(a) {
        this.Ie.setFPS(a)
    };
    I.prototype.getFrameSkipRatio = function() {
        return this.Ie.getFrameSkipRatio()
    };
    I.prototype.setFrameSkipRatio = function(a) {
        return this.Ie.setFrameSkipRatio(a)
    };
    I.prototype.callActions = function(a, b) {
        var c = this.Ie;
        var d = E(c.Qh, a);
        if (!d) {
            return false
        }
        b = +(d.Pg.jf[b + ""] || b);
        if (!b) {
            return false
        }
        var e = z([{
            Id: j.Y,
            fj: [b],
            _g: 0
        }, {
            Id: j.s,
            $g: 2,
            _g: 1
        }, {
            Id: 0,
            _g: 2
        }]);
        c.kj.executeAction(d, e);
        return true
    };
    I.prototype.loadMovie = function(a, b, c) {
        var d = E(this.Ie.Qh, a);
        if (!d) {
            return false
        }
        d.loadMovie(a, b, c)
    };
    I.prototype.showFrame = function(a) {
        var b = this.Ie.lastStopFrame || 0;
        var c = 1 + a * this.Ie.mf | 0;
        if (b != c) {
            this.Ie.stopFrame = c;
            this.Ie.Qi(Date.now())
        }
        return this.Ie.Qh.yh["dc"]
    };
    var K = function(a) {
        this.Ie = a;
        this.eg = false;
        this.Vg = null;
        this.Wg = null;
        this.ee = {
            x: 0,
            y: 0
        };
        this.kg = {};
        this.listenerList = [];
        if (this.Ie.ch.enableTouch) {
            var c = this;
            this.addListener(document, "keydown", function(a) {
                c.keyDown(a.keyCode)
            }, false);
            if (!("ontouchstart" in document.body) || navigator.userAgent.indexOf("ChromeApp") > -1) {
                a.ch.debug && b("PC browser mode detected");
                this.addListener(a.Qd, "mousedown", function(a) {
                    c.Xi.call(c, a);
                    a.preventDefault()
                }, false);
                this.addListener(document, "mouseup", function(a) {
                    c.Wg = {
                        x: c.ee.x,
                        y: c.ee.y
                    };
                    if (c.eg) {
                        c.Wi.call(c, a);
                        a.preventDefault()
                    }
                }, false)
            }
            this.addListener(a.Qd, "touchstart", function(a) {
                c.Xi.call(c, a.touches[0]);
                a.preventDefault()
            }, false);
            this.addListener(document, "touchend", function(a) {
                c.Wg = {
                    x: c.ee.x,
                    y: c.ee.y
                };
                if (c.eg) {
                    c.Wi.call(c, a);
                    a.preventDefault()
                }
            }, false)
        }
    };
    K.prototype.vf = function(a) {
        var b = a.pageX;
        var c = a.pageY;
        var d = this.Ie.Qd;
        var e;
        do {
            if (!("style" in d)) break;
            if (aVer && cVer >= 71 && jQuery(d).prop("tagName") === 'HTML') {
                break;
            }
            e = jQuery(d).css("zoom");
            if (e && jQuery(d).prop("tagName") !== 'HTML') {
                b /= e;
                c /= e
            }
            d = d.parentNode
        } while (d);
        var f = this.Ie.canvas;
        while (f) {
            b -= f.offsetLeft;
            c -= f.offsetTop;
            f = f.offsetParent
        }
        if ("devicePixelRatio" in window && window.devicePixelRatio > 1) {
            b *= window.devicePixelRatio;
            c *= window.devicePixelRatio
        }
        return {
            x: b,
            y: c
        }
    };
    K.prototype.keyDown = function(a) {
        this.kg[a] = true
    };
    K.prototype.Xi = function(a) {
        var b = this.vf(a);
        this.di(b.x, b.y);
        if (this.yg) {
            this.Vi(b.x, b.y);
            return false
        }
        this.eg = true;
        this.yi = (new Date).getTime();
        this.Yi = b;
        this.Qf = b;
        this.sg = b;
        return false
    };
    K.prototype.Wi = function(a) {
        this.eg = false;
        this.Wg = {
            x: this.sg.x,
            y: this.sg.y
        };
        this.Zh();
        return false
    };
    K.prototype.Dd = function() {
        this.Vg = null;
        this.Wg = null
    };
    K.prototype.Cd = function() {
        this.kg = {}
    };
    K.prototype._f = function(a) {
        return this.kg[a] || false
    };
    K.prototype.Vi = function(a, b) {
        if (!(this.ah && this.ah(a, b))) {
            this.Vg = {
                x: a,
                y: b
            };
            if (this.yg && this.yg !== true) {
                this.keyDown(this.yg)
            }
            if (!this.yg && this.Ve && this.Ve.Ui) {
                this.keyDown(this.Ve.Ui)
            }
        }
    };
    K.prototype.Zh = function() {
        if (!this.sg || this.sg.x == this.Qf.x && this.sg.y == this.Qf.y) {
            this.Vi(this.Yi.x, this.Yi.y);
            return
        }
        if (this.Ve) {
            var a = Math.atan2(this.sg.x - this.Qf.x, -this.sg.y + this.Qf.y) / Math.PI * 180;
            for (var b in this.Ve) {
                var c = b.split(":");
                if (c.length == 2) {
                    if (c[0] <= a && a <= c[1] || c[0] <= a + 360 && a + 360 <= c[1]) {
                        this.keyDown(this.Ve[b])
                    }
                }
            }
        }
    };
    K.prototype.di = function(a, b) {
        return
    };
    K.prototype.addListener = function(a, b, c, d) {
        this.listenerList.push([a, b, c]);
        a.addEventListener(b, c, d)
    };
    K.prototype.removeAllListeners = function() {
        var a = this.listenerList.length;
        for (var b = 0; b < a; b++) {
            var c = this.listenerList[b];
            c[0].removeEventListener(c[1], c[2], false);
            this.listenerList[b] = null
        }
    };
    var L = function(a) {
        var b = a[0] * a[3] - a[1] * a[2];
        if (b == 0) {
            d("revTransform: detT == 0")
        }
        return [a[3] / b, -a[1] / b, -a[2] / b, a[0] / b, (a[2] * a[5] - a[3] * a[4]) / b, (a[1] * a[4] - a[0] * a[5]) / b]
    };
    var M = function(a, b) {
        if (a[2] == 0 && a[1] == 0) {
            if (b[2] == 0 && b[1] == 0) {
                return [a[0] * b[0], 0, 0, a[3] * b[3], a[0] * b[4] + a[4], a[3] * b[5] + a[5]]
            } else {
                return [a[0] * b[0], a[3] * b[1], a[0] * b[2], a[3] * b[3], a[0] * b[4] + a[4], a[3] * b[5] + a[5]]
            }
        } else {
            if (b[2] == 0 && b[1] == 0) {
                return [a[0] * b[0], a[1] * b[0], a[2] * b[3], a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]]
            } else {
                return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]]
            }
        }
    };
    var N = function(a, b, c) {
        var d = [];
        var e = b[0];
        var f = b[1];
        var g = b[2];
        var h = b[3];
        var i = f - e;
        var j = h - g;
        var k = c ? [a[0] * e + a[2] * g + a[4], a[1] * e + a[3] * g + a[5]] : l(a, e, g);
        var m = a[0] * i;
        var n = a[1] * i;
        var o = a[2] * j;
        var p = a[3] * j;
        if (m >= 0) {
            if (o >= 0) {
                d[1] = k[0] + m + o;
                d[0] = k[0]
            } else {
                d[1] = k[0] + m;
                d[0] = k[0] + o
            }
        } else {
            if (o >= 0) {
                d[1] = k[0] + o;
                d[0] = k[0] + m
            } else {
                d[1] = k[0];
                d[0] = k[0] + m + o
            }
        }
        if (n >= 0) {
            if (p >= 0) {
                d[3] = k[1] + n + p;
                d[2] = k[1]
            } else {
                d[3] = k[1] + n;
                d[2] = k[1] + p
            }
        } else {
            if (p >= 0) {
                d[3] = k[1] + p;
                d[2] = k[1] + n
            } else {
                d[3] = k[1];
                d[2] = k[1] + n + p
            }
        }
        return d
    };
    var O = function(a) {
        var b = [a >> 16 & 255, a >> 8 & 255, a & 255, (a >> 24 & 255) / 255];
        return "rgba(" + b.join() + ")"
    };
    var P = function(a, b, c) {
        var d = function(a) {
            return Math.round(a * 100)
        };
        if (c) {
            if (d(a[2]) == d(b[2]) && d(a[0]) == d(b[0]) && d(a[3]) == d(b[3]) && d(a[1]) == d(b[1])) {
                return true
            }
        } else {
            if (d(a[4]) == d(b[4]) && d(a[5]) == d(b[5]) && d(a[2]) == d(b[2]) && d(a[0]) == d(b[0]) && d(a[3]) == d(b[3]) && d(a[1]) == d(b[1])) {
                return true
            }
        }
        return false
    };
    var Q = function(a, b) {
        if (a.length != b.length) {
            return false
        }
        var c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            var f = b[d];
            for (var g = 0; g < 8; g++) {
                if (e[g] != f[g]) {
                    return false
                }
            }
        }
        return true
    };
    var R = function(a, b) {
        var c = a.length;
        if (!c) {
            return O(b)
        }
        var d = [b >> 16 & 255, b >> 8 & 255, b & 255, b >> 24 & 255];
        for (var e = c - 1; e >= 0; e--) {
            var f = a[e];
            d[0] = Math.max(0, Math.min(255, d[0] * f[0] / 256 + f[4])) | 0;
            d[1] = Math.max(0, Math.min(255, d[1] * f[1] / 256 + f[5])) | 0;
            d[2] = Math.max(0, Math.min(255, d[2] * f[2] / 256 + f[6])) | 0;
            d[3] = Math.max(0, Math.min(255, d[3] * f[3] / 256 + f[7]))
        }
        d[3] /= 255;
        return "rgba(" + d.join() + ")"
    };
    var S = function(a) {
        return function(b, c) {
            if (!c.width) {
                return c
            }
            var d = b.length;
            if (!d) {
                return c
            }
            var e = c.width;
            var f = c.height;
            var g = e * f;
            for (var h = 0; h < d; h++) {
                g += "-" + b[h].join()
            }
            var i = a.getColoredImage(g, c);
            if (i) {
                return i
            }
            i = Y(b, c);
            a.cacheColoredImage(g, c, i);
            Y.hh = null;
            return i
        }
    };
    var T = function(a, b) {
        if (!b.width) {
            return b
        }
        var c = a.length;
        if (!c) {
            return b
        }
        var e = b.width;
        var f = b.height;
        var g = Y.hh || (Y.hh = cb.getFreeCanvas());
        g.width = e;
        g.height = f;
        var h = g.getContext("2d");
        if (a.length === 1) {
            var i = a[0];
            if (i[0] === 256 && i[1] === 256 && i[2] === 256 && i[4] === 0 && i[5] === 0 && i[6] === 0) {
                h.globalAlpha = i[3] / 256;
                h.drawImage(b, 0, 0);
                return g
            }
        }
        h.drawImage(b, 0, 0);
        h.globalCompositeOperation = "multiply";
        h.fillStyle = "rgba(255,255,255,1)";
        h.fillRect(0, 0, e, f);
        var j = Y.Mc || (Y.Mc = cb.getFreeCanvas());
        j.width = e;
        j.height = f;
        var k = j.getContext("2d");
        k.drawImage(b, 0, 0);
        k.globalCompositeOperation = "source-atop";
        k.fillStyle = "rgba(255,255,255,1)";
        k.fillRect(0, 0, e, f);
        for (var l = c - 1; l >= 0; l--) {
            var i = a[l];
            var m = [];
            var n = false;
            for (var o = 0; o < 3; o++) {
                if (i[o] != 256) {
                    n = true
                }
                m.push(i[o] / 256 * 255 | 0)
            }
            if (n) {
                h.globalCompositeOperation = "multiply";
                h.fillStyle = "rgb(" + m.join() + ")";
                h.fillRect(0, 0, e, f)
            }
            var p = [];
            var q = false;
            var r = [];
            var s = false;
            for (var o = 4; o < 7; o++) {
                var t = i[o];
                if (t === 0) {
                    p.push(0);
                    r.push(0)
                } else if (t > 0) {
                    p.push(t);
                    r.push(0);
                    q = true
                } else {
                    p.push(0);
                    r.push(-t);
                    s = true
                }
            }
            if (q) {
                h.globalCompositeOperation = "lighter";
                h.fillStyle = "rgba(" + p.join() + ",1)";
                h.fillRect(0, 0, e, f)
            }
            if (s) {
                h.globalCompositeOperation = "difference";
                h.fillStyle = "rgba(255,255,255,1)";
                h.fillRect(0, 0, e, f);
                h.globalCompositeOperation = "lighter";
                h.fillStyle = "rgba(" + r.join() + ",1)";
                h.fillRect(0, 0, e, f);
                h.globalCompositeOperation = "difference";
                h.fillStyle = "rgba(255,255,255,1)";
                h.fillRect(0, 0, e, f)
            }
            if (i[3] < 256) {
                k.globalCompositeOperation = "destination-in";
                k.globalAlpha = i[3] / 256;
                k.fillRect(0, 0, e, f)
            }
            if (i[7]) {
                if (i[7] > 0) {
                    k.globalCompositeOperation = "lighter";
                    k.globalAlpha = i[7] / 255;
                    k.fillRect(0, 0, e, f)
                }
                d("[transformImageColor] addAlpha detected. not support")
            }
        }
        h.globalCompositeOperation = "destination-in";
        h.globalAlpha = 1;
        h.drawImage(j, 0, 0);
        return g
    };
    var U = function(a) {
        if (/Chrome\//.test(a)) {
            return parseFloat(a.split("Chrome/")[1])
        }
        return 0
    };
    var V = function(a) {
        if (/(iPhone|iPad|iPod)/.test(a) && /Safari\//.test(a)) {
            return parseFloat(a.split("Version/")[1])
        }
        return 0
    };
    var W = function() {
        var a = document.createElement("canvas").getContext("2d");
        return ["difference", "multiply"].every(function(b) {
            a.globalCompositeOperation = b;
            return a.globalCompositeOperation === b
        })
    };
    var X = function(a, b) {
        var c = false;
        if (W()) {
            if (U(navigator.userAgent) >= 40 || V(navigator.userAgent) >= 8) {
                c = true;
                if (a) {
                    c = false
                }
            }
        }
        if (c) {
            Y = T;
            if (b) {
                d("overrideTransformImageColorFunction")
            }
        }
        X = function() {}
    };
    var Y = function() {
        var a = null;
        if (navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/) && RegExp.$1 < 27) {
            var b;
            var c = function(a, d, e, f) {
                if (e * f > 65536) {
                    if (e > f) {
                        var g = e * .5 | 0;
                        c(a, d, g, f);
                        c(a + g, d, e - g, f)
                    } else {
                        var h = f * .5 | 0;
                        c(a, d, e, h);
                        c(a, d + h, e, f - h)
                    }
                } else {
                    b.push([a, d, e, f])
                }
            };
            a = function(a, d) {
                b = [];
                c(0, 0, a, d);
                return b
            }
        }
        var e = ["#ff0000", "#00ff00", "#0000ff"];
        var f = function(a, b, c, d, e, f) {
            for (var g = b.length - 1; g >= 0; g--) {
                var h = b[g];
                if (h[e] != 256) {
                    a.globalCompositeOperation = "source-over";
                    a.fillStyle = "rgb(0,0,0)";
                    a.globalAlpha = 1 - h[e] / 256;
                    a.fillRect(0, 0, c, d)
                }
                if (h[e + 4] != 0) {
                    var i = h[e + 4] / 255;
                    if (i < 0) {
                        a.globalCompositeOperation = "darker";
                        a.fillStyle = "rgb(0,0,0)";
                        i = -i
                    } else {
                        a.globalCompositeOperation = "lighter";
                        a.fillStyle = f
                    }
                    a.globalAlpha = i;
                    a.fillRect(0, 0, c, d)
                }
            }
        };
        return function(b, c) {
            if (!c.width) {
                return c
            }
            var g = b.length;
            if (!g) {
                return c
            }
            var h = c.width;
            var i = c.height;
            var j = Y.hh || (Y.hh = cb.getFreeCanvas());
            j.width = h;
            j.height = i;
            var k = j.getContext("2d");
            if (b.length == 1) {
                var l = b[0];
                if (l[0] == 256 && l[1] == 256 && l[2] == 256 && l[4] == 0 && l[5] == 0 && l[6] == 0) {
                    k.globalAlpha = l[3] / 256;
                    k.drawImage(c, 0, 0);
                    return j
                }
            }
            var m = Y.Mc || (Y.Mc = cb.getFreeCanvas());
            m.width = h;
            m.height = i;
            var n = m.getContext("2d");
            n.drawImage(c, 0, 0);
            n.globalCompositeOperation = "source-atop";
            n.fillStyle = "rgba(255,255,255,1)";
            n.fillRect(0, 0, h, i);
            for (var o = g - 1; o >= 0; o--) {
                var l = b[o];
                n.globalCompositeOperation = "destination-in";
                n.globalAlpha = Math.min(Math.max(0, l[3] / 256), 1);
                n.fillRect(0, 0, h, i);
                if (l[7]) {
                    n.globalCompositeOperation = "lighter";
                    n.fillStyle = "rgba(255,255,255,1)";
                    n.globalAlpha = l[7] / 255;
                    n.fillRect(0, 0, h, i);
                    d("[transformImageColor] addAlpha detected. not support")
                }
            }
            var p = true;
            for (var o = g - 1; o >= 0; o--) {
                var l = b[o];
                var q = l[0];
                var r = l[4];
                if (q != l[1] || q != l[2] || r != l[5] || r != l[6]) {
                    p = false;
                    break
                }
            }
            var s = a && a(h, i) || [
                [0, 0, h, i]
            ];
            if (p) {
                var t = "rgb(255,255,255)";
                if (s.length === 1) {
                    k.drawImage(c, 0, 0);
                    f(k, b, h, i, 0, t)
                } else {
                    var u = Y.regionCanvas || (Y.regionCanvas = cb.getFreeCanvas());
                    var v = u.getContext("2d");
                    for (var w = s.length - 1; w >= 0; w--) {
                        var x = s[w];
                        var y = x[0];
                        var z = x[1];
                        var A = u.width = x[2];
                        var B = u.height = x[3];
                        v.drawImage(c, y, z, A, B, 0, 0, A, B);
                        f(v, b, A, B, 0, t);
                        k.drawImage(u, y, z)
                    }
                }
            } else {
                var C = Y.Nh || (Y.Nh = []);
                var D = Y.Mh || (Y.Mh = []);
                for (var E = s.length - 1; E >= 0; E--) {
                    var x = s[E];
                    var y = x[0];
                    var z = x[1];
                    var A = x[2];
                    var B = x[3];
                    for (var w = 0; w < 3; w++) {
                        var F = D[w] || (D[w] = cb.getFreeCanvas());
                        F.width = A;
                        F.height = B;
                        var G = C[w] || (C[w] = F.getContext("2d"));
                        G.drawImage(c, y, z, A, B, 0, 0, A, B);
                        G.globalCompositeOperation = "darker";
                        G.fillStyle = e[w];
                        G.fillRect(0, 0, A, B)
                    }
                    k.globalCompositeOperation = "lighter";
                    for (var w = 0; w < 3; w++) {
                        f(C[w], b, A, B, w, e[w]);
                        k.drawImage(D[w], y, z)
                    }
                }
            }
            k.globalCompositeOperation = "destination-in";
            k.globalAlpha = 1;
            k.drawImage(m, 0, 0);
            return j
        }
    }();
    var Z = function(a, b) {
        a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        if (b == 0) {
            return a.split("\n")
        }
        var c = [];
        var d = "";
        var e = 0;
        var f = 0;
        var g = "";
        var h = a.length;
        for (var i = 0; i < h; i++) {
            var j = a.charAt(i);
            var l = k(j) ? 1 : 2;
            if (j == "\n") {
                if (e + f > b) {
                    c.push(d);
                    c.push(g)
                } else {
                    c.push(d + g)
                }
                d = "";
                e = 0;
                g = "";
                f = 0
            } else {
                if (f + l > b) {
                    if (d == "") {
                        c.push(g)
                    } else {
                        c.push(d);
                        c.push(g);
                        d = "";
                        e = 0
                    }
                    g = "";
                    f = 0
                }
                g += j;
                f += l
            }
            if (j == " " || i == h - 1) {
                if (e + f > b) {
                    c.push(d);
                    d = g;
                    e = f
                } else {
                    d += g;
                    e += f
                }
                g = "";
                f = 0
            }
        }
        c.push(d);
        return c
    };
    var $ = function(a, b) {
        var c = b.Rf;
        var e = b.gj;
        if (e) {
            var f;
            if (e.charAt(0) == "/" || e.charAt(0) == ".") {
                f = e
            } else {
                f = a.Cc + ":" + e
            }
            var g = D(a, f);
            if (g[0]) {
                var h = g[0].hj[g[1]];
                if (typeof h === "undefiend") {
                    d("Cannot found:" + e, a, b)
                } else {
                    c = h + ""
                }
            } else {
                d("Invalid movie clip name specified:" + e, a, b)
            }
        }
        return c
    };
    var _ = function(a, b, d, e, f, g, j) {
        var k = "";
        var m = b.gi[d];
        var n = [{
            cmd: "SolidFill",
            Kd: e,
            aj: i.zb
        }];
        var o = function() {
            var a;
            var b;
            var d;
            var e;
            var f;
            var g;
            var j;
            var m;
            var n;
            var o;
            var p = function(a) {
                var b = [];
                var c = a.length;
                for (var d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    if (e.he != null) {
                        b.push({
                            oj: e.pj,
                            rj: e.sj,
                            he: e.he,
                            ke: e.ke,
                            pj: e.oj,
                            sj: e.rj
                        })
                    } else {
                        b.push({
                            oj: e.pj,
                            rj: e.sj,
                            pj: e.oj,
                            sj: e.rj
                        })
                    }
                }
                return b
            };
            var q = function(a) {
                if (!m.length) {
                    return
                }
                if (f != 0) {
                    b[f - 1] = b[f - 1] || [];
                    b[f - 1].push(m)
                } else if (g != 0 && j != 0) {
                    if (o[g - 1].aj == i.zb) {
                        e[g - 1] = e[g - 1] || [];
                        e[g - 1].push(m)
                    } else if (o[j - 1].aj == i.zb) {
                        e[j - 1] = e[j - 1] || [];
                        e[j - 1].push(m)
                    }
                }
                if (g != 0) {
                    var c = g - 1;
                    if (a) {
                        c = 0
                    }
                    d[c] = d[c] || [];
                    d[c].push(m)
                }
                if (j != 0) {
                    var c = j - 1;
                    if (a) {
                        c = 0
                    }
                    d[c] = d[c] || [];
                    d[c].push(p(m))
                }
                m = []
            };
            var r = function() {
                a.push({
                    Bg: n,
                    Qe: o,
                    zg: b,
                    Ne: d,
                    Lg: e
                });
                b = [];
                d = [];
                e = []
            };
            var s = function(a, b) {
                k += "ib.beginPath();";
                v(a);
                var c = b.length;
                for (var d = 0; d < c; d++) {
                    var e = b[d];
                    k += "ib.moveTo(" + e[0].oj / 20 + "," + e[0].rj / 20 + ");";
                    var f = e.length;
                    for (var g = 0; g < f; g++) {
                        var h = e[g];
                        if (h.he != null) {
                            k += "ib.quadraticCurveTo(" + h.he / 20 + "," + h.ke / 20 + "," + h.pj / 20 + "," + h.sj / 20 + ");"
                        } else {
                            k += "ib.lineTo(" + h.pj / 20 + "," + h.sj / 20 + ");"
                        }
                    }
                }
                k += "ib.stroke();"
            };
            var t = function(a, b) {
                if (!b) {
                    return a
                }
                var c;
                var d = {};
                c = l(b, a.oj, a.rj);
                d.oj = c[0];
                d.rj = c[1];
                c = l(b, a.pj, a.sj);
                d.pj = c[0];
                d.sj = c[1];
                if (a.he != null) {
                    c = l(b, a.he, a.ke);
                    d.he = c[0];
                    d.ke = c[1]
                }
                return d
            };
            var u = function(a) {
                do {
                    var b = [];
                    var c = false;
                    var d = a.length;
                    for (var e = 0; e < d; e++) {
                        var f = b.length;
                        for (var g = 0; g < f; g++) {
                            var h = a[e].length - 1;
                            var i = b[g].length - 1;
                            if (a[e][0].oj == b[g][i].pj && a[e][0].rj == b[g][i].sj) {
                                b[g] = b[g].concat(a[e]);
                                c = true;
                                break
                            } else if (b[g][0].oj == a[e][h].pj && b[g][0].rj == a[e][h].sj) {
                                b[g] = a[e].concat(b[g]);
                                c = true;
                                break
                            }
                        }
                        if (g == b.length) {
                            b.push(a[e])
                        }
                    }
                    a = b
                } while (c);
                return a
            };
            var v = function(a) {
                if (a.width != null) {
                    var b = a.width / 20;
                    k += "ib.lineWidth=" + b + "*jb<1?1/jb:" + b + ";"
                }
                if (a.Kd != null) {
                    k += "ib.strokeStyle=kb(lb," + a.Kd + ");"
                }
            };
            var w = function(a) {
                var b = null;
                switch (a.aj) {
                    case i.zb:
                        k += "ib.fillStyle=kb(lb," + a.Kd + ");";
                        break;
                    case i.yb:
                    case i.sb:
                    case i.wb:
                    case i.vb:
                        var d = a.Mg;
                        b = [d[0] / 20, d[1] / 20, d[2] / 20, d[3] / 20, d[4], d[5]];
                        k += "var img=mb[" + a._c + "].img;";
                        k += "if(img.width==0&&img.height==0){return false;}";
                        k += "if(lb.length) {img=nb(lb,img);}";
                        k += "ib.fillStyle=ib.createPattern(img,'repeat');";
                        break;
                    case i.ub:
                    case i.xb:
                        b = a.Mg;
                        k += "var ob;";
                        if (a.aj == i.ub) {
                            k += "ob=ib.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);"
                        } else {
                            k += "ob=ib.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);"
                        }
                        var e = a.zf.Bh.length;
                        for (var f = 0; f < e; f++) {
                            var g = a.zf.Bh[f];
                            k += "ob.addColorStop(" + g.Ah / 255 + ",kb(lb, " + g.Kd + "));"
                        }
                        k += "ib.fillStyle=ob;";
                        break;
                    default:
                        c("renderShape.setFillStyle: unknown draw type called: " + a.aj);
                        break
                }
                return b
            };
            var x = function(a, b) {
                if (b.aj != i.sb) {
                    return false
                }
                var c = b.Mg;
                if (!c || c[0] != c[3] || c[1] != 0 || c[2] != 0) {
                    return false
                }
                if (a.length != 1) {
                    return false
                }
                var d = a[0];
                if (d.length != 4) {
                    return false
                }
                var e = [];
                for (var f = 0; f < 4; f++) {
                    var g = d[f];
                    if (g.he || g.ke) return false;
                    e[e.length] = {
                        x: g.pj - g.oj,
                        y: g.sj - g.rj
                    }
                }
                if (e[0].x == 0 && e[1].y == 0 && e[2].x == 0 && e[3].y == 0 && e[0].y == -e[2].y && e[1].x == -e[3].x || e[0].y == 0 && e[1].x == 0 && e[2].y == 0 && e[3].x == 0 && e[0].x == -e[2].x && e[1].y == -e[3].y) {
                    var h = [c[0] / 20, c[1], c[2], c[3] / 20, c[4], c[5]];
                    var j = b._c;
                    k += "var img=mb[" + j + "].img;";
                    k += "if(img.width==0&&img.height==0){return false;}";
                    k += "if(lb.length) {img=nb(lb,img);}";
                    k += "ib.transform(" + h.join() + ");";
                    k += "ib.drawImage(img, 0, 0);";
                    k += "ib.transform(" + L(h).join() + ");";
                    return true
                }
                return false
            };
            return function(i, l, p, v) {
                a = [];
                o = i;
                n = l;
                b = [];
                d = [];
                e = [];
                f = 0;
                g = 0;
                j = 0;
                m = [];
                var y = 0;
                var z = 0;
                var A = p.length;
                for (var B = 0; B < A; B++) {
                    var C = p[B];
                    switch (C.aj) {
                        case h.tb:
                            var D = y + C.he;
                            var E = z + C.ke;
                            var F = D + C.Wc;
                            var G = E + C.Xc;
                            m.push({
                                oj: y,
                                rj: z,
                                he: D,
                                ke: E,
                                pj: F,
                                sj: G
                            });
                            y = F;
                            z = G;
                            break;
                        case h.Ab:
                            var F = y + C.x;
                            var G = z + C.y;
                            m.push({
                                oj: y,
                                rj: z,
                                pj: F,
                                sj: G
                            });
                            y = F;
                            z = G;
                            break;
                        case h.Bb:
                            q(v);
                            if (C.Bg || C.Qe) {
                                r();
                                n = C.Bg || n;
                                o = C.Qe || o
                            }
                            if (C.Ae != null) {
                                y = C.Ae
                            }
                            if (C.Be != null) {
                                z = C.Be
                            }
                            if (C.Ag != null) {
                                f = C.Ag
                            }
                            if (C.Oe != null) {
                                g = C.Oe
                            }
                            if (C.Pe != null) {
                                j = C.Pe
                            }
                            break;
                        default:
                            c("drawObject.renderShape: Unknown type detected:", C.aj);
                            break
                    }
                }
                q(v);
                r();
                k += "ib.lineCap='round';";
                var H = a.length;
                for (var B = 0; B < H; B++) {
                    var I = a[B];
                    n = I.Bg;
                    o = I.Qe;
                    b = I.zg;
                    d = I.Ne;
                    e = I.Lg;
                    if (!v) {
                        var J = e.length;
                        for (var K = 0; K < J; K++) {
                            var M = e[K];
                            if (M) {
                                var N = {
                                    width: 1,
                                    Kd: o[K].Kd
                                };
                                s(N, M)
                            }
                        }
                    }
                    var O = d.length;
                    for (var K = 0; K < O; K++) {
                        var P = d[K];
                        var Q;
                        if (P) {
                            P = u(P);
                            if (x(P, o[K])) continue;
                            if (!v) {
                                var R = w(o[K]);
                                if (R) {
                                    k += "ib.transform(" + R.join() + ");"
                                }
                                Q = R && L(R) || null
                            }
                            if (!v || B == 0 && K == 0) {
                                k += "ib.beginPath();"
                            }
                            var S = P.length;
                            for (var T = 0; T < S; T++) {
                                var U = P[T];
                                if (U) {
                                    var V = t(U[0], Q);
                                    k += "ib.moveTo(" + V.oj / 20 + "," + V.rj / 20 + ");";
                                    var W = U.length;
                                    for (var X = 0; X < U.length; X++) {
                                        var Y = t(U[X], Q);
                                        if (Y.he != null) {
                                            k += "ib.quadraticCurveTo(" + Y.he / 20 + "," + Y.ke / 20 + "," + Y.pj / 20 + "," + Y.sj / 20 + ");"
                                        } else {
                                            k += "ib.lineTo(" + Y.pj / 20 + "," + Y.sj / 20 + ");"
                                        }
                                    }
                                }
                            }
                            if (v) {
                                if (B == a.length - 1 && K == d.length - 1) {
                                    k += "ib.clip();";
                                    k += "if(ib.globalCompositeOperation!='source-over'){";
                                    k += "ib.save();ib.setTransform(1,0,0,1,0,0);ib.globalCompositeOperation='source-over';";
                                    k += "ib.globalAlpha=1;ib.clearRect(0,0,ib.canvas.width+1,ib.canvas.height);";
                                    k += "ib.drawImage(copiedCanvas,0,0);ib.restore();}"
                                }
                            } else {
                                k += "ib.fill();";
                                if (Q) {
                                    k += "ib.transform(" + Q.join() + ");"
                                }
                            }
                        }
                    }
                    if (!v) {
                        var Z = b.length;
                        for (var K = 0; K < Z; K++) {
                            var M = b[K];
                            M && s(n[K], M)
                        }
                    }
                }
            }
        }();
        o(n, null, m, f);
        return k
    };
    var ab = function(a, b, c, d, e, f, g, h, i) {
        var j = [];
        var k = 0;
        var l = 0;
        var m = a.length;
        var n;
        var o;
        var p;
        var q;
        while (k < m) {
            n = 0;
            o = [];
            p = [];
            q = 0;
            for (; k < m; k++) {
                var r = a.charCodeAt(k);
                var s = -1;
                if (i.multiline == 1 && r == 10) {
                    if (n + q > b) {
                        k -= p.length - 1;
                        break
                    } else {
                        k++;
                        o = o.concat(p);
                        n += q
                    }
                    break
                }
                for (var t in g.Jd) {
                    if (g.Jd[t] == r) {
                        s = t;
                        break
                    }
                }
                if (s != -1) {
                    var u = g.We[s];
                    if (q + u > b) {
                        if (o.length) {
                            k -= p.length
                        } else {
                            if (u > b && p.length == 0) {
                                o.push(s);
                                n = u;
                                k++;
                                break
                            }
                            o = o.concat(p);
                            n += q
                        }
                        break
                    } else {
                        p.push(s);
                        q += u
                    }
                    if (r == 32 || k == m - 1) {
                        if (i.multiline == 1 && i.mj == 1 && n + q > b) {
                            k -= p.length - 1;
                            break
                        }
                        o = o.concat(p);
                        n += q;
                        q = 0;
                        p = []
                    }
                }
            }
            var v = 0;
            switch (i.align) {
                case 1:
                    v = (d - c) / h * 20 - n;
                    break;
                case 2:
                case 3:
                    v = ((d - c) / h * 20 - n) / 2;
                    break;
                default:
                    break
            }
            j.push({
                indices: o,
                align: v / 20
            })
        }
        return j
    };
    var bb = function(a) {
        var b = a.width;
        var c = a.height;
        if (b * c <= 65536 || b >= 4096 || c >= 4096) {
            return
        }
        var d = document.createElement("div");
        d.style.width = b + "px";
        d.style.height = c + "px";
        d.style.overflow = "hidden";
        var e = a.parentNode;
        e.insertBefore(d, a);
        e.removeChild(a);
        d.appendChild(a);
        if (b > c) {
            a.width = 4096
        } else {
            a.height = 4096
        }
    };
    var cb = function(a) {
        this._cacheMaxTotalSize = a || 15728640;
        this._cacheSize = 0;
        this._coloredImageCache = {};
        this._imageInfoCache = {};
        this._usedCanvases = []
    };
    cb._freeCanvases = [];
    cb.getFreeCanvas = function() {
        return cb._freeCanvases.pop() || document.createElement("canvas")
    };
    cb.destroyCanvas = function(a) {
        a.width = a.height = 16;
        cb._freeCanvases.push(a)
    };
    cb.prototype.getImageInfo = function(a) {
        return this._imageInfoCache[a]
    };
    cb.prototype.cacheImageInfo = function(a, b) {
        if (!b) {
            return
        }
        var c = b.img;
        var d = c.width * c.height << 2;
        if (this._cacheSize + d > this._cacheMaxTotalSize) {
            this.clearCache()
        }
        this._imageInfoCache[a] = b;
        this._cacheSize += d;
        this._usedCanvases.push(c)
    };
    cb.prototype.getColoredImage = function(a, b) {
        var c = this._coloredImageCache[a];
        if (c) {
            var d = c.length;
            for (var e = 0; e < d; e++) {
                var f = c[e];
                if (f[0] == b) {
                    return f[1]
                }
            }
        }
        return null
    };
    cb.prototype.cacheColoredImage = function(a, b, c) {
        var d = c.width * c.height << 2;
        var e = this._coloredImageCache[a] || (this._coloredImageCache[a] = []);
        if (this._cacheSize + d > this._cacheMaxTotalSize) {
            this.clearCache()
        }
        e.push([b, c]);
        this._cacheSize += d;
        this._usedCanvases.push(c)
    };
    cb.prototype.clearCache = function() {
        this._imageInfoCache = {};
        this._coloredImageCache = {};
        this._cacheSize = 0;
        var a = this._usedCanvases;
        var b = cb._freeCanvases;
        var c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            e.width = e.height = 16;
            b.push(e)
        }
        this._usedCanvases = []
    };
    var db = function(a) {
        this.Ie = a;
        this.Qd = a.Qd;
        this.qd = {};
        this.od = {};
        this.nd = {};
        this.Rh = 1;
        this.cacheController = new cb(a.ch.cacheMaxTotalSize);
        this.Zi = a.ch.cacheColoredImage ? S(this.cacheController) : Y
    };
    db.sd = function(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        var c = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
        return Math.sqrt(b * c)
    };
    db.prototype._h = function(a) {
        this._i = a[1] - a[0];
        this.$i = a[3] - a[2];
        if (!this.be) {
            var c;
            if (this.Qd.tagName.toLowerCase() == "canvas") {
                c = this.Ie.canvas = this.Qd
            } else {
                c = this.Ie.canvas = document.createElement("canvas");
                this.Qd.appendChild(c)
            }
            var e = this._i / 20;
            var f = this.$i / 20;
            var g = this.Ie.ch;
            var h = null;
            var i;
            var j;
            var k;
            if (g.width || g.height) {
                if (g.fixRatio) {
                    i = g.width && g.width / e || g.height && g.height / f || 1;
                    var l = e * i | 0;
                    var m = f * i | 0;
                    j = l / e;
                    k = m / f;
                    e = l;
                    f = m
                } else {
                    var j = g.width && g.width / e || 1;
                    var k = g.height && g.height / f || 1;
                    e = g.width || e;
                    f = g.height || f
                }
                h = [j, 0, 0, k, 0, 0];
                i = j > k ? j : k
            } else {
                i = 1
            }
            this.Ah = i;
            if (g.frameRect) {
                var n = g.frameRect;
                e = n[2] * (j || i);
                f = n[3] * (k || i);
                if (!h) {
                    h = [1, 0, 0, 1, 0, 0]
                }
                h[4] = -n[0] * (j || i);
                h[5] = -n[1] * (k || i)
            }
            if (c.width != (e | 0)) {
                g.debug && b("set canvas width to " + (e | 0));
                c.width = e | 0
            }
            if (c.height != (f | 0)) {
                g.debug && b("set canvas height to " + (f | 0));
                c.height = f | 0
            }
            this.frameWidth = c.width;
            this.frameHeight = c.height;
            g._enableWorkaroundForUnicolor && bb(c);
            this.width = h && e / h[0] || e;
            this.height = h && f / h[3] || f;
            var o = c.getContext("2d");
            this.be = o;
            if (h) {
                if (g.origin) {
                    if (g.frameRect) {
                        d("option.origin is ignored because option.frameRect is specified.")
                    } else {
                        h[4] = g.origin[0];
                        h[5] = g.origin[1]
                    }
                }
                o.transform.apply(o, h);
                this.Ie.Sh = h;
                this.Rh = db.sd(h)
            }
        }
    };
    db.prototype.Hh = function(a, c, d, e) {
        var f = this.Ie;
        var g = f.ch;
        var h = this.be;
        if (!h) {
            return
        }
        if (!a) {
            var i = h.canvas;
            if (f.$c != null) {
                h.fillStyle = O(f.$c);
                h.fillRect(0, 0, this.width + 1, this.height)
            } else {
                h.clearRect(0, 0, this.width + 1, this.height)
            }
            h.save();
            a = this.Ie.Qh;
            c = []
        }
        if (!a.yh.wc) {
            return
        }
        var j = h.globalCompositeOperation;
        for (var k in g.operation) {
            if (k == a.yh["jc"]) {
                h.globalCompositeOperation = g.operation[k]
            }
        }
        e = g.shapeDetail && g.shapeDetail[a.yh["jc"]] || e;
        var l = a.Pg;
        var m = a.yh["dc"];
        var n = [];
        var o = [];
        for (var p in a.we) {
            p < 65536 && (o[o.length] = p)
        }
        o.sort(function(a, b) {
            return a - b
        });
        var q = this.cacheController;
        var r = o.length;
        var s = a.ue;
        for (var t = 0; t < r; t++) {
            var u = a.we[o[t]];
            var v = u.id;
            var w = l.Df[v];
            var x = l.hf[m][v];
            var y = false;
            var z = d || this.Rh;
            var A = s[u.wd];
            if (x.Ed) {
                h.save();
                n.push(x.Ed);
                y = true
            }
            var B = null;
            var C = a.zd[v];
            var D = x.ie;
            if (D && D[0] == 256 && D[1] == 256 && D[2] == 256 && D[3] == 256 && D[4] == 0 && D[5] == 0 && D[6] == 0 && D[7] == 0) {
                D = null
            }
            D && c.push(D);
            if (C) {
                var E = C.yh;
                if (E.zc != 0 && E.Bc != 0) {
                    if (!C.ag) {
                        B = x.Mg
                    } else {
                        B = C.sf()
                    }
                    if (B) {
                        if (!y) h.save();
                        h.transform.apply(h, B);
                        z *= db.sd(B)
                    }
                    this.Hh(C, c, z, e)
                }
            } else if (A.aj == 34) {
                B = x.Mg;
                if (B) {
                    if (!y) h.save();
                    h.transform.apply(h, B);
                    z *= db.sd(B)
                }
            } else {
                B = x.Mg;
                if (B) {
                    if (!y) h.save();
                    h.transform.apply(h, B);
                    z *= db.sd(B)
                }
                var F = "";
                if (A.aj == 37) {
                    F = $(a, A)
                }
                var G = A.id + s["name"];
                if (y) {
                    var H = h.globalCompositeOperation;
                    if (H != "source-over") {
                        var i = h.canvas;
                        var I = cb.getFreeCanvas();
                        I.width = this.frameWidth;
                        I.height = this.frameHeight;
                        I.getContext("2d").drawImage(i, 0, 0);
                        h.globalCompositeOperation = H
                    }(this.nd[G] || (this.nd[G] = fb(f, A, true, s)))(f, h, A, x.Mg, c, F, R, this.Zi, Z, z, ab, _, I, s);
                    if (I) {
                        cb.destroyCanvas(I);
                        I = null
                    }
                    h.save()
                } else {
                    var J = g.shapeDetail;
                    var K = this.qd[G] || J && (J[G] && J[G].method || e && e.method || J.all && J.all.method);
                    this.qd[G] || (this.qd[G] = A.aj != 37 && K || "func");
                    var M = false;
                    if (K == "cache") {
                        if (c && c.length) {
                            var N = ",";
                            var P = c.length;
                            for (var Q = 0; Q < P; Q++) {
                                N += c[Q].join()
                            }
                            G += N
                        }
                        var S = q.getImageInfo(G);
                        if (!S) {
                            var T = J && +(J[G] && J[G].cacheScale || e && e.cacheScale || J.all && J.all.cacheScale || this.Rh) || z;
                            var U = J && +(J[G] && J[G].adjustLineScale || e && e.adjustLineScale || J.all && J.all.adjustLineScale);
                            var V = z;
                            U && (V = U * this.Rh);
                            var W = fb(f, A, false, s);
                            var X = A.dd;
                            var Y = (A.dd[1] - A.dd[0]) / 20;
                            var bb = (A.dd[3] - A.dd[2]) / 20;
                            if (Y * (T || 1) < this._i / 20 * this.Rh * 2 && bb * (T || 1) < this.$i / 20 * this.Rh * 2) {
                                var i = cb.getFreeCanvas();
                                i.width = Math.ceil(Y * (T || 1)) || 1;
                                i.height = Math.ceil(bb * (T || 1)) || 1;
                                g.debug && !g.suppressLog.drawCache && b("create cache for [" + A.id + "] width: " + i.width + " height:" + i.height);
                                var eb = i.getContext("2d");
                                eb.transform(i.width / Y, 0, 0, i.height / bb, 0, 0);
                                eb.transform(1, 0, 0, 1, -A.dd[0] / 20, -A.dd[2] / 20);
                                if (W(f, eb, A, x.Mg, c, F, R, this.Zi, Z, V, ab, _, null, s)) {
                                    S = {
                                        img: i,
                                        x: A.dd[0] / 20,
                                        y: A.dd[2] / 20,
                                        width: Y,
                                        height: bb,
                                        scale: T
                                    };
                                    q.cacheImageInfo(G, S)
                                } else {}
                            } else {
                                this.qd[G] = "func";
                                g.shapeDetail = g.shapeDetail || {};
                                g.shapeDetail[G] = "func";
                                g.debug && b("cache avoided: " + u.wd)
                            }
                        }
                        if (S) {
                            S.width && S.height && (S.scale && (h.drawImage(S.img, S.x, S.y, S.width, S.height) || true) || h.drawImage(S.img, S.x, S.y));
                            M = true
                        }
                    }
                    if (!M) {
                        var G = A.id + (y ? "c" : "") + s["name"];
                        (this.od[G] || (this.od[G] = fb(f, A, y, s)))(f, h, A, x.Mg, c, F, R, this.Zi, Z, z, ab, _, null, s)
                    }
                }
            }
            B && y ? h.transform.apply(h, L(B)) : h.restore();
            D && c.pop();
            if (n.length) {
                var gb = n[n.length - 1];
                var hb = o[t + 1];
                if (hb == null || hb > gb) {
                    n.pop();
                    h.restore();
                    h.restore()
                }
            }
        }
        h.globalCompositeOperation = j;
        if (a == this.Ie.Qh) {
            h.restore()
        }
    };
    var eb = function(a) {
        this.Ie = a;
        a.Sh = [1, 0, 0, 1, 0, 0];
        this.Qd = a.Qd;
        this.qd = {};
        this.od = {};
        this.nd = {};
        this.Rh = 1;
        this.Fd;
        this.tagListCursor = 0;
        this.pg = -1;
        this.qg = {};
        this.ve = [];
        a.ch.debug && b("dirty rect start");
        this.cacheController = new cb(a.ch.cacheMaxTotalSize);
        this.Zi = a.ch.cacheColoredImage ? S(this.cacheController) : Y
    };
    eb.prototype._h = function(a) {
        this._i = a[1] - a[0];
        this.$i = a[3] - a[2];
        if (!this.be) {
            var c;
            if (this.Qd.tagName.toLowerCase() == "canvas") {
                c = this.Ie.canvas = this.Qd
            } else {
                c = this.Ie.canvas = document.createElement("canvas");
                this.Qd.appendChild(c)
            }
            var e = this._i / 20;
            var f = this.$i / 20;
            var g = this.Ie.ch;
            var h = null;
            var i;
            var j;
            var k;
            if (g.width || g.height) {
                if (g.fixRatio) {
                    i = g.width && g.width / e || g.height && g.height / f || 1;
                    var l = e * i | 0;
                    var m = f * i | 0;
                    j = l / e;
                    k = m / f;
                    e = l;
                    f = m
                } else {
                    j = g.width && g.width / e || 1;
                    k = g.height && g.height / f || 1;
                    e = g.width || e;
                    f = g.height || f
                }
                h = [j, 0, 0, k, 0, 0];
                i = j > k ? j : k
            } else {
                i = 1
            }
            this.Ah = i;
            if (g.frameRect) {
                var n = g.frameRect;
                e = n[2] * (j || i);
                f = n[3] * (k || i);
                if (!h) {
                    h = [1, 0, 0, 1, 0, 0]
                }
                h[4] = -n[0] * (j || i);
                h[5] = -n[1] * (k || i)
            }
            if (c.width != (e | 0)) {
                g.debug && b("set canvas width to " + (e | 0));
                c.width = e | 0
            }
            if (c.height != (f | 0)) {
                g.debug && b("set canvas height to " + (f | 0));
                c.height = f | 0
            }
            this.frameWidth = c.width;
            this.frameHeight = c.height;
            g._enableWorkaroundForUnicolor && bb(c);
            this.width = h && e / h[0] || e;
            this.height = h && f / h[3] || f;
            var o = c.getContext("2d");
            o.getImageData(0, 0, 1, 1);
            this.be = o;
            if (h) {
                if (g.origin) {
                    if (g.frameRect) {
                        d("option.origin is ignored because option.frameRect is specified.")
                    } else {
                        h[4] = g.origin[0];
                        h[5] = g.origin[1]
                    }
                }
                this.Ie.Sh = h;
                this.Rh = db.sd(h)
            }
            if (this.Ie.$c != null) {
                c.style.backgroundColor = O(this.Ie.$c)
            }
        }
    };
    eb.prototype.Aj = function(a, b, c, d, e, f) {
        var g = [];
        if (!a) {
            a = this.Ie.Qh;
            b = this.Ie.Sh;
            c = [];
            this.Fd = 1;
            d = ""
        }
        if (!a.yh.wc) {
            return
        }
        if (!a.bg(this.pg)) {
            return a.rd
        }
        var h = [];
        var i = a.Pg;
        var j = a.yh["dc"];
        var k = this.Ie;
        var l = a.ue;
        var m = k.ch;
        for (var n in m.operation) {
            if (n == a.yh["jc"]) {
                e = m.operation[n]
            }
        }
        f = m.shapeDetail && m.shapeDetail[a.yh["jc"]] || f;
        var o = [];
        for (var p in a.we) {
            p < 65536 && (o[o.length] = p)
        }
        o.sort(function(a, b) {
            return a - b
        });
        var q = o.length;
        for (var r = 0; r < q; r++) {
            var s = a.we[o[r]];
            var t = s.id;
            var u = i.hf[j][t];
            var v = l[s.wd];
            var w;
            var x = u.ie;
            var y;
            if (x && !(x[0] == 256 && x[1] == 256 && x[2] == 256 && x[3] == 256 && x[4] == 0 && x[5] == 0 && x[6] == 0 && x[7] == 0)) {
                y = c.concat([x])
            } else {
                y = c
            }
            var z = a.zd[t];
            var A = d + ("0000" + t.toString(16)).slice(-4);
            if (u.Ed) {
                h.push([u.Ed, this.Fd]);
                g.push(this.Fd++)
            }
            if (z) {
                if (!z.ag) {
                    w = u.Mg
                } else {
                    w = z.sf()
                }
                Array.prototype.push.apply(g, this.Aj(z, w && M(b, w) || b, y, A, e, f))
            } else {
                w = u.Mg;
                if (w[0] * w[3] == w[1] * w[2]) continue;
                w = w && M(b, w) || b;
                var B = N(w, v.dd);
                var C = eb.te(B);
                var D = "";
                if (v.aj == 37) {
                    D = $(a, v)
                }
                g.push({
                    rh: u,
                    transform: w,
                    je: y,
                    vj: A,
                    operation: e || "source-over",
                    detail: f,
                    rect: C,
                    Pi: D,
                    ue: l
                })
            }
            if (h.length) {
                var E = h[h.length - 1];
                var F = E[0];
                var G = o[r + 1];
                if (G == null || G > F) {
                    g.push(-E[1]);
                    h.pop()
                }
            }
        }
        a.rd = g;
        return g
    };
    eb.sd = function(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        var c = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
        return Math.sqrt(b * c)
    };
    eb.Th = function(a) {
        var b = [];
        for (var c = 0; c < 4; c++) b[c] = a[c];
        for (var c = 4; c < 6; c++) b[c] = Math.round(a[c]);
        return b
    };
    eb.te = function(a) {
        var b = [];
        b[0] = Math.floor(a[0] / 20) - 1;
        b[2] = Math.floor(a[2] / 20) - 1;
        b[1] = Math.ceil((a[1] - a[0]) / 20) + b[0] + 2;
        b[3] = Math.ceil((a[3] - a[2]) / 20) + b[2] + 2;
        return b
    };
    eb.prototype.Jc = function(a) {
        var b = this.be.canvas;
        var c = this.frameWidth - 1;
        var d = this.frameHeight - 1;
        if (a[0] > c || a[1] < 0 || a[2] > d || a[3] < 0) {
            return
        }
        var e = a[0] > 0 ? a[0] : 0;
        var f = a[1] < c ? a[1] : c;
        var g = a[2] > 0 ? a[2] : 0;
        var h = a[3] < d ? a[3] : d;
        var i = this.ve;
        for (var j = 0; j < i.length; j++) {
            var k = i[j];
            if (f < k[0] || k[1] < e || h < k[2] || k[3] < g) {
                continue
            }
            e = k[0] > e ? e : k[0];
            f = k[1] < f ? f : k[1];
            g = k[2] > g ? g : k[2];
            h = k[3] < h ? h : k[3];
            i.splice(j, 1);
            j = -1
        }
        i[i.length] = [e, f, g, h]
    };
    eb.Nd = function(a, b, c, d) {
        if (P(a.transform, b.transform, c)) {
            if (d || Q(a.je, b.je)) {
                if (a.Pi === b.Pi) {
                    return true
                }
            }
        }
        return false
    };
    eb.prototype.zj = function(a, c, d, e, f, g) {
        var h = this.Ie;
        var i = a.id + g["name"];
        var j = this.od[i] || (this.od[i] = fb(h, a, false, g));
        var k = a.dd;
        var l = (a.dd[1] - a.dd[0]) / 20;
        var m = (a.dd[3] - a.dd[2]) / 20;
        var n = this.Ie.ch;
        var o = n.cacheMaxShapeSize || 2;
        if (l * (e || 1) > this._i / 20 * this.Rh * o || m * (e || 1) > this.$i / 20 * this.Rh * o) {
            return null
        }
        var p = cb.getFreeCanvas();
        p.width = Math.ceil(l * (e || 1)) || 1;
        p.height = Math.ceil(m * (e || 1)) || 1;
        n.debug && !n.suppressLog.drawCache && b("create cache for [" + a.id + "] width: " + p.width + " height:" + p.height);
        var q = p.getContext("2d");
        q.transform(p.width / l, 0, 0, p.height / m, 0, 0);
        q.transform(1, 0, 0, 1, -a.dd[0] / 20, -a.dd[2] / 20);
        f && (d = f * this.Rh);
        if (j(h, q, a, null, c, "", R, this.Zi, Z, d, ab, _, null, g)) {
            (p.width == 0 || p.height == 0) && (p.width = 1, p.height = 1);
            return {
                img: p,
                x: a.dd[0] / 20,
                y: a.dd[2] / 20,
                width: l,
                height: m,
                scale: e
            }
        } else {
            return null
        }
    };
    eb.prototype.Wd = function(a) {
        this.ve = [];
        var b = a.length;
        for (var c = 0; c < b; c++) {
            var d = a[c];
            if (typeof d === "number") continue;
            var e = d.vj;
            var f = this.qg[e];
            if (f) {
                if (!eb.Nd(d, f)) {
                    this.Jc(d.rect);
                    this.Jc(f.rect)
                }
                delete this.qg[e]
            } else {
                this.Jc(d.rect)
            }
        }
        for (var g in this.qg) {
            this.Jc(this.qg[g].rect);
            delete this.qg[g]
        }
    };
    eb.prototype.Ej = function() {
        var a = this.Ie;
        var c = a.ch;
        var d = c.shapeDetail;
        if (d) {
            var e = this.cacheController;
            if (d.all && d.all.preload) {
                c.debug && b("preload: all");
                var f = a.le.Ii;
                var h = f.length;
                for (var i = this.tagListCursor; i < h; i++) {
                    var j = f[i];
                    switch (j.aj) {
                        case g.Nb:
                        case g.Ob:
                        case g.Pb:
                        case g.Rb:
                        case g.Sb:
                        case g.Jb:
                            var k = j.id;
                            var l = j;
                            var m = this.qd[k] || d[k] && d[k].method || d.all && d.all.method;
                            m = l.aj != 37 && m || "func";
                            this.qd[k] || (this.qd[k] = m) && c.debug && !c.suppressLog.drawCache && b("CacheMethod[" + k + "]=" + m);
                            if (m == "cache") {
                                var n = d[k] && d[k].cacheScale || d.all && d.all.cacheScale || this.Rh;
                                var o = d[k] && d[k].adjustLineScale || d.all && d.all.adjustLineScale;
                                e.getImageInfo[k] || e.cacheImageInfo(k, this.zj(l, [], n, n, null, this.Ie.ue))
                            } else {
                                this.od[k] || (this.od[k] = fb(a, l, false, this.Ie.ue))
                            }
                            break
                    }
                }
                this.tagListCursor = h
            } else {
                for (var k in d) {
                    var l = a.ue[k];
                    if (l && d[k].preload) {
                        if (this.qd[k]) {
                            continue
                        }
                        c.debug && b("preload: " + k);
                        var m = this.qd[k] || d[k].method || d.all && d.all.method;
                        m = l.aj != 37 && m || "func";
                        this.qd[k] || (this.qd[k] = m) && c.debug && !c.suppressLog.drawCache && b("CacheMethod[" + k + "]=" + m);
                        if (m == "cache") {
                            var n = d[k].cacheScale || d.all && d.all.cacheScale || this.Rh;
                            var o = d[k] && d[k].adjustLineScale || d.all && d.all.adjustLineScale;
                            e.getImageInfo[k] || e.cacheImageInfo(k, this.zj(l, [], n, n, null, this.Ie.ue))
                        } else {
                            this.od[k] || (this.od[k] = fb(a, l, false, this.Ie.ue))
                        }
                    }
                }
            }
        }
    };
    eb.prototype.Hh = function() {
        var a = this.be;
        if (!a) {
            return
        }
        var c = this.Aj() || [];
        this.Wd(c);
        var d = this.Ie;
        var e = d.ch;
        var f = this.ve;
        var g = f.length;
        var h = a.canvas;
        a.fillStyle = O(this.Ie.$c);
        for (var i = 0; i < g; i++) {
            var j = f[i];
            if (e.transparent) {
                if (j[0] == 0 && j[1] + 1 == a.canvas.width) {
                    j[1]++
                }
                a.clearRect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
            } else {
                if (j[0] == 0 && j[1] + 1 == a.canvas.width) {
                    j[1]++
                }
                a.fillRect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
            }
        }
        a.fillStyle = "rgba(0,0,0,1)";
        a.save();
        a.beginPath();
        for (var i = 0; i < g; i++) {
            var j = f[i];
            a.rect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
        }
        a.clip();
        var k = this.cacheController;
        var l = c.length;
        var m = 0;
        for (var n = 0; n < l; n++) {
            var o = c[n];
            if (typeof o === "number") {
                if (o > 0) {
                    a.save()
                } else {
                    for (; m > 0; m--) {
                        a.restore()
                    }
                    a.restore()
                }
                continue
            }
            var p = o.rh;
            var q = o.transform;
            var r = o.je;
            var s = o.rect;
            var t = o.Pi;
            var u = eb.sd(q);
            var v = o.ue;
            var w = v[p.wd];
            var x = p.Ed;
            var y = false;
            for (var i = 0; i < g; i++) {
                var j = f[i];
                if (j[1] >= s[0] && s[1] >= j[0] && j[3] >= s[2] && s[3] >= j[2]) {
                    y = true;
                    break
                }
            }
            if (!y && !x) {
                continue
            }
            a.globalCompositeOperation = o.operation;
            var z = o.detail;
            if (x) {
                var A = a.globalCompositeOperation;
                if (A != "source-over") {
                    a.restore();
                    a.restore();
                    var B = cb.getFreeCanvas();
                    B.width = this.frameWidth;
                    B.height = this.frameHeight;
                    B.getContext("2d").drawImage(h, 0, 0);
                    a.save();
                    if (m > 0) {
                        a.clip()
                    } else {
                        a.save();
                        for (var i = 0; i < g; i++) {
                            var j = f[i];
                            a.rect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
                        }
                        a.clip()
                    }
                    a.save();
                    a.globalCompositeOperation = A
                }
                a.transform.apply(a, q);
                var C = w.id + v["name"];
                (this.nd[C] || (this.nd[C] = fb(d, w, true, v)))(d, a, w, q, r, t, R, this.Zi, Z, u, ab, _, B, v);
                if (B) {
                    cb.destroyCanvas(B);
                    B = null
                }
                a.save();
                m++;
                a.transform.apply(a, L(q))
            } else {
                var C = w.id + v["name"];
                var D = e.shapeDetail;
                var E = this.qd[C] || D && (D[C] && D[C].method || z && z.method || D.all && D.all.method);
                E = w.aj != 37 && E || "func";
                this.qd[C] || (this.qd[C] = E) && e.debug && !e.suppressLog.drawCache && b("CacheMethod[" + C + "]=" + E);
                var F = false;
                if (E == "cache") {
                    var G = C;
                    if (r && r.length) {
                        var H = ",";
                        var I = r.length;
                        for (var J = 0; J < I; J++) {
                            H += r[J].join()
                        }
                        G += H
                    }
                    var K = k.getImageInfo(G);
                    if (!K) {
                        var M = D && +(D[C] && D[C].cacheScale || z && z.cacheScale || D.all && D.all.cacheScale || this.Rh) || u;
                        var N = D[C] && D[C].adjustLineScale || z && z.adjustLineScale || D.all && D.all.adjustLineScale;
                        K = this.zj(w, r, u, M, N, v);
                        K && k.cacheImageInfo(G, K);
                        if (!K) {
                            this.qd[C] = "func";
                            e.shapeDetail = e.shapeDetail || {};
                            e.shapeDetail[C] = "func";
                            e.debug && b("cache avoided: " + p.wd)
                        }
                    }
                    if (K && K.width && K.height) {
                        F = true;
                        a.save();
                        if (q[1] == 0 && q[2] == 0) {
                            var P = q[0];
                            var Q = q[3];
                            var S = P > 0 ? 1 : -1;
                            var T = Q > 0 ? 1 : -1;
                            var U = Math.round(S * K.width * P);
                            var V = Math.round(S * (K.x * P + q[4]));
                            var W = Math.round(T * K.height * Q);
                            var X = Math.round(T * (K.y * Q + q[5]));
                            a.transform(S, 0, 0, T, 0, 0);
                            a.drawImage(K.img, V, X, U, W)
                        } else {
                            a.transform.apply(a, q);
                            a.drawImage(K.img, K.x, K.y, K.width, K.height)
                        }
                        a.restore()
                    }
                }
                if (!F) {
                    var C = w.id + v["name"];
                    a.save();
                    a.transform.apply(a, q);
                    (this.od[C] || (this.od[C] = fb(d, w, false, v)))(d, a, w, p.Mg, r, t, R, this.Zi, Z, u, ab, _, null, v) || (c[n] = NaN);
                    a.restore()
                }
            }
        }
        a.restore();
        a.globalCompositeOperation = "source-over";
        this.pg = this.Ie.df;
        this.qg = {};
        for (var n = 0; n < c.length; n++) {
            var o = c[n];
            if (typeof o === "number") {
                continue
            }
            var Y = o.vj;
            this.qg[Y] = o
        }
    };
    var fb = function() {
        var a = "";
        var b = false;
        var d = function() {
            var b;
            var d;
            var e;
            var f;
            var g;
            var j;
            var k;
            var m;
            var n;
            var o;
            var p = function(a) {
                var b = [];
                var c = a.length;
                for (var d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    if (e.he != null) {
                        b.push({
                            oj: e.pj,
                            rj: e.sj,
                            he: e.he,
                            ke: e.ke,
                            pj: e.oj,
                            sj: e.rj
                        })
                    } else {
                        b.push({
                            oj: e.pj,
                            rj: e.sj,
                            pj: e.oj,
                            sj: e.rj
                        })
                    }
                }
                return b
            };
            var q = function(a) {
                if (!m.length) {
                    return
                }
                if (g != 0) {
                    d[g - 1] = d[g - 1] || [];
                    d[g - 1].push(m)
                } else if (j != 0 && k != 0) {
                    if (o[j - 1].aj == i.zb) {
                        f[j - 1] = f[j - 1] || [];
                        f[j - 1].push(m)
                    } else if (o[k - 1].aj == i.zb) {
                        f[k - 1] = f[k - 1] || [];
                        f[k - 1].push(m)
                    }
                }
                if (j != 0) {
                    var b = j - 1;
                    if (a) {
                        b = 0
                    }
                    e[b] = e[b] || [];
                    e[b].push(m)
                }
                if (k != 0) {
                    var b = k - 1;
                    if (a) {
                        b = 0
                    }
                    e[b] = e[b] || [];
                    e[b].push(p(m))
                }
                m = []
            };
            var r = function() {
                b.push({
                    Bg: n,
                    Qe: o,
                    zg: d,
                    Ne: e,
                    Lg: f
                });
                d = [];
                e = [];
                f = []
            };
            var s = function(b, c) {
                a += "ib.beginPath();";
                v(b);
                var d = c.length;
                for (var e = 0; e < d; e++) {
                    var f = c[e];
                    a += "ib.moveTo(" + f[0].oj / 20 + "," + f[0].rj / 20 + ");";
                    var g = f.length;
                    for (var h = 0; h < g; h++) {
                        var i = f[h];
                        if (i.he != null) {
                            a += "ib.quadraticCurveTo(" + i.he / 20 + "," + i.ke / 20 + "," + i.pj / 20 + "," + i.sj / 20 + ");"
                        } else {
                            a += "ib.lineTo(" + i.pj / 20 + "," + i.sj / 20 + ");"
                        }
                    }
                }
                a += "ib.stroke();"
            };
            var t = function(a, b) {
                if (!b) {
                    return a
                }
                var c;
                var d = {};
                c = l(b, a.oj, a.rj);
                d.oj = c[0];
                d.rj = c[1];
                c = l(b, a.pj, a.sj);
                d.pj = c[0];
                d.sj = c[1];
                if (a.he != null) {
                    c = l(b, a.he, a.ke);
                    d.he = c[0];
                    d.ke = c[1]
                }
                return d
            };
            var u = function(a) {
                do {
                    var b = [];
                    var c = false;
                    var d = a.length;
                    for (var e = 0; e < d; e++) {
                        var f = b.length;
                        for (var g = 0; g < f; g++) {
                            var h = a[e].length - 1;
                            var i = b[g].length - 1;
                            if (a[e][0].oj == b[g][i].pj && a[e][0].rj == b[g][i].sj) {
                                b[g] = b[g].concat(a[e]);
                                c = true;
                                break
                            } else if (b[g][0].oj == a[e][h].pj && b[g][0].rj == a[e][h].sj) {
                                b[g] = a[e].concat(b[g]);
                                c = true;
                                break
                            }
                        }
                        if (g == b.length) {
                            b.push(a[e])
                        }
                    }
                    a = b
                } while (c);
                return a
            };
            var v = function(b) {
                if (b.width != null) {
                    var c = b.width / 20;
                    a += "ib.lineWidth=" + c + "*jb<1?1/jb:" + c + ";"
                }
                if (b.Kd != null) {
                    a += "ib.strokeStyle=kb(lb," + b.Kd + ");"
                }
            };
            var w = function(b) {
                var d = null;
                switch (b.aj) {
                    case i.zb:
                        a += "ib.fillStyle=kb(lb," + b.Kd + ");";
                        break;
                    case i.yb:
                    case i.sb:
                    case i.wb:
                    case i.vb:
                        var e = b.Mg;
                        d = [e[0] / 20, e[1] / 20, e[2] / 20, e[3] / 20, e[4], e[5]];
                        a += "var img=mb[" + b._c + "].img;";
                        a += "if(img.width==0&&img.height==0){return false;}";
                        a += "if(lb.length) {img=nb(lb,img);}";
                        a += "ib.fillStyle=ib.createPattern(img,'repeat');";
                        break;
                    case i.ub:
                    case i.xb:
                        d = b.Mg;
                        a += "var ob;";
                        if (b.aj == i.ub) {
                            a += "ob=ib.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);"
                        } else {
                            a += "ob=ib.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);"
                        }
                        var f = b.zf.Bh.length;
                        for (var g = 0; g < f; g++) {
                            var h = b.zf.Bh[g];
                            a += "ob.addColorStop(" + h.Ah / 255 + ",kb(lb, " + h.Kd + "));"
                        }
                        a += "ib.fillStyle=ob;";
                        break;
                    default:
                        c("renderShape.setFillStyle: unknown draw type called: " + b.aj);
                        break
                }
                return d
            };
            var x = function(b, c) {
                if (c.aj != i.sb) {
                    return false
                }
                var d = c.Mg;
                if (!d || Math.abs(d[0]) != Math.abs(d[3]) || d[1] != 0 || d[2] != 0) {
                    return false
                }
                if (b.length != 1) {
                    return false
                }
                var e = b[0];
                if (e.length != 4) {
                    return false
                }
                var f = [];
                for (var g = 0; g < 4; g++) {
                    var h = e[g];
                    if (h.he || h.ke) return false;
                    f[f.length] = {
                        x: h.pj - h.oj,
                        y: h.sj - h.rj
                    }
                }
                if (f[0].x == 0 && f[1].y == 0 && f[2].x == 0 && f[3].y == 0 && f[0].y == -f[2].y && f[1].x == -f[3].x || f[0].y == 0 && f[1].x == 0 && f[2].y == 0 && f[3].x == 0 && f[0].x == -f[2].x && f[1].y == -f[3].y) {
                    var j = [d[0] / 20, d[1], d[2], d[3] / 20, d[4], d[5]];
                    var k = c._c;
                    a += "var img=mb[" + k + "].img;";
                    a += "if(img.width==0&&img.height==0){return false;}";
                    a += "if(lb.length) {img=nb(lb,img);}";
                    a += "ib.transform(" + j.join() + ");";
                    a += "ib.drawImage(img, 0, 0);";
                    a += "ib.transform(" + L(j).join() + ");";
                    return true
                }
                return false
            };
            return function(i, l, p, v) {
                b = [];
                o = i;
                n = l;
                d = [];
                e = [];
                f = [];
                g = 0;
                j = 0;
                k = 0;
                m = [];
                var y = 0;
                var z = 0;
                var A = p.length;
                for (var B = 0; B < A; B++) {
                    var C = p[B];
                    switch (C.aj) {
                        case h.tb:
                            var D = y + C.he;
                            var E = z + C.ke;
                            var F = D + C.Wc;
                            var G = E + C.Xc;
                            m.push({
                                oj: y,
                                rj: z,
                                he: D,
                                ke: E,
                                pj: F,
                                sj: G
                            });
                            y = F;
                            z = G;
                            break;
                        case h.Ab:
                            var F = y + C.x;
                            var G = z + C.y;
                            m.push({
                                oj: y,
                                rj: z,
                                pj: F,
                                sj: G
                            });
                            y = F;
                            z = G;
                            break;
                        case h.Bb:
                            q(v);
                            if (C.Bg || C.Qe) {
                                r();
                                n = C.Bg || n;
                                o = C.Qe || o
                            }
                            if (C.Ae != null) {
                                y = C.Ae
                            }
                            if (C.Be != null) {
                                z = C.Be
                            }
                            if (C.Ag != null) {
                                g = C.Ag
                            }
                            if (C.Oe != null) {
                                j = C.Oe
                            }
                            if (C.Pe != null) {
                                k = C.Pe
                            }
                            break;
                        default:
                            c("drawObject.renderShape: Unknown type detected:", C.aj);
                            break
                    }
                }
                q(v);
                r();
                a += "ib.lineCap='round';";
                var H = b.length;
                for (var B = 0; B < H; B++) {
                    var I = b[B];
                    n = I.Bg;
                    o = I.Qe;
                    d = I.zg;
                    e = I.Ne;
                    f = I.Lg;
                    if (!v) {
                        var J = f.length;
                        for (var K = 0; K < J; K++) {
                            var M = f[K];
                            if (M) {
                                var N = {
                                    width: 1,
                                    Kd: o[K].Kd
                                };
                                s(N, M)
                            }
                        }
                    }
                    var O = e.length;
                    for (var K = 0; K < O; K++) {
                        var P = e[K];
                        var Q;
                        if (P) {
                            P = u(P);
                            if (x(P, o[K])) continue;
                            if (!v) {
                                var R = w(o[K]);
                                if (R) {
                                    a += "ib.transform(" + R.join() + ");"
                                }
                                Q = R && L(R) || null
                            }
                            if (!v || B == 0 && K == 0) {
                                a += "ib.beginPath();"
                            }
                            var S = P.length;
                            for (var T = 0; T < S; T++) {
                                var U = P[T];
                                if (U) {
                                    var V = t(U[0], Q);
                                    a += "ib.moveTo(" + V.oj / 20 + "," + V.rj / 20 + ");";
                                    var W = U.length;
                                    for (var X = 0; X < U.length; X++) {
                                        var Y = t(U[X], Q);
                                        if (Y.he != null) {
                                            a += "ib.quadraticCurveTo(" + Y.he / 20 + "," + Y.ke / 20 + "," + Y.pj / 20 + "," + Y.sj / 20 + ");"
                                        } else {
                                            a += "ib.lineTo(" + Y.pj / 20 + "," + Y.sj / 20 + ");"
                                        }
                                    }
                                }
                            }
                            if (v) {
                                if (B == b.length - 1 && K == e.length - 1) {
                                    a += "ib.clip();";
                                    a += "if(ib.globalCompositeOperation!='source-over'){";
                                    a += "ib.save();ib.setTransform(1,0,0,1,0,0);ib.globalCompositeOperation='source-over';";
                                    a += "ib.globalAlpha=1;ib.clearRect(0,0,ib.canvas.width+1,ib.canvas.height);";
                                    a += "ib.drawImage(copiedCanvas,0,0);ib.restore();}"
                                }
                            } else {
                                a += "ib.fill();";
                                if (Q) {
                                    a += "ib.transform(" + Q.join() + ");"
                                }
                            }
                        }
                    }
                    if (!v) {
                        var Z = d.length;
                        for (var K = 0; K < Z; K++) {
                            var M = d[K];
                            M && s(n[K], M)
                        }
                    }
                }
            }
        }();
        var e = function(b, c, e, f) {
            if (c.Mg) {
                a += "ib.transform(" + c.Mg.join() + ");"
            }
            var g = c.Bh;
            var h, j = 0,
                k = 0,
                l, m;
            var n = g.length;
            for (var o = 0; o < n; o++) {
                var p = g[o];
                if (p.Ze != null) {
                    h = f[p.Ze]
                }
                if (p.Kd != null) {
                    m = p.Kd
                }
                if (p.x != null) {
                    j = p.x
                }
                if (p.y != null) {
                    k = p.y
                }
                if (p.height != null) {
                    l = p.height
                }
                var q = p.xf.length;
                for (var r = 0; r < q; r++) {
                    var s = p.xf[r];
                    var t = l / 1024;
                    a += "ib.transform(1,0,0,1," + j / 20 + "," + k / 20 + ");";
                    a += "ib.transform(" + t + ",0,0," + t + ",0,0);";
                    d([{
                        Kd: m,
                        aj: i.zb
                    }], null, h.gi[s.Mf], e);
                    a += "ib.transform(" + 1 / t + ",0,0," + 1 / t + ",0,0);";
                    a += "ib.transform(1,0,0,1," + -j / 20 + "," + -k / 20 + ");";
                    j += s.Kc
                }
            }
            if (c.Mg) {
                a += "ib.transform(" + L(c.Mg).join() + ");"
            }
        };
        var f = function(c, d, e, f) {
            if (d.ej) {
                var g = d.dd[0] / 20 + 2;
                var h = d.dd[1] / 20 - 2;
                var i = d.dd[2] / 20 + 2;
                var j = d.dd[3] / 20 - 2;
                var k = f[d.Ze];
                var l = d.height / 1024;
                var m = (h - g) / l * 20;
                a += "var font=mb[pb.Ze];";
                a += "var glyphInfo=makeGlyphInfo(qb," + m + "," + g + "," + h + "," + i + "," + j + ",font," + l + ",pb);";
                a += "var J = glyphInfo.length;";
                a += "for (var line = 0; line < J; line++) {";
                a += "var align = glyphInfo[line].align;";
                a += "var indices = glyphInfo[line].indices;";
                a += "ib.save();";
                a += "ib.transform(1,0,0,1," + g + "," + (i + k.Xe * l / 20) + ");";
                a += "ib.transform(" + l + ",0,0," + l + ",0,0);";
                a += "ib.transform(1,0,0,1,align,0);";
                a += "for(var l = 0; l < indices.length; l++) {";
                a += "var h = indices[l];";
                a += "var clippingState = " + (e ? "{begin: l == 0 && line == 0, end: l == indices.length - 1}" : "null") + ";";
                a += "eval(renderFont(/*ib*/null,font,h,pb.Kd,clippingState,/*rb*/null,sb));";
                a += "ib.transform(1,0,0,1,font.We[h]/20.0,0);";
                a += "}";
                a += "ib.restore();";
                a += "ib.transform(1,0,0,1,0," + (k.Xe + k.Ye) * l / 20 + ");";
                a += "}";
                a += "ib.transform(1,0,0,1,0," + -(k.Xe + k.Ye) * l / 20 + "*line);"
            } else {
                var g = (d.dd[0] + d.wg) / 20;
                var h = (d.dd[1] - d.Oh) / 20;
                var i = d.dd[2] / 20;
                var j = d.dd[3] / 20;
                a += "ib.beginPath();";
                a += "ib.moveTo(" + g + "," + i + ");";
                a += "ib.lineTo(" + g + "," + j + ");";
                a += "ib.lineTo(" + h + "," + j + ");";
                a += "ib.lineTo(" + h + "," + i + ");";
                a += "ib.closePath();";
                var n = d.height / 20;
                var o = (d.height + d.vg) / 20;
                var p = d.mj && d.multiline ? Math.ceil((h - g) / n * 2) : 0;
                if (navigator.userAgent.indexOf("SonySOL24") != -1) {
                    n -= 2;
                    if (n >= 28) n = 28
                }
                a += "ib.font = 'bold " + n + "px Arial';";
                a += "ib.fillStyle=kb(lb," + d.Kd + ");";
                a += "ib.textBaseline='top';";
                var q = 0,
                    r = 0;
                switch (d.align) {
                    case 1:
                        a += "ib.textAlign='end';";
                        q = h - 4;
                        r = i + 2;
                        break;
                    case 2:
                        a += "ib.textAlign='center';";
                        q = (g + h) / 2 + 2;
                        r = i + 2;
                        break;
                    case 3:
                    default:
                        a += "ib.textAlign='start';";
                        q = g + 2;
                        r = i + 2;
                        break
                }
                if (b) {
                    a += "ib.textAlign='start';";
                    a += "var styles_=[{'_g':0}],offsetDiff=0,textProp='te'+'xt',colorProp='co'+'lor';";
                    a += "qb=qb.replace(/(?:([\\r\\n]+)|\\{(\\{.*?\\})\\})/g,function(match_,crlf,tb,c){";
                    a += "if(crlf){offsetDiff-=match_.length;return match_;}";
                    a += "var data_=JSON.parse(tb);var qb=data_[textProp]||'';var textLength=qb.length;var actualOffset=c+offsetDiff;";
                    a += "styles_.push({'_g':actualOffset,'Kd':data_[colorProp]});styles_.push({'_g':actualOffset+textLength});";
                    a += "offsetDiff-=match_.length-textLength;return qb;});";
                    a += "var startPos=0,c=0,defaultColor=kb(lb," + d.Kd + "),style_=styles_[0],nextStyle=styles_[1],j=0,drawString,endPos,offsetWidth_,partialString;"
                }
                a += "var ub = vb(qb," + p + ");";
                a += "var J = ub.length;";
                a += "for(var i = 0, y = " + r + "; i < J; i++, y+=" + o + ") {";
                if (b) {
                    a += "drawString=ub[i];endPos=drawString.length+c;offsetWidth_=0;";
                    switch (d.align) {
                        case 1:
                            a += "offsetWidth_-=ib.measureText(drawString).width;";
                            break;
                        case 2:
                            a += "offsetWidth_-=ib.measureText(drawString).width*0.5;";
                            break;
                        case 3:
                            break
                    }
                    a += "while(nextStyle&&nextStyle._g<endPos){partialString=drawString.slice(startPos,nextStyle._g-c);";
                    if (d.Ng) {
                        a += "ib.fillText(partialString," + q + "+offsetWidth_,y," + d.Ng + ");"
                    } else {
                        a += "ib.fillText(partialString," + q + "+offsetWidth_,y);"
                    }
                    a += "startPos=nextStyle._g-c;offsetWidth_+=ib.measureText(partialString).width;";
                    a += "++j;style_=styles_[j];nextStyle=styles_[j+1];ib.fillStyle=style_.Kd||defaultColor;}";
                    a += "startPos=style_._g-c;if(startPos<0){startPos=0;}";
                    if (d.Ng) {
                        a += "ib.fillText(drawString.slice(startPos)," + q + "+offsetWidth_,y," + d.Ng + ");"
                    } else {
                        a += "ib.fillText(drawString.slice(startPos)," + q + "+offsetWidth_,y);"
                    }
                    a += "c+=drawString.length;startPos=0;"
                } else {
                    if (d.Ng) {
                        a += "ib.fillText(ub[i]," + q + ",y," + d.Ng + ");"
                    } else {
                        a += "ib.fillText(ub[i]," + q + ",y);"
                    }
                }
                a += "};"
            }
        };
        return function(c, h, i, j) {
            a = "";
            b = c.ch.enableStyleText;
            switch (h.aj) {
                case g.Nb:
                case g.Ob:
                case g.Pb:
                    d(h.Qe, h.Bg, h.hi, i);
                    break;
                case g.Rb:
                case g.Sb:
                    e(c, h, i, j);
                    break;
                case g.Jb:
                    f(c, h, i, j);
                    break
            }
            a += "return true";
            return new Function("sb,ib,pb,transform,lb,qb,kb,nb,vb,jb,makeGlyphInfo,renderFont,copiedCanvas,mb", a)
        }
    }();
    var gb = function(a, b) {
        return a[b + 1] * 256 + a[b]
    };
    var hb = function(a, b) {
        var c = a[b + 1] * 256 + a[b];
        if ((128 << 8 & c) != 0) {
            c |= -1 << 16
        }
        return c
    };
    var ib = function(a, b) {
        return a[b + 3] << 24 | a[b + 2] << 16 | a[b + 1] << 8 | a[b]
    };
    var jb = function(a, b) {
        return 255 << 24 | a[b] << 16 | a[b + 1] << 8 | a[b + 2]
    };
    var kb = function(a, b) {
        return a[b + 3] << 24 | a[b] << 16 | a[b + 1] << 8 | a[b + 2]
    };
    var lb = function(a, b) {
        return a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3]
    };
    var mb = function(a, b) {
        var c = b;
        while (a[c]) {
            c++
        }
        return String.fromCharCode.apply(null, a.slice(b, c))
    };
    var nb = function(a, b, c) {
        return String.fromCharCode.apply(null, a.slice(b, b + c))
    };
    var ob = function(a, b) {
        var c = b;
        while (a[c]) {
            c++
        }
        var d = Cb(a.slice(b, c));
        return [d === null ? "" : d, c - b + 1]
    };
    var pb = function(a, b) {
        if ((a & 1 << b - 1) != 0) {
            return a - (1 << b)
        }
        return a
    };
    var qb = function(a, b) {
        return pb(a, b) / 65536
    };
    var rb = function(a, b, c) {
        return a[b + (c >> 3)] >> 7 - (c & 7) & 1
    };
    var sb = function(a, b, c, d) {
        if (!d) {
            return 0
        }
        var e = (b << 3) + c;
        var f = e + d;
        var g = e >> 3;
        var h = e & 7;
        var i = f >> 3;
        var j = f & 7;
        if (g == i) {
            return a[g] >> 8 - j & (1 << d) - 1
        } else {
            var k = a[g] & 255 >> h;
            for (var l = g + 1; l < i; l++) {
                k <<= 8;
                k |= a[l]
            }
            if (j == 0) {
                return k
            } else {
                return k << j | a[i] >> 8 - j
            }
        }
    };
    var tb = function(a, b, c) {
        var d = a[b] >> 3;
        c[0] = pb(sb(a, b, 5, d), d);
        c[1] = pb(sb(a, b, 5 + d, d), d);
        c[2] = pb(sb(a, b, 5 + d * 2, d), d);
        c[3] = pb(sb(a, b, 5 + d * 3, d), d);
        return Math.ceil((5 + d * 4) / 8)
    };
    var ub = function(a, b, c) {
        var d = rb(a, b, 0);
        var e = 1;
        var f = 0;
        if (d) {
            f = sb(a, b, e, 5);
            e += 5;
            c[0] = qb(sb(a, b, e, f), f);
            c[3] = qb(sb(a, b, e + f, f), f);
            e += f * 2
        } else {
            c[0] = 1;
            c[3] = 1
        }
        var g = rb(a, b, e);
        e++;
        if (g) {
            f = sb(a, b, e, 5);
            e += 5;
            c[1] = qb(sb(a, b, e, f), f);
            c[2] = qb(sb(a, b, e + f, f), f);
            e += f * 2
        } else {
            c[1] = 0;
            c[2] = 0
        }
        f = sb(a, b, e, 5);
        e += 5;
        c[4] = pb(sb(a, b, e, f), f) / 20;
        c[5] = pb(sb(a, b, e + f, f), f) / 20;
        e += f * 2;
        return Math.ceil(e / 8)
    };
    var vb = function(a, b, c, d) {
        var e = rb(a, b, 0);
        var f = rb(a, b, 1);
        var g = sb(a, b, 2, 4);
        var h = 6;
        if (f) {
            if (d) {
                var i;
                c[0] = (i = pb(sb(a, b, h, g), g)) == 256 ? i : (i / d | 0) * d;
                h += g;
                c[1] = (i = pb(sb(a, b, h, g), g)) == 256 ? i : (i / d | 0) * d;
                h += g;
                c[2] = (i = pb(sb(a, b, h, g), g)) == 256 ? i : (i / d | 0) * d;
                h += g
            } else {
                c[0] = pb(sb(a, b, h, g), g);
                h += g;
                c[1] = pb(sb(a, b, h, g), g);
                h += g;
                c[2] = pb(sb(a, b, h, g), g);
                h += g
            }
            c[3] = 256;
            h += g
        } else {
            c[0] = 256;
            c[1] = 256;
            c[2] = 256;
            c[3] = 256
        }
        if (e) {
            c[4] = pb(sb(a, b, h, g), g);
            h += g;
            c[5] = pb(sb(a, b, h, g), g);
            h += g;
            c[6] = pb(sb(a, b, h, g), g);
            h += g;
            c[7] = 0;
            h += g
        } else {
            c[4] = 0;
            c[5] = 0;
            c[6] = 0;
            c[7] = 0
        }
        return Math.ceil(h / 8)
    };
    var wb = function(a, b, c, d) {
        var e = a[b];
        var f = e & 128;
        var g = e & 64;
        var h = sb(a, b, 2, 4);
        var i = 6;
        if (g) {
            if (d) {
                var j;
                c[0] = (j = pb(sb(a, b, i, h), h)) == 256 ? j : (j / d | 0) * d;
                i += h;
                c[1] = (j = pb(sb(a, b, i, h), h)) == 256 ? j : (j / d | 0) * d;
                i += h;
                c[2] = (j = pb(sb(a, b, i, h), h)) == 256 ? j : (j / d | 0) * d;
                i += h;
                c[3] = (j = pb(sb(a, b, i, h), h)) == 256 ? j : (j / d | 0) * d;
                i += h
            } else {
                c[0] = pb(sb(a, b, i, h), h);
                i += h;
                c[1] = pb(sb(a, b, i, h), h);
                i += h;
                c[2] = pb(sb(a, b, i, h), h);
                i += h;
                c[3] = pb(sb(a, b, i, h), h);
                i += h
            }
        } else {
            c[0] = 256;
            c[1] = 256;
            c[2] = 256;
            c[3] = 256
        }
        if (f) {
            c[4] = pb(sb(a, b, i, h), h);
            i += h;
            c[5] = pb(sb(a, b, i, h), h);
            i += h;
            c[6] = pb(sb(a, b, i, h), h);
            i += h;
            c[7] = pb(sb(a, b, i, h), h);
            i += h
        } else {
            c[4] = 0;
            c[5] = 0;
            c[6] = 0;
            c[7] = 0
        }
        return Math.ceil(i / 8)
    };
    var xb = function(a, b) {
        var c = ib(a, b);
        var d = c >> 31 & 1;
        var e = c >> 23 & 255;
        var f = c & 8388607;
        if (e == 255) {
            if (f == 0) {
                return d == 0 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY
            } else {
                return Number.NaN
            }
        } else if (e == 0 && f == 0) {
            return 0
        }
        return (d == 0 ? 1 : -1) * (f / Math.pow(2, 23) + 1) * Math.pow(2, e - 127)
    };
    var yb = function(a, b) {
        var c = ib(a, b);
        var d = ib(a, b + 4);
        var e = c >>> 31 & 1;
        var f = c >>> 20 & 2047;
        var g = c & 1048575;
        var h = d;
        return (e == 0 ? 1 : -1) * (g / Math.pow(2, 20) + h / Math.pow(2, 52) + 1) * Math.pow(2, f - 1023)
    };
    var zb = function(a, b, c, d) {
        var e = b;
        d.pi = sb(a, b, 0, 2);
        d.Uf = sb(a, b, 2, 2);
        var f = sb(a, b, 4, 4);
        e++;
        var g = [];
        for (var h = 0; h < f; h++) {
            var i = a[e];
            e++;
            if (c == 3) {
                var j = kb(a, e);
                e += 4
            } else {
                var j = jb(a, e);
                e += 3
            }
            g.push({
                Ah: i,
                Kd: j
            })
        }
        d.Bh = g;
        return e - b
    };
    var Ab = function(a, b, c, d) {
        if (!d) {
            a[b] = c();
            return
        }
        a.__defineGetter__(b, function() {
            delete this[b];
            return this[b] = c()
        })
    };
    var Bb = function(a, b, c, d) {
        if (!d) {
            var e = b();
            for (var f in e) {
                a[f] = e[f]
            }
            return
        }
        var g = c.length;
        for (var h = 0; h < g; h++) {
            a.__defineGetter__(c[h], function(a) {
                return function() {
                    var c = b();
                    for (var d in c) {
                        delete this[d];
                        this[d] = c[d]
                    }
                    return c[a]
                }
            }(c[h]))
        }
    };
    var Cb = function(a) {
        var b = a.map(function(a, b, c) {
            var d = a.toString(16).toUpperCase();
            if (d.length == 1) {
                return "%0" + d
            }
            return "%" + d
        });
        return Db(b.join(""))
    };
    var Db = function(a) {
        return a.replace(new RegExp("%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])", "ig"), function(a) {
            var b = parseInt(a.substring(1, 3), 16),
                c = a.length;
            return 3 == c ? String.fromCharCode(b < 160 ? b : b + 65216) : Eb.charAt((b < 160 ? b - 129 : b - 193) * 188 + (4 == c ? a.charCodeAt(3) - 64 : (b = parseInt(a.substring(4), 16)) < 127 ? b - 64 : b - 65))
        })
    };
    var Eb = function() {
        var a = '0  0 !0 "H ,H .2H!*H!+H!H/ !0a0z  +$H$   *(H#.H<H#/0/-0/.0]0).0 #p--0V0 &0 \'0/," O" ! H H/#,H%:"FH%," [" F" !e !M !," !-H (H )0!$0OH#+H#-H%+H%-0 (0 )0 *0 +0 ,0 -0 .0 /0! 0!!H +H -  +!  -c /\'H!-"[ H!,H!:"="[ny:"#$[$"[$   + " #~ ##y #H6H|H;H9HVH #H &H *H"   *\'[ &[VF,+F,/F,:%,\'F`F*!F* F+#F+"F+-F+," #+0!"yMyKy\\yh0!#732~ e" +~D~(n"e~o~"*~")7~"n~(H:y-"y-$~  ~ #732~" ~^"#!~" ~" n[!"F~[*"[+"y*~#-"y-~Y~"+~",432y"+" 0"=/"=-"=*" " " y  k4F./7432H! H!!H!"H!#H!$HOHUH!\'H!(H!)432HyH~H"#H"$HFH[H"\'H"(H")H"*H"+H",H"-H".H"H/0H#!H#"H##H#$HYHZH#\'H#(H#)H#*43H$!H$"H$#H$$HWHSH$\'H$(H$)H$*H$+H$,H$-HpH$Hb H%!H%"H%#H%$H%%H%&H%\'H%(H%)H%*40$!0$"0$#0$$0W0S0$\'0$(0$)0$*0$+0$,0$-0p0P0% 0%!0%"0%#0%$0%%0%&0%\'0%(0%)0%*0%+0%,0%-0%.0%/0& 0&!0&"0&#0&$0J0=0&\'0&(0&)0&*0&+0&,0&-0&.0&/0c0w0n0q0\'$0>0@0R0\'(0\')0d0r0l0_0\'.0\'/0f0v0e0o0u0?0D0(\'0L0()0G0x0m0}0(.0(/0K0\\0M0h7320*!0*"0*#0*$0^0i0*\'0*(0*)0**0*+0*,0*-0*.0*/0+ 0+!0+"0+#0+$0Q0k0+\'0+(0+)0+*0++0+,0+-0+.0+/0, 0,!0,"0,#0,$0T0`0,\'0,(0,)0,*0,+0,,0,-0,.0,/0- 0-!0-"0-#0-$0g0j0-\'0-(0-)0-*0-+0-,0--0-.0-/0;090:0<0806050B0.(0.)0.*0.+0.,0.-0..0./0/ 0/!0/"0/#0/$0b0X7 #\\ #M #)0#)$ #C #A #E #N #)K#s #a #z #] #);#)/ #*  #*! #*0#*$ #^ #i #*c#*f#*)7 #+! #+" #+0#+$ #Q #k #+c#+f#+K#+* #++ #+, #+- #+;#+/ #,  #,! #,0#,$ #T #` #,c#,f#,){43|! |!!|!"|!0$!$|O| !|U|!c$!f$!K$!*|!+|!,|!-|!;$!/|" |y|~|"0$"$|F|[|"c$"f$"K$"*|"+|",|"-|";$"/7432|0|#!|#"|#0$#$|Y W!|Z|#c$#f$#K$#*|#+|#,|#-|#;$#/|$ |$!|$"|$0$$$|W|S|$c$$f$$K$$*|$+|$,|$-|$;$P742F  F "F ,F! F!(F!$F!,F",F"$F#$F#,F !F #F /F!#F!+F!\'F"#F##F"+F#+F$+F" F"/F"(F#\'F#/F!-F0FFF#(F$"{{{{{{{{{{{{{I43"S "S!"S~S#"S$"$J"$="SnSeSMS*"S+"S,"S-"S:S/"$c"$w"$n"$q"U "U!"U~U#"U$yJy="UnUeU)2##$h#!$##~##$-##!o#"q0###Z#Y!#Yq0-##[##"###"+##$*###+##z##]##)<#(<#(/##,$##*!7##r0!-0!/yU##,-yy#"*$#"^#"i#"*q"*o"#!#"#"#"#h#\'<#_##l"F~[!~"+~":y!"y*~^~" "y/~+/~Y~"M~*{{{{{I743p)T%!J* #A#b$, &!!k#"?)XK~u>o!,\'^ & *i#9&:%J.-u=eiab&()Yn@%*U"\'O+)Q] DrN/$_&"_+.a(5"Ul)/L+>+(C.Q&0)=)@u(C,\'E(j\'Pp6P *P$-P]%|C&/Fh>]W* O, A -X! X!c=!ZK%c+*>P>c\')1_*-_./f,#u .(D#x "K%%K\'^##+pCp^%_/f+"K,!\'(./$;V(/U.*"K#(d#"o"L"xz"b!$O#\'V$+g$9%&;%)1%/ON/[-.+f8?"-)="AcA* E1%$ Q#/Y+(R ,/\'1-(/,"A.?Z/]%,d+*$9!\'(hv/`:J&!?% S+!-?!*z#Q)6%#*A-=\'$-,C(b&$"p\\K$+A/"oP)KT#9%%+J+0%/w=" =/ZfS,#D,/Z-"EW+@,(dpN#$e/!(?+G& M.j-+">*+@,*))T& ix !}GC+[N6#*g!D%wF(0%)$W++W./= "D#*A#/S,+X/!$c(B!!$\'OE!gq#/\';!e@e-!?EK& )F+]!QDA%+`T*>F%!/CM6A%%/(V/-`"+,J/i*"i+"@++$qx\'/,!(C&]",] .).,W,*U,Ao\'Q! W,$k!kv,=(@\'[!$6)$H^#\'D &A:E*PE/#$;Q#Up.8b%P#-P*!P\'Y"*V#.b& CKb*,O++J+9\']!=(@\')`r=+$`,+#c&+q,"\'N-\'aB*#,r(\'e+!e-+(0$oRo./o-#(\'=G+F&"N,*L/5KpE!.DGP,W,.Dy!\'F)>#+v6e+-D/.m, AT)\\#)]%p,+P!*()<%&-6u^m^.1%/.k "i )S &[!- &y["- J#)a$!==&x &-Rcc>$,@D_>e^(\'/)CxA(.m]%!/O"+6\\J$+Y++Y-!=UDN[-*/\'L-u,+(?\'Gnh*\'s+Dj,)s(D-CdZ\'HD,.M 6"(Y&(>$ W.-Z"9&$+Ao`oD+++qn\'x*d&+()s(]"(j+(/ #K.-C*#A)$)@C+=%,+ZE-N$-N$5#ar" &*"k*\'X(kz jbb"\'F%]& c&".`-#k;@.-!(W+(\\ (/$$$9$z#C#/=\\k*#*E(Se^O,d,#u+"\\-,h(TJ+]"De"(0%u#!l^%" L"T\'$5$B8/(Y!*V+-F" ^"-?".>-1%%)^e^)5%+(T+)?+-QBFBA *Z!!XUZ!+5#-+J&[_U?Z(/i+#5QZT@/"[/)@/W\'$+ >!(@<R +dHr*!ly_.E/Z\'H f]e=o).(a#G,,m*+Ku)W!ChC\\C*")=%E-#)MLyu<?$"Q,+?-,,q*)@$,R#T,*E/.+} +A,!N!!)?$)?(P !P 6#\'O%)T=?\'/^)$>+ C+,W,K%;TB6/,`#.5q*J-@%:&wXmkmS^b.0&+T&,!@,_>\'/\')$?k#d  _ V1-(N/G!L,+$}R(.,,(/!-N:s .a#,p(V _%! V))Y+)`~X"f&p`+#*n* >\\\')$RtN\'1G+,xc&#*,o,*E*V$ C$ Y%*k?S^(Gc\'e@\'>).,g#\'W+*"v!*D% K &$9u8%p,\'P!O#,^$#?+*6/!Z FJ%Uqj,$[,\'[,<c\'(\'$ #d@d*B+ (_!*l/B-=JB\'FQ#+Q,W%-.D"-[";&#!A: D%*G#!}--M/D/ !\')i)Q*p*(p*+p*,PaP*V -O!$R*/J!\'O!/JYW#"O#\'b#.Q%*TLY,9%/#>/$i "XV & &j#!/J%A*$k,,!n,"n.-R./f/L!Ve (?pK/\'h9EH)C\')^*p/V!-g,"-=(UAg,$ =/[)>q(A? l(O T%"8%\'$>-/.h"=%*S+"Z+#-\'$#$\'N!\'a-r$+_,*e+N#,,L\'/(C/x#N/-!\\-O$!/Mf$6g #J#6%##*n-R#AR.N"5(.*/))`)z()]F!\'@!!*D%6%+ d\'^ @%+-#K$\'A?$<[*-+\\.>TO,$D#Nd)X,hE\'$(X!d**wGALl([vRB &?!)ZT"/F$!+?*+G!#\'t$(.,-K9%#=LL\')$!P,F +6yO!$W%%Yn-q.^\'(QCOXF/(S >&!\'=U@!*A#+[$#*J&,=&Xu[9#>=d#-l1_$,_)E8+\'X+(0.o$*D,-G (G&#x=(./-N!*](/e+L/,.a.?"(@yX$(Z/, A)AuO )U+" &,d&b$d\'$_% L$ G"Zc(p/J #C "J J%!\'T"#?[Y%*>cb(V%*,T./i!+[!/D"/Z#\'[\\`*"E"_n*,q"Bv$\'D/_\'Ec,f*NN+x!N,:(.-"K&#h>Ad)?%s!#)B?!$Y#)b#+YBQ/"=9k.Kquq/B-$#e#\'G  GtA%|86  Q#8%$\'T&/^]OkW-/O.*Q/"@"#D%W&dX6&n- l,*L+$f*!f9o/ DpG(\'}.(M#\'A,\')D\')/!#p)$pMP g#$?$$C$#6*"b/(TtU )XG@*(BW*\'L!G).G*$xR\\K$6.a,)p*$PlP*b !C !J!$CUT")b"+C"/6#)^#<%$!O$ 6%(C>OdFEgQWQg+(b-6%-.>-/>B?.(Y.)^.+>/!DV[!$`")@"-D#*@%#+= "=$#=/S@jeU()@zkTX-"ijA:X.]>#"@(RD,d#/l;_V_!(_%B-+!fOf #f*/f+!(O$v(/e"*(Y"L$,(D!x!+m*"m/,K,*\\>Mw\'o/M/,C*$A$-NV))))s-(]#QFQ"*Q#/>$ ?(g&"/@/;(`*(b/).+C!$Q"#Q$$^&/-d$ \\R]& ).-"q$S/ N!c>!OHj -*s*(n-+(1`k$N #p,^&/V@Wx6^i &D!,\'= /= =oAxU-/\'>g_#*([.a$"paP%V#,C% Jjb-5%-.5\'1&,)E$q\'f"G% hAL-b>V.*@#"Q Q% *T!(jcV$,C?6aQ++VXA"$j#*Uoj+\'Z;(c_\\,R"f\'(O\'([\'A-J(B-0o-,L,!(/ )A)Q[WnD> \'X*m*O!+W\'$"A"^oi)Gf+W$+F- 6\'/,\'(C]tP%T"$^$(k$#5&"DwS\'bdu\'Q&_~h"X?,a*-r#C#!C!G%"#>+-X"/=$*5$5&nj++*?*)A-!@Ka-=#$,)0&a*+@+/=%"$;C )?#,F,\'U .D$MJ&Z?/w5q,*>"#rE\'.eDCxom-+\\\'()\\ J*,=*k+xpgp-$P#*P\'b"#^#/?#/F%<%&-Q(.QzQzC)H%QV,$g;F:Q/-@ !j0@%"bQ,J*/J+-J.D\']&k[+\'k, /qW\')$Ez!l/(_!E-"+f*"v "v/#()AG%.G&)G=GmG..m,\'m-,A,,N/`k/pxP#,P(gOVQ>+/i!$D0!=$[+"U.,k,++n#B$+->-$\'m!\'h*f ,f##v.*u)$(/)5T )Bb/ /(Q(]"+dt(./?+}A.+$;Y#/O\'/>hO*,C+*S (ABX/ &>+.m.^+)/?  r;% \'[\'/$e]%`!?$*\'9.e 6!)C, SZL-=Jz\'UBhB-!\'fVx!-(.,*K&.D,\'K*^ !b"/^,#i>#clnY\\$,\\,(h"+e6%+,F/#U /)$<Q#-J+(D"$kqU+Gn.E#;d".(U+}*#)O"))A%!!F#->S^+H&#(D*#E-*,E V&-^#,6S?+)>,#O--8/.5! U"/5-#"\'z \'z+_$"\'8-\'/-"v.-e!/uKLS(E"xK(B$(/"/K#!\\$+)U,A`\\zp, PP%!W%#$O/)Z" 5_S,$U;+\'Z#\':&\\,-M(Y#-W\\C++X--!\'C-\':B,)Q(\'B!)b!t(?#(H P,^,1=FR*,d<e!,))H%!,Jt*J.`AX+(A-/Z.)=X$@/B-!W-9K>\\(\'N J!5%yj"$ =\\=-A9^.k_-"\'/n=/(?*/?/\'G/?"*C#-CEY.(b/K&V%M8)=W +>!!b"-g#"V#$>#.Tp?%$J%#O&!>A?a6*#T+Q%, J, b,!O,!^.(W.G%.;%/c&"\'X"(S"-k#(`#R= \'= ,="-=\'=R5G[*!X*Y&,+`-(D;A6(w#,w[\'U\'>,Rc!\'?-\'K!\'A%\')/ d;r!!l*R-#N Aojux?$N?-L/#G!/G#,G%$Gq(`!m-.\\*$M=h\'.)$!(AzEN$;*$;u986>!)>"\'Vl6oWmT+"F<D T&P5@U>=-$$nk>qd&#u+L+n\\+(h"V&#O\'/$N/5".jKj+Aw.-\'6$fRen()5N-/(>%(1O,#+P#(P9$1%%% >*"V+-g+.C/,Z!$5#"/J+ =$k(.5)a&-\'D-/!>##>+Ew/\'CB)5_##v<e*/?**(s*G#*(.*+(/aK#"\\--E \'p+*p,O" Y(>%(.T, +>!^,#-vpG *(/T)=#)@-rFG,/N ()UF&/Y#*(K!>$#C\'(F:%&#*D,#$cG\'@!lx\'/;LcK$")O$h! h!(A(/\'W.s,W- >jA%c&d"}*(A-kZ5\'$A\\N#TN!\'A, L/5/(S$\'^+/u9&c",>%-="b!,W"#J":%]Y/(U "@y J#/J\'$=!/=\'S(/[v=kZ;%nn>!/@-+l+.(VJ(/ L/-(E/G* GhG,+K!-\\M)>")>A%(E* .v &A+Q:j -`y*J^=!S\'KR/#d$-l$-\'<.v *m*,(j$}9(6/\'GC" @"-A#^&$$["NG"-dor, G*,A.*_@e ,(\'$)p-C!$?#$YZV+*Y, F,!J--j~="$@$+ &vZoS,,A-W&-!@_Zb,w$B!_J,+d\'/r*-_-*\'8*\'tL!de!+e#)?iG&.m,.}bK\'(KRM*-M\\Coa*6"$g%(S/#(w#JU(\')?\'6%v+#l,6&$T?O,*D#**=/5&/jC*n-)>(/>(BKBC&\']/lE_" _$$D \'G#$A#+K&!)/"V .>">%#,T#:%  C%*^(.6)Pn#g+(Q`W#!j <& /ZY`#(Z##X#+k$,-J.)=/C-<&zj)/j/Ow6p()>.)@/(dhl-/_,/_zf&!o$NYLS,u+,?1LT}cK !K&-hEE!,s!F ,b()@!(.v-#?Y} (K" P,Y \'W"$>#\'Z &X#$A>X:,}+#K!/P->T.m,*J,/_)^Y"LA%!\'=#,YQ?kQ, i$ j>!K%,p-J\\^Mi,cG%O%#6(O%)^& / &FZl!eY&C%A$ )z$s"(P%YfJ+/.f!V,+O:b/?& " &!$k"#$=H&,/ &.-.f,.v\'/e-$Lxm+(K  K".AG).-+a-+p<%#/VMR+",\\}N$,]/A.--c">YY%$W+?&FD")5"-Z,*[/./\'$~G!\')$#D/,!G/.o#?!BD/?#.^#.)PSK%$(1VA*v#O-/-d.*(1X}*m#R"/(z$D*#-G+|<CY?& J\'=&"T&#*"J5&+$5-9&6+c*-R.-d./r**_++f#-f`D,+GC)YQ&<%m>/#5%*-=)=*f&+Q>#\'G,> "$R6%\'0%/!k J=d&` >/$d!*\'X.v/$(w(KW)a#r,)>%,d/EQ!u,$K! \').E*Mo#J*9R$|:-p/F+)C/;&"+-=#`\'/U,.L=+LRG#+\\pM/#)] &*!R [q"*eB(W\'m*/$;O!$J!,Q%(Q+b%9J<Y.(O/!W/Y%XQ1S!/[#!!=*[wjXBF">#*R#*f\'$v#N!\'L\'@G+/G-,}?}/#MsCRN "z6%"T&Y\'@/S\'O&,Lq,-m,#h*.A\'Z-F%()`K5z,(H-hs>-+K!^?if[#+S)1P$Z/"`_L1+?[_+$)YShX/\'V@^(/>+",_",n"^$ *\\<]+$p*-P$6VT >%"$#m)6$$?eW+)^9g.C%.*g./>/!X (`"Q&##i#- &GX,$ \'LRNB* +_;e$\'G "G5(8$K!#K+(\\"-\\-()/ 5,6&WD$:J>&./$@ur!+K&)h-U.+^PF1A$*$(/$-(/.-M$W!\'?DQMCT%%.)@-1\'.(/>!,m+,(.:)?+c+)P!j++X1!>0A1%!$6$!V(Y%?>sT`V/MJ)@>`:!@ro-/m.-K!$K/-h$-\'(F\'o^"*^.*JwbES !F !FO^!*T!,g" V%!V?W??C>+C%,/J-(k +`"C&$"jRUuZx`}/@-@--D5X-ac&/w,?b#>-(\'ER+$EQ$\'Q"lj_\'O"0(S#?&)?8G .x|mS(;/K #K /)$!)A@N"-s0C-? ,g"g%$ TfF, 5!*@$)5-!Br#d6f/$u|K%#M?%,;] >##b/)>1Z-zn\'E@#\'a/r8&+-"n.,G*jfZiO!/(d(UhW,$*zXe.Q+T\\$E !6&\'?`X ,@%=&,m(T*K$!N!YW!=,\'M g)$(K*Y!?$8g!.*?)N+ BVD#dh$kA")a$\';$>\'>Y@A (.-/A<&T-p(T,#T/! (/.C0"m-!f()D\'C.HJ6$BY!J%NF,#/E.8.1%)G%/,-G(j/9\'a \'AF+Buwq"+w+OBWH%&#\'k$sw,#lN$8Y./,$8Q_T&*[ *A/,#_ -f/-v##v+/(1"()ED*W-/S"G&$*-(N@R@,:&-#B$Z\'oW*S\'/>e*-)s,$HY.,Z"-j#MJ%@@/@,#n$,f,,f+*(/")\\$g  g\'/C*M&(?&E#\'U$n/-m+>(/"m;)=*K!NR/\')8RBu")P"b"J%Yi",jlX,,*@_r)$lCeZ?u(/.+=-j/" n &\'9+o*+)z!).*J!/-r+!\'(nr+L (R+$D*.?5!fm>%!>&VU+M&[.m@d\\Es.*P! \'/c&"zrPC^z.C&\'^?)D8A+,P#W~W#$^#,g#-Q;=$",J)URX,#5,$B"$(n*/q.->%$\'8!e",?.N,*E+,$\\`\'U)N!"N.X##-=&)>&*@8\'} ?$#D.6#"^YO$"JNY.(>/\'` +["$A"\'A"*+JK&+-S,,,>+"@*B(\\\'](_,+\'/Rf^(G+G+N,++K\'/)>.N-k* +l#? )C,#6t5\'(@+-(\'$YR E/(.)/#kl*d!>##)>xs.g/=v]o/!f)?/#T/T>&"rSK#`D>).Q*a_! @\'.x",$H%%Xi*!A,#@/ "\'$:\'ALD(G%%m\'C.-X#,/>T\']"e-\'h"(M/"uzD.-z"g$,OX,J(`g,cOm*\'m-#N#+JP\'P&$;-p-?\';%MQ*=%+,T!*?;Y.)` !="\'=%\'@%*\'=&5jB"Zr[(O vse)NQ,m* m5}\'$A!,A$$P*5$*k+=e!.(S!?&*K.?, UC#)GL$d?%\'P b[btC8%&c-\'N/v\'NK\'(N=-b%/!@F%&,+(p,/\'[)a)F" J$#Q&\'WxZ!*S[B!!^AB,(E,-B-!+A/ J(\'(V89)P>%!>%uV5YBY/ il$$:&?#-C()A%+lqN O 1%m!@%&\'G>"FR^?!!rD% P%KE"$R+,R-.L1*(/-$K$-$1b",C*"C/ !E*-P--e!\'M.^cZY%&k)>"+L-,(/!$d$F"-b()ZO%&" *=*5+,-l#/o.C "#$H?0%%$$JoO)$C+]%,/V,.b-"C.)="+UZ@%#5%+Ack,g&,9c/Eo"\':+f-.e+#u ,(p,(c"(\\"G"*m$*KiM-"N/-z/#]&,$8/p*O (gFJ\'$^s?<g/-?/-A"#/=+Swk_ &}F!M_yf**v*L+  mmm+/M\'.A#F$" N"T#!> g%YTGD$+[q$\'[R\'=dS\\5%",Z,*U+D%fV8TCSn,\'/1%!9@,=SE(.()Q$).+QlQa)="@\')i+,6pA]C6%v)`\'Ca*i\'/.)T[?-piP<%#,D"+Ank,*+(/,$P*-\'5-).+/$;@U[.f&/"+?!Y$\'Zn*aW%-/#rC%,*T+`(w`8*u-!d!$v ?))E,(j,!!R"V"-CM"wy\'F/R-+E"\']&UKQ*\'b*!?!^%$ g$_= .@-/(H\'MNz/W).*\'Fj.T%!$jmE-+/_.,)@").+i$\'D*y(0FNWQX+-+q!+@/"_+"f!\'u)C!#[n().-)@.5@F"H)K%%,"S"#+l\'.m+V%P& k_ +C(V0!$6b!+J\\,n#*fZ\\,6/FR:%#(W/\'E-|?*,G##(.})>=\'/#?*.)WZ! A! D,+)@%"G.-(/#?%"/P%O!"^",>#,Q+^%Bj * &!([#-=cA_i5@-mqZq#\'>#!\'C LgGNK$*K\\KbA,$(\'(g)OpLP%)$;.G(N/#/N!V *gBT)A%++C.+D#-i#/i$,!=-`)$i]D- k.kw)$>"(d*/\'/Gf  u$N$,NN!xy(;*KJA_)Ki!\'5")U+#[,(Z-\'$\'/,,\'H`-, \'/?(r*L/D@%o+!N#,A/@-!+_&!u#-)U*$BO#>%g &+ S/.+?,-D"-(s>~C$ b,J&\'$5G(\'$ &\'$o>:L,/L9\\,,A:A\'?/xq(R*,+u$5#* >J%"(A-$U.z\'$ )>%ED+lMADd-,)/}$1=U5%TD%,pDp*6 -*$:O!,T+.5%)ALU-+,q!/@$"R*-d!,lB([/G-"Kl\\,/A>N!?"a_-O "Q#)D\')@-,+w- \'$##v.L/"*A*#)T\').)/\'SVuU-)E-"/)?8.8PZP(Q!+>"+O-+i !,q+"\'h,e-#M#$A+\'AXE *).E)X"=*=+\'Wy>"*#c,LmF.,A|k!K&/"#w$E,#B-/$f&/(p.K"#h"T$$"a&X*-#c(N,,"}./E#F"+W*$O.,^/ Sw@E`))Sji/ /\'["n/,r.-f !f\'.(\'$+K,6U-).h\'N$fxh#"G-J "g$mG\'Uk*m,$v @ -Ud ]/"p))pNz! G&+?,!?&DK &BB(E(O%{732%/ ,$9|9%$:*$<!$<&$<,$</$8"$6&$6(pep?(`+pGe!F/ -p(8.)8.)/p* p*"p+ p+#pkp,8.,-p,$p`p,"p-\'p-8..-p-/p/\'P )P%*P0P%+P%-P%\'P$\'P@PLP(/PNPrP&)PcP\\P&/PDPA%!!(P-$P-/P,8/-(P-+P-!P-*P- P8P6% !^ "? !W "^ F% VP!,$HJ "O "C ",$H8/.b !O  J|Y|@cYV%%VV|?V^VJ &T \'? (V )^ ?% +W +F ,C ,^ +Y ,F -J -6 6% .g <% .6 /C b%! C! O! F!!J!O%!!W!!^!"O!#^!#>!#T!#Q!#b!$VOF!$TOWU"d/?UCU^U6!(V!(F&-?!(T!(C!(b!)O!)Y!C%!A%!*W!*J!*F!*C!*^!*Q!+Y!+O!+F!+V!Q%!+g!T%!,C!-Q!;D%%%!.C!.g!/V!b%!/6" W" QyW" 6~>~^~6"#Y"#C"P%"$W"$Q"$TF6FW[^"\'W[C"\'Y"\'b"_%"(g")W")F"\'O"(?"\\(tLt>"*T"*g"+T"Q%",O",g"->"-6"<%"5N.g";%"/Y"b%"/?"/C0J0(>#?0g#!V0b#O%#!^#"Y#"b##O##Y##?#$V#$J#W$9>#$C#$g!-JY6ZCZ6\\?#\'Q#\'>#(F#A%#*V#*J#^%#*6#+V#+J#,#l!"A-C#-/=/,w.6#.6#.?#.g#/^$ O$#g$$V$"T$"g$#T$"6$#J$"C$!g$$6$(b$>%$(6Wb$\'O$\'>$\'V$)F$\'Q$(V$@%$(W$K%$D%$,>$*F$+?$^%$*T$,W$,?$*?$*Q$,F$*W$+6$+T$-?$6%$5%% b%!WPgp6pgP^$:%%#C%$V%&Y%$T%"6%%T%W%%%J%%>%#?%#Y%%g%)C%(V$*b%G%%)b%\'Q%\'6%)?%)6%*6%\'T%(Y%*C%(>%*?%-^%T%%-b%,W%-T%8%%-W&!W%/>&!J%/6%/g&!Q%/C&$6J w-b&#W&#J&#F&#?=Q=W&"b=T=^&D%&(V&G%&*V&)W&(b&^%&*6&+J&+W&,F&+T&,O&,Y&,V&,?&,6&-O&-Y&->&.6&/CcV&H%cWcCc?cQcgwYw?wJ%,>wTnJq>q?\'$6qQ\'$V\'P%@ClV\'(?@ORb\'(C\')YdVrYdWd^rVlYlJ_W_F_Yf^_J\'<%fQvCvg(\'FeODFuQ(c&+,V?Fog(\'C(?%xC()bGQx^}6xQx?G6(T%}Y}O}>}C}?(6%}T(8%}b(.b(/^(/C(1%(/T(/gKFK^\\V\\kGJ)F%MTMghFh?hB*-FC%%CV)$6C^C?AFAVA>ATACE?NO)]P%8tQsYaFzJ).?]TNg]C]^*F%*!b*!O*!T* C*!^*$ViT*$C*Y%*#JiFi^*)^*+T*+6*,Q*,F*+g*<%*->*5%*.C*-J*/^*1%+ T+ Q+!J+#F*-V+"^+#J+#6+$Y+W%+$VQOQ%%Q^QQ+J%kC+\'V+\'Y+>%+\'D%(?+\'^+(V+(Y+*J++?+,Y+,>+,C+-W+-V+8%+5%+:%+-6+6%+.Q+/V+/J+/Y,V%, >, ?, g,!Y,"V,"F,"?,#?,#C,$O,$J,$6TYTV,P%+\'O`T`85F,@%,\'C,(T,)O,)W))Q,*Q,+Q,+J,+T,+>,T%,+6,,>,-C,.C,/g,/^,.g-(T,.^- Q-O%-!>gT-!b-!Q-!O-!W-"F-!^-!C-!?-$TgF-$6-$QjT-\'Y-@%-(>-(W-(F-*F-]%-*T-*6-+g-K%-+>-+T-,C-,g--Y--F--J--Q-.Q-/F-b%;Q9^9C9O9Q<J<>8W8Y8V866>6W6b5F5W8>.>%.@%B*).+TBb.*V.,O.,F.,?.-V.,b.-J.<%.-g.-^.-Q.:%.9%..?..C..T./O./Y./V./W./?./6/ Y/ CbgbT/ Q/!O/!J/"C/"g/#?/$O/$?/$T/$6/"bbObJb>bCXOXg/\'Y/\'>/(Y/(F/\'b/G%/(?/)O/(>/)6/)C/)?tVt?tg1T/-J/1%/8%H?HO/-j +YHX "U & & !A ! & "A  5 #U !k O& "k "=  X #iVi|U &i \'@VX|i|=|j &Z|Z &S|[ &` &kVA (U (j .@ (Z )i (S a& )= )@ M& *@ (k 9& +D ;& -Z +WH & +j ,= Q& -D!$j!O&! = /= /@!  & /S /i! Z!"U 1& /U! j! 5!$@!#5!"D!"@!$i!#X!#`!"`!#S!#j!$[!$S!\'Z!\'@ODOAOiUk!\'SUX!J&!\'UOXOjOZ!>&!)A!)=!(@!*`!)S!)i!G&!)U!*k!*5!,`!,i!,A!/@!,D!,Z!,=!+i!,+\'/\'A!,j!5&!<&!/=!/i!/S!H&!/j!/`!/5"  &" D" A" j" `ySyky5~U~i~5"0&"#["#Z"$U"$5F5[ZFk[ &[D"\'`"(["(A"\'5"M&")Z")="-S"(Z")S"-@"-U"+k",X"H&",=$-S",D"-`",`",i",[",@"a&",A0`".5"/U#"@0[0D".X"b&Y &##5#$j$!`#P&#)=#(5#f&#*k#\'=#*Z#(X#(A#)X#Q&ZkZA#+5#.A#, &#,=#<&#,A#-[#/=#,S$!=$#S$ =$!Z$"=$#=%!j$!@$"D$ XS@SX$\'=$$5%"i$C&$)Z$^&$*A$(D$+`$-i$-[$T&$,@$+k$-D$,[PU$Be A$;&$9&"*`$<&p/J"`P=PSP[P*J  &P-J!D%!,JVJ"$J"#J"+J#$JYJ#@%#=%#(>$+J$D%%=%%%J$-J%D%%5%%-JnJ\'D%eJoxGJaJ)/J*+J+@%,#J,=%,!J,$J,,J-"J-+J-A%;J9J/UR"= *= #J1&R#=Y=#=&#$=!,=P=$$=$)=$!=%5J-=&$=&\'=&(=%/=&"=c=o=L=(5&()=u=N=]=,!=+)=,)=+5&+,=,$=+(=-=&-*=;=#/=5=.)=/ =b=/@cXw=w5n=n\'E#Dn5qXq=\'$UqDq@\'$=>5@ &>A@Z@S\'(AR &dAR`@i\'(`\'(kd=dU\'?&r@\'.XrS\'.`rZ\'.ArD\'8&_5_j\':&\'.5rAl5l=\'.@*)`v5u=eAu &ujo[u5xZek?ADZ(\'@(\'X()XLXGj()S(]&(a&LZ**5xA(\'S(Q&G &xiKXLj(\'5KUmiKD}DM[M=(9&K`mj}S(.@(g&h=\\[KS}@(<&)F&(/A(;&(.XMDMi\\iMZMUm=EAE@C`EDAkCSE5A5hAEShjCA)0&AUC5CjNUAia[s5] &aXzU]Za5z6+.Dzi]jakzZs@*"5))Us &))`)C&aS]5).D* [*!k)H&+ i)/A)/[).@*V&aU*!5).j*!S).k* i*![*,U*"Z*!Z*$S* `*\'[*#=*\'D*$@i[^A*=&*$D*#D*"[*K&*(j** &*(S**[**Z*ED!@*+k*,Z*,[*+D*+Z**`*-5*-U*-X**i*-i*.i*1&+VD!=*/i+![+Ua#U+!X+#D+#\'@-`+#)N.5+$@+$Z+$AQ &QAQSQkQXkU+\'D+\'A+\'X+f&+(S+(Z+(j+)D+C&+)5+*S+*i+*k+*X++[++U++Z++@++`+,=+,k+-Z+-X+.`+.k+/Z+./).+5, D,!Z,!S,!k,"S,"ZT5T%&`[`i,([,(j,)i,(U,a&,\'5`D,\'Z,M&,K&,,S,/U,-Z,+j,-@,T&,-j,*5,+U,+5,+i,-k,.X,-A,.i-!/L$j-#=-"k-#j-#D-!A-Y&-#Z-![- `jZ-)ZjSgi-\'AgA-(5-C&/8&-?&-/A9%&;i-Q&-,@-5&-+D-,=-.`--5-,`-.D--[-T&-/i--A-8&-g&-.i-.5:j55:59AB[6X<5:Z5k:kB=8j9X8Z<i85:S.H&9j<D.([.*i.)D.,A.+@.-Z.+j.*X.,S.+[.-S.g&.(X.^&.,[.)X/$U/!!c$`..`./D./5/#X./[/#U..X/#[.,`/#5/!Z./@/(=/d&/\'D/(U/f&XXbkHZXj/([/\'`bD/(5/)U/,[/=&1ZtZtUtS1A/,=ti/-X/g&/.`/-S/-DHU/.5/-+c E  kH*c!!c !c XHB !+c!i/\'$c!-c!(c!/c0c#B #"\'V!c&#c)E Mc*/c/!c*,c+(c+#c*B -/c,+c--c-E! E /-w!,w!E!J\'O%wLw=\'U"w$,\'O&\'U,w(/w1wuwCw*(w*,w-R!+E!+B!-"w,E!-$w,B!;w.,wBwbw/,w/E!Hn -n! n!+n"(n"-n",n0n#"n#+n#,n#/n$ nSn$+\'F(n\'$n\'B"envn(R"MnAn*"n*R"+E"+"n,#n`n,$n,B"-"n:n;n9n/E"/>  /q!R0*q!,qUq!-q#$q"/q"E#Fq#B#$B#P).-(\'YRZ*\'Z(qcq\'(q>qrqdq,(q+#q,B#++q, q6q.B#-B$*"\'$V\'S/\'$Fq/(\'$#"\'$#*\'W%\'$#/\'W/\'WE$$!\'W,\'SE$c\'S#\'S*\'$@\'$\'B$x\'$)B$*R$,*\'$,/\'$-$q/!\'$;\'$<\'$B\'pEpBP"\'P \'P!\'P(\'P\'>|> #>V> ,> .> ->O>!#>!.>[>",>#,>$$>$->$*>$)>%+>S>%*>&)>&$>&\'>&+>&->\'(>@>D>(\'>\'$>G>()>e>)$>s>]>^>*#>,">+#>,#>Q>+->+(>+,>+!>,->,*>-">-)><>-.>/.>H>/,@ !>/ >t>/">/#@ +@ -@ )@!/@"\'@" @y@~@"$@#$@0@#+@$\'@$(@S@%,@%(\'=!\'="\'=(\'=E=*\'=R=,@c@n@@@\'(@l@f@o@L@x@(.@A@h@))@s@+ @+$@+(@+)@+*@,"@,-@j@-"@-.@9@6@B@.*D"/@1R (R Rc$R"En$R!B\'FR[R!+R#Rq(R$R>*\'@(\'@+\'>+\'@%R\'/R\'BRE\'(B\'xR\\R* R)Br RkR+Er/R+,R+-R++R,Rl-R-R_*R-,R<R.B\'/,\'f,\'v"\'M&\'e \'M*\'(W\'LB(\'$\'(D\'(l\'(s\'L,\'G#\'(Q\'G*\'G/\'}!\'(`\'m+\'}$\'xBx,\'(T\'m*\'(.,\'(B\'}*\'(/-\'(/$\'KR\\"\'\\!\'\\EM,\'M+\')$ \'A \'CRC/\'C*\'C%\'C#\'E*\'E/\')G\')]\'s\')/$+\'s*\'sBa#\'aEa*\'zE]%\')B\').,\')9\')<d (d -d!(d!E*" d!/\'N d#!d#+d#B*#R*$#\'^R*$Ei!d&"d&))/]dcd\'E*_dLdEdCdNdAd*E*,(d+ dkdTd,$d+/Kod,R*,*d,-d,/dgd-#d-E*-*d--d9d:d5d.-d/ r "r /r *r &r##r!(r!E+!B+Yr"(rZ\'Q rdr|r$-r +r$,rWr>rJr\'$\'kR+crw\'k,\'kB+]rNr)/r}rzrsrxrMr(/\'Q-r)E+,+r,!r,,r,/r+$r`r--r.E,!!l!$r5r6\'` l  l R,!#r/#r/R,!R, -rXl"#l"R,"*l!/l#R,"+l#-l$,l$#\'T$lPl$ \'T \'T(\'T/\'`$\'T&lJ\'`,l>lolKl*$l*-l*"l*+l*!l*(l+#l+"l+!l*B,+E,+-l, lTl,"l-(l-"l-,l:a#+l./l/"l/$lXlt_ &_ "_!,_O_ *_W_$+_"B-#"_#/_Y_S_q_%&_$B-n_&(_&B-P_&#_h_(Eg+_(/___a_+*_*B-*#_Q_,R-+-_*+\'<-_*"_*/_-,_+(_)/_+ _-(_--_8_-B-1_/"_9\';%\';*\':#\':!\'9"\'<!\'9/\';E;+\':"\'8&\'5&\'<+\'<%\'<E8#\'<R<"\'<*\'5R6-\'6&\'6B6E6*\'BE5*\'5EB,\'B+\'.o_g\'B-(tBB/\'.L\'.(E.m\'.M\'.K\'.h\'.)$\'.A\'.(B.a\'.z\'/#(\'/#*\'/W\'/$,\'/$-\'/$Bb \'b!\'b%\'b$\'b(\'b/\'X \'X(\'XEXR/\'(\'/e\'/D\'/o\'/L\'/(R/m\'/)$\'/)B/]\'/s\'t#\'t/\'1"\'1EtB1&\'1L+w\'/T\'/`\'/,*\'/g\'/-$\'/9\'/5\'/.EH#\'H)N-,f &f|f +f!"f!L !N !,fyf"L #/f#+f$*fS(V"(VLV*(V/f&"f&L qfnfcf@f\'N _f\'/fufDf?fafhfsf*g!Kf*,f-+f6f-N --f,$f-*fjv N ./f/!v!+v"N!"#v"/v$+AxvSv#.(O#(O!f/,vw(U.vJv=v\'$vovLvGvfvev* vCv*$v*#(O/vhv*N!+ vQv+.v+L!+-v, v,"v+*v,N!,-v-!v-N!-L!,L!-*v-/v;vBvtv1v/.e !e "eVe \'e *e -e! eUe"N~+e#L"##e$ (FNFLF-(F*(F/([$(["([L[*([+e".eweRe\'L"\'.e}eMe*+e)/e++e*,e9e<e-/e-"e/$e/#etoh(0#e1e/N"-.(0&e-,(0N"-N#Yo#$oUo#"o#!o$ o#NY oWo"/o"+o!\'o!L#?oso**o)/o*"oAo"#o(.o(\'oGoloQoqo>o* o(N#*L#/$u!#o.+o,.o/-u #o-L$ +o,!o/\'u \'o;o/"u -u~u" o+-u#(? &o1(S-u"*u#,?%*uuuR(S+u*-(S.ue(SN$Su",(S/u\'N$Yu,*(S"u+N$+/u)/u-N$,-u++u-*u- u,!u`uju*!?yuH(P$?!\'?!(?",?!/?O?!$(P,?$ ?&#?%(?$(?$!D "?$+?%%?f?*$?L?\\?G?*(?&-?)$?a?.*?(\'?z?R?\'.?K?,)?+*?,/?+)?- ?g?--?6?-,?/)D *D!#D +?/.?tD &D~D!*D0D#/D$-$6%D%$D%/(=\'DwDhD*#D*)D**DxDmDkD*/D,$D`D+ D,)L"#D*+D-$D-.D.)D.,D-/D-+D./(w"(c&(cLc (c#D1(w!(cNc-D/Nc*(q$(q/(q\'(q+(\'F(nNw*(@ (>/(RL\'$,(\'p(R$(>\'(@L@.(>N>#(@#(@*LV(d"(\')/(\'e(d/(l+(r-(l (_ Aj(d+(l$(r#(l\'(\'`(r+(\'./(\'/"(\';L /L -(\'/.(\'X(\'/\'L .(_"L!!LULOL~LyL#!LZL#)L"\'L#+L$$L$"(?"(?N?.(D"(D+LvL\'.L).L>L_LQLnLeLELM(G.L)NG"L}(G$L+ L+/L+!L,#L,$L-$L-L})L--L/NK"L/,L/$L.L(/"(K$(K,(K*(\\#()$#(\\.()F(M*(M+()$!()$$(h+()Z(hL)$,(\\-(A (C.()=(A$(A-(A*(A/(E$(E\'(E.(N#()L()G()h())Ls!(sN)i(s,(s/(a"(a*(a-(a/(z (]*(],(]-()B()/$()/(G #GUG! G ,G!+G!-GFGZG$!G%+G%"GSG$(GlG&-G&,G&"G?GeGuG*(G*!G\\G^GiGsG*#G,$G,-G,"G-*G.+G/#GBG8G/!x!$G;G:G/\'G-.G-+x ,x \'x!*G9xUx! x!\'x" x##E*+x[x"+x#.x"L+$!x$,xPxpx$NQ&(Q+(Q*(k+(Q/(k,(k/x\'$x_xfxmx(.xMxhxAx)N+sm#*m$!m#/m$L,$,mp(T (T%(`"(`,m\'L,dmem(N,?mGm}m(.m)$mlm)Dy-m*-m**m+-m+"m+#m*.mkm,L,,!m8m<m-*m/-mtm1}|}V} *} \'} /} -}! )/p}!#m,-}!$}U(j\'(j-}w}q}v})N-,"}+.}+*},/}-*}j},,}-+},+}.*}.+}-/}<}/,(;L;N-H(9-(9.(9 (9/(8"(<%(.0(<$(8*(8\'(8N8,(6 (8L6N5$(5 (:*(5#(6%(.@(B"(B,(.v(.(\'(.?(.u(.x(.G(.h(.\\(.)$(.)N.**(.*!(.*,(.+ (.`(.+!(.+.(.T(.,L.,+(.-+(.<(./,(.1(..+(./.(/ *(/V(/O(/!"(/!N/!#(/!,(/!/(/!+(/ ,(/[(/##(/#+(/#N/W(/$"(/#.(/$,(/$N/S(/p(b\'(b,(X"(X#(X$(/z(/)/(t#(t-(t/(1\'(/-*(/6(/:(/.*(/./K(\'(H$KV(HNH*K!!KOKyK -K!.KUK +K"\'KZKYK#NH(KPK% K%!K%"K .K$)K#.K%&K%(K%.K&(K&/K@A*(KnKeK_KvKfKGK()K(/K*(K*/K+!KQK:K8&"$(K-+\\ "\\!"\\!)\\#"\\0\\$*)O&)O()U#\\J)U)\\q\\n\\x\\()\\e\\*"\\*+\\*/\\**\\Q\\+$\\+*\\, \\,!\\,)\\,+\\- \\j\\-/\\9\\-+\\/,\\b\\XM!.\\HM!$M",MOM!!)F.)F\'MWM$)M&$M$(MCM#/M$+)F MzMAMhMa)F*M,/M+)M+\'M.))0/Mth$$h".h!)h~h!*h"#h#*hYh#+)Y,)Z hl)Z.)Y&h+ h*,h*-h)$h+)hjh-\'h.(h6h-(h,#h--h- h,(h8)$!*)$!$)$!#)$ #)$ \')$! )$Z)$"+)$Y)$y)$#*)$$!)W")$$$)W+)S )S")W.)S*M"))$c)$>)$R)$_)W*)$l)$\'.)$v)$\'/CeC(\'CGC)$CACNC))C* C*(C*\'C*-C+,C++C+)C+.C,iH&C,#C,-C,,CgC-$CjC-,C9C6C:AyA"(A".A"/A$"A$,APA$+ARA%,A%.A%-A%/)=&An)=,A}ANACAEA**A*\'A+!A+"A+ A+$AkA+(A+)A,.A,+A,)A,-()$-A-,E -AgA/)E|E &E (E!#E .E!!E /EUE!)E"$E"*E0E#)E#-E#.E$$ESE$(E$"E$))>,)@ )@$E=)@?"-")@+EwE\')E?ElEvEdEDExE(/EKEzE*(EiE*#E+#E+$E,#E`E,(E,+E-,E.-)/PE/"d-/EXEbN /N ,N#(N"$NyN#\'N#-NSNPN$+)D+)D/NcNwN\'$Nq)G*)G/N+!NkN,$N,#N`N.)N.+)K#)K))\\")\\$)\\()M!)\\-)\\.)M$)M )M,)M.)h-)h.))$"))$)))W)C ))$+)C!)C"))$,)C%))E))N))^)s-)s.)a,)]/)]+)]-)]()]!)).-))..))/!))/"))1))/(s !s /sV)):s!)s"+s#\'sWs$"s$ s$#s#.)^%s$-)^+)^\')^/)i"sJ)i$)i))i+)i*s*-s+ s+,s, s,/s-!s-#s-$s-.s-/s:s<s5s./s.+s..s/$s/!s/\'s1a &a!(a!*a!/a~a"#aFa"\'a"(a")a"*a".a"/a#"a$$a$#aPa$-ap)Q!)Q(a\'$ahaoa\\aAaEa)/a* a*(a+$a, a,*a+)a`a,/a-!a-"a<a:a8a-$a9z#*a/"a/!a/ zOz!$z )z!#z ,z &z (z!"z *z|z".z!+zFz"$zyz0z$\'z#"zSz#.)T*)` )`\'z@z\'(zBz.,z/ ] )] (z.+] #] &]"*][]*/]"#]!/]$$]O]!"]$!]#/]#.]S]$(]%-]%.]&$]%!]% ]%)]n]()](\']*+]&/]d]s]*$]*)]+"],$],!]++]+(]+*]`],/],"]-)]-#]/(]5].-]./]/-)9*)9+)9.).>)B))B-).v).L).x).m).M).C).\\).]).^).*)).+().**).*-)@!).,,).,.).,/).- ).-$).-,).-.).--).;).6)..()../)./$).X)./\')./)).1)./,)./-)/ \')/ (@+\')/O)/y)/",)/#.)/$*)b")b$)X#)b/)X )X!)/=)X\')X,)X*)/R)/n)/@)/C)/z)tVeXz\'K%ESW!-,w)){{{{{{{{{{{{{{I\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!3ycywynyqy\'$y>y@yRy\'e!\')H:H8H \'H "{{{{{I74;  ; !; "; #;|;V; &; \'; (; ); *; +; ,; -; .; /;! ;!!;!";!#;!$;O;U;!\';!(;!);!*;!+;!,;!-;!.;!/;" ;y;~;"#;"$;F;[;"\';"(;");"*;"+;",;"-;".;"/;0;#!;#";##;#$;Y;Z;#\';#(;#);#*;#+;#,;#-;#.;#/;$ ;$!;$";$#;$$;W;S;$\';$(;$);$*;$+;$,;$-;p;P;% ;%!;%";%#;%$;%%;%&;%\';%(;%);%*;%+;%,;%-;%.;%/;& ;&!;&";&#;&$;J;=;&\';&(;&);&*;&+;&,;&-;&.;&/;c;w;n;q;\'$;>;@;R;\'(;\');d;r;l;_;\'.;\'/;f;v;e;o;u;?;D;(\';L;();G;x;m;};(.;(/;K;\\;M;h;)$;C;A;E;N;));s;a;z;];).;)/;* ;*!;*";*#;*$;^;i;*\';*(;*);**;*+;*,;*-;*.;*/;+ ;+!;+";+#;+$;Q;k;+\';+(;+);+*;++;+,;+-;+.;+/;, ;,!;,";,#;,$;T;`;,\';,(;,);,*;,+;,,;,-;,.;,/;- ;-!;-";-#;-$;g;j;-\';-(;-);-*;-+;-,;--;-.;-/;;;9;:;<;8;6;5;B;.(;.);.*;.+;.,;.-;..;./;/ ;/!;/";/#;/$;b;X;/\';/(;/);t;1;/,;/-;/.;H9  9 !9 "9 #9|9V9 &9 \'9 (9 )9 *9 +9 ,9 -9 .9 /9! 9!!9!"9!#9!$9O9U9!\'9!(9!)9!*9!+9!,9!-9!.9!/9" 9y9~9"#9"$9F9[9"\'9"(9")9"*9"+9",9"-9".9"/909#!9#"9##9#$9Y9Z9#\'9#(9#)9#*9#+9#,9#-9#.9#/9$ 9$!9$"9$#9$$9W9S9$\'9$(9$)9$*9$+9$,9$-9p9P9% 9%!9%"9%#9%$9%%9%&9%\'9%(9%)9%*9%+9%,9%-9%.9%/9& 9&!9&"9&#9&$9J9=9&\'9&(9&)9&*9&+9&,9&-9&.9&/9c9w9n9q9\'$9>9@9R9\'(9\')9d9r9l9_9\'.9\'/9f9v9e9o9u9?9D9(\'9L9()9G9x9m9}9(.9(/9K9\\9M9h9)$9C9A9E9N9))9s9a9z9]9).9)/9* 9*!9*"9*#9*$9^9i9*\'9*(9*)9**9*+9*,9*-9*.9*/9+ 9+!9+"9+#9+$9Q9k9+\'9+(9+)9+*9++9+,9+-9+.9+/9, 9,!9,"9,#9,$9T9`9,\'9,(9,)9,*9,+9,,9,-9,.9,/9- 9-!9-"9-#9-$9g9j9-\'9-(9-)9-*9-+9-,9--9-.9-/9;999:9<9896959B9.(9.)9.*9.+9.,9.-9..9./9/ 9/!9/"9/#9/$9b9X9/\'9/(9/)9t919/,9/-9/.9H:  : !: ": #:|:V: &: \': (: ): *: +: ,: -: .: /:! :!!:!":!#:!$:O:U:!\':!(:!):!*:!+:!,:!-:!.:!/:" :y:~:"#:"$:F:[:"\':"(:"):"*:"+:",:"-:".:"/:0:#!:#":##:#$:Y:Z:#\':#(:#):#*:#+:#,:#-:#.:#/:$ :$!:$":$#:$$:W:S:$\':$(:$):$*:$+:$,:$-:p:P:% :%!:%":%#:%$:%%:%&:%\':%(:%):%*:%+:%,:%-:%.:%/:& :&!:&":&#:&$:J:=:&\':&(:&):&*:&+:&,:&-:&.:&/:c:w:n:q:\'$:>:@:R:\'(:\'):d:r:l:_:\'.:\'/:f:v:e:o:u:?:D:(\':L:():G:x:m:}:(.:(/:K:\\:M:h:)$:C:A:E:N:)):s:a:z:]:).:)/:* :*!:*":*#:*$:^:i:*\':*(:*):**:*+:*,:*-:*.:*/:+ :+!:+":+#:+$:Q:k:+\':+(:+):+*:++:+,:+-:+.:+/:, :,!:,":,#:,$:T:`:,\':,(:,):,*:,+:,,:,-:,.:,/:- :-!:-":-#:-$:g:j:-\':-(:-):-*:-+:-,:--:-.:-/:;:9:::<:8:6:5:B:.(:.):.*:.+:.,:.-:..:./:/ :/!:/":/#:/$:b:X:/\':/(:/):t:1:/,:/-:/.:H.0 .0!.0".0#.0p0%.0&.0\'.0(.0).0*.0+.0,.0-.0..0/<! <!!<!"<!#<!$<O<U<!\'<!(<!)<!*<!+<!,<!-<!.<!/<" <y<~<"#<"$<F<[<"\'<"(<")<"*<"+<",<"-<".<"/<0<#!<#"<##<#$<Y<Z<#\'<#(<#)<#*<#+<#,<#-<#.<#/<$ <$!<$"<$#<$$<W<S<$\'<$(<$)<$*<$+<$,<$-<p<P<% <%!<%"<%#<%$<%%<%&<%\'<%(<%)<%*<%+<%,<%-<%.<%/<& <&!<&"<&#<&$<J<=<&\'<&(<&)<&*<&+<&,<&-<&.<&/<c<w<n<q<\'$<><@<R<\'(<\')<d<r<l<_<\'.<\'/<f<v<e<o<u<?<D<(\'<L<()<G<x<m<}<(.<(/<K<\\<M<h<)$<C<A<E<N<))<s<a<z<]<).<)/<* <*!<*"<*#<*$<^<i<*\'<*(<*)<**<*+<*,<*-<*.<*/<+ <+!<+"<+#<+$<Q<k<+\'<+(<+)<+*<++<+,<+-<+.<+/<, <,!<,"<,#<,$<T<`<,\'<,(<,)<,*<,+<,,<,-<,.<,/<- <-!<-"<-#<-$<g<j<-\'<-(<-)<-*<-+<-,<--<-.<-/<;<9<:<<<8<6<5<B<.(<.)<.*<.+<.,<.-<..<./</ </!</"</#</$<b<X</\'</(</)<t<1</,</-</.<H8  8 !8 "8 #8|8V8 &8 \'8 (8 )8 *8 +8 ,8 -8 .8 /8! 8!!8!"8!#8!$8O8U8!\'8!(8!)8!*8!+8!,8!-8!.8!/8" 8y8~8"#8"$8F8[8"\'8"(8")8"*8"+8",8"-8".8"/808#!8#"8##8#$8Y8Z8#\'8#(8#)8#*8#+8#,8#-8#.8#/8$ 8$!8$"8$#8$$8W8S8$\'8$(8$)8$*8$+8$,8$-8p8P8% 8%!8%"8%#8%$8%%8%&8%\'8%(8%)8%*8%+8%,8%-8%.8%/8& 8&!8&"8&#8&$8J8=8&\'8&(8&)8&*8&+8&,8&-8&.8&/8c8w8n8q8\'$8>8@8R8\'(8\')8d8r8l8_8\'.8\'/8f8v8e8o8u8?8D8(\'8L8()8G8x8m8}8(.8(/8K8\\8M8h8)$8C8A8E8N8))8s8a8z8]8).8)/8* 8*!8*"8*#8*$8^8i8*\'8*(8*)8**8*+8*,8*-8*.8*/8+ 8+!8+"8+#8+$8Q8k8+\'8+(8+)8+*8++8+,8+-8+.8+/8, 8,!8,"8,#8,$8T8`8,\'8,(8,)8,*8,+8,,8,-8,.8,/8- 8-!8-"8-#8-$8g8j8-\'8-(8-)8-*8-+8-,8--8-.8-/8;898:8<8886858B8.(8.)8.*8.+8.,8.-8..8./8/ 8/!8/"8/#8/$8b8X8/\'8/(8/)8t818/,8/-8/.8H6  6 !6 "6 #6|6V6 &6 \'6 (6 )6 *6 +6 ,6 -6 .6 /6! 6!!6!"6!#6!$6O6U6!\'6!(6!)6!*6!+6!,6!-6!.6!/6" 6y6~6"#6"$6F6[6"\'6"(6")6"*6"+6",6"-6".6"/606#!6#"6##6#$6Y6Z6#\'6#(6#)6#*6#+6#,6#-6#.6#/6$ 6$!6$"6$#6$$6W6S6$\'6$(6$)6$*6$+6$,6$-6p6P6% 6%!6%"6%#6%$6%%6%&6%\'6%(6%)6%*6%+6%,6%-6%.6%/6& 6&!6&"6&#6&$6J6=6&\'6&(6&)6&*6&+6&,6&-6&.6&/6c6w6n6q6\'$6>6@6R6\'(6\')6d6r6l6_6\'.6\'/6f6v6e6o6u6?6D6(\'6L6()6G6x6m6}6(.6(/6K6\\6M6h6)$6C6A6E6N6))6s6a6z6]6).6)/6* 6*!6*"6*#6*$6^6i6*\'6*(6*)6**6*+6*,6*-6*.6*/6+ 6+!6+"6+#6+$6Q6k6+\'6+(6+)6+*6++6+,6+-6+.6+/6, 6,!6,"6,#6,$6T6`6,\'6,(6,)6,*6,+6,,6,-6,.6,/6- 6-!6-"6-#6-$6g6j6-\'6-(6-)6-*6-+6-,6--6-.6-/6;696:6<6866656B6.(6.)6.*6.+6.,6.-6..6./6/ 6/!6/"6/#6/$6b6X6/\'6/(6/)6t616/,6/-6/.6H5  5 !5 "5 #5|5V5 &5 \'5 (5 )5 *5 +5 ,5 -5 .5 /5! 5!!5!"5!#5!$5O5U5!\'5!(5!)5!*5!+5!,5!-5!.5!/5" 5y5~5"#5"$5F5[5"\'5"(5")5"*5"+5",5"-5".5"/505#!5#"5##5#$5Y5Z5#\'5#(5#)5#*5#+5#,5#-5#.5#/5$ 5$!5$"5$#5$$5W5S5$\'5$(5$)5$*5$+5$,5$-5p5P5% 5%!5%"5%#5%$5%%5%&5%\'5%(5%)5%*5%+5%,5%-5%.5%/5& 5&!5&"5&#5&$5J5=5&\'5&(5&)5&*5&+5&,5&-5&.5&/5c5w5n5q5\'$5>5@5R5\'(5\')5d5r5l5_5\'.5\'/5f5v5e5o5u5?5D5(\'5L5()5G5x5m5}5(.5(/5K5\\5M5h5)$5C5A5E5N5))5s5a5z5]5).5)/5* 5*!5*"5*#5*$5^5i5*\'5*(5*)5**5*+5*,5*-5*.5*/5+ 5+!5+"5+#5+$5Q5k5+\'5+(5+)5+*5++5+,5+-5+.5+/5, 5,!5,"5,#5,$5T5`5,\'5,(5,)5,*5,+5,,5,-5,.5,/5- 5-!5-"5-#5-$5g5j5-\'5-(5-)5-*5-+5-,5--5-.5-/5;595:5<5856555B5.(5.)5.*5.+5.,5.-5..5./5/ 5/!5/"5/#5/$5b5X5/\'5/(5/)5t515/,5/-5/.5HB  B !B "B #B|BVB &B \'B (B )B *B +B ,B -B .B /B! B!!B!"B!#B!$BOBUB!\'B!(B!)B!*B!+B!,B!-B!.B!/B" ByB~B"#B"$BFB[B"\'B"(B")B"*B"+B",B"-B".B"/B0B#!B#"B##B#$BYBZB#\'B#(B#)B#*B#+B#,B#-B#.B#/B$ B$!B$"B$#B$$BWBSB$\'B$(B$)B$*B$+B$,B$-BpBP.> .>!.>".>#.>p>%.>&.>n!cywynyqy\'$y>y@yRy\'e!\'MU "U!"U~U#"U$yJy="UnUeU)H:H8H \'H "#"#!yUyy~Y\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!{{{{{I',
            b = "# /+012233.&.%44.$.!.\". .#&&'%(%'&)&.')%(&)'\"%(*//77&%) (()\")(!%$/+%''$&,%!& %$%/&#%#&\"&)!)-*%'-,&)+/%' '*(\"( -%)#*&-&+&',(,'\"(#$.'#'+)*/*($(!'!(+\"!),II $(-\"\"",
            c, d = new RegExp("[0-~]", "g"),
            e = function(a) {
                var c = (a.charCodeAt(0) - 48) * 2;
                return b.substring(c, c + 2)
            };
        while ((c = a.replace(d, e)) != a) a = c;
        return c.replace(new RegExp("....", "g"), function(a) {
            return String.fromCharCode(a.charCodeAt(0) - 32 << 12 | a.charCodeAt(1) - 32 << 8 | a.charCodeAt(2) - 32 << 4 | a.charCodeAt(3) - 32)
        })
    }();
    var Fb = function(a) {
        function b(a) {
            if (a && a.nodeType === 1) {
                return true;
                try {
                    a.nodeType = a.nodeType
                } catch (b) {
                    return true
                }
            }
            return false
        }
        var c = function(a) {
            if (a && a.constructor === Array) {
                var d = [];
                for (var e = 0; e < a.length; e++) {
                    d.push(c(a[e]))
                }
                return d
            }
            if (a && typeof a == "object") {
                if (b(a)) {
                    return "<ELEMENT>"
                }
                var f = {};
                for (var g in a) {
                    f[g] = c(a[g])
                }
                return f
            }
            if (typeof a == "function") {} else {
                return a
            }
        };
        var d = [];
        for (var e = 0; e < a.Ii.length; e++) {
            var f = {};
            var g = a.Ii[e];
            d.push(c(g))
        }
        var h = JSON.stringify(d);
    };
    var Gb = function(a) {
        this.ch = a;
        this.Ai = false;
        this.Pd = false;
        this.binary = [];
        this.Ig = 0
    };
    Gb.prototype.Eg = function(a, b) {
        if (this.Ai) {
            return
        }
        this.Ai = true;
        if (!this.ch.swfBinary) {
            var d = new XMLHttpRequest;
            d.open("GET", a);
            d.overrideMimeType("text/plain; charset=x-user-defined");
            d.onreadystatechange = function(a) {
                return function() {
                    if (d.status != 0 && d.status != 200) {
                        a.ch.onerror && a.ch.onerror("xhr failed");
                        c("xhr failed status=" + d.status, d);
                        return
                    }
                    if (d.readyState >= 3) {
                        var b = d.responseText;
                        var e = b.length;
                        for (var f = a.Ig; f < e; f++) {
                            a.binary[f] = b.charCodeAt(f) & 255
                        }
                        a.Ig = e;
                        a.Pd = d.readyState == 4;
                        a.onprogress && a.onprogress();
                        if (a.Pd) {
                            a.onprogress = null
                        }
                    }
                }
            }(this);
            this.onprogress = b;
            d.send(null)
        } else {
            this.Ig = this.ch.swfBinary.length;
            for (var e = 0; e < this.Ig; e++) {
                this.binary[e] = this.ch.swfBinary.charCodeAt(e) & 255
            }
            this.Pd = true;
            b();
            this.onprogress = null
        }
    };
    var Hb = function(a) {
        this.ch = a;
        this.Pd = false;
        this.Kg = new Gb(a);
        this.oh = 0;
        this.Bf = false;
        this.Af = {};
        this.Ii = [];
        this.loadingImageCount = 0;
        this.colorRange = a.colorLevels && a.colorLevels < 256 && Math.max(1, Math.min(256 / a.colorLevels, 256)) | 0
    };
    (function() {
        Hb.pe = function(a, b, e) {
            var f = a.Ig;
            if (f < 20) {
                return 0
            }
            var g = 0;
            var h = a.binary;
            if (h[g] != "F".charCodeAt(0) || h[g + 1] != "W".charCodeAt(0) || h[g + 2] != "S".charCodeAt(0)) {
                var i = "invalid swf signature: " + String.fromCharCode.apply(null, h.slice(0, 3));
                e && e(i);
                c(i);
                return 0
            }
            b.ji = "FWS";
            g += 3;
            b.jj = h[g];
            if (b.jj != 4) {
                d("unsupported flash version: " + b.jj)
            }
            g++;
            b.Me = ib(h, g);
            g += 4;
            var j = [];
            var k = tb(h, g, j);
            b.nf = j;
            g += k;
            b.mf = h[g + 1];
            g += 2;
            b.df = gb(h, g);
            g += 2;
            if (f < g) {
                return 0
            }
            return g
        };
        Hb.prototype.oe = function(a, b, c) {
            var d = this.Kg;
            var e = d.Ig;
            var f = d.binary;
            var g = this.Ii;
            while (a < e) {
                var h = gb(f, a);
                var i = 2;
                if (isNaN(h)) {
                    break
                }
                var j = h >> 6;
                var k = h & 63;
                if (k == 63) {
                    k = ib(f, a + 2);
                    i += 4
                }
                if (isNaN(k)) {
                    break
                }
                if (i + k + a > e) {
                    break
                }
                var l = Hc[j] || Gc;
                var m = new l(f, a + i, k, j, b, this, c);
                g.push(m);
                a += k + i
            }
            return a
        };
        Hb.prototype.Eg = function(a, b) {
            this.onprogress = b && [b] || [];
            this.Kg.Eg(a, function(a) {
                return function() {
                    a.xh.apply(a, arguments)
                }
            }(this))
        };
        Hb.prototype.Ic = function(a) {
            if (this.Pd) {
                a()
            } else {
                this.onprogress.push(a)
            }
        };
        Hb.prototype.xh = function() {
            var a = this.oh;
            if (!this.Bf) {
                var b = Hb.pe(this.Kg, this.Af, this.ch.onerror);
                if (!b) {
                    return
                }
                a += b;
                this.Bf = true
            }
            a = this.oe(a, this.ch.delayEval, this.colorRange);
            this.Pd = this.Kg.Pd;
            if (this.Pd && a != this.Kg.Ig) {
                d("parse warning: couldn't finish to tag all binary data");
                this.ch.onerror && this.ch.onerror("broken binary")
            }
            this.oh = a;
            var b = this.onprogress.length;
            for (var c = 0; c < b; c++) {
                this.onprogress[c]()
            }
            if (this.Pd) {
                this.onprogress = []
            }
        }
    })();
    var Ib = function(a, b, c, d) {};
    Ib.prototype.aj = g.Ub;
    var Jb = function(a, b, c, d, e, f) {
        Ab(this, "Kd", function() {
            return jb(a, b)
        }, e)
    };
    Jb.prototype.aj = g.$b;
    var Kb = function(a, b, c, d, e, f) {
        Ab(this, "name", function() {
            return mb(a, b)
        }, e)
    };
    Kb.prototype.aj = g.Vb;
    var Lb = function(a, b, d, e, f, g, h) {
        Bb(this, function() {
            var e = {};
            e.wd = gb(a, b);
            e.re = gb(a, b + 2);
            e.Mg = [];
            var f = ub(a, b + 4, e.Mg);
            var g = b + f + 4;
            e.ie = null;
            if (g < d) {
                e.ie = [];
                vb(a, g, e.ie, h)
            }
            c("PlaceObjectTag is not supported");
            return e
        }, ["wd", "re", "Mg", "ie"], f)
    };
    Lb.prototype.aj = g.Xb;
    var Mb = function(a, b, c, d, e, f, g) {
        Bb(this, function() {
            var c = {};
            var d = a[b];
            c.Xg = d & 1;
            var e = b + 1;
            var f;
            c.re = gb(a, e);
            e += 2;
            c.wd = null;
            if (d & 2) {
                c.wd = gb(a, e);
                e += 2
            }
            c.Mg = null;
            if (d & 4) {
                c.Mg = [];
                f = ub(a, e, c.Mg);
                e += f
            }
            c.ie = null;
            if (d & 8) {
                c.ie = [];
                f = wb(a, e, c.ie, g);
                e += f
            }
            c.Ah = null;
            if (d & 16) {
                c.Ah = gb(a, e);
                e += 2
            }
            c.name = null;
            if (d & 32) {
                c.name = mb(a, e, c.name);
                e += c.name.length + 1
            }
            c.Ed = null;
            if (d & 64) {
                c.Ed = gb(a, e)
            }
            return c
        }, ["Xg", "re", "wd", "Mg", "ie", "Ah", "name", "Ed"], e)
    };
    Mb.prototype.aj = g.Yb;
    var Nb = function(a, b, c, d, e, f) {
        Ab(this, "re", function() {
            return gb(a, b)
        }, e)
    };
    Nb.prototype.aj = g.Zb;
    var Ob = function(a, b, c, d) {};
    Ob.prototype.aj = g._b;
    var Pb = function(a, b, c) {
        var d = b;
        while (true) {
            var e = d - b;
            var f = a[d];
            d++;
            if (!f) {
                var g = new bc(a, d);
                g.Id = 0;
                g._g = e;
                c.push(g);
                break
            }
            var h = 0;
            if (f < 128) {
                var i = bc
            } else {
                h = gb(a, d);
                d += 2;
                var i = dc[f] || cc
            }
            var g = new i(a, d, h, f);
            d += h;
            g.Id = f;
            g._g = e;
            g.$g = d - b;
            c.push(g)
        }
        return d - b
    };
    var Qb = function(a, b, c, d, e, f) {
        Ab(this, "Gc", function() {
            var c = [];
            Pb(a, b, c);
            return c
        }, e)
    };
    Qb.prototype.aj = g.Tb;
    var Rb = function(a, b, c) {
        this.af = gb(a, b) + 1
    };
    var Sb = function(a, b, d) {
        this.dj = mb(a, b);
        this.Ni = mb(a, b + this.dj.length + 1);
        c("ActionGetURL is not supported")
    };
    var Tb = function(a, b, d) {
        this.af = gb(a, b);
        this.li = a[b + 2];
        c("ActionWaitForFrame is not supported")
    };
    var Ub = function(a, b, c) {
        this.name = mb(a, b)
    };
    var Vb = function(a, b, c) {
        this.ng = mb(a, b)
    };
    var Wb = function(a, b, c) {
        var e = b;
        var f = [];
        while (e < b + c) {
            var g = a[e];
            e++;
            switch (g) {
                case 0:
                    var h = ob(a, e);
                    f.push(h[0]);
                    e += h[1];
                    break;
                case 1:
                    f.push(xb(a, e));
                    e += 4;
                    break;
                case 2:
                    f.push(null);
                    break;
                case 3:
                    f.push(void 0);
                    break;
                case 4:
                    f.push(a[e]);
                    e++;
                    break;
                case 5:
                    f.push(a[e] != 0);
                    e++;
                    d("action push: boolean is danger. change 1/0");
                    break;
                case 6:
                    f.push(yb(a, e));
                    e += 8;
                    d("action push: double value is not tested!");
                    break;
                case 7:
                    f.push(ib(a, e));
                    e += 4;
                    break;
                case 8:
                    f.push(a[e]);
                    e++;
                    d("action push: unsupported push recognized");
                    break;
                case 9:
                    f.push(gb(a, e));
                    e += 2;
                    d("action push: unsupported push recognized");
                    break
            }
        }
        this.fj = f
    };
    var Xb = function(a, b, c) {
        this.ed = hb(a, b)
    };
    var Yb = function(a, b, c) {
        this.ed = hb(a, b)
    };
    var Zb = function(a, b) {};
    var $b = function(a, b, c) {
        var d = a[b];
        this.play = d & 1;
        this.Xh = d & 2;
        if (this.Xh) {
            this.Wh = gb(a, b + 1)
        }
    };
    var _b = function(a, b, d) {
        this.li = a[b];
        c("ActionWaitForFrame2 is not supported")
    };
    var ac = function(a, b, c) {
        this.Gg = rb(a, b, 0);
        this.Hg = rb(a, b, 1);
        this.$h = sb(a, b, 6, 2)
    };
    var bc = function(a, b) {};
    var cc = function(a, b, c, e) {
        d("action parser: not supported action code detected [" + e + "]")
    };
    var dc = {
        129: Rb,
        131: Sb,
        138: Tb,
        139: Ub,
        140: Vb,
        150: Wb,
        153: Xb,
        157: Yb,
        158: Zb,
        159: $b,
        141: _b,
        154: ac
    };
    var ec = function(a, b, d, e) {
        var f = b;
        var g = a[f];
        f++;
        if (g == 255) {
            g = gb(a, f);
            f += 2
        }
        var h = 0;
        var i = [];
        for (var j = 0; j < g; j++) {
            var k = {};
            var l = a[f];
            f++;
            k.aj = l;
            if (l == 0) {
                if (d == 3) {
                    k.Kd = kb(a, f);
                    f += 4
                } else {
                    k.Kd = jb(a, f);
                    f += 3
                }
            } else if (l == 16 || l == 18 || l == 19) {
                k.Mg = [];
                k.zf = {
                    Bh: []
                };
                h = ub(a, f, k.Mg);
                f += h;
                h = zb(a, f, d, k.zf);
                f += h;
                if (l == 19) {
                    c("paser fillstyle: detected swf8 structure")
                }
            } else if (l == 64 || l == 65 || l == 66 || l == 67) {
                k._c = gb(a, f);
                f += 2;
                k.Mg = [];
                h = ub(a, f, k.Mg);
                f += h
            } else {
                c("parser fillstyle: unknown type:" + l)
            }
            i.push(k)
        }
        e.Qe = i;
        return f - b
    };
    var fc = function(a, b, c, d) {
        var e = b;
        var f = a[e];
        e++;
        if (f == 255) {
            f = gb(a, e);
            e += 2
        }
        var g = [];
        for (var h = 0; h < f; h++) {
            var i = {};
            i.width = gb(a, e);
            e += 2;
            if (c == 3) {
                i.Kd = kb(a, e);
                e += 4
            } else {
                i.Kd = jb(a, e);
                e += 3
            }
            g.push(i)
        }
        d.Bg = g;
        return e - b
    };
    var gc = function(a, b, c, d) {
        var e = b;
        var f = 0;
        f = ec(a, e, c, d);
        e += f;
        f = fc(a, e, c, d);
        e += f;
        f = hc(a, e, c, d, "hi");
        e += f;
        return e - b
    };
    var hc = function(a, b, c, d, e) {
        var f = b;
        var g;
        var i = sb(a, f, 0, 4);
        var j = sb(a, f, 4, 4);
        f++;
        var k;
        if (e) {
            k = []
        } else {
            k = d
        }
        var l;
        var m = 0;
        while ((l = sb(a, f, m, 6)) != 0) {
            var n = {};
            if (l & 32) {
                if (l & 16) {
                    n.aj = h.Ab;
                    n.x = 0;
                    n.y = 0;
                    m += 2;
                    var o = sb(a, f, m, 4) + 2;
                    m += 4;
                    var p = rb(a, f, m);
                    m++;
                    if (p) {
                        n.x = pb(sb(a, f, m, o), o);
                        m += o;
                        n.y = pb(sb(a, f, m, o), o);
                        m += o
                    } else {
                        var q = rb(a, f, m);
                        m++;
                        if (q) {
                            n.y = pb(sb(a, f, m, o), o);
                            m += o
                        } else {
                            n.x = pb(sb(a, f, m, o), o);
                            m += o
                        }
                    }
                } else {
                    n.aj = h.tb;
                    m += 2;
                    var o = sb(a, f, m, 4) + 2;
                    m += 4;
                    n.he = pb(sb(a, f, m, o), o);
                    m += o;
                    n.ke = pb(sb(a, f, m, o), o);
                    m += o;
                    n.Wc = pb(sb(a, f, m, o), o);
                    m += o;
                    n.Xc = pb(sb(a, f, m, o), o);
                    m += o
                }
            } else {
                n.aj = h.Bb;
                m++;
                var r = rb(a, f, m);
                m++;
                var s = rb(a, f, m);
                m++;
                var t = rb(a, f, m);
                m++;
                var u = rb(a, f, m);
                m++;
                var v = rb(a, f, m);
                m++;
                if (v) {
                    var w = sb(a, f, m, 5);
                    m += 5;
                    var x = sb(a, f, m, w);
                    m += w;
                    var y = sb(a, f, m, w);
                    m += w;
                    n.Ae = pb(x, w);
                    n.Be = pb(y, w)
                }
                if (u) {
                    n.Oe = sb(a, f, m, i);
                    m += i
                }
                if (t) {
                    n.Pe = sb(a, f, m, i);
                    m += i
                }
                if (s) {
                    n.Ag = sb(a, f, m, j);
                    m += j
                }
                if (r) {
                    f += Math.ceil(m / 8);
                    m = 0;
                    g = ec(a, f, c, n);
                    f += g;
                    g = fc(a, f, c, n);
                    f += g;
                    i = sb(a, f, 0, 4);
                    m += 4;
                    j = sb(a, f, 4, 4);
                    m += 4
                }
            }
            k.push(n)
        }
        m += 6;
        if (e) {
            d[e] = k
        }
        f += Math.ceil(m / 8);
        return f - b
    };
    var ic = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            c.dd = [];
            var d = tb(a, b + 2, c.dd);
            gc(a, b + 2 + d, 1, c);
            return c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    ic.prototype.aj = g.Nb;
    var jc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            c.dd = [];
            var d = tb(a, b + 2, c.dd);
            gc(a, b + 2 + d, 2, c);
            return c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    jc.prototype.aj = g.Ob;
    var kc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            c.dd = [];
            var d = tb(a, b + 2, c.dd);
            gc(a, b + 2 + d, 3, c);
            return c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    kc.prototype.aj = g.Pb;
    var lc = function(a, b, c, d, e, f) {
        Ab(this, "gg", function() {
            return a.slice(b, b + c)
        }, e);
        Ic.hg = this
    };
    lc.prototype.aj = g.Wb;
    var mc = function(a, b, c, e, f, g) {
        this.id = gb(a, b);
        Ab(this, "img", function() {
            var e = a.slice(b + 2, b + c);
            if (!Ic.hg) {
                d("DefineBits warning: not found JPEGTables")
            }
            return Ic.$d(Ic.hg, e, g)
        }, false)
    };
    mc.prototype.aj = g.Cb;
    var nc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Ab(this, "img", function() {
            var d = a.slice(b + 2, b + c);
            return Ic.Xd(d, f)
        }, false)
    };
    nc.prototype.aj = g.Db;
    var oc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Ab(this, "img", function() {
            var d = b + 2;
            var e = ib(a, d);
            d += 4;
            var g = a.slice(d, d + e);
            d += e;
            var h = a.slice(d, b + c);
            return Ic.Yd(g, h, f)
        }, false)
    };
    oc.prototype.aj = g.Eb;
    var pc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var d = {};
            var e = a[b + 2];
            d.width = gb(a, b + 3);
            d.height = gb(a, b + 5);
            var f = b + 7;
            if (e == 3) {
                var g = a[f] + 1;
                f++
            }
            var h;
            switch (e) {
                case 3:
                    h = 8;
                    break;
                case 4:
                    h = 16;
                    break;
                case 5:
                    h = 24;
                    break
            }
            d.img = Ic._d(a.slice(f, b + c), h, g, d.width, d.height, false);
            return d
        }, ["width", "height", "img"], e)
    };
    pc.prototype.aj = g.Fb;
    var qc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var d = {};
            var e = a[b + 2];
            d.width = gb(a, b + 3);
            d.height = gb(a, b + 5);
            var f = b + 7;
            if (e == 3) {
                var g = a[f] + 1;
                f++
            }
            var h;
            switch (e) {
                case 3:
                    h = 8;
                    break;
                case 4:
                    h = 16;
                    break;
                case 5:
                    h = 32;
                    break
            }
            d.img = Ic._d(a.slice(f, b + c), h, g, d.width, d.height, true);
            return d
        }, ["width", "height", "img"], e)
    };
    qc.prototype.aj = g.Gb;
    var rc = function(a, b, c) {
        var d = b;
        var e = a[d];
        d++;
        for (var f = 0; f < e; f++) {
            var g = {};
            g.xi = a[d];
            d++;
            g.ui = kb(a, d);
            d += 4;
            g.Ge = a[d];
            d++;
            g.De = kb(a, d);
            d += 4;
            c.push(g)
        }
        return d - b
    };
    var sc = function(a, b, d) {
        var e = b;
        var f = a[e];
        e++;
        if (f == 255) {
            f = gb(a, e);
            e += 2
        }
        var g;
        var h = [];
        for (var i = 0; i < f; i++) {
            var j = {};
            var k = a[e];
            e++;
            j.aj = k;
            if (k == 0) {
                j.start = kb(a, e);
                e += 4;
                j.end = kb(a, e);
                e += 4
            } else if (k == 16 || k == 18) {
                j.start = [];
                j.end = [];
                j.zf = {
                    Bh: []
                };
                g = ub(a, e, j.start);
                e += g;
                g = ub(a, e, j.end);
                e += g;
                g = rc(a, e, j.zf.Bh);
                e += g
            } else if (k == 64 || k == 65 || k == 66 || k == 67) {
                j._c = gb(a, e);
                e += 2;
                j.wi = [];
                j.Fe = [];
                g = ub(a, e, j.wi);
                e += g;
                g = ub(a, e, j.Fe);
                e += g
            } else {
                c("DefineMorph parse: unknown type detected [" + k + "]")
            }
            h.push(j)
        }
        d.Qe = h;
        return e - b
    };
    var tc = function(a, b, c) {
        var d = b;
        var e = a[d];
        d++;
        if (e == 255) {
            e = gb(a, d);
            d += 2
        }
        var f;
        var g = [];
        for (var h = 0; h < e; h++) {
            var i = {};
            i.zi = gb(a, d);
            d += 2;
            i.He = gb(a, d);
            d += 2;
            i.ui = kb(a, d);
            d += 4;
            i.De = kb(a, d);
            d += 4;
            g.push(i)
        }
        c.Bg = g;
        return d - b
    };
    var uc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            c.ti = [];
            e = tb(a, d, c.ti);
            d += e;
            c.Ce = [];
            e = tb(a, d, c.Ce);
            d += e;
            c._g = ib(a, d);
            d += 4;
            e = sc(a, d, c);
            d += e;
            e = tc(a, d, c);
            d += e;
            e = hc(a, d, 1, c, "vi");
            d += e;
            e = hc(a, d, 1, c, "Ee");
            d += e;
            if (c.vi.length - 1 == c.Ee.length && c.Ee[0] != h.Bb) {
                c.Ee.unshift(c.vi[0])
            }
            return c
        }, ["ti", "Ce", "_g", "Qe", "Bg", "vi", "Ee"], e)
    };
    uc.prototype.aj = g.Mb;
    var vc = function(a, b, c, d, e, f) {
        var g = b;
        var h = a[g];
        var i = h & 8;
        var j = h & 4;
        var k = h & 2;
        var l = h & 1;
        g++;
        f.Ze = null;
        if (i) {
            f.Ze = gb(a, g);
            g += 2
        }
        f.Kd = null;
        if (j) {
            if (c == 2) {
                f.Kd = kb(a, g);
                g += 4
            } else {
                f.Kd = jb(a, g);
                g += 3
            }
        }
        f.x = null;
        if (l) {
            f.x = hb(a, g);
            g += 2
        }
        f.y = null;
        if (k) {
            f.y = hb(a, g);
            g += 2
        }
        f.height = null;
        if (i) {
            f.height = gb(a, g);
            g += 2
        }
        var m = a[g];
        g++;
        var n = 0;
        var o = [];
        for (var p = 0; p < m; p++) {
            var q = {};
            q.Mf = sb(a, g, n, d);
            n += d;
            q.Kc = pb(sb(a, g, n, e), e);
            n += e;
            o.push(q)
        }
        f.xf = o;
        g += Math.ceil(n / 8);
        return g - b
    };
    var wc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Ab(this, "hi", function() {
            var c = b + 2;
            var d = gb(a, c);
            c += d;
            d /= 2;
            var e = [];
            var f;
            for (var g = 0; g < d; g++) {
                var h = [];
                f = hc(a, c, 1, h);
                c += f;
                e.push(h)
            }
            return e
        }, e)
    };
    wc.prototype.aj = g.Kb;
    var xc = function(a, b, c, e, f, g) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var e = b + 2;
            var f;
            var g = a[e];
            var h = g & 128;
            var i = g & 64;
            var j = g & 32;
            var k = g & 16;
            var l = g & 8;
            var m = g & 4;
            var n = g & 2;
            var o = g & 1;
            e++;
            e++;
            var p = a[e];
            e++;
            e += p;
            var q = gb(a, e);
            e += 2;
            if (l) {
                e += 4 * (q + 1)
            } else {
                e += 2 * (q + 1)
            }
            var r = [];
            for (var s = 0; s < q; s++) {
                var t = [];
                f = hc(a, e, 1, t);
                e += f;
                r.push(t)
            }
            c.gi = r;
            var u = [];
            for (var s = 0; s < q; s++) {
                var v = a[e];
                e++;
                var w = 0;
                if (m) {
                    w = a[e];
                    e++
                }
                if (w == 0) {
                    u.push(v)
                } else {
                    var x = Cb([w, v]);
                    u.push(x.charCodeAt(0))
                }
            }
            c.Jd = u;
            c.Xe = null;
            c.Ye = null;
            c.$e = null;
            c.We = null;
            if (h) {
                c.Xe = gb(a, e);
                e += 2;
                c.Ye = gb(a, e);
                e += 2;
                c.$e = gb(a, e);
                e += 2;
                var y = [];
                for (var s = 0; s < q; s++) {
                    y.push(gb(a, e));
                    e += 2
                }
                c.We = y;
                for (var s = 0; s < q; s++) {
                    var z = [];
                    f = tb(a, e, z);
                    e += f
                }
                var A = gb(a, e);
                e += 2;
                if (A != 0) {
                    d("DefineFont2 parse: wrong format detected")
                }
            }
            return c
        }, ["gi", "Jd", "Xe", "Ye", "$e", "We"], f)
    };
    xc.prototype.aj = g.Lb;
    var yc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            c.dd = [];
            e = tb(a, d, c.dd);
            d += e;
            c.Mg = [];
            e = ub(a, d, c.Mg);
            d += e;
            var f = a[d];
            d++;
            var g = a[d];
            d++;
            var h = [];
            while (a[d]) {
                var i = {};
                e = vc(a, d, 1, f, g, i);
                d += e;
                h.push(i)
            }
            c.Bh = h;
            return c
        }, ["dd", "Mg", "Bh"], e)
    };
    yc.prototype.aj = g.Rb;
    var zc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            c.dd = [];
            e = tb(a, d, c.dd);
            d += e;
            c.Mg = [];
            e = ub(a, d, c.Mg);
            d += e;
            var f = a[d];
            d++;
            var g = a[d];
            d++;
            var h = [];
            while (a[d]) {
                var i = {};
                e = vc(a, d, 2, f, g, i);
                d += e;
                h.push(i)
            }
            c.Bh = h;
            return c
        }, ["dd", "Mg", "Bh"], e)
    };
    zc.prototype.aj = g.Sb;
    var Ac = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            c.dd = [];
            e = tb(a, d, c.dd);
            d += e;
            var f = a[d];
            var g = f & 128;
            c.mj = !!(f & 64);
            c.multiline = !!(f & 32);
            var h = f & 16;
            var i = f & 8;
            var j = f & 4;
            var k = f & 2;
            var l = f & 1;
            d++;
            f = a[d];
            var m = f & 128;
            var n = f & 64;
            var o = f & 32;
            var p = f & 16;
            var q = f & 8;
            var r = f & 4;
            var s = f & 2;
            c.ej = !!(f & 1);
            d++;
            c.Ze = null;
            if (l) {
                c.Ze = gb(a, d);
                d += 2
            }
            if (m) {
                var t = mb(a, d);
                d += t.length
            }
            c.height = null;
            if (l) {
                c.height = gb(a, d);
                d += 2
            }
            c.Kd = null;
            if (j) {
                c.Kd = kb(a, d);
                d += 4
            }
            c.Ng = null;
            if (k) {
                c.Ng = gb(a, d);
                d += 2
            }
            c.align = null;
            c.wg = null;
            c.Oh = null;
            c.Lf = null;
            c.vg = null;
            if (o) {
                c.align = a[d];
                d++;
                c.wg = gb(a, d);
                d += 2;
                c.Oh = gb(a, d);
                d += 2;
                c.Lf = gb(a, d);
                d += 2;
                c.vg = gb(a, d);
                d += 2
            }
            c.gj = mb(a, d);
            d += c.gj.length + 1;
            c.Rf = g ? ob(a, d)[0] : "";
            return c
        }, ["dd", "mj", "multiline", "ej", "Ze", "height", "Kd", "Ng", "align", "wg", "Oh", "Lf", "vg", "gj", "Rf"], e)
    };
    Ac.prototype.aj = g.Jb;
    var Bc = function(a, b, d, e) {
        var f = b;
        var g;
        var h = a[b];
        var i = h & 32;
        var j = h & 16;
        e.Ci = !!(h & 8);
        e.Bi = !!(h & 4);
        e.Di = !!(h & 2);
        e.Ei = !!(h & 1);
        f++;
        e.wd = gb(a, f);
        f += 2;
        e.re = gb(a, f);
        f += 2;
        e.Mg = [];
        g = ub(a, f, e.Mg);
        f += g;
        e.Ld = null;
        if (d == 2) {
            e.Ld = [];
            g = vb(a, f, e.Ld);
            f += g;
            if (j) {
                c("ButtonRecord parse error: hasFilterList is not supported in Flash 4")
            }
            if (i) {
                c("ButtonRecord parse error: hasBlendMode is not supported in Flash 4")
            }
        }
        return f - b
    };
    var Cc = function(a, b, c) {
        var d = b;
        d += 2;
        var e = a[d];
        c.Hf = !!(e & 128);
        c.fh = !!(e & 64);
        c.gh = !!(e & 32);
        c.jh = !!(e & 16);
        c.kh = !!(e & 8);
        c.mh = !!(e & 4);
        c.lh = !!(e & 2);
        c.If = !!(e & 1);
        d++;
        e = a[d];
        c.ih = !!(e & 1);
        c.lg = sb(a, d, 0, 7);
        d++;
        c.Gc = [];
        var f = Pb(a, d, c.Gc);
        d += f;
        return d - b
    };
    var Dc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            var f = [];
            while (a[d]) {
                var g = {};
                e = Bc(a, d, 1, g);
                d += e;
                f.push(g)
            }
            c.xd = f;
            d++;
            c.Gc = [];
            Pb(a, d, c.Gc);
            return c
        }, ["xd", "Gc"], e)
    };
    Dc.prototype.aj = g.Hb;
    var Ec = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            d++;
            var f = gb(a, d);
            d += 2;
            var g = [];
            while (a[d]) {
                var h = {};
                e = Bc(a, d, 2, h);
                d += e;
                g.push(h)
            }
            c.xd = g;
            d++;
            var i = [];
            if (f) {
                var j;
                do {
                    var k = {};
                    j = gb(a, d);
                    e = Cc(a, d, k);
                    d += e;
                    i.push(k)
                } while (j)
            }
            c.Gc = i;
            return c
        }, ["xd", "Gc"], e)
    };
    Ec.prototype.aj = g.Ib;
    var Fc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var d = {};
            var e = b + 2;
            d.df = gb(a, e);
            e += 2;
            var f = [];
            while (e < b + c) {
                var g = gb(a, e);
                var h = 2;
                var i = g >> 6;
                var j = g & 63;
                if (j == 63) {
                    j = ib(a, e + 2);
                    h += 4
                }
                var k = Hc[i] || Gc;
                var l = new k(a, e + h, j, i);
                f.push(l);
                e += j + h
            }
            d.Ji = f;
            return d
        }, ["df", "Ji"], e)
    };
    Fc.prototype.aj = g.Qb;
    var Gc = function(a, b, c, e) {
        d("parser: not supported tag detected [" + e + "]");
        this.aj = e
    };
    var Hc = {
        0: Ib,
        1: Ob,
        2: ic,
        4: Lb,
        6: mc,
        7: Dc,
        8: lc,
        9: Jb,
        10: wc,
        11: yc,
        12: Qb,
        20: pc,
        21: nc,
        22: jc,
        26: Mb,
        28: Nb,
        32: kc,
        33: zc,
        34: Ec,
        35: oc,
        36: qc,
        37: Ac,
        39: Fc,
        43: Kb,
        46: uc,
        48: xc
    };
    var Ic = {
        hg: null,
        _d: function(a, b, c, d, e, f) {
            var g = (new Zlib.Inflate(a)).decompress();
            var h = document.createElement("canvas");
            h.width = d;
            h.height = e;
            var i = h.getContext("2d");
            var j = i.createImageData(d, e);
            var k = j.data;
            var l = 0;
            var m = 0;
            if (b == 8) {
                var n = new Array(c);
                var o = new Array(c);
                var p = new Array(c);
                var q = new Array(c);
                if (f) {
                    if (this.usePremultipliedAlpha) {
                        for (var r = 0; r < c; r++) {
                            n[r] = g[m++];
                            o[r] = g[m++];
                            p[r] = g[m++];
                            q[r] = g[m++]
                        }
                    } else {
                        for (var r = 0; r < c; r++) {
                            var s = g[m++];
                            var t = g[m++];
                            var u = g[m++];
                            var v = g[m++];
                            if (v == 255 || v == 0) {
                                n[r] = s;
                                o[r] = t;
                                p[r] = u
                            } else {
                                var w = 255 / v;
                                n[r] = ~~(s * w);
                                o[r] = ~~(t * w);
                                p[r] = ~~(u * w)
                            }
                            q[r] = v
                        }
                    }
                } else {
                    for (var r = 0; r < c; r++) {
                        n[r] = g[m++];
                        o[r] = g[m++];
                        p[r] = g[m++];
                        q[r] = 255
                    }
                }
                var x = Math.ceil(d / 4) * 4;
                var y = g.slice ? g.slice(m) : g.subarray(m);
                var z;
                for (var A = 0; A < e; A++) {
                    for (var B = 0, C = A * x; B < d; B++, C++) {
                        z = y[C] & 255;
                        k[l++] = n[z];
                        k[l++] = o[z];
                        k[l++] = p[z];
                        k[l++] = q[z]
                    }
                }
            } else if (b == 16) {
                var D = d % 2 != 0;
                for (var A = 0; A < e; A++) {
                    for (var B = 0; B < d; B++) {
                        var E = (g[m] << 8) + g[m + 1];
                        m += 2;
                        var F = (E & 31744) >>> 10;
                        var G = (E & 992) >>> 5;
                        var H = (E & 31) >>> 0;
                        k[l++] = (F << 3) + (F >>> 2);
                        k[l++] = (G << 3) + (G >>> 2);
                        k[l++] = (H << 3) + (H >>> 2);
                        k[l++] = 255
                    }
                    if (D) {
                        m += 2
                    }
                }
            } else if (b == 24) {
                for (var A = 0; A < e; A++) {
                    for (var B = 0; B < d; B++) {
                        m++;
                        k[l++] = g[m++];
                        k[l++] = g[m++];
                        k[l++] = g[m++];
                        k[l++] = 255
                    }
                }
            } else if (b == 32) {
                if (this.usePremultipliedAlpha) {
                    for (var A = 0; A < e; A++) {
                        for (var B = 0; B < d; B++) {
                            var v = g[m++];
                            k[l++] = g[m++];
                            k[l++] = g[m++];
                            k[l++] = g[m++];
                            k[l++] = v
                        }
                    }
                } else {
                    for (var A = 0; A < e; A++) {
                        for (var B = 0; B < d; B++) {
                            var v = g[m++];
                            if (v == 255 || v == 0) {
                                k[l++] = g[m++];
                                k[l++] = g[m++];
                                k[l++] = g[m++]
                            } else {
                                var w = 255 / v;
                                for (var r = 0; r < 3; r++) {
                                    var I = ~~(g[m++] * w);
                                    k[l++] = 255 > I ? I : 255
                                }
                            }
                            k[l++] = v
                        }
                    }
                }
            }
            i.putImageData(j, 0, 0);
            return h
        },
        Xd: function(a, b) {
            var c = Ic.Td(a);
            return Ic.Zd(c, b)
        },
        Yd: function(a, b, c) {
            var d = Ic.Td(a);
            var e = (new Zlib.Inflate(b)).decompress();
            var f = Ic.Uc(d);
            var g = document.createElement("img");
            var h = document.createElement("canvas");
            h.width = 0;
            h.height = 0;
            var i = this.usePremultipliedAlpha;
            g.onload = function() {
                var a = g.width;
                var b = g.height;
                h.width = a;
                h.height = b;
                var d = h.getContext("2d");
                d.drawImage(g, 0, 0);
                var f = d.getImageData(0, 0, a, b);
                var j = f.data;
                var k = a * b;
                var l;
                if (i) {
                    for (var m = 0, n = 3; m < k; m++, n += 4) {
                        l = j[n] = e[m];
                        if (l == 0) {
                            j[n - 1] = j[n - 2] = j[n - 3] = 0
                        } else if (l != 255) {
                            if (l < j[n - 1]) {
                                j[n - 1] = l
                            }
                            if (l < j[n - 2]) {
                                j[n - 2] = l
                            }
                            if (l < j[n - 3]) {
                                j[n - 3] = l
                            }
                        }
                    }
                } else {
                    var o;
                    for (var m = 0, n = 3; m < k; m++, n += 4) {
                        l = j[n] = e[m];
                        if (l != 255 && l != 0) {
                            o = 255 / l;
                            j[n - 1] = ~~(j[n - 1] * o);
                            j[n - 2] = ~~(j[n - 2] * o);
                            j[n - 3] = ~~(j[n - 3] * o)
                        }
                    }
                }
                d.putImageData(f, 0, 0);
                --c.loadingImageCount
            };
            g.src = "data:image/jpeg;base64," + f;
            ++c.loadingImageCount;
            setTimeout(function() {}, 0);
            return h
        },
        $d: function(a, b, c) {
            var d;
            if (a == null || a.length < 4) {
                d = b
            } else {
                a = a.gg;
                d = a.slice(0, a.length - 2).concat(b.slice(2))
            }
            return Ic.Zd(d, c)
        },
        Zd: function(a, b) {
            var c = document.createElement("img");
            c.onload = function() {
                --b.loadingImageCount
            };
            c.src = "data:image/jpeg;base64," + Ic.Uc(a);
            ++b.loadingImageCount;
            return c
        },
        Td: function(a) {
            var b;
            if (a[0] == 255 && a[1] == 217 && a[2] == 255 && a[3] == 216) {
                b = a.slice(4)
            } else {
                b = [];
                var d = 0;
                if (a[d] == 255 && a[d + 1] == 216) {
                    b = b.concat(a.slice(d, d + 2));
                    d += 2;
                    while (d < a.length) {
                        if (a[d] == 255) {
                            if (a[d + 1] == 217 && a[d + 2] == 255 && a[d + 3] == 216) {
                                d += 4;
                                b = b.concat(a.slice(d));
                                break
                            } else if (a[d + 1] == 218) {
                                b = b.concat(a.slice(d));
                                break
                            } else {
                                var e = (a[d + 2] << 8) + (a[d + 3] & 255);
                                b = b.concat(a.slice(d, d + e + 2));
                                d += e + 2
                            }
                        } else {
                            c("JPEG marker invalid: i=" + d)
                        }
                    }
                } else {
                    c("SOI missing")
                }
            }
            return b
        },
        Uc: function(a) {
            var b = [];
            var c = 1e4;
            var d = Math.ceil(a.length / c);
            for (var e = 0; e < d; e++) {
                b.push(String.fromCharCode.apply(null, a.slice(e * c, Math.min((e + 1) * c, a.length))))
            }
            return btoa(b.join(""))
        }
    };
    Ic.__defineGetter__("usePremultipliedAlpha", function() {
        delete this.usePremultipliedAlpha;
        var a = document.createElement("canvas");
        a.width = a.height = 1;
        var b = a.getContext("2d");
        var c = b.createImageData(1, 1);
        var d = c.data;
        d[0] = d[3] = 128;
        b.putImageData(c, 0, 0);
        return this.usePremultipliedAlpha = b.getImageData(0, 0, 1, 1).data[0] == 255
    });
    (function() {
        "use strict";

        function b(b, c, d) {
            b = b.split(".");
            d = d || a;
            !(b[0] in d) && d.execScript && d.execScript("var " + b[0]);
            for (var e; b.length && (e = b.shift());) !b.length && void 0 !== c ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
        }

        function l(a) {
            var b = a.length,
                d = 0,
                e = Number.POSITIVE_INFINITY,
                f, g, h, i, j, k, l, m, n;
            for (m = 0; m < b; ++m) a[m] > d && (d = a[m]), a[m] < e && (e = a[m]);
            f = 1 << d;
            g = new(c ? Uint32Array : Array)(f);
            h = 1;
            i = 0;
            for (j = 2; h <= d;) {
                for (m = 0; m < b; ++m)
                    if (a[m] === h) {
                        k = 0;
                        l = i;
                        for (n = 0; n < h; ++n) k = k << 1 | l & 1, l >>= 1;
                        for (n = k; n < f; n += j) g[n] = h << 16 | m;
                        ++i
                    }++ h;
                i <<= 1;
                j <<= 1
            }
            return [g, d, e]
        }

        function o(a, b) {
            this.length = a;
            this.u = b
        }

        function p(a) {
            switch (!0) {
                case 3 === a:
                    return [257, a - 3, 0];
                case 4 === a:
                    return [258, a - 4, 0];
                case 5 === a:
                    return [259, a - 5, 0];
                case 6 === a:
                    return [260, a - 6, 0];
                case 7 === a:
                    return [261, a - 7, 0];
                case 8 === a:
                    return [262, a - 8, 0];
                case 9 === a:
                    return [263, a - 9, 0];
                case 10 === a:
                    return [264, a - 10, 0];
                case 12 >= a:
                    return [265, a - 11, 1];
                case 14 >= a:
                    return [266, a - 13, 1];
                case 16 >= a:
                    return [267, a - 15, 1];
                case 18 >= a:
                    return [268, a - 17, 1];
                case 22 >= a:
                    return [269, a - 19, 2];
                case 26 >= a:
                    return [270, a - 23, 2];
                case 30 >= a:
                    return [271, a - 27, 2];
                case 34 >= a:
                    return [272, a - 31, 2];
                case 42 >= a:
                    return [273, a - 35, 3];
                case 50 >= a:
                    return [274, a - 43, 3];
                case 58 >= a:
                    return [275, a - 51, 3];
                case 66 >= a:
                    return [276, a - 59, 3];
                case 82 >= a:
                    return [277, a - 67, 4];
                case 98 >= a:
                    return [278, a - 83, 4];
                case 114 >= a:
                    return [279, a - 99, 4];
                case 130 >= a:
                    return [280, a - 115, 4];
                case 162 >= a:
                    return [281, a - 131, 5];
                case 194 >= a:
                    return [282, a - 163, 5];
                case 226 >= a:
                    return [283, a - 195, 5];
                case 257 >= a:
                    return [284, a - 227, 5];
                case 258 === a:
                    return [285, a - 258, 0];
                default:
                    throw "invalid length: " + a
            }
        }

        function u(a, b) {
            this.k = [];
            this.f = 32768;
            this.e = this.h = this.b = this.n = 0;
            this.input = c ? new Uint8Array(a) : a;
            this.p = !1;
            this.i = w;
            this.I = !1;
            if (b && (b.Mf && (this.b = b.Mf), b.L && (this.f = b.f), b.i)) this.i = b.i;
            switch (this.i) {
                case v:
                    this.a = 32768;
                    this.c = new(c ? Uint8Array : Array)(32768 + this.f + 258);
                    break;
                case w:
                    this.a = 0;
                    this.c = new(c ? Uint8Array : Array)(this.f);
                    this.g = this.A;
                    this.q = this.v;
                    this.l = this.z;
                    break;
                default:
                    throw Error("invalid inflate mode")
            }
        }

        function Q(a, b) {
            var c, d, e;
            this.input = a;
            this.b = 0;
            if (b && (b.Mf && (this.b = b.Mf), b.f && (c = b.f), b.o)) this.o = b.o;
            d = a[this.b++];
            e = a[this.b++];
            switch (d & 15) {
                case ab:
                    this.method = ab;
                    break;
                default:
                    throw Error("unsupported compression method")
            }
            if (0 !== ((d << 8) + e) % 31) throw Error("invalid fcheck flag:" + ((d << 8) + e) % 31);
            if (e & 32) throw Error("fdict flag is not supported");
            this.H = new u(a, {
                Mf: this.b,
                f: c
            })
        }
        var a = this;
        Math.floor(2147483648 * Math.random()).toString(36);
        var c = "function" === typeof Uint8Array && "function" === typeof Uint16Array && "function" === typeof Uint32Array;
        var d = new(c ? Uint8Array : Array)(256),
            e;
        for (e = 0; 256 > e; ++e) {
            for (var f = d, g = e, h = e, i = h, j = 7, h = h >>> 1; h; h >>>= 1) i <<= 1, i |= h & 1, --j;
            f[g] = (i << j & 255) >>> 0
        }
        var k = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
        c && new Uint32Array(k);
        var m = [],
            n;
        for (n = 0; 288 > n; n++) switch (!0) {
            case 143 >= n:
                m.push([n + 48, 8]);
                break;
            case 255 >= n:
                m.push([n - 144 + 400, 9]);
                break;
            case 279 >= n:
                m.push([n - 256 + 0, 7]);
                break;
            case 287 >= n:
                m.push([n - 280 + 192, 8]);
                break;
            default:
                throw "invalid literal: " + n
        }
        var q = [],
            r, s;
        for (r = 3; 258 >= r; r++) s = p(r), q[r] = s[2] << 24 | s[1] << 16 | s[0];
        var t = c ? new Uint32Array(q) : q;
        o.prototype.B = function(a) {
            switch (!0) {
                case 1 === a:
                    a = [0, a - 1, 0];
                    break;
                case 2 === a:
                    a = [1, a - 2, 0];
                    break;
                case 3 === a:
                    a = [2, a - 3, 0];
                    break;
                case 4 === a:
                    a = [3, a - 4, 0];
                    break;
                case 6 >= a:
                    a = [4, a - 5, 1];
                    break;
                case 8 >= a:
                    a = [5, a - 7, 1];
                    break;
                case 12 >= a:
                    a = [6, a - 9, 2];
                    break;
                case 16 >= a:
                    a = [7, a - 13, 2];
                    break;
                case 24 >= a:
                    a = [8, a - 17, 3];
                    break;
                case 32 >= a:
                    a = [9, a - 25, 3];
                    break;
                case 48 >= a:
                    a = [10, a - 33, 4];
                    break;
                case 64 >= a:
                    a = [11, a - 49, 4];
                    break;
                case 96 >= a:
                    a = [12, a - 65, 5];
                    break;
                case 128 >= a:
                    a = [13, a - 97, 5];
                    break;
                case 192 >= a:
                    a = [14, a - 129, 6];
                    break;
                case 256 >= a:
                    a = [15, a - 193, 6];
                    break;
                case 384 >= a:
                    a = [16, a - 257, 7];
                    break;
                case 512 >= a:
                    a = [17, a - 385, 7];
                    break;
                case 768 >= a:
                    a = [18, a - 513, 8];
                    break;
                case 1024 >= a:
                    a = [19, a - 769, 8];
                    break;
                case 1536 >= a:
                    a = [20, a - 1025, 9];
                    break;
                case 2048 >= a:
                    a = [21, a - 1537, 9];
                    break;
                case 3072 >= a:
                    a = [22, a - 2049, 10];
                    break;
                case 4096 >= a:
                    a = [23, a - 3073, 10];
                    break;
                case 6144 >= a:
                    a = [24, a - 4097, 11];
                    break;
                case 8192 >= a:
                    a = [25, a - 6145, 11];
                    break;
                case 12288 >= a:
                    a = [26, a - 8193, 12];
                    break;
                case 16384 >= a:
                    a = [27, a - 12289, 12];
                    break;
                case 24576 >= a:
                    a = [28, a - 16385, 13];
                    break;
                case 32768 >= a:
                    a = [29, a - 24577, 13];
                    break;
                default:
                    throw "invalid distance"
            }
            return a
        };
        o.prototype.M = function() {
            var a = this.u,
                b = [],
                c = 0,
                d;
            d = t[this.length];
            b[c++] = d & 65535;
            b[c++] = d >> 16 & 255;
            b[c++] = d >> 24;
            d = this.B(a);
            b[c++] = d[0];
            b[c++] = d[1];
            b[c++] = d[2];
            return b
        };
        var v = 0,
            w = 1,
            x = {
                K: v,
                J: w
            };
        u.prototype.m = function() {
            for (; !this.p;) this.C();
            return this.q()
        };
        var y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            z = c ? new Uint16Array(y) : y,
            A = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
            B = c ? new Uint16Array(A) : A,
            C = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
            D = c ? new Uint8Array(C) : C,
            E = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
            F = c ? new Uint16Array(E) : E,
            G = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            H = c ? new Uint8Array(G) : G,
            I = new(c ? Uint8Array : Array)(288),
            J, K;
        J = 0;
        for (K = I.length; J < K; ++J) I[J] = 143 >= J ? 8 : 255 >= J ? 9 : 279 >= J ? 7 : 8;
        var L = l(I),
            M = new(c ? Uint8Array : Array)(30),
            N, O;
        N = 0;
        for (O = M.length; N < O; ++N) M[N] = 5;
        var P = l(M);
        u.prototype.C = function() {
            var a = this.d(3);
            a & 1 && (this.p = !0);
            a >>>= 1;
            switch (a) {
                case 0:
                    this.G();
                    break;
                case 1:
                    this.F();
                    break;
                case 2:
                    this.D();
                    break;
                default:
                    throw Error("unknown BTYPE: " + a)
            }
        };
        u.prototype.d = function(a) {
            for (var b = this.h, c = this.e, d = this.input, e = this.b, f; c < a;) {
                f = d[e++];
                if (void 0 === f) throw Error("input buffer is broken");
                b |= f << c;
                c += 8
            }
            f = b & (1 << a) - 1;
            this.h = b >>> a;
            this.e = c - a;
            this.b = e;
            return f
        };
        u.prototype.j = function(a) {
            for (var b = this.h, c = this.e, d = this.input, e = this.b, f = a[0], a = a[1], g; c < a;) {
                g = d[e++];
                if (void 0 === g) throw Error("input buffer is broken");
                b |= g << c;
                c += 8
            }
            d = f[b & (1 << a) - 1];
            f = d >>> 16;
            this.h = b >> f;
            this.e = c - f;
            this.b = e;
            return d & 65535
        };
        u.prototype.G = function() {
            var a = this.input,
                b = this.b,
                d = this.c,
                e = this.a,
                f, g, h, i = d.length;
            this.e = this.h = 0;
            f = a[b++];
            if (void 0 === f) throw Error("invalid uncompressed block header: LEN (first byte)");
            g = f;
            f = a[b++];
            if (void 0 === f) throw Error("invalid uncompressed block header: LEN (second byte)");
            g |= f << 8;
            f = a[b++];
            if (void 0 === f) throw Error("invalid uncompressed block header: NLEN (first byte)");
            h = f;
            f = a[b++];
            if (void 0 === f) throw Error("invalid uncompressed block header: NLEN (second byte)");
            if (g === ~(h | f << 8)) throw Error("invalid uncompressed block header: length verify");
            if (b + g > a.length) throw Error("input buffer is broken");
            switch (this.i) {
                case v:
                    for (; e + g >= d.length;) {
                        f = i - e;
                        g -= f;
                        if (c) d.set(a.subarray(b, b + f), e), e += f, b += f;
                        else
                            for (; f--;) d[e++] = a[b++];
                        this.a = e;
                        d = this.g();
                        e = this.a
                    }
                    break;
                case w:
                    for (; e + g > d.length;) d = this.g({
                        s: 2
                    });
                    break;
                default:
                    throw Error("invalid inflate mode")
            }
            if (c) d.set(a.subarray(b, b + g), e), e += g, b += g;
            else
                for (; g--;) d[e++] = a[b++];
            this.b = b;
            this.a = e;
            this.c = d
        };
        u.prototype.F = function() {
            this.l(L, P)
        };
        u.prototype.D = function() {
            function a(a, b, c) {
                for (var d, e, f = 0, f = 0; f < a;) switch (d = this.j(b), d) {
                    case 16:
                        for (d = 3 + this.d(2); d--;) c[f++] = e;
                        break;
                    case 17:
                        for (d = 3 + this.d(3); d--;) c[f++] = 0;
                        e = 0;
                        break;
                    case 18:
                        for (d = 11 + this.d(7); d--;) c[f++] = 0;
                        e = 0;
                        break;
                    default:
                        e = c[f++] = d
                }
                return c
            }
            var b = this.d(5) + 257,
                d = this.d(5) + 1,
                e = this.d(4) + 4,
                f = new(c ? Uint8Array : Array)(z.length),
                g;
            for (g = g = 0; g < e; ++g) f[z[g]] = this.d(3);
            e = l(f);
            f = new(c ? Uint8Array : Array)(b);
            g = new(c ? Uint8Array : Array)(d);
            this.l(l(a.call(this, b, e, f)), l(a.call(this, d, e, g)))
        };
        u.prototype.l = function(a, b) {
            var c = this.c,
                d = this.a;
            this.r = a;
            this.w = b;
            for (var e = c.length - 258, f, g, h; 256 !== (f = this.j(a));)
                if (256 > f) d >= e && (this.a = d, c = this.g(), d = this.a), c[d++] = f;
                else {
                    f -= 257;
                    h = B[f];
                    0 < D[f] && (h += this.d(D[f]));
                    f = this.j(b);
                    g = F[f];
                    0 < H[f] && (g += this.d(H[f]));
                    d >= e && (this.a = d, c = this.g(), d = this.a);
                    for (; h--;) c[d] = c[d++ - g]
                } for (; 8 <= this.e;) this.e -= 8, this.b--;
            this.a = d
        };
        u.prototype.z = function(a, b) {
            var c = this.c,
                d = this.a;
            this.r = a;
            this.w = b;
            for (var e = c.length, f, g, h; 256 !== (f = this.j(a));)
                if (256 > f) d === e && (c = this.g(), e = c.length), c[d++] = f;
                else {
                    f -= 257;
                    h = B[f];
                    0 < D[f] && (h += this.d(D[f]));
                    f = this.j(b);
                    g = F[f];
                    0 < H[f] && (g += this.d(H[f]));
                    d + h >= e && (c = this.g(), e = c.length);
                    for (; h--;) c[d] = c[d++ - g]
                } for (; 8 <= this.e;) this.e -= 8, this.b--;
            this.a = d
        };
        u.prototype.g = function() {
            var a = new(c ? Uint8Array : Array)(this.a - 32768),
                b = this.a - 32768,
                d, e, f = this.c;
            if (c) a.set(f.subarray(32768, a.length));
            else {
                d = 0;
                for (e = a.length; d < e; ++d) a[d] = f[d + 32768]
            }
            this.k.push(a);
            this.n += a.length;
            if (c) f.set(f.subarray(b, b + 32768));
            else
                for (d = 0; 32768 > d; ++d) f[d] = f[b + d];
            this.a = 32768;
            return f
        };
        u.prototype.A = function(a) {
            var b = this.input.length / this.b + 1 | 0,
                d = this.input,
                e = this.c;
            a && ("number" === typeof a.s && (b = a.s), "number" === typeof a.t && (b += a.t));
            2 > b ? (a = (d.length - this.b) / this.r[2], a = 258 * (a / 2) | 0, a = a < e.length ? e.length + a : e.length << 1) : a = e.length * b;
            c ? (a = new Uint8Array(a), a.set(e)) : a = e;
            return this.c = a
        };
        u.prototype.q = function() {
            var a = 0,
                b = this.c,
                d = this.k,
                e, f = new(c ? Uint8Array : Array)(this.n + (this.a - 32768)),
                g, h, i, j;
            if (0 === d.length) return c ? this.c.subarray(32768, this.a) : this.c.slice(32768, this.a);
            g = 0;
            for (h = d.length; g < h; ++g) {
                e = d[g];
                i = 0;
                for (j = e.length; i < j; ++i) f[a++] = e[i]
            }
            g = 32768;
            for (h = this.a; g < h; ++g) f[a++] = b[g];
            this.k = [];
            return this.buffer = f
        };
        u.prototype.v = function() {
            var a, b = this.a;
            this.I ? c ? (a = new Uint8Array(b), a.set(this.c.subarray(0, b))) : a = this.c.slice(0, b) : a = c ? this.c.subarray(0, b) : this.c.slice(0, b);
            return this.buffer = a
        };
        Q.prototype.m = function() {
            var a = this.input,
                b;
            b = this.H.m();
            if (this.o) {
                var a = a[this.b++] << 24 | a[this.b++] << 16 | a[this.b++] << 8 | a[this.b++],
                    c = b;
                if ("string" === typeof c) {
                    var c = c.split(""),
                        d, e;
                    d = 0;
                    for (e = c.length; d < e; d++) c[d] = (c[d].charCodeAt(0) & 255) >>> 0
                }
                d = 1;
                e = 0;
                for (var f = c.length, g, h = 0; 0 < f;) {
                    g = 1024 < f ? 1024 : f;
                    f -= g;
                    do d += c[h++], e += d; while (--g);
                    d %= 65521;
                    e %= 65521
                }
                if (a !== (e << 16 | d) >>> 0) throw Error("invalid adler-32 checksum")
            }
            return b
        };
        b("Zlib.Inflate", Q, void 0);
        b("Zlib.Inflate.BufferType", x, void 0);
        b("Zlib.Inflate.prototype.decompress", Q.prototype.m, void 0);
        var R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        c && new Uint16Array(R);
        var S = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
        c && new Uint16Array(S);
        var T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
        c && new Uint8Array(T);
        var U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
        c && new Uint16Array(U);
        var V = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
        c && new Uint8Array(V);
        var W = new(c ? Uint8Array : Array)(288),
            X, Y;
        X = 0;
        for (Y = W.length; X < Y; ++X) W[X] = 143 >= X ? 8 : 255 >= X ? 9 : 279 >= X ? 7 : 8;
        l(W);
        var Z = new(c ? Uint8Array : Array)(30),
            $, _;
        $ = 0;
        for (_ = Z.length; $ < _; ++$) Z[$] = 5;
        l(Z);
        var ab = 8
    }).call((new Function("return this"))())
})();
