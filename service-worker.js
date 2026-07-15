var CACHE_NAME = "piresfm-v2";
var urlsToCache = [
    "/pires-fm-site/ouvir.html",
    "/pires-fm-site/style.css",
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
    if (e.request.url.indexOf("archive.org") !== -1 || e.request.url.indexOf("open-meteo.com") !== -1 || e.request.url.indexOf("rss2json") !== -1) {
        e.respondWith(
            fetch(e.request).catch(function() {
                return caches.match(e.request);
            })
        );
        return;
    }
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request).then(function(fetchResponse) {
                return caches.open(CACHE_NAME).then(function(cache) {
                    if (e.request.url.indexOf("github.io") !== -1) {
                        cache.put(e.request, fetchResponse.clone());
                    }
                    return fetchResponse;
                });
            });
        }).catch(function() {
            return caches.match("/pires-fm-site/ouvir.html");
        })
    );
});
