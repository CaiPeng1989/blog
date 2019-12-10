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
    "revision": "5397596ab68156a3e4cb9d80445ab577"
  },
  {
    "url": "assets/css/0.styles.6f72f9da.css",
    "revision": "50c2cd3580b012a7605112ab6bae1c4f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.938e86de.js",
    "revision": "6078ac3a38f5a899b26e03b92cf07db5"
  },
  {
    "url": "assets/js/11.bca77f11.js",
    "revision": "71d8800a8714731d1d3db2b5973f17b0"
  },
  {
    "url": "assets/js/12.57858150.js",
    "revision": "aa7667ac0f3ae7f3b3633c4d2ec37017"
  },
  {
    "url": "assets/js/13.bad9266a.js",
    "revision": "2309d45d5c276318a8f4caf5d86cdea4"
  },
  {
    "url": "assets/js/14.3acca191.js",
    "revision": "c0bf884c1ad7220c133b6fb1e2ebbb0c"
  },
  {
    "url": "assets/js/15.51ee03ec.js",
    "revision": "135e45d235b2562ca86d4f0e4cdfa6d2"
  },
  {
    "url": "assets/js/16.6a92ef03.js",
    "revision": "ff4d7b2c9947a15492ad1d2ede62c0da"
  },
  {
    "url": "assets/js/17.548af257.js",
    "revision": "c41a967d714e5b77f923ff7ed684e58e"
  },
  {
    "url": "assets/js/18.3d1c791d.js",
    "revision": "9a8376546d2b63f23a0079ffb2a1fe67"
  },
  {
    "url": "assets/js/19.020ca838.js",
    "revision": "be69983c0f9b55447a363e75062e97cf"
  },
  {
    "url": "assets/js/20.95cfc3b1.js",
    "revision": "a57f5e5fa0ad9f077a18e1670b80e3c8"
  },
  {
    "url": "assets/js/21.e4c84ccc.js",
    "revision": "f73658861fa0da292b854c6fb87de90d"
  },
  {
    "url": "assets/js/22.9e8bedd0.js",
    "revision": "7b8debffaa11d3c7cf1de257f0d2f6be"
  },
  {
    "url": "assets/js/23.a41bde07.js",
    "revision": "dbd231b79570a0ff06473d37a217181c"
  },
  {
    "url": "assets/js/24.8612f616.js",
    "revision": "4d2e90f00c4738fbdc556a269b7a6e2b"
  },
  {
    "url": "assets/js/25.dded036f.js",
    "revision": "6fc58a4d15949bbda3dcb4365cad4167"
  },
  {
    "url": "assets/js/26.7d3f6450.js",
    "revision": "c4376b19dd2e6168aa3bde7e9a21ff56"
  },
  {
    "url": "assets/js/27.28bbe966.js",
    "revision": "4d029ddf1ec9e4886d45eb2e33dba8b3"
  },
  {
    "url": "assets/js/28.470b01fc.js",
    "revision": "b0e12e56c51a2754751abeaa2145231b"
  },
  {
    "url": "assets/js/29.b8bc71bb.js",
    "revision": "d9c3ef6edf9ab53c0374ff531b7c6848"
  },
  {
    "url": "assets/js/3.41b075bb.js",
    "revision": "e67dcf433bc9b8957285f3f6e1dac095"
  },
  {
    "url": "assets/js/30.b03d12e9.js",
    "revision": "be308e493323fe9593db50bfb149f3c2"
  },
  {
    "url": "assets/js/31.a6ef2506.js",
    "revision": "b6327f6fd05ae87ab87968c389accd84"
  },
  {
    "url": "assets/js/32.fb2201b6.js",
    "revision": "d49b34aa80142bf4882b8e1327163135"
  },
  {
    "url": "assets/js/33.a97a6959.js",
    "revision": "d306d0973a4648c35929b4708d2b8aca"
  },
  {
    "url": "assets/js/34.78cbc531.js",
    "revision": "9770e4fdac6510e6e3cb50907c90b17e"
  },
  {
    "url": "assets/js/35.4157cc89.js",
    "revision": "65edc174f34888ac7325787cbe0c1ad4"
  },
  {
    "url": "assets/js/36.da65c19f.js",
    "revision": "179fc40586477f5efa90bdc6b88ed0a7"
  },
  {
    "url": "assets/js/37.1a91a911.js",
    "revision": "6dcc3cb6e5e9967d7818e117d12135e8"
  },
  {
    "url": "assets/js/38.31d68ad3.js",
    "revision": "562ef84cb049cd39d7163215c0fdffc8"
  },
  {
    "url": "assets/js/39.0f354f24.js",
    "revision": "c43b7832951d0e9aac239fab939eb449"
  },
  {
    "url": "assets/js/4.ff5c4085.js",
    "revision": "89531b0ee44578890868fcf3bf0e3bda"
  },
  {
    "url": "assets/js/40.430767c3.js",
    "revision": "f7686f20d31904c21ca23e4ec9f941d0"
  },
  {
    "url": "assets/js/41.9074495f.js",
    "revision": "001bad56f0a650063df32d0fd37be55c"
  },
  {
    "url": "assets/js/42.e4faba2d.js",
    "revision": "1e565bd917abd502161e963ab5790d25"
  },
  {
    "url": "assets/js/5.fc9b1c5b.js",
    "revision": "71c5d65f6438b84bff1c20b0b7762219"
  },
  {
    "url": "assets/js/6.7dffcbdb.js",
    "revision": "57db99bbb583e56133a9c1addbc30cab"
  },
  {
    "url": "assets/js/7.28492104.js",
    "revision": "a132d8760114b2cf6a685225c1912150"
  },
  {
    "url": "assets/js/8.b2eb4272.js",
    "revision": "060cbf4d62702d9efe6e2d2d6a7f1234"
  },
  {
    "url": "assets/js/9.627aba54.js",
    "revision": "12c9e7f3e5f729281cc2637276277261"
  },
  {
    "url": "assets/js/app.d31128f2.js",
    "revision": "c4939b564370729c4f21ddedbe834046"
  },
  {
    "url": "assets/js/vendors~composition-api.d3b1b485.js",
    "revision": "342f5cbe14899953801491c01cae7354"
  },
  {
    "url": "index.html",
    "revision": "97d3f6637bab8fc61292cac8112b1046"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "9c4fab625b14b8aff74065e51371d81c"
  },
  {
    "url": "javascript/Array.html",
    "revision": "de8d297d5a086fd571a3155b9d49f025"
  },
  {
    "url": "javascript/Object.html",
    "revision": "7f6a614b03a3b8d6f66206150ba354f3"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "1675c66430f5a1d154a72b0aa16c8347"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "f2241ab651102addd3b19e5267fb151c"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "bf8cfb24b8d707ff4cf508335e70b840"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "a144d00c694cf53b7498db30dba8f5c2"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "01f5763bebd8885716ad01c938462d9f"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "b57f5d0286528f8a8770e1170a90da54"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "99480b3eaf75d160567db1c0fdcfc0a4"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "9f478fb2df6887a191ef723668b0a396"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "123932c1803b539f994fcc4765bdfcd7"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "06dc78fdce8c7548fc931cad3c2d2988"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "1113cd03f827383db30c0fa9c1a5a949"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "f1b720d7c97a9d46a0f2a3d290a553a0"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "1a0a7bf3ab049f95c4bff7e4e0a25dd0"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "365b573973c93d5a4d3acabae5f2de31"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "c737248fe24009dcd2dadd74393e13b9"
  },
  {
    "url": "javascript/节流.html",
    "revision": "b449bb50672641d7f0c96345205f5b84"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "f719d0d9fa0833b21214090e6bfc9b5e"
  },
  {
    "url": "node.js/npm.html",
    "revision": "264566e52e00a029b25cb6275bf2897b"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "a47a74ae78de173278cd12da370e117f"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "25ce41358d33ab7d11bda51f2381e32f"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "41904a0bc594a934d92e2abeae68f997"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "8c4c4bd6488d32f3be8a634a97e8ce84"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "710de145aa9249402299975a066f39eb"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "38eb0b5e2117ef955524e788a982fe20"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "3901397117c1a20e4f4cf77e203f306a"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "ef90954fbf3da82de4e0b224a69bd5be"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "7198298fa5a281106f636e3d0be35f2d"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "9752923100bbde91fab79d06f7ca6281"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "6c3622a04a4abd3a2f5243a88975fa41"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "23bc7e8d7a185a02712083ee42ff1ed6"
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
