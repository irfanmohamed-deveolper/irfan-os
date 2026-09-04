const CACHE_NAME = 'irfan-os-v1';
const CORE_ASSETS = [
  '/', '/offline.html', '/styles/globals.css'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE_ASSETS)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request)).catch(()=>caches.match('/offline.html'))
  );
});
