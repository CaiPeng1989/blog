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
    "revision": "6019e162c5c60524661768eda8cf464d"
  },
  {
    "url": "assets/css/0.styles.33c1686d.css",
    "revision": "a5b295bf9736a55e32af6508fe61b48b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc8c92fd.js",
    "revision": "c6d9aec14952f1148d6919fb3e2a851e"
  },
  {
    "url": "assets/js/11.5b4cf8f6.js",
    "revision": "cd0e94608d0ef07ca9bb6f51e0fa6f81"
  },
  {
    "url": "assets/js/12.87a950a0.js",
    "revision": "a96b54eda6af697988312e6701e52dbd"
  },
  {
    "url": "assets/js/13.03cbb4da.js",
    "revision": "a3116ea746d48e9676e5341998ba5535"
  },
  {
    "url": "assets/js/14.11985bee.js",
    "revision": "00b82dce9b446607ce5019ca61ac4f4d"
  },
  {
    "url": "assets/js/15.1c69362e.js",
    "revision": "5cc269029f20a5dd371fdf146ecc0611"
  },
  {
    "url": "assets/js/16.57538b6e.js",
    "revision": "a13b85872ed0ed92835f04747ead2ace"
  },
  {
    "url": "assets/js/17.b65d2078.js",
    "revision": "c24cccf9aaa327d73ac2c13d98e36360"
  },
  {
    "url": "assets/js/18.890009a0.js",
    "revision": "b5a0436813eb0a0ed4ceb8976edb6431"
  },
  {
    "url": "assets/js/19.f614c23f.js",
    "revision": "c4b2e603c8a9bdb3d1d7ba514f616aa5"
  },
  {
    "url": "assets/js/20.2bb1e524.js",
    "revision": "c4f38e78de8c637fbb5fc50a5a2039ca"
  },
  {
    "url": "assets/js/21.a04a22fe.js",
    "revision": "46669970ca176846ff88801c46494bba"
  },
  {
    "url": "assets/js/22.76b4cbc3.js",
    "revision": "81e823898ffdb31dadbf5442fef8467c"
  },
  {
    "url": "assets/js/23.7f119ea6.js",
    "revision": "4abf84f02cd2ac4dce2fbff2272615fa"
  },
  {
    "url": "assets/js/24.f81c08a3.js",
    "revision": "e21ec6f67a67064f5e6d218992ee1fad"
  },
  {
    "url": "assets/js/25.b73f44ff.js",
    "revision": "26f274619358a7b69a0f929b75c7b6a1"
  },
  {
    "url": "assets/js/26.beef6c8e.js",
    "revision": "99e476961bc82635e6b31cf326a6fbe4"
  },
  {
    "url": "assets/js/27.d0a756cd.js",
    "revision": "a2d448902e3bd5047e2108f816517d5f"
  },
  {
    "url": "assets/js/28.518677ac.js",
    "revision": "296802c0f6b41cbaa271a4e41482302c"
  },
  {
    "url": "assets/js/29.b5f9dd26.js",
    "revision": "491feaeb3e18685cec8044449b378c1a"
  },
  {
    "url": "assets/js/3.82cce997.js",
    "revision": "d1c275f4b7b939c602f06e5a4a52bdb0"
  },
  {
    "url": "assets/js/30.0046a2fa.js",
    "revision": "0bff8aaecf818aa7628a7d0238c960c7"
  },
  {
    "url": "assets/js/31.8b953b5c.js",
    "revision": "fb7ffaf76911168c9b2428b5dbb35355"
  },
  {
    "url": "assets/js/32.0dd8d195.js",
    "revision": "09bcb8635c98fa0afe94050d14f7b015"
  },
  {
    "url": "assets/js/33.f04ed2a8.js",
    "revision": "1a9dcb56b736936f77e68b1762a82b18"
  },
  {
    "url": "assets/js/34.550121fc.js",
    "revision": "6fb8d561575afcecbf6896059290f82c"
  },
  {
    "url": "assets/js/35.5b71d95f.js",
    "revision": "97fc1b8d4afac6e52aad172f70cd4ea8"
  },
  {
    "url": "assets/js/36.8905e06c.js",
    "revision": "24339b6cca04bcc5dad62a5f7519d147"
  },
  {
    "url": "assets/js/37.99bf33a5.js",
    "revision": "f595b47f1d6be8c5c3945b62c345ad69"
  },
  {
    "url": "assets/js/38.8c6258d1.js",
    "revision": "e4fe755d210ad0dbc37aa62156d1df33"
  },
  {
    "url": "assets/js/39.a983c107.js",
    "revision": "346c1c73ef7774345f022baa903b97bc"
  },
  {
    "url": "assets/js/4.4da64437.js",
    "revision": "40dda097c5c33de317a5eb2563b4f079"
  },
  {
    "url": "assets/js/40.5739a875.js",
    "revision": "d9833d49da68ff94cc82e4e7eeb74a35"
  },
  {
    "url": "assets/js/41.a778a671.js",
    "revision": "44d0c6fd41bb2efd0b05bb36845acdf2"
  },
  {
    "url": "assets/js/42.9c3c0dfa.js",
    "revision": "57a7eda762731d7cfc47aa8884926d15"
  },
  {
    "url": "assets/js/5.7cbaaf04.js",
    "revision": "f7bc85733b85c62602e3b5ee297977c3"
  },
  {
    "url": "assets/js/6.67befbb4.js",
    "revision": "c041ae3ae00cb39cf76d6fa0957d6d93"
  },
  {
    "url": "assets/js/7.416a8850.js",
    "revision": "04356a0adb5e2e90601b3b464434b87f"
  },
  {
    "url": "assets/js/8.b4f7f4b6.js",
    "revision": "646c87a44e7b571113b818c9a0a54d6f"
  },
  {
    "url": "assets/js/9.2ad4e2ed.js",
    "revision": "46aaed2ed5169c3d79b4e55169e589ea"
  },
  {
    "url": "assets/js/app.11337aad.js",
    "revision": "8492368912299749d364e66728a7531b"
  },
  {
    "url": "assets/js/vendors~composition-api.3bc43e7c.js",
    "revision": "99a623b262d92c47c14ab3a4b504004f"
  },
  {
    "url": "index.html",
    "revision": "a9cacbb76286bcef7e9bc09c07e535cc"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "93df534755e2b680ac02fbe17cdd11b2"
  },
  {
    "url": "javascript/Array.html",
    "revision": "88a009a765810286b39c0e055b5f1ddb"
  },
  {
    "url": "javascript/Object.html",
    "revision": "0a40f14b9fb0180e486ef14869612d11"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "17b7956d2b6f3a4d6acb7c0c14e6407a"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "75a7c1a4ae13c6e941c45810a77ee1bb"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "c4c8230d6f28a32effc6256ec9e56a05"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "213f8abf3d8a5c70ef6bf87100a4aeef"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "92374d5147930e29e4d19b8fdce51e45"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "995fcb204141985bfc3e6ece6d0ec3e0"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "c7c7e4217b7cf4731247c952fcd6521b"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "13a7d9fd5d50460d62cf8cc83b2090df"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "f632e8dffec3806232fc7037b7024ad3"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "eb9a0be2480dd81d2be2eae9ff3a434e"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "991a58a9a8537b8298a3a23a52441ea1"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "90d6637244a42df715885b8969310fd1"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "d781c537b77c0846d1400dd0194c5721"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "8c168318778ae1835d3abd35ea9af982"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "a5d9241bffa02be668f379587b680808"
  },
  {
    "url": "javascript/节流.html",
    "revision": "624252f6a182c87e68fc5df3c30a3a76"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "256a2e8d00ee3db188546d17e3682e30"
  },
  {
    "url": "node.js/npm.html",
    "revision": "eeb88e3010013686a5b7d241e898f079"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "f929833ad5f10a05cb8e1406a08c1bfc"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "6906ca641da5df5d68d9c2fb674953e6"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "ae1e2bf0f4425771ce3909115de46a4c"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "e3a45beb4afc03adfde1ff9fc2f5d0c5"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "6e20881ec593888f3c7a898d770268be"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "d1ad87286b9fc580508e727e440523f8"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "b687f3d4ef6bccd184fdfa59f7d9eaaa"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "1dc4875fa68015b50e16b83f9321219f"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "a790f113be45aa67446e2f7c818539fb"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "d9cb0ee29065589e93ff7397a4f088f0"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "10e416822e2cfa8e3305d73e930a62f4"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "18fd95b3287982379aea29b96c460a8f"
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
