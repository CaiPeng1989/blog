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
    "revision": "b3ea2ecb68ba6b18e4c0914715de3693"
  },
  {
    "url": "assets/css/0.styles.ec6203eb.css",
    "revision": "07154bf53046dc19fbd03cb0905b2114"
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
    "url": "assets/js/40.e252fad5.js",
    "revision": "b0bae0f8eaecfb9acd4d4a5896a0222d"
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
    "url": "assets/js/app.d7a688f7.js",
    "revision": "c44be66c1b4297e01f905690b57463f8"
  },
  {
    "url": "assets/js/vendors~composition-api.a049b4e3.js",
    "revision": "29e9411dcb2c28ea72953064fd507f67"
  },
  {
    "url": "index.html",
    "revision": "4e4f93afcccad88e89e794e261897f9a"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "31c2a03f58ae96defeac32165a7235ca"
  },
  {
    "url": "javascript/Array.html",
    "revision": "bd1629784a886aabee88a91384940cad"
  },
  {
    "url": "javascript/Object.html",
    "revision": "fc0e6839059877363fb4b74677595794"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "d81eb82e985150edc732ddd4bc733b37"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "fdeca21978f07e786af396dd515cb467"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "161b35a22722ef2dba160b9ec9fb0754"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "47d5a6af95ee7a682d1520722ac72351"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "c320e177cfa9f83d222683a47b496502"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "26c286a6d91cd5c5d5e3e9d876ea3d61"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "b3f0ce09f2617c4e7961ce951a8e4426"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "8798052c18b393f90866100840e0a0f3"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "b4658fdbf8b1993600aa0d5402f9c784"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "e1af2b6568797229be8b772f931ad5a0"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "da2da98a52256ea25270bb8fc22ea779"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "201bebb75bae70e64567be279691829e"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "c3a42b77215d9ab56d98da2848584d26"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "124b3e911775f5608e6f658065fa2591"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "06f89c4faf14fe97257801c8a5567cfb"
  },
  {
    "url": "javascript/节流.html",
    "revision": "d519958cb77eab86e145ed20d8c2040b"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "3ad139e032b03584445a5f1244e5f2a7"
  },
  {
    "url": "node.js/npm.html",
    "revision": "5d919d22baa21500acb35bf641d2bc9b"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "8b3f0718ce1a7b817e2afa406f0ac408"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "2595e156b2670a0ac2371f62bea0dbb6"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "cf72939bb3afdf485796a97e51d948b3"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "680ff5bce8a9f45e097edb6822e57953"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "95561276e553eb3fb313cc516e795f43"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "7eecae981cdd3113d23b0d2257898e56"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "ded9018503299ebbd37792adc85486de"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "c25f2db3a0fd5d66dd33120cc570f8d9"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "ed4d35f2509d3a34def8e7155ab2ba9e"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "b481e07f7b8649d47af46e7cf44c3dd5"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "d8d10c550c6c890127a5cc185e07d364"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "c2cd2148c9f8c85df0db823301a842e8"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "cf18b1306d2960e9138023bdfe94aa64"
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
