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
    "revision": "b0d13b1d3b9169a61522bb649cb66652"
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
    "url": "assets/js/41.60864562.js",
    "revision": "6555fd6eda3e394780017e0dcf7d1e0c"
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
    "url": "assets/js/app.50a43ba9.js",
    "revision": "d46028249e9f0dfdebb67b208e0f80da"
  },
  {
    "url": "assets/js/vendors~composition-api.a049b4e3.js",
    "revision": "29e9411dcb2c28ea72953064fd507f67"
  },
  {
    "url": "index.html",
    "revision": "2ac8229800152df2f840ca331d007fa3"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "e0ca7989068ce0562cc9f7cbcef34594"
  },
  {
    "url": "javascript/Array.html",
    "revision": "08091162e072b06fa20b4e2852676bb9"
  },
  {
    "url": "javascript/Object.html",
    "revision": "5cdaa2d99a89175df73ed28e0feb1d46"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "36d627d8c3ab6962856548e6905ba712"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "9b9af1bf0c2e0a87b0dea624c9725e32"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "55715b609c1ca3c21fc08d64c91af402"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "6de07e0358d2e000fb1bf792ff826c9b"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "03a9243aec26f0baa288936372b3c0c6"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "4b6ef4a8a9af04b108f655e40fbabf08"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "0d695d913e8703e812f00a899688ba44"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "be910b719c8fc784babedcd5d16fc446"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "89f834dc080fe422b638ea4710e9ade1"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "0080938bab88fc57dfa07f374275ab4f"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "6fbaab2de5f6bffb943659e833bd0768"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "f80a310df11bde4d08dd7c5382ffc94d"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "1d94dfcf933575b3a2ce646aaa6534fc"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "b33fd4462e200be64ac1042da1190d70"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "845dbb68a9fd67a55e41ded843807773"
  },
  {
    "url": "javascript/节流.html",
    "revision": "abfa2ab05e54d5c61563e0bddbd5c696"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "06a5d127849a2d1958cd6961ca69106a"
  },
  {
    "url": "node.js/npm.html",
    "revision": "c8dc889e48d3f667c1c2e67ab68d5e1a"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "916eea46953aaa8461e64ce306cb06e1"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "abecb9915755b23f4e53abea20b4d01a"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "de02d3fba0d6871e01d60ea857c88509"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "0df31504e0908f03bead0fd70ccf4529"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "3185698e75db32095ff4fc582f1c6532"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "69ccb7a7df3c34a701584e4c62fd154b"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "78a1d3951d5261fec2054b1e07955b5b"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "6ff38615a5876aae03d9537c0b4a311a"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "c5698954fd1043e1c4844e043a419267"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "67f803f10e768bf244b30659658bee7e"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "2b233c67ba6a2ffd00c48e515234f41d"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "3221d32f74a19904193dfe8d24dcdbf9"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "13a2f437d3f04f2a83b55f50a373de11"
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
