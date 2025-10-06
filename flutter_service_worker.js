'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3b546310590a357a4d4006a1ca41e788",
"assets/AssetManifest.bin.json": "1b8a546b7b2f6800c56a67c410921b2e",
"assets/AssetManifest.json": "f8ed454b6b1480736d6653b4fd923512",
"assets/assets/animations/list_check.json": "2c272dcae5d387d98a3284afb94818b3",
"assets/assets/animations/particles.json": "8583a696df7b9249a32b2d91f604f820",
"assets/assets/images/agosto.png": "b3bae46e6839fd9981f7aff92ed27846",
"assets/assets/images/brflag.png": "fde6d353ed8da0f4d8f0b373a34bec65",
"assets/assets/images/itflag.png": "00022fde4be3ac5103feda1ca1488b9c",
"assets/assets/images/logo_clienti/00022.png": "db7aecc58d8ec55ae843465f994170f5",
"assets/assets/images/logo_clienti/00037.png": "1e3595eec1e3c0978ec6395b893592b7",
"assets/assets/images/logo_clienti/00038.png": "be5f2214e809da966a4d33cc6013bb08",
"assets/assets/images/logo_clienti/00042.png": "27c0d80e9928e7974a980b847973c6c6",
"assets/assets/images/logo_clienti/00059.png": "7bb69de8a9d77e0b96b12d304d53f352",
"assets/assets/images/logo_clienti/00062.png": "f37250af3cfaf22281d4115c82b73d75",
"assets/assets/images/logo_clienti/00069.png": "4500278ed368dbc241f875aef302f6aa",
"assets/assets/images/logo_clienti/00082.png": "cfd9f2efe9bc826db33a82be2b33ba2e",
"assets/assets/images/logo_clienti/00109.png": "864a92eb7edad9005b74b3ca36f64f79",
"assets/assets/images/logo_clienti/00112.png": "88ecef6dfa6df337779ba01442aed98e",
"assets/assets/images/logo_clienti/00139.png": "ae6b13a7fd2be4ce6a8b743494cc933d",
"assets/assets/images/logo_clienti/00180.png": "f7986a440fe3e0a6cf74b207e89e4b28",
"assets/assets/images/logo_clienti/00191.png": "4ffcdf0da5e5a60b496db87dee91285a",
"assets/assets/images/logo_clienti/00206.png": "e16e645ba39c4b57b20c79d480bc637c",
"assets/assets/images/logo_clienti/00245.png": "f75eb056b6e663b5387baea7882031fc",
"assets/assets/images/logo_clienti/00246.png": "7bb69de8a9d77e0b96b12d304d53f352",
"assets/assets/images/logo_clienti/00251.png": "6cf2cd41a39b76bb7637ea194a1655c0",
"assets/assets/images/logo_clienti/00260.png": "0f9dfedf2fe8dedfb122fc387f8d473d",
"assets/assets/images/logo_container.png": "d6a6d24813937a16168cf7b4eeaf4d24",
"assets/assets/images/logo_ordini.png": "bbd8d97b02830cfe1f6c0c7513efc30c",
"assets/assets/images/logo_personale.png": "250fce5e250b1dea4feed55b0fa1d0f6",
"assets/assets/images/logo_samples.png": "dab7b521bd1b4df77e013477858343c4",
"assets/assets/images/samples_sfondo.png": "cc4c70d1bae2793860751d192fbaca25",
"assets/assets/images/scritta_bianca.png": "65664ef97badb7bf1129937da02d9a54",
"assets/assets/images/sfondo_clienti.png": "3a2f02742b5937848aaa45bbc1309c1e",
"assets/assets/images/sfondo_employees.png": "78fd9747cc3c67c39e826afc167b9277",
"assets/assets/images/solo_logo.png": "4786ecdf6ef48f87737d611bdac43572",
"assets/assets/objects/cassa.obj": "f2f6548e8f60b3501bcc77c030073b5e",
"assets/assets/objects/container.obj": "b77e1c3ff4b0c85e84c9e63d09cd6c62",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "4ca83c32c4498b9a58119ceee5de8a07",
"assets/NOTICES": "dd0c4987517cf9d1f01af966aa134e57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "4b4e0ed369ba52d3730a72f0ebccd687",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9259918955cf14e618896c3c9eb7c83b",
"icons/Icon-192.png": "ede9dbd4c6aea0ada44e980c17a366b3",
"icons/Icon-512.png": "1a0432a79e981e22d4737acadcd11ddd",
"icons/Icon-maskable-192.png": "ede9dbd4c6aea0ada44e980c17a366b3",
"icons/Icon-maskable-512.png": "1a0432a79e981e22d4737acadcd11ddd",
"index.html": "9eef911f527ee33f45bbba70e142dd55",
"/": "9eef911f527ee33f45bbba70e142dd55",
"main.dart.js": "9f3b856fb393e02c60ea84a158fc009b",
"manifest.json": "34d7a93a24a9edfdcbc76b9763f73a11",
"version.json": "3aba159f02e6731dd0dd880eb581c3a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
