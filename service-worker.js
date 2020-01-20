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
    "revision": "3f197ea9ca7a64777dcfcbc15ba626d5"
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
    "url": "assets/js/41.907caaf2.js",
    "revision": "fd274756cf70c44ebf27cb56fb82e198"
  },
  {
    "url": "assets/js/42.405d05cc.js",
    "revision": "6c7fa7ee2e4dbb2954cdeea1b0fbd4f5"
  },
  {
    "url": "assets/js/43.74f15334.js",
    "revision": "282fdeb2ad241e9c52cc097caac36a08"
  },
  {
    "url": "assets/js/44.b916c33c.js",
    "revision": "470fd15096c445a093325e0ae60686d7"
  },
  {
    "url": "assets/js/5.bba852c6.js",
    "revision": "b33cc9511cd86190be6583ee2c8993b5"
  },
  {
    "url": "assets/js/6.957f1685.js",
    "revision": "47a05a36fd2ece4c2e4ae2534b75f216"
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
    "url": "assets/js/app.aad41e32.js",
    "revision": "2751a74a0f4def747715508ae852ecb1"
  },
  {
    "url": "assets/js/vendors~composition-api.f8b2f9eb.js",
    "revision": "14b0db6802e47afa1480e081b8443465"
  },
  {
    "url": "index.html",
    "revision": "60200d4d69d0ceb42a5b1febb2eff232"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "d829955e5539c1438adcfecc90a09e5b"
  },
  {
    "url": "javascript/Array.html",
    "revision": "24b33f3386e28b209660abd9fd985368"
  },
  {
    "url": "javascript/Object.html",
    "revision": "1d9ac969b27f6635d605ae251ec5f017"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "0172331da36c0505e53f117ea83d5a1d"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "85a5d508e72a6f8c11cda48b49ef5596"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "1068f529a4157872e664b886daf06f78"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "95ee52d2edc83655e7db9a6895b90eee"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "19f16ec6c38efa78a8918b85bb36d42c"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "56fb7d0c116426c124772785de438bc3"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "163b95d1eefdefe2bd1607aa07d6cf34"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "9f1268baa15023702490c31bf4dfdaba"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "c98bf9cff980b6cd379657e1c75f69ae"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "29b176820d5a34ce6c1b46aa8fc36d8e"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "1ddf6cdf15b8179c1669e28323f2b325"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "9581d62f13bf747b2916b8c8812ff05f"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "fbd8b63ecdce63b0f2d0501b0fc2ca58"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "403563d8a7e817a9d6568feba66093a5"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "2866e7ab8833a01b1f13713c8ac530f2"
  },
  {
    "url": "javascript/节流.html",
    "revision": "9515853a230fd06f3304552b098a1d45"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "b3507c8f0acad0edc174bb1fd4d8a2b6"
  },
  {
    "url": "node.js/npm.html",
    "revision": "54420b2432364376cce2dc4d30a4da0e"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "b5d00c892061584b9d3b27c37be1af20"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "d0f25411f02399ab171822072186721c"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "42b7f0a9e662abc54bf32108b2b0de54"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "f78661de948b9b38664cc48b0b0911b6"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "a1d524a4f47a08323ebba38a13eb1e99"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "53b7320375766b8193ee1780ebab904e"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "949b2751f169d0bb1bad5b3ffb80b47d"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "5f13cd4d042718c529b81ef66dbf8fb5"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "748ab75363252c4b9d33df8202cc86ff"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "6fd2a5c7f2499321afe0a7372ef7f41c"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "161078e73ad9d92912f06199f9b9c69e"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "94418ed19b2ed3bb5112c5e1a467a7a3"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "f5a96aaa6c27ab658c60b474b0187867"
  },
  {
    "url": "vue/vue-next/vue-next尝鲜.html",
    "revision": "6c35d412cab1c06191bcecf37a6f629e"
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
