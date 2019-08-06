importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "about.html",
    "revision": "79cc67133a8e94c3025492d696062954"
  },
  {
    "url": "articles.html",
    "revision": "ee3520f90c259f4c8ca274b909b86e2d"
  },
  {
    "url": "css/about.css",
    "revision": "341067770a4b72dba549b1a7a8b17938"
  },
  {
    "url": "css/articles.css",
    "revision": "44760ae853b40e11d4dcd3235d181f05"
  },
  {
    "url": "css/books.css",
    "revision": "cead05877f44be1f3700d656f5b97f68"
  },
  {
    "url": "css/combinations.css",
    "revision": "ebd6b4aa01a881b8fab7d2f85701fa11"
  },
  {
    "url": "css/home.css",
    "revision": "093c0594f8d5fecccab70155e4972769"
  },
  {
    "url": "css/normalize.css",
    "revision": "f9b9d910026dcdec16176e97a6c054c5"
  },
  {
    "url": "css/performance.css",
    "revision": "a783ce7e509bbbb9a15b5f037b387305"
  },
  {
    "url": "css/skeleton.css",
    "revision": "7db4571138525204ae9946ff2a7e6996"
  },
  {
    "url": "css/tools.css",
    "revision": "015e064fd5e4d8e91a13e92e1e631a3e"
  },
  {
    "url": "favicon.ico",
    "revision": "63151a9908bc7c5d95503775fd8abaf8"
  },
  {
    "url": "font-performance.html",
    "revision": "2585033154bb02eb5a283e93eb510f4a"
  },
  {
    "url": "icons/github-icon.svg",
    "revision": "947ce9091e82864f2c82eda7ce49ed8e"
  },
  {
    "url": "icons/typography.png",
    "revision": "4de91dc273c3a70c7f85050c0bce538b"
  },
  {
    "url": "index.html",
    "revision": "3d4aed6cfc3f4631d13df09f30d58f41"
  },
  {
    "url": "manifest.json",
    "revision": "1e34424457001bbc02ce3d3060d71e1a"
  },
  {
    "url": "package.json",
    "revision": "f1d1255c760f4f3362fe8546e90eb566"
  },
  {
    "url": "params.json",
    "revision": "990c6be78297313cd94cbeb2e423f3a0"
  },
  {
    "url": "sitemap.xml",
    "revision": "cf6de9bf6633df6eb47ad7162e53d36b"
  },
  {
    "url": "typography-books.html",
    "revision": "9907277da8499f07d53a6f01cd88b6a3"
  },
  {
    "url": "web-font-combinations.html",
    "revision": "9afca2f2fad242ed2897874b1be70181"
  },
  {
    "url": "web-font-tools.html",
    "revision": "ba575994a09e4129e36e4d539ad1893a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

// The route for any requests from the googleapis origin
workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheableResponse: {
      statuses: [0, 200]
    },
    networkTimeoutSeconds: 4
  })
);

