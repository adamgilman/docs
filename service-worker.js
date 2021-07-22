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
    "revision": "9b7fb352df95ece5413602e9d43451c0"
  },
  {
    "url": "annotations.html",
    "revision": "9c9b619a9472b347b04a61e9a1e69621"
  },
  {
    "url": "assets/css/0.styles.8095d402.css",
    "revision": "23eb5fe01105536e3e2c7c08b49cebac"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.006bbd57.js",
    "revision": "af18055309cad434c1d5b5e90c86b8ef"
  },
  {
    "url": "assets/js/11.b613c56a.js",
    "revision": "4ca5dcf955ccfa67308e2278bc57cb78"
  },
  {
    "url": "assets/js/12.357d0ba5.js",
    "revision": "d79c1e925eec98ee32ed5555fa3c4a11"
  },
  {
    "url": "assets/js/13.8d1e6983.js",
    "revision": "e622df1f31f7d9fd53697a7d965db2cc"
  },
  {
    "url": "assets/js/14.361d3799.js",
    "revision": "1ea809781df7228fcc8de06c130623a1"
  },
  {
    "url": "assets/js/15.ee24ce00.js",
    "revision": "42ddda5916d8dfbe04e16731468b70ea"
  },
  {
    "url": "assets/js/16.46d23f66.js",
    "revision": "fda42eaf88b3a18dd8a7612ac218225c"
  },
  {
    "url": "assets/js/17.4650993a.js",
    "revision": "2f8ee99ca807dec40e48add4879d8fea"
  },
  {
    "url": "assets/js/18.51577473.js",
    "revision": "6a9ec773708501e200b4c8ff5bdc9e3a"
  },
  {
    "url": "assets/js/19.ad8ed279.js",
    "revision": "48fd6d774cc91176cded9f10669a50ee"
  },
  {
    "url": "assets/js/2.80be49a5.js",
    "revision": "5738c1d783205d67c4cccd812ebbb75d"
  },
  {
    "url": "assets/js/20.a59c17cf.js",
    "revision": "6d7d052b25a6b1c0027d59f7dcb14f41"
  },
  {
    "url": "assets/js/21.e9b1560f.js",
    "revision": "c2d42e0f892acfc70599f26abc628f01"
  },
  {
    "url": "assets/js/22.768f5308.js",
    "revision": "6ae57c61ae51b75220d6b841fe44cb9d"
  },
  {
    "url": "assets/js/23.cc6050e2.js",
    "revision": "43cfc9f8391cd116fd32b7ea9c927a83"
  },
  {
    "url": "assets/js/24.054f5663.js",
    "revision": "f119f2be9fe2e43e3ce1606347fdd93f"
  },
  {
    "url": "assets/js/25.26ede546.js",
    "revision": "d3e1ade1a07d35eb0263ce44b63579cd"
  },
  {
    "url": "assets/js/26.81f7206a.js",
    "revision": "9a078a5895261a94359b96a332a25c29"
  },
  {
    "url": "assets/js/3.39377a9e.js",
    "revision": "4b58ce4ec4b87b75bac5aec894bae6e3"
  },
  {
    "url": "assets/js/4.767283c4.js",
    "revision": "0651d9603511aa6a2aa44b3ff5e61ca0"
  },
  {
    "url": "assets/js/5.854c0520.js",
    "revision": "b9b9d56a696f5f6f009fb2ecc7b0c2a5"
  },
  {
    "url": "assets/js/6.e8445b13.js",
    "revision": "77d91070fdb05375c37cf4f2e0dbe497"
  },
  {
    "url": "assets/js/7.3f8df6cc.js",
    "revision": "8b484cfb08dcfad41b6f5bd36c6c6fb4"
  },
  {
    "url": "assets/js/8.98a69bdd.js",
    "revision": "be050d34ffa73e7452268fca9bcab6e2"
  },
  {
    "url": "assets/js/9.5f39e1cf.js",
    "revision": "ac556cbe2f31977a78bf740b28210d49"
  },
  {
    "url": "assets/js/app.7bd53f2e.js",
    "revision": "e7ab4c72aee26370e6f6fdb6fa475a8f"
  },
  {
    "url": "authentication.html",
    "revision": "006d55ca4ad2fffbfe250871d4227326"
  },
  {
    "url": "decorators.html",
    "revision": "5deb1a516f7ad495c629fd4c8f5c064a"
  },
  {
    "url": "descriptions.html",
    "revision": "a2155351be1dab07ea6547a146ff4bf3"
  },
  {
    "url": "di.html",
    "revision": "dca447fad4bb507a97ad8036b2a2e91a"
  },
  {
    "url": "error-handling.html",
    "revision": "ced71ab2ebaf419fb29787a904439c5d"
  },
  {
    "url": "examples.html",
    "revision": "43d10a9d16bc0029b79568b4427e5185"
  },
  {
    "url": "faq.html",
    "revision": "277bd10040676187a127646c82082169"
  },
  {
    "url": "file-upload.html",
    "revision": "2ae8d75bb1a337040cc759e153f4318f"
  },
  {
    "url": "generating.html",
    "revision": "e4d47bbba56a2abdac38889d2d871325"
  },
  {
    "url": "getting-started.html",
    "revision": "89084662198fe63d0332ca2f63f9a084"
  },
  {
    "url": "index.html",
    "revision": "aa90305c972bfdeb9cb2cc92d3ab0d37"
  },
  {
    "url": "introduction.html",
    "revision": "3d8fe90286df4c62623d952e8c5bb289"
  },
  {
    "url": "live-reloading.html",
    "revision": "db93c1711fb8fa8473c087fab7343b88"
  },
  {
    "url": "path-mapping.html",
    "revision": "fd9862b3636ebbbb662e52e0ded8a876"
  },
  {
    "url": "routes.html",
    "revision": "11c6477374757c8f600499ad22d59380"
  },
  {
    "url": "templates.html",
    "revision": "2d586c585a92857c70c1b30075b298d8"
  },
  {
    "url": "upgrading.html",
    "revision": "347cd431bd6215f412763e41541c4f5f"
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
