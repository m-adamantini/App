'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a284744dc726a255ab0142f8a11360f3",
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
".git/index": "62a1d71151ca9cddd0a4efa71e4a1efd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31d97725dcb2f337dcc2be0dc5962b38",
".git/logs/refs/heads/master": "a1aff72486569d3d4dade394bf76984c",
".git/logs/refs/remotes/origin/master": "e35e7118d28f2c2f680518752265e719",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "9a7fa59443b8925d7b787ea6939b9d2f",
".git/objects/02/f18040ac97d13a2b4b17506b4b5202ad644ab0": "0eef55892f8efbc0f390080ab949a648",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/05/c0af0d840ae9a5c8a35f89fd41d3358f91cea3": "e5586529ea57309f100dc6eceb4e3603",
".git/objects/07/2f2331a5fa893679f0ac79c24a11e3770aca2d": "34405efab16f44da35c60ef01bcb5819",
".git/objects/07/8d08cc720eabf355273102c933f2687e1676cd": "47f16efb249ad52c246eb94de8b6529f",
".git/objects/0a/31ec8df6f39565e9736e03308deab70d79c80d": "b38785ff8b1e3c2bc77be39f28934ff8",
".git/objects/0b/9e35b36315c048ab5f83e948960d7c158ccf8a": "8b9ad96cc1389e8fcec8a2aa3413ee67",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/c1f73629392f78474d7f863f025e912b7f4a55": "f06ae6d0fca7047aaa4e6374d22df4f1",
".git/objects/0d/e8e9800d3d4bd9db3da6eb315725913de9b208": "0dc361f48780abc77eb0b07279d09edc",
".git/objects/0e/64bb8c7b9b1777e72ded6e529d418345559423": "d68034869dd946d7974f05412fe9915f",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "5c97d3c4382450b995fd2bf0b10b6c42",
".git/objects/10/84e621de1bc77796a9c1ba45fa6bc74f9a48dc": "5c7a86bda5c9412a7c92ee0c0c16d8a5",
".git/objects/13/51e7afc08f4bb0510bba667a118c579726e7b8": "ec4078ab455e42a4713945437df512e6",
".git/objects/16/dff69c81ad0e47b91bea39b78bbe0e07022518": "aa8bcd49f59f1b6e14257f205d75ffcd",
".git/objects/19/81dd6d51cd64820ad237c2a7b9ec591f81bfda": "908c411f1c030d99e95beaf2ac846f07",
".git/objects/1a/0a25288372e8ecbc9ab03eeb58cd0691cf728d": "11d925d0e8568c5b8cdd39048c6db3c5",
".git/objects/1d/292d8e3cde83bc2afca5e3828c58cbc167b27d": "f4fc5d0ad73558a54e3be360cf9441f1",
".git/objects/1e/04bcfed863d33794e39a5d569e16d7643434fb": "3a282f23bcc817af857ecbbc4f017012",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "3ec681bd76761614c211bd24c8cc4cee",
".git/objects/20/5d5e916104dcf806ca7bd6b5603a3e63654077": "111919a9d9a17123b59665e423f72094",
".git/objects/22/921f96457b5c788aa7dd373ff86b7049e6731e": "ce0118085c549dde6cbf8e3a731750f5",
".git/objects/22/df4d29f9f4213bcb35566a5e0bbf94dc8ccbbd": "cb3f93b152b33b6031b81941468e8549",
".git/objects/25/a47ca876de52dbe472dd09579eae861387a7f8": "f29b2dd4e602dae93a29131e46a71e78",
".git/objects/26/17b80809af8627d402fcc591ca41c9353b54a0": "a9b5035be3ca885e5a99447c278a5baf",
".git/objects/26/666a29700b7ec742812b3c91bc29b8f8bf62ef": "445c018d23b957936fa3d7846708dd7f",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "99f80d4c240a77ee916c880b7fc4f03d",
".git/objects/29/80378aec4ade2d6e2d5afd0a564a972bc2da34": "4e40f93bf2eca3bbbc1993b05dad3624",
".git/objects/2a/46e38080bab6fe17105e4801453c85d72b8492": "c3808173ae646476931cb9a92da93f05",
".git/objects/2a/bc543cbf44e91d4e72e9bab9ec9377cc1261f1": "54af63d51cf3272b8c5da74b38d0cf17",
".git/objects/2e/247dfed91cee24188ce87cafefa2c89219bfc1": "123b4faf3b8bc8f89ba7c912574187b1",
".git/objects/2f/bdc3cd5f405af37fa41b59a94ab1c4f86a49b8": "a7320dd9c2c49c44b398aa005a7c2f9e",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/30/fb5ed29338559f72c6a50fe598e9fcb6f5cd01": "bba6075c0a31dfacbd40d6cc29505ee2",
".git/objects/32/f6185c6b8f25e5c350d9c3493785af8e9909a7": "596a0da684fdf4df65b27769890d4bf8",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/d71c6060c16ff138051849f07db955605531aa": "83a7e3054ed39ff5d1883895f1094ed5",
".git/objects/3e/b58b28c143f546a3b6e48fd810b723110aa29a": "35a376f36c85e95c6c6aa4e6e2fabc12",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/6429eec506907bae60388ecd61724241725e4e": "e77bb64e6fe75139d135f367f16d721c",
".git/objects/43/799af8ac07b06ba025187b0945c3e5eb5d1b16": "4b3e24e2009412b0885e5a3c0696528a",
".git/objects/46/60809c4e5c0dcb1053939126a48d94a82bfbc6": "e7e995f0c0329d922dc511227d827a5a",
".git/objects/49/e416059ff63cd4e094b7189f82d738aeca09da": "d1909b2966c23bd8b396c6c078b5c937",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "b1f4803b23aff24fe4dfc22efcea9738",
".git/objects/4b/9493e1c3f9b233a6ca6ee72ca406a1682a8d97": "79b863307964ea2c5f02a584f204fa69",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/0f80cc966d44aebc0b5d81ad98516c4fc3af82": "8a7f2873a162d87793ac63cfb255b985",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/97dfc503fb50f9099dcdca9319150cc15c0309": "7e30f7f9a05c78b616bf465bd63051d3",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5a/15b8bfe35aae32d657ebc98a4ae04809c5013d": "7273425191b7e63695b2a250e9a009bf",
".git/objects/5c/1fb45fac6c262ed512dd3c78677bcf831d5c9d": "41bf6eb269915eef8d900ede1e8ab0b4",
".git/objects/5c/caa57d87fc68657d295bbdc687da130aeaf9f3": "22e63d14367146e6ff5eac045c0190b2",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "bb77138b3a7314f7a73f388f2a84d9ad",
".git/objects/5f/9e997adf9fc87353fe54893a922e4a6d610016": "70f3e9528389f9b591f5da5e11209317",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/533e7d56b153bee6d009cc81f939ec64e53707": "8eb50c008d92e453a68ee8fcac99daf2",
".git/objects/66/8a2a5f6436bf94ce733a7bc7ff48e44fc19685": "6add2973c851dab13951a7636c18ddb6",
".git/objects/67/1aa71f182f9480a0c9a68e0bc18ae3a64f33a2": "b633f7fdf4202e23c54b015a618dc792",
".git/objects/68/ced4d410650b7db287f80ea1632c1922d37f92": "cf8d926ca92b6129dae88530ddd2bdf4",
".git/objects/6b/10169cf1800361aceed70d76d7e2ebcc0ae189": "9ebef994ee7a6870ad60b165057b3f08",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6f/ed6b15b2153a9dbde1bd2e1b72b13acd2f0795": "bd21bd42515829c94506aedbf50a87c7",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/75/087f6b01f785d5f00bfc2d810160432d54dff7": "7322daaa54c874ba363456cbedd0f792",
".git/objects/76/62ca9c14c8206e3832197ecf5f6ff19cb4028e": "7115a2df9c9d6430e29a63e8b3adb265",
".git/objects/76/673764c7fca811959e115f9618d26f9ae6605a": "530c4737916327f8b62ae459c8e8ebb9",
".git/objects/76/ac0b76be51b5b63fe2b31aebecb053f7fce98d": "3fd305131a804cfa600554261ed36d75",
".git/objects/7a/452af1eec94090e0759c199d72c269d604f063": "2dda03a249f2bae24b0c29f2dfe66737",
".git/objects/7b/2ba9e15fcc4ae80bdc1466de730533041fce3b": "8350c3077d54ad18b1cbdd73e32184ee",
".git/objects/84/f3f48b399efb54e0d504465ab2273a7762a5cf": "b1c581eaae46f0410704b03b99ab2093",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/86/3e536293c3464bbfe2b246c652389507f41bad": "f3fb535fb4503e4e2cbf97f10fdafcb8",
".git/objects/87/582e7402039fc80c6f133d400dc5e2e7dc84ad": "9efaeb0c037461c12afcdec4dee38aaa",
".git/objects/89/84efec75fca2371156529a5a81d4f23ca685e9": "20d45e55e7f28ccbd86d9c431cab6c1d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8e/0966253ba97b748db7614c875b02412798a943": "49d251fcb683a5b4345a9fd30b96599f",
".git/objects/8f/28a5392c1222a66e22ca152e880cfa27c32fcb": "d4952dc78b22e819b74de2d2989a9ce8",
".git/objects/90/8673ec15a52eaf833d93eec6a3e83d4531ed8b": "6b2f6caa543a22cad6ea8b014d8fa2b1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/9cc98ad375dffc338d7bb789896ba67c4132fa": "527c745434d1ea98c612d7aa1738fb58",
".git/objects/92/6987b3e4e59ff3d5ad2be86281a3a727b06f81": "a4c31bfed4765ee349431e5e3beb78ff",
".git/objects/92/ba776476ca595bf2e724d02a95ce22648b8f87": "7c11fadfde45597c63185111072b62d4",
".git/objects/94/1d3546e0da7c91b0dbb2bcdd66c09840a23254": "f665f23bfab880b2618919597af2bdc2",
".git/objects/97/3f66e6cf42a5210e8d7152a09dd59123b5d373": "0b486eb6c5a2060aa253566fc5c43ce4",
".git/objects/99/911b86fb35861d20675ed525f022b453cf3117": "8369ab90e6c46c82880021c8b69166b1",
".git/objects/a2/a7020bf0ab467a41b7a19e93ee809f1703b99f": "0dcade1ebd117034691f3bc48037afb5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/de56f3b4aa466d6c580413b9c2cd64fdd077f0": "717d4864b0129f91733e566dab2e4ede",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/ca0fc4df600178d3ddc647da2594b221fc5586": "a6c6ac05bba373a611e66eaf6d459a78",
".git/objects/ab/af72f2a8dde97c1fd9f312e5245c113ec370fb": "2551ab649392ef28fe0a2b28b90071d7",
".git/objects/ab/bd742059f83b4e4a98a3ea05045fb90b2e33a2": "1ce51bad0d3dc7025da02e5ed1f269a9",
".git/objects/ac/6e843e4190118fdec07209d8652c26e0bca3eb": "f46d8c24129619b59549699290bc96cd",
".git/objects/ac/ef58a00732ebc43c3f9a5bb6f088cb74270bb8": "f9e86d6c70567033d3ee823f5edde481",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/2e507cebbeae79f34fe0e2801b3e83aaa1a666": "0a97664ccfe93c76cd276d4d9e2d26bc",
".git/objects/b0/5741beb2cb4a1a52c98b152c0b73a46f616755": "725c8b6942becff6f439a1486309fc0d",
".git/objects/b7/8849aa2955405cb0c04e0b408b7661f3fee733": "e399037d9d7453e16a89c22b8e127ec1",
".git/objects/b7/d9c7c8de13be68fa196a4719ad86251563646f": "65d40b989bba078d46ee8279e01e3bc8",
".git/objects/b9/3065d6df3d8f2d4b1adc466fc6b14b60f7ba3b": "7b29e4b05968085b6c7dd3bdfa49b59a",
".git/objects/ba/3e1404418f6fecbef80a1c8b6d825a4dacac50": "2128604daa2a3e6520d5e4c0addb1d1c",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/c0/78e508596dba1475d64260688959fac7ca69f9": "b6c68446e3fe469be588b2cb43d0ecf2",
".git/objects/c1/709cfebdf0192dc4b40a5acd1ef31c19d5b0f7": "8ff66b4ba4b89b66966ad06cd285c43f",
".git/objects/c1/f52bb9e194ee75d1252a853b60c3e7fbd9af0c": "b2b68d422e8b9c108fc229f0b84dbdf0",
".git/objects/c4/64e99ddd68ceba1d2afd1febeb6d127960bff8": "fe6c4c63f285d0898dfab274f1611a31",
".git/objects/c4/d091a232302cef17c43fd70348bf408faa4515": "0e59217a746827ad6657c4becdadb1a6",
".git/objects/c5/8f066ae28f66ff91bc16df895c862bcc636285": "cf395fc82d51120c2df6f91ddbaf344f",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/a1113ae7ae4a0df53e568fa843a060e76e499c": "9b2f76df7351264e81ce403886176701",
".git/objects/d2/e049fa0ebccdb2bc87e00dfa4900fa100cfdfd": "115c540bc21a6e3f0189cb5897221499",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/760717f9910f8f78e01f41c2131a5593594021": "8d164f0c08ad5e200ed4ca835e422304",
".git/objects/d6/041e04e2653eddb963ad3ac499f739963fb1c8": "63fc06286f1434c3d6a2d674fa55ad31",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/958eff1b4fadffaaaaa287d77425614be9b282": "64018705a46e1b2faa89520b17a8f6c7",
".git/objects/d9/983c75364a9a483030e6222bccbe45419c0d9b": "06e4cac2a19cb86d9eb4b5ed761e4885",
".git/objects/dd/a15b00ef66f3a7143c94ec4f863a55341b1abf": "6dd1630481dc1a9e66f44967cc751471",
".git/objects/de/7243bef3888515c7b68591020e42cb689fed3e": "a4a5a52e82922bccda7d613c6017d321",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/9fbc5fdd64788cdf5ad1ed4bf7d9e671effc62": "608f093b90b8930c22c20e97fc576e25",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/e8/8cad0b021f8707b80ad5f43c46e2cddd29a6d9": "716b1cbda028dbf098343fc8ef08a83c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ee/607c3ba064836df4f3340e6c96784f014a0cd1": "670c01a7439da7866994d2798e8e727c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/e543aa3488885a7059f998a347fbfc134774cf": "fb9431f66095e5300e613e498701672a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/0c12e1de5049ccdc36aae0b31f66236d23508b": "b85cb53ae68b96bb8ba76411c7dc6a1c",
".git/objects/f5/6a714fff3533950e4f074ecc22d6aa34d144cd": "beab78cf700c2e214b270c05021776a7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/62873b9f05480d9f554b0c71621b76e074bafa": "3af28c0b8d4dc33db478100bffa9debc",
".git/objects/f7/b2d714b2f064858a1f23179b6f4e40b53d88e7": "18f8162d84815e1d608bacc001b69a3c",
".git/objects/fd/b5e9d49544b6649678d6400572d3a0b8e36561": "7fd5ff56fed2580ea2874da763b07716",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/objects/ff/06e14a766e1220f1e3db50a4094ebf791fa71a": "20b71e11108d0393ec2ae9427036fa60",
".git/refs/heads/master": "c0837f2bdec030b7f5d7730b2c0cf437",
".git/refs/remotes/origin/master": "c0837f2bdec030b7f5d7730b2c0cf437",
"assets/AssetManifest.bin": "e51e6d2bd0e98cbef4aef18b6cc6f6bc",
"assets/AssetManifest.bin.json": "01ba094de829d79873d2a0319dc779fe",
"assets/AssetManifest.json": "fd8d40e0379845e9f1ccba18618bc9e7",
"assets/assets/animations/list_check.json": "2c272dcae5d387d98a3284afb94818b3",
"assets/assets/animations/particles.json": "8583a696df7b9249a32b2d91f604f820",
"assets/assets/images/alien-portrait.png": "7e42ff9f8b7210d82056eacffd6d7a40",
"assets/assets/images/alien.png": "de9d2181af2b90d4064148c7f1d09a1d",
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
"assets/assets/images/logo_clienti/00353.png": "3c94a09c7c43e7792108e61eb3d18846",
"assets/assets/images/logo_clienti/00354.png": "faba589abc8bf9f95a53492a53244d4b",
"assets/assets/images/logo_container.png": "308ad1e86151e9d31d24a3fe44b83fc9",
"assets/assets/images/logo_ordini.png": "0ba5f0bddd15d613e341aecab163e85d",
"assets/assets/images/logo_personale.png": "99bd8c1a21989230325717fad354c98c",
"assets/assets/images/logo_samples.png": "e09023d499fa781df41696d6ba65183b",
"assets/assets/images/logo_trasferte.png": "2f6b7572051ca9afc0e3a0fccde6aaa9",
"assets/assets/images/samples-portrait.png": "bb2ca91e5c0a547e310da463bd8c3365",
"assets/assets/images/samples.png": "41e6bbbc2122b89f60998136cbaca082",
"assets/assets/images/scritta_bianca.png": "65664ef97badb7bf1129937da02d9a54",
"assets/assets/images/sfondo_clienti.png": "3a2f02742b5937848aaa45bbc1309c1e",
"assets/assets/images/sfondo_employees.png": "dcd98bad6f8a1b544ea6b2331cfdf6e7",
"assets/assets/images/sfondo_employees_portrait.png": "428bb5b5fcde6b1a0e5b4455c3c389ca",
"assets/assets/images/solo_logo.png": "4786ecdf6ef48f87737d611bdac43572",
"assets/assets/objects/cassa.obj": "f2f6548e8f60b3501bcc77c030073b5e",
"assets/assets/objects/container.obj": "b77e1c3ff4b0c85e84c9e63d09cd6c62",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "7b5376eaa578949a872b18bd87a73265",
"assets/NOTICES": "8aae44060626c714d3e1f38b07264a08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"CNAME": "0a54ad35b5bd362bf7035d91979883fb",
"favicon.png": "4b4e0ed369ba52d3730a72f0ebccd687",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3109c0dbcbdd570238e1a644ff2dbf40",
"icons/Icon-192.png": "ede9dbd4c6aea0ada44e980c17a366b3",
"icons/Icon-512.png": "1a0432a79e981e22d4737acadcd11ddd",
"icons/Icon-maskable-192.png": "ede9dbd4c6aea0ada44e980c17a366b3",
"icons/Icon-maskable-512.png": "1a0432a79e981e22d4737acadcd11ddd",
"index.html": "9eef911f527ee33f45bbba70e142dd55",
"/": "9eef911f527ee33f45bbba70e142dd55",
"main.dart.js": "ed102832358822795e477e77c9366a71",
"manifest.json": "34d7a93a24a9edfdcbc76b9763f73a11",
"version.json": "c4522b5e327fe1fca5bf69a5c5d1a695"};
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
