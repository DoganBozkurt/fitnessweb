'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b7097dd3b694dadef646d4d73295b224",
"assets/FontManifest.json": "c3d7064f804336d0537c2d269600de35",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/assets/animasyon/animasyon.riv": "1c9d987db400e3bd4ea4c69a5fc6a2f6",
"assets/lib/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/lib/assets/gif/bacakKaslari/1.gif": "a9869c352a685bf20ccaeeb7c5c20390",
"assets/lib/assets/gif/bacakKaslari/2.gif": "a8e0f1e7aa77c597329298e056e8d38b",
"assets/lib/assets/gif/bacakKaslari/3.gif": "716b67d76e3d8b4177a4837f8ac443ac",
"assets/lib/assets/gif/bacakKaslari/4.gif": "0c51de835d14a8a3563651b5258ff2e2",
"assets/lib/assets/gif/gogusKaslari/1.gif": "197c4c1a1a32b492efe221057c93cda7",
"assets/lib/assets/gif/gogusKaslari/2.gif": "870dc3eb18952118e6e4f84239ddf712",
"assets/lib/assets/gif/gogusKaslari/3.gif": "9e93222090aaf659b4bb74e36b5199e4",
"assets/lib/assets/gif/gogusKaslari/4.gif": "f3614ead68c6e149ab9daf1b889e13a0",
"assets/lib/assets/gif/karinKaslari/1.gif": "b9fbe9588361cea726744f359d3fca59",
"assets/lib/assets/gif/karinKaslari/2.gif": "996c6577687e4bc10273c6db2aff70d9",
"assets/lib/assets/gif/karinKaslari/3.gif": "5a7a7a6f62251d6911622926d9b93f87",
"assets/lib/assets/gif/karinKaslari/4.gif": "b9ae85204429b77f89b08522dc789636",
"assets/lib/assets/gif/kolKaslari/1.gif": "9be0811789dc7a0a02841020529a28d5",
"assets/lib/assets/gif/kolKaslari/2.gif": "08b03a928c5a5a8c30b05732227d011e",
"assets/lib/assets/gif/sirtKaslari/1.gif": "d2897e1f57dde10e9140ffc285f5d017",
"assets/lib/assets/gif/sirtKaslari/2.gif": "d2897e1f57dde10e9140ffc285f5d017",
"assets/lib/assets/gif/sirtKaslari/3.gif": "d76aedba669a7937bff4a929257cb538",
"assets/lib/assets/gif/sirtKaslari/4.gif": "d76aedba669a7937bff4a929257cb538",
"assets/lib/assets/images/avatar.jpg": "764e0bc52a95bc66804825f1656de9df",
"assets/lib/assets/images/avatarKadin.jpg": "241ddfc415f0a4bb5a739ab616fa85b6",
"assets/lib/assets/images/bacakKaslari.jpg": "5122bb50509e57f89ac3a754d503ab9d",
"assets/lib/assets/images/basarilarResim.jpg": "fc71ad926f7eec2596f96d3a162f298e",
"assets/lib/assets/images/Dumbbell1.jpg": "8ea28c1e1e24964c50df06c0bee540ea",
"assets/lib/assets/images/girisResim.jpg": "48559c7013d3bd3e438e8047dc29c4a5",
"assets/lib/assets/images/gogusKaslari.jpg": "fcb334be5bbc1470110ce445782c2a69",
"assets/lib/assets/images/karinKaslari.jpg": "dd07c1fdcce8b453271232eb0b19cef4",
"assets/lib/assets/images/kiloVer.jpg": "180e3fa49afe2e31deb5bf19f9005fd1",
"assets/lib/assets/images/kolKaslari.jpg": "fd2396da0b0424057bdf7cd3208c7ac5",
"assets/lib/assets/images/singinResim.jpg": "f67a08b4a0cf0d6c1a4dbde3b15f6f66",
"assets/lib/assets/images/sirtKaslari.jpg": "e84477e581ede166bdffe9fa05c0c178",
"assets/lib/assets/images/spor.jpg": "df7067802b37cc37b7405c1bba3aca5d",
"assets/lib/assets/images/yoga.jpg": "d51d825da1e90166bbd42675c23ed82c",
"assets/NOTICES": "033b28dc7ca05b5e0a32987cedb23354",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510841f7dc393c985cb6793e17bafd20",
"/": "510841f7dc393c985cb6793e17bafd20",
"main.dart.js": "c09f065b73941afd58122398a0b8c2ef",
"manifest.json": "4a1c86421fc2ab088af00de29f2a2553",
"version.json": "fd1933e37d1ebada02efc494ad40d350"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
