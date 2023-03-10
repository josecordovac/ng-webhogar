"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appGlobal(n, x, w, d, r, h) {
    (function (Context, resourcesUrl) {
        var PLATFORMS_MAP = { ipad: isIpad, iphone: isIphone, ios: isIOS, android: isAndroid, phablet: isPhablet, tablet: isTablet, cordova: isCordova, capacitor: isCapacitorNative, electron: isElectron, pwa: isPWA, mobile: isMobile, desktop: isDesktop, hybrid: isHybrid };
        function getPlatforms(t) { return setupPlatforms(t); }
        function isPlatform(t, n) { return getPlatforms(t).includes(n); }
        function setupPlatforms(t) { t.Ionic = t.Ionic || {}; var n = t.Ionic.platforms; if (null == n) {
            n = t.Ionic.platforms = detectPlatforms(t);
            var e = t.document.documentElement.classList;
            n.forEach(function (t) { return e.add("plt-" + t); });
        } return n; }
        function detectPlatforms(t) { return Object.keys(PLATFORMS_MAP).filter(function (n) { return PLATFORMS_MAP[n](t); }); }
        function isIpad(t) { return testUserAgent(t, /iPad/i); }
        function isIphone(t) { return testUserAgent(t, /iPhone/i); }
        function isIOS(t) { return testUserAgent(t, /iPad|iPhone|iPod/i); }
        function isAndroid(t) { return testUserAgent(t, /android|sink/i); }
        function isPhablet(t) { var n = t.innerWidth, e = t.innerHeight, i = Math.min(n, e), o = Math.max(n, e); return i > 390 && i < 520 && o > 620 && o < 800; }
        function isTablet(t) { var n = t.innerWidth, e = t.innerHeight, i = Math.min(n, e), o = Math.max(n, e); return i > 460 && i < 820 && o > 780 && o < 1400; }
        function isMobile(t) { return matchMedia(t, "(any-pointer:coarse)"); }
        function isDesktop(t) { return !isMobile(t); }
        function isHybrid(t) { return isCordova(t) || isCapacitorNative(t); }
        function isCordova(t) { return !!(t.cordova || t.phonegap || t.PhoneGap); }
        function isCapacitorNative(t) { var n = t.Capacitor; return !(!n || !n.isNative); }
        function isElectron(t) { return testUserAgent(t, /electron/); }
        function isPWA(t) { return t.matchMedia("(display-mode: standalone)").matches; }
        function testUserAgent(t, n) { return n.test(t.navigator.userAgent); }
        function matchMedia(t, n) { return t.matchMedia(n).matches; }
        var Config = function () { function t(t) { this.m = new Map(Object.entries(t)); } return t.prototype.get = function (t, n) { var e = this.m.get(t); return void 0 !== e ? e : n; }, t.prototype.getBoolean = function (t, n) { void 0 === n && (n = !1); var e = this.m.get(t); return void 0 === e ? n : "string" == typeof e ? "true" === e : !!e; }, t.prototype.getNumber = function (t, n) { var e = parseFloat(this.m.get(t)); return isNaN(e) ? void 0 !== n ? n : NaN : e; }, t.prototype.set = function (t, n) { this.m.set(t, n); }, t; }();
        function configFromSession() { try {
            var t = window.sessionStorage.getItem(IONIC_SESSION_KEY);
            return null !== t ? JSON.parse(t) : {};
        }
        catch (t) {
            return {};
        } }
        function saveConfig(t) { try {
            window.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(t));
        }
        catch (t) {
            return;
        } }
        function configFromURL() { var t = {}; return window.location.search.slice(1).split("&").map(function (t) { return t.split("="); }).map(function (t) { var n = t[1]; return [decodeURIComponent(t[0]), decodeURIComponent(n)]; }).filter(function (t) { return startsWith(t[0], IONIC_PREFIX); }).map(function (t) { var n = t[1]; return [t[0].slice(IONIC_PREFIX.length), n]; }).forEach(function (n) { t[n[0]] = n[1]; }), t; }
        function startsWith(t, n) { return t.substr(0, n.length) === n; }
        var IONIC_PREFIX = "ionic:", IONIC_SESSION_KEY = "ionic-persist-config", win = window, Ionic = win.Ionic = win.Ionic || {};
        Object.defineProperty(Ionic, "queue", { get: function () { return Context.queue; } }), setupPlatforms(win), Context.isPlatform = isPlatform;
        var configObj = Object.assign({}, configFromSession(), { persistConfig: !1 }, Ionic.config, configFromURL()), config = Ionic.config = Context.config = new Config(configObj);
        config.getBoolean("persistConfig") && saveConfig(configObj);
        var documentElement = document.documentElement, mode = config.get("mode", documentElement.getAttribute("mode") || (isPlatform(win, "ios") ? "ios" : "md"));
        Ionic.mode = Context.mode = mode, config.set("mode", mode), documentElement.setAttribute("mode", mode), documentElement.classList.add(mode), config.getBoolean("_testing") && config.set("animated", !1);
    })(x, r);
}
exports.default = appGlobal;
