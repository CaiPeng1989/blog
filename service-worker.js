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
    "revision": "9bf0675d44c1f039ef24ec57914fdbf2"
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
    "url": "assets/js/app.42f04c2b.js",
    "revision": "13b04121a24af65834e61f4b47bfea07"
  },
  {
    "url": "assets/js/vendors~composition-api.f8b2f9eb.js",
    "revision": "14b0db6802e47afa1480e081b8443465"
  },
  {
    "url": "index.html",
    "revision": "fe2b5c71da4f80fab5a0ff15116ebd41"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "8ce2d92d4fe057886f71b3ae796780e9"
  },
  {
    "url": "javascript/Array.html",
    "revision": "5a452007dc0c191fd459b0edd3b41dcb"
  },
  {
    "url": "javascript/Object.html",
    "revision": "fc0bf7b6bb4a60c55c2c8f4f50163028"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "100addbfe6e129bc1fc201db58a300ff"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "3c6dd262a28b97a3f5793dff25aa7318"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "3fb27752af6adadbc42a1b2778a901a9"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "6136c57c58a69080dd9f5463215405e4"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "e7dd230c12fc4dae51bddbd5b786b492"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "ddb2a6b003d6b300b9aeb3d7b5bb37b5"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "33a1ce0045c49192788ff126d8a9ede3"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "f9eeace3e866c682977b0ecb0d0dd7e7"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "87d47d5e335f9f015adfe5b5346053c8"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "617e9d714c52800fea689012eb9987a2"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "1e67e608666f9dfb80f618dd1ddb2f3b"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "b138c7e7f0e24b8ab2ccab172a0d3ace"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "874a35c3e6d7c42857871b21b30e9ae6"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "ee409d61e1d86984ed4281de104d336b"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "659ea10147b3d1654028cc2ea0162a5b"
  },
  {
    "url": "javascript/节流.html",
    "revision": "aef22036cc9916f28d649a5311c898e1"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "69a528d802685bea002bb9460e4a79bf"
  },
  {
    "url": "node.js/npm.html",
    "revision": "c96f358b39f699d60bf18749005947e2"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "64c7055790803fcc5b7a3954fea0b2c6"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "8de1f4367452f8bdadf1bd491d8a9c21"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "c729be113da1cc663ffa0673995fd9d4"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "c34284d91ffa6d82847568da793e3547"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "ff7d07bccfc2d386a580489799223efb"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "48177b35ca2d4355eb8172dfbab86b75"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "eb7a47f54cae1c295f59912c5dc1d74d"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "ca1c08f4b1cad552c29925c9a0478ae9"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "3822e73a8da8251d77ee8e0fc8fcf053"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "3d717b1e473e53bedcebe53b4dd28e0e"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "1eacd08127a9d7f8328c26f5712c6942"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "ab6ffe6941e4b2491d23f318b44b45c7"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "89248eaf6e0d060df93556cfb4d73443"
  },
  {
    "url": "vue/vue-next/vue-next尝鲜.html",
    "revision": "97da674881f41cd8d921f75a338e73cd"
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
