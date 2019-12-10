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
    "revision": "158945a6ae200b3d6de7090b5620e790"
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
    "url": "assets/js/app.0fa72d48.js",
    "revision": "15207d7faa09f0f1c56ec8b36667cc99"
  },
  {
    "url": "assets/js/vendors~composition-api.3bc43e7c.js",
    "revision": "99a623b262d92c47c14ab3a4b504004f"
  },
  {
    "url": "index.html",
    "revision": "5e11996f08c0b89fdf4efc61e36e12cb"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "c3279a9770f1ee05fd452170c814495d"
  },
  {
    "url": "javascript/Array.html",
    "revision": "8a51ab5be7cc791c59f7702dac042875"
  },
  {
    "url": "javascript/Object.html",
    "revision": "acde6dbf2ece43b84d3c33dd4357d2a0"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "ef18680d5a987b0c0268e468f9ed41a6"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "da58b0e533edee64fb1cd28ce5ccade4"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "415a34e1e293ed7bed5dc153c1a35efa"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "2d00b1d968aa16ff18dd7554c1b9a260"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "72750df7906293f1a8c1fb42f3d98f85"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "bf2cce958c40ab4a25217dccafc434aa"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "84bca6e8761180c492cf8c7308f3c7a4"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "c8bb064362f5c4a909705ec7c59f65ff"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "250069abdbedcfc5d46ffa6af66ce69d"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "2208282757679916fd7d796a3ec3df43"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "cc33586e6497a06959225b22cdc2e418"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "c49552ebca543af768f27ee24249c1ce"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "a4cad6f6b33856981c0c7c0374d7743d"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "392a709191416691a4e2047950cd762e"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "8da646d8ca8a781fbca2fa844d092162"
  },
  {
    "url": "javascript/节流.html",
    "revision": "a7425f29603de892265a57843034fd1a"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "1e93588d3c53aef326a3df8c9d1ab25e"
  },
  {
    "url": "node.js/npm.html",
    "revision": "0710dd44b3a75640913819e5afbce248"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "d41fdc4f92c84aeeab53f6c71ebf7003"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "599ee9080db8405a39acde5f4933ae95"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "928fef5c35768f3e4809ba7021d9bf9c"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "39ba986e6981086cc097725525ec6f93"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "5373eb31f71a6705e4262cc3a2d08ddd"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "d116e64c0c4e83cba72238f744d98468"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "97c0eda93752f7bda53b27c444d913f8"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "1d23fc27f51c05ade493a4741661417c"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "1471e3a21bb3534cf42b72db34bd8987"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "dd8bde258135017a848fbb20553a210e"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "80a91e28e9158811213fe73fc2acc83e"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "e625f9dd4489f09a0f2e5b09fb9533ea"
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
