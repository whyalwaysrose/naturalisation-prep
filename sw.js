/* ============================================================
   Service worker — offline support

   The governing constraint: this must never be able to show something older
   than what the network would have given. A cached index.html once made this
   app look broken for days, and a service worker done carelessly turns that
   from a ten-minute annoyance into a permanent one, fixable only by clearing
   site data. So:

     • Navigations are NETWORK-FIRST. Online, you always get the newest HTML;
       the cache is only ever a fallback when the network fails.
     • Assets are cached by their FULL url, query string included. Every asset
       is requested as ...?v=N, so a new deploy asks for urls that are not in
       the cache and cannot be answered with an old file. No ignoreSearch.
     • The cache name carries the version from this worker's own url
       (registered as sw.js?v=N), so one bump in index.html rolls everything:
       new worker, new cache, old caches deleted.

   Net effect: offline it serves the last version you loaded; online it behaves
   as if the service worker were not there at all.
   ============================================================ */

const VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
const CACHE = 'examen-civique-' + VERSION;

/* Enough to open the app with no network. Everything else is cached the first
   time it is requested, which keeps this list from drifting out of date. */
const CORE = ['./', './index.html', './manifest.json'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
      .catch(function () { /* a failed precache must not block activation */ })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (n) {
        if (n !== CACHE && n.indexOf('examen-civique-') === 0) return caches.delete(n);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Never touch anything off-origin: the analytics script must reach the
  // network on its own terms, or not at all.
  if (url.origin !== self.location.origin) return;

  // ---- navigations: network first, cache only as a fallback ----
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(function (res) {
          const copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
          return res;
        })
        .catch(function () {
          return caches.match('./index.html').then(function (hit) {
            return hit || caches.match('./');
          });
        })
    );
    return;
  }

  // ---- assets: exact-url cache, then network ----
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
