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
    "revision": "4855329066a50425a34d3bc1162344ab"
  },
  {
    "url": "assets/css/0.styles.4294312b.css",
    "revision": "4d7d6eb34d007b494b0d516b4c9c7766"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fb8d7b6b.js",
    "revision": "20e66c0eb3ff9c904185dbc799af49eb"
  },
  {
    "url": "assets/js/11.d18f1e59.js",
    "revision": "532b9586838d45384c0afd5e1e516fe8"
  },
  {
    "url": "assets/js/12.870f6d87.js",
    "revision": "340fddffbb3273f5ccf839f4aefc8949"
  },
  {
    "url": "assets/js/13.1c95da8e.js",
    "revision": "440e32d37e35f986145bbac44ef02d16"
  },
  {
    "url": "assets/js/14.e73f832c.js",
    "revision": "17b4a7e6d442269b2ad029956d58302e"
  },
  {
    "url": "assets/js/15.919f1bfa.js",
    "revision": "be1cc75409503e3dd700627b371cd8a2"
  },
  {
    "url": "assets/js/16.ce0afd89.js",
    "revision": "755beea18e567ca30daf8658cede2d25"
  },
  {
    "url": "assets/js/17.3d3d8e6b.js",
    "revision": "55765a2996f077f0e53e6362582ea89f"
  },
  {
    "url": "assets/js/18.e6ae3eab.js",
    "revision": "a15bb06d05134c543c4391b636182f21"
  },
  {
    "url": "assets/js/19.ace9ef3b.js",
    "revision": "9160d66ceb658a71c761891d74459afd"
  },
  {
    "url": "assets/js/20.35aee314.js",
    "revision": "70b5f01e8f74568d831182708485e9e9"
  },
  {
    "url": "assets/js/21.81275ff0.js",
    "revision": "89bfc20ad5708f6a4286072dc4ef0b8d"
  },
  {
    "url": "assets/js/22.aecc7c79.js",
    "revision": "e663d2c935aa916ce038eb8d01bc0607"
  },
  {
    "url": "assets/js/23.a2731e0e.js",
    "revision": "95f7979b2a7a8ab2852b893e98c65d48"
  },
  {
    "url": "assets/js/24.e69b77a4.js",
    "revision": "8da30a4dfe5ca1c1a6bd7c031f64e398"
  },
  {
    "url": "assets/js/25.c3181624.js",
    "revision": "4480e315a34423f1e676e4fbff514343"
  },
  {
    "url": "assets/js/26.c3d9c8a1.js",
    "revision": "d006aa819d990b6051f97a98e7e589c4"
  },
  {
    "url": "assets/js/27.3dec0ba7.js",
    "revision": "e3c1061f9939ef6c16d4e49537f7df2e"
  },
  {
    "url": "assets/js/28.c3ee4f1b.js",
    "revision": "28d558692d822a2f1a5d0a61b1c0dcca"
  },
  {
    "url": "assets/js/29.ff1e0aa4.js",
    "revision": "0938c2b995a04e11c16e0a9e794231f9"
  },
  {
    "url": "assets/js/3.3a9381b3.js",
    "revision": "e9e10b1cdf9b68ede3fe03b4765933ff"
  },
  {
    "url": "assets/js/30.008909d5.js",
    "revision": "a696951f4579f97dc765c5c60b58fa73"
  },
  {
    "url": "assets/js/31.57d153ab.js",
    "revision": "8ab833a889bab5969008f7652eb547ce"
  },
  {
    "url": "assets/js/32.4f2fdeca.js",
    "revision": "58ebf90fb7191ecca32cb754eaa6dbfd"
  },
  {
    "url": "assets/js/33.a3070a72.js",
    "revision": "6afa3dada7a014dd99d713dfc01576d6"
  },
  {
    "url": "assets/js/34.dc3803d2.js",
    "revision": "fffdd4b4d7ac9433c7a2879f98d7a771"
  },
  {
    "url": "assets/js/35.5fa1ca10.js",
    "revision": "e7e74a03b8bb92f2732cb7980979ffd3"
  },
  {
    "url": "assets/js/36.0e4d6e79.js",
    "revision": "dcd792076c47e08036e4f0d9b3f2b390"
  },
  {
    "url": "assets/js/37.f76c6bb7.js",
    "revision": "e98c214bc6770fcbd75d71512cb91e31"
  },
  {
    "url": "assets/js/38.e2fe4d08.js",
    "revision": "518adec78899d1431de52c165b5d0376"
  },
  {
    "url": "assets/js/39.7fe9da59.js",
    "revision": "d958a5261d36f79bfced535a34e6e26e"
  },
  {
    "url": "assets/js/4.0abcbf8d.js",
    "revision": "e9ce28348cbee3b06b2e73cf1033708b"
  },
  {
    "url": "assets/js/40.d5df4646.js",
    "revision": "c27414110b02f0f919f0264538d4ed81"
  },
  {
    "url": "assets/js/41.e68885c7.js",
    "revision": "659d7fcf2a7e834d0ca11b28299f0eda"
  },
  {
    "url": "assets/js/42.e6d97a7f.js",
    "revision": "5474835503cc6ff1e3eb790b22d71be6"
  },
  {
    "url": "assets/js/43.37a5d034.js",
    "revision": "2add5c275e247b20f90e269ec2501c87"
  },
  {
    "url": "assets/js/5.e0132b1c.js",
    "revision": "a57a97eec3c53edfc6a4f01ee1f15cdb"
  },
  {
    "url": "assets/js/6.b0695038.js",
    "revision": "855bfb4e597052928bea739af7bca5a0"
  },
  {
    "url": "assets/js/7.13d4c8ba.js",
    "revision": "0f99f31936804e78098345082dc9134f"
  },
  {
    "url": "assets/js/8.e3cac251.js",
    "revision": "20f802c13c6e2ca26f6522226d1f72b4"
  },
  {
    "url": "assets/js/9.c8acc707.js",
    "revision": "21033581369f75c328cb74b838b187a7"
  },
  {
    "url": "assets/js/app.66955b69.js",
    "revision": "fb748eb7bcf5042420410a8b16244369"
  },
  {
    "url": "assets/js/vendors~composition-api.bce0768e.js",
    "revision": "bed03ee66885864f7cac237960a037dd"
  },
  {
    "url": "index.html",
    "revision": "f33a0ed47592e1e7a25eccbe75f84ffa"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "f4bafd0ea573b1f73a610f411458ecbb"
  },
  {
    "url": "javascript/Array.html",
    "revision": "9328888e87822b845ab1fc3859c9b20c"
  },
  {
    "url": "javascript/Object.html",
    "revision": "793c5c7cc9f66749be07fb5844355de0"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "1112a43ae36b3aad0d7efb900ff04846"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "be1ed45b0967a7cc2ad18d4bcf919653"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "ada4ee0a58d8ee6429d17a07fc145d41"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "b6e44761d5f05430c6d5f2b91d3168c5"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "6a0ac0a442755847cd74320a91f60c12"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "d8eadb25249307692a78fcfa98140402"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "c035e3c2438accf23e6aa7d6cfa85fd9"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "1a048b038891e7c04c8301c2eeddbf8e"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "82d056cfb15ca037a8f0cf8ed58352fc"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "3163ba95fc75ef276c0a4fb839ddc349"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "f7b904bace57614618b749989030dd9f"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "5b7b3c9c22b14022257c4ff088e6f288"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "68b31cd76a722e4dea526301c014f937"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "4f799268b783f7b81dba8a0cd78276c3"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "b77506877bed530a867c8ce2b5fda187"
  },
  {
    "url": "javascript/节流.html",
    "revision": "4d6d50b5c855a8ac17c6aa7b256cc657"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "184da524fa9ce172ab87b4112d30a5d0"
  },
  {
    "url": "node.js/npm.html",
    "revision": "6fc26e3d88e90cc15a6d64b2496ebe4c"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "f91ad9a08c5ef3eb1bcfc4a25d965dfb"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "4fbbbd47c0ed7f1057cf3ac77c61e4a9"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "e82b42b710b35566579a463ce3e22560"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "9d2321f67f05c70ba4d7681480ca2f1b"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "efa1676e01d348fb3417f05175843322"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "f482c6f161bd97bf066c500a22afb5ad"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "8517386a12d347db13800494c0893c4c"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "06bd3d028642d89650528ddeab959d98"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "fa261ebf49e911b124b2c5eb7cdbed8b"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "227e18db859d1c6f2d8793447f85b5ff"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "8f67b71de2389470b83b0c59d3ccbc7b"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "88140f14d4702445fc3ed4cbfd9487b4"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "3f280197a48dd62049e1e87a7f905859"
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
