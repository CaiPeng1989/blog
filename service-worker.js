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
    "revision": "59e642f0f41098ad3fa2460f229b602f"
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
    "url": "assets/js/40.ea85037e.js",
    "revision": "1d9eb7de3f8bba9f365850d0883d9128"
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
    "url": "assets/js/app.04c95903.js",
    "revision": "1edd59ba01250c04bf134d38bb73016b"
  },
  {
    "url": "assets/js/vendors~composition-api.a049b4e3.js",
    "revision": "29e9411dcb2c28ea72953064fd507f67"
  },
  {
    "url": "index.html",
    "revision": "9546bca068b615008794f9e36908aead"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "b6a9f183342756d3eae0f6ad51b8a027"
  },
  {
    "url": "javascript/Array.html",
    "revision": "3af21436c2ad695195df35abad4ef7e1"
  },
  {
    "url": "javascript/Object.html",
    "revision": "7c77d2cba298dc7d13881bc2c0831664"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "7b5a8915598f3004bac360afdce76e7e"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "3be38bf4e454f451df328eb615deb731"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "1391e70c3079320e59406cd5ea9528c9"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "5465e8ebdc2204861fed3c8244801d80"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "e7b2607d72a7d1b4e174ac4aa2e02880"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "7ded14ac10849f78cb1db22192a819cc"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "f39e4672ee9fb45d89e643e7efea2b76"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "951ddbdfcb8887dd8ea94bb015a51532"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "b0529750da027f1da18f9e0881195c94"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "aed47cd52154c2be42146cd9db09866e"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "dc247d052b230858a1cb006f1043c5c5"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "6fbebba420c37114f1ab1640173fb79c"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "3930c87cba27d8ed482b17ff1b1b84ca"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "92d89e741dbbf4ffd06ab7dded8fedd0"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "d2088807905b1707aabe9a9475455d47"
  },
  {
    "url": "javascript/节流.html",
    "revision": "f96ca0cacdc1f07de9a16cb4e9757d42"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "2e6528dc0ddafe9aaeca3d628ad2e04b"
  },
  {
    "url": "node.js/npm.html",
    "revision": "0897647838bd11060b9cffa398af3979"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "c7481cf9eaead54709d9e36e00cc7353"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "38194c78533d97476cbcd70ee82994f6"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "8763082f57ce51ee74db6bed44073b97"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "c8899820042f511bcd49d0aeb3bbf0af"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "c9f2fa94781bfe549bf038a288c98cf8"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "1f7e904eb9ac85001aea54338f281429"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "cbd348f9d7830b8721890891cb88f4c8"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "44e58627159150d8d68747ac5d489ce3"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "4a463cef1dcc4121d1dae279f2330861"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "057c2ad731ef95f2903862d90a66d8de"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "3d3f3b6c00938f0e05063a7ef27c42f5"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "ef1470fc8475c5455d5bf6ea6f8afb72"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "b03080fb790013dc3596fafe9b12c845"
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
