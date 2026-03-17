const CACHE = "agro-offline";

const arquivos = [
"index.html",
"abrir.html"
];

self.addEventListener("install", e => {

e.waitUntil(
caches.open(CACHE).then(cache => {
return cache.addAll(arquivos);
})

);

});

self.addEventListener("fetch", e => {

e.respondWith(

caches.match(e.request).then(response => {

return response || fetch(e.request);

})

);

});
