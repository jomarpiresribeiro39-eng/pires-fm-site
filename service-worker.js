var CACHE_NAME = "piresfm-v4";
var urlsToCache = [
    "/pires-fm-site/ouvir.html",
    "/pires-fm-site/index.html",
    "/pires-fm-site/script.js",
    "/pires-fm-site/style.css",
    "/pires-fm-site/admin.html",
    "/pires-fm-site/admin.js",
    "/pires-fm-site/admin.css",
    "/pires-fm-site/manifest.json",
    "/pires-fm-site/img/cristo.jpg",
    "/pires-fm-site/img/pao_de_acucar.jpg",
    "/pires-fm-site/img/ipanema.jpg",
    "/pires-fm-site/img/icon-192.png",
    "/pires-fm-site/img/icon-512.png",
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
];

self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

self.addEventListener("activate", function(e) {
    e.waitUntil(
        caches.keys().then(function(names) {
            return Promise.all(
                names.filter(function(name) { return name !== CACHE_NAME; })
                     .map(function(name) { return caches.delete(name); })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener("fetch", function(e) {
    if (e.request.url.indexOf("open-meteo.com") !== -1 || e.request.url.indexOf("rss2json") !== -1) {
        e.respondWith(
            fetch(e.request).catch(function() {
                return caches.match(e.request);
            })
        );
        return;
    }
    if (e.request.url.indexOf("github.io") !== -1 || e.request.url.indexOf(".js") !== -1 || e.request.url.indexOf(".html") !== -1 || e.request.url.indexOf(".css") !== -1) {
        e.respondWith(
            fetch(e.request).then(function(fetchResponse) {
                if (fetchResponse.status === 206) { return fetchResponse; }
                return caches.open(CACHE_NAME).then(function(cache) {
                    try {
                        cache.put(e.request, fetchResponse.clone());
                    } catch(_) {}
                    return fetchResponse;
                });
            }).catch(function() {
                return caches.match(e.request);
            })
        );
        return;
    }
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request).catch(function(){return null;});
        })
    );
});
