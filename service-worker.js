const CACHE_NAME = 'cipher-cache-v1';
const CACHE_FILES = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CACHE_FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
