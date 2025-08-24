// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"kxwl6":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a726bb8fe02fbd41";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"jOXmm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _wavesurferJs = require("wavesurfer.js");
var _wavesurferJsDefault = parcelHelpers.interopDefault(_wavesurferJs);
var _recordEsmJs = require("wavesurfer.js/dist/plugins/record.esm.js");
var _recordEsmJsDefault = parcelHelpers.interopDefault(_recordEsmJs);
let wavesurfer, record;
const createWaveSurfer = ()=>{
    if (wavesurfer) wavesurfer.destroy();
    wavesurfer = (0, _wavesurferJsDefault.default).create({
        container: '#waveform',
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        plugins: [
            (0, _recordEsmJsDefault.default).create({
                renderRecordedAudio: false
            })
        ]
    });
    record = wavesurfer.registerPlugin((0, _recordEsmJsDefault.default).create());
    record.on('record-end', (blob)=>{
        const recordedUrl = URL.createObjectURL(blob);
        button.textContent = 'Play';
        button.onclick = ()=>wavesurferInstance.playPause();
        wavesurferInstance.on('pause', ()=>button.textContent = 'Play');
        wavesurferInstance.on('play', ()=>button.textContent = 'Pause');
    });
};
const micSelect = document.querySelector('#mic-select');
(0, _recordEsmJsDefault.default).getAvailableAudioDevices().then((devices)=>{
    devices.forEach((device)=>{
        const option = document.createElement('option');
        option.value = device.deviceId;
        option.text = device.label || device.deviceId;
        micSelect.appendChild(option);
    });
});
const recButton = document.querySelector('#record');
recButton.onclick = ()=>{
    if (record.isRecording() || record.isPaused()) {
        record.stopRecording();
        recButton.textContent = 'Record';
        pauseButton.style.display = 'none';
        return;
    }
    recButton.disabled = true;
    const deviceId = micSelect.value;
    record.startRecording({
        deviceId
    }).then(()=>{
        recButton.textContent = 'Stop';
        recButton.disabled = false;
        pauseButton.style.display = 'inline';
    });
};
createWaveSurfer();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","wavesurfer.js":"6tCpp","wavesurfer.js/dist/plugins/record.esm.js":"kcaNz"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6tCpp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basePluginJs = require("./base-plugin.js");
var _basePluginJsDefault = parcelHelpers.interopDefault(_basePluginJs);
var _decoderJs = require("./decoder.js");
var _decoderJsDefault = parcelHelpers.interopDefault(_decoderJs);
var _domJs = require("./dom.js");
var _fetcherJs = require("./fetcher.js");
var _fetcherJsDefault = parcelHelpers.interopDefault(_fetcherJs);
var _playerJs = require("./player.js");
var _playerJsDefault = parcelHelpers.interopDefault(_playerJs);
var _rendererJs = require("./renderer.js");
var _rendererJsDefault = parcelHelpers.interopDefault(_rendererJs);
var _timerJs = require("./timer.js");
var _timerJsDefault = parcelHelpers.interopDefault(_timerJs);
var _webaudioJs = require("./webaudio.js");
var _webaudioJsDefault = parcelHelpers.interopDefault(_webaudioJs);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const defaultOptions = {
    waveColor: '#999',
    progressColor: '#555',
    cursorWidth: 1,
    minPxPerSec: 0,
    fillParent: true,
    interact: true,
    dragToSeek: false,
    autoScroll: true,
    autoCenter: true,
    sampleRate: 8000
};
class WaveSurfer extends (0, _playerJsDefault.default) {
    /** Create a new WaveSurfer instance */ static create(options) {
        return new WaveSurfer(options);
    }
    /** Create a new WaveSurfer instance */ constructor(options){
        const media = options.media || (options.backend === 'WebAudio' ? new (0, _webaudioJsDefault.default)() : undefined);
        super({
            media,
            mediaControls: options.mediaControls,
            autoplay: options.autoplay,
            playbackRate: options.audioRate
        });
        this.plugins = [];
        this.decodedData = null;
        this.stopAtPosition = null;
        this.subscriptions = [];
        this.mediaSubscriptions = [];
        this.abortController = null;
        this.options = Object.assign({}, defaultOptions, options);
        this.timer = new (0, _timerJsDefault.default)();
        const audioElement = media ? undefined : this.getMediaElement();
        this.renderer = new (0, _rendererJsDefault.default)(this.options, audioElement);
        this.initPlayerEvents();
        this.initRendererEvents();
        this.initTimerEvents();
        this.initPlugins();
        // Read the initial URL before load has been called
        const initialUrl = this.options.url || this.getSrc() || '';
        // Init and load async to allow external events to be registered
        Promise.resolve().then(()=>{
            this.emit('init');
            // Load audio if URL or an external media with an src is passed,
            // of render w/o audio if pre-decoded peaks and duration are provided
            const { peaks, duration } = this.options;
            if (initialUrl || peaks && duration) // Swallow async errors because they cannot be caught from a constructor call.
            // Subscribe to the wavesurfer's error event to handle them.
            this.load(initialUrl, peaks, duration).catch(()=>null);
        });
    }
    updateProgress(currentTime = this.getCurrentTime()) {
        this.renderer.renderProgress(currentTime / this.getDuration(), this.isPlaying());
        return currentTime;
    }
    initTimerEvents() {
        // The timer fires every 16ms for a smooth progress animation
        this.subscriptions.push(this.timer.on('tick', ()=>{
            if (!this.isSeeking()) {
                const currentTime = this.updateProgress();
                this.emit('timeupdate', currentTime);
                this.emit('audioprocess', currentTime);
                // Pause audio when it reaches the stopAtPosition
                if (this.stopAtPosition != null && this.isPlaying() && currentTime >= this.stopAtPosition) this.pause();
            }
        }));
    }
    initPlayerEvents() {
        if (this.isPlaying()) {
            this.emit('play');
            this.timer.start();
        }
        this.mediaSubscriptions.push(this.onMediaEvent('timeupdate', ()=>{
            const currentTime = this.updateProgress();
            this.emit('timeupdate', currentTime);
        }), this.onMediaEvent('play', ()=>{
            this.emit('play');
            this.timer.start();
        }), this.onMediaEvent('pause', ()=>{
            this.emit('pause');
            this.timer.stop();
            this.stopAtPosition = null;
        }), this.onMediaEvent('emptied', ()=>{
            this.timer.stop();
            this.stopAtPosition = null;
        }), this.onMediaEvent('ended', ()=>{
            this.emit('timeupdate', this.getDuration());
            this.emit('finish');
            this.stopAtPosition = null;
        }), this.onMediaEvent('seeking', ()=>{
            this.emit('seeking', this.getCurrentTime());
        }), this.onMediaEvent('error', ()=>{
            var _a;
            this.emit('error', (_a = this.getMediaElement().error) !== null && _a !== void 0 ? _a : new Error('Media error'));
            this.stopAtPosition = null;
        }));
    }
    initRendererEvents() {
        this.subscriptions.push(// Seek on click
        this.renderer.on('click', (relativeX, relativeY)=>{
            if (this.options.interact) {
                this.seekTo(relativeX);
                this.emit('interaction', relativeX * this.getDuration());
                this.emit('click', relativeX, relativeY);
            }
        }), // Double click
        this.renderer.on('dblclick', (relativeX, relativeY)=>{
            this.emit('dblclick', relativeX, relativeY);
        }), // Scroll
        this.renderer.on('scroll', (startX, endX, scrollLeft, scrollRight)=>{
            const duration = this.getDuration();
            this.emit('scroll', startX * duration, endX * duration, scrollLeft, scrollRight);
        }), // Redraw
        this.renderer.on('render', ()=>{
            this.emit('redraw');
        }), // RedrawComplete
        this.renderer.on('rendered', ()=>{
            this.emit('redrawcomplete');
        }), // DragStart
        this.renderer.on('dragstart', (relativeX)=>{
            this.emit('dragstart', relativeX);
        }), // DragEnd
        this.renderer.on('dragend', (relativeX)=>{
            this.emit('dragend', relativeX);
        }));
        // Drag
        {
            let debounce;
            this.subscriptions.push(this.renderer.on('drag', (relativeX)=>{
                if (!this.options.interact) return;
                // Update the visual position
                this.renderer.renderProgress(relativeX);
                // Set the audio position with a debounce
                clearTimeout(debounce);
                let debounceTime;
                if (this.isPlaying()) debounceTime = 0;
                else if (this.options.dragToSeek === true) debounceTime = 200;
                else if (typeof this.options.dragToSeek === 'object' && this.options.dragToSeek !== undefined) debounceTime = this.options.dragToSeek['debounceTime'];
                debounce = setTimeout(()=>{
                    this.seekTo(relativeX);
                }, debounceTime);
                this.emit('interaction', relativeX * this.getDuration());
                this.emit('drag', relativeX);
            }));
        }
    }
    initPlugins() {
        var _a;
        if (!((_a = this.options.plugins) === null || _a === void 0 ? void 0 : _a.length)) return;
        this.options.plugins.forEach((plugin)=>{
            this.registerPlugin(plugin);
        });
    }
    unsubscribePlayerEvents() {
        this.mediaSubscriptions.forEach((unsubscribe)=>unsubscribe());
        this.mediaSubscriptions = [];
    }
    /** Set new wavesurfer options and re-render it */ setOptions(options) {
        this.options = Object.assign({}, this.options, options);
        if (options.duration && !options.peaks) this.decodedData = (0, _decoderJsDefault.default).createBuffer(this.exportPeaks(), options.duration);
        if (options.peaks && options.duration) // Create new decoded data buffer from peaks and duration
        this.decodedData = (0, _decoderJsDefault.default).createBuffer(options.peaks, options.duration);
        this.renderer.setOptions(this.options);
        if (options.audioRate) this.setPlaybackRate(options.audioRate);
        if (options.mediaControls != null) this.getMediaElement().controls = options.mediaControls;
    }
    /** Register a wavesurfer.js plugin */ registerPlugin(plugin) {
        // Check if the plugin is already registered
        if (this.plugins.includes(plugin)) return plugin;
        plugin._init(this);
        this.plugins.push(plugin);
        // Unregister plugin on destroy
        const unsubscribe = plugin.once('destroy', ()=>{
            this.plugins = this.plugins.filter((p)=>p !== plugin);
            this.subscriptions = this.subscriptions.filter((fn)=>fn !== unsubscribe);
        });
        this.subscriptions.push(unsubscribe);
        return plugin;
    }
    /** Unregister a wavesurfer.js plugin */ unregisterPlugin(plugin) {
        this.plugins = this.plugins.filter((p)=>p !== plugin);
        plugin.destroy();
    }
    /** For plugins only: get the waveform wrapper div */ getWrapper() {
        return this.renderer.getWrapper();
    }
    /** For plugins only: get the scroll container client width */ getWidth() {
        return this.renderer.getWidth();
    }
    /** Get the current scroll position in pixels */ getScroll() {
        return this.renderer.getScroll();
    }
    /** Set the current scroll position in pixels */ setScroll(pixels) {
        return this.renderer.setScroll(pixels);
    }
    /** Move the start of the viewing window to a specific time in the audio (in seconds) */ setScrollTime(time) {
        const percentage = time / this.getDuration();
        this.renderer.setScrollPercentage(percentage);
    }
    /** Get all registered plugins */ getActivePlugins() {
        return this.plugins;
    }
    loadAudio(url, blob, channelData, duration) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            this.emit('load', url);
            if (!this.options.media && this.isPlaying()) this.pause();
            this.decodedData = null;
            this.stopAtPosition = null;
            // Fetch the entire audio as a blob if pre-decoded data is not provided
            if (!blob && !channelData) {
                const fetchParams = this.options.fetchParams || {};
                if (window.AbortController && !fetchParams.signal) {
                    this.abortController = new AbortController();
                    fetchParams.signal = (_a = this.abortController) === null || _a === void 0 ? void 0 : _a.signal;
                }
                const onProgress = (percentage)=>this.emit('loading', percentage);
                blob = yield (0, _fetcherJsDefault.default).fetchBlob(url, onProgress, fetchParams);
                const overridenMimeType = this.options.blobMimeType;
                if (overridenMimeType) blob = new Blob([
                    blob
                ], {
                    type: overridenMimeType
                });
            }
            // Set the mediaelement source
            this.setSrc(url, blob);
            // Wait for the audio duration
            const audioDuration = yield new Promise((resolve)=>{
                const staticDuration = duration || this.getDuration();
                if (staticDuration) resolve(staticDuration);
                else this.mediaSubscriptions.push(this.onMediaEvent('loadedmetadata', ()=>resolve(this.getDuration()), {
                    once: true
                }));
            });
            // Set the duration if the player is a WebAudioPlayer without a URL
            if (!url && !blob) {
                const media = this.getMediaElement();
                if (media instanceof (0, _webaudioJsDefault.default)) media.duration = audioDuration;
            }
            // Decode the audio data or use user-provided peaks
            if (channelData) this.decodedData = (0, _decoderJsDefault.default).createBuffer(channelData, audioDuration || 0);
            else if (blob) {
                const arrayBuffer = yield blob.arrayBuffer();
                this.decodedData = yield (0, _decoderJsDefault.default).decode(arrayBuffer, this.options.sampleRate);
            }
            if (this.decodedData) {
                this.emit('decode', this.getDuration());
                this.renderer.render(this.decodedData);
            }
            this.emit('ready', this.getDuration());
        });
    }
    /** Load an audio file by URL, with optional pre-decoded audio data */ load(url, channelData, duration) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                return yield this.loadAudio(url, undefined, channelData, duration);
            } catch (err) {
                this.emit('error', err);
                throw err;
            }
        });
    }
    /** Load an audio blob */ loadBlob(blob, channelData, duration) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                return yield this.loadAudio('', blob, channelData, duration);
            } catch (err) {
                this.emit('error', err);
                throw err;
            }
        });
    }
    /** Zoom the waveform by a given pixels-per-second factor */ zoom(minPxPerSec) {
        if (!this.decodedData) throw new Error('No audio loaded');
        this.renderer.zoom(minPxPerSec);
        this.emit('zoom', minPxPerSec);
    }
    /** Get the decoded audio data */ getDecodedData() {
        return this.decodedData;
    }
    /** Get decoded peaks */ exportPeaks({ channels = 2, maxLength = 8000, precision = 10000 } = {}) {
        if (!this.decodedData) throw new Error('The audio has not been decoded yet');
        const maxChannels = Math.min(channels, this.decodedData.numberOfChannels);
        const peaks = [];
        for(let i = 0; i < maxChannels; i++){
            const channel = this.decodedData.getChannelData(i);
            const data = [];
            const sampleSize = channel.length / maxLength;
            for(let i = 0; i < maxLength; i++){
                const sample = channel.slice(Math.floor(i * sampleSize), Math.ceil((i + 1) * sampleSize));
                let max = 0;
                for(let x = 0; x < sample.length; x++){
                    const n = sample[x];
                    if (Math.abs(n) > Math.abs(max)) max = n;
                }
                data.push(Math.round(max * precision) / precision);
            }
            peaks.push(data);
        }
        return peaks;
    }
    /** Get the duration of the audio in seconds */ getDuration() {
        let duration = super.getDuration() || 0;
        // Fall back to the decoded data duration if the media duration is incorrect
        if ((duration === 0 || duration === Infinity) && this.decodedData) duration = this.decodedData.duration;
        return duration;
    }
    /** Toggle if the waveform should react to clicks */ toggleInteraction(isInteractive) {
        this.options.interact = isInteractive;
    }
    /** Jump to a specific time in the audio (in seconds) */ setTime(time) {
        this.stopAtPosition = null;
        super.setTime(time);
        this.updateProgress(time);
        this.emit('timeupdate', time);
    }
    /** Seek to a percentage of audio as [0..1] (0 = beginning, 1 = end) */ seekTo(progress) {
        const time = this.getDuration() * progress;
        this.setTime(time);
    }
    /** Start playing the audio */ play(start, end) {
        const _super = Object.create(null, {
            play: {
                get: ()=>super.play
            }
        });
        return __awaiter(this, void 0, void 0, function*() {
            if (start != null) this.setTime(start);
            const playResult = yield _super.play.call(this);
            if (end != null) {
                if (this.media instanceof (0, _webaudioJsDefault.default)) this.media.stopAt(end);
                else this.stopAtPosition = end;
            }
            return playResult;
        });
    }
    /** Play or pause the audio */ playPause() {
        return __awaiter(this, void 0, void 0, function*() {
            return this.isPlaying() ? this.pause() : this.play();
        });
    }
    /** Stop the audio and go to the beginning */ stop() {
        this.pause();
        this.setTime(0);
    }
    /** Skip N or -N seconds from the current position */ skip(seconds) {
        this.setTime(this.getCurrentTime() + seconds);
    }
    /** Empty the waveform */ empty() {
        this.load('', [
            [
                0
            ]
        ], 0.001);
    }
    /** Set HTML media element */ setMediaElement(element) {
        this.unsubscribePlayerEvents();
        super.setMediaElement(element);
        this.initPlayerEvents();
    }
    exportImage() {
        return __awaiter(this, arguments, void 0, function*(format = 'image/png', quality = 1, type = 'dataURL') {
            return this.renderer.exportImage(format, quality, type);
        });
    }
    /** Unmount wavesurfer */ destroy() {
        var _a;
        this.emit('destroy');
        (_a = this.abortController) === null || _a === void 0 || _a.abort();
        this.plugins.forEach((plugin)=>plugin.destroy());
        this.subscriptions.forEach((unsubscribe)=>unsubscribe());
        this.unsubscribePlayerEvents();
        this.timer.destroy();
        this.renderer.destroy();
        super.destroy();
    }
}
WaveSurfer.BasePlugin = (0, _basePluginJsDefault.default);
WaveSurfer.dom = _domJs;
exports.default = WaveSurfer;

},{"./base-plugin.js":"jm3lo","./decoder.js":"9zIzi","./dom.js":"163LJ","./fetcher.js":"gPcAD","./player.js":"7VdN7","./renderer.js":"kYvi7","./timer.js":"eWaVN","./webaudio.js":"28khw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jm3lo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Base class for wavesurfer plugins */ parcelHelpers.export(exports, "BasePlugin", ()=>BasePlugin);
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
class BasePlugin extends (0, _eventEmitterJsDefault.default) {
    /** Create a plugin instance */ constructor(options){
        super();
        this.subscriptions = [];
        this.isDestroyed = false;
        this.options = options;
    }
    /** Called after this.wavesurfer is available */ onInit() {
        return;
    }
    /** Do not call directly, only called by WavesSurfer internally */ _init(wavesurfer) {
        // Reset state if plugin was previously destroyed
        if (this.isDestroyed) {
            this.subscriptions = [];
            this.isDestroyed = false;
        }
        this.wavesurfer = wavesurfer;
        this.onInit();
    }
    /** Destroy the plugin and unsubscribe from all events */ destroy() {
        this.emit('destroy');
        this.subscriptions.forEach((unsubscribe)=>unsubscribe());
        this.subscriptions = [];
        this.isDestroyed = true;
        this.wavesurfer = undefined;
    }
}
exports.default = BasePlugin;

},{"./event-emitter.js":"fgYEq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fgYEq":[function(require,module,exports,__globalThis) {
/** A simple event emitter that can be used to listen to and emit events. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventEmitter {
    constructor(){
        this.listeners = {};
    }
    /** Subscribe to an event. Returns an unsubscribe function. */ on(event, listener, options) {
        if (!this.listeners[event]) this.listeners[event] = new Set();
        this.listeners[event].add(listener);
        if (options === null || options === void 0 ? void 0 : options.once) {
            const unsubscribeOnce = ()=>{
                this.un(event, unsubscribeOnce);
                this.un(event, listener);
            };
            this.on(event, unsubscribeOnce);
            return unsubscribeOnce;
        }
        return ()=>this.un(event, listener);
    }
    /** Unsubscribe from an event */ un(event, listener) {
        var _a;
        (_a = this.listeners[event]) === null || _a === void 0 || _a.delete(listener);
    }
    /** Subscribe to an event only once */ once(event, listener) {
        return this.on(event, listener, {
            once: true
        });
    }
    /** Clear all events */ unAll() {
        this.listeners = {};
    }
    /** Emit an event */ emit(eventName, ...args) {
        if (this.listeners[eventName]) this.listeners[eventName].forEach((listener)=>listener(...args));
    }
}
exports.default = EventEmitter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9zIzi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** Decode an array buffer into an audio buffer */ function decode(audioData, sampleRate) {
    return __awaiter(this, void 0, void 0, function*() {
        const audioCtx = new AudioContext({
            sampleRate
        });
        const decode = audioCtx.decodeAudioData(audioData);
        return decode.finally(()=>audioCtx.close());
    });
}
/** Normalize peaks to -1..1 */ function normalize(channelData) {
    const firstChannel = channelData[0];
    if (firstChannel.some((n)=>n > 1 || n < -1)) {
        const length = firstChannel.length;
        let max = 0;
        for(let i = 0; i < length; i++){
            const absN = Math.abs(firstChannel[i]);
            if (absN > max) max = absN;
        }
        for (const channel of channelData)for(let i = 0; i < length; i++)channel[i] /= max;
    }
    return channelData;
}
/** Create an audio buffer from pre-decoded audio data */ function createBuffer(channelData, duration) {
    // If a single array of numbers is passed, make it an array of arrays
    if (typeof channelData[0] === 'number') channelData = [
        channelData
    ];
    // Normalize to -1..1
    normalize(channelData);
    return {
        duration,
        length: channelData[0].length,
        sampleRate: channelData[0].length / duration,
        numberOfChannels: channelData.length,
        getChannelData: (i)=>channelData === null || channelData === void 0 ? void 0 : channelData[i],
        copyFromChannel: AudioBuffer.prototype.copyFromChannel,
        copyToChannel: AudioBuffer.prototype.copyToChannel
    };
}
const Decoder = {
    decode,
    createBuffer
};
exports.default = Decoder;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"163LJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
function renderNode(tagName, content) {
    const element = content.xmlns ? document.createElementNS(content.xmlns, tagName) : document.createElement(tagName);
    for (const [key, value] of Object.entries(content)){
        if (key === 'children' && value) for (const [childTag, childValue] of Object.entries(value)){
            if (childValue instanceof Node) element.appendChild(childValue);
            else if (typeof childValue === 'string') element.appendChild(document.createTextNode(childValue));
            else element.appendChild(renderNode(childTag, childValue));
        }
        else if (key === 'style') Object.assign(element.style, value);
        else if (key === 'textContent') element.textContent = value;
        else element.setAttribute(key, value.toString());
    }
    return element;
}
function createElement(tagName, content, container) {
    const el = renderNode(tagName, content || {});
    container === null || container === void 0 || container.appendChild(el);
    return el;
}
exports.default = createElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gPcAD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function watchProgress(response, progressCallback) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!response.body || !response.headers) return;
        const reader = response.body.getReader();
        const contentLength = Number(response.headers.get('Content-Length')) || 0;
        let receivedLength = 0;
        // Process the data
        const processChunk = (value)=>__awaiter(this, void 0, void 0, function*() {
                // Add to the received length
                receivedLength += (value === null || value === void 0 ? void 0 : value.length) || 0;
                const percentage = Math.round(receivedLength / contentLength * 100);
                progressCallback(percentage);
            });
        const read = ()=>__awaiter(this, void 0, void 0, function*() {
                let data;
                try {
                    data = yield reader.read();
                } catch (_a) {
                    // Ignore errors because we can only handle the main response
                    return;
                }
                // Continue reading data until done
                if (!data.done) {
                    processChunk(data.value);
                    yield read();
                }
            });
        read();
    });
}
function fetchBlob(url, progressCallback, requestInit) {
    return __awaiter(this, void 0, void 0, function*() {
        // Fetch the resource
        const response = yield fetch(url, requestInit);
        if (response.status >= 400) throw new Error(`Failed to fetch ${url}: ${response.status} (${response.statusText})`);
        // Read the data to track progress
        watchProgress(response.clone(), progressCallback);
        return response.blob();
    });
}
const Fetcher = {
    fetchBlob
};
exports.default = Fetcher;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7VdN7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Player extends (0, _eventEmitterJsDefault.default) {
    constructor(options){
        super();
        this.isExternalMedia = false;
        if (options.media) {
            this.media = options.media;
            this.isExternalMedia = true;
        } else this.media = document.createElement('audio');
        // Controls
        if (options.mediaControls) this.media.controls = true;
        // Autoplay
        if (options.autoplay) this.media.autoplay = true;
        // Speed
        if (options.playbackRate != null) this.onMediaEvent('canplay', ()=>{
            if (options.playbackRate != null) this.media.playbackRate = options.playbackRate;
        }, {
            once: true
        });
    }
    onMediaEvent(event, callback, options) {
        this.media.addEventListener(event, callback, options);
        return ()=>this.media.removeEventListener(event, callback, options);
    }
    getSrc() {
        return this.media.currentSrc || this.media.src || '';
    }
    revokeSrc() {
        const src = this.getSrc();
        if (src.startsWith('blob:')) URL.revokeObjectURL(src);
    }
    canPlayType(type) {
        return this.media.canPlayType(type) !== '';
    }
    setSrc(url, blob) {
        const prevSrc = this.getSrc();
        if (url && prevSrc === url) return; // no need to change the source
        this.revokeSrc();
        const newSrc = blob instanceof Blob && (this.canPlayType(blob.type) || !url) ? URL.createObjectURL(blob) : url;
        // Reset the media element, otherwise it keeps the previous source
        if (prevSrc) this.media.removeAttribute('src');
        if (newSrc || url) try {
            this.media.src = newSrc;
        } catch (_a) {
            this.media.src = url;
        }
    }
    destroy() {
        if (this.isExternalMedia) return;
        this.media.pause();
        this.media.remove();
        this.revokeSrc();
        this.media.removeAttribute('src');
        // Load resets the media element to its initial state
        this.media.load();
    }
    setMediaElement(element) {
        this.media = element;
    }
    /** Start playing the audio */ play() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                return yield this.media.play();
            } catch (err) {
                if (err instanceof DOMException && err.name === 'AbortError') return;
                throw err;
            }
        });
    }
    /** Pause the audio */ pause() {
        this.media.pause();
    }
    /** Check if the audio is playing */ isPlaying() {
        return !this.media.paused && !this.media.ended;
    }
    /** Jump to a specific time in the audio (in seconds) */ setTime(time) {
        this.media.currentTime = Math.max(0, Math.min(time, this.getDuration()));
    }
    /** Get the duration of the audio in seconds */ getDuration() {
        return this.media.duration;
    }
    /** Get the current audio position in seconds */ getCurrentTime() {
        return this.media.currentTime;
    }
    /** Get the audio volume */ getVolume() {
        return this.media.volume;
    }
    /** Set the audio volume */ setVolume(volume) {
        this.media.volume = volume;
    }
    /** Get the audio muted state */ getMuted() {
        return this.media.muted;
    }
    /** Mute or unmute the audio */ setMuted(muted) {
        this.media.muted = muted;
    }
    /** Get the playback speed */ getPlaybackRate() {
        return this.media.playbackRate;
    }
    /** Check if the audio is seeking */ isSeeking() {
        return this.media.seeking;
    }
    /** Set the playback speed, pass an optional false to NOT preserve the pitch */ setPlaybackRate(rate, preservePitch) {
        // preservePitch is true by default in most browsers
        if (preservePitch != null) this.media.preservesPitch = preservePitch;
        this.media.playbackRate = rate;
    }
    /** Get the HTML media element */ getMediaElement() {
        return this.media;
    }
    /** Set a sink id to change the audio output device */ setSinkId(sinkId) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setSinkId
        const media = this.media;
        return media.setSinkId(sinkId);
    }
}
exports.default = Player;

},{"./event-emitter.js":"fgYEq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kYvi7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _draggableJs = require("./draggable.js");
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
class Renderer extends (0, _eventEmitterJsDefault.default) {
    constructor(options, audioElement){
        super();
        this.timeouts = [];
        this.isScrollable = false;
        this.audioData = null;
        this.resizeObserver = null;
        this.lastContainerWidth = 0;
        this.isDragging = false;
        this.subscriptions = [];
        this.unsubscribeOnScroll = [];
        this.subscriptions = [];
        this.options = options;
        const parent = this.parentFromOptionsContainer(options.container);
        this.parent = parent;
        const [div, shadow] = this.initHtml();
        parent.appendChild(div);
        this.container = div;
        this.scrollContainer = shadow.querySelector('.scroll');
        this.wrapper = shadow.querySelector('.wrapper');
        this.canvasWrapper = shadow.querySelector('.canvases');
        this.progressWrapper = shadow.querySelector('.progress');
        this.cursor = shadow.querySelector('.cursor');
        if (audioElement) shadow.appendChild(audioElement);
        this.initEvents();
    }
    parentFromOptionsContainer(container) {
        let parent;
        if (typeof container === 'string') parent = document.querySelector(container);
        else if (container instanceof HTMLElement) parent = container;
        if (!parent) throw new Error('Container not found');
        return parent;
    }
    initEvents() {
        const getClickPosition = (e)=>{
            const rect = this.wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const relativeX = x / rect.width;
            const relativeY = y / rect.height;
            return [
                relativeX,
                relativeY
            ];
        };
        // Add a click listener
        this.wrapper.addEventListener('click', (e)=>{
            const [x, y] = getClickPosition(e);
            this.emit('click', x, y);
        });
        // Add a double click listener
        this.wrapper.addEventListener('dblclick', (e)=>{
            const [x, y] = getClickPosition(e);
            this.emit('dblclick', x, y);
        });
        // Drag
        if (this.options.dragToSeek === true || typeof this.options.dragToSeek === 'object') this.initDrag();
        // Add a scroll listener
        this.scrollContainer.addEventListener('scroll', ()=>{
            const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;
            const startX = scrollLeft / scrollWidth;
            const endX = (scrollLeft + clientWidth) / scrollWidth;
            this.emit('scroll', startX, endX, scrollLeft, scrollLeft + clientWidth);
        });
        // Re-render the waveform on container resize
        if (typeof ResizeObserver === 'function') {
            const delay = this.createDelay(100);
            this.resizeObserver = new ResizeObserver(()=>{
                delay().then(()=>this.onContainerResize()).catch(()=>undefined);
            });
            this.resizeObserver.observe(this.scrollContainer);
        }
    }
    onContainerResize() {
        const width = this.parent.clientWidth;
        if (width === this.lastContainerWidth && this.options.height !== 'auto') return;
        this.lastContainerWidth = width;
        this.reRender();
    }
    initDrag() {
        this.subscriptions.push((0, _draggableJs.makeDraggable)(this.wrapper, // On drag
        (_, __, x)=>{
            this.emit('drag', Math.max(0, Math.min(1, x / this.wrapper.getBoundingClientRect().width)));
        }, // On start drag
        (x)=>{
            this.isDragging = true;
            this.emit('dragstart', Math.max(0, Math.min(1, x / this.wrapper.getBoundingClientRect().width)));
        }, // On end drag
        (x)=>{
            this.isDragging = false;
            this.emit('dragend', Math.max(0, Math.min(1, x / this.wrapper.getBoundingClientRect().width)));
        }));
    }
    getHeight(optionsHeight, optionsSplitChannel) {
        var _a;
        const defaultHeight = 128;
        const numberOfChannels = ((_a = this.audioData) === null || _a === void 0 ? void 0 : _a.numberOfChannels) || 1;
        if (optionsHeight == null) return defaultHeight;
        if (!isNaN(Number(optionsHeight))) return Number(optionsHeight);
        if (optionsHeight === 'auto') {
            const height = this.parent.clientHeight || defaultHeight;
            if (optionsSplitChannel === null || optionsSplitChannel === void 0 ? void 0 : optionsSplitChannel.every((channel)=>!channel.overlay)) return height / numberOfChannels;
            return height;
        }
        return defaultHeight;
    }
    initHtml() {
        const div = document.createElement('div');
        const shadow = div.attachShadow({
            mode: 'open'
        });
        const cspNonce = this.options.cspNonce && typeof this.options.cspNonce === 'string' ? this.options.cspNonce.replace(/"/g, '') : '';
        shadow.innerHTML = `
      <style${cspNonce ? ` nonce="${cspNonce}"` : ''}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `;
        return [
            div,
            shadow
        ];
    }
    /** Wavesurfer itself calls this method. Do not call it manually. */ setOptions(options) {
        if (this.options.container !== options.container) {
            const newParent = this.parentFromOptionsContainer(options.container);
            newParent.appendChild(this.container);
            this.parent = newParent;
        }
        if (options.dragToSeek === true || typeof this.options.dragToSeek === 'object') this.initDrag();
        this.options = options;
        // Re-render the waveform
        this.reRender();
    }
    getWrapper() {
        return this.wrapper;
    }
    getWidth() {
        return this.scrollContainer.clientWidth;
    }
    getScroll() {
        return this.scrollContainer.scrollLeft;
    }
    setScroll(pixels) {
        this.scrollContainer.scrollLeft = pixels;
    }
    setScrollPercentage(percent) {
        const { scrollWidth } = this.scrollContainer;
        const scrollStart = scrollWidth * percent;
        this.setScroll(scrollStart);
    }
    destroy() {
        var _a, _b;
        this.subscriptions.forEach((unsubscribe)=>unsubscribe());
        this.container.remove();
        (_a = this.resizeObserver) === null || _a === void 0 || _a.disconnect();
        (_b = this.unsubscribeOnScroll) === null || _b === void 0 || _b.forEach((unsubscribe)=>unsubscribe());
        this.unsubscribeOnScroll = [];
    }
    createDelay(delayMs = 10) {
        let timeout;
        let reject;
        const onClear = ()=>{
            if (timeout) clearTimeout(timeout);
            if (reject) reject();
        };
        this.timeouts.push(onClear);
        return ()=>{
            return new Promise((resolveFn, rejectFn)=>{
                onClear();
                reject = rejectFn;
                timeout = setTimeout(()=>{
                    timeout = undefined;
                    reject = undefined;
                    resolveFn();
                }, delayMs);
            });
        };
    }
    // Convert array of color values to linear gradient
    convertColorValues(color) {
        if (!Array.isArray(color)) return color || '';
        if (color.length < 2) return color[0] || '';
        const canvasElement = document.createElement('canvas');
        const ctx = canvasElement.getContext('2d');
        const gradientHeight = canvasElement.height * (window.devicePixelRatio || 1);
        const gradient = ctx.createLinearGradient(0, 0, 0, gradientHeight);
        const colorStopPercentage = 1 / (color.length - 1);
        color.forEach((color, index)=>{
            const offset = index * colorStopPercentage;
            gradient.addColorStop(offset, color);
        });
        return gradient;
    }
    getPixelRatio() {
        return Math.max(1, window.devicePixelRatio || 1);
    }
    renderBarWaveform(channelData, options, ctx, vScale) {
        const topChannel = channelData[0];
        const bottomChannel = channelData[1] || channelData[0];
        const length = topChannel.length;
        const { width, height } = ctx.canvas;
        const halfHeight = height / 2;
        const pixelRatio = this.getPixelRatio();
        const barWidth = options.barWidth ? options.barWidth * pixelRatio : 1;
        const barGap = options.barGap ? options.barGap * pixelRatio : options.barWidth ? barWidth / 2 : 0;
        const barRadius = options.barRadius || 0;
        const barIndexScale = width / (barWidth + barGap) / length;
        const rectFn = barRadius && 'roundRect' in ctx ? 'roundRect' : 'rect';
        ctx.beginPath();
        let prevX = 0;
        let maxTop = 0;
        let maxBottom = 0;
        for(let i = 0; i <= length; i++){
            const x = Math.round(i * barIndexScale);
            if (x > prevX) {
                const topBarHeight = Math.round(maxTop * halfHeight * vScale);
                const bottomBarHeight = Math.round(maxBottom * halfHeight * vScale);
                const barHeight = topBarHeight + bottomBarHeight || 1;
                // Vertical alignment
                let y = halfHeight - topBarHeight;
                if (options.barAlign === 'top') y = 0;
                else if (options.barAlign === 'bottom') y = height - barHeight;
                ctx[rectFn](prevX * (barWidth + barGap), y, barWidth, barHeight, barRadius);
                prevX = x;
                maxTop = 0;
                maxBottom = 0;
            }
            const magnitudeTop = Math.abs(topChannel[i] || 0);
            const magnitudeBottom = Math.abs(bottomChannel[i] || 0);
            if (magnitudeTop > maxTop) maxTop = magnitudeTop;
            if (magnitudeBottom > maxBottom) maxBottom = magnitudeBottom;
        }
        ctx.fill();
        ctx.closePath();
    }
    renderLineWaveform(channelData, _options, ctx, vScale) {
        const drawChannel = (index)=>{
            const channel = channelData[index] || channelData[0];
            const length = channel.length;
            const { height } = ctx.canvas;
            const halfHeight = height / 2;
            const hScale = ctx.canvas.width / length;
            ctx.moveTo(0, halfHeight);
            let prevX = 0;
            let max = 0;
            for(let i = 0; i <= length; i++){
                const x = Math.round(i * hScale);
                if (x > prevX) {
                    const h = Math.round(max * halfHeight * vScale) || 1;
                    const y = halfHeight + h * (index === 0 ? -1 : 1);
                    ctx.lineTo(prevX, y);
                    prevX = x;
                    max = 0;
                }
                const value = Math.abs(channel[i] || 0);
                if (value > max) max = value;
            }
            ctx.lineTo(prevX, halfHeight);
        };
        ctx.beginPath();
        drawChannel(0);
        drawChannel(1);
        ctx.fill();
        ctx.closePath();
    }
    renderWaveform(channelData, options, ctx) {
        ctx.fillStyle = this.convertColorValues(options.waveColor);
        // Custom rendering function
        if (options.renderFunction) {
            options.renderFunction(channelData, ctx);
            return;
        }
        // Vertical scaling
        let vScale = options.barHeight || 1;
        if (options.normalize) {
            const max = Array.from(channelData[0]).reduce((max, value)=>Math.max(max, Math.abs(value)), 0);
            vScale = max ? 1 / max : 1;
        }
        // Render waveform as bars
        if (options.barWidth || options.barGap || options.barAlign) {
            this.renderBarWaveform(channelData, options, ctx, vScale);
            return;
        }
        // Render waveform as a polyline
        this.renderLineWaveform(channelData, options, ctx, vScale);
    }
    renderSingleCanvas(data, options, width, height, offset, canvasContainer, progressContainer) {
        const pixelRatio = this.getPixelRatio();
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.style.left = `${Math.round(offset)}px`;
        canvasContainer.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        this.renderWaveform(data, options, ctx);
        // Draw a progress canvas
        if (canvas.width > 0 && canvas.height > 0) {
            const progressCanvas = canvas.cloneNode();
            const progressCtx = progressCanvas.getContext('2d');
            progressCtx.drawImage(canvas, 0, 0);
            // Set the composition method to draw only where the waveform is drawn
            progressCtx.globalCompositeOperation = 'source-in';
            progressCtx.fillStyle = this.convertColorValues(options.progressColor);
            // This rectangle acts as a mask thanks to the composition method
            progressCtx.fillRect(0, 0, canvas.width, canvas.height);
            progressContainer.appendChild(progressCanvas);
        }
    }
    renderMultiCanvas(channelData, options, width, height, canvasContainer, progressContainer) {
        const pixelRatio = this.getPixelRatio();
        const { clientWidth } = this.scrollContainer;
        const totalWidth = width / pixelRatio;
        let singleCanvasWidth = Math.min(Renderer.MAX_CANVAS_WIDTH, clientWidth, totalWidth);
        let drawnIndexes = {};
        // Adjust width to avoid gaps between canvases when using bars
        if (options.barWidth || options.barGap) {
            const barWidth = options.barWidth || 0.5;
            const barGap = options.barGap || barWidth / 2;
            const totalBarWidth = barWidth + barGap;
            if (singleCanvasWidth % totalBarWidth !== 0) singleCanvasWidth = Math.floor(singleCanvasWidth / totalBarWidth) * totalBarWidth;
        }
        // Nothing to render
        if (singleCanvasWidth === 0) return;
        // Draw a single canvas
        const draw = (index)=>{
            if (index < 0 || index >= numCanvases) return;
            if (drawnIndexes[index]) return;
            drawnIndexes[index] = true;
            const offset = index * singleCanvasWidth;
            let clampedWidth = Math.min(totalWidth - offset, singleCanvasWidth);
            // Clamp the width to the bar grid to avoid empty canvases at the end
            if (options.barWidth || options.barGap) {
                const barWidth = options.barWidth || 0.5;
                const barGap = options.barGap || barWidth / 2;
                const totalBarWidth = barWidth + barGap;
                clampedWidth = Math.floor(clampedWidth / totalBarWidth) * totalBarWidth;
            }
            if (clampedWidth <= 0) return;
            const data = channelData.map((channel)=>{
                const start = Math.floor(offset / totalWidth * channel.length);
                const end = Math.floor((offset + clampedWidth) / totalWidth * channel.length);
                return channel.slice(start, end);
            });
            this.renderSingleCanvas(data, options, clampedWidth, height, offset, canvasContainer, progressContainer);
        };
        // Clear canvases to avoid too many DOM nodes
        const clearCanvases = ()=>{
            if (Object.keys(drawnIndexes).length > Renderer.MAX_NODES) {
                canvasContainer.innerHTML = '';
                progressContainer.innerHTML = '';
                drawnIndexes = {};
            }
        };
        // Calculate how many canvases to render
        const numCanvases = Math.ceil(totalWidth / singleCanvasWidth);
        // Render all canvases if the waveform doesn't scroll
        if (!this.isScrollable) {
            for(let i = 0; i < numCanvases; i++)draw(i);
            return;
        }
        // Lazy rendering
        const viewPosition = this.scrollContainer.scrollLeft / totalWidth;
        const startCanvas = Math.floor(viewPosition * numCanvases);
        // Draw the canvases in the viewport first
        draw(startCanvas - 1);
        draw(startCanvas);
        draw(startCanvas + 1);
        // Subscribe to the scroll event to draw additional canvases
        if (numCanvases > 1) {
            const unsubscribe = this.on('scroll', ()=>{
                const { scrollLeft } = this.scrollContainer;
                const canvasIndex = Math.floor(scrollLeft / totalWidth * numCanvases);
                clearCanvases();
                draw(canvasIndex - 1);
                draw(canvasIndex);
                draw(canvasIndex + 1);
            });
            this.unsubscribeOnScroll.push(unsubscribe);
        }
    }
    renderChannel(channelData, _a, width, channelIndex) {
        var { overlay } = _a, options = __rest(_a, [
            "overlay"
        ]);
        // A container for canvases
        const canvasContainer = document.createElement('div');
        const height = this.getHeight(options.height, options.splitChannels);
        canvasContainer.style.height = `${height}px`;
        if (overlay && channelIndex > 0) canvasContainer.style.marginTop = `-${height}px`;
        this.canvasWrapper.style.minHeight = `${height}px`;
        this.canvasWrapper.appendChild(canvasContainer);
        // A container for progress canvases
        const progressContainer = canvasContainer.cloneNode();
        this.progressWrapper.appendChild(progressContainer);
        // Render the waveform
        this.renderMultiCanvas(channelData, options, width, height, canvasContainer, progressContainer);
    }
    render(audioData) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            // Clear previous timeouts
            this.timeouts.forEach((clear)=>clear());
            this.timeouts = [];
            // Clear the canvases
            this.canvasWrapper.innerHTML = '';
            this.progressWrapper.innerHTML = '';
            // Width
            if (this.options.width != null) this.scrollContainer.style.width = typeof this.options.width === 'number' ? `${this.options.width}px` : this.options.width;
            // Determine the width of the waveform
            const pixelRatio = this.getPixelRatio();
            const parentWidth = this.scrollContainer.clientWidth;
            const scrollWidth = Math.ceil(audioData.duration * (this.options.minPxPerSec || 0));
            // Whether the container should scroll
            this.isScrollable = scrollWidth > parentWidth;
            const useParentWidth = this.options.fillParent && !this.isScrollable;
            // Width of the waveform in pixels
            const width = (useParentWidth ? parentWidth : scrollWidth) * pixelRatio;
            // Set the width of the wrapper
            this.wrapper.style.width = useParentWidth ? '100%' : `${scrollWidth}px`;
            // Set additional styles
            this.scrollContainer.style.overflowX = this.isScrollable ? 'auto' : 'hidden';
            this.scrollContainer.classList.toggle('noScrollbar', !!this.options.hideScrollbar);
            this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`;
            this.cursor.style.width = `${this.options.cursorWidth}px`;
            this.audioData = audioData;
            this.emit('render');
            // Render the waveform
            if (this.options.splitChannels) // Render a waveform for each channel
            for(let i = 0; i < audioData.numberOfChannels; i++){
                const options = Object.assign(Object.assign({}, this.options), (_a = this.options.splitChannels) === null || _a === void 0 ? void 0 : _a[i]);
                this.renderChannel([
                    audioData.getChannelData(i)
                ], options, width, i);
            }
            else {
                // Render a single waveform for the first two channels (left and right)
                const channels = [
                    audioData.getChannelData(0)
                ];
                if (audioData.numberOfChannels > 1) channels.push(audioData.getChannelData(1));
                this.renderChannel(channels, this.options, width, 0);
            }
            // Must be emitted asynchronously for backward compatibility
            Promise.resolve().then(()=>this.emit('rendered'));
        });
    }
    reRender() {
        this.unsubscribeOnScroll.forEach((unsubscribe)=>unsubscribe());
        this.unsubscribeOnScroll = [];
        // Return if the waveform has not been rendered yet
        if (!this.audioData) return;
        // Remember the current cursor position
        const { scrollWidth } = this.scrollContainer;
        const { right: before } = this.progressWrapper.getBoundingClientRect();
        // Re-render the waveform
        this.render(this.audioData);
        // Adjust the scroll position so that the cursor stays in the same place
        if (this.isScrollable && scrollWidth !== this.scrollContainer.scrollWidth) {
            const { right: after } = this.progressWrapper.getBoundingClientRect();
            let delta = after - before;
            // to limit compounding floating-point drift
            // we need to round to the half px furthest from 0
            delta *= 2;
            delta = delta < 0 ? Math.floor(delta) : Math.ceil(delta);
            delta /= 2;
            this.scrollContainer.scrollLeft += delta;
        }
    }
    zoom(minPxPerSec) {
        this.options.minPxPerSec = minPxPerSec;
        this.reRender();
    }
    scrollIntoView(progress, isPlaying = false) {
        const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;
        const progressWidth = progress * scrollWidth;
        const startEdge = scrollLeft;
        const endEdge = scrollLeft + clientWidth;
        const middle = clientWidth / 2;
        if (this.isDragging) {
            // Scroll when dragging close to the edge of the viewport
            const minGap = 30;
            if (progressWidth + minGap > endEdge) this.scrollContainer.scrollLeft += minGap;
            else if (progressWidth - minGap < startEdge) this.scrollContainer.scrollLeft -= minGap;
        } else {
            if (progressWidth < startEdge || progressWidth > endEdge) this.scrollContainer.scrollLeft = progressWidth - (this.options.autoCenter ? middle : 0);
            // Keep the cursor centered when playing
            const center = progressWidth - scrollLeft - middle;
            if (isPlaying && this.options.autoCenter && center > 0) this.scrollContainer.scrollLeft += Math.min(center, 10);
        }
        // Emit the scroll event
        {
            const newScroll = this.scrollContainer.scrollLeft;
            const startX = newScroll / scrollWidth;
            const endX = (newScroll + clientWidth) / scrollWidth;
            this.emit('scroll', startX, endX, newScroll, newScroll + clientWidth);
        }
    }
    renderProgress(progress, isPlaying) {
        if (isNaN(progress)) return;
        const percents = progress * 100;
        this.canvasWrapper.style.clipPath = `polygon(${percents}% 0%, 100% 0%, 100% 100%, ${percents}% 100%)`;
        this.progressWrapper.style.width = `${percents}%`;
        this.cursor.style.left = `${percents}%`;
        this.cursor.style.transform = this.options.cursorWidth ? `translateX(-${progress * this.options.cursorWidth}px)` : '';
        if (this.isScrollable && this.options.autoScroll) this.scrollIntoView(progress, isPlaying);
    }
    exportImage(format, quality, type) {
        return __awaiter(this, void 0, void 0, function*() {
            const canvases = this.canvasWrapper.querySelectorAll('canvas');
            if (!canvases.length) throw new Error('No waveform data');
            // Data URLs
            if (type === 'dataURL') {
                const images = Array.from(canvases).map((canvas)=>canvas.toDataURL(format, quality));
                return Promise.resolve(images);
            }
            // Blobs
            return Promise.all(Array.from(canvases).map((canvas)=>{
                return new Promise((resolve, reject)=>{
                    canvas.toBlob((blob)=>{
                        if (blob) resolve(blob);
                        else reject(new Error('Could not export image'));
                    }, format, quality);
                });
            }));
        });
    }
}
Renderer.MAX_CANVAS_WIDTH = 8000;
Renderer.MAX_NODES = 10;
exports.default = Renderer;

},{"./draggable.js":"l6Slf","./event-emitter.js":"fgYEq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l6Slf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeDraggable", ()=>makeDraggable);
function makeDraggable(element, onDrag, onStart, onEnd, threshold = 3, mouseButton = 0, touchDelay = 100) {
    if (!element) return ()=>void 0;
    const isTouchDevice = matchMedia('(pointer: coarse)').matches;
    let unsubscribeDocument = ()=>void 0;
    const onPointerDown = (event)=>{
        if (event.button !== mouseButton) return;
        event.preventDefault();
        event.stopPropagation();
        let startX = event.clientX;
        let startY = event.clientY;
        let isDragging = false;
        const touchStartTime = Date.now();
        const onPointerMove = (event)=>{
            event.preventDefault();
            event.stopPropagation();
            if (isTouchDevice && Date.now() - touchStartTime < touchDelay) return;
            const x = event.clientX;
            const y = event.clientY;
            const dx = x - startX;
            const dy = y - startY;
            if (isDragging || Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
                const rect = element.getBoundingClientRect();
                const { left, top } = rect;
                if (!isDragging) {
                    onStart === null || onStart === void 0 || onStart(startX - left, startY - top);
                    isDragging = true;
                }
                onDrag(dx, dy, x - left, y - top);
                startX = x;
                startY = y;
            }
        };
        const onPointerUp = (event)=>{
            if (isDragging) {
                const x = event.clientX;
                const y = event.clientY;
                const rect = element.getBoundingClientRect();
                const { left, top } = rect;
                onEnd === null || onEnd === void 0 || onEnd(x - left, y - top);
            }
            unsubscribeDocument();
        };
        const onPointerLeave = (e)=>{
            // Listen to events only on the document and not on inner elements
            if (!e.relatedTarget || e.relatedTarget === document.documentElement) onPointerUp(e);
        };
        const onClick = (event)=>{
            if (isDragging) {
                event.stopPropagation();
                event.preventDefault();
            }
        };
        const onTouchMove = (event)=>{
            if (isDragging) event.preventDefault();
        };
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
        document.addEventListener('pointerout', onPointerLeave);
        document.addEventListener('pointercancel', onPointerLeave);
        document.addEventListener('touchmove', onTouchMove, {
            passive: false
        });
        document.addEventListener('click', onClick, {
            capture: true
        });
        unsubscribeDocument = ()=>{
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
            document.removeEventListener('pointerout', onPointerLeave);
            document.removeEventListener('pointercancel', onPointerLeave);
            document.removeEventListener('touchmove', onTouchMove);
            setTimeout(()=>{
                document.removeEventListener('click', onClick, {
                    capture: true
                });
            }, 10);
        };
    };
    element.addEventListener('pointerdown', onPointerDown);
    return ()=>{
        unsubscribeDocument();
        element.removeEventListener('pointerdown', onPointerDown);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eWaVN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
class Timer extends (0, _eventEmitterJsDefault.default) {
    constructor(){
        super(...arguments);
        this.unsubscribe = ()=>undefined;
    }
    start() {
        this.unsubscribe = this.on('tick', ()=>{
            requestAnimationFrame(()=>{
                this.emit('tick');
            });
        });
        this.emit('tick');
    }
    stop() {
        this.unsubscribe();
    }
    destroy() {
        this.unsubscribe();
    }
}
exports.default = Timer;

},{"./event-emitter.js":"fgYEq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"28khw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * A Web Audio buffer player emulating the behavior of an HTML5 Audio element.
 */ class WebAudioPlayer extends (0, _eventEmitterJsDefault.default) {
    constructor(audioContext = new AudioContext()){
        super();
        this.bufferNode = null;
        this.playStartTime = 0;
        this.playedDuration = 0;
        this._muted = false;
        this._playbackRate = 1;
        this._duration = undefined;
        this.buffer = null;
        this.currentSrc = '';
        this.paused = true;
        this.crossOrigin = null;
        this.seeking = false;
        this.autoplay = false;
        /** Subscribe to an event. Returns an unsubscribe function. */ this.addEventListener = this.on;
        /** Unsubscribe from an event */ this.removeEventListener = this.un;
        this.audioContext = audioContext;
        this.gainNode = this.audioContext.createGain();
        this.gainNode.connect(this.audioContext.destination);
    }
    load() {
        return __awaiter(this, void 0, void 0, function*() {
            return;
        });
    }
    get src() {
        return this.currentSrc;
    }
    set src(value) {
        this.currentSrc = value;
        this._duration = undefined;
        if (!value) {
            this.buffer = null;
            this.emit('emptied');
            return;
        }
        fetch(value).then((response)=>{
            if (response.status >= 400) throw new Error(`Failed to fetch ${value}: ${response.status} (${response.statusText})`);
            return response.arrayBuffer();
        }).then((arrayBuffer)=>{
            if (this.currentSrc !== value) return null;
            return this.audioContext.decodeAudioData(arrayBuffer);
        }).then((audioBuffer)=>{
            if (this.currentSrc !== value) return;
            this.buffer = audioBuffer;
            this.emit('loadedmetadata');
            this.emit('canplay');
            if (this.autoplay) this.play();
        });
    }
    _play() {
        var _a;
        if (!this.paused) return;
        this.paused = false;
        (_a = this.bufferNode) === null || _a === void 0 || _a.disconnect();
        this.bufferNode = this.audioContext.createBufferSource();
        if (this.buffer) this.bufferNode.buffer = this.buffer;
        this.bufferNode.playbackRate.value = this._playbackRate;
        this.bufferNode.connect(this.gainNode);
        let currentPos = this.playedDuration * this._playbackRate;
        if (currentPos >= this.duration || currentPos < 0) {
            currentPos = 0;
            this.playedDuration = 0;
        }
        this.bufferNode.start(this.audioContext.currentTime, currentPos);
        this.playStartTime = this.audioContext.currentTime;
        this.bufferNode.onended = ()=>{
            if (this.currentTime >= this.duration) {
                this.pause();
                this.emit('ended');
            }
        };
    }
    _pause() {
        var _a;
        this.paused = true;
        (_a = this.bufferNode) === null || _a === void 0 || _a.stop();
        this.playedDuration += this.audioContext.currentTime - this.playStartTime;
    }
    play() {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.paused) return;
            this._play();
            this.emit('play');
        });
    }
    pause() {
        if (this.paused) return;
        this._pause();
        this.emit('pause');
    }
    stopAt(timeSeconds) {
        const delay = timeSeconds - this.currentTime;
        const currentBufferNode = this.bufferNode;
        currentBufferNode === null || currentBufferNode === void 0 || currentBufferNode.stop(this.audioContext.currentTime + delay);
        currentBufferNode === null || currentBufferNode === void 0 || currentBufferNode.addEventListener('ended', ()=>{
            if (currentBufferNode === this.bufferNode) {
                this.bufferNode = null;
                this.pause();
            }
        }, {
            once: true
        });
    }
    setSinkId(deviceId) {
        return __awaiter(this, void 0, void 0, function*() {
            const ac = this.audioContext;
            return ac.setSinkId(deviceId);
        });
    }
    get playbackRate() {
        return this._playbackRate;
    }
    set playbackRate(value) {
        this._playbackRate = value;
        if (this.bufferNode) this.bufferNode.playbackRate.value = value;
    }
    get currentTime() {
        const time = this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime);
        return time * this._playbackRate;
    }
    set currentTime(value) {
        const wasPlaying = !this.paused;
        if (wasPlaying) this._pause();
        this.playedDuration = value / this._playbackRate;
        if (wasPlaying) this._play();
        this.emit('seeking');
        this.emit('timeupdate');
    }
    get duration() {
        var _a, _b;
        return (_a = this._duration) !== null && _a !== void 0 ? _a : ((_b = this.buffer) === null || _b === void 0 ? void 0 : _b.duration) || 0;
    }
    set duration(value) {
        this._duration = value;
    }
    get volume() {
        return this.gainNode.gain.value;
    }
    set volume(value) {
        this.gainNode.gain.value = value;
        this.emit('volumechange');
    }
    get muted() {
        return this._muted;
    }
    set muted(value) {
        if (this._muted === value) return;
        this._muted = value;
        if (this._muted) this.gainNode.disconnect();
        else this.gainNode.connect(this.audioContext.destination);
    }
    canPlayType(mimeType) {
        return /^(audio|video)\//.test(mimeType);
    }
    /** Get the GainNode used to play the audio. Can be used to attach filters. */ getGainNode() {
        return this.gainNode;
    }
    /** Get decoded audio */ getChannelData() {
        const channels = [];
        if (!this.buffer) return channels;
        const numChannels = this.buffer.numberOfChannels;
        for(let i = 0; i < numChannels; i++)channels.push(this.buffer.getChannelData(i));
        return channels;
    }
    /**
     * Imitate `HTMLElement.removeAttribute` for compatibility with `Player`.
     */ removeAttribute(attrName) {
        switch(attrName){
            case 'src':
                this.src = '';
                break;
            case 'playbackRate':
                this.playbackRate = 0;
                break;
            case 'currentTime':
                this.currentTime = 0;
                break;
            case 'duration':
                this.duration = 0;
                break;
            case 'volume':
                this.volume = 0;
                break;
            case 'muted':
                this.muted = false;
                break;
        }
    }
}
exports.default = WebAudioPlayer;

},{"./event-emitter.js":"fgYEq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kcaNz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>r);
function t(t, i, e, s) {
    return new (e || (e = Promise))(function(o, r) {
        function n(t) {
            try {
                d(s.next(t));
            } catch (t) {
                r(t);
            }
        }
        function a(t) {
            try {
                d(s.throw(t));
            } catch (t) {
                r(t);
            }
        }
        function d(t) {
            var i;
            t.done ? o(t.value) : (i = t.value, i instanceof e ? i : new e(function(t) {
                t(i);
            })).then(n, a);
        }
        d((s = s.apply(t, i || [])).next());
    });
}
"function" == typeof SuppressedError && SuppressedError;
class i {
    constructor(){
        this.listeners = {};
    }
    on(t, i, e) {
        if (this.listeners[t] || (this.listeners[t] = new Set), this.listeners[t].add(i), null == e ? void 0 : e.once) {
            const e = ()=>{
                this.un(t, e), this.un(t, i);
            };
            return this.on(t, e), e;
        }
        return ()=>this.un(t, i);
    }
    un(t, i) {
        var e;
        null === (e = this.listeners[t]) || void 0 === e || e.delete(i);
    }
    once(t, i) {
        return this.on(t, i, {
            once: !0
        });
    }
    unAll() {
        this.listeners = {};
    }
    emit(t, ...i) {
        this.listeners[t] && this.listeners[t].forEach((t)=>t(...i));
    }
}
class e extends i {
    constructor(t){
        super(), this.subscriptions = [], this.isDestroyed = !1, this.options = t;
    }
    onInit() {}
    _init(t) {
        this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = t, this.onInit();
    }
    destroy() {
        this.emit("destroy"), this.subscriptions.forEach((t)=>t()), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
    }
}
class s extends i {
    constructor(){
        super(...arguments), this.unsubscribe = ()=>{};
    }
    start() {
        this.unsubscribe = this.on("tick", ()=>{
            requestAnimationFrame(()=>{
                this.emit("tick");
            });
        }), this.emit("tick");
    }
    stop() {
        this.unsubscribe();
    }
    destroy() {
        this.unsubscribe();
    }
}
const o = [
    "audio/webm",
    "audio/wav",
    "audio/mpeg",
    "audio/mp4",
    "audio/mp3"
];
class r extends e {
    constructor(t){
        var i, e, o, r, n, a;
        super(Object.assign(Object.assign({}, t), {
            audioBitsPerSecond: null !== (i = t.audioBitsPerSecond) && void 0 !== i ? i : 128e3,
            scrollingWaveform: null !== (e = t.scrollingWaveform) && void 0 !== e && e,
            scrollingWaveformWindow: null !== (o = t.scrollingWaveformWindow) && void 0 !== o ? o : 5,
            continuousWaveform: null !== (r = t.continuousWaveform) && void 0 !== r && r,
            renderRecordedAudio: null === (n = t.renderRecordedAudio) || void 0 === n || n,
            mediaRecorderTimeslice: null !== (a = t.mediaRecorderTimeslice) && void 0 !== a ? a : void 0
        })), this.stream = null, this.mediaRecorder = null, this.dataWindow = null, this.isWaveformPaused = !1, this.lastStartTime = 0, this.lastDuration = 0, this.duration = 0, this.timer = new s, this.subscriptions.push(this.timer.on("tick", ()=>{
            const t = performance.now() - this.lastStartTime;
            this.duration = this.isPaused() ? this.duration : this.lastDuration + t, this.emit("record-progress", this.duration);
        }));
    }
    static create(t) {
        return new r(t || {});
    }
    renderMicStream(t) {
        var i;
        const e = new AudioContext, s = e.createMediaStreamSource(t), o = e.createAnalyser();
        s.connect(o), this.options.continuousWaveform && (o.fftSize = 32);
        const r = o.frequencyBinCount, n = new Float32Array(r);
        let a = 0;
        this.wavesurfer && (null !== (i = this.originalOptions) && void 0 !== i || (this.originalOptions = Object.assign({}, this.wavesurfer.options)), this.wavesurfer.options.interact = !1, this.options.scrollingWaveform && (this.wavesurfer.options.cursorWidth = 0));
        const d = setInterval(()=>{
            var t, i, s, d;
            if (!this.isWaveformPaused) {
                if (o.getFloatTimeDomainData(n), this.options.scrollingWaveform) {
                    const t = Math.floor((this.options.scrollingWaveformWindow || 0) * e.sampleRate), i = Math.min(t, this.dataWindow ? this.dataWindow.length + r : r), s = new Float32Array(t);
                    if (this.dataWindow) {
                        const e = Math.max(0, t - this.dataWindow.length);
                        s.set(this.dataWindow.slice(-i + r), e);
                    }
                    s.set(n, t - r), this.dataWindow = s;
                } else if (this.options.continuousWaveform) {
                    if (!this.dataWindow) {
                        const e = this.options.continuousWaveformDuration ? Math.round(100 * this.options.continuousWaveformDuration) : (null !== (i = null === (t = this.wavesurfer) || void 0 === t ? void 0 : t.getWidth()) && void 0 !== i ? i : 0) * window.devicePixelRatio;
                        this.dataWindow = new Float32Array(e);
                    }
                    let e = 0;
                    for(let t = 0; t < r; t++){
                        const i = Math.abs(n[t]);
                        i > e && (e = i);
                    }
                    if (a + 1 > this.dataWindow.length) {
                        const t = new Float32Array(2 * this.dataWindow.length);
                        t.set(this.dataWindow, 0), this.dataWindow = t;
                    }
                    this.dataWindow[a] = e, a++;
                } else this.dataWindow = n;
                if (this.wavesurfer) {
                    const t = (null !== (d = null === (s = this.dataWindow) || void 0 === s ? void 0 : s.length) && void 0 !== d ? d : 0) / 100;
                    this.wavesurfer.load("", [
                        this.dataWindow
                    ], this.options.scrollingWaveform ? this.options.scrollingWaveformWindow : t).then(()=>{
                        this.wavesurfer && this.options.continuousWaveform && (this.wavesurfer.setTime(this.getDuration() / 1e3), this.wavesurfer.options.minPxPerSec || this.wavesurfer.setOptions({
                            minPxPerSec: this.wavesurfer.getWidth() / this.wavesurfer.getDuration()
                        }));
                    }).catch((t)=>{
                        console.error("Error rendering real-time recording data:", t);
                    });
                }
            }
        }, 10);
        return {
            onDestroy: ()=>{
                clearInterval(d), null == s || s.disconnect(), null == e || e.close();
            },
            onEnd: ()=>{
                this.isWaveformPaused = !0, clearInterval(d), this.stopMic();
            }
        };
    }
    startMic(i) {
        return t(this, void 0, void 0, function*() {
            let t;
            try {
                t = yield navigator.mediaDevices.getUserMedia({
                    audio: null == i || i
                });
            } catch (t) {
                throw new Error("Error accessing the microphone: " + t.message);
            }
            const { onDestroy: e, onEnd: s } = this.renderMicStream(t);
            return this.subscriptions.push(this.once("destroy", e)), this.subscriptions.push(this.once("record-end", s)), this.stream = t, t;
        });
    }
    stopMic() {
        this.stream && (this.stream.getTracks().forEach((t)=>t.stop()), this.stream = null, this.mediaRecorder = null);
    }
    startRecording(i) {
        return t(this, void 0, void 0, function*() {
            const t = this.stream || (yield this.startMic(i));
            this.dataWindow = null;
            const e = this.mediaRecorder || new MediaRecorder(t, {
                mimeType: this.options.mimeType || o.find((t)=>MediaRecorder.isTypeSupported(t)),
                audioBitsPerSecond: this.options.audioBitsPerSecond
            });
            this.mediaRecorder = e, this.stopRecording();
            const s = [];
            e.ondataavailable = (t)=>{
                t.data.size > 0 && s.push(t.data), this.emit("record-data-available", t.data);
            };
            const r = (t)=>{
                var i;
                const o = new Blob(s, {
                    type: e.mimeType
                });
                this.emit(t, o), this.options.renderRecordedAudio && (this.applyOriginalOptionsIfNeeded(), null === (i = this.wavesurfer) || void 0 === i || i.load(URL.createObjectURL(o)));
            };
            e.onpause = ()=>r("record-pause"), e.onstop = ()=>r("record-end"), e.start(this.options.mediaRecorderTimeslice), this.lastStartTime = performance.now(), this.lastDuration = 0, this.duration = 0, this.isWaveformPaused = !1, this.timer.start(), this.emit("record-start");
        });
    }
    getDuration() {
        return this.duration;
    }
    isRecording() {
        var t;
        return "recording" === (null === (t = this.mediaRecorder) || void 0 === t ? void 0 : t.state);
    }
    isPaused() {
        var t;
        return "paused" === (null === (t = this.mediaRecorder) || void 0 === t ? void 0 : t.state);
    }
    isActive() {
        var t;
        return "inactive" !== (null === (t = this.mediaRecorder) || void 0 === t ? void 0 : t.state);
    }
    stopRecording() {
        var t;
        this.isActive() && (null === (t = this.mediaRecorder) || void 0 === t || t.stop(), this.timer.stop());
    }
    pauseRecording() {
        var t, i;
        this.isRecording() && (this.isWaveformPaused = !0, null === (t = this.mediaRecorder) || void 0 === t || t.requestData(), null === (i = this.mediaRecorder) || void 0 === i || i.pause(), this.timer.stop(), this.lastDuration = this.duration);
    }
    resumeRecording() {
        var t;
        this.isPaused() && (this.isWaveformPaused = !1, null === (t = this.mediaRecorder) || void 0 === t || t.resume(), this.timer.start(), this.lastStartTime = performance.now(), this.emit("record-resume"));
    }
    static getAvailableAudioDevices() {
        return t(this, void 0, void 0, function*() {
            return navigator.mediaDevices.enumerateDevices().then((t)=>t.filter((t)=>"audioinput" === t.kind));
        });
    }
    destroy() {
        this.applyOriginalOptionsIfNeeded(), super.destroy(), this.stopRecording(), this.stopMic();
    }
    applyOriginalOptionsIfNeeded() {
        this.wavesurfer && this.originalOptions && (this.wavesurfer.setOptions(this.originalOptions), delete this.originalOptions);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["kxwl6","jOXmm"], "jOXmm", "parcelRequireb29b", {})

//# sourceMappingURL=audio-visualizer.e02fbd41.js.map
