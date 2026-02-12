'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2d477196f36d93de966009e51a95a13f",
".git/config": "d105b47c60b718478a67e3f36f82fcc4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "2de99fb1eba5e1eadb9fed6dc3d03b36",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "48d362805567069c08e8cfec58c8c65e",
".git/logs/refs/heads/master": "48d362805567069c08e8cfec58c8c65e",
".git/logs/refs/remotes/origin/master": "09a5fd3b8fb1e1f17a84ad861f182881",
".git/objects/00/af6a61418b3be52934b7766a1d1f746e937a97": "7e5f15a893d4730143e399e9e371c918",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "9a7fa59443b8925d7b787ea6939b9d2f",
".git/objects/02/35f280f5f1cd412cf3bda8a1bde88ad5ee3ead": "b1c7b55bc8f498f5bd9c15e29664dead",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/8b10351fff3d4f6bbc63881c50d5d3b4de03fc": "a567f8c548e2e45ddad1c915007095ad",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/07/1d496ee88de365aaac3ad88def19476f71344d": "dc5ff86a212781bd2e3ba7df7e25c64a",
".git/objects/07/2f2331a5fa893679f0ac79c24a11e3770aca2d": "34405efab16f44da35c60ef01bcb5819",
".git/objects/09/adaab740fd84b9e618424f2de348fe2bb8a95b": "82deba08951a7c4a56c6ea901e7ff28d",
".git/objects/0b/9e35b36315c048ab5f83e948960d7c158ccf8a": "8b9ad96cc1389e8fcec8a2aa3413ee67",
".git/objects/0b/c1f73629392f78474d7f863f025e912b7f4a55": "f06ae6d0fca7047aaa4e6374d22df4f1",
".git/objects/0d/e8e9800d3d4bd9db3da6eb315725913de9b208": "0dc361f48780abc77eb0b07279d09edc",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "5c97d3c4382450b995fd2bf0b10b6c42",
".git/objects/12/66c068fbcb60d05840b6cc2aa6a6cef83e11c0": "f790624046c7ea33559c21f92a7d5ca8",
".git/objects/13/51e7afc08f4bb0510bba667a118c579726e7b8": "ec4078ab455e42a4713945437df512e6",
".git/objects/16/dff69c81ad0e47b91bea39b78bbe0e07022518": "aa8bcd49f59f1b6e14257f205d75ffcd",
".git/objects/1a/b1c4ad2340e4932d3cbb1eb9ddce9a0a7d4643": "a0f54cb52e914e4ec9d41df2a0edc8aa",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "3ec681bd76761614c211bd24c8cc4cee",
".git/objects/21/4dac3ce3fb125aee6c36b2f7a246bee1d13dae": "604b31e2328d18944286f577544899fd",
".git/objects/24/d159892142ba5b6552cf4a218da21a6c6193e2": "77d8d5f55b51eefa2d366b2c8cbaa7d6",
".git/objects/27/86130346f90f08a67bae8080797f427d844a86": "40389ad172740ae918276c606d1a4831",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "99f80d4c240a77ee916c880b7fc4f03d",
".git/objects/2a/bc543cbf44e91d4e72e9bab9ec9377cc1261f1": "54af63d51cf3272b8c5da74b38d0cf17",
".git/objects/2f/204adb2e18938d464536a3e7bcc3a5e80f37ec": "23c58bd6b0c892fa1e3a8fea5a7bc52e",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/30/fb5ed29338559f72c6a50fe598e9fcb6f5cd01": "bba6075c0a31dfacbd40d6cc29505ee2",
".git/objects/32/96d475605478f5de520bd4a5cd457a4db5675d": "1acf4d67fd5328a12319f015e7195202",
".git/objects/32/f6185c6b8f25e5c350d9c3493785af8e9909a7": "596a0da684fdf4df65b27769890d4bf8",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/5e215bd14deedb35b88b2b6148bf1d613282d0": "f303e0b0b00a395c4d651fc1ef6dc2bd",
".git/objects/3e/b58b28c143f546a3b6e48fd810b723110aa29a": "35a376f36c85e95c6c6aa4e6e2fabc12",
".git/objects/3e/e8483143d577422a1adaecefd117775d2faeb2": "c9e2edb5e04336e68b0ee6a23cc215c8",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/740bf0872598b19ec943f130b9ba0db69085f5": "ffc1d52b0fad1d0a48d0c612b614ee1d",
".git/objects/48/f3854ff1c6e75ace840c694f8c03503a8eb095": "84eec2a12780e6a85e17a119e68b25cb",
".git/objects/49/e416059ff63cd4e094b7189f82d738aeca09da": "d1909b2966c23bd8b396c6c078b5c937",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "b1f4803b23aff24fe4dfc22efcea9738",
".git/objects/4b/d2785e851a0458f78d649d85c6fb693bc02ca5": "1621866507a2dc4e47e39440ac923ca7",
".git/objects/4c/fa370ab644209c1eacdbf6a36132e063ecd936": "eb074f2f356cfff89ada7f495ad69283",
".git/objects/4e/0d9f8efb86f69fce020088c7bb426809057e80": "f37c92205b1ebd3f3903b5632beaf235",
".git/objects/4e/8f7b9dbde11e54999ed9a868aa9dc8684acfb7": "13adbe33aaae1b29d1fc2af4a21549db",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/0f80cc966d44aebc0b5d81ad98516c4fc3af82": "8a7f2873a162d87793ac63cfb255b985",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/55/d493e268cf61ae68b31e5304bd51efc9d34b65": "c4f748887f8dba54a6d2efea7319af97",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/e69ead6002bc78455411328fc2972ad9985ab7": "f69d43454e6f5ea29e222d26edca02f6",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5a/15b8bfe35aae32d657ebc98a4ae04809c5013d": "7273425191b7e63695b2a250e9a009bf",
".git/objects/5c/47679f4f3ab91974a3aa617bd0dc46fe428abb": "27fb34097b93b673d3bdfce0d874d4c0",
".git/objects/5c/caa57d87fc68657d295bbdc687da130aeaf9f3": "22e63d14367146e6ff5eac045c0190b2",
".git/objects/5d/5b22a469c0277dae275a8e6b690170ea1e7a3f": "09c0b1f08e00364db13a9442d0bc1e53",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "bb77138b3a7314f7a73f388f2a84d9ad",
".git/objects/5f/6333344075e8bf2f7b668bcae1b9686e87e8f6": "6e4494bdee9ab6e0df9876399438e58b",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/0180e92de0e0e7abc5f51f16e3aa312ef583c7": "74450dd548ec8e6e453ba762c4a2e607",
".git/objects/62/6938735c12c3f36faf7f469ce8687fccff57e8": "8304a8b973192dd7a45e018d40141577",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/8a2a5f6436bf94ce733a7bc7ff48e44fc19685": "6add2973c851dab13951a7636c18ddb6",
".git/objects/66/d07b7bc18c28766b18aff48293372c784210f9": "c9da0f57661ebe42a51692043f77cb7c",
".git/objects/68/ced4d410650b7db287f80ea1632c1922d37f92": "cf8d926ca92b6129dae88530ddd2bdf4",
".git/objects/6b/10169cf1800361aceed70d76d7e2ebcc0ae189": "9ebef994ee7a6870ad60b165057b3f08",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6f/d2905275292eee1c21d03c41c7e5c26e42e3ef": "8fd7d1344feb235cd3ea5a337b26b720",
".git/objects/6f/ed6b15b2153a9dbde1bd2e1b72b13acd2f0795": "bd21bd42515829c94506aedbf50a87c7",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/76/673764c7fca811959e115f9618d26f9ae6605a": "530c4737916327f8b62ae459c8e8ebb9",
".git/objects/77/eda31bbad1d55eac5559cfe9ecf5f95620d924": "7f1c5f3e59aa7e1c41df6c4ff48993d3",
".git/objects/7b/6672d0aaa796631a5056f335b3297d211a6821": "e30db4e53c836e9c5040a50203636258",
".git/objects/80/f350da0337d3d15063b995cae19242a45fda13": "4eb72492b839a552d46cc3d9c1620fb7",
".git/objects/81/10c81ab76c449fdfe60938a9e303b5674b64e3": "db17df1c4de4e0148f0272ed517fdc9f",
".git/objects/85/6b1078160222d4c693e28c2a9ff3300c6158c2": "085d67f96831323c1cc7ab6f59c2eaf7",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/86/c85edcad3af9d88d2177850e2989e3641839c3": "70b19afacd8ca42413134e75f73199bb",
".git/objects/89/84efec75fca2371156529a5a81d4f23ca685e9": "20d45e55e7f28ccbd86d9c431cab6c1d",
".git/objects/8a/278e1c69748ec303518195d380e9f84e472ed0": "d2a18ee9a8cc3717148c72ded09cfa14",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/dddd57fe5fdf4b3b0e44809d4027819185778b": "ac7a9acde6566482355178d355fb9385",
".git/objects/8d/d9d7f915f589d46f7eb76198bb2b6cf14fcc5e": "5468cc2195048fff1c2b05f7ba45e6fd",
".git/objects/8f/28a5392c1222a66e22ca152e880cfa27c32fcb": "d4952dc78b22e819b74de2d2989a9ce8",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/2c532ea0a3f69e330bfbe248f60be1c532807e": "105e1f6b9b045c53b2ec551274f1173a",
".git/objects/a3/ab447b4126fb46dbc32a165700d8e4c179972e": "d99334f5aed9c83a61d955ad9a918970",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/7d35eb79d037ee1a89d51e1bfee185685edd2b": "de7a0ba554c1b33fc459a03c680ad31e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/ca0fc4df600178d3ddc647da2594b221fc5586": "a6c6ac05bba373a611e66eaf6d459a78",
".git/objects/ac/6e843e4190118fdec07209d8652c26e0bca3eb": "f46d8c24129619b59549699290bc96cd",
".git/objects/ad/b6430d8151c6879329bf47ee77df16b12204c4": "851edd6fe0396740eb12b726076cdb75",
".git/objects/ae/f24fac0a796480afd6293cebec096d29bb82d0": "5481a43625b6b5ad5e9afe88b54008fd",
".git/objects/b4/087b2a462b554a5d2ebadec018369d712212e3": "279a065f72bcc7bf5faa3af12e1b876d",
".git/objects/b7/8849aa2955405cb0c04e0b408b7661f3fee733": "e399037d9d7453e16a89c22b8e127ec1",
".git/objects/b7/d9c7c8de13be68fa196a4719ad86251563646f": "65d40b989bba078d46ee8279e01e3bc8",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/bf/290640e9cd435abf90b94379c232b423b4b35a": "602be4875e8998811d2da20df9a73ce0",
".git/objects/c0/78e508596dba1475d64260688959fac7ca69f9": "b6c68446e3fe469be588b2cb43d0ecf2",
".git/objects/c4/d091a232302cef17c43fd70348bf408faa4515": "0e59217a746827ad6657c4becdadb1a6",
".git/objects/c5/8f066ae28f66ff91bc16df895c862bcc636285": "cf395fc82d51120c2df6f91ddbaf344f",
".git/objects/ca/13b289632e9abdf3b8c6e33cc9c0c84d641a22": "d53c09fbda233a2eb6b3aace6d689a94",
".git/objects/ca/1bef62de79f98c4c286ce20da8f65cc796582c": "b7fd2a943f62b06e986a3b421f866dd7",
".git/objects/ca/b67fa3a66812ea91de724147cd6dbd9dad2ec7": "ef3e13eccdc70e2124d76f6a532ac842",
".git/objects/ce/3ff1cee72f0c958fabd18cb5b91d44c6897dbe": "d0e6b3a3d9b980100792d056f5801aae",
".git/objects/ce/a1113ae7ae4a0df53e568fa843a060e76e499c": "9b2f76df7351264e81ce403886176701",
".git/objects/d0/5ef9816f71a310264455ad6b0dd0c8272237ce": "e5b07ad0c6da9a6cf4cc8ad9fda0631c",
".git/objects/d2/e049fa0ebccdb2bc87e00dfa4900fa100cfdfd": "115c540bc21a6e3f0189cb5897221499",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/b76a102e8d0d5aefabf8a212fd2061ffa4f168": "153ef11bdf5f4c43ac7723b1bf1d0dc9",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/958eff1b4fadffaaaaa287d77425614be9b282": "64018705a46e1b2faa89520b17a8f6c7",
".git/objects/d9/be0e501a7bf37117a789c9bed5043de7d97ea3": "ddeef83211ea2fadb8cacc3e7f9e13bf",
".git/objects/db/9a94b6cce0a1c91835cbda64977541e6a5f4fa": "abba739a1961aa5d10ba362e10695a03",
".git/objects/dc/de9ecb9df6893640af8fddd2774f54fb10128b": "4ab830ae566973fe7b70e53a808d4c78",
".git/objects/dd/f39c9ab3948865b9b1640f6363566368e7568f": "be20f3674c769c8628bba50f73a1a1f8",
".git/objects/de/7243bef3888515c7b68591020e42cb689fed3e": "a4a5a52e82922bccda7d613c6017d321",
".git/objects/e4/3cf37ffc96de83f8596b776543afe567172254": "d201e7326c7a220db1b0c9c783c4f2b9",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/e6/a2c130767e4f3b8c85ed8686bfe52c370fd15a": "12a81660ce65a068c1aaf9c2676367b4",
".git/objects/e6/a328cbb1cb60fbfaa7355851e8e9d8b6e28bf1": "68e7771d2fa9acdbf4c7f37cb0abc7f8",
".git/objects/e8/a3e3edf95551cfe49c0d746206afcc80983d0a": "4ea0afe7cbdde86192602ed9508866cf",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/1000c2bf27f0278f2fee7c344157a1f4ef03e2": "cf29da13ee5acdce30018428303225e7",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/e543aa3488885a7059f998a347fbfc134774cf": "fb9431f66095e5300e613e498701672a",
".git/objects/f1/21b5c8af959ff3bce87a96ff4d840db90017d2": "30cbdac7e7ea0d4b55871a792f3cd892",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/0c12e1de5049ccdc36aae0b31f66236d23508b": "b85cb53ae68b96bb8ba76411c7dc6a1c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/1adae076fc5d6e83a459b1488ea986cdb49c3c": "c5f216486635e263dd1553af0ef9967c",
".git/objects/f7/b2d714b2f064858a1f23179b6f4e40b53d88e7": "18f8162d84815e1d608bacc001b69a3c",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/objects/ff/06e14a766e1220f1e3db50a4094ebf791fa71a": "20b71e11108d0393ec2ae9427036fa60",
".git/refs/heads/master": "29062b51f9fa197f9e6a3e56d4131346",
".git/refs/remotes/origin/master": "29062b51f9fa197f9e6a3e56d4131346",
"assets/AssetManifest.bin": "3b546310590a357a4d4006a1ca41e788",
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
"assets/fonts/MaterialIcons-Regular.otf": "ae95bd0a05598ef2ca7f75eab28ba0f3",
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
"flutter_bootstrap.js": "590562d2b8bec0a19cdcd5015f94faf0",
"icons/Icon-192.png": "ede9dbd4c6aea0ada44e980c17a366b3",
"icons/Icon-512.png": "1a0432a79e981e22d4737acadcd11ddd",
"icons/Icon-maskable-192.png": "ede9dbd4c6aea0ada44e980c17a366b3",
"icons/Icon-maskable-512.png": "1a0432a79e981e22d4737acadcd11ddd",
"index.html": "9eef911f527ee33f45bbba70e142dd55",
"/": "9eef911f527ee33f45bbba70e142dd55",
"main.dart.js": "ca4040cf8877a299c8494e61ac4f6099",
"manifest.json": "34d7a93a24a9edfdcbc76b9763f73a11",
"version.json": "656071a55a84723f0e49a6e20b3b9ddc"};
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
