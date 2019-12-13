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
    "revision": "344bc38ab0eb4a4415b9347f59e90674"
  },
  {
    "url": "assets/css/0.styles.c1314d05.css",
    "revision": "aa0f3b552197ae95346c34f0a3ccdeaf"
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
    "url": "assets/js/42.6f0cb621.js",
    "revision": "43b8697c343c9936fc99c8e4b9b96236"
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
    "url": "assets/js/app.6093d10e.js",
    "revision": "d4bf3a45163e630f043dd7bef2ed45bf"
  },
  {
    "url": "assets/js/vendors~composition-api.bce0768e.js",
    "revision": "bed03ee66885864f7cac237960a037dd"
  },
  {
    "url": "index.html",
    "revision": "76af347e252904aac39f765aa8230cea"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "8926d61e4656960a9636f7281d037386"
  },
  {
    "url": "javascript/Array.html",
    "revision": "f8db30cbdb9af09bd0bda655cbd275d9"
  },
  {
    "url": "javascript/Object.html",
    "revision": "1f32a3c2ca8f09034bd2a93c68811ef1"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "21ed65154cba5bc30a38d2142ab5853e"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "cc3d9159bb589a96a52d16e1be4aa359"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "54221d7e4c61b5275155590e095b5f26"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "34e34dc3b26d048a4732faea247a0ec4"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "33acab35964827d24e6e74dfb21f6cfd"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "6ba84cb42822681a15751fddb9fe6d54"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "daa405e06828ed51f6b3f7aee419f8cc"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "d1459dff5a890b934e51433fc3729166"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "ca5b5385d226016ae9e361b9fadf376f"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "0a1ba871c4ce03aaf19298f74ffad88f"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "52c0f712ac391f0c965c099f5b7723ae"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "db7a5ff427e55fd7e31a6e2bf68af1a4"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "3b37b40798cec463161561efa8a95afb"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "3348bf621855fbb890e51a0960f1fd07"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "a36f03bb56b20bc3f8c05af0438c473e"
  },
  {
    "url": "javascript/节流.html",
    "revision": "a5eaf854dd6a2a02acf74f874c29e333"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "ab2fcdf0ce67709ae87b94c600fad1b4"
  },
  {
    "url": "node.js/npm.html",
    "revision": "ac1fc560e358c573fb4f003e17ffa226"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "a5562b613d82cf854e6286e2654d5140"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "9407be5cb593136957770ecc5dd5534b"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "189a2191b1cd2bc1ab2205757f1a62db"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "754562bbae5a40da0afaf62eb41f5ec1"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "8eb07566b8532b5f6b4c12e5c991b638"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "1268386489373ed562b8ccca93e8bde9"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "be5bc6f1daa4554e1ab7adfd3eb25931"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "a27b59dcd2ef6abbb54f1d11d5f624aa"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "a4343e930e895d319fee0694c9403a62"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "a9a4e43009d470e61c08750e01088433"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "613ce03bf94eecda80567e2390f3f90e"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "7ead859285d91142aba2528ce291d4f9"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "b0cff9ceb9c5d8a99a5869a755daaec2"
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
