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
    "revision": "01c657553cd0861bb744e6cb9e6d4422"
  },
  {
    "url": "assets/css/0.styles.9429f6c8.css",
    "revision": "298c2787d1246536b3ba9c827997555a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.225efc15.js",
    "revision": "2bc4281f5c351fdc1db5c018baa88f9e"
  },
  {
    "url": "assets/js/11.a9b318b2.js",
    "revision": "aad1f5931e62288f1e47ce083adb4ebf"
  },
  {
    "url": "assets/js/12.a6a27d39.js",
    "revision": "dc78b049cdbe93101673658027c37611"
  },
  {
    "url": "assets/js/13.eea11949.js",
    "revision": "6e0b82f8d67dacab28251bc0cfbdf146"
  },
  {
    "url": "assets/js/14.57ed5f0a.js",
    "revision": "849594a4a03943f931493414d5558c6f"
  },
  {
    "url": "assets/js/15.4653755c.js",
    "revision": "1db5a291c48b2f76d013ae94fc98785e"
  },
  {
    "url": "assets/js/16.f9b94c4c.js",
    "revision": "7fa3f57ecba0d93c7c13a94a8854833a"
  },
  {
    "url": "assets/js/17.7aabf805.js",
    "revision": "1af612a4ebd18d928c14e0cf7338a830"
  },
  {
    "url": "assets/js/18.590a324d.js",
    "revision": "6a96bc15ec65624d3554c86dc510208e"
  },
  {
    "url": "assets/js/19.124cef52.js",
    "revision": "54898c3e3f97e6de9b7a35e5dd1ab697"
  },
  {
    "url": "assets/js/20.53cd7ccc.js",
    "revision": "030847f2cd6e4ec61bf649cc1914e823"
  },
  {
    "url": "assets/js/21.35b5c3b7.js",
    "revision": "37119a8cb31970b62c52a5b432c7d329"
  },
  {
    "url": "assets/js/22.b6d518e5.js",
    "revision": "fea50c03e21668411a7b3246822f920a"
  },
  {
    "url": "assets/js/23.48748f8a.js",
    "revision": "ece6b8c752e2da158474b3fc0a7956cf"
  },
  {
    "url": "assets/js/24.1dd3f861.js",
    "revision": "93d9b4b8dab7cad7ef32a41b1426ad89"
  },
  {
    "url": "assets/js/25.968cd4dd.js",
    "revision": "a645ff96aa03c0b3c71659dbcd080146"
  },
  {
    "url": "assets/js/26.d0ae3a2c.js",
    "revision": "92ff1ef3ba0802a5041798dde7afa669"
  },
  {
    "url": "assets/js/27.a2b1ccc3.js",
    "revision": "2eb9bd85c7a6962c21469f722c578bc2"
  },
  {
    "url": "assets/js/28.c2071ccb.js",
    "revision": "13ba91c523a8a1b65630c928758ef569"
  },
  {
    "url": "assets/js/29.4347afdd.js",
    "revision": "37736f45c8a92356f2d3b48e66c4ecd9"
  },
  {
    "url": "assets/js/3.bd4970f9.js",
    "revision": "24953591b7289ffc69aad678a5234417"
  },
  {
    "url": "assets/js/30.4d87a4f6.js",
    "revision": "019857857c4892086d9a71c11d24a3ac"
  },
  {
    "url": "assets/js/31.b6cbdd43.js",
    "revision": "7cda1117c76fff1dc794d36816d1d605"
  },
  {
    "url": "assets/js/32.b42086c1.js",
    "revision": "52a9c020d5c468918ab65f13afa9f5cf"
  },
  {
    "url": "assets/js/33.5322746a.js",
    "revision": "39f246d6a18e559b6b300ebbee8489ea"
  },
  {
    "url": "assets/js/34.605cb958.js",
    "revision": "fbd8f9e9b1f21a2fd470a7cf75bef12a"
  },
  {
    "url": "assets/js/35.e9222100.js",
    "revision": "c0bfeea4ec3157ea1921f349fc22497f"
  },
  {
    "url": "assets/js/36.21597624.js",
    "revision": "c7841b27e90539e33751342e2d1fcb3f"
  },
  {
    "url": "assets/js/37.4bd98cc7.js",
    "revision": "a41304d86da80ab0a1448d5e088b1665"
  },
  {
    "url": "assets/js/38.eac91527.js",
    "revision": "ba0b6d7aa7f3d13a7a91435532a0ae2e"
  },
  {
    "url": "assets/js/39.a4093538.js",
    "revision": "1886b10a85427d76af5fed274682c76e"
  },
  {
    "url": "assets/js/4.93956780.js",
    "revision": "9ca9b73c471dba9aaf6572ac525aa26c"
  },
  {
    "url": "assets/js/40.e609048d.js",
    "revision": "5ada0a5da657cc8666db5d17b0fe2dbf"
  },
  {
    "url": "assets/js/41.a366c5e0.js",
    "revision": "5ee44202e1bfd6fc0340b59c69971c4f"
  },
  {
    "url": "assets/js/42.a4755737.js",
    "revision": "a08bd3489ac9080db5e63a7739df1512"
  },
  {
    "url": "assets/js/43.6c858fc3.js",
    "revision": "c02054b1e5ed9e0ae7a4275e065341fb"
  },
  {
    "url": "assets/js/44.d7336d73.js",
    "revision": "24551f99a9e0d0a475488fa2c6b11ac8"
  },
  {
    "url": "assets/js/5.38976443.js",
    "revision": "358dbe83bad837162a917d76058fa2bc"
  },
  {
    "url": "assets/js/6.66b2c153.js",
    "revision": "d2da1f73fa7c93c571b72a516e9f46be"
  },
  {
    "url": "assets/js/7.c9604f88.js",
    "revision": "d21024af29688412bc5eeb01bad0a945"
  },
  {
    "url": "assets/js/8.ad10daad.js",
    "revision": "289837f9a87c4f84d623d3a93b22a762"
  },
  {
    "url": "assets/js/9.27d3f0d6.js",
    "revision": "aa4fca2c7213333cbfbec1c98571b848"
  },
  {
    "url": "assets/js/app.6ee0c310.js",
    "revision": "496a72f7b0aa0423d96622e878069e27"
  },
  {
    "url": "assets/js/vendors~composition-api.4ff12ed7.js",
    "revision": "35942fccdd3798b3c68a302c355d4b01"
  },
  {
    "url": "index.html",
    "revision": "31851171113bb84c8e5f47a79b838ba8"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "eed7fa078160bfbf4af76946d1ccc343"
  },
  {
    "url": "javascript/Array.html",
    "revision": "34500fdf34ec3c257dbdf1993069cde3"
  },
  {
    "url": "javascript/Object.html",
    "revision": "5130d96959d6cdce4938f483dfcab620"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "60bd65a5e9a137fe246346356ed77c18"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "b8b5a50e9ea9f152b9bd5127905b420f"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "53ed2b122b81b6b4da66ceab2f6f677d"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "60fd4511d748225279dd2cfb2a7db5c2"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "b2e64e092cbd31240a3b8a075a626c8e"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "0d00354154a1beec64995ad3fba26f18"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "e1aa4a1e414f08d7b7db04b1532bc33f"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "ccf81c4efc196c8ad72e2d5acb139f9c"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "f601e2de43e528d951664f7a9a990b0d"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "27dcf8e1e8cbb0b3af2bd0c6a10eabe8"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "1e3aef40797224587b88bf8d8acca009"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "034364f00253a94ce5822fab268a30a9"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "2f5f7e63fee0c1200612141087dc00f6"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "078f6157e95becfec1110f9732d02ffc"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "c4d11bd6689cfa16122265209f44c1fe"
  },
  {
    "url": "javascript/节流.html",
    "revision": "7b58c461bb3d5af122ddeccdc7ee1d5c"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "66ccde50f37c49be77f2a3ad73ba0d67"
  },
  {
    "url": "node.js/npm.html",
    "revision": "e2605b356fa6c75bc92926d6aca0a368"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "27da50f2e02e00d398a9c287d0a7de4c"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "ad1c56ee11c90a3f5ffcfe743d462588"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "30460407995a0cec3f72fb7a92db8ebf"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "c163f253d536a42805f9e61951d6ba6c"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "71aa9aac681a64c1ea03de352dd23c18"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "55d412e7fe81905592bfe4cd8e27ddc7"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "8e340f7f18c3e60af21a79104d1ac442"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "2e27e02edc7306064b414774eb4a7b21"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "fb961b6986c18f76242e39f0c0bdc8dd"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "bae3515580ec693f46028ee552f8ce77"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "71d53ea8b763366929ae063d8683f86f"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "69319d63cd31e69d03182efcf5eb9ec0"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "eaf42b75d11f5a74b330099932cf7921"
  },
  {
    "url": "vue/vue-next/vue-next尝鲜.html",
    "revision": "a99f634b3726f484a50402b3d7239f6f"
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
