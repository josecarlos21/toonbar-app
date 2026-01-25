
const CACHE_NAME = 'toonbar-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.tsx',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Bangers&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Round'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retorna la caché si existe, si no, busca en la red y actualiza la caché
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback offline para imágenes si no hay red
        if (event.request.destination === 'image') {
          return caches.match('./favicon.ico'); // O un placeholder
        }
      });
      return response || fetchPromise;
    })
  );
});
