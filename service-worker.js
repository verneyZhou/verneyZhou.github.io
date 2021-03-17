/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d36ee536ed01a68ef0915a055624f64"
  },
  {
    "url": "about/index.html",
    "revision": "f4360f27d744acbefd6b9504b0c264dc"
  },
  {
    "url": "assets/css/0.styles.eaed8cbf.css",
    "revision": "9cc2478389ca4017384eb2f2e2c6d7c5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a5ea6527.js",
    "revision": "c526a0145dac73a5d05b00331968d90b"
  },
  {
    "url": "assets/js/11.f58d5a99.js",
    "revision": "f2822eb16c36942abf56fccc9e41024a"
  },
  {
    "url": "assets/js/12.b5643fe4.js",
    "revision": "f70ce310d7304effbc1c7788a28adee8"
  },
  {
    "url": "assets/js/13.3333c8d8.js",
    "revision": "f10f5f51382ae852799e0721af8dae02"
  },
  {
    "url": "assets/js/14.a0fe8879.js",
    "revision": "81395e4a5f0c31751ce9f23560c797ff"
  },
  {
    "url": "assets/js/15.fe7f37e6.js",
    "revision": "960cccface97013ee273ed866c2d93c5"
  },
  {
    "url": "assets/js/16.18fa5fca.js",
    "revision": "43747bfaad6b5e7cfce6f73da51e50ac"
  },
  {
    "url": "assets/js/17.142daecb.js",
    "revision": "69f2d84d4ff51313d907463ca2091ed9"
  },
  {
    "url": "assets/js/18.e78c1fa2.js",
    "revision": "90f25a0629d8dad297ba769ef2137427"
  },
  {
    "url": "assets/js/19.b5079419.js",
    "revision": "ca2820aa5c0f61008977e1cfd127acea"
  },
  {
    "url": "assets/js/2.737ffea1.js",
    "revision": "86b11f0ad598db5d9b18fc058afc3ca9"
  },
  {
    "url": "assets/js/20.87b58246.js",
    "revision": "fa391e9de385f9a222cb7972f02d007a"
  },
  {
    "url": "assets/js/21.74c8b7ad.js",
    "revision": "bc3902fb923c1df527cd2d4e96d082da"
  },
  {
    "url": "assets/js/22.8b6f6f55.js",
    "revision": "d2fd72be80c6eb1f08e2b77108b07ec0"
  },
  {
    "url": "assets/js/23.e5f08125.js",
    "revision": "1af4585f1e2c4a9cc44aadf72fafecdb"
  },
  {
    "url": "assets/js/24.ae794d9b.js",
    "revision": "3486ec8a18c844588f7b150a1fc2327c"
  },
  {
    "url": "assets/js/25.4b5631cb.js",
    "revision": "e9bdc5f734a80f0ade89f60b4c2aa098"
  },
  {
    "url": "assets/js/3.cf2afcdd.js",
    "revision": "08900517df1218636699fce2dcb91206"
  },
  {
    "url": "assets/js/4.ddea65e2.js",
    "revision": "9b0d9f9fc1a9dd7abaa2b3500db3ef1f"
  },
  {
    "url": "assets/js/5.92a5af24.js",
    "revision": "3d1810ee5dbac4ff23975f2b10ebd683"
  },
  {
    "url": "assets/js/6.4704fb1b.js",
    "revision": "77dfd1e893b7bee9913116c9cfbef09f"
  },
  {
    "url": "assets/js/7.e98d0398.js",
    "revision": "57d1018e92774e301742b7ad93379003"
  },
  {
    "url": "assets/js/8.1f9118bb.js",
    "revision": "9ee2e531f45c053811ea0b947116e781"
  },
  {
    "url": "assets/js/9.01c8d200.js",
    "revision": "8346252cd4259b5e19c2e53568560937"
  },
  {
    "url": "assets/js/app.30e4d9b6.js",
    "revision": "f92bee7deaaf9792c668b4139a14ccb6"
  },
  {
    "url": "code/vuex/index.html",
    "revision": "2d74c3d63288071634fec8045ac45926"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "7c3e9c854cd64f6fcfd9a82742514eee"
  },
  {
    "url": "frontend/h5/index.html",
    "revision": "67cbca3f64b491397a91b91584601a67"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "f4145343d4525b918089cad1a326ed1a"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "8589d2b25556ef63a27fec3dbeb7a93d"
  },
  {
    "url": "frontend/pc/index.html",
    "revision": "7c103fb177e023864274e4e0175d3adc"
  },
  {
    "url": "frontend/wechat/index.html",
    "revision": "ad60447db72f7bb1d5da48d1e5744de5"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e02bf7316c915d78f631bc052e0890a7"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "112e1f9e826ac03e52f87a89cedde776"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "de8acfdd7b2ff2551c42ad84decd1ef2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "79b0afc71823309a9ca385e07d82a853"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "cce06f4c16f0f2aa84413dc3131ab609"
  },
  {
    "url": "images/logo_02.jpeg",
    "revision": "2dc1f8002ace6af1ed9df9d255650f77"
  },
  {
    "url": "images/logo.jpg",
    "revision": "db8cdfd2ce1303890decbf2d34f8431c"
  },
  {
    "url": "index.html",
    "revision": "e83e9a3be479271da6fe6d929a35cb20"
  },
  {
    "url": "interview/index.html",
    "revision": "c87bcb6c6bd03603b75888f187d800c7"
  },
  {
    "url": "js/disable-user-zoom.js",
    "revision": "9b7b283bebd1ffc14a829ff290ea1fbb"
  },
  {
    "url": "styles/css/style.css",
    "revision": "3b3eb7dcaa4cf18c7c98eeb11d603897"
  },
  {
    "url": "tool/node/index.html",
    "revision": "554938c1bdd49467e0bb42eb48119505"
  },
  {
    "url": "tool/note/index.html",
    "revision": "cc04cb2efe2225b1b54e841fdbdf7eba"
  },
  {
    "url": "tool/vscode/index.html",
    "revision": "c47d5af30775d59f06d87f68c540b95a"
  },
  {
    "url": "wechat/index.html",
    "revision": "e1337ea897ab3b91004408bae6b76121"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
