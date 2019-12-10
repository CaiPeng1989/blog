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
    "revision": "13925aeb13411191bb40b2c39a35ca63"
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
    "url": "assets/js/39.302c3434.js",
    "revision": "179f0c3991990f8c9261bfad9599e499"
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
    "url": "assets/js/app.88771092.js",
    "revision": "520c8a8b0c762cc39c14c631317684c4"
  },
  {
    "url": "assets/js/vendors~composition-api.3bc43e7c.js",
    "revision": "99a623b262d92c47c14ab3a4b504004f"
  },
  {
    "url": "index.html",
    "revision": "33a80ec1cb91c37f8c0f36710b2ff94d"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "fd6b3c15ab41a993444786444bb72b5f"
  },
  {
    "url": "javascript/Array.html",
    "revision": "e0d3a7e0a10d545d7f23dfc0501a5d01"
  },
  {
    "url": "javascript/Object.html",
    "revision": "f3939dee9c869fb4288e72fce452f2db"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "fc5fd9ad144443e153d04faa790fb009"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "5b27ee97b715af32b31edacd56ee088e"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "47b497421f7d312342d640e8778f5cef"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "d9d498e6effb183ae3a28c7141605fd2"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "23f36985cb5ab926ffddf1cde6a660ab"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "e1347e72097679ba635146454c91b2e6"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "f587ec890736c9620996a85951b73f9f"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "2c972378096713b63a5d5288cba32f97"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "389c7ad4f78287560ee1befe58b0844b"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "e460802f694546bff9a3931eb0c20f15"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "7e411d5011aba5961bdd79cf5f1b8f73"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "af49274b60a91b1f7cbb54e900fc577d"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "797b0e363ff5a8a4ba392e1a356a5f16"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "dde2e91dee464a5b08a3ed19d227b08c"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "fa14c300923a32ea626fd767d56ed0db"
  },
  {
    "url": "javascript/节流.html",
    "revision": "f5377bb4697698ac7fed55c0e22b3a6a"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "08061cfbf5a84640d3f3b77ac3a35d98"
  },
  {
    "url": "node.js/npm.html",
    "revision": "14631b819c4baeacc7d6f4108c256e04"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "ca12717517e93eba472f22781ae3752f"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "627808f4a648b361bb660f240e443f76"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "47a7532405a95852a115eac883ed4128"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "c9199cd473b2dd1f8226997aa3100bdc"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "e6aa8b3fc637ed368dc52703337b9502"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "fc3429e7d4572b42608709ae444d8314"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "1badfaebadf735b398af8417cc0c4b78"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "896096d4815ace2e5f50a3f2371a7721"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "8cdcbee1d9df8af648b55dc3fec8963b"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "d35f5b7b532f5de428763ee1ba727c00"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "3340a7550e6d5530aea12529006a93f8"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "188da6c7e55f5ccc60da18b1921c2922"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "3ba711b75c4c7b553f72eba2389dfaea"
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
