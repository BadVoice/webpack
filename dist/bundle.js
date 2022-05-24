(() => { "use strict"; var t = { 571: (t, r, e) => { t.exports = e.p + "assets/066b6ed0412c05656ecd.jpg," } },
        r = {};

    function e(n) { var o = r[n]; if (void 0 !== o) return o.exports; var i = r[n] = { exports: {} }; return t[n](i, i.exports, e), i.exports }
    e.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (t) { if ("object" == typeof window) return window } }(), (() => { var t;
        e.g.importScripts && (t = e.g.location + ""); var r = e.g.document; if (!t && r && (r.currentScript && (t = r.currentScript.src), !t)) { var n = r.getElementsByTagName("script");
            n.length && (t = n[n.length - 1].src) } if (!t) throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), e.p = t })(), (() => { const t = e(571);
        document.body.innerHTML = ` \n    <img src="${t}" alt="test">\n` })() })();