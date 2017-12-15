var CACHE_NAME = 'my-site-cache-v2';

var urlsToCache = [
  '/',
  '/src/',
  '/manifest.json',
  '/index.html',
  '/src/images/AboutUs_ImageSquare.jpg',
  '/src/images/DonnaImageFinal-01.png',
  '/src/images/EMSI_logo-01.png',
  '/src/images/FindALocationBkgrd-01.jpg',
  '/src/images/Locations2Square.jpg',
  '/src/images/MainSanctuary_ImageBlurredFINAL.jpg',
  '/src/images/MissionsPageImage409-01.jpg',
  '/src/images/Missions_ImageSquare.jpg',
  '/src/images/MobilePhoneMail_Icons-01.png',
  '/src/images/MosesYangImage-01.jpg',
  '/src/images/OrganizationImage-01.jpg',
  '/src/images/SeminaryImage2PMS409-01.jpg',
  '/src/images/Seminary_ImageSquare.jpg',
  '/src/images/StatementOfFaithImage-01.jpg',
  '/src/images/ZionWuImage-01.jpg',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
        return response || fetch(event.request);
    })
  );
});