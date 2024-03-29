! function(e, n) {
    if ("function" == typeof define && define.amd) define(["exports"], n);
    else if ("undefined" != typeof exports) n(exports);
    else {
        var t = {
            exports: {}
        };
        n(t.exports), e.simpleslider = t.exports
    }
}(this, function(e) {
    "use strict";

    function n(e, n) {
        return null == e ? n : e
    }

    function t(e) {
        return e.length
    }

    function i(e, n, i, o, r, u) {
        var d = void 0,
            c = [];
        n || (n = e.children);
        for (var f = t(n); --f >= 0;) c[f] = n[f], d = c[f].style, d.position = "absolute", d.top = d.left = d.zIndex = 0, d[u] = o + i;
        return d[u] = r + i, d.zIndex = 1, c
    }

    function o(e, n, t, i) {
        return (e /= i / 2) < 1 ? t / 2 * e * e * e + n : t / 2 * ((e -= 2) * e * e + 2) + n
    }

    function r(e) {
        function r() {
            b = F(), g = setTimeout(function() {
                b = F(), T = C, s(v()), r()
            }, T)
        }

        function u() {
            d() && (g && clearTimeout(g), r())
        }

        function d() {
            return !j && t(z) > 1
        }

        function c() {
            d() && (T = C - (F() - b), clearTimeout(g), g = 0)
        }

        function f() {
            var e = M;
            M = _, _ = e, I = Math.abs(I - (t(z) - 1)), z = z.reverse()
        }

        function s(e) {
            for (var n = t(z); --n >= 0;) z[n].style.zIndex = 1;
            z[e].style.zIndex = 3, z[I].style.zIndex = 2, y(z[I].style, S, _, z[e].style, M, S, q, 0, 0, k), I = e, A && A(p(), I)
        }

        function l() {
            s(v()), u()
        }

        function a() {
            s(p()), u()
        }

        function v() {
            var e = I + 1;
            return e >= t(z) ? 0 : e
        }

        function p() {
            var e = I - 1;
            return e < 0 ? t(z) - 1 : e
        }

        function x() {
            clearTimeout(g), document.removeEventListener("visibilitychange", h), z = w = g = E = q = C = M = _ = j = I = T = A = D = null
        }

        function m() {
            return I
        }

        function y(e, n, t, i, o, r, u, d, c, f) {
            function s(e, n, t) {
                e[E] = f(c - d, n, t - n, u) + L
            }
            if (d > 0) {
                if (!(c - d < u)) return e[E] = t + L, i[E] = r + L, void(D && D(I, v()));
                s(e, n, t), s(i, o, r)
            }
            requestAnimationFrame(function(c) {
                0 === d && (d = c), y(e, n, t, i, o, r, u, d, c, f)
            })
        }

        function h() {
            document.hidden ? c() : u()
        }
        e = e || {};
        var I = void 0,
            g = void 0,
            b = void 0,
            z = void 0,
            T = void 0,
            w = n(e.container, document.querySelector("*[data-simple-slider]")),
            E = n(e.prop, "left"),
            q = 1e3 * n(e.duration, .5),
            C = 1e3 * n(e.delay, 3),
            L = n(e.unit, "%"),
            M = n(e.init, -100),
            S = n(e.show, 0),
            _ = n(e.end, 100),
            j = e.paused,
            k = n(e.ease, o),
            A = n(e.onChange, 0),
            D = n(e.onChangeEnd, 0),
            F = Date.now;
        return document.addEventListener("visibilitychange", h),
            function() {
                if (t(w.children) > 0) {
                    var n = w.style;
                    n.position = "relative", n.overflow = "hidden", n.display = "block", z = i(w, e.children, L, M, S, E), I = 0, T = C
                }
            }(), z && t(z) > 1 && u(), {
                currentIndex: m,
                pause: c,
                resume: u,
                nextIndex: v,
                prevIndex: p,
                next: l,
                prev: a,
                change: s,
                reverse: f,
                dispose: x
            }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getSlider = r
});