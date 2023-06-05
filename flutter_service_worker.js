'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6898e7d96bcc764bfe8febd9e6b36701",
"/": "6898e7d96bcc764bfe8febd9e6b36701",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"version.json": "fed17bca0c65206a6ceb9408b95688c5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a8051fa33639595902934a633fbfe6aa",
"assets/assets/icons/home.png": "048f47dd2726e8bf57e6ef5b48b5fb6d",
"assets/assets/icons/search.png": "059a9cf13b8795b0986e06afb078dc5c",
"assets/assets/icons/preferences.png": "8fa010fc6eb95f58399280ef5e6cc956",
"assets/assets/icons/user.png": "03b1e386e552729b3b5796e21eafb7f6",
"assets/assets/icons/bookmark.png": "845c8a75df2d644b1cbe8f3916e669e6",
"assets/assets/icons/heart.png": "ed64912cbbe400de9334ecffcf94bd83",
"assets/assets/icons/pin.png": "6f38e04efda5e93b38e62a2ee9ee9191",
"assets/assets/icons/left.png": "2667cf16e8e0d566ec98e10a52f8baab",
"assets/assets/icons/menu.png": "15f7143ccf416893f2a247fed8d5ae7b",
"assets/assets/icons/note.png": "d26c0ed2966a7aacdfa22ead24da4b99",
"assets/assets/icons/notification.png": "bfeaf947176335ef99b25e7480531c2e",
"assets/assets/icons/shopping-cart.png": "d433a628b5a4d60f4c8161fbe24162de",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/images/historical_icon.png": "5997ab03a407f32b9e4a50dacf97fac4",
"assets/assets/images/sky_tour_icon.png": "2b3777a942a9fad91254d05c2eee6265",
"assets/assets/images/sky/4/3.png": "8fb1bbfc07a5b2900c75786f63764702",
"assets/assets/images/sky/4/4.png": "e3aadca177dfb936ba0666e765699b02",
"assets/assets/images/sky/4/2.png": "28cc243e9e808653c33d8967cb0a2f3d",
"assets/assets/images/sky/4/1.png": "0ee6a1a14b8b43283ebe5f487c359c1f",
"assets/assets/images/sky/3/3.png": "46d918997a019c5f4ee3860e93847916",
"assets/assets/images/sky/3/4.png": "591e1096b77fa934d6c7549edbf239b1",
"assets/assets/images/sky/3/2.png": "2c25431eea22d82cc21870f79a7b648c",
"assets/assets/images/sky/3/1.png": "7c5e47552954e660d5471155ac16ee27",
"assets/assets/images/sky/1/3.png": "9e5bdc8ebec0429b88ccab809824a4de",
"assets/assets/images/sky/1/4.png": "e7a077eababe3f8d01508be3ddd10f36",
"assets/assets/images/sky/1/2.png": "7b4093a2e30ea442e1798818d59ca277",
"assets/assets/images/sky/1/1.png": "085949781784b76eac3ad47b619bc857",
"assets/assets/images/sky/2/3.png": "304c6ae973c488e8640bb46af3343637",
"assets/assets/images/sky/2/4.png": "a2ad0cae346ece01baacfad6d3bbc6b8",
"assets/assets/images/sky/2/2.png": "3fc8a9a007845c5dbfe079fd12bc444f",
"assets/assets/images/sky/2/1.png": "bf7da648d7bb84774b340d8e3989f84e",
"assets/assets/images/profile_bg.png": "faea444f1577414e0414b435141cd5c4",
"assets/assets/images/meals/4/3.png": "4c1f35948d2162c1a79afc6394d71f48",
"assets/assets/images/meals/4/4.png": "199b010a8a65ff5a27a51afae06ca2fd",
"assets/assets/images/meals/4/2.png": "9eb173f21f0cb7c501437a0c72b34e88",
"assets/assets/images/meals/4/1.png": "6e9fd2b5908eb5fdf31d714777638a22",
"assets/assets/images/meals/3/3.png": "6162f7222879a9e21adba7defa385ca4",
"assets/assets/images/meals/3/4.png": "677055deec158da8a419a94f50f7dff5",
"assets/assets/images/meals/3/2.png": "8d05a7e6cefb6beb4faa8d3f78fac307",
"assets/assets/images/meals/3/1.png": "f59da150ba305785d6d86171e3e5c7b8",
"assets/assets/images/meals/1/3.png": "158e15bfb40509fc0e1f86cab0766208",
"assets/assets/images/meals/1/4.png": "56d153b0c0b2ed59439e6677a7d25012",
"assets/assets/images/meals/1/2.png": "d932a9c40e94f4abaafe7f32eb10bace",
"assets/assets/images/meals/1/1.png": "a0db54a591762e966b390258862321af",
"assets/assets/images/meals/2/3.png": "c5e35a99af3754baaf4a0b98e02977fe",
"assets/assets/images/meals/2/4.png": "8b8586f3137a6bb326feb4d76819b57d",
"assets/assets/images/meals/2/2.png": "5950a1d326d5cd147e0e43f0e9517d52",
"assets/assets/images/meals/2/1.png": "168d8e973b7bcbd85bde3a21034ad581",
"assets/assets/images/beach/4/3.png": "2ff85f93fda5718c21b6e90694a0f7c6",
"assets/assets/images/beach/4/4.png": "71f57c6c04d023035cec87f160830527",
"assets/assets/images/beach/4/2.png": "8894f75f0893f823b485b9986f1dd626",
"assets/assets/images/beach/4/1.png": "109d4cebbc58e3a74d5cbfd5e46f2b58",
"assets/assets/images/beach/3/3.png": "8ef508bc7f02c1f8dfc5dc113a124b70",
"assets/assets/images/beach/3/4.png": "6eb6ad6e08ea7e8a6292deea0a153314",
"assets/assets/images/beach/3/2.png": "b620d8515539bcb10bb8c62a3589aef2",
"assets/assets/images/beach/3/1.png": "e7079e1dca13ec0ae6888ef2214f6b72",
"assets/assets/images/beach/1/3.png": "6ee09c00ece2c70dd87ec94c6bf0fdf3",
"assets/assets/images/beach/1/4.png": "a65870f2115c574b436ebce15fadf3c0",
"assets/assets/images/beach/1/2.png": "f85ff5b77d4259dfe29ef8aee20a7f03",
"assets/assets/images/beach/1/1.png": "aa0695f360add8277e65dd4557922c46",
"assets/assets/images/beach/2/3.png": "c4c8cb9414f443f85dd9db2105a71bde",
"assets/assets/images/beach/2/4.png": "41700b1a2d80191b659e62cd21df7a25",
"assets/assets/images/beach/2/2.png": "68c55e8295ed5e1dfd93e68499c1a970",
"assets/assets/images/beach/2/1.png": "88017aee0d7e6cb4818d109c87bedfa8",
"assets/assets/images/city/4/3.png": "a4c96fcbdf867a1ae462dc0cbb8d438e",
"assets/assets/images/city/4/4.png": "f695b7e3ce1e945df1a6bb29eb1529af",
"assets/assets/images/city/4/2.png": "f8b1d97dd6cf72a105b790c0b467dc61",
"assets/assets/images/city/4/1.png": "bd1cdbee62c2d8ed65762a9b8627f357",
"assets/assets/images/city/3/3.png": "ca010de43d1f3af0b6cbbbc2ea6a375c",
"assets/assets/images/city/3/4.png": "1992e82a0f8c81798e7bbbe8077cfdba",
"assets/assets/images/city/3/2.png": "c063e81b36c684cbb20e26f70a9026c4",
"assets/assets/images/city/3/1.png": "18fc305802d493f0f3930085f821ffd4",
"assets/assets/images/city/1/3.png": "991379784ba9912b89dec60959e9a9b4",
"assets/assets/images/city/1/4.png": "0c0282e10a9ab731ebbae2bc11426d45",
"assets/assets/images/city/1/2.png": "7c2c5cc7030e754dbf5b3e592ae03e13",
"assets/assets/images/city/1/1.png": "4beabffbc0d1a31a0d968c5c0927988c",
"assets/assets/images/city/2/3.png": "a3c93b28ebe20757f7661a6f8e2a4a28",
"assets/assets/images/city/2/4.png": "cbde0b8d407ba979a181ee9051c2b5c2",
"assets/assets/images/city/2/2.png": "c0c85e884edb49c01b5c499ebcc1ccfc",
"assets/assets/images/city/2/1.png": "c35983300147dd7670836f0a15260421",
"assets/assets/images/beach_walk_icon.png": "25662770f2bf7bba3b4b73687f4ac9de",
"assets/assets/images/meals_icon.png": "77b16dbb8582888be54b9b2dcda3e130",
"assets/assets/images/city_tour_icon.png": "0392e695a8d7c6f2366cbdddf65cf00b",
"assets/assets/images/history/4/3.png": "79df1190ed19974ac29e078bc7b0d50a",
"assets/assets/images/history/4/4.png": "bc331b8dacee2d0e55fb53f44ebaa8b9",
"assets/assets/images/history/4/2.png": "fae92e42ccf9f7259d0db0829cc9b602",
"assets/assets/images/history/4/1.png": "ba5bfaac384dc8edd258f1bda7c73313",
"assets/assets/images/history/3/3.png": "e098e55296def9b34c34b2ece0338d49",
"assets/assets/images/history/3/4.png": "89c56342c6c411b9564e00c360d30685",
"assets/assets/images/history/3/2.png": "8eed48d16c9669bbe2bd85668e0ecab1",
"assets/assets/images/history/3/1.png": "b05e38cf181965dc8c7e7ad504a74401",
"assets/assets/images/history/1/3.png": "8b89c6b8aca5e7cd9261688915c3af58",
"assets/assets/images/history/1/4.png": "4a235feb88610c2e7ffd50f9f3d42e91",
"assets/assets/images/history/1/2.png": "3bb7a465f7362f72552d3b0700eb1348",
"assets/assets/images/history/1/1.png": "8bf36ec86d3d121396e9f5ccd6af5fc7",
"assets/assets/images/history/2/3.png": "22911551dd8701036bc9e26046473d5b",
"assets/assets/images/history/2/4.png": "0daf2bd14aab2e8eb4484e7480b6e7bc",
"assets/assets/images/history/2/2.png": "fc421889c147e97dfece0edcc9f6f8c6",
"assets/assets/images/history/2/1.png": "072e1b44a30e9c96f73a0bcd78a3d921",
"assets/assets/images/slider/3.png": "f4d526d0cf558b91d6e106efea96a023",
"assets/assets/images/slider/2.png": "63f21aefce7bab0061821beb9ef9e223",
"assets/assets/images/slider/1.png": "850b50beff28d84c9fc2d90ae72c9531",
"assets/assets/images/profiles/3.png": "07202c5731582d0c70a80edf7dc739de",
"assets/assets/images/profiles/4.png": "fd85d8fd65b511b0687a2d3fdee69303",
"assets/assets/images/profiles/2.png": "f054417ac959f11d113011f82add3922",
"assets/assets/images/profiles/1.png": "17f91aba13180b0173db444fcec8fd9e",
"assets/FontManifest.json": "9f63b9f526741862b6170bf64013f71d",
"assets/AssetManifest.json": "d879dcbe835caf269d0de31cbf302eb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"main.dart.js": "80a1397b521e0fd4d559ce9d257c8df4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "41aed3438c7f05df5670b4b783ffb08a"
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
