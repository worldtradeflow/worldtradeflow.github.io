! function(t) {
	var e = {};

	function n(r) {
		if (e[r]) return e[r].exports;
		var o = e[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = t, n.c = e, n.d = function(t, e, r) {
		n.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: r
		})
	}, n.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function(t, e) {
		if (1 & e && (t = n(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var o in t) n.d(r, o, function(e) {
				return t[e]
			}.bind(null, o));
		return r
	}, n.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 543)
}([function(t, e, n) {
	"use strict";
	n.d(e, "h", (function() {
		return d
	})), n.d(e, "f", (function() {
		return y
	})), n.d(e, "e", (function() {
		return v
	})), n.d(e, "g", (function() {
		return b
	})), n.d(e, "a", (function() {
		return a.a
	})), n.d(e, "d", (function() {
		return B
	})), n.d(e, "b", (function() {
		return H
	}));
	var r, o, i, a = n(2),
		c = 0,
		u = [],
		l = a.i.__r,
		s = a.i.diffed,
		f = a.i.__c,
		p = a.i.unmount;

	function h(t, e) {
		a.i.__h && a.i.__h(o, t, c || e), c = 0;
		var n = o.__H || (o.__H = {
			__: [],
			__h: []
		});
		return t >= n.__.length && n.__.push({}), n.__[t]
	}

	function d(t) {
		return c = 1, y(S, t)
	}

	function y(t, e, n) {
		var i = h(r++, 2);
		return i.t = t, i.__c || (i.__ = [n ? n(e) : S(void 0, e), function(t) {
			var e = i.t(i.__[0], t);
			i.__[0] !== e && (i.__ = [e, i.__[1]], i.__c.setState({}))
		}], i.__c = o), i.__
	}

	function v(t, e) {
		var n = h(r++, 3);
		!a.i.__s && O(n.__H, e) && (n.__ = t, n.__H = e, o.__H.__h.push(n))
	}

	function m(t, e) {
		var n = h(r++, 4);
		!a.i.__s && O(n.__H, e) && (n.__ = t, n.__H = e, o.__h.push(n))
	}

	function b(t) {
		return c = 5, _((function() {
			return {
				current: t
			}
		}), [])
	}

	function _(t, e) {
		var n = h(r++, 7);
		return O(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__
	}

	function g() {
		u.some((function(t) {
			if (t.__P) try {
				t.__H.__h.forEach(w), t.__H.__h.forEach(E), t.__H.__h = []
			} catch (e) {
				return t.__H.__h = [], a.i.__e(e, t.__v), !0
			}
		})), u = []
	}
	a.i.__r = function(t) {
		l && l(t), r = 0;
		var e = (o = t.__c).__H;
		e && (e.__h.forEach(w), e.__h.forEach(E), e.__h = [])
	}, a.i.diffed = function(t) {
		s && s(t);
		var e = t.__c;
		e && e.__H && e.__H.__h.length && (1 !== u.push(e) && i === a.i.requestAnimationFrame || ((i = a.i.requestAnimationFrame) || function(t) {
			var e, n = function() {
					clearTimeout(r), x && cancelAnimationFrame(e), setTimeout(t)
				},
				r = setTimeout(n, 100);
			x && (e = requestAnimationFrame(n))
		})(g))
	}, a.i.__c = function(t, e) {
		e.some((function(t) {
			try {
				t.__h.forEach(w), t.__h = t.__h.filter((function(t) {
					return !t.__ || E(t)
				}))
			} catch (n) {
				e.some((function(t) {
					t.__h && (t.__h = [])
				})), e = [], a.i.__e(n, t.__v)
			}
		})), f && f(t, e)
	}, a.i.unmount = function(t) {
		p && p(t);
		var e = t.__c;
		if (e && e.__H) try {
			e.__H.__.forEach(w)
		} catch (t) {
			a.i.__e(t, e.__v)
		}
	};
	var x = "function" == typeof requestAnimationFrame;

	function w(t) {
		"function" == typeof t.u && t.u()
	}

	function E(t) {
		t.u = t.__()
	}

	function O(t, e) {
		return !t || t.length !== e.length || e.some((function(e, n) {
			return e !== t[n]
		}))
	}

	function S(t, e) {
		return "function" == typeof e ? e(t) : e
	}

	function P(t, e) {
		for (var n in e) t[n] = e[n];
		return t
	}

	function k(t, e) {
		for (var n in t)
			if ("__source" !== n && !(n in e)) return !0;
		for (var r in e)
			if ("__source" !== r && t[r] !== e[r]) return !0;
		return !1
	}

	function j(t) {
		this.props = t
	}(j.prototype = new a.a).isPureReactComponent = !0, j.prototype.shouldComponentUpdate = function(t, e) {
		return k(this.props, t) || k(this.state, e)
	};
	var M = a.i.__b;
	a.i.__b = function(t) {
		t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), M && M(t)
	};
	var C = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
	var N = function(t, e) {
			return null == t ? null : Object(a.k)(Object(a.k)(t).map(e))
		},
		T = {
			map: N,
			forEach: N,
			count: function(t) {
				return t ? Object(a.k)(t).length : 0
			},
			only: function(t) {
				var e = Object(a.k)(t);
				if (1 !== e.length) throw "Children.only";
				return e[0]
			},
			toArray: a.k
		},
		R = a.i.__e;

	function A(t) {
		return t && ((t = P({}, t)).__c = null, t.__k = t.__k && t.__k.map(A)), t
	}

	function D(t) {
		return t && (t.__v = null, t.__k = t.__k && t.__k.map(D)), t
	}

	function L() {
		this.__u = 0, this.t = null, this.__b = null
	}

	function I(t) {
		var e = t.__.__c;
		return e && e.__e && e.__e(t)
	}

	function q() {
		this.u = null, this.o = null
	}
	a.i.__e = function(t, e, n) {
		if (t.then)
			for (var r, o = e; o = o.__;)
				if ((r = o.__c) && r.__c) return null == e.__e && (e.__e = n.__e, e.__k = n.__k), r.__c(t, e.__c);
		R(t, e, n)
	}, (L.prototype = new a.a).__c = function(t, e) {
		var n = this;
		null == n.t && (n.t = []), n.t.push(e);
		var r = I(n.__v),
			o = !1,
			i = function() {
				o || (o = !0, e.componentWillUnmount = e.__c, r ? r(a) : a())
			};
		e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
			i(), e.__c && e.__c()
		};
		var a = function() {
				var t;
				if (!--n.__u)
					for (n.__v.__k[0] = D(n.state.__e), n.setState({
							__e: n.__b = null
						}); t = n.t.pop();) t.forceUpdate()
			},
			c = n.__v;
		c && !0 === c.__h || n.__u++ || n.setState({
			__e: n.__b = n.__v.__k[0]
		}), t.then(i, i)
	}, L.prototype.componentWillUnmount = function() {
		this.t = []
	}, L.prototype.render = function(t, e) {
		this.__b && (this.__v.__k && (this.__v.__k[0] = A(this.__b)), this.__b = null);
		var n = e.__e && Object(a.f)(a.b, null, t.fallback);
		return n && (n.__h = null), [Object(a.f)(a.b, null, e.__e ? null : t.children), n]
	};
	var U = function(t, e, n) {
		if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size))
			for (n = t.u; n;) {
				for (; n.length > 3;) n.pop()();
				if (n[1] < n[0]) break;
				t.u = n = n[2]
			}
	};

	function z(t) {
		return this.getChildContext = function() {
			return t.context
		}, t.children
	}

	function F(t) {
		var e = this,
			n = t.i,
			r = Object(a.f)(z, {
				context: e.context
			}, t.__v);
		e.componentWillUnmount = function() {
			var t = e.l.parentNode;
			t && t.removeChild(e.l), Object(a.c)(e.s)
		}, e.i && e.i !== n && (e.componentWillUnmount(), e.h = !1), t.__v ? e.h ? (n.__k = e.__k, Object(a.j)(r, n), e.__k = n.__k) : (e.l = document.createTextNode(""), e.__k = n.__k, Object(a.h)("", n), n.appendChild(e.l), e.h = !0, e.i = n, Object(a.j)(r, n, e.l), n.__k = e.__k, e.__k = e.l.__k) : e.h && e.componentWillUnmount(), e.s = r
	}

	function H(t, e) {
		return Object(a.f)(F, {
			__v: t,
			i: e
		})
	}(q.prototype = new a.a).__e = function(t) {
		var e = this,
			n = I(e.__v),
			r = e.o.get(t);
		return r[0]++,
			function(o) {
				var i = function() {
					e.props.revealOrder ? (r.push(o), U(e, t, r)) : o()
				};
				n ? n(i) : i()
			}
	}, q.prototype.render = function(t) {
		this.u = null, this.o = new Map;
		var e = Object(a.k)(t.children);
		t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
		for (var n = e.length; n--;) this.o.set(e[n], this.u = [1, 0, this.u]);
		return t.children
	}, q.prototype.componentDidUpdate = q.prototype.componentDidMount = function() {
		var t = this;
		this.o.forEach((function(e, n) {
			U(t, n, e)
		}))
	};
	var Y = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
		W = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
		G = "undefined" != typeof Symbol ? /fil|che|rad/i : /fil|che|ra/i;

	function B(t, e, n) {
		return null == e.__k && (e.textContent = ""), Object(a.j)(t, e), "function" == typeof n && n(), t ? t.__c : null
	}
	a.a.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(t) {
		Object.defineProperty(a.a.prototype, t, {
			configurable: !0,
			get: function() {
				return this["UNSAFE_" + t]
			},
			set: function(e) {
				Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: e
				})
			}
		})
	}));
	var V = a.i.event;

	function $() {}

	function Q() {
		return this.cancelBubble
	}

	function Z() {
		return this.defaultPrevented
	}
	a.i.event = function(t) {
		return V && (t = V(t)), t.persist = $, t.isPropagationStopped = Q, t.isDefaultPrevented = Z, t.nativeEvent = t
	};
	var X, J = {
			configurable: !0,
			get: function() {
				return this.class
			}
		},
		K = a.i.vnode;
	a.i.vnode = function(t) {
		var e = t.type,
			n = t.props,
			r = n;
		if ("string" == typeof e) {
			for (var o in r = {}, n) {
				var i = n[o];
				"defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + e) && !G.test(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : W.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i
			}
			"select" == e && r.multiple && Array.isArray(r.value) && (r.value = Object(a.k)(n.children).forEach((function(t) {
				t.props.selected = -1 != r.value.indexOf(t.props.value)
			}))), t.props = r
		}
		e && n.class != n.className && (J.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", J)), t.$$typeof = Y, K && K(t)
	};
	var tt = a.i.__r;
	a.i.__r = function(t) {
		tt && tt(t), X = t.__c
	};
	var et = {
		ReactCurrentDispatcher: {
			current: {
				readContext: function(t) {
					return X.__n[t.__c].props.value
				}
			}
		}
	};

	function nt(t) {
		return !!t && t.$$typeof === Y
	}
	a.b, e.c = {
		useState: d,
		useReducer: y,
		useEffect: v,
		useLayoutEffect: m,
		useRef: b,
		useImperativeHandle: function(t, e, n) {
			c = 6, m((function() {
				"function" == typeof t ? t(e()) : t && (t.current = e())
			}), null == n ? n : n.concat(t))
		},
		useMemo: _,
		useCallback: function(t, e) {
			return c = 8, _((function() {
				return t
			}), e)
		},
		useContext: function(t) {
			var e = o.context[t.__c],
				n = h(r++, 9);
			return n.__c = t, e ? (null == n.__ && (n.__ = !0, e.sub(o)), e.props.value) : t.__
		},
		useDebugValue: function(t, e) {
			a.i.useDebugValue && a.i.useDebugValue(e ? e(t) : t)
		},
		version: "16.8.0",
		Children: T,
		render: B,
		hydrate: function(t, e, n) {
			return Object(a.h)(t, e), "function" == typeof n && n(), t ? t.__c : null
		},
		unmountComponentAtNode: function(t) {
			return !!t.__k && (Object(a.j)(null, t), !0)
		},
		createPortal: H,
		createElement: a.f,
		createContext: a.e,
		createFactory: function(t) {
			return a.f.bind(null, t)
		},
		cloneElement: function(t) {
			return nt(t) ? a.d.apply(null, arguments) : t
		},
		createRef: a.g,
		Fragment: a.b,
		isValidElement: nt,
		findDOMNode: function(t) {
			return t && (t.base || 1 === t.nodeType && t) || null
		},
		Component: a.a,
		PureComponent: j,
		memo: function(t, e) {
			function n(t) {
				var n = this.props.ref,
					r = n == t.ref;
				return !r && n && (n.call ? n(null) : n.current = null), e ? !e(this.props, t) || !r : k(this.props, t)
			}

			function r(e) {
				return this.shouldComponentUpdate = n, Object(a.f)(t, e)
			}
			return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
		},
		forwardRef: function(t) {
			function e(e, n) {
				var r = P({}, e);
				return delete r.ref, t(r, (n = e.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
			}
			return e.$$typeof = C, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e
		},
		unstable_batchedUpdates: function(t, e) {
			return t(e)
		},
		StrictMode: a.b,
		Suspense: L,
		SuspenseList: q,
		lazy: function(t) {
			var e, n, r;

			function o(o) {
				if (e || (e = t()).then((function(t) {
						n = t.default || t
					}), (function(t) {
						r = t
					})), r) throw r;
				if (!n) throw e;
				return Object(a.f)(n, o)
			}
			return o.displayName = "Lazy", o.__f = !0, o
		},
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: et
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "c", (function() {
		return Lt
	})), n.d(e, "d", (function() {
		return $t
	})), n.d(e, "e", (function() {
		return ie
	})), n.d(e, "i", (function() {
		return xe
	})), n.d(e, "k", (function() {
		return gn
	})), n.d(e, "a", (function() {
		return In
	})), n.d(e, "b", (function() {
		return qn
	})), n.d(e, "f", (function() {
		return Fn
	})), n.d(e, "g", (function() {
		return Yn
	})), n.d(e, "h", (function() {
		return Hn
	})), n.d(e, "l", (function() {
		return Rn
	})), n.d(e, "m", (function() {
		return An
	})), n.d(e, "j", (function() {
		return Gn
	})), n.d(e, "n", (function() {
		return ne
	})), n.d(e, "o", (function() {
		return I
	}));
	var r = function() {
		return new o
	};

	function o() {
		this.reset()
	}
	o.prototype = {
		constructor: o,
		reset: function() {
			this.s = this.t = 0
		},
		add: function(t) {
			a(i, t, this.t), a(this, i.s, this.s), this.s ? this.t += i.t : this.s = i.t
		},
		valueOf: function() {
			return this.s
		}
	};
	var i = new o;

	function a(t, e, n) {
		var r = t.s = e + n,
			o = r - e,
			i = r - o;
		t.t = e - i + (n - o)
	}
	var c = 1e-6,
		u = Math.PI,
		l = u / 2,
		s = u / 4,
		f = 2 * u,
		p = 180 / u,
		h = u / 180,
		d = Math.abs,
		y = Math.atan,
		v = Math.atan2,
		m = Math.cos,
		b = (Math.ceil, Math.exp),
		_ = (Math.floor, Math.log),
		g = (Math.pow, Math.sin),
		x = (Math.sign, Math.sqrt),
		w = Math.tan;

	function E(t) {
		return t > 1 ? 0 : t < -1 ? u : Math.acos(t)
	}

	function O(t) {
		return t > 1 ? l : t < -1 ? -l : Math.asin(t)
	}

	function S(t) {
		return (t = g(t / 2)) * t
	}

	function P() {}

	function k(t, e) {
		t && M.hasOwnProperty(t.type) && M[t.type](t, e)
	}
	var j = {
			Feature: function(t, e) {
				k(t.geometry, e)
			},
			FeatureCollection: function(t, e) {
				for (var n = t.features, r = -1, o = n.length; ++r < o;) k(n[r].geometry, e)
			}
		},
		M = {
			Sphere: function(t, e) {
				e.sphere()
			},
			Point: function(t, e) {
				t = t.coordinates, e.point(t[0], t[1], t[2])
			},
			MultiPoint: function(t, e) {
				for (var n = t.coordinates, r = -1, o = n.length; ++r < o;) t = n[r], e.point(t[0], t[1], t[2])
			},
			LineString: function(t, e) {
				C(t.coordinates, e, 0)
			},
			MultiLineString: function(t, e) {
				for (var n = t.coordinates, r = -1, o = n.length; ++r < o;) C(n[r], e, 0)
			},
			Polygon: function(t, e) {
				N(t.coordinates, e)
			},
			MultiPolygon: function(t, e) {
				for (var n = t.coordinates, r = -1, o = n.length; ++r < o;) N(n[r], e)
			},
			GeometryCollection: function(t, e) {
				for (var n = t.geometries, r = -1, o = n.length; ++r < o;) k(n[r], e)
			}
		};

	function C(t, e, n) {
		var r, o = -1,
			i = t.length - n;
		for (e.lineStart(); ++o < i;) r = t[o], e.point(r[0], r[1], r[2]);
		e.lineEnd()
	}

	function N(t, e) {
		var n = -1,
			r = t.length;
		for (e.polygonStart(); ++n < r;) C(t[n], e, 1);
		e.polygonEnd()
	}
	var T, R, A, D, L, I = function(t, e) {
			t && j.hasOwnProperty(t.type) ? j[t.type](t, e) : k(t, e)
		},
		q = r(),
		U = r(),
		z = {
			point: P,
			lineStart: P,
			lineEnd: P,
			polygonStart: function() {
				q.reset(), z.lineStart = F, z.lineEnd = H
			},
			polygonEnd: function() {
				var t = +q;
				U.add(t < 0 ? f + t : t), this.lineStart = this.lineEnd = this.point = P
			},
			sphere: function() {
				U.add(f)
			}
		};

	function F() {
		z.point = Y
	}

	function H() {
		W(T, R)
	}

	function Y(t, e) {
		z.point = W, T = t, R = e, A = t *= h, D = m(e = (e *= h) / 2 + s), L = g(e)
	}

	function W(t, e) {
		var n = (t *= h) - A,
			r = n >= 0 ? 1 : -1,
			o = r * n,
			i = m(e = (e *= h) / 2 + s),
			a = g(e),
			c = L * a,
			u = D * i + c * m(o),
			l = c * r * g(o);
		q.add(v(l, u)), A = t, D = i, L = a
	}

	function G(t) {
		return [v(t[1], t[0]), O(t[2])]
	}

	function B(t) {
		var e = t[0],
			n = t[1],
			r = m(n);
		return [r * m(e), r * g(e), g(n)]
	}

	function V(t, e) {
		return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
	}

	function $(t, e) {
		return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
	}

	function Q(t, e) {
		t[0] += e[0], t[1] += e[1], t[2] += e[2]
	}

	function Z(t, e) {
		return [t[0] * e, t[1] * e, t[2] * e]
	}

	function X(t) {
		var e = x(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
		t[0] /= e, t[1] /= e, t[2] /= e
	}
	var J, K, tt, et, nt, rt, ot, it, at, ct, ut = r(),
		lt = {
			point: st,
			lineStart: pt,
			lineEnd: ht,
			polygonStart: function() {
				lt.point = dt, lt.lineStart = yt, lt.lineEnd = vt, ut.reset(), z.polygonStart()
			},
			polygonEnd: function() {
				z.polygonEnd(), lt.point = st, lt.lineStart = pt, lt.lineEnd = ht, q < 0 ? (J = -(tt = 180), K = -(et = 90)) : ut > c ? et = 90 : ut < -c && (K = -90), ct[0] = J, ct[1] = tt
			}
		};

	function st(t, e) {
		at.push(ct = [J = t, tt = t]), e < K && (K = e), e > et && (et = e)
	}

	function ft(t, e) {
		var n = B([t * h, e * h]);
		if (it) {
			var r = $(it, n),
				o = $([r[1], -r[0], 0], r);
			X(o), o = G(o);
			var i, a = t - nt,
				c = a > 0 ? 1 : -1,
				u = o[0] * p * c,
				l = d(a) > 180;
			l ^ (c * nt < u && u < c * t) ? (i = o[1] * p) > et && (et = i) : l ^ (c * nt < (u = (u + 360) % 360 - 180) && u < c * t) ? (i = -o[1] * p) < K && (K = i) : (e < K && (K = e), e > et && (et = e)), l ? t < nt ? mt(J, t) > mt(J, tt) && (tt = t) : mt(t, tt) > mt(J, tt) && (J = t) : tt >= J ? (t < J && (J = t), t > tt && (tt = t)) : t > nt ? mt(J, t) > mt(J, tt) && (tt = t) : mt(t, tt) > mt(J, tt) && (J = t)
		} else at.push(ct = [J = t, tt = t]);
		e < K && (K = e), e > et && (et = e), it = n, nt = t
	}

	function pt() {
		lt.point = ft
	}

	function ht() {
		ct[0] = J, ct[1] = tt, lt.point = st, it = null
	}

	function dt(t, e) {
		if (it) {
			var n = t - nt;
			ut.add(d(n) > 180 ? n + (n > 0 ? 360 : -360) : n)
		} else rt = t, ot = e;
		z.point(t, e), ft(t, e)
	}

	function yt() {
		z.lineStart()
	}

	function vt() {
		dt(rt, ot), z.lineEnd(), d(ut) > c && (J = -(tt = 180)), ct[0] = J, ct[1] = tt, it = null
	}

	function mt(t, e) {
		return (e -= t) < 0 ? e + 360 : e
	}

	function bt(t, e) {
		return t[0] - e[0]
	}

	function _t(t, e) {
		return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e
	}
	var gt, xt, wt, Et, Ot, St, Pt, kt, jt, Mt, Ct, Nt, Tt, Rt, At, Dt, Lt = function(t) {
			var e, n, r, o, i, a, c;
			if (et = tt = -(J = K = 1 / 0), at = [], I(t, lt), n = at.length) {
				for (at.sort(bt), e = 1, i = [r = at[0]]; e < n; ++e) _t(r, (o = at[e])[0]) || _t(r, o[1]) ? (mt(r[0], o[1]) > mt(r[0], r[1]) && (r[1] = o[1]), mt(o[0], r[1]) > mt(r[0], r[1]) && (r[0] = o[0])) : i.push(r = o);
				for (a = -1 / 0, e = 0, r = i[n = i.length - 1]; e <= n; r = o, ++e) o = i[e], (c = mt(r[1], o[0])) > a && (a = c, J = o[0], tt = r[1])
			}
			return at = ct = null, J === 1 / 0 || K === 1 / 0 ? [
				[NaN, NaN],
				[NaN, NaN]
			] : [
				[J, K],
				[tt, et]
			]
		},
		It = {
			sphere: P,
			point: qt,
			lineStart: zt,
			lineEnd: Yt,
			polygonStart: function() {
				It.lineStart = Wt, It.lineEnd = Gt
			},
			polygonEnd: function() {
				It.lineStart = zt, It.lineEnd = Yt
			}
		};

	function qt(t, e) {
		t *= h;
		var n = m(e *= h);
		Ut(n * m(t), n * g(t), g(e))
	}

	function Ut(t, e, n) {
		++gt, wt += (t - wt) / gt, Et += (e - Et) / gt, Ot += (n - Ot) / gt
	}

	function zt() {
		It.point = Ft
	}

	function Ft(t, e) {
		t *= h;
		var n = m(e *= h);
		Rt = n * m(t), At = n * g(t), Dt = g(e), It.point = Ht, Ut(Rt, At, Dt)
	}

	function Ht(t, e) {
		t *= h;
		var n = m(e *= h),
			r = n * m(t),
			o = n * g(t),
			i = g(e),
			a = v(x((a = At * i - Dt * o) * a + (a = Dt * r - Rt * i) * a + (a = Rt * o - At * r) * a), Rt * r + At * o + Dt * i);
		xt += a, St += a * (Rt + (Rt = r)), Pt += a * (At + (At = o)), kt += a * (Dt + (Dt = i)), Ut(Rt, At, Dt)
	}

	function Yt() {
		It.point = qt
	}

	function Wt() {
		It.point = Bt
	}

	function Gt() {
		Vt(Nt, Tt), It.point = qt
	}

	function Bt(t, e) {
		Nt = t, Tt = e, t *= h, e *= h, It.point = Vt;
		var n = m(e);
		Rt = n * m(t), At = n * g(t), Dt = g(e), Ut(Rt, At, Dt)
	}

	function Vt(t, e) {
		t *= h;
		var n = m(e *= h),
			r = n * m(t),
			o = n * g(t),
			i = g(e),
			a = At * i - Dt * o,
			c = Dt * r - Rt * i,
			u = Rt * o - At * r,
			l = x(a * a + c * c + u * u),
			s = O(l),
			f = l && -s / l;
		jt += f * a, Mt += f * c, Ct += f * u, xt += s, St += s * (Rt + (Rt = r)), Pt += s * (At + (At = o)), kt += s * (Dt + (Dt = i)), Ut(Rt, At, Dt)
	}
	var $t = function(t) {
			gt = xt = wt = Et = Ot = St = Pt = kt = jt = Mt = Ct = 0, I(t, It);
			var e = jt,
				n = Mt,
				r = Ct,
				o = e * e + n * n + r * r;
			return o < 1e-12 && (e = St, n = Pt, r = kt, xt < c && (e = wt, n = Et, r = Ot), (o = e * e + n * n + r * r) < 1e-12) ? [NaN, NaN] : [v(n, e) * p, O(r / x(o)) * p]
		},
		Qt = function(t) {
			return function() {
				return t
			}
		},
		Zt = function(t, e) {
			function n(n, r) {
				return n = t(n, r), e(n[0], n[1])
			}
			return t.invert && e.invert && (n.invert = function(n, r) {
				return (n = e.invert(n, r)) && t.invert(n[0], n[1])
			}), n
		};

	function Xt(t, e) {
		return [t > u ? t - f : t < -u ? t + f : t, e]
	}

	function Jt(t, e, n) {
		return (t %= f) ? e || n ? Zt(te(t), ee(e, n)) : te(t) : e || n ? ee(e, n) : Xt
	}

	function Kt(t) {
		return function(e, n) {
			return [(e += t) > u ? e - f : e < -u ? e + f : e, n]
		}
	}

	function te(t) {
		var e = Kt(t);
		return e.invert = Kt(-t), e
	}

	function ee(t, e) {
		var n = m(t),
			r = g(t),
			o = m(e),
			i = g(e);

		function a(t, e) {
			var a = m(e),
				c = m(t) * a,
				u = g(t) * a,
				l = g(e),
				s = l * n + c * r;
			return [v(u * o - s * i, c * n - l * r), O(s * o + u * i)]
		}
		return a.invert = function(t, e) {
			var a = m(e),
				c = m(t) * a,
				u = g(t) * a,
				l = g(e),
				s = l * o - u * i;
			return [v(u * o + l * i, c * n + s * r), O(s * n - c * r)]
		}, a
	}
	Xt.invert = Xt;
	var ne = function(t) {
		function e(e) {
			return (e = t(e[0] * h, e[1] * h))[0] *= p, e[1] *= p, e
		}
		return t = Jt(t[0] * h, t[1] * h, t.length > 2 ? t[2] * h : 0), e.invert = function(e) {
			return (e = t.invert(e[0] * h, e[1] * h))[0] *= p, e[1] *= p, e
		}, e
	};

	function re(t, e, n, r, o, i) {
		if (n) {
			var a = m(e),
				c = g(e),
				u = r * n;
			null == o ? (o = e + r * f, i = e - u / 2) : (o = oe(a, o), i = oe(a, i), (r > 0 ? o < i : o > i) && (o += r * f));
			for (var l, s = o; r > 0 ? s > i : s < i; s -= u) l = G([a, -c * m(s), -c * g(s)]), t.point(l[0], l[1])
		}
	}

	function oe(t, e) {
		(e = B(e))[0] -= t, X(e);
		var n = E(-e[1]);
		return ((-e[2] < 0 ? -n : n) + f - c) % f
	}
	var ie = function() {
			var t, e, n = Qt([0, 0]),
				r = Qt(90),
				o = Qt(6),
				i = {
					point: function(n, r) {
						t.push(n = e(n, r)), n[0] *= p, n[1] *= p
					}
				};

			function a() {
				var a = n.apply(this, arguments),
					c = r.apply(this, arguments) * h,
					u = o.apply(this, arguments) * h;
				return t = [], e = Jt(-a[0] * h, -a[1] * h, 0).invert, re(i, c, u, 1), a = {
					type: "Polygon",
					coordinates: [t]
				}, t = e = null, a
			}
			return a.center = function(t) {
				return arguments.length ? (n = "function" == typeof t ? t : Qt([+t[0], +t[1]]), a) : n
			}, a.radius = function(t) {
				return arguments.length ? (r = "function" == typeof t ? t : Qt(+t), a) : r
			}, a.precision = function(t) {
				return arguments.length ? (o = "function" == typeof t ? t : Qt(+t), a) : o
			}, a
		},
		ae = function() {
			var t, e = [];
			return {
				point: function(e, n) {
					t.push([e, n])
				},
				lineStart: function() {
					e.push(t = [])
				},
				lineEnd: P,
				rejoin: function() {
					e.length > 1 && e.push(e.pop().concat(e.shift()))
				},
				result: function() {
					var n = e;
					return e = [], t = null, n
				}
			}
		},
		ce = function(t, e) {
			return d(t[0] - e[0]) < c && d(t[1] - e[1]) < c
		};

	function ue(t, e, n, r) {
		this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
	}
	var le = function(t, e, n, r, o) {
		var i, a, c = [],
			u = [];
		if (t.forEach((function(t) {
				if (!((e = t.length - 1) <= 0)) {
					var e, n, r = t[0],
						a = t[e];
					if (ce(r, a)) {
						for (o.lineStart(), i = 0; i < e; ++i) o.point((r = t[i])[0], r[1]);
						o.lineEnd()
					} else c.push(n = new ue(r, t, null, !0)), u.push(n.o = new ue(r, null, n, !1)), c.push(n = new ue(a, t, null, !1)), u.push(n.o = new ue(a, null, n, !0))
				}
			})), c.length) {
			for (u.sort(e), se(c), se(u), i = 0, a = u.length; i < a; ++i) u[i].e = n = !n;
			for (var l, s, f = c[0];;) {
				for (var p = f, h = !0; p.v;)
					if ((p = p.n) === f) return;
				l = p.z, o.lineStart();
				do {
					if (p.v = p.o.v = !0, p.e) {
						if (h)
							for (i = 0, a = l.length; i < a; ++i) o.point((s = l[i])[0], s[1]);
						else r(p.x, p.n.x, 1, o);
						p = p.n
					} else {
						if (h)
							for (l = p.p.z, i = l.length - 1; i >= 0; --i) o.point((s = l[i])[0], s[1]);
						else r(p.x, p.p.x, -1, o);
						p = p.p
					}
					l = (p = p.o).z, h = !h
				} while (!p.v);
				o.lineEnd()
			}
		}
	};

	function se(t) {
		if (e = t.length) {
			for (var e, n, r = 0, o = t[0]; ++r < e;) o.n = n = t[r], n.p = o, o = n;
			o.n = n = t[0], n.p = o
		}
	}
	var fe = n(4),
		pe = 1e9,
		he = -pe;

	function de(t, e, n, r) {
		function o(o, i) {
			return t <= o && o <= n && e <= i && i <= r
		}

		function i(o, i, c, u) {
			var s = 0,
				f = 0;
			if (null == o || (s = a(o, c)) !== (f = a(i, c)) || l(o, i) < 0 ^ c > 0)
				do {
					u.point(0 === s || 3 === s ? t : n, s > 1 ? r : e)
				} while ((s = (s + c + 4) % 4) !== f);
			else u.point(i[0], i[1])
		}

		function a(r, o) {
			return d(r[0] - t) < c ? o > 0 ? 0 : 3 : d(r[0] - n) < c ? o > 0 ? 2 : 1 : d(r[1] - e) < c ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
		}

		function u(t, e) {
			return l(t.x, e.x)
		}

		function l(t, e) {
			var n = a(t, 1),
				r = a(e, 1);
			return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
		}
		return function(a) {
			var c, l, s, f, p, h, d, y, v, m, b, _ = a,
				g = ae(),
				x = {
					point: w,
					lineStart: function() {
						x.point = E, l && l.push(s = []);
						m = !0, v = !1, d = y = NaN
					},
					lineEnd: function() {
						c && (E(f, p), h && v && g.rejoin(), c.push(g.result()));
						x.point = w, v && _.lineEnd()
					},
					polygonStart: function() {
						_ = g, c = [], l = [], b = !0
					},
					polygonEnd: function() {
						var e = function() {
								for (var e = 0, n = 0, o = l.length; n < o; ++n)
									for (var i, a, c = l[n], u = 1, s = c.length, f = c[0], p = f[0], h = f[1]; u < s; ++u) i = p, a = h, p = (f = c[u])[0], h = f[1], a <= r ? h > r && (p - i) * (r - a) > (h - a) * (t - i) && ++e : h <= r && (p - i) * (r - a) < (h - a) * (t - i) && --e;
								return e
							}(),
							n = b && e,
							o = (c = Object(fe.d)(c)).length;
						(n || o) && (a.polygonStart(), n && (a.lineStart(), i(null, null, 1, a), a.lineEnd()), o && le(c, u, e, i, a), a.polygonEnd());
						_ = a, c = l = s = null
					}
				};

			function w(t, e) {
				o(t, e) && _.point(t, e)
			}

			function E(i, a) {
				var c = o(i, a);
				if (l && s.push([i, a]), m) f = i, p = a, h = c, m = !1, c && (_.lineStart(), _.point(i, a));
				else if (c && v) _.point(i, a);
				else {
					var u = [d = Math.max(he, Math.min(pe, d)), y = Math.max(he, Math.min(pe, y))],
						g = [i = Math.max(he, Math.min(pe, i)), a = Math.max(he, Math.min(pe, a))];
					! function(t, e, n, r, o, i) {
						var a, c = t[0],
							u = t[1],
							l = 0,
							s = 1,
							f = e[0] - c,
							p = e[1] - u;
						if (a = n - c, f || !(a > 0)) {
							if (a /= f, f < 0) {
								if (a < l) return;
								a < s && (s = a)
							} else if (f > 0) {
								if (a > s) return;
								a > l && (l = a)
							}
							if (a = o - c, f || !(a < 0)) {
								if (a /= f, f < 0) {
									if (a > s) return;
									a > l && (l = a)
								} else if (f > 0) {
									if (a < l) return;
									a < s && (s = a)
								}
								if (a = r - u, p || !(a > 0)) {
									if (a /= p, p < 0) {
										if (a < l) return;
										a < s && (s = a)
									} else if (p > 0) {
										if (a > s) return;
										a > l && (l = a)
									}
									if (a = i - u, p || !(a < 0)) {
										if (a /= p, p < 0) {
											if (a > s) return;
											a > l && (l = a)
										} else if (p > 0) {
											if (a < l) return;
											a < s && (s = a)
										}
										return l > 0 && (t[0] = c + l * f, t[1] = u + l * p), s < 1 && (e[0] = c + s * f, e[1] = u + s * p), !0
									}
								}
							}
						}
					}(u, g, t, e, n, r) ? c && (_.lineStart(), _.point(i, a), b = !1): (v || (_.lineStart(), _.point(u[0], u[1])), _.point(g[0], g[1]), c || _.lineEnd(), b = !1)
				}
				d = i, y = a, v = c
			}
			return x
		}
	}
	var ye = r(),
		ve = function(t, e) {
			var n = e[0],
				r = e[1],
				o = [g(n), -m(n), 0],
				i = 0,
				a = 0;
			ye.reset();
			for (var l = 0, p = t.length; l < p; ++l)
				if (d = (h = t[l]).length)
					for (var h, d, y = h[d - 1], b = y[0], _ = y[1] / 2 + s, x = g(_), w = m(_), E = 0; E < d; ++E, b = P, x = j, w = M, y = S) {
						var S = h[E],
							P = S[0],
							k = S[1] / 2 + s,
							j = g(k),
							M = m(k),
							C = P - b,
							N = C >= 0 ? 1 : -1,
							T = N * C,
							R = T > u,
							A = x * j;
						if (ye.add(v(A * N * g(T), w * M + A * m(T))), i += R ? C + N * f : C, R ^ b >= n ^ P >= n) {
							var D = $(B(y), B(S));
							X(D);
							var L = $(o, D);
							X(L);
							var I = (R ^ C >= 0 ? -1 : 1) * O(L[2]);
							(r > I || r === I && (D[0] || D[1])) && (a += R ^ C >= 0 ? 1 : -1)
						}
					}
			return (i < -c || i < c && ye < -c) ^ 1 & a
		};
	r();
	var me, be, _e, ge, xe = function(t, e) {
			var n = t[0] * h,
				r = t[1] * h,
				o = e[0] * h,
				i = e[1] * h,
				a = m(r),
				c = g(r),
				u = m(i),
				l = g(i),
				s = a * m(n),
				f = a * g(n),
				d = u * m(o),
				y = u * g(o),
				b = 2 * O(x(S(i - r) + a * u * S(o - n))),
				_ = g(b),
				w = b ? function(t) {
					var e = g(t *= b) / _,
						n = g(b - t) / _,
						r = n * s + e * d,
						o = n * f + e * y,
						i = n * c + e * l;
					return [v(o, r) * p, v(i, x(r * r + o * o)) * p]
				} : function() {
					return [n * p, r * p]
				};
			return w.distance = b, w
		},
		we = function(t) {
			return t
		},
		Ee = r(),
		Oe = r(),
		Se = {
			point: P,
			lineStart: P,
			lineEnd: P,
			polygonStart: function() {
				Se.lineStart = Pe, Se.lineEnd = Me
			},
			polygonEnd: function() {
				Se.lineStart = Se.lineEnd = Se.point = P, Ee.add(d(Oe)), Oe.reset()
			},
			result: function() {
				var t = Ee / 2;
				return Ee.reset(), t
			}
		};

	function Pe() {
		Se.point = ke
	}

	function ke(t, e) {
		Se.point = je, me = _e = t, be = ge = e
	}

	function je(t, e) {
		Oe.add(ge * t - _e * e), _e = t, ge = e
	}

	function Me() {
		je(me, be)
	}
	var Ce = Se,
		Ne = 1 / 0,
		Te = Ne,
		Re = -Ne,
		Ae = Re;
	var De, Le, Ie, qe, Ue = {
			point: function(t, e) {
				t < Ne && (Ne = t);
				t > Re && (Re = t);
				e < Te && (Te = e);
				e > Ae && (Ae = e)
			},
			lineStart: P,
			lineEnd: P,
			polygonStart: P,
			polygonEnd: P,
			result: function() {
				var t = [
					[Ne, Te],
					[Re, Ae]
				];
				return Re = Ae = -(Te = Ne = 1 / 0), t
			}
		},
		ze = 0,
		Fe = 0,
		He = 0,
		Ye = 0,
		We = 0,
		Ge = 0,
		Be = 0,
		Ve = 0,
		$e = 0,
		Qe = {
			point: Ze,
			lineStart: Xe,
			lineEnd: tn,
			polygonStart: function() {
				Qe.lineStart = en, Qe.lineEnd = nn
			},
			polygonEnd: function() {
				Qe.point = Ze, Qe.lineStart = Xe, Qe.lineEnd = tn
			},
			result: function() {
				var t = $e ? [Be / $e, Ve / $e] : Ge ? [Ye / Ge, We / Ge] : He ? [ze / He, Fe / He] : [NaN, NaN];
				return ze = Fe = He = Ye = We = Ge = Be = Ve = $e = 0, t
			}
		};

	function Ze(t, e) {
		ze += t, Fe += e, ++He
	}

	function Xe() {
		Qe.point = Je
	}

	function Je(t, e) {
		Qe.point = Ke, Ze(Ie = t, qe = e)
	}

	function Ke(t, e) {
		var n = t - Ie,
			r = e - qe,
			o = x(n * n + r * r);
		Ye += o * (Ie + t) / 2, We += o * (qe + e) / 2, Ge += o, Ze(Ie = t, qe = e)
	}

	function tn() {
		Qe.point = Ze
	}

	function en() {
		Qe.point = rn
	}

	function nn() {
		on(De, Le)
	}

	function rn(t, e) {
		Qe.point = on, Ze(De = Ie = t, Le = qe = e)
	}

	function on(t, e) {
		var n = t - Ie,
			r = e - qe,
			o = x(n * n + r * r);
		Ye += o * (Ie + t) / 2, We += o * (qe + e) / 2, Ge += o, Be += (o = qe * t - Ie * e) * (Ie + t), Ve += o * (qe + e), $e += 3 * o, Ze(Ie = t, qe = e)
	}
	var an = Qe;

	function cn(t) {
		this._context = t
	}
	cn.prototype = {
		_radius: 4.5,
		pointRadius: function(t) {
			return this._radius = t, this
		},
		polygonStart: function() {
			this._line = 0
		},
		polygonEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			0 === this._line && this._context.closePath(), this._point = NaN
		},
		point: function(t, e) {
			switch (this._point) {
				case 0:
					this._context.moveTo(t, e), this._point = 1;
					break;
				case 1:
					this._context.lineTo(t, e);
					break;
				default:
					this._context.moveTo(t + this._radius, e), this._context.arc(t, e, this._radius, 0, f)
			}
		},
		result: P
	};
	var un, ln, sn, fn, pn, hn = r(),
		dn = {
			point: P,
			lineStart: function() {
				dn.point = yn
			},
			lineEnd: function() {
				un && vn(ln, sn), dn.point = P
			},
			polygonStart: function() {
				un = !0
			},
			polygonEnd: function() {
				un = null
			},
			result: function() {
				var t = +hn;
				return hn.reset(), t
			}
		};

	function yn(t, e) {
		dn.point = vn, ln = fn = t, sn = pn = e
	}

	function vn(t, e) {
		fn -= t, pn -= e, hn.add(x(fn * fn + pn * pn)), fn = t, pn = e
	}
	var mn = dn;

	function bn() {
		this._string = []
	}

	function _n(t) {
		return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
	}
	bn.prototype = {
		_circle: _n(4.5),
		pointRadius: function(t) {
			return this._circle = _n(t), this
		},
		polygonStart: function() {
			this._line = 0
		},
		polygonEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			0 === this._line && this._string.push("Z"), this._point = NaN
		},
		point: function(t, e) {
			switch (this._point) {
				case 0:
					this._string.push("M", t, ",", e), this._point = 1;
					break;
				case 1:
					this._string.push("L", t, ",", e);
					break;
				default:
					this._string.push("M", t, ",", e, this._circle)
			}
		},
		result: function() {
			if (this._string.length) {
				var t = this._string.join("");
				return this._string = [], t
			}
		}
	};
	var gn = function(t, e) {
			var n, r, o = 4.5;

			function i(t) {
				return t && ("function" == typeof o && r.pointRadius(+o.apply(this, arguments)), I(t, n(r))), r.result()
			}
			return i.area = function(t) {
				return I(t, n(Ce)), Ce.result()
			}, i.measure = function(t) {
				return I(t, n(mn)), mn.result()
			}, i.bounds = function(t) {
				return I(t, n(Ue)), Ue.result()
			}, i.centroid = function(t) {
				return I(t, n(an)), an.result()
			}, i.projection = function(e) {
				return arguments.length ? (n = null == e ? (t = null, we) : (t = e).stream, i) : t
			}, i.context = function(t) {
				return arguments.length ? (r = null == t ? (e = null, new bn) : new cn(e = t), "function" != typeof o && r.pointRadius(o), i) : e
			}, i.pointRadius = function(t) {
				return arguments.length ? (o = "function" == typeof t ? t : (r.pointRadius(+t), +t), i) : o
			}, i.projection(t).context(e)
		},
		xn = function(t, e, n, r) {
			return function(o, i) {
				var a, c, u, l = e(i),
					s = o.invert(r[0], r[1]),
					f = ae(),
					p = e(f),
					h = !1,
					d = {
						point: y,
						lineStart: m,
						lineEnd: b,
						polygonStart: function() {
							d.point = _, d.lineStart = g, d.lineEnd = x, c = [], a = []
						},
						polygonEnd: function() {
							d.point = y, d.lineStart = m, d.lineEnd = b, c = Object(fe.d)(c);
							var t = ve(a, s);
							c.length ? (h || (i.polygonStart(), h = !0), le(c, En, t, n, i)) : t && (h || (i.polygonStart(), h = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), h && (i.polygonEnd(), h = !1), c = a = null
						},
						sphere: function() {
							i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd()
						}
					};

				function y(e, n) {
					var r = o(e, n);
					t(e = r[0], n = r[1]) && i.point(e, n)
				}

				function v(t, e) {
					var n = o(t, e);
					l.point(n[0], n[1])
				}

				function m() {
					d.point = v, l.lineStart()
				}

				function b() {
					d.point = y, l.lineEnd()
				}

				function _(t, e) {
					u.push([t, e]);
					var n = o(t, e);
					p.point(n[0], n[1])
				}

				function g() {
					p.lineStart(), u = []
				}

				function x() {
					_(u[0][0], u[0][1]), p.lineEnd();
					var t, e, n, r, o = p.clean(),
						l = f.result(),
						s = l.length;
					if (u.pop(), a.push(u), u = null, s)
						if (1 & o) {
							if ((e = (n = l[0]).length - 1) > 0) {
								for (h || (i.polygonStart(), h = !0), i.lineStart(), t = 0; t < e; ++t) i.point((r = n[t])[0], r[1]);
								i.lineEnd()
							}
						} else s > 1 && 2 & o && l.push(l.pop().concat(l.shift())), c.push(l.filter(wn))
				}
				return d
			}
		};

	function wn(t) {
		return t.length > 1
	}

	function En(t, e) {
		return ((t = t.x)[0] < 0 ? t[1] - l - c : l - t[1]) - ((e = e.x)[0] < 0 ? e[1] - l - c : l - e[1])
	}
	var On = xn((function() {
		return !0
	}), (function(t) {
		var e, n = NaN,
			r = NaN,
			o = NaN;
		return {
			lineStart: function() {
				t.lineStart(), e = 1
			},
			point: function(i, a) {
				var s = i > 0 ? u : -u,
					f = d(i - n);
				d(f - u) < c ? (t.point(n, r = (r + a) / 2 > 0 ? l : -l), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(s, r), t.point(i, r), e = 0) : o !== s && f >= u && (d(n - o) < c && (n -= o * c), d(i - s) < c && (i -= s * c), r = function(t, e, n, r) {
					var o, i, a = g(t - n);
					return d(a) > c ? y((g(e) * (i = m(r)) * g(n) - g(r) * (o = m(e)) * g(t)) / (o * i * a)) : (e + r) / 2
				}(n, r, i, a), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(s, r), e = 0), t.point(n = i, r = a), o = s
			},
			lineEnd: function() {
				t.lineEnd(), n = r = NaN
			},
			clean: function() {
				return 2 - e
			}
		}
	}), (function(t, e, n, r) {
		var o;
		if (null == t) o = n * l, r.point(-u, o), r.point(0, o), r.point(u, o), r.point(u, 0), r.point(u, -o), r.point(0, -o), r.point(-u, -o), r.point(-u, 0), r.point(-u, o);
		else if (d(t[0] - e[0]) > c) {
			var i = t[0] < e[0] ? u : -u;
			o = n * i / 2, r.point(-i, o), r.point(0, o), r.point(i, o)
		} else r.point(e[0], e[1])
	}), [-u, -l]);
	var Sn = function(t, e) {
		var n = m(t),
			r = n > 0,
			o = d(n) > c;

		function i(t, e) {
			return m(t) * m(e) > n
		}

		function a(t, e, r) {
			var o = [1, 0, 0],
				i = $(B(t), B(e)),
				a = V(i, i),
				l = i[0],
				s = a - l * l;
			if (!s) return !r && t;
			var f = n * a / s,
				p = -n * l / s,
				h = $(o, i),
				y = Z(o, f);
			Q(y, Z(i, p));
			var v = h,
				m = V(y, v),
				b = V(v, v),
				_ = m * m - b * (V(y, y) - 1);
			if (!(_ < 0)) {
				var g = x(_),
					w = Z(v, (-m - g) / b);
				if (Q(w, y), w = G(w), !r) return w;
				var E, O = t[0],
					S = e[0],
					P = t[1],
					k = e[1];
				S < O && (E = O, O = S, S = E);
				var j = S - O,
					M = d(j - u) < c;
				if (!M && k < P && (E = P, P = k, k = E), M || j < c ? M ? P + k > 0 ^ w[1] < (d(w[0] - O) < c ? P : k) : P <= w[1] && w[1] <= k : j > u ^ (O <= w[0] && w[0] <= S)) {
					var C = Z(v, (-m + g) / b);
					return Q(C, y), [w, G(C)]
				}
			}
		}

		function l(e, n) {
			var o = r ? t : u - t,
				i = 0;
			return e < -o ? i |= 1 : e > o && (i |= 2), n < -o ? i |= 4 : n > o && (i |= 8), i
		}
		return xn(i, (function(t) {
			var e, n, s, f, p;
			return {
				lineStart: function() {
					f = s = !1, p = 1
				},
				point: function(h, d) {
					var y, v = [h, d],
						m = i(h, d),
						b = r ? m ? 0 : l(h, d) : m ? l(h + (h < 0 ? u : -u), d) : 0;
					if (!e && (f = s = m) && t.lineStart(), m !== s && (y = a(e, v), (ce(e, y) || ce(v, y)) && (v[0] += c, v[1] += c, m = i(v[0], v[1]))), m !== s) p = 0, m ? (t.lineStart(), y = a(v, e), t.point(y[0], y[1])) : (y = a(e, v), t.point(y[0], y[1]), t.lineEnd()), e = y;
					else if (o && e && r ^ m) {
						var _;
						b & n || !(_ = a(v, e, !0)) || (p = 0, r ? (t.lineStart(), t.point(_[0][0], _[0][1]), t.point(_[1][0], _[1][1]), t.lineEnd()) : (t.point(_[1][0], _[1][1]), t.lineEnd(), t.lineStart(), t.point(_[0][0], _[0][1])))
					}!m || e && ce(e, v) || t.point(v[0], v[1]), e = v, s = m, n = b
				},
				lineEnd: function() {
					s && t.lineEnd(), e = null
				},
				clean: function() {
					return p | (f && s) << 1
				}
			}
		}), (function(n, r, o, i) {
			re(i, t, e, o, n, r)
		}), r ? [0, -t] : [-u, t - u])
	};

	function Pn(t) {
		return function(e) {
			var n = new kn;
			for (var r in t) n[r] = t[r];
			return n.stream = e, n
		}
	}

	function kn() {}

	function jn(t, e, n) {
		var r = e[1][0] - e[0][0],
			o = e[1][1] - e[0][1],
			i = t.clipExtent && t.clipExtent();
		t.scale(150).translate([0, 0]), null != i && t.clipExtent(null), I(n, t.stream(Ue));
		var a = Ue.result(),
			c = Math.min(r / (a[1][0] - a[0][0]), o / (a[1][1] - a[0][1])),
			u = +e[0][0] + (r - c * (a[1][0] + a[0][0])) / 2,
			l = +e[0][1] + (o - c * (a[1][1] + a[0][1])) / 2;
		return null != i && t.clipExtent(i), t.scale(150 * c).translate([u, l])
	}

	function Mn(t, e, n) {
		return jn(t, [
			[0, 0], e
		], n)
	}
	kn.prototype = {
		constructor: kn,
		point: function(t, e) {
			this.stream.point(t, e)
		},
		sphere: function() {
			this.stream.sphere()
		},
		lineStart: function() {
			this.stream.lineStart()
		},
		lineEnd: function() {
			this.stream.lineEnd()
		},
		polygonStart: function() {
			this.stream.polygonStart()
		},
		polygonEnd: function() {
			this.stream.polygonEnd()
		}
	};
	var Cn = m(30 * h),
		Nn = function(t, e) {
			return +e ? function(t, e) {
				function n(r, o, i, a, u, l, s, f, p, h, y, m, b, _) {
					var g = s - r,
						w = f - o,
						E = g * g + w * w;
					if (E > 4 * e && b--) {
						var S = a + h,
							P = u + y,
							k = l + m,
							j = x(S * S + P * P + k * k),
							M = O(k /= j),
							C = d(d(k) - 1) < c || d(i - p) < c ? (i + p) / 2 : v(P, S),
							N = t(C, M),
							T = N[0],
							R = N[1],
							A = T - r,
							D = R - o,
							L = w * A - g * D;
						(L * L / E > e || d((g * A + w * D) / E - .5) > .3 || a * h + u * y + l * m < Cn) && (n(r, o, i, a, u, l, T, R, C, S /= j, P /= j, k, b, _), _.point(T, R), n(T, R, C, S, P, k, s, f, p, h, y, m, b, _))
					}
				}
				return function(e) {
					var r, o, i, a, c, u, l, s, f, p, h, d, y = {
						point: v,
						lineStart: m,
						lineEnd: _,
						polygonStart: function() {
							e.polygonStart(), y.lineStart = g
						},
						polygonEnd: function() {
							e.polygonEnd(), y.lineStart = m
						}
					};

					function v(n, r) {
						n = t(n, r), e.point(n[0], n[1])
					}

					function m() {
						s = NaN, y.point = b, e.lineStart()
					}

					function b(r, o) {
						var i = B([r, o]),
							a = t(r, o);
						n(s, f, l, p, h, d, s = a[0], f = a[1], l = r, p = i[0], h = i[1], d = i[2], 16, e), e.point(s, f)
					}

					function _() {
						y.point = v, e.lineEnd()
					}

					function g() {
						m(), y.point = x, y.lineEnd = w
					}

					function x(t, e) {
						b(r = t, e), o = s, i = f, a = p, c = h, u = d, y.point = b
					}

					function w() {
						n(s, f, l, p, h, d, o, i, r, a, c, u, 16, e), y.lineEnd = _, _()
					}
					return y
				}
			}(t, e) : function(t) {
				return Pn({
					point: function(e, n) {
						e = t(e, n), this.stream.point(e[0], e[1])
					}
				})
			}(t)
		};
	var Tn = Pn({
		point: function(t, e) {
			this.stream.point(t * h, e * h)
		}
	});

	function Rn(t) {
		return An((function() {
			return t
		}))()
	}

	function An(t) {
		var e, n, r, o, i, a, c, u, l, s, f = 150,
			d = 480,
			y = 250,
			v = 0,
			m = 0,
			b = 0,
			_ = 0,
			g = 0,
			w = null,
			E = On,
			O = null,
			S = we,
			P = .5,
			k = Nn(C, P);

		function j(t) {
			return [(t = i(t[0] * h, t[1] * h))[0] * f + n, r - t[1] * f]
		}

		function M(t) {
			return (t = i.invert((t[0] - n) / f, (r - t[1]) / f)) && [t[0] * p, t[1] * p]
		}

		function C(t, o) {
			return [(t = e(t, o))[0] * f + n, r - t[1] * f]
		}

		function N() {
			i = Zt(o = Jt(b, _, g), e);
			var t = e(v, m);
			return n = d - t[0] * f, r = y + t[1] * f, T()
		}

		function T() {
			return l = s = null, j
		}
		return j.stream = function(t) {
				return l && s === t ? l : l = Tn(E(o, k(S(s = t))))
			}, j.clipAngle = function(t) {
				return arguments.length ? (E = +t ? Sn(w = t * h, 6 * h) : (w = null, On), T()) : w * p
			}, j.clipExtent = function(t) {
				return arguments.length ? (S = null == t ? (O = a = c = u = null, we) : de(O = +t[0][0], a = +t[0][1], c = +t[1][0], u = +t[1][1]), T()) : null == O ? null : [
					[O, a],
					[c, u]
				]
			}, j.scale = function(t) {
				return arguments.length ? (f = +t, N()) : f
			}, j.translate = function(t) {
				return arguments.length ? (d = +t[0], y = +t[1], N()) : [d, y]
			}, j.center = function(t) {
				return arguments.length ? (v = t[0] % 360 * h, m = t[1] % 360 * h, N()) : [v * p, m * p]
			}, j.rotate = function(t) {
				return arguments.length ? (b = t[0] % 360 * h, _ = t[1] % 360 * h, g = t.length > 2 ? t[2] % 360 * h : 0, N()) : [b * p, _ * p, g * p]
			}, j.precision = function(t) {
				return arguments.length ? (k = Nn(C, P = t * t), T()) : x(P)
			}, j.fitExtent = function(t, e) {
				return jn(j, t, e)
			}, j.fitSize = function(t, e) {
				return Mn(j, t, e)
			},
			function() {
				return e = t.apply(this, arguments), j.invert = e.invert && M, N()
			}
	}

	function Dn(t) {
		return function(e, n) {
			var r = m(e),
				o = m(n),
				i = t(r * o);
			return [i * o * g(e), i * g(n)]
		}
	}

	function Ln(t) {
		return function(e, n) {
			var r = x(e * e + n * n),
				o = t(r),
				i = g(o),
				a = m(o);
			return [v(e * i, r * a), O(r && n * i / r)]
		}
	}
	var In = Dn((function(t) {
		return x(2 / (1 + t))
	}));
	In.invert = Ln((function(t) {
		return 2 * O(t / 2)
	}));
	var qn = Dn((function(t) {
		return (t = E(t)) && t / g(t)
	}));
	qn.invert = Ln((function(t) {
		return t
	}));

	function Un(t, e) {
		return [t, _(w((l + e) / 2))]
	}
	Un.invert = function(t, e) {
		return [t, 2 * y(b(e)) - l]
	};

	function zn(t, e) {
		return [t, e]
	}
	zn.invert = zn;
	var Fn = function() {
		return Rn(zn).scale(152.63)
	};

	function Hn(t, e) {
		var n = m(e),
			r = m(t) * n;
		return [n * g(t) / r, g(e) / r]
	}
	Hn.invert = Ln(y);
	var Yn = function() {
		return Rn(Hn).scale(144.049).clipAngle(60)
	};

	function Wn(t, e) {
		return [m(e) * g(t), g(e)]
	}
	Wn.invert = Ln(O);
	var Gn = function() {
		return Rn(Wn).scale(249.5).clipAngle(90.000001)
	};

	function Bn(t, e) {
		var n = m(e),
			r = 1 + m(t) * n;
		return [n * g(t) / r, g(e) / r]
	}
	Bn.invert = Ln((function(t) {
		return 2 * y(t)
	}));

	function Vn(t, e) {
		return [_(w((l + e) / 2)), -t]
	}
	Vn.invert = function(t, e) {
		return [-e, 2 * y(b(t)) - l]
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "j", (function() {
		return I
	})), n.d(e, "h", (function() {
		return q
	})), n.d(e, "f", (function() {
		return d
	})), n.d(e, "b", (function() {
		return m
	})), n.d(e, "g", (function() {
		return v
	})), n.d(e, "a", (function() {
		return b
	})), n.d(e, "d", (function() {
		return U
	})), n.d(e, "e", (function() {
		return z
	})), n.d(e, "k", (function() {
		return O
	})), n.d(e, "c", (function() {
		return D
	})), n.d(e, "i", (function() {
		return r
	}));
	var r, o, i, a, c, u, l = {},
		s = [],
		f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	function p(t, e) {
		for (var n in e) t[n] = e[n];
		return t
	}

	function h(t) {
		var e = t.parentNode;
		e && e.removeChild(t)
	}

	function d(t, e, n) {
		var r, o, i, a = arguments,
			c = {};
		for (i in e) "key" == i ? r = e[i] : "ref" == i ? o = e[i] : c[i] = e[i];
		if (arguments.length > 3)
			for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
		if (null != n && (c.children = n), "function" == typeof t && null != t.defaultProps)
			for (i in t.defaultProps) void 0 === c[i] && (c[i] = t.defaultProps[i]);
		return y(t, c, r, o, null)
	}

	function y(t, e, n, o, i) {
		var a = {
			type: t,
			props: e,
			key: n,
			ref: o,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: i
		};
		return null == i && (a.__v = a), null != r.vnode && r.vnode(a), a
	}

	function v() {
		return {
			current: null
		}
	}

	function m(t) {
		return t.children
	}

	function b(t, e) {
		this.props = t, this.context = e
	}

	function _(t, e) {
		if (null == e) return t.__ ? _(t.__, t.__.__k.indexOf(t) + 1) : null;
		for (var n; e < t.__k.length; e++)
			if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
		return "function" == typeof t.type ? _(t) : null
	}

	function g(t) {
		var e, n;
		if (null != (t = t.__) && null != t.__c) {
			for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
				if (null != (n = t.__k[e]) && null != n.__e) {
					t.__e = t.__c.base = n.__e;
					break
				} return g(t)
		}
	}

	function x(t) {
		(!t.__d && (t.__d = !0) && o.push(t) && !w.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || i)(w)
	}

	function w() {
		for (var t; w.__r = o.length;) t = o.sort((function(t, e) {
			return t.__v.__b - e.__v.__b
		})), o = [], t.some((function(t) {
			var e, n, r, o, i, a, c;
			t.__d && (a = (i = (e = t).__v).__e, (c = e.__P) && (n = [], (r = p({}, i)).__v = r, o = N(c, i, r, e.__n, void 0 !== c.ownerSVGElement, null != i.__h ? [a] : null, n, null == a ? _(i) : a, i.__h), T(n, i), o != a && g(i)))
		}))
	}

	function E(t, e, n, r, o, i, a, c, u, f) {
		var p, d, v, b, g, x, w, E = r && r.__k || s,
			O = E.length;
		for (u == l && (u = null != a ? a[0] : O ? _(r, 0) : null), n.__k = [], p = 0; p < e.length; p++)
			if (null != (b = n.__k[p] = null == (b = e[p]) || "boolean" == typeof b ? null : "string" == typeof b || "number" == typeof b ? y(null, b, null, null, b) : Array.isArray(b) ? y(m, {
					children: b
				}, null, null, null) : null != b.__e || null != b.__c ? y(b.type, b.props, b.key, null, b.__v) : b)) {
				if (b.__ = n, b.__b = n.__b + 1, null === (v = E[p]) || v && b.key == v.key && b.type === v.type) E[p] = void 0;
				else
					for (d = 0; d < O; d++) {
						if ((v = E[d]) && b.key == v.key && b.type === v.type) {
							E[d] = void 0;
							break
						}
						v = null
					}
				g = N(t, b, v = v || l, o, i, a, c, u, f), (d = b.ref) && v.ref != d && (w || (w = []), v.ref && w.push(v.ref, null, b), w.push(d, b.__c || g, b)), null != g ? (null == x && (x = g), u = S(t, b, v, E, a, g, u), f || "option" != n.type ? "function" == typeof n.type && (n.__d = u) : t.value = "") : u && v.__e == u && u.parentNode != t && (u = _(v))
			} if (n.__e = x, null != a && "function" != typeof n.type)
			for (p = a.length; p--;) null != a[p] && h(a[p]);
		for (p = O; p--;) null != E[p] && D(E[p], E[p]);
		if (w)
			for (p = 0; p < w.length; p++) A(w[p], w[++p], w[++p])
	}

	function O(t, e) {
		return e = e || [], null == t || "boolean" == typeof t || (Array.isArray(t) ? t.some((function(t) {
			O(t, e)
		})) : e.push(t)), e
	}

	function S(t, e, n, r, o, i, a) {
		var c, u, l;
		if (void 0 !== e.__d) c = e.__d, e.__d = void 0;
		else if (o == n || i != a || null == i.parentNode) t: if (null == a || a.parentNode !== t) t.appendChild(i), c = null;
			else {
				for (u = a, l = 0;
					(u = u.nextSibling) && l < r.length; l += 2)
					if (u == i) break t;
				t.insertBefore(i, a), c = a
			} return void 0 !== c ? c : i.nextSibling
	}

	function P(t, e, n) {
		"-" === e[0] ? t.setProperty(e, n) : t[e] = null == n ? "" : "number" != typeof n || f.test(e) ? n : n + "px"
	}

	function k(t, e, n, r, o) {
		var i, a, c;
		if (o && "className" == e && (e = "class"), "style" === e)
			if ("string" == typeof n) t.style.cssText = n;
			else {
				if ("string" == typeof r && (t.style.cssText = r = ""), r)
					for (e in r) n && e in n || P(t.style, e, "");
				if (n)
					for (e in n) r && n[e] === r[e] || P(t.style, e, n[e])
			}
		else "o" === e[0] && "n" === e[1] ? (i = e !== (e = e.replace(/Capture$/, "")), (a = e.toLowerCase()) in t && (e = a), e = e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, c = i ? M : j, n ? r || t.addEventListener(e, c, i) : t.removeEventListener(e, c, i)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && "download" !== e && "href" !== e && !o && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n))
	}

	function j(t) {
		this.l[t.type + !1](r.event ? r.event(t) : t)
	}

	function M(t) {
		this.l[t.type + !0](r.event ? r.event(t) : t)
	}

	function C(t, e, n) {
		var r, o;
		for (r = 0; r < t.__k.length; r++)(o = t.__k[r]) && (o.__ = t, o.__e && ("function" == typeof o.type && o.__k.length > 1 && C(o, e, n), e = S(n, o, o, t.__k, null, o.__e, e), "function" == typeof t.type && (t.__d = e)))
	}

	function N(t, e, n, o, i, a, c, u, l) {
		var s, f, h, d, y, v, _, g, x, w, O, S = e.type;
		if (void 0 !== e.constructor) return null;
		null != n.__h && (l = n.__h, u = e.__e = n.__e, e.__h = null, a = [u]), (s = r.__b) && s(e);
		try {
			t: if ("function" == typeof S) {
				if (g = e.props, x = (s = S.contextType) && o[s.__c], w = s ? x ? x.props.value : s.__ : o, n.__c ? _ = (f = e.__c = n.__c).__ = f.__E : ("prototype" in S && S.prototype.render ? e.__c = f = new S(g, w) : (e.__c = f = new b(g, w), f.constructor = S, f.render = L), x && x.sub(f), f.props = g, f.state || (f.state = {}), f.context = w, f.__n = o, h = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != S.getDerivedStateFromProps && (f.__s == f.state && (f.__s = p({}, f.__s)), p(f.__s, S.getDerivedStateFromProps(g, f.__s))), d = f.props, y = f.state, h) null == S.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);
				else {
					if (null == S.getDerivedStateFromProps && g !== d && null != f.componentWillReceiveProps && f.componentWillReceiveProps(g, w), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(g, f.__s, w) || e.__v === n.__v) {
						f.props = g, f.state = f.__s, e.__v !== n.__v && (f.__d = !1), f.__v = e, e.__e = n.__e, e.__k = n.__k, f.__h.length && c.push(f), C(e, u, t);
						break t
					}
					null != f.componentWillUpdate && f.componentWillUpdate(g, f.__s, w), null != f.componentDidUpdate && f.__h.push((function() {
						f.componentDidUpdate(d, y, v)
					}))
				}
				f.context = w, f.props = g, f.state = f.__s, (s = r.__r) && s(e), f.__d = !1, f.__v = e, f.__P = t, s = f.render(f.props, f.state, f.context), f.state = f.__s, null != f.getChildContext && (o = p(p({}, o), f.getChildContext())), h || null == f.getSnapshotBeforeUpdate || (v = f.getSnapshotBeforeUpdate(d, y)), O = null != s && s.type == m && null == s.key ? s.props.children : s, E(t, Array.isArray(O) ? O : [O], e, n, o, i, a, c, u, l), f.base = e.__e, e.__h = null, f.__h.length && c.push(f), _ && (f.__E = f.__ = null), f.__e = !1
			} else null == a && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = R(n.__e, e, n, o, i, a, c, l);
			(s = r.diffed) && s(e)
		}
		catch (t) {
			e.__v = null, (l || null != a) && (e.__e = u, e.__h = !!l, a[a.indexOf(u)] = null), r.__e(t, e, n)
		}
		return e.__e
	}

	function T(t, e) {
		r.__c && r.__c(e, t), t.some((function(e) {
			try {
				t = e.__h, e.__h = [], t.some((function(t) {
					t.call(e)
				}))
			} catch (t) {
				r.__e(t, e.__v)
			}
		}))
	}

	function R(t, e, n, r, o, i, a, c) {
		var u, f, p, h, d, y = n.props,
			v = e.props;
		if (o = "svg" === e.type || o, null != i)
			for (u = 0; u < i.length; u++)
				if (null != (f = i[u]) && ((null === e.type ? 3 === f.nodeType : f.localName === e.type) || t == f)) {
					t = f, i[u] = null;
					break
				} if (null == t) {
			if (null === e.type) return document.createTextNode(v);
			t = o ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, v.is && {
				is: v.is
			}), i = null, c = !1
		}
		if (null === e.type) y === v || c && t.data === v || (t.data = v);
		else {
			if (null != i && (i = s.slice.call(t.childNodes)), p = (y = n.props || l).dangerouslySetInnerHTML, h = v.dangerouslySetInnerHTML, !c) {
				if (null != i)
					for (y = {}, d = 0; d < t.attributes.length; d++) y[t.attributes[d].name] = t.attributes[d].value;
				(h || p) && (h && (p && h.__html == p.__html || h.__html === t.innerHTML) || (t.innerHTML = h && h.__html || ""))
			}(function(t, e, n, r, o) {
				var i;
				for (i in n) "children" === i || "key" === i || i in e || k(t, i, null, n[i], r);
				for (i in e) o && "function" != typeof e[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === e[i] || k(t, i, e[i], n[i], r)
			})(t, v, y, o, c), h ? e.__k = [] : (u = e.props.children, E(t, Array.isArray(u) ? u : [u], e, n, r, "foreignObject" !== e.type && o, i, a, l, c)), c || ("value" in v && void 0 !== (u = v.value) && (u !== t.value || "progress" === e.type && !u) && k(t, "value", u, y.value, !1), "checked" in v && void 0 !== (u = v.checked) && u !== t.checked && k(t, "checked", u, y.checked, !1))
		}
		return t
	}

	function A(t, e, n) {
		try {
			"function" == typeof t ? t(e) : t.current = e
		} catch (t) {
			r.__e(t, n)
		}
	}

	function D(t, e, n) {
		var o, i, a;
		if (r.unmount && r.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || A(o, null, e)), n || "function" == typeof t.type || (n = null != (i = t.__e)), t.__e = t.__d = void 0, null != (o = t.__c)) {
			if (o.componentWillUnmount) try {
				o.componentWillUnmount()
			} catch (t) {
				r.__e(t, e)
			}
			o.base = o.__P = null
		}
		if (o = t.__k)
			for (a = 0; a < o.length; a++) o[a] && D(o[a], e, n);
		null != i && h(i)
	}

	function L(t, e, n) {
		return this.constructor(t, n)
	}

	function I(t, e, n) {
		var o, i, a;
		r.__ && r.__(t, e), i = (o = n === c) ? null : n && n.__k || e.__k, t = d(m, null, [t]), a = [], N(e, (o ? e : n || e).__k = t, i || l, l, void 0 !== e.ownerSVGElement, n && !o ? [n] : i ? null : e.childNodes.length ? s.slice.call(e.childNodes) : null, a, n || l, o), T(a, t)
	}

	function q(t, e) {
		I(t, e, c)
	}

	function U(t, e, n) {
		var r, o, i, a = arguments,
			c = p({}, t.props);
		for (i in e) "key" == i ? r = e[i] : "ref" == i ? o = e[i] : c[i] = e[i];
		if (arguments.length > 3)
			for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
		return null != n && (c.children = n), y(t.type, c, r || t.key, o || t.ref, null)
	}

	function z(t, e) {
		var n = {
			__c: e = "__cC" + u++,
			__: t,
			Consumer: function(t, e) {
				return t.children(e)
			},
			Provider: function(t, n, r) {
				return this.getChildContext || (n = [], (r = {})[e] = this, this.getChildContext = function() {
					return r
				}, this.shouldComponentUpdate = function(t) {
					this.props.value !== t.value && n.some(x)
				}, this.sub = function(t) {
					n.push(t);
					var e = t.componentWillUnmount;
					t.componentWillUnmount = function() {
						n.splice(n.indexOf(t), 1), e && e.call(t)
					}
				}), t.children
			}
		};
		return n.Provider.__ = n.Consumer.contextType = n
	}
	r = {
		__e: function(t, e) {
			for (var n, r, o, i = e.__h; e = e.__;)
				if ((n = e.__c) && !n.__) try {
					if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(t)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(t), o = n.__d), o) return e.__h = i, n.__E = n
				} catch (e) {
					t = e
				}
			throw t
		}
	}, b.prototype.setState = function(t, e) {
		var n;
		n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof t && (t = t(p({}, n), this.props)), t && p(n, t), null != t && this.__v && (e && this.__h.push(e), x(this))
	}, b.prototype.forceUpdate = function(t) {
		this.__v && (this.__e = !0, t && this.__h.push(t), x(this))
	}, b.prototype.render = m, o = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, w.__r = 0, c = l, u = 0
}, function(t, e, n) {
	var r = n(20),
		o = n(55).f,
		i = n(38),
		a = n(47),
		c = n(112),
		u = n(173),
		l = n(178);
	t.exports = function(t, e) {
		var n, s, f, p, h, d = t.target,
			y = t.global,
			v = t.stat;
		if (n = y ? r : v ? r[d] || c(d, {}) : (r[d] || {}).prototype)
			for (s in e) {
				if (p = e[s], f = t.noTargetGet ? (h = o(n, s)) && h.value : n[s], !l(y ? s : d + (v ? "." : "#") + s, t.forced) && void 0 !== f) {
					if (typeof p == typeof f) continue;
					u(p, f)
				}(t.sham || f && f.sham) && i(p, "sham", !0), a(n, s, p, t)
			}
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "b", (function() {
		return c
	})), n.d(e, "a", (function() {
		return r
	})), n.d(e, "c", (function() {
		return o
	})), n.d(e, "d", (function() {
		return m
	})), n.d(e, "e", (function() {
		return v
	})), n.d(e, "f", (function() {
		return s
	})), n.d(e, "h", (function() {
		return d
	})), n.d(e, "g", (function() {
		return y
	}));
	var r = function(t, e) {
			return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
		},
		o = function(t) {
			var e;
			return 1 === t.length && (e = t, t = function(t, n) {
				return r(e(t), n)
			}), {
				left: function(e, n, r, o) {
					for (null == r && (r = 0), null == o && (o = e.length); r < o;) {
						var i = r + o >>> 1;
						t(e[i], n) < 0 ? r = i + 1 : o = i
					}
					return r
				},
				right: function(e, n, r, o) {
					for (null == r && (r = 0), null == o && (o = e.length); r < o;) {
						var i = r + o >>> 1;
						t(e[i], n) > 0 ? o = i : r = i + 1
					}
					return r
				}
			}
		};
	var i = o(r),
		a = i.right,
		c = (i.left, a);
	var u = function(t) {
			return null === t ? NaN : +t
		},
		l = Array.prototype,
		s = (l.slice, l.map, function(t, e, n) {
			t = +t, e = +e, n = (o = arguments.length) < 2 ? (e = t, t = 0, 1) : o < 3 ? 1 : +n;
			for (var r = -1, o = 0 | Math.max(0, Math.ceil((e - t) / n)), i = new Array(o); ++r < o;) i[r] = t + r * n;
			return i
		}),
		f = Math.sqrt(50),
		p = Math.sqrt(10),
		h = Math.sqrt(2),
		d = function(t, e, n) {
			var r, o, i, a, c = -1;
			if (n = +n, (t = +t) === (e = +e) && n > 0) return [t];
			if ((r = e < t) && (o = t, t = e, e = o), 0 === (a = function(t, e, n) {
					var r = (e - t) / Math.max(0, n),
						o = Math.floor(Math.log(r) / Math.LN10),
						i = r / Math.pow(10, o);
					return o >= 0 ? (i >= f ? 10 : i >= p ? 5 : i >= h ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (i >= f ? 10 : i >= p ? 5 : i >= h ? 2 : 1)
				}(t, e, n)) || !isFinite(a)) return [];
			if (a > 0)
				for (t = Math.ceil(t / a), e = Math.floor(e / a), i = new Array(o = Math.ceil(e - t + 1)); ++c < o;) i[c] = (t + c) * a;
			else
				for (t = Math.floor(t * a), e = Math.ceil(e * a), i = new Array(o = Math.ceil(t - e + 1)); ++c < o;) i[c] = (t - c) / a;
			return r && i.reverse(), i
		};

	function y(t, e, n) {
		var r = Math.abs(e - t) / Math.max(0, n),
			o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
			i = r / o;
		return i >= f ? o *= 10 : i >= p ? o *= 5 : i >= h && (o *= 2), e < t ? -o : o
	}
	var v = function(t, e, n) {
			if (null == n && (n = u), r = t.length) {
				if ((e = +e) <= 0 || r < 2) return +n(t[0], 0, t);
				if (e >= 1) return +n(t[r - 1], r - 1, t);
				var r, o = (r - 1) * e,
					i = Math.floor(o),
					a = +n(t[i], i, t);
				return a + (+n(t[i + 1], i + 1, t) - a) * (o - i)
			}
		},
		m = function(t) {
			for (var e, n, r, o = t.length, i = -1, a = 0; ++i < o;) a += t[i].length;
			for (n = new Array(a); --o >= 0;)
				for (e = (r = t[o]).length; --e >= 0;) n[--a] = r[e];
			return n
		}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(20),
		i = n(56),
		a = n(75),
		c = n(29),
		u = n(119),
		l = n(180),
		s = n(8),
		f = n(28),
		p = n(67),
		h = n(27),
		d = n(23),
		y = n(30),
		v = n(37),
		m = n(66),
		b = n(64),
		_ = n(80),
		g = n(88),
		x = n(106),
		w = n(270),
		E = n(117),
		O = n(55),
		S = n(33),
		P = n(111),
		k = n(38),
		j = n(47),
		M = n(113),
		C = n(85),
		N = n(86),
		T = n(114),
		R = n(14),
		A = n(185),
		D = n(186),
		L = n(107),
		I = n(79),
		q = n(68).forEach,
		U = C("hidden"),
		z = "Symbol",
		F = R("toPrimitive"),
		H = I.set,
		Y = I.getterFor(z),
		W = Object.prototype,
		G = o.Symbol,
		B = i("JSON", "stringify"),
		V = O.f,
		$ = S.f,
		Q = w.f,
		Z = P.f,
		X = M("symbols"),
		J = M("op-symbols"),
		K = M("string-to-symbol-registry"),
		tt = M("symbol-to-string-registry"),
		et = M("wks"),
		nt = o.QObject,
		rt = !nt || !nt.prototype || !nt.prototype.findChild,
		ot = c && s((function() {
			return 7 != _($({}, "a", {
				get: function() {
					return $(this, "a", {
						value: 7
					}).a
				}
			})).a
		})) ? function(t, e, n) {
			var r = V(W, e);
			r && delete W[e], $(t, e, n), r && t !== W && $(W, e, r)
		} : $,
		it = function(t, e) {
			var n = X[t] = _(G.prototype);
			return H(n, {
				type: z,
				tag: t,
				description: e
			}), c || (n.description = e), n
		},
		at = l ? function(t) {
			return "symbol" == typeof t
		} : function(t) {
			return Object(t) instanceof G
		},
		ct = function(t, e, n) {
			t === W && ct(J, e, n), d(t);
			var r = m(e, !0);
			return d(n), f(X, r) ? (n.enumerable ? (f(t, U) && t[U][r] && (t[U][r] = !1), n = _(n, {
				enumerable: b(0, !1)
			})) : (f(t, U) || $(t, U, b(1, {})), t[U][r] = !0), ot(t, r, n)) : $(t, r, n)
		},
		ut = function(t, e) {
			d(t);
			var n = v(e),
				r = g(n).concat(pt(n));
			return q(r, (function(e) {
				c && !lt.call(n, e) || ct(t, e, n[e])
			})), t
		},
		lt = function(t) {
			var e = m(t, !0),
				n = Z.call(this, e);
			return !(this === W && f(X, e) && !f(J, e)) && (!(n || !f(this, e) || !f(X, e) || f(this, U) && this[U][e]) || n)
		},
		st = function(t, e) {
			var n = v(t),
				r = m(e, !0);
			if (n !== W || !f(X, r) || f(J, r)) {
				var o = V(n, r);
				return !o || !f(X, r) || f(n, U) && n[U][r] || (o.enumerable = !0), o
			}
		},
		ft = function(t) {
			var e = Q(v(t)),
				n = [];
			return q(e, (function(t) {
				f(X, t) || f(N, t) || n.push(t)
			})), n
		},
		pt = function(t) {
			var e = t === W,
				n = Q(e ? J : v(t)),
				r = [];
			return q(n, (function(t) {
				!f(X, t) || e && !f(W, t) || r.push(X[t])
			})), r
		};
	(u || (j((G = function() {
		if (this instanceof G) throw TypeError("Symbol is not a constructor");
		var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
			e = T(t),
			n = function(t) {
				this === W && n.call(J, t), f(this, U) && f(this[U], e) && (this[U][e] = !1), ot(this, e, b(1, t))
			};
		return c && rt && ot(W, e, {
			configurable: !0,
			set: n
		}), it(e, t)
	}).prototype, "toString", (function() {
		return Y(this).tag
	})), j(G, "withoutSetter", (function(t) {
		return it(T(t), t)
	})), P.f = lt, S.f = ct, O.f = st, x.f = w.f = ft, E.f = pt, A.f = function(t) {
		return it(R(t), t)
	}, c && ($(G.prototype, "description", {
		configurable: !0,
		get: function() {
			return Y(this).description
		}
	}), a || j(W, "propertyIsEnumerable", lt, {
		unsafe: !0
	}))), r({
		global: !0,
		wrap: !0,
		forced: !u,
		sham: !u
	}, {
		Symbol: G
	}), q(g(et), (function(t) {
		D(t)
	})), r({
		target: z,
		stat: !0,
		forced: !u
	}, {
		for: function(t) {
			var e = String(t);
			if (f(K, e)) return K[e];
			var n = G(e);
			return K[e] = n, tt[n] = e, n
		},
		keyFor: function(t) {
			if (!at(t)) throw TypeError(t + " is not a symbol");
			if (f(tt, t)) return tt[t]
		},
		useSetter: function() {
			rt = !0
		},
		useSimple: function() {
			rt = !1
		}
	}), r({
		target: "Object",
		stat: !0,
		forced: !u,
		sham: !c
	}, {
		create: function(t, e) {
			return void 0 === e ? _(t) : ut(_(t), e)
		},
		defineProperty: ct,
		defineProperties: ut,
		getOwnPropertyDescriptor: st
	}), r({
		target: "Object",
		stat: !0,
		forced: !u
	}, {
		getOwnPropertyNames: ft,
		getOwnPropertySymbols: pt
	}), r({
		target: "Object",
		stat: !0,
		forced: s((function() {
			E.f(1)
		}))
	}, {
		getOwnPropertySymbols: function(t) {
			return E.f(y(t))
		}
	}), B) && r({
		target: "JSON",
		stat: !0,
		forced: !u || s((function() {
			var t = G();
			return "[null]" != B([t]) || "{}" != B({
				a: t
			}) || "{}" != B(Object(t))
		}))
	}, {
		stringify: function(t, e, n) {
			for (var r, o = [t], i = 1; arguments.length > i;) o.push(arguments[i++]);
			if (r = e, (h(e) || void 0 !== t) && !at(t)) return p(e) || (e = function(t, e) {
				if ("function" == typeof r && (e = r.call(this, t, e)), !at(e)) return e
			}), o[1] = e, B.apply(null, o)
		}
	});
	G.prototype[F] || k(G.prototype, F, G.prototype.valueOf), L(G, z), N[U] = !0
}, function(t, e, n) {
	var r = n(122),
		o = n(47),
		i = n(274);
	r || o(Object.prototype, "toString", i, {
		unsafe: !0
	})
}, function(t, e, n) {
	"use strict";
	var r = n(47),
		o = n(23),
		i = n(8),
		a = n(179),
		c = "toString",
		u = RegExp.prototype,
		l = u.toString,
		s = i((function() {
			return "/a/b" != l.call({
				source: "a",
				flags: "b"
			})
		})),
		f = l.name != c;
	(s || f) && r(RegExp.prototype, c, (function() {
		var t = o(this),
			e = String(t.source),
			n = t.flags;
		return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in u) ? a.call(t) : n)
	}), {
		unsafe: !0
	})
}, function(t, e) {
	t.exports = function(t) {
		try {
			return !!t()
		} catch (t) {
			return !0
		}
	}
}, function(t, e, n) {
	"use strict";
	var r = n(37),
		o = n(154),
		i = n(69),
		a = n(79),
		c = n(190),
		u = "Array Iterator",
		l = a.set,
		s = a.getterFor(u);
	t.exports = c(Array, "Array", (function(t, e) {
		l(this, {
			type: u,
			target: r(t),
			index: 0,
			kind: e
		})
	}), (function() {
		var t = s(this),
			e = t.target,
			n = t.kind,
			r = t.index++;
		return !e || r >= e.length ? (t.target = void 0, {
			value: void 0,
			done: !0
		}) : "keys" == n ? {
			value: r,
			done: !1
		} : "values" == n ? {
			value: e[r],
			done: !1
		} : {
			value: [r, e[r]],
			done: !1
		}
	}), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(29),
		i = n(20),
		a = n(28),
		c = n(27),
		u = n(33).f,
		l = n(173),
		s = i.Symbol;
	if (o && "function" == typeof s && (!("description" in s.prototype) || void 0 !== s().description)) {
		var f = {},
			p = function() {
				var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
					e = this instanceof p ? new s(t) : void 0 === t ? s() : s(t);
				return "" === t && (f[e] = !0), e
			};
		l(p, s);
		var h = p.prototype = s.prototype;
		h.constructor = p;
		var d = h.toString,
			y = "Symbol(test)" == String(s("test")),
			v = /^Symbol\((.*)\)[^)]+$/;
		u(h, "description", {
			configurable: !0,
			get: function() {
				var t = c(this) ? this.valueOf() : this,
					e = d.call(t);
				if (a(f, t)) return "";
				var n = y ? e.slice(7, -1) : e.replace(v, "$1");
				return "" === n ? void 0 : n
			}
		}), r({
			global: !0,
			forced: !0
		}, {
			Symbol: p
		})
	}
}, function(t, e, n) {
	n(186)("iterator")
}, function(t, e, n) {
	"use strict";
	var r = n(182).charAt,
		o = n(79),
		i = n(190),
		a = "String Iterator",
		c = o.set,
		u = o.getterFor(a);
	i(String, "String", (function(t) {
		c(this, {
			type: a,
			string: String(t),
			index: 0
		})
	}), (function() {
		var t, e = u(this),
			n = e.string,
			o = e.index;
		return o >= n.length ? {
			value: void 0,
			done: !0
		} : (t = r(n, o), e.index += t.length, {
			value: t,
			done: !1
		})
	}))
}, function(t, e, n) {
	var r = n(20),
		o = n(193),
		i = n(9),
		a = n(38),
		c = n(14),
		u = c("iterator"),
		l = c("toStringTag"),
		s = i.values;
	for (var f in o) {
		var p = r[f],
			h = p && p.prototype;
		if (h) {
			if (h[u] !== s) try {
				a(h, u, s)
			} catch (t) {
				h[u] = s
			}
			if (h[l] || a(h, l, f), o[f])
				for (var d in i)
					if (h[d] !== i[d]) try {
						a(h, d, i[d])
					} catch (t) {
						h[d] = i[d]
					}
		}
	}
}, function(t, e, n) {
	var r = n(20),
		o = n(113),
		i = n(28),
		a = n(114),
		c = n(119),
		u = n(180),
		l = o("wks"),
		s = r.Symbol,
		f = u ? s : s && s.withoutSetter || a;
	t.exports = function(t) {
		return i(l, t) || (c && i(s, t) ? l[t] = s[t] : l[t] = f("Symbol." + t)), l[t]
	}
}, function(t, e, n) {
	"use strict";

	function r(t) {
		var e, n, o = "";
		if ("string" == typeof t || "number" == typeof t) o += t;
		else if ("object" == typeof t)
			if (Array.isArray(t))
				for (e = 0; e < t.length; e++) t[e] && (n = r(t[e])) && (o && (o += " "), o += n);
			else
				for (e in t) t[e] && (o && (o += " "), o += e);
		return o
	}
	e.a = function() {
		for (var t, e, n = 0, o = ""; n < arguments.length;)(t = arguments[n++]) && (e = r(t)) && (o && (o += " "), o += e);
		return o
	}
}, function(t, e, n) {
	var r = n(3),
		o = n(8),
		i = n(30),
		a = n(123),
		c = n(192);
	r({
		target: "Object",
		stat: !0,
		forced: o((function() {
			a(1)
		})),
		sham: !c
	}, {
		getPrototypeOf: function(t) {
			return a(i(t))
		}
	})
}, function(t, e, n) {
	n(3)({
		target: "Object",
		stat: !0
	}, {
		setPrototypeOf: n(155)
	})
}, function(t, e, n) {
	var r = n(3),
		o = n(56),
		i = n(50),
		a = n(23),
		c = n(27),
		u = n(80),
		l = n(353),
		s = n(8),
		f = o("Reflect", "construct"),
		p = s((function() {
			function t() {}
			return !(f((function() {}), [], t) instanceof t)
		})),
		h = !s((function() {
			f((function() {}))
		})),
		d = p || h;
	r({
		target: "Reflect",
		stat: !0,
		forced: d,
		sham: d
	}, {
		construct: function(t, e) {
			i(t), a(e);
			var n = arguments.length < 3 ? t : i(arguments[2]);
			if (h && !p) return f(t, e, n);
			if (t == n) {
				switch (e.length) {
					case 0:
						return new t;
					case 1:
						return new t(e[0]);
					case 2:
						return new t(e[0], e[1]);
					case 3:
						return new t(e[0], e[1], e[2]);
					case 4:
						return new t(e[0], e[1], e[2], e[3])
				}
				var r = [null];
				return r.push.apply(r, e), new(l.apply(t, r))
			}
			var o = n.prototype,
				s = u(c(o) ? o : Object.prototype),
				d = Function.apply.call(t, s, e);
			return c(d) ? d : s
		}
	})
}, function(t, e, n) {
	"use strict";
	n(21), n(404), n(6), n(31), n(7), n(46);

	function r(t) {
		var e = "",
			n = t > 0 ? 1 : 0;
		t >= 1e12 ? (t /= 1e12, e = "tn") : t >= 1e9 ? (t /= 1e9, e = "bn") : t >= 1e6 ? (t /= 1e6, e = "m") : t >= 1e3 ? (t /= 1e3, e = "k") : n = 0, t.toFixed(0).length >= 3 && (n = 0);
		var r = Math.pow(10, n);
		return (Math.round(t * r) / r).toString() + e
	}

	function o(t) {
		if (null == t || isNaN(t)) return "��";
		if (0 === t) return "0%";
		if (Math.abs(t) < .001) return "<0.1%";
		var e = 0 !== t && Math.abs(t) < .1 ? 1 : 0,
			n = Math.pow(10, e);
		return (Math.round(100 * t * n) / n).toString() + "%"
	}

	function i(t, e) {
		return null == t || isNaN(t) ? "��" : (e = e || "$") + r(t *= 1e3)
	}
	e.a = {
		null: function(t) {
			return null == t || isNaN(t) ? "��" : t
		},
		tens: function(t, e) {
			return null == t || isNaN(t) ? "��" : r(t) + (e ? " ".concat(e) : "")
		},
		currency: i,
		signedCurrency: function(t) {
			var e = "";
			return t && !isNaN(t) && (e = t > 0 ? "+" : "���"), i(Math.abs(t), "".concat(e, "$"))
		},
		weight: function(t) {
			return null == t || isNaN(t) ? "��" : r(t) + " t"
		},
		percentage: o,
		signedPercentage: function(t) {
			var e = "";
			return 0 !== t && (e = t > 0 ? "+" : "���"), e + o(t).replace("-", "")
		},
		score: function(t, e) {
			return null == t || isNaN(t) ? "��" : (e = e || 100, "".concat(t, "/").concat(e))
		},
		thousands: function(t) {
			return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}
	}
}, function(t, e, n) {
	(function(e) {
		var n = function(t) {
			return t && t.Math == Math && t
		};
		t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
	}).call(this, n(170))
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(8),
		i = n(67),
		a = n(27),
		c = n(30),
		u = n(43),
		l = n(89),
		s = n(187),
		f = n(90),
		p = n(14),
		h = n(153),
		d = p("isConcatSpreadable"),
		y = 9007199254740991,
		v = "Maximum allowed index exceeded",
		m = h >= 51 || !o((function() {
			var t = [];
			return t[d] = !1, t.concat()[0] !== t
		})),
		b = f("concat"),
		_ = function(t) {
			if (!a(t)) return !1;
			var e = t[d];
			return void 0 !== e ? !!e : i(t)
		};
	r({
		target: "Array",
		proto: !0,
		forced: !m || !b
	}, {
		concat: function(t) {
			var e, n, r, o, i, a = c(this),
				f = s(a, 0),
				p = 0;
			for (e = -1, r = arguments.length; e < r; e++)
				if (_(i = -1 === e ? a : arguments[e])) {
					if (p + (o = u(i.length)) > y) throw TypeError(v);
					for (n = 0; n < o; n++, p++) n in i && l(f, p, i[n])
				} else {
					if (p >= y) throw TypeError(v);
					l(f, p++, i)
				} return f.length = p, f
		}
	})
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(68).map,
		i = n(90),
		a = n(44),
		c = i("map"),
		u = a("map");
	r({
		target: "Array",
		proto: !0,
		forced: !c || !u
	}, {
		map: function(t) {
			return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	})
}, function(t, e, n) {
	var r = n(27);
	t.exports = function(t) {
		if (!r(t)) throw TypeError(String(t) + " is not an object");
		return t
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return o
	}));
	var r = n(0);
	n(359);

	function o(t) {
		var e = t.id;
		return r.c.createElement("svg", {
			class: "icon icon--".concat(e)
		}, r.c.createElement("use", {
			xlinkHref: "#icon-".concat(e)
		}))
	}
}, function(t, e, n) {
	var r = n(29),
		o = n(33).f,
		i = Function.prototype,
		a = i.toString,
		c = /^\s*function ([^ (]*)/,
		u = "name";
	r && !(u in i) && o(i, u, {
		configurable: !0,
		get: function() {
			try {
				return a.call(this).match(c)[1]
			} catch (t) {
				return ""
			}
		}
	})
}, function(t, e, n) {
	"use strict";
	n.d(e, "f", (function() {
		return r
	})), n.d(e, "g", (function() {
		return o
	})), n.d(e, "d", (function() {
		return i
	})), n.d(e, "b", (function() {
		return a
	})), n.d(e, "e", (function() {
		return c
	})), n.d(e, "a", (function() {
		return u
	})), n.d(e, "h", (function() {
		return l
	})), n.d(e, "j", (function() {
		return s
	})), n.d(e, "i", (function() {
		return f
	})), n.d(e, "c", (function() {
		return p
	}));
	var r = {
			cep: "circular-economy-roadmap",
			wmp: "waste-management",
			epr: "epr",
			pp: "product-policy",
			fp: "fiscal-policy"
		},
		o = {
			new: "new",
			updated: "updated"
		},
		i = [{
			aggregate: !1,
			alt_name: null,
			end_year: 2018,
			has_meta: !1,
			id: 630,
			is_nes: !1,
			lat: 18,
			lng: -66,
			map_name: null,
			map_short_name: null,
			name: "Puerto Rico",
			start_year: 2e3
		}, {
			aggregate: !1,
			alt_name: null,
			end_year: 2018,
			has_meta: !1,
			id: 158,
			is_nes: !1,
			lat: 24,
			lng: 121,
			map_name: null,
			map_short_name: null,
			name: "Taiwan",
			start_year: 2e3
		}],
		a = [{
			id: 97,
			lat: 45,
			lng: -25,
			box: !0
		}],
		c = 2010,
		u = {
			mea: "nawa",
			eax: "esa",
			sas: "csa",
			sea: "esa",
			cna: "csa",
			sac: "lac",
			cca: "lac",
			tpp: "cptpp",
			eu28: "euu"
		},
		l = {
			anz: [
				[113.18333183331833, -46.630161717554664],
				[174.36954369543696, -10.707042248391218]
			],
			csa: [
				[49.99549995499956, 3.229593478591056],
				[92.6307263072631, 45.555093685311874]
			],
			chn: [
				[73.60813608136081, 20.26325936712493],
				[134.75114751147515, 53.5563336038048]
			],
			esa: [
				[87.74187741877421, -8.31135748216856],
				[133.37953379533798, 52.11718674061743]
			],
			eur: [
				[-24.47484474844748, 32.64790800642383],
				[145.94365943659437, 70.06399044584197]
			],
			lac: [
				[-117.1289712897129, -52.35723711158986],
				[-34.80694806948068, 32.715612141121426]
			],
			nawa: [
				[-17.098370983709827, 8.665020292390437],
				[58.95238952389525, 43.56910573418236]
			],
			nac: [
				[-133.09873098730986, 32.259043232776094],
				[-11.424714247142475, 83.59960937500003]
			],
			ocn: [
				[131.13671136711366, -24.412789516020155],
				[191.5, 18.80675246939971]
			],
			ssf: [
				[-25.342453424534227, -34.78541015238277],
				[57.793177931779326, 24.995787785136415]
			]
		},
		s = {
			ocn: [184, 258, 581, 612],
			nawa: [879]
		},
		f = [184, 258, 581, 612],
		p = {
			afr: {
				id: "afr",
				name: "Africa",
				type: "region",
				children: [12, 818, 434, 504, 729, 788, 732, 86, 108, 174, 262, 232, 231, 260, 404, 450, 454, 480, 175, 508, 638, 646, 690, 706, 728, 800, 834, 894, 716, 24, 120, 140, 148, 178, 180, 226, 266, 678, 72, 748, 426, 516, 710, 204, 854, 132, 384, 270, 288, 324, 624, 430, 466, 478, 562, 566, 654, 686, 694, 768]
			}
		}
}, function(t, e) {
	t.exports = function(t) {
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
}, function(t, e) {
	var n = {}.hasOwnProperty;
	t.exports = function(t, e) {
		return n.call(t, e)
	}
}, function(t, e, n) {
	var r = n(8);
	t.exports = !r((function() {
		return 7 != Object.defineProperty({}, 1, {
			get: function() {
				return 7
			}
		})[1]
	}))
}, function(t, e, n) {
	var r = n(41);
	t.exports = function(t) {
		return Object(r(t))
	}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(87);
	r({
		target: "RegExp",
		proto: !0,
		forced: /./.exec !== o
	}, {
		exec: o
	})
}, function(t, e) {
	var n = Array.isArray;
	t.exports = n
}, function(t, e, n) {
	var r = n(29),
		o = n(171),
		i = n(23),
		a = n(66),
		c = Object.defineProperty;
	e.f = r ? c : function(t, e, n) {
		if (i(t), e = a(e, !0), i(n), o) try {
			return c(t, e, n)
		} catch (t) {}
		if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
		return "value" in n && (t[e] = n.value), t
	}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(188);
	r({
		target: "Array",
		proto: !0,
		forced: [].forEach != o
	}, {
		forEach: o
	})
}, function(t, e, n) {
	var r = n(20),
		o = n(193),
		i = n(188),
		a = n(38);
	for (var c in o) {
		var u = r[c],
			l = u && u.prototype;
		if (l && l.forEach !== i) try {
			a(l, "forEach", i)
		} catch (t) {
			l.forEach = i
		}
	}
}, function(t, e, n) {
	var r = n(195),
		o = "object" == typeof self && self && self.Object === Object && self,
		i = r || o || Function("return this")();
	t.exports = i
}, function(t, e, n) {
	var r = n(65),
		o = n(41);
	t.exports = function(t) {
		return r(o(t))
	}
}, function(t, e, n) {
	var r = n(29),
		o = n(33),
		i = n(64);
	t.exports = r ? function(t, e, n) {
		return o.f(t, e, i(1, n))
	} : function(t, e, n) {
		return t[e] = n, t
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "d", (function() {
		return r
	})), n.d(e, "a", (function() {
		return o
	})), n.d(e, "c", (function() {
		return i
	})), n.d(e, "b", (function() {
		return a
	}));
	n(21), n(34), n(35);

	function r(t, e) {
		return e ? [t[0] * e.scale + e.translate[0], t[1] * e.scale + e.translate[1]] : t
	}

	function o(t) {
		return {
			type: "Polygon",
			coordinates: [
				[
					[t[0][0], t[1][1]],
					[t[1][0], t[1][1]],
					[t[1][0], t[0][1]],
					[t[0][0], t[0][1]],
					[t[0][0], t[1][1]]
				]
			]
		}
	}

	function i(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .125,
			r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3.25,
			o = e.width,
			i = e.height,
			a = t[1][0] - t[0][0],
			c = t[1][1] - t[0][1],
			u = (t[0][0] + t[1][0]) / 2,
			l = (t[0][1] + t[1][1]) / 2,
			s = Math.max(1, Math.min(r, (1 - n) / Math.max(a / o, c / i))),
			f = [o / 2 - s * u, i / 2 - s * l];
		return 1 === s && (f[1] = 0), {
			transform: "translate(".concat(f, ") scale(").concat(s, ")"),
			transformRaw: {
				translate: f,
				scale: s
			}
		}
	}

	function a(t) {
		var e = [
			[1 / 0, 1 / 0],
			[0, 0]
		];
		return t.forEach((function(t) {
			e[0][0] = Math.min(t[0], e[0][0]), e[1][0] = Math.max(t[0], e[1][0]), e[0][1] = Math.min(t[1], e[0][1]), e[1][1] = Math.max(t[1], e[1][1])
		})), e
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "c", (function() {
		return i
	})), n.d(e, "d", (function() {
		return a
	})), n.d(e, "b", (function() {
		return c
	})), n.d(e, "a", (function() {
		return u
	}));
	var r = n(0),
		o = n(15);
	n(445);

	function i(t) {
		var e = t.columns,
			n = void 0 === e ? 3 : e,
			i = t.children;
		return r.c.createElement("div", {
			className: Object(o.a)("dashboard-columns", "dashboard-columns--n".concat(n))
		}, i)
	}

	function a(t) {
		var e = t.children;
		return r.c.createElement("div", {
			className: "dashboard-columns-footer"
		}, e)
	}

	function c(t) {
		var e = t.modifier,
			n = t.children;
		return r.c.createElement("div", {
			className: Object(o.a)("dashboard-column-header", e && "dashboard-column-header--".concat(e))
		}, n)
	}

	function u(t) {
		var e = t.children;
		return r.c.createElement("div", {
			className: "dashboard-column-body"
		}, e)
	}
}, function(t, e) {
	t.exports = function(t) {
		if (null == t) throw TypeError("Can't call method on " + t);
		return t
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = typeof t;
		return null != t && ("object" == e || "function" == e)
	}
}, function(t, e, n) {
	var r = n(61),
		o = Math.min;
	t.exports = function(t) {
		return t > 0 ? o(r(t), 9007199254740991) : 0
	}
}, function(t, e, n) {
	var r = n(29),
		o = n(8),
		i = n(28),
		a = Object.defineProperty,
		c = {},
		u = function(t) {
			throw t
		};
	t.exports = function(t, e) {
		if (i(c, t)) return c[t];
		e || (e = {});
		var n = [][t],
			l = !!i(e, "ACCESSORS") && e.ACCESSORS,
			s = i(e, 0) ? e[0] : u,
			f = i(e, 1) ? e[1] : void 0;
		return c[t] = !!n && !o((function() {
			if (l && !r) return !0;
			var t = {
				length: -1
			};
			l ? a(t, 1, {
				enumerable: !0,
				get: u
			}) : t[1] = 1, n.call(t, s, f)
		}))
	}
}, function(t, e) {
	var n = {}.toString;
	t.exports = function(t) {
		return n.call(t).slice(8, -1)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(118),
		o = n(23),
		i = n(30),
		a = n(43),
		c = n(61),
		u = n(41),
		l = n(181),
		s = n(120),
		f = Math.max,
		p = Math.min,
		h = Math.floor,
		d = /\$([$&'`]|\d\d?|<[^>]*>)/g,
		y = /\$([$&'`]|\d\d?)/g;
	r("replace", 2, (function(t, e, n, r) {
		var v = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
			m = r.REPLACE_KEEPS_$0,
			b = v ? "$" : "$0";
		return [function(n, r) {
			var o = u(this),
				i = null == n ? void 0 : n[t];
			return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r)
		}, function(t, r) {
			if (!v && m || "string" == typeof r && -1 === r.indexOf(b)) {
				var i = n(e, t, this, r);
				if (i.done) return i.value
			}
			var u = o(t),
				h = String(this),
				d = "function" == typeof r;
			d || (r = String(r));
			var y = u.global;
			if (y) {
				var g = u.unicode;
				u.lastIndex = 0
			}
			for (var x = [];;) {
				var w = s(u, h);
				if (null === w) break;
				if (x.push(w), !y) break;
				"" === String(w[0]) && (u.lastIndex = l(h, a(u.lastIndex), g))
			}
			for (var E, O = "", S = 0, P = 0; P < x.length; P++) {
				w = x[P];
				for (var k = String(w[0]), j = f(p(c(w.index), h.length), 0), M = [], C = 1; C < w.length; C++) M.push(void 0 === (E = w[C]) ? E : String(E));
				var N = w.groups;
				if (d) {
					var T = [k].concat(M, j, h);
					void 0 !== N && T.push(N);
					var R = String(r.apply(void 0, T))
				} else R = _(k, h, j, M, N, r);
				j >= S && (O += h.slice(S, j) + R, S = j + k.length)
			}
			return O + h.slice(S)
		}];

		function _(t, n, r, o, a, c) {
			var u = r + t.length,
				l = o.length,
				s = y;
			return void 0 !== a && (a = i(a), s = d), e.call(c, s, (function(e, i) {
				var c;
				switch (i.charAt(0)) {
					case "$":
						return "$";
					case "&":
						return t;
					case "`":
						return n.slice(0, r);
					case "'":
						return n.slice(u);
					case "<":
						c = a[i.slice(1, -1)];
						break;
					default:
						var s = +i;
						if (0 === s) return e;
						if (s > l) {
							var f = h(s / 10);
							return 0 === f ? e : f <= l ? void 0 === o[f - 1] ? i.charAt(1) : o[f - 1] + i.charAt(1) : e
						}
						c = o[s - 1]
				}
				return void 0 === c ? "" : c
			}))
		}
	}))
}, function(t, e, n) {
	var r = n(20),
		o = n(38),
		i = n(28),
		a = n(112),
		c = n(152),
		u = n(79),
		l = u.get,
		s = u.enforce,
		f = String(String).split("String");
	(t.exports = function(t, e, n, c) {
		var u = !!c && !!c.unsafe,
			l = !!c && !!c.enumerable,
			p = !!c && !!c.noTargetGet;
		"function" == typeof n && ("string" != typeof e || i(n, "name") || o(n, "name", e), s(n).source = f.join("string" == typeof e ? e : "")), t !== r ? (u ? !p && t[e] && (l = !0) : delete t[e], l ? t[e] = n : o(t, e, n)) : l ? t[e] = n : a(e, n)
	})(Function.prototype, "toString", (function() {
		return "function" == typeof this && l(this).source || c(this)
	}))
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(68).filter,
		i = n(90),
		a = n(44),
		c = i("filter"),
		u = a("filter");
	r({
		target: "Array",
		proto: !0,
		forced: !c || !u
	}, {
		filter: function(t) {
			return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	})
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return a
	}));
	var r = n(0),
		o = n(15),
		i = n(24);
	n(415);

	function a(t) {
		var e = t.children && t.children.length,
			n = Object(o.a)("iconbutton", e && "iconbutton--labelled", "loader" === t.icon && "iconbutton--loader", t.kind && "iconbutton--".concat(t.kind), t.size && "iconbutton--".concat(t.size));
		return t.href ? r.c.createElement("a", {
			class: n,
			href: t.href,
			download: t.download || null
		}, r.c.createElement(i.a, {
			id: t.icon
		}), e && r.c.createElement("span", null, t.children)) : r.c.createElement("button", {
			type: "button",
			class: n,
			disabled: t.disabled,
			"aria-expanded": t.ariaExpanded,
			"aria-label": t.ariaLabel,
			onClick: t.handleClick
		}, "loader" === t.icon ? r.c.createElement("i", {
			className: "icon iconbutton__loader"
		}) : r.c.createElement(i.a, {
			id: t.icon
		}), e && r.c.createElement("span", null, t.children))
	}
}, function(t, e) {
	t.exports = function(t) {
		if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
		return t
	}
}, function(t, e, n) {
	var r = n(291),
		o = n(294);
	t.exports = function(t, e) {
		var n = o(t, e);
		return r(n) ? n : void 0
	}
}, function(t, e, n) {
	"use strict";

	function r(t, e) {
		return t === e
	}

	function o(t, e, n) {
		if (null === e || null === n || e.length !== n.length) return !1;
		for (var r = e.length, o = 0; o < r; o++)
			if (!t(e[o], n[o])) return !1;
		return !0
	}

	function i(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
			n = null,
			i = null;
		return function() {
			return o(e, n, arguments) || (i = t.apply(null, arguments)), n = arguments, i
		}
	}

	function a(t) {
		var e = Array.isArray(t[0]) ? t[0] : t;
		if (!e.every((function(t) {
				return "function" == typeof t
			}))) {
			var n = e.map((function(t) {
				return typeof t
			})).join(", ");
			throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
		}
		return e
	}
	n.d(e, "b", (function() {
		return i
	})), n.d(e, "a", (function() {
		return c
	}));
	var c = function(t) {
		for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
		return function() {
			for (var e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
			var i = 0,
				c = r.pop(),
				u = a(r),
				l = t.apply(void 0, [function() {
					return i++, c.apply(null, arguments)
				}].concat(n)),
				s = t((function() {
					for (var t = [], e = u.length, n = 0; n < e; n++) t.push(u[n].apply(null, arguments));
					return l.apply(null, t)
				}));
			return s.resultFunc = c, s.dependencies = u, s.recomputations = function() {
				return i
			}, s.resetRecomputations = function() {
				return i = 0
			}, s
		}
	}(i)
}, function(t, e, n) {
	var r = n(249),
		o = n(367),
		i = n(158),
		a = n(258),
		c = i((function(t, e) {
			if (null == t) return [];
			var n = e.length;
			return n > 1 && a(t, e[0], e[1]) ? e = [] : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]), o(t, r(e, 1), [])
		}));
	t.exports = c
}, , function(t, e, n) {
	var r = n(29),
		o = n(111),
		i = n(64),
		a = n(37),
		c = n(66),
		u = n(28),
		l = n(171),
		s = Object.getOwnPropertyDescriptor;
	e.f = r ? s : function(t, e) {
		if (t = a(t), e = c(e, !0), l) try {
			return s(t, e)
		} catch (t) {}
		if (u(t, e)) return i(!o.f.call(t, e), t[e])
	}
}, function(t, e, n) {
	var r = n(175),
		o = n(20),
		i = function(t) {
			return "function" == typeof t ? t : void 0
		};
	t.exports = function(t, e) {
		return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][e] || o[t] && o[t][e]
	}
}, function(t, e, n) {
	var r = n(36).Symbol;
	t.exports = r
}, function(t, e) {
	t.exports = function(t) {
		return null != t && "object" == typeof t
	}
}, function(t, e, n) {
	var r = n(198),
		o = n(128);
	t.exports = function(t) {
		return null != t && o(t.length) && !r(t)
	}
}, function(t, e, n) {
	var r = n(194),
		o = n(282),
		i = n(59);
	t.exports = function(t) {
		return i(t) ? r(t) : o(t)
	}
}, function(t, e) {
	var n = Math.ceil,
		r = Math.floor;
	t.exports = function(t) {
		return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(8);
	t.exports = function(t, e) {
		var n = [][t];
		return !!n && r((function() {
			n.call(null, e || function() {
				throw 1
			}, 1)
		}))
	}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(27),
		i = n(67),
		a = n(177),
		c = n(43),
		u = n(37),
		l = n(89),
		s = n(14),
		f = n(90),
		p = n(44),
		h = f("slice"),
		d = p("slice", {
			ACCESSORS: !0,
			0: 0,
			1: 2
		}),
		y = s("species"),
		v = [].slice,
		m = Math.max;
	r({
		target: "Array",
		proto: !0,
		forced: !h || !d
	}, {
		slice: function(t, e) {
			var n, r, s, f = u(this),
				p = c(f.length),
				h = a(t, p),
				d = a(void 0 === e ? p : e, p);
			if (i(f) && ("function" != typeof(n = f.constructor) || n !== Array && !i(n.prototype) ? o(n) && null === (n = n[y]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return v.call(f, h, d);
			for (r = new(void 0 === n ? Array : n)(m(d - h, 0)), s = 0; h < d; h++, s++) h in f && l(r, s, f[h]);
			return r.length = s, r
		}
	})
}, function(t, e) {
	t.exports = function(t, e) {
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: e
		}
	}
}, function(t, e, n) {
	var r = n(8),
		o = n(45),
		i = "".split;
	t.exports = r((function() {
		return !Object("z").propertyIsEnumerable(0)
	})) ? function(t) {
		return "String" == o(t) ? i.call(t, "") : Object(t)
	} : Object
}, function(t, e, n) {
	var r = n(27);
	t.exports = function(t, e) {
		if (!r(t)) return t;
		var n, o;
		if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
		if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
		if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(t, e, n) {
	var r = n(45);
	t.exports = Array.isArray || function(t) {
		return "Array" == r(t)
	}
}, function(t, e, n) {
	var r = n(121),
		o = n(65),
		i = n(30),
		a = n(43),
		c = n(187),
		u = [].push,
		l = function(t) {
			var e = 1 == t,
				n = 2 == t,
				l = 3 == t,
				s = 4 == t,
				f = 6 == t,
				p = 5 == t || f;
			return function(h, d, y, v) {
				for (var m, b, _ = i(h), g = o(_), x = r(d, y, 3), w = a(g.length), E = 0, O = v || c, S = e ? O(h, w) : n ? O(h, 0) : void 0; w > E; E++)
					if ((p || E in g) && (b = x(m = g[E], E, _), t))
						if (e) S[E] = b;
						else if (b) switch (t) {
					case 3:
						return !0;
					case 5:
						return m;
					case 6:
						return E;
					case 2:
						u.call(S, m)
				} else if (s) return !1;
				return f ? -1 : l || s ? s : S
			}
		};
	t.exports = {
		forEach: l(0),
		map: l(1),
		filter: l(2),
		some: l(3),
		every: l(4),
		find: l(5),
		findIndex: l(6)
	}
}, function(t, e) {
	t.exports = {}
}, function(t, e, n) {
	var r = n(57),
		o = n(277),
		i = n(278),
		a = r ? r.toStringTag : void 0;
	t.exports = function(t) {
		return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? o(t) : i(t)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(285).left,
		i = n(62),
		a = n(44),
		c = i("reduce"),
		u = a("reduce", {
			1: 0
		});
	r({
		target: "Array",
		proto: !0,
		forced: !c || !u
	}, {
		reduce: function(t) {
			return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
		}
	})
}, function(t, e, n) {
	var r = n(70),
		o = n(58);
	t.exports = function(t) {
		return "symbol" == typeof t || o(t) && "[object Symbol]" == r(t)
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return i
	}));
	n(34), n(22), n(25), n(31), n(46), n(76), n(104), n(35);

	function r(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}
	var o = n(131),
		i = function() {
			function t(e, n) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), this.parseData(e), n && (this.sifter = new o(this.collection))
			}
			var e, n, i;
			return e = t, (n = [{
				key: "parseData",
				value: function(t) {
					this.index = {}, this.collection = t.map((function(t) {
						var e = {
							id: t.id,
							model: t,
							children: null
						};
						return this.index[t.id] = e, e
					}), this)
				}
			}, {
				key: "setDefault",
				value: function(t) {
					var e = {
						id: t.id || null,
						model: t,
						children: null,
						unsearchable: !0
					};
					this.defaultNode = e, this.collection.unshift(e), t.id && (this.index[t.id] = e)
				}
			}, {
				key: "get",
				value: function(t) {
					return this.index[t]
				}
			}, {
				key: "getDefault",
				value: function() {
					return this.defaultNode
				}
			}, {
				key: "getLast",
				value: function() {
					return this.collection[this.collection.length - 1]
				}
			}, {
				key: "contains",
				value: function(t) {
					return !!this.get(t.id)
				}
			}, {
				key: "search",
				value: function(t) {
					if (!this.sifter || !t || "" === t.trim()) throw new Error;
					var e = this.sifter.search(t, {
							fields: ["model.name", "model.alt_name"],
							conjunction: "and",
							nesting: !0
						}),
						n = [];
					return e.items.map((function(t) {
						var r = this.collection[t.id];
						r.unsearchable || n.push({
							label: r.model.name.replace(e.tokens[0].regex, "<em>$&</em>"),
							node: r
						})
					}), this), {
						collection: n
					}
				}
			}, {
				key: "forEach",
				value: function(t) {
					this.collection.forEach((function(e) {
						t(e)
					}))
				}
			}, {
				key: "map",
				value: function(t) {
					return this.collection.map((function(e) {
						return t(e)
					}))
				}
			}, {
				key: "toJSON",
				value: function() {
					return this.collection.map((function(t) {
						return t.model
					}))
				}
			}]) && r(e.prototype, n), i && r(e, i), t
		}()
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return i
	})), n.d(e, "d", (function() {
		return a
	})), n.d(e, "c", (function() {
		return c
	})), n.d(e, "b", (function() {
		return u
	}));
	var r = n(0),
		o = n(15);
	n(364);

	function i(t) {
		var e = t.modifier,
			n = t.children;
		return r.c.createElement("div", {
			className: Object(o.a)("map-wrapper", e && "map-wrapper--".concat(e))
		}, n)
	}

	function a(t) {
		t.modifier;
		var e = t.children;
		return r.c.createElement("div", {
			className: "map-wrapper-main"
		}, r.c.createElement("div", null, e))
	}

	function c(t) {
		var e = t.modifier,
			n = t.children;
		return r.c.createElement("div", {
			className: Object(o.a)("map-wrapper-header", e && "map-wrapper-header--".concat(e))
		}, n)
	}

	function u(t) {
		var e = t.modifier,
			n = t.children;
		return r.c.createElement("div", {
			className: Object(o.a)("map-wrapper-footer", e && "map-wrapper-footer--".concat(e))
		}, n)
	}
}, function(t, e) {
	t.exports = !1
}, function(t, e, n) {
	"use strict";
	var r = n(118),
		o = n(23),
		i = n(41),
		a = n(265),
		c = n(120);
	r("search", 1, (function(t, e, n) {
		return [function(e) {
			var n = i(this),
				r = null == e ? void 0 : e[t];
			return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n))
		}, function(t) {
			var r = n(e, t, this);
			if (r.done) return r.value;
			var i = o(t),
				u = String(this),
				l = i.lastIndex;
			a(l, 0) || (i.lastIndex = 0);
			var s = c(i, u);
			return a(i.lastIndex, l) || (i.lastIndex = l), null === s ? -1 : s.index
		}]
	}))
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return r
	})), n.d(e, "d", (function() {
		return o
	})), n.d(e, "c", (function() {
		return i
	})), n.d(e, "b", (function() {
		return a
	}));
	n(21);

	function r(t, e) {
		return !(!t || !e) && (t.exporter && e.exporter && t.exporter.model === e.exporter.model && t.importer && e.importer && t.importer.model === e.importer.model)
	}

	function o(t, e) {
		return function(n) {
			t[e] = n && n.base ? n.base : n
		}
	}

	function i(t) {
		if (!t) return t;
		var e = 1;
		(t *= 1e3) >= 1e12 ? e = 1e12 : t >= 1e9 ? e = 1e9 : t >= 1e6 ? e = 1e6 : t >= 1e3 && (e = 1e3);
		var n = .5;
		return (t /= e) >= 16 ? n = 20 : t >= 3.5 ? n = 4 : t >= 2 && (n = 2), Math.round(t / n) * n * e / 1e3
	}

	function a(t, e) {
		var n = new XMLHttpRequest;
		n.open("GET", t, !0), n.onload = function() {
			n.status >= 200 && n.status < 400 && e(JSON.parse(n.responseText))
		}, n.send()
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "b", (function() {
		return v
	})), n.d(e, "a", (function() {
		return m
	}));
	n(5), n(10), n(11), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(15),
		i = n(100);
	n(442);

	function a(t) {
		return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function c(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function u(t, e) {
		return (u = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function l(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = p(t);
			if (e) {
				var o = p(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return s(this, n)
		}
	}

	function s(t, e) {
		return !e || "object" !== a(e) && "function" != typeof e ? f(t) : e
	}

	function f(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function p(t) {
		return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var h, d, y, v = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && u(t, e)
		}(a, t);
		var e, n, o, i = l(a);

		function a() {
			var t;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, a), (t = i.call(this))._handleClick = t.handleClick.bind(f(t)), t
		}
		return e = a, (n = [{
			key: "render",
			value: function(t, e, n) {
				void 0 === this.index && (this.index = n.registerTab());
				var o = n.isActive(this.index);
				return r.c.createElement(m, {
					kind: t.kind,
					modifier: t.modifier,
					disabled: t.disabled,
					index: this.index,
					active: o,
					onClick: this._handleClick
				}, t.children)
			}
		}, {
			key: "handleClick",
			value: function(t) {
				t.preventDefault(), this.props.disabled || this.context.activate(this.index)
			}
		}]) && c(e.prototype, n), o && c(e, o), a
	}(r.a);

	function m(t) {
		return r.c.createElement("li", {
			class: Object(o.a)("tab", t.kind && "tab--".concat(t.kind), t.modifier && "tab--".concat(t.modifier)),
			role: "tab",
			"aria-disabled": t.disabled,
			"aria-controls": "tabpanel" + t.index,
			"aria-selected": t.active,
			tabindex: t.active ? 0 : -1,
			onClick: t.onClick
		}, t.children)
	}
	h = v, d = "contextType", y = i.a, d in h ? Object.defineProperty(h, d, {
		value: y,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : h[d] = y
}, function(t, e, n) {
	var r, o, i, a = n(263),
		c = n(20),
		u = n(27),
		l = n(38),
		s = n(28),
		f = n(85),
		p = n(86),
		h = c.WeakMap;
	if (a) {
		var d = new h,
			y = d.get,
			v = d.has,
			m = d.set;
		r = function(t, e) {
			return m.call(d, t, e), e
		}, o = function(t) {
			return y.call(d, t) || {}
		}, i = function(t) {
			return v.call(d, t)
		}
	} else {
		var b = f("state");
		p[b] = !0, r = function(t, e) {
			return l(t, b, e), e
		}, o = function(t) {
			return s(t, b) ? t[b] : {}
		}, i = function(t) {
			return s(t, b)
		}
	}
	t.exports = {
		set: r,
		get: o,
		has: i,
		enforce: function(t) {
			return i(t) ? o(t) : r(t, {})
		},
		getterFor: function(t) {
			return function(e) {
				var n;
				if (!u(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
				return n
			}
		}
	}
}, function(t, e, n) {
	var r, o = n(23),
		i = n(269),
		a = n(116),
		c = n(86),
		u = n(239),
		l = n(151),
		s = n(85),
		f = s("IE_PROTO"),
		p = function() {},
		h = function(t) {
			return "<script>" + t + "</" + "script>"
		},
		d = function() {
			try {
				r = document.domain && new ActiveXObject("htmlfile")
			} catch (t) {}
			var t, e;
			d = r ? function(t) {
				t.write(h("")), t.close();
				var e = t.parentWindow.Object;
				return t = null, e
			}(r) : ((e = l("iframe")).style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(h("document.F=Object")), t.close(), t.F);
			for (var n = a.length; n--;) delete d.prototype[a[n]];
			return d()
		};
	c[f] = !0, t.exports = Object.create || function(t, e) {
		var n;
		return null !== t ? (p.prototype = o(t), n = new p, p.prototype = null, n[f] = t) : n = d(), void 0 === e ? n : i(n, e)
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = function(t) {
		return Array.isArray(t[0])
	};
	e.angleFromSides = function(t, e, n) {
		return Math.acos((Math.pow(t, 2) + Math.pow(e, 2) - Math.pow(n, 2)) / (2 * t * e)) * (180 / Math.PI)
	}, e.applyFuncToShapes = function(t, e) {
		for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
		return r(e) ? e.map((function(e) {
			return t.apply(void 0, [e].concat(o))
		})) : t.apply(void 0, [e].concat(o))
	}, e.getShapeArray = function(t) {
		return r(t) ? t : [t]
	}, e.isShapeArray = r, e.numberAtInterval = function(t, e, n) {
		var r = t === e ? 0 : Math.abs(e - t);
		return 0 === r ? t : t < e ? t + r * n : t - r * n
	}
}, function(t, e) {
	function n(t, e) {
		if (!(this instanceof n)) return new n(t, e);
		this.x = t || 0, this.y = e || 0
	}
	t.exports = n, n.fromArray = function(t) {
		return new n(t[0] || 0, t[1] || 0)
	}, n.fromObject = function(t) {
		return new n(t.x || 0, t.y || 0)
	}, n.prototype.addX = function(t) {
		return this.x += t.x, this
	}, n.prototype.addY = function(t) {
		return this.y += t.y, this
	}, n.prototype.add = function(t) {
		return this.x += t.x, this.y += t.y, this
	}, n.prototype.addScalar = function(t) {
		return this.x += t, this.y += t, this
	}, n.prototype.addScalarX = function(t) {
		return this.x += t, this
	}, n.prototype.addScalarY = function(t) {
		return this.y += t, this
	}, n.prototype.subtractX = function(t) {
		return this.x -= t.x, this
	}, n.prototype.subtractY = function(t) {
		return this.y -= t.y, this
	}, n.prototype.subtract = function(t) {
		return this.x -= t.x, this.y -= t.y, this
	}, n.prototype.subtractScalar = function(t) {
		return this.x -= t, this.y -= t, this
	}, n.prototype.subtractScalarX = function(t) {
		return this.x -= t, this
	}, n.prototype.subtractScalarY = function(t) {
		return this.y -= t, this
	}, n.prototype.divideX = function(t) {
		return this.x /= t.x, this
	}, n.prototype.divideY = function(t) {
		return this.y /= t.y, this
	}, n.prototype.divide = function(t) {
		return this.x /= t.x, this.y /= t.y, this
	}, n.prototype.divideScalar = function(t) {
		return 0 !== t ? (this.x /= t, this.y /= t) : (this.x = 0, this.y = 0), this
	}, n.prototype.divideScalarX = function(t) {
		return 0 !== t ? this.x /= t : this.x = 0, this
	}, n.prototype.divideScalarY = function(t) {
		return 0 !== t ? this.y /= t : this.y = 0, this
	}, n.prototype.invertX = function() {
		return this.x *= -1, this
	}, n.prototype.invertY = function() {
		return this.y *= -1, this
	}, n.prototype.invert = function() {
		return this.invertX(), this.invertY(), this
	}, n.prototype.multiplyX = function(t) {
		return this.x *= t.x, this
	}, n.prototype.multiplyY = function(t) {
		return this.y *= t.y, this
	}, n.prototype.multiply = function(t) {
		return this.x *= t.x, this.y *= t.y, this
	}, n.prototype.multiplyScalar = function(t) {
		return this.x *= t, this.y *= t, this
	}, n.prototype.multiplyScalarX = function(t) {
		return this.x *= t, this
	}, n.prototype.multiplyScalarY = function(t) {
		return this.y *= t, this
	}, n.prototype.normalize = function() {
		var t = this.length();
		return 0 === t ? (this.x = 1, this.y = 0) : this.divide(n(t, t)), this
	}, n.prototype.norm = n.prototype.normalize, n.prototype.limit = function(t, e) {
		return Math.abs(this.x) > t && (this.x *= e), Math.abs(this.y) > t && (this.y *= e), this
	}, n.prototype.randomize = function(t, e) {
		return this.randomizeX(t, e), this.randomizeY(t, e), this
	}, n.prototype.randomizeX = function(t, e) {
		var n = Math.min(t.x, e.x),
			r = Math.max(t.x, e.x);
		return this.x = o(n, r), this
	}, n.prototype.randomizeY = function(t, e) {
		var n = Math.min(t.y, e.y),
			r = Math.max(t.y, e.y);
		return this.y = o(n, r), this
	}, n.prototype.randomizeAny = function(t, e) {
		return Math.round(Math.random()) ? this.randomizeX(t, e) : this.randomizeY(t, e), this
	}, n.prototype.unfloat = function() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this
	}, n.prototype.toFixed = function(t) {
		return void 0 === t && (t = 8), this.x = this.x.toFixed(t), this.y = this.y.toFixed(t), this
	}, n.prototype.mixX = function(t, e) {
		return void 0 === e && (e = .5), this.x = (1 - e) * this.x + e * t.x, this
	}, n.prototype.mixY = function(t, e) {
		return void 0 === e && (e = .5), this.y = (1 - e) * this.y + e * t.y, this
	}, n.prototype.mix = function(t, e) {
		return this.mixX(t, e), this.mixY(t, e), this
	}, n.prototype.clone = function() {
		return new n(this.x, this.y)
	}, n.prototype.copyX = function(t) {
		return this.x = t.x, this
	}, n.prototype.copyY = function(t) {
		return this.y = t.y, this
	}, n.prototype.copy = function(t) {
		return this.copyX(t), this.copyY(t), this
	}, n.prototype.zero = function() {
		return this.x = this.y = 0, this
	}, n.prototype.dot = function(t) {
		return this.x * t.x + this.y * t.y
	}, n.prototype.cross = function(t) {
		return this.x * t.y - this.y * t.x
	}, n.prototype.projectOnto = function(t) {
		var e = (this.x * t.x + this.y * t.y) / (t.x * t.x + t.y * t.y);
		return this.x = e * t.x, this.y = e * t.y, this
	}, n.prototype.horizontalAngle = function() {
		return Math.atan2(this.y, this.x)
	}, n.prototype.horizontalAngleDeg = function() {
		return i(this.horizontalAngle())
	}, n.prototype.verticalAngle = function() {
		return Math.atan2(this.x, this.y)
	}, n.prototype.verticalAngleDeg = function() {
		return i(this.verticalAngle())
	}, n.prototype.angle = n.prototype.horizontalAngle, n.prototype.angleDeg = n.prototype.horizontalAngleDeg, n.prototype.direction = n.prototype.horizontalAngle, n.prototype.rotate = function(t) {
		var e = this.x * Math.cos(t) - this.y * Math.sin(t),
			n = this.x * Math.sin(t) + this.y * Math.cos(t);
		return this.x = e, this.y = n, this
	}, n.prototype.rotateDeg = function(t) {
		return t = a(t), this.rotate(t)
	}, n.prototype.rotateTo = function(t) {
		return this.rotate(t - this.angle())
	}, n.prototype.rotateToDeg = function(t) {
		return t = a(t), this.rotateTo(t)
	}, n.prototype.rotateBy = function(t) {
		var e = this.angle() + t;
		return this.rotate(e)
	}, n.prototype.rotateByDeg = function(t) {
		return t = a(t), this.rotateBy(t)
	}, n.prototype.distanceX = function(t) {
		return this.x - t.x
	}, n.prototype.absDistanceX = function(t) {
		return Math.abs(this.distanceX(t))
	}, n.prototype.distanceY = function(t) {
		return this.y - t.y
	}, n.prototype.absDistanceY = function(t) {
		return Math.abs(this.distanceY(t))
	}, n.prototype.distance = function(t) {
		return Math.sqrt(this.distanceSq(t))
	}, n.prototype.distanceSq = function(t) {
		var e = this.distanceX(t),
			n = this.distanceY(t);
		return e * e + n * n
	}, n.prototype.length = function() {
		return Math.sqrt(this.lengthSq())
	}, n.prototype.lengthSq = function() {
		return this.x * this.x + this.y * this.y
	}, n.prototype.magnitude = n.prototype.length, n.prototype.isZero = function() {
		return 0 === this.x && 0 === this.y
	}, n.prototype.isEqualTo = function(t) {
		return this.x === t.x && this.y === t.y
	}, n.prototype.toString = function() {
		return "x:" + this.x + ", y:" + this.y
	}, n.prototype.toArray = function() {
		return [this.x, this.y]
	}, n.prototype.toObject = function() {
		return {
			x: this.x,
			y: this.y
		}
	};
	var r = 180 / Math.PI;

	function o(t, e) {
		return Math.floor(Math.random() * (e - t + 1) + t)
	}

	function i(t) {
		return t * r
	}

	function a(t) {
		return t / r
	}
}, function(t, e) {
	t.exports = function(t) {
		return t
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return y
	}));
	n(5), n(10), n(11), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(100);
	n(443);

	function i(t) {
		return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function a(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function c(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function u(t, e) {
		return (u = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function l(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = f(t);
			if (e) {
				var o = f(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return s(this, n)
		}
	}

	function s(t, e) {
		return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function f(t) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var p, h, d, y = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && u(t, e)
		}(s, t);
		var e, n, o, i = l(s);

		function s() {
			return a(this, s), i.apply(this, arguments)
		}
		return e = s, (n = [{
			key: "render",
			value: function(t, e, n) {
				return void 0 === this.index && (this.index = n.registerPanel()), r.c.createElement("div", {
					id: "tabpanel" + this.index,
					className: "tabpanel",
					role: "tabpanel",
					"aria-hidden": (!n.isActive(this.index)).toString()
				}, t.children)
			}
		}]) && c(e.prototype, n), o && c(e, o), s
	}(r.a);
	p = y, h = "contextType", d = o.a, h in p ? Object.defineProperty(p, h, {
		value: d,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : p[h] = d
}, function(t, e, n) {
	var r = n(113),
		o = n(114),
		i = r("keys");
	t.exports = function(t) {
		return i[t] || (i[t] = o(t))
	}
}, function(t, e) {
	t.exports = {}
}, function(t, e, n) {
	"use strict";
	var r, o, i = n(179),
		a = n(264),
		c = RegExp.prototype.exec,
		u = String.prototype.replace,
		l = c,
		s = (r = /a/, o = /b*/g, c.call(r, "a"), c.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
		f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
		p = void 0 !== /()??/.exec("")[1];
	(s || p || f) && (l = function(t) {
		var e, n, r, o, a = this,
			l = f && a.sticky,
			h = i.call(a),
			d = a.source,
			y = 0,
			v = t;
		return l && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), v = String(t).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== t[a.lastIndex - 1]) && (d = "(?: " + d + ")", v = " " + v, y++), n = new RegExp("^(?:" + d + ")", h)), p && (n = new RegExp("^" + d + "$(?!\\s)", h)), s && (e = a.lastIndex), r = c.call(l ? n : a, v), l ? r ? (r.input = r.input.slice(y), r[0] = r[0].slice(y), r.index = a.lastIndex, a.lastIndex += r[0].length) : a.lastIndex = 0 : s && r && (a.lastIndex = a.global ? r.index + r[0].length : e), p && r && r.length > 1 && u.call(r[0], n, (function() {
			for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
		})), r
	}), t.exports = l
}, function(t, e, n) {
	var r = n(176),
		o = n(116);
	t.exports = Object.keys || function(t) {
		return r(t, o)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(66),
		o = n(33),
		i = n(64);
	t.exports = function(t, e, n) {
		var a = r(e);
		a in t ? o.f(t, a, i(0, n)) : t[a] = n
	}
}, function(t, e, n) {
	var r = n(8),
		o = n(14),
		i = n(153),
		a = o("species");
	t.exports = function(t) {
		return i >= 51 || !r((function() {
			var e = [];
			return (e.constructor = {})[a] = function() {
				return {
					foo: 1
				}
			}, 1 !== e[t](Boolean).foo
		}))
	}
}, function(t, e, n) {
	var r = n(51)(Object, "create");
	t.exports = r
}, function(t, e, n) {
	var r = n(299),
		o = n(300),
		i = n(301),
		a = n(302),
		c = n(303);

	function u(t) {
		var e = -1,
			n = null == t ? 0 : t.length;
		for (this.clear(); ++e < n;) {
			var r = t[e];
			this.set(r[0], r[1])
		}
	}
	u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = c, t.exports = u
}, function(t, e, n) {
	var r = n(94);
	t.exports = function(t, e) {
		for (var n = t.length; n--;)
			if (r(t[n][0], e)) return n;
		return -1
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return t === e || t != t && e != e
	}
}, function(t, e, n) {
	var r = n(305);
	t.exports = function(t, e) {
		var n = t.__data__;
		return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
	}
}, function(t, e, n) {
	var r = n(202),
		o = n(108);
	t.exports = function(t, e, n, i) {
		var a = !n;
		n || (n = {});
		for (var c = -1, u = e.length; ++c < u;) {
			var l = e[c],
				s = i ? i(n[l], t[l], l, n, t) : void 0;
			void 0 === s && (s = t[l]), a ? o(n, l, s) : r(n, l, s)
		}
		return n
	}
}, function(t, e, n) {
	var r = n(3),
		o = n(30),
		i = n(88);
	r({
		target: "Object",
		stat: !0,
		forced: n(8)((function() {
			i(1)
		}))
	}, {
		keys: function(t) {
			return i(o(t))
		}
	})
}, function(t, e, n) {
	var r = n(72);
	t.exports = function(t) {
		if ("string" == typeof t || r(t)) return t;
		var e = t + "";
		return "0" == e && 1 / t == -Infinity ? "-0" : e
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return h
	})), n.d(e, "b", (function() {
		return d
	}));
	n(5), n(10), n(11), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(142),
		i = n.n(o);

	function a(t) {
		return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function c(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function u(t, e) {
		return (u = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function l(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = p(t);
			if (e) {
				var o = p(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return s(this, n)
		}
	}

	function s(t, e) {
		return !e || "object" !== a(e) && "function" != typeof e ? f(t) : e
	}

	function f(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function p(t) {
		return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var h = r.c.createContext({
			width: null,
			height: null,
			trueWidth: null,
			trueHeight: null
		}),
		d = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && u(t, e)
			}(s, t);
			var e, n, o, a = l(s);

			function s() {
				var t, e, n, r;
				return function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, s), t = a.call(this), e = f(t), r = function() {
					var e = document.body.clientWidth;
					t.lastWindowWidth && t.lastWindowWidth === e || (t.measureDimensions(), t.lastWindowWidth = e)
				}, (n = "handleWindowResize") in e ? Object.defineProperty(e, n, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[n] = r, t.state = {
					width: null,
					height: null,
					trueWidth: null,
					trueHeight: null
				}, t.lastWindowWidth = null, t.debouncedHandleWindowResize = i()(t.handleWindowResize, 200), t
			}
			return e = s, (n = [{
				key: "componentDidMount",
				value: function() {
					window.addEventListener("resize", this.debouncedHandleWindowResize), this.state.width && this.state.height || this.measureDimensions()
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					window.removeEventListener("resize", this.debouncedHandleWindowResize)
				}
			}, {
				key: "render",
				value: function(t, e) {
					return e.width && e.height ? r.c.createElement(h.Provider, {
						value: this.state
					}, r.c.createElement("div", null, t.children)) : r.c.createElement("div", null)
				}
			}, {
				key: "measureDimensions",
				value: function() {
					var t = this.base.parentNode.getBoundingClientRect(),
						e = t.width,
						n = t.height,
						r = e,
						o = n;
					this.props.minWidth && this.props.minHeight && e < this.props.minWidth && (e = this.props.minWidth, n = this.props.minHeight), this.state.width === e && this.state.height === n && this.state.trueWidth === r && this.state.trueHeight === o || this.setState({
						width: e,
						height: n,
						trueWidth: r,
						trueHeight: o
					})
				}
			}]) && c(e.prototype, n), o && c(e, o), s
		}(r.a)
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return s
	})), n.d(e, "b", (function() {
		return f
	}));
	n(5), n(10), n(11), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0);

	function o(t) {
		return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function i(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function a(t, e) {
		return (a = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function c(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = l(t);
			if (e) {
				var o = l(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return u(this, n)
		}
	}

	function u(t, e) {
		return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function l(t) {
		return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var s = r.c.createContext({
			registerTab: function() {},
			registerPanel: function() {},
			activate: function() {},
			isActive: function() {}
		}),
		f = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && a(t, e)
			}(l, t);
			var e, n, o, u = c(l);

			function l(t) {
				var e;
				return function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, l), (e = u.call(this)).state = {
					activeTabIndex: t.activeTabIndex || 0
				}, e.totalPanels = 0, e.totalTabs = 0, e
			}
			return e = l, (n = [{
				key: "_getChildContext",
				value: function() {
					var t = this;
					return {
						registerTab: function() {
							return t.totalTabs++, t.totalTabs - 1
						},
						registerPanel: function() {
							return t.totalPanels++, t.totalPanels - 1
						},
						activate: function(e) {
							t.setState({
								activeTabIndex: e
							}), t.props.handleActivate && t.props.handleActivate()
						},
						isActive: function(e) {
							return t.state.activeTabIndex === e
						}
					}
				}
			}, {
				key: "render",
				value: function(t) {
					return r.c.createElement("div", null, r.c.createElement(s.Provider, {
						value: this._getChildContext()
					}, t.children))
				}
			}]) && i(e.prototype, n), o && i(e, o), l
		}(r.a)
}, function(t, e, n) {
	"use strict";
	n.d(e, "b", (function() {
		return p
	})), n.d(e, "a", (function() {
		return Tt
	}));
	var r = n(4),
		o = n(146),
		i = Array.prototype,
		a = i.map,
		c = i.slice,
		u = {
			name: "implicit"
		};

	function l(t) {
		var e = Object(o.a)(),
			n = [],
			r = u;

		function i(o) {
			var i = o + "",
				a = e.get(i);
			if (!a) {
				if (r !== u) return r;
				e.set(i, a = n.push(o))
			}
			return t[(a - 1) % t.length]
		}
		return t = null == t ? [] : c.call(t), i.domain = function(t) {
			if (!arguments.length) return n.slice();
			n = [], e = Object(o.a)();
			for (var r, a, c = -1, u = t.length; ++c < u;) e.has(a = (r = t[c]) + "") || e.set(a, n.push(r));
			return i
		}, i.range = function(e) {
			return arguments.length ? (t = c.call(e), i) : t.slice()
		}, i.unknown = function(t) {
			return arguments.length ? (r = t, i) : r
		}, i.copy = function() {
			return l().domain(n).range(t).unknown(r)
		}, i
	}

	function s() {
		var t, e, n = l().unknown(void 0),
			o = n.domain,
			i = n.range,
			a = [0, 1],
			c = !1,
			u = 0,
			f = 0,
			p = .5;

		function h() {
			var n = o().length,
				l = a[1] < a[0],
				s = a[l - 0],
				h = a[1 - l];
			t = (h - s) / Math.max(1, n - u + 2 * f), c && (t = Math.floor(t)), s += (h - s - t * (n - u)) * p, e = t * (1 - u), c && (s = Math.round(s), e = Math.round(e));
			var d = Object(r.f)(n).map((function(e) {
				return s + t * e
			}));
			return i(l ? d.reverse() : d)
		}
		return delete n.unknown, n.domain = function(t) {
			return arguments.length ? (o(t), h()) : o()
		}, n.range = function(t) {
			return arguments.length ? (a = [+t[0], +t[1]], h()) : a.slice()
		}, n.rangeRound = function(t) {
			return a = [+t[0], +t[1]], c = !0, h()
		}, n.bandwidth = function() {
			return e
		}, n.step = function() {
			return t
		}, n.round = function(t) {
			return arguments.length ? (c = !!t, h()) : c
		}, n.padding = function(t) {
			return arguments.length ? (u = f = Math.max(0, Math.min(1, t)), h()) : u
		}, n.paddingInner = function(t) {
			return arguments.length ? (u = Math.max(0, Math.min(1, t)), h()) : u
		}, n.paddingOuter = function(t) {
			return arguments.length ? (f = Math.max(0, Math.min(1, t)), h()) : f
		}, n.align = function(t) {
			return arguments.length ? (p = Math.max(0, Math.min(1, t)), h()) : p
		}, n.copy = function() {
			return s().domain(o()).range(a).round(c).paddingInner(u).paddingOuter(f).align(p)
		}, h()
	}

	function f(t) {
		var e = t.copy;
		return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
			return f(e())
		}, t
	}

	function p() {
		return f(s().paddingInner(1))
	}
	var h = function(t, e) {
			return t = +t, e = +e,
				function(n) {
					return t * (1 - n) + e * n
				}
		},
		d = function(t, e, n) {
			t.prototype = e.prototype = n, n.constructor = t
		};

	function y(t, e) {
		var n = Object.create(t.prototype);
		for (var r in e) n[r] = e[r];
		return n
	}

	function v() {}
	var m = .7,
		b = 1 / m,
		_ = "\\s*([+-]?\\d+)\\s*",
		g = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
		x = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
		w = /^#([0-9a-f]{3,8})$/,
		E = new RegExp("^rgb\\(" + [_, _, _] + "\\)$"),
		O = new RegExp("^rgb\\(" + [x, x, x] + "\\)$"),
		S = new RegExp("^rgba\\(" + [_, _, _, g] + "\\)$"),
		P = new RegExp("^rgba\\(" + [x, x, x, g] + "\\)$"),
		k = new RegExp("^hsl\\(" + [g, x, x] + "\\)$"),
		j = new RegExp("^hsla\\(" + [g, x, x, g] + "\\)$"),
		M = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		};

	function C() {
		return this.rgb().formatHex()
	}

	function N() {
		return this.rgb().formatRgb()
	}

	function T(t) {
		var e, n;
		return t = (t + "").trim().toLowerCase(), (e = w.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? R(e) : 3 === n ? new I(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? A(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? A(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = E.exec(t)) ? new I(e[1], e[2], e[3], 1) : (e = O.exec(t)) ? new I(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = S.exec(t)) ? A(e[1], e[2], e[3], e[4]) : (e = P.exec(t)) ? A(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = k.exec(t)) ? F(e[1], e[2] / 100, e[3] / 100, 1) : (e = j.exec(t)) ? F(e[1], e[2] / 100, e[3] / 100, e[4]) : M.hasOwnProperty(t) ? R(M[t]) : "transparent" === t ? new I(NaN, NaN, NaN, 0) : null
	}

	function R(t) {
		return new I(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
	}

	function A(t, e, n, r) {
		return r <= 0 && (t = e = n = NaN), new I(t, e, n, r)
	}

	function D(t) {
		return t instanceof v || (t = T(t)), t ? new I((t = t.rgb()).r, t.g, t.b, t.opacity) : new I
	}

	function L(t, e, n, r) {
		return 1 === arguments.length ? D(t) : new I(t, e, n, null == r ? 1 : r)
	}

	function I(t, e, n, r) {
		this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
	}

	function q() {
		return "#" + z(this.r) + z(this.g) + z(this.b)
	}

	function U() {
		var t = this.opacity;
		return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
	}

	function z(t) {
		return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
	}

	function F(t, e, n, r) {
		return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Y(t, e, n, r)
	}

	function H(t) {
		if (t instanceof Y) return new Y(t.h, t.s, t.l, t.opacity);
		if (t instanceof v || (t = T(t)), !t) return new Y;
		if (t instanceof Y) return t;
		var e = (t = t.rgb()).r / 255,
			n = t.g / 255,
			r = t.b / 255,
			o = Math.min(e, n, r),
			i = Math.max(e, n, r),
			a = NaN,
			c = i - o,
			u = (i + o) / 2;
		return c ? (a = e === i ? (n - r) / c + 6 * (n < r) : n === i ? (r - e) / c + 2 : (e - n) / c + 4, c /= u < .5 ? i + o : 2 - i - o, a *= 60) : c = u > 0 && u < 1 ? 0 : a, new Y(a, c, u, t.opacity)
	}

	function Y(t, e, n, r) {
		this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
	}

	function W(t, e, n) {
		return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
	}

	function G(t, e, n, r, o) {
		var i = t * t,
			a = i * t;
		return ((1 - 3 * t + 3 * i - a) * e + (4 - 6 * i + 3 * a) * n + (1 + 3 * t + 3 * i - 3 * a) * r + a * o) / 6
	}
	d(v, T, {
		copy: function(t) {
			return Object.assign(new this.constructor, this, t)
		},
		displayable: function() {
			return this.rgb().displayable()
		},
		hex: C,
		formatHex: C,
		formatHsl: function() {
			return H(this).formatHsl()
		},
		formatRgb: N,
		toString: N
	}), d(I, L, y(v, {
		brighter: function(t) {
			return t = null == t ? b : Math.pow(b, t), new I(this.r * t, this.g * t, this.b * t, this.opacity)
		},
		darker: function(t) {
			return t = null == t ? m : Math.pow(m, t), new I(this.r * t, this.g * t, this.b * t, this.opacity)
		},
		rgb: function() {
			return this
		},
		displayable: function() {
			return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
		},
		hex: q,
		formatHex: q,
		formatRgb: U,
		toString: U
	})), d(Y, (function(t, e, n, r) {
		return 1 === arguments.length ? H(t) : new Y(t, e, n, null == r ? 1 : r)
	}), y(v, {
		brighter: function(t) {
			return t = null == t ? b : Math.pow(b, t), new Y(this.h, this.s, this.l * t, this.opacity)
		},
		darker: function(t) {
			return t = null == t ? m : Math.pow(m, t), new Y(this.h, this.s, this.l * t, this.opacity)
		},
		rgb: function() {
			var t = this.h % 360 + 360 * (this.h < 0),
				e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
				n = this.l,
				r = n + (n < .5 ? n : 1 - n) * e,
				o = 2 * n - r;
			return new I(W(t >= 240 ? t - 240 : t + 120, o, r), W(t, o, r), W(t < 120 ? t + 240 : t - 120, o, r), this.opacity)
		},
		displayable: function() {
			return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
		},
		formatHsl: function() {
			var t = this.opacity;
			return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
		}
	}));
	var B = function(t) {
		return function() {
			return t
		}
	};

	function V(t, e) {
		return function(n) {
			return t + n * e
		}
	}

	function $(t) {
		return 1 == (t = +t) ? Q : function(e, n) {
			return n - e ? function(t, e, n) {
				return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
					function(r) {
						return Math.pow(t + r * e, n)
					}
			}(e, n, t) : B(isNaN(e) ? n : e)
		}
	}

	function Q(t, e) {
		var n = e - t;
		return n ? V(t, n) : B(isNaN(t) ? e : t)
	}
	var Z = function t(e) {
		var n = $(e);

		function r(t, e) {
			var r = n((t = L(t)).r, (e = L(e)).r),
				o = n(t.g, e.g),
				i = n(t.b, e.b),
				a = Q(t.opacity, e.opacity);
			return function(e) {
				return t.r = r(e), t.g = o(e), t.b = i(e), t.opacity = a(e), t + ""
			}
		}
		return r.gamma = t, r
	}(1);

	function X(t) {
		return function(e) {
			var n, r, o = e.length,
				i = new Array(o),
				a = new Array(o),
				c = new Array(o);
			for (n = 0; n < o; ++n) r = L(e[n]), i[n] = r.r || 0, a[n] = r.g || 0, c[n] = r.b || 0;
			return i = t(i), a = t(a), c = t(c), r.opacity = 1,
				function(t) {
					return r.r = i(t), r.g = a(t), r.b = c(t), r + ""
				}
		}
	}
	X((function(t) {
		var e = t.length - 1;
		return function(n) {
			var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
				o = t[r],
				i = t[r + 1],
				a = r > 0 ? t[r - 1] : 2 * o - i,
				c = r < e - 1 ? t[r + 2] : 2 * i - o;
			return G((n - r / e) * e, a, o, i, c)
		}
	})), X((function(t) {
		var e = t.length;
		return function(n) {
			var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
				o = t[(r + e - 1) % e],
				i = t[r % e],
				a = t[(r + 1) % e],
				c = t[(r + 2) % e];
			return G((n - r / e) * e, o, i, a, c)
		}
	}));
	var J = function(t, e) {
		e || (e = []);
		var n, r = t ? Math.min(e.length, t.length) : 0,
			o = e.slice();
		return function(i) {
			for (n = 0; n < r; ++n) o[n] = t[n] * (1 - i) + e[n] * i;
			return o
		}
	};

	function K(t) {
		return ArrayBuffer.isView(t) && !(t instanceof DataView)
	}

	function tt(t, e) {
		var n, r = e ? e.length : 0,
			o = t ? Math.min(r, t.length) : 0,
			i = new Array(o),
			a = new Array(r);
		for (n = 0; n < o; ++n) i[n] = at(t[n], e[n]);
		for (; n < r; ++n) a[n] = e[n];
		return function(t) {
			for (n = 0; n < o; ++n) a[n] = i[n](t);
			return a
		}
	}
	var et = function(t, e) {
			var n = new Date;
			return t = +t, e = +e,
				function(r) {
					return n.setTime(t * (1 - r) + e * r), n
				}
		},
		nt = function(t, e) {
			var n, r = {},
				o = {};
			for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? r[n] = at(t[n], e[n]) : o[n] = e[n];
			return function(t) {
				for (n in r) o[n] = r[n](t);
				return o
			}
		},
		rt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		ot = new RegExp(rt.source, "g");
	var it = function(t, e) {
			var n, r, o, i = rt.lastIndex = ot.lastIndex = 0,
				a = -1,
				c = [],
				u = [];
			for (t += "", e += "";
				(n = rt.exec(t)) && (r = ot.exec(e));)(o = r.index) > i && (o = e.slice(i, o), c[a] ? c[a] += o : c[++a] = o), (n = n[0]) === (r = r[0]) ? c[a] ? c[a] += r : c[++a] = r : (c[++a] = null, u.push({
				i: a,
				x: h(n, r)
			})), i = ot.lastIndex;
			return i < e.length && (o = e.slice(i), c[a] ? c[a] += o : c[++a] = o), c.length < 2 ? u[0] ? function(t) {
				return function(e) {
					return t(e) + ""
				}
			}(u[0].x) : function(t) {
				return function() {
					return t
				}
			}(e) : (e = u.length, function(t) {
				for (var n, r = 0; r < e; ++r) c[(n = u[r]).i] = n.x(t);
				return c.join("")
			})
		},
		at = function(t, e) {
			var n, r = typeof e;
			return null == e || "boolean" === r ? B(e) : ("number" === r ? h : "string" === r ? (n = T(e)) ? (e = n, Z) : it : e instanceof T ? Z : e instanceof Date ? et : K(e) ? J : Array.isArray(e) ? tt : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? nt : h)(t, e)
		},
		ct = function(t, e) {
			return t = +t, e = +e,
				function(n) {
					return Math.round(t * (1 - n) + e * n)
				}
		},
		ut = function(t) {
			return function() {
				return t
			}
		},
		lt = function(t) {
			return +t
		},
		st = [0, 1];

	function ft(t, e) {
		return (e -= t = +t) ? function(n) {
			return (n - t) / e
		} : ut(e)
	}

	function pt(t, e, n, r) {
		var o = t[0],
			i = t[1],
			a = e[0],
			c = e[1];
		return i < o ? (o = n(i, o), a = r(c, a)) : (o = n(o, i), a = r(a, c)),
			function(t) {
				return a(o(t))
			}
	}

	function ht(t, e, n, o) {
		var i = Math.min(t.length, e.length) - 1,
			a = new Array(i),
			c = new Array(i),
			u = -1;
		for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++u < i;) a[u] = n(t[u], t[u + 1]), c[u] = o(e[u], e[u + 1]);
		return function(e) {
			var n = Object(r.b)(t, e, 1, i) - 1;
			return c[n](a[n](e))
		}
	}

	function dt(t, e) {
		return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
	}

	function yt(t, e) {
		var n, r, o, i = st,
			u = st,
			l = at,
			s = !1;

		function f() {
			return n = Math.min(i.length, u.length) > 2 ? ht : pt, r = o = null, p
		}

		function p(e) {
			return (r || (r = n(i, u, s ? function(t) {
				return function(e, n) {
					var r = t(e = +e, n = +n);
					return function(t) {
						return t <= e ? 0 : t >= n ? 1 : r(t)
					}
				}
			}(t) : t, l)))(+e)
		}
		return p.invert = function(t) {
			return (o || (o = n(u, i, ft, s ? function(t) {
				return function(e, n) {
					var r = t(e = +e, n = +n);
					return function(t) {
						return t <= 0 ? e : t >= 1 ? n : r(t)
					}
				}
			}(e) : e)))(+t)
		}, p.domain = function(t) {
			return arguments.length ? (i = a.call(t, lt), f()) : i.slice()
		}, p.range = function(t) {
			return arguments.length ? (u = c.call(t), f()) : u.slice()
		}, p.rangeRound = function(t) {
			return u = c.call(t), l = ct, f()
		}, p.clamp = function(t) {
			return arguments.length ? (s = !!t, f()) : s
		}, p.interpolate = function(t) {
			return arguments.length ? (l = t, f()) : l
		}, f()
	}
	var vt = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

	function mt(t) {
		if (!(e = vt.exec(t))) throw new Error("invalid format: " + t);
		var e;
		return new bt({
			fill: e[1],
			align: e[2],
			sign: e[3],
			symbol: e[4],
			zero: e[5],
			width: e[6],
			comma: e[7],
			precision: e[8] && e[8].slice(1),
			trim: e[9],
			type: e[10]
		})
	}

	function bt(t) {
		this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
	}
	mt.prototype = bt.prototype, bt.prototype.toString = function() {
		return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
	};
	var _t, gt, xt, wt, Et = function(t, e) {
			if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
			var n, r = t.slice(0, n);
			return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
		},
		Ot = function(t) {
			return (t = Et(Math.abs(t))) ? t[1] : NaN
		},
		St = function(t, e) {
			var n = Et(t, e);
			if (!n) return t + "";
			var r = n[0],
				o = n[1];
			return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0")
		},
		Pt = {
			"%": function(t, e) {
				return (100 * t).toFixed(e)
			},
			b: function(t) {
				return Math.round(t).toString(2)
			},
			c: function(t) {
				return t + ""
			},
			d: function(t) {
				return Math.round(t).toString(10)
			},
			e: function(t, e) {
				return t.toExponential(e)
			},
			f: function(t, e) {
				return t.toFixed(e)
			},
			g: function(t, e) {
				return t.toPrecision(e)
			},
			o: function(t) {
				return Math.round(t).toString(8)
			},
			p: function(t, e) {
				return St(100 * t, e)
			},
			r: St,
			s: function(t, e) {
				var n = Et(t, e);
				if (!n) return t + "";
				var r = n[0],
					o = n[1],
					i = o - (_t = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
					a = r.length;
				return i === a ? r : i > a ? r + new Array(i - a + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + Et(t, Math.max(0, e + i - 1))[0]
			},
			X: function(t) {
				return Math.round(t).toString(16).toUpperCase()
			},
			x: function(t) {
				return Math.round(t).toString(16)
			}
		},
		kt = function(t) {
			return t
		},
		jt = Array.prototype.map,
		Mt = ["y", "z", "a", "f", "p", "n", "繕", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
	gt = function(t) {
		var e, n, r = void 0 === t.grouping || void 0 === t.thousands ? kt : (e = jt.call(t.grouping, Number), n = t.thousands + "", function(t, r) {
				for (var o = t.length, i = [], a = 0, c = e[0], u = 0; o > 0 && c > 0 && (u + c + 1 > r && (c = Math.max(1, r - u)), i.push(t.substring(o -= c, o + c)), !((u += c + 1) > r));) c = e[a = (a + 1) % e.length];
				return i.reverse().join(n)
			}),
			o = void 0 === t.currency ? "" : t.currency[0] + "",
			i = void 0 === t.currency ? "" : t.currency[1] + "",
			a = void 0 === t.decimal ? "." : t.decimal + "",
			c = void 0 === t.numerals ? kt : function(t) {
				return function(e) {
					return e.replace(/[0-9]/g, (function(e) {
						return t[+e]
					}))
				}
			}(jt.call(t.numerals, String)),
			u = void 0 === t.percent ? "%" : t.percent + "",
			l = void 0 === t.minus ? "-" : t.minus + "",
			s = void 0 === t.nan ? "NaN" : t.nan + "";

		function f(t) {
			var e = (t = mt(t)).fill,
				n = t.align,
				f = t.sign,
				p = t.symbol,
				h = t.zero,
				d = t.width,
				y = t.comma,
				v = t.precision,
				m = t.trim,
				b = t.type;
			"n" === b ? (y = !0, b = "g") : Pt[b] || (void 0 === v && (v = 12), m = !0, b = "g"), (h || "0" === e && "=" === n) && (h = !0, e = "0", n = "=");
			var _ = "$" === p ? o : "#" === p && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
				g = "$" === p ? i : /[%p]/.test(b) ? u : "",
				x = Pt[b],
				w = /[defgprs%]/.test(b);

			function E(t) {
				var o, i, u, p = _,
					E = g;
				if ("c" === b) E = x(t) + E, t = "";
				else {
					var O = (t = +t) < 0 || 1 / t < 0;
					if (t = isNaN(t) ? s : x(Math.abs(t), v), m && (t = function(t) {
							t: for (var e, n = t.length, r = 1, o = -1; r < n; ++r) switch (t[r]) {
								case ".":
									o = e = r;
									break;
								case "0":
									0 === o && (o = r), e = r;
									break;
								default:
									if (!+t[r]) break t;
									o > 0 && (o = 0)
							}
							return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
						}(t)), O && 0 == +t && "+" !== f && (O = !1), p = (O ? "(" === f ? f : l : "-" === f || "(" === f ? "" : f) + p, E = ("s" === b ? Mt[8 + _t / 3] : "") + E + (O && "(" === f ? ")" : ""), w)
						for (o = -1, i = t.length; ++o < i;)
							if (48 > (u = t.charCodeAt(o)) || u > 57) {
								E = (46 === u ? a + t.slice(o + 1) : t.slice(o)) + E, t = t.slice(0, o);
								break
							}
				}
				y && !h && (t = r(t, 1 / 0));
				var S = p.length + t.length + E.length,
					P = S < d ? new Array(d - S + 1).join(e) : "";
				switch (y && h && (t = r(P + t, P.length ? d - E.length : 1 / 0), P = ""), n) {
					case "<":
						t = p + t + E + P;
						break;
					case "=":
						t = p + P + t + E;
						break;
					case "^":
						t = P.slice(0, S = P.length >> 1) + p + t + E + P.slice(S);
						break;
					default:
						t = P + p + t + E
				}
				return c(t)
			}
			return v = void 0 === v ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v)), E.toString = function() {
				return t + ""
			}, E
		}
		return {
			format: f,
			formatPrefix: function(t, e) {
				var n = f(((t = mt(t)).type = "f", t)),
					r = 3 * Math.max(-8, Math.min(8, Math.floor(Ot(e) / 3))),
					o = Math.pow(10, -r),
					i = Mt[8 + r / 3];
				return function(t) {
					return n(o * t) + i
				}
			}
		}
	}({
		decimal: ".",
		thousands: ",",
		grouping: [3],
		currency: ["$", ""],
		minus: "-"
	}), xt = gt.format, wt = gt.formatPrefix;
	var Ct = function(t, e, n) {
		var o, i = t[0],
			a = t[t.length - 1],
			c = Object(r.g)(i, a, null == e ? 10 : e);
		switch ((n = mt(null == n ? ",f" : n)).type) {
			case "s":
				var u = Math.max(Math.abs(i), Math.abs(a));
				return null != n.precision || isNaN(o = function(t, e) {
					return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Ot(e) / 3))) - Ot(Math.abs(t)))
				}(c, u)) || (n.precision = o), wt(n, u);
			case "":
			case "e":
			case "g":
			case "p":
			case "r":
				null != n.precision || isNaN(o = function(t, e) {
					return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ot(e) - Ot(t)) + 1
				}(c, Math.max(Math.abs(i), Math.abs(a)))) || (n.precision = o - ("e" === n.type));
				break;
			case "f":
			case "%":
				null != n.precision || isNaN(o = function(t) {
					return Math.max(0, -Ot(Math.abs(t)))
				}(c)) || (n.precision = o - 2 * ("%" === n.type))
		}
		return xt(n)
	};

	function Nt(t) {
		var e = t.domain;
		return t.ticks = function(t) {
			var n = e();
			return Object(r.h)(n[0], n[n.length - 1], null == t ? 10 : t)
		}, t.tickFormat = function(t, n) {
			return Ct(e(), t, n)
		}, t.nice = function(n) {
			var o = e(),
				i = o.length - 1,
				a = null == n ? 10 : n,
				c = o[0],
				u = o[i],
				l = Object(r.g)(c, u, a);
			return l && (l = Object(r.g)(Math.floor(c / l) * l, Math.ceil(u / l) * l, a), o[0] = Math.floor(c / l) * l, o[i] = Math.ceil(u / l) * l, e(o)), t
		}, t
	}

	function Tt() {
		var t = yt(ft, h);
		return t.copy = function() {
			return dt(t, Tt())
		}, Nt(t)
	}
	var Rt = new Date,
		At = new Date;

	function Dt(t, e, n, r) {
		function o(e) {
			return t(e = 0 === arguments.length ? new Date : new Date(+e)), e
		}
		return o.floor = function(e) {
			return t(e = new Date(+e)), e
		}, o.ceil = function(n) {
			return t(n = new Date(n - 1)), e(n, 1), t(n), n
		}, o.round = function(t) {
			var e = o(t),
				n = o.ceil(t);
			return t - e < n - t ? e : n
		}, o.offset = function(t, n) {
			return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
		}, o.range = function(n, r, i) {
			var a, c = [];
			if (n = o.ceil(n), i = null == i ? 1 : Math.floor(i), !(n < r && i > 0)) return c;
			do {
				c.push(a = new Date(+n)), e(n, i), t(n)
			} while (a < n && n < r);
			return c
		}, o.filter = function(n) {
			return Dt((function(e) {
				if (e >= e)
					for (; t(e), !n(e);) e.setTime(e - 1)
			}), (function(t, r) {
				if (t >= t)
					if (r < 0)
						for (; ++r <= 0;)
							for (; e(t, -1), !n(t););
					else
						for (; --r >= 0;)
							for (; e(t, 1), !n(t););
			}))
		}, n && (o.count = function(e, r) {
			return Rt.setTime(+e), At.setTime(+r), t(Rt), t(At), Math.floor(n(Rt, At))
		}, o.every = function(t) {
			return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? o.filter(r ? function(e) {
				return r(e) % t == 0
			} : function(e) {
				return o.count(0, e) % t == 0
			}) : o : null
		}), o
	}
	var Lt = Dt((function(t) {
		t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
	}), (function(t, e) {
		t.setFullYear(t.getFullYear() + e)
	}), (function(t, e) {
		return e.getFullYear() - t.getFullYear()
	}), (function(t) {
		return t.getFullYear()
	}));
	Lt.every = function(t) {
		return isFinite(t = Math.floor(t)) && t > 0 ? Dt((function(e) {
			e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
		}), (function(e, n) {
			e.setFullYear(e.getFullYear() + n * t)
		})) : null
	};
	var It = Lt,
		qt = (Lt.range, Dt((function(t) {
			t.setDate(1), t.setHours(0, 0, 0, 0)
		}), (function(t, e) {
			t.setMonth(t.getMonth() + e)
		}), (function(t, e) {
			return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
		}), (function(t) {
			return t.getMonth()
		}))),
		Ut = (qt.range, 1e3),
		zt = 6e4,
		Ft = 36e5,
		Ht = 864e5,
		Yt = 6048e5;

	function Wt(t) {
		return Dt((function(e) {
			e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
		}), (function(t, e) {
			t.setDate(t.getDate() + 7 * e)
		}), (function(t, e) {
			return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * zt) / Yt
		}))
	}
	var Gt = Wt(0),
		Bt = Wt(1),
		Vt = Wt(2),
		$t = Wt(3),
		Qt = Wt(4),
		Zt = Wt(5),
		Xt = Wt(6),
		Jt = (Gt.range, Bt.range, Vt.range, $t.range, Qt.range, Zt.range, Xt.range, Dt((function(t) {
			t.setHours(0, 0, 0, 0)
		}), (function(t, e) {
			t.setDate(t.getDate() + e)
		}), (function(t, e) {
			return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * zt) / Ht
		}), (function(t) {
			return t.getDate() - 1
		}))),
		Kt = Jt,
		te = (Jt.range, Dt((function(t) {
			t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ut - t.getMinutes() * zt)
		}), (function(t, e) {
			t.setTime(+t + e * Ft)
		}), (function(t, e) {
			return (e - t) / Ft
		}), (function(t) {
			return t.getHours()
		}))),
		ee = (te.range, Dt((function(t) {
			t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ut)
		}), (function(t, e) {
			t.setTime(+t + e * zt)
		}), (function(t, e) {
			return (e - t) / zt
		}), (function(t) {
			return t.getMinutes()
		}))),
		ne = (ee.range, Dt((function(t) {
			t.setTime(t - t.getMilliseconds())
		}), (function(t, e) {
			t.setTime(+t + e * Ut)
		}), (function(t, e) {
			return (e - t) / Ut
		}), (function(t) {
			return t.getUTCSeconds()
		}))),
		re = (ne.range, Dt((function() {}), (function(t, e) {
			t.setTime(+t + e)
		}), (function(t, e) {
			return e - t
		})));
	re.every = function(t) {
		return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Dt((function(e) {
			e.setTime(Math.floor(e / t) * t)
		}), (function(e, n) {
			e.setTime(+e + n * t)
		}), (function(e, n) {
			return (n - e) / t
		})) : re : null
	};
	re.range;

	function oe(t) {
		return Dt((function(e) {
			e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
		}), (function(t, e) {
			t.setUTCDate(t.getUTCDate() + 7 * e)
		}), (function(t, e) {
			return (e - t) / Yt
		}))
	}
	var ie = oe(0),
		ae = oe(1),
		ce = oe(2),
		ue = oe(3),
		le = oe(4),
		se = oe(5),
		fe = oe(6),
		pe = (ie.range, ae.range, ce.range, ue.range, le.range, se.range, fe.range, Dt((function(t) {
			t.setUTCHours(0, 0, 0, 0)
		}), (function(t, e) {
			t.setUTCDate(t.getUTCDate() + e)
		}), (function(t, e) {
			return (e - t) / Ht
		}), (function(t) {
			return t.getUTCDate() - 1
		}))),
		he = pe,
		de = (pe.range, Dt((function(t) {
			t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
		}), (function(t, e) {
			t.setUTCFullYear(t.getUTCFullYear() + e)
		}), (function(t, e) {
			return e.getUTCFullYear() - t.getUTCFullYear()
		}), (function(t) {
			return t.getUTCFullYear()
		})));
	de.every = function(t) {
		return isFinite(t = Math.floor(t)) && t > 0 ? Dt((function(e) {
			e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
		}), (function(e, n) {
			e.setUTCFullYear(e.getUTCFullYear() + n * t)
		})) : null
	};
	var ye = de;
	de.range;

	function ve(t) {
		if (0 <= t.y && t.y < 100) {
			var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
			return e.setFullYear(t.y), e
		}
		return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
	}

	function me(t) {
		if (0 <= t.y && t.y < 100) {
			var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
			return e.setUTCFullYear(t.y), e
		}
		return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
	}

	function be(t, e, n) {
		return {
			y: t,
			m: e,
			d: n,
			H: 0,
			M: 0,
			S: 0,
			L: 0
		}
	}
	var _e, ge = {
			"-": "",
			_: " ",
			0: "0"
		},
		xe = /^\s*\d+/,
		we = /^%/,
		Ee = /[\\^$*+?|[\]().{}]/g;

	function Oe(t, e, n) {
		var r = t < 0 ? "-" : "",
			o = (r ? -t : t) + "",
			i = o.length;
		return r + (i < n ? new Array(n - i + 1).join(e) + o : o)
	}

	function Se(t) {
		return t.replace(Ee, "\\$&")
	}

	function Pe(t) {
		return new RegExp("^(?:" + t.map(Se).join("|") + ")", "i")
	}

	function ke(t) {
		for (var e = {}, n = -1, r = t.length; ++n < r;) e[t[n].toLowerCase()] = n;
		return e
	}

	function je(t, e, n) {
		var r = xe.exec(e.slice(n, n + 1));
		return r ? (t.w = +r[0], n + r[0].length) : -1
	}

	function Me(t, e, n) {
		var r = xe.exec(e.slice(n, n + 1));
		return r ? (t.u = +r[0], n + r[0].length) : -1
	}

	function Ce(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.U = +r[0], n + r[0].length) : -1
	}

	function Ne(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.V = +r[0], n + r[0].length) : -1
	}

	function Te(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.W = +r[0], n + r[0].length) : -1
	}

	function Re(t, e, n) {
		var r = xe.exec(e.slice(n, n + 4));
		return r ? (t.y = +r[0], n + r[0].length) : -1
	}

	function Ae(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1
	}

	function De(t, e, n) {
		var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
		return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
	}

	function Le(t, e, n) {
		var r = xe.exec(e.slice(n, n + 1));
		return r ? (t.q = 3 * r[0] - 3, n + r[0].length) : -1
	}

	function Ie(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.m = r[0] - 1, n + r[0].length) : -1
	}

	function qe(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.d = +r[0], n + r[0].length) : -1
	}

	function Ue(t, e, n) {
		var r = xe.exec(e.slice(n, n + 3));
		return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
	}

	function ze(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.H = +r[0], n + r[0].length) : -1
	}

	function Fe(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.M = +r[0], n + r[0].length) : -1
	}

	function He(t, e, n) {
		var r = xe.exec(e.slice(n, n + 2));
		return r ? (t.S = +r[0], n + r[0].length) : -1
	}

	function Ye(t, e, n) {
		var r = xe.exec(e.slice(n, n + 3));
		return r ? (t.L = +r[0], n + r[0].length) : -1
	}

	function We(t, e, n) {
		var r = xe.exec(e.slice(n, n + 6));
		return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1
	}

	function Ge(t, e, n) {
		var r = we.exec(e.slice(n, n + 1));
		return r ? n + r[0].length : -1
	}

	function Be(t, e, n) {
		var r = xe.exec(e.slice(n));
		return r ? (t.Q = +r[0], n + r[0].length) : -1
	}

	function Ve(t, e, n) {
		var r = xe.exec(e.slice(n));
		return r ? (t.s = +r[0], n + r[0].length) : -1
	}

	function $e(t, e) {
		return Oe(t.getDate(), e, 2)
	}

	function Qe(t, e) {
		return Oe(t.getHours(), e, 2)
	}

	function Ze(t, e) {
		return Oe(t.getHours() % 12 || 12, e, 2)
	}

	function Xe(t, e) {
		return Oe(1 + Kt.count(It(t), t), e, 3)
	}

	function Je(t, e) {
		return Oe(t.getMilliseconds(), e, 3)
	}

	function Ke(t, e) {
		return Je(t, e) + "000"
	}

	function tn(t, e) {
		return Oe(t.getMonth() + 1, e, 2)
	}

	function en(t, e) {
		return Oe(t.getMinutes(), e, 2)
	}

	function nn(t, e) {
		return Oe(t.getSeconds(), e, 2)
	}

	function rn(t) {
		var e = t.getDay();
		return 0 === e ? 7 : e
	}

	function on(t, e) {
		return Oe(Gt.count(It(t) - 1, t), e, 2)
	}

	function an(t, e) {
		var n = t.getDay();
		return t = n >= 4 || 0 === n ? Qt(t) : Qt.ceil(t), Oe(Qt.count(It(t), t) + (4 === It(t).getDay()), e, 2)
	}

	function cn(t) {
		return t.getDay()
	}

	function un(t, e) {
		return Oe(Bt.count(It(t) - 1, t), e, 2)
	}

	function ln(t, e) {
		return Oe(t.getFullYear() % 100, e, 2)
	}

	function sn(t, e) {
		return Oe(t.getFullYear() % 1e4, e, 4)
	}

	function fn(t) {
		var e = t.getTimezoneOffset();
		return (e > 0 ? "-" : (e *= -1, "+")) + Oe(e / 60 | 0, "0", 2) + Oe(e % 60, "0", 2)
	}

	function pn(t, e) {
		return Oe(t.getUTCDate(), e, 2)
	}

	function hn(t, e) {
		return Oe(t.getUTCHours(), e, 2)
	}

	function dn(t, e) {
		return Oe(t.getUTCHours() % 12 || 12, e, 2)
	}

	function yn(t, e) {
		return Oe(1 + he.count(ye(t), t), e, 3)
	}

	function vn(t, e) {
		return Oe(t.getUTCMilliseconds(), e, 3)
	}

	function mn(t, e) {
		return vn(t, e) + "000"
	}

	function bn(t, e) {
		return Oe(t.getUTCMonth() + 1, e, 2)
	}

	function _n(t, e) {
		return Oe(t.getUTCMinutes(), e, 2)
	}

	function gn(t, e) {
		return Oe(t.getUTCSeconds(), e, 2)
	}

	function xn(t) {
		var e = t.getUTCDay();
		return 0 === e ? 7 : e
	}

	function wn(t, e) {
		return Oe(ie.count(ye(t) - 1, t), e, 2)
	}

	function En(t, e) {
		var n = t.getUTCDay();
		return t = n >= 4 || 0 === n ? le(t) : le.ceil(t), Oe(le.count(ye(t), t) + (4 === ye(t).getUTCDay()), e, 2)
	}

	function On(t) {
		return t.getUTCDay()
	}

	function Sn(t, e) {
		return Oe(ae.count(ye(t) - 1, t), e, 2)
	}

	function Pn(t, e) {
		return Oe(t.getUTCFullYear() % 100, e, 2)
	}

	function kn(t, e) {
		return Oe(t.getUTCFullYear() % 1e4, e, 4)
	}

	function jn() {
		return "+0000"
	}

	function Mn() {
		return "%"
	}

	function Cn(t) {
		return +t
	}

	function Nn(t) {
		return Math.floor(+t / 1e3)
	}! function(t) {
		_e = function(t) {
			var e = t.dateTime,
				n = t.date,
				r = t.time,
				o = t.periods,
				i = t.days,
				a = t.shortDays,
				c = t.months,
				u = t.shortMonths,
				l = Pe(o),
				s = ke(o),
				f = Pe(i),
				p = ke(i),
				h = Pe(a),
				d = ke(a),
				y = Pe(c),
				v = ke(c),
				m = Pe(u),
				b = ke(u),
				_ = {
					a: function(t) {
						return a[t.getDay()]
					},
					A: function(t) {
						return i[t.getDay()]
					},
					b: function(t) {
						return u[t.getMonth()]
					},
					B: function(t) {
						return c[t.getMonth()]
					},
					c: null,
					d: $e,
					e: $e,
					f: Ke,
					H: Qe,
					I: Ze,
					j: Xe,
					L: Je,
					m: tn,
					M: en,
					p: function(t) {
						return o[+(t.getHours() >= 12)]
					},
					q: function(t) {
						return 1 + ~~(t.getMonth() / 3)
					},
					Q: Cn,
					s: Nn,
					S: nn,
					u: rn,
					U: on,
					V: an,
					w: cn,
					W: un,
					x: null,
					X: null,
					y: ln,
					Y: sn,
					Z: fn,
					"%": Mn
				},
				g = {
					a: function(t) {
						return a[t.getUTCDay()]
					},
					A: function(t) {
						return i[t.getUTCDay()]
					},
					b: function(t) {
						return u[t.getUTCMonth()]
					},
					B: function(t) {
						return c[t.getUTCMonth()]
					},
					c: null,
					d: pn,
					e: pn,
					f: mn,
					H: hn,
					I: dn,
					j: yn,
					L: vn,
					m: bn,
					M: _n,
					p: function(t) {
						return o[+(t.getUTCHours() >= 12)]
					},
					q: function(t) {
						return 1 + ~~(t.getUTCMonth() / 3)
					},
					Q: Cn,
					s: Nn,
					S: gn,
					u: xn,
					U: wn,
					V: En,
					w: On,
					W: Sn,
					x: null,
					X: null,
					y: Pn,
					Y: kn,
					Z: jn,
					"%": Mn
				},
				x = {
					a: function(t, e, n) {
						var r = h.exec(e.slice(n));
						return r ? (t.w = d[r[0].toLowerCase()], n + r[0].length) : -1
					},
					A: function(t, e, n) {
						var r = f.exec(e.slice(n));
						return r ? (t.w = p[r[0].toLowerCase()], n + r[0].length) : -1
					},
					b: function(t, e, n) {
						var r = m.exec(e.slice(n));
						return r ? (t.m = b[r[0].toLowerCase()], n + r[0].length) : -1
					},
					B: function(t, e, n) {
						var r = y.exec(e.slice(n));
						return r ? (t.m = v[r[0].toLowerCase()], n + r[0].length) : -1
					},
					c: function(t, n, r) {
						return O(t, e, n, r)
					},
					d: qe,
					e: qe,
					f: We,
					H: ze,
					I: ze,
					j: Ue,
					L: Ye,
					m: Ie,
					M: Fe,
					p: function(t, e, n) {
						var r = l.exec(e.slice(n));
						return r ? (t.p = s[r[0].toLowerCase()], n + r[0].length) : -1
					},
					q: Le,
					Q: Be,
					s: Ve,
					S: He,
					u: Me,
					U: Ce,
					V: Ne,
					w: je,
					W: Te,
					x: function(t, e, r) {
						return O(t, n, e, r)
					},
					X: function(t, e, n) {
						return O(t, r, e, n)
					},
					y: Ae,
					Y: Re,
					Z: De,
					"%": Ge
				};

			function w(t, e) {
				return function(n) {
					var r, o, i, a = [],
						c = -1,
						u = 0,
						l = t.length;
					for (n instanceof Date || (n = new Date(+n)); ++c < l;) 37 === t.charCodeAt(c) && (a.push(t.slice(u, c)), null != (o = ge[r = t.charAt(++c)]) ? r = t.charAt(++c) : o = "e" === r ? " " : "0", (i = e[r]) && (r = i(n, o)), a.push(r), u = c + 1);
					return a.push(t.slice(u, c)), a.join("")
				}
			}

			function E(t, e) {
				return function(n) {
					var r, o, i = be(1900, void 0, 1);
					if (O(i, t, n += "", 0) != n.length) return null;
					if ("Q" in i) return new Date(i.Q);
					if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
					if (e && !("Z" in i) && (i.Z = 0), "p" in i && (i.H = i.H % 12 + 12 * i.p), void 0 === i.m && (i.m = "q" in i ? i.q : 0), "V" in i) {
						if (i.V < 1 || i.V > 53) return null;
						"w" in i || (i.w = 1), "Z" in i ? (o = (r = me(be(i.y, 0, 1))).getUTCDay(), r = o > 4 || 0 === o ? ae.ceil(r) : ae(r), r = he.offset(r, 7 * (i.V - 1)), i.y = r.getUTCFullYear(), i.m = r.getUTCMonth(), i.d = r.getUTCDate() + (i.w + 6) % 7) : (o = (r = ve(be(i.y, 0, 1))).getDay(), r = o > 4 || 0 === o ? Bt.ceil(r) : Bt(r), r = Kt.offset(r, 7 * (i.V - 1)), i.y = r.getFullYear(), i.m = r.getMonth(), i.d = r.getDate() + (i.w + 6) % 7)
					} else("W" in i || "U" in i) && ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0), o = "Z" in i ? me(be(i.y, 0, 1)).getUTCDay() : ve(be(i.y, 0, 1)).getDay(), i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7);
					return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, me(i)) : ve(i)
				}
			}

			function O(t, e, n, r) {
				for (var o, i, a = 0, c = e.length, u = n.length; a < c;) {
					if (r >= u) return -1;
					if (37 === (o = e.charCodeAt(a++))) {
						if (o = e.charAt(a++), !(i = x[o in ge ? e.charAt(a++) : o]) || (r = i(t, n, r)) < 0) return -1
					} else if (o != n.charCodeAt(r++)) return -1
				}
				return r
			}
			return _.x = w(n, _), _.X = w(r, _), _.c = w(e, _), g.x = w(n, g), g.X = w(r, g), g.c = w(e, g), {
				format: function(t) {
					var e = w(t += "", _);
					return e.toString = function() {
						return t
					}, e
				},
				parse: function(t) {
					var e = E(t += "", !1);
					return e.toString = function() {
						return t
					}, e
				},
				utcFormat: function(t) {
					var e = w(t += "", g);
					return e.toString = function() {
						return t
					}, e
				},
				utcParse: function(t) {
					var e = E(t += "", !0);
					return e.toString = function() {
						return t
					}, e
				}
			}
		}(t), _e.format, _e.parse, _e.utcFormat, _e.utcParse
	}({
		dateTime: "%x, %X",
		date: "%-m/%-d/%Y",
		time: "%-I:%M:%S %p",
		periods: ["AM", "PM"],
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});
	var Tn = Dt((function(t) {
			t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
		}), (function(t, e) {
			t.setUTCMonth(t.getUTCMonth() + e)
		}), (function(t, e) {
			return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
		}), (function(t) {
			return t.getUTCMonth()
		})),
		Rn = (Tn.range, Dt((function(t) {
			t.setUTCMinutes(0, 0, 0)
		}), (function(t, e) {
			t.setTime(+t + e * Ft)
		}), (function(t, e) {
			return (e - t) / Ft
		}), (function(t) {
			return t.getUTCHours()
		}))),
		An = (Rn.range, Dt((function(t) {
			t.setUTCSeconds(0, 0)
		}), (function(t, e) {
			t.setTime(+t + e * zt)
		}), (function(t, e) {
			return (e - t) / zt
		}), (function(t) {
			return t.getUTCMinutes()
		}))),
		Dn = (An.range, function(t) {
			return t.match(/.{6}/g).map((function(t) {
				return "#" + t
			}))
		}),
		Ln = (Dn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Dn("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), Dn("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), Dn("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Math.PI / 180),
		In = 180 / Math.PI,
		qn = -.14861,
		Un = 1.78277,
		zn = -.29227,
		Fn = -.90649,
		Hn = 1.97294,
		Yn = Hn * Fn,
		Wn = Hn * Un,
		Gn = Un * zn - Fn * qn;

	function Bn(t) {
		if (t instanceof $n) return new $n(t.h, t.s, t.l, t.opacity);
		t instanceof I || (t = D(t));
		var e = t.r / 255,
			n = t.g / 255,
			r = t.b / 255,
			o = (Gn * r + Yn * e - Wn * n) / (Gn + Yn - Wn),
			i = r - o,
			a = (Hn * (n - o) - zn * i) / Fn,
			c = Math.sqrt(a * a + i * i) / (Hn * o * (1 - o)),
			u = c ? Math.atan2(a, i) * In - 120 : NaN;
		return new $n(u < 0 ? u + 360 : u, c, o, t.opacity)
	}

	function Vn(t, e, n, r) {
		return 1 === arguments.length ? Bn(t) : new $n(t, e, n, null == r ? 1 : r)
	}

	function $n(t, e, n, r) {
		this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
	}

	function Qn(t) {
		return function e(n) {
			function r(e, r) {
				var o = t((e = Vn(e)).h, (r = Vn(r)).h),
					i = Q(e.s, r.s),
					a = Q(e.l, r.l),
					c = Q(e.opacity, r.opacity);
				return function(t) {
					return e.h = o(t), e.s = i(t), e.l = a(Math.pow(t, n)), e.opacity = c(t), e + ""
				}
			}
			return n = +n, r.gamma = e, r
		}(1)
	}
	d($n, Vn, y(v, {
		brighter: function(t) {
			return t = null == t ? b : Math.pow(b, t), new $n(this.h, this.s, this.l * t, this.opacity)
		},
		darker: function(t) {
			return t = null == t ? m : Math.pow(m, t), new $n(this.h, this.s, this.l * t, this.opacity)
		},
		rgb: function() {
			var t = isNaN(this.h) ? 0 : (this.h + 120) * Ln,
				e = +this.l,
				n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
				r = Math.cos(t),
				o = Math.sin(t);
			return new I(255 * (e + n * (qn * r + Un * o)), 255 * (e + n * (zn * r + Fn * o)), 255 * (e + n * (Hn * r)), this.opacity)
		}
	}));
	Qn((function(t, e) {
		var n = e - t;
		return n ? V(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : B(isNaN(t) ? e : t)
	}));
	var Zn = Qn(Q);
	Zn(Vn(300, .5, 0), Vn(-240, .5, 1)), Zn(Vn(-100, .75, .35), Vn(80, 1.5, .8)), Zn(Vn(260, .75, .35), Vn(80, 1.5, .8)), Vn();

	function Xn(t) {
		var e = t.length;
		return function(n) {
			return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))]
		}
	}
	Xn(Dn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), Xn(Dn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Xn(Dn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Xn(Dn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return f
	}));
	n(5), n(10), n(11), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0);
	n(409);

	function o(t) {
		return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function a(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function c(t, e) {
		return (c = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function u(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = s(t);
			if (e) {
				var o = s(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return l(this, n)
		}
	}

	function l(t, e) {
		return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function s(t) {
		return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var f = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && c(t, e)
		}(s, t);
		var e, n, o, l = u(s);

		function s() {
			return i(this, s), l.apply(this, arguments)
		}
		return e = s, (n = [{
			key: "render",
			value: function(t) {
				var e = "loader";
				return t.transparent && (e += " loader--transparent"), r.c.createElement("div", {
					class: e,
					style: {
						display: t.visible ? "block" : "none"
					}
				}, r.c.createElement("div", {
					className: "loader__icon"
				}))
			}
		}]) && a(e.prototype, n), o && a(e, o), s
	}(r.a)
}, function(t, e, n) {
	var r = n(3),
		o = n(271);
	r({
		target: "Array",
		stat: !0,
		forced: !n(243)((function(t) {
			Array.from(t)
		}))
	}, {
		from: o
	})
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(244).trim;
	r({
		target: "String",
		proto: !0,
		forced: n(284)("trim")
	}, {
		trim: function() {
			return o(this)
		}
	})
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(67),
		i = [].reverse,
		a = [1, 2];
	r({
		target: "Array",
		proto: !0,
		forced: String(a) === String(a.reverse())
	}, {
		reverse: function() {
			return o(this) && (this.length = this.length), i.call(this)
		}
	})
}, function(t, e, n) {
	var r = n(176),
		o = n(116).concat("length", "prototype");
	e.f = Object.getOwnPropertyNames || function(t) {
		return r(t, o)
	}
}, function(t, e, n) {
	var r = n(33).f,
		o = n(28),
		i = n(14)("toStringTag");
	t.exports = function(t, e, n) {
		t && !o(t = n ? t : t.prototype, i) && r(t, i, {
			configurable: !0,
			value: e
		})
	}
}, function(t, e, n) {
	var r = n(201);
	t.exports = function(t, e, n) {
		"__proto__" == e && r ? r(t, e, {
			configurable: !0,
			enumerable: !0,
			value: n,
			writable: !0
		}) : t[e] = n
	}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(65),
		i = n(37),
		a = n(62),
		c = [].join,
		u = o != Object,
		l = a("join", ",");
	r({
		target: "Array",
		proto: !0,
		forced: u || !l
	}, {
		join: function(t) {
			return c.call(i(this), void 0 === t ? "," : t)
		}
	})
}, function(t, e, n) {
	var r = n(213);
	t.exports = function(t, e, n) {
		var o = null == t ? void 0 : r(t, e);
		return void 0 === o ? n : o
	}
}, function(t, e, n) {
	"use strict";
	var r = {}.propertyIsEnumerable,
		o = Object.getOwnPropertyDescriptor,
		i = o && !r.call({
			1: 2
		}, 1);
	e.f = i ? function(t) {
		var e = o(this, t);
		return !!e && e.enumerable
	} : r
}, function(t, e, n) {
	var r = n(20),
		o = n(38);
	t.exports = function(t, e) {
		try {
			o(r, t, e)
		} catch (n) {
			r[t] = e
		}
		return e
	}
}, function(t, e, n) {
	var r = n(75),
		o = n(172);
	(t.exports = function(t, e) {
		return o[t] || (o[t] = void 0 !== e ? e : {})
	})("versions", []).push({
		version: "3.6.5",
		mode: r ? "pure" : "global",
		copyright: "穢 2020 Denis Pushkarev (zloirock.ru)"
	})
}, function(t, e) {
	var n = 0,
		r = Math.random();
	t.exports = function(t) {
		return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
	}
}, function(t, e, n) {
	var r = n(37),
		o = n(43),
		i = n(177),
		a = function(t) {
			return function(e, n, a) {
				var c, u = r(e),
					l = o(u.length),
					s = i(a, l);
				if (t && n != n) {
					for (; l > s;)
						if ((c = u[s++]) != c) return !0
				} else
					for (; l > s; s++)
						if ((t || s in u) && u[s] === n) return t || s || 0;
				return !t && -1
			}
		};
	t.exports = {
		includes: a(!0),
		indexOf: a(!1)
	}
}, function(t, e) {
	t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e) {
	e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
	"use strict";
	n(31);
	var r = n(47),
		o = n(8),
		i = n(14),
		a = n(87),
		c = n(38),
		u = i("species"),
		l = !o((function() {
			var t = /./;
			return t.exec = function() {
				var t = [];
				return t.groups = {
					a: "7"
				}, t
			}, "7" !== "".replace(t, "$<a>")
		})),
		s = "$0" === "a".replace(/./, "$0"),
		f = i("replace"),
		p = !!/./ [f] && "" === /./ [f]("a", "$0"),
		h = !o((function() {
			var t = /(?:)/,
				e = t.exec;
			t.exec = function() {
				return e.apply(this, arguments)
			};
			var n = "ab".split(t);
			return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
		}));
	t.exports = function(t, e, n, f) {
		var d = i(t),
			y = !o((function() {
				var e = {};
				return e[d] = function() {
					return 7
				}, 7 != "" [t](e)
			})),
			v = y && !o((function() {
				var e = !1,
					n = /a/;
				return "split" === t && ((n = {}).constructor = {}, n.constructor[u] = function() {
					return n
				}, n.flags = "", n[d] = /./ [d]), n.exec = function() {
					return e = !0, null
				}, n[d](""), !e
			}));
		if (!y || !v || "replace" === t && (!l || !s || p) || "split" === t && !h) {
			var m = /./ [d],
				b = n(d, "" [t], (function(t, e, n, r, o) {
					return e.exec === a ? y && !o ? {
						done: !0,
						value: m.call(e, n, r)
					} : {
						done: !0,
						value: t.call(n, e, r)
					} : {
						done: !1
					}
				}), {
					REPLACE_KEEPS_$0: s,
					REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p
				}),
				_ = b[0],
				g = b[1];
			r(String.prototype, t, _), r(RegExp.prototype, d, 2 == e ? function(t, e) {
				return g.call(t, this, e)
			} : function(t) {
				return g.call(t, this)
			})
		}
		f && c(RegExp.prototype[d], "sham", !0)
	}
}, function(t, e, n) {
	var r = n(8);
	t.exports = !!Object.getOwnPropertySymbols && !r((function() {
		return !String(Symbol())
	}))
}, function(t, e, n) {
	var r = n(45),
		o = n(87);
	t.exports = function(t, e) {
		var n = t.exec;
		if ("function" == typeof n) {
			var i = n.call(t, e);
			if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
			return i
		}
		if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
		return o.call(t, e)
	}
}, function(t, e, n) {
	var r = n(50);
	t.exports = function(t, e, n) {
		if (r(t), void 0 === e) return t;
		switch (n) {
			case 0:
				return function() {
					return t.call(e)
				};
			case 1:
				return function(n) {
					return t.call(e, n)
				};
			case 2:
				return function(n, r) {
					return t.call(e, n, r)
				};
			case 3:
				return function(n, r, o) {
					return t.call(e, n, r, o)
				}
		}
		return function() {
			return t.apply(e, arguments)
		}
	}
}, function(t, e, n) {
	var r = {};
	r[n(14)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
}, function(t, e, n) {
	var r = n(28),
		o = n(30),
		i = n(85),
		a = n(192),
		c = i("IE_PROTO"),
		u = Object.prototype;
	t.exports = a ? Object.getPrototypeOf : function(t) {
		return t = o(t), r(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
	}
}, function(t, e, n) {
	var r = n(276),
		o = n(58),
		i = Object.prototype,
		a = i.hasOwnProperty,
		c = i.propertyIsEnumerable,
		u = r(function() {
			return arguments
		}()) ? r : function(t) {
			return o(t) && a.call(t, "callee") && !c.call(t, "callee")
		};
	t.exports = u
}, function(t, e, n) {
	(function(t) {
		var r = n(36),
			o = n(279),
			i = e && !e.nodeType && e,
			a = i && "object" == typeof t && t && !t.nodeType && t,
			c = a && a.exports === i ? r.Buffer : void 0,
			u = (c ? c.isBuffer : void 0) || o;
		t.exports = u
	}).call(this, n(126)(t))
}, function(t, e) {
	t.exports = function(t) {
		return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
			enumerable: !0,
			get: function() {
				return t.l
			}
		}), Object.defineProperty(t, "id", {
			enumerable: !0,
			get: function() {
				return t.i
			}
		}), t.webpackPolyfill = 1), t
	}
}, function(t, e) {
	var n = /^(?:0|[1-9]\d*)$/;
	t.exports = function(t, e) {
		return !!(e = null == e ? 9007199254740991 : e) && ("number" == typeof t || n.test(t)) && t > -1 && t % 1 == 0 && t < e
	}
}, function(t, e) {
	t.exports = function(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
	}
}, function(t, e) {
	t.exports = function(t) {
		return function(e) {
			return t(e)
		}
	}
}, function(t, e) {
	var n = Object.prototype;
	t.exports = function(t) {
		var e = t && t.constructor;
		return t === ("function" == typeof e && e.prototype || n)
	}
}, function(t, e, n) {
	var r, o;
	void 0 === (o = "function" == typeof(r = function() {
		var t = function(t, e) {
			this.items = t, this.settings = e || {
				diacritics: !0
			}
		};
		t.prototype.tokenize = function(t) {
			if (!(t = o(String(t || "").toLowerCase())) || !t.length) return [];
			var e, n, r, a, u = [],
				l = t.split(/ +/);
			for (e = 0, n = l.length; e < n; e++) {
				if (r = i(l[e]), this.settings.diacritics)
					for (a in c) c.hasOwnProperty(a) && (r = r.replace(new RegExp(a, "g"), c[a]));
				u.push({
					string: l[e],
					regex: new RegExp(r, "i")
				})
			}
			return u
		}, t.prototype.iterator = function(t, e) {
			(a(t) ? Array.prototype.forEach || function(t) {
				for (var e = 0, n = this.length; e < n; e++) t(this[e], e, this)
			} : function(t) {
				for (var e in this) this.hasOwnProperty(e) && t(this[e], e, this)
			}).apply(t, [e])
		}, t.prototype.getScoreFunction = function(t, e) {
			var n, o, i, a;
			t = this.prepareSearch(t, e), o = t.tokens, n = t.options.fields, i = o.length, a = t.options.nesting;
			var c, u = function(t, e) {
					var n, r;
					return t ? -1 === (r = (t = String(t || "")).search(e.regex)) ? 0 : (n = e.string.length / t.length, 0 === r && (n += .5), n) : 0
				},
				l = (c = n.length) ? 1 === c ? function(t, e) {
					return u(r(e, n[0], a), t)
				} : function(t, e) {
					for (var o = 0, i = 0; o < c; o++) i += u(r(e, n[o], a), t);
					return i / c
				} : function() {
					return 0
				};
			return i ? 1 === i ? function(t) {
				return l(o[0], t)
			} : "and" === t.options.conjunction ? function(t) {
				for (var e, n = 0, r = 0; n < i; n++) {
					if ((e = l(o[n], t)) <= 0) return 0;
					r += e
				}
				return r / i
			} : function(t) {
				for (var e = 0, n = 0; e < i; e++) n += l(o[e], t);
				return n / i
			} : function() {
				return 0
			}
		}, t.prototype.getSortFunction = function(t, n) {
			var o, i, a, c, u, l, s, f, p, h, d;
			if (d = !(t = (a = this).prepareSearch(t, n)).query && n.sort_empty || n.sort, p = function(t, e) {
					return "$score" === t ? e.score : r(a.items[e.id], t, n.nesting)
				}, u = [], d)
				for (o = 0, i = d.length; o < i; o++)(t.query || "$score" !== d[o].field) && u.push(d[o]);
			if (t.query) {
				for (h = !0, o = 0, i = u.length; o < i; o++)
					if ("$score" === u[o].field) {
						h = !1;
						break
					} h && u.unshift({
					field: "$score",
					direction: "desc"
				})
			} else
				for (o = 0, i = u.length; o < i; o++)
					if ("$score" === u[o].field) {
						u.splice(o, 1);
						break
					} for (f = [], o = 0, i = u.length; o < i; o++) f.push("desc" === u[o].direction ? -1 : 1);
			return (l = u.length) ? 1 === l ? (c = u[0].field, s = f[0], function(t, n) {
				return s * e(p(c, t), p(c, n))
			}) : function(t, n) {
				var r, o, i;
				for (r = 0; r < l; r++)
					if (i = u[r].field, o = f[r] * e(p(i, t), p(i, n))) return o;
				return 0
			} : null
		}, t.prototype.prepareSearch = function(t, e) {
			if ("object" == typeof t) return t;
			var r = (e = n({}, e)).fields,
				o = e.sort,
				i = e.sort_empty;
			return r && !a(r) && (e.fields = [r]), o && !a(o) && (e.sort = [o]), i && !a(i) && (e.sort_empty = [i]), {
				options: e,
				query: String(t || "").toLowerCase(),
				tokens: this.tokenize(t),
				total: 0,
				items: []
			}
		}, t.prototype.search = function(t, e) {
			var n, r, o, i, a = this;
			return r = this.prepareSearch(t, e), e = r.options, t = r.query, i = e.score || a.getScoreFunction(r), t.length ? a.iterator(a.items, (function(t, o) {
				n = i(t), (!1 === e.filter || n > 0) && r.items.push({
					score: n,
					id: o
				})
			})) : a.iterator(a.items, (function(t, e) {
				r.items.push({
					score: 1,
					id: e
				})
			})), (o = a.getSortFunction(r, e)) && r.items.sort(o), r.total = r.items.length, "number" == typeof e.limit && (r.items = r.items.slice(0, e.limit)), r
		};
		var e = function(t, e) {
				return "number" == typeof t && "number" == typeof e ? t > e ? 1 : t < e ? -1 : 0 : (t = u(String(t || ""))) > (e = u(String(e || ""))) ? 1 : e > t ? -1 : 0
			},
			n = function(t, e) {
				var n, r, o, i;
				for (n = 1, r = arguments.length; n < r; n++)
					if (i = arguments[n])
						for (o in i) i.hasOwnProperty(o) && (t[o] = i[o]);
				return t
			},
			r = function(t, e, n) {
				if (t && e) {
					if (!n) return t[e];
					for (var r = e.split("."); r.length && (t = t[r.shift()]););
					return t
				}
			},
			o = function(t) {
				return (t + "").replace(/^\s+|\s+$|/g, "")
			},
			i = function(t) {
				return (t + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
			},
			a = Array.isArray || "undefined" != typeof $ && $.isArray || function(t) {
				return "[object Array]" === Object.prototype.toString.call(t)
			},
			c = {
				a: "[a廎�廎����璽�橴𣝦算悼��廕�滿�瓣��𦟌�獺���瓊�疇�����]",
				b: "[b�錬帣�蔃鉊遲����哋",
				c: "[c��䤯��䊢槖跀𠵾�c��垳扭���龙銀數䄱�鐧�嚗��]",
				d: "[d�羣𥕥�𢈈�𦘒�靟�𤒹�𣉖�溆�𠯆�𣞢�墰�袵隶飇怞d怞�禇𦮂𪘁㵌乛𣉖筏廑�廑齢﹥�嚗歹�簸]",
				e: "[e�甙怔�並𢝵花�嘣�蕯𠫂譞磒鐧獐廕賦�𠹳�𧘲犖廕酸𦸒㦊屮孩剙𥐥亞怯県䟭�䙺��堘��廕擔瑪廙�廙�廙�廙�廙�廙�廎𦸇�鍅�𥕝�䤾�竢�踪���爾廕嫗�廙�掘幓�憧嚚��国𡡻装𩃥琶",
				f: "[f�韲𠯆�癀�篏",
				g: "[g汃�笞匹汁𧡘拐�个〢␆磮畓畓（",
				h: "[h臚艦藻藹廎兕萱廕𥕝�𥕝舅廎丟腺廎␉百勒傲騟",
				i: "[i�㮼倥䁱珀珀倥𦍑旁睷懚袴脊葬廎紕乖怯效紕秈後���龙�龙�𦘒�𢈈�𦘒葫廎倖䋻享依�廘頗�𦸒迺I覺阞嚗抬�处",
				j: "[j�譬警��𨑬𥱊槀淫",
				k: "[k�沢軎���廎唸萵ガキ廎聊董廎氮葭庥炾�苗",
				l: "[l��躅躂躉躁贏贍廎嗤虞廎詬號廎澄蜇廎筵蜓醴���尠�罱情漹〧宥矜�伬���憔嚚䀉",
				n: "[n��ゼソ�呌�齅晨�廜���廜�廜��𢈈�𦘒���会�ě��𥱊笮螩癀粥廑穲傀腆湛戮嚚𡙡嚡尜",
				o: "[o�㻊蜆蒽亂𥖄傢𠜎笛碈棗葿劤磵𩂋𡙡𧜏旅脊�𣉖�橥届腑螩﹥�墰�揁娚㮼妚腎竺客�沪㚵�]",
				p: "[p廜竢�鐧�𥕝�轁悵廘複化丟絞]",
				q: "[q��佲�𨈘螌𪘁镸�瞘�肷�]",
				r: "[r�珐躧顨㯝㻑蕰𦿟䤾�嘣�虲双齢鍮𣞢�𠹳�𥕞惜刓]",
				s: "[s�𠫍𧘲��飽廜Ｓ馳�𠸊�恢�囖𡟶𦻑ˍ㩒�琙簒�ì�È",
				t: "[t聾聽廜花鼠籠籟廜矜僮⑷��吆𧘲僭廜晨僥廜紜甚苗",
				u: "[u贗躑��刅誘廙永𧟌撳煳疑䔻嘔𢇃鉸𥕛珐剪掬玳倖紜唸誚廙巫空宣乳怵符傀𥛣𨰝⏛]",
				v: "[v廜澄厭廜擔嘀⑻�镸�嵴�麨控�尜",
				w: "[w廕�廕�廕�廕�霽霾廕�廕�廕�廕����处",
				x: "[x廕𣉖�溆�𢈈�歺䚡",
				y: "[y�揞賦輔廙傅債溫蜆蹄遘廙嫗�墰�𥕥輕廙腆䔃装備弼",
				z: "[z饕驕廕靟�𩂋褐嬝酷澄�𠯆�𣞢�竢�䍮腑跑"
			},
			u = function() {
				var t, e, n, r, o = "",
					i = {};
				for (n in c)
					if (c.hasOwnProperty(n))
						for (o += r = c[n].substring(2, c[n].length - 1), t = 0, e = r.length; t < e; t++) i[r.charAt(t)] = n;
				var a = new RegExp("[" + o + "]", "g");
				return function(t) {
					return t.replace(a, (function(t) {
						return i[t]
					})).toLowerCase()
				}
			}();
		return t
	}) ? r.call(e, n, e, t) : r) || (t.exports = o)
}, function(t, e, n) {
	var r = n(288),
		o = n(304),
		i = n(306),
		a = n(307),
		c = n(308);

	function u(t) {
		var e = -1,
			n = null == t ? 0 : t.length;
		for (this.clear(); ++e < n;) {
			var r = t[e];
			this.set(r[0], r[1])
		}
	}
	u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = c, t.exports = u
}, function(t, e, n) {
	var r = n(51)(n(36), "Map");
	t.exports = r
}, function(t, e) {
	t.exports = function(t, e) {
		for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
		return o
	}
}, function(t, e, n) {
	var r = n(92),
		o = n(323),
		i = n(324),
		a = n(325),
		c = n(326),
		u = n(327);

	function l(t) {
		var e = this.__data__ = new r(t);
		this.size = e.size
	}
	l.prototype.clear = o, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = c, l.prototype.set = u, t.exports = l
}, function(t, e, n) {
	var r = n(335),
		o = n(204),
		i = Object.prototype.propertyIsEnumerable,
		a = Object.getOwnPropertySymbols,
		c = a ? function(t) {
			return null == t ? [] : (t = Object(t), r(a(t), (function(e) {
				return i.call(t, e)
			})))
		} : o;
	t.exports = c
}, function(t, e) {
	t.exports = function(t, e) {
		for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
		return t
	}
}, function(t, e, n) {
	var r = n(210);
	t.exports = function(t) {
		var e = new t.constructor(t.byteLength);
		return new r(e).set(new r(t)), e
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = -1,
			n = Array(t.size);
		return t.forEach((function(t) {
			n[++e] = t
		})), n
	}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(115).indexOf,
		i = n(62),
		a = n(44),
		c = [].indexOf,
		u = !!c && 1 / [1].indexOf(1, -0) < 0,
		l = i("indexOf"),
		s = a("indexOf", {
			ACCESSORS: !0,
			1: 0
		});
	r({
		target: "Array",
		proto: !0,
		forced: u || !l || !s
	}, {
		indexOf: function(t) {
			return u ? c.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	})
}, function(t, e, n) {
	var r = n(32),
		o = n(72),
		i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		a = /^\w*$/;
	t.exports = function(t, e) {
		if (r(t)) return !1;
		var n = typeof t;
		return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || (a.test(t) || !i.test(t) || null != e && t in Object(e))
	}
}, function(t, e, n) {
	var r = n(42),
		o = n(386),
		i = n(259),
		a = Math.max,
		c = Math.min;
	t.exports = function(t, e, n) {
		var u, l, s, f, p, h, d = 0,
			y = !1,
			v = !1,
			m = !0;
		if ("function" != typeof t) throw new TypeError("Expected a function");

		function b(e) {
			var n = u,
				r = l;
			return u = l = void 0, d = e, f = t.apply(r, n)
		}

		function _(t) {
			return d = t, p = setTimeout(x, e), y ? b(t) : f
		}

		function g(t) {
			var n = t - h;
			return void 0 === h || n >= e || n < 0 || v && t - d >= s
		}

		function x() {
			var t = o();
			if (g(t)) return w(t);
			p = setTimeout(x, function(t) {
				var n = e - (t - h);
				return v ? c(n, s - (t - d)) : n
			}(t))
		}

		function w(t) {
			return p = void 0, m && u ? b(t) : (u = l = void 0, f)
		}

		function E() {
			var t = o(),
				n = g(t);
			if (u = arguments, l = this, h = t, n) {
				if (void 0 === p) return _(h);
				if (v) return p = setTimeout(x, e), b(h)
			}
			return void 0 === p && (p = setTimeout(x, e)), f
		}
		return e = i(e) || 0, r(n) && (y = !!n.leading, s = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : s, m = "trailing" in n ? !!n.trailing : m), E.cancel = function() {
			void 0 !== p && clearTimeout(p), d = 0, u = h = l = p = void 0
		}, E.flush = function() {
			return void 0 === p ? f : w(o())
		}, E
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return i
	}));
	n(34), n(22), n(71), n(25), n(31), n(46), n(76), n(104), n(35);

	function r(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}
	var o = n(131),
		i = function() {
			function t(e, n) {
				if (function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t), !e) return this;
				this.parseData(e, n), this.sifter = new o(this.collection)
			}
			var e, n, i;
			return e = t, (n = [{
				key: "parseData",
				value: function(t, e) {
					this.index = {}, this.collection = t.map((function(t) {
						var n = null;
						t.children && (n = t.children.reduce((function(t, n) {
							var r = e.get(n);
							return r ? (t.push({
								id: r.id,
								model: r.model
							}), t) : t
						}), []));
						var r = {
							id: t.id,
							model: t,
							children: n
						};
						return this.index[t.id] = r, r
					}), this)
				}
			}, {
				key: "get",
				value: function(t) {
					return this.index[t]
				}
			}, {
				key: "contains",
				value: function(t) {
					return !!this.get(t.id)
				}
			}, {
				key: "search",
				value: function(t) {
					if (!t || "" === t.trim()) throw new Error;
					var e = this.sifter.search(t, {
						fields: ["model.name", "model.alt_name"],
						conjunction: "and",
						nesting: !0
					});
					return {
						collection: e.items.map((function(t) {
							var n = this.collection[t.id];
							return {
								label: n.model.name.replace(e.tokens[0].regex, "<em>$&</em>"),
								node: n
							}
						}), this)
					}
				}
			}, {
				key: "filter",
				value: function(e, n) {
					var r = [],
						i = {};
					this.collection.forEach((function(t) {
						t.model[e] === n && (r.push(t), i[t.id] = t)
					}));
					var a = new t;
					return a.collection = r, a.index = i, a.sifter = new o(a.collection), a
				}
			}, {
				key: "toJSON",
				value: function() {
					return this.collection.map((function(t) {
						return t.model
					}))
				}
			}, {
				key: "forEach",
				value: function(t) {
					this.collection.forEach((function(e) {
						t(e)
					}))
				}
			}]) && r(e.prototype, n), i && r(e, i), t
		}()
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return i
	})), n.d(e, "b", (function() {
		return a
	}));
	n(31), n(222);
	var r = n(52),
		o = n(145);

	function i(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
			r = "";
		if (t.length > 1)
			for (var i = 0; i < t.length; i++) t[i].length > r.length && (r = t[i]);
		else r = t[0];
		for (var a = 0, c = r.length; c--;) o[r[c]] && (a += o[r[c]] * e);
		var u = a + n,
			l = t.length * e + n;
		return {
			width: u,
			height: l,
			hwidth: u / 2,
			hheight: l / 2
		}
	}
	var a = Object(r.b)((function(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
			r = t.split("\\n");
		return i(r, e, n)
	}))
}, function(t) {
	t.exports = JSON.parse('{"0":0.55,"1":0.35,"2":0.48,"3":0.47,"4":0.52,"5":0.49,"6":0.51,"7":0.46,"8":0.5,"9":0.51," ":0.21,".":0.21,",":0.21,"-":0.32,"(":0.33,")":0.33,"&":0.61,"a":0.47,"b":0.52,"c":0.46,"d":0.52,"e":0.47,"f":0.33,"g":0.52,"h":0.51,"i":0.23,"j":0.23,"k":0.5,"l":0.23,"m":0.74,"n":0.51,"o":0.49,"p":0.52,"q":0.52,"r":0.35,"s":0.44,"t":0.34,"u":0.5,"v":0.48,"w":0.67,"x":0.48,"y":0.49,"z":0.45,"A":0.63,"B":0.55,"C":0.6,"D":0.61,"E":0.52,"F":0.5,"G":0.62,"H":0.65,"I":0.25,"J":0.51,"K":0.59,"L":0.51,"M":0.75,"N":0.63,"O":0.64,"P":0.55,"Q":0.64,"R":0.56,"S":0.53,"T":0.58,"U":0.61,"V":0.61,"W":0.79,"X":0.59,"Y":0.59,"Z":0.55}')
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return a
	}));
	var r = "$";

	function o() {}

	function i(t, e) {
		var n = new o;
		if (t instanceof o) t.each((function(t, e) {
			n.set(e, t)
		}));
		else if (Array.isArray(t)) {
			var r, i = -1,
				a = t.length;
			if (null == e)
				for (; ++i < a;) n.set(i, t[i]);
			else
				for (; ++i < a;) n.set(e(r = t[i], i, t), r)
		} else if (t)
			for (var c in t) n.set(c, t[c]);
		return n
	}
	o.prototype = i.prototype = {
		constructor: o,
		has: function(t) {
			return r + t in this
		},
		get: function(t) {
			return this[r + t]
		},
		set: function(t, e) {
			return this[r + t] = e, this
		},
		remove: function(t) {
			var e = r + t;
			return e in this && delete this[e]
		},
		clear: function() {
			for (var t in this) t[0] === r && delete this[t]
		},
		keys: function() {
			var t = [];
			for (var e in this) e[0] === r && t.push(e.slice(1));
			return t
		},
		values: function() {
			var t = [];
			for (var e in this) e[0] === r && t.push(this[e]);
			return t
		},
		entries: function() {
			var t = [];
			for (var e in this) e[0] === r && t.push({
				key: e.slice(1),
				value: this[e]
			});
			return t
		},
		size: function() {
			var t = 0;
			for (var e in this) e[0] === r && ++t;
			return t
		},
		empty: function() {
			for (var t in this)
				if (t[0] === r) return !1;
			return !0
		},
		each: function(t) {
			for (var e in this) e[0] === r && t(this[e], e.slice(1), this)
		}
	};
	var a = i;

	function c() {}
	var u = a.prototype;

	function l(t, e) {
		var n = new c;
		if (t instanceof c) t.each((function(t) {
			n.add(t)
		}));
		else if (t) {
			var r = -1,
				o = t.length;
			if (null == e)
				for (; ++r < o;) n.add(t[r]);
			else
				for (; ++r < o;) n.add(e(t[r], r, t))
		}
		return n
	}
	c.prototype = l.prototype = {
		constructor: c,
		has: u.has,
		add: function(t) {
			return this[r + (t += "")] = t, this
		},
		remove: u.remove,
		clear: u.clear,
		values: u.keys,
		size: u.size,
		empty: u.empty,
		each: u.each
	}
}, , function(t, e, n) {
	var r = n(3),
		o = n(8),
		i = n(37),
		a = n(55).f,
		c = n(29),
		u = o((function() {
			a(1)
		}));
	r({
		target: "Object",
		stat: !0,
		forced: !c || u,
		sham: !c
	}, {
		getOwnPropertyDescriptor: function(t, e) {
			return a(i(t), e)
		}
	})
}, function(t, e, n) {
	var r = n(3),
		o = n(29),
		i = n(174),
		a = n(37),
		c = n(55),
		u = n(89);
	r({
		target: "Object",
		stat: !0,
		sham: !o
	}, {
		getOwnPropertyDescriptors: function(t) {
			for (var e, n, r = a(t), o = c.f, l = i(r), s = {}, f = 0; l.length > f;) void 0 !== (n = o(r, e = l[f++])) && u(s, e, n);
			return s
		}
	})
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return N
	})), n.d(e, "b", (function() {
		return L
	}));
	var r = Math.PI,
		o = 2 * r,
		i = 1e-6,
		a = o - i;

	function c() {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
	}

	function u() {
		return new c
	}
	c.prototype = u.prototype = {
		constructor: c,
		moveTo: function(t, e) {
			this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
		},
		closePath: function() {
			null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
		},
		lineTo: function(t, e) {
			this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
		},
		quadraticCurveTo: function(t, e, n, r) {
			this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r)
		},
		bezierCurveTo: function(t, e, n, r, o, i) {
			this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +i)
		},
		arcTo: function(t, e, n, o, a) {
			t = +t, e = +e, n = +n, o = +o, a = +a;
			var c = this._x1,
				u = this._y1,
				l = n - t,
				s = o - e,
				f = c - t,
				p = u - e,
				h = f * f + p * p;
			if (a < 0) throw new Error("negative radius: " + a);
			if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
			else if (h > i)
				if (Math.abs(p * l - s * f) > i && a) {
					var d = n - c,
						y = o - u,
						v = l * l + s * s,
						m = d * d + y * y,
						b = Math.sqrt(v),
						_ = Math.sqrt(h),
						g = a * Math.tan((r - Math.acos((v + h - m) / (2 * b * _))) / 2),
						x = g / _,
						w = g / b;
					Math.abs(x - 1) > i && (this._ += "L" + (t + x * f) + "," + (e + x * p)), this._ += "A" + a + "," + a + ",0,0," + +(p * d > f * y) + "," + (this._x1 = t + w * l) + "," + (this._y1 = e + w * s)
				} else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
			else;
		},
		arc: function(t, e, n, c, u, l) {
			t = +t, e = +e, l = !!l;
			var s = (n = +n) * Math.cos(c),
				f = n * Math.sin(c),
				p = t + s,
				h = e + f,
				d = 1 ^ l,
				y = l ? c - u : u - c;
			if (n < 0) throw new Error("negative radius: " + n);
			null === this._x1 ? this._ += "M" + p + "," + h : (Math.abs(this._x1 - p) > i || Math.abs(this._y1 - h) > i) && (this._ += "L" + p + "," + h), n && (y < 0 && (y = y % o + o), y > a ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (t - s) + "," + (e - f) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = p) + "," + (this._y1 = h) : y > i && (this._ += "A" + n + "," + n + ",0," + +(y >= r) + "," + d + "," + (this._x1 = t + n * Math.cos(u)) + "," + (this._y1 = e + n * Math.sin(u))))
		},
		rect: function(t, e, n, r) {
			this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z"
		},
		toString: function() {
			return this._
		}
	};
	var l = u,
		s = function(t) {
			return function() {
				return t
			}
		},
		f = Math.abs,
		p = Math.atan2,
		h = Math.cos,
		d = Math.max,
		y = Math.min,
		v = Math.sin,
		m = Math.sqrt,
		b = 1e-12,
		_ = Math.PI,
		g = _ / 2,
		x = 2 * _;

	function w(t) {
		return t > 1 ? 0 : t < -1 ? _ : Math.acos(t)
	}

	function E(t) {
		return t >= 1 ? g : t <= -1 ? -g : Math.asin(t)
	}

	function O(t) {
		return t.innerRadius
	}

	function S(t) {
		return t.outerRadius
	}

	function P(t) {
		return t.startAngle
	}

	function k(t) {
		return t.endAngle
	}

	function j(t) {
		return t && t.padAngle
	}

	function M(t, e, n, r, o, i, a, c) {
		var u = n - t,
			l = r - e,
			s = a - o,
			f = c - i,
			p = (s * (e - i) - f * (t - o)) / (f * u - s * l);
		return [t + p * u, e + p * l]
	}

	function C(t, e, n, r, o, i, a) {
		var c = t - n,
			u = e - r,
			l = (a ? i : -i) / m(c * c + u * u),
			s = l * u,
			f = -l * c,
			p = t + s,
			h = e + f,
			y = n + s,
			v = r + f,
			b = (p + y) / 2,
			_ = (h + v) / 2,
			g = y - p,
			x = v - h,
			w = g * g + x * x,
			E = o - i,
			O = p * v - y * h,
			S = (x < 0 ? -1 : 1) * m(d(0, E * E * w - O * O)),
			P = (O * x - g * S) / w,
			k = (-O * g - x * S) / w,
			j = (O * x + g * S) / w,
			M = (-O * g + x * S) / w,
			C = P - b,
			N = k - _,
			T = j - b,
			R = M - _;
		return C * C + N * N > T * T + R * R && (P = j, k = M), {
			cx: P,
			cy: k,
			x01: -s,
			y01: -f,
			x11: P * (o / E - 1),
			y11: k * (o / E - 1)
		}
	}
	var N = function() {
		var t = O,
			e = S,
			n = s(0),
			r = null,
			o = P,
			i = k,
			a = j,
			c = null;

		function u() {
			var u, s, d = +t.apply(this, arguments),
				O = +e.apply(this, arguments),
				S = o.apply(this, arguments) - g,
				P = i.apply(this, arguments) - g,
				k = f(P - S),
				j = P > S;
			if (c || (c = u = l()), O < d && (s = O, O = d, d = s), O > b)
				if (k > x - b) c.moveTo(O * h(S), O * v(S)), c.arc(0, 0, O, S, P, !j), d > b && (c.moveTo(d * h(P), d * v(P)), c.arc(0, 0, d, P, S, j));
				else {
					var N, T, R = S,
						A = P,
						D = S,
						L = P,
						I = k,
						q = k,
						U = a.apply(this, arguments) / 2,
						z = U > b && (r ? +r.apply(this, arguments) : m(d * d + O * O)),
						F = y(f(O - d) / 2, +n.apply(this, arguments)),
						H = F,
						Y = F;
					if (z > b) {
						var W = E(z / d * v(U)),
							G = E(z / O * v(U));
						(I -= 2 * W) > b ? (D += W *= j ? 1 : -1, L -= W) : (I = 0, D = L = (S + P) / 2), (q -= 2 * G) > b ? (R += G *= j ? 1 : -1, A -= G) : (q = 0, R = A = (S + P) / 2)
					}
					var B = O * h(R),
						V = O * v(R),
						$ = d * h(L),
						Q = d * v(L);
					if (F > b) {
						var Z = O * h(A),
							X = O * v(A),
							J = d * h(D),
							K = d * v(D);
						if (k < _) {
							var tt = I > b ? M(B, V, J, K, Z, X, $, Q) : [$, Q],
								et = B - tt[0],
								nt = V - tt[1],
								rt = Z - tt[0],
								ot = X - tt[1],
								it = 1 / v(w((et * rt + nt * ot) / (m(et * et + nt * nt) * m(rt * rt + ot * ot))) / 2),
								at = m(tt[0] * tt[0] + tt[1] * tt[1]);
							H = y(F, (d - at) / (it - 1)), Y = y(F, (O - at) / (it + 1))
						}
					}
					q > b ? Y > b ? (N = C(J, K, B, V, O, Y, j), T = C(Z, X, $, Q, O, Y, j), c.moveTo(N.cx + N.x01, N.cy + N.y01), Y < F ? c.arc(N.cx, N.cy, Y, p(N.y01, N.x01), p(T.y01, T.x01), !j) : (c.arc(N.cx, N.cy, Y, p(N.y01, N.x01), p(N.y11, N.x11), !j), c.arc(0, 0, O, p(N.cy + N.y11, N.cx + N.x11), p(T.cy + T.y11, T.cx + T.x11), !j), c.arc(T.cx, T.cy, Y, p(T.y11, T.x11), p(T.y01, T.x01), !j))) : (c.moveTo(B, V), c.arc(0, 0, O, R, A, !j)) : c.moveTo(B, V), d > b && I > b ? H > b ? (N = C($, Q, Z, X, d, -H, j), T = C(B, V, J, K, d, -H, j), c.lineTo(N.cx + N.x01, N.cy + N.y01), H < F ? c.arc(N.cx, N.cy, H, p(N.y01, N.x01), p(T.y01, T.x01), !j) : (c.arc(N.cx, N.cy, H, p(N.y01, N.x01), p(N.y11, N.x11), !j), c.arc(0, 0, d, p(N.cy + N.y11, N.cx + N.x11), p(T.cy + T.y11, T.cx + T.x11), j), c.arc(T.cx, T.cy, H, p(T.y11, T.x11), p(T.y01, T.x01), !j))) : c.arc(0, 0, d, L, D, j) : c.lineTo($, Q)
				}
			else c.moveTo(0, 0);
			if (c.closePath(), u) return c = null, u + "" || null
		}
		return u.centroid = function() {
			var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
				r = (+o.apply(this, arguments) + +i.apply(this, arguments)) / 2 - _ / 2;
			return [h(r) * n, v(r) * n]
		}, u.innerRadius = function(e) {
			return arguments.length ? (t = "function" == typeof e ? e : s(+e), u) : t
		}, u.outerRadius = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : s(+t), u) : e
		}, u.cornerRadius = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : s(+t), u) : n
		}, u.padRadius = function(t) {
			return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : s(+t), u) : r
		}, u.startAngle = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : s(+t), u) : o
		}, u.endAngle = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : s(+t), u) : i
		}, u.padAngle = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : s(+t), u) : a
		}, u.context = function(t) {
			return arguments.length ? (c = null == t ? null : t, u) : c
		}, u
	};

	function T(t) {
		this._context = t
	}
	T.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, e) {
			switch (t = +t, e = +e, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
					break;
				case 1:
					this._point = 2;
				default:
					this._context.lineTo(t, e)
			}
		}
	};
	var R = function(t) {
		return new T(t)
	};

	function A(t) {
		return t[0]
	}

	function D(t) {
		return t[1]
	}
	var L = function() {
		var t = A,
			e = D,
			n = s(!0),
			r = null,
			o = R,
			i = null;

		function a(a) {
			var c, u, s, f = a.length,
				p = !1;
			for (null == r && (i = o(s = l())), c = 0; c <= f; ++c) !(c < f && n(u = a[c], c, a)) === p && ((p = !p) ? i.lineStart() : i.lineEnd()), p && i.point(+t(u, c, a), +e(u, c, a));
			if (s) return i = null, s + "" || null
		}
		return a.x = function(e) {
			return arguments.length ? (t = "function" == typeof e ? e : s(+e), a) : t
		}, a.y = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : s(+t), a) : e
		}, a.defined = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : s(!!t), a) : n
		}, a.curve = function(t) {
			return arguments.length ? (o = t, null != r && (i = o(r)), a) : o
		}, a.context = function(t) {
			return arguments.length ? (null == t ? r = i = null : i = o(r = t), a) : r
		}, a
	};
	q(R);

	function I(t) {
		this._curve = t
	}

	function q(t) {
		function e(e) {
			return new I(t(e))
		}
		return e._curve = t, e
	}
	I.prototype = {
		areaStart: function() {
			this._curve.areaStart()
		},
		areaEnd: function() {
			this._curve.areaEnd()
		},
		lineStart: function() {
			this._curve.lineStart()
		},
		lineEnd: function() {
			this._curve.lineEnd()
		},
		point: function(t, e) {
			this._curve.point(e * Math.sin(t), e * -Math.cos(t))
		}
	};
	Math.sqrt(1 / 3);
	var U = Math.sin(_ / 10) / Math.sin(7 * _ / 10),
		z = (Math.sin(x / 10), Math.cos(x / 10), Math.sqrt(3), Math.sqrt(3), Math.sqrt(12), function() {});

	function F(t, e, n) {
		t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6)
	}

	function H(t) {
		this._context = t
	}
	H.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 3:
					F(this, this._x1, this._y1);
				case 2:
					this._context.lineTo(this._x1, this._y1)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, e) {
			switch (t = +t, e = +e, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
				default:
					F(this, t, e)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
		}
	};

	function Y(t) {
		this._context = t
	}
	Y.prototype = {
		areaStart: z,
		areaEnd: z,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x2, this._y2), this._context.closePath();
					break;
				case 2:
					this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
					break;
				case 3:
					this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
			}
		},
		point: function(t, e) {
			switch (t = +t, e = +e, this._point) {
				case 0:
					this._point = 1, this._x2 = t, this._y2 = e;
					break;
				case 1:
					this._point = 2, this._x3 = t, this._y3 = e;
					break;
				case 2:
					this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
					break;
				default:
					F(this, t, e)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
		}
	};

	function W(t) {
		this._context = t
	}
	W.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, e) {
			switch (t = +t, e = +e, this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3;
					var n = (this._x0 + 4 * this._x1 + t) / 6,
						r = (this._y0 + 4 * this._y1 + e) / 6;
					this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
					break;
				case 3:
					this._point = 4;
				default:
					F(this, t, e)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
		}
	};

	function G(t, e) {
		this._basis = new H(t), this._beta = e
	}
	G.prototype = {
		lineStart: function() {
			this._x = [], this._y = [], this._basis.lineStart()
		},
		lineEnd: function() {
			var t = this._x,
				e = this._y,
				n = t.length - 1;
			if (n > 0)
				for (var r, o = t[0], i = e[0], a = t[n] - o, c = e[n] - i, u = -1; ++u <= n;) r = u / n, this._basis.point(this._beta * t[u] + (1 - this._beta) * (o + r * a), this._beta * e[u] + (1 - this._beta) * (i + r * c));
			this._x = this._y = null, this._basis.lineEnd()
		},
		point: function(t, e) {
			this._x.push(+t), this._y.push(+e)
		}
	};
	(function t(e) {
		function n(t) {
			return 1 === e ? new H(t) : new G(t, e)
		}
		return n.beta = function(e) {
			return t(+e)
		}, n
	})(.85);

	function B(t, e, n) {
		t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2)
	}

	function V(t, e) {
		this._context = t, this._k = (1 - e) / 6
	}
	V.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x2, this._y2);
					break;
				case 3:
					B(this, this._x1, this._y1)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, e) {
			switch (t = +t, e = +e, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
					break;
				case 1:
					this._point = 2, this._x1 = t, this._y1 = e;
					break;
				case 2:
					this._point = 3;
				default:
					B(this, t, e)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
		}
	};
	(function t(e) {
		function n(t) {
			return new V(t, e)
		}
		return n.tension = function(e) {
			return t(+e)
		}, n
	})(0);

	function $(t, e) {
		this._context = t, this._k = (1 - e) / 6
	}
	$.prototype = {
		areaStart: z,
		areaEnd: z,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x3, this._y3), this._context.closePath();
					break;
				case 2:
					this._context.lineTo(this._x3, this._y3), this._context.closePath();
					break;
				case 3:
					this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
			}
		},
		point: function(t, e) {
			switch (t = +t, e = +e, this._point) {
				case 0:
					this._point = 1, this._x3 = t, this._y3 = e;
					break;
				case 1:
					this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
					break;
				case 2:
					this._point = 3, this._x5 = t, this._y5 = e;
					break;
				default:
					B(this, t, e)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
		}
	};
	(function t(e) {
		function n(t) {
			return new $(t, e)
		}
		return n.tension = function(e) {
			return t(+e)
		}, n
	})(0);

	function Q(t, e) {
		this._context = t, this._k = (1 - e) / 6
	}
	Q.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, e) {
			switch (t = +t, e = +e, this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
					break;
				case 3:
					this._point = 4;
				default:
					B(this, t, e)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
		}
	};
	(function t(e) {
		function n(t) {
			return new Q(t, e)
		}
		return n.tension = function(e) {
			return t(+e)
		}, n
	})(0);

	function Z(t, e, n) {
		var r = t._x1,
			o = t._y1,
			i = t._x2,
			a = t._y2;
		if (t._l01_a > b) {
			var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
				u = 3 * t._l01_a * (t._l01_a + t._l12_a);
			r = (r * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u, o = (o * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u
		}
		if (t._l23_a > b) {
			var l = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
				s = 3 * t._l23_a * (t._l23_a + t._l12_a);
			i = (i * l + t._x1 * t._l23_2a - e * t._l12_2a) / s, a = (a * l + t._y1 * t._l23_2a - n * t._l12_2a) / s
		}
		t._context.bezierCurveTo(r, o, i, a, t._x2, t._y2)
	}

	function X(t, e) {
		this._context = t, this._alpha = e
	}
	X.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x2, this._y2);
					break;
				case 3:
					this.point(this._x2, this._y2)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, e) {
			if (t = +t, e = +e, this._point) {
				var n = this._x2 - t,
					r = this._y2 - e;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3;
				default:
					Z(this, t, e)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
		}
	};
	(function t(e) {
		function n(t) {
			return e ? new X(t, e) : new V(t, 0)
		}
		return n.alpha = function(e) {
			return t(+e)
		}, n
	})(.5);

	function J(t, e) {
		this._context = t, this._alpha = e
	}
	J.prototype = {
		areaStart: z,
		areaEnd: z,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x3, this._y3), this._context.closePath();
					break;
				case 2:
					this._context.lineTo(this._x3, this._y3), this._context.closePath();
					break;
				case 3:
					this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
			}
		},
		point: function(t, e) {
			if (t = +t, e = +e, this._point) {
				var n = this._x2 - t,
					r = this._y2 - e;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1, this._x3 = t, this._y3 = e;
					break;
				case 1:
					this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
					break;
				case 2:
					this._point = 3, this._x5 = t, this._y5 = e;
					break;
				default:
					Z(this, t, e)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
		}
	};
	(function t(e) {
		function n(t) {
			return e ? new J(t, e) : new $(t, 0)
		}
		return n.alpha = function(e) {
			return t(+e)
		}, n
	})(.5);

	function K(t, e) {
		this._context = t, this._alpha = e
	}
	K.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, e) {
			if (t = +t, e = +e, this._point) {
				var n = this._x2 - t,
					r = this._y2 - e;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
					break;
				case 3:
					this._point = 4;
				default:
					Z(this, t, e)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
		}
	};
	(function t(e) {
		function n(t) {
			return e ? new K(t, e) : new Q(t, 0)
		}
		return n.alpha = function(e) {
			return t(+e)
		}, n
	})(.5);

	function tt(t) {
		this._context = t
	}
	tt.prototype = {
		areaStart: z,
		areaEnd: z,
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			this._point && this._context.closePath()
		},
		point: function(t, e) {
			t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
		}
	};

	function et(t) {
		return t < 0 ? -1 : 1
	}

	function nt(t, e, n) {
		var r = t._x1 - t._x0,
			o = e - t._x1,
			i = (t._y1 - t._y0) / (r || o < 0 && -0),
			a = (n - t._y1) / (o || r < 0 && -0),
			c = (i * o + a * r) / (r + o);
		return (et(i) + et(a)) * Math.min(Math.abs(i), Math.abs(a), .5 * Math.abs(c)) || 0
	}

	function rt(t, e) {
		var n = t._x1 - t._x0;
		return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e
	}

	function ot(t, e, n) {
		var r = t._x0,
			o = t._y0,
			i = t._x1,
			a = t._y1,
			c = (i - r) / 3;
		t._context.bezierCurveTo(r + c, o + c * e, i - c, a - c * n, i, a)
	}

	function it(t) {
		this._context = t
	}

	function at(t) {
		this._context = new ct(t)
	}

	function ct(t) {
		this._context = t
	}

	function ut(t) {
		this._context = t
	}

	function lt(t) {
		var e, n, r = t.length - 1,
			o = new Array(r),
			i = new Array(r),
			a = new Array(r);
		for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e) o[e] = 1, i[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1];
		for (o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e) n = o[e] / i[e - 1], i[e] -= n, a[e] -= n * a[e - 1];
		for (o[r - 1] = a[r - 1] / i[r - 1], e = r - 2; e >= 0; --e) o[e] = (a[e] - o[e + 1]) / i[e];
		for (i[r - 1] = (t[r] + o[r - 1]) / 2, e = 0; e < r - 1; ++e) i[e] = 2 * t[e + 1] - o[e + 1];
		return [o, i]
	}
	it.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x1, this._y1);
					break;
				case 3:
					ot(this, this._t0, rt(this, this._t0))
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, e) {
			var n = NaN;
			if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
				switch (this._point) {
					case 0:
						this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3, ot(this, rt(this, n = nt(this, t, e)), n);
						break;
					default:
						ot(this, this._t0, n = nt(this, t, e))
				}
				this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n
			}
		}
	}, (at.prototype = Object.create(it.prototype)).point = function(t, e) {
		it.prototype.point.call(this, e, t)
	}, ct.prototype = {
		moveTo: function(t, e) {
			this._context.moveTo(e, t)
		},
		closePath: function() {
			this._context.closePath()
		},
		lineTo: function(t, e) {
			this._context.lineTo(e, t)
		},
		bezierCurveTo: function(t, e, n, r, o, i) {
			this._context.bezierCurveTo(e, t, r, n, i, o)
		}
	}, ut.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x = [], this._y = []
		},
		lineEnd: function() {
			var t = this._x,
				e = this._y,
				n = t.length;
			if (n)
				if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === n) this._context.lineTo(t[1], e[1]);
				else
					for (var r = lt(t), o = lt(e), i = 0, a = 1; a < n; ++i, ++a) this._context.bezierCurveTo(r[0][i], o[0][i], r[1][i], o[1][i], t[a], e[a]);
			(this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
		},
		point: function(t, e) {
			this._x.push(+t), this._y.push(+e)
		}
	};

	function st(t, e) {
		this._context = t, this._t = e
	}
	st.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x = this._y = NaN, this._point = 0
		},
		lineEnd: function() {
			0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
		},
		point: function(t, e) {
			switch (t = +t, e = +e, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
					break;
				case 1:
					this._point = 2;
				default:
					if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
					else {
						var n = this._x * (1 - this._t) + t * this._t;
						this._context.lineTo(n, this._y), this._context.lineTo(n, e)
					}
			}
			this._x = t, this._y = e
		}
	};
	Array.prototype.slice
}, function(t, e, n) {
	var r = n(20),
		o = n(27),
		i = r.document,
		a = o(i) && o(i.createElement);
	t.exports = function(t) {
		return a ? i.createElement(t) : {}
	}
}, function(t, e, n) {
	var r = n(172),
		o = Function.toString;
	"function" != typeof r.inspectSource && (r.inspectSource = function(t) {
		return o.call(t)
	}), t.exports = r.inspectSource
}, function(t, e, n) {
	var r, o, i = n(20),
		a = n(166),
		c = i.process,
		u = c && c.versions,
		l = u && u.v8;
	l ? o = (r = l.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o
}, function(t, e, n) {
	var r = n(14),
		o = n(80),
		i = n(33),
		a = r("unscopables"),
		c = Array.prototype;
	null == c[a] && i.f(c, a, {
		configurable: !0,
		value: o(null)
	}), t.exports = function(t) {
		c[a][t] = !0
	}
}, function(t, e, n) {
	var r = n(23),
		o = n(273);
	t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
		var t, e = !1,
			n = {};
		try {
			(t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
		} catch (t) {}
		return function(n, i) {
			return r(n), o(i), e ? t.call(n, i) : n.__proto__ = i, n
		}
	}() : void 0)
}, function(t, e, n) {
	var r = n(132),
		o = n(309),
		i = n(310);

	function a(t) {
		var e = -1,
			n = null == t ? 0 : t.length;
		for (this.__data__ = new r; ++e < n;) this.add(t[e])
	}
	a.prototype.add = a.prototype.push = o, a.prototype.has = i, t.exports = a
}, function(t, e) {
	t.exports = function(t, e) {
		return t.has(e)
	}
}, function(t, e, n) {
	var r = n(83),
		o = n(315),
		i = n(317);
	t.exports = function(t, e) {
		return i(o(t, e, r), t + "")
	}
}, function(t, e, n) {
	var r = n(3),
		o = n(365);
	r({
		target: "Object",
		stat: !0,
		forced: Object.assign !== o
	}, {
		assign: o
	})
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(115).includes,
		i = n(154);
	r({
		target: "Array",
		proto: !0,
		forced: !n(44)("indexOf", {
			ACCESSORS: !0,
			1: 0
		})
	}, {
		includes: function(t) {
			return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), i("includes")
}, function(t, e, n) {
	var r = n(108),
		o = n(223)((function(t, e, n) {
			r(t, n, e)
		}));
	t.exports = o
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return o
	}));
	var r = n(228);

	function o(t) {
		return window.matchMedia("(min-width: ".concat(r.a[t], ")"))
	}
}, function(t, e, n) {
	"use strict";
	e.a = function(t, e) {
		return e = e || {}, new Promise((function(n, r) {
			var o = new XMLHttpRequest,
				i = [],
				a = [],
				c = {},
				u = function() {
					return {
						ok: 2 == (o.status / 100 | 0),
						statusText: o.statusText,
						status: o.status,
						url: o.responseURL,
						text: function() {
							return Promise.resolve(o.responseText)
						},
						json: function() {
							return Promise.resolve(JSON.parse(o.responseText))
						},
						blob: function() {
							return Promise.resolve(new Blob([o.response]))
						},
						clone: u,
						headers: {
							keys: function() {
								return i
							},
							entries: function() {
								return a
							},
							get: function(t) {
								return c[t.toLowerCase()]
							},
							has: function(t) {
								return t.toLowerCase() in c
							}
						}
					}
				};
			for (var l in o.open(e.method || "get", t, !0), o.onload = function() {
					o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, n) {
						i.push(e = e.toLowerCase()), a.push([e, n]), c[e] = c[e] ? c[e] + "," + n : n
					})), n(u())
				}, o.onerror = r, o.withCredentials = "include" == e.credentials, e.headers) o.setRequestHeader(l, e.headers[l]);
			o.send(e.body || null)
		}))
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return i
	})), n.d(e, "b", (function() {
		return a
	}));
	var r = n(0),
		o = n(15);
	n(473);

	function i(t) {
		var e = t.layout,
			n = t.children;
		return r.c.createElement("div", {
			className: Object(o.a)("filters", e && "filters--".concat(e))
		}, n)
	}

	function a(t) {
		var e = t.children;
		return r.c.createElement("div", {
			className: "filters-item"
		}, e)
	}
}, , function(t, e, n) {
	var r = n(56);
	t.exports = r("navigator", "userAgent") || ""
}, function(t, e, n) {
	var r = n(360),
		o = n(363)(r);
	t.exports = o
}, function(t, e, n) {
	"use strict";
	var r = n(266),
		o = n(267),
		i = n(184);
	t.exports = {
		formats: i,
		parse: o,
		stringify: r
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return i
	}));
	var r = n(0),
		o = n(15);
	n(441);

	function i(t) {
		return r.c.createElement("div", {
			class: Object(o.a)("tablist", t.kind && "tablist--".concat(t.kind))
		}, r.c.createElement("div", {
			className: "tablist__viewport"
		}, r.c.createElement("ul", {
			className: "tablist__list",
			role: "tablist"
		}, t.children)))
	}
}, function(t, e) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || new Function("return this")()
	} catch (t) {
		"object" == typeof window && (n = window)
	}
	t.exports = n
}, function(t, e, n) {
	var r = n(29),
		o = n(8),
		i = n(151);
	t.exports = !r && !o((function() {
		return 7 != Object.defineProperty(i("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	}))
}, function(t, e, n) {
	var r = n(20),
		o = n(112),
		i = "__core-js_shared__",
		a = r[i] || o(i, {});
	t.exports = a
}, function(t, e, n) {
	var r = n(28),
		o = n(174),
		i = n(55),
		a = n(33);
	t.exports = function(t, e) {
		for (var n = o(e), c = a.f, u = i.f, l = 0; l < n.length; l++) {
			var s = n[l];
			r(t, s) || c(t, s, u(e, s))
		}
	}
}, function(t, e, n) {
	var r = n(56),
		o = n(106),
		i = n(117),
		a = n(23);
	t.exports = r("Reflect", "ownKeys") || function(t) {
		var e = o.f(a(t)),
			n = i.f;
		return n ? e.concat(n(t)) : e
	}
}, function(t, e, n) {
	var r = n(20);
	t.exports = r
}, function(t, e, n) {
	var r = n(28),
		o = n(37),
		i = n(115).indexOf,
		a = n(86);
	t.exports = function(t, e) {
		var n, c = o(t),
			u = 0,
			l = [];
		for (n in c) !r(a, n) && r(c, n) && l.push(n);
		for (; e.length > u;) r(c, n = e[u++]) && (~i(l, n) || l.push(n));
		return l
	}
}, function(t, e, n) {
	var r = n(61),
		o = Math.max,
		i = Math.min;
	t.exports = function(t, e) {
		var n = r(t);
		return n < 0 ? o(n + e, 0) : i(n, e)
	}
}, function(t, e, n) {
	var r = n(8),
		o = /#|\.prototype\./,
		i = function(t, e) {
			var n = c[a(t)];
			return n == l || n != u && ("function" == typeof e ? r(e) : !!e)
		},
		a = i.normalize = function(t) {
			return String(t).replace(o, ".").toLowerCase()
		},
		c = i.data = {},
		u = i.NATIVE = "N",
		l = i.POLYFILL = "P";
	t.exports = i
}, function(t, e, n) {
	"use strict";
	var r = n(23);
	t.exports = function() {
		var t = r(this),
			e = "";
		return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
	}
}, function(t, e, n) {
	var r = n(119);
	t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(t, e, n) {
	"use strict";
	var r = n(182).charAt;
	t.exports = function(t, e, n) {
		return e + (n ? r(t, e).length : 1)
	}
}, function(t, e, n) {
	var r = n(61),
		o = n(41),
		i = function(t) {
			return function(e, n) {
				var i, a, c = String(o(e)),
					u = r(n),
					l = c.length;
				return u < 0 || u >= l ? t ? "" : void 0 : (i = c.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === l || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? c.charAt(u) : i : t ? c.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536
			}
		};
	t.exports = {
		codeAt: i(!1),
		charAt: i(!0)
	}
}, function(t, e, n) {
	"use strict";
	var r = Object.prototype.hasOwnProperty,
		o = function() {
			for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
			return t
		}();
	e.arrayToObject = function(t, e) {
		for (var n = e && e.plainObjects ? Object.create(null) : {}, r = 0; r < t.length; ++r) void 0 !== t[r] && (n[r] = t[r]);
		return n
	}, e.merge = function(t, n, o) {
		if (!n) return t;
		if ("object" != typeof n) {
			if (Array.isArray(t)) t.push(n);
			else {
				if ("object" != typeof t) return [t, n];
				(o.plainObjects || o.allowPrototypes || !r.call(Object.prototype, n)) && (t[n] = !0)
			}
			return t
		}
		if ("object" != typeof t) return [t].concat(n);
		var i = t;
		return Array.isArray(t) && !Array.isArray(n) && (i = e.arrayToObject(t, o)), Array.isArray(t) && Array.isArray(n) ? (n.forEach((function(n, i) {
			r.call(t, i) ? t[i] && "object" == typeof t[i] ? t[i] = e.merge(t[i], n, o) : t.push(n) : t[i] = n
		})), t) : Object.keys(n).reduce((function(t, r) {
			var i = n[r];
			return Object.prototype.hasOwnProperty.call(t, r) ? t[r] = e.merge(t[r], i, o) : t[r] = i, t
		}), i)
	}, e.decode = function(t) {
		try {
			return decodeURIComponent(t.replace(/\+/g, " "))
		} catch (e) {
			return t
		}
	}, e.encode = function(t) {
		if (0 === t.length) return t;
		for (var e = "string" == typeof t ? t : String(t), n = "", r = 0; r < e.length; ++r) {
			var i = e.charCodeAt(r);
			45 === i || 46 === i || 95 === i || 126 === i || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 ? n += e.charAt(r) : i < 128 ? n += o[i] : i < 2048 ? n += o[192 | i >> 6] + o[128 | 63 & i] : i < 55296 || i >= 57344 ? n += o[224 | i >> 12] + o[128 | i >> 6 & 63] + o[128 | 63 & i] : (r += 1, i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(r)), n += o[240 | i >> 18] + o[128 | i >> 12 & 63] + o[128 | i >> 6 & 63] + o[128 | 63 & i])
		}
		return n
	}, e.compact = function(t, n) {
		if ("object" != typeof t || null === t) return t;
		var r = n || [],
			o = r.indexOf(t);
		if (-1 !== o) return r[o];
		if (r.push(t), Array.isArray(t)) {
			for (var i = [], a = 0; a < t.length; ++a) t[a] && "object" == typeof t[a] ? i.push(e.compact(t[a], r)) : void 0 !== t[a] && i.push(t[a]);
			return i
		}
		return Object.keys(t).forEach((function(n) {
			t[n] = e.compact(t[n], r)
		})), t
	}, e.isRegExp = function(t) {
		return "[object RegExp]" === Object.prototype.toString.call(t)
	}, e.isBuffer = function(t) {
		return null != t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
	}
}, function(t, e, n) {
	"use strict";
	var r = String.prototype.replace,
		o = /%20/g;
	t.exports = {
		default: "RFC3986",
		formatters: {
			RFC1738: function(t) {
				return r.call(t, o, "+")
			},
			RFC3986: function(t) {
				return t
			}
		},
		RFC1738: "RFC1738",
		RFC3986: "RFC3986"
	}
}, function(t, e, n) {
	var r = n(14);
	e.f = r
}, function(t, e, n) {
	var r = n(175),
		o = n(28),
		i = n(185),
		a = n(33).f;
	t.exports = function(t) {
		var e = r.Symbol || (r.Symbol = {});
		o(e, t) || a(e, t, {
			value: i.f(t)
		})
	}
}, function(t, e, n) {
	var r = n(27),
		o = n(67),
		i = n(14)("species");
	t.exports = function(t, e) {
		var n;
		return o(t) && ("function" != typeof(n = t.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(68).forEach,
		o = n(62),
		i = n(44),
		a = o("forEach"),
		c = i("forEach");
	t.exports = a && c ? [].forEach : function(t) {
		return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
	}
}, function(t, e, n) {
	var r = n(122),
		o = n(45),
		i = n(14)("toStringTag"),
		a = "Arguments" == o(function() {
			return arguments
		}());
	t.exports = r ? o : function(t) {
		var e, n, r;
		return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
			try {
				return t[e]
			} catch (t) {}
		}(e = Object(t), i)) ? n : a ? o(e) : "Object" == (r = o(e)) && "function" == typeof e.callee ? "Arguments" : r
	}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(272),
		i = n(123),
		a = n(155),
		c = n(107),
		u = n(38),
		l = n(47),
		s = n(14),
		f = n(75),
		p = n(69),
		h = n(191),
		d = h.IteratorPrototype,
		y = h.BUGGY_SAFARI_ITERATORS,
		v = s("iterator"),
		m = "keys",
		b = "values",
		_ = "entries",
		g = function() {
			return this
		};
	t.exports = function(t, e, n, s, h, x, w) {
		o(n, e, s);
		var E, O, S, P = function(t) {
				if (t === h && N) return N;
				if (!y && t in M) return M[t];
				switch (t) {
					case m:
					case b:
					case _:
						return function() {
							return new n(this, t)
						}
				}
				return function() {
					return new n(this)
				}
			},
			k = e + " Iterator",
			j = !1,
			M = t.prototype,
			C = M[v] || M["@@iterator"] || h && M[h],
			N = !y && C || P(h),
			T = "Array" == e && M.entries || C;
		if (T && (E = i(T.call(new t)), d !== Object.prototype && E.next && (f || i(E) === d || (a ? a(E, d) : "function" != typeof E[v] && u(E, v, g)), c(E, k, !0, !0), f && (p[k] = g))), h == b && C && C.name !== b && (j = !0, N = function() {
				return C.call(this)
			}), f && !w || M[v] === N || u(M, v, N), p[e] = N, h)
			if (O = {
					values: P(b),
					keys: x ? N : P(m),
					entries: P(_)
				}, w)
				for (S in O)(y || j || !(S in M)) && l(M, S, O[S]);
			else r({
				target: e,
				proto: !0,
				forced: y || j
			}, O);
		return O
	}
}, function(t, e, n) {
	"use strict";
	var r, o, i, a = n(123),
		c = n(38),
		u = n(28),
		l = n(14),
		s = n(75),
		f = l("iterator"),
		p = !1;
	[].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : p = !0), null == r && (r = {}), s || u(r, f) || c(r, f, (function() {
		return this
	})), t.exports = {
		IteratorPrototype: r,
		BUGGY_SAFARI_ITERATORS: p
	}
}, function(t, e, n) {
	var r = n(8);
	t.exports = !r((function() {
		function t() {}
		return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
	}))
}, function(t, e) {
	t.exports = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0
	}
}, function(t, e, n) {
	var r = n(275),
		o = n(124),
		i = n(32),
		a = n(125),
		c = n(127),
		u = n(196),
		l = Object.prototype.hasOwnProperty;
	t.exports = function(t, e) {
		var n = i(t),
			s = !n && o(t),
			f = !n && !s && a(t),
			p = !n && !s && !f && u(t),
			h = n || s || f || p,
			d = h ? r(t.length, String) : [],
			y = d.length;
		for (var v in t) !e && !l.call(t, v) || h && ("length" == v || f && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || c(v, y)) || d.push(v);
		return d
	}
}, function(t, e, n) {
	(function(e) {
		var n = "object" == typeof e && e && e.Object === Object && e;
		t.exports = n
	}).call(this, n(170))
}, function(t, e, n) {
	var r = n(280),
		o = n(129),
		i = n(281),
		a = i && i.isTypedArray,
		c = a ? o(a) : r;
	t.exports = c
}, function(t, e) {
	t.exports = function(t, e) {
		return function(n) {
			return t(e(n))
		}
	}
}, function(t, e, n) {
	var r = n(70),
		o = n(42);
	t.exports = function(t) {
		if (!o(t)) return !1;
		var e = r(t);
		return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
	}
}, function(t, e) {
	t.exports = "\t\n\v\f\r ����������������������争�𪙛�胼�麄��\u2028\u2029\ufeff"
}, function(t, e) {
	var n = Function.prototype.toString;
	t.exports = function(t) {
		if (null != t) {
			try {
				return n.call(t)
			} catch (t) {}
			try {
				return t + ""
			} catch (t) {}
		}
		return ""
	}
}, function(t, e, n) {
	var r = n(51),
		o = function() {
			try {
				var t = r(Object, "defineProperty");
				return t({}, "", {}), t
			} catch (t) {}
		}();
	t.exports = o
}, function(t, e, n) {
	var r = n(108),
		o = n(94),
		i = Object.prototype.hasOwnProperty;
	t.exports = function(t, e, n) {
		var a = t[e];
		i.call(t, e) && o(a, n) && (void 0 !== n || e in t) || r(t, e, n)
	}
}, function(t, e, n) {
	var r = n(194),
		o = n(330),
		i = n(59);
	t.exports = function(t) {
		return i(t) ? r(t, !0) : o(t)
	}
}, function(t, e) {
	t.exports = function() {
		return []
	}
}, function(t, e, n) {
	var r = n(137),
		o = n(206),
		i = n(136),
		a = n(204),
		c = Object.getOwnPropertySymbols ? function(t) {
			for (var e = []; t;) r(e, i(t)), t = o(t);
			return e
		} : a;
	t.exports = c
}, function(t, e, n) {
	var r = n(197)(Object.getPrototypeOf, Object);
	t.exports = r
}, function(t, e, n) {
	var r = n(208),
		o = n(136),
		i = n(60);
	t.exports = function(t) {
		return r(t, i, o)
	}
}, function(t, e, n) {
	var r = n(137),
		o = n(32);
	t.exports = function(t, e, n) {
		var i = e(t);
		return o(t) ? i : r(i, n(t))
	}
}, function(t, e, n) {
	var r = n(338),
		o = n(133),
		i = n(339),
		a = n(248),
		c = n(340),
		u = n(70),
		l = n(200),
		s = "[object Map]",
		f = "[object Promise]",
		p = "[object Set]",
		h = "[object WeakMap]",
		d = "[object DataView]",
		y = l(r),
		v = l(o),
		m = l(i),
		b = l(a),
		_ = l(c),
		g = u;
	(r && g(new r(new ArrayBuffer(1))) != d || o && g(new o) != s || i && g(i.resolve()) != f || a && g(new a) != p || c && g(new c) != h) && (g = function(t) {
		var e = u(t),
			n = "[object Object]" == e ? t.constructor : void 0,
			r = n ? l(n) : "";
		if (r) switch (r) {
			case y:
				return d;
			case v:
				return s;
			case m:
				return f;
			case b:
				return p;
			case _:
				return h
		}
		return e
	}), t.exports = g
}, function(t, e, n) {
	var r = n(36).Uint8Array;
	t.exports = r
}, function(t, e) {
	t.exports = function(t, e, n, r) {
		var o = -1,
			i = null == t ? 0 : t.length;
		for (r && i && (n = t[++o]); ++o < i;) n = e(n, t[o], o, t);
		return n
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = -1,
			n = Array(t.size);
		return t.forEach((function(t, r) {
			n[++e] = [r, t]
		})), n
	}
}, function(t, e, n) {
	var r = n(214),
		o = n(98);
	t.exports = function(t, e) {
		for (var n = 0, i = (e = r(e, t)).length; null != t && n < i;) t = t[o(e[n++])];
		return n && n == i ? t : void 0
	}
}, function(t, e, n) {
	var r = n(32),
		o = n(141),
		i = n(354),
		a = n(357);
	t.exports = function(t, e) {
		return r(t) ? t : o(t, e) ? [t] : i(a(t))
	}
}, function(t, e, n) {
	var r = n(368),
		o = n(375),
		i = n(83),
		a = n(32),
		c = n(379);
	t.exports = function(t) {
		return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? a(t) ? o(t[0], t[1]) : r(t) : c(t)
	}
}, function(t, e, n) {
	var r = n(370),
		o = n(58);
	t.exports = function t(e, n, i, a, c) {
		return e === n || (null == e || null == n || !o(e) && !o(n) ? e != e && n != n : r(e, n, i, a, t, c))
	}
}, function(t, e, n) {
	var r = n(156),
		o = n(371),
		i = n(157);
	t.exports = function(t, e, n, a, c, u) {
		var l = 1 & n,
			s = t.length,
			f = e.length;
		if (s != f && !(l && f > s)) return !1;
		var p = u.get(t);
		if (p && u.get(e)) return p == e;
		var h = -1,
			d = !0,
			y = 2 & n ? new r : void 0;
		for (u.set(t, e), u.set(e, t); ++h < s;) {
			var v = t[h],
				m = e[h];
			if (a) var b = l ? a(m, v, h, e, t, u) : a(v, m, h, t, e, u);
			if (void 0 !== b) {
				if (b) continue;
				d = !1;
				break
			}
			if (y) {
				if (!o(e, (function(t, e) {
						if (!i(y, e) && (v === t || c(v, t, n, a, u))) return y.push(e)
					}))) {
					d = !1;
					break
				}
			} else if (v !== m && !c(v, m, n, a, u)) {
				d = !1;
				break
			}
		}
		return u.delete(t), u.delete(e), d
	}
}, function(t, e, n) {
	var r = n(42);
	t.exports = function(t) {
		return t == t && !r(t)
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return function(n) {
			return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
		}
	}
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(260),
		i = n(41);
	r({
		target: "String",
		proto: !0,
		forced: !n(261)("includes")
	}, {
		includes: function(t) {
			return !!~String(i(this)).indexOf(o(t), arguments.length > 1 ? arguments[1] : void 0)
		}
	})
}, function(t, e, n) {
	var r = n(27),
		o = n(45),
		i = n(14)("match");
	t.exports = function(t) {
		var e;
		return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
	}
}, function(t, e, n) {
	"use strict";
	var r = n(118),
		o = n(221),
		i = n(23),
		a = n(41),
		c = n(250),
		u = n(181),
		l = n(43),
		s = n(120),
		f = n(87),
		p = n(8),
		h = [].push,
		d = Math.min,
		y = 4294967295,
		v = !p((function() {
			return !RegExp(y, "y")
		}));
	r("split", 2, (function(t, e, n) {
		var r;
		return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, n) {
			var r = String(a(this)),
				i = void 0 === n ? y : n >>> 0;
			if (0 === i) return [];
			if (void 0 === t) return [r];
			if (!o(t)) return e.call(r, t, i);
			for (var c, u, l, s = [], p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), d = 0, v = new RegExp(t.source, p + "g");
				(c = f.call(v, r)) && !((u = v.lastIndex) > d && (s.push(r.slice(d, c.index)), c.length > 1 && c.index < r.length && h.apply(s, c.slice(1)), l = c[0].length, d = u, s.length >= i));) v.lastIndex === c.index && v.lastIndex++;
			return d === r.length ? !l && v.test("") || s.push("") : s.push(r.slice(d)), s.length > i ? s.slice(0, i) : s
		} : "0".split(void 0, 0).length ? function(t, n) {
			return void 0 === t && 0 === n ? [] : e.call(this, t, n)
		} : e, [function(e, n) {
			var o = a(this),
				i = null == e ? void 0 : e[t];
			return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n)
		}, function(t, o) {
			var a = n(r, t, this, o, r !== e);
			if (a.done) return a.value;
			var f = i(t),
				p = String(this),
				h = c(f, RegExp),
				m = f.unicode,
				b = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (v ? "y" : "g"),
				_ = new h(v ? f : "^(?:" + f.source + ")", b),
				g = void 0 === o ? y : o >>> 0;
			if (0 === g) return [];
			if (0 === p.length) return null === s(_, p) ? [p] : [];
			for (var x = 0, w = 0, E = []; w < p.length;) {
				_.lastIndex = v ? w : 0;
				var O, S = s(_, v ? p : p.slice(w));
				if (null === S || (O = d(l(_.lastIndex + (v ? 0 : w)), p.length)) === x) w = u(p, w, m);
				else {
					if (E.push(p.slice(x, w)), E.length === g) return E;
					for (var P = 1; P <= S.length - 1; P++)
						if (E.push(S[P]), E.length === g) return E;
					w = x = O
				}
			}
			return E.push(p.slice(x)), E
		}]
	}), !v)
}, function(t, e, n) {
	var r = n(388),
		o = n(389),
		i = n(215),
		a = n(32);
	t.exports = function(t, e) {
		return function(n, c) {
			var u = a(n) ? r : o,
				l = e ? e() : {};
			return u(n, t, i(c, 2), l)
		}
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return c
	}));
	n(21), n(34), n(71), n(235), n(25), n(31), n(46), n(76), n(104), n(35);

	function r(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}
	var o = n(131),
		i = n(286),
		a = n(321),
		c = function() {
			function t(e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), this.parseData(e), this.sifter = new o(this.collection)
			}
			var e, n, c;
			return e = t, (n = [{
				key: "parseData",
				value: function(t) {
					this.index = {};
					var e = {
						id: null,
						model: null,
						parent: null,
						children: null,
						isRoot: !0
					};
					this.tree = e, this.collection = [e], this.defaultNode = e, this.index[e.id] = e, this.parseNodes(t)
				}
			}, {
				key: "parseNodes",
				value: function(t) {
					for (var e = this, n = !1, r = [], o = function() {
							var o = [];
							t.forEach((function(t) {
								var e = {
										id: t.id,
										model: t,
										children: null
									},
									n = this.index[t.parent];
								n ? (e.parent = n, e.depth = (n.depth || 0) + 1, n.children || (n.children = []), n.children.push(e), this.collection.push(e), this.index[t.id] = e, n.model && n.model.name === e.model.name && r.push(e)) : o.push(t)
							}), e), o.length ? t = o : n = !0
						}; !n;) o();
					r.forEach((function(t) {
						var e = t.parent,
							n = e.parent;
						e.children.length > 1 || (n.children = i(n.children, e), this.collection = i(this.collection, e), delete this.index[e.id], t.parent = n, t.model = a(t.model), t.model.parent = n.id, n.children.push(t))
					}), this)
				}
			}, {
				key: "setDefault",
				value: function(t) {
					this.defaultNode.id = t.id || null, this.defaultNode.model = t
				}
			}, {
				key: "get",
				value: function(t) {
					return this.index[t]
				}
			}, {
				key: "getDefault",
				value: function() {
					return this.defaultNode
				}
			}, {
				key: "contains",
				value: function(t) {
					return !!this.get(t.id)
				}
			}, {
				key: "search",
				value: function(t) {
					if (!t || "" === t.trim()) throw new Error;
					var e = this.sifter.search(t, {
							fields: ["model.name"],
							conjunction: "and",
							nesting: !0
						}),
						n = [],
						r = {};
					return e.items.forEach((function(t) {
						var n = this.collection[t.id],
							o = n.model.name.replace(e.tokens[0].regex, "<em>$&</em>"),
							i = t.score / Math.pow(10, n.depth);
						r[n.id] = {
							node: n,
							parent: n.parent ? n.parent.id : null,
							children: [],
							label: o,
							score: i
						}
					}), this), e.items.forEach((function(t) {
						var e = this.collection[t.id],
							o = r[e.id];
						o.parent && r[o.parent] ? r[o.parent].children.push(o) : n.push(o)
					}), this), {
						collection: function t(e) {
							var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								r = [];
							return e.sort((function(t, e) {
								return t.score > e.score ? -1 : t.score < e.score ? 1 : 0
							})), e.forEach((function(e) {
								r.push({
									label: e.label,
									node: e.node,
									depth: n
								}), e.children.length && (r = r.concat(t(e.children, n + 1)))
							})), r
						}(n)
					}
				}
			}, {
				key: "toJSON",
				value: function() {
					return this.collection.reduce((function(t, e) {
						return e.model && t.push(e.model), t
					}), [])
				}
			}]) && r(e.prototype, n), c && r(e, c), t
		}()
}, function(t, e, n) {
	! function(t) {
		"use strict";
		var e = function(t) {
				var e = 1 / 0,
					n = 1 / 0,
					r = -1 / 0,
					o = -1 / 0;

				function i(t) {
					t && a.hasOwnProperty(t.type) && a[t.type](t)
				}
				var a = {
					GeometryCollection: function(t) {
						t.geometries.forEach(i)
					},
					Point: function(t) {
						c(t.coordinates)
					},
					MultiPoint: function(t) {
						t.coordinates.forEach(c)
					},
					LineString: function(t) {
						u(t.coordinates)
					},
					MultiLineString: function(t) {
						t.coordinates.forEach(u)
					},
					Polygon: function(t) {
						t.coordinates.forEach(u)
					},
					MultiPolygon: function(t) {
						t.coordinates.forEach(l)
					}
				};

				function c(t) {
					var i = t[0],
						a = t[1];
					i < e && (e = i), i > r && (r = i), a < n && (n = a), a > o && (o = a)
				}

				function u(t) {
					t.forEach(c)
				}

				function l(t) {
					t.forEach(u)
				}
				for (var s in t) i(t[s]);
				return r >= e && o >= n ? [e, n, r, o] : void 0
			},
			n = function(t, e, n, r, o) {
				3 === arguments.length && (r = Array, o = null);
				for (var i = new r(t = 1 << Math.max(4, Math.ceil(Math.log(t) / Math.LN2))), a = t - 1, c = 0; c < t; ++c) i[c] = o;

				function u(r) {
					for (var c = e(r) & a, u = i[c], l = 0; u != o;) {
						if (n(u, r)) return !0;
						if (++l >= t) throw new Error("full hashset");
						u = i[c = c + 1 & a]
					}
					return i[c] = r, !0
				}

				function l(r) {
					for (var c = e(r) & a, u = i[c], l = 0; u != o;) {
						if (n(u, r)) return !0;
						if (++l >= t) break;
						u = i[c = c + 1 & a]
					}
					return !1
				}

				function s() {
					for (var t = [], e = 0, n = i.length; e < n; ++e) {
						var r = i[e];
						r != o && t.push(r)
					}
					return t
				}
				return {
					add: u,
					has: l,
					values: s
				}
			},
			r = function(t, e, n, r, o, i) {
				3 === arguments.length && (r = i = Array, o = null);
				for (var a = new r(t = 1 << Math.max(4, Math.ceil(Math.log(t) / Math.LN2))), c = new i(t), u = t - 1, l = 0; l < t; ++l) a[l] = o;

				function s(r, i) {
					for (var l = e(r) & u, s = a[l], f = 0; s != o;) {
						if (n(s, r)) return c[l] = i;
						if (++f >= t) throw new Error("full hashmap");
						s = a[l = l + 1 & u]
					}
					return a[l] = r, c[l] = i, i
				}

				function f(r, i) {
					for (var l = e(r) & u, s = a[l], f = 0; s != o;) {
						if (n(s, r)) return c[l];
						if (++f >= t) throw new Error("full hashmap");
						s = a[l = l + 1 & u]
					}
					return a[l] = r, c[l] = i, i
				}

				function p(r, i) {
					for (var l = e(r) & u, s = a[l], f = 0; s != o;) {
						if (n(s, r)) return c[l];
						if (++f >= t) break;
						s = a[l = l + 1 & u]
					}
					return i
				}

				function h() {
					for (var t = [], e = 0, n = a.length; e < n; ++e) {
						var r = a[e];
						r != o && t.push(r)
					}
					return t
				}
				return {
					set: s,
					maybeSet: f,
					get: p,
					keys: h
				}
			},
			o = function(t, e) {
				return t[0] === e[0] && t[1] === e[1]
			},
			i = new ArrayBuffer(16),
			a = new Float64Array(i),
			c = new Uint32Array(i),
			u = function(t) {
				a[0] = t[0], a[1] = t[1];
				var e = c[0] ^ c[1];
				return 2147483647 & (e = e << 5 ^ e >> 7 ^ c[2] ^ c[3])
			},
			l = function(t) {
				var e, i, a, c, l = t.coordinates,
					s = t.lines,
					f = t.rings,
					p = S(),
					h = new Int32Array(l.length),
					d = new Int32Array(l.length),
					y = new Int32Array(l.length),
					v = new Int8Array(l.length),
					m = 0;
				for (e = 0, i = l.length; e < i; ++e) h[e] = d[e] = y[e] = -1;
				for (e = 0, i = s.length; e < i; ++e) {
					var b = s[e],
						_ = b[0],
						g = b[1];
					for (a = p[_], c = p[++_], ++m, v[a] = 1; ++_ <= g;) O(e, a, a = c, c = p[_]);
					++m, v[c] = 1
				}
				for (e = 0, i = l.length; e < i; ++e) h[e] = -1;
				for (e = 0, i = f.length; e < i; ++e) {
					var x = f[e],
						w = x[0] + 1,
						E = x[1];
					for (O(e, p[E - 1], a = p[w - 1], c = p[w]); ++w <= E;) O(e, a, a = c, c = p[w])
				}

				function O(t, e, n, r) {
					if (h[n] !== t) {
						h[n] = t;
						var o = d[n];
						if (o >= 0) {
							var i = y[n];
							o === e && i === r || o === r && i === e || (++m, v[n] = 1)
						} else d[n] = e, y[n] = r
					}
				}

				function S() {
					for (var t = r(1.4 * l.length, P, k, Int32Array, -1, Int32Array), e = new Int32Array(l.length), n = 0, o = l.length; n < o; ++n) e[n] = t.maybeSet(n, n);
					return e
				}

				function P(t) {
					return u(l[t])
				}

				function k(t, e) {
					return o(l[t], l[e])
				}
				h = d = y = null;
				var j, M = n(1.4 * m, u, o);
				for (e = 0, i = l.length; e < i; ++e) v[j = p[e]] && M.add(l[j]);
				return M
			},
			s = function(t) {
				var e, n, r, o = l(t),
					i = t.coordinates,
					a = t.lines,
					c = t.rings;
				for (n = 0, r = a.length; n < r; ++n)
					for (var u = a[n], s = u[0], p = u[1]; ++s < p;) o.has(i[s]) && (e = {
						0: s,
						1: u[1]
					}, u[1] = s, u = u.next = e);
				for (n = 0, r = c.length; n < r; ++n)
					for (var h = c[n], d = h[0], y = d, v = h[1], m = o.has(i[d]); ++y < v;) o.has(i[y]) && (m ? (e = {
						0: y,
						1: h[1]
					}, h[1] = y, h = h.next = e) : (f(i, d, v, v - y), i[v] = i[d], m = !0, y = d));
				return t
			};

		function f(t, e, n, r) {
			p(t, e, n), p(t, e, e + r), p(t, e + r, n)
		}

		function p(t, e, n) {
			for (var r, o = e + (n-- - e >> 1); e < o; ++e, --n) r = t[e], t[e] = t[n], t[n] = r
		}
		var h = function(t) {
				var e, n, i, a, c = t.coordinates,
					l = t.lines,
					s = t.rings,
					f = l.length + s.length;
				for (delete t.lines, delete t.rings, i = 0, a = l.length; i < a; ++i)
					for (e = l[i]; e = e.next;) ++f;
				for (i = 0, a = s.length; i < a; ++i)
					for (n = s[i]; n = n.next;) ++f;
				var p = r(2 * f * 1.4, u, o),
					h = t.arcs = [];
				for (i = 0, a = l.length; i < a; ++i) {
					e = l[i];
					do {
						d(e)
					} while (e = e.next)
				}
				for (i = 0, a = s.length; i < a; ++i)
					if ((n = s[i]).next)
						do {
							d(n)
						} while (n = n.next);
					else y(n);

				function d(t) {
					var e, n, r, o, i, a, u, l;
					if (r = p.get(e = c[t[0]]))
						for (u = 0, l = r.length; u < l; ++u)
							if (v(o = r[u], t)) return t[0] = o[0], void(t[1] = o[1]);
					if (i = p.get(n = c[t[1]]))
						for (u = 0, l = i.length; u < l; ++u)
							if (m(a = i[u], t)) return t[1] = a[0], void(t[0] = a[1]);
					r ? r.push(t) : p.set(e, [t]), i ? i.push(t) : p.set(n, [t]), h.push(t)
				}

				function y(t) {
					var e, n, r, o, i;
					if (n = p.get(e = c[t[0]]))
						for (o = 0, i = n.length; o < i; ++o) {
							if (b(r = n[o], t)) return t[0] = r[0], void(t[1] = r[1]);
							if (_(r, t)) return t[0] = r[1], void(t[1] = r[0])
						}
					if (n = p.get(e = c[t[0] + g(t)]))
						for (o = 0, i = n.length; o < i; ++o) {
							if (b(r = n[o], t)) return t[0] = r[0], void(t[1] = r[1]);
							if (_(r, t)) return t[0] = r[1], void(t[1] = r[0])
						}
					n ? n.push(t) : p.set(e, [t]), h.push(t)
				}

				function v(t, e) {
					var n = t[0],
						r = e[0],
						i = t[1];
					if (n - i != r - e[1]) return !1;
					for (; n <= i; ++n, ++r)
						if (!o(c[n], c[r])) return !1;
					return !0
				}

				function m(t, e) {
					var n = t[0],
						r = e[0],
						i = t[1],
						a = e[1];
					if (n - i != r - a) return !1;
					for (; n <= i; ++n, --a)
						if (!o(c[n], c[a])) return !1;
					return !0
				}

				function b(t, e) {
					var n = t[0],
						r = e[0],
						i = t[1] - n;
					if (i !== e[1] - r) return !1;
					for (var a = g(t), u = g(e), l = 0; l < i; ++l)
						if (!o(c[n + (l + a) % i], c[r + (l + u) % i])) return !1;
					return !0
				}

				function _(t, e) {
					var n = t[0],
						r = e[0],
						i = t[1],
						a = e[1],
						u = i - n;
					if (u !== a - r) return !1;
					for (var l = g(t), s = u - g(e), f = 0; f < u; ++f)
						if (!o(c[n + (f + l) % u], c[a - (f + s) % u])) return !1;
					return !0
				}

				function g(t) {
					for (var e = t[0], n = t[1], r = e, o = r, i = c[r]; ++r < n;) {
						var a = c[r];
						(a[0] < i[0] || a[0] === i[0] && a[1] < i[1]) && (o = r, i = a)
					}
					return o - e
				}
				return t
			},
			d = function(t) {
				for (var e = t.arcs, n = -1, r = e.length; ++n < r;)
					for (var o, i, a = e[n], c = 0, u = a.length, l = a[0], s = l[0], f = l[1]; ++c < u;) o = (l = a[c])[0], i = l[1], a[c] = [o - s, i - f], s = o, f = i;
				return t
			},
			y = function(t) {
				var e = -1,
					n = [],
					r = [],
					o = [];

				function i(t) {
					t && a.hasOwnProperty(t.type) && a[t.type](t)
				}
				var a = {
					GeometryCollection: function(t) {
						t.geometries.forEach(i)
					},
					LineString: function(t) {
						t.arcs = c(t.coordinates), delete t.coordinates
					},
					MultiLineString: function(t) {
						t.arcs = t.coordinates.map(c), delete t.coordinates
					},
					Polygon: function(t) {
						t.arcs = t.coordinates.map(u), delete t.coordinates
					},
					MultiPolygon: function(t) {
						t.arcs = t.coordinates.map(l), delete t.coordinates
					}
				};

				function c(t) {
					for (var r = 0, i = t.length; r < i; ++r) o[++e] = t[r];
					var a = {
						0: e - i + 1,
						1: e
					};
					return n.push(a), a
				}

				function u(t) {
					for (var n = 0, i = t.length; n < i; ++n) o[++e] = t[n];
					var a = {
						0: e - i + 1,
						1: e
					};
					return r.push(a), a
				}

				function l(t) {
					return t.map(u)
				}
				for (var s in t) i(t[s]);
				return {
					type: "Topology",
					coordinates: o,
					lines: n,
					rings: r,
					objects: t
				}
			},
			v = function(t) {
				var e;
				for (e in t) t[e] = m(t[e]);
				return t
			};

		function m(t) {
			return (t && g.hasOwnProperty(t.type) ? g[t.type] : _)(t)
		}

		function b(t) {
			var e = t.geometry;
			return null == e ? t.type = null : (_(e), t.type = e.type, e.geometries ? t.geometries = e.geometries : e.coordinates && (t.coordinates = e.coordinates), e.bbox && (t.bbox = e.bbox)), delete t.geometry, t
		}

		function _(t) {
			return t ? (x.hasOwnProperty(t.type) && x[t.type](t), t) : {
				type: null
			}
		}
		var g = {
				Feature: b,
				FeatureCollection: function(t) {
					return t.type = "GeometryCollection", t.geometries = t.features, t.features.forEach(b), delete t.features, t
				}
			},
			x = {
				GeometryCollection: function(t) {
					for (var e = t.geometries, n = -1, r = e.length; ++n < r;) e[n] = _(e[n])
				},
				MultiPoint: function(t) {
					t.coordinates.length ? t.coordinates.length < 2 && (t.type = "Point", t.coordinates = t.coordinates[0]) : (t.type = null, delete t.coordinates)
				},
				LineString: function(t) {
					t.coordinates.length || (t.type = null, delete t.coordinates)
				},
				MultiLineString: function(t) {
					for (var e = t.coordinates, n = 0, r = 0, o = e.length; n < o; ++n) {
						var i = e[n];
						i.length && (e[r++] = i)
					}
					r ? r < 2 ? (t.type = "LineString", t.coordinates = e[0]) : t.coordinates.length = r : (t.type = null, delete t.coordinates)
				},
				Polygon: function(t) {
					for (var e = t.coordinates, n = 0, r = 0, o = e.length; n < o; ++n) {
						var i = e[n];
						i.length && (e[r++] = i)
					}
					r ? t.coordinates.length = r : (t.type = null, delete t.coordinates)
				},
				MultiPolygon: function(t) {
					for (var e = t.coordinates, n = 0, r = 0, o = e.length; n < o; ++n) {
						for (var i = e[n], a = 0, c = 0, u = i.length; a < u; ++a) {
							var l = i[a];
							l.length && (i[c++] = l)
						}
						c && (i.length = c, e[r++] = i)
					}
					r ? r < 2 ? (t.type = "Polygon", t.coordinates = e[0]) : e.length = r : (t.type = null, delete t.coordinates)
				}
			},
			w = function(t, e, n) {
				var r = e[0],
					o = e[1],
					i = e[2],
					a = e[3],
					c = i - r ? (n - 1) / (i - r) : 1,
					u = a - o ? (n - 1) / (a - o) : 1;

				function l(t) {
					return t[0] = Math.round((t[0] - r) * c), t[1] = Math.round((t[1] - o) * u), t
				}

				function s(t) {
					for (var e, n, r, o = 0, i = 1, a = t.length, c = l(t[0]), u = c[0], s = c[1]; ++o < a;) n = (c = l(t[o]))[0], r = c[1], n === u && r === s || ((e = t[i++])[0] = u = n, e[1] = s = r);
					t.length = i
				}

				function f(t) {
					t && p.hasOwnProperty(t.type) && p[t.type](t)
				}
				var p = {
					GeometryCollection: function(t) {
						t.geometries.forEach(f)
					},
					Point: function(t) {
						l(t.coordinates)
					},
					MultiPoint: function(t) {
						t.coordinates.forEach(l)
					},
					LineString: function(t) {
						var e = t.coordinates;
						s(e), e.length < 2 && (e[1] = e[0])
					},
					MultiLineString: function(t) {
						for (var e = t.coordinates, n = 0, r = e.length; n < r; ++n) {
							var o = e[n];
							s(o), o.length < 2 && (o[1] = o[0])
						}
					},
					Polygon: function(t) {
						for (var e = t.coordinates, n = 0, r = e.length; n < r; ++n) {
							var o = e[n];
							for (s(o); o.length < 4;) o.push(o[0])
						}
					},
					MultiPolygon: function(t) {
						for (var e = t.coordinates, n = 0, r = e.length; n < r; ++n)
							for (var o = e[n], i = 0, a = o.length; i < a; ++i) {
								var c = o[i];
								for (s(c); c.length < 4;) c.push(c[0])
							}
					}
				};
				for (var h in t) f(t[h]);
				return {
					scale: [1 / c, 1 / u],
					translate: [r, o]
				}
			},
			E = function(t, n) {
				var o = e(v(t)),
					i = n > 0 && o && w(t, o, n),
					a = h(s(y(t))),
					c = a.coordinates,
					u = r(1.4 * a.arcs.length, O, S);

				function l(t) {
					t && f.hasOwnProperty(t.type) && f[t.type](t)
				}
				t = a.objects, a.bbox = o, a.arcs = a.arcs.map((function(t, e) {
					return u.set(t, e), c.slice(t[0], t[1] + 1)
				})), delete a.coordinates, c = null;
				var f = {
					GeometryCollection: function(t) {
						t.geometries.forEach(l)
					},
					LineString: function(t) {
						t.arcs = p(t.arcs)
					},
					MultiLineString: function(t) {
						t.arcs = t.arcs.map(p)
					},
					Polygon: function(t) {
						t.arcs = t.arcs.map(p)
					},
					MultiPolygon: function(t) {
						t.arcs = t.arcs.map(m)
					}
				};

				function p(t) {
					var e = [];
					do {
						var n = u.get(t);
						e.push(t[0] < t[1] ? n : ~n)
					} while (t = t.next);
					return e
				}

				function m(t) {
					return t.map(p)
				}
				for (var b in t) l(t[b]);
				return i && (a.transform = i, d(a)), a
			};

		function O(t) {
			var e, n = t[0],
				r = t[1];
			return r < n && (e = n, n = r, r = e), n + 31 * r
		}

		function S(t, e) {
			var n, r = t[0],
				o = t[1],
				i = e[0],
				a = e[1];
			return o < r && (n = r, r = o, o = n), a < i && (n = i, i = a, a = n), r === i && o === a
		}
		var P = function(t) {
				var e, n = t.arcs,
					r = t.arcs = [],
					o = -1,
					i = new Array(n.length);

				function a(t) {
					switch (t.type) {
						case "GeometryCollection":
							t.geometries.forEach(a);
							break;
						case "LineString":
							c(t.arcs);
							break;
						case "MultiLineString":
						case "Polygon":
							t.arcs.forEach(c);
							break;
						case "MultiPolygon":
							t.arcs.forEach(u)
					}
				}

				function c(t) {
					for (var e = 0, a = t.length; e < a; ++e) {
						var c, u = t[e],
							l = u < 0 && (u = ~u, !0);
						null == (c = i[u]) && (i[u] = c = ++o, r[c] = n[u]), t[e] = l ? ~c : c
					}
				}

				function u(t) {
					t.forEach(c)
				}
				for (e in t.objects) a(t.objects[e]);
				return t
			},
			k = function(t, e) {
				var n;

				function r(t) {
					switch (t.type) {
						case "Polygon":
							t.arcs = o(t.arcs), t.arcs || (t.type = null, delete t.arcs);
							break;
						case "MultiPolygon":
							t.arcs = t.arcs.map(o).filter(M), t.arcs.length || (t.type = null, delete t.arcs);
							break;
						case "GeometryCollection":
							t.geometries.forEach(r), t.geometries = t.geometries.filter(C), t.geometries.length || (t.type = null, delete t.geometries)
					}
				}

				function o(t) {
					return t.length && i(t[0]) ? [t.shift()].concat(t.filter(a)) : null
				}

				function i(t) {
					return e(t, !1)
				}

				function a(t) {
					return e(t, !0)
				}
				for (n in null == e && (e = j), t.objects) r(t.objects[n]);
				return P(t)
			};

		function j() {
			return !0
		}

		function M(t) {
			return t
		}

		function C(t) {
			return null != t.type
		}
		var N = function(t) {
				var e, n = {},
					r = 0;

				function o(t) {
					switch (t.type) {
						case "GeometryCollection":
							t.geometries.forEach(o);
							break;
						case "Polygon":
							i(t.arcs);
							break;
						case "MultiPolygon":
							t.arcs.forEach(i)
					}
				}

				function i(t) {
					for (var e = 0, o = t.length; e < o; ++e, ++r)
						for (var i = t[e], a = 0, c = i.length; a < c; ++a) {
							var u = i[a];
							u < 0 && (u = ~u);
							var l = n[u];
							n[u] = l >= 0 && l !== r ? -1 : r
						}
				}
				for (e in t.objects) o(t.objects[e]);
				return function(t) {
					for (var e, r = 0, o = t.length; r < o; ++r)
						if (e = t[r], n[e < 0 ? ~e : e] < 0) return !0;
					return !1
				}
			},
			T = function(t) {
				return t
			},
			R = function(t) {
				if (null == (e = t.transform)) return T;
				var e, n, r, o = e.scale[0],
					i = e.scale[1],
					a = e.translate[0],
					c = e.translate[1];
				return function(t, e) {
					return e || (n = r = 0), t[0] = (n += t[0]) * o + a, t[1] = (r += t[1]) * i + c, t
				}
			},
			A = function(t) {
				var e = t.bbox;

				function n(t) {
					c[0] = t[0], c[1] = t[1], a(c), c[0] < u && (u = c[0]), c[0] > s && (s = c[0]), c[1] < l && (l = c[1]), c[1] > f && (f = c[1])
				}

				function r(t) {
					switch (t.type) {
						case "GeometryCollection":
							t.geometries.forEach(r);
							break;
						case "Point":
							n(t.coordinates);
							break;
						case "MultiPoint":
							t.coordinates.forEach(n)
					}
				}
				if (!e) {
					var o, i, a = R(t),
						c = new Array(2),
						u = 1 / 0,
						l = u,
						s = -u,
						f = -u;
					for (i in t.arcs.forEach((function(t) {
							for (var e = -1, n = t.length; ++e < n;) o = t[e], c[0] = o[0], c[1] = o[1], a(c, e), c[0] < u && (u = c[0]), c[0] > s && (s = c[0]), c[1] < l && (l = c[1]), c[1] > f && (f = c[1])
						})), t.objects) r(t.objects[i]);
					e = t.bbox = [u, l, s, f]
				}
				return e
			},
			D = function(t, e) {
				for (var n, r = t.length, o = r - e; o < --r;) n = t[o], t[o++] = t[r], t[r] = n
			},
			L = function(t, e) {
				return "GeometryCollection" === e.type ? {
					type: "FeatureCollection",
					features: e.geometries.map((function(e) {
						return I(t, e)
					}))
				} : I(t, e)
			};

		function I(t, e) {
			var n = e.id,
				r = e.bbox,
				o = null == e.properties ? {} : e.properties,
				i = q(t, e);
			return null == n && null == r ? {
				type: "Feature",
				properties: o,
				geometry: i
			} : null == r ? {
				type: "Feature",
				id: n,
				properties: o,
				geometry: i
			} : {
				type: "Feature",
				id: n,
				bbox: r,
				properties: o,
				geometry: i
			}
		}

		function q(t, e) {
			var n = R(t),
				r = t.arcs;

			function o(t, e) {
				e.length && e.pop();
				for (var o = r[t < 0 ? ~t : t], i = 0, a = o.length; i < a; ++i) e.push(n(o[i].slice(), i));
				t < 0 && D(e, a)
			}

			function i(t) {
				return n(t.slice())
			}

			function a(t) {
				for (var e = [], n = 0, r = t.length; n < r; ++n) o(t[n], e);
				return e.length < 2 && e.push(e[0].slice()), e
			}

			function c(t) {
				for (var e = a(t); e.length < 4;) e.push(e[0].slice());
				return e
			}

			function u(t) {
				return t.map(c)
			}

			function l(t) {
				var e, n = t.type;
				switch (n) {
					case "GeometryCollection":
						return {
							type: n, geometries: t.geometries.map(l)
						};
					case "Point":
						e = i(t.coordinates);
						break;
					case "MultiPoint":
						e = t.coordinates.map(i);
						break;
					case "LineString":
						e = a(t.arcs);
						break;
					case "MultiLineString":
						e = t.arcs.map(a);
						break;
					case "Polygon":
						e = u(t.arcs);
						break;
					case "MultiPolygon":
						e = t.arcs.map(u);
						break;
					default:
						return null
				}
				return {
					type: n,
					coordinates: e
				}
			}
			return l(e)
		}
		var U = function(t, e) {
				var n = {},
					r = {},
					o = {},
					i = [],
					a = -1;

				function c(e) {
					var n, r = t.arcs[e < 0 ? ~e : e],
						o = r[0];
					return t.transform ? (n = [0, 0], r.forEach((function(t) {
						n[0] += t[0], n[1] += t[1]
					}))) : n = r[r.length - 1], e < 0 ? [n, o] : [o, n]
				}

				function u(t, e) {
					for (var r in t) {
						var o = t[r];
						delete e[o.start], delete o.start, delete o.end, o.forEach((function(t) {
							n[t < 0 ? ~t : t] = 1
						})), i.push(o)
					}
				}
				return e.forEach((function(n, r) {
					var o, i = t.arcs[n < 0 ? ~n : n];
					i.length < 3 && !i[1][0] && !i[1][1] && (o = e[++a], e[a] = n, e[r] = o)
				})), e.forEach((function(t) {
					var e, n, i = c(t),
						a = i[0],
						u = i[1];
					if (e = o[a])
						if (delete o[e.end], e.push(t), e.end = u, n = r[u]) {
							delete r[n.start];
							var l = n === e ? e : e.concat(n);
							r[l.start = e.start] = o[l.end = n.end] = l
						} else r[e.start] = o[e.end] = e;
					else if (e = r[u])
						if (delete r[e.start], e.unshift(t), e.start = a, n = o[a]) {
							delete o[n.end];
							var s = n === e ? e : n.concat(e);
							r[s.start = n.start] = o[s.end = e.end] = s
						} else r[e.start] = o[e.end] = e;
					else r[(e = [t]).start = a] = o[e.end = u] = e
				})), u(o, r), u(r, o), e.forEach((function(t) {
					n[t < 0 ? ~t : t] || i.push([t])
				})), i
			},
			z = function(t) {
				return q(t, F.apply(this, arguments))
			};

		function F(t, e, n) {
			var r, o, i;
			if (arguments.length > 1) r = H(t, e, n);
			else
				for (o = 0, r = new Array(i = t.arcs.length); o < i; ++o) r[o] = o;
			return {
				type: "MultiLineString",
				arcs: U(t, r)
			}
		}

		function H(t, e, n) {
			var r, o = [],
				i = [];

			function a(t) {
				var e = t < 0 ? ~t : t;
				(i[e] || (i[e] = [])).push({
					i: t,
					g: r
				})
			}

			function c(t) {
				t.forEach(a)
			}

			function u(t) {
				t.forEach(c)
			}

			function l(t) {
				t.forEach(u)
			}

			function s(t) {
				switch (r = t, t.type) {
					case "GeometryCollection":
						t.geometries.forEach(s);
						break;
					case "LineString":
						c(t.arcs);
						break;
					case "MultiLineString":
					case "Polygon":
						u(t.arcs);
						break;
					case "MultiPolygon":
						l(t.arcs)
				}
			}
			return s(e), i.forEach(null == n ? function(t) {
				o.push(t[0].i)
			} : function(t) {
				n(t[0].g, t[t.length - 1].g) && o.push(t[0].i)
			}), o
		}

		function Y(t) {
			for (var e, n = -1, r = t.length, o = t[r - 1], i = 0; ++n < r;) e = o, o = t[n], i += e[0] * o[1] - e[1] * o[0];
			return Math.abs(i)
		}
		var W = function(t) {
			return q(t, G.apply(this, arguments))
		};

		function G(t, e) {
			var n = {},
				r = [],
				o = [];

			function i(t) {
				switch (t.type) {
					case "GeometryCollection":
						t.geometries.forEach(i);
						break;
					case "Polygon":
						a(t.arcs);
						break;
					case "MultiPolygon":
						t.arcs.forEach(a)
				}
			}

			function a(t) {
				t.forEach((function(e) {
					e.forEach((function(e) {
						(n[e = e < 0 ? ~e : e] || (n[e] = [])).push(t)
					}))
				})), r.push(t)
			}

			function c(e) {
				return Y(q(t, {
					type: "Polygon",
					arcs: [e]
				}).coordinates[0])
			}
			return e.forEach(i), r.forEach((function(t) {
				if (!t._) {
					var e = [],
						r = [t];
					for (t._ = 1, o.push(e); t = r.pop();) e.push(t), t.forEach((function(t) {
						t.forEach((function(t) {
							n[t < 0 ? ~t : t].forEach((function(t) {
								t._ || (t._ = 1, r.push(t))
							}))
						}))
					}))
				}
			})), r.forEach((function(t) {
				delete t._
			})), {
				type: "MultiPolygon",
				arcs: o.map((function(e) {
					var r, o = [];
					if (e.forEach((function(t) {
							t.forEach((function(t) {
								t.forEach((function(t) {
									n[t < 0 ? ~t : t].length < 2 && o.push(t)
								}))
							}))
						})), (r = (o = U(t, o)).length) > 1)
						for (var i, a, u = 1, l = c(o[0]); u < r; ++u)(i = c(o[u])) > l && (a = o[0], o[0] = o[u], o[u] = a, l = i);
					return o
				}))
			}
		}
		var B = function(t, e) {
				for (var n = 0, r = t.length; n < r;) {
					var o = n + r >>> 1;
					t[o] < e ? n = o + 1 : r = o
				}
				return n
			},
			V = function(t) {
				var e = {},
					n = t.map((function() {
						return []
					}));

				function r(t, n) {
					t.forEach((function(t) {
						t < 0 && (t = ~t);
						var r = e[t];
						r ? r.push(n) : e[t] = [n]
					}))
				}

				function o(t, e) {
					t.forEach((function(t) {
						r(t, e)
					}))
				}

				function i(t, e) {
					"GeometryCollection" === t.type ? t.geometries.forEach((function(t) {
						i(t, e)
					})) : t.type in a && a[t.type](t.arcs, e)
				}
				var a = {
					LineString: r,
					MultiLineString: o,
					Polygon: o,
					MultiPolygon: function(t, e) {
						t.forEach((function(t) {
							o(t, e)
						}))
					}
				};
				for (var c in t.forEach(i), e)
					for (var u = e[c], l = u.length, s = 0; s < l; ++s)
						for (var f = s + 1; f < l; ++f) {
							var p, h = u[s],
								d = u[f];
							(p = n[h])[c = B(p, d)] !== d && p.splice(c, 0, d), (p = n[d])[c = B(p, h)] !== h && p.splice(c, 0, h)
						}
				return n
			},
			$ = function(t, e) {
				if (!((e = Math.floor(e)) >= 2)) throw new Error("n must be �竉2");
				if (t.transform) throw new Error("already quantized");
				var n, r = A(t),
					o = r[0],
					i = (r[2] - o) / (e - 1) || 1,
					a = r[1],
					c = (r[3] - a) / (e - 1) || 1;

				function u(t) {
					t[0] = Math.round((t[0] - o) / i), t[1] = Math.round((t[1] - a) / c)
				}

				function l(t) {
					switch (t.type) {
						case "GeometryCollection":
							t.geometries.forEach(l);
							break;
						case "Point":
							u(t.coordinates);
							break;
						case "MultiPoint":
							t.coordinates.forEach(u)
					}
				}
				for (n in t.arcs.forEach((function(t) {
						for (var e, n, r, u = 1, l = 1, s = t.length, f = t[0], p = f[0] = Math.round((f[0] - o) / i), h = f[1] = Math.round((f[1] - a) / c); u < s; ++u) f = t[u], n = Math.round((f[0] - o) / i), r = Math.round((f[1] - a) / c), n === p && r === h || ((e = t[l++])[0] = n - p, p = n, e[1] = r - h, h = r);
						l < 2 && ((e = t[l++])[0] = 0, e[1] = 0), t.length = l
					})), t.objects) l(t.objects[n]);
				return t.transform = {
					scale: [i, c],
					translate: [o, a]
				}, t
			},
			Q = function(t) {
				if (null == (e = t.transform)) return T;
				var e, n, r, o = e.scale[0],
					i = e.scale[1],
					a = e.translate[0],
					c = e.translate[1];
				return function(t, e) {
					e || (n = r = 0);
					var u = Math.round((t[0] - a) / o),
						l = Math.round((t[1] - c) / i);
					return t[0] = u - n, n = u, t[1] = l - r, r = l, t
				}
			};

		function Z(t) {
			var e = t[0],
				n = t[1],
				r = t[2];
			return Math.abs((e[0] - r[0]) * (n[1] - e[1]) - (e[0] - n[0]) * (r[1] - e[1]))
		}

		function X(t) {
			for (var e, n = -1, r = t.length, o = t[r - 1], i = 0; ++n < r;) e = o, o = t[n], i += e[0] * o[1] - e[1] * o[0];
			return Math.abs(i) / 2
		}
		var J = function(t, e, n) {
			return e = null == e ? Number.MIN_VALUE : +e, null == n && (n = X),
				function(r, o) {
					return n(L(t, {
						type: "Polygon",
						arcs: [r]
					}).geometry.coordinates[0], o) >= e
				}
		};

		function K(t, e) {
			return t[1][2] - e[1][2]
		}
		var tt = function() {
				var t = {},
					e = [],
					n = 0;

				function r(t, n) {
					for (; n > 0;) {
						var r = (n + 1 >> 1) - 1,
							o = e[r];
						if (K(t, o) >= 0) break;
						e[o._ = n] = o, e[t._ = n = r] = t
					}
				}

				function o(t, r) {
					for (;;) {
						var o = r + 1 << 1,
							i = o - 1,
							a = r,
							c = e[a];
						if (i < n && K(e[i], c) < 0 && (c = e[a = i]), o < n && K(e[o], c) < 0 && (c = e[a = o]), a === r) break;
						e[c._ = r] = c, e[t._ = r = a] = t
					}
				}
				return t.push = function(t) {
					return r(e[t._ = n] = t, n++), n
				}, t.pop = function() {
					if (!(n <= 0)) {
						var t, r = e[0];
						return --n > 0 && (t = e[n], o(e[t._ = 0] = t, 0)), r
					}
				}, t.remove = function(t) {
					var i, a = t._;
					if (e[a] === t) return a !== --n && (K(i = e[n], t) < 0 ? r : o)(e[i._ = a] = i, a), a
				}, t
			},
			et = function(t, e) {
				var n = R(t),
					r = Q(t),
					o = tt();

				function i(t) {
					o.remove(t), t[1][2] = e(t), o.push(t)
				}
				return null == e && (e = Z), t.arcs.forEach((function(t) {
					var a, c, u, l = [],
						s = 0;
					for (t.forEach(n), c = 1, u = t.length - 1; c < u; ++c)(a = t.slice(c - 1, c + 2))[1][2] = e(a), l.push(a), o.push(a);
					for (t[0][2] = t[u][2] = 1 / 0, c = 0, u = l.length; c < u; ++c)(a = l[c]).previous = l[c - 1], a.next = l[c + 1];
					for (; a = o.pop();) {
						var f = a.previous,
							p = a.next;
						a[1][2] < s ? a[1][2] = s : s = a[1][2], f && (f.next = p, f[2] = a[2], i(f)), p && (p.previous = f, p[0] = a[0], i(p))
					}
					t.forEach(r)
				})), t
			},
			nt = function(t, e) {
				var n = [];
				return t.arcs.forEach((function(t) {
					t.forEach((function(t) {
						isFinite(t[2]) && n.push(t[2])
					}))
				})), n.length && rt(n.sort(ot), e)
			};

		function rt(t, e) {
			if (n = t.length) {
				if ((e = +e) <= 0 || n < 2) return t[0];
				if (e >= 1) return t[n - 1];
				var n, r = (n - 1) * e,
					o = Math.floor(r),
					i = t[o];
				return i + (t[o + 1] - i) * (r - o)
			}
		}

		function ot(t, e) {
			return e - t
		}
		var it = function(t, e) {
				return e = null == e ? Number.MIN_VALUE : +e, t.arcs.forEach(t.transform ? function(t) {
					for (var n, r, o = 0, i = 0, a = -1, c = -1, u = t.length; ++a < u;)(n = t[a])[2] >= e ? ((r = t[++c])[0] = n[0] + o, r[1] = n[1] + i, o = i = 0) : (o += n[0], i += n[1]);
					t.length = ++c
				} : function(t) {
					for (var n, r = -1, o = -1, i = t.length; ++r < i;)(n = t[r])[2] >= e && (t[++o] = n);
					t.length = ++o
				}), t.arcs.forEach(t.transform ? function(t) {
					var e = 0,
						n = 0,
						r = t.length,
						o = t[0];
					for (o.length = 2; ++e < r;)(o = t[e]).length = 2, (o[0] || o[1]) && (t[++n] = o);
					t.length = (n || 1) + 1
				} : function(t) {
					var e, n, r = 0,
						o = 0,
						i = t.length,
						a = t[0],
						c = a[0],
						u = a[1];
					for (a.length = 2; ++r < i;) e = (a = t[r])[0], n = a[1], a.length = 2, c === e && u === n || (t[++o] = a, c = e, u = n);
					t.length = (o || 1) + 1
				}), t
			},
			at = Math.PI,
			ct = 2 * at,
			ut = 4 * at,
			lt = at / 180,
			st = Math.abs,
			ft = Math.atan,
			pt = Math.atan2,
			ht = Math.cos,
			dt = Math.max,
			yt = Math.sin,
			vt = Math.sqrt,
			mt = Math.tan;

		function bt(t, e) {
			if (!t.length) return 0;
			var n, r, o, i, a, c, u, l = 0,
				s = t[0],
				f = s[0] * lt,
				p = (s[1] * lt + ct) / 2,
				h = ht(p),
				d = yt(p);
			for (a = 1, c = t.length; a < c; ++a) n = f, r = (f = (s = t[a])[0] * lt) - n, p = (s[1] * lt + ct) / 2, o = h, h = ht(p), i = d, d = yt(p), l += pt((u = i * d) * yt(r), o * h + u * ht(r));
			return l = 2 * (l > at ? l - ct : l < -at ? l + ct : l), e && (l *= -1), l < 0 ? l + ut : l
		}

		function _t(t) {
			var e = t[0][0] * lt,
				n = t[0][1] * lt,
				r = ht(n),
				o = yt(n),
				i = t[1][0] * lt,
				a = t[1][1] * lt,
				c = ht(a),
				u = yt(a),
				l = t[2][0] * lt,
				s = t[2][1] * lt,
				f = ht(s),
				p = yt(s),
				h = gt(e, r, o, i, c, u),
				d = gt(i, c, u, l, f, p),
				y = gt(l, f, p, e, r, o),
				v = (h + d + y) / 2;
			return 4 * ft(vt(dt(0, mt(v / 2) * mt((v - h) / 2) * mt((v - d) / 2) * mt((v - y) / 2))))
		}

		function gt(t, e, n, r, o, i) {
			var a = st(r - t),
				c = ht(a),
				u = i * yt(a),
				l = n * o - e * i * c,
				s = e * o + n * i * c;
			return pt(vt(u * u + l * l), s)
		}
		t.topology = E, t.filter = k, t.filterAttached = N, t.filterWeight = J, t.planarRingArea = X, t.planarTriangleArea = Z, t.presimplify = et, t.quantile = nt, t.simplify = it, t.sphericalRingArea = bt, t.sphericalTriangleArea = _t, t.bbox = A, t.feature = L, t.merge = W, t.mergeArcs = G, t.mesh = z, t.meshArcs = F, t.neighbors = V, t.quantize = $, t.transform = R, t.untransform = Q, Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}(e)
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return p
	}));
	n(5), n(10), n(11), n(9), n(22), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(1);
	n(387);

	function i(t) {
		return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function a(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function c(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function u(t, e) {
		return (u = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function l(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = f(t);
			if (e) {
				var o = f(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return s(this, n)
		}
	}

	function s(t, e) {
		return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function f(t) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var p = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && u(t, e)
		}(f, t);
		var e, n, i, s = l(f);

		function f() {
			return a(this, f), s.apply(this, arguments)
		}
		return e = f, (n = [{
			key: "render",
			value: function(t) {
				var e = Object(o.k)().projection(t.projection);
				return r.c.createElement("g", {
					className: "map__countries"
				}, t.countries.map((function(t) {
					return r.c.createElement("path", {
						d: e(t.geometry)
					})
				})))
			}
		}]) && c(e.prototype, n), i && c(e, i), f
	}(r.a)
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return a
	}));
	n(22), n(97);
	var r = n(0),
		o = n(1),
		i = n(39);

	function a(t) {
		var e = t.regionBounds,
			n = t.projection;
		return Object.keys(e).map((function(t) {
			var a = e[t],
				c = a.map((function(t) {
					return n(t)
				})),
				u = (Math.min(c[0][0], c[1][0]), Math.max(c[0][0], c[1][0]), Math.min(c[0][1], c[1][1]), Math.max(c[0][1], c[1][1]), Object(i.a)(a)),
				l = Object(o.k)().projection(n),
				s = l.bounds(u);
			return r.c.createElement("g", null, r.c.createElement("path", {
				d: l(u),
				style: {
					fill: "none",
					stroke: "rgba(255,0,0,0.5)",
					strokeWidth: "1px"
				}
			}), r.c.createElement("rect", {
				x: s[0][0],
				y: s[0][1],
				width: s[1][0] - s[0][0],
				height: s[1][1] - s[0][1],
				style: {
					fill: "none",
					stroke: "rgba(0,0,255,0.5)",
					strokeWidth: "1px"
				}
			}), r.c.createElement("text", {
				x: s[0][0],
				y: s[0][1]
			}, t))
		}))
	}
}, function(t) {
	t.exports = JSON.parse('{"a":{"tablet":"812px","desktop":"1024px"}}')
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return h
	}));
	n(5), n(10), n(11), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(15);
	n(395);

	function i(t) {
		return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function a(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function c(t, e) {
		return (c = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function u(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = f(t);
			if (e) {
				var o = f(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return l(this, n)
		}
	}

	function l(t, e) {
		return !e || "object" !== i(e) && "function" != typeof e ? s(t) : e
	}

	function s(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function f(t) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var p = "tooltips-portal",
		h = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && c(t, e)
			}(f, t);
			var e, n, i, l = u(f);

			function f() {
				var t, e, n, o;
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, f), t = l.call(this), e = s(t), o = function(e) {
					if (!(e.touches && e.touches.length > 1)) {
						var n, r;
						switch (e.type) {
							case "touchstart":
								n = e.touches[0].pageX, r = e.touches[0].pageY;
								break;
							default:
								n = e.pageX, r = e.pageY
						}
						t.setState({
							x: n,
							y: r
						})
					}
				}, (n = "handlePointerMove") in e ? Object.defineProperty(e, n, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[n] = o, t.state = {
					x: null,
					y: null,
					width: null
				};
				var i = document.getElementById(p);
				return i || ((i = document.createElement("div")).id = p, document.body.appendChild(i)), t.targetNode = i, t.contentNode = r.c.createRef(), t
			}
			return e = f, (n = [{
				key: "componentDidMount",
				value: function() {
					document.addEventListener("mousemove", this.handlePointerMove), document.addEventListener("touchstart", this.handlePointerMove), document.addEventListener("TooltipPosition", this.handlePointerMove)
				}
			}, {
				key: "componentDidUpdate",
				value: function() {
					null === this.state.width && this.measure()
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					document.removeEventListener("mousemove", this.handlePointerMove), document.removeEventListener("touchstart", this.handlePointerMove)
				}
			}, {
				key: "measure",
				value: function() {
					if (this.contentNode.current) {
						var t = this.contentNode.current.getBoundingClientRect();
						this.setState({
							width: t.width
						})
					}
				}
			}, {
				key: "render",
				value: function() {
					if (null === this.state.x || null === this.state.y) return null;
					var t = document.documentElement.clientWidth,
						e = null !== this.state.width ? t - (this.state.width + 8) : 1 / 0,
						n = Math.min(this.state.x, e);
					return Object(r.b)(r.c.createElement("div", {
						className: Object(o.a)("tooltip", this.props.variant && "tooltip--".concat(this.props.variant)),
						style: {
							left: n,
							top: this.state.y,
							visibility: null === this.state.width ? "hidden" : "visible"
						}
					}, r.c.createElement("div", {
						className: "tooltip__main",
						ref: this.contentNode
					}, this.props.children)), this.targetNode)
				}
			}]) && a(e.prototype, n), i && a(e, i), f
		}(r.a)
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return Mt
	}));
	var r = n(1),
		o = Math.abs,
		i = Math.atan,
		a = Math.atan2,
		c = (Math.ceil, Math.cos),
		u = Math.exp,
		l = Math.floor,
		s = Math.log,
		f = Math.max,
		p = Math.min,
		h = Math.pow,
		d = (Math.round, Math.sign || function(t) {
			return t > 0 ? 1 : t < 0 ? -1 : 0
		}),
		y = Math.sin,
		v = Math.tan,
		m = 1e-6,
		b = 1e-12,
		_ = Math.PI,
		g = _ / 2,
		x = _ / 4,
		w = Math.SQRT1_2,
		E = C(2),
		O = C(_),
		S = 2 * _,
		P = 180 / _,
		k = _ / 180;

	function j(t) {
		return t > 1 ? g : t < -1 ? -g : Math.asin(t)
	}

	function M(t) {
		return t > 1 ? 0 : t < -1 ? _ : Math.acos(t)
	}

	function C(t) {
		return t > 0 ? Math.sqrt(t) : 0
	}

	function N(t) {
		return (u(t) - u(-t)) / 2
	}

	function T(t) {
		return (u(t) + u(-t)) / 2
	}

	function R(t, e) {
		var n = c(e),
			r = function(t) {
				return t ? t / Math.sin(t) : 1
			}(M(n * c(t /= 2)));
		return [2 * n * y(t) * r, y(e) * r]
	}
	R.invert = function(t, e) {
		if (!(t * t + 4 * e * e > _ * _ + m)) {
			var n = t,
				r = e,
				i = 25;
			do {
				var a, u = y(n),
					l = y(n / 2),
					s = c(n / 2),
					f = y(r),
					p = c(r),
					h = y(2 * r),
					d = f * f,
					v = p * p,
					b = l * l,
					g = 1 - v * s * s,
					x = g ? M(p * s) * C(a = 1 / g) : a = 0,
					w = 2 * x * p * l - t,
					E = x * f - e,
					O = a * (v * b + x * p * s * d),
					S = a * (.5 * u * h - 2 * x * f * l),
					P = .25 * a * (h * l - x * f * v * u),
					k = a * (d * s + x * b * p),
					j = S * P - k * O;
				if (!j) break;
				var N = (E * S - w * k) / j,
					T = (w * P - E * O) / j;
				n -= N, r -= T
			} while ((o(N) > m || o(T) > m) && --i > 0);
			return [n, r]
		}
	};

	function A(t, e) {
		var n = v(e / 2),
			r = C(1 - n * n),
			o = 1 + r * c(t /= 2),
			i = y(t) * r / o,
			a = n / o,
			u = i * i,
			l = a * a;
		return [4 / 3 * i * (3 + u - 3 * l), 4 / 3 * a * (3 + 3 * u - l)]
	}
	A.invert = function(t, e) {
		if (e *= 3 / 8, !(t *= 3 / 8) && o(e) > 1) return null;
		var n = 1 + t * t + e * e,
			r = C((n - C(n * n - 4 * e * e)) / 2),
			i = j(r) / 3,
			u = r ? function(t) {
				return s(t + C(t * t - 1))
			}(o(e / r)) / 3 : function(t) {
				return s(t + C(t * t + 1))
			}(o(t)) / 3,
			l = c(i),
			f = T(u),
			p = f * f - l * l;
		return [2 * d(t) * a(N(u) * l, .25 - p), 2 * d(e) * a(f * y(i), .25 + p)]
	};
	var D = C(8),
		L = s(1 + E);

	function I(t, e) {
		var n = o(e);
		return n < x ? [t, s(v(x + e / 2))] : [t * c(n) * (2 * E - 1 / y(n)), d(e) * (2 * E * (n - x) - s(v(n / 2)))]
	}
	I.invert = function(t, e) {
		if ((r = o(e)) < L) return [t, 2 * i(u(e)) - g];
		var n, r, a = x,
			l = 25;
		do {
			var f = c(a / 2),
				p = v(a / 2);
			a -= n = (D * (a - x) - s(p) - r) / (D - f * f / (2 * p))
		} while (o(n) > b && --l > 0);
		return [t / (c(a) * (D - 1 / y(a))), d(e) * a]
	};

	function q(t, e) {
		var n, r = t * y(e),
			i = 30;
		do {
			e -= n = (e + y(e) - r) / (1 + c(e))
		} while (o(n) > m && --i > 0);
		return e / 2
	}

	function U(t, e, n) {
		function r(r, o) {
			return [t * r * c(o = q(n, o)), e * y(o)]
		}
		return r.invert = function(r, o) {
			return o = j(o / e), [r / (t * c(o)), j((2 * o + y(2 * o)) / n)]
		}, r
	}
	var z = U(E / g, E, _),
		F = 2.00276,
		H = 1.11072;

	function Y(t, e) {
		var n = q(_, e);
		return [F * t / (1 / c(e) + H / c(n)), (e + E * y(n)) / F]
	}
	Y.invert = function(t, e) {
		var n, r, i = F * e,
			a = e < 0 ? -x : x,
			u = 25;
		do {
			r = i - E * y(a), a -= n = (y(2 * a) + 2 * a - _ * y(r)) / (2 * c(2 * a) + 2 + _ * c(r) * E * c(a))
		} while (o(n) > m && --u > 0);
		return r = i - E * y(a), [t * (1 / c(r) + H / c(a)) / F, r]
	};

	function W(t, e) {
		return [t * c(e), e]
	}
	W.invert = function(t, e) {
		return [t / c(e), e]
	};
	U(1, 4 / _, _);

	function G(t, e) {
		var n = C(1 - y(e));
		return [2 / O * t * n, O * (1 - n)]
	}
	G.invert = function(t, e) {
		var n = (n = e / O - 1) * n;
		return [n > 0 ? t * C(_ / n) / 2 : 0, j(1 - n)]
	};
	var B = C(3);

	function V(t, e) {
		return [B * t * (2 * c(2 * e / 3) - 1) / O, B * O * y(e / 3)]
	}
	V.invert = function(t, e) {
		var n = 3 * j(e / (B * O));
		return [O * t / (B * (2 * c(2 * n / 3) - 1)), n]
	};

	function $(t) {
		var e = c(t);

		function n(t, n) {
			return [t * e, y(n) / e]
		}
		return n.invert = function(t, n) {
			return [t / e, j(n * e)]
		}, n
	}

	function Q(t, e) {
		var n = C(8 / (3 * _));
		return [n * t * (1 - o(e) / _), n * e]
	}
	Q.invert = function(t, e) {
		var n = C(8 / (3 * _)),
			r = e / n;
		return [t / (n * (1 - o(r) / _)), r]
	};

	function Z(t, e) {
		var n = C(4 - 3 * y(o(e)));
		return [2 / C(6 * _) * t * n, d(e) * C(2 * _ / 3) * (2 - n)]
	}
	Z.invert = function(t, e) {
		var n = 2 - o(e) / C(2 * _ / 3);
		return [t * C(6 * _) / (2 * n), d(e) * j((4 - n * n) / 3)]
	};

	function X(t, e) {
		var n = C(_ * (4 + _));
		return [2 / n * t * (1 + C(1 - 4 * e * e / (_ * _))), 4 / n * e]
	}
	X.invert = function(t, e) {
		var n = C(_ * (4 + _)) / 2;
		return [t * n / (1 + C(1 - e * e * (4 + _) / (4 * _))), e * n / 2]
	};

	function J(t, e) {
		var n = (2 + g) * y(e);
		e /= 2;
		for (var r = 0, i = 1 / 0; r < 10 && o(i) > m; r++) {
			var a = c(e);
			e -= i = (e + y(e) * (a + 2) - n) / (2 * a * (1 + a))
		}
		return [2 / C(_ * (4 + _)) * t * (1 + c(e)), 2 * C(_ / (4 + _)) * y(e)]
	}
	J.invert = function(t, e) {
		var n = e * C((4 + _) / _) / 2,
			r = j(n),
			o = c(r);
		return [t / (2 / C(_ * (4 + _)) * (1 + o)), j((r + n * (o + 2)) / (2 + g))]
	};

	function K(t, e) {
		return [t * (1 + c(e)) / C(2 + _), 2 * e / C(2 + _)]
	}
	K.invert = function(t, e) {
		var n = C(2 + _),
			r = e * n / 2;
		return [n * t / (1 + c(r)), r]
	};

	function tt(t, e) {
		for (var n = (1 + g) * y(e), r = 0, i = 1 / 0; r < 10 && o(i) > m; r++) e -= i = (e + y(e) - n) / (1 + c(e));
		return n = C(2 + _), [t * (1 + c(e)) / n, 2 * e / n]
	}
	tt.invert = function(t, e) {
		var n = 1 + g,
			r = C(n / 2);
		return [2 * t * r / (1 + c(e *= r)), j((e + y(e)) / n)]
	};
	var et = 3 + 2 * E;

	function nt(t, e) {
		var n = y(t /= 2),
			r = c(t),
			o = C(c(e)),
			a = c(e /= 2),
			u = y(e) / (a + E * r * o),
			l = C(2 / (1 + u * u)),
			f = C((E * a + (r + n) * o) / (E * a + (r - n) * o));
		return [et * (l * (f - 1 / f) - 2 * s(f)), et * (l * u * (f + 1 / f) - 2 * i(u))]
	}
	nt.invert = function(t, e) {
		if (!(n = A.invert(t / 1.2, 1.065 * e))) return null;
		var n, r = n[0],
			a = n[1],
			u = 20;
		t /= et, e /= et;
		do {
			var l = r / 2,
				h = a / 2,
				d = y(l),
				v = c(l),
				b = y(h),
				_ = c(h),
				x = c(a),
				O = C(x),
				S = b / (_ + E * v * O),
				P = S * S,
				k = C(2 / (1 + P)),
				j = (E * _ + (v + d) * O) / (E * _ + (v - d) * O),
				M = C(j),
				N = M - 1 / M,
				T = M + 1 / M,
				R = k * N - 2 * s(M) - t,
				D = k * S * T - 2 * i(S) - e,
				L = b && w * O * d * P / b,
				I = (E * v * _ + O) / (2 * (_ + E * v * O) * (_ + E * v * O) * O),
				q = -.5 * S * k * k * k,
				U = q * L,
				z = q * I,
				F = (F = 2 * _ + E * O * (v - d)) * F * M,
				H = (E * v * _ * O + x) / F,
				Y = -E * d * b / (O * F),
				W = N * U - 2 * H / M + k * (H + H / j),
				G = N * z - 2 * Y / M + k * (Y + Y / j),
				B = S * T * U - 2 * L / (1 + P) + k * T * L + k * S * (H - H / j),
				V = S * T * z - 2 * I / (1 + P) + k * T * I + k * S * (Y - Y / j),
				$ = G * B - V * W;
			if (!$) break;
			var Q = (D * G - R * V) / $,
				Z = (R * B - D * W) / $;
			r -= Q, a = f(-g, p(g, a - Z))
		} while ((o(Q) > m || o(Z) > m) && --u > 0);
		return o(o(a) - g) < m ? [0, a] : u && [r, a]
	};
	var rt = c(35 * k);

	function ot(t, e) {
		var n = v(e / 2);
		return [t * rt * C(1 - n * n), (1 + rt) * n]
	}
	ot.invert = function(t, e) {
		var n = e / (1 + rt);
		return [t && t / (rt * C(1 - n * n)), 2 * i(n)]
	};

	function it(t, e) {
		var n = e / 2,
			r = c(n);
		return [2 * t / O * c(e) * r * r, O * v(n)]
	}
	it.invert = function(t, e) {
		var n = i(e / O),
			r = c(n),
			o = 2 * n;
		return [t * O / 2 / (c(o) * r * r), o]
	};
	var at = function(t, e, n, r, i, a, u, l) {
		function s(o, s) {
			if (!s) return [t * o / _, 0];
			var f = s * s,
				p = t + f * (e + f * (n + f * r)),
				h = s * (i - 1 + f * (a - l + f * u)),
				d = (p * p + h * h) / (2 * h),
				v = o * j(p / d) / _;
			return [d * y(v), s * (1 + f * l) + d * (1 - c(v))]
		}
		return arguments.length < 8 && (l = 0), s.invert = function(s, f) {
			var p, h, d = _ * s / t,
				v = f,
				b = 50;
			do {
				var g = v * v,
					x = t + g * (e + g * (n + g * r)),
					w = v * (i - 1 + g * (a - l + g * u)),
					E = x * x + w * w,
					O = 2 * w,
					S = E / O,
					P = S * S,
					k = j(x / S) / _,
					M = d * k,
					N = x * x,
					T = (2 * e + g * (4 * n + 6 * g * r)) * v,
					R = i + g * (3 * a + 5 * g * u),
					A = (2 * (x * T + w * (R - 1)) * O - E * (2 * (R - 1))) / (O * O),
					D = c(M),
					L = y(M),
					I = S * D,
					q = S * L,
					U = d / _ * (1 / C(1 - N / P)) * (T * S - x * A) / P,
					z = q - s,
					F = v * (1 + g * l) + S - I - f,
					H = A * L + I * U,
					Y = I * k,
					W = 1 + A - (A * D - q * U),
					G = q * k,
					B = H * G - W * Y;
				if (!B) break;
				d -= p = (F * H - z * W) / B, v -= h = (z * G - F * Y) / B
			} while ((o(p) > m || o(h) > m) && --b > 0);
			return [d, v]
		}, s
	};
	at(2.8284, -1.6988, .75432, -.18071, 1.76003, -.38914, .042555), at(2.583819, -.835827, .170354, -.038094, 1.543313, -.411435, .082742), at(5 / 6 * _, -.62636, -.0344, 0, 1.3493, -.05524, 0, .045);

	function ct(t, e) {
		var n = t * t,
			r = e * e;
		return [t * (1 - .162388 * r) * (.87 - 952426e-9 * n * n), e * (1 + r / 12)]
	}
	ct.invert = function(t, e) {
		var n, r = t,
			i = e,
			a = 50;
		do {
			var c = i * i;
			i -= n = (i * (1 + c / 12) - e) / (1 + c / 4)
		} while (o(n) > m && --a > 0);
		a = 50, t /= 1 - .162388 * c;
		do {
			var u = (u = r * r) * u;
			r -= n = (r * (.87 - 952426e-9 * u) - t) / (.87 - .00476213 * u)
		} while (o(n) > m && --a > 0);
		return [r, i]
	};
	at(2.6516, -.76534, .19123, -.047094, 1.36289, -.13965, .031762);

	function ut(t, e) {
		var n = d(t),
			r = d(e),
			i = c(e),
			u = c(t) * i,
			l = y(t) * i,
			s = y(r * e);
		t = o(a(l, s)), e = j(u), o(t - g) > m && (t %= g);
		var f = function(t, e) {
			if (e === g) return [0, 0];
			var n, r, i = y(e),
				a = i * i,
				u = a * a,
				l = 1 + u,
				s = 1 + 3 * u,
				f = 1 - u,
				p = j(1 / C(l)),
				h = f + a * l * p,
				d = (1 - i) / h,
				v = C(d),
				b = d * l,
				x = C(b),
				w = v * f;
			if (0 === t) return [0, -(w + a * x)];
			var E, O = c(e),
				S = 1 / O,
				P = 2 * i * O,
				k = (-h * O - (-3 * a + p * s) * P * (1 - i)) / (h * h),
				M = -S * P,
				N = -S * (a * l * k + d * s * P),
				T = -2 * S * (f * (.5 * k / v) - 2 * a * v * P),
				R = 4 * t / _;
			if (t > .222 * _ || e < _ / 4 && t > .175 * _) {
				if (n = (w + a * C(b * (1 + u) - w * w)) / (1 + u), t > _ / 4) return [n, n];
				var A = n,
					D = .5 * n;
				n = .5 * (D + A), r = 50;
				do {
					var L = n * (T + M * C(b - n * n)) + N * j(n / x) - R;
					if (!L) break;
					L < 0 ? D = n : A = n, n = .5 * (D + A)
				} while (o(A - D) > m && --r > 0)
			} else {
				n = m, r = 25;
				do {
					var I = n * n,
						q = C(b - I),
						U = T + M * q,
						z = n * U + N * j(n / x) - R;
					n -= E = q ? z / (U + (N - M * I) / q) : 0
				} while (o(E) > m && --r > 0)
			}
			return [n, -w - a * C(b - n * n)]
		}(t > _ / 4 ? g - t : t, e);
		return t > _ / 4 && (s = f[0], f[0] = -f[1], f[1] = -s), f[0] *= n, f[1] *= -r, f
	}
	ut.invert = function(t, e) {
		var n = d(t),
			r = d(e),
			i = -n * t,
			u = -r * e,
			l = u / i < 1,
			s = function(t, e) {
				var n = 0,
					r = 1,
					i = .5,
					a = 50;
				for (;;) {
					var u = i * i,
						l = C(i),
						s = j(1 / C(1 + u)),
						f = 1 - u + i * (1 + u) * s,
						p = (1 - l) / f,
						h = C(p),
						d = p * (1 + u),
						y = h * (1 - u),
						v = C(d - t * t),
						m = e + y + i * v;
					if (o(r - n) < b || 0 == --a || 0 === m) break;
					m > 0 ? n = i : r = i, i = .5 * (n + r)
				}
				if (!a) return null;
				var g = j(l),
					x = c(g),
					w = 1 / x,
					E = 2 * l * x,
					O = (-f * x - (-3 * i + s * (1 + 3 * u)) * E * (1 - l)) / (f * f);
				return [_ / 4 * (t * (-2 * w * (.5 * O / h * (1 - u) - 2 * i * h * E) + -w * E * v) + -w * (i * (1 + u) * O + p * (1 + 3 * u) * E) * j(t / C(d))), g]
			}(l ? u : i, l ? i : u),
			f = s[0],
			p = s[1],
			h = c(p);
		return l && (f = -g - f), [n * (a(y(f) * h, -y(p)) + _), r * j(c(f) * h)]
	};

	function lt(t, e) {
		var n, r, a, l, s, f;
		if (e < m) return [(l = y(t)) - (n = e * (t - l * (r = c(t))) / 4) * r, r + n * l, 1 - e * l * l / 2, t - n];
		if (e >= .999999) return n = (1 - e) / 4, a = 1 / (r = T(t)), [(l = ((f = u(2 * (f = t))) - 1) / (f + 1)) + n * ((s = r * N(t)) - t) / (r * r), a - n * l * a * (s - t), a + n * l * a * (s + t), 2 * i(u(t)) - g + n * (s - t) / r];
		var p = [1, 0, 0, 0, 0, 0, 0, 0, 0],
			h = [C(e), 0, 0, 0, 0, 0, 0, 0, 0],
			d = 0;
		for (r = C(1 - e), s = 1; o(h[d] / p[d]) > m && d < 8;) n = p[d++], h[d] = (n - r) / 2, p[d] = (n + r) / 2, r = C(n * r), s *= 2;
		a = s * p[d] * t;
		do {
			a = (j(l = h[d] * y(r = a) / p[d]) + a) / 2
		} while (--d);
		return [y(a), l = c(a), l / c(a - r), a]
	}

	function st(t, e) {
		if (!e) return t;
		if (1 === e) return s(v(t / 2 + x));
		for (var n = 1, r = C(1 - e), a = C(e), c = 0; o(a) > m; c++) {
			if (t % _) {
				var u = i(r * v(t) / n);
				u < 0 && (u += _), t += u + ~~(t / _) * _
			} else t += t;
			a = (n + r) / 2, r = C(n * r), a = ((n = a) - r) / 2
		}
		return t / (h(2, c) * n)
	}

	function ft(t, e) {
		var n = (E - 1) / (E + 1),
			r = C(1 - n * n),
			l = st(g, r * r),
			f = s(v(_ / 4 + o(e) / 2)),
			p = u(-1 * f) / C(n),
			h = function(t, e) {
				var n = t * t,
					r = e + 1,
					o = 1 - n - e * e;
				return [.5 * ((t >= 0 ? g : -g) - a(o, 2 * t)), -.25 * s(o * o + 4 * n) + .5 * s(r * r + n)]
			}(p * c(-1 * t), p * y(-1 * t)),
			m = function(t, e, n) {
				var r = o(t),
					a = N(o(e));
				if (r) {
					var c = 1 / y(r),
						u = 1 / (v(r) * v(r)),
						l = -(u + n * (a * a * c * c) - 1 + n),
						s = (-l + C(l * l - (n - 1) * u * 4)) / 2;
					return [st(i(1 / C(s)), n) * d(t), st(i(C((s / u - 1) / n)), 1 - n) * d(e)]
				}
				return [0, st(i(a), 1 - n) * d(e)]
			}(h[0], h[1], r * r);
		return [-m[1], (e >= 0 ? 1 : -1) * (.5 * l - m[0])]
	}
	ft.invert = function(t, e) {
		var n, r, o, c, l, f, p = (E - 1) / (E + 1),
			h = C(1 - p * p),
			d = st(g, h * h),
			y = (r = -t, o = h * h, (n = .5 * d - e) ? (c = lt(n, o), r ? (f = (l = lt(r, 1 - o))[1] * l[1] + o * c[0] * c[0] * l[0] * l[0], [
				[c[0] * l[2] / f, c[1] * c[2] * l[0] * l[1] / f],
				[c[1] * l[1] / f, -c[0] * c[2] * l[0] * l[2] / f],
				[c[2] * l[1] * l[2] / f, -o * c[0] * c[1] * l[0] / f]
			]) : [
				[c[0], 0],
				[c[1], 0],
				[c[2], 0]
			]) : [
				[0, (l = lt(r, 1 - o))[0] / l[1]],
				[1 / l[1], 0],
				[l[2] / l[1], 0]
			]),
			v = function(t, e) {
				var n = e[0] * e[0] + e[1] * e[1];
				return [(t[0] * e[0] + t[1] * e[1]) / n, (t[1] * e[0] - t[0] * e[1]) / n]
			}(y[0], y[1]);
		return [a(v[1], v[0]) / -1, 2 * i(u(-.5 * s(p * v[0] * v[0] + p * v[1] * v[1]))) - g]
	};

	function pt(t, e) {
		return [t * c(e) / c(e /= 2), 2 * y(e)]
	}
	pt.invert = function(t, e) {
		var n = 2 * j(e / 2);
		return [t * c(n / 2) / c(n), n]
	};
	n(4), $(0);
	var ht = .7109889596207567,
		dt = .0528035274542;

	function yt(t, e) {
		return e > -ht ? ((t = z(t, e))[1] += dt, t) : W(t, e)
	}
	yt.invert = function(t, e) {
		return e > -ht ? z.invert(t, e - dt) : W.invert(t, e)
	};

	function vt(t, e) {
		return o(e) > ht ? ((t = z(t, e))[1] -= e > 0 ? dt : -dt, t) : W(t, e)
	}
	vt.invert = function(t, e) {
		return o(e) > ht ? z.invert(t, e + (e > 0 ? dt : -dt)) : W.invert(t, e)
	};

	function mt(t, e) {
		return [3 / S * t * C(_ * _ / 3 - e * e), e]
	}
	mt.invert = function(t, e) {
		return [S / 3 * t / C(_ * _ / 3 - e * e), e]
	};
	var bt = _ / E;

	function _t(t, e) {
		return [t * (1 + C(c(e))) / 2, e / (c(e / 2) * c(t / 6))]
	}
	_t.invert = function(t, e) {
		var n = o(t),
			r = o(e),
			i = m,
			a = g;
		r < bt ? a *= r / bt : i += 6 * M(bt / r);
		for (var u = 0; u < 25; u++) {
			var l = y(a),
				s = C(c(a)),
				f = y(a / 2),
				p = c(a / 2),
				h = y(i / 6),
				d = c(i / 6),
				v = .5 * i * (1 + s) - n,
				b = a / (p * d) - r,
				_ = s ? -.25 * i * l / s : 0,
				x = .5 * (1 + s),
				w = (1 + .5 * a * f / p) / (p * d),
				E = a / p * (h / 6) / (d * d),
				O = _ * E - w * x,
				S = (v * E - b * x) / O,
				P = (b * _ - v * w) / O;
			if (a -= S, i -= P, o(S) < m && o(P) < m) break
		}
		return [t < 0 ? -i : i, e < 0 ? -a : a]
	};

	function gt(t, e) {
		var n = t * t,
			r = e * e;
		return [t * (.975534 + r * (-.0143059 * n - .119161 + -.0547009 * r)), e * (1.00384 + n * (.0802894 + -.02855 * r + 199025e-9 * n) + r * (.0998909 + -.0491032 * r))]
	}
	gt.invert = function(t, e) {
		var n = d(t) * _,
			r = e / 2,
			i = 50;
		do {
			var a = n * n,
				c = r * r,
				u = n * r,
				l = n * (.975534 + c * (-.0143059 * a - .119161 + -.0547009 * c)) - t,
				s = r * (1.00384 + a * (.0802894 + -.02855 * c + 199025e-9 * a) + c * (.0998909 + -.0491032 * c)) - e,
				f = .975534 - c * (.119161 + 3 * a * .0143059 + .0547009 * c),
				p = -u * (.238322 + .2188036 * c + .0286118 * a),
				h = u * (.1605788 + 7961e-7 * a + -.0571 * c),
				y = 1.00384 + a * (.0802894 + 199025e-9 * a) + c * (3 * (.0998909 - .02855 * a) - .245516 * c),
				v = p * h - y * f,
				b = (s * p - l * y) / v,
				g = (l * h - s * f) / v;
			n -= b, r -= g
		} while ((o(b) > m || o(g) > m) && --i > 0);
		return i && [n, r]
	};

	function xt(t, e) {
		return [y(t) / c(e), v(e) * c(t)]
	}
	xt.invert = function(t, e) {
		var n = t * t,
			r = e * e,
			o = r + 1,
			i = t ? w * C((o - C(n * n + 2 * n * (r - 1) + o * o)) / n + 1) : 1 / C(o);
		return [j(t * i), d(e) * M(i)]
	};

	function wt(t, e) {
		return [t, 1.25 * s(v(x + .4 * e))]
	}
	wt.invert = function(t, e) {
		return [t, 2.5 * i(u(.8 * e)) - .625 * _]
	};
	var Et = C(6),
		Ot = C(7);

	function St(t, e) {
		var n = j(7 * y(e) / (3 * Et));
		return [Et * t * (2 * c(2 * n / 3) - 1) / Ot, 9 * y(n / 3) / Ot]
	}
	St.invert = function(t, e) {
		var n = 3 * j(e * Ot / 9);
		return [t * Ot / (Et * (2 * c(2 * n / 3) - 1)), j(3 * y(n) * Et / 7)]
	};

	function Pt(t, e) {
		for (var n, r = (1 + w) * y(e), i = e, a = 0; a < 25 && (i -= n = (y(i / 2) + y(i) - r) / (.5 * c(i / 2) + c(i)), !(o(n) < m)); a++);
		return [t * (1 + 2 * c(i) / c(i / 2)) / (3 * E), 2 * C(3) * y(i / 2) / C(2 + E)]
	}
	Pt.invert = function(t, e) {
		var n = e * C(2 + E) / (2 * C(3)),
			r = 2 * j(n);
		return [3 * E * t / (1 + 2 * c(r) / c(r / 2)), j((n + y(r)) / (1 + w))]
	};

	function kt(t, e) {
		for (var n, r = C(6 / (4 + _)), i = (1 + _ / 4) * y(e), a = e / 2, u = 0; u < 25 && (a -= n = (a / 2 + y(a) - i) / (.5 + c(a)), !(o(n) < m)); u++);
		return [r * (.5 + c(a)) * t / 1.5, r * a]
	}
	kt.invert = function(t, e) {
		var n = C(6 / (4 + _)),
			r = e / n;
		return o(o(r) - g) < m && (r = r < 0 ? -g : g), [1.5 * t / (n * (.5 + c(r))), j((r / 2 + y(r)) / (1 + _ / 4))]
	};

	function jt(t, e) {
		var n = e * e,
			r = n * n;
		return [t * (.8707 - .131979 * n + r * (r * (.003971 * n - .001529 * r) - .013791)), e * (1.007226 + n * (.015085 + r * (.028874 * n - .044475 - .005916 * r)))]
	}
	jt.invert = function(t, e) {
		var n, r = e,
			i = 25;
		do {
			var a = r * r,
				c = a * a;
			r -= n = (r * (1.007226 + a * (.015085 + c * (.028874 * a - .044475 - .005916 * c))) - e) / (1.007226 + a * (.045255 + c * (.259866 * a - .311325 - .005916 * 11 * c)))
		} while (o(n) > m && --i > 0);
		return [t / (.8707 + (a = r * r) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), r]
	};
	var Mt = function() {
		return Object(r.l)(jt).scale(175.295)
	};

	function Ct(t, e) {
		return [t * (1 + c(e)) / 2, 2 * (e - v(e / 2))]
	}
	Ct.invert = function(t, e) {
		for (var n = e / 2, r = 0, i = 1 / 0; r < 10 && o(i) > m; ++r) {
			var a = c(e / 2);
			e -= i = (e - v(e / 2) - n) / (1 - .5 / (a * a))
		}
		return [2 * t / (1 + c(e)), e]
	};
	var Nt = 1.0148,
		Tt = .23185,
		Rt = -.14499,
		At = .02406,
		Dt = 1.790857183;

	function Lt(t, e) {
		var n = e * e;
		return [t, e * (Nt + n * n * (Tt + n * (Rt + At * n)))]
	}
	Lt.invert = function(t, e) {
		e > Dt ? e = Dt : e < -1.790857183 && (e = -1.790857183);
		var n, r = e;
		do {
			var i = r * r;
			r -= n = (r * (Nt + i * i * (Tt + i * (Rt + At * i))) - e) / (1.0148 + i * i * (1.1592500000000001 + i * (.21654 * i - 1.01493)))
		} while (o(n) > m);
		return [t, r]
	};

	function It(t, e) {
		if (o(e) < m) return [t, 0];
		var n = v(e),
			r = t * y(e);
		return [y(r) / n, e + (1 - c(r)) / n]
	}
	It.invert = function(t, e) {
		if (o(e) < m) return [t, 0];
		var n, r = t * t + e * e,
			i = .5 * e,
			a = 10;
		do {
			var u = v(i),
				l = 1 / c(i),
				s = r - 2 * e * i + i * i;
			i -= n = (u * s + 2 * (i - e)) / (2 + s * l * l + 2 * (i - e) * u)
		} while (o(n) > m && --a > 0);
		return u = v(i), [(o(e) < o(i + 1 / u) ? j(t * u) : d(t) * (M(o(t * u)) + g)) / y(i), i]
	};
	var qt = [
			[0, 90],
			[-90, 0],
			[0, 0],
			[90, 0],
			[180, 0],
			[0, -90]
		],
		Ut = ([
			[0, 2, 1],
			[0, 3, 2],
			[5, 1, 2],
			[5, 2, 3],
			[0, 1, 4],
			[0, 4, 3],
			[5, 4, 1],
			[5, 3, 4]
		].map((function(t) {
			return t.map((function(t) {
				return qt[t]
			}))
		})), 2 / C(3));

	function zt(t, e) {
		var n = G(t, e);
		return [n[0] * Ut, n[1]]
	}
	zt.invert = function(t, e) {
		return G.invert(t / Ut, e)
	};
	var Ft = [
		[.9986, -.062],
		[1, 0],
		[.9986, .062],
		[.9954, .124],
		[.99, .186],
		[.9822, .248],
		[.973, .31],
		[.96, .372],
		[.9427, .434],
		[.9216, .4958],
		[.8962, .5571],
		[.8679, .6176],
		[.835, .6769],
		[.7986, .7346],
		[.7597, .7903],
		[.7186, .8435],
		[.6732, .8936],
		[.6213, .9394],
		[.5722, .9761],
		[.5322, 1]
	];

	function Ht(t, e) {
		var n, r = p(18, 36 * o(e) / _),
			i = l(r),
			a = r - i,
			c = (n = Ft[i])[0],
			u = n[1],
			s = (n = Ft[++i])[0],
			f = n[1],
			h = (n = Ft[p(19, ++i)])[0],
			d = n[1];
		return [t * (s + a * (h - c) / 2 + a * a * (h - 2 * s + c) / 2), (e > 0 ? g : -g) * (f + a * (d - u) / 2 + a * a * (d - 2 * f + u) / 2)]
	}
	Ft.forEach((function(t) {
		t[1] *= 1.0144
	})), Ht.invert = function(t, e) {
		var n = e / g,
			r = 90 * n,
			i = p(18, o(r / 5)),
			a = f(0, l(i));
		do {
			var c = Ft[a][1],
				u = Ft[a + 1][1],
				s = Ft[p(19, a + 2)][1],
				h = s - c,
				d = s - 2 * u + c,
				y = 2 * (o(n) - u) / h,
				v = d / h,
				m = y * (1 - v * y * (1 - 2 * v * y));
			if (m >= 0 || 1 === a) {
				r = (e >= 0 ? 5 : -5) * (m + i);
				var _, x = 50;
				do {
					m = (i = p(18, o(r) / 5)) - (a = l(i)), c = Ft[a][1], u = Ft[a + 1][1], s = Ft[p(19, a + 2)][1], r -= (_ = (e >= 0 ? g : -g) * (u + m * (s - c) / 2 + m * m * (s - 2 * u + c) / 2) - e) * P
				} while (o(_) > b && --x > 0);
				break
			}
		} while (--a >= 0);
		var w = Ft[a][0],
			E = Ft[a + 1][0],
			O = Ft[p(19, a + 2)][0];
		return [t / (E + m * (O - w) / 2 + m * m * (O - 2 * E + w) / 2), r * k]
	};

	function Yt(t, e) {
		var n = v(e / 2),
			r = y(x * n);
		return [t * (.74482 - .34588 * r * r), 1.70711 * n]
	}
	Yt.invert = function(t, e) {
		var n = e / 1.70711,
			r = y(x * n);
		return [t / (.74482 - .34588 * r * r), 2 * i(n)]
	};

	function Wt(t, e) {
		if (o(e) < m) return [t, 0];
		var n = o(e / g),
			r = j(n);
		if (o(t) < m || o(o(e) - g) < m) return [0, d(e) * _ * v(r / 2)];
		var i = c(r),
			a = o(_ / t - t / _) / 2,
			u = a * a,
			l = i / (n + i - 1),
			s = l * (2 / n - 1),
			f = s * s,
			p = f + u,
			h = l - f,
			y = u + l;
		return [d(t) * _ * (a * h + C(u * h * h - p * (l * l - f))) / p, d(e) * _ * (s * y - a * C((u + 1) * p - y * y)) / p]
	}
	Wt.invert = function(t, e) {
		if (o(e) < m) return [t, 0];
		if (o(t) < m) return [0, g * y(2 * i(e / _))];
		var n = (t /= _) * t,
			r = (e /= _) * e,
			a = n + r,
			u = a * a,
			l = -o(e) * (1 + a),
			s = l - 2 * r + n,
			f = -2 * l + 1 + 2 * r + u,
			p = r / f + (2 * s * s * s / (f * f * f) - 9 * l * s / (f * f)) / 27,
			h = (l - s * s / (3 * f)) / f,
			v = 2 * C(-h / 3),
			b = M(3 * p / (h * v)) / 3;
		return [_ * (a - 1 + C(1 + 2 * (n - r) + u)) / (2 * t), d(e) * _ * (-v * c(b + _ / 3) - s / (3 * f))]
	};

	function Gt(t, e) {
		if (o(e) < m) return [t, 0];
		var n = o(e / g),
			r = j(n);
		if (o(t) < m || o(o(e) - g) < m) return [0, d(e) * _ * v(r / 2)];
		var i = c(r),
			a = o(_ / t - t / _) / 2,
			u = a * a,
			l = i * (C(1 + u) - a * i) / (1 + u * n * n);
		return [d(t) * _ * l, d(e) * _ * C(1 - l * (2 * a + l))]
	}
	Gt.invert = function(t, e) {
		if (!t) return [0, g * y(2 * i(e / _))];
		var n = o(t / _),
			r = (1 - n * n - (e /= _) * e) / (2 * n),
			c = C(r * r + 1);
		return [d(t) * _ * (c - r), d(e) * g * y(2 * a(C((1 - 2 * r * n) * (r + c) - n), C(c + r + n)))]
	};

	function Bt(t, e) {
		if (o(e) < m) return [t, 0];
		var n = e / g,
			r = j(n);
		if (o(t) < m || o(o(e) - g) < m) return [0, _ * v(r / 2)];
		var i = (_ / t - t / _) / 2,
			a = n / (1 + c(r));
		return [_ * (d(t) * C(i * i + 1 - a * a) - i), _ * a]
	}
	Bt.invert = function(t, e) {
		if (!e) return [t, 0];
		var n = e / _,
			r = (_ * _ * (1 - n * n) - t * t) / (2 * _ * t);
		return [t ? _ * (d(t) * C(r * r + 1) - r) : 0, g * y(2 * i(n))]
	};

	function Vt(t, e) {
		if (!e) return [t, 0];
		var n = o(e);
		if (!t || n === g) return [0, e];
		var r = n / g,
			i = r * r,
			a = (8 * r - i * (i + 2) - 5) / (2 * i * (r - 1)),
			c = a * a,
			u = r * a,
			l = i + c + 2 * u,
			s = r + 3 * a,
			f = t / g,
			p = f + 1 / f,
			h = d(o(t) - g) * C(p * p - 4),
			y = h * h,
			v = (h * (l + c - 1) + 2 * C(l * (i + c * y - 1) + (1 - i) * (i * (s * s + 4 * c) + 12 * u * c + 4 * c * c))) / (4 * l + y);
		return [d(t) * g * v, d(e) * g * C(1 + h * o(v) - v * v)]
	}
	Vt.invert = function(t, e) {
		var n;
		if (!t || !e) return [t, e];
		e /= _;
		var r = d(t) * t / g,
			i = (r * r - 1 + 4 * e * e) / o(r),
			a = i * i,
			c = 2 * e,
			u = 50;
		do {
			var l = c * c,
				s = (8 * c - l * (l + 2) - 5) / (2 * l * (c - 1)),
				f = (3 * c - l * c - 10) / (2 * l * c),
				p = s * s,
				h = c * s,
				y = c + s,
				v = y * y,
				b = c + 3 * s,
				x = -2 * y * (4 * h * p + (1 - 4 * l + 3 * l * l) * (1 + f) + p * (14 * l - 6 - a + (8 * l - 8 - 2 * a) * f) + h * (12 * l - 8 + (10 * l - 10 - a) * f)),
				w = C(v * (l + p * a - 1) + (1 - l) * (l * (b * b + 4 * p) + p * (12 * h + 4 * p)));
			c -= n = (i * (v + p - 1) + 2 * w - r * (4 * v + a)) / (i * (2 * s * f + 2 * y * (1 + f)) + x / w - 8 * y * (i * (-1 + p + v) + 2 * w) * (1 + f) / (a + 4 * v))
		} while (n > m && --u > 0);
		return [d(t) * (C(i * i + 4) + i) * _ / 4, g * c]
	};
	var $t = 4 * _ + 3 * C(3),
		Qt = 2 * C(2 * _ * C(3) / $t);
	U(Qt * C(3) / _, Qt, $t / 6);

	function Zt(t, e) {
		return [t * C(1 - 3 * e * e / (_ * _)), e]
	}
	Zt.invert = function(t, e) {
		return [t / C(1 - 3 * e * e / (_ * _)), e]
	};

	function Xt(t, e) {
		var n = .90631 * y(e),
			r = C(1 - n * n),
			o = C(2 / (1 + r * c(t /= 3)));
		return [2.66723 * r * o * y(t), 1.24104 * n * o]
	}
	Xt.invert = function(t, e) {
		var n = t / 2.66723,
			r = e / 1.24104,
			o = C(n * n + r * r),
			i = 2 * j(o / 2);
		return [3 * a(t * v(i), 2.66723 * o), o && j(e * y(i) / (1.24104 * .90631 * o))]
	};

	function Jt(t, e) {
		var n = c(e),
			r = c(t) * n,
			o = 1 - r,
			i = c(t = a(y(t) * n, -y(e))),
			u = y(t);
		return [u * (n = C(1 - r * r)) - i * o, -i * n - u * o]
	}
	Jt.invert = function(t, e) {
		var n = (t * t + e * e) / -2,
			r = C(-n * (2 + n)),
			o = e * n + t * r,
			i = t * n - e * r,
			c = C(i * i + o * o);
		return [a(r * o, c * (1 + n)), c ? -j(r * i / c) : 0]
	};

	function Kt(t, e) {
		var n = R(t, e);
		return [(n[0] + t / g) / 2, (n[1] + e) / 2]
	}
	Kt.invert = function(t, e) {
		var n = t,
			r = e,
			i = 25;
		do {
			var a, u = c(r),
				l = y(r),
				s = y(2 * r),
				f = l * l,
				p = u * u,
				h = y(n),
				d = c(n / 2),
				v = y(n / 2),
				b = v * v,
				_ = 1 - p * d * d,
				x = _ ? M(u * d) * C(a = 1 / _) : a = 0,
				w = .5 * (2 * x * u * v + n / g) - t,
				E = .5 * (x * l + r) - e,
				O = .5 * a * (p * b + x * u * d * f) + .5 / g,
				S = a * (h * s / 4 - x * l * v),
				P = .125 * a * (s * v - x * l * p * h),
				k = .5 * a * (f * d + x * b * u) + .5,
				j = S * P - k * O,
				N = (E * S - w * k) / j,
				T = (w * P - E * O) / j;
			n -= N, r -= T
		} while ((o(N) > m || o(T) > m) && --i > 0);
		return [n, r]
	}
}, function(t, e, n) {
	"use strict";
	n.r(e), n.d(e, "quadtree", (function() {
		return c
	}));

	function r(t, e, n, r) {
		if (isNaN(e) || isNaN(n)) return t;
		var o, i, a, c, u, l, s, f, p, h = t._root,
			d = {
				data: r
			},
			y = t._x0,
			v = t._y0,
			m = t._x1,
			b = t._y1;
		if (!h) return t._root = d, t;
		for (; h.length;)
			if ((l = e >= (i = (y + m) / 2)) ? y = i : m = i, (s = n >= (a = (v + b) / 2)) ? v = a : b = a, o = h, !(h = h[f = s << 1 | l])) return o[f] = d, t;
		if (c = +t._x.call(null, h.data), u = +t._y.call(null, h.data), e === c && n === u) return d.next = h, o ? o[f] = d : t._root = d, t;
		do {
			o = o ? o[f] = new Array(4) : t._root = new Array(4), (l = e >= (i = (y + m) / 2)) ? y = i : m = i, (s = n >= (a = (v + b) / 2)) ? v = a : b = a
		} while ((f = s << 1 | l) == (p = (u >= a) << 1 | c >= i));
		return o[p] = h, o[f] = d, t
	}
	var o = function(t, e, n, r, o) {
		this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = o
	};

	function i(t) {
		return t[0]
	}

	function a(t) {
		return t[1]
	}

	function c(t, e, n) {
		var r = new u(null == e ? i : e, null == n ? a : n, NaN, NaN, NaN, NaN);
		return null == t ? r : r.addAll(t)
	}

	function u(t, e, n, r, o, i) {
		this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = o, this._y1 = i, this._root = void 0
	}

	function l(t) {
		for (var e = {
				data: t.data
			}, n = e; t = t.next;) n = n.next = {
			data: t.data
		};
		return e
	}
	var s = c.prototype = u.prototype;
	s.copy = function() {
		var t, e, n = new u(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
			r = this._root;
		if (!r) return n;
		if (!r.length) return n._root = l(r), n;
		for (t = [{
				source: r,
				target: n._root = new Array(4)
			}]; r = t.pop();)
			for (var o = 0; o < 4; ++o)(e = r.source[o]) && (e.length ? t.push({
				source: e,
				target: r.target[o] = new Array(4)
			}) : r.target[o] = l(e));
		return n
	}, s.add = function(t) {
		var e = +this._x.call(null, t),
			n = +this._y.call(null, t);
		return r(this.cover(e, n), e, n, t)
	}, s.addAll = function(t) {
		var e, n, o, i, a = t.length,
			c = new Array(a),
			u = new Array(a),
			l = 1 / 0,
			s = 1 / 0,
			f = -1 / 0,
			p = -1 / 0;
		for (n = 0; n < a; ++n) isNaN(o = +this._x.call(null, e = t[n])) || isNaN(i = +this._y.call(null, e)) || (c[n] = o, u[n] = i, o < l && (l = o), o > f && (f = o), i < s && (s = i), i > p && (p = i));
		for (f < l && (l = this._x0, f = this._x1), p < s && (s = this._y0, p = this._y1), this.cover(l, s).cover(f, p), n = 0; n < a; ++n) r(this, c[n], u[n], t[n]);
		return this
	}, s.cover = function(t, e) {
		if (isNaN(t = +t) || isNaN(e = +e)) return this;
		var n = this._x0,
			r = this._y0,
			o = this._x1,
			i = this._y1;
		if (isNaN(n)) o = (n = Math.floor(t)) + 1, i = (r = Math.floor(e)) + 1;
		else {
			if (!(n > t || t > o || r > e || e > i)) return this;
			var a, c, u = o - n,
				l = this._root;
			switch (c = (e < (r + i) / 2) << 1 | t < (n + o) / 2) {
				case 0:
					do {
						(a = new Array(4))[c] = l, l = a
					} while (i = r + (u *= 2), t > (o = n + u) || e > i);
					break;
				case 1:
					do {
						(a = new Array(4))[c] = l, l = a
					} while (i = r + (u *= 2), (n = o - u) > t || e > i);
					break;
				case 2:
					do {
						(a = new Array(4))[c] = l, l = a
					} while (r = i - (u *= 2), t > (o = n + u) || r > e);
					break;
				case 3:
					do {
						(a = new Array(4))[c] = l, l = a
					} while (r = i - (u *= 2), (n = o - u) > t || r > e)
			}
			this._root && this._root.length && (this._root = l)
		}
		return this._x0 = n, this._y0 = r, this._x1 = o, this._y1 = i, this
	}, s.data = function() {
		var t = [];
		return this.visit((function(e) {
			if (!e.length)
				do {
					t.push(e.data)
				} while (e = e.next)
		})), t
	}, s.extent = function(t) {
		return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
			[this._x0, this._y0],
			[this._x1, this._y1]
		]
	}, s.find = function(t, e, n) {
		var r, i, a, c, u, l, s, f = this._x0,
			p = this._y0,
			h = this._x1,
			d = this._y1,
			y = [],
			v = this._root;
		for (v && y.push(new o(v, f, p, h, d)), null == n ? n = 1 / 0 : (f = t - n, p = e - n, h = t + n, d = e + n, n *= n); l = y.pop();)
			if (!(!(v = l.node) || (i = l.x0) > h || (a = l.y0) > d || (c = l.x1) < f || (u = l.y1) < p))
				if (v.length) {
					var m = (i + c) / 2,
						b = (a + u) / 2;
					y.push(new o(v[3], m, b, c, u), new o(v[2], i, b, m, u), new o(v[1], m, a, c, b), new o(v[0], i, a, m, b)), (s = (e >= b) << 1 | t >= m) && (l = y[y.length - 1], y[y.length - 1] = y[y.length - 1 - s], y[y.length - 1 - s] = l)
				} else {
					var _ = t - +this._x.call(null, v.data),
						g = e - +this._y.call(null, v.data),
						x = _ * _ + g * g;
					if (x < n) {
						var w = Math.sqrt(n = x);
						f = t - w, p = e - w, h = t + w, d = e + w, r = v.data
					}
				} return r
	}, s.remove = function(t) {
		if (isNaN(i = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;
		var e, n, r, o, i, a, c, u, l, s, f, p, h = this._root,
			d = this._x0,
			y = this._y0,
			v = this._x1,
			m = this._y1;
		if (!h) return this;
		if (h.length)
			for (;;) {
				if ((l = i >= (c = (d + v) / 2)) ? d = c : v = c, (s = a >= (u = (y + m) / 2)) ? y = u : m = u, e = h, !(h = h[f = s << 1 | l])) return this;
				if (!h.length) break;
				(e[f + 1 & 3] || e[f + 2 & 3] || e[f + 3 & 3]) && (n = e, p = f)
			}
		for (; h.data !== t;)
			if (r = h, !(h = h.next)) return this;
		return (o = h.next) && delete h.next, r ? (o ? r.next = o : delete r.next, this) : e ? (o ? e[f] = o : delete e[f], (h = e[0] || e[1] || e[2] || e[3]) && h === (e[3] || e[2] || e[1] || e[0]) && !h.length && (n ? n[p] = h : this._root = h), this) : (this._root = o, this)
	}, s.removeAll = function(t) {
		for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
		return this
	}, s.root = function() {
		return this._root
	}, s.size = function() {
		var t = 0;
		return this.visit((function(e) {
			if (!e.length)
				do {
					++t
				} while (e = e.next)
		})), t
	}, s.visit = function(t) {
		var e, n, r, i, a, c, u = [],
			l = this._root;
		for (l && u.push(new o(l, this._x0, this._y0, this._x1, this._y1)); e = u.pop();)
			if (!t(l = e.node, r = e.x0, i = e.y0, a = e.x1, c = e.y1) && l.length) {
				var s = (r + a) / 2,
					f = (i + c) / 2;
				(n = l[3]) && u.push(new o(n, s, f, a, c)), (n = l[2]) && u.push(new o(n, r, f, s, c)), (n = l[1]) && u.push(new o(n, s, i, a, f)), (n = l[0]) && u.push(new o(n, r, i, s, f))
			} return this
	}, s.visitAfter = function(t) {
		var e, n = [],
			r = [];
		for (this._root && n.push(new o(this._root, this._x0, this._y0, this._x1, this._y1)); e = n.pop();) {
			var i = e.node;
			if (i.length) {
				var a, c = e.x0,
					u = e.y0,
					l = e.x1,
					s = e.y1,
					f = (c + l) / 2,
					p = (u + s) / 2;
				(a = i[0]) && n.push(new o(a, c, u, f, p)), (a = i[1]) && n.push(new o(a, f, u, l, p)), (a = i[2]) && n.push(new o(a, c, p, f, s)), (a = i[3]) && n.push(new o(a, f, p, l, s))
			}
			r.push(e)
		}
		for (; e = r.pop();) t(e.node, e.x0, e.y0, e.x1, e.y1);
		return this
	}, s.x = function(t) {
		return arguments.length ? (this._x = t, this) : this._x
	}, s.y = function(t) {
		return arguments.length ? (this._y = t, this) : this._y
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return a
	}));
	n(159);
	var r = n(0),
		o = (n(393), n.p + "assets/map-bg.svg");

	function i() {
		return (i = Object.assign || function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		}).apply(this, arguments)
	}

	function a(t) {
		return r.c.createElement("g", null, r.c.createElement("image", i({
			href: o
		}, t)))
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return p
	}));
	n(5), n(10), n(11), n(9), n(22), n(71), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(397);
	n(472);

	function i(t) {
		return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function a(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function c(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function u(t, e) {
		return (u = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function l(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = f(t);
			if (e) {
				var o = f(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return s(this, n)
		}
	}

	function s(t, e) {
		return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function f(t) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var p = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && u(t, e)
		}(s, t);
		var e, n, o, i = l(s);

		function s() {
			return a(this, s), i.apply(this, arguments)
		}
		return e = s, (n = [{
			key: "render",
			value: function(t) {
				if (!t.data.length) return this.renderEmpty();
				var e = t.data.reduce((function(t, e) {
					return Math.max(t, Math.abs(e.value))
				}), 0);
				return r.c.createElement("ol", {
					className: "list"
				}, t.data.map((function(n, o) {
					var i = "list__item";
					return n.disabled && (i += " list__item--disabled"), r.c.createElement("li", {
						class: i,
						onClick: this.handleClick.bind(this, n),
						onMouseEnter: this.handleMouseEnter.bind(this, n),
						onMouseLeave: this.handleMouseLeave
					}, r.c.createElement("div", {
						class: "list__bar" + (t.type ? " list__bar--".concat(t.type) : ""),
						style: {
							width: Math.round(Math.abs(n.value) / e * 100) + "%"
						}
					}), r.c.createElement("div", {
						className: "list__row"
					}, r.c.createElement("div", {
						className: "list__cell list__cell--counter"
					}, o + 1), r.c.createElement("div", {
						className: "list__cell list__cell--title",
						title: n.label
					}, r.c.createElement("span", null, n.label)), r.c.createElement("div", {
						className: "list__cell list__cell--value"
					}, n.formattedValue)))
				}), this))
			}
		}]) && c(e.prototype, n), o && c(e, o), s
	}(o.a)
}, , function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(50),
		i = n(30),
		a = n(8),
		c = n(62),
		u = [],
		l = u.sort,
		s = a((function() {
			u.sort(void 0)
		})),
		f = a((function() {
			u.sort(null)
		})),
		p = c("sort");
	r({
		target: "Array",
		proto: !0,
		forced: s || !f || !p
	}, {
		sort: function(t) {
			return void 0 === t ? l.call(i(this)) : l.call(i(this), o(t))
		}
	})
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return F
	}));
	n(5), n(10), n(11), n(9), n(105), n(25), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(24),
		i = (n(34), n(22), n(31), n(76), n(104), n(35), n(100)),
		a = n(169),
		c = n(78),
		u = n(84),
		l = (n(21), n(140), n(109), n(63), n(53)),
		s = n.n(l),
		f = n(15),
		p = n(49);
	n(474);

	function h(t) {
		return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function d(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function y(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function v(t, e) {
		return (v = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function m(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = g(t);
			if (e) {
				var o = g(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return b(this, n)
		}
	}

	function b(t, e) {
		return !e || "object" !== h(e) && "function" != typeof e ? _(t) : e
	}

	function _(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function g(t) {
		return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function x(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var w = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && v(t, e)
			}(c, t);
			var e, n, i, a = m(c);

			function c() {
				var t;
				d(this, c);
				for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
				return x(_(t = a.call.apply(a, [this].concat(n))), "handleClickBack", (function(e) {
					t.setState({
						parent: t.state.parent.parent ? t.state.parent.parent : null
					})
				})), t
			}
			return e = c, (n = [{
				key: "getInitialState",
				value: function() {
					return {
						parent: null
					}
				}
			}, {
				key: "componentWillMount",
				value: function() {
					this.updateParent(this.props)
				}
			}, {
				key: "componentWillReceiveProps",
				value: function(t) {
					this.updateParent(t)
				}
			}, {
				key: "updateParent",
				value: function(t) {
					if (t.current) {
						var e = null;
						if (!t.flatten) {
							var n = t.data.getDefault ? t.data.getDefault() : null;
							t.current.parent && t.data.contains(t.current) ? e = t.current.parent : n && n.isRoot && (e = n)
						}
						this.setState({
							parent: e
						})
					}
				}
			}, {
				key: "render",
				value: function(t, e) {
					return r.c.createElement("div", {
						className: Object(f.a)("tree", t.type && "tree--".concat(t.type), t.noWrap && "tree--nowrap")
					}, this.renderRootNode(t, e), this.renderList(t, e))
				}
			}, {
				key: "renderRootNode",
				value: function(t, e) {
					if (e.parent) {
						var n, o = ["tree__root__select"];
						return e.parent.isRoot || (n = r.c.createElement(p.a, {
							icon: "chevron",
							handleClick: this.handleClickBack
						}), o.push("tree__root__select--parent")), r.c.createElement("div", {
							className: "tree__item tree__root"
						}, r.c.createElement("button", {
							class: o.join(" "),
							type: "button",
							"aria-selected": !(!t.current || t.current !== e.parent) || null,
							disabled: !(!t.invalid || -1 === t.invalid.indexOf(e.parent)) || null,
							"data-disabled": !(!t.exclude || -1 === t.exclude.indexOf(e.parent)) || null,
							onClick: this.handleClickItem.bind(this, e.parent)
						}, e.parent.model.name), n)
					}
				}
			}, {
				key: "renderList",
				value: function(t, e) {
					var n;
					return !(n = t.flatten || !e.parent ? t.reverse ? t.data.collection.slice(0).reverse() : t.data.collection : s()(e.parent.children, ["model.name"])).length && t.emptyMessage ? r.c.createElement("ul", {
						className: "tree__list"
					}, r.c.createElement("li", {
						className: "tree__item"
					}, r.c.createElement("button", {
						className: "tree__item__select",
						type: "button",
						disabled: !0
					}, t.emptyMessage))) : r.c.createElement("ul", {
						className: "tree__list"
					}, n.map((function(e, n) {
						var i, a, c, u = ["tree__item__select"],
							l = 0;
						return e.node && (i = e.label, l = e.depth, e = e.node), !t.flatten && e.children && e.children.length && (a = r.c.createElement(p.a, {
							icon: "chevron",
							handleClick: this.handleClickChildren.bind(this, e)
						}), u.push("tree__item__select--parent")), t.showCounts && e.children && e.children.length && (c = " (".concat(e.children.length, ")")), r.c.createElement("li", {
							className: "tree__item"
						}, r.c.createElement("button", {
							type: "button",
							class: u.join(" "),
							"data-depth": t.flatten && l ? l : null,
							"aria-selected": t.current.model === e.model || null,
							disabled: !(!t.invalid || -1 === t.invalid.indexOf(e)) || null,
							"data-disabled": !(!t.exclude || -1 === t.exclude.indexOf(e)) || null,
							onClick: this.handleClickItem.bind(this, e)
						}, t.iconMap && t.iconMap[e.model.id] ? r.c.createElement(o.a, {
							id: t.iconMap[e.model.id]
						}) : null, r.c.createElement("span", {
							dangerouslySetInnerHTML: {
								__html: (i || e.model.name) + (c || "")
							}
						})), a)
					}), this))
				}
			}, {
				key: "handleClickItem",
				value: function(t) {
					this.props.handleClick(t)
				}
			}, {
				key: "handleClickChildren",
				value: function(t) {
					this.setState({
						parent: t
					})
				}
			}]) && y(e.prototype, n), i && y(e, i), c
		}(r.a),
		E = n(77);
	n(475);

	function O(t) {
		return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function S(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function P(t, e) {
		return (P = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function k(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = C(t);
			if (e) {
				var o = C(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return j(this, n)
		}
	}

	function j(t, e) {
		return !e || "object" !== O(e) && "function" != typeof e ? M(t) : e
	}

	function M(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function C(t) {
		return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function N(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var T = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && P(t, e)
		}(f, t);
		var e, n, l, s = k(f);

		function f(t) {
			var e;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, f), N(M(e = s.call(this)), "handleSearchInput", (function(t) {
				var n = t.target.value || "";
				e.setState({
					search: n,
					searching: "" !== n.trim()
				})
			})), N(M(e), "handleTreeClick", (function(t) {
				e.props.onTreeClick(t)
			})), N(M(e), "handleSearchClearClick", (function() {
				e.setState({
					search: "",
					searching: !1,
					searchActive: !1
				})
			})), N(M(e), "handleTabActivate", (function() {
				e.refPopoverBody && (e.refPopoverBody.scrollTop = 0)
			})), N(M(e), "handleSearchTriggerClick", (function() {
				var t = !e.state.searchActive,
					n = t,
					r = t ? e.props.current.model.name : null;
				e.setState({
					searchActive: t,
					searching: n,
					search: r
				}), t && (e.focusMobileSearchInput = !0)
			})), N(M(e), "handleCloseClick", (function() {
				e.props.onClose && e.props.onClose()
			})), e.state = {
				search: null,
				searching: !1,
				searchActive: !1
			}, e.mobileInputRef = r.c.createRef(), e
		}
		return e = f, (n = [{
			key: "render",
			value: function(t) {
				var e, n = t.data,
					a = t.maxHeight,
					c = n;
				if (this.state.searching && (c = n.map((function(t) {
						return {
							name: t.name,
							data: t.data.search ? t.data.search(this.state.search) : []
						}
					}), this)), this.props.searchable) {
					var u = !this.state.search || "" === this.state.search.trim();
					e = r.c.createElement("div", {
						class: "filter-popover__search" + (u ? " filter-popover__search--empty" : "")
					}, r.c.createElement("div", {
						className: "filter-popover__search__input"
					}, r.c.createElement("input", {
						type: "text",
						placeholder: "Search��",
						value: this.state.search,
						onInput: this.handleSearchInput
					}), r.c.createElement("button", {
						className: "filter-popover__search__clear",
						type: "button",
						"aria-label": "Clear search",
						onClick: this.handleSearchClearClick
					}, r.c.createElement(o.a, {
						id: "close"
					}))))
				}
				var l = "filter-popover";
				this.props.searchable && Array.isArray(c) && (l += " filter-popover--hasheader"), this.props.modifier && (l += " filter-popover--".concat(this.props.modifier));
				var s = 0;
				return c.forEach((function(t, e) {
					t.active && (s = e)
				})), r.c.createElement("div", {
					class: l,
					style: {
						height: a
					}
				}, r.c.createElement(i.b, {
					activeTabIndex: s,
					handleActivate: this.handleTabActivate
				}, r.c.createElement("div", {
					className: "filter-popover__header"
				}, this.renderMobileHeader(e), r.c.createElement("div", {
					className: "filter-popover__header__tablet"
				}, e), this.renderTablist(c)), this.renderPopoverBody(c)))
			}
		}, {
			key: "renderMobileHeader",
			value: function(t) {
				return r.c.createElement(r.c.Fragment, null, r.c.createElement("div", {
					className: "filter-popover__header__mobile"
				}, r.c.createElement("div", {
					className: "filter-popover__header__mobile__close"
				}, this.props.onClose && r.c.createElement("button", {
					type: "button",
					onClick: this.handleCloseClick,
					"aria-label": "Close"
				}, r.c.createElement(o.a, {
					id: "close"
				}))), r.c.createElement("div", {
					className: "filter-popover__header__mobile__input"
				}, r.c.createElement("label", {
					for: "filter-popover-input"
				}, this.props.label), r.c.createElement("input", {
					id: "filter-popover-input",
					ref: this.mobileInputRef,
					type: "text",
					value: this.state.searchActive ? this.state.search : this.props.current && this.props.current.model.name,
					onInput: this.handleSearchInput,
					readOnly: !this.state.searchActive
				})), this.props.searchable && r.c.createElement("div", {
					className: "filter-popover__header__mobile__trigger"
				}, this.state.searchActive ? r.c.createElement("button", {
					type: "button",
					"aria-label": "Cancel search",
					onClick: this.handleSearchTriggerClick
				}, r.c.createElement(o.a, {
					id: "close"
				})) : r.c.createElement("button", {
					type: "button",
					"aria-label": "Search",
					onClick: this.handleSearchTriggerClick
				}, r.c.createElement(o.a, {
					id: "search"
				})))))
			}
		}, {
			key: "renderTablist",
			value: function(t) {
				if (Array.isArray(t)) return r.c.createElement("div", {
					className: "filter-popover__header__tabs"
				}, r.c.createElement(a.a, null, t.map((function(t) {
					return r.c.createElement(c.b, {
						modifier: this.props.modifier
					}, t.name)
				}), this)))
			}
		}, {
			key: "renderPopoverBody",
			value: function(t) {
				var e;
				return e = Array.isArray(t) ? t.map((function(t) {
					return r.c.createElement(u.a, null, r.c.createElement(w, {
						current: this.props.current,
						exclude: this.props.disabled || [],
						invalid: this.props.invalid || [],
						data: t.data,
						flatten: this.state.searching,
						showCounts: !!t.showCounts || null,
						emptyMessage: "No results",
						type: this.props.modifier,
						noWrap: this.props.noWrap,
						handleClick: this.handleTreeClick
					}))
				}), this) : [r.c.createElement(w, {
					current: this.props.current,
					exclude: this.props.disabled || [],
					invalid: this.props.invalid || [],
					data: t,
					flatten: this.state.searching,
					reverse: this.props.reverse,
					iconMap: this.props.iconMap,
					type: this.props.modifier,
					noWrap: this.props.noWrap,
					handleClick: this.handleTreeClick
				})], r.c.createElement("div", {
					className: "filter-popover__body",
					ref: Object(E.d)(this, "refPopoverBody")
				}, e)
			}
		}, {
			key: "componentDidUpdate",
			value: function() {
				if (this.focusSearchInput || this.focusMobileSearchInput) {
					var t = this.focusMobileSearchInput ? this.mobileInputRef.current : this.base.querySelector("input");
					t && (t.focus(), this.focusMobileSearchInput && t.setSelectionRange(0, t.value.length)), this.focusSearchInput = this.focusMobileSearchInput = !1
				}
			}
		}]) && S(e.prototype, n), l && S(e, l), f
	}(r.a);
	n(476);

	function R(t) {
		return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function A(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function D(t, e) {
		return (D = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function L(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = U(t);
			if (e) {
				var o = U(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return I(this, n)
		}
	}

	function I(t, e) {
		return !e || "object" !== R(e) && "function" != typeof e ? q(t) : e
	}

	function q(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function U(t) {
		return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function z(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var F = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && D(t, e)
		}(c, t);
		var e, n, i, a = L(c);

		function c(t) {
			var e;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), z(q(e = a.call(this)), "handleEditClick", (function() {
				e.state.showPopover || (e.focusSearchInput = !0), e.state.showPopover || e.measure(), e.state.showPopover ? e.closePopover() : e.openPopover()
			})), z(q(e), "handleClearClick", (function() {
				e.props.handleSelect(e.props.default)
			})), z(q(e), "handleTreeClick", (function(t) {
				e.closePopover(!0), e.props.handleSelect(t)
			})), z(q(e), "handleDocumentMouseDown", (function(t) {
				e.state.showPopover && (e.base && e.base.contains(t.target) || e.closePopover())
			})), z(q(e), "handlePopoverClose", (function() {
				e.closePopover()
			})), z(q(e), "openPopover", (function() {
				e.setState({
					showPopover: !0
				}), e.props.handlePopoverToggle && e.props.handlePopoverToggle(!0)
			})), z(q(e), "closePopover", (function(t) {
				e.setState({
					showPopover: !1
				}), e.props.handlePopoverToggle && e.props.handlePopoverToggle(!1)
			})), z(q(e), "measure", (function() {
				if (e.base) {
					var t = e.base.getBoundingClientRect();
					e.setState({
						rect: t
					})
				}
			})), e.state = {
				showPopover: !1,
				rect: null
			}, e.lastWindowWidth = window.innerWidth, e
		}
		return e = c, (n = [{
			key: "componentDidMount",
			value: function() {
				document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("touchstart", this.handleDocumentMouseDown)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("touchstart", this.handleDocumentMouseDown)
			}
		}, {
			key: "render",
			value: function(t, e) {
				var n, i;
				n = t.data, t.default && t.current !== t.default && (i = r.c.createElement("button", {
					className: "queryselect__clear",
					type: "button",
					"aria-label": "Clear ".concat(t.label || ""),
					onClick: this.handleClearClick
				}, r.c.createElement(o.a, {
					id: "close"
				})));
				var a = "queryselect";
				t.id && (a += " queryselect--".concat(t.id));
				var c = 530;
				return e.rect && (c = Math.min(530, window.innerHeight - e.rect.bottom - 16)), r.c.createElement("div", {
					class: a
				}, r.c.createElement("div", {
					className: "queryselect__body"
				}, r.c.createElement("h1", null, t.label), r.c.createElement("div", {
					className: "queryselect__current"
				}, r.c.createElement("h2", {
					className: "queryselect__current__value"
				}, t.current.model.name), r.c.createElement("button", {
					type: "button",
					title: t.current.model.name,
					onClick: this.handleEditClick
				}, "Edit ".concat(t.label || ""))), i), this.state.showPopover && r.c.createElement(T, {
					data: n,
					label: t.label,
					current: t.current,
					searchable: t.searchable,
					maxHeight: c,
					modifier: t.id,
					iconMap: t.iconMap,
					reverse: t.reverse,
					noWrap: t.noWrap,
					onClose: this.handlePopoverClose,
					onTreeClick: this.handleTreeClick
				}))
			}
		}, {
			key: "componentDidUpdate",
			value: function() {
				if (this.focusSearchInput) {
					var t = this.base.querySelector("input");
					t && t.focus(), this.focusSearchInput = !1
				}
			}
		}]) && A(e.prototype, n), i && A(e, i), c
	}(r.a)
}, , , function(t, e, n) {
	var r = n(56);
	t.exports = r("document", "documentElement")
}, function(t, e, n) {
	var r = n(23);
	t.exports = function(t, e, n, o) {
		try {
			return o ? e(r(n)[0], n[1]) : e(n)
		} catch (e) {
			var i = t.return;
			throw void 0 !== i && r(i.call(t)), e
		}
	}
}, function(t, e, n) {
	var r = n(14),
		o = n(69),
		i = r("iterator"),
		a = Array.prototype;
	t.exports = function(t) {
		return void 0 !== t && (o.Array === t || a[i] === t)
	}
}, function(t, e, n) {
	var r = n(189),
		o = n(69),
		i = n(14)("iterator");
	t.exports = function(t) {
		if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
	}
}, function(t, e, n) {
	var r = n(14)("iterator"),
		o = !1;
	try {
		var i = 0,
			a = {
				next: function() {
					return {
						done: !!i++
					}
				},
				return: function() {
					o = !0
				}
			};
		a[r] = function() {
			return this
		}, Array.from(a, (function() {
			throw 2
		}))
	} catch (t) {}
	t.exports = function(t, e) {
		if (!e && !o) return !1;
		var n = !1;
		try {
			var i = {};
			i[r] = function() {
				return {
					next: function() {
						return {
							done: n = !0
						}
					}
				}
			}, t(i)
		} catch (t) {}
		return n
	}
}, function(t, e, n) {
	var r = n(41),
		o = "[" + n(199) + "]",
		i = RegExp("^" + o + o + "*"),
		a = RegExp(o + o + "*$"),
		c = function(t) {
			return function(e) {
				var n = String(r(e));
				return 1 & t && (n = n.replace(i, "")), 2 & t && (n = n.replace(a, "")), n
			}
		};
	t.exports = {
		start: c(1),
		end: c(2),
		trim: c(3)
	}
}, function(t, e, n) {
	var r = n(311);
	t.exports = function(t, e) {
		return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1
	}
}, function(t, e) {
	t.exports = function(t, e, n) {
		for (var r = -1, o = null == t ? 0 : t.length; ++r < o;)
			if (n(e, t[r])) return !0;
		return !1
	}
}, function(t, e, n) {
	var r = n(59),
		o = n(58);
	t.exports = function(t) {
		return o(t) && r(t)
	}
}, function(t, e, n) {
	var r = n(51)(n(36), "Set");
	t.exports = r
}, function(t, e, n) {
	var r = n(137),
		o = n(366);
	t.exports = function t(e, n, i, a, c) {
		var u = -1,
			l = e.length;
		for (i || (i = o), c || (c = []); ++u < l;) {
			var s = e[u];
			n > 0 && i(s) ? n > 1 ? t(s, n - 1, i, a, c) : r(c, s) : a || (c[c.length] = s)
		}
		return c
	}
}, function(t, e, n) {
	var r = n(23),
		o = n(50),
		i = n(14)("species");
	t.exports = function(t, e) {
		var n, a = r(t).constructor;
		return void 0 === a || null == (n = r(a)[i]) ? e : o(n)
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r, o = n(451),
		i = (r = o) && r.__esModule ? r : {
			default: r
		},
		a = n(81);
	var c = function(t) {
		for (var e = [], n = 0, r = t.length; n < r; n++) {
			var o = t[n];
			if (o.curve && "cubic" !== o.curve.type) {
				var a = t[n - 1],
					c = a.x,
					u = a.y,
					l = o.x,
					s = o.y;
				if ("arc" === o.curve.type)(0, i.default)({
					px: c,
					py: u,
					cx: l,
					cy: s,
					rx: o.curve.rx,
					ry: o.curve.ry,
					xAxisRotation: o.curve.xAxisRotation,
					largeArcFlag: o.curve.largeArcFlag,
					sweepFlag: o.curve.sweepFlag
				}).forEach((function(t) {
					var n = t.x1,
						r = t.y1,
						o = t.x2,
						i = t.y2,
						a = t.x,
						c = t.y;
					e.push({
						x: a,
						y: c,
						curve: {
							type: "cubic",
							x1: n,
							y1: r,
							x2: o,
							y2: i
						}
					})
				}));
				else if ("quadratic" === o.curve.type) {
					var f = c + 2 / 3 * (o.curve.x1 - c),
						p = u + 2 / 3 * (o.curve.y1 - u),
						h = l + 2 / 3 * (o.curve.x1 - l),
						d = s + 2 / 3 * (o.curve.y1 - s);
					e.push({
						x: l,
						y: s,
						curve: {
							type: "cubic",
							x1: f,
							y1: p,
							x2: h,
							y2: d
						}
					})
				}
			} else e.push(o)
		}
		return e
	};
	e.default = function(t) {
		return (0, a.applyFuncToShapes)(c, t)
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return o
	}));
	var r = n(0);
	n(420);

	function o(t) {
		var e = t.status,
			n = t.children;
		return r.c.createElement("div", {
			className: "map-actions"
		}, e ? r.c.createElement("p", {
			className: "map-actions__status"
		}, e) : null, r.c.createElement("div", {
			className: "map-actions__items"
		}, n))
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return i
	}));
	var r = n(0),
		o = n(49);

	function i() {
		return r.c.createElement(o.a, {
			icon: "info",
			kind: "rounded",
			handleClick: function() {
				var t = new Event("show-welcome-modal");
				window.dispatchEvent(t)
			}
		})
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return M
	}));
	n(5), n(10), n(11), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0);
	n(21), n(31), n(46), n(109), n(22), n(25), n(412);

	function o(t) {
		return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function a(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function c(t, e) {
		return (c = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function u(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = f(t);
			if (e) {
				var o = f(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return l(this, n)
		}
	}

	function l(t, e) {
		return !e || "object" !== o(e) && "function" != typeof e ? s(t) : e
	}

	function s(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function f(t) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function p(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var h = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && c(t, e)
			}(f, t);
			var e, n, o, l = u(f);

			function f() {
				var t;
				i(this, f);
				for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
				return p(s(t = l.call.apply(l, [this].concat(n))), "handleClick", (function(t) {
					var e = t.target;
					if (e.hasAttribute("target")) {
						t.preventDefault();
						var n = "height=350, width=450, top=" + (screen.height / 3 - 175) + ", left=" + (screen.width / 2 - 225) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0";
						window.open(e.href, "share", n)
					}
				})), t
			}
			return e = f, (n = [{
				key: "render",
				value: function(t) {
					var e = this,
						n = encodeURIComponent(t.url),
						o = document.querySelector('meta[property="og:title"]'),
						i = document.querySelector('meta[property="og:description"]'),
						a = document.querySelector('meta[name="twitter:site"]'),
						c = encodeURIComponent(o ? o.content : ""),
						u = encodeURIComponent(i ? i.content : ""),
						l = encodeURIComponent(a ? a.content.replace("@", "") : ""),
						s = "".concat(u).concat(encodeURIComponent("\n")).concat(n),
						f = t.message ? encodeURIComponent(t.message) : c,
						p = [{
							name: "Twitter",
							url: "http://twitter.com/intent/tweet?url=".concat(n, "&text=").concat(f, "&via=").concat(l)
						}, {
							name: "Facebook",
							url: "https://www.facebook.com/sharer.php?u=".concat(n)
						}, {
							name: "LinkedIn",
							url: "https://www.linkedin.com/shareArticle?mini=true&url=".concat(n)
						}, {
							name: "Email",
							url: "mailto:?subject=".concat(c, "&body=").concat(s),
							windowless: !0
						}, {
							name: "WhatsApp",
							url: "https://wa.me/?text=".concat(n)
						}],
						h = ["sharelist"];
					return t.kind && h.push("sharelist--".concat(t.kind)), r.c.createElement("ul", {
						class: h.join(" ")
					}, p.map((function(t) {
						return r.c.createElement("li", {
							className: "sharelist__item"
						}, r.c.createElement("a", {
							href: t.url,
							target: t.windowless ? null : "_blank",
							rel: "noopener noreferrer",
							onClick: e.handleClick
						}, t.name))
					})))
				}
			}]) && a(e.prototype, n), o && a(e, o), f
		}(r.a),
		d = (n(103), n(63), n(256), n(24));
	n(413);

	function y(t, e) {
		return function(t) {
			if (Array.isArray(t)) return t
		}(t) || function(t, e) {
			if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
			var n = [],
				r = !0,
				o = !1,
				i = void 0;
			try {
				for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
			} catch (t) {
				o = !0, i = t
			} finally {
				try {
					r || null == c.return || c.return()
				} finally {
					if (o) throw i
				}
			}
			return n
		}(t, e) || function(t, e) {
			if (!t) return;
			if ("string" == typeof t) return v(t, e);
			var n = Object.prototype.toString.call(t).slice(8, -1);
			"Object" === n && t.constructor && (n = t.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(t);
			if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
		}(t, e) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function v(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}

	function m(t) {
		var e = t.url,
			n = t.embedURL;
		return r.c.createElement("div", {
			className: "share-fields"
		}, r.c.createElement(b, {
			name: "copy",
			value: e,
			label: "Copy link"
		}), r.c.createElement(b, {
			name: "embed",
			value: '<iframe src="'.concat(n, '" width="').concat(640, '" height="').concat(360, '" frameborder="0" scrolling="no"></iframe>'),
			label: "Embed map"
		}))
	}

	function b(t) {
		var e = t.label,
			n = t.name,
			o = t.value,
			i = Object(r.g)(null),
			a = y(Object(r.h)(!1), 2),
			c = a[0],
			u = a[1],
			l = function(t) {
				i.current.select(), document.execCommand("copy"), u(!0), i.current.focus(), setTimeout((function() {
					u(!1)
				}), 2e3)
			};
		return r.c.createElement("div", {
			className: "share-fields__field ".concat(c ? "share-fields__field--copied" : null)
		}, r.c.createElement("label", {
			for: "share-fields-".concat(n)
		}, e), r.c.createElement("div", {
			className: "share-fields__input"
		}, r.c.createElement("button", {
			onClick: l,
			tabIndex: "-1"
		}, r.c.createElement("span", null, "Copy"), r.c.createElement(d.a, {
			id: "copy"
		})), r.c.createElement("input", {
			onClick: l,
			ref: i,
			type: "text",
			id: "share-fields-".concat(n),
			value: o,
			onFocus: function(t) {
				t.target.select()
			},
			readonly: "readonly"
		}), c && r.c.createElement("span", null, "Link copied to clipboard")))
	}
	n(414);

	function _(t) {
		var e = window.location.href.replace(/\?.*/, ""),
			n = "".concat(window.location.protocol, "//").concat(window.location.host).concat(__config.embed_path);
		return void 0 !== t.queryString && (e += "?" + t.queryString, n += "?" + t.queryString), r.c.createElement("div", {
			class: "share-popover"
		}, void 0 !== t.queryString && r.c.createElement(m, {
			url: e,
			embedURL: n
		}), r.c.createElement(h, {
			kind: "popover",
			url: e,
			message: t.message
		}))
	}
	var g = n(49);
	n(416);

	function x(t) {
		return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function w(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function E(t, e) {
		return (E = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function O(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = k(t);
			if (e) {
				var o = k(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return S(this, n)
		}
	}

	function S(t, e) {
		return !e || "object" !== x(e) && "function" != typeof e ? P(t) : e
	}

	function P(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function k(t) {
		return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function j(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var M = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && E(t, e)
		}(a, t);
		var e, n, o, i = O(a);

		function a(t) {
			var e;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, a), j(P(e = i.call(this, t)), "handleClick", (function() {
				if (e.state.open) return e.handleClose();
				e.setState({
					open: !0
				})
			})), j(P(e), "handleClose", (function() {
				e.setState({
					open: !1
				})
			})), j(P(e), "handleDocumentMouseDown", (function(t) {
				e.base && e.base.contains(t.target) || e.handleClose()
			})), e.state = {
				open: !1
			}, e
		}
		return e = a, (n = [{
			key: "componentDidMount",
			value: function() {
				document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("touchstart", this.handleDocumentMouseDown)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("touchstart", this.handleDocumentMouseDown)
			}
		}, {
			key: "render",
			value: function(t, e) {
				return r.c.createElement("div", {
					className: "share-button"
				}, r.c.createElement(g.a, {
					icon: "share",
					kind: "rounded",
					ariaExpanded: e.open,
					ariaLabel: "Share",
					handleClick: this.handleClick
				}), e.open ? r.c.createElement(_, {
					queryString: t.queryString,
					message: t.message,
					popoverAlign: t.popoverAlign,
					handleClose: this.handleClose
				}) : null)
			}
		}]) && w(e.prototype, n), o && w(e, o), a
	}(r.a)
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return v
	}));
	n(5), n(10), n(11), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(101),
		i = n(150);
	n(469);

	function a(t) {
		return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function c(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function u(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function l(t, e) {
		return (l = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function s(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = p(t);
			if (e) {
				var o = p(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return f(this, n)
		}
	}

	function f(t, e) {
		return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function p(t) {
		return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var h = Object(o.a)().domain([0, 1]).range([1.2 * Math.PI, 2.8 * Math.PI]),
		d = Object(i.a)().innerRadius(50 - 12 / 68 * 100).outerRadius(50).startAngle(h(0)).endAngle((function(t) {
			return h(t)
		})),
		y = Object(i.a)().innerRadius(50).outerRadius(50).startAngle(h(0)).endAngle(h(1)),
		v = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && l(t, e)
			}(a, t);
			var e, n, o, i = s(a);

			function a() {
				return c(this, a), i.apply(this, arguments)
			}
			return e = a, (n = [{
				key: "shouldComponentUpdate",
				value: function(t) {
					return this.props.value !== t.value
				}
			}, {
				key: "render",
				value: function(t) {
					var e = "donutchart";
					return t.type && (e += " donutchart--" + t.type), r.c.createElement("div", {
						class: e
					}, r.c.createElement("div", {
						className: "donutchart__canvas"
					}, r.c.createElement("svg", {
						viewBox: "0 0 100 100",
						preserveAspectRatio: "none"
					}, r.c.createElement("g", {
						transform: "translate(50, 50)"
					}, r.c.createElement("path", {
						className: "donutchart__outline",
						d: y()
					}), r.c.createElement("path", {
						className: "donutchart__fill",
						d: d(t.value)
					}))), r.c.createElement("p", {
						className: "donutchart__value"
					}, t.formattedValue)), t.title ? r.c.createElement("p", {
						className: "donutchart__title"
					}, t.title) : null)
				}
			}]) && u(e.prototype, n), o && u(e, o), a
		}(r.a)
}, function(t, e, n) {
	var r = n(3),
		o = n(20),
		i = n(166),
		a = [].slice,
		c = function(t) {
			return function(e, n) {
				var r = arguments.length > 2,
					o = r ? a.call(arguments, 2) : void 0;
				return t(r ? function() {
					("function" == typeof e ? e : Function(e)).apply(this, o)
				} : e, n)
			}
		};
	r({
		global: !0,
		bind: !0,
		forced: /MSIE .\./.test(i)
	}, {
		setTimeout: c(o.setTimeout),
		setInterval: c(o.setInterval)
	})
}, function(t, e) {
	t.exports = function(t, e) {
		for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
		return t
	}
}, function(t, e, n) {
	var r = n(94),
		o = n(59),
		i = n(127),
		a = n(42);
	t.exports = function(t, e, n) {
		if (!a(n)) return !1;
		var c = typeof e;
		return !!("number" == c ? o(n) && i(e, n.length) : "string" == c && e in n) && r(n[e], t)
	}
}, function(t, e, n) {
	var r = n(42),
		o = n(72),
		i = /^\s+|\s+$/g,
		a = /^[-+]0x[0-9a-f]+$/i,
		c = /^0b[01]+$/i,
		u = /^0o[0-7]+$/i,
		l = parseInt;
	t.exports = function(t) {
		if ("number" == typeof t) return t;
		if (o(t)) return NaN;
		if (r(t)) {
			var e = "function" == typeof t.valueOf ? t.valueOf() : t;
			t = r(e) ? e + "" : e
		}
		if ("string" != typeof t) return 0 === t ? t : +t;
		t = t.replace(i, "");
		var n = c.test(t);
		return n || u.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
	}
}, function(t, e, n) {
	var r = n(221);
	t.exports = function(t) {
		if (r(t)) throw TypeError("The method doesn't accept regular expressions");
		return t
	}
}, function(t, e, n) {
	var r = n(14)("match");
	t.exports = function(t) {
		var e = /./;
		try {
			"/./" [t](e)
		} catch (n) {
			try {
				return e[r] = !1, "/./" [t](e)
			} catch (t) {}
		}
		return !1
	}
}, , function(t, e, n) {
	var r = n(20),
		o = n(152),
		i = r.WeakMap;
	t.exports = "function" == typeof i && /native code/.test(o(i))
}, function(t, e, n) {
	"use strict";
	var r = n(8);

	function o(t, e) {
		return RegExp(t, e)
	}
	e.UNSUPPORTED_Y = r((function() {
		var t = o("a", "y");
		return t.lastIndex = 2, null != t.exec("abcd")
	})), e.BROKEN_CARET = r((function() {
		var t = o("^r", "gy");
		return t.lastIndex = 2, null != t.exec("str")
	}))
}, function(t, e) {
	t.exports = Object.is || function(t, e) {
		return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
	}
}, function(t, e, n) {
	"use strict";
	var r = n(183),
		o = n(184),
		i = {
			brackets: function(t) {
				return t + "[]"
			},
			indices: function(t, e) {
				return t + "[" + e + "]"
			},
			repeat: function(t) {
				return t
			}
		},
		a = Date.prototype.toISOString,
		c = {
			delimiter: "&",
			encode: !0,
			encoder: r.encode,
			encodeValuesOnly: !1,
			serializeDate: function(t) {
				return a.call(t)
			},
			skipNulls: !1,
			strictNullHandling: !1
		},
		u = function t(e, n, o, i, a, c, u, l, s, f, p, h) {
			var d = e;
			if ("function" == typeof u) d = u(n, d);
			else if (d instanceof Date) d = f(d);
			else if (null === d) {
				if (i) return c && !h ? c(n) : n;
				d = ""
			}
			if ("string" == typeof d || "number" == typeof d || "boolean" == typeof d || r.isBuffer(d)) return c ? [p(h ? n : c(n)) + "=" + p(c(d))] : [p(n) + "=" + p(String(d))];
			var y, v = [];
			if (void 0 === d) return v;
			if (Array.isArray(u)) y = u;
			else {
				var m = Object.keys(d);
				y = l ? m.sort(l) : m
			}
			for (var b = 0; b < y.length; ++b) {
				var _ = y[b];
				a && null === d[_] || (v = Array.isArray(d) ? v.concat(t(d[_], o(n, _), o, i, a, c, u, l, s, f, p, h)) : v.concat(t(d[_], n + (s ? "." + _ : "[" + _ + "]"), o, i, a, c, u, l, s, f, p, h)))
			}
			return v
		};
	t.exports = function(t, e) {
		var n = t,
			r = e || {};
		if (null !== r.encoder && void 0 !== r.encoder && "function" != typeof r.encoder) throw new TypeError("Encoder has to be a function.");
		var a = void 0 === r.delimiter ? c.delimiter : r.delimiter,
			l = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : c.strictNullHandling,
			s = "boolean" == typeof r.skipNulls ? r.skipNulls : c.skipNulls,
			f = "boolean" == typeof r.encode ? r.encode : c.encode,
			p = "function" == typeof r.encoder ? r.encoder : c.encoder,
			h = "function" == typeof r.sort ? r.sort : null,
			d = void 0 !== r.allowDots && r.allowDots,
			y = "function" == typeof r.serializeDate ? r.serializeDate : c.serializeDate,
			v = "boolean" == typeof r.encodeValuesOnly ? r.encodeValuesOnly : c.encodeValuesOnly;
		if (void 0 === r.format) r.format = o.default;
		else if (!Object.prototype.hasOwnProperty.call(o.formatters, r.format)) throw new TypeError("Unknown format option provided.");
		var m, b, _ = o.formatters[r.format];
		"function" == typeof r.filter ? n = (b = r.filter)("", n) : Array.isArray(r.filter) && (m = b = r.filter);
		var g, x = [];
		if ("object" != typeof n || null === n) return "";
		g = r.arrayFormat in i ? r.arrayFormat : "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
		var w = i[g];
		m || (m = Object.keys(n)), h && m.sort(h);
		for (var E = 0; E < m.length; ++E) {
			var O = m[E];
			s && null === n[O] || (x = x.concat(u(n[O], O, w, l, s, f ? p : null, b, h, d, y, _, v)))
		}
		return x.join(a)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(183),
		o = Object.prototype.hasOwnProperty,
		i = {
			allowDots: !1,
			allowPrototypes: !1,
			arrayLimit: 20,
			decoder: r.decode,
			delimiter: "&",
			depth: 5,
			parameterLimit: 1e3,
			plainObjects: !1,
			strictNullHandling: !1
		},
		a = function(t, e, n) {
			if (!t.length) return e;
			var r, o = t.shift();
			if ("[]" === o) r = (r = []).concat(a(t, e, n));
			else {
				r = n.plainObjects ? Object.create(null) : {};
				var i = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o,
					c = parseInt(i, 10);
				!isNaN(c) && o !== i && String(c) === i && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (r = [])[c] = a(t, e, n) : r[i] = a(t, e, n)
			}
			return r
		},
		c = function(t, e, n) {
			if (t) {
				var r = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
					i = /(\[[^[\]]*])/g,
					c = /(\[[^[\]]*])/.exec(r),
					u = c ? r.slice(0, c.index) : r,
					l = [];
				if (u) {
					if (!n.plainObjects && o.call(Object.prototype, u) && !n.allowPrototypes) return;
					l.push(u)
				}
				for (var s = 0; null !== (c = i.exec(r)) && s < n.depth;) {
					if (s += 1, !n.plainObjects && o.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes) return;
					l.push(c[1])
				}
				return c && l.push("[" + r.slice(c.index) + "]"), a(l, e, n)
			}
		};
	t.exports = function(t, e) {
		var n = e || {};
		if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
		if (n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : i.delimiter, n.depth = "number" == typeof n.depth ? n.depth : i.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : i.arrayLimit, n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" == typeof n.decoder ? n.decoder : i.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : i.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : i.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : i.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : i.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : i.strictNullHandling, "" === t || null == t) return n.plainObjects ? Object.create(null) : {};
		for (var a = "string" == typeof t ? function(t, e) {
				for (var n = {}, r = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), i = 0; i < r.length; ++i) {
					var a, c, u = r[i],
						l = -1 === u.indexOf("]=") ? u.indexOf("=") : u.indexOf("]=") + 1; - 1 === l ? (a = e.decoder(u), c = e.strictNullHandling ? null : "") : (a = e.decoder(u.slice(0, l)), c = e.decoder(u.slice(l + 1))), o.call(n, a) ? n[a] = [].concat(n[a]).concat(c) : n[a] = c
				}
				return n
			}(t, n) : t, u = n.plainObjects ? Object.create(null) : {}, l = Object.keys(a), s = 0; s < l.length; ++s) {
			var f = l[s],
				p = c(f, a[f], n);
			u = r.merge(u, p, n)
		}
		return r.compact(u)
	}
}, function(t, e, n) {
	n.p = window.EXPLORER_PUBLIC_PATH || "/"
}, function(t, e, n) {
	var r = n(29),
		o = n(33),
		i = n(23),
		a = n(88);
	t.exports = r ? Object.defineProperties : function(t, e) {
		i(t);
		for (var n, r = a(e), c = r.length, u = 0; c > u;) o.f(t, n = r[u++], e[n]);
		return t
	}
}, function(t, e, n) {
	var r = n(37),
		o = n(106).f,
		i = {}.toString,
		a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	t.exports.f = function(t) {
		return a && "[object Window]" == i.call(t) ? function(t) {
			try {
				return o(t)
			} catch (t) {
				return a.slice()
			}
		}(t) : o(r(t))
	}
}, function(t, e, n) {
	"use strict";
	var r = n(121),
		o = n(30),
		i = n(240),
		a = n(241),
		c = n(43),
		u = n(89),
		l = n(242);
	t.exports = function(t) {
		var e, n, s, f, p, h, d = o(t),
			y = "function" == typeof this ? this : Array,
			v = arguments.length,
			m = v > 1 ? arguments[1] : void 0,
			b = void 0 !== m,
			_ = l(d),
			g = 0;
		if (b && (m = r(m, v > 2 ? arguments[2] : void 0, 2)), null == _ || y == Array && a(_))
			for (n = new y(e = c(d.length)); e > g; g++) h = b ? m(d[g], g) : d[g], u(n, g, h);
		else
			for (p = (f = _.call(d)).next, n = new y; !(s = p.call(f)).done; g++) h = b ? i(f, m, [s.value, g], !0) : s.value, u(n, g, h);
		return n.length = g, n
	}
}, function(t, e, n) {
	"use strict";
	var r = n(191).IteratorPrototype,
		o = n(80),
		i = n(64),
		a = n(107),
		c = n(69),
		u = function() {
			return this
		};
	t.exports = function(t, e, n) {
		var l = e + " Iterator";
		return t.prototype = o(r, {
			next: i(1, n)
		}), a(t, l, !1, !0), c[l] = u, t
	}
}, function(t, e, n) {
	var r = n(27);
	t.exports = function(t) {
		if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
		return t
	}
}, function(t, e, n) {
	"use strict";
	var r = n(122),
		o = n(189);
	t.exports = r ? {}.toString : function() {
		return "[object " + o(this) + "]"
	}
}, function(t, e) {
	t.exports = function(t, e) {
		for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
		return r
	}
}, function(t, e, n) {
	var r = n(70),
		o = n(58);
	t.exports = function(t) {
		return o(t) && "[object Arguments]" == r(t)
	}
}, function(t, e, n) {
	var r = n(57),
		o = Object.prototype,
		i = o.hasOwnProperty,
		a = o.toString,
		c = r ? r.toStringTag : void 0;
	t.exports = function(t) {
		var e = i.call(t, c),
			n = t[c];
		try {
			t[c] = void 0;
			var r = !0
		} catch (t) {}
		var o = a.call(t);
		return r && (e ? t[c] = n : delete t[c]), o
	}
}, function(t, e) {
	var n = Object.prototype.toString;
	t.exports = function(t) {
		return n.call(t)
	}
}, function(t, e) {
	t.exports = function() {
		return !1
	}
}, function(t, e, n) {
	var r = n(70),
		o = n(128),
		i = n(58),
		a = {};
	a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
		return i(t) && o(t.length) && !!a[r(t)]
	}
}, function(t, e, n) {
	(function(t) {
		var r = n(195),
			o = e && !e.nodeType && e,
			i = o && "object" == typeof t && t && !t.nodeType && t,
			a = i && i.exports === o && r.process,
			c = function() {
				try {
					return a && a.binding && a.binding("util")
				} catch (t) {}
			}();
		t.exports = c
	}).call(this, n(126)(t))
}, function(t, e, n) {
	var r = n(130),
		o = n(283),
		i = Object.prototype.hasOwnProperty;
	t.exports = function(t) {
		if (!r(t)) return o(t);
		var e = [];
		for (var n in Object(t)) i.call(t, n) && "constructor" != n && e.push(n);
		return e
	}
}, function(t, e, n) {
	var r = n(197)(Object.keys, Object);
	t.exports = r
}, function(t, e, n) {
	var r = n(8),
		o = n(199);
	t.exports = function(t) {
		return r((function() {
			return !!o[t]() || "�𡯁����" != "�𡯁����" [t]() || o[t].name !== t
		}))
	}
}, function(t, e, n) {
	var r = n(50),
		o = n(30),
		i = n(65),
		a = n(43),
		c = function(t) {
			return function(e, n, c, u) {
				r(n);
				var l = o(e),
					s = i(l),
					f = a(l.length),
					p = t ? f - 1 : 0,
					h = t ? -1 : 1;
				if (c < 2)
					for (;;) {
						if (p in s) {
							u = s[p], p += h;
							break
						}
						if (p += h, t ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value")
					}
				for (; t ? p >= 0 : f > p; p += h) p in s && (u = n(u, s[p], p, l));
				return u
			}
		};
	t.exports = {
		left: c(!1),
		right: c(!0)
	}
}, function(t, e, n) {
	var r = n(287),
		o = n(158),
		i = n(247),
		a = o((function(t, e) {
			return i(t) ? r(t, e) : []
		}));
	t.exports = a
}, function(t, e, n) {
	var r = n(156),
		o = n(245),
		i = n(246),
		a = n(134),
		c = n(129),
		u = n(157);
	t.exports = function(t, e, n, l) {
		var s = -1,
			f = o,
			p = !0,
			h = t.length,
			d = [],
			y = e.length;
		if (!h) return d;
		n && (e = a(e, c(n))), l ? (f = i, p = !1) : e.length >= 200 && (f = u, p = !1, e = new r(e));
		t: for (; ++s < h;) {
			var v = t[s],
				m = null == n ? v : n(v);
			if (v = l || 0 !== v ? v : 0, p && m == m) {
				for (var b = y; b--;)
					if (e[b] === m) continue t;
				d.push(v)
			} else f(e, m, l) || d.push(v)
		}
		return d
	}
}, function(t, e, n) {
	var r = n(289),
		o = n(92),
		i = n(133);
	t.exports = function() {
		this.size = 0, this.__data__ = {
			hash: new r,
			map: new(i || o),
			string: new r
		}
	}
}, function(t, e, n) {
	var r = n(290),
		o = n(295),
		i = n(296),
		a = n(297),
		c = n(298);

	function u(t) {
		var e = -1,
			n = null == t ? 0 : t.length;
		for (this.clear(); ++e < n;) {
			var r = t[e];
			this.set(r[0], r[1])
		}
	}
	u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = c, t.exports = u
}, function(t, e, n) {
	var r = n(91);
	t.exports = function() {
		this.__data__ = r ? r(null) : {}, this.size = 0
	}
}, function(t, e, n) {
	var r = n(198),
		o = n(292),
		i = n(42),
		a = n(200),
		c = /^\[object .+?Constructor\]$/,
		u = Function.prototype,
		l = Object.prototype,
		s = u.toString,
		f = l.hasOwnProperty,
		p = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	t.exports = function(t) {
		return !(!i(t) || o(t)) && (r(t) ? p : c).test(a(t))
	}
}, function(t, e, n) {
	var r, o = n(293),
		i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
	t.exports = function(t) {
		return !!i && i in t
	}
}, function(t, e, n) {
	var r = n(36)["__core-js_shared__"];
	t.exports = r
}, function(t, e) {
	t.exports = function(t, e) {
		return null == t ? void 0 : t[e]
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = this.has(t) && delete this.__data__[t];
		return this.size -= e ? 1 : 0, e
	}
}, function(t, e, n) {
	var r = n(91),
		o = Object.prototype.hasOwnProperty;
	t.exports = function(t) {
		var e = this.__data__;
		if (r) {
			var n = e[t];
			return "__lodash_hash_undefined__" === n ? void 0 : n
		}
		return o.call(e, t) ? e[t] : void 0
	}
}, function(t, e, n) {
	var r = n(91),
		o = Object.prototype.hasOwnProperty;
	t.exports = function(t) {
		var e = this.__data__;
		return r ? void 0 !== e[t] : o.call(e, t)
	}
}, function(t, e, n) {
	var r = n(91);
	t.exports = function(t, e) {
		var n = this.__data__;
		return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
	}
}, function(t, e) {
	t.exports = function() {
		this.__data__ = [], this.size = 0
	}
}, function(t, e, n) {
	var r = n(93),
		o = Array.prototype.splice;
	t.exports = function(t) {
		var e = this.__data__,
			n = r(e, t);
		return !(n < 0) && (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, !0)
	}
}, function(t, e, n) {
	var r = n(93);
	t.exports = function(t) {
		var e = this.__data__,
			n = r(e, t);
		return n < 0 ? void 0 : e[n][1]
	}
}, function(t, e, n) {
	var r = n(93);
	t.exports = function(t) {
		return r(this.__data__, t) > -1
	}
}, function(t, e, n) {
	var r = n(93);
	t.exports = function(t, e) {
		var n = this.__data__,
			o = r(n, t);
		return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
	}
}, function(t, e, n) {
	var r = n(95);
	t.exports = function(t) {
		var e = r(this, t).delete(t);
		return this.size -= e ? 1 : 0, e
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = typeof t;
		return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
	}
}, function(t, e, n) {
	var r = n(95);
	t.exports = function(t) {
		return r(this, t).get(t)
	}
}, function(t, e, n) {
	var r = n(95);
	t.exports = function(t) {
		return r(this, t).has(t)
	}
}, function(t, e, n) {
	var r = n(95);
	t.exports = function(t, e) {
		var n = r(this, t),
			o = n.size;
		return n.set(t, e), this.size += n.size == o ? 0 : 1, this
	}
}, function(t, e) {
	t.exports = function(t) {
		return this.__data__.set(t, "__lodash_hash_undefined__"), this
	}
}, function(t, e) {
	t.exports = function(t) {
		return this.__data__.has(t)
	}
}, function(t, e, n) {
	var r = n(312),
		o = n(313),
		i = n(314);
	t.exports = function(t, e, n) {
		return e == e ? i(t, e, n) : r(t, o, n)
	}
}, function(t, e) {
	t.exports = function(t, e, n, r) {
		for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
			if (e(t[i], i, t)) return i;
		return -1
	}
}, function(t, e) {
	t.exports = function(t) {
		return t != t
	}
}, function(t, e) {
	t.exports = function(t, e, n) {
		for (var r = n - 1, o = t.length; ++r < o;)
			if (t[r] === e) return r;
		return -1
	}
}, function(t, e, n) {
	var r = n(316),
		o = Math.max;
	t.exports = function(t, e, n) {
		return e = o(void 0 === e ? t.length - 1 : e, 0),
			function() {
				for (var i = arguments, a = -1, c = o(i.length - e, 0), u = Array(c); ++a < c;) u[a] = i[e + a];
				a = -1;
				for (var l = Array(e + 1); ++a < e;) l[a] = i[a];
				return l[e] = n(u), r(t, this, l)
			}
	}
}, function(t, e) {
	t.exports = function(t, e, n) {
		switch (n.length) {
			case 0:
				return t.call(e);
			case 1:
				return t.call(e, n[0]);
			case 2:
				return t.call(e, n[0], n[1]);
			case 3:
				return t.call(e, n[0], n[1], n[2])
		}
		return t.apply(e, n)
	}
}, function(t, e, n) {
	var r = n(318),
		o = n(320)(r);
	t.exports = o
}, function(t, e, n) {
	var r = n(319),
		o = n(201),
		i = n(83),
		a = o ? function(t, e) {
			return o(t, "toString", {
				configurable: !0,
				enumerable: !1,
				value: r(e),
				writable: !0
			})
		} : i;
	t.exports = a
}, function(t, e) {
	t.exports = function(t) {
		return function() {
			return t
		}
	}
}, function(t, e) {
	var n = Date.now;
	t.exports = function(t) {
		var e = 0,
			r = 0;
		return function() {
			var o = n(),
				i = 16 - (o - r);
			if (r = o, i > 0) {
				if (++e >= 800) return arguments[0]
			} else e = 0;
			return t.apply(void 0, arguments)
		}
	}
}, function(t, e, n) {
	var r = n(322);
	t.exports = function(t) {
		return r(t, 4)
	}
}, function(t, e, n) {
	var r = n(135),
		o = n(257),
		i = n(202),
		a = n(328),
		c = n(329),
		u = n(332),
		l = n(333),
		s = n(334),
		f = n(336),
		p = n(207),
		h = n(337),
		d = n(209),
		y = n(341),
		v = n(342),
		m = n(351),
		b = n(32),
		_ = n(125),
		g = n(42),
		x = n(60),
		w = "[object Arguments]",
		E = "[object Function]",
		O = "[object Object]",
		S = {};
	S[w] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object DataView]"] = S["[object Boolean]"] = S["[object Date]"] = S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Map]"] = S["[object Number]"] = S[O] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object Symbol]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S["[object Error]"] = S[E] = S["[object WeakMap]"] = !1, t.exports = function t(e, n, P, k, j, M) {
		var C, N = 1 & n,
			T = 2 & n,
			R = 4 & n;
		if (P && (C = j ? P(e, k, j, M) : P(e)), void 0 !== C) return C;
		if (!g(e)) return e;
		var A = b(e);
		if (A) {
			if (C = y(e), !N) return l(e, C)
		} else {
			var D = d(e),
				L = D == E || "[object GeneratorFunction]" == D;
			if (_(e)) return u(e, N);
			if (D == O || D == w || L && !j) {
				if (C = T || L ? {} : m(e), !N) return T ? f(e, c(C, e)) : s(e, a(C, e))
			} else {
				if (!S[D]) return j ? e : {};
				C = v(e, D, t, N)
			}
		}
		M || (M = new r);
		var I = M.get(e);
		if (I) return I;
		M.set(e, C);
		var q = R ? T ? h : p : T ? keysIn : x,
			U = A ? void 0 : q(e);
		return o(U || e, (function(r, o) {
			U && (r = e[o = r]), i(C, o, t(r, n, P, o, e, M))
		})), C
	}
}, function(t, e, n) {
	var r = n(92);
	t.exports = function() {
		this.__data__ = new r, this.size = 0
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = this.__data__,
			n = e.delete(t);
		return this.size = e.size, n
	}
}, function(t, e) {
	t.exports = function(t) {
		return this.__data__.get(t)
	}
}, function(t, e) {
	t.exports = function(t) {
		return this.__data__.has(t)
	}
}, function(t, e, n) {
	var r = n(92),
		o = n(133),
		i = n(132);
	t.exports = function(t, e) {
		var n = this.__data__;
		if (n instanceof r) {
			var a = n.__data__;
			if (!o || a.length < 199) return a.push([t, e]), this.size = ++n.size, this;
			n = this.__data__ = new i(a)
		}
		return n.set(t, e), this.size = n.size, this
	}
}, function(t, e, n) {
	var r = n(96),
		o = n(60);
	t.exports = function(t, e) {
		return t && r(e, o(e), t)
	}
}, function(t, e, n) {
	var r = n(96),
		o = n(203);
	t.exports = function(t, e) {
		return t && r(e, o(e), t)
	}
}, function(t, e, n) {
	var r = n(42),
		o = n(130),
		i = n(331),
		a = Object.prototype.hasOwnProperty;
	t.exports = function(t) {
		if (!r(t)) return i(t);
		var e = o(t),
			n = [];
		for (var c in t)("constructor" != c || !e && a.call(t, c)) && n.push(c);
		return n
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = [];
		if (null != t)
			for (var n in Object(t)) e.push(n);
		return e
	}
}, function(t, e, n) {
	(function(t) {
		var r = n(36),
			o = e && !e.nodeType && e,
			i = o && "object" == typeof t && t && !t.nodeType && t,
			a = i && i.exports === o ? r.Buffer : void 0,
			c = a ? a.allocUnsafe : void 0;
		t.exports = function(t, e) {
			if (e) return t.slice();
			var n = t.length,
				r = c ? c(n) : new t.constructor(n);
			return t.copy(r), r
		}
	}).call(this, n(126)(t))
}, function(t, e) {
	t.exports = function(t, e) {
		var n = -1,
			r = t.length;
		for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
		return e
	}
}, function(t, e, n) {
	var r = n(96),
		o = n(136);
	t.exports = function(t, e) {
		return r(t, o(t), e)
	}
}, function(t, e) {
	t.exports = function(t, e) {
		for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
			var a = t[n];
			e(a, n, t) && (i[o++] = a)
		}
		return i
	}
}, function(t, e, n) {
	var r = n(96),
		o = n(205);
	t.exports = function(t, e) {
		return r(t, o(t), e)
	}
}, function(t, e, n) {
	var r = n(208),
		o = n(205),
		i = n(203);
	t.exports = function(t) {
		return r(t, i, o)
	}
}, function(t, e, n) {
	var r = n(51)(n(36), "DataView");
	t.exports = r
}, function(t, e, n) {
	var r = n(51)(n(36), "Promise");
	t.exports = r
}, function(t, e, n) {
	var r = n(51)(n(36), "WeakMap");
	t.exports = r
}, function(t, e) {
	var n = Object.prototype.hasOwnProperty;
	t.exports = function(t) {
		var e = t.length,
			r = t.constructor(e);
		return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, r.input = t.input), r
	}
}, function(t, e, n) {
	var r = n(138),
		o = n(343),
		i = n(344),
		a = n(346),
		c = n(347),
		u = n(349),
		l = n(350);
	t.exports = function(t, e, n, s) {
		var f = t.constructor;
		switch (e) {
			case "[object ArrayBuffer]":
				return r(t);
			case "[object Boolean]":
			case "[object Date]":
				return new f(+t);
			case "[object DataView]":
				return o(t, s);
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]":
				return l(t, s);
			case "[object Map]":
				return i(t, s, n);
			case "[object Number]":
			case "[object String]":
				return new f(t);
			case "[object RegExp]":
				return a(t);
			case "[object Set]":
				return c(t, s, n);
			case "[object Symbol]":
				return u(t)
		}
	}
}, function(t, e, n) {
	var r = n(138);
	t.exports = function(t, e) {
		var n = e ? r(t.buffer) : t.buffer;
		return new t.constructor(n, t.byteOffset, t.byteLength)
	}
}, function(t, e, n) {
	var r = n(345),
		o = n(211),
		i = n(212);
	t.exports = function(t, e, n) {
		var a = e ? n(i(t), 1) : i(t);
		return o(a, r, new t.constructor)
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return t.set(e[0], e[1]), t
	}
}, function(t, e) {
	var n = /\w*$/;
	t.exports = function(t) {
		var e = new t.constructor(t.source, n.exec(t));
		return e.lastIndex = t.lastIndex, e
	}
}, function(t, e, n) {
	var r = n(348),
		o = n(211),
		i = n(139);
	t.exports = function(t, e, n) {
		var a = e ? n(i(t), 1) : i(t);
		return o(a, r, new t.constructor)
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return t.add(e), t
	}
}, function(t, e, n) {
	var r = n(57),
		o = r ? r.prototype : void 0,
		i = o ? o.valueOf : void 0;
	t.exports = function(t) {
		return i ? Object(i.call(t)) : {}
	}
}, function(t, e, n) {
	var r = n(138);
	t.exports = function(t, e) {
		var n = e ? r(t.buffer) : t.buffer;
		return new t.constructor(n, t.byteOffset, t.length)
	}
}, function(t, e, n) {
	var r = n(352),
		o = n(206),
		i = n(130);
	t.exports = function(t) {
		return "function" != typeof t.constructor || i(t) ? {} : r(o(t))
	}
}, function(t, e, n) {
	var r = n(42),
		o = Object.create,
		i = function() {
			function t() {}
			return function(e) {
				if (!r(e)) return {};
				if (o) return o(e);
				t.prototype = e;
				var n = new t;
				return t.prototype = void 0, n
			}
		}();
	t.exports = i
}, function(t, e, n) {
	"use strict";
	var r = n(50),
		o = n(27),
		i = [].slice,
		a = {},
		c = function(t, e, n) {
			if (!(e in a)) {
				for (var r = [], o = 0; o < e; o++) r[o] = "a[" + o + "]";
				a[e] = Function("C,a", "return new C(" + r.join(",") + ")")
			}
			return a[e](t, n)
		};
	t.exports = Function.bind || function(t) {
		var e = r(this),
			n = i.call(arguments, 1),
			a = function() {
				var r = n.concat(i.call(arguments));
				return this instanceof a ? c(e, r.length, r) : e.apply(t, r)
			};
		return o(e.prototype) && (a.prototype = e.prototype), a
	}
}, function(t, e, n) {
	var r = n(355),
		o = /^\./,
		i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
		a = /\\(\\)?/g,
		c = r((function(t) {
			var e = [];
			return o.test(t) && e.push(""), t.replace(i, (function(t, n, r, o) {
				e.push(r ? o.replace(a, "$1") : n || t)
			})), e
		}));
	t.exports = c
}, function(t, e, n) {
	var r = n(356);
	t.exports = function(t) {
		var e = r(t, (function(t) {
				return 500 === n.size && n.clear(), t
			})),
			n = e.cache;
		return e
	}
}, function(t, e, n) {
	var r = n(132);

	function o(t, e) {
		if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
		var n = function() {
			var r = arguments,
				o = e ? e.apply(this, r) : r[0],
				i = n.cache;
			if (i.has(o)) return i.get(o);
			var a = t.apply(this, r);
			return n.cache = i.set(o, a) || i, a
		};
		return n.cache = new(o.Cache || r), n
	}
	o.Cache = r, t.exports = o
}, function(t, e, n) {
	var r = n(358);
	t.exports = function(t) {
		return null == t ? "" : r(t)
	}
}, function(t, e, n) {
	var r = n(57),
		o = n(134),
		i = n(32),
		a = n(72),
		c = r ? r.prototype : void 0,
		u = c ? c.toString : void 0;
	t.exports = function t(e) {
		if ("string" == typeof e) return e;
		if (i(e)) return o(e, t) + "";
		if (a(e)) return u ? u.call(e) : "";
		var n = e + "";
		return "0" == n && 1 / e == -Infinity ? "-0" : n
	}
}, function(t, e, n) {}, function(t, e, n) {
	var r = n(361),
		o = n(60);
	t.exports = function(t, e) {
		return t && r(t, e, o)
	}
}, function(t, e, n) {
	var r = n(362)();
	t.exports = r
}, function(t, e) {
	t.exports = function(t) {
		return function(e, n, r) {
			for (var o = -1, i = Object(e), a = r(e), c = a.length; c--;) {
				var u = a[t ? c : ++o];
				if (!1 === n(i[u], u, i)) break
			}
			return e
		}
	}
}, function(t, e, n) {
	var r = n(59);
	t.exports = function(t, e) {
		return function(n, o) {
			if (null == n) return n;
			if (!r(n)) return t(n, o);
			for (var i = n.length, a = e ? i : -1, c = Object(n);
				(e ? a-- : ++a < i) && !1 !== o(c[a], a, c););
			return n
		}
	}
}, function(t, e, n) {}, function(t, e, n) {
	"use strict";
	var r = n(29),
		o = n(8),
		i = n(88),
		a = n(117),
		c = n(111),
		u = n(30),
		l = n(65),
		s = Object.assign,
		f = Object.defineProperty;
	t.exports = !s || o((function() {
		if (r && 1 !== s({
				b: 1
			}, s(f({}, "a", {
				enumerable: !0,
				get: function() {
					f(this, "b", {
						value: 3,
						enumerable: !1
					})
				}
			}), {
				b: 2
			})).b) return !0;
		var t = {},
			e = {},
			n = Symbol(),
			o = "abcdefghijklmnopqrst";
		return t[n] = 7, o.split("").forEach((function(t) {
			e[t] = t
		})), 7 != s({}, t)[n] || i(s({}, e)).join("") != o
	})) ? function(t, e) {
		for (var n = u(t), o = arguments.length, s = 1, f = a.f, p = c.f; o > s;)
			for (var h, d = l(arguments[s++]), y = f ? i(d).concat(f(d)) : i(d), v = y.length, m = 0; v > m;) h = y[m++], r && !p.call(d, h) || (n[h] = d[h]);
		return n
	} : s
}, function(t, e, n) {
	var r = n(57),
		o = n(124),
		i = n(32),
		a = r ? r.isConcatSpreadable : void 0;
	t.exports = function(t) {
		return i(t) || o(t) || !!(a && t && t[a])
	}
}, function(t, e, n) {
	var r = n(134),
		o = n(215),
		i = n(382),
		a = n(383),
		c = n(129),
		u = n(384),
		l = n(83);
	t.exports = function(t, e, n) {
		var s = -1;
		e = r(e.length ? e : [l], c(o));
		var f = i(t, (function(t, n, o) {
			return {
				criteria: r(e, (function(e) {
					return e(t)
				})),
				index: ++s,
				value: t
			}
		}));
		return a(f, (function(t, e) {
			return u(t, e, n)
		}))
	}
}, function(t, e, n) {
	var r = n(369),
		o = n(374),
		i = n(219);
	t.exports = function(t) {
		var e = o(t);
		return 1 == e.length && e[0][2] ? i(e[0][0], e[0][1]) : function(n) {
			return n === t || r(n, t, e)
		}
	}
}, function(t, e, n) {
	var r = n(135),
		o = n(216);
	t.exports = function(t, e, n, i) {
		var a = n.length,
			c = a,
			u = !i;
		if (null == t) return !c;
		for (t = Object(t); a--;) {
			var l = n[a];
			if (u && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
		}
		for (; ++a < c;) {
			var s = (l = n[a])[0],
				f = t[s],
				p = l[1];
			if (u && l[2]) {
				if (void 0 === f && !(s in t)) return !1
			} else {
				var h = new r;
				if (i) var d = i(f, p, s, t, e, h);
				if (!(void 0 === d ? o(p, f, 3, i, h) : d)) return !1
			}
		}
		return !0
	}
}, function(t, e, n) {
	var r = n(135),
		o = n(217),
		i = n(372),
		a = n(373),
		c = n(209),
		u = n(32),
		l = n(125),
		s = n(196),
		f = "[object Arguments]",
		p = "[object Array]",
		h = "[object Object]",
		d = Object.prototype.hasOwnProperty;
	t.exports = function(t, e, n, y, v, m) {
		var b = u(t),
			_ = u(e),
			g = b ? p : c(t),
			x = _ ? p : c(e),
			w = (g = g == f ? h : g) == h,
			E = (x = x == f ? h : x) == h,
			O = g == x;
		if (O && l(t)) {
			if (!l(e)) return !1;
			b = !0, w = !1
		}
		if (O && !w) return m || (m = new r), b || s(t) ? o(t, e, n, y, v, m) : i(t, e, g, n, y, v, m);
		if (!(1 & n)) {
			var S = w && d.call(t, "__wrapped__"),
				P = E && d.call(e, "__wrapped__");
			if (S || P) {
				var k = S ? t.value() : t,
					j = P ? e.value() : e;
				return m || (m = new r), v(k, j, n, y, m)
			}
		}
		return !!O && (m || (m = new r), a(t, e, n, y, v, m))
	}
}, function(t, e) {
	t.exports = function(t, e) {
		for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
			if (e(t[n], n, t)) return !0;
		return !1
	}
}, function(t, e, n) {
	var r = n(57),
		o = n(210),
		i = n(94),
		a = n(217),
		c = n(212),
		u = n(139),
		l = r ? r.prototype : void 0,
		s = l ? l.valueOf : void 0;
	t.exports = function(t, e, n, r, l, f, p) {
		switch (n) {
			case "[object DataView]":
				if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
				t = t.buffer, e = e.buffer;
			case "[object ArrayBuffer]":
				return !(t.byteLength != e.byteLength || !f(new o(t), new o(e)));
			case "[object Boolean]":
			case "[object Date]":
			case "[object Number]":
				return i(+t, +e);
			case "[object Error]":
				return t.name == e.name && t.message == e.message;
			case "[object RegExp]":
			case "[object String]":
				return t == e + "";
			case "[object Map]":
				var h = c;
			case "[object Set]":
				var d = 1 & r;
				if (h || (h = u), t.size != e.size && !d) return !1;
				var y = p.get(t);
				if (y) return y == e;
				r |= 2, p.set(t, e);
				var v = a(h(t), h(e), r, l, f, p);
				return p.delete(t), v;
			case "[object Symbol]":
				if (s) return s.call(t) == s.call(e)
		}
		return !1
	}
}, function(t, e, n) {
	var r = n(207),
		o = Object.prototype.hasOwnProperty;
	t.exports = function(t, e, n, i, a, c) {
		var u = 1 & n,
			l = r(t),
			s = l.length;
		if (s != r(e).length && !u) return !1;
		for (var f = s; f--;) {
			var p = l[f];
			if (!(u ? p in e : o.call(e, p))) return !1
		}
		var h = c.get(t);
		if (h && c.get(e)) return h == e;
		var d = !0;
		c.set(t, e), c.set(e, t);
		for (var y = u; ++f < s;) {
			var v = t[p = l[f]],
				m = e[p];
			if (i) var b = u ? i(m, v, p, e, t, c) : i(v, m, p, t, e, c);
			if (!(void 0 === b ? v === m || a(v, m, n, i, c) : b)) {
				d = !1;
				break
			}
			y || (y = "constructor" == p)
		}
		if (d && !y) {
			var _ = t.constructor,
				g = e.constructor;
			_ == g || !("constructor" in t) || !("constructor" in e) || "function" == typeof _ && _ instanceof _ && "function" == typeof g && g instanceof g || (d = !1)
		}
		return c.delete(t), c.delete(e), d
	}
}, function(t, e, n) {
	var r = n(218),
		o = n(60);
	t.exports = function(t) {
		for (var e = o(t), n = e.length; n--;) {
			var i = e[n],
				a = t[i];
			e[n] = [i, a, r(a)]
		}
		return e
	}
}, function(t, e, n) {
	var r = n(216),
		o = n(110),
		i = n(376),
		a = n(141),
		c = n(218),
		u = n(219),
		l = n(98);
	t.exports = function(t, e) {
		return a(t) && c(e) ? u(l(t), e) : function(n) {
			var a = o(n, t);
			return void 0 === a && a === e ? i(n, t) : r(e, a, 3)
		}
	}
}, function(t, e, n) {
	var r = n(377),
		o = n(378);
	t.exports = function(t, e) {
		return null != t && o(t, e, r)
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return null != t && e in Object(t)
	}
}, function(t, e, n) {
	var r = n(214),
		o = n(124),
		i = n(32),
		a = n(127),
		c = n(128),
		u = n(98);
	t.exports = function(t, e, n) {
		for (var l = -1, s = (e = r(e, t)).length, f = !1; ++l < s;) {
			var p = u(e[l]);
			if (!(f = null != t && n(t, p))) break;
			t = t[p]
		}
		return f || ++l != s ? f : !!(s = null == t ? 0 : t.length) && c(s) && a(p, s) && (i(t) || o(t))
	}
}, function(t, e, n) {
	var r = n(380),
		o = n(381),
		i = n(141),
		a = n(98);
	t.exports = function(t) {
		return i(t) ? r(a(t)) : o(t)
	}
}, function(t, e) {
	t.exports = function(t) {
		return function(e) {
			return null == e ? void 0 : e[t]
		}
	}
}, function(t, e, n) {
	var r = n(213);
	t.exports = function(t) {
		return function(e) {
			return r(e, t)
		}
	}
}, function(t, e, n) {
	var r = n(167),
		o = n(59);
	t.exports = function(t, e) {
		var n = -1,
			i = o(t) ? Array(t.length) : [];
		return r(t, (function(t, r, o) {
			i[++n] = e(t, r, o)
		})), i
	}
}, function(t, e) {
	t.exports = function(t, e) {
		var n = t.length;
		for (t.sort(e); n--;) t[n] = t[n].value;
		return t
	}
}, function(t, e, n) {
	var r = n(385);
	t.exports = function(t, e, n) {
		for (var o = -1, i = t.criteria, a = e.criteria, c = i.length, u = n.length; ++o < c;) {
			var l = r(i[o], a[o]);
			if (l) return o >= u ? l : l * ("desc" == n[o] ? -1 : 1)
		}
		return t.index - e.index
	}
}, function(t, e, n) {
	var r = n(72);
	t.exports = function(t, e) {
		if (t !== e) {
			var n = void 0 !== t,
				o = null === t,
				i = t == t,
				a = r(t),
				c = void 0 !== e,
				u = null === e,
				l = e == e,
				s = r(e);
			if (!u && !s && !a && t > e || a && c && l && !u && !s || o && c && l || !n && l || !i) return 1;
			if (!o && !a && !s && t < e || s && n && i && !o && !a || u && n && i || !c && i || !l) return -1
		}
		return 0
	}
}, function(t, e, n) {
	var r = n(36);
	t.exports = function() {
		return r.Date.now()
	}
}, function(t, e, n) {}, function(t, e) {
	t.exports = function(t, e, n, r) {
		for (var o = -1, i = null == t ? 0 : t.length; ++o < i;) {
			var a = t[o];
			e(r, a, n(a), t)
		}
		return r
	}
}, function(t, e, n) {
	var r = n(167);
	t.exports = function(t, e, n, o) {
		return r(t, (function(t, r, i) {
			e(o, t, n(t), i)
		})), o
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r, o = n(391),
		i = (r = o) && r.__esModule ? r : {
			default: r
		},
		a = n(81);
	e.default = function(t) {
		var e = void 0,
			n = void 0,
			r = void 0,
			o = void 0;
		return (0, a.getShapeArray)(t).map((function(t) {
			return (0, i.default)(t).map((function(t) {
				var i = t.x,
					a = t.y;
				("number" != typeof e || a > e) && (e = a), ("number" != typeof n || i < n) && (n = i), ("number" != typeof r || i > r) && (r = i), ("number" != typeof o || a < o) && (o = a)
			}))
		})), {
			bottom: e,
			center: {
				x: n + (r - n) / 2,
				y: o + (e - o) / 2
			},
			left: n,
			right: r,
			top: o
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r, o = function(t, e) {
			if (Array.isArray(t)) return t;
			if (Symbol.iterator in Object(t)) return function(t, e) {
				var n = [],
					r = !0,
					o = !1,
					i = void 0;
				try {
					for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
				} catch (t) {
					o = !0, i = t
				} finally {
					try {
						!r && c.return && c.return()
					} finally {
						if (o) throw i
					}
				}
				return n
			}(t, e);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		},
		i = n(81),
		a = n(251),
		c = (r = a) && r.__esModule ? r : {
			default: r
		},
		u = n(419),
		l = n(392);

	function s(t) {
		if (Array.isArray(t)) {
			for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
			return n
		}
		return Array.from(t)
	}
	var f = function(t) {
			var e = o(t[0], 2),
				n = e[0],
				r = e[1],
				a = o(t[1], 2),
				c = a[0],
				u = a[1],
				s = o(t[2], 2),
				f = s[0],
				p = s[1],
				h = (0, l.linearLength)(n, r, c, u),
				d = (0, l.linearLength)(c, u, f, p),
				y = (0, l.linearLength)(f, p, n, r);
			return (0, i.angleFromSides)(h, d, y)
		},
		p = function(t) {
			return t.reduce((function(t, e) {
				return !!e.curve || t
			}), !1)
		},
		h = function t(e, n, r) {
			var i = e.x,
				a = e.y,
				c = n.x,
				l = n.y,
				p = n.curve;
			if (function(t, e, n, r, o, i, a, c, u) {
					var l = [
						[a, c],
						[t, e],
						[o, i]
					];
					return f([
						[n, r],
						[o, i],
						[t, e]
					]) < u && f(l) < u
				}(i, a, p.x1, p.y1, c, l, p.x2, p.y2, r)) return [n];
			var h = (0, u.curvePoints)(e, n),
				d = o(h, 2),
				y = d[0],
				v = d[1];
			return [].concat(s(t(e, y, r)), s(t(y, v, r)))
		};
	e.default = function(t) {
		var e = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1];
		if (!p(t)) return t;
		var n = (0, c.default)(t),
			r = [];
		return n.map((function(t, o) {
			if (t.curve) {
				var i = n[o - 1];
				h(i, t, e).map((function(t) {
					return r.push(t)
				}))
			} else r.push(t)
		})), r
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.linearLength = void 0;
	var r, o = n(391),
		i = (r = o) && r.__esModule ? r : {
			default: r
		};
	var a = function(t, e, n, r) {
		return Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - r, 2))
	};
	e.linearLength = a, e.default = function(t, e) {
		var n = (0, i.default)(t, e);
		return n.reduce((function(t, e, r) {
			var o = e.x,
				i = e.y;
			if (!e.moveTo) {
				var c = n[r - 1],
					u = c.x,
					l = c.y;
				t += a(u, l, o, i)
			}
			return t
		}), 0)
	}
}, function(t, e, n) {}, function(t) {
	t.exports = JSON.parse('{"type":"Topology","objects":{"countries":{"type":"GeometryCollection","bbox":[-179.99999999999997,-90.00000000000003,180.00000000000014,83.64513000000001],"geometries":[{"type":"Polygon","id":"AF","arcs":[[0,1,2,3,4,5]]},{"type":"MultiPolygon","id":"AO","arcs":[[[6,7,8,9]],[[10,11,12]]]},{"type":"Polygon","id":"AL","arcs":[[13,14,15,16,17]]},{"type":"Polygon","id":"AE","arcs":[[18,19,20,21,22]]},{"type":"MultiPolygon","id":"AR","arcs":[[[23,24]],[[25,26,27,28,29,30]]]},{"type":"Polygon","id":"AM","arcs":[[31,32,33,34,35]]},{"type":"MultiPolygon","id":"AQ","arcs":[[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]]]},{"type":"Polygon","id":"TF","arcs":[[44]]},{"type":"MultiPolygon","id":"AU","arcs":[[[45]],[[46]]]},{"type":"Polygon","id":"AT","arcs":[[47,48,49,50,51,52,53]]},{"type":"MultiPolygon","id":"AZ","arcs":[[[54,-35]],[[55,56,-33,57,58]]]},{"type":"Polygon","id":"BI","arcs":[[59,60,61]]},{"type":"Polygon","id":"BE","arcs":[[62,63,64,65,66]]},{"type":"Polygon","id":"BJ","arcs":[[67,68,69,70,71]]},{"type":"Polygon","id":"BF","arcs":[[72,73,74,-70,75,76]]},{"type":"Polygon","id":"BD","arcs":[[77,78,79]]},{"type":"Polygon","id":"BG","arcs":[[80,81,82,83,84,85]]},{"type":"MultiPolygon","id":"BS","arcs":[[[86]],[[87]],[[88]]]},{"type":"Polygon","id":"BA","arcs":[[89,90,91]]},{"type":"Polygon","id":"BY","arcs":[[92,93,94,95,96]]},{"type":"Polygon","id":"BZ","arcs":[[97,98,99]]},{"type":"Polygon","id":"BO","arcs":[[100,101,102,103,-31]]},{"type":"Polygon","id":"BR","arcs":[[-27,104,-103,105,106,107,108,109,110,111,112]]},{"type":"Polygon","id":"BN","arcs":[[113,114]]},{"type":"Polygon","id":"BT","arcs":[[115,116]]},{"type":"Polygon","id":"BW","arcs":[[117,118,119,120]]},{"type":"Polygon","id":"CF","arcs":[[121,122,123,124,125,126,127]]},{"type":"MultiPolygon","id":"CA","arcs":[[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138,139,140,141]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]]]},{"type":"Polygon","id":"CH","arcs":[[-51,161,162,163]]},{"type":"MultiPolygon","id":"CL","arcs":[[[-24,164]],[[-30,165,166,-101]]]},{"type":"MultiPolygon","id":"CN","arcs":[[[167]],[[168,169,170,171,172,173,-117,174,175,176,177,-4,178,179,180,181,182,183]]]},{"type":"Polygon","id":"CI","arcs":[[184,185,186,187,-73,188]]},{"type":"Polygon","id":"CM","arcs":[[189,190,191,192,193,194,-128,195]]},{"type":"Polygon","id":"CD","arcs":[[196,197,-60,198,199,-10,200,-13,201,-126,202]]},{"type":"Polygon","id":"CG","arcs":[[-12,203,204,-196,-127,-202]]},{"type":"Polygon","id":"CO","arcs":[[205,206,207,208,209,-107,210]]},{"type":"Polygon","id":"CR","arcs":[[211,212,213,214]]},{"type":"Polygon","id":"CU","arcs":[[215]]},{"type":"Polygon","id":"-99","arcs":[[216,217]]},{"type":"Polygon","id":"CY","arcs":[[218,-218]]},{"type":"Polygon","id":"CZ","arcs":[[-53,219,220,221]]},{"type":"Polygon","id":"DE","arcs":[[222,223,-220,-52,-164,224,225,-64,226,227,228]]},{"type":"Polygon","id":"DJ","arcs":[[229,230,231,232]]},{"type":"MultiPolygon","id":"DK","arcs":[[[233]],[[-229,234]]]},{"type":"Polygon","id":"DO","arcs":[[235,236]]},{"type":"Polygon","id":"DZ","arcs":[[237,238,239,240,241,242,243,244]]},{"type":"Polygon","id":"EC","arcs":[[245,-206,246]]},{"type":"Polygon","id":"EG","arcs":[[247,248,249,250,251]]},{"type":"Polygon","id":"ER","arcs":[[252,253,254,-233]]},{"type":"Polygon","id":"ES","arcs":[[255,256,257,258]]},{"type":"Polygon","id":"EE","arcs":[[259,260,261]]},{"type":"Polygon","id":"ET","arcs":[[-232,262,263,264,265,266,267,-253]]},{"type":"Polygon","id":"FI","arcs":[[268,269,270,271]]},{"type":"MultiPolygon","id":"FJ","arcs":[[[272]],[[273]]]},{"type":"Polygon","id":"FK","arcs":[[274]]},{"type":"MultiPolygon","id":"FR","arcs":[[[275,276,277,-111]],[[278]],[[279,-225,-163,280,281,-257,282,-66]]]},{"type":"Polygon","id":"GA","arcs":[[283,284,-190,-205]]},{"type":"MultiPolygon","id":"GB","arcs":[[[285,286]],[[287]]]},{"type":"Polygon","id":"GE","arcs":[[288,289,-58,-32,290]]},{"type":"Polygon","id":"GH","arcs":[[291,-189,-77,292]]},{"type":"Polygon","id":"GN","arcs":[[293,294,295,296,297,298,-187]]},{"type":"Polygon","id":"GM","arcs":[[299,300]]},{"type":"Polygon","id":"GW","arcs":[[301,302,-297]]},{"type":"Polygon","id":"GQ","arcs":[[303,-191,-285]]},{"type":"MultiPolygon","id":"GR","arcs":[[[304]],[[305,-15,306,-84,307]]]},{"type":"Polygon","id":"GL","arcs":[[308]]},{"type":"Polygon","id":"GT","arcs":[[309,310,-100,311,312,313]]},{"type":"Polygon","id":"GY","arcs":[[314,315,-109,316]]},{"type":"Polygon","id":"HN","arcs":[[317,318,-313,319,320]]},{"type":"Polygon","id":"HR","arcs":[[321,-92,322,323,324,325]]},{"type":"Polygon","id":"HT","arcs":[[-237,326]]},{"type":"Polygon","id":"HU","arcs":[[-48,327,328,329,330,-326,331]]},{"type":"MultiPolygon","id":"ID","arcs":[[[332]],[[333,334]],[[335]],[[336]],[[337]],[[338]],[[339]],[[340]],[[341,342]],[[343]],[[344]],[[345,346]],[[347]]]},{"type":"Polygon","id":"IN","arcs":[[-177,348,-175,-116,-174,349,-80,350,351]]},{"type":"Polygon","id":"IE","arcs":[[352,-286]]},{"type":"Polygon","id":"IR","arcs":[[353,-6,354,355,356,357,-55,-34,-57,358]]},{"type":"Polygon","id":"IQ","arcs":[[359,360,361,362,363,364,-357]]},{"type":"Polygon","id":"IS","arcs":[[365]]},{"type":"Polygon","id":"IL","arcs":[[366,367,368,-252,369,370,371]]},{"type":"MultiPolygon","id":"IT","arcs":[[[372]],[[373]],[[374,375,-281,-162,-50]]]},{"type":"Polygon","id":"JM","arcs":[[376]]},{"type":"Polygon","id":"JO","arcs":[[-367,377,-363,378,379,-369,380]]},{"type":"MultiPolygon","id":"JP","arcs":[[[381]],[[382]],[[383]]]},{"type":"Polygon","id":"KZ","arcs":[[384,385,386,387,-181,388]]},{"type":"Polygon","id":"KE","arcs":[[389,390,391,392,-265,393]]},{"type":"Polygon","id":"KG","arcs":[[-389,-180,394,395]]},{"type":"Polygon","id":"KH","arcs":[[396,397,398,399]]},{"type":"Polygon","id":"KR","arcs":[[400,401]]},{"type":"Polygon","id":"-99","arcs":[[-18,402,403,404]]},{"type":"Polygon","id":"KW","arcs":[[405,406,-361]]},{"type":"Polygon","id":"LA","arcs":[[407,408,-172,409,-398]]},{"type":"Polygon","id":"LB","arcs":[[-371,410,411]]},{"type":"Polygon","id":"LR","arcs":[[412,413,-294,-186]]},{"type":"Polygon","id":"LY","arcs":[[414,-245,415,416,-250,417,418]]},{"type":"Polygon","id":"LK","arcs":[[419]]},{"type":"Polygon","id":"LS","arcs":[[420]]},{"type":"Polygon","id":"LT","arcs":[[421,422,423,-93,424]]},{"type":"Polygon","id":"LU","arcs":[[-226,-280,-65]]},{"type":"Polygon","id":"LV","arcs":[[425,-262,426,-94,-424]]},{"type":"Polygon","id":"MA","arcs":[[-242,427,428]]},{"type":"Polygon","id":"MD","arcs":[[429,430]]},{"type":"Polygon","id":"MG","arcs":[[431]]},{"type":"Polygon","id":"MX","arcs":[[432,-98,-311,433,434]]},{"type":"Polygon","id":"MK","arcs":[[-405,435,-85,-307,-14]]},{"type":"Polygon","id":"ML","arcs":[[436,-239,437,-74,-188,-299,438]]},{"type":"Polygon","id":"MM","arcs":[[439,-78,-350,-173,-409,440]]},{"type":"Polygon","id":"ME","arcs":[[441,-323,-91,442,-403,-17]]},{"type":"Polygon","id":"MN","arcs":[[443,-183]]},{"type":"Polygon","id":"MZ","arcs":[[444,445,446,447,448,449,450,451]]},{"type":"Polygon","id":"MR","arcs":[[452,453,454,-240,-437]]},{"type":"Polygon","id":"MW","arcs":[[-452,455,456]]},{"type":"MultiPolygon","id":"MY","arcs":[[[457,458]],[[-346,459,-115,460]]]},{"type":"Polygon","id":"NA","arcs":[[461,-8,462,-119,463]]},{"type":"Polygon","id":"NC","arcs":[[464]]},{"type":"Polygon","id":"NE","arcs":[[-75,-438,-238,-415,465,-194,466,-71]]},{"type":"Polygon","id":"NG","arcs":[[467,-72,-467,-193]]},{"type":"Polygon","id":"NI","arcs":[[468,-321,469,-213]]},{"type":"Polygon","id":"NL","arcs":[[-227,-63,470]]},{"type":"MultiPolygon","id":"NO","arcs":[[[471,-272,472,473]],[[474]],[[475]],[[476]]]},{"type":"Polygon","id":"NP","arcs":[[-349,-176]]},{"type":"MultiPolygon","id":"NZ","arcs":[[[477]],[[478]]]},{"type":"MultiPolygon","id":"OM","arcs":[[[479,480,-22,481]],[[-20,482]]]},{"type":"Polygon","id":"PK","arcs":[[-178,-352,483,-355,-5]]},{"type":"Polygon","id":"PA","arcs":[[484,-215,485,-208]]},{"type":"Polygon","id":"PE","arcs":[[-167,486,-247,-211,-106,-102]]},{"type":"MultiPolygon","id":"PH","arcs":[[[487]],[[488]],[[489]],[[490]],[[491]],[[492]],[[493]]]},{"type":"MultiPolygon","id":"PG","arcs":[[[494]],[[495]],[[-342,496]],[[497]]]},{"type":"Polygon","id":"PL","arcs":[[-224,498,499,-425,-97,500,501,-221]]},{"type":"Polygon","id":"PR","arcs":[[502]]},{"type":"Polygon","id":"KP","arcs":[[503,504,-402,505,-169]]},{"type":"Polygon","id":"PT","arcs":[[-259,506]]},{"type":"Polygon","id":"PY","arcs":[[-104,-105,-26]]},{"type":"Polygon","id":"PS","arcs":[[-381,-368]]},{"type":"Polygon","id":"QA","arcs":[[507,508]]},{"type":"Polygon","id":"RO","arcs":[[509,-431,510,511,-81,512,-330]]},{"type":"MultiPolygon","id":"RU","arcs":[[[513]],[[-500,514,-422]],[[515]],[[516]],[[517]],[[518]],[[519]],[[-504,-184,-444,-182,-388,520,-59,-290,521,522,-95,-427,-261,523,-269,-472,524]],[[525]],[[526]],[[527]]]},{"type":"Polygon","id":"RW","arcs":[[528,-61,-198,529]]},{"type":"Polygon","id":"EH","arcs":[[-241,-455,530,-428]]},{"type":"Polygon","id":"SA","arcs":[[531,-379,-362,-407,532,-509,533,-23,-481,534]]},{"type":"Polygon","id":"SD","arcs":[[535,536,-123,537,-418,-249,538,-254,-268,539]]},{"type":"Polygon","id":"SS","arcs":[[540,-266,-393,541,-203,-125,542,-536]]},{"type":"Polygon","id":"SN","arcs":[[543,-453,-439,-298,-303,544,-301]]},{"type":"MultiPolygon","id":"SB","arcs":[[[545]],[[546]],[[547]],[[548]],[[549]]]},{"type":"Polygon","id":"SL","arcs":[[550,-295,-414]]},{"type":"Polygon","id":"SV","arcs":[[551,-314,-319]]},{"type":"Polygon","id":"-99","arcs":[[-263,-231,552,553]]},{"type":"Polygon","id":"SO","arcs":[[-394,-264,-554,554]]},{"type":"Polygon","id":"RS","arcs":[[-86,-436,-404,-443,-90,-322,-331,-513]]},{"type":"Polygon","id":"SR","arcs":[[555,-277,556,-110,-316]]},{"type":"Polygon","id":"SK","arcs":[[-502,557,-328,-54,-222]]},{"type":"Polygon","id":"SI","arcs":[[-49,-332,-325,558,-375]]},{"type":"Polygon","id":"SE","arcs":[[-473,-271,559]]},{"type":"Polygon","id":"SZ","arcs":[[560,-448]]},{"type":"Polygon","id":"SY","arcs":[[-378,-372,-412,561,562,-364]]},{"type":"Polygon","id":"TD","arcs":[[-466,-419,-538,-122,-195]]},{"type":"Polygon","id":"TG","arcs":[[563,-293,-76,-69]]},{"type":"Polygon","id":"TH","arcs":[[564,-459,565,-441,-408,-397]]},{"type":"Polygon","id":"TJ","arcs":[[-395,-179,-3,566]]},{"type":"Polygon","id":"TM","arcs":[[-354,567,-386,568,-1]]},{"type":"Polygon","id":"TL","arcs":[[569,-334]]},{"type":"Polygon","id":"TT","arcs":[[570]]},{"type":"Polygon","id":"TN","arcs":[[-244,571,-416]]},{"type":"MultiPolygon","id":"TR","arcs":[[[-291,-36,-358,-365,-563,572]],[[-308,-83,573]]]},{"type":"Polygon","id":"TW","arcs":[[574]]},{"type":"Polygon","id":"TZ","arcs":[[-391,575,-445,-457,576,-199,-62,-529,577]]},{"type":"Polygon","id":"UG","arcs":[[-530,-197,-542,-392,-578]]},{"type":"Polygon","id":"UA","arcs":[[-523,578,-511,-430,-510,-329,-558,-501,-96]]},{"type":"Polygon","id":"UY","arcs":[[-113,579,-28]]},{"type":"MultiPolygon","id":"US","arcs":[[[580]],[[581]],[[582]],[[583]],[[584]],[[585,-435,586,-139]],[[587]],[[588]],[[589]],[[-141,590]]]},{"type":"Polygon","id":"UZ","arcs":[[-569,-385,-396,-567,-2]]},{"type":"Polygon","id":"VE","arcs":[[591,-317,-108,-210]]},{"type":"Polygon","id":"VN","arcs":[[592,-399,-410,-171]]},{"type":"MultiPolygon","id":"VU","arcs":[[[593]],[[594]]]},{"type":"Polygon","id":"YE","arcs":[[595,-535,-480]]},{"type":"Polygon","id":"ZA","arcs":[[-464,-118,596,-449,-561,-447,597],[-421]]},{"type":"Polygon","id":"ZM","arcs":[[-456,-451,598,-120,-463,-7,-200,-577]]},{"type":"Polygon","id":"ZW","arcs":[[-597,-121,-599,-450]]}]},"land":{"type":"MultiPolygon","arcs":[[[540,266,539],[123,542,536],[592,399,564,457,565,439,78,350,483,355,359,405,532,507,533,18,482,20,481,595,531,379,247,538,254,229,552,554,389,575,445,597,461,8,200,10,203,283,303,191,467,67,563,291,184,412,550,295,301,544,299,543,453,530,428,242,571,416,250,369,410,561,572,288,521,578,511,81,573,305,15,441,323,558,375,281,257,506,255,282,66,470,227,234,222,498,514,422,425,259,523,269,559,473,524,504,400,505,169],[386,520,55,358,567]],[[24,164]],[[556,275],[579,28,165,486,245,206,484,211,468,317,551,309,433,586,139,590,141,585,432,98,311,319,469,213,485,208,591,314,555,277,111]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[86]],[[87]],[[88]],[[459,113,460,346]],[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[167]],[[215]],[[216,218]],[[233]],[[235,326]],[[272]],[[273]],[[274]],[[278]],[[286,352]],[[287]],[[304]],[[308]],[[332]],[[334,569]],[[335]],[[336]],[[337]],[[338]],[[339]],[[340]],[[342,496]],[[343]],[[344]],[[347]],[[365]],[[372]],[[373]],[[376]],[[381]],[[382]],[[383]],[[419]],[[431]],[[464]],[[474]],[[475]],[[476]],[[477]],[[478]],[[487]],[[488]],[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]],[[497]],[[502]],[[513]],[[515]],[[516]],[[517]],[[518]],[[519]],[[525]],[[526]],[[527]],[[545]],[[546]],[[547]],[[548]],[[549]],[[570]],[[574]],[[580]],[[581]],[[582]],[[583]],[[584]],[[587]],[[588]],[[589]],[[593]],[[594]]]}},"arcs":[[[67002,72360],[284,-219],[209,77],[58,261],[219,87],[157,175],[55,460],[234,112],[44,205],[131,-154],[84,-18]],[[68477,73346],[154,-4],[210,-122]],[[68841,73220],[85,-70],[201,185],[93,-111],[90,264],[166,-12],[43,84],[29,233],[120,200],[150,-131],[-30,-176],[84,-27],[-26,-484],[110,-189],[97,121],[123,57],[173,258],[192,-42],[286,-1]],[[70827,73379],[50,-165]],[[70877,73214],[-162,-65],[-141,-106],[-319,-67],[-298,-121],[-163,-251],[66,-244],[32,-287],[-139,-242],[12,-221],[-76,-207],[-265,18],[110,-381],[-177,-146],[-118,-347],[15,-346],[-108,-162],[-103,53],[-212,-75],[-31,-161],[-207,1],[-154,-326],[-10,-490],[-361,-239],[-194,50],[-56,-126],[-166,74],[-278,-87],[-465,294]],[[66909,69007],[252,523],[-23,370],[-210,97],[-22,366],[-91,460],[119,315],[-121,85],[76,419],[113,718]],[[56642,45537],[29,-179],[-32,-279],[49,-270],[-41,-216],[24,-199],[-579,7],[-13,-1832],[188,-471],[181,-360]],[[56448,41738],[-510,-235],[-673,82],[-192,276],[-1126,-25],[-42,-40],[-166,260],[-180,17],[-166,-98],[-134,-110]],[[53259,41865],[-26,363],[38,506],[96,527],[15,247],[90,519],[66,236],[159,377],[90,256],[29,427],[-15,326],[-83,206],[-74,350],[-68,345],[15,120],[85,228],[-84,557],[-57,385],[-139,364],[26,112]],[[53422,48316],[115,78],[80,-11],[98,69],[820,-7],[68,-430],[80,-345],[64,-186],[106,-301],[184,46],[91,81],[154,-81],[42,144],[69,336],[172,22],[15,100],[142,2],[-24,-207],[337,5],[5,-363],[56,-222],[-41,-347],[21,-354],[93,-214],[-15,-685],[68,53],[121,-15],[172,87],[127,-34]],[[53383,48495],[-74,433]],[[53309,48928],[112,249],[84,97],[104,-198]],[[53609,49076],[-101,-121],[-45,-148],[-9,-251],[-71,-61]],[[55719,75933],[-35,-196],[39,-247],[115,-140]],[[55838,75350],[-5,-151],[-91,-84],[-16,-187],[-129,-279]],[[55597,74649],[-48,40],[-5,127],[-154,193],[-24,274],[23,393],[38,179],[-47,91]],[[55380,75946],[-18,183],[120,284],[18,-109],[75,51]],[[55575,76355],[59,-154],[66,-59],[19,-209]],[[64327,65792],[49,28],[11,-158],[217,91],[230,-15],[168,-17],[190,389],[207,369],[176,355]],[[65575,66834],[52,-196]],[[65627,66638],[38,-455]],[[65665,66183],[-142,-2],[-23,-375],[50,-80],[-126,-114],[-1,-235],[-81,-238],[-7,-232]],[[65335,64907],[-56,-122],[-835,290],[-106,584],[-11,133]],[[31400,20215],[-168,16],[-297,0],[0,1286]],[[30935,21517],[106,-267],[139,-432],[361,-345],[389,-144],[-125,-288],[-264,-29],[-141,203]],[[32587,39017],[511,-940],[227,-88],[339,-425],[286,-225],[40,-254],[-273,-876],[280,-156],[312,-88],[220,92],[252,441],[45,509]],[[34826,37007],[138,110],[139,-332],[-6,-460],[-234,-318],[-186,-234],[-314,-559],[-370,-786]],[[33993,34428],[-70,-461],[-74,-592],[3,-573],[-61,-128],[-21,-372]],[[33770,32302],[-19,-301],[353,-493],[-38,-397],[173,-251],[-14,-282],[-267,-738],[-412,-309],[-557,-120],[-305,58],[59,-343],[-57,-431],[51,-291],[-167,-202],[-284,-80],[-267,210],[-108,-151],[39,-572],[188,-173],[152,181],[82,-299],[-255,-179],[-223,-358],[-41,-579],[-66,-309],[-262,-1],[-218,-295],[-80,-432],[273,-422],[266,-116],[-96,-517],[-328,-325],[-180,-675],[-254,-227],[-113,-270],[89,-598],[185,-333],[-117,29]],[[30952,21711],[-257,90],[-672,77],[-115,336],[6,431],[-185,-37],[-98,209],[-24,611],[213,253],[88,365],[-33,292],[148,491],[101,763],[-30,338],[122,109],[-30,217],[-129,115],[92,242],[-126,218],[-65,665],[112,117],[-47,702],[65,590],[75,513],[166,209],[-84,563],[-1,529],[210,376],[-7,481],[159,562],[1,530],[-72,105],[-128,994],[171,592],[-27,558],[100,523],[182,540],[196,358],[-83,226],[58,186],[-9,960],[302,284],[96,598],[-34,144]],[[31359,38736],[231,521],[364,-141],[163,-416],[109,464],[316,-24],[45,-123]],[[62106,75494],[386,89]],[[62492,75583],[57,-151],[106,-100],[-56,-144],[148,-198],[-78,-183],[118,-157],[124,-94],[7,-399]],[[62918,74157],[-101,-17]],[[62817,74140],[-113,333],[1,89],[-123,-2],[-82,155],[-58,-16]],[[62442,74699],[-109,168],[-207,144],[27,280],[-47,203]],[[33452,5736],[-82,-294],[-81,-259],[-582,79],[-621,-34],[-348,192],[0,22],[-152,170],[625,-23],[599,-56],[207,237],[147,203],[288,-237]],[[5775,6048],[-533,-79],[-364,204],[-163,203],[-11,34],[-180,158],[169,214],[517,-90],[277,-181],[212,-203],[76,-260]],[[37457,6883],[342,-248],[120,-350],[33,-248],[11,-293],[-430,-181],[-452,-146],[-522,-136],[-582,-113],[-658,34],[-365,192],[49,237],[593,158],[239,192],[174,248],[126,214],[168,203],[180,238],[0,-1],[141,0],[414,125],[419,-125]],[[16330,9501],[359,-90],[332,102],[-158,-203],[-261,-147],[-386,45],[-278,203],[60,192],[332,-102]],[[15122,9513],[425,-226],[-164,23],[-359,56],[-381,158],[202,124],[277,-135]],[[22505,10404],[305,-79],[304,68],[163,-327],[-217,45],[-337,-23],[-343,23],[-376,-34],[-283,113],[-146,237],[174,101],[353,-79],[403,-45]],[[30985,10967],[33,-259],[-49,-226],[-76,-214],[-326,-79],[-311,-113],[-364,11],[136,226],[-327,-79],[-310,-79],[-212,169],[-16,237],[305,226],[190,67],[321,-22],[82,293],[16,215],[-6,462],[158,271],[256,90],[147,-214],[65,-214],[120,-260],[92,-248],[76,-260]],[[0,3044],[16,-4],[245,335],[501,-181],[32,21],[294,183],[38,-6],[32,-5],[402,-239],[352,239],[63,33],[816,102],[265,-135],[130,-68],[419,-192],[789,-147],[625,-180],[1072,-136],[800,158],[1181,-113],[669,-180],[734,169],[773,158],[60,271],[-1094,22],[-898,136],[-234,225],[-745,125],[49,259],[103,237],[104,214],[-55,237],[-462,158],[-212,204],[-430,180],[675,-34],[642,91],[402,-192],[495,169],[457,214],[223,192],[-98,237],[-359,158],[-408,169],[-571,34],[-500,79],[-539,57],[-180,214],[-359,181],[-217,203],[-87,654],[136,-56],[250,-181],[457,57],[441,79],[228,-249],[441,57],[370,124],[348,158],[315,192],[419,56],[-11,215],[-97,214],[81,203],[359,102],[163,-192],[425,113],[321,146],[397,12],[375,56],[376,136],[299,124],[337,124],[218,-34],[190,-45],[414,79],[370,-102],[381,12],[364,79],[375,-57],[414,-56],[386,22],[403,-11],[413,-11],[381,22],[283,170],[337,90],[349,-124],[331,101],[300,203],[179,-180],[98,-203],[180,-192],[288,169],[332,-214],[375,-68],[321,-158],[392,34],[354,101],[418,-22],[376,-79],[381,-102],[147,249],[-180,191],[-136,204],[-359,45],[-158,214],[-60,214],[-98,429],[213,-79],[364,-34],[359,34],[327,-90],[283,-169],[119,-203],[376,-34],[359,79],[381,113],[342,67],[283,-135],[370,45],[239,440],[224,-259],[321,-102],[348,56],[228,-225],[365,-23],[337,-68],[332,-124],[218,215],[108,203],[278,-226],[381,57],[283,-125],[190,-191],[370,56],[288,124],[283,147],[337,79],[392,68],[354,79],[272,124],[163,180],[65,249],[-32,236],[-87,226],[-98,226],[-87,226],[-71,203],[-16,225],[27,226],[130,214],[109,237],[44,226],[-55,248],[-32,226],[136,260],[152,169],[180,214],[190,181],[223,169],[109,248],[152,158],[174,147],[267,34],[174,180],[196,113],[228,68],[202,147],[157,180],[218,68],[163,-147],[-103,-192],[-283,-169],[-120,-124],[-206,90],[-229,-56],[-190,-136],[-202,-146],[-136,-170],[-38,-225],[17,-215],[130,-191],[-190,-136],[-261,-45],[-153,-192],[-163,-180],[-174,-249],[-44,-214],[98,-237],[147,-181],[229,-135],[212,-181],[114,-225],[60,-215],[82,-225],[130,-192],[82,-215],[38,-530],[81,-214],[22,-226],[87,-226],[-38,-304],[-152,-237],[-163,-192],[-370,-79],[-125,-203],[-169,-192],[-419,-215],[-370,-90],[-348,-124],[-376,-124],[-223,-237],[-446,-23],[-489,23],[-441,-45],[-468,0],[87,-226],[424,-101],[311,-158],[174,-204],[-310,-180],[-479,56],[-397,-146],[-17,-237],[-11,-226],[327,-192],[60,-214],[353,-215],[588,-90],[500,-158],[398,-180],[506,-181],[690,-90],[681,-158],[473,-170],[517,-191],[272,-271],[136,-215],[337,204],[457,169],[484,180],[577,147],[495,158],[691,11],[680,-79],[560,-135],[180,248],[386,169],[702,12],[550,124],[522,124],[577,79],[614,102],[430,146],[-196,203],[-119,203],[0,215],[-539,-23],[-571,-90],[-544,0],[-77,214],[39,429],[125,124],[397,136],[468,135],[337,169],[337,170],[251,225],[380,102],[376,79],[190,45],[430,23],[408,79],[343,112],[337,136],[305,135],[386,181],[245,192],[261,169],[82,226],[-294,135],[98,237],[185,181],[288,112],[305,136],[283,180],[217,226],[136,271],[202,158],[331,-34],[136,-192],[332,-22],[11,214],[142,226],[299,-57],[71,-214],[331,-34],[360,102],[348,67],[315,-34],[120,-237],[305,192],[283,102],[315,79],[310,79],[283,135],[310,91],[240,124],[168,203],[207,-147],[288,79],[202,-271],[157,-203],[316,113],[125,226],[283,158],[365,-34],[108,-215],[229,215],[299,68],[326,22],[294,-11],[310,-68],[300,-34],[130,-192],[180,-169],[304,102],[327,22],[315,0],[310,12],[278,79],[294,67],[245,158],[261,102],[283,56],[212,158],[152,316],[158,192],[288,-90],[109,-203],[239,-136],[289,45],[196,-203],[206,-146],[283,135],[98,248],[250,102],[289,192],[272,79],[326,112],[218,125],[228,135],[218,124],[261,-68],[250,203],[180,158],[261,-11],[229,136],[54,203],[234,158],[228,113],[278,90],[256,45],[244,-34],[262,-56],[223,-158],[27,-249],[245,-191],[168,-158],[332,-68],[185,-158],[229,-158],[266,-34],[223,113],[240,237],[261,-124],[272,-68],[261,-68],[272,-45],[277,0],[229,-598],[-11,-147],[-33,-259],[-266,-147],[-218,-214],[38,-226],[310,11],[-38,-225],[-141,-215],[-131,-237],[212,-180],[321,-57],[321,102],[153,226],[92,214],[153,181],[174,169],[70,203],[147,282],[174,57],[316,22],[277,68],[283,90],[136,226],[82,214],[190,215],[272,146],[234,113],[153,192],[157,101],[202,91],[277,-57],[250,57],[272,67],[305,-33],[201,158],[142,383],[103,-158],[131,-271],[234,-112],[266,-46],[267,68],[283,-45],[261,-11],[174,56],[234,-34],[212,-124],[250,79],[300,0],[255,79],[289,-79],[185,192],[141,192],[191,158],[348,429],[179,-79],[212,-158],[185,-203],[354,-350],[272,-12],[256,0],[299,68],[299,79],[229,158],[190,169],[310,23],[207,124],[218,-113],[141,-180],[196,-181],[305,23],[190,-147],[332,-147],[348,-56],[288,45],[218,181],[185,180],[250,45],[251,-79],[288,-56],[261,90],[250,0],[245,-56],[256,-57],[250,102],[299,90],[283,23],[316,0],[255,56],[251,45],[76,282],[11,237],[174,-158],[49,-259],[92,-237],[115,-192],[234,-102],[315,34],[365,12],[250,33],[364,0],[262,12],[364,-23],[310,-45],[196,-181],[-54,-214],[179,-169],[299,-136],[310,-146],[360,-102],[375,-90],[283,-90],[315,-12],[180,192],[245,-158],[212,-180],[245,-136],[337,-56],[321,-68],[136,-226],[316,-135],[212,-203],[310,-90],[321,11],[299,-34],[332,11],[332,-45],[310,-79],[288,-135],[289,-113],[195,-169],[-32,-226],[-147,-203],[-125,-260],[-98,-203],[-131,-237],[-364,-90],[-163,-203],[-360,-124],[-125,-226],[-190,-214],[-201,-181],[-115,-237],[-70,-214],[-28,-260],[6,-214],[158,-226],[60,-214],[130,-204],[517,-78],[109,-249],[-501,-90],[-424,-124],[-528,-23],[-234,-327],[-49,-271],[-119,-214],[-147,-215],[370,-191],[141,-237],[239,-215],[338,-192],[386,-180],[419,-181],[636,-180],[142,-282],[800,-125],[53,-44],[208,-170],[767,147],[636,-181],[-99520,-139]],[[69148,23827],[179,-181],[263,-72],[9,-110],[-77,-262],[-427,-37],[-7,306],[41,238],[19,118]],[[90387,28338],[269,-199],[151,79],[217,111],[166,-39],[20,-684],[-95,-198],[-29,-463],[-97,157],[-193,-401],[-57,31],[-171,18],[-171,493],[-38,380],[-160,502],[7,264],[181,-51]],[[89877,43903],[100,-452],[179,217],[92,-243],[133,-225],[-29,-255],[60,-494],[42,-288],[70,-70],[75,-492],[-27,-299],[90,-390],[301,-301],[197,-274],[186,-251],[-37,-139],[159,-361],[108,-623],[111,126],[113,-249],[68,88],[48,-610],[197,-354],[129,-220],[217,-466],[78,-463],[7,-328],[-19,-356],[132,-490],[-16,-509],[-48,-267],[-75,-514],[6,-330],[-55,-413],[-123,-524],[-205,-283],[-102,-446],[-93,-284],[-82,-497],[-107,-287],[-70,-431],[-36,-397],[14,-182],[-159,-200],[-311,-21],[-257,-236],[-127,-223],[-168,-248],[-230,255],[-170,101],[43,301],[-152,-109],[-243,-417],[-240,156],[-158,91],[-159,41],[-269,167],[-179,355],[-52,437],[-64,291],[-137,233],[-267,70],[91,279],[-67,428],[-136,-399],[-247,-106],[146,319],[42,332],[107,282],[-22,427],[-226,-491],[-174,-197],[-106,-458],[-217,237],[9,305],[-174,418],[-147,216],[52,133],[-356,349],[-195,16],[-267,280],[-498,-54],[-359,-206],[-317,-192],[-265,38],[-294,-296],[-241,-132],[-53,-302],[-103,-234],[-236,-14],[-174,-52],[-246,105],[-199,-62],[-191,-27],[-165,-307],[-81,26],[-140,-163],[-133,-183],[-203,23],[-186,0],[-295,368],[-149,109],[6,330],[138,79],[47,131],[-10,207],[34,400],[-31,341],[-147,582],[-45,329],[12,328],[-111,375],[-7,169],[-123,230],[-35,451],[-158,456],[-39,245],[122,-249],[-93,535],[137,-167],[83,-223],[-5,294],[-138,454],[-26,181],[-65,173],[31,333],[56,141],[38,289],[-29,336],[114,415],[21,-439],[118,396],[225,193],[136,245],[212,212],[126,45],[77,-71],[219,214],[168,64],[42,126],[74,53],[153,-14],[292,169],[151,256],[71,307],[163,293],[13,229],[7,314],[194,489],[117,-497],[119,115],[-99,272],[87,279],[122,-125],[34,439],[152,283],[67,227],[140,98],[4,161],[122,-67],[5,145],[122,82],[134,78],[205,-264],[155,-342],[173,-3],[177,-54],[-59,316],[133,462],[126,150],[-44,144],[121,329],[168,203],[142,-68],[234,108],[-5,294],[-204,190],[148,84],[184,-143],[148,-236],[234,-148],[79,59],[172,-177],[162,164],[105,-50],[65,111],[127,-285],[-74,-308],[-105,-233],[-96,-19],[32,-230],[-81,-288],[-99,-283],[20,-163],[221,-318],[214,-184],[143,-199],[201,-341],[78,1],[145,-148],[43,-178],[265,-195],[183,197],[55,309],[56,255],[34,316],[85,458],[-39,279],[20,167],[-32,330],[37,434],[53,117],[-43,192],[67,305],[52,317],[7,164],[104,216],[78,-282],[19,-361],[70,-70],[11,-242],[101,-293],[21,-326],[-10,-209]],[[54716,79543],[-21,-236],[-156,-1],[53,-125],[-92,-370]],[[54500,78811],[-53,-97],[-243,-15],[-140,-130],[-229,44]],[[53835,78613],[-398,149],[-62,200],[-274,-100],[-32,-109],[-169,81]],[[52900,78834],[-142,16],[-125,105],[42,141],[-10,102]],[[52665,79198],[83,32],[141,-160],[39,152],[245,-25],[199,104],[133,-18],[87,-118],[26,98],[-40,375],[100,73],[98,266]],[[53776,79977],[206,-186],[157,236],[98,43],[215,-176],[131,30],[128,-109]],[[54711,79815],[-23,-73],[28,-199]],[[62817,74140],[-190,76],[-141,266],[-44,217]],[[63495,75906],[146,-303],[141,-408],[130,-27],[85,-156],[-228,-46],[-49,-447],[-48,-202],[-101,-135],[7,-285]],[[63578,73897],[-69,-28],[-173,301],[95,285],[-82,169],[-104,-43],[-327,-424]],[[62492,75583],[68,94],[207,-165],[149,-34],[38,67],[-136,312],[72,79]],[[62890,75936],[78,-19],[191,-350],[122,-39],[48,146],[166,232]],[[58149,49238],[-17,694],[-70,262]],[[58062,50194],[169,-45],[85,328],[147,-38]],[[58463,50439],[16,-227],[60,-130],[3,-187],[-69,-121],[-108,-300],[-101,-209],[-115,-27]],[[50920,81398],[204,-45],[257,120],[176,-252],[153,-135]],[[51710,81086],[-32,-389]],[[51678,80697],[-72,-22],[-30,-323]],[[51576,80352],[-243,263],[-143,-45],[-194,272],[-129,231],[-129,9],[-40,203]],[[50698,81285],[222,113]],[[50747,55434],[-229,-68]],[[50518,55366],[-69,398],[13,1322],[-56,119],[-11,283],[-96,201],[-85,170],[35,303]],[[50249,58162],[96,66],[56,251],[136,54],[61,172]],[[50598,58705],[93,169],[100,2],[212,-332]],[[51003,58544],[-11,-191],[62,-342],[-54,-232],[29,-154],[-135,-357],[-86,-176],[-52,-364],[7,-366],[-16,-928]],[[49214,57382],[-190,149],[-130,-22],[-97,-145],[-125,122],[-49,190],[-125,126]],[[48498,57802],[-18,334],[76,244],[-7,195],[221,477],[41,395],[76,141],[134,-78],[116,117],[38,148],[216,259],[53,180],[259,238],[153,82],[70,-110],[178,3]],[[50104,60427],[-22,-280],[37,-262],[156,-376],[9,-279],[320,-130],[-6,-395]],[[50249,58162],[-243,13]],[[50006,58175],[-128,46],[-90,-93],[-123,42],[-482,-27],[-7,-327],[38,-434]],[[75742,64522],[-6,-413],[-97,88],[18,-464]],[[75657,63733],[-79,301],[-16,293],[-53,277],[-116,335],[-256,23],[25,-237],[-87,-321],[-118,117],[-41,-105],[-78,63],[-108,52]],[[74730,64531],[-43,474],[-96,433],[47,347],[-171,154],[62,210],[173,215],[-200,305],[98,390],[220,-248],[133,-29],[24,-400],[265,-79],[257,8],[160,-98],[-128,-487],[-124,-34],[-86,-327],[152,-299],[46,368],[76,2],[147,-914]],[[56293,77303],[80,-236],[108,42],[213,-90],[408,-30],[138,147],[327,133],[202,-209],[163,-60]],[[57932,77000],[-144,-239],[-101,-412],[89,-328]],[[57776,76021],[-239,77],[-283,-181]],[[57254,75917],[-3,-287],[-252,-55],[-196,202],[-222,-159],[-206,17]],[[56375,75635],[-20,381],[-139,185]],[[56216,76201],[46,81],[-30,69],[47,183],[105,180],[-135,248],[-24,211],[68,130]],[[28462,65512],[-68,-29],[-70,332],[-104,167],[60,365],[84,-23],[97,-478],[1,-334]],[[28383,67136],[-303,-92],[-19,213],[130,46],[184,-17],[8,-150]],[[28611,67142],[-48,-409],[-51,73],[4,301],[-124,228],[-1,66],[220,-259]],[[55279,77663],[100,2],[-69,-253],[134,-222],[-41,-271],[-65,-25]],[[55338,76894],[-52,-53],[-90,-134],[-41,-316]],[[55155,76391],[-246,218],[-105,240],[-106,128],[-127,215],[-61,178],[-136,270],[59,239],[99,-133],[60,120],[130,13],[239,-96],[192,8],[126,-128]],[[56523,82877],[268,-4],[302,217],[64,325],[228,184],[-26,258]],[[57359,83857],[169,97],[298,222]],[[57826,84176],[293,-144],[39,-143],[146,68],[272,-137],[27,-270],[-60,-156],[174,-377],[113,-105],[-16,-104],[187,-101],[80,-154],[-108,-126],[-224,20],[-54,-53],[66,-192],[68,-368]],[[58829,81834],[-239,-34],[-85,-127],[-18,-290],[-111,56],[-250,-28],[-73,135],[-104,-100],[-105,83],[-218,11],[-310,139],[-281,45],[-215,-13],[-152,-156],[-133,-23]],[[56535,81532],[-6,257],[-85,267],[166,117],[2,230],[-77,219],[-12,255]],[[25238,62085],[-2,85],[33,26],[51,-68],[99,348],[53,7]],[[25472,62483],[1,-84],[53,-3],[-5,-157],[-45,-249],[24,-89],[-29,-206],[18,-55],[-32,-291],[-55,-153],[-50,-18],[-55,-199]],[[25297,60979],[-83,-1],[22,650],[2,457]],[[31359,38736],[-200,-79],[-109,794],[-150,646],[88,557],[-146,244],[-37,416],[-136,391]],[[30669,41705],[175,622],[-119,484],[63,194],[-49,213],[108,288],[6,490],[13,405],[60,195],[-240,926]],[[30686,45522],[206,-48],[143,12],[62,174],[243,234],[147,216],[363,98],[-29,-432],[34,-221],[-23,-386],[302,-516],[311,-95],[109,-216],[188,-114],[115,-167],[175,6],[161,-171],[12,-333],[55,-168],[3,-248],[-81,-10],[107,-671],[533,-23],[-41,-333],[30,-227],[151,-162],[66,-358],[-49,-453],[-77,-253],[27,-328],[-87,-119]],[[33842,40210],[-4,177],[-259,295],[-258,8],[-484,-167],[-133,-507],[-7,-310],[-110,-689]],[[34826,37007],[54,332],[38,340],[0,317],[-100,105],[-104,-94],[-103,26],[-33,222],[-26,527],[-52,172],[-187,156],[-114,-113],[-293,111],[18,782],[-82,320]],[[30686,45522],[-157,-99],[-126,66],[18,875],[-228,-339],[-245,15],[-105,307],[-184,33],[59,247],[-155,351],[-115,518],[73,106],[0,243],[168,166],[-28,312],[71,200],[20,269],[318,392],[227,111],[37,86],[251,-27]],[[30585,49354],[125,1579],[6,250],[-43,330],[-123,210],[1,418],[156,95],[56,-60],[9,221],[-162,60],[-4,360],[541,-13],[92,198],[77,-182],[55,-340],[52,71]],[[31423,52551],[153,-304],[216,37],[54,176],[206,135],[115,94],[32,244],[198,164],[-15,121],[-235,49],[-39,363],[12,386],[-125,149],[52,53],[206,-73],[221,-144],[80,136],[200,89],[310,216],[102,220],[-37,162]],[[33129,54824],[145,26],[64,-133],[-36,-253],[96,-87],[63,-268],[-77,-203],[-44,-490],[71,-291],[20,-267],[171,-270],[137,-28],[30,112],[88,25],[126,101],[90,153],[154,-48],[67,20]],[[34294,52923],[151,-47],[25,118],[-46,114],[28,167],[112,-51],[131,59],[159,-122]],[[34854,53161],[121,-119],[86,156],[62,-24],[38,-162],[133,41],[107,219],[85,424],[164,527]],[[35650,54223],[95,27],[69,-318],[155,-1008],[149,-95],[7,-397],[-208,-474],[86,-174],[491,-90],[10,-578],[211,378],[349,-207],[462,-351],[135,-338],[-45,-319],[323,178],[540,-305],[415,23],[411,-477],[355,-645],[214,-166],[237,-23],[101,-182],[94,-733],[46,-348],[-110,-953],[-142,-376],[-391,-801],[-177,-651],[-206,-499],[-69,-11],[-78,-424],[20,-1079],[-77,-888],[-30,-379],[-88,-228],[-49,-769],[-282,-752],[-47,-595],[-225,-250],[-65,-345],[-302,2],[-437,-222],[-195,-256],[-311,-168],[-327,-459],[-235,-571],[-41,-430],[46,-318],[-51,-582],[-63,-281],[-195,-317],[-308,-1013],[-244,-457],[-189,-269],[-127,-548],[-183,-329]],[[35174,32383],[-77,326],[122,273],[-160,392],[-218,318],[-286,369],[-103,-17],[-279,446],[-180,-62]],[[81723,54436],[110,215],[236,316]],[[82069,54967],[-13,-284],[-16,-368],[-133,18],[-58,-196],[-126,299]],[[75471,67823],[113,-184],[-20,-354],[-227,-17],[-234,39],[-175,-90],[-252,218],[-6,115]],[[74670,67550],[184,429],[150,146],[198,-134],[147,-14],[122,-154]],[[58175,39107],[-393,-424],[-249,-430],[-93,-383],[-83,-217],[-152,-46],[-48,-275],[-28,-180],[-178,-134],[-226,28],[-133,162],[-117,70],[-135,-134],[-68,-276],[-132,-173],[-139,-257],[-199,-59],[-62,202],[26,351],[-165,548],[-75,86]],[[55526,37566],[0,1681],[274,20],[8,2051],[207,19],[428,202],[106,-238],[177,226],[85,1],[156,130]],[[56967,41658],[50,-43]],[[57017,41615],[107,-460],[56,-103],[87,-333],[315,-633],[119,-62],[0,-203],[82,-365],[215,-88],[177,-261]],[[54244,56103],[229,44],[52,148],[46,-11],[69,-131],[350,221],[118,224],[145,202],[-28,202],[78,53],[269,-35],[261,266],[201,629],[141,233],[176,98]],[[56351,58246],[31,-246],[160,-360],[1,-235],[-45,-240],[18,-179],[96,-166]],[[56612,56820],[212,-252]],[[56824,56568],[152,-232],[2,-188],[187,-299],[116,-250],[70,-345],[208,-228],[44,-183]],[[57603,54843],[-91,-61],[-178,14],[-209,60],[-104,-49],[-41,-140],[-90,-17],[-110,121],[-309,-287],[-127,58],[-38,-45],[-83,-347],[-207,112],[-203,57],[-177,212],[-229,196],[-149,-186],[-108,-292],[-25,-402]],[[55125,53847],[-178,33],[-188,96],[-166,-305],[-146,-536]],[[54447,53135],[-29,167],[-12,263],[-127,185],[-103,297],[-23,207],[-132,301],[23,171],[-28,243],[21,446],[67,105],[140,583]],[[32315,78637],[202,-78],[257,16],[-137,-236],[-102,-37],[-353,244],[-69,193],[105,177],[97,-279]],[[32831,80108],[-135,-10],[-360,180],[-258,272],[96,49],[365,-145],[284,-240],[8,-106]],[[15692,79765],[-140,-80],[-456,262],[-84,204],[-248,202],[-50,164],[-286,103],[-107,314],[24,133],[291,-125],[171,-88],[261,-61],[94,-198],[138,-274],[277,-238],[115,-318]],[[34407,81019],[-184,-504],[181,195],[187,-124],[-98,-200],[247,-158],[128,140],[277,-177],[-86,-422],[194,99],[36,-306],[86,-358],[-117,-507],[-125,-21],[-183,109],[60,471],[-77,73],[-322,-499],[-166,20],[196,270],[-267,140],[-298,-34],[-539,17],[-43,171],[173,202],[-121,157],[234,347],[287,917],[172,328],[241,198],[129,-25],[-54,-156],[-148,-363]],[[13005,83025],[131,-75],[267,46],[-84,-654],[242,-463],[-111,1],[-167,264],[-103,265],[-140,179],[-51,253],[16,184]],[[27981,87625],[-108,-302],[-123,49],[-73,171],[13,40],[107,173],[114,-13],[70,-118]],[[27250,87943],[-325,-317],[-196,13],[-61,156],[207,265],[381,-5],[-6,-112]],[[26344,89640],[51,-253],[143,89],[161,-151],[304,-198],[318,-179],[25,-274],[204,45],[199,-191],[-247,-181],[-432,138],[-156,259],[-275,-306],[-396,-298],[-95,337],[-377,-55],[242,284],[35,454],[95,527],[201,-47]],[[28926,90499],[-312,-29],[-69,282],[118,323],[255,80],[217,-160],[3,-246],[-32,-80],[-180,-170]],[[23431,91627],[-173,-202],[-374,175],[-226,-63],[-380,259],[245,178],[194,250],[295,-164],[166,-103],[84,-110],[169,-220]],[[31350,77823],[-181,326],[0,785],[-123,166],[-187,-98],[-92,152],[-212,-435],[-84,-448],[-99,-262],[-118,-89],[-89,-29],[-28,-142],[-512,-1],[-422,-4],[-125,-106],[-294,-414],[-34,-45],[-89,-225],[-255,0],[-273,-2],[-125,-91],[44,-113],[25,-176],[-5,-58],[-363,-287],[-286,-90],[-323,-308],[-70,0],[-94,91],[-31,82],[6,60],[61,202],[131,317],[81,340],[-56,500],[-59,523],[-290,270],[35,103],[-41,70],[-76,0],[-56,91],[-14,137],[-54,-60],[-75,18],[17,57],[-65,57],[-27,151],[-216,185],[-224,191],[-272,223],[-261,209],[-248,-163],[-91,-6],[-342,150],[-225,-75],[-269,179],[-284,91],[-194,36],[-86,97],[-49,317],[-94,-3],[-1,-221],[-575,0],[-951,0],[-944,-1],[-833,1],[-834,0],[-819,0],[-847,0],[-273,0],[-825,0],[-788,0]],[[15878,80048],[-38,1],[-537,566],[-199,248],[-503,239],[-155,510],[40,353],[-356,245],[-48,464],[-336,419],[-6,296]],[[13740,83389],[154,278],[-7,363],[-473,367],[-284,657],[-173,413],[-255,259],[-187,236],[-147,298],[-279,-187],[-270,-321],[-247,378],[-194,252],[-271,160],[-273,17],[1,3279],[2,2137]],[[10837,91975],[518,-139],[438,-277],[289,-53],[244,241],[336,179],[413,-70],[416,253],[455,144],[191,-239],[207,134],[62,272],[192,-62],[470,-516],[369,390],[38,-437],[341,95],[105,168],[337,-33],[424,-242],[650,-211],[383,-98],[272,37],[374,-292],[-390,-286],[502,-123],[750,68],[236,100],[296,-345],[302,291],[-283,245],[179,197],[338,26],[223,58],[224,-138],[279,-312],[310,46],[491,-260],[431,91],[405,-13],[-32,358],[247,100],[431,-195],[-2,-545],[177,459],[223,-15],[126,579],[-298,355],[-324,233],[22,636],[329,418],[366,-92],[281,-255],[378,-649],[-247,-283],[517,-116],[-1,-589],[371,451],[332,-371],[-83,-427],[269,-388],[290,416],[202,497],[16,632],[394,-44],[411,-85],[373,-286],[17,-285],[-207,-307],[196,-309],[-36,-280],[-544,-403],[-386,-88],[-287,173],[-83,-289],[-268,-486],[-81,-252],[-322,-389],[-397,-38],[-220,-244],[-18,-374],[-323,-72],[-340,-467],[-301,-648],[-108,-454],[-16,-669],[409,-96],[125,-539],[130,-437],[388,114],[517,-250],[277,-219],[199,-272],[348,-158],[294,-243],[459,-33],[302,-56],[-45,-499],[86,-578],[201,-645],[414,-547],[214,188],[150,592],[-145,909],[-196,303],[445,270],[314,404],[154,401],[-23,385],[-188,489],[-338,434],[328,603],[-121,522],[-93,899],[194,133],[476,-157],[286,-56],[230,152],[258,-196],[342,-333],[85,-224],[495,-44],[-8,-483],[92,-728],[254,-90],[201,-339],[402,319],[266,636],[184,267],[216,-514],[362,-734],[307,-691],[-112,-362],[370,-325],[250,-329],[442,-149],[179,-183],[110,-488],[216,-76],[112,-217],[20,-647],[-202,-217],[-199,-202],[-458,-205],[-349,-473],[-470,-93],[-594,121],[-417,4],[-287,-40],[-233,-413],[-354,-255],[-401,-762],[-320,-532],[236,95],[446,756],[583,480],[415,58],[246,-283],[-262,-387],[88,-620],[91,-435],[361,-287],[459,83],[278,647],[19,-417],[180,-209],[-344,-377],[-615,-343],[-276,-233],[-310,-415],[-211,43],[-11,487],[483,476],[-445,-19],[-309,-70]],[[18287,93939],[-139,-270],[618,174],[386,-291],[314,294],[254,-188],[227,-566],[140,238],[-197,590],[244,85],[276,-93],[311,-232],[175,-561],[86,-406],[466,-285],[502,-273],[-31,-253],[-456,-47],[178,-221],[-94,-211],[-503,90],[-478,156],[-322,-35],[-522,-196],[-704,-86],[-494,-54],[-151,271],[-379,157],[-246,-64],[-343,456],[185,61],[429,99],[392,-26],[362,100],[-537,135],[-594,-46],[-394,11],[-146,213],[644,230],[-428,-8],[-485,152],[233,431],[193,229],[744,351],[284,-111]],[[20972,94111],[-244,-381],[-434,404],[95,80],[372,23],[211,-126]],[[28794,93928],[25,-159],[-296,16],[-299,13],[-304,-78],[-80,35],[-306,306],[12,207],[133,38],[636,-62],[479,-316]],[[25955,93959],[219,-359],[256,465],[704,236],[477,-596],[-42,-377],[550,168],[263,228],[616,-291],[383,-274],[36,-252],[515,131],[290,-367],[670,-228],[242,-232],[263,-539],[-510,-268],[654,-376],[441,-127],[400,-529],[437,-38],[-87,-404],[-487,-669],[-342,246],[-437,554],[-359,-72],[-35,-330],[292,-335],[377,-265],[114,-153],[181,-570],[-96,-414],[-350,156],[-697,461],[393,-496],[289,-348],[45,-201],[-753,230],[-596,334],[-337,281],[97,162],[-414,296],[-405,280],[5,-167],[-803,-92],[-235,198],[183,424],[522,10],[571,74],[-92,205],[96,287],[360,561],[-77,255],[-107,197],[-425,280],[-563,196],[178,145],[-294,358],[-245,33],[-219,196],[-149,-170],[-503,-74],[-1011,129],[-588,169],[-450,87],[-231,202],[290,263],[-394,2],[-88,583],[213,515],[286,235],[717,154],[-204,-373]],[[22123,94355],[331,-122],[496,73],[72,-167],[-259,-276],[420,-248],[-50,-518],[-455,-223],[-268,48],[-192,220],[-690,444],[5,185],[567,-72],[-306,377],[329,279]],[[24112,93737],[-298,-430],[-317,21],[-173,506],[4,287],[145,244],[276,157],[579,-20],[530,-140],[-415,-513],[-331,-112]],[[16539,92938],[-731,-278],[-147,253],[-641,304],[119,244],[192,421],[241,378],[-272,353],[939,90],[397,-119],[709,-32],[270,-167],[298,-243],[-349,-145],[-681,-405],[-344,-403],[0,-251]],[[23996,95009],[-151,-223],[-403,43],[-337,150],[148,259],[399,155],[243,-202],[101,-182]],[[22639,96011],[212,-267],[9,-295],[-127,-429],[-458,-59],[-298,92],[5,336],[-455,-44],[-18,445],[299,-18],[419,197],[390,-34],[22,76]],[[19941,95712],[109,-205],[247,97],[291,-25],[49,-282],[-169,-274],[-940,-89],[-701,-249],[-423,-13],[-35,187],[577,255],[-1255,-69],[-389,103],[379,563],[262,161],[782,-194],[493,-341],[485,-44],[-397,551],[255,210],[286,-67],[94,-275]],[[23699,96229],[308,-186],[547,2],[240,-190],[-64,-216],[319,-130],[177,-137],[374,-26],[406,-48],[441,125],[566,49],[451,-40],[298,-218],[62,-238],[-174,-153],[-414,-124],[-355,70],[-797,-88],[-570,-11],[-449,71],[-738,186],[-96,316],[-34,286],[-279,251],[-574,70],[-322,179],[104,236],[573,-36]],[[17722,96544],[-38,-443],[-214,-199],[-259,-29],[-517,-246],[-444,-88],[-377,124],[472,431],[570,373],[426,-8],[381,85]],[[23933,96472],[-126,-17],[-521,37],[-74,161],[559,-9],[195,-107],[-33,-65]],[[19392,96574],[-518,-166],[-411,186],[224,183],[406,59],[392,-90],[-93,-172]],[[19538,97095],[-339,-113],[-461,1],[5,82],[285,173],[149,-27],[361,-116]],[[23380,96781],[-411,-119],[-226,134],[-119,216],[-22,238],[360,-23],[162,-38],[332,-200],[-76,-208]],[[22205,96935],[108,-240],[-453,64],[-457,187],[-619,21],[268,171],[-335,139],[-21,221],[546,-79],[751,-210],[212,-274]],[[25828,97704],[334,-186],[-381,-171],[-513,-434],[-492,-41],[-575,74],[-299,235],[4,208],[220,154],[-508,-5],[-306,192],[-176,261],[193,256],[192,175],[285,41],[-122,132],[646,29],[355,-308],[468,-123],[455,-109],[220,-380]],[[30972,99689],[742,-45],[597,-74],[508,-156],[-12,-154],[-678,-250],[-672,-117],[-251,-129],[605,3],[-656,-349],[-452,-163],[-476,-470],[-573,-96],[-177,-117],[-841,-62],[383,-72],[-192,-103],[230,-284],[-264,-198],[-429,-163],[-132,-225],[-388,-172],[39,-130],[475,22],[6,-141],[-742,-345],[-726,159],[-816,-89],[-414,69],[-525,30],[-35,277],[514,130],[-137,415],[170,41],[742,-249],[-379,370],[-450,110],[225,223],[492,137],[79,201],[-392,225],[-118,297],[759,-25],[220,-63],[433,210],[-625,67],[-972,-37],[-491,196],[-232,232],[-324,169],[-61,197],[413,110],[324,18],[545,94],[409,214],[344,-30],[300,-161],[211,311],[367,92],[498,64],[849,24],[148,-63],[802,98],[601,-37],[602,-36]],[[52900,78834],[-22,-236],[-122,-97],[-206,72],[-60,-232],[-132,-18],[-48,91],[-156,-195],[-134,-28],[-120,124]],[[51900,78315],[-95,252],[-133,-90],[5,261],[203,323],[-9,147],[126,-53],[77,98]],[[52074,79253],[236,-4],[57,125],[298,-176]],[[31400,20215],[-92,-233],[-238,-178],[-137,18],[-164,46],[-202,174],[-291,83],[-350,322],[-283,309],[-383,645],[229,-121],[390,-384],[369,-207],[143,264],[90,394],[256,238],[198,-68]],[[30952,21711],[-247,4],[-134,-141],[-250,-208],[-45,-538],[-118,-14],[-313,188],[-318,401],[-346,329],[-87,365],[79,337],[-140,383],[-36,982],[119,554],[293,445],[-422,168],[265,509],[94,956],[309,-202],[145,1193],[-186,153],[-87,-719],[-175,81],[87,823],[95,1067],[127,394],[-80,562],[-22,649],[117,18],[170,930],[192,922],[118,858],[-64,863],[83,475],[-34,711],[163,703],[50,1114],[89,1196],[87,1287],[-20,943],[-58,811]],[[30452,41263],[143,147],[74,295]],[[80649,62586],[-240,-277],[-228,179],[-8,495],[137,261],[304,161],[159,-13],[62,-220],[-122,-254],[-64,-332]],[[86288,76244],[-179,340],[-111,-323],[-429,-248],[44,-304],[-241,21],[-131,181],[-191,-409],[-306,-309],[-227,-370]],[[84517,74823],[-388,-167],[-204,-269],[-300,-157],[148,267],[-58,224],[220,387],[-147,302],[-242,-204],[-314,-400],[-171,-372],[-272,-28],[-142,-268],[147,-390],[227,-94],[9,-259],[220,-168],[311,411],[247,-224],[179,-15],[45,-302],[-393,-161],[-130,-311],[-270,-289],[-142,-403],[299,-316],[109,-567],[169,-527],[189,-443],[-5,-428],[-174,-157],[66,-307],[164,-179],[-43,-469],[-71,-456],[-155,-52],[-203,-623],[-225,-756],[-258,-687],[-382,-532],[-386,-484],[-313,-67],[-170,-255],[-96,186],[-157,-286],[-388,-288],[-294,-88],[-95,-609],[-154,-33],[-73,418],[66,222],[-373,185],[-131,-94]],[[80013,64241],[-280,149],[-132,234],[44,332],[-254,105],[-134,216],[-236,-307],[-271,-66],[-221,3],[-149,-141]],[[78380,64766],[-144,-84],[42,-659],[-148,16],[-25,135]],[[78105,64174],[-9,238],[-203,-167],[-121,106],[-206,216],[81,478],[-176,112],[-66,530],[-293,-96],[33,684],[263,480],[11,475],[-8,441],[-121,137],[-93,339],[-162,-42]],[[77035,68105],[-300,86],[94,242],[-130,358],[-198,-243],[-233,142],[-321,-367],[-252,-428],[-224,-72]],[[74670,67550],[-23,454],[-170,-121]],[[74477,67883],[-324,56],[-314,132],[-225,253],[-216,114],[-93,276],[-157,83],[-280,375],[-223,177],[-115,-138]],[[72530,69211],[-386,403],[-273,365],[-78,635],[200,-78],[9,294],[-111,295],[28,470],[-298,675]],[[71621,72270],[-457,233],[-82,442],[-205,269]],[[70827,73379],[-42,328],[10,224],[-169,131],[-91,-58],[-70,533]],[[70465,74537],[79,132],[-39,135],[266,272],[192,112],[294,-77],[105,368],[356,68],[99,229],[438,312],[39,130]],[[72294,76218],[-22,328],[190,150],[-250,1000],[550,231],[143,128],[200,1031],[551,-190],[155,261],[13,577],[230,54],[212,383]],[[74266,80171],[109,48]],[[74375,80219],[73,-402],[233,-306],[396,-216],[192,-464],[-107,-673],[100,-249],[330,-99],[374,-80],[336,-359],[171,-64],[127,-531],[163,-342],[306,14],[574,-129],[369,80],[274,-86],[411,-350],[336,1],[123,-179],[324,309],[448,200],[417,21],[324,203],[200,309],[194,193],[-45,190],[-89,222],[146,371],[156,-52],[286,-117],[277,306],[423,223],[204,380],[195,164],[404,77],[219,-65],[30,204],[-251,403],[-223,184],[-214,-212],[-274,89],[-157,-73],[-72,236],[197,575],[135,434]],[[82410,80559],[333,-217],[392,364],[-3,253],[251,611],[155,184],[-4,318],[-152,137],[229,287],[345,104],[369,15],[415,-171],[244,-212],[172,-581],[104,-248],[97,-354],[103,-564],[483,-184],[329,-409],[112,-541],[423,-1],[240,227],[459,170],[-146,-518],[-107,-211],[-96,-631],[-186,-560],[-338,102],[-238,-203],[73,-494],[-40,-680],[-142,-16],[2,-292]],[[49206,54706],[-126,-6],[-194,112],[-178,-6],[-329,-101],[-193,-166],[-275,-211],[-54,15]],[[47857,54343],[22,474],[26,72],[-8,227],[-118,241],[-88,39],[-81,158],[60,256],[-28,278],[13,168]],[[47655,56256],[44,0],[17,251],[-22,112],[27,80],[103,69],[-69,461],[-64,238],[23,195],[55,45]],[[47769,57707],[36,52],[77,-86],[215,-5],[51,168],[48,-11],[80,65],[43,-246],[65,72],[114,86]],[[49214,57382],[74,-819],[-117,-484],[-73,-650],[121,-496],[-13,-227]],[[53632,53135],[-35,31],[-164,-74],[-169,77],[-132,-38]],[[53132,53131],[-452,14]],[[52680,53145],[40,454],[-108,381],[-127,98],[-56,258],[-72,82],[4,159]],[[52361,54577],[71,408],[132,556],[81,5],[165,337],[105,9],[156,-236],[191,194],[26,239],[63,232],[43,291],[148,238],[56,403],[59,128],[39,299],[74,368],[234,446],[14,191],[31,104],[-110,229]],[[53939,59018],[9,184],[78,33]],[[54026,59235],[111,-369],[18,-382],[-10,-383],[151,-523],[-155,6],[-78,-41],[-127,57],[-60,-271],[164,-336],[121,-98],[39,-239],[87,-397],[-43,-156]],[[54447,53135],[-20,-311],[-220,136],[-225,152],[-350,23]],[[58564,53850],[-16,-673],[111,-78],[-89,-205],[-107,-153],[-106,-300],[-59,-268],[-15,-462],[-65,-220],[-2,-434]],[[58216,51057],[-80,-161],[-10,-342],[-38,-45],[-26,-315]],[[58149,49238],[50,-530],[-27,-299],[55,-334],[161,-323],[150,-726]],[[58538,47026],[-109,59],[-373,-97],[-75,-69],[-79,-368],[62,-254],[-49,-681],[-34,-578],[75,-103],[194,-224],[76,105],[23,-621],[-212,4],[-114,317],[-103,246],[-213,80],[-62,302],[-170,-182],[-222,81],[-93,261],[-176,53],[-131,-14],[-15,179],[-96,15]],[[53422,48316],[-39,179]],[[53609,49076],[73,-59],[95,221],[152,-6],[17,-163],[104,-102],[164,361],[161,281],[71,185],[-10,473],[121,560],[127,296],[183,278],[32,184],[7,211],[45,200],[-14,326],[34,510],[55,360],[83,308],[16,347]],[[57603,54843],[169,-475],[124,-70],[75,97],[128,-38],[155,122],[66,-246],[244,-383]],[[53309,48928],[-228,610]],[[53081,49538],[212,318],[-105,381],[95,144],[187,71],[23,255],[148,-276],[245,-25],[85,273],[36,382],[-31,450],[-131,341],[120,667],[-69,114],[-207,-47],[-78,298],[21,251]],[[29063,51742],[-119,136],[-137,191],[-79,-92],[-235,80],[-68,248],[-52,-9],[-278,329]],[[28095,52625],[-37,178],[103,44],[-12,288],[65,209],[138,38],[117,362],[106,302],[-102,137],[52,335],[-62,526],[59,152],[-44,487],[-112,306]],[[28366,55989],[36,280],[89,-41],[52,171],[-64,339],[34,85]],[[28513,56823],[143,-19],[209,402],[114,62],[3,190],[51,487],[159,267],[175,11],[22,120],[218,-48],[218,291],[109,128],[134,278],[98,-36],[73,-151],[-54,-194]],[[30185,58611],[-178,-96],[-71,-288],[-107,-165],[-81,-215],[-34,-410],[-77,-337],[144,-39],[35,-265],[62,-126],[21,-232],[-33,-213],[10,-120],[69,-48],[66,-201],[357,55],[161,-73],[196,-496],[112,62],[200,-31],[158,66],[99,-99],[-50,-311],[-62,-193],[-22,-413],[56,-383],[79,-171],[9,-129],[-140,-286],[100,-127],[74,-202],[85,-574]],[[30585,49354],[-139,306],[-83,14],[179,586],[-213,270],[-166,-50],[-101,100],[-153,-152],[-207,72],[-163,603],[-129,149],[-89,272],[-184,272],[-74,-54]],[[26954,56566],[-151,128],[-56,121],[32,100],[-11,127],[-77,138],[-109,113],[-95,74],[-19,168],[-73,103],[18,-167],[-55,-138],[-64,160],[-89,57],[-38,116],[2,175],[36,182],[-78,81],[64,111]],[[26191,58215],[42,74],[183,-152],[63,75],[89,-48],[46,-119],[82,-38],[66,122]],[[26762,58129],[70,-313],[108,-232],[130,-246]],[[27070,57338],[-107,-51],[1,-232],[58,-86],[-41,-68],[10,-104],[-23,-117],[-14,-114]],[[27147,65183],[240,-41],[219,-6],[261,-197],[110,-210],[260,65],[98,-136],[235,-356],[173,-260],[92,8],[165,-118],[-20,-162],[205,-23],[210,-236],[-33,-135],[-185,-73],[-187,-29],[-191,46],[-398,-56],[186,321],[-113,150],[-179,38],[-96,166],[-66,328],[-157,-22],[-259,154],[-83,121],[-362,89],[-97,113],[104,144],[-273,29],[-199,-299],[-115,-8],[-40,-141],[-138,-63],[-118,55],[146,178],[60,208],[126,128],[142,112],[210,55],[67,63]],[[59092,72066],[19,3],[40,139],[200,-8],[253,172],[-188,-245],[21,-108]],[[59437,72019],[-30,20],[-53,-44],[-42,12],[-14,-22],[-5,59],[-20,35],[-54,6],[-75,-49],[-52,30]],[[59437,72019],[8,-46],[-285,-234],[-136,74],[-64,232],[132,21]],[[53776,79977],[-157,247],[-141,139],[-30,243],[-49,171],[202,125],[103,144],[200,111],[70,110],[73,-66],[124,60]],[[54171,81261],[132,-186],[207,-50],[-17,-158],[151,-119],[41,148],[191,-64],[26,-180],[207,-35],[127,-284]],[[55236,80333],[-82,0],[-43,-104],[-64,-25],[-18,-131],[-54,-28],[-7,-53],[-95,-60],[-123,10],[-39,-127]],[[52756,83493],[4,-222],[281,-135],[-3,-204],[283,108],[156,158],[313,-228],[132,-183]],[[53922,82787],[64,-293],[-77,-154],[101,-205],[69,-308],[-22,-199],[114,-367]],[[52074,79253],[35,410],[140,395],[-400,106],[-131,151]],[[51718,80315],[16,252],[-56,130]],[[51710,81086],[-47,604],[167,0],[70,217],[69,527],[-51,195]],[[51918,82629],[54,122],[232,31],[52,-127],[188,284],[-63,216],[-13,326]],[[52368,83481],[210,-76],[178,88]],[[61966,59143],[66,-178],[-9,-240],[-158,-137],[119,-158]],[[61984,58430],[-102,-308]],[[61882,58122],[-62,103],[-67,-41],[-155,9],[-4,176],[-22,159],[94,269],[98,255]],[[61764,59052],[119,-50],[83,141]],[[53524,83854],[-166,-466],[-291,325],[-39,239],[408,191],[88,-289]],[[52368,83481],[-113,320],[-8,589],[46,155],[80,173],[244,36],[98,159],[223,162],[-9,-296],[-82,-188],[33,-161],[151,-87],[-68,-217],[-83,62],[-200,-415],[76,-280]],[[30080,63183],[34,98],[217,-3],[165,-148],[73,14],[50,-204],[152,11],[-9,-171],[124,-21],[136,-211],[-103,-235],[-132,126],[-127,-25],[-92,28],[-50,-105],[-106,-36],[-43,140],[-92,-83],[-111,-394],[-71,92],[-14,165]],[[30081,62221],[5,157],[-71,172],[68,97],[21,222],[-24,314]],[[53333,65346],[-952,-1097],[-804,-1132],[-392,-257]],[[51185,62860],[-308,-56],[-3,366],[-129,94],[-173,165],[-66,270],[-937,1256],[-937,1257]],[[48632,66212],[-1045,1394]],[[47587,67606],[6,112],[-1,38]],[[47592,67756],[-2,682],[449,425],[277,88],[227,155],[107,288],[324,228],[12,427],[161,50],[126,213],[363,97],[51,224],[-73,122],[-96,608],[-17,350],[-104,369]],[[49397,72082],[267,315],[300,100],[175,238],[268,175],[471,102],[459,47],[140,-85],[262,227],[297,4],[113,-134],[190,35]],[[52339,73106],[-57,-295],[44,-549],[-65,-475],[-171,-322],[24,-433],[227,-344],[3,-139],[171,-232],[118,-1034]],[[52633,69283],[90,-509],[15,-267],[-49,-470],[21,-263],[-36,-315],[24,-362],[-110,-240],[164,-420],[11,-247],[99,-321],[130,105],[219,-267],[122,-361]],[[27693,49869],[148,430],[-60,251],[-106,-267],[-166,252],[56,163],[-47,522],[97,87],[52,359],[105,371],[-20,235],[153,123],[190,230]],[[29063,51742],[38,-438],[-86,-374],[-303,-603],[-334,-227],[-170,-501],[-53,-389],[-157,-237],[-116,291],[-113,62],[-114,-45],[-8,211],[79,137],[-33,240]],[[59700,68819],[-78,-232],[-60,-435],[-75,-300],[-65,-100],[-93,186],[-125,257],[-198,825],[-29,-52],[115,-608],[171,-579],[210,-897],[102,-313],[90,-325],[249,-638],[-55,-100],[9,-374],[323,-517],[49,-118]],[[60240,64499],[-1102,0],[-1077,0],[-1117,0]],[[56944,64499],[0,2120],[0,2048],[-83,464],[71,356],[-43,246],[101,276]],[[56990,70009],[369,10],[268,-152],[275,-171],[129,-89],[214,182],[114,165],[245,48],[198,-73],[75,-286],[65,189],[222,-136],[217,-33],[137,145]],[[59518,69808],[182,-989]],[[61764,59052],[-95,187],[-114,337],[-124,185],[-71,199],[-242,231],[-191,7],[-67,120],[-163,-135],[-168,261],[-87,-430],[-323,121]],[[60119,60135],[-30,230],[120,847],[27,382],[88,177],[204,95],[141,328]],[[60669,62194],[161,-666],[77,-529],[152,-281],[379,-544],[154,-328],[151,-332],[87,-198],[136,-173]],[[47490,75948],[14,410],[-114,250],[393,415],[340,-104],[373,4],[296,-98],[230,30],[449,-19]],[[49471,76836],[111,-224],[511,-262],[101,125],[313,-261],[322,75]],[[50829,76289],[15,-335],[-263,-383],[-356,-122],[-25,-194],[-171,-319],[-107,-469],[108,-329],[-160,-257],[-60,-374],[-210,-115],[-197,-443],[-352,-8],[-265,10],[-174,-203],[-106,-218],[-136,48],[-103,195],[-79,331],[-259,89]],[[47929,73193],[-23,191],[103,216],[38,156],[-96,172],[77,378],[-111,345],[120,48],[11,272],[45,84],[3,449],[129,156],[-78,289],[-162,20],[-47,-72],[-164,-1],[-70,282],[-113,-84],[-101,-146]],[[56753,85111],[32,340],[-102,-72],[-176,204],[-24,331],[351,161],[350,83],[301,-95],[287,17]],[[57772,86080],[42,-100],[-198,-332],[83,-537],[-120,-183]],[[57579,84928],[-229,1],[-239,214],[-121,70],[-237,-102]],[[61882,58122],[-61,-204],[103,-317],[102,-277],[106,-206],[909,-683],[233,3]],[[63274,56438],[-785,-1728],[-362,-26],[-247,-406],[-178,-10],[-76,-182]],[[61626,54086],[-190,0],[-112,195],[-254,-241],[-82,-240],[-185,45],[-62,67],[-65,-16],[-87,6],[-352,489],[-193,0],[-95,189],[0,324],[-145,96]],[[59804,55000],[-164,627],[-127,133],[-48,231],[-141,280],[-171,42],[95,328],[147,14],[42,176]],[[59437,56831],[-4,517]],[[59433,57348],[82,603],[132,161],[28,236],[119,440],[168,285],[112,567],[45,495]],[[57942,91602],[-41,-403],[425,-383],[-256,-435],[323,-655],[-187,-494],[250,-429],[-113,-375],[411,-394],[-105,-294],[-258,-333],[-594,-735]],[[57797,86672],[-504,-46],[-489,-211],[-452,-121],[-161,314],[-269,189],[62,567],[-135,520],[133,335],[252,362],[635,624],[185,121],[-28,243],[-387,272]],[[56639,89841],[-93,225],[-8,886],[-433,392],[-371,282]],[[55734,91626],[167,152],[309,-304],[362,29],[298,-140],[265,255],[137,422],[431,196],[356,-229],[-117,-405]],[[99547,41844],[96,-167],[-46,-300],[-172,-79],[-153,71],[-27,253],[107,198],[126,-71],[69,95]],[[0,42577],[57,26],[-34,-277],[-23,-31],[99822,-141],[-177,-122],[-36,215],[139,118],[88,32],[-99836,180]],[[33000,21970],[333,345],[236,-144],[167,231],[222,-259],[-83,-202],[-375,-173],[-125,202],[-236,-259],[-139,259]],[[34854,53161],[70,246],[24,262],[48,246],[-107,340]],[[34889,54255],[-22,394],[144,495]],[[35011,55144],[95,-63],[204,-136],[294,-486],[46,-236]],[[52655,76104],[-92,-445],[-126,118],[-64,387],[56,214],[179,220],[47,-494]],[[51576,80352],[62,-50],[80,13]],[[51900,78315],[-11,-163],[82,-216],[-97,-176],[72,-445],[151,-73],[-32,-250]],[[52065,76992],[-252,-326],[-548,156],[-404,-186],[-32,-347]],[[49471,76836],[144,345],[53,1147],[-287,605],[-205,291],[-424,222],[-28,420],[360,125],[466,-148],[-88,652],[263,-247],[646,449],[84,472],[243,116]],[[53081,49538],[-285,581],[-184,475],[-169,595],[9,192],[61,184],[67,419],[56,427]],[[52636,52411],[94,33],[404,-6],[-2,693]],[[48278,82851],[-210,118],[-172,-8],[57,309],[-57,309]],[[47896,83579],[233,23],[298,-356],[-149,-395]],[[49165,85596],[-297,-623],[283,79],[304,-3],[-72,-469],[-250,-516],[287,-37],[22,-61],[248,-679],[190,-93],[171,-656],[79,-227],[337,-110],[-34,-368],[-142,-169],[111,-298],[-250,-302],[-371,6],[-473,-159],[-130,114],[-183,-270],[-257,65],[-195,-220],[-148,115],[407,605],[249,125],[-2,0],[-434,96],[-79,229],[291,179],[-152,310],[52,377],[413,-52],[1,0],[40,334],[-186,355],[-4,8],[-337,101],[-66,156],[101,258],[-92,158],[-149,-272],[-17,555],[-140,294],[101,595],[216,467],[222,-45],[335,48]],[[61542,75749],[42,246],[-70,393],[-160,212],[-154,66],[-102,177]],[[61098,76843],[34,68],[235,-99],[409,-93],[378,-276],[48,-107],[169,90],[259,-120],[85,-236],[175,-134]],[[62106,75494],[-268,282],[-296,-27]],[[50294,55244],[-436,-337],[-154,-198],[-250,-167],[-248,164]],[[50006,58175],[-20,-180],[116,-297],[-1,-418],[27,-454],[69,-210],[-61,-518],[22,-287],[74,-365],[62,-202]],[[47655,56256],[-78,14],[-57,-232],[-78,3],[-55,123],[19,231],[-116,353],[-73,-65],[-59,-13]],[[47158,56670],[-77,-33],[3,211],[-44,151],[9,168],[-60,242],[-78,206],[-222,0],[-65,-108],[-76,-13],[-48,-125],[-32,-159],[-148,-254]],[[46320,56956],[-122,341],[-108,226],[-71,74],[-69,115],[-32,254],[-41,127],[-80,94]],[[45797,58187],[123,281],[84,-11],[73,97],[61,1],[44,76],[-24,191],[31,60],[5,195]],[[46194,59077],[134,-5],[200,-141],[61,13],[21,64],[151,-45],[40,32]],[[46801,58995],[16,-211],[44,1],[73,77],[46,-20],[77,-146],[119,-46],[76,125],[90,77],[67,80],[55,-15],[62,-126],[33,-159],[114,-241],[-57,-149],[-11,-187],[59,57],[35,-67],[-15,-172],[85,-166]],[[45321,59403],[36,255]],[[45357,59658],[302,17],[63,136],[88,10],[110,-142],[86,-3],[92,97],[56,-166],[-120,-130],[-121,11],[-119,121],[-103,-133],[-50,-5],[-67,-80],[-253,12]],[[45797,58187],[-149,241],[-117,38],[-63,162],[1,88],[-84,122],[-18,124]],[[45367,58962],[147,93],[92,-18],[75,65],[513,-25]],[[52636,52411],[-52,87],[96,647]],[[56583,72391],[152,-194],[216,33],[207,-41],[-7,-100],[151,69],[-35,-170],[-400,-49],[3,95],[-339,112],[52,245]],[[57237,75339],[-169,17],[-145,54],[-336,-150],[192,-323],[-141,-94],[-154,-1],[-147,297],[-52,-127],[62,-344],[139,-270],[-105,-126],[155,-265],[137,-167],[4,-326],[-257,153],[82,-294],[-176,-60],[105,-509],[-184,-7],[-228,251],[-104,460],[-49,384],[-108,264],[-143,329],[-18,164]],[[55838,75350],[182,51],[106,126],[150,-11],[46,100],[53,19]],[[57254,75917],[135,-153],[-86,-360],[-66,-65]],[[37010,99413],[932,344],[975,-26],[354,213],[982,55],[2219,-72],[1737,-457],[-513,-222],[-1062,-25],[-1496,-56],[140,-103],[984,63],[836,-198],[540,176],[231,-206],[-305,-335],[707,214],[1348,223],[833,-111],[156,-246],[-1132,-410],[-157,-133],[-888,-99],[643,-28],[-324,-420],[-224,-373],[9,-641],[333,-376],[-434,-24],[-457,-182],[513,-305],[65,-490],[-297,-53],[360,-495],[-617,-42],[322,-234],[-91,-203],[-391,-89],[-388,-2],[348,-390],[4,-256],[-549,238],[-143,-154],[375,-144],[364,-352],[105,-464],[-495,-111],[-214,222],[-344,331],[95,-391],[-322,-303],[732,-24],[383,-31],[-745,-502],[-755,-454],[-813,-199],[-306,-2],[-288,-222],[-386,-608],[-597,-404],[-192,-23],[-370,-142],[-399,-134],[-238,-357],[-4,-403],[-141,-378],[-453,-461],[112,-450],[-125,-476],[-142,-563],[-391,-35],[-410,471],[-556,3],[-269,315],[-186,563],[-481,716],[-141,375],[-38,517],[-384,532],[100,424],[-186,203],[275,673],[418,214],[110,241],[58,450],[-318,-204],[-151,-85],[-249,-83],[-341,188],[-19,392],[109,306],[258,8],[567,-153],[-478,366],[-249,197],[-276,-81],[-232,143],[310,536],[-169,215],[-220,398],[-335,611],[-353,223],[3,241],[-745,337],[-590,42],[-743,-23],[-677,-42],[-323,183],[-482,362],[729,181],[559,31],[-1188,149],[-627,236],[39,223],[1051,277],[1018,277],[107,210],[-750,206],[243,230],[961,402],[404,62],[-115,258],[658,152],[854,90],[853,6],[303,-180],[737,317],[663,-215],[390,-45],[577,-188],[-660,311],[38,246]],[[24973,59739],[-142,101],[-174,10],[-127,114],[-149,238]],[[24381,60202],[7,168],[32,135],[-39,107],[133,470],[357,1],[7,197],[-45,35],[-31,124],[-103,133],[-103,193],[125,1],[1,324],[259,1],[257,-6]],[[25297,60979],[90,-105],[24,86],[82,-73]],[[25493,60887],[-127,-220],[-131,-161],[-20,-111],[22,-113],[-58,-146]],[[25179,60136],[-65,-36],[15,-67],[-52,-64],[-95,-145],[-9,-85]],[[33400,56648],[183,-212],[171,-375],[8,-297],[105,-13],[149,-281],[109,-201]],[[34125,55269],[-44,-518],[-169,-150],[15,-136],[-51,-297],[123,-418],[89,-1],[37,-325],[169,-501]],[[33129,54824],[-188,437],[75,159],[-5,265],[171,93],[69,108],[-95,213],[24,210],[220,339]],[[25745,59307],[-48,180],[-84,50]],[[25613,59537],[19,231],[-38,62],[-57,41],[-122,-68],[-10,77],[-84,93],[-60,114],[-82,49]],[[25493,60887],[29,-23],[61,101],[79,9],[26,-47],[43,28],[129,-52],[128,15],[90,64],[32,65],[89,-30],[66,-39],[73,13],[55,50],[127,-80],[44,-13],[85,-107],[80,-129],[101,-88],[73,-159]],[[26903,60465],[-95,12],[-38,-79],[-97,-75],[-70,0],[-61,-73],[-56,26],[-47,88],[-29,-17],[-36,-138],[-27,5],[-4,-118],[-97,-159],[-51,-68],[-29,-72],[-82,117],[-60,-154],[-58,4],[-65,-14],[6,-283],[-41,-5],[-35,-131],[-86,-24]],[[55230,78267],[67,-223],[89,-164],[-107,-217]],[[55155,76391],[-31,-98]],[[55124,76293],[-261,213],[-161,207],[-254,171],[-233,424],[56,43],[-127,242],[-5,195],[-179,91],[-85,-249],[-82,193],[6,200],[10,9]],[[53809,78032],[194,-20],[51,98],[94,-94],[109,-12],[-1,161],[97,59],[27,233],[221,153]],[[54601,78610],[88,-71],[208,-247],[229,-111],[104,86]],[[30081,62221],[-185,98],[-131,-40],[-169,42],[-130,-108],[-149,179],[24,186],[256,-80],[210,-46],[100,128],[-127,250],[2,220],[-175,89],[62,159],[170,-25],[241,-90]],[[54716,79543],[141,-148],[103,-62],[233,70],[22,116],[111,17],[135,89],[30,-37],[130,72],[66,136],[91,35],[297,-175],[59,59]],[[56134,79715],[155,-157],[19,-154]],[[56308,79404],[-170,-121],[-131,-391],[-168,-390],[-223,-109]],[[55616,78393],[-173,26],[-213,-152]],[[54601,78610],[-54,194],[-47,7]],[[83531,45933],[-117,-11],[-368,403],[259,113],[146,-175],[97,-175],[-17,-155]],[[84713,46708],[28,-113],[5,-175]],[[84746,46420],[-181,-430],[-238,-127],[-33,69],[25,196],[119,351],[275,229]],[[82749,47167],[100,-153],[172,47],[69,-245],[-321,-116],[-193,-77],[-149,4],[95,332],[153,5],[74,203]],[[84139,47168],[-41,-320],[-417,-163],[-370,71],[0,210],[220,120],[174,-173],[185,44],[249,211]],[[80172,47926],[533,-57],[61,237],[515,-277],[101,-373],[417,-105],[341,-342],[-317,-220],[-306,232],[-251,-15],[-288,42],[-260,104],[-322,220],[-204,57],[-116,-72],[-506,237],[-48,247],[-255,43],[191,550],[337,-34],[224,-225],[115,-44],[38,-205]],[[87423,48251],[-143,-393],[-27,434],[49,207],[58,195],[63,-169],[0,-274]],[[85346,49837],[-104,-191],[-192,106],[-54,248],[281,27],[69,-190]],[[86241,50048],[101,-441],[-234,238],[-232,48],[-157,-38],[-192,20],[65,317],[344,24],[305,-168]],[[89166,50332],[5,-1877],[4,-1876]],[[89175,46579],[-247,472],[-282,116],[-69,-164],[-352,-18],[118,469],[175,160],[-72,626],[-134,483],[-538,488],[-229,48],[-417,532],[-82,-279],[-107,-51],[-63,211],[-1,250],[-212,283],[299,207],[198,-11],[-23,153],[-407,1],[-110,343],[-248,106],[-117,285],[374,140],[142,188],[446,-237],[44,-214],[78,-931],[287,-345],[232,611],[319,347],[247,1],[238,-201],[206,-206],[298,-110]],[[84788,52647],[-223,-571],[-209,-111],[-267,113],[-463,-29],[-243,-83],[-39,-436],[248,-512],[150,261],[518,196],[-22,-265],[-121,83],[-121,-337],[-245,-223],[263,-738],[-50,-198],[249,-665],[-2,-378],[-148,-170],[-109,203],[134,471],[-273,-222],[-69,159],[36,222],[-200,338],[21,561],[-186,-175],[24,-671],[11,-824],[-176,-84],[-119,169],[79,530],[-43,556],[-117,4],[-86,395],[115,377],[40,457],[139,868],[58,238],[237,427],[217,-170],[350,-80],[319,24],[275,419],[48,-129]],[[85746,52481],[-15,-503],[-143,57],[-42,-351],[114,-304],[-78,-69],[-112,365],[-82,736],[56,460],[92,210],[20,-315],[164,-50],[26,-236]],[[80461,52985],[47,-385],[190,-325],[179,117],[177,-42],[162,291],[133,51],[263,-162],[226,123],[143,801],[107,200],[96,655],[319,0],[241,-97]],[[82744,54212],[-158,-520],[204,-545],[-48,-265],[312,-533],[-329,-68],[-93,-393],[12,-522],[-267,-393],[-7,-574],[-107,-881],[-41,205],[-316,-259],[-110,352],[-198,33],[-139,184],[-330,-207],[-101,279],[-182,-32],[-229,67],[-43,772],[-138,160],[-134,493],[-38,504],[32,533],[165,383]],[[79393,48459],[-308,-12],[-234,481],[-356,471],[-119,349],[-210,469],[-138,432],[-212,806],[-244,480],[-81,495],[-103,449],[-250,363],[-145,493],[-209,322],[-290,635],[-24,293],[178,-23],[430,-111],[246,-564],[215,-390],[153,-240],[263,-619],[283,-9],[233,-394],[161,-482],[211,-263],[-111,-471],[159,-200],[100,-14],[47,-402],[97,-321],[204,-51],[135,-365],[-70,-716],[-11,-891]],[[72530,69211],[-176,-261],[-108,-538],[269,-218],[262,-283],[362,-323],[381,-75],[160,-293],[215,-54],[334,-135],[231,10],[32,228],[-36,366],[21,248]],[[77035,68105],[20,-219],[-97,-105],[23,-355],[-199,104],[-359,-397],[8,-330],[-153,-483],[-14,-281],[-124,-474],[-217,131],[-11,-596],[-63,-196],[30,-245],[-137,-137]],[[74730,64531],[-39,-210],[-189,7],[-343,-120],[16,-433],[-148,-341],[-400,-387],[-311,-678],[-209,-363],[-276,-377],[-1,-265],[-138,-142],[-251,-206],[-129,-31],[-84,-439],[58,-749],[15,-478],[-118,-547],[-1,-978],[-144,-28],[-126,-439],[84,-190],[-253,-163],[-93,-392],[-112,-165],[-263,537],[-128,807],[-107,581],[-97,272],[-148,553],[-69,720],[-48,360],[-253,791],[-115,1116],[-83,737],[1,698],[-54,539],[-404,-345],[-196,69],[-362,698],[133,208],[-82,226],[-326,489]],[[68937,65473],[185,384],[612,-1],[-56,494],[-156,292],[-31,444],[-182,258],[306,604],[323,-44],[290,604],[174,584],[270,578],[-4,411],[236,333],[-224,284],[-96,390],[-99,504],[137,249],[421,-141],[310,86],[268,484]],[[48278,82851],[46,-412],[-210,-514],[-493,-340],[-393,87],[225,601],[-145,586],[378,451],[210,269]],[[64978,73251],[244,112],[197,329],[186,-17],[122,108],[197,-53],[308,-292],[221,-63],[318,-510],[207,-21],[24,-484]],[[66909,69007],[137,-302],[112,-348],[266,-253],[7,-508],[133,-93],[23,-265],[-400,-298],[-105,-669]],[[67082,66271],[-523,174],[-303,133],[-313,74],[-118,707],[-133,102],[-214,-103],[-280,-279],[-339,191],[-281,443],[-267,164],[-186,546],[-205,768],[-149,-93],[-177,190],[-104,-224]],[[63490,69064],[-153,302],[-3,307],[-89,0],[46,417],[-143,438],[-340,315],[-193,548],[65,449],[139,199],[-21,336],[-182,173],[-180,687]],[[62436,73235],[-152,461],[55,179],[-87,660],[190,164]],[[63578,73897],[88,-424],[263,-120],[193,-289],[395,-100],[434,153],[27,134]],[[63490,69064],[-164,28]],[[63326,69092],[-187,48],[-204,-553]],[[62935,68587],[-516,46],[-784,1158],[-413,403],[-335,156]],[[60887,70350],[-112,701]],[[60775,71051],[615,600],[105,696],[-26,421],[152,142],[142,359]],[[61763,73269],[119,90],[324,-75],[97,-146],[133,97]],[[45969,90100],[-64,-373],[314,-392],[-361,-440],[-801,-394],[-240,-105],[-365,85],[-775,182],[273,254],[-605,282],[492,112],[-12,169],[-583,134],[188,375],[421,85],[433,-391],[422,314],[349,-163],[453,307],[461,-41]],[[59922,70666],[-49,-182]],[[59873,70484],[-100,80],[-58,-383],[69,-65],[-71,-79],[-12,-152],[131,78]],[[59832,69963],[7,-224],[-139,-920]],[[59518,69808],[80,190],[-19,32],[74,270],[56,434],[40,146],[8,6]],[[59757,70886],[93,-1],[25,101],[75,7]],[[59950,70993],[4,-236],[-38,-87],[6,-4]],[[54311,73846],[-100,-453],[41,-179],[-58,-296],[-213,217],[-141,62],[-387,293],[38,296],[325,-53],[284,63],[211,50]],[[52558,75561],[166,-408],[-39,-762],[-126,36],[-113,-192],[-105,153],[-11,694],[-64,330],[153,-29],[139,178]],[[53835,78613],[-31,-283],[67,-246]],[[53871,78084],[-221,84],[-226,-204],[15,-286],[-34,-164],[91,-293],[261,-290],[140,-476],[309,-464],[217,3],[68,-127],[-78,-115],[249,-208],[204,-174],[238,-301],[29,-107],[-52,-206],[-154,268],[-242,95],[-116,-372],[200,-214],[-33,-300],[-116,-34],[-148,-494],[-116,-45],[1,176],[57,309],[60,123],[-108,334],[-85,290],[-115,72],[-82,249],[-179,104],[-120,232],[-206,37],[-217,260],[-254,375],[-189,332],[-86,569],[-138,67],[-226,190],[-128,-78],[-161,-267],[-115,-42]],[[28453,62478],[187,-52],[147,-138],[46,-158],[-195,-11],[-84,-96],[-156,92],[-159,210],[34,132],[116,40],[64,-19]],[[59922,70666],[309,-228],[544,613]],[[60887,70350],[-53,-87],[-556,-289],[277,-575],[-92,-98],[-46,-193],[-212,-80],[-66,-207],[-120,-177],[-310,91]],[[59709,68735],[-9,84]],[[59832,69963],[41,169],[0,352]],[[87399,71495],[35,-197],[-156,-349],[-114,185],[-143,-134],[-73,-337],[-181,164],[2,273],[154,344],[158,-67],[114,242],[204,-124]],[[89159,73219],[-104,-460],[48,-288],[-145,-406],[-355,-271],[-488,-36],[-396,-657],[-186,221],[-12,431],[-483,-127],[-329,-271],[-325,-11],[282,-424],[-186,-979],[-179,-242],[-135,224],[69,519],[-176,167],[-113,395],[263,177],[145,362],[280,298],[203,394],[553,171],[297,-117],[291,1024],[185,-275],[408,575],[158,224],[174,704],[-47,648],[117,364],[295,105],[152,-798],[-9,-467],[-256,-580],[4,-594]],[[89974,77268],[195,-122],[197,244],[62,-647],[-412,-157],[-244,-572],[-436,393],[-152,-630],[-308,-9],[-39,573],[138,443],[296,32],[81,797],[83,449],[326,-600],[213,-194]],[[69711,76170],[-159,-107],[-367,-401],[-121,-412],[-104,-4],[-76,273],[-353,18],[-57,472],[-135,4],[21,578],[-333,421],[-476,-45],[-326,-84],[-265,519],[-227,218],[-431,412],[-52,50],[-715,-340],[11,-2124]],[[65546,75618],[-142,-28],[-195,452],[-188,161],[-315,-120],[-123,-191]],[[64583,75892],[-15,140],[68,240],[-53,201],[-322,196],[-125,517],[-154,146],[-9,187],[270,-54],[11,421],[236,93],[243,-86],[50,562],[-50,356],[-278,-28],[-236,141],[-321,-253],[-259,-121]],[[63639,78550],[-142,93],[29,296],[-177,385],[-207,-16],[-235,391],[160,436],[-81,118],[222,632],[285,-334],[35,421],[573,626],[434,15],[612,-399],[329,-233],[295,243],[440,12],[356,-298],[80,170],[391,-24],[69,272],[-450,396],[267,281],[-52,157],[266,150],[-200,394],[127,197],[1039,200],[136,142],[695,213],[250,239],[499,-124],[88,-597],[290,140],[356,-197],[-23,-314],[267,33],[696,543],[-102,-180],[355,-445],[620,-1463],[148,302],[383,-332],[399,148],[154,-104],[133,-332],[194,-112],[119,-244],[358,77],[147,-353]],[[72294,76218],[-171,84],[-140,207],[-412,61],[-461,15],[-100,-63],[-396,242],[-158,-119],[-43,-340],[-457,198],[-183,-81],[-62,-252]],[[61551,50860],[-195,-230],[-68,-240],[-104,-42],[-40,-406],[-89,-233],[-54,-383],[-112,-190]],[[60889,49136],[-399,576],[-19,334],[-1007,1173],[-47,63]],[[59417,51282],[-3,611],[80,233],[137,381],[101,420],[-123,661],[-32,289],[-132,400]],[[59445,54277],[171,344],[188,379]],[[61626,54086],[-243,-653],[3,-2098],[165,-475]],[[70465,74537],[-526,-87],[-343,187],[-301,-45],[26,332],[303,-96],[101,177]],[[69725,75005],[212,-56],[355,414],[-329,304],[-198,-144],[-205,217],[234,373],[-83,57]],[[78495,58847],[-66,696],[178,479],[359,110],[261,-83]],[[79227,60049],[229,-226],[126,397],[246,-212]],[[79828,60008],[64,-384],[-34,-690],[-467,-443],[122,-349],[-292,-42],[-240,-232]],[[78981,57868],[-233,84],[-112,301],[-141,594]],[[85652,74065],[240,-679],[68,-373],[3,-664],[-105,-316],[-252,-111],[-222,-239],[-250,-49],[-31,313],[51,432],[-122,600],[206,97],[-190,493]],[[85048,73569],[17,52],[124,-21],[108,260],[197,28],[118,38],[40,139]],[[55575,76355],[52,129]],[[55627,76484],[66,42],[38,191],[50,32],[40,-81],[52,-36],[36,-92],[46,-27],[54,-107],[39,3],[-31,-140],[-33,-68],[9,-43]],[[55993,76158],[-62,-23],[-164,-89],[-13,-118],[-35,5]],[[63326,69092],[58,-254],[-25,-132],[89,-434]],[[63448,68272],[-196,-15],[-69,274],[-248,56]],[[79227,60049],[90,260],[12,487],[-224,502],[-18,568],[-211,468],[-210,40],[-56,-201],[-163,-17],[-83,102],[-293,-344],[-6,517],[68,606],[-188,27],[-16,346],[-120,178]],[[77809,63588],[59,212],[237,374]],[[78380,64766],[162,-454],[125,-524],[342,-4],[108,-502],[-178,-151],[-80,-207],[333,-345],[231,-680],[175,-508],[210,-400],[70,-407],[-50,-576]],[[59757,70886],[99,469],[138,406],[5,20]],[[59999,71781],[125,-30],[45,-226],[-151,-217],[-68,-315]],[[47857,54343],[-73,-5],[-286,274],[-252,439],[-237,315],[-187,371]],[[46822,55737],[66,184],[15,168],[126,313],[129,268]],[[54125,64996],[-197,-214],[-156,316],[-439,248]],[[52633,69283],[136,133],[24,244],[-30,238],[191,222],[86,185],[135,165],[16,442]],[[53191,70912],[326,-198],[117,50],[232,-96],[368,-258],[130,-512],[250,-111],[391,-242],[296,-286],[136,150],[133,264],[-65,442],[87,280],[200,270],[192,78],[375,-118],[95,-257],[104,-3],[88,-98],[276,-67],[68,-191]],[[56944,64499],[0,-1150],[-320,-2],[-3,-242]],[[56621,63105],[-1108,1103],[-1108,1103],[-280,-315]],[[72718,56162],[-42,-600],[-116,-164],[-242,-132],[-132,458],[-49,828],[126,935],[192,-320],[129,-406],[134,-599]],[[58049,35154],[96,-173],[-85,-281],[-47,-187],[-155,-90],[-51,-184],[-99,-58],[-209,443],[148,365],[151,225],[130,118],[121,-178]],[[56314,83116],[-23,147],[30,157],[-123,92],[-291,100]],[[55907,83612],[-59,485]],[[55848,84097],[318,176],[466,-37],[273,57],[39,-120],[148,-37],[267,-279]],[[56523,82877],[-67,177],[-142,62]],[[55848,84097],[10,433],[136,362],[262,196],[221,-430],[223,11],[53,442]],[[57579,84928],[134,-133],[24,-279],[89,-340]],[[47592,67756],[-42,0],[7,-308],[-172,-19],[-90,-131],[-126,0],[-100,75],[-234,-62],[-91,-449],[-86,-42],[-131,-726],[-386,-621],[-92,-796],[-114,-258],[-33,-208],[-625,-46],[-5,1]],[[45272,64166],[13,267],[106,157],[91,300],[-18,195],[96,406],[155,366],[93,93],[74,336],[6,307],[100,356],[185,210],[177,588],[5,8],[139,221],[259,64],[218,393],[140,154],[232,481],[-70,716],[106,495],[37,304],[179,389],[278,263],[206,238],[186,596],[87,354],[205,-3],[167,-244],[264,39],[288,-127],[121,-6]],[[57394,79599],[66,85],[185,57],[204,-180],[115,-21],[125,-155],[-20,-195],[101,-95],[40,-240],[97,-147],[-19,-86],[52,-58],[-74,-43],[-164,17],[-27,80],[-58,-46],[20,-103],[-76,-184],[-49,-197],[-70,-63]],[[57842,78025],[-50,263],[30,246],[-9,253],[-160,342],[-89,243],[-86,171],[-84,56]],[[63761,44648],[74,-245],[69,-380],[45,-693],[72,-269],[-28,-277],[-49,-169],[-94,338],[-53,-171],[53,-427],[-24,-244],[-77,-133],[-18,-488],[-109,-671],[-137,-793],[-172,-1092],[-106,-800],[-125,-668],[-226,-136],[-243,-244],[-160,147],[-220,206],[-77,304],[-18,510],[-98,460],[-26,414],[50,415],[128,100],[1,191],[133,437],[25,367],[-65,272],[-52,364],[-23,530],[97,322],[38,366],[138,21],[155,118],[103,104],[122,8],[158,328],[229,355],[83,289],[-38,247],[118,-70],[153,401],[6,346],[92,257],[96,-247]],[[23016,66727],[-107,-505],[-49,-415],[-20,-771],[-27,-281],[48,-315],[86,-280],[56,-447],[184,-429],[65,-328],[109,-284],[295,-153],[114,-241],[244,161],[212,58],[208,104],[175,99],[176,235],[67,336],[22,483],[48,169],[188,151],[294,133],[246,-20],[169,49],[66,-122],[-9,-278],[-149,-342],[-66,-351],[51,-100],[-42,-249],[-69,-449],[-71,148],[-58,-10]],[[24381,60202],[-314,620],[-144,187],[-226,150],[-156,-42],[-223,-216],[-140,-57],[-196,152],[-208,109],[-260,264],[-208,81],[-314,268],[-233,275],[-70,154],[-155,34],[-284,183],[-116,262],[-299,327],[-139,363],[-66,281],[93,56],[-29,164],[64,150],[1,199],[-93,259],[-25,229],[-94,290],[-244,573],[-280,450],[-135,359],[-238,235],[-51,140],[42,356],[-142,135],[-164,279],[-69,402],[-149,47],[-162,303],[-130,281],[-12,180],[-149,434],[-99,441],[5,221],[-201,229],[-93,-26],[-159,159],[-44,-234],[46,-276],[27,-433],[95,-237],[206,-397],[46,-135],[42,-41],[37,-198],[49,8],[56,-372],[85,-146],[59,-204],[174,-293],[92,-536],[83,-252],[77,-270],[15,-304],[134,-19],[112,-261],[100,-257],[-6,-104],[-117,-211],[-49,3],[-74,350],[-181,328],[-201,278],[-142,147],[9,421],[-42,312],[-132,179],[-191,257],[-37,-75],[-70,151],[-171,139],[-164,334],[20,44],[115,-33],[103,215],[10,260],[-214,411],[-163,159],[-102,360],[-103,377],[-129,461],[-113,518]],[[17464,70566],[316,44],[353,63],[-26,-113],[419,-280],[634,-406],[552,5],[221,0],[0,237],[481,0],[102,-204],[142,-182],[165,-253],[92,-301],[69,-317],[144,-174],[230,-172],[175,455],[227,11],[196,-230],[139,-394],[96,-338],[164,-328],[61,-403],[78,-271],[217,-178],[197,-127],[108,17]],[[55993,76158],[95,33],[128,10]],[[46619,60247],[93,105],[47,339],[88,13],[194,-160],[157,114],[107,-38],[42,128],[1114,8],[62,404],[-48,71],[-134,2485],[-134,2485],[425,11]],[[51185,62860],[1,-1326],[-152,-384],[-24,-355],[-247,-92],[-379,-49],[-102,-205],[-178,-22]],[[46801,58995],[13,179],[-24,223],[-104,162],[-54,330],[-13,358]],[[77375,57550],[-27,427],[86,441],[-94,341],[23,627],[-113,299],[-90,689],[-50,727],[-121,477],[-183,-289],[-315,-410],[-156,51],[-172,135],[96,714],[-58,539],[-218,664],[34,208],[-163,74],[-197,469]],[[77809,63588],[-159,-134],[-162,-249],[-196,-26],[-127,-623],[-117,-104],[134,-506],[177,-420],[113,-380],[-101,-501],[-96,-106],[66,-289],[185,-458],[32,-321],[-4,-268],[108,-525],[-152,-537],[-135,-591]],[[55380,75946],[-58,44],[-78,188],[-120,115]],[[55338,76894],[74,-99],[40,-80],[91,-62],[106,-119],[-22,-50]],[[74375,80219],[292,99],[530,496],[423,271],[242,-176],[289,-9],[186,-269],[277,-21],[402,-144],[270,401],[-113,339],[288,596],[311,-238],[252,-67],[327,-148],[53,-432],[394,-242],[263,107],[351,75],[279,-76],[272,-276],[168,-295],[258,6],[350,-94],[255,143],[366,96],[407,405],[166,-62],[146,-193],[331,48]],[[59599,45195],[209,47],[334,-163],[73,73],[193,15],[99,173],[167,-10],[303,224],[221,334]],[[61198,45888],[45,-258],[-11,-574],[34,-505],[11,-900],[49,-282],[-83,-412],[-108,-400],[-177,-357],[-254,-219],[-313,-279],[-313,-618],[-107,-106],[-194,-409],[-115,-133],[-23,-411],[132,-436],[54,-337],[4,-173],[49,29],[-8,-565],[-45,-267],[65,-99],[-41,-239],[-116,-205],[-229,-195],[-334,-312],[-122,-213],[24,-242],[71,-39],[-24,-303]],[[59119,36429],[-211,5]],[[58908,36434],[-24,254],[-41,259]],[[58843,36947],[-23,206],[49,642],[-72,410],[-133,810]],[[58664,39015],[292,654],[74,415],[42,52],[31,339],[-45,171],[12,430],[54,400],[0,728],[-145,185],[-132,42],[-60,143],[-128,121],[-232,-11],[-18,215]],[[58409,42899],[-26,410],[843,474]],[[59226,43783],[159,-276],[77,53],[110,-146],[16,-231],[-59,-268],[21,-405],[181,-356],[85,399],[120,122],[-24,740],[-116,417],[-100,185],[-97,-8],[-77,748],[77,438]],[[46619,60247],[-184,395],[-168,424],[-184,153],[-133,169],[-155,-6],[-135,-126],[-138,50],[-96,-185]],[[45426,61121],[-24,311],[78,283],[34,543],[-30,569],[-34,286],[28,287],[-72,274],[-146,249]],[[45260,63923],[60,192],[1088,-4],[-53,832],[68,296],[261,51],[-9,1474],[911,-30],[1,872]],[[59226,43783],[-147,149],[85,535],[87,201],[-53,477],[56,467],[47,156],[-71,489],[-131,257]],[[59099,46514],[273,-108],[55,-159],[95,-269],[77,-783]],[[78372,55412],[64,-54],[164,-347],[116,-386],[16,-388],[-29,-262],[27,-198],[20,-340],[98,-159],[109,-509],[-5,-195],[-197,-38],[-263,426],[-329,457],[-32,294],[-161,385],[-38,477],[-100,314],[30,419],[-61,244]],[[77801,55552],[48,103],[227,-252],[22,-296],[183,69],[91,236]],[[80461,52985],[204,-198],[214,108],[56,488],[119,108],[333,125],[199,456],[137,364]],[[82069,54967],[214,400],[140,450],[112,2],[143,-291],[13,-251],[183,-160],[231,-173],[-20,-226],[-186,-29],[50,-281],[-205,-196]],[[54540,35373],[-207,435],[-108,420],[-62,561],[-68,417],[-93,887],[-7,689],[-35,314],[-108,237],[-144,476],[-146,691],[-60,361],[-226,563],[-17,441]],[[56448,41738],[228,131],[180,-33],[109,-130],[2,-48]],[[55526,37566],[0,-2127],[-248,-294],[-149,-42],[-175,108],[-125,42],[-47,247],[-109,157],[-133,-284]],[[96049,39690],[228,-357],[144,-265],[-105,-138],[-153,155],[-199,259],[-179,306],[-184,406],[-38,195],[119,-8],[156,-196],[122,-196],[89,-161]],[[54125,64996],[68,-895],[104,-150],[4,-183],[116,-198],[-60,-248],[-107,-1168],[-15,-749],[-354,-543],[-120,-759],[115,-213],[0,-371],[178,-13],[-28,-271]],[[53939,59018],[-52,-12],[-188,630],[-65,23],[-217,-322],[-215,168],[-150,34],[-80,-81],[-163,17],[-164,-245],[-141,-14],[-337,298],[-131,-142],[-142,10],[-104,218],[-279,214],[-298,-68],[-72,-124],[-39,-331],[-80,-233],[-19,-514]],[[52361,54577],[-289,-207],[-105,30],[-107,-129],[-222,13],[-149,360],[-91,417],[-197,379],[-209,-7],[-245,1]],[[26191,58215],[-96,181],[-130,233],[-61,194],[-117,181],[-140,260],[31,89],[46,-87],[21,41]],[[26903,60465],[-24,-55],[-14,-129],[29,-210],[-64,-197],[-30,-231],[-9,-254],[15,-148],[7,-260],[-43,-56],[-26,-247],[19,-152],[-56,-147],[12,-156],[43,-94]],[[50920,81398],[143,159],[244,847],[380,241],[231,-16]],[[58639,91887],[-473,-231],[-224,-54]],[[55734,91626],[-172,-23],[-41,-379],[-523,92],[-74,-321],[-267,2],[-183,-409],[-278,-639],[-431,-810],[101,-197],[-97,-228],[-275,10],[-180,-540],[17,-765],[177,-292],[-92,-677],[-231,-395],[-122,-332]],[[53063,85723],[-187,354],[-548,-666],[-371,-135],[-384,293],[-99,619],[-88,1329],[256,371],[733,483],[549,595],[508,802],[668,1112],[465,434],[763,722],[610,252],[457,-31],[423,477],[506,-25],[499,115],[869,-422],[-358,-154],[305,-361]],[[56867,96664],[-620,-236],[-490,134],[191,149],[-167,184],[575,115],[110,-216],[401,-130]],[[55069,97728],[915,-429],[-699,-227],[-155,-424],[-243,-108],[-132,-478],[-335,-22],[-598,351],[252,205],[-416,166],[-541,487],[-216,451],[757,206],[152,-202],[396,8],[105,197],[408,20],[350,-201]],[[57068,98134],[545,-202],[-412,-310],[-806,-68],[-819,96],[-50,159],[-398,10],[-304,264],[858,161],[403,-138],[281,172],[702,-144]],[[98060,28265],[63,-238],[198,233],[80,-243],[0,-242],[-103,-267],[-182,-424],[-142,-232],[103,-277],[-214,-7],[-238,-217],[-75,-377],[-157,-583],[-219,-257],[-138,-164],[-256,12],[-180,190],[-302,40],[-46,212],[149,427],[349,568],[179,109],[200,219],[238,301],[167,299],[123,429],[106,146],[41,321],[195,267],[61,-245]],[[98502,31008],[202,-607],[5,394],[126,-158],[41,-435],[224,-188],[188,-46],[158,220],[141,-67],[-67,-511],[-85,-336],[-212,12],[-74,-175],[26,-248],[-41,-107],[-105,-310],[-138,-395],[-214,-229],[-48,151],[-116,83],[160,474],[-91,317],[-299,230],[8,209],[201,200],[47,444],[-13,372],[-113,386],[8,102],[-133,237],[-218,510],[-117,408],[104,45],[151,-320],[216,-149],[78,-513]],[[64752,61418],[-91,403],[-217,950]],[[64444,62771],[833,576],[185,1152],[-127,408]],[[65665,66183],[125,-393],[155,-209],[203,-76],[165,-105],[125,-330],[75,-191],[100,-73],[-1,-128],[-101,-344],[-44,-161],[-117,-184],[-104,-395],[-126,30],[-58,-137],[-44,-292],[34,-385],[-26,-71],[-128,2],[-174,-215],[-27,-281],[-63,-121],[-173,4],[-109,-145],[1,-232],[-134,-160],[-153,54],[-186,-194],[-128,-33]],[[65575,66834],[80,196],[35,-50],[-26,-238],[-37,-104]],[[68937,65473],[-203,146],[-83,414],[-215,438],[-512,-108],[-451,-11],[-391,-81]],[[28366,55989],[-93,166],[-59,311],[68,154],[-70,40],[-52,190],[-138,160],[-122,-37],[-56,-200],[-112,-145],[-61,-20],[-27,-120],[132,-312],[-75,-74],[-40,-85],[-130,-29],[-48,344],[-36,-98],[-92,33],[-56,232],[-114,38],[-72,68],[-119,-1],[-8,-125],[-32,87]],[[27070,57338],[100,-206],[-6,-122],[111,-26],[26,47],[77,-142],[136,42],[119,145],[168,116],[95,172],[153,-33],[-10,-57],[155,-20],[124,-99],[90,-173],[105,-159]],[[30452,41263],[-279,331],[-24,236],[-551,578],[-498,630],[-214,355],[-115,476],[46,166],[-236,755],[-274,1063],[-262,1147],[-114,262],[-87,424],[-216,376],[-198,233],[90,257],[-134,550],[86,403],[221,364]],[[85104,56675],[28,-382],[16,-323],[-94,-527],[-102,587],[-130,-292],[89,-425],[-79,-270],[-327,335],[-78,416],[84,274],[-176,273],[-87,-239],[-131,22],[-205,-321],[-46,168],[109,486],[175,161],[151,217],[98,-260],[212,157],[45,257],[196,16],[-16,445],[225,-273],[23,-290],[20,-212]],[[84439,57749],[-100,-190],[-87,-363],[-87,-171],[-171,398],[57,154],[70,162],[30,357],[153,34],[-44,-388],[205,556],[-26,-549]],[[82917,57194],[-369,-546],[136,403],[200,355],[167,399],[146,572],[49,-470],[-183,-317],[-146,-396]],[[83856,58678],[166,-179],[177,1],[-5,-240],[-129,-245],[-176,-173],[-10,268],[20,293],[-43,275]],[[84861,58834],[78,-643],[-214,152],[5,-193],[68,-355],[-132,-129],[-11,405],[-84,30],[-43,348],[163,-46],[-4,218],[-169,440],[266,-13],[77,-214]],[[83757,59356],[-74,-498],[-119,288],[-142,438],[238,-21],[97,-207]],[[83700,62485],[171,-164],[85,150],[26,-146],[-46,-239],[95,-413],[-73,-478],[-164,-191],[-43,-465],[62,-458],[147,-64],[123,68],[347,-319],[-27,-313],[91,-139],[-29,-265],[-216,283],[-103,302],[-71,-211],[-177,345],[-253,-86],[-138,128],[14,238],[87,146],[-83,133],[-36,-207],[-137,331],[-41,251],[-11,551],[112,-190],[29,901],[90,522],[169,-1]],[[93299,47902],[-78,-58],[-120,221],[-122,366],[-59,439],[38,55],[30,-171],[84,-130],[135,-366],[131,-195],[-39,-161]],[[92217,48675],[-146,-48],[-44,-161],[-152,-140],[-142,-135],[-148,1],[-228,167],[-158,161],[23,178],[249,-84],[152,45],[42,276],[40,14],[27,-306],[158,44],[78,197],[155,206],[-30,339],[166,11],[56,-94],[-5,-320],[-93,-351]],[[89166,50332],[482,-397],[513,-329],[192,-295],[154,-290],[43,-339],[462,-356],[68,-306],[-256,-62],[62,-383],[248,-378],[180,-611],[159,19],[-11,-255],[215,-98],[-84,-108],[295,-243],[-30,-166],[-184,-40],[-69,149],[-238,65],[-281,86],[-216,368],[-158,316],[-144,504],[-362,252],[-235,-164],[-170,-190],[35,-425],[-218,-198],[-155,96],[-288,25]],[[92538,49238],[-87,-154],[-52,340],[-65,223],[-126,189],[-158,245],[-200,170],[77,139],[150,-162],[94,-126],[117,-139],[111,-241],[106,-185],[33,-299]],[[53922,82787],[189,169],[434,266],[350,195],[277,-97],[21,-140],[268,-8]],[[55461,83172],[342,-65],[511,9]],[[56535,81532],[139,-502],[-29,-162],[-138,-67],[-252,-479],[71,-259],[-60,34]],[[56266,80097],[-264,221],[-200,-81],[-131,59],[-165,-123],[-140,204],[-114,-78],[-16,34]],[[31588,62492],[142,-51],[50,-114],[-71,-146],[-209,4],[-163,-21],[-16,247],[40,84],[227,-3]],[[86288,76244],[39,-101]],[[86327,76143],[-106,35],[-120,-195],[-83,-196],[10,-414],[-143,-127],[-50,-102],[-104,-170],[-185,-95],[-121,-154],[-9,-250],[-32,-63],[111,-94],[157,-253]],[[85048,73569],[-135,109],[-34,-108],[-81,-48],[-10,109],[-72,52],[-75,92],[76,254],[66,67],[-25,105],[71,311],[-18,94],[-163,63],[-131,154]],[[47929,73193],[-112,-149],[-146,81],[-143,-64],[42,451],[-26,354],[-124,53],[-67,218],[22,377],[111,210],[20,232],[58,347],[-6,244],[-56,206],[-12,195]],[[64113,66085],[-18,419],[75,302],[76,62],[84,-180],[5,-337],[-61,-339]],[[64274,66012],[-77,-41],[-84,114]],[[56308,79404],[120,123],[172,-64],[178,-2],[129,-141],[95,89],[205,55],[69,135],[118,0]],[[57842,78025],[124,-106],[131,93],[126,-99]],[[58223,77913],[6,-149],[-135,-124],[-84,54],[-78,-694]],[[56293,77303],[-51,101],[65,97],[-69,72],[-87,-129],[-162,167],[-22,237],[-169,136],[-31,183],[-151,226]],[[89901,81054],[280,-1020],[-411,190],[-171,-832],[271,-590],[-8,-403],[-211,347],[-182,-445],[-51,483],[31,561],[-32,621],[64,436],[13,770],[-163,566],[24,787],[257,265],[-110,267],[123,81],[73,-381],[96,-555],[-7,-567],[114,-581]],[[55461,83172],[63,254],[383,186]],[[99999,92620],[-305,-29],[-49,183],[-99645,240],[36,24],[235,-1],[402,-165],[-24,-79],[-286,-138],[-363,-35],[99999,0]],[[89889,93991],[-421,-4],[-569,64],[-49,31],[263,227],[348,54],[394,-221],[34,-151]],[[91869,95069],[-321,-228],[-444,52],[-516,227],[66,187],[518,-87],[697,-151]],[[90301,95344],[-219,-427],[-1023,16],[-461,-136],[-550,374],[149,396],[366,108],[734,-25],[1004,-306]],[[65981,92556],[-164,-51],[-907,75],[-74,256],[-503,154],[-40,311],[284,124],[-10,314],[551,491],[-255,70],[665,506],[-75,261],[621,304],[917,370],[925,108],[475,214],[541,74],[193,-227],[-187,-179],[-984,-286],[-848,-274],[-863,-548],[-414,-563],[-435,-553],[56,-479],[531,-472]],[[63639,78550],[-127,-342],[-269,-95],[-276,-594],[252,-547],[-27,-388],[303,-678]],[[61098,76843],[-354,486],[-317,218],[-240,338],[202,92],[231,482],[-156,227],[410,236],[-8,125],[-249,-92]],[[60617,78955],[9,255],[143,161],[269,42],[44,192],[-62,318],[113,302],[-3,169],[-410,187],[-162,-6],[-172,270],[-213,-92],[-352,203],[6,113],[-99,250],[-222,28],[-23,178],[70,117],[-178,326],[-288,-56],[-84,29],[-70,-131],[-104,24]],[[57772,86080],[316,318],[-291,274]],[[58639,91887],[286,200],[456,-348],[761,-137],[1050,-652],[213,-273],[18,-384],[-308,-302],[-454,-154],[-1240,438],[-204,-73],[453,-422],[18,-267],[18,-589],[358,-175],[217,-150],[36,279],[-168,248],[177,218],[672,-358],[233,140],[-186,422],[647,564],[256,-33],[260,-202],[161,396],[-231,343],[136,345],[-204,357],[777,-185],[158,-322],[-351,-71],[1,-321],[219,-197],[429,125],[68,367],[580,274],[970,495],[209,-28],[-273,-350],[344,-60],[199,197],[521,16],[412,239],[317,-347],[315,381],[-291,334],[145,190],[820,-175],[385,-180],[1006,-658],[186,302],[-282,304],[-8,122],[-335,57],[92,273],[-149,449],[-8,185],[512,521],[183,523],[206,114],[736,-152],[57,-320],[-263,-468],[173,-183],[89,-403],[-63,-789],[307,-353],[-120,-384],[-544,-818],[318,-85],[110,207],[306,148],[74,285],[240,274],[-162,328],[130,380],[-304,47],[-67,321],[222,578],[-361,469],[497,389],[-64,409],[139,13],[145,-319],[-109,-556],[297,-105],[-127,415],[465,227],[577,30],[513,-328],[-247,479],[-28,614],[483,116],[669,-25],[602,75],[-226,301],[321,378],[319,16],[540,286],[734,77],[93,157],[729,54],[227,-129],[624,306],[510,-10],[77,249],[265,245],[656,236],[476,-186],[-378,-142],[629,-89],[75,-284],[254,140],[812,-8],[626,-281],[223,-215],[-69,-300],[-307,-170],[-730,-320],[-209,-171],[345,-80],[410,-146],[251,109],[141,-369],[122,149],[444,91],[892,-95],[67,-269],[1162,-86],[15,440],[590,-101],[443,3],[449,-303],[128,-369],[-165,-241],[349,-453],[437,-234],[268,605],[446,-260],[473,155],[538,-177],[204,162],[455,-81],[-201,534],[367,250],[2509,-374],[236,-342],[727,-440],[1122,109],[553,-95],[231,-238],[-33,-421],[342,-164],[372,118],[492,15],[525,-113],[526,64],[484,-512],[344,184],[-224,368],[123,256],[886,-161],[578,34],[799,-275],[-99610,-251],[681,-440],[728,-572],[-24,-358],[187,-143],[-64,418],[754,-86],[544,-539],[-276,-251],[-455,-59],[-7,-563],[-111,-120],[-260,17],[-212,201],[-369,168],[-62,250],[-283,94],[-315,-74],[-151,201],[60,214],[-333,-137],[126,-271],[-158,-244],[0,-3],[99640,-253],[-360,42],[250,-307],[166,-474],[128,-155],[32,-238],[-71,-153],[-518,126],[-777,-434],[-247,-67],[-425,-405],[-403,-353],[-102,-262],[-397,399],[-724,-453],[-126,214],[-268,-246],[-371,79],[-90,-379],[-333,-557],[10,-233],[316,-129],[-37,-839],[-258,-21],[-119,-482],[116,-248],[-486,-294],[-96,-657],[-415,-141],[-83,-585],[-400,-536],[-103,396],[-119,841],[-155,1279],[134,799],[234,344],[14,269],[432,129],[496,725],[479,592],[499,459],[223,812],[-337,-49],[-167,-474],[-705,-632],[-227,708],[-717,-196],[-696,-965],[230,-353],[-620,-151],[-430,-59],[20,417],[-431,87],[-344,-283],[-850,99],[-914,-171],[-899,-1124],[-1065,-1358],[438,-73],[136,-360],[270,-128],[178,288],[305,-38],[401,-633],[9,-490],[-217,-576],[-23,-687],[-126,-921],[-418,-833],[-94,-399],[-377,-670],[-374,-665],[-179,-340],[-370,-338],[-175,-8],[-175,280],[-373,-421],[-43,-192]],[[79187,96925],[-1566,-222],[507,756],[229,64],[208,-37],[704,-327],[-82,-234]],[[64204,98215],[-373,-76],[-250,-44],[-39,-94],[-324,-95],[-301,136],[158,180],[-618,17],[542,105],[422,7],[57,-155],[159,138],[262,95],[412,-126],[-107,-88]],[[77760,97255],[-606,-71],[-773,166],[-462,220],[-213,413],[-379,113],[722,394],[600,130],[540,-290],[640,-557],[-69,-518]],[[58449,51176],[110,-325],[-16,-339],[-80,-73]],[[58216,51057],[67,-59],[166,178]],[[45260,63923],[12,243]],[[61883,61244],[-37,246],[-83,173],[-22,230],[-143,206],[-148,483],[-79,469],[-192,397],[-124,94],[-184,549],[-32,400],[12,342],[-159,638],[-130,225],[-150,119],[-92,330],[15,130],[-77,299],[-81,128],[-108,429],[-170,464],[-141,395],[-139,-2],[44,316],[12,201],[34,230]],[[63448,68272],[109,-497],[137,-131],[47,-203],[190,-242],[16,-237],[-27,-192],[35,-193],[80,-162],[37,-189],[41,-141]],[[64274,66012],[53,-220]],[[64444,62771],[-801,-221],[-259,-259],[-199,-604],[-130,-96],[-70,191],[-106,-28],[-269,57],[-50,58],[-321,-13],[-75,-52],[-114,149],[-74,-283],[28,-243],[-121,-183]],[[59434,57280],[-39,11],[5,287],[-33,197],[-143,228],[-34,415],[34,425],[-129,40],[-19,-129],[-167,-29],[67,-169],[23,-346],[-152,-316],[-138,-415],[-144,-59],[-233,336],[-105,-119],[-29,-168],[-143,-109],[-9,-118],[-277,0],[-38,118],[-200,20],[-100,-99],[-77,50],[-143,336],[-48,158],[-200,-79],[-76,-267],[-72,-514],[-95,-109],[-85,-63]],[[56635,56793],[-23,27]],[[56351,58246],[3,140],[-102,169],[-3,335],[-58,222],[-98,-33],[28,211],[72,240],[-32,239],[92,176],[-58,135],[73,355],[127,425],[240,-41],[-14,2286]],[[60240,64499],[90,-565],[-61,-105],[40,-593],[102,-687],[106,-142],[152,-213]],[[59433,57348],[1,-68]],[[59434,57280],[3,-449]],[[59445,54277],[-171,-265],[-195,1],[-224,-135],[-176,129],[-115,-157]],[[56824,56568],[-189,225]],[[45357,59658],[-115,449],[-138,205],[122,109],[134,404],[66,296]],[[45367,58962],[-46,441]],[[95032,45793],[78,-198],[-194,3],[-106,355],[166,-140],[56,-20]],[[94680,46144],[-108,-13],[-170,58],[-58,89],[17,228],[183,-90],[91,-121],[45,-151]],[[94910,46301],[-42,-106],[-206,499],[-57,344],[94,0],[100,-461],[111,-276]],[[94409,47028],[12,-116],[-218,245],[-152,206],[-104,192],[41,59],[128,-138],[228,-265],[65,-183]],[[93760,47598],[-56,-33],[-121,131],[-114,237],[14,96],[166,-243],[111,-188]],[[46822,55737],[-75,43],[-200,232],[-144,308],[-49,211],[-34,425]],[[25613,59537],[-31,-135],[-161,8],[-100,55],[-115,115],[-154,36],[-79,123]],[[61984,58430],[91,-106],[54,-238],[125,-241],[138,-2],[262,147],[302,68],[245,179],[138,38],[99,105],[158,20]],[[63596,58400],[-2,-9],[-1,-237],[0,-581],[0,-301],[-125,-353],[-194,-481]],[[63596,58400],[89,12],[128,85],[147,58],[132,198],[105,1],[6,-159],[-25,-335],[1,-303],[-59,-208],[-78,-622],[-134,-644],[-172,-735],[-238,-844],[-237,-645],[-327,-785],[-278,-467],[-415,-571],[-259,-438],[-304,-698],[-64,-304],[-63,-136]],[[34125,55269],[333,-115],[30,104],[225,41],[298,-155]],[[34889,54255],[109,-341],[-49,-248],[-24,-263],[-71,-242]],[[56266,80097],[-77,-150],[-55,-232]],[[53809,78032],[62,52]],[[56639,89841],[-478,-163],[-269,-401],[43,-353],[-441,-463],[-537,-495],[-202,-811],[198,-406],[265,-320],[-255,-649],[-289,-135],[-106,-967],[-157,-539],[-337,55],[-158,-456],[-321,-27],[-89,545],[-232,653],[-211,814]],[[58908,36434],[-56,-256],[-163,-62],[-166,312],[-2,199],[76,216],[26,168],[80,41],[140,-105]],[[59999,71781],[-26,440],[68,237]],[[60041,72458],[74,126],[75,127],[15,321],[91,-112],[306,160],[147,-108],[229,1],[320,217],[149,-10],[316,89]],[[50518,55366],[-224,-122]],[[78495,58847],[-249,265],[-238,-11],[41,452],[-245,-3],[-22,-633],[-150,-841],[-90,-509],[19,-417],[181,-18],[113,-526],[50,-498],[155,-330],[168,-67],[144,-299]],[[77801,55552],[-110,221],[-47,285],[-148,325],[-135,274],[-45,-339],[-53,320],[30,359],[82,553]],[[68841,73220],[156,583],[-60,429],[-204,137],[72,254],[232,-27],[132,318],[89,370],[371,134],[-58,-267],[40,-161],[114,15]],[[64978,73251],[-52,408],[40,602],[-216,195],[71,394],[-184,34],[61,485],[262,-141],[244,184],[-202,346],[-80,329],[-224,-147],[-28,-422],[-87,374]],[[65546,75618],[313,8],[-45,290],[237,199],[234,334],[374,-304],[30,-460],[106,-118],[301,27],[93,-105],[137,-593],[317,-398],[181,-271],[291,-282],[369,-247],[-7,-352]],[[84713,46708],[32,136],[239,129],[194,20],[87,72],[105,-72],[-102,-156],[-289,-252],[-233,-165]],[[32866,58026],[160,75],[58,-20],[-11,-430],[-232,-63],[-50,52],[81,158],[-6,228]],[[52339,73106],[302,232],[195,-69],[-9,-291],[236,212],[20,-111],[-139,-282],[-2,-266],[96,-143],[-36,-499],[-183,-289],[53,-314],[143,-10],[70,-274],[106,-90]],[[60041,72458],[-102,261],[105,217],[-169,-49],[-233,132],[-191,-331],[-421,-65],[-225,309],[-300,19],[-64,-238],[-192,-69],[-268,307],[-303,-11],[-165,573],[-203,320],[135,447],[-176,276],[308,550],[428,23],[117,438],[529,-76],[334,373],[324,163],[459,13],[485,-406],[399,-223],[323,89],[239,-52],[328,301]],[[57776,76021],[33,-222],[243,-186],[-51,-141],[-330,-32],[-118,-178],[-232,-310],[-87,268],[3,119]],[[83826,65878],[-167,-924],[-119,-472],[-146,486],[-32,427],[163,566],[223,436],[127,-172],[-49,-347]],[[60889,49136],[-128,-710],[16,-326],[178,-210],[8,-149],[-76,-348],[16,-175],[-18,-275],[97,-361],[115,-568],[101,-126]],[[59099,46514],[-157,172],[-177,97],[-111,97],[-116,146]],[[58449,51176],[98,69],[304,-7],[566,44]],[[60617,78955],[-222,-46],[-185,-187],[-260,-30],[-239,-215],[16,-358],[136,-139],[284,35],[-55,-206],[-304,-100],[-377,-333],[-154,117],[61,271],[-304,169],[50,110],[265,191],[-80,132],[-432,146],[-19,215],[-257,-71],[-103,-317],[-215,-426]],[[35174,32383],[-121,-362],[-313,-320],[-205,115],[-151,-62],[-256,247],[-189,-18],[-169,319]],[[6794,62819],[-41,-96],[-69,82],[8,161],[-46,210],[14,64],[48,94],[-19,113],[16,54],[21,-11],[107,-97],[49,-50],[45,-77],[71,-202],[-7,-32],[-108,-123],[-89,-90]],[[6645,63718],[-94,-41],[-47,121],[-32,47],[-3,36],[27,49],[99,-55],[73,-88],[-23,-69]],[[6456,64025],[-9,-63],[-149,17],[21,70],[137,-24]],[[6207,64108],[-15,-33],[-19,8],[-97,20],[-35,130],[-11,23],[74,80],[23,-37],[80,-191]],[[5737,64488],[-33,-57],[-93,105],[14,42],[43,57],[64,-13],[5,-134]],[[31350,77823],[48,-189],[-296,-279],[-286,-198],[-293,-171],[-147,-342],[-47,-129],[-3,-306],[92,-305],[115,-14],[-29,210],[83,-128],[-22,-165],[-188,-93],[-133,11],[-205,-100],[-121,-29],[-162,-28],[-231,-167],[408,108],[82,-109],[-389,-173],[-177,-1],[8,71],[-84,-160],[82,-26],[-60,-414],[-203,-443],[-20,148],[-61,30],[-91,144],[57,-310],[69,-103],[5,-217],[-89,-224],[-157,-460],[-25,23],[86,392],[-142,220],[-33,478],[-53,-249],[59,-365],[-183,90],[191,-185],[12,-548],[79,-40],[29,-199],[39,-577],[-176,-427],[-288,-171],[-182,-338],[-139,-37],[-141,-211],[-39,-193],[-305,-374],[-157,-274],[-131,-342],[-43,-409],[50,-400],[92,-492],[124,-408],[1,-249],[132,-668],[-9,-388],[-12,-224],[-69,-352],[-83,-73],[-137,70],[-44,253],[-105,132],[-148,496],[-129,440],[-42,225],[57,383],[-77,316],[-217,482],[-108,89],[-281,-262],[-49,29],[-135,269],[-174,142],[-314,-72],[-247,63],[-212,-39],[-114,-90],[50,-153],[-5,-234],[59,-113],[-53,-76],[-103,85],[-104,-109],[-202,17],[-207,305],[-242,-72],[-202,133],[-173,-40],[-234,-135],[-253,-427],[-276,-248],[-152,-275],[-63,-259],[-3,-397],[14,-277],[52,-196]],[[17464,70566],[-46,294],[-180,331],[-130,69],[-30,165],[-156,29],[-100,156],[-258,57],[-71,93],[-33,316],[-270,578],[-231,801],[10,133],[-123,190],[-215,483],[-38,469],[-148,315],[61,477],[-10,494],[-89,441],[109,543],[34,523],[33,522],[-50,773],[-88,492],[-80,268],[33,112],[402,-195],[148,-544],[69,152],[-45,472],[-94,473]],[[7498,84721],[-277,-219],[-142,148],[-43,270],[252,205],[148,88],[185,-39],[117,-179],[-240,-274]],[[4006,86330],[-171,-89],[-182,107],[-168,157],[274,98],[220,-52],[27,-221]],[[2297,88560],[171,-109],[173,59],[225,-152],[276,-77],[-23,-63],[-211,-121],[-211,125],[-106,104],[-245,-33],[-66,51],[17,216]],[[13740,83389],[-153,217],[-245,183],[-78,503],[-358,466],[-150,543],[-267,38],[-441,14],[-326,165],[-574,598],[-266,109],[-486,206],[-385,-49],[-546,264],[-330,246],[-309,-122],[58,-400],[-154,-37],[-321,-120],[-245,-195],[-308,-122],[-39,339],[125,565],[295,177],[-76,145],[-354,-321],[-190,-383],[-400,-410],[203,-280],[-262,-413],[-299,-241],[-278,-176],[-69,-255],[-434,-297],[-87,-271],[-325,-246],[-191,44],[-259,-160],[-282,-196],[-231,-193],[-477,-164],[-43,96],[304,270],[271,177],[296,315],[345,65],[137,236],[385,345],[62,115],[205,204],[48,437],[141,340],[-320,-175],[-90,99],[-150,-209],[-181,292],[-75,-207],[-104,287],[-278,-230],[-170,0],[-24,343],[50,211],[-179,205],[-361,-110],[-235,270],[-190,138],[-1,327],[-214,245],[108,331],[226,322],[99,295],[225,42],[191,-92],[224,278],[201,-50],[212,179],[-52,263],[-155,104],[205,222],[-170,-7],[-295,-125],[-85,-127],[-219,127],[-392,-65],[-407,138],[-117,232],[-351,334],[390,241],[620,282],[228,0],[-38,-288],[586,22],[-225,357],[-342,219],[-197,288],[-267,246],[-381,182],[155,302],[493,19],[350,262],[66,280],[284,274],[271,66],[526,256],[256,-39],[427,307],[421,-121],[201,-260],[123,112],[469,-35],[-16,-132],[425,-98],[283,57],[585,-182],[534,-54],[214,-75],[370,94],[421,-173],[302,-81]],[[30185,58611],[-8,-136],[-163,-67],[91,-262],[-3,-301],[-123,-334],[105,-457],[120,37],[62,417],[-86,202],[-14,436],[346,234],[-38,272],[97,181],[100,-404],[195,-10],[180,-321],[11,-190],[249,-6],[297,60],[159,-258],[213,-71],[155,180],[4,145],[344,34],[333,8],[-236,-170],[95,-272],[222,-43],[210,-283],[45,-462],[144,13],[109,-135]],[[80013,64241],[-371,-493],[-231,-544],[-61,-399],[212,-607],[260,-753],[252,-356],[169,-462],[127,-1066],[-37,-1013],[-232,-379],[-318,-371],[-227,-480],[-346,-536],[-101,369],[78,390],[-206,327]],[[96623,42347],[-92,-76],[-93,252],[10,155],[175,-331]],[[96418,43229],[45,-464],[-75,72],[-58,-31],[-39,159],[-6,441],[133,-177]],[[64752,61418],[-201,-154],[-54,-256],[-6,-196],[-277,-244],[-444,-268],[-249,-406],[-122,-32],[-83,34],[-163,-239],[-177,-111],[-233,-30],[-70,-33],[-61,-152],[-73,-42],[-43,-146],[-137,12],[-89,-78],[-192,30],[-72,336],[8,315],[-46,170],[-54,426],[-80,236],[56,28],[-29,264],[34,111],[-12,251]],[[58175,39107],[113,-6],[134,-97],[94,69],[148,-58]],[[59119,36429],[-70,-419],[-32,-479],[-72,-260],[-190,-290],[-54,-84],[-118,-292],[-77,-296],[-158,-413],[-314,-594],[-196,-345],[-210,-262],[-290,-224],[-141,-30],[-36,-160],[-169,85],[-138,-109],[-301,111],[-168,-71],[-115,31],[-286,-228],[-238,-91],[-171,-218],[-127,-13],[-117,205],[-94,10],[-120,258],[-13,-80],[-37,155],[2,337],[-90,386],[89,105],[-7,442],[-182,539],[-139,488],[-1,1],[-199,749]],[[58409,42899],[-210,-79],[-159,-230],[-33,-199],[-100,-46],[-241,-473],[-154,-373],[-94,-13],[-90,66],[-311,63]]],"transform":{"scale":[0.0036000360003600037,0.0017364686646866468],"translate":[-180,-90]}}')
}, function(t, e, n) {}, function(t, e, n) {
	0
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return h
	}));
	n(5), n(10), n(11), n(21), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0);
	n(471);

	function o(t) {
		return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function a(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function c(t, e) {
		return (c = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function u(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = f(t);
			if (e) {
				var o = f(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return l(this, n)
		}
	}

	function l(t, e) {
		return !e || "object" !== o(e) && "function" != typeof e ? s(t) : e
	}

	function s(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function f(t) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function p(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var h = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && c(t, e)
		}(f, t);
		var e, n, o, l = u(f);

		function f() {
			var t;
			i(this, f);
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
			return p(s(t = l.call.apply(l, [this].concat(n))), "handleMouseEnter", (function(e) {
				t.props.handleHover && e && t.props.handleHover(e.original, null)
			})), p(s(t), "handleMouseLeave", (function(e) {
				t.props.handleHover && t.props.handleHover(null)
			})), t
		}
		return e = f, (n = [{
			key: "render",
			value: function() {
				return r.c.createElement("div", {
					className: "list"
				})
			}
		}, {
			key: "renderEmpty",
			value: function() {
				return r.c.createElement("div", {
					className: "list list--empty"
				}, r.c.createElement("p", null, "None"))
			}
		}, {
			key: "handleClick",
			value: function(t) {
				this.props.handleClick && t && !t.disabled && this.props.handleClick(t.original)
			}
		}]) && a(e.prototype, n), o && a(e, o), f
	}(r.a)
}, , function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return o
	}));
	n(140), n(109);

	function r(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}
	var o = function() {
		function t(e, n) {
			if (function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), !e) return t.data && (this.year = t.data.years.getLast(), this.exporter = t.data.countries.getDefault(), this.importer = t.data.countries.getDefault(), this.category = t.data.categories.getDefault(), this.units = "value", this.autozoom = !0), this;
			this.parseParams(e, n)
		}
		var e, n, o;
		return e = t, (n = [{
			key: "parseParams",
			value: function(t, e) {
				t.year ? this.year = e.years.get(t.year) : this.year = e.years.getLast(), t.exporter ? isFinite(t.exporter) ? this.exporter = e.countries.get(t.exporter) : this.exporter = e.countryGroups.get(t.exporter) : this.exporter = e.countries.getDefault(), t.importer ? isFinite(t.importer) ? this.importer = e.countries.get(t.importer) : this.importer = e.countryGroups.get(t.importer) : this.importer = e.countries.getDefault(), t.category ? isFinite(t.category) ? this.category = e.categories.get(t.category) : this.category = e.categoryGroups.get(t.category) : this.category = e.categories.getDefault(), t.units ? this.units = t.units : this.units = "value", this.autozoom = void 0 === t.autozoom || !!parseInt(t.autozoom, 10)
			}
		}, {
			key: "set",
			value: function(t, e) {
				this[t] = e
			}
		}, {
			key: "clone",
			value: function() {
				var e = new t;
				return e.year = this.year, e.exporter = this.exporter, e.importer = this.importer, e.category = this.category, e.units = this.units, e.autozoom = this.autozoom, e
			}
		}, {
			key: "equals",
			value: function(t) {
				return this.year === t.year && this.exporter === t.exporter && this.importer === t.importer && this.category === t.category
			}
		}, {
			key: "toString",
			value: function(t) {
				var e = [];
				return e.push("year=" + this.year.id), this.exporter && this.exporter.id && e.push("exporter=" + this.exporter.id), this.importer && this.importer.id && e.push("importer=" + this.importer.id), this.category && this.category.id && e.push("category=" + this.category.id), (!t || t.indexOf("units") < 0) && e.push("units=" + this.units), e.push("autozoom=".concat(this.autozoom ? 1 : 0)), e.join("&")
			}
		}]) && r(e.prototype, n), o && r(e, o), t
	}()
}, function(t, e, n) {
	var r = n(249),
		o = n(158),
		i = n(447),
		a = n(247),
		c = o((function(t) {
			return i(r(t, 1, a, !0))
		}));
	t.exports = c
}, , , , function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(61),
		i = n(410),
		a = n(411),
		c = n(8),
		u = 1..toFixed,
		l = Math.floor,
		s = function(t, e, n) {
			return 0 === e ? n : e % 2 == 1 ? s(t, e - 1, n * t) : s(t * t, e / 2, n)
		};
	r({
		target: "Number",
		proto: !0,
		forced: u && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !c((function() {
			u.call({})
		}))
	}, {
		toFixed: function(t) {
			var e, n, r, c, u = i(this),
				f = o(t),
				p = [0, 0, 0, 0, 0, 0],
				h = "",
				d = "0",
				y = function(t, e) {
					for (var n = -1, r = e; ++n < 6;) r += t * p[n], p[n] = r % 1e7, r = l(r / 1e7)
				},
				v = function(t) {
					for (var e = 6, n = 0; --e >= 0;) n += p[e], p[e] = l(n / t), n = n % t * 1e7
				},
				m = function() {
					for (var t = 6, e = ""; --t >= 0;)
						if ("" !== e || 0 === t || 0 !== p[t]) {
							var n = String(p[t]);
							e = "" === e ? n : e + a.call("0", 7 - n.length) + n
						} return e
				};
			if (f < 0 || f > 20) throw RangeError("Incorrect fraction digits");
			if (u != u) return "NaN";
			if (u <= -1e21 || u >= 1e21) return String(u);
			if (u < 0 && (h = "-", u = -u), u > 1e-21)
				if (n = (e = function(t) {
						for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
						for (; n >= 2;) e += 1, n /= 2;
						return e
					}(u * s(2, 69, 1)) - 69) < 0 ? u * s(2, -e, 1) : u / s(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
					for (y(0, n), r = f; r >= 7;) y(1e7, 0), r -= 7;
					for (y(s(10, r, 1), 0), r = e - 1; r >= 23;) v(1 << 23), r -= 23;
					v(1 << r), y(1, 1), v(2), d = m()
				} else y(0, n), y(1 << -e, 0), d = m() + a.call("0", f);
			return d = f > 0 ? h + ((c = d.length) <= f ? "0." + a.call("0", f - c) + d : d.slice(0, c - f) + "." + d.slice(c - f)) : h + d
		}
	})
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return b
	}));
	n(5), n(10), n(11), n(21), n(9), n(16), n(17), n(6), n(18), n(7), n(12), n(13), n(256);
	var r = n(0),
		o = (n(15), n(49));

	function i(t) {
		var e = t.state,
			n = t.onClick;
		return r.c.createElement("div", {
			class: "download-button",
			"aria-live": "assertive"
		}, r.c.createElement(o.a, {
			kind: "rounded",
			icon: "pending" === e ? "loader" : "download",
			disabled: "pending" === e || null,
			tabIndex: 0,
			ariaLabel: "pending" === e ? "Download pending��" : "Download data",
			handleClick: n
		}))
	}
	var a = n(77);

	function c(t) {
		return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function u(t, e) {
		return (u = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function l(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = p(t);
			if (e) {
				var o = p(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return s(this, n)
		}
	}

	function s(t, e) {
		return !e || "object" !== c(e) && "function" != typeof e ? f(t) : e
	}

	function f(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function p(t) {
		return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function h(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	function d(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function y(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function v(t, e, n) {
		return e && y(t.prototype, e), n && y(t, n), t
	}
	var m = function() {
			function t(e, n) {
				d(this, t), this.job = null, this.pingTimeout = null, this.pingCount = 0, this.onComplete = n, this.init(e)
			}
			return v(t, [{
				key: "init",
				value: function(t) {
					var e = this,
						n = "".concat(__config.api_path, "downloads?").concat(t.toString());
					Object(a.b)(n, (function(t) {
						e.job = t.job, e.ping()
					}))
				}
			}, {
				key: "ping",
				value: function() {
					var t = this,
						e = 500 + 500 * Math.sqrt(2 * this.pingCount);
					this.pingTimeout = window.setTimeout((function() {
						var e = "".concat(__config.api_path, "downloads/").concat(t.job);
						Object(a.b)(e, (function(e) {
							"completed" === e.status && e.filename ? t.trigger(e.filename, e.url) : t.ping()
						}))
					}), e), this.pingCount++
				}
			}, {
				key: "trigger",
				value: function(t, e) {
					e || (e = "/temp/".concat(t)), this.onComplete(), window.location.href = e
				}
			}, {
				key: "cancel",
				value: function() {
					window.clearTimeout(this.pingTimeout), this.onComplete()
				}
			}]), t
		}(),
		b = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && u(t, e)
			}(n, t);
			var e = l(n);

			function n() {
				var t;
				return d(this, n), h(f(t = e.call(this)), "handleClick", (function() {
					var e = new m(t.props.query, (function() {
						t.setState({
							status: "uninitialized"
						}), t.props.handleComplete && t.props.handleComplete()
					}));
					t.setState({
						status: "pending"
					}), t.props.handleStart && t.props.handleStart(e)
				})), h(f(t), "handleWindowUnload", (function(e) {
					if ("pending" === t.state.status) return e.returnValue = !0, !0
				})), t.state = {
					status: "uninitialized"
				}, t
			}
			return v(n, [{
				key: "render",
				value: function(t, e) {
					return r.c.createElement("div", {
						className: "download"
					}, r.c.createElement(i, {
						state: e.status,
						onClick: this.handleClick
					}))
				}
			}]), n
		}(r.a)
}, , , function(t, e, n) {
	"use strict";
	n.r(e);
	var r = n(2);
	"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.5.4", r.i, {
		Fragment: r.b,
		Component: r.a
	})
}, function(t, e, n) {}, function(t, e, n) {
	var r = n(45);
	t.exports = function(t) {
		if ("number" != typeof t && "Number" != r(t)) throw TypeError("Incorrect invocation");
		return +t
	}
}, function(t, e, n) {
	"use strict";
	var r = n(61),
		o = n(41);
	t.exports = "".repeat || function(t) {
		var e = String(o(this)),
			n = "",
			i = r(t);
		if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
		for (; i > 0;
			(i >>>= 1) && (e += e)) 1 & i && (n += e);
		return n
	}
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
	! function() {
		"use strict";
		var e = Math.abs,
			r = Math.min,
			o = Math.max,
			i = Math.acos,
			a = Math.sqrt,
			c = Math.PI,
			u = {
				x: 0,
				y: 0,
				z: 0
			},
			l = n(418),
			s = n(450),
			f = function(t) {
				var n = t && t.forEach ? t : [].slice.call(arguments),
					r = !1;
				if ("object" == typeof n[0]) {
					r = n.length;
					var o = [];
					n.forEach((function(t) {
						["x", "y", "z"].forEach((function(e) {
							void 0 !== t[e] && o.push(t[e])
						}))
					})), n = o
				}
				var i = !1,
					a = n.length;
				if (r) {
					if (r > 4) {
						if (1 !== arguments.length) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
						i = !0
					}
				} else if (6 !== a && 8 !== a && 9 !== a && 12 !== a && 1 !== arguments.length) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
				var c = !i && (9 === a || 12 === a) || t && t[0] && void 0 !== t[0].z;
				this._3d = c;
				for (var u = [], s = 0, f = c ? 3 : 2; s < a; s += f) {
					var p = {
						x: n[s],
						y: n[s + 1]
					};
					c && (p.z = n[s + 2]), u.push(p)
				}
				this.order = u.length - 1, this.points = u;
				var h = ["x", "y"];
				c && h.push("z"), this.dims = h, this.dimlen = h.length,
					function(t) {
						for (var n = t.order, r = t.points, o = l.align(r, {
								p1: r[0],
								p2: r[n]
							}), i = 0; i < o.length; i++)
							if (e(o[i].y) > 1e-4) return void(t._linear = !1);
						t._linear = !0
					}(this), this._t1 = 0, this._t2 = 1, this.update()
			};

		function p(t, e, n, r, o) {
			void 0 === o && (o = .5);
			var i = l.projectionratio(o, t),
				a = 1 - i,
				c = {
					x: i * e.x + a * r.x,
					y: i * e.y + a * r.y
				},
				u = l.abcratio(o, t);
			return {
				A: {
					x: n.x + (n.x - c.x) / u,
					y: n.y + (n.y - c.y) / u
				},
				B: n,
				C: c
			}
		}
		f.fromSVG = function(t) {
			var e = t.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g).map(parseFloat);
			return /[cq]/.test(t) ? (e = e.map((function(t, n) {
				return n < 2 ? t : t + e[n % 2]
			})), new f(e)) : new f(e)
		}, f.quadraticFromPoints = function(t, e, n, r) {
			if (void 0 === r && (r = .5), 0 === r) return new f(e, e, n);
			if (1 === r) return new f(t, e, e);
			var o = p(2, t, e, n, r);
			return new f(t, o.A, n)
		}, f.cubicFromPoints = function(t, e, n, r, o) {
			void 0 === r && (r = .5);
			var i = p(3, t, e, n, r);
			void 0 === o && (o = l.dist(e, i.C));
			var a = o * (1 - r) / r,
				c = l.dist(t, n),
				u = (n.x - t.x) / c,
				s = (n.y - t.y) / c,
				h = o * u,
				d = o * s,
				y = a * u,
				v = a * s,
				m = e.x - h,
				b = e.y - d,
				_ = e.x + y,
				g = e.y + v,
				x = i.A,
				w = x.x + (m - x.x) / (1 - r),
				E = x.y + (b - x.y) / (1 - r),
				O = x.x + (_ - x.x) / r,
				S = x.y + (g - x.y) / r,
				P = {
					x: t.x + (w - t.x) / r,
					y: t.y + (E - t.y) / r
				},
				k = {
					x: n.x + (O - n.x) / (1 - r),
					y: n.y + (S - n.y) / (1 - r)
				};
			return new f(t, P, k, n)
		};
		var h = function() {
			return l
		};
		f.getUtils = h, f.prototype = {
			getUtils: h,
			valueOf: function() {
				return this.toString()
			},
			toString: function() {
				return l.pointsToString(this.points)
			},
			toSVG: function(t) {
				if (this._3d) return !1;
				for (var e = this.points, n = ["M", e[0].x, e[0].y, 2 === this.order ? "Q" : "C"], r = 1, o = e.length; r < o; r++) n.push(e[r].x), n.push(e[r].y);
				return n.join(" ")
			},
			update: function() {
				this.dpoints = [];
				for (var t = this.points, e = t.length, n = e - 1; e > 1; e--, n--) {
					for (var r, o = [], i = 0; i < n; i++) r = {
						x: n * (t[i + 1].x - t[i].x),
						y: n * (t[i + 1].y - t[i].y)
					}, this._3d && (r.z = n * (t[i + 1].z - t[i].z)), o.push(r);
					this.dpoints.push(o), t = o
				}
				this.computedirection()
			},
			computedirection: function() {
				var t = this.points,
					e = l.angle(t[0], t[this.order], t[1]);
				this.clockwise = e > 0
			},
			length: function() {
				return l.length(this.derivative.bind(this))
			},
			_lut: [],
			getLUT: function(t) {
				if (t = t || 100, this._lut.length === t) return this._lut;
				this._lut = [];
				for (var e = 0; e <= t; e++) this._lut.push(this.compute(e / t));
				return this._lut
			},
			on: function(t, e) {
				e = e || 5;
				for (var n, r = this.getLUT(), o = [], i = 0, a = 0; a < r.length; a++) n = r[a], l.dist(n, t) < e && (o.push(n), i += a / r.length);
				return !!o.length && i / o.length
			},
			project: function(t) {
				var e = this.getLUT(),
					n = e.length - 1,
					r = l.closest(e, t),
					o = r.mdist,
					i = r.mpos;
				if (0 === i || i === n) {
					var a = i / n,
						c = this.compute(a);
					return c.t = a, c.d = o, c
				}
				var u, s, f, p = (i + 1) / n,
					h = .1 / n;
				for (o += 1, u = a = (i - 1) / n; a < p + h; a += h) s = this.compute(a), (f = l.dist(t, s)) < o && (o = f, u = a);
				return (s = this.compute(u)).t = u, s.d = o, s
			},
			get: function(t) {
				return this.compute(t)
			},
			point: function(t) {
				return this.points[t]
			},
			compute: function(t) {
				if (0 === t) return this.points[0];
				if (1 === t) return this.points[this.order];
				var e = this.points,
					n = 1 - t;
				if (1 === this.order) return s = {
					x: n * e[0].x + t * e[1].x,
					y: n * e[0].y + t * e[1].y
				}, this._3d && (s.z = n * e[0].z + t * e[1].z), s;
				if (this.order < 4) {
					var r, o, i, a = n * n,
						c = t * t,
						l = 0;
					2 === this.order ? (e = [e[0], e[1], e[2], u], r = a, o = n * t * 2, i = c) : 3 === this.order && (r = a * n, o = a * t * 3, i = n * c * 3, l = t * c);
					var s = {
						x: r * e[0].x + o * e[1].x + i * e[2].x + l * e[3].x,
						y: r * e[0].y + o * e[1].y + i * e[2].y + l * e[3].y
					};
					return this._3d && (s.z = r * e[0].z + o * e[1].z + i * e[2].z + l * e[3].z), s
				}
				for (var f = JSON.parse(JSON.stringify(this.points)); f.length > 1;) {
					for (var p = 0; p < f.length - 1; p++) f[p] = {
						x: f[p].x + (f[p + 1].x - f[p].x) * t,
						y: f[p].y + (f[p + 1].y - f[p].y) * t
					}, void 0 !== f[p].z && (f[p] = f[p].z + (f[p + 1].z - f[p].z) * t);
					f.splice(f.length - 1, 1)
				}
				return f[0]
			},
			raise: function() {
				for (var t, e, n = this.points, r = [n[0]], o = n.length, i = 1; i < o; i++) t = n[i], e = n[i - 1], r[i] = {
					x: (o - i) / o * t.x + i / o * e.x,
					y: (o - i) / o * t.y + i / o * e.y
				};
				return r[o] = n[o - 1], new f(r)
			},
			derivative: function(t) {
				var e, n, r = 1 - t,
					o = 0,
					i = this.dpoints[0];
				2 === this.order && (i = [i[0], i[1], u], e = r, n = t), 3 === this.order && (e = r * r, n = r * t * 2, o = t * t);
				var a = {
					x: e * i[0].x + n * i[1].x + o * i[2].x,
					y: e * i[0].y + n * i[1].y + o * i[2].y
				};
				return this._3d && (a.z = e * i[0].z + n * i[1].z + o * i[2].z), a
			},
			inflections: function() {
				return l.inflections(this.points)
			},
			normal: function(t) {
				return this._3d ? this.__normal3(t) : this.__normal2(t)
			},
			__normal2: function(t) {
				var e = this.derivative(t),
					n = a(e.x * e.x + e.y * e.y);
				return {
					x: -e.y / n,
					y: e.x / n
				}
			},
			__normal3: function(t) {
				var e = this.derivative(t),
					n = this.derivative(t + .01),
					r = a(e.x * e.x + e.y * e.y + e.z * e.z),
					o = a(n.x * n.x + n.y * n.y + n.z * n.z);
				e.x /= r, e.y /= r, e.z /= r, n.x /= o, n.y /= o, n.z /= o;
				var i = {
						x: n.y * e.z - n.z * e.y,
						y: n.z * e.x - n.x * e.z,
						z: n.x * e.y - n.y * e.x
					},
					c = a(i.x * i.x + i.y * i.y + i.z * i.z);
				i.x /= c, i.y /= c, i.z /= c;
				var u = [i.x * i.x, i.x * i.y - i.z, i.x * i.z + i.y, i.x * i.y + i.z, i.y * i.y, i.y * i.z - i.x, i.x * i.z - i.y, i.y * i.z + i.x, i.z * i.z];
				return {
					x: u[0] * e.x + u[1] * e.y + u[2] * e.z,
					y: u[3] * e.x + u[4] * e.y + u[5] * e.z,
					z: u[6] * e.x + u[7] * e.y + u[8] * e.z
				}
			},
			hull: function(t) {
				var e, n = this.points,
					r = [],
					o = [],
					i = 0,
					a = 0,
					c = 0;
				for (o[i++] = n[0], o[i++] = n[1], o[i++] = n[2], 3 === this.order && (o[i++] = n[3]); n.length > 1;) {
					for (r = [], a = 0, c = n.length - 1; a < c; a++) e = l.lerp(t, n[a], n[a + 1]), o[i++] = e, r.push(e);
					n = r
				}
				return o
			},
			split: function(t, e) {
				if (0 === t && e) return this.split(e).left;
				if (1 === e) return this.split(t).right;
				var n = this.hull(t),
					r = {
						left: 2 === this.order ? new f([n[0], n[3], n[5]]) : new f([n[0], n[4], n[7], n[9]]),
						right: 2 === this.order ? new f([n[5], n[4], n[2]]) : new f([n[9], n[8], n[6], n[3]]),
						span: n
					};
				return r.left._t1 = l.map(0, 0, 1, this._t1, this._t2), r.left._t2 = l.map(t, 0, 1, this._t1, this._t2), r.right._t1 = l.map(t, 0, 1, this._t1, this._t2), r.right._t2 = l.map(1, 0, 1, this._t1, this._t2), e ? (e = l.map(e, t, 1, 0, 1), r.right.split(e).left) : r
			},
			extrema: function() {
				var t, e, n = this.dims,
					r = {},
					o = [];
				return n.forEach(function(n) {
					e = function(t) {
						return t[n]
					}, t = this.dpoints[0].map(e), r[n] = l.droots(t), 3 === this.order && (t = this.dpoints[1].map(e), r[n] = r[n].concat(l.droots(t))), r[n] = r[n].filter((function(t) {
						return t >= 0 && t <= 1
					})), o = o.concat(r[n].sort())
				}.bind(this)), o = o.sort().filter((function(t, e) {
					return o.indexOf(t) === e
				})), r.values = o, r
			},
			bbox: function() {
				var t = this.extrema(),
					e = {};
				return this.dims.forEach(function(n) {
					e[n] = l.getminmax(this, n, t[n])
				}.bind(this)), e
			},
			overlaps: function(t) {
				var e = this.bbox(),
					n = t.bbox();
				return l.bboxoverlap(e, n)
			},
			offset: function(t, e) {
				if (void 0 !== e) {
					var n = this.get(t),
						r = this.normal(t),
						o = {
							c: n,
							n: r,
							x: n.x + r.x * e,
							y: n.y + r.y * e
						};
					return this._3d && (o.z = n.z + r.z * e), o
				}
				if (this._linear) {
					var i = this.normal(0),
						a = this.points.map((function(e) {
							var n = {
								x: e.x + t * i.x,
								y: e.y + t * i.y
							};
							return e.z && r.z && (n.z = e.z + t * i.z), n
						}));
					return [new f(a)]
				}
				return this.reduce().map((function(e) {
					return e.scale(t)
				}))
			},
			simple: function() {
				if (3 === this.order) {
					var t = l.angle(this.points[0], this.points[3], this.points[1]),
						n = l.angle(this.points[0], this.points[3], this.points[2]);
					if (t > 0 && n < 0 || t < 0 && n > 0) return !1
				}
				var r = this.normal(0),
					o = this.normal(1),
					a = r.x * o.x + r.y * o.y;
				return this._3d && (a += r.z * o.z), e(i(a)) < c / 3
			},
			reduce: function() {
				var t, n, r = 0,
					o = 0,
					i = .01,
					a = [],
					c = [],
					u = this.extrema().values;
				for (-1 === u.indexOf(0) && (u = [0].concat(u)), -1 === u.indexOf(1) && u.push(1), r = u[0], t = 1; t < u.length; t++) o = u[t], (n = this.split(r, o))._t1 = r, n._t2 = o, a.push(n), r = o;
				return a.forEach((function(t) {
					for (r = 0, o = 0; o <= 1;)
						for (o = r + i; o <= 1.01; o += i)
							if (!(n = t.split(r, o)).simple()) {
								if (e(r - (o -= i)) < i) return [];
								(n = t.split(r, o))._t1 = l.map(r, 0, 1, t._t1, t._t2), n._t2 = l.map(o, 0, 1, t._t1, t._t2), c.push(n), r = o;
								break
							} r < 1 && ((n = t.split(r, 1))._t1 = l.map(r, 0, 1, t._t1, t._t2), n._t2 = t._t2, c.push(n))
				})), c
			},
			scale: function(t) {
				var e = this.order,
					n = !1;
				if ("function" == typeof t && (n = t), n && 2 === e) return this.raise().scale(n);
				var r = this.clockwise,
					o = n ? n(0) : t,
					i = n ? n(1) : t,
					c = [this.offset(0, 10), this.offset(1, 10)],
					u = l.lli4(c[0], c[0].c, c[1], c[1].c);
				if (!u) throw new Error("cannot scale this curve. Try reducing it first.");
				var s = this.points,
					p = [];
				return [0, 1].forEach(function(t) {
					var n = p[t * e] = l.copy(s[t * e]);
					n.x += (t ? i : o) * c[t].n.x, n.y += (t ? i : o) * c[t].n.y
				}.bind(this)), n ? ([0, 1].forEach(function(o) {
					if (2 !== this.order || !o) {
						var i = s[o + 1],
							c = {
								x: i.x - u.x,
								y: i.y - u.y
							},
							l = n ? n((o + 1) / e) : t;
						n && !r && (l = -l);
						var f = a(c.x * c.x + c.y * c.y);
						c.x /= f, c.y /= f, p[o + 1] = {
							x: i.x + l * c.x,
							y: i.y + l * c.y
						}
					}
				}.bind(this)), new f(p)) : ([0, 1].forEach(function(t) {
					if (2 !== this.order || !t) {
						var n = p[t * e],
							r = this.derivative(t),
							o = {
								x: n.x + r.x,
								y: n.y + r.y
							};
						p[t + 1] = l.lli4(n, o, u, s[t + 1])
					}
				}.bind(this)), new f(p))
			},
			outline: function(t, e, n, r) {
				e = void 0 === e ? t : e;
				var o, i = this.reduce(),
					a = i.length,
					c = [],
					u = [],
					f = 0,
					p = this.length(),
					h = void 0 !== n && void 0 !== r;

				function d(t, e, n, r, o) {
					return function(i) {
						var a = r / n,
							c = (r + o) / n,
							u = e - t;
						return l.map(i, 0, 1, t + a * u, t + c * u)
					}
				}
				i.forEach((function(o) {
					w = o.length(), h ? (c.push(o.scale(d(t, n, p, f, w))), u.push(o.scale(d(-e, -r, p, f, w)))) : (c.push(o.scale(t)), u.push(o.scale(-e))), f += w
				})), u = u.map((function(t) {
					return (o = t.points)[3] ? t.points = [o[3], o[2], o[1], o[0]] : t.points = [o[2], o[1], o[0]], t
				})).reverse();
				var y = c[0].points[0],
					v = c[a - 1].points[c[a - 1].points.length - 1],
					m = u[a - 1].points[u[a - 1].points.length - 1],
					b = u[0].points[0],
					_ = l.makeline(m, y),
					g = l.makeline(v, b),
					x = [_].concat(c).concat([g]).concat(u),
					w = x.length;
				return new s(x)
			},
			outlineshapes: function(t, e, n) {
				e = e || t;
				for (var r = this.outline(t, e).curves, o = [], i = 1, a = r.length; i < a / 2; i++) {
					var c = l.makeshape(r[i], r[a - i], n);
					c.startcap.virtual = i > 1, c.endcap.virtual = i < a / 2 - 1, o.push(c)
				}
				return o
			},
			intersects: function(t, e) {
				return t ? t.p1 && t.p2 ? this.lineIntersects(t) : (t instanceof f && (t = t.reduce()), this.curveintersects(this.reduce(), t, e)) : this.selfintersects(e)
			},
			lineIntersects: function(t) {
				var e = r(t.p1.x, t.p2.x),
					n = r(t.p1.y, t.p2.y),
					i = o(t.p1.x, t.p2.x),
					a = o(t.p1.y, t.p2.y),
					c = this;
				return l.roots(this.points, t).filter((function(t) {
					var r = c.get(t);
					return l.between(r.x, e, i) && l.between(r.y, n, a)
				}))
			},
			selfintersects: function(t) {
				var e, n, r, o, i = this.reduce(),
					a = i.length - 2,
					c = [];
				for (e = 0; e < a; e++) r = i.slice(e, e + 1), o = i.slice(e + 2), n = this.curveintersects(r, o, t), c = c.concat(n);
				return c
			},
			curveintersects: function(t, e, n) {
				var r = [];
				t.forEach((function(t) {
					e.forEach((function(e) {
						t.overlaps(e) && r.push({
							left: t,
							right: e
						})
					}))
				}));
				var o = [];
				return r.forEach((function(t) {
					var e = l.pairiteration(t.left, t.right, n);
					e.length > 0 && (o = o.concat(e))
				})), o
			},
			arcs: function(t) {
				t = t || .5;
				return this._iterate(t, [])
			},
			_error: function(t, n, r, o) {
				var i = (o - r) / 4,
					a = this.get(r + i),
					c = this.get(o - i),
					u = l.dist(t, n),
					s = l.dist(t, a),
					f = l.dist(t, c);
				return e(s - u) + e(f - u)
			},
			_iterate: function(t, e) {
				var n, r = 0,
					o = 1;
				do {
					n = 0, o = 1;
					var i, a, c, u, s, f = this.get(r),
						p = !1,
						h = !1,
						d = o,
						y = 1;
					do {
						if (h = p, u = c, d = (r + o) / 2, i = this.get(d), a = this.get(o), (c = l.getccenter(f, i, a)).interval = {
								start: r,
								end: o
							}, p = this._error(c, f, r, o) <= t, (s = h && !p) || (y = o), p) {
							if (o >= 1) {
								y = 1, u = c;
								break
							}
							o += (o - r) / 2
						} else o = d
					} while (!s && n++ < 100);
					if (n >= 100) break;
					u = u || c, e.push(u), r = y
				} while (o < 1);
				return e
			}
		}, t.exports = f
	}()
}, function(t, e, n) {
	! function() {
		"use strict";
		var e = Math.abs,
			r = Math.cos,
			o = Math.sin,
			i = Math.acos,
			a = Math.atan2,
			c = Math.sqrt,
			u = Math.pow,
			l = function(t) {
				return t < 0 ? -u(-t, 1 / 3) : u(t, 1 / 3)
			},
			s = Math.PI,
			f = 2 * s,
			p = s / 2,
			h = Number.MAX_SAFE_INTEGER,
			d = Number.MIN_SAFE_INTEGER,
			y = {
				Tvalues: [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213],
				Cvalues: [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872],
				arcfn: function(t, e) {
					var n = e(t),
						r = n.x * n.x + n.y * n.y;
					return void 0 !== n.z && (r += n.z * n.z), c(r)
				},
				between: function(t, e, n) {
					return e <= t && t <= n || y.approximately(t, e) || y.approximately(t, n)
				},
				approximately: function(t, n, r) {
					return e(t - n) <= (r || 1e-6)
				},
				length: function(t) {
					var e, n, r = 0,
						o = y.Tvalues.length;
					for (e = 0; e < o; e++) n = .5 * y.Tvalues[e] + .5, r += y.Cvalues[e] * y.arcfn(n, t);
					return .5 * r
				},
				map: function(t, e, n, r, o) {
					return r + (o - r) * ((t - e) / (n - e))
				},
				lerp: function(t, e, n) {
					var r = {
						x: e.x + t * (n.x - e.x),
						y: e.y + t * (n.y - e.y)
					};
					return e.z && n.z && (r.z = e.z + t * (n.z - e.z)), r
				},
				pointToString: function(t) {
					var e = t.x + "/" + t.y;
					return void 0 !== t.z && (e += "/" + t.z), e
				},
				pointsToString: function(t) {
					return "[" + t.map(y.pointToString).join(", ") + "]"
				},
				copy: function(t) {
					return JSON.parse(JSON.stringify(t))
				},
				angle: function(t, e, n) {
					var r = e.x - t.x,
						o = e.y - t.y,
						i = n.x - t.x,
						c = n.y - t.y;
					return a(r * c - o * i, r * i + o * c)
				},
				round: function(t, e) {
					var n = "" + t,
						r = n.indexOf(".");
					return parseFloat(n.substring(0, r + 1 + e))
				},
				dist: function(t, e) {
					var n = t.x - e.x,
						r = t.y - e.y;
					return c(n * n + r * r)
				},
				closest: function(t, e) {
					var n, r, o = u(2, 63);
					return t.forEach((function(t, i) {
						(r = y.dist(e, t)) < o && (o = r, n = i)
					})), {
						mdist: o,
						mpos: n
					}
				},
				abcratio: function(t, n) {
					if (2 !== n && 3 !== n) return !1;
					if (void 0 === t) t = .5;
					else if (0 === t || 1 === t) return t;
					var r = u(t, n) + u(1 - t, n);
					return e((r - 1) / r)
				},
				projectionratio: function(t, e) {
					if (2 !== e && 3 !== e) return !1;
					if (void 0 === t) t = .5;
					else if (0 === t || 1 === t) return t;
					var n = u(1 - t, e);
					return n / (u(t, e) + n)
				},
				lli8: function(t, e, n, r, o, i, a, c) {
					var u = (t - n) * (i - c) - (e - r) * (o - a);
					return 0 != u && {
						x: ((t * r - e * n) * (o - a) - (t - n) * (o * c - i * a)) / u,
						y: ((t * r - e * n) * (i - c) - (e - r) * (o * c - i * a)) / u
					}
				},
				lli4: function(t, e, n, r) {
					var o = t.x,
						i = t.y,
						a = e.x,
						c = e.y,
						u = n.x,
						l = n.y,
						s = r.x,
						f = r.y;
					return y.lli8(o, i, a, c, u, l, s, f)
				},
				lli: function(t, e) {
					return y.lli4(t, t.c, e, e.c)
				},
				makeline: function(t, e) {
					var r = n(417),
						o = t.x,
						i = t.y,
						a = e.x,
						c = e.y,
						u = (a - o) / 3,
						l = (c - i) / 3;
					return new r(o, i, o + u, i + l, o + 2 * u, i + 2 * l, a, c)
				},
				findbbox: function(t) {
					var e = h,
						n = h,
						r = d,
						o = d;
					return t.forEach((function(t) {
						var i = t.bbox();
						e > i.x.min && (e = i.x.min), n > i.y.min && (n = i.y.min), r < i.x.max && (r = i.x.max), o < i.y.max && (o = i.y.max)
					})), {
						x: {
							min: e,
							mid: (e + r) / 2,
							max: r,
							size: r - e
						},
						y: {
							min: n,
							mid: (n + o) / 2,
							max: o,
							size: o - n
						}
					}
				},
				shapeintersections: function(t, e, n, r, o) {
					if (!y.bboxoverlap(e, r)) return [];
					var i = [],
						a = [t.startcap, t.forward, t.back, t.endcap],
						c = [n.startcap, n.forward, n.back, n.endcap];
					return a.forEach((function(e) {
						e.virtual || c.forEach((function(r) {
							if (!r.virtual) {
								var a = e.intersects(r, o);
								a.length > 0 && (a.c1 = e, a.c2 = r, a.s1 = t, a.s2 = n, i.push(a))
							}
						}))
					})), i
				},
				makeshape: function(t, e, n) {
					var r = e.points.length,
						o = t.points.length,
						i = y.makeline(e.points[r - 1], t.points[0]),
						a = y.makeline(t.points[o - 1], e.points[0]),
						c = {
							startcap: i,
							forward: t,
							back: e,
							endcap: a,
							bbox: y.findbbox([i, t, e, a])
						},
						u = y;
					return c.intersections = function(t) {
						return u.shapeintersections(c, c.bbox, t, t.bbox, n)
					}, c
				},
				getminmax: function(t, e, n) {
					if (!n) return {
						min: 0,
						max: 0
					};
					var r, o, i = h,
						a = d; - 1 === n.indexOf(0) && (n = [0].concat(n)), -1 === n.indexOf(1) && n.push(1);
					for (var c = 0, u = n.length; c < u; c++) r = n[c], (o = t.get(r))[e] < i && (i = o[e]), o[e] > a && (a = o[e]);
					return {
						min: i,
						mid: (i + a) / 2,
						max: a,
						size: a - i
					}
				},
				align: function(t, e) {
					var n = e.p1.x,
						i = e.p1.y,
						c = -a(e.p2.y - i, e.p2.x - n);
					return t.map((function(t) {
						return {
							x: (t.x - n) * r(c) - (t.y - i) * o(c),
							y: (t.x - n) * o(c) + (t.y - i) * r(c)
						}
					}))
				},
				roots: function(t, e) {
					e = e || {
						p1: {
							x: 0,
							y: 0
						},
						p2: {
							x: 1,
							y: 0
						}
					};
					var n = t.length - 1,
						o = y.align(t, e),
						a = function(t) {
							return 0 <= t && t <= 1
						};
					if (2 === n) {
						if (0 !== (p = (h = o[0].y) - 2 * (d = o[1].y) + (v = o[2].y))) {
							var u = -c(d * d - h * v),
								s = -h + d;
							return [-(u + s) / p, -(-u + s) / p].filter(a)
						}
						return d !== v && 0 === p ? [(2 * d - v) / 2 * (d - v)].filter(a) : []
					}
					var p, h, d, v, m, b = o[0].y,
						_ = o[1].y,
						g = o[2].y,
						x = (o = (3 * (d = (-3 * b + 3 * _) / (p = 3 * _ - b - 3 * g + o[3].y)) - (h = (3 * b - 6 * _ + 3 * g) / p) * h) / 3) / 3,
						w = (2 * h * h * h - 9 * h * d + 27 * (v = b / p)) / 27,
						E = w / 2,
						O = E * E + x * x * x;
					if (O < 0) {
						var S = -o / 3,
							P = c(S * S * S),
							k = -w / (2 * P),
							j = i(k < -1 ? -1 : k > 1 ? 1 : k),
							M = 2 * l(P);
						return [M * r(j / 3) - h / 3, M * r((j + f) / 3) - h / 3, M * r((j + 2 * f) / 3) - h / 3].filter(a)
					}
					if (0 === O) return [2 * (m = E < 0 ? l(-E) : -l(E)) - h / 3, -m - h / 3].filter(a);
					var C = c(O);
					return [(m = l(-E + C)) - l(E + C) - h / 3].filter(a)
				},
				droots: function(t) {
					if (3 === t.length) {
						var e = t[0],
							n = t[1],
							r = t[2],
							o = e - 2 * n + r;
						if (0 !== o) {
							var i = -c(n * n - e * r),
								a = -e + n;
							return [-(i + a) / o, -(-i + a) / o]
						}
						return n !== r && 0 === o ? [(2 * n - r) / (2 * (n - r))] : []
					}
					if (2 === t.length) return (e = t[0]) !== (n = t[1]) ? [e / (e - n)] : []
				},
				inflections: function(t) {
					if (t.length < 4) return [];
					var e = y.align(t, {
							p1: t[0],
							p2: t.slice(-1)[0]
						}),
						n = e[2].x * e[1].y,
						r = e[3].x * e[1].y,
						o = e[1].x * e[2].y,
						i = 18 * (-3 * n + 2 * r + 3 * o - (f = e[3].x * e[2].y)),
						a = 18 * (3 * n - r - 3 * o),
						c = 18 * (o - n);
					if (y.approximately(i, 0)) {
						if (!y.approximately(a, 0)) {
							var u = -c / a;
							if (0 <= u && u <= 1) return [u]
						}
						return []
					}
					var l = a * a - 4 * i * c,
						s = Math.sqrt(l),
						f = 2 * i;
					return y.approximately(f, 0) ? [] : [(s - a) / f, -(a + s) / f].filter((function(t) {
						return 0 <= t && t <= 1
					}))
				},
				bboxoverlap: function(t, n) {
					var r, o, i, a, c, u = ["x", "y"],
						l = u.length;
					for (r = 0; r < l; r++)
						if (i = t[o = u[r]].mid, a = n[o].mid, c = (t[o].size + n[o].size) / 2, e(i - a) >= c) return !1;
					return !0
				},
				expandbox: function(t, e) {
					e.x.min < t.x.min && (t.x.min = e.x.min), e.y.min < t.y.min && (t.y.min = e.y.min), e.z && e.z.min < t.z.min && (t.z.min = e.z.min), e.x.max > t.x.max && (t.x.max = e.x.max), e.y.max > t.y.max && (t.y.max = e.y.max), e.z && e.z.max > t.z.max && (t.z.max = e.z.max), t.x.mid = (t.x.min + t.x.max) / 2, t.y.mid = (t.y.min + t.y.max) / 2, t.z && (t.z.mid = (t.z.min + t.z.max) / 2), t.x.size = t.x.max - t.x.min, t.y.size = t.y.max - t.y.min, t.z && (t.z.size = t.z.max - t.z.min)
				},
				pairiteration: function(t, e, n) {
					var r = t.bbox(),
						o = e.bbox(),
						i = 1e5,
						a = n || .5;
					if (r.x.size + r.y.size < a && o.x.size + o.y.size < a) return [(i * (t._t1 + t._t2) / 2 | 0) / i + "/" + (i * (e._t1 + e._t2) / 2 | 0) / i];
					var c = t.split(.5),
						u = e.split(.5),
						l = [{
							left: c.left,
							right: u.left
						}, {
							left: c.left,
							right: u.right
						}, {
							left: c.right,
							right: u.right
						}, {
							left: c.right,
							right: u.left
						}];
					l = l.filter((function(t) {
						return y.bboxoverlap(t.left.bbox(), t.right.bbox())
					}));
					var s = [];
					return 0 === l.length ? s : (l.forEach((function(t) {
						s = s.concat(y.pairiteration(t.left, t.right, a))
					})), s = s.filter((function(t, e) {
						return s.indexOf(t) === e
					})))
				},
				getccenter: function(t, e, n) {
					var i, c = e.x - t.x,
						u = e.y - t.y,
						l = n.x - e.x,
						s = n.y - e.y,
						h = c * r(p) - u * o(p),
						d = c * o(p) + u * r(p),
						v = l * r(p) - s * o(p),
						m = l * o(p) + s * r(p),
						b = (t.x + e.x) / 2,
						_ = (t.y + e.y) / 2,
						g = (e.x + n.x) / 2,
						x = (e.y + n.y) / 2,
						w = b + h,
						E = _ + d,
						O = g + v,
						S = x + m,
						P = y.lli8(b, _, w, E, g, x, O, S),
						k = y.dist(P, t),
						j = a(t.y - P.y, t.x - P.x),
						M = a(e.y - P.y, e.x - P.x),
						C = a(n.y - P.y, n.x - P.x);
					return j < C ? ((j > M || M > C) && (j += f), j > C && (i = C, C = j, j = i)) : C < M && M < j ? (i = C, C = j, j = i) : C += f, P.s = j, P.e = C, P.r = k, P
				}
			};
		t.exports = y
	}()
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.curvePoints = void 0;
	var r, o = function(t, e) {
			if (Array.isArray(t)) return t;
			if (Symbol.iterator in Object(t)) return function(t, e) {
				var n = [],
					r = !0,
					o = !1,
					i = void 0;
				try {
					for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
				} catch (t) {
					o = !0, i = t
				} finally {
					try {
						!r && c.return && c.return()
					} finally {
						if (o) throw i
					}
				}
				return n
			}(t, e);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		},
		i = n(251),
		a = (r = i) && r.__esModule ? r : {
			default: r
		},
		c = n(81);
	var u = function(t, e) {
			var n = e.curve,
				r = n.x1,
				o = n.y1,
				i = n.x2,
				a = n.y2,
				u = {
					x: t.x,
					y: t.y
				},
				l = {
					x: r,
					y: o
				},
				s = {
					x: i,
					y: a
				},
				f = {
					x: e.x,
					y: e.y
				},
				p = {
					x: (0, c.numberAtInterval)(u.x, l.x, .5),
					y: (0, c.numberAtInterval)(u.y, l.y, .5)
				},
				h = {
					x: (0, c.numberAtInterval)(l.x, s.x, .5),
					y: (0, c.numberAtInterval)(l.y, s.y, .5)
				},
				d = {
					x: (0, c.numberAtInterval)(s.x, f.x, .5),
					y: (0, c.numberAtInterval)(s.y, f.y, .5)
				},
				y = {
					x: (0, c.numberAtInterval)(p.x, h.x, .5),
					y: (0, c.numberAtInterval)(p.y, h.y, .5)
				},
				v = {
					x: (0, c.numberAtInterval)(h.x, d.x, .5),
					y: (0, c.numberAtInterval)(h.y, d.y, .5)
				},
				m = {
					x: (0, c.numberAtInterval)(y.x, v.x, .5),
					y: (0, c.numberAtInterval)(y.y, v.y, .5)
				};
			return [{
				x: m.x,
				y: m.y,
				curve: {
					type: "cubic",
					x1: p.x,
					y1: p.y,
					x2: y.x,
					y2: y.y
				}
			}, {
				x: f.x,
				y: f.y,
				curve: {
					type: "cubic",
					x1: v.x,
					y1: v.y,
					x2: d.x,
					y2: d.y
				}
			}]
		},
		l = function(t, e) {
			return e.curve ? u(t, e) : function(t, e) {
				return [{
					x: (0, c.numberAtInterval)(t.x, e.x, .5),
					y: (0, c.numberAtInterval)(t.y, e.y, .5)
				}, e]
			}(t, e)
		},
		s = function t(e, n) {
			for (var r = [].concat(function(t) {
					if (Array.isArray(t)) {
						for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
						return n
					}
					return Array.from(t)
				}(e)), i = 1; i < r.length; i += 2) {
				if (r.length >= n) return r;
				var a = l(r[i - 1], r[i]),
					c = o(a, 2),
					u = c[0],
					s = c[1];
				r.splice(i, 1, u, s)
			}
			return t(r, n)
		};
	e.curvePoints = u, e.default = function(t, e) {
		return s((0, a.default)(t), e)
	}
}, function(t, e, n) {}, , , , , , function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return a
	}));
	n(5), n(48), n(34), n(148), n(149), n(97), n(35);
	var r = n(26);

	function o(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(t);
			e && (r = r.filter((function(e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function i(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	function a(t) {
		var e = function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? o(Object(n), !0).forEach((function(e) {
						i(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}({}, t),
			n = !1;
		return t.exporter && r.a[t.exporter] && (e.exporter = r.a[t.exporter], n = !0), t.importer && r.a[t.importer] && (e.importer = r.a[t.importer], n = !0), [e, n]
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return i
	}));
	var r = n(0),
		o = n(15);
	n(446);

	function i(t) {
		var e = t.chart,
			n = t.tabs;
		return r.c.createElement("div", {
			className: Object(o.a)("dashboard", e && "dashboard--with-chart")
		}, r.c.createElement("div", {
			className: "dashboard__inner"
		}, e && r.c.createElement("div", {
			className: "dashboard__chart"
		}, e), r.c.createElement("div", {
			className: "dashboard__tabs"
		}, n)))
	}
}, function(t, e, n) {
	! function(t, e) {
		"use strict";

		function n(t) {
			function n(t) {
				return t.x + t.vx
			}

			function r(t) {
				return t.y + t.vy
			}

			function o(t) {
				return function() {
					return t
				}
			}
			var i, a, c = 1,
				u = 1;

			function l() {
				var t, o, l, p, h, d, y, v, m, b, _ = [];
				i.forEach((function(t, e) {
					_.push({
						node: t,
						vx: t.vx,
						vy: t.vy,
						x: t.x + (a[e][1][0] + a[e][0][0]) / 2,
						y: t.y + (a[e][0][1] + a[e][1][1]) / 2
					}), _.push({
						node: t,
						vx: t.vx,
						vy: t.vy,
						x: t.x + a[e][0][0],
						y: t.y + a[e][0][1]
					}), _.push({
						node: t,
						vx: t.vx,
						vy: t.vy,
						x: t.x + a[e][0][0],
						y: t.y + a[e][1][1]
					}), _.push({
						node: t,
						vx: t.vx,
						vy: t.vy,
						x: t.x + a[e][1][0],
						y: t.y + a[e][0][1]
					}), _.push({
						node: t,
						vx: t.vx,
						vy: t.vy,
						x: t.x + a[e][1][0],
						y: t.y + a[e][1][1]
					})
				}));
				for (var g = _.length, x = 0; x < u; ++x)
					for (o = e.quadtree(_, n, r).visitAfter(s), t = 0; t < g; ++t) {
						var w = ~~(t / 5);
						l = i[w], d = a[w], p = l.x + l.vx, h = l.y + l.vy, y = p + d[0][0], v = h + d[0][1], m = p + d[1][0], b = h + d[1][1], o.visit(E)
					}

				function E(t, e, n, r, o) {
					var i = t.data;
					if (!i) return e > m || r < y || n > b || o < v;
					var u = f(d, 0),
						s = f(d, 1);
					if (i.node.index !== w) {
						var p = i.node,
							h = a[p.index],
							_ = p.x + p.vx + h[0][0],
							g = p.y + p.vy + h[0][1],
							x = p.x + p.vx + h[1][0],
							E = p.y + p.vy + h[1][1],
							O = f(h, 0),
							S = f(h, 1);
						if (y <= x && _ <= m && v <= E && g <= b) {
							var P = [Math.min.apply(null, [_, x, y, m]), Math.max.apply(null, [_, x, y, m])],
								k = [Math.min.apply(null, [g, E, v, b]), Math.max.apply(null, [g, E, v, b])],
								j = u + O - (P[1] - P[0]),
								M = s + S - (k[1] - k[0]),
								C = j * c * (M / s),
								N = M * c * (j / u),
								T = j * c * (M / S),
								R = M * c * (j / O);
							(y + m) / 2 < (_ + x) / 2 ? (l.vx -= C, p.vx += T) : (l.vx += C, p.vx -= T), (v + b) / 2 < (g + E) / 2 ? (l.vy -= N, p.vy += R) : (l.vy += N, p.vy -= R)
						}
					}
				}
			}

			function s(t) {
				if (t.data) return t.bb = a[t.data.node.index];
				t.bb = [
					[0, 0],
					[0, 0]
				];
				for (var e = 0; e < 4; ++e) t[e] && t[e].bb[0][0] < t.bb[0][0] && (t.bb[0][0] = t[e].bb[0][0]), t[e] && t[e].bb[0][1] < t.bb[0][1] && (t.bb[0][1] = t[e].bb[0][1]), t[e] && t[e].bb[1][0] > t.bb[1][0] && (t.bb[1][0] = t[e].bb[1][0]), t[e] && t[e].bb[1][1] > t.bb[1][1] && (t.bb[1][1] = t[e].bb[1][1])
			}

			function f(t, e) {
				return t[1][e] - t[0][e]
			}
			return "function" != typeof t && (t = o(null === t ? [0] : t)), l.initialize = function(e) {
				var n, r = (i = e).length;
				for (a = new Array(r), n = 0; n < r; ++n) a[n] = t(i[n], n, i)
			}, l.iterations = function(t) {
				return arguments.length ? (u = +t, l) : u
			}, l.strength = function(t) {
				return arguments.length ? (c = +t, l) : c
			}, l.bbox = function(e) {
				return arguments.length ? (t = "function" == typeof e ? e : o(+e), l) : t
			}, l
		}
		t.bboxCollide = n, Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}(e, n(231))
}, function(t, e, n) {
	t.exports = n(417)
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.scale = e.rotate = e.reverse = e.remove = e.position = e.offset = e.moveIndex = e.length = e.cubify = e.boundingBox = e.add = void 0;
	var r = d(n(419)),
		o = d(n(390)),
		i = d(n(251)),
		a = d(n(392)),
		c = d(n(452)),
		u = d(n(453)),
		l = d(n(454)),
		s = d(n(455)),
		f = d(n(456)),
		p = d(n(457)),
		h = d(n(458));

	function d(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	e.add = r.default, e.boundingBox = o.default, e.cubify = i.default, e.length = a.default, e.moveIndex = c.default, e.offset = u.default, e.position = l.default, e.remove = s.default, e.reverse = f.default, e.rotate = p.default, e.scale = h.default
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return a
	}));
	n(25);
	var r = n(0),
		o = n(255),
		i = n(19);
	n(470);

	function a(t) {
		var e, n, a = "value" === t.query.units ? i.a.currency : i.a.weight,
			c = t.data[t.query.units];
		if ("ready" === t.totals.status) {
			var u = t.totals.data.main;
			e = c / u[t.data.exporter.id][t.query.units].exports, n = c / u[t.data.importer.id][t.query.units].imports
		} else e = null, n = null;
		return r.c.createElement("div", {
			className: "trade-readout"
		}, r.c.createElement("p", {
			className: "trade-readout__category"
		}, t.query.category.model.name), r.c.createElement("p", {
			className: "trade-readout__countries"
		}, r.c.createElement("span", null, t.data.exporter.model.name), r.c.createElement("span", null, t.data.importer.model.name)), r.c.createElement("div", {
			className: "trade-readout__arrow"
		}), r.c.createElement("div", {
			className: "trade-readout__charts"
		}, r.c.createElement("div", {
			className: "trade-readout__charts__chart"
		}, r.c.createElement(o.a, {
			value: e,
			formattedValue: i.a.percentage(e),
			type: "exporter"
		}), r.c.createElement("p", null, "of exports")), r.c.createElement("div", {
			className: "trade-readout__charts__value"
		}, r.c.createElement("p", null, a(c))), r.c.createElement("div", {
			className: "trade-readout__charts__chart"
		}, r.c.createElement(o.a, {
			value: n,
			formattedValue: i.a.percentage(n),
			type: "importer"
		}), r.c.createElement("p", null, "of imports"))), r.c.createElement("div", {
			className: "trade-readout__list",
			"aria-hidden": t.data.env_co2_valid || t.data.env_land_valid || t.data.env_water_valid ? null : "true"
		}, r.c.createElement("h2", null, "Environmental Footprint"), r.c.createElement("ul", null, r.c.createElement("li", {
			"aria-hidden": t.data.env_co2_valid ? null : "true"
		}, r.c.createElement("span", null, "Carbon dioxide"), r.c.createElement("span", null, i.a.weight(t.data.env_co2))), r.c.createElement("li", {
			"aria-hidden": t.data.env_land_valid ? null : "true"
		}, r.c.createElement("span", null, "Land"), r.c.createElement("span", null, i.a.tens(t.data.env_land, "ha"))), r.c.createElement("li", {
			"aria-hidden": t.data.env_water_valid ? null : "true"
		}, r.c.createElement("span", null, "Blue water"), r.c.createElement("span", null, i.a.tens(t.data.env_water, "m糧"))))))
	}
}, , , , , function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return un
	}));
	n(5), n(10), n(11), n(48), n(34), n(103), n(140), n(9), n(71), n(105), n(63), n(25), n(159), n(16), n(17), n(6), n(18), n(7), n(12), n(35), n(13);
	var r = n(0),
		o = n(53),
		i = n.n(o),
		a = n(400),
		c = n.n(a),
		u = n(101),
		l = n(99),
		s = (n(21), n(160), n(22), n(148), n(149), n(97), n(220), n(15)),
		f = n(1),
		p = n(230),
		h = n(225),
		d = n(226),
		y = (n(31), n(222), function(t) {
			return function() {
				return t
			}
		});

	function v(t) {
		return t[0]
	}

	function m(t) {
		return t[1]
	}

	function b() {
		this._ = null
	}

	function _(t) {
		t.U = t.C = t.L = t.R = t.P = t.N = null
	}

	function g(t, e) {
		var n = e,
			r = e.R,
			o = n.U;
		o ? o.L === n ? o.L = r : o.R = r : t._ = r, r.U = o, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
	}

	function x(t, e) {
		var n = e,
			r = e.L,
			o = n.U;
		o ? o.L === n ? o.L = r : o.R = r : t._ = r, r.U = o, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
	}

	function w(t) {
		for (; t.L;) t = t.L;
		return t
	}
	b.prototype = {
		constructor: b,
		insert: function(t, e) {
			var n, r, o;
			if (t) {
				if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
					for (t = t.R; t.L;) t = t.L;
					t.L = e
				} else t.R = e;
				n = t
			} else this._ ? (t = w(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);
			for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) n === (r = n.U).L ? (o = r.R) && o.C ? (n.C = o.C = !1, r.C = !0, t = r) : (t === n.R && (g(this, n), n = (t = n).U), n.C = !1, r.C = !0, x(this, r)) : (o = r.L) && o.C ? (n.C = o.C = !1, r.C = !0, t = r) : (t === n.L && (x(this, n), n = (t = n).U), n.C = !1, r.C = !0, g(this, r)), n = t.U;
			this._.C = !1
		},
		remove: function(t) {
			t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
			var e, n, r, o = t.U,
				i = t.L,
				a = t.R;
			if (n = i ? a ? w(a) : i : a, o ? o.L === t ? o.L = n : o.R = n : this._ = n, i && a ? (r = n.C, n.C = t.C, n.L = i, i.U = n, n !== a ? (o = n.U, n.U = t.U, t = n.R, o.L = t, n.R = a, a.U = n) : (n.U = o, o = n, t = n.R)) : (r = t.C, t = n), t && (t.U = o), !r)
				if (t && t.C) t.C = !1;
				else {
					do {
						if (t === this._) break;
						if (t === o.L) {
							if ((e = o.R).C && (e.C = !1, o.C = !0, g(this, o), e = o.R), e.L && e.L.C || e.R && e.R.C) {
								e.R && e.R.C || (e.L.C = !1, e.C = !0, x(this, e), e = o.R), e.C = o.C, o.C = e.R.C = !1, g(this, o), t = this._;
								break
							}
						} else if ((e = o.L).C && (e.C = !1, o.C = !0, x(this, o), e = o.L), e.L && e.L.C || e.R && e.R.C) {
							e.L && e.L.C || (e.R.C = !1, e.C = !0, g(this, e), e = o.L), e.C = o.C, o.C = e.L.C = !1, x(this, o), t = this._;
							break
						}
						e.C = !0, t = o, o = o.U
					} while (!t.C);
					t && (t.C = !1)
				}
		}
	};
	var E = b;

	function O(t, e, n, r) {
		var o = [null, null],
			i = $.push(o) - 1;
		return o.left = t, o.right = e, n && P(o, t, e, n), r && P(o, e, t, r), B[t.index].halfedges.push(i), B[e.index].halfedges.push(i), o
	}

	function S(t, e, n) {
		var r = [e, n];
		return r.left = t, r
	}

	function P(t, e, n, r) {
		t[0] || t[1] ? t.left === n ? t[1] = r : t[0] = r : (t[0] = r, t.left = e, t.right = n)
	}

	function k(t, e, n, r, o) {
		var i, a = t[0],
			c = t[1],
			u = a[0],
			l = a[1],
			s = 0,
			f = 1,
			p = c[0] - u,
			h = c[1] - l;
		if (i = e - u, p || !(i > 0)) {
			if (i /= p, p < 0) {
				if (i < s) return;
				i < f && (f = i)
			} else if (p > 0) {
				if (i > f) return;
				i > s && (s = i)
			}
			if (i = r - u, p || !(i < 0)) {
				if (i /= p, p < 0) {
					if (i > f) return;
					i > s && (s = i)
				} else if (p > 0) {
					if (i < s) return;
					i < f && (f = i)
				}
				if (i = n - l, h || !(i > 0)) {
					if (i /= h, h < 0) {
						if (i < s) return;
						i < f && (f = i)
					} else if (h > 0) {
						if (i > f) return;
						i > s && (s = i)
					}
					if (i = o - l, h || !(i < 0)) {
						if (i /= h, h < 0) {
							if (i > f) return;
							i > s && (s = i)
						} else if (h > 0) {
							if (i < s) return;
							i < f && (f = i)
						}
						return !(s > 0 || f < 1) || (s > 0 && (t[0] = [u + s * p, l + s * h]), f < 1 && (t[1] = [u + f * p, l + f * h]), !0)
					}
				}
			}
		}
	}

	function j(t, e, n, r, o) {
		var i = t[1];
		if (i) return !0;
		var a, c, u = t[0],
			l = t.left,
			s = t.right,
			f = l[0],
			p = l[1],
			h = s[0],
			d = s[1],
			y = (f + h) / 2,
			v = (p + d) / 2;
		if (d === p) {
			if (y < e || y >= r) return;
			if (f > h) {
				if (u) {
					if (u[1] >= o) return
				} else u = [y, n];
				i = [y, o]
			} else {
				if (u) {
					if (u[1] < n) return
				} else u = [y, o];
				i = [y, n]
			}
		} else if (c = v - (a = (f - h) / (d - p)) * y, a < -1 || a > 1)
			if (f > h) {
				if (u) {
					if (u[1] >= o) return
				} else u = [(n - c) / a, n];
				i = [(o - c) / a, o]
			} else {
				if (u) {
					if (u[1] < n) return
				} else u = [(o - c) / a, o];
				i = [(n - c) / a, n]
			}
		else if (p < d) {
			if (u) {
				if (u[0] >= r) return
			} else u = [e, a * e + c];
			i = [r, a * r + c]
		} else {
			if (u) {
				if (u[0] < e) return
			} else u = [r, a * r + c];
			i = [e, a * e + c]
		}
		return t[0] = u, t[1] = i, !0
	}

	function M(t, e) {
		var n = t.site,
			r = e.left,
			o = e.right;
		return n === o && (o = r, r = n), o ? Math.atan2(o[1] - r[1], o[0] - r[0]) : (n === r ? (r = e[1], o = e[0]) : (r = e[0], o = e[1]), Math.atan2(r[0] - o[0], o[1] - r[1]))
	}

	function C(t, e) {
		return e[+(e.left !== t.site)]
	}

	function N(t, e) {
		return e[+(e.left === t.site)]
	}
	var T, R = [];

	function A() {
		_(this), this.x = this.y = this.arc = this.site = this.cy = null
	}

	function D(t) {
		var e = t.P,
			n = t.N;
		if (e && n) {
			var r = e.site,
				o = t.site,
				i = n.site;
			if (r !== i) {
				var a = o[0],
					c = o[1],
					u = r[0] - a,
					l = r[1] - c,
					s = i[0] - a,
					f = i[1] - c,
					p = 2 * (u * f - l * s);
				if (!(p >= -Z)) {
					var h = u * u + l * l,
						d = s * s + f * f,
						y = (f * h - l * d) / p,
						v = (u * d - s * h) / p,
						m = R.pop() || new A;
					m.arc = t, m.site = o, m.x = y + a, m.y = (m.cy = v + c) + Math.sqrt(y * y + v * v), t.circle = m;
					for (var b = null, _ = V._; _;)
						if (m.y < _.y || m.y === _.y && m.x <= _.x) {
							if (!_.L) {
								b = _.P;
								break
							}
							_ = _.L
						} else {
							if (!_.R) {
								b = _;
								break
							}
							_ = _.R
						} V.insert(b, m), b || (T = m)
				}
			}
		}
	}

	function L(t) {
		var e = t.circle;
		e && (e.P || (T = e.N), V.remove(e), R.push(e), _(e), t.circle = null)
	}
	var I = [];

	function q() {
		_(this), this.edge = this.site = this.circle = null
	}

	function U(t) {
		var e = I.pop() || new q;
		return e.site = t, e
	}

	function z(t) {
		L(t), G.remove(t), I.push(t), _(t)
	}

	function F(t) {
		var e = t.circle,
			n = e.x,
			r = e.cy,
			o = [n, r],
			i = t.P,
			a = t.N,
			c = [t];
		z(t);
		for (var u = i; u.circle && Math.abs(n - u.circle.x) < Q && Math.abs(r - u.circle.cy) < Q;) i = u.P, c.unshift(u), z(u), u = i;
		c.unshift(u), L(u);
		for (var l = a; l.circle && Math.abs(n - l.circle.x) < Q && Math.abs(r - l.circle.cy) < Q;) a = l.N, c.push(l), z(l), l = a;
		c.push(l), L(l);
		var s, f = c.length;
		for (s = 1; s < f; ++s) l = c[s], u = c[s - 1], P(l.edge, u.site, l.site, o);
		u = c[0], (l = c[f - 1]).edge = O(u.site, l.site, null, o), D(u), D(l)
	}

	function H(t) {
		for (var e, n, r, o, i = t[0], a = t[1], c = G._; c;)
			if ((r = Y(c, a) - i) > Q) c = c.L;
			else {
				if (!((o = i - W(c, a)) > Q)) {
					r > -Q ? (e = c.P, n = c) : o > -Q ? (e = c, n = c.N) : e = n = c;
					break
				}
				if (!c.R) {
					e = c;
					break
				}
				c = c.R
			}!
		function(t) {
			B[t.index] = {
				site: t,
				halfedges: []
			}
		}(t);
		var u = U(t);
		if (G.insert(e, u), e || n) {
			if (e === n) return L(e), n = U(e.site), G.insert(u, n), u.edge = n.edge = O(e.site, u.site), D(e), void D(n);
			if (n) {
				L(e), L(n);
				var l = e.site,
					s = l[0],
					f = l[1],
					p = t[0] - s,
					h = t[1] - f,
					d = n.site,
					y = d[0] - s,
					v = d[1] - f,
					m = 2 * (p * v - h * y),
					b = p * p + h * h,
					_ = y * y + v * v,
					g = [(v * b - h * _) / m + s, (p * _ - y * b) / m + f];
				P(n.edge, l, d, g), u.edge = O(l, t, null, g), n.edge = O(t, d, null, g), D(e), D(n)
			} else u.edge = O(e.site, u.site)
		}
	}

	function Y(t, e) {
		var n = t.site,
			r = n[0],
			o = n[1],
			i = o - e;
		if (!i) return r;
		var a = t.P;
		if (!a) return -1 / 0;
		var c = (n = a.site)[0],
			u = n[1],
			l = u - e;
		if (!l) return c;
		var s = c - r,
			f = 1 / i - 1 / l,
			p = s / l;
		return f ? (-p + Math.sqrt(p * p - 2 * f * (s * s / (-2 * l) - u + l / 2 + o - i / 2))) / f + r : (r + c) / 2
	}

	function W(t, e) {
		var n = t.N;
		if (n) return Y(n, e);
		var r = t.site;
		return r[1] === e ? r[0] : 1 / 0
	}
	var G, B, V, $, Q = 1e-6,
		Z = 1e-12;

	function X(t, e) {
		return e[1] - t[1] || e[0] - t[0]
	}

	function J(t, e) {
		var n, r, o, i = t.sort(X).pop();
		for ($ = [], B = new Array(t.length), G = new E, V = new E;;)
			if (o = T, i && (!o || i[1] < o.y || i[1] === o.y && i[0] < o.x)) i[0] === n && i[1] === r || (H(i), n = i[0], r = i[1]), i = t.pop();
			else {
				if (!o) break;
				F(o.arc)
			} if (function() {
				for (var t, e, n, r, o = 0, i = B.length; o < i; ++o)
					if ((t = B[o]) && (r = (e = t.halfedges).length)) {
						var a = new Array(r),
							c = new Array(r);
						for (n = 0; n < r; ++n) a[n] = n, c[n] = M(t, $[e[n]]);
						for (a.sort((function(t, e) {
								return c[e] - c[t]
							})), n = 0; n < r; ++n) c[n] = e[a[n]];
						for (n = 0; n < r; ++n) e[n] = c[n]
					}
			}(), e) {
			var a = +e[0][0],
				c = +e[0][1],
				u = +e[1][0],
				l = +e[1][1];
			! function(t, e, n, r) {
				for (var o, i = $.length; i--;) j(o = $[i], t, e, n, r) && k(o, t, e, n, r) && (Math.abs(o[0][0] - o[1][0]) > Q || Math.abs(o[0][1] - o[1][1]) > Q) || delete $[i]
			}(a, c, u, l),
			function(t, e, n, r) {
				var o, i, a, c, u, l, s, f, p, h, d, y, v = B.length,
					m = !0;
				for (o = 0; o < v; ++o)
					if (i = B[o]) {
						for (a = i.site, c = (u = i.halfedges).length; c--;) $[u[c]] || u.splice(c, 1);
						for (c = 0, l = u.length; c < l;) d = (h = N(i, $[u[c]]))[0], y = h[1], f = (s = C(i, $[u[++c % l]]))[0], p = s[1], (Math.abs(d - f) > Q || Math.abs(y - p) > Q) && (u.splice(c, 0, $.push(S(a, h, Math.abs(d - t) < Q && r - y > Q ? [t, Math.abs(f - t) < Q ? p : r] : Math.abs(y - r) < Q && n - d > Q ? [Math.abs(p - r) < Q ? f : n, r] : Math.abs(d - n) < Q && y - e > Q ? [n, Math.abs(f - n) < Q ? p : e] : Math.abs(y - e) < Q && d - t > Q ? [Math.abs(p - e) < Q ? f : t, e] : null)) - 1), ++l);
						l && (m = !1)
					} if (m) {
					var b, _, g, x = 1 / 0;
					for (o = 0, m = null; o < v; ++o)(i = B[o]) && (g = (b = (a = i.site)[0] - t) * b + (_ = a[1] - e) * _) < x && (x = g, m = i);
					if (m) {
						var w = [t, e],
							E = [t, r],
							O = [n, r],
							P = [n, e];
						m.halfedges.push($.push(S(a = m.site, w, E)) - 1, $.push(S(a, E, O)) - 1, $.push(S(a, O, P)) - 1, $.push(S(a, P, w)) - 1)
					}
				}
				for (o = 0; o < v; ++o)(i = B[o]) && (i.halfedges.length || delete B[o])
			}(a, c, u, l)
		}
		this.edges = $, this.cells = B, G = V = $ = B = null
	}
	J.prototype = {
		constructor: J,
		polygons: function() {
			var t = this.edges;
			return this.cells.map((function(e) {
				var n = e.halfedges.map((function(n) {
					return C(e, t[n])
				}));
				return n.data = e.site.data, n
			}))
		},
		triangles: function() {
			var t = [],
				e = this.edges;
			return this.cells.forEach((function(n, r) {
				if (i = (o = n.halfedges).length)
					for (var o, i, a, c, u, l, s = n.site, f = -1, p = e[o[i - 1]], h = p.left === s ? p.right : p.left; ++f < i;) a = h, h = (p = e[o[f]]).left === s ? p.right : p.left, a && h && r < a.index && r < h.index && (u = a, l = h, ((c = s)[0] - l[0]) * (u[1] - c[1]) - (c[0] - u[0]) * (l[1] - c[1]) < 0) && t.push([s.data, a.data, h.data])
			})), t
		},
		links: function() {
			return this.edges.filter((function(t) {
				return t.right
			})).map((function(t) {
				return {
					source: t.left.data,
					target: t.right.data
				}
			}))
		},
		find: function(t, e, n) {
			for (var r, o, i = this, a = i._found || 0, c = i.cells.length; !(o = i.cells[a]);)
				if (++a >= c) return null;
			var u = t - o.site[0],
				l = e - o.site[1],
				s = u * u + l * l;
			do {
				o = i.cells[r = a], a = null, o.halfedges.forEach((function(n) {
					var r = i.edges[n],
						c = r.left;
					if (c !== o.site && c || (c = r.right)) {
						var u = t - c[0],
							l = e - c[1],
							f = u * u + l * l;
						f < s && (s = f, a = c.index)
					}
				}))
			} while (null !== a);
			return i._found = r, null == n || s <= n * n ? o.site : null
		}
	};
	n(231);
	var K = n(146);
	var tt = {
		value: function() {}
	};

	function et() {
		for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
			if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
			r[t] = []
		}
		return new nt(r)
	}

	function nt(t) {
		this._ = t
	}

	function rt(t, e) {
		return t.trim().split(/^|\s+/).map((function(t) {
			var n = "",
				r = t.indexOf(".");
			if (r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			return {
				type: t,
				name: n
			}
		}))
	}

	function ot(t, e) {
		for (var n, r = 0, o = t.length; r < o; ++r)
			if ((n = t[r]).name === e) return n.value
	}

	function it(t, e, n) {
		for (var r = 0, o = t.length; r < o; ++r)
			if (t[r].name === e) {
				t[r] = tt, t = t.slice(0, r).concat(t.slice(r + 1));
				break
			} return null != n && t.push({
			name: e,
			value: n
		}), t
	}
	nt.prototype = et.prototype = {
		constructor: nt,
		on: function(t, e) {
			var n, r = this._,
				o = rt(t + "", r),
				i = -1,
				a = o.length;
			if (!(arguments.length < 2)) {
				if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
				for (; ++i < a;)
					if (n = (t = o[i]).type) r[n] = it(r[n], t.name, e);
					else if (null == e)
					for (n in r) r[n] = it(r[n], t.name, null);
				return this
			}
			for (; ++i < a;)
				if ((n = (t = o[i]).type) && (n = ot(r[n], t.name))) return n
		},
		copy: function() {
			var t = {},
				e = this._;
			for (var n in e) t[n] = e[n].slice();
			return new nt(t)
		},
		call: function(t, e) {
			if ((n = arguments.length - 2) > 0)
				for (var n, r, o = new Array(n), i = 0; i < n; ++i) o[i] = arguments[i + 2];
			if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			for (i = 0, n = (r = this._[t]).length; i < n; ++i) r[i].value.apply(e, o)
		},
		apply: function(t, e, n) {
			if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			for (var r = this._[t], o = 0, i = r.length; o < i; ++o) r[o].value.apply(e, n)
		}
	};
	var at, ct, ut = et,
		lt = 0,
		st = 0,
		ft = 0,
		pt = 0,
		ht = 0,
		dt = 0,
		yt = "object" == typeof performance && performance.now ? performance : Date,
		vt = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
			setTimeout(t, 17)
		};

	function mt() {
		return ht || (vt(bt), ht = yt.now() + dt)
	}

	function bt() {
		ht = 0
	}

	function _t() {
		this._call = this._time = this._next = null
	}

	function gt(t, e, n) {
		var r = new _t;
		return r.restart(t, e, n), r
	}

	function xt() {
		ht = (pt = yt.now()) + dt, lt = st = 0;
		try {
			! function() {
				mt(), ++lt;
				for (var t, e = at; e;)(t = ht - e._time) >= 0 && e._call.call(null, t), e = e._next;
				--lt
			}()
		} finally {
			lt = 0,
				function() {
					var t, e, n = at,
						r = 1 / 0;
					for (; n;) n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : at = e);
					ct = t, Et(r)
				}(), ht = 0
		}
	}

	function wt() {
		var t = yt.now(),
			e = t - pt;
		e > 1e3 && (dt -= e, pt = t)
	}

	function Et(t) {
		lt || (st && (st = clearTimeout(st)), t - ht > 24 ? (t < 1 / 0 && (st = setTimeout(xt, t - yt.now() - dt)), ft && (ft = clearInterval(ft))) : (ft || (pt = yt.now(), ft = setInterval(wt, 1e3)), lt = 1, vt(xt)))
	}
	_t.prototype = gt.prototype = {
		constructor: _t,
		restart: function(t, e, n) {
			if ("function" != typeof t) throw new TypeError("callback is not a function");
			n = (null == n ? mt() : +n) + (null == e ? 0 : +e), this._next || ct === this || (ct ? ct._next = this : at = this, ct = this), this._call = t, this._time = n, Et()
		},
		stop: function() {
			this._call && (this._call = null, this._time = 1 / 0, Et())
		}
	};
	var Ot = Math.PI * (3 - Math.sqrt(5)),
		St = n(428),
		Pt = n(161),
		kt = n.n(Pt),
		jt = (n(109), n(429)),
		Mt = n.n(jt),
		Ct = n(430),
		Nt = n(82),
		Tt = n.n(Nt);

	function Rt(t) {
		return (Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function At(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Dt(t, e) {
		return (Dt = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Lt(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = qt(t);
			if (e) {
				var o = qt(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return It(this, n)
		}
	}

	function It(t, e) {
		return !e || "object" !== Rt(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function qt(t) {
		return (qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Ut(t, e) {
		var n = [];
		switch (e && n.push("M", t[0].x, t[0].y), t.length) {
			case 3:
				n.push("Q", t[1].x, t[1].y, t[2].x, t[2].y);
				break;
			case 4:
				n.push("C", t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y)
		}
		return n.join(" ")
	}
	var zt = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Dt(t, e)
		}(a, t);
		var e, n, o, i = Lt(a);

		function a() {
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, a), i.call(this)
		}
		return e = a, (n = [{
			key: "render",
			value: function(t) {
				var e = this.calculateCurvePoints(t.a, t.b),
					n = new Mt.a(e[0], e[1], e[2], e[3]),
					o = n.length(),
					i = Ut(n.split((o - 12 - .25 * t.thickness) / o).left.points, !0),
					a = n.split((o - 12 - .5 * t.thickness) / o).left,
					c = a.outline(0, 0, t.thickness, t.thickness),
					u = Tt.a.fromObject(a.derivative(1)).normalize(),
					l = Math.ceil(c.curves.length / 2),
					s = c.curves.map((function(e, n) {
						if (n === l) {
							var r = e.points[0],
								o = e.points[3],
								i = new Tt.a(r.x, r.y),
								a = new Tt.a(o.x, o.y),
								c = u.multiply(new Tt.a(t.thickness * Math.PI / 2, t.thickness * Math.PI / 2));
							i = i.add(c), a = a.add(c), e.points[1] = i.toObject(), e.points[2] = a.toObject()
						}
						return Ut(e.points, 0 === n)
					})).join(" ");
				return r.c.createElement("g", null, r.c.createElement("path", {
					id: "arrow-".concat(t.id),
					d: i,
					"marker-end": "url(#arrowhead-map)"
				}), r.c.createElement("path", {
					id: "flow-".concat(t.id),
					d: s
				}))
			}
		}, {
			key: "calculateCurvePoints",
			value: function(t, e) {
				var n = new Tt.a(t.x, t.y),
					r = new Tt.a(e.x, e.y).distance(n),
					o = [{
						x: t.x,
						y: t.y,
						moveTo: !0
					}, {
						x: e.x,
						y: e.y,
						curve: {
							type: "arc",
							rx: r,
							ry: r,
							xAxisRotation: 0,
							largeArcFlag: 0,
							sweepFlag: 1
						}
					}],
					i = Object(Ct.cubify)(o);
				if (!(i.length < 2 || i.length > 2)) {
					var a = {
							x: i[1].curve.x1,
							y: i[1].curve.y1
						},
						c = {
							x: i[1].curve.x2,
							y: i[1].curve.y2
						};
					return [{
						x: t.x,
						y: t.y
					}, a, c, {
						x: e.x,
						y: e.y
					}]
				}
			}
		}]) && At(e.prototype, n), o && At(e, o), a
	}(r.a);
	n(459);

	function Ft(t) {
		var e = new Tt.a(t.a.x, t.a.y),
			n = new Tt.a(t.b.x, t.b.y),
			o = Math.round(n.subtract(e).horizontalAngleDeg());
		return r.c.createElement("linearGradient", {
			id: "gradient-".concat(t.id),
			gradientTransform: "rotate(".concat(o, ", 0.5, 0.5)"),
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			spreadMethod: "pad"
		}, r.c.createElement("stop", {
			offset: "20%",
			className: "map-def-gradient__start-color"
		}), r.c.createElement("stop", {
			offset: "100%",
			className: "map-def-gradient__end-color"
		}))
	}
	var Ht = n(144),
		Yt = n(39),
		Wt = n(26);

	function Gt(t) {
		return (Gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Bt(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Vt(t, e) {
		return (Vt = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function $t(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Zt(t);
			if (e) {
				var o = Zt(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return Qt(this, n)
		}
	}

	function Qt(t, e) {
		return !e || "object" !== Gt(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function Zt(t) {
		return (Zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var Xt = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Vt(t, e)
		}(a, t);
		var e, n, o, i = $t(a);

		function a() {
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, a), i.call(this)
		}
		return e = a, (n = [{
			key: "shouldComponentUpdate",
			value: function(t) {
				return t.data !== this.props.data || t.countries !== this.props.countries || t.projection !== this.props.projection || t.scale !== this.props.scale || t.width !== this.props.width || t.height !== this.props.height || t.transform !== this.props.transform
			}
		}, {
			key: "render",
			value: function(t) {
				console.time;
				var e = this.createLabels(t.countries, t.projection, t.width, t.wrapZoomCountries),
					n = t.transform ? t.transform.scale : 1;
				this.measureVoronoiCellOverflow(e, t.width * n, t.height * n), this.layoutLabels(e, t.width * n, t.height * n), console.time;
				var o = kt()(e, "id"),
					i = [],
					a = [];
				return t.scale && t.data.forEach((function(e) {
					var n = o[e.exporter.id],
						c = o[e.importer.id];
					if (n && c) {
						var u = "".concat(e.exporter.id, "-").concat(e.importer.id),
							l = t.scale(e.value);
						a.push(r.c.createElement(Ft, {
							key: u,
							id: u,
							a: n,
							b: c
						})), i.push(r.c.createElement(zt, {
							key: u,
							id: u,
							a: n,
							b: c,
							thickness: l
						}))
					}
				})), r.c.createElement("defs", null, r.c.createElement("marker", {
					id: "arrowhead-map",
					viewBox: "0 0 10 10",
					refX: "10",
					refY: "5",
					markerWidth: "5",
					markerHeight: "5",
					orient: "auto",
					markerUnits: "userSpaceOnUse"
				}, r.c.createElement("path", {
					d: "M0,0L10,5L0,10",
					className: "map__arrowhead"
				})), e.map((function(t) {
					var e = t.rect.width,
						n = t.rect.height,
						o = "map__label__box" + (t.boxed ? " map__label__box--filled" : ""),
						i = t.text.map((function(e, n) {
							var o = 0;
							return 0 === n && t.text.length > 1 ? o = -.5 : n > 0 && (o = 1), r.c.createElement("tspan", {
								x: "0",
								dy: "".concat(o, "em")
							}, e)
						}));
					return r.c.createElement("g", {
						id: "label-".concat(t.id),
						transform: "translate(".concat(t.x, " ").concat(t.y, ")")
					}, r.c.createElement("rect", {
						class: o,
						x: -e / 2,
						y: -n / 2,
						width: e,
						height: n
					}), r.c.createElement("text", {
						className: "map__label__text map__label__text--stroked",
						y: "0.35em"
					}, i), r.c.createElement("text", {
						className: "map__label__text",
						y: "0.35em"
					}, i))
				})), r.c.createElement("g", null, a), r.c.createElement("g", null, i))
			}
		}, {
			key: "createLabels",
			value: function(t, e, n, r) {
				var o = [],
					i = t.reduce(function(t, i) {
						var a = i.model.lng,
							c = i.model.lat,
							u = null !== a && null !== c,
							l = u ? Object(Yt.d)(e([a, c]), this.props.transform) : null,
							s = !1;
						r && l && Wt.i.includes(i.model.id) && (l = e([a, c]), l = Object(Yt.d)([l[0] + n, l[1]], this.props.transform), s = !0);
						var f = i.model.map_name || i.model.name;
						f = f.split("\\n");
						var p = {
							id: i.id,
							x: l ? l[0] : null,
							y: l ? l[1] : null,
							originX: l ? l[0] : null,
							originY: l ? l[1] : null,
							text: f,
							shortText: i.model.map_short_name,
							rect: Object(Ht.a)(f, 14, i.model.is_nes ? 8 : 4),
							boxed: i.model.is_nes,
							moved: s
						};
						return t.push(p), u || o.push(p), t
					}.bind(this), []),
					a = 0;
				return a -= 30 * (o.length - 1) / 2, o.forEach((function(t, n) {
					var r = a + 30 * n,
						o = Object(Yt.d)(e([r, -50]), this.props.transform);
					t.x = t.originX = o[0], t.y = t.originY = o[1]
				}), this), i
			}
		}, {
			key: "measureVoronoiCellOverflow",
			value: function(t, e, n) {
				(function() {
					var t = v,
						e = m,
						n = null;

					function r(r) {
						return new J(r.map((function(n, o) {
							var i = [Math.round(t(n, o, r) / Q) * Q, Math.round(e(n, o, r) / Q) * Q];
							return i.index = o, i.data = n, i
						})), n)
					}
					return r.polygons = function(t) {
						return r(t).polygons()
					}, r.links = function(t) {
						return r(t).links()
					}, r.triangles = function(t) {
						return r(t).triangles()
					}, r.x = function(e) {
						return arguments.length ? (t = "function" == typeof e ? e : y(+e), r) : t
					}, r.y = function(t) {
						return arguments.length ? (e = "function" == typeof t ? t : y(+t), r) : e
					}, r.extent = function(t) {
						return arguments.length ? (n = null == t ? null : [
							[+t[0][0], +t[0][1]],
							[+t[1][0], +t[1][1]]
						], r) : n && [
							[n[0][0], n[0][1]],
							[n[1][0], n[1][1]]
						]
					}, r.size = function(t) {
						return arguments.length ? (n = null == t ? null : [
							[0, 0],
							[+t[0], +t[1]]
						], r) : n && [n[1][0] - n[0][0], n[1][1] - n[0][1]]
					}, r
				})().x((function(t) {
					return t.x
				})).y((function(t) {
					return t.y
				})).extent([
					[0, 0],
					[e, n]
				]).polygons(t).forEach((function(t) {
					var n = null,
						r = null,
						o = null,
						i = null;
					t.forEach((function(t) {
						(null === n || t[0] < n) && (n = t[0]), (null === r || t[0] > r) && (r = t[0]), (null === o || t[1] < o) && (o = t[1]), (null === i || t[1] > i) && (i = t[1])
					}));
					var a = r - n,
						c = i - o;
					(t.data.rect.width > a || t.data.rect.height > c) && t.data.shortText && (t.data.text = t.data.shortText.split("\\n"), t.data.rect = Object(Ht.a)(t.data.text, 12, t.data.boxed ? 8 : 4)), t.data.overflow = {
						x: a / t.data.rect.width,
						y: c / t.data.rect.height
					}, t.data.originX + t.data.rect.hwidth > e && !t.data.moved && (t.data.originX -= t.data.originX + t.data.rect.hwidth - e)
				}), this)
			}
		}, {
			key: "layoutLabels",
			value: function(t, e, n) {
				for (var r, o, i, a = Object(St.bboxCollide)((function(t, e) {
						return [
							[-t.rect.hwidth, -t.rect.hheight],
							[t.rect.hwidth, t.rect.hheight]
						]
					})).strength(.4).iterations(6), c = function(t) {
						var e, n = 1,
							r = .001,
							o = 1 - Math.pow(r, 1 / 300),
							i = 0,
							a = .6,
							c = Object(K.a)(),
							u = gt(s),
							l = ut("tick", "end");

						function s() {
							f(), l.call("tick", e), n < r && (u.stop(), l.call("end", e))
						}

						function f() {
							var e, r, u = t.length;
							for (n += (i - n) * o, c.each((function(t) {
									t(n)
								})), e = 0; e < u; ++e) null == (r = t[e]).fx ? r.x += r.vx *= a : (r.x = r.fx, r.vx = 0), null == r.fy ? r.y += r.vy *= a : (r.y = r.fy, r.vy = 0)
						}

						function p() {
							for (var e, n = 0, r = t.length; n < r; ++n) {
								if ((e = t[n]).index = n, isNaN(e.x) || isNaN(e.y)) {
									var o = 10 * Math.sqrt(n),
										i = n * Ot;
									e.x = o * Math.cos(i), e.y = o * Math.sin(i)
								}(isNaN(e.vx) || isNaN(e.vy)) && (e.vx = e.vy = 0)
							}
						}

						function h(e) {
							return e.initialize && e.initialize(t), e
						}
						return null == t && (t = []), p(), e = {
							tick: f,
							restart: function() {
								return u.restart(s), e
							},
							stop: function() {
								return u.stop(), e
							},
							nodes: function(n) {
								return arguments.length ? (t = n, p(), c.each(h), e) : t
							},
							alpha: function(t) {
								return arguments.length ? (n = +t, e) : n
							},
							alphaMin: function(t) {
								return arguments.length ? (r = +t, e) : r
							},
							alphaDecay: function(t) {
								return arguments.length ? (o = +t, e) : +o
							},
							alphaTarget: function(t) {
								return arguments.length ? (i = +t, e) : i
							},
							velocityDecay: function(t) {
								return arguments.length ? (a = 1 - t, e) : 1 - a
							},
							force: function(t, n) {
								return arguments.length > 1 ? (null == n ? c.remove(t) : c.set(t, h(n)), e) : c.get(t)
							},
							find: function(e, n, r) {
								var o, i, a, c, u, l = 0,
									s = t.length;
								for (null == r ? r = 1 / 0 : r *= r, l = 0; l < s; ++l)(a = (o = e - (c = t[l]).x) * o + (i = n - c.y) * i) < r && (u = c, r = a);
								return u
							},
							on: function(t, n) {
								return arguments.length > 1 ? (l.on(t, n), e) : l.on(t)
							}
						}
					}(t).force("origin", (r = [], o = 0, i = function(t) {
						for (var e = 0; e < o; e++) {
							var n = r[e],
								i = n.overflow || {
									x: 1,
									y: 1
								},
								a = t * (1 / i.x),
								c = t * (1 / i.y);
							n.vx += (n.originX - n.x) * a, n.vy += (n.originY - n.y) * c
						}
					}, i.initialize = function(t) {
						r = t, o = t.length
					}, i)).force("collide", a).force("constrain", function() {
						var t = [],
							n = 0,
							r = function(r) {
								for (var o = 0; o < n; o++) {
									var i = t[o];
									i.x - i.rect.hwidth < 0 ? i.x = i.rect.hwidth + 8 : i.x + i.rect.hwidth > e && !i.moved && (i.x = e - (i.rect.hwidth + 8))
								}
							};
						return r.initialize = function(e) {
							t = e, n = e.length
						}, r
					}()).stop(), u = 0; u < 10; u++) c.tick()
			}
		}]) && Bt(e.prototype, n), o && Bt(e, o), a
	}(r.a);
	n(460);

	function Jt(t) {
		return (Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Kt(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function te(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function ee(t, e) {
		return (ee = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function ne(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = ie(t);
			if (e) {
				var o = ie(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return re(this, n)
		}
	}

	function re(t, e) {
		return !e || "object" !== Jt(e) && "function" != typeof e ? oe(t) : e
	}

	function oe(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function ie(t) {
		return (ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function ae(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var ce = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && ee(t, e)
			}(a, t);
			var e, n, o, i = ne(a);

			function a() {
				var t;
				Kt(this, a);
				for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
				return ae(oe(t = i.call.apply(i, [this].concat(n))), "handleMouseEnter", (function(e) {
					t.props.onHover && t.props.onHover(e)
				})), ae(oe(t), "handleMouseLeave", (function(e) {
					t.props.onHover && t.props.onHover(null)
				})), t
			}
			return e = a, (n = [{
				key: "shouldComponentUpdate",
				value: function(t, e) {
					return t.data !== this.props.data || t.countries !== this.props.countries || t.hoveredFlow !== this.props.hoveredFlow || t.hoveredCountry !== this.props.hoveredCountry || t.activeCountry !== this.props.activeCountry
				}
			}, {
				key: "render",
				value: function(t, e) {
					var n = [];
					if (t.data && t.hoveredFlow) t.data.forEach((function(e) {
						e.exporter === t.hoveredFlow.exporter && e.importer === t.hoveredFlow.importer && n.push(e.exporter, e.importer)
					}));
					else if (t.data && (t.hoveredCountry || t.activeCountry)) {
						var o = t.hoveredCountry || t.activeCountry;
						t.data.forEach((function(t) {
							t.exporter !== o && t.importer !== o || (n.indexOf(t.exporter) < 0 && n.push(t.exporter), n.indexOf(t.importer) < 0 && n.push(t.importer))
						}))
					}
					var i = "map__labels";
					return n.length && (i += " map__labels--hovered"), r.c.createElement("g", {
						class: i
					}, t.countries.map((function(t) {
						var e = "map__label";
						return n.length && n.indexOf(t) >= 0 && (e += " map__label--active"), r.c.createElement("use", {
							class: e,
							xlinkHref: "#label-".concat(t.id),
							onClick: this.handleClick.bind(this, t),
							onMouseEnter: this.handleMouseEnter.bind(this, t),
							onMouseLeave: this.handleMouseLeave
						})
					}), this))
				}
			}, {
				key: "handleClick",
				value: function(t, e) {
					if (e.preventDefault(), this.props.onClick) {
						var n = ("undefined" != typeof SVGElementInstance && e.target instanceof SVGElementInstance ? e.target.correspondingUseElement : e.target).getBoundingClientRect();
						this.props.onClick(t, {
							top: n.top + window.pageYOffset,
							right: n.right,
							bottom: n.bottom + window.pageYOffset,
							left: n.left
						})
					}
				}
			}]) && te(e.prototype, n), o && te(e, o), a
		}(r.a),
		ue = n(77);
	n(461);

	function le(t) {
		return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function se(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function fe(t, e) {
		return (fe = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function pe(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = de(t);
			if (e) {
				var o = de(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return he(this, n)
		}
	}

	function he(t, e) {
		return !e || "object" !== le(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function de(t) {
		return (de = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var ye = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && fe(t, e)
		}(a, t);
		var e, n, o, i = pe(a);

		function a() {
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, a), i.call(this)
		}
		return e = a, (n = [{
			key: "render",
			value: function(t) {
				var e = [],
					n = [],
					o = [],
					i = [];
				t.data.forEach((function(a) {
					var c = "".concat(a.exporter.id, "-").concat(a.importer.id),
						u = r.c.createElement("use", {
							className: "map__flow__outline",
							xlinkHref: "#flow-".concat(c),
							fill: "url(#gradient-".concat(c, ")")
						}),
						l = r.c.createElement("use", {
							className: "map__flow__arrow",
							xlinkHref: "#arrow-".concat(c)
						});
					if (t.hoveredFlow && Object(ue.a)(t.hoveredFlow, a.original)) return o.push(u), void i.push(l);
					if (t.hoveredCountry || t.activeCountry) {
						var s = t.hoveredCountry || t.activeCountry;
						if (s === a.original.exporter || s === a.original.importer) return o.push(u), void i.push(l)
					}
					e.push(u), n.push(l)
				}), this);
				var a = "map__flows";
				return o.length && (a += " map__flows--hovered"), r.c.createElement("g", {
					class: a
				}, r.c.createElement("g", {
					className: "map__flows__main"
				}, e, n), o, i)
			}
		}]) && se(e.prototype, n), o && se(e, o), a
	}(r.a);
	n(462);

	function ve(t) {
		return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function me(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function be(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function _e(t, e) {
		return (_e = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function ge(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Ee(t);
			if (e) {
				var o = Ee(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return xe(this, n)
		}
	}

	function xe(t, e) {
		return !e || "object" !== ve(e) && "function" != typeof e ? we(t) : e
	}

	function we(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function Ee(t) {
		return (Ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Oe(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var Se = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && _e(t, e)
			}(a, t);
			var e, n, o, i = ge(a);

			function a() {
				var t;
				me(this, a);
				for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
				return Oe(we(t = i.call.apply(i, [this].concat(n))), "handleMouseEnter", (function(e, n) {
					if (t.props.onHover) {
						var r = {
							left: n.pageX,
							top: n.pageY
						};
						t.props.onHover(e.original, r)
					}
				})), Oe(we(t), "handleMouseLeave", (function(e) {
					t.props.onHover && (e.relatedTarget && "use" === e.relatedTarget.nodeName.toLowerCase() && t.base && t.base.contains(e.relatedTarget) || t.props.onHover(null))
				})), t
			}
			return e = a, (n = [{
				key: "render",
				value: function(t) {
					return r.c.createElement("g", {
						className: "map__hitboxes"
					}, t.data.map((function(t) {
						return r.c.createElement("use", {
							xlinkHref: "#flow-".concat(t.exporter.id, "-").concat(t.importer.id),
							onMouseEnter: this.handleMouseEnter.bind(this, t),
							onMouseLeave: this.handleMouseLeave
						})
					}), this))
				}
			}]) && be(e.prototype, n), o && be(e, o), a
		}(r.a),
		Pe = n(232),
		ke = n(227),
		je = n(162);
	n(463);

	function Me(t) {
		return (Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Ce(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(t);
			e && (r = r.filter((function(e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function Ne(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = null != arguments[e] ? arguments[e] : {};
			e % 2 ? Ce(Object(n), !0).forEach((function(e) {
				qe(t, e, n[e])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function(e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
			}))
		}
		return t
	}

	function Te(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Re(t, e) {
		return (Re = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Ae(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Ie(t);
			if (e) {
				var o = Ie(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return De(this, n)
		}
	}

	function De(t, e) {
		return !e || "object" !== Me(e) && "function" != typeof e ? Le(t) : e
	}

	function Le(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function Ie(t) {
		return (Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function qe(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var Ue = n(394),
		ze = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && Re(t, e)
			}(a, t);
			var e, n, o, i = Ae(a);

			function a(t, e) {
				var n;
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, a), qe(Le(n = i.call(this)), "handleChangeRegion", (function(t) {
					n.props.onZoomToRegion && n.props.onZoomToRegion(t.currentTarget.value), n.setTransformToRegion(t.currentTarget.value)
				})), qe(Le(n), "handleChangeDebug", (function(t) {
					n.setState({
						debug: t.target.checked
					})
				})), qe(Le(n), "handleClickQueryIntraregional", (function(t) {
					n.props.onQueryIntraregional && n.props.onQueryIntraregional(n.props.zoomRegionId)
				})), n.countries = Object(h.feature)(Ue, Ue.objects.countries), n.countries.features = n.countries.features.filter((function(t) {
					return "AQ" !== t.id || t.id.length > 2
				})), n.projection = n.getProjection(e.width, e.height);
				return n.state = Ne(Ne({}, {
					transform: null,
					transformRaw: null
				}), {}, {
					debug: !1
				}), n
			}
			return e = a, (n = [{
				key: "componentWillUpdate",
				value: function(t, e, n) {
					this.context.width === n.width && this.context.height === n.height || (this.projection = this.getProjection(n.width, n.height))
				}
			}, {
				key: "getProjection",
				value: function(t, e) {
					return Object(p.a)().fitSize([t, e], this.countries).rotate([-11.5, 0, 0])
				}
			}, {
				key: "render",
				value: function(t, e, n) {
					var o = Object(je.a)("desktop").matches,
						i = n.trueWidth,
						a = n.trueHeight,
						c = n.width,
						u = n.height;
					t.width && t.height && (i = c = t.width, a = u = t.height, this.projection = this.getProjection(i, a));
					var l = {
						transform: null,
						transformRaw: null
					};
					return t.autoZoom && (t.zoomCountries || t.countries) && (l = this.getCountryPointBoundsZoomTransform(t.zoomCountries || t.countries)), r.c.createElement("div", {
						className: Object(s.a)("map", t.kind && "map--".concat(t.kind)),
						style: {
							width: "".concat(i, "px"),
							height: "".concat(a, "px")
						}
					}, r.c.createElement("svg", {
						className: "map__svg",
						viewBox: "0 0 ".concat(c, " ").concat(u)
					}, r.c.createElement(Xt, {
						data: t.data,
						countries: t.countries,
						projection: this.projection,
						scale: t.flowScale,
						width: c,
						height: u,
						transform: l.transformRaw,
						wrapZoomCountries: t.autoZoom
					}), r.c.createElement("g", {
						transform: l.transform
					}, r.c.createElement("g", null, r.c.createElement(Pe.a, {
						x: 0,
						y: 0,
						width: c,
						height: u
					})), r.c.createElement(d.a, {
						countries: this.countries.features,
						projection: this.projection
					}), e.debug && r.c.createElement(ke.a, {
						regionBounds: Wt.h,
						projection: this.projection
					})), r.c.createElement("g", null, r.c.createElement(ye, {
						data: t.data,
						hoveredFlow: t.hoveredFlow,
						hoveredCountry: t.hoveredCountry,
						activeCountry: t.activeCountry
					}), o && r.c.createElement(Se, {
						data: t.data,
						onHover: t.handleFlowHover
					}), r.c.createElement(ce, {
						data: t.data,
						countries: t.countries,
						hoveredFlow: t.hoveredFlow,
						hoveredCountry: t.hoveredCountry,
						activeCountry: t.activeCountry,
						onHover: o ? t.handleCountryHover : null,
						onClick: o ? t.handleCountryClick : null
					}))))
				}
			}, {
				key: "setTransformToRegion",
				value: function(t) {
					var e = this.getRegionZoomTransform(t);
					this.setState(e)
				}
			}, {
				key: "setTransformToCountryPointBounds",
				value: function(t) {
					var e = this.getCountryPointBoundsZoomTransform(t);
					this.setState(e)
				}
			}, {
				key: "getRegionZoomTransform",
				value: function(t, e) {
					if (!t) return {
						transform: null,
						transformRaw: null
					};
					e = e || this.context;
					var n = Wt.h[t],
						r = Object(Yt.a)(n),
						o = Object(f.k)().projection(this.projection).bounds(r);
					return Object(Yt.c)(o, e)
				}
			}, {
				key: "getCountryPointBounds",
				value: function(t, e) {
					var n = this;
					if (!t || !t.length) return null;
					e = e || this.context;
					var r = {
							type: "MultiPoint",
							coordinates: t.map((function(t) {
								return [t.model.lng, t.model.lat]
							}))
						},
						o = (Object(f.k)().projection(this.projection).bounds(r), t.map((function(t) {
							var r = n.projection([t.model.lng, t.model.lat]);
							return Wt.i.includes(t.id) && (r[0] = r[0] + e.width), r
						})));
					return Object(Yt.b)(o)
				}
			}, {
				key: "getCountryPointBoundsZoomTransform",
				value: function(t, e) {
					e = e || this.context;
					var n = this.getCountryPointBounds(t, e);
					return n ? Object(Yt.c)(n, e) : {
						transform: null,
						transformRaw: null
					}
				}
			}]) && Te(e.prototype, n), o && Te(e, o), a
		}(r.a);
	qe(ze, "contextType", l.a);
	var Fe = n(19);
	n(464);

	function He(t) {
		var e = Fe.a.thousands(t.count),
			n = Fe.a.thousands(t.total);
		return r.c.createElement(r.c.Fragment, null, "Displaying ", e, " of ", n, " flows")
	}
	n(465), n(467);

	function Ye(t) {
		var e = t.scale.domain()[1],
			n = [e / 4, e / 2, e];
		return r.c.createElement("div", {
			className: "map-legend"
		}, r.c.createElement("h1", null, "Scale"), r.c.createElement("svg", {
			width: "150",
			height: "88"
		}, r.c.createElement("defs", null, r.c.createElement("linearGradient", {
			id: "gradient-legend",
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			spreadMethod: "pad"
		}, r.c.createElement("stop", {
			className: "gradient-legend__exports",
			offset: "25%"
		}), r.c.createElement("stop", {
			className: "gradient-legend__imports",
			offset: "100%"
		})), r.c.createElement("marker", {
			id: "arrowhead-legend",
			viewBox: "0 0 10 10",
			refX: "10",
			refY: "5",
			markerWidth: "5",
			markerHeight: "5",
			orient: "auto"
		}, r.c.createElement("path", {
			d: "M0,0L10,5L0,10",
			className: "map__arrowhead"
		}))), r.c.createElement("line", {
			className: "map-legend__edge",
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "84"
		}), r.c.createElement("line", {
			className: "map-legend__edge",
			x1: "80",
			y1: "0",
			x2: "80",
			y2: "84"
		}), r.c.createElement("text", {
			className: "map-legend__tics",
			x: "4",
			y: "84",
			dy: "0"
		}, "Exporter"), r.c.createElement("text", {
			className: "map-legend__tics",
			x: "84",
			y: "84",
			dy: "0"
		}, "Importer"), n.map((function(e, n) {
			var o = Math.round(24 * n - 3),
				i = Math.round(9),
				a = Number(t.scale(e));
			return r.c.createElement("g", {
				className: "map-legend__flow",
				transform: "translate(0, ".concat(o, ")")
			}, r.c.createElement("path", {
				d: "M0,".concat(i, "L80,").concat(i - a, "L80,").concat(i + a, "Z"),
				fill: "url(#gradient-legend)"
			}), r.c.createElement("line", {
				x1: "0",
				y1: i,
				x2: "80",
				y2: i,
				"marker-end": "url(#arrowhead-legend)"
			}), r.c.createElement("text", {
				x: "84",
				y: i,
				dy: "0.35em"
			}, t.formatter(e)))
		}))))
	}
	n(468);

	function We() {
		return r.c.createElement("div", {
			className: "mini-map-legend",
			"aria-hidden": "true"
		}, r.c.createElement("svg", {
			className: "mini-map-legend__graphic",
			width: 56,
			height: 11
		}, r.c.createElement("defs", null, r.c.createElement("linearGradient", {
			id: "mini-map-legend-gradient",
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			spreadMethod: "pad"
		}, r.c.createElement("stop", {
			offset: "25%",
			className: "mini-map-legend__exports"
		}), r.c.createElement("stop", {
			offset: "100%",
			className: "mini-map-legend__imports"
		})), r.c.createElement("marker", {
			id: "arrowhead-legend",
			viewBox: "0 0 10 10",
			refX: "10",
			refY: "5",
			markerWidth: "5",
			markerHeight: "5",
			orient: "auto"
		}, r.c.createElement("path", {
			d: "M0,0L10,5L0,10",
			className: "mini-map__arrowhead"
		}))), r.c.createElement("rect", {
			x: 0,
			y: 0,
			width: 56,
			height: 11,
			fill: "url(#mini-map-legend-gradient)"
		}), r.c.createElement("line", {
			className: "mini-map-legend__arrow",
			x1: "0",
			y1: 5.5,
			x2: "56",
			y2: 5.5,
			"marker-end": "url(#arrowhead-legend)"
		})), r.c.createElement("p", {
			className: "mini-map-legend__labels"
		}, r.c.createElement("span", null, "Exp."), r.c.createElement("span", null, "Imp.")))
	}
	var Ge = n(252),
		Be = n(253),
		Ve = n(405),
		$e = n(254),
		Qe = n(74),
		Ze = n(102);

	function Xe(t, e) {
		return Wt.j[t] ? e.filter((function(e) {
			return !Wt.j[t].includes(e.model.id)
		})) : e
	}

	function Je(t) {
		return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Ke() {
		return (Ke = Object.assign || function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		}).apply(this, arguments)
	}

	function tn(t) {
		return function(t) {
			if (Array.isArray(t)) return en(t)
		}(t) || function(t) {
			if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
		}(t) || function(t, e) {
			if (!t) return;
			if ("string" == typeof t) return en(t, e);
			var n = Object.prototype.toString.call(t).slice(8, -1);
			"Object" === n && t.constructor && (n = t.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(t);
			if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return en(t, e)
		}(t) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function en(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}

	function nn(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function rn(t, e) {
		return (rn = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function on(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = cn(t);
			if (e) {
				var o = cn(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return an(this, n)
		}
	}

	function an(t, e) {
		return !e || "object" !== Je(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function cn(t) {
		return (cn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var un = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && rn(t, e)
		}(s, t);
		var e, n, o, a = on(s);

		function s(t) {
			var e;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, s), (e = a.call(this)).state = {
				data: null,
				flowScale: null,
				countries: null
			}, e.prepareData(t.data, t.query), e
		}
		return e = s, (n = [{
			key: "componentWillReceiveProps",
			value: function(t) {
				this.props.data === t.data && this.props.query === t.query || this.prepareData(t.data, t.query)
			}
		}, {
			key: "prepareData",
			value: function(t, e) {
				if (t && t.length) {
					var n = [];
					t.forEach((function(t) {
						var r = t[e.units];
						null !== r && n.push({
							exporter: t.exporter,
							importer: t.importer,
							value: r,
							original: t
						})
					}));
					var r = (n = i()(n, ["value"]).reverse()).length ? n[0].value : null;
					r = Object(ue.c)(r);
					var o = Object(u.a)().domain([0, r]).range([0, 12]),
						a = (n = n.filter((function(t, e) {
							return e < 5 || o(t.value) >= .9
						}))).reduce((function(t, e) {
							return t.indexOf(e.exporter) < 0 && t.push(e.exporter), t.indexOf(e.importer) < 0 && t.push(e.importer), t
						}), []),
						l = e.exporter.id || e.importer.id ? tn(a) : [];
					e.exporter.children && e.exporter.children.length && (l = c()(l, Xe(e.exporter.id, e.exporter.children))), e.importer.children && e.importer.children.length && (l = c()(l, Xe(e.importer.id, e.importer.children))), this.setState({
						data: n,
						flowScale: o,
						countries: a,
						zoomCountries: l
					})
				} else this.setState({
					data: null,
					flowScale: null,
					countries: null
				})
			}
		}, {
			key: "render",
			value: function(t, e) {
				var n = null;
				e.data && e.data.length && (n = r.c.createElement(l.b, {
					minWidth: 748,
					minHeight: 343
				}, r.c.createElement(ze, Ke({}, t, {
					data: e.data,
					flowScale: e.flowScale,
					countries: e.countries,
					zoomCountries: e.zoomCountries
				}))));
				var o = "value" === t.query.units ? Fe.a.currency : Fe.a.weight;
				return r.c.createElement(Qe.a, {
					modifier: t.kind
				}, t.header && r.c.createElement(Qe.c, {
					modifier: "trade"
				}, t.header), r.c.createElement(Qe.d, null, r.c.createElement(Ze.a, {
					visible: t.loading,
					transparent: !0
				}), n), r.c.createElement(Qe.b, {
					modifier: "trade"
				}, e.flowScale ? r.c.createElement(Ye, {
					scale: e.flowScale,
					formatter: o
				}) : null, !t.kind && r.c.createElement(We, null), !t.kind && r.c.createElement(Ge.a, {
					status: e.data && e.data.length ? r.c.createElement(He, {
						count: e.data.length,
						total: t.total
					}) : null
				}, r.c.createElement(Be.a, null), r.c.createElement($e.a, {
					queryString: t.query.toString(),
					message: __config.twitterMessage
				}), r.c.createElement(Ve.a, {
					query: t.query
				}))))
			}
		}]) && nn(e.prototype, n), o && nn(e, o), s
	}(r.a)
}, , function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return p
	}));
	n(5), n(10), n(11), n(21), n(48), n(9), n(22), n(25), n(16), n(17), n(6), n(18), n(7), n(12), n(13);
	var r = n(0),
		o = n(24);
	n(444);

	function i(t) {
		return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function a(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function c(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function u(t, e) {
		return (u = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function l(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = f(t);
			if (e) {
				var o = f(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return s(this, n)
		}
	}

	function s(t, e) {
		return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function f(t) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var p = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && u(t, e)
		}(f, t);
		var e, n, i, s = l(f);

		function f() {
			return a(this, f), s.apply(this, arguments)
		}
		return e = f, (n = [{
			key: "render",
			value: function(t) {
				var e = [];
				if (t.data) {
					if (t.data.filter((function(e) {
							return null !== e[t.query.units]
						})).length || e.push("No data available"), t.query.exporter && (t.query.year.id < t.query.exporter.model.start_year || t.query.year.id > t.query.exporter.model.end_year)) {
						var n = t.query.exporter.model.start_year,
							i = t.query.exporter.model.end_year;
						e.push("Data for ".concat(t.query.exporter.model.name, " is only available between ").concat(n, " and ").concat(i))
					}
					if (t.query.importer && (t.query.year.id < t.query.importer.model.start_year || t.query.year.id > t.query.importer.model.end_year)) {
						var a = t.query.importer.model.start_year,
							c = t.query.importer.model.end_year;
						e.push("Data for ".concat(t.query.importer.model.name, " is only available between ").concat(a, " and ").concat(c))
					}
					if (e.length) return r.c.createElement("div", {
						className: "datawarning"
					}, r.c.createElement("div", {
						className: "datawarning__inner"
					}, r.c.createElement("div", {
						className: "datawarning__messages"
					}, r.c.createElement("div", {
						className: "datawarning__messages__inner"
					}, e.map((function(t) {
						return r.c.createElement("p", null, r.c.createElement(o.a, {
							id: "error"
						}), t)
					}))))))
				}
			}
		}]) && c(e.prototype, n), i && c(e, i), f
	}(r.a)
}, , , function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
	var r = n(156),
		o = n(245),
		i = n(246),
		a = n(157),
		c = n(448),
		u = n(139);
	t.exports = function(t, e, n) {
		var l = -1,
			s = o,
			f = t.length,
			p = !0,
			h = [],
			d = h;
		if (n) p = !1, s = i;
		else if (f >= 200) {
			var y = e ? null : c(t);
			if (y) return u(y);
			p = !1, s = a, d = new r
		} else d = e ? [] : h;
		t: for (; ++l < f;) {
			var v = t[l],
				m = e ? e(v) : v;
			if (v = n || 0 !== v ? v : 0, p && m == m) {
				for (var b = d.length; b--;)
					if (d[b] === m) continue t;
				e && d.push(m), h.push(v)
			} else s(d, m, n) || (d !== h && d.push(m), h.push(v))
		}
		return h
	}
}, function(t, e, n) {
	var r = n(248),
		o = n(449),
		i = n(139),
		a = r && 1 / i(new r([, -0]))[1] == 1 / 0 ? function(t) {
			return new r(t)
		} : o;
	t.exports = a
}, function(t, e) {
	t.exports = function() {}
}, function(t, e, n) {
	! function() {
		"use strict";
		var e = n(418),
			r = function(t) {
				this.curves = [], this._3d = !1, t && (this.curves = t, this._3d = this.curves[0]._3d)
			};
		r.prototype = {
			valueOf: function() {
				return this.toString()
			},
			toString: function() {
				return "[" + this.curves.map((function(t) {
					return e.pointsToString(t.points)
				})).join(", ") + "]"
			},
			addCurve: function(t) {
				this.curves.push(t), this._3d = this._3d || t._3d
			},
			length: function() {
				return this.curves.map((function(t) {
					return t.length()
				})).reduce((function(t, e) {
					return t + e
				}))
			},
			curve: function(t) {
				return this.curves[t]
			},
			bbox: function() {
				for (var t = this.curves, n = t[0].bbox(), r = 1; r < t.length; r++) e.expandbox(n, t[r].bbox());
				return n
			},
			offset: function(t) {
				var e = [];
				return this.curves.forEach((function(n) {
					e = e.concat(n.offset(t))
				})), new r(e)
			}
		}, t.exports = r
	}()
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = function(t, e) {
			if (Array.isArray(t)) return t;
			if (Symbol.iterator in Object(t)) return function(t, e) {
				var n = [],
					r = !0,
					o = !1,
					i = void 0;
				try {
					for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
				} catch (t) {
					o = !0, i = t
				} finally {
					try {
						!r && c.return && c.return()
					} finally {
						if (o) throw i
					}
				}
				return n
			}(t, e);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		},
		o = 2 * Math.PI,
		i = function(t, e, n, r, o, i, a) {
			var c = t.x,
				u = t.y;
			return {
				x: r * (c *= e) - o * (u *= n) + i,
				y: o * c + r * u + a
			}
		},
		a = function(t, e) {
			var n = 4 / 3 * Math.tan(e / 4),
				r = Math.cos(t),
				o = Math.sin(t),
				i = Math.cos(t + e),
				a = Math.sin(t + e);
			return [{
				x: r - o * n,
				y: o + r * n
			}, {
				x: i + a * n,
				y: a - i * n
			}, {
				x: i,
				y: a
			}]
		},
		c = function(t, e, n, r) {
			var o = t * r - e * n < 0 ? -1 : 1,
				i = (t * n + e * r) / (Math.sqrt(t * t + e * e) * Math.sqrt(t * t + e * e));
			return i > 1 && (i = 1), i < -1 && (i = -1), o * Math.acos(i)
		};
	e.default = function(t) {
		var e = t.px,
			n = t.py,
			u = t.cx,
			l = t.cy,
			s = t.rx,
			f = t.ry,
			p = t.xAxisRotation,
			h = void 0 === p ? 0 : p,
			d = t.largeArcFlag,
			y = void 0 === d ? 0 : d,
			v = t.sweepFlag,
			m = void 0 === v ? 0 : v,
			b = [];
		if (0 === s || 0 === f) return [];
		var _ = Math.sin(h * o / 360),
			g = Math.cos(h * o / 360),
			x = g * (e - u) / 2 + _ * (n - l) / 2,
			w = -_ * (e - u) / 2 + g * (n - l) / 2;
		if (0 === x && 0 === w) return [];
		s = Math.abs(s), f = Math.abs(f);
		var E = Math.pow(x, 2) / Math.pow(s, 2) + Math.pow(w, 2) / Math.pow(f, 2);
		E > 1 && (s *= Math.sqrt(E), f *= Math.sqrt(E));
		var O = function(t, e, n, r, i, a, u, l, s, f, p, h) {
				var d = Math.pow(i, 2),
					y = Math.pow(a, 2),
					v = Math.pow(p, 2),
					m = Math.pow(h, 2),
					b = d * y - d * m - y * v;
				b < 0 && (b = 0), b /= d * m + y * v;
				var _ = (b = Math.sqrt(b) * (u === l ? -1 : 1)) * i / a * h,
					g = b * -a / i * p,
					x = f * _ - s * g + (t + n) / 2,
					w = s * _ + f * g + (e + r) / 2,
					E = (p - _) / i,
					O = (h - g) / a,
					S = (-p - _) / i,
					P = (-h - g) / a,
					k = c(1, 0, E, O),
					j = c(E, O, S, P);
				return 0 === l && j > 0 && (j -= o), 1 === l && j < 0 && (j += o), [x, w, k, j]
			}(e, n, u, l, s, f, y, m, _, g, x, w),
			S = r(O, 4),
			P = S[0],
			k = S[1],
			j = S[2],
			M = S[3],
			C = Math.max(Math.ceil(Math.abs(M) / (o / 4)), 1);
		M /= C;
		for (var N = 0; N < C; N++) b.push(a(j, M)), j += M;
		return b.map((function(t) {
			var e = i(t[0], s, f, g, _, P, k),
				n = e.x,
				r = e.y,
				o = i(t[1], s, f, g, _, P, k),
				a = o.x,
				c = o.y,
				u = i(t[2], s, f, g, _, P, k);
			return {
				x1: n,
				y1: r,
				x2: a,
				y2: c,
				x: u.x,
				y: u.y
			}
		}))
	}
}, function(t, e, n) {
	"use strict";

	function r(t) {
		if (Array.isArray(t)) {
			for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
			return n
		}
		return Array.from(t)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	e.default = function(t, e) {
		var n = t.length - 1,
			o = t[0],
			i = t[n],
			a = (e % n + n) % n;
		return o.x === i.x && o.y === i.y ? [{
			x: t[a].x,
			y: t[a].y,
			moveTo: !0
		}].concat(r(t.splice(a + 1)), r(t.splice(1, a))) : t
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = Object.assign || function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		},
		o = n(81),
		i = function(t, e, n) {
			return t.map((function(t) {
				var o = r({}, t);
				return o.x += e, o.y += n, o.curve && (o.curve = r({}, o.curve), "quadratic" !== o.curve.type && "cubic" !== o.curve.type || (o.curve.x1 += e, o.curve.y1 += n), "cubic" === o.curve.type && (o.curve.x2 += e, o.curve.y2 += n)), o
			}))
		};
	e.default = function(t) {
		var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
			n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
		return (0, o.applyFuncToShapes)(i, t, e, n)
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = c(n(391)),
		o = n(392),
		i = c(o),
		a = n(81);

	function c(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var u = function(t, e, n, r, i) {
			if (t === n) return e >= r ? 0 : 180;
			var c = (0, o.linearLength)(n, r, t, e - 100),
				u = (0, a.angleFromSides)(i, 100, c);
			return t < n ? u : 360 - u
		},
		l = function(t, e) {
			var n = t[0],
				r = n.x,
				i = n.y,
				a = t[1],
				c = a.x,
				u = a.y,
				l = (0, o.linearLength)(r, i, c, u);
			return {
				x1: r,
				y1: i,
				x2: c,
				y2: u,
				segmentInterval: e / l,
				segmentLength: l
			}
		},
		s = function(t, e, n) {
			for (var r = 0, i = 0; i < e; i++) {
				if (!t[i].moveTo) {
					var a = t[i - 1],
						c = a.x,
						u = a.y,
						l = t[i],
						s = l.x,
						f = l.y,
						p = (0, o.linearLength)(c, u, s, f);
					if (r + p >= n) return {
						x1: c,
						y1: u,
						x2: s,
						y2: f,
						segmentInterval: (n - r) / p,
						segmentLength: p
					};
					r += p
				}
			}
		};
	e.default = function(t, e, n) {
		var c = (0, r.default)(t, n),
			f = c.length,
			p = (0, i.default)(c),
			h = p * e,
			d = e > 1 ? function(t, e, n, r) {
				var i = t[e - 2],
					a = i.x,
					c = i.y,
					u = t[e - 1],
					l = u.x,
					s = u.y,
					f = (0, o.linearLength)(a, c, l, s);
				return {
					x1: a,
					y1: c,
					x2: l,
					y2: s,
					segmentInterval: (r - n) / f + 1,
					segmentLength: f
				}
			}(c, f, p, h) : e < 0 ? l(c, h) : s(c, f, h),
			y = d.x1,
			v = d.y1,
			m = d.x2,
			b = d.y2,
			_ = d.segmentInterval,
			g = d.segmentLength;
		return {
			angle: u(y, v, m, b, g),
			x: (0, a.numberAtInterval)(y, m, _),
			y: (0, a.numberAtInterval)(v, b, _)
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = n(81),
		o = function(t, e, n) {
			if (e.curve || n.curve) return !1;
			var r = (n.y - t.y) * (e.x - t.x) - (n.x - t.x) * (e.y - t.y);
			if (Math.abs(r) > Number.EPSILON) return !1;
			var o = (n.x - t.x) * (e.x - t.x) + (n.y - t.y) * (e.y - t.y);
			return !(o < 0) && !(o > (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y))
		},
		i = function(t) {
			for (var e = [], n = 0, r = t.length; n < r; n++) {
				var i = e[e.length - 1],
					a = t[n + 1],
					c = t[n];
				i && a && c && o(i, a, c) || e.push(c)
			}
			return e
		};
	e.default = function(t) {
		return (0, r.applyFuncToShapes)(i, t)
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r, o = n(251),
		i = (r = o) && r.__esModule ? r : {
			default: r
		},
		a = n(81);
	var c = function(t) {
		var e = void 0;
		return t.reverse().map((function(t) {
			var n = t.x,
				r = t.y,
				o = t.curve,
				i = {
					x: n,
					y: r
				};
			if (e) {
				var a = e,
					c = a.x1,
					u = a.y1,
					l = a.x2,
					s = a.y2;
				i.curve = {
					type: "cubic",
					x1: l,
					y1: s,
					x2: c,
					y2: u
				}
			}
			return e = o || null, i
		}))
	};
	e.default = function(t) {
		return (0, a.applyFuncToShapes)(c, (0, i.default)(t))
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r, o = Object.assign || function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		},
		i = function(t, e) {
			if (Array.isArray(t)) return t;
			if (Symbol.iterator in Object(t)) return function(t, e) {
				var n = [],
					r = !0,
					o = !1,
					i = void 0;
				try {
					for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
				} catch (t) {
					o = !0, i = t
				} finally {
					try {
						!r && c.return && c.return()
					} finally {
						if (o) throw i
					}
				}
				return n
			}(t, e);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		},
		a = n(81),
		c = n(390),
		u = (r = c) && r.__esModule ? r : {
			default: r
		};
	var l = function(t, e, n, r, o) {
			var i = o.x,
				a = o.y,
				c = t - i,
				u = e - a;
			return [c * n - u * r + i, c * r + u * n + a]
		},
		s = function(t, e, n) {
			return t.map((function(t) {
				var r = e * Math.PI / 180,
					a = Math.cos(r),
					c = Math.sin(r),
					u = l(t.x, t.y, a, c, n),
					s = i(u, 2),
					f = s[0],
					p = s[1],
					h = o({}, t, {
						x: f,
						y: p
					});
				if (h.curve) {
					if ("quadratic" === h.curve.type || "cubic" === h.curve.type) {
						var d = l(h.curve.x1, h.curve.y1, a, c, n),
							y = i(d, 2),
							v = y[0],
							m = y[1];
						h.curve = o({}, h.curve, {
							x1: v,
							y1: m
						})
					}
					if ("cubic" === h.curve.type) {
						var b = l(h.curve.x2, h.curve.y2, a, c, n),
							_ = i(b, 2),
							g = _[0],
							x = _[1];
						h.curve = o({}, h.curve, {
							x2: g,
							y2: x
						})
					}
				}
				return h
			}))
		};
	e.default = function(t, e) {
		var n = (0, u.default)(t).center;
		return (0, a.applyFuncToShapes)(s, t, e, n)
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r, o = Object.assign || function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		},
		i = n(390),
		a = (r = i) && r.__esModule ? r : {
			default: r
		},
		c = n(81);
	var u = function(t, e, n, r) {
		var i = o({}, t);
		return i.x = n - (n - i.x) * e, i.y = r - (r - i.y) * e, t.curve && (i.curve = o({}, i.curve), "arc" === i.curve.type ? (i.curve.rx && (i.curve.rx = i.curve.rx * e), i.curve.ry && (i.curve.ry = i.curve.ry * e)) : (i.curve.x1 = n - (n - i.curve.x1) * e, i.curve.y1 = r - (r - i.curve.y1) * e, "cubic" === i.curve.type && (i.curve.x2 = n - (n - i.curve.x2) * e, i.curve.y2 = r - (r - i.curve.y2) * e))), i
	};
	e.default = function(t, e) {
		var n = arguments.length <= 2 || void 0 === arguments[2] ? "center" : arguments[2],
			r = (0, a.default)(t),
			o = r.bottom,
			i = r.center,
			l = r.left,
			s = r.right,
			f = r.top,
			p = i.x,
			h = i.y;
		switch (n) {
			case "topLeft":
				p = l, h = f;
				break;
			case "topRight":
				p = s, h = f;
				break;
			case "bottomRight":
				p = s, h = o;
				break;
			case "bottomLeft":
				p = l, h = o
		}
		return (0, c.applyFuncToShapes)((function(t) {
			return t.map((function(t) {
				return u(t, e, p, h)
			}))
		}), t)
	}
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
	"use strict";
	var r = n(29),
		o = n(20),
		i = n(178),
		a = n(47),
		c = n(28),
		u = n(45),
		l = n(466),
		s = n(66),
		f = n(8),
		p = n(80),
		h = n(106).f,
		d = n(55).f,
		y = n(33).f,
		v = n(244).trim,
		m = "Number",
		b = o.Number,
		_ = b.prototype,
		g = u(p(_)) == m,
		x = function(t) {
			var e, n, r, o, i, a, c, u, l = s(t, !1);
			if ("string" == typeof l && l.length > 2)
				if (43 === (e = (l = v(l)).charCodeAt(0)) || 45 === e) {
					if (88 === (n = l.charCodeAt(2)) || 120 === n) return NaN
				} else if (48 === e) {
				switch (l.charCodeAt(1)) {
					case 66:
					case 98:
						r = 2, o = 49;
						break;
					case 79:
					case 111:
						r = 8, o = 55;
						break;
					default:
						return +l
				}
				for (a = (i = l.slice(2)).length, c = 0; c < a; c++)
					if ((u = i.charCodeAt(c)) < 48 || u > o) return NaN;
				return parseInt(i, r)
			}
			return +l
		};
	if (i(m, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
		for (var w, E = function(t) {
				var e = arguments.length < 1 ? 0 : t,
					n = this;
				return n instanceof E && (g ? f((function() {
					_.valueOf.call(n)
				})) : u(n) != m) ? l(new b(x(e)), n, E) : x(e)
			}, O = r ? h(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; O.length > S; S++) c(b, w = O[S]) && !c(E, w) && y(E, w, d(b, w));
		E.prototype = _, _.constructor = E, a(o, m, E)
	}
}, function(t, e, n) {
	var r = n(27),
		o = n(155);
	t.exports = function(t, e, n) {
		var i, a;
		return o && "function" == typeof(i = e.constructor) && i !== n && r(a = i.prototype) && a !== n.prototype && o(t, a), t
	}
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
	var r = n(522)();
	t.exports = r
}, , function(t, e, n) {
	t.exports = n(511)
}, , , , , , function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
	var r = n(257),
		o = n(167),
		i = n(512),
		a = n(32);
	t.exports = function(t, e) {
		return (a(t) ? r : o)(t, i(e))
	}
}, function(t, e, n) {
	var r = n(83);
	t.exports = function(t) {
		return "function" == typeof t ? t : r
	}
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t) {
	t.exports = JSON.parse('{"env_ghg_emissions":{"label":"GHG emissions per capita: tCO2e","tooltip":"2018. Includes LULUCF"},"env_air_quality":{"label":"Air quality: 0-100 (best)","tooltip":2020},"env_water_stress":{"label":"Water stress","tooltip":"2018. Freshwater withdrawal as % of total renewable water resources"},"env_tree_cover_loss":{"label":"Tree cover loss","tooltip":"2018. 5-year moving average of % forests lost relative to 2000"},"env_biodiversity":{"label":"Biodiversity and habitat: 0-100 (best)","tooltip":2020},"soc_hdi":{"label":"Human Development Index: 0-100 (best)","tooltip":2019},"soc_inequality":{"label":"Palma inequality ratio","tooltip":"2000-19: latest available year. Top 10% incomes / bottom 40% incomes"},"soc_poverty_ratio":{"label":"Poverty headcount ratio, $3.20/day","tooltip":"2000-19: latest available year"},"soc_urban_population":{"label":"Urban population","tooltip":"2020. % of total population"},"soc_electricity_access":{"label":"Access to electricity","tooltip":"2019. % of total population"},"gov_corruption":{"label":"Corruption: 0-100 (best)","tooltip":2020},"gov_voice_accountability":{"label":"Voice and accountability: -2.5 to +2.5 (best)","tooltip":2020},"gov_stability":{"label":"Stability, lack of violence: -2.5 to +2.5 (best)","tooltip":"2020. Political stability and absence of violence/terrorism"},"gov_effectiveness":{"label":"Government effectiveness: -2.5 to +2.5 (best)","tooltip":2020},"gov_infrastructure":{"label":"Infrastructure quality: 0-100 (best)","tooltip":2019},"res_exports":{"label":"Resource exports: % of GDP","tooltip":2020},"res_imports":{"label":"Resource imports: % of GDP","tooltip":2020},"res_balance":{"label":"Resource trade balance: US$","tooltip":"2020. Resource exports minus resource imports"},"res_rents":{"label":"Natural resources rents: % of GDP","tooltip":"2000-19: latest available year"}}')
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
	var r = n(523),
		o = n(258),
		i = n(524);
	t.exports = function(t) {
		return function(e, n, a) {
			return a && "number" != typeof a && o(e, n, a) && (n = a = void 0), e = i(e), void 0 === n ? (n = e, e = 0) : n = i(n), a = void 0 === a ? e < n ? 1 : -1 : i(a), r(e, n, a, t)
		}
	}
}, function(t, e) {
	var n = Math.ceil,
		r = Math.max;
	t.exports = function(t, e, o, i) {
		for (var a = -1, c = r(n((e - t) / (o || 1)), 0), u = Array(c); c--;) u[i ? c : ++a] = t, t += o;
		return u
	}
}, function(t, e, n) {
	var r = n(259),
		o = 1 / 0;
	t.exports = function(t) {
		return t ? (t = r(t)) === o || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
	}
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, , , , , , , , , , , , function(t, e, n) {
	"use strict";
	n.r(e);
	n(31), n(46), n(76);
	var r = n(168),
		o = n.n(r),
		i = n(0),
		a = n(163),
		c = (n(268), n(5), n(10), n(11), n(21), n(48), n(34), n(103), n(9), n(22), n(63), n(25), n(6), n(7), n(12), n(35), n(13), n(256), n(73)),
		u = n(143),
		l = n(224),
		s = n(399),
		f = n(426);

	function p(t, e) {
		return function(t) {
			if (Array.isArray(t)) return t
		}(t) || function(t, e) {
			if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
			var n = [],
				r = !0,
				o = !1,
				i = void 0;
			try {
				for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
			} catch (t) {
				o = !0, i = t
			} finally {
				try {
					r || null == c.return || c.return()
				} finally {
					if (o) throw i
				}
			}
			return n
		}(t, e) || function(t, e) {
			if (!t) return;
			if ("string" == typeof t) return h(t, e);
			var n = Object.prototype.toString.call(t).slice(8, -1);
			"Object" === n && t.constructor && (n = t.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(t);
			if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(t, e)
		}(t, e) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function h(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}
	var d = n(168),
		y = n(60),
		v = {},
		m = {},
		b = v,
		_ = {
			init: function(t, e) {
				this.listeners = [], this.pendingRequests = {}, this.delayedRequestTimeouts = {}, v.years = new c.a(t.years), v.categories = new l.a(t.categories), v.categories.setDefault({
					id: null,
					name: "All commodities"
				}), v.countries = new c.a(t.countries, !0), v.countries.setDefault({
					id: null,
					name: "All countries"
				}), v.categoryGroups = new u.a(t.categoryGroups, v.categories), v.countryGroups = new u.a(t.countryGroups, v.countries), v.countryGroupsMain = v.countryGroups.filter("type", "group"), v.countryGroupsRegions = v.countryGroups.filter("type", "region"), this.resetState(), s.a.data = v;
				var n = p(Object(f.a)(e), 2),
					r = n[0],
					o = n[1];
				m.query = new s.a(r, v), o && this.updateURL(m.query, !0), window.addEventListener("popstate", function() {
					var t = d.parse(window.location.search.replace(/^\?/, "")),
						e = new s.a(t, v);
					this.dispatch("RESTORE_QUERY", e, !0)
				}.bind(this));
				var i = this;
				"complete" === document.readyState ? i.fetchData(m.query) : window.addEventListener("load", (function() {
					i.fetchData(m.query)
				}))
			},
			resetState: function() {
				m = {
					query: null,
					prevQuery: null,
					results: {
						trades: {
							status: "pending",
							data: null
						},
						commodities: {
							status: "pending",
							data: null
						},
						exporters: {
							status: "pending",
							data: null
						},
						importers: {
							status: "pending",
							data: null
						},
						footprints: {
							status: "pending",
							data: null
						},
						historical: {
							status: "pending",
							data: null
						},
						totals: {
							status: "pending",
							data: null
						}
					},
					modalOpen: !1,
					shareModalOpen: !1,
					activeCountry: null,
					countryModalOpen: !1,
					mapLoaded: !1,
					hoveredFlow: null,
					hoveredFlowPoint: null,
					hoveredCountry: null,
					mapMenuOpen: !1,
					mapMenuRect: null,
					nesModalOpen: !1,
					queryPopoverOpen: !1,
					pendingDownload: null,
					showTooltip: !1,
					zoomRegion: "",
					autoZoom: !0
				}
			},
			getState: function(t) {
				return t ? m[t] : m
			},
			getData: function(t) {
				return t ? v[t] : v
			},
			rehydrate: function(t) {
				return Array.isArray(t) ? t.map((function(t) {
					return t.year && (t.year = v.years.get(t.year)), t.exporter && (isFinite(t.exporter) ? t.exporter = v.countries.get(t.exporter) : t.exporter = v.countryGroups.get(t.exporter)), t.importer && (isFinite(t.importer) ? t.importer = v.countries.get(t.importer) : t.importer = v.countryGroups.get(t.importer)), t.category && (isFinite(t.category) ? t.category = v.categories.get(t.category) : t.category = v.categoryGroups.get(t.category)), t
				})) : (y(t).forEach((function(e) {
					t[e] = this.rehydrate(t[e])
				}), this), t)
			},
			listen: function(t) {
				this.listeners.push(t)
			},
			dispatch: function(t, e) {
				if (m.pendingDownload && ("SET_QUERY" === t || "SET_QUERY_LOGGED" === t || "RESTORE_QUERY" === t || "SET_YEAR" === t)) {
					if (!window.confirm("Your data download is still pending. Click cancel to return to the page and allow the download to complete.")) return;
					m.pendingDownload.cancel()
				}
				switch (t) {
					case "SET_QUERY":
						if (m.query.equals(e)) return m.query.units !== e.units && this.dispatch("SET_UNITS", e.units), void(m.query.autozoom !== e.autozoom && (m.prevQuery = null, m.query = e, this.updateURL(m.query), this.notify()));
						m.prevQuery = null, m.query = e, this.updateURL(m.query), this.fetchData(m.query);
						break;
					case "SET_QUERY_LOGGED":
						if (m.query.equals(e)) return;
						m.prevQuery = m.query, m.query = e, this.updateURL(m.query), this.fetchData(m.query);
						break;
					case "RESTORE_QUERY":
						m.prevQuery = null, m.query = e, this.fetchData(m.query);
						break;
					case "TOGGLE_MODAL":
						m.modalOpen = e;
						break;
					case "TOGGLE_SHARE_MODAL":
						m.shareModalOpen = e;
						break;
					case "SET_UNITS":
						if (m.query.units === e) return;
						var n = m.query.clone();
						n.units = e, m.prevQuery = null, m.query = n, this.updateURL(m.query);
						break;
					case "SET_ACTIVE_COUNTRY":
						m.activeCountry = e.country, m.mapMenuOpen = null !== e, m.mapMenuRect = e ? e.rect : null;
						break;
					case "HIDE_COUNTRY_MENU":
						m.activeCountry = null, m.hoveredCountry = null, m.mapMenuOpen = !1;
						break;
					case "SHOW_COUNTRY_MODAL":
						m.countryModalOpen = !0, m.mapMenuOpen = !1;
						break;
					case "HIDE_COUNTRY_MODAL":
						m.countryModalOpen = !1, m.activeCountry = null;
						break;
					case "SHOW_NES_MODAL":
						m.nesModalOpen = !0, m.mapMenuOpen = !1;
						break;
					case "HIDE_NES_MODAL":
						m.nesModalOpen = !1;
						break;
					case "RESULTS_LOADED":
						m.results[e.id] = {
							status: "ready",
							data: "footprints" !== e.id ? this.rehydrate(e.data) : e.data
						};
						break;
					case "SHOW_MAP":
						m.mapLoaded = !0;
						break;
					case "SET_HOVERED_FLOW":
						if (m.hoveredFlow === e.data) return;
						m.hoveredFlow = e.data, m.hoveredFlowPoint = e.point || null, null !== e.data && (m.activeCountry = null, m.mapMenuOpen = !1);
						break;
					case "SET_HOVERED_COUNTRY":
						if (m.hoveredCountry === e) return;
						m.hoveredCountry = e, null !== e && m.hoveredCountry !== m.activeCountry && (m.activeCountry = null, m.mapMenuOpen = !1);
						break;
					case "SET_YEAR":
						if (e === m.query.year.id) return;
						var r = m.query.clone();
						r.year = b.years.get(e), m.prevQuery = null, m.query = r, this.updateURL(m.query), this.fetchData(m.query);
						break;
					case "TOGGLE_QUERY_POPOVER":
						m.queryPopoverOpen = e;
						break;
					case "SET_DOWNLOAD_PENDING":
						m.pendingDownload = e;
						break;
					case "SET_SHOW_TOOLTIP":
						m.showTooltip = e;
						break;
					case "SET_ZOOM_REGION":
						m.zoomRegion = e;
						break;
					case "SET_AUTO_ZOOM":
						m.autoZoom = e
				}
				this.notify()
			},
			notify: function() {
				var t = this;
				this.notifyPending || (this.notifyPending = !0, requestAnimationFrame((function() {
					t.notifyPending = !1, t._notify()
				})))
			},
			_notify: function() {
				this.listeners.forEach((function(t) {
					t()
				}))
			},
			updateURL: function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (window && window.history && window.history.pushState) {
					var n = window.location.href.replace(/\?.*/, "") + "?" + t.toString();
					e ? window.history.replaceState({}, document.title, n) : window.history.pushState({}, document.title, n)
				}
			},
			fetchData: function(t) {
				this.fetchResultsSet(t, "trades", !0), this.fetchResultsSet(t, "commodities", !0), this.fetchResultsSet(t, "exporters", !0), this.fetchResultsSet(t, "importers", !0), this.fetchResultsSet(t, "historical", !0), __config.hasFootprints && this.fetchResultsSet(t, "footprints", !0), this.delayedFetchResultsSet(200, t, "totals", !0), this.notify()
			},
			fetchResultsSet: function(t, e, n, r) {
				this.delayedRequestTimeouts[e] && window.clearTimeout(this.delayedRequestTimeouts[e]), this.pendingRequests[e] && this.pendingRequests[e].abort();
				var o = new XMLHttpRequest;
				o.open("GET", "".concat(__config.api_path).concat(e, "?") + t.toString(["units"]), !0), o.onload = function() {
					this.pendingRequests[e] = null, o.status >= 200 && o.status < 400 ? this.dispatch("RESULTS_LOADED", {
						id: e,
						data: JSON.parse(o.responseText)
					}) : 503 !== o.status || r || this.delayedFetchResultsSet(600, t, e, n)
				}.bind(this), m.results[e] = {
					status: "pending",
					data: null
				}, this.pendingRequests[e] = o, o.send(), n || this.notify()
			},
			delayedFetchResultsSet: function(t, e, n, r) {
				this.delayedRequestTimeouts[n] && window.clearTimeout(this.delayedRequestTimeouts[n]), this.delayedRequestTimeouts[n] = window.setTimeout((function(t) {
					t.fetchResultsSet(e, n, r, !0), r || t.notify()
				}), t, this)
			}
		},
		g = (n(16), n(17), n(18), n(110)),
		x = n.n(g),
		w = n(100),
		E = n(169),
		O = n(78),
		S = n(84),
		P = n(24);
	n(508);

	function k(t) {
		return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function j(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function M(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function C(t, e) {
		return (C = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function N(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = A(t);
			if (e) {
				var o = A(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return T(this, n)
		}
	}

	function T(t, e) {
		return !e || "object" !== k(e) && "function" != typeof e ? R(t) : e
	}

	function R(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function A(t) {
		return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function D(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var L = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && C(t, e)
			}(a, t);
			var e, n, r, o = N(a);

			function a() {
				var t;
				j(this, a);
				for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
				return D(R(t = o.call.apply(o, [this].concat(n))), "handleWindowResize", (function(e) {
					t.props.onClose && t.props.onClose()
				})), D(R(t), "handleClickMain", (function(t) {
					t.stopPropagation()
				})), D(R(t), "handleClick", (function(e) {
					t.props.onClose && t.props.onClose()
				})), D(R(t), "handleCloseClick", (function() {
					t.props.onClose && t.props.onClose()
				})), t
			}
			return e = a, (n = [{
				key: "componentWillMount",
				value: function() {
					window.addEventListener("resize", this.handleWindowResize)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					window.removeEventListener("resize", this.handleWindowResize)
				}
			}, {
				key: "render",
				value: function(t) {
					return i.c.createElement("div", {
						className: "modal",
						onClick: this.handleClick
					}, i.c.createElement("div", {
						className: "modal__inner"
					}, i.c.createElement("div", {
						className: "modal__main",
						onClick: this.handleClickMain
					}, i.c.createElement("button", {
						className: "modal__close",
						type: "button",
						"aria-label": "Close modal",
						onClick: this.handleCloseClick
					}, i.c.createElement(P.a, {
						id: "close"
					})), t.children)))
				}
			}]) && M(e.prototype, n), r && M(e, r), a
		}(i.a),
		I = (n(109), n(509), function(t) {
			return i.c.createElement("label", {
				className: "radio"
			}, i.c.createElement("input", {
				className: "radio__input",
				type: "radio",
				name: t.name,
				value: t.value,
				checked: t.value === t.current || null
			}), i.c.createElement("span", {
				className: "radio__label"
			}, i.c.createElement("span", {
				className: "radio__label__icon"
			}), t.label))
		});
	n(510);

	function q(t) {
		return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function U(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function z(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function F(t, e) {
		return (F = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function H(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = G(t);
			if (e) {
				var o = G(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return Y(this, n)
		}
	}

	function Y(t, e) {
		return !e || "object" !== q(e) && "function" != typeof e ? W(t) : e
	}

	function W(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function G(t) {
		return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function B(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var V = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && F(t, e)
			}(a, t);
			var e, n, r, o = H(a);

			function a() {
				var t;
				U(this, a);
				for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
				return B(W(t = o.call.apply(o, [this].concat(n))), "handleChange", (function(e) {
					t.props.handleChange(e.target.value)
				})), t
			}
			return e = a, (n = [{
				key: "render",
				value: function(t) {
					return i.c.createElement("div", {
						class: ["units"].join(" ")
					}, i.c.createElement("h1", {
						className: "units__header"
					}, "Measure"), i.c.createElement("form", {
						className: "units__form",
						onChange: this.handleChange
					}, i.c.createElement(I, {
						label: "Value",
						name: "units",
						value: "value",
						current: t.current
					}), t.disableWeight ? null : i.c.createElement(I, {
						label: "Weight",
						name: "units",
						value: "weight",
						current: t.current
					})))
				}
			}]) && z(e.prototype, n), r && z(e, r), a
		}(i.a),
		$ = n(502),
		Q = n.n($),
		Z = (n(140), n(71), n(101)),
		X = n(150);
	n(513);

	function J(t) {
		return (J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function K(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function tt(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function et(t, e) {
		return (et = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function nt(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = ot(t);
			if (e) {
				var o = ot(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return rt(this, n)
		}
	}

	function rt(t, e) {
		return !e || "object" !== J(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function ot(t) {
		return (ot = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var it = 200,
		at = 100,
		ct = ["#afbd21", "#b32017", "#81cec1", "#e4701e", "#8a2529", "#4d917b", "#d5a00f", "#949c50", "#917578", "#a78462"],
		ut = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && et(t, e)
			}(a, t);
			var e, n, r, o = nt(a);

			function a() {
				return K(this, a), o.apply(this, arguments)
			}
			return e = a, (n = [{
				key: "render",
				value: function(t, e) {
					var n = [],
						r = null,
						o = ct;
					t.colours && (o = t.colours);
					var a = [];
					t.data.forEach((function(e, i) {
						e.data.forEach((function(t) {
							0 === i && n.push(t.year), r = Math.max(r, t.value)
						}));
						var c = {
							id: e.id || e.name.toLowerCase(),
							name: e.name,
							data: e.data
						};
						if (t.order && -1 !== t.order.indexOf(c.id)) {
							var u = t.order.indexOf(c.id);
							c.colour = o[u], a[u] = c
						} else c.colour = o[i], a.push(c)
					}));
					var c = Object(Z.b)().domain(n).range([0, 200]),
						u = Object(Z.a)().domain([0, r]).range([100, 0]).nice(),
						l = Object(X.b)().x((function(t) {
							return c(t.year)
						})).y((function(t) {
							return u(t.value)
						})).defined((function(t) {
							return null !== t.value
						}));
					return i.c.createElement("div", {
						className: "footprintschart ".concat(t.modifier ? "footprintschart--".concat(t.modifier) : null)
					}, i.c.createElement("div", {
						className: "footprintschart__body"
					}, i.c.createElement("div", {
						className: "footprintschart__canvaswrapper"
					}, i.c.createElement("svg", {
						className: "footprintschart__canvas",
						viewBox: "0 0 ".concat(it, " ").concat(at),
						preserveAspectRatio: "none"
					}, a.map((function(t) {
						return i.c.createElement("path", {
							d: l(t.data),
							style: {
								stroke: t.colour
							}
						})
					})))), i.c.createElement("div", {
						className: "footprintschart__xaxis"
					}, i.c.createElement("div", {
						className: "footprintschart__xaxis__ticks"
					}, this.renderXAxis(n, c, 5))), i.c.createElement("div", {
						className: "footprintschart__yaxis"
					}, this.renderYAxis(u, t.formatter))), i.c.createElement("div", {
						class: "footprintschart__legend" + (t.legendPosition ? " footprintschart__legend--".concat(t.legendPosition) : "")
					}, i.c.createElement("ul", null, a.map((function(t) {
						return i.c.createElement("li", {
							className: "footprintschart__legend__item"
						}, i.c.createElement("span", {
							style: {
								backgroundColor: t.colour
							}
						}), t.name)
					})))))
				}
			}, {
				key: "renderXAxis",
				value: function(t, e, n) {
					return t.reduce((function(r, o, a) {
						var c = o % n;
						if (!(0 === a && c > 2 || a === t.length - 1 && c > 2) && c) return r;
						var u = e(o) / 2;
						return r.push(i.c.createElement("div", {
							className: "linechart__xaxis__tick",
							style: {
								left: "".concat(u, "%")
							}
						}, i.c.createElement("span", null, o))), r
					}), [])
				}
			}, {
				key: "renderYAxis",
				value: function(t, e) {
					var n = t.domain()[1];
					return i.c.createElement("div", null, i.c.createElement("div", {
						className: "linechart__yaxis__tick"
					}, i.c.createElement("span", null, e(n))), i.c.createElement("div", {
						className: "linechart__yaxis__tick",
						style: {
							top: "25%"
						}
					}, i.c.createElement("span", null, e(.75 * n))), i.c.createElement("div", {
						className: "linechart__yaxis__tick",
						style: {
							top: "50%"
						}
					}, i.c.createElement("span", null, e(.5 * n))), i.c.createElement("div", {
						className: "linechart__yaxis__tick",
						style: {
							top: "75%"
						}
					}, i.c.createElement("span", null, e(.25 * n))), i.c.createElement("div", {
						className: "linechart__yaxis__tick",
						style: {
							top: "100%"
						}
					}, i.c.createElement("span", null, e(0))))
				}
			}]) && tt(e.prototype, n), r && tt(e, r), a
		}(i.a),
		lt = n(102),
		st = n(19);
	n(514);

	function ft(t) {
		if (t.rows) return i.c.createElement("table", {
			className: "countryinfotable"
		}, i.c.createElement("thead", null, i.c.createElement("tr", null, i.c.createElement("td", null, "Indicator"), i.c.createElement("td", {
			className: "countryinfotable__head__rank"
		}, "Percentile Rank*"), i.c.createElement("td", {
			className: "countryinfotable__head__value"
		}, "Value"))), i.c.createElement("tbody", null, t.rows.map((function(t) {
			return i.c.createElement(i.c.Fragment, null, i.c.createElement("tr", {
				className: "countryinfotable__row countryinfotable__row--bar",
				"aria-hidden": "true"
			}, i.c.createElement("td", {
				colspan: "2",
				className: "countryinfotable__cell__bar"
			}, i.c.createElement("div", {
				className: "countryinfotable__bar"
			}, t.rank ? i.c.createElement("div", {
				style: {
					width: "".concat(t.rank, "%")
				}
			}) : null)), i.c.createElement("td", {
				className: "countryinfotable__cell__value"
			}, i.c.createElement("div", null))), i.c.createElement("tr", {
				className: "countryinfotable__row"
			}, i.c.createElement("td", {
				className: "countryinfotable__cell__indicator"
			}, i.c.createElement("div", {
				title: t.tooltip ? t.tooltip : null
			}, t.label)), i.c.createElement("td", {
				className: "countryinfotable__cell__rank"
			}, i.c.createElement("div", null, st.a.null(t.rank))), i.c.createElement("td", {
				className: "countryinfotable__cell__value"
			}, i.c.createElement("div", null, t.value))))
		}))))
	}
	n(515);

	function pt(t) {
		var e = t.header,
			n = t.children;
		return i.c.createElement("div", {
			className: "info-modal"
		}, i.c.createElement("div", {
			className: "info-modal__header"
		}, e), i.c.createElement("div", {
			className: "info-modal__body"
		}, n))
	}
	n(516);

	function ht(t) {
		return (ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function dt(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function yt(t, e) {
		return (yt = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function vt(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = bt(t);
			if (e) {
				var o = bt(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return mt(this, n)
		}
	}

	function mt(t, e) {
		return !e || "object" !== ht(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function bt(t) {
		return (bt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var _t = n(517),
		gt = {
			env: [{
				id: "env_ghg_emissions",
				formatter: st.a.null
			}, {
				id: "env_air_quality",
				formatter: st.a.score
			}, {
				id: "env_water_stress",
				formatter: st.a.percentage
			}, {
				id: "env_tree_cover_loss",
				formatter: st.a.percentage
			}, {
				id: "env_biodiversity",
				formatter: st.a.score
			}],
			soc: [{
				id: "soc_hdi",
				formatter: st.a.score
			}, {
				id: "soc_inequality",
				formatter: st.a.null
			}, {
				id: "soc_poverty_ratio",
				formatter: st.a.percentage
			}, {
				id: "soc_urban_population",
				formatter: st.a.percentage
			}, {
				id: "soc_electricity_access",
				formatter: st.a.percentage
			}],
			gov: [{
				id: "gov_corruption",
				formatter: st.a.score
			}, {
				id: "gov_voice_accountability",
				formatter: st.a.null
			}, {
				id: "gov_stability",
				formatter: st.a.null
			}, {
				id: "gov_effectiveness",
				formatter: st.a.null
			}, {
				id: "gov_infrastructure",
				formatter: st.a.score
			}],
			res: [{
				id: "res_exports",
				formatter: st.a.percentage
			}, {
				id: "res_imports",
				formatter: st.a.percentage
			}, {
				id: "res_balance",
				formatter: st.a.signedCurrency
			}, {
				id: "res_rents",
				formatter: st.a.percentage
			}]
		},
		xt = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && yt(t, e)
			}(a, t);
			var e, n, r, o = vt(a);

			function a() {
				var t;
				return function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, a), (t = o.call(this)).state = {
					status: "pending",
					data: null
				}, t
			}
			return e = a, (n = [{
				key: "componentDidMount",
				value: function() {
					this.fetchData(this.props.country.id)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.request && this.request.abort()
				}
			}, {
				key: "render",
				value: function(t, e) {
					var n;
					return e.data && (n = {}, Q()(gt, (function(t, r) {
						n[r] = t.map((function(t) {
							var n = t.id.replace("_", "_rank_");
							return {
								label: _t[t.id].label,
								tooltip: _t[t.id].tooltip,
								rank: e.data[n],
								value: t.formatter(e.data[t.id])
							}
						}))
					}))), i.c.createElement("div", {
						className: "countryinfo u-contain"
					}, i.c.createElement(pt, {
						header: i.c.createElement("h1", null, t.country.model.name)
					}, i.c.createElement(lt.a, {
						visible: "ready" !== e.status,
						transparent: !0
					}), this.renderMain(n, e.data)))
				}
			}, {
				key: "renderMain",
				value: function(t, e) {
					return e ? i.c.createElement(w.b, null, i.c.createElement(E.a, {
						kind: "outlined"
					}, e.profile ? i.c.createElement(O.b, {
						kind: "outlined"
					}, "Profile") : null, i.c.createElement(O.b, {
						kind: "outlined"
					}, "Environmental"), i.c.createElement(O.b, {
						kind: "outlined"
					}, "Socio-economic"), i.c.createElement(O.b, {
						kind: "outlined"
					}, "Governance"), i.c.createElement(O.b, {
						kind: "outlined"
					}, "Resource dependence")), e.profile ? this.renderProfile(e.profile, e.chart) : null, i.c.createElement(S.a, null, i.c.createElement("div", {
						className: "countryinfo__tabpanel"
					}, i.c.createElement(ft, {
						rows: t && t.env
					})), this.renderFootnotes()), i.c.createElement(S.a, null, i.c.createElement("div", {
						className: "countryinfo__tabpanel"
					}, i.c.createElement(ft, {
						rows: t && t.soc
					})), this.renderFootnotes()), i.c.createElement(S.a, null, i.c.createElement("div", {
						className: "countryinfo__tabpanel"
					}, i.c.createElement(ft, {
						rows: t && t.gov
					})), this.renderFootnotes()), i.c.createElement(S.a, null, i.c.createElement("div", {
						className: "countryinfo__tabpanel"
					}, i.c.createElement(ft, {
						rows: t && t.res
					})), this.renderFootnotes())) : null
				}
			}, {
				key: "renderProfile",
				value: function(t, e) {
					return i.c.createElement(S.a, null, i.c.createElement("div", {
						className: "countryinfo__tabpanel"
					}, i.c.createElement("div", {
						className: "countryinfo__profile"
					}, i.c.createElement("div", {
						className: "countryinfo__profile__column"
					}, i.c.createElement("p", null, t)), i.c.createElement("div", {
						className: "countryinfo__profile__column"
					}, i.c.createElement("figure", null, i.c.createElement("figcaption", null, "Trade as % of GDP"), i.c.createElement(ut, {
						data: e,
						order: ["exports", "imports"],
						formatter: st.a.percentage,
						colours: ["#df376f", "#00aeef"],
						modifier: "countryinfo"
					}))))))
				}
			}, {
				key: "renderFootnotes",
				value: function() {
					return i.c.createElement("div", {
						className: "countryinfo__footnotes"
					}, i.c.createElement("p", {
						className: "countryinfo__footnote"
					}, "*Percentage of countries with data that have an equal or worse score (100 is best, 0 is worst)"), i.c.createElement("p", {
						className: "countryinfo__footnote"
					}, i.c.createElement("a", {
						href: "/about"
					}, "Find out more about these indicators")))
				}
			}, {
				key: "fetchData",
				value: function(t) {
					if (t) {
						this.request && this.request.abort();
						var e = new XMLHttpRequest;
						e.open("GET", "".concat(__config.api_path, "countrymeta/").concat(t), !0), e.onload = function() {
							if (e.status >= 200 && e.status < 400) {
								this.request = null;
								var t = JSON.parse(e.responseText);
								this.setState({
									status: "ready",
									data: t[0]
								})
							}
						}.bind(this), this.setState({
							status: "pending",
							data: null
						}), e.send(), this.request = e
					}
				}
			}]) && dt(e.prototype, n), r && dt(e, r), a
		}(i.a);
	n(438), n(518);

	function wt(t) {
		return (wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Et(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Ot(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function St(t, e) {
		return (St = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Pt(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = jt(t);
			if (e) {
				var o = jt(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return kt(this, n)
		}
	}

	function kt(t, e) {
		return !e || "object" !== wt(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function jt(t) {
		return (jt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var Mt = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && St(t, e)
			}(a, t);
			var e, n, r, o = Pt(a);

			function a() {
				return Et(this, a), o.apply(this, arguments)
			}
			return e = a, (n = [{
				key: "componentDidMount",
				value: function() {
					var t = "portal";
					this.props && this.props.modal && (t += " portal--modal"), this.portalNode = document.createElement("div"), this.portalNode.className = t, this.portalNode.setAttribute("aria-hidden", !0), document.body.appendChild(this.portalNode), this.renderSubtree()
				}
			}, {
				key: "componentDidUnmount",
				value: function() {
					this.portalNode.parentNode.removeChild(this.portalNode)
				}
			}, {
				key: "componentDidUpdate",
				value: function(t) {
					t.open !== this.props.open && (this.props.modal && this.toggleDocumentScrolling(this.props.open), this.portalNode.setAttribute("aria-hidden", !this.props.open)), this.renderSubtree()
				}
			}, {
				key: "render",
				value: function(t) {
					return i.c.createElement("div", null)
				}
			}, {
				key: "renderSubtree",
				value: function(t) {
					var e;
					e = (t = t || this.props).open ? i.c.createElement("div", null, t.children) : i.c.createElement("div", null), Object(i.d)(e, this.portalNode, this.portalNode.lastElementChild)
				}
			}, {
				key: "toggleDocumentScrolling",
				value: function(t) {
					var e = document.documentElement.className;
					e = e.replace(/ ?u-disablescrolling/, ""), t && (e += " u-disablescrolling"), document.documentElement.className = e
				}
			}]) && Ot(e.prototype, n), r && Ot(e, r), a
		}(i.a),
		Ct = n(40);
	n(519);

	function Nt(t) {
		return (Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Tt(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Rt(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function At(t, e) {
		return (At = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Dt(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = It(t);
			if (e) {
				var o = It(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return Lt(this, n)
		}
	}

	function Lt(t, e) {
		return !e || "object" !== Nt(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function It(t) {
		return (It = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var qt = {
			land: "forestry"
		},
		Ut = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && At(t, e)
			}(a, t);
			var e, n, r, o = Dt(a);

			function a() {
				return Tt(this, a), o.apply(this, arguments)
			}
			return e = a, (n = [{
				key: "render",
				value: function(t) {
					if (t.data && t.data.content && t.data.content.columns.length) return i.c.createElement("div", {
						className: "dashboardfootprints"
					}, i.c.createElement(Ct.c, null, i.c.createElement(Ct.b, {
						modifier: "full"
					}, i.c.createElement("h1", null, t.data.content.title)), this.renderContent(t.data)))
				}
			}, {
				key: "renderContent",
				value: function(t) {
					if (t && t.content && t.content.columns.length) {
						var e = t.content.columns,
							n = [];
						switch (n.push(this.renderColumn(e[0])), t.content.template) {
							case 1:
								n.push(i.c.createElement(Ct.a, null, i.c.createElement("div", {
									className: "dashboardfootprints__chart"
								}, i.c.createElement(ut, {
									data: t.content.chart,
									formatter: st.a.weight,
									legendPosition: "right"
								}))));
								break;
							case 2:
								n.push(this.renderColumn(e[1])), n.push(i.c.createElement(Ct.a, null, i.c.createElement("div", {
									className: "dashboardfootprints__chart"
								}, i.c.createElement(ut, {
									data: t.content.chart,
									formatter: st.a.weight
								}))));
								break;
							case 3:
							default:
								n.push(this.renderColumn(e[1])), n.push(this.renderColumn(e[2]))
						}
						return n
					}
				}
			}, {
				key: "renderColumn",
				value: function(t) {
					if (!t || !t.content) return null;
					var e = qt[t.icon] ? qt[t.icon] : t.icon;
					return i.c.createElement(Ct.a, null, i.c.createElement("div", {
						class: "dashboardfootprints__icon dashboardfootprints__icon--".concat(e)
					}, i.c.createElement(P.a, {
						id: e
					})), i.c.createElement("p", null, t.content))
				}
			}]) && Rt(e.prototype, n), r && Rt(e, r), a
		}(i.a);
	n(520);

	function zt(t) {
		return (zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Ft(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Ht(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Yt(t, e) {
		return (Yt = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Wt(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Vt(t);
			if (e) {
				var o = Vt(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return Gt(this, n)
		}
	}

	function Gt(t, e) {
		return !e || "object" !== zt(e) && "function" != typeof e ? Bt(t) : e
	}

	function Bt(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function Vt(t) {
		return (Vt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function $t(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var Qt = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Yt(t, e)
		}(a, t);
		var e, n, r, o = Wt(a);

		function a() {
			var t;
			Ft(this, a);
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
			return $t(Bt(t = o.call.apply(o, [this].concat(n))), "handleProfileClick", (function() {
				t.props.onProfileClick && t.props.onProfileClick(t.props.country)
			})), $t(Bt(t), "handleNESProfileClick", (function() {
				t.props.onNESProfileClick && t.props.onNESProfileClick()
			})), $t(Bt(t), "handleCountryClick", (function(e) {
				t.props.onCountryClick && t.props.onCountryClick(e, t.props.country)
			})), $t(Bt(t), "handleCountryTransposeClick", (function(e, n) {
				t.props.onCountryTransposeClick && t.props.onCountryTransposeClick(e, t.props.country)
			})), t
		}
		return e = a, (n = [{
			key: "render",
			value: function(t, e) {
				return i.c.createElement("div", {
					className: "mapmenu"
				}, i.c.createElement("h1", {
					className: "mapmenu__header"
				}, t.country.model.name), i.c.createElement("ul", {
					className: "mapmenu__body"
				}, i.c.createElement("li", {
					className: "mapmenu__item"
				}, this.renderInfoButton(t.country)), this.renderItems(t.country, t.query)))
			}
		}, {
			key: "renderInfoButton",
			value: function(t) {
				return t.model.is_nes ? i.c.createElement("button", {
					type: "button",
					onClick: this.handleNESProfileClick
				}, "What is this?") : i.c.createElement("button", {
					type: "button",
					disabled: !t.model.has_meta,
					onClick: this.handleProfileClick
				}, "Country profile")
			}
		}, {
			key: "renderItems",
			value: function(t, e) {
				var n = t.model === e.exporter.model,
					r = t.model === e.importer.model;
				return n ? [this.renderItem("Deselect as exporter", "exporter"), this.renderItem("Swap to importer", "importer", this.handleCountryTransposeClick)] : r ? [this.renderItem("Deselect as importer", "importer"), this.renderItem("Swap to exporter", "exporter", this.handleCountryTransposeClick)] : [this.renderItem("Select as exporter", "exporter"), this.renderItem("Select as importer", "importer")]
			}
		}, {
			key: "renderItem",
			value: function(t, e, n) {
				return n || (n = this.handleCountryClick), i.c.createElement("li", {
					className: "mapmenu__item"
				}, i.c.createElement("button", {
					type: "button",
					onClick: n.bind(this, e)
				}, t))
			}
		}]) && Ht(e.prototype, n), r && Ht(e, r), a
	}(i.a);
	n(521);

	function Zt(t) {
		return (Zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Xt(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Jt(t, e) {
		return (Jt = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Kt(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = ne(t);
			if (e) {
				var o = ne(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return te(this, n)
		}
	}

	function te(t, e) {
		return !e || "object" !== Zt(e) && "function" != typeof e ? ee(t) : e
	}

	function ee(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function ne(t) {
		return (ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function re(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var oe = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Jt(t, e)
		}(a, t);
		var e, n, r, o = Kt(a);

		function a() {
			var t;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, a), re(ee(t = o.call(this)), "handleDocumentMouseDown", (function(e) {
				t.base && t.base.contains(e.target) || t.props.onClose && t.props.onClose()
			})), re(ee(t), "handleWindowResize", (function() {
				t.props.onClose && t.props.onClose()
			})), t.state = {
				width: null
			}, t
		}
		return e = a, (n = [{
			key: "componentWillMount",
			value: function() {
				document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("touchstart", this.handleDocumentMouseDown), window.addEventListener("resize", this.handleWindowResize)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("touchstart", this.handleDocumentMouseDown), window.removeEventListener("resize", this.handleWindowResize)
			}
		}, {
			key: "componentDidMount",
			value: function() {
				this.measure()
			}
		}, {
			key: "componentDidUpdate",
			value: function() {
				this.measure()
			}
		}, {
			key: "render",
			value: function(t, e) {
				var n;
				if (e.width) {
					var r = t.rect.left,
						o = window.innerWidth - (r + e.width + 8);
					o < 0 && (t.rect.right ? r = t.rect.right - e.width : r += o), n = {
						left: "".concat(r, "px"),
						top: "".concat(t.rect.bottom, "px")
					}
				} else n = {
					visibility: "hidden"
				};
				return i.c.createElement("div", {
					className: "popover",
					style: n
				}, t.children)
			}
		}, {
			key: "measure",
			value: function() {
				var t = this.base.getBoundingClientRect();
				t.width !== this.state.width && this.setState({
					width: t.width
				})
			}
		}]) && Xt(e.prototype, n), r && Xt(e, r), a
	}(i.a);

	function ie() {
		return i.c.createElement(pt, {
			header: i.c.createElement("h1", null, "Areas, nes and Special Categories")
		}, i.c.createElement("p", null, i.c.createElement("strong", null, "Areas, NES"), " (not elsewhere specified) are unknown trading partners, recorded when the reporting country does not submit the details of their partner. This occurs (a) for low value trades and (b) if the partner designation is unknown to the reporting country, or if an error is made in assigning the trading partner. Reporting countries sometimes withhold partner details to protect company information. Different categories of areas not elsewhere specified are associated with the world as a whole, with continents, and (prior to 2006) with regions."), i.c.createElement("p", null, i.c.createElement("strong", null, "Special Categories"), " is used by countries reporting trade flows if they do not want the trading partner breakdown to be disclosed."), i.c.createElement("p", null, "The distinction between an �崬nknown partner country�� and an �崬ndisclosed partner country�� can sometimes be mixed up when recorded."))
	}
	n(254), n(405);
	var ae = n(427),
		ce = (n(74), n(436)),
		ue = n(229),
		le = n(431),
		se = (n(252), n(253), n(255));

	function fe(t) {
		if (t.data) {
			var e = "pc_".concat(t.query.units),
				n = t.data.filter((function(e) {
					return e.year.id === t.query.year.id
				})),
				r = n[0] && n[0][e] ? n[0][e] : null;
			return i.c.createElement("div", {
				className: "trade-donut-chart"
			}, i.c.createElement(se.a, {
				value: r,
				formattedValue: st.a.percentage(r),
				title: t.title
			}))
		}
	}
	n(105);
	var pe = n(53),
		he = n.n(pe),
		de = n(233),
		ye = n(500),
		ve = n.n(ye),
		me = n(397),
		be = n(15);
	n(525);

	function _e(t) {
		var e = t.data,
			n = t.type,
			r = t.width,
			o = void 0 === r ? 38 : r,
			a = t.height,
			c = {
				width: o,
				height: void 0 === a ? 18 : a
			},
			u = Object(Z.b)().domain(ve()(0, e.length)).range([1, c.width - 1]),
			l = Math.min.apply(null, e),
			s = Math.max.apply(null, e),
			f = Object(Z.a)().domain([l, s]).range([c.height - 1, 1]),
			p = Object(X.b)().x((function(t, e) {
				return u(e)
			})).y((function(t) {
				return f(t)
			}))(e);
		return i.c.createElement("svg", {
			class: Object(be.a)("sparkline", n && "sparkline--".concat(n)),
			viewBox: "0 0 ".concat(c.width, " ").concat(c.height),
			preserveAspectRatio: "none"
		}, i.c.createElement("path", {
			d: p
		}))
	}

	function ge(t) {
		return (ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function xe(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function we(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Ee(t, e) {
		return (Ee = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Oe(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Pe(t);
			if (e) {
				var o = Pe(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return Se(this, n)
		}
	}

	function Se(t, e) {
		return !e || "object" !== ge(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function Pe(t) {
		return (Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var ke = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && Ee(t, e)
			}(a, t);
			var e, n, r, o = Oe(a);

			function a() {
				return xe(this, a), o.apply(this, arguments)
			}
			return e = a, (n = [{
				key: "render",
				value: function(t) {
					return t.data.length ? i.c.createElement("ol", {
						className: "list"
					}, t.data.map((function(e, n) {
						var r = "list__item";
						return e.disabled && (r += " list__item--disabled"), i.c.createElement("li", {
							class: r,
							onClick: this.handleClick.bind(this, e),
							onMouseEnter: this.handleMouseEnter.bind(this, e),
							onMouseLeave: this.handleMouseLeave
						}, i.c.createElement("div", {
							className: "list__row"
						}, i.c.createElement("div", {
							className: "list__cell list__cell--counter"
						}, n + 1), i.c.createElement("div", {
							className: "list__cell list__cell--title",
							title: e.label
						}, i.c.createElement("span", null, e.label)), i.c.createElement("div", {
							className: "list__cell list__cell--sparkline"
						}, e.historicalValues && i.c.createElement(_e, {
							data: e.historicalValues,
							type: t.type
						})), i.c.createElement("div", {
							className: "list__cell list__cell--value"
						}, e.formattedValue)))
					}), this)) : this.renderEmpty()
				}
			}]) && we(e.prototype, n), r && we(e, r), a
		}(me.a),
		je = n(49),
		Me = function(t) {
			return i.c.createElement("span", {
				title: "Compound annual growth rate (CAGR)"
			}, t.years ? "".concat(t.years[0], "��").concat(t.years[1]) : "2011��2015")
		};

	function Ce(t) {
		return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Ne(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Te(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Re(t, e) {
		return (Re = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Ae(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Ie(t);
			if (e) {
				var o = Ie(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return De(this, n)
		}
	}

	function De(t, e) {
		return !e || "object" !== Ce(e) && "function" != typeof e ? Le(t) : e
	}

	function Le(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function Ie(t) {
		return (Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function qe(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var Ue = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Re(t, e)
		}(a, t);
		var e, n, r, o = Ae(a);

		function a() {
			var t;
			Ne(this, a);
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
			return qe(Le(t = o.call.apply(o, [this].concat(n))), "handleButtonClick", (function(e) {
				t.props.handleBack && t.props.handleBack(e)
			})), t
		}
		return e = a, (n = [{
			key: "shouldComponentUpdate",
			value: function(t) {
				return null !== t.data && (this.props.data !== t.data || this.props.units !== t.units)
			}
		}, {
			key: "render",
			value: function(t) {
				if (null === t.data) return i.c.createElement("div", {
					className: "dashboard__grid"
				});
				var e, n = he()(t.data.main, [t.units]).filter((function(e) {
						return null !== e[t.units]
					})).reverse().slice(0, 5).map((function(e) {
						var n = e[t.units],
							r = "value" === t.units ? st.a.currency : st.a.weight;
						return {
							label: "".concat(e.exporter.model.name, " to ").concat(e.importer.model.name),
							value: n,
							formattedValue: r(n),
							original: e
						}
					})),
					r = "delta_".concat(t.units, "_pc"),
					o = he()(t.data.trends[t.units], [r]),
					a = function(e) {
						var n = e[r];
						return {
							label: "".concat(e.exporter.model.name, " to ").concat(e.importer.model.name),
							value: n,
							formattedValue: st.a.signedPercentage(n),
							historicalValues: e["agg_".concat(t.units)],
							original: e
						}
					},
					c = o.slice(0, 5).filter((function(t) {
						return t[r] < 0
					})).map(a),
					u = o.reverse().slice(0, 5).filter((function(t) {
						return t[r] > 0
					})).map(a);
				return t.prevQuery && (e = i.c.createElement(je.a, {
					icon: "left",
					handleClick: this.handleButtonClick.bind(this, t.prevQuery)
				}, "Back")), i.c.createElement(Ct.c, null, i.c.createElement(Ct.b, {
					modifier: "inline"
				}, i.c.createElement("h1", null, "Top 5"), e), i.c.createElement(Ct.a, null, i.c.createElement(de.a, {
					data: n,
					handleClick: t.handleClick,
					handleHover: t.handleHover
				})), i.c.createElement(Ct.b, {
					modifier: "inline"
				}, i.c.createElement("h1", null, "Fastest growing"), i.c.createElement(Me, {
					years: t.data.trendYears
				})), i.c.createElement(Ct.a, null, i.c.createElement(ke, {
					data: u,
					handleClick: t.handleClick,
					handleHover: t.handleHover
				})), i.c.createElement(Ct.b, {
					modifier: "inline"
				}, i.c.createElement("h1", null, "Fastest declining"), i.c.createElement(Me, {
					years: t.data.trendYears
				})), i.c.createElement(Ct.a, null, i.c.createElement(ke, {
					data: c,
					handleClick: t.handleClick,
					handleHover: t.handleHover
				})))
			}
		}]) && Te(e.prototype, n), r && Te(e, r), a
	}(i.a);

	function ze(t) {
		return (ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Fe(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function He(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Ye(t, e) {
		return (Ye = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function We(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Ve(t);
			if (e) {
				var o = Ve(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return Ge(this, n)
		}
	}

	function Ge(t, e) {
		return !e || "object" !== ze(e) && "function" != typeof e ? Be(t) : e
	}

	function Be(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function Ve(t) {
		return (Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function $e(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var Qe = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Ye(t, e)
		}(a, t);
		var e, n, r, o = We(a);

		function a() {
			var t;
			Fe(this, a);
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
			return $e(Be(t = o.call.apply(o, [this].concat(n))), "handleButtonClick", (function(e) {
				t.props.handleClick && t.props.handleClick({
					category: e
				})
			})), t
		}
		return e = a, (n = [{
			key: "shouldComponentUpdate",
			value: function(t) {
				return null !== t.data && (this.props.data !== t.data || this.props.units !== t.units)
			}
		}, {
			key: "render",
			value: function(t) {
				if (null === t.data) return i.c.createElement("div", {
					className: "dashboard__grid"
				});
				var e, n = he()(t.data.main, [t.units]).filter((function(e) {
						return null !== e[t.units]
					})).reverse().slice(0, 5).map((function(e) {
						var n = e[t.units],
							r = "value" === t.units ? st.a.currency : st.a.weight;
						return {
							label: e.category.model.name,
							value: n,
							formattedValue: r(n),
							disabled: e.category === t.active,
							original: e
						}
					})),
					r = "delta_".concat(t.units, "_pc"),
					o = he()(t.data.trends[t.units], [r]),
					a = function(e) {
						var n = e[r];
						return {
							label: e.category.model.name,
							value: n,
							formattedValue: st.a.signedPercentage(n),
							historicalValues: e["agg_".concat(t.units)],
							disabled: e.category === t.active,
							original: e
						}
					},
					c = o.slice(0, 5).filter((function(t) {
						return t[r] < 0
					})).map(a),
					u = o.reverse().slice(0, 5).filter((function(t) {
						return t[r] > 0
					})).map(a);
				return t.active && t.active.parent && (e = i.c.createElement(je.a, {
					icon: "left",
					title: t.active.parent.model.name,
					handleClick: this.handleButtonClick.bind(this, t.active.parent)
				}, "Parent")), i.c.createElement(Ct.c, null, i.c.createElement(Ct.b, {
					modifier: "inline"
				}, i.c.createElement("h1", null, "Top 5"), e), i.c.createElement(Ct.a, null, i.c.createElement(de.a, {
					data: n,
					type: "commodity",
					handleClick: t.handleClick
				})), i.c.createElement(Ct.b, {
					modifier: "inline"
				}, i.c.createElement("h1", null, "Fastest growing"), i.c.createElement(Me, {
					years: t.data.trendYears
				})), i.c.createElement(Ct.a, null, i.c.createElement(ke, {
					data: u,
					type: "commodity",
					handleClick: t.handleClick
				})), i.c.createElement(Ct.b, {
					modifier: "inline"
				}, i.c.createElement("h1", null, "Fastest declining"), i.c.createElement(Me, {
					years: t.data.trendYears
				})), i.c.createElement(Ct.a, null, i.c.createElement(ke, {
					data: c,
					type: "commodity",
					handleClick: t.handleClick
				})))
			}
		}]) && He(e.prototype, n), r && He(e, r), a
	}(i.a);

	function Ze(t) {
		return (Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Xe(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Je(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Ke(t, e) {
		return (Ke = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function tn(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = rn(t);
			if (e) {
				var o = rn(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return en(this, n)
		}
	}

	function en(t, e) {
		return !e || "object" !== Ze(e) && "function" != typeof e ? nn(t) : e
	}

	function nn(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function rn(t) {
		return (rn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function on(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var an = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && Ke(t, e)
			}(a, t);
			var e, n, r, o = tn(a);

			function a() {
				var t;
				Xe(this, a);
				for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
				return on(nn(t = o.call.apply(o, [this].concat(n))), "handleButtonClick", (function(e) {
					t.props.handleBack && t.props.handleBack(e)
				})), t
			}
			return e = a, (n = [{
				key: "shouldComponentUpdate",
				value: function(t) {
					return null !== t.data && (this.props.data !== t.data || this.props.units !== t.units)
				}
			}, {
				key: "render",
				value: function(t) {
					if (null === t.data) return i.c.createElement("div", {
						className: "dashboard__grid"
					});
					var e, n = he()(t.data.main, [t.units]).filter((function(e) {
							return null !== e[t.units]
						})).reverse().slice(0, 5).map((function(e) {
							var n = e[t.units],
								r = "value" === t.units ? st.a.currency : st.a.weight;
							return {
								label: e[t.type].model.name,
								value: n,
								formattedValue: r(n),
								disabled: e[t.type] === t.active,
								original: e
							}
						})),
						r = "delta_".concat(t.units, "_pc"),
						o = he()(t.data.trends[t.units], [r]),
						a = function(e) {
							var n = e[r];
							return {
								label: e[t.type].model.name,
								value: n,
								formattedValue: st.a.signedPercentage(n),
								historicalValues: e["agg_".concat(t.units)],
								disabled: e[t.type] === t.active,
								original: e
							}
						},
						c = o.slice(0, 5).filter((function(t) {
							return t[r] < 0
						})).map(a),
						u = o.reverse().slice(0, 5).filter((function(t) {
							return t[r] > 0
						})).map(a);
					return t.prevQuery && (e = i.c.createElement(je.a, {
						icon: "left",
						handleClick: this.handleButtonClick.bind(this, t.prevQuery)
					}, "Back")), i.c.createElement(Ct.c, null, i.c.createElement(Ct.b, {
						modifier: "inline"
					}, i.c.createElement("h1", null, "Top 5"), e), i.c.createElement(Ct.a, null, i.c.createElement(de.a, {
						data: n,
						type: t.type,
						handleClick: t.handleClick
					})), i.c.createElement(Ct.b, {
						modifier: "inline"
					}, i.c.createElement("h1", null, "Fastest growing"), i.c.createElement(Me, {
						years: t.data.trendYears
					})), i.c.createElement(Ct.a, null, i.c.createElement(ke, {
						data: u,
						type: t.type,
						handleClick: t.handleClick
					})), i.c.createElement(Ct.b, {
						modifier: "inline"
					}, i.c.createElement("h1", null, "Fastest declining"), i.c.createElement(Me, {
						years: t.data.trendYears
					})), i.c.createElement(Ct.a, null, i.c.createElement(ke, {
						data: c,
						type: t.type,
						handleClick: t.handleClick
					})))
				}
			}]) && Je(e.prototype, n), r && Je(e, r), a
		}(i.a),
		cn = (n(235), n(161)),
		un = n.n(cn),
		ln = n(142),
		sn = n.n(ln);
	n(526);

	function fn(t) {
		return (fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function pn(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function hn(t, e) {
		return (hn = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function dn(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = mn(t);
			if (e) {
				var o = mn(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return yn(this, n)
		}
	}

	function yn(t, e) {
		return !e || "object" !== fn(e) && "function" != typeof e ? vn(t) : e
	}

	function vn(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function mn(t) {
		return (mn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function bn(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var _n = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && hn(t, e)
		}(a, t);
		var e, n, r, o = dn(a);

		function a(t) {
			var e;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, a), bn(vn(e = o.call(this)), "handleMouseEnter", (function(t) {
				e.props.onHover && e.props.onHover(t)
			})), bn(vn(e), "handleMouseLeave", (function() {
				e.props.onHover && e.props.onHover(null)
			})), bn(vn(e), "handleTouchMove", (function(t) {
				if (e.props.onHover && 1 === t.touches.length) {
					var n = document.elementFromPoint(t.touches[0].clientX, t.touches[0].clientY);
					if (n) {
						var r = n.getAttribute("data-id");
						e.props.onHover(r)
					}
				}
			})), bn(vn(e), "handleTouchEnd", (function() {
				e.props.onHover && e.props.onHover(null)
			})), bn(vn(e), "handleClick", (function(t) {
				e.props.onClick && e.props.onClick(t)
			})), bn(vn(e), "handleWindowResize", (function() {
				var t = document.body.clientWidth;
				e.windowWidth && e.windowWidth === t || (e.updateDimensions(), e.windowWidth = t)
			})), bn(vn(e), "updateDimensions", (function() {
				if (e.base && e.base.offsetParent && e.refCanvas) {
					var t = e.refCanvas.getBoundingClientRect();
					e.setState({
						width: t.width,
						height: t.height
					})
				}
			})), e.state = {
				width: 0,
				height: 0
			}, e.windowWidth = null, e._handleWindowResize = sn()(e.handleWindowResize, 200), e
		}
		return e = a, (n = [{
			key: "componentDidMount",
			value: function() {
				window.addEventListener("resize", this._handleWindowResize), this.state.width && this.state.height || this.updateDimensions()
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.removeEventListener("resize", this._handleWindowResize)
			}
		}, {
			key: "render",
			value: function(t, e) {
				var n = this;
				if (!e.width || !e.height) return this.renderStub();
				var r, o = Object(Z.b)().domain(t.years).range([0, e.width]),
					a = o.copy().range([0, 100]);
				r = t.max ? t.max : t.data.reduce((function(t, e) {
					return Math.max(t, e.value)
				}), 0);
				var c, u = Object(Z.a)().domain([0, r]).range([e.height, 0]).nice(),
					l = Object(X.b)().x((function(t) {
						return o(t.year)
					})).y((function(t) {
						return u(t.value)
					})).defined((function(t) {
						return null !== t.value
					}));
				return t.hoveredYear && (c = this.renderMarker(a(t.hoveredYear), "hover")), i.c.createElement("div", {
					className: "linechart"
				}, i.c.createElement("div", {
					className: "linechart__body"
				}, i.c.createElement("div", {
					className: "linechart__canvaswrapper"
				}, i.c.createElement("svg", {
					ref: function(t) {
						n.refCanvas = t
					},
					className: "linechart__canvas",
					viewBox: "0 0 ".concat(e.width, " ").concat(e.height),
					preserveAspectRatio: "none"
				}, i.c.createElement("path", {
					d: l(t.data)
				}), i.c.createElement("g", null, this.renderMissingDataPoints(t.data, o, u)))), i.c.createElement("div", {
					className: "linechart__xaxis"
				}, i.c.createElement("div", {
					className: "linechart__xaxis__ticks"
				}, this.renderXAxis(t.data, a, t.xAxisInterval))), i.c.createElement("div", {
					className: "linechart__yaxis"
				}, this.renderYAxis(t.data, u, t.formatter)), i.c.createElement("div", {
					className: "linechart__markers"
				}, c, this.renderMarker(a(t.year))), i.c.createElement("div", {
					className: "linechart__hitboxes",
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					onTouchCancel: this.handleTouchEnd
				}, this.renderHitboxes(t.data, a))))
			}
		}, {
			key: "renderStub",
			value: function() {
				var t = this;
				return i.c.createElement("div", {
					className: "linechart"
				}, i.c.createElement("div", {
					className: "linechart__body"
				}, i.c.createElement("div", {
					className: "linechart__canvaswrapper"
				}, i.c.createElement("svg", {
					ref: function(e) {
						t.refCanvas = e
					},
					className: "linechart__canvas"
				})), i.c.createElement("div", {
					className: "linechart__xaxis"
				}), i.c.createElement("div", {
					className: "linechart__yaxis"
				}), i.c.createElement("div", {
					className: "linechart__markers"
				}), i.c.createElement("div", {
					className: "linechart__hitboxes"
				})))
			}
		}, {
			key: "renderMarker",
			value: function(t, e) {
				var n = "linechart__marker";
				return e && (n += " linechart__marker--".concat(e)), i.c.createElement("div", {
					class: n,
					style: {
						left: "".concat(t, "%")
					}
				}, i.c.createElement("svg", {
					viewBox: "0 0 9 4"
				}, i.c.createElement("path", {
					d: "M4,0,0,4H9L5,0Z"
				})))
			}
		}, {
			key: "renderXAxis",
			value: function(t, e, n) {
				return t.reduce((function(r, o, a) {
					var c = o.year % n;
					if (c && !(a === t.length - 1 && c > 2)) return r;
					var u = e(o.year);
					return r.push(i.c.createElement("div", {
						className: "linechart__xaxis__tick",
						style: {
							left: "".concat(u, "%")
						}
					}, i.c.createElement("span", null, o.year))), r
				}), [])
			}
		}, {
			key: "renderYAxis",
			value: function(t, e, n) {
				var r = e.domain()[1];
				return i.c.createElement("div", null, i.c.createElement("div", {
					className: "linechart__yaxis__tick"
				}, i.c.createElement("span", null, n(r))), i.c.createElement("div", {
					className: "linechart__yaxis__tick",
					style: {
						top: "25%"
					}
				}, i.c.createElement("span", null, n(.75 * r))), i.c.createElement("div", {
					className: "linechart__yaxis__tick",
					style: {
						top: "50%"
					}
				}, i.c.createElement("span", null, n(.5 * r))), i.c.createElement("div", {
					className: "linechart__yaxis__tick",
					style: {
						top: "75%"
					}
				}, i.c.createElement("span", null, n(.25 * r))), i.c.createElement("div", {
					className: "linechart__yaxis__tick",
					style: {
						top: "100%"
					}
				}, i.c.createElement("span", null, n(0))))
			}
		}, {
			key: "renderMissingDataPoints",
			value: function(t, e, n) {
				return t.reduce((function(r, o, a) {
					if (!o) return r;
					var c = o.value,
						u = a < t.length - 1 ? t[a + 1].value : null,
						l = a > 0 ? t[a - 1].value : null;
					return null !== c && null === l && null === u && r.push(i.c.createElement("circle", {
						cx: e(o.year),
						cy: n(c)
					})), r
				}), [])
			}
		}, {
			key: "renderHitboxes",
			value: function(t, e) {
				var n = 100 / t.length;
				return t.map((function(t) {
					return i.c.createElement("div", {
						className: "linechart__hitbox",
						title: t.year,
						style: {
							left: "".concat(e(t.year), "%"),
							width: "".concat(n, "%"),
							marginLeft: "".concat(n / -2, "%")
						},
						"data-id": t.year,
						onMouseEnter: this.handleMouseEnter.bind(this, t.year),
						onMouseLeave: this.handleMouseLeave,
						onClick: this.handleClick.bind(this, t.year)
					})
				}), this)
			}
		}]) && pn(e.prototype, n), r && pn(e, r), a
	}(i.a);
	n(527);

	function gn(t) {
		var e = t.value;
		return i.c.createElement("p", {
			className: "linechart-readout"
		}, e)
	}
	n(528);

	function xn(t) {
		var e = t.text;
		return i.c.createElement("h1", {
			className: "line-chart-header"
		}, e)
	}

	function wn(t) {
		return (wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function En(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function On(t, e) {
		return (On = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Sn(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = jn(t);
			if (e) {
				var o = jn(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return Pn(this, n)
		}
	}

	function Pn(t, e) {
		return !e || "object" !== wn(e) && "function" != typeof e ? kn(t) : e
	}

	function kn(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function jn(t) {
		return (jn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Mn(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var Cn = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && On(t, e)
			}(a, t);
			var e, n, r, o = Sn(a);

			function a() {
				var t;
				return function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, a), Mn(kn(t = o.call(this)), "handleHover", (function(e) {
					t.setState({
						hoveredYear: e
					})
				})), Mn(kn(t), "handleClick", (function(t) {
					_.dispatch("SET_YEAR", t)
				})), t.state = {
					hoveredYear: null
				}, t
			}
			return e = a, (n = [{
				key: "shouldComponentUpdate",
				value: function(t, e) {
					var n = this.props.data !== t.data || this.props.query !== t.query || this.props.years !== t.years || this.state.hoveredYear !== e.hoveredYear;
					return null !== t.data && n
				}
			}, {
				key: "render",
				value: function(t, e) {
					if (null !== t.data) {
						var n = t.query.units,
							r = "value" === t.query.units ? st.a.currency : st.a.weight;
						"pc" === t.formatter && (n = "pc_".concat(t.query.units), r = st.a.percentage);
						var o = un()(t.data, (function(t) {
								return t.year.id
							})),
							a = e.hoveredYear ? e.hoveredYear : t.query.year.id,
							c = o[a] || {},
							u = [],
							l = t.years.map((function(t) {
								var e = o[t.id];
								return u.push(t.id), {
									year: t.id,
									value: e ? e[n] : null,
									original: e
								}
							}));
						return l = he()(l, ["year"]), i.c.createElement(i.c.Fragment, null, i.c.createElement(xn, {
							text: t.title
						}), i.c.createElement(gn, {
							value: r(c[n])
						}), i.c.createElement(_n, {
							data: l,
							year: t.query.year.id,
							hoveredYear: e.hoveredYear,
							years: u.sort(),
							xAxisInterval: "5",
							formatter: r,
							max: "pc" === t.formatter ? 1 : null,
							onHover: this.handleHover,
							onClick: this.handleClick
						}))
					}
				}
			}]) && En(e.prototype, n), r && En(e, r), a
		}(i.a),
		Nn = (n(159), n(164)),
		Tn = n(236);
	n(529);

	function Rn(t) {
		return (Rn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function An(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Dn(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Ln(t, e) {
		return (Ln = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function In(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Un(t);
			if (e) {
				var o = Un(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return qn(this, n)
		}
	}

	function qn(t, e) {
		return !e || "object" !== Rn(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function Un(t) {
		return (Un = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var zn = function(t) {
			! function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && Ln(t, e)
			}(a, t);
			var e, n, r, o = In(a);

			function a() {
				return An(this, a), o.apply(this, arguments)
			}
			return e = a, (n = [{
				key: "render",
				value: function(t) {
					return i.c.createElement("div", {
						className: "querytranspose"
					}, i.c.createElement("button", {
						type: "button",
						title: t.tooltip,
						onClick: this.handleClick.bind(this)
					}, i.c.createElement(P.a, {
						id: "swap-trade"
					})))
				}
			}, {
				key: "handleClick",
				value: function(t) {
					this.props.handleClick()
				}
			}]) && Dn(e.prototype, n), r && Dn(e, r), a
		}(i.a),
		Fn = (n(530), function(t) {
			var e = t.children,
				n = t.checked,
				r = t.onChange;
			return i.c.createElement("label", {
				className: "checkbox"
			}, i.c.createElement("input", {
				className: "checkbox__input",
				type: "checkbox",
				checked: n,
				onChange: r
			}), i.c.createElement("span", {
				className: "checkbox__icon"
			}, i.c.createElement(P.a, {
				id: "check"
			}), i.c.createElement(P.a, {
				id: "check-on"
			})), i.c.createElement("span", {
				className: "checkbox__label"
			}, e))
		});

	function Hn(t) {
		return (Hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Yn(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Wn(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function Gn(t, e) {
		return (Gn = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Bn(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = Qn(t);
			if (e) {
				var o = Qn(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return Vn(this, n)
		}
	}

	function Vn(t, e) {
		return !e || "object" !== Hn(e) && "function" != typeof e ? $n(t) : e
	}

	function $n(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function Qn(t) {
		return (Qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Zn(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var Xn = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Gn(t, e)
		}(a, t);
		var e, n, r, o = Bn(a);

		function a() {
			var t;
			Yn(this, a);
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
			return Zn($n(t = o.call.apply(o, [this].concat(n))), "handleTranspose", (function() {
				t.props.handleTranspose()
			})), Zn($n(t), "handleChangeAutoZoom", (function(e) {
				t.props.handleChangeAutoZoom(e.target.checked)
			})), t
		}
		return e = a, (n = [{
			key: "render",
			value: function(t) {
				var e = t.query.importer;
				t.query.importer.children && t.query.importer.children.length && !t.query.importer.model.aggregate && (e = null);
				var n = t.query.exporter;
				return t.query.exporter.children && t.query.exporter.children.length && !t.query.exporter.model.aggregate && (n = null), i.c.createElement(Nn.a, null, i.c.createElement(Nn.b, null, i.c.createElement(Tn.a, {
					id: "exporter",
					label: "Exporter",
					current: t.query.exporter,
					disabled: t.disabledCountries,
					invalid: [e],
					data: [{
						name: "Countries",
						data: t.data.countries
					}, {
						name: "Regions",
						data: t.data.countryGroupsRegions,
						showCounts: !0,
						active: t.query.exporter && "region" === t.query.exporter.model.type
					}, {
						name: "Groups",
						data: t.data.countryGroupsMain,
						showCounts: !0,
						active: t.query.exporter && "group" === t.query.exporter.model.type
					}],
					default: t.data.countries.getDefault(),
					searchable: !0,
					handleSelect: this.handleSelect.bind(this, "exporter"),
					handlePopoverToggle: t.handlePopoverToggle
				})), i.c.createElement(Nn.b, null, i.c.createElement(Tn.a, {
					id: "importer",
					label: "Importer",
					current: t.query.importer,
					disabled: t.disabledCountries,
					invalid: [n],
					data: [{
						name: "Countries",
						data: t.data.countries
					}, {
						name: "Regions",
						data: t.data.countryGroupsRegions,
						showCounts: !0,
						active: t.query.importer && "region" === t.query.importer.model.type
					}, {
						name: "Groups",
						data: t.data.countryGroupsMain,
						showCounts: !0,
						active: t.query.importer && "group" === t.query.importer.model.type
					}],
					default: t.data.countries.getDefault(),
					searchable: !0,
					handleSelect: this.handleSelect.bind(this, "importer"),
					handlePopoverToggle: t.handlePopoverToggle
				}), i.c.createElement(zn, {
					handleClick: this.handleTranspose,
					tooltip: "Swap exporter/importer"
				})), i.c.createElement(Nn.b, null, i.c.createElement(Tn.a, {
					id: "category",
					label: "Commodity",
					current: t.query.category,
					data: [{
						name: "Commodities",
						data: t.data.categories
					}],
					default: t.data.categories.getDefault(),
					searchable: !0,
					handleSelect: this.handleSelect.bind(this, "category"),
					handlePopoverToggle: t.handlePopoverToggle
				})), i.c.createElement(Nn.b, null, i.c.createElement(Tn.a, {
					label: "Year",
					current: t.query.year,
					disabled: t.disabledYears,
					data: t.data.years,
					reverse: !0,
					handleSelect: this.handleSelect.bind(this, "year"),
					handlePopoverToggle: t.handlePopoverToggle
				})), i.c.createElement(Nn.b, null, i.c.createElement(Fn, {
					checked: t.autoZoom,
					onChange: this.handleChangeAutoZoom
				}, "Auto zoom to region")))
			}
		}, {
			key: "handleSelect",
			value: function(t, e) {
				this.props.handleSelect(t, e)
			}
		}]) && Wn(e.prototype, n), r && Wn(e, r), a
	}(i.a);

	function Jn(t) {
		return (Jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Kn() {
		return (Kn = Object.assign || function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		}).apply(this, arguments)
	}

	function tr(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function er(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function nr(t, e) {
		return (nr = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function rr(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = ir(t);
			if (e) {
				var o = ir(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return or(this, n)
		}
	}

	function or(t, e) {
		return !e || "object" !== Jn(e) && "function" != typeof e ? function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function ir(t) {
		return (ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	var ar = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && nr(t, e)
		}(a, t);
		var e, n, r, o = rr(a);

		function a() {
			return tr(this, a), o.apply(this, arguments)
		}
		return e = a, (n = [{
			key: "shouldComponentUpdate",
			value: function(t) {
				return this.props.query !== t.query
			}
		}, {
			key: "render",
			value: function(t) {
				var e = [],
					n = [];
				return t.data.countries.forEach((function(n) {
					(n.model.start_year > t.query.year.id || n.model.end_year < t.query.year.id) && e.push(n)
				})), t.query.exporter && t.query.exporter.model.start_year && t.data.years.forEach((function(e) {
					(e.id < t.query.exporter.model.start_year || e.id > t.query.exporter.model.end_year) && n.push(e)
				})), t.query.importer && t.query.importer.model.start_year && t.data.years.forEach((function(e) {
					(e.id < t.query.importer.model.start_year || e.id > t.query.importer.model.end_year) && n.push(e)
				})), i.c.createElement(Xn, Kn({}, t, {
					disabledCountries: e,
					disabledYears: n
				}))
			}
		}, {
			key: "handleSelect",
			value: function(t, e) {
				this.props.handleSelect(t, e)
			}
		}, {
			key: "handleTranspose",
			value: function() {
				this.props.handleTranspose()
			}
		}]) && er(e.prototype, n), r && er(e, r), a
	}(i.a);
	n(531);

	function cr(t) {
		return (cr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function ur(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function lr(t, e) {
		return (lr = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function sr(t) {
		var e = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}();
		return function() {
			var n, r = hr(t);
			if (e) {
				var o = hr(this).constructor;
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments);
			return fr(this, n)
		}
	}

	function fr(t, e) {
		return !e || "object" !== cr(e) && "function" != typeof e ? pr(t) : e
	}

	function pr(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function hr(t) {
		return (hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function dr(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var yr = function(t) {
		! function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && lr(t, e)
		}(a, t);
		var e, n, r, o = sr(a);

		function a(t) {
			var e;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, a), dr(pr(e = o.call(this)), "handleMapMenuClose", (function() {
				e.store.dispatch("HIDE_COUNTRY_MENU")
			})), dr(pr(e), "handleCountryModalClose", (function() {
				e.store.dispatch("HIDE_COUNTRY_MODAL")
			})), dr(pr(e), "handleProfileClick", (function(t) {
				e.store.dispatch("SHOW_COUNTRY_MODAL")
			})), dr(pr(e), "handleNESProfileClick", (function() {
				e.store.dispatch("SHOW_NES_MODAL")
			})), dr(pr(e), "handleNESModalClose", (function() {
				e.store.dispatch("HIDE_NES_MODAL")
			})), dr(pr(e), "handleCountryClick", (function(t, n) {
				var r = e.state.query.clone();
				r[t] !== n ? r[t] = n : r[t] = e.data.countries.getDefault(), e.store.dispatch("HIDE_COUNTRY_MENU"), e.store.dispatch("SET_QUERY", r)
			})), dr(pr(e), "handleCountryTransposeClick", (function(t, n) {
				var r = "exporter" === t ? "importer" : "exporter",
					o = e.state.query.clone();
				o[r] = o[t], o[t] = n, e.store.dispatch("HIDE_COUNTRY_MENU"), e.store.dispatch("SET_QUERY", o)
			})), dr(pr(e), "handleModalButtonClick", (function() {
				e.store.dispatch("TOGGLE_MODAL", !0)
			})), dr(pr(e), "handleShareModalButtonClick", (function() {
				e.store.dispatch("TOGGLE_SHARE_MODAL", !0)
			})), dr(pr(e), "handleQuerySelect", (function(t, n) {
				var r = e.state.query.clone();
				r.set(t, n), e.store.dispatch("SET_QUERY", r)
			})), dr(pr(e), "handleQueryTranspose", (function() {
				var t = e.state.query.clone();
				t.exporter = e.state.query.importer, t.importer = e.state.query.exporter, e.store.dispatch("SET_QUERY", t)
			})), dr(pr(e), "handleQueryPopoverToggle", (function(t) {
				e.store.dispatch("TOGGLE_QUERY_POPOVER", t)
			})), dr(pr(e), "handleListClick", (function(t) {
				var n = "SET_QUERY",
					r = e.state.query.clone();
				t.exporter && (r.exporter = t.exporter, n = "SET_QUERY_LOGGED"), t.importer && (r.importer = t.importer, n = "SET_QUERY_LOGGED"), t.category && (r.category = t.category), e.store.dispatch(n, r), e.store.dispatch("SET_SHOW_TOOLTIP", !1)
			})), dr(pr(e), "handleListBackClick", (function(t) {
				e.store.dispatch("SET_QUERY", t)
			})), dr(pr(e), "handleUnitsChange", (function(t) {
				e.store.dispatch("SET_UNITS", t)
			})), dr(pr(e), "handleFlowHover", (function(t, n) {
				e.store.dispatch("SET_HOVERED_FLOW", {
					data: t,
					point: n
				}), e.store.dispatch("SET_SHOW_TOOLTIP", !!t && !!n)
			})), dr(pr(e), "handleCountryHover", (function(t) {
				e.store.dispatch("SET_HOVERED_COUNTRY", t)
			})), dr(pr(e), "handleDownloadStart", (function(t) {
				e.store.dispatch("SET_DOWNLOAD_PENDING", t)
			})), dr(pr(e), "handleDownloadComplete", (function() {
				e.store.dispatch("SET_DOWNLOAD_PENDING", null)
			})), dr(pr(e), "handleMapLabelClick", (function(t, n) {
				e.store.dispatch("SET_ACTIVE_COUNTRY", {
					country: t,
					rect: n
				})
			})), dr(pr(e), "handleZoomToRegion", (function(t) {
				e.store.dispatch("SET_ZOOM_REGION", t)
			})), dr(pr(e), "handleQueryIntraregional", (function(t) {
				var n = e.data.countryGroups.get(t);
				if (n) {
					var r = e.state.query.clone();
					r.exporter = n, r.importer = n, e.store.dispatch("SET_QUERY", r)
				}
			})), dr(pr(e), "handleChangeAutoZoom", (function(t) {
				var n = e.state.query.clone();
				n.autozoom = t, e.store.dispatch("SET_QUERY", n)
			})), e.store = t.store, e.store.listen(e.handleStoreChange.bind(pr(e))), e.state = e.store.getState(), e.data = e.store.getData(), e
		}
		return e = a, (n = [{
			key: "handleStoreChange",
			value: function() {
				this.setState(this.store.getState())
			}
		}, {
			key: "render",
			value: function(t, e) {
				return i.c.createElement("div", {
					className: "trade-view"
				}, i.c.createElement(ar, {
					query: e.query,
					data: this.data,
					autoZoom: e.query.autozoom,
					handleSelect: this.handleQuerySelect,
					handleTranspose: this.handleQueryTranspose,
					handlePopoverToggle: this.handleQueryPopoverToggle,
					handleChangeAutoZoom: this.handleChangeAutoZoom
				}), this.renderMap(t, e), i.c.createElement("div", {
					className: "trade-view__dashboard"
				}, i.c.createElement(ae.a, {
					chart: i.c.createElement(i.c.Fragment, null, i.c.createElement(lt.a, {
						visible: "ready" !== e.results.historical.status
					}), i.c.createElement(Cn, {
						title: "Total ".concat(e.query.units),
						data: x()(e.results.historical.data, "totals"),
						query: e.query,
						years: this.data.years
					})),
					tabs: i.c.createElement(w.b, null, i.c.createElement(E.a, null, i.c.createElement(O.b, null, "Trade flows"), i.c.createElement(O.b, null, "Commodities"), i.c.createElement(O.b, null, "Exporters"), i.c.createElement(O.b, null, "Importers"), __config.hasFootprints && i.c.createElement(O.b, null, "Footprints")), i.c.createElement(S.a, null, i.c.createElement(lt.a, {
						visible: "ready" !== e.results.trades.status
					}), i.c.createElement(Ue, {
						data: e.results.trades.data,
						units: e.query.units,
						prevQuery: e.prevQuery,
						handleClick: this.handleListClick,
						handleHover: this.handleFlowHover,
						handleBack: this.handleListBackClick
					})), i.c.createElement(S.a, null, i.c.createElement(lt.a, {
						visible: "ready" !== e.results.commodities.status
					}), i.c.createElement(Qe, {
						data: e.results.commodities.data,
						active: e.query.category,
						units: e.query.units,
						handleClick: this.handleListClick
					})), i.c.createElement(S.a, null, i.c.createElement(lt.a, {
						visible: "ready" !== e.results.exporters.status
					}), i.c.createElement(an, {
						data: e.results.exporters.data,
						units: e.query.units,
						active: e.query.exporter,
						prevQuery: e.prevQuery,
						type: "exporter",
						handleClick: this.handleListClick,
						handleBack: this.handleListBackClick
					})), i.c.createElement(S.a, null, i.c.createElement(lt.a, {
						visible: "ready" !== e.results.importers.status
					}), i.c.createElement(an, {
						data: e.results.importers.data,
						units: e.query.units,
						active: e.query.importer,
						prevQuery: e.prevQuery,
						type: "importer",
						handleClick: this.handleListClick,
						handleBack: this.handleListBackClick
					})), __config.hasFootprints && i.c.createElement(S.a, null, i.c.createElement(lt.a, {
						visible: "ready" !== e.results.footprints.status
					}), i.c.createElement(Ut, {
						data: e.results.footprints.data
					})))
				})), e.showTooltip && e.hoveredFlow && i.c.createElement(ue.a, null, i.c.createElement(le.a, {
					data: e.hoveredFlow,
					totals: e.results.totals,
					query: e.query
				})), i.c.createElement(Mt, {
					open: e.activeCountry && e.mapMenuOpen && e.mapMenuRect
				}, i.c.createElement(oe, {
					rect: e.mapMenuRect,
					onClose: this.handleMapMenuClose
				}, i.c.createElement(Qt, {
					country: e.activeCountry,
					rect: e.mapMenuRect,
					query: e.query,
					onProfileClick: this.handleProfileClick,
					onNESProfileClick: this.handleNESProfileClick,
					onCountryClick: this.handleCountryClick,
					onCountryTransposeClick: this.handleCountryTransposeClick
				}))), i.c.createElement(Mt, {
					open: e.countryModalOpen,
					modal: !0
				}, i.c.createElement(L, {
					onClose: this.handleCountryModalClose
				}, i.c.createElement(xt, {
					country: e.activeCountry
				}))), i.c.createElement(Mt, {
					open: e.nesModalOpen,
					modal: !0
				}, i.c.createElement(L, {
					onClose: this.handleNESModalClose
				}, i.c.createElement(ie, null))))
			}
		}, {
			key: "renderMap",
			value: function(t, e) {
				return i.c.createElement(ce.a, {
					query: e.query,
					data: x()(e.results.trades.data, "main"),
					total: x()(e.results.trades.data, "total"),
					hoveredFlow: e.hoveredFlow,
					hoveredCountry: e.hoveredCountry,
					activeCountry: e.activeCountry,
					handleFlowHover: this.handleFlowHover,
					handleCountryHover: this.handleCountryHover,
					handleCountryClick: this.handleMapLabelClick,
					header: i.c.createElement(i.c.Fragment, null, i.c.createElement(V, {
						current: e.query.units,
						disableWeight: __config.disableTradeWeightUnits,
						handleChange: this.handleUnitsChange
					}), i.c.createElement(fe, {
						title: e.query.exporter.id || e.query.importer.id ? "Share of global ".concat(e.query.category.model.name.toLowerCase(), " trade") : e.query.category.depth > 1 ? "Share of global ".concat(e.query.category.parent.model.name.toLowerCase(), " trade") : "Share of all commodities trade",
						data: x()(e.results.historical.data, "percentages"),
						query: e.query
					})),
					loading: "ready" !== e.results.trades.status,
					zoomRegionId: e.zoomRegion,
					autoZoom: e.query.autozoom,
					onZoomToRegion: this.handleZoomToRegion,
					onQueryIntraregional: this.handleQueryIntraregional
				})
			}
		}, {
			key: "handleModalClose",
			value: function() {
				this.store.dispatch("TOGGLE_MODAL", !1)
			}
		}, {
			key: "handleModalSubmit",
			value: function(t) {
				this.store.dispatch("SET_QUERY", t), this.store.dispatch("TOGGLE_MODAL", !1)
			}
		}, {
			key: "handleShareModalClose",
			value: function() {
				this.store.dispatch("TOGGLE_SHARE_MODAL", !1)
			}
		}]) && ur(e.prototype, n), r && ur(e, r), a
	}(i.a);
	n(396);

	function vr() {
		Object(a.a)("".concat(__config.api_path, "models")).then((function(t) {
			return t.json()
		})).then((function(t) {
			var e;
			e = t, _.init(e, o.a.parse(window.location.search.replace(/^\?/, ""))), Object(i.d)(i.c.createElement(yr, {
				store: _
			}), document.getElementById("root"))
		}))
	}
	n(408), "loading" !== document.readyState ? vr() : document.addEventListener("DOMContentLoaded", vr)
}]);
//# sourceMappingURL=trade.js.map