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
    "revision": "63dca58b0c5b4b938532671de9e19cc7"
  },
  {
    "url": "assets/css/0.styles.45902fd0.css",
    "revision": "8f83f236e0fb6bee30fcc821fc3f72bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6eea2908.js",
    "revision": "2bc4281f5c351fdc1db5c018baa88f9e"
  },
  {
    "url": "assets/js/11.7954785e.js",
    "revision": "aad1f5931e62288f1e47ce083adb4ebf"
  },
  {
    "url": "assets/js/12.fda2f7bd.js",
    "revision": "dc78b049cdbe93101673658027c37611"
  },
  {
    "url": "assets/js/13.5b09c41b.js",
    "revision": "6e0b82f8d67dacab28251bc0cfbdf146"
  },
  {
    "url": "assets/js/14.d19c99d4.js",
    "revision": "849594a4a03943f931493414d5558c6f"
  },
  {
    "url": "assets/js/15.922b0485.js",
    "revision": "1db5a291c48b2f76d013ae94fc98785e"
  },
  {
    "url": "assets/js/16.9f9c5f23.js",
    "revision": "7fa3f57ecba0d93c7c13a94a8854833a"
  },
  {
    "url": "assets/js/17.1d4295fd.js",
    "revision": "1af612a4ebd18d928c14e0cf7338a830"
  },
  {
    "url": "assets/js/18.643a55a3.js",
    "revision": "6a96bc15ec65624d3554c86dc510208e"
  },
  {
    "url": "assets/js/19.9c51e69c.js",
    "revision": "54898c3e3f97e6de9b7a35e5dd1ab697"
  },
  {
    "url": "assets/js/20.0a403234.js",
    "revision": "030847f2cd6e4ec61bf649cc1914e823"
  },
  {
    "url": "assets/js/21.bd9b4709.js",
    "revision": "37119a8cb31970b62c52a5b432c7d329"
  },
  {
    "url": "assets/js/22.40f5426d.js",
    "revision": "fea50c03e21668411a7b3246822f920a"
  },
  {
    "url": "assets/js/23.d6e106e6.js",
    "revision": "ece6b8c752e2da158474b3fc0a7956cf"
  },
  {
    "url": "assets/js/24.809dc467.js",
    "revision": "93d9b4b8dab7cad7ef32a41b1426ad89"
  },
  {
    "url": "assets/js/25.6d0a0db6.js",
    "revision": "a645ff96aa03c0b3c71659dbcd080146"
  },
  {
    "url": "assets/js/26.fdf1fb15.js",
    "revision": "92ff1ef3ba0802a5041798dde7afa669"
  },
  {
    "url": "assets/js/27.4b711a1c.js",
    "revision": "2eb9bd85c7a6962c21469f722c578bc2"
  },
  {
    "url": "assets/js/28.08d56724.js",
    "revision": "13ba91c523a8a1b65630c928758ef569"
  },
  {
    "url": "assets/js/29.40836019.js",
    "revision": "37736f45c8a92356f2d3b48e66c4ecd9"
  },
  {
    "url": "assets/js/3.e9464d98.js",
    "revision": "8080449b0ea4b0da151f9f76273f4be3"
  },
  {
    "url": "assets/js/30.04dd89d6.js",
    "revision": "019857857c4892086d9a71c11d24a3ac"
  },
  {
    "url": "assets/js/31.814075a2.js",
    "revision": "7cda1117c76fff1dc794d36816d1d605"
  },
  {
    "url": "assets/js/32.b34f9c3a.js",
    "revision": "52a9c020d5c468918ab65f13afa9f5cf"
  },
  {
    "url": "assets/js/33.1fb39998.js",
    "revision": "39f246d6a18e559b6b300ebbee8489ea"
  },
  {
    "url": "assets/js/34.569a816c.js",
    "revision": "fbd8f9e9b1f21a2fd470a7cf75bef12a"
  },
  {
    "url": "assets/js/35.1b79ed31.js",
    "revision": "c0bfeea4ec3157ea1921f349fc22497f"
  },
  {
    "url": "assets/js/36.cf4ce57c.js",
    "revision": "c7841b27e90539e33751342e2d1fcb3f"
  },
  {
    "url": "assets/js/37.21b7a735.js",
    "revision": "a41304d86da80ab0a1448d5e088b1665"
  },
  {
    "url": "assets/js/38.a81b1406.js",
    "revision": "ba0b6d7aa7f3d13a7a91435532a0ae2e"
  },
  {
    "url": "assets/js/39.5ed91689.js",
    "revision": "1886b10a85427d76af5fed274682c76e"
  },
  {
    "url": "assets/js/4.3bcf0a2a.js",
    "revision": "9ca9b73c471dba9aaf6572ac525aa26c"
  },
  {
    "url": "assets/js/40.6923ae46.js",
    "revision": "5ada0a5da657cc8666db5d17b0fe2dbf"
  },
  {
    "url": "assets/js/41.30eba3b1.js",
    "revision": "5ee44202e1bfd6fc0340b59c69971c4f"
  },
  {
    "url": "assets/js/42.099de695.js",
    "revision": "82739a3a79fe1bd04e17f24fbb01bdfc"
  },
  {
    "url": "assets/js/43.49e3ed86.js",
    "revision": "c02054b1e5ed9e0ae7a4275e065341fb"
  },
  {
    "url": "assets/js/44.d7336d73.js",
    "revision": "24551f99a9e0d0a475488fa2c6b11ac8"
  },
  {
    "url": "assets/js/5.49e0dbbb.js",
    "revision": "358dbe83bad837162a917d76058fa2bc"
  },
  {
    "url": "assets/js/6.66b2c153.js",
    "revision": "d2da1f73fa7c93c571b72a516e9f46be"
  },
  {
    "url": "assets/js/7.be28ef34.js",
    "revision": "d21024af29688412bc5eeb01bad0a945"
  },
  {
    "url": "assets/js/8.9845f9d2.js",
    "revision": "289837f9a87c4f84d623d3a93b22a762"
  },
  {
    "url": "assets/js/9.712067cf.js",
    "revision": "aa4fca2c7213333cbfbec1c98571b848"
  },
  {
    "url": "assets/js/app.25d1f650.js",
    "revision": "7b5b1367dff8031d0f1d790fdf06ea3c"
  },
  {
    "url": "assets/js/vendors~composition-api.05b634c4.js",
    "revision": "efbb44bb005564ecf35f12f4e043fb2b"
  },
  {
    "url": "index.html",
    "revision": "d3a7717c22abf3a544e736eda4580ce4"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "518253087ea751853018a8bc562fdfb8"
  },
  {
    "url": "javascript/Array.html",
    "revision": "9888024cf32396fc395a9ee3faeda06b"
  },
  {
    "url": "javascript/Object.html",
    "revision": "063b6982f9ddefb7dfd0571196247eea"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "2c03a7775533228323c8e5ed28a7ca1a"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "b116d86574e91102b646704af714fbb6"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "f95887f1242207753ab8a2255ed2667e"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "12c052b020e32f7a099ce22b69cddd71"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "d98bf4d4e81f95be5174208e4c2c026a"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "da22f2beccf20c1d1902af9ae4508057"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "b215592d96b80c2d74b5dab13f6b4e0e"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "fa6fa270172694ac9021290291f7ff19"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "4c3e4115348b8b76ad160c2a9e9fa9c9"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "1619407a00db4b50630f9d46500022d3"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "d99e3f08abc3aec64c239c7c3ac63fec"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "098a02d92fcecb251f6fed6c1aa08ab4"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "dbb021d2d214652d098b48841eaf36be"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "a5ef861fd8b4931e9869fb6baca2d0b0"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "cdb79f202a995c070e1270c24647d163"
  },
  {
    "url": "javascript/节流.html",
    "revision": "7a6aaa14352048d75e37424a132abdca"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "bfc42443c44058ac1cdadb68869c745a"
  },
  {
    "url": "node.js/npm.html",
    "revision": "26e6d87e04510bbdc9b8f8a682dac79d"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "a36ebd8ab87161afbbcdc2eac5b93232"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "7c97de00b91318bcc669938411789b1b"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "14661f4a07f0f7d0d2c94e3fc790d6bd"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "6e680f0afbc567b4daa9ba5e05ecdc04"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "7e4090aa4b6d697e0a7a7589de62efde"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "ee06da6a9b1d11f0cf888738d51990c3"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "b244dbd1d12e41d0fcdcbb9938b77971"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "6287b48f032e62f2c751ec5a97557053"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "72570ccdb574064f9539b6a56383791e"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "91170b833b314ca0140f8ab64a975912"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "eb08fb3addb3e64e37421ccff0818ce0"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "11f651f1173dbead609b985d828dd674"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "25ea3e96ec038f52b38f1cf1f5f9bd91"
  },
  {
    "url": "vue/vue-next/vue-next尝鲜.html",
    "revision": "c84f7901c4225ee53f3347129f3e1f96"
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
