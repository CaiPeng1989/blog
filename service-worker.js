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
    "revision": "e1ad5a139afa3b8150b8805d8f43de35"
  },
  {
    "url": "assets/css/0.styles.c6c6c5cf.css",
    "revision": "f395c1b16c00f505a3a2e14112d1cd35"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5ae78513.js",
    "revision": "1678600ed7f679ca852f9693a446678f"
  },
  {
    "url": "assets/js/11.93f6e5ac.js",
    "revision": "59031468a9f0157261ec2799d8a85a02"
  },
  {
    "url": "assets/js/12.ecf119ea.js",
    "revision": "7055b143f28c10fbf13a21bc2d8a4cc7"
  },
  {
    "url": "assets/js/13.f84efec6.js",
    "revision": "a22e9dbc830461d08fdde8e5323bf4c6"
  },
  {
    "url": "assets/js/14.af590757.js",
    "revision": "e1d1d2d2d41aa244cf7dbba613eb553b"
  },
  {
    "url": "assets/js/15.281a2588.js",
    "revision": "6bfabd4491f63e0a664d7c912a26b4a3"
  },
  {
    "url": "assets/js/16.2851ce46.js",
    "revision": "71ed9b9216c1b01bfd554fbd044aedb2"
  },
  {
    "url": "assets/js/17.41d4e517.js",
    "revision": "b595d5ae4de4e1456965510bf3b22460"
  },
  {
    "url": "assets/js/18.12be281f.js",
    "revision": "85cb69f12e8b68bc65f7f06c4482ada8"
  },
  {
    "url": "assets/js/19.a11c3e67.js",
    "revision": "1c596e0c44849ba02df8c4963fe4d9cf"
  },
  {
    "url": "assets/js/20.cebcf7a8.js",
    "revision": "2dda7630f8345d27cbcfbe61bd8340eb"
  },
  {
    "url": "assets/js/21.4e985b37.js",
    "revision": "b13b972fa1404ab0032f376ec3b0fe50"
  },
  {
    "url": "assets/js/22.2bfa8ae3.js",
    "revision": "4cac5e1a06a2a7c7debe42170dbe1a4e"
  },
  {
    "url": "assets/js/23.3faa8f69.js",
    "revision": "3a1652f3916b0913965a3c5e9d2af4e1"
  },
  {
    "url": "assets/js/24.8ae9b24f.js",
    "revision": "63f28e78f832a564f02a9405028e3bc3"
  },
  {
    "url": "assets/js/25.1d4b7a01.js",
    "revision": "73ba25d694643b9a4f3129632b70474c"
  },
  {
    "url": "assets/js/26.a886c82d.js",
    "revision": "24886b14fc4f2dece643ce59a209bc5e"
  },
  {
    "url": "assets/js/27.5f7580cb.js",
    "revision": "a03536ecbfd29ba2a69d6009d0221c8a"
  },
  {
    "url": "assets/js/28.d6431768.js",
    "revision": "c4682541357fd3ca898762d855934534"
  },
  {
    "url": "assets/js/29.9840277e.js",
    "revision": "bf6b395d5765ba505dfc47c6ce2de948"
  },
  {
    "url": "assets/js/3.d0c53fe4.js",
    "revision": "944d5ec3e037741d6d4bb995810d1802"
  },
  {
    "url": "assets/js/30.ff67ac8a.js",
    "revision": "1313abd4e2214e699c19547bd0fd9ce1"
  },
  {
    "url": "assets/js/31.e0c40b9d.js",
    "revision": "efe289232204d0297bd1e5f5af4052b8"
  },
  {
    "url": "assets/js/32.2a2256ff.js",
    "revision": "f17e6845bfded9ed8d690800ee8d052f"
  },
  {
    "url": "assets/js/33.e70cf733.js",
    "revision": "535aac72afdc1ef02feefe060f8fadf6"
  },
  {
    "url": "assets/js/34.fac9102f.js",
    "revision": "de7449bcacc379d9a29eef0ff5388222"
  },
  {
    "url": "assets/js/35.20e3551a.js",
    "revision": "34a02843424eaf2bb78460e8bbea2bd7"
  },
  {
    "url": "assets/js/36.17f0f236.js",
    "revision": "4ec69173e3c685621c5d5a08d1e2b687"
  },
  {
    "url": "assets/js/37.aa4d4a5b.js",
    "revision": "141b5ede70da9efdb73a0df2c6120161"
  },
  {
    "url": "assets/js/38.921aefc6.js",
    "revision": "ba5eb3f73cab70231169d68c3ce53b77"
  },
  {
    "url": "assets/js/39.063d2ba8.js",
    "revision": "432369d632814a823ed8e408388d7969"
  },
  {
    "url": "assets/js/4.5f459896.js",
    "revision": "19b3d6bffee5bc0689a8e01644cb8230"
  },
  {
    "url": "assets/js/40.1532133b.js",
    "revision": "b079800be5ca22d80abc9ae30ba3a760"
  },
  {
    "url": "assets/js/41.f6184c7c.js",
    "revision": "43ed9fa27d5ff86ac3ec88322902f07a"
  },
  {
    "url": "assets/js/42.1856cf6f.js",
    "revision": "0095f14367ecd80ace760b1d40af5501"
  },
  {
    "url": "assets/js/43.ef7373be.js",
    "revision": "f954809568f93c840ec21d8c3618a63f"
  },
  {
    "url": "assets/js/5.0fb0672d.js",
    "revision": "b4265304b9f08ce88f7fcf5b8f27cf50"
  },
  {
    "url": "assets/js/6.bedb05c4.js",
    "revision": "637255eac0c7cd9bf93b8e83f9660627"
  },
  {
    "url": "assets/js/7.33bcdba2.js",
    "revision": "387ef227b140f9975062459e6c335e8b"
  },
  {
    "url": "assets/js/8.c4b63b23.js",
    "revision": "52cdc2c1761dc8b6a725929d42409f3b"
  },
  {
    "url": "assets/js/9.41210339.js",
    "revision": "96c106b03500d27223c93464f7853ac0"
  },
  {
    "url": "assets/js/app.31bdba54.js",
    "revision": "ef11addf38b848cda4a4038e94a73855"
  },
  {
    "url": "assets/js/vendors~composition-api.a049b4e3.js",
    "revision": "29e9411dcb2c28ea72953064fd507f67"
  },
  {
    "url": "index.html",
    "revision": "7e4becc6b45fb579cb9f229a710e2dc9"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "0f5db857b42315b46d55004c5c03e029"
  },
  {
    "url": "javascript/Array.html",
    "revision": "a55ddb2dab9e25b5de5fa0bcae488a5c"
  },
  {
    "url": "javascript/Object.html",
    "revision": "d08c0c1abb922252a9850529930d32e1"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "744b16879050d2cbde15f9d9acba09af"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "323ef66ceebe22bb5e8360fdff92cee9"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "4a5995cba6e38c68ecd71cf052f7bb7f"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "53bdc0a027545c81fb88e65f4260fc6b"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "f1362eaca04b340c03ec3d81dcb56aad"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "bf95078277e575c7f284f042bb8ca8ad"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "8114970dbacf24bcc5c98b102aba40e3"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "81bd9c03d2e089981963941344af2439"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "d4c3940a9037e0766f915646da77f277"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "b272a8b69dc4eb5ba2cda1afbbfd7393"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "bb301a9f79749ca0ed1205fdb9916977"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "720b7fcecf4d338009f19f9f2f616651"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "0a93f350e0f5ed3bd39ab2aab9c4589e"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "7e5a89a893a084d2290d72b559c7bc71"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "66904bf2b9a69daf665b9cfa7982dfba"
  },
  {
    "url": "javascript/节流.html",
    "revision": "7d213edf13262fa5d51ee323a0e9fe86"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "7e4415c3195c51de6f7a0010a2d2c54e"
  },
  {
    "url": "node.js/npm.html",
    "revision": "f0f9e3fac2a606e1a7fbcf2a4ed27cbb"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "fec03466d336f6f173e5295d5ee2cabc"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "fb8e91f5ef1bfd982d65761fcb847d23"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "b5584fe43ed8dfcc189186a6f42c2c60"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "4fe339649ea0c65dd7c4fa28edc5f99f"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "2b11a19d25381b4465bce129f98013fa"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "200bbd533a26f9196372d39a6facc3d7"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "cd2c3ea7d4940d53cb21041238a774f4"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "2bbfbc4f5689a8d03551c3a4aa3e9553"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "14284d573685eaa330dc9412ec979eeb"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "41e14106c153ddde4c0e7f48abce8289"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "20f210f8bf8f8ad246308d5b83a99a36"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "cb2138b2d436036c8150604feacc0bcc"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "2c873ef9097afaffc87759842112b781"
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
