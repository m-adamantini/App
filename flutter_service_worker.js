'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2d477196f36d93de966009e51a95a13f",
".git/config": "d105b47c60b718478a67e3f36f82fcc4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4b23bb5395479b286786f7d5a01f8476",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f99efaca3d69a94af38bb48d0331b57a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5679f43695b4b5a79a2bfc094167f314",
".git/logs/refs/heads/master": "5679f43695b4b5a79a2bfc094167f314",
".git/logs/refs/remotes/origin/main": "c29c4e24056d54b91d6e472902176708",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/caa7a33785eda2213dd9adadeecce95cdb4c60": "df7263e0334657a269a6ec2c0c2c4c22",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/1862883c31a49fcd574ba0e2abb8a3abdb8c92": "838b652d5537971c61b37225c94cba27",
".git/objects/09/df903b88683d6178adf0d09e1cc9d6caa3ebe3": "995fb017612e86c7656f90114e531c88",
".git/objects/0a/8bdc8e56b6d714615d39034b3fca78ae2d9539": "75c0f271422db031b0d77e936625b899",
".git/objects/17/726b2049aeeb40c42bc9838b0ae4275a2bc7d3": "a8c1d115b3eb74d2eb6b148a3a9612e5",
".git/objects/19/d813e818f0293922e1f0e6be1b6a96be1232fe": "01254425a53c5b6ea7e34d75699e82ca",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/fa5e4c32ef7e56073c3c2f6e366940d5ae5fdc": "2f40257f0335c44af8eac0b92d7da804",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/1cd520dc8685fcc8924a03b44f9c8da9452e8e": "7746ddc315b73e1555b5c4d09b7c15df",
".git/objects/2e/a0ef2c520ddd14bf86358256d96a7c520101e1": "05967bc5146e9100bc19cae07501ebe2",
".git/objects/31/177da8d813d23fdbce2174ffa81f132bccc118": "06042a1ac2f3a7bd23c06a3558b8eb17",
".git/objects/36/403706aec5499e945d85ed39e007d2acfa3139": "4c7ee90556d4305069d10dc670997fa1",
".git/objects/3a/ef368cf9a74277952b989d49c4ffa5a38854ca": "d9f3fbc11ed21a8e6abe91db3e870bf2",
".git/objects/41/342b9014f3b00f87960cefa738e3b3a66c8f17": "747852bb9336034b4d71c632d08155a4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b8a5a6497dff4e9e2ba72b800dc0353e567b8a": "5e90aad443606ee5499bcf55bce6025e",
".git/objects/46/edd15f285f589301e39315277a1f2433e7627c": "5445762d56ed625041191c4deca33735",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/4e/d14078791b4baa734300c31995a917d18ea84e": "00a7c330dd4e6a6df97db2d02ae00d3b",
".git/objects/51/e7da80b41553e231f1d8470ccadd31bde4380a": "9397ed7e8d8be6d147e1b2ec0ddeaef3",
".git/objects/52/72a680db1d46031f09ee40e8bd61da3f8286d0": "bd116b3d678e9a9f5e218d1cfeedab4b",
".git/objects/54/0087945d4cfe7136a668172d403933e5c80919": "7e76d1c0c5bd0f6dc493691a2d241778",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/58/8b3daed1a860457efd4cc3026852b04e21924f": "7fd2bd9aca6bfae5910fc9af011e2e17",
".git/objects/5a/a2ba308758a42d2189d81f18895bad645bb9fc": "937aa75e27cb4b1dfde8665fc023b62e",
".git/objects/5c/caa57d87fc68657d295bbdc687da130aeaf9f3": "22e63d14367146e6ff5eac045c0190b2",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/67/db5cda206e88c21c5a2500280d8f56230f1b35": "383501f1b46a9767f9a5e8c2b3368c6b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/49b72ef9e1421dfc79dca33f465d80e61cc14a": "829a879469d8140632cf8fd4b99aa81e",
".git/objects/71/2ef66f2cf28b398b2fef7a2ae26b15f98fa364": "19b5863a9bfa7620ad3357fbd3b5db34",
".git/objects/72/ddf9df7f0876d550dc955f2fd29f0c7a52850b": "2129b25757dbab98e3bbb2ff78b1939c",
".git/objects/73/730cbc726dd04c26a17ba15a66af90fadbe5c3": "2937f543768b28153eca6b4695f78f7a",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/962515c7631fe558e6371aa67fd9fd9775348e": "0c5537d02f4650dec760afb394f3893a",
".git/objects/7e/864487fedb9f474f123a02c82ae56d2fa83eed": "dadaf9ff0bff44cbfd41d82502ead944",
".git/objects/80/0c6db628523c82e86455ada8ff0ee5ef40e710": "dc0752ab3f189515cc8631cb517bf966",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/53deda9aa3ab38e4d7c0d8735bfbc7fb7ae690": "825e69f31c219a73ec81c6b34c8a3f81",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ef14a52aeb37db452b866ef5b636fc8da83bb4": "16feb515bdca770a34daf261e82e530e",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/59065e05380a77da1512bee99329b5ca6213a4": "27d9ed1f6a0f6b4b02da4169beec94bd",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/8d1d08ab59d364184dd829b4bd45f134e88819": "aa1e4f47e12be9d96ab97185195a2161",
".git/objects/98/f33038344e568ba140d71127ed1c935b244b16": "1c047237a48edc0d03775b1411e77f7b",
".git/objects/9a/2c9eacc06138743a760589427052bdee096bfc": "281d185d984287a057d7ccc0d1152ad5",
".git/objects/9a/7921783499cf57132ce59910df6d6e1fad5d5b": "c065600221689169f5c106c13d665133",
".git/objects/9e/f79c024a7cc4c76a8c99a8cb529faa77c3bc44": "1ee25df2282ee93276296862435d74d1",
".git/objects/a0/02be57539e41b4071ee7882f3ebb13a261a693": "9b1c33d41451b800e051cc111bfd1dc9",
".git/objects/a7/ee5a63b8284de5a900a5a2545f8b286d7072c8": "92c04d1f84a1fc1f145be458c713ba4d",
".git/objects/a9/ca0fc4df600178d3ddc647da2594b221fc5586": "a6c6ac05bba373a611e66eaf6d459a78",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/4994aece1c4c55caa75e59f7cb1010fa0169d3": "d02fc9a91c898a75218862071a81e70f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/ae9616b0ecdd30daa6cf1c5842f597cc456891": "748e9c16ba13867a8775e1d1197a40c5",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/6377ab28df08b521e79c4fc2b3e5f35976df82": "b3e8420024009c22a2553052a479c1dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/8f066ae28f66ff91bc16df895c862bcc636285": "cf395fc82d51120c2df6f91ddbaf344f",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cf/2cd9060bca186bb30a90970d802b6b45ff9d6b": "ad0500f4077c22e9dfc1293c52115847",
".git/objects/cf/50027565c8c81bec86a3d95e735867dee0a447": "eb93cd13ae814e541427f30a1bd244b7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/cb62ffa8ca981b8500e7475e0b8e8c945e3b7b": "a29fd581ea893118962609f9038b23b8",
".git/objects/d5/a1eaad94bae5f8469b76ac547cd4ac091d0d23": "679b39bed58f80b5acf9472bc675cc90",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/4dc9ceaa97898901a4e1e5e1e49c8230a37188": "fb9837f11fac876396e22d79c9d9600d",
".git/objects/e4/200ebfbe6224c71fb0251938bc4b0e73b3050d": "a0934e8cbdbbd51ba6843986e9f81fe4",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/05238158ae2bc69cfeba873eba7b6a24b127b5": "a718c20db78d672cc9857555d44de8fb",
".git/objects/e7/c3847c3479d173b68b79f26483f11ecfd18960": "f02df2261b1d4499a27ca91f6ca95ba4",
".git/objects/eb/48119f5b7c47ecb31a55963ca6eea5650de77a": "d3fb40ce8715ded59c498c5fe46874df",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/0c12e1de5049ccdc36aae0b31f66236d23508b": "b85cb53ae68b96bb8ba76411c7dc6a1c",
".git/objects/f7/8787f3c7c208c7632f9c6a256c8362d3abe118": "5dff4ce3ec53ac23e5da000686643214",
".git/objects/fe/6d3234fd9ed3b6153a3eedb85fa3bb9949ef03": "731038acf7afe051d5c1a88c7bdec835",
".git/ORIG_HEAD": "845defef8dc6227c31d0cb09e792a054",
".git/refs/heads/master": "845defef8dc6227c31d0cb09e792a054",
".git/refs/remotes/origin/main": "f87a1fe8cea7d440bfb1af03bfc58215",
"assets/AssetManifest.bin": "a1190caec8a2e0775d50e2cfd7bc0c2a",
"assets/AssetManifest.bin.json": "d3dfbc34b7cf0afcef5851de6c61ea6e",
"assets/AssetManifest.json": "16d13c738876e66f0039863510986fb2",
"assets/assets/animations/list_check.json": "2c272dcae5d387d98a3284afb94818b3",
"assets/assets/animations/particles.json": "8583a696df7b9249a32b2d91f604f820",
"assets/assets/animations/settings.json": "2247fe361b5205c4dc672150f92294d2",
"assets/assets/images/scritta_bianca.png": "65664ef97badb7bf1129937da02d9a54",
"assets/assets/images/solo_logo.png": "4786ecdf6ef48f87737d611bdac43572",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dceea038244eda67b550aade48705491",
"assets/NOTICES": "8065d20a56f4d00640bcc02bf9e74c9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "483c3507bc21e7063facdfdfeb9faeee",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "723f748181a3e894199399625badf228",
"git": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "fb257bf39727a3bfe145a109f7860a56",
"icons/Icon-512.png": "b36e30796f56d4c4e9fe63dbf046f9e8",
"icons/Icon-maskable-192.png": "fb257bf39727a3bfe145a109f7860a56",
"icons/Icon-maskable-512.png": "b36e30796f56d4c4e9fe63dbf046f9e8",
"index.html": "c9421c5607dbb1e53ebd1ad75f2dfe7f",
"/": "c9421c5607dbb1e53ebd1ad75f2dfe7f",
"main.dart.js": "99287e2ae6f1c64263aa3ae79e91679e",
"manifest.json": "34d7a93a24a9edfdcbc76b9763f73a11",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
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
