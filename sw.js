importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05b7398001f52d9fcfa9.js",
    "revision": "9704298cc7c71f98d0b00c5337441bba"
  },
  {
    "url": "/_nuxt/1c3ae6a0581cdc91dfa3.js",
    "revision": "8d8fe50d4e431dc7a50e3c05868032f8"
  },
  {
    "url": "/_nuxt/1fa8b641c5847a03137e.js",
    "revision": "928c75997294dcd6a536db6ff075023c"
  },
  {
    "url": "/_nuxt/1fce6648875b3ab1f904.js",
    "revision": "27ab3cef0169663652bbd13e576a33d2"
  },
  {
    "url": "/_nuxt/2a331dcc84496d998108.js",
    "revision": "79a4062f4ec885de72a01f5e192dfe81"
  },
  {
    "url": "/_nuxt/2dcc6b298e7858521d59.js",
    "revision": "73d0329bea0dfa472bf4fc81cc36a4a0"
  },
  {
    "url": "/_nuxt/303362aed0e1119057c8.js",
    "revision": "43c0ea63e3f45f37fc82162c9fda80ae"
  },
  {
    "url": "/_nuxt/4367986eec1a3358aa77.js",
    "revision": "6b82d047e18dfdfab9d7c127dc3ad242"
  },
  {
    "url": "/_nuxt/46940657f7b2480b4b8e.js",
    "revision": "b998730396a93c04d84dab9ca7586cfb"
  },
  {
    "url": "/_nuxt/485e07dcce23a70a4da9.js",
    "revision": "80fc2360e7102b59e5c37c55939cd402"
  },
  {
    "url": "/_nuxt/491ad99d649feb882826.js",
    "revision": "f68d9a7254ac0684fe15e0b90896c402"
  },
  {
    "url": "/_nuxt/715c9feb4471872e090c.js",
    "revision": "2bcc12ad264a269dd19e8d2b88ab6f98"
  },
  {
    "url": "/_nuxt/72c8ae3ef10a7293e449.js",
    "revision": "ed21404abcf3cf72d7ccc695d68446f0"
  },
  {
    "url": "/_nuxt/7a7e573dca354ad6f97c.js",
    "revision": "2f52911ac6351f7f7b6e4c3a265d25cf"
  },
  {
    "url": "/_nuxt/7ca4318821e1423ae5e8.js",
    "revision": "52acf777b909f47bf8b57d2eb7f5be4a"
  },
  {
    "url": "/_nuxt/7f095e477060ecaed13e.js",
    "revision": "a5aa4c613e21393050bc47fe065d6adb"
  },
  {
    "url": "/_nuxt/7f2212379ae8f00e9c4f.js",
    "revision": "2a63a39b1cfc86854fbf0fd9d431837b"
  },
  {
    "url": "/_nuxt/8f3e2b55a8e2a630c13e.js",
    "revision": "62decf86bbbbe60246f0ffbc9c2a5e82"
  },
  {
    "url": "/_nuxt/94740e03b846cc23a9ea.js",
    "revision": "288c15b7952ab49b5e8755c9bd235aa6"
  },
  {
    "url": "/_nuxt/99ba841859da8572d00c.js",
    "revision": "f56f44e69d790f97b788022fabfbadf7"
  },
  {
    "url": "/_nuxt/9e42580ecdb3a2a43c90.js",
    "revision": "bd209029957745bef526234991041210"
  },
  {
    "url": "/_nuxt/a41effdd366853e4b614.js",
    "revision": "12cc43bcf2ac5de8111316d6bac7a10f"
  },
  {
    "url": "/_nuxt/a80a702a1fc2e180cacc.js",
    "revision": "93c06f74e8fb194d919a1de4de2c1b13"
  },
  {
    "url": "/_nuxt/a858c233aac4f84e40b7.js",
    "revision": "924ae10b0f71790de1b38d59dea7c371"
  },
  {
    "url": "/_nuxt/c484d1792a0d2a5dbb51.js",
    "revision": "f56b2e2d67cbabed3a12c5353c494c0b"
  },
  {
    "url": "/_nuxt/c61f5e40921a4d1edd73.js",
    "revision": "658c33c446d286f1733721e383b4af04"
  },
  {
    "url": "/_nuxt/e055d9fd438255349047.js",
    "revision": "aced3c6b6c525976780044d33f888e3c"
  },
  {
    "url": "/_nuxt/e51da68857a8c21705d2.js",
    "revision": "73dbc13bf7b930c8cdd1b4287ab8e138"
  },
  {
    "url": "/_nuxt/e82858165a5bf193e81f.js",
    "revision": "c7231e1221e62de2bb14ac2f80bcb214"
  },
  {
    "url": "/_nuxt/ebf2a1bee5effe0617cd.js",
    "revision": "a4bf94ab546beafc0a37c7737b2ec5f2"
  },
  {
    "url": "/_nuxt/eda3c53e67cfdd92c30d.js",
    "revision": "693fe8e9fc6d597f35f8f4e3952366eb"
  },
  {
    "url": "/_nuxt/ee3eb491d3b277c25375.js",
    "revision": "e918ee4bd3020033453745b1c8d8ee67"
  },
  {
    "url": "/_nuxt/fc531293ddd98eea6fd0.js",
    "revision": "0ca911a9f57579d1b373f3f71d10ec85"
  },
  {
    "url": "/_nuxt/ffd8c97ca8686820d7fc.js",
    "revision": "c7dafddf9a7e0877a67d707ea3580518"
  }
], {
  "cacheId": "miku-tools",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
