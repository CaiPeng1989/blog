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
    "revision": "2c4f2e09af614d30e412faef86bc2c1d"
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
    "url": "assets/js/38.d5bec9e2.js",
    "revision": "72528a1afdb9be7a8f49e31bdbe75b4f"
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
    "url": "assets/js/41.5af43e8a.js",
    "revision": "a585e620f33f700fb7fe26df34f19ae9"
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
    "url": "assets/js/app.49ef6622.js",
    "revision": "f4b98fe3d6747eb24a1b50dc1143eeaf"
  },
  {
    "url": "assets/js/vendors~composition-api.f8b2f9eb.js",
    "revision": "14b0db6802e47afa1480e081b8443465"
  },
  {
    "url": "index.html",
    "revision": "54eef6f8c5d600a8ab7f05770d3dde53"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "06e7e6f70f4711c079b6eb35bbc6f6f8"
  },
  {
    "url": "javascript/Array.html",
    "revision": "bf18c6ed231eef45f80e4280ccb81144"
  },
  {
    "url": "javascript/Object.html",
    "revision": "2018e9bbfb5cc5a0fac888154e365209"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "48cd9d4fdb8f4b50fda8c3fd8e40b774"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "519410d6689e62499108670aa3eedf85"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "bada291283f8feaa30f26b8edce2936d"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "517470aa0c83224ebf7200817bcd0484"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "a5f3c78ffa211f427d3489f80d0c0513"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "e1801bb92de4fa439bc074396b393536"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "6f4d689b4241bca72d7b717bfa6f5ef3"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "964e7982288878fbcdd5cf8e8c490c0c"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "528efe95bb00f9d35db35e87310f2b36"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "0f30a9aa430856e07dd82797557ef114"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "b01b3dbb0aed476752f7bdb2d8f65e74"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "eb1de24cd80ffc820b113efdcec7411e"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "72f28a15ba9eb4e4a7f8f5c53401542d"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "89e3119fe75077b6416098cbbafa45d4"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "8083cb13de3f3838505327b790842d35"
  },
  {
    "url": "javascript/节流.html",
    "revision": "d973fc8329e46efd4b630772045fc9ce"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "5caf4d6d2df5933d2474a7ba7ee62fa2"
  },
  {
    "url": "node.js/npm.html",
    "revision": "f656e6ef18adfcc6a2d35e0e36d60c2a"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "7411700e7efc709fe9bf991670bea08b"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "462ee9e82bbc109e92da9ef9d059b869"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "965a012a882c4172702ae9bc8931ef57"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "5843aab7b9f5699cb1d6a5461e98d5a4"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "18d7485396f9bd52c1b13dbf5ad5434c"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "4cb2ca2b1cf2e96df03639ecd515c379"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "1f3418b7d43813caba6e8c834eef4d64"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "e1f59718bd9874f6e31730ed6de1415f"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "cc41040e0ebdf11d87e039563475afcc"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "613aadf5431cc402eab6d9a74d6743a5"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "35b562df5e5951c742179deaa0f44a26"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "8aecff8a1e4e0ee61fb010efb66d2293"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "03708ddbd1222e0aecc1194627c1057d"
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
