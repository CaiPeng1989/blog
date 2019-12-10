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
    "revision": "d644e86c28d20434d890b548a03c41c1"
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
    "url": "assets/js/33.577f48b1.js",
    "revision": "82f124dc1e97d672a3ef9c625700006e"
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
    "url": "assets/js/39.31099b58.js",
    "revision": "02e99eea82ff03d052b1cb62a5899723"
  },
  {
    "url": "assets/js/4.4da64437.js",
    "revision": "40dda097c5c33de317a5eb2563b4f079"
  },
  {
    "url": "assets/js/40.bcd94ebc.js",
    "revision": "085c55d83f6dd9f19b1b32f3312f5c44"
  },
  {
    "url": "assets/js/41.3b49a856.js",
    "revision": "22544bf5cd1adb04356265aafdabbd60"
  },
  {
    "url": "assets/js/42.3ad2b9be.js",
    "revision": "d62a2f1b490b3378e6efe4208639e3e9"
  },
  {
    "url": "assets/js/43.506605d1.js",
    "revision": "8b1046af15e2c387980e23c4b1b51eb6"
  },
  {
    "url": "assets/js/5.7cbaaf04.js",
    "revision": "f7bc85733b85c62602e3b5ee297977c3"
  },
  {
    "url": "assets/js/6.31369724.js",
    "revision": "072e400e134603bd128edb332a76fa64"
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
    "url": "assets/js/app.f296ae3f.js",
    "revision": "653f72ef661c76838fb86655663ddebd"
  },
  {
    "url": "assets/js/vendors~composition-api.3bc43e7c.js",
    "revision": "99a623b262d92c47c14ab3a4b504004f"
  },
  {
    "url": "index.html",
    "revision": "34e1c821f951d8b83cc5012bcf9548df"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "252065ad553aeaec7eb2808320dd8981"
  },
  {
    "url": "javascript/Array.html",
    "revision": "520fbc19ca68a39a4097b9e781e97536"
  },
  {
    "url": "javascript/Object.html",
    "revision": "ec4b6edbf20386fd5ed609aeadfda0ce"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "4a3390d701af49bf82c8b74b6fdb8b6d"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "d7a312d4cd7dfed650e5d0a60cb082e9"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "b69362ae114d44576c61a9ec9abad915"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "f5de197ae39a2680196b75ae6061c8fb"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "7efe175142a7798e547aed55e7ca83b0"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "42d59693d10ee60850ad5aab15dcdbf0"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "93373633b4cc0dba09b6c84741337907"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "9bd81d08dd853c44666f6246dea91438"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "06b465c54a5a565f8b0b6df1646a72d0"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "cac68f7bdb18f17e07a9db0a8b1985a4"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "ac548ab0453ee8a20dcac7112858ddd8"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "3eb670e35a3d080065cd067ef6d845f0"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "829093279dc3ad5eaba097854057e939"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "05dcf66367c8317ebd43338b27f9a412"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "17ac4ae48aa20610797482ac0d97b117"
  },
  {
    "url": "javascript/节流.html",
    "revision": "eb21686ae2e41c2fe3eda56b9c7ddfe3"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "3fc0df244415fc3cda851845a1e92f15"
  },
  {
    "url": "node.js/npm.html",
    "revision": "438e1a3e09d95bfaced616f9d64d3a01"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "a462c4072a700333a25abf7fbda98b2d"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "b705faeb2d5aae7e70eef9bfa1e56ba8"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "b632dd99271fcdbd857122d6defe91bb"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "f416c534fdb845c33007e2fcdb07de60"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "4c546360e09133ae32bf5cf680e75328"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "7210ef3be324ebac28a071e8a2ab58ce"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "b74ee56bee9f67ed7be215d6a6e534ef"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "f3f899cb91c71f6091ef3cb2d85e68e2"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "20325ed16f8c02e2f427018b46b8c78f"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "407673938596a04c4838eb8a8b60e395"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "f825908078a14671ea8975aca2986d68"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "1303c12bc8692b441f4fac74f505b55e"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "a0d5e3969c8320c01e23b6793dcecb04"
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
