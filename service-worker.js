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
    "revision": "afd24e57dad4892ca208e2922e20953e"
  },
  {
    "url": "assets/css/0.styles.2231fcf3.css",
    "revision": "f82a409a6c5f5e528725afc4073f232d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.31444804.js",
    "revision": "f05710481e00b6af719198e32d17e0de"
  },
  {
    "url": "assets/js/11.99655d59.js",
    "revision": "c9674e89e394a22ecfef660d915ec7da"
  },
  {
    "url": "assets/js/12.0d459407.js",
    "revision": "53f635469ca3104e18ab806a384c761f"
  },
  {
    "url": "assets/js/13.1be10e2b.js",
    "revision": "14cbe8ad1b3ad7fe9cb41101562e7b27"
  },
  {
    "url": "assets/js/14.715338db.js",
    "revision": "1bc6b0bb49601c3f79977b72e68ed8a0"
  },
  {
    "url": "assets/js/15.b822d239.js",
    "revision": "7d80f9c37f133fbfb5e0b3185448d25a"
  },
  {
    "url": "assets/js/16.87035dd9.js",
    "revision": "bacdbebec9029881c6fb06b7e8571cf0"
  },
  {
    "url": "assets/js/17.c3531297.js",
    "revision": "126f4fcd6669361be71b7c8e41cf2625"
  },
  {
    "url": "assets/js/18.292ffe37.js",
    "revision": "75391eba7a0a915368f15306eed5d28c"
  },
  {
    "url": "assets/js/19.9eaab814.js",
    "revision": "6dbd8014c90e1a9e26e4f24af698b22f"
  },
  {
    "url": "assets/js/20.900fd2c4.js",
    "revision": "d96868e3e84606fc9c43f6c6006acb4f"
  },
  {
    "url": "assets/js/21.40d1998f.js",
    "revision": "dffa4c5bf4e6185586266426e0a88bd5"
  },
  {
    "url": "assets/js/22.879cb723.js",
    "revision": "48acb36e882dae8fc6b3fc4a621cbb44"
  },
  {
    "url": "assets/js/23.3e482e27.js",
    "revision": "dbd31ccdae87788d10e6aae2e6189c5f"
  },
  {
    "url": "assets/js/24.c81b9802.js",
    "revision": "1ac2382a021b5c479605413da080d614"
  },
  {
    "url": "assets/js/25.aab60df0.js",
    "revision": "f3295a914e93ff4aaa22c5be79afb45c"
  },
  {
    "url": "assets/js/26.3281a27a.js",
    "revision": "cd3961d135bf777a1d0bad581a0ff550"
  },
  {
    "url": "assets/js/27.b7e7fe73.js",
    "revision": "ddf41284de7d5547e9c8b1aabf05aab8"
  },
  {
    "url": "assets/js/28.58467716.js",
    "revision": "8cb97579ac6a21e119a3bc5f378a525b"
  },
  {
    "url": "assets/js/29.09cd29cd.js",
    "revision": "263e8170596c515ab6352ed55ff30655"
  },
  {
    "url": "assets/js/3.d2935a6e.js",
    "revision": "efc1d582b2834f2a05aa401dab342d3e"
  },
  {
    "url": "assets/js/30.9449ab8c.js",
    "revision": "5e2190fd39a5206c461e3c1dbfaa1a97"
  },
  {
    "url": "assets/js/31.593c1c7e.js",
    "revision": "429edcebb0ebbc87076f9aa4221110f3"
  },
  {
    "url": "assets/js/32.6819c9a8.js",
    "revision": "e55d8e70d75d963b95065f07c57a74fe"
  },
  {
    "url": "assets/js/33.9f1c2ac0.js",
    "revision": "1a7e23ea3b803fc39c6b7dab115501bb"
  },
  {
    "url": "assets/js/34.f7bce0a0.js",
    "revision": "e5a73fb9938d8fff62cad01e193834f3"
  },
  {
    "url": "assets/js/35.3fa852f2.js",
    "revision": "83baead2559ee05dd8572eb7751442af"
  },
  {
    "url": "assets/js/36.92905961.js",
    "revision": "07562c38879ad621d09ab9845377444d"
  },
  {
    "url": "assets/js/37.54d4c465.js",
    "revision": "45892b9419d4fc2aa212a27312b95728"
  },
  {
    "url": "assets/js/38.421d338d.js",
    "revision": "af45ba18f97e9b3567cad8223a908056"
  },
  {
    "url": "assets/js/39.7d40d4ef.js",
    "revision": "17f4dd194286404d14bbdeb6d445a5fe"
  },
  {
    "url": "assets/js/4.9df516c2.js",
    "revision": "b2f60ee56000ff16f38394328132946d"
  },
  {
    "url": "assets/js/40.a06b98ff.js",
    "revision": "5795804d37e21cbb782dada8fdbc5f39"
  },
  {
    "url": "assets/js/41.1c2f4977.js",
    "revision": "892d6f98ebf5070ca472ee5423f98389"
  },
  {
    "url": "assets/js/42.405d05cc.js",
    "revision": "6c7fa7ee2e4dbb2954cdeea1b0fbd4f5"
  },
  {
    "url": "assets/js/43.51dafaa0.js",
    "revision": "a99ac0f25845703e90773a551fed9611"
  },
  {
    "url": "assets/js/5.bba852c6.js",
    "revision": "b33cc9511cd86190be6583ee2c8993b5"
  },
  {
    "url": "assets/js/6.700ce0a2.js",
    "revision": "0c4eaa0c65dd82193c6db9c02131cb84"
  },
  {
    "url": "assets/js/7.99dc9b4b.js",
    "revision": "9c107d1368e050bcb50aa77f8cf0b91f"
  },
  {
    "url": "assets/js/8.98b9e41d.js",
    "revision": "b7551a93eb830b1025b38c610a53a477"
  },
  {
    "url": "assets/js/9.da2002c1.js",
    "revision": "0a4c86cab8cec68b7a00c5816f8d7117"
  },
  {
    "url": "assets/js/app.278ab888.js",
    "revision": "f5cedaca6f4f2b9a594440957a5d53c2"
  },
  {
    "url": "assets/js/vendors~composition-api.f8b2f9eb.js",
    "revision": "14b0db6802e47afa1480e081b8443465"
  },
  {
    "url": "index.html",
    "revision": "b1611f576fb6e2d3e01bb798d7c50c15"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "e3bb13becdaeecc252f748846d92013e"
  },
  {
    "url": "javascript/Array.html",
    "revision": "37582d8893bedcf831ebe632e86b52c8"
  },
  {
    "url": "javascript/Object.html",
    "revision": "b66441642a5a2e0917c31d5114d89553"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "746c758754eb09e02e496bf54592da2e"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "b0e79196a2a57962ce747695c8af49ed"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "9fbb3381a38bf928c3dda55451448651"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "949b0aab24d46f4a29ad49c28f0df7c5"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "1aec4bae10b52432165e0cee1aaaf39d"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "1f33e5491e0d707360bc3c725ccd5595"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "6c9f4eaefe044c218a25e2c0f34929f7"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "ab91b68f763aea093008043365fd1664"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "752240cf62e34c6a9ad21a0d196d9ca1"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "ee528e0d9d07cddfb04c707fd83ff893"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "9b484021fec2e73c12c0f607c0a8f67e"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "94735bc0eb57905dd07fe71c1e8e0922"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "ff447fa4040f0ec8a7d59e136f5b2997"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "ecbbd6fd35b79c6541933a7cd1d7ede2"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "5be4ac97a61e03aac8dea828ec5c6488"
  },
  {
    "url": "javascript/节流.html",
    "revision": "0a37940c917a367af7c5b4f1c1747ca2"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "c4df4f398e0d6d28c6a21a17f7d0bc59"
  },
  {
    "url": "node.js/npm.html",
    "revision": "d031ef01054e069d6b06e40d82f1bc2e"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "5ec66ae13715aa87a2b61f85da6f31ba"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "27eb413e6770792719e81a01c23daab7"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "9929ec69c19fda72ac82c6f08f5bd5c1"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "3ec5633e61cfb9ab8e2187d5b982d36a"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "4a74b04609d6e7b421dfc6e68568c9af"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "9675ec66addded2e892b47e16d14e553"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "f2e10722c40be87c95b18063651bb837"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "e52a7f5c76b560e447c7934ca8cdb0e0"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "4c711eaebf7a459d1d4e10726cf34782"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "8fe44399ec6f822bf397dce37f447cff"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "21c716039e9afc2fde031e9e872dcee2"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "6c3af8a265b2f58d89876e9a5b4ba5fa"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "5c41c3717bdc2e28094da9b6ec098fee"
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
