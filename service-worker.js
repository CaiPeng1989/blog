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
    "revision": "36bdaa30510561a39f2b3c9057742643"
  },
  {
    "url": "assets/css/0.styles.6f72f9da.css",
    "revision": "50c2cd3580b012a7605112ab6bae1c4f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.79ea79f8.js",
    "revision": "8d6c118808c6fc0dd1477b85f0d91db3"
  },
  {
    "url": "assets/js/11.9733e086.js",
    "revision": "b70249114a7d586f3d4ffea9a4b0a296"
  },
  {
    "url": "assets/js/12.36a049e3.js",
    "revision": "889e7c8c973675bc2dec78e3a92fff5f"
  },
  {
    "url": "assets/js/13.d6e69028.js",
    "revision": "9a4751cc55eab707a978cfd23cfca04d"
  },
  {
    "url": "assets/js/14.0f7bc35e.js",
    "revision": "fdba3d6fd0dd9fefd354dc07d87805d8"
  },
  {
    "url": "assets/js/15.b69f3997.js",
    "revision": "9f75878a6d33a7cb5830306660c143fd"
  },
  {
    "url": "assets/js/16.3cc07222.js",
    "revision": "0e49107ff581cce3838832eb1e028708"
  },
  {
    "url": "assets/js/17.3b821047.js",
    "revision": "8efffc832277de35605ead600859f92d"
  },
  {
    "url": "assets/js/18.966c5008.js",
    "revision": "7413e15234c730f1fa2dd050e0dea6ad"
  },
  {
    "url": "assets/js/19.6daeb6d5.js",
    "revision": "7fce02d3a3ecdd106770f2a5ea3e1193"
  },
  {
    "url": "assets/js/2.2cf82a89.js",
    "revision": "f94b1a068c6389119814e3496384300a"
  },
  {
    "url": "assets/js/20.0e71db46.js",
    "revision": "0e55d02374a53df0161a53911c99f160"
  },
  {
    "url": "assets/js/21.cd30e07b.js",
    "revision": "318f872e0c66c34bf91fc5c660b50fea"
  },
  {
    "url": "assets/js/22.08053f86.js",
    "revision": "76c3a1cc47c2415feee1db432772741d"
  },
  {
    "url": "assets/js/23.4beba9df.js",
    "revision": "b5a729fb42bbad00c3cb6089c939eac4"
  },
  {
    "url": "assets/js/24.17b0dac9.js",
    "revision": "270439cbc700d315b7f90b82d1be9f83"
  },
  {
    "url": "assets/js/25.70357cb8.js",
    "revision": "03e3a4b45907516e9c019abbc24961ad"
  },
  {
    "url": "assets/js/26.48cc707b.js",
    "revision": "d5f1c4ca8d34306807f4cdfa2bde1c29"
  },
  {
    "url": "assets/js/27.36cfb5f2.js",
    "revision": "4898c29da683f9d9c1e798fc540ba73e"
  },
  {
    "url": "assets/js/28.78711745.js",
    "revision": "4fdb4b86d92cda659b7a6457a6162e00"
  },
  {
    "url": "assets/js/29.1d833af4.js",
    "revision": "5038f89233fc07f8aa1be1bbbc6ef40c"
  },
  {
    "url": "assets/js/3.b04674f3.js",
    "revision": "300dcce850e983029b4b45c944d924ba"
  },
  {
    "url": "assets/js/30.1b0cb8d9.js",
    "revision": "a784953bf36974170e168c9e2885381e"
  },
  {
    "url": "assets/js/31.8a7a41aa.js",
    "revision": "10916ec36edb67842ecc960890d4d541"
  },
  {
    "url": "assets/js/32.df509aa0.js",
    "revision": "4723b9a4718de0c149a8991fe8fc0e7b"
  },
  {
    "url": "assets/js/33.0c964014.js",
    "revision": "a57ab3ede91b8ace2df53a1c8fb4193c"
  },
  {
    "url": "assets/js/34.84bf98bb.js",
    "revision": "6b11a2eadd4945b1de616b39b3559226"
  },
  {
    "url": "assets/js/35.d525957e.js",
    "revision": "aab2cd8ed07240e72de7166da11b4dae"
  },
  {
    "url": "assets/js/36.ec163a96.js",
    "revision": "cbfe27edaf3c586c79ff4712e181e15d"
  },
  {
    "url": "assets/js/37.77528d3f.js",
    "revision": "a2dbe65e9bbce6984a87d9516c723da1"
  },
  {
    "url": "assets/js/38.12a47348.js",
    "revision": "1b1799d08ec21ad4bd8d76e5a6ae296a"
  },
  {
    "url": "assets/js/39.9bd668af.js",
    "revision": "90330e6750f0e52c917d18ffa37fe279"
  },
  {
    "url": "assets/js/4.e8695246.js",
    "revision": "f45e14e7bbe307ce118731fcf6e3f49e"
  },
  {
    "url": "assets/js/40.c5570484.js",
    "revision": "c178e4fce52f808044ad5a0582f20dda"
  },
  {
    "url": "assets/js/41.0c523257.js",
    "revision": "eabe4be558333af660d76223c7a17bb5"
  },
  {
    "url": "assets/js/5.05482aea.js",
    "revision": "924565224a5121b95567975ca110e0fe"
  },
  {
    "url": "assets/js/6.b2d3d98b.js",
    "revision": "cd5e89e793272caa24c2fa9374670e55"
  },
  {
    "url": "assets/js/7.457ac5d2.js",
    "revision": "7a6448a4c98dab63d2e83473672cb73e"
  },
  {
    "url": "assets/js/8.1a4cdfee.js",
    "revision": "881fb902bc9df87879ccd3c45764befa"
  },
  {
    "url": "assets/js/9.95d3486d.js",
    "revision": "51ad0848ae0d3bd679220bcf9680ada9"
  },
  {
    "url": "assets/js/app.dc517c61.js",
    "revision": "5ddfbf481c76ea7ed2be6dc99c59efed"
  },
  {
    "url": "index.html",
    "revision": "035a020d43f8424124d75208d1e84f8d"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "d2bb6c804c17ebd8e0c70f419829fdf3"
  },
  {
    "url": "javascript/Array.html",
    "revision": "170520dd6713d01d3a8cc939bab8af02"
  },
  {
    "url": "javascript/Object.html",
    "revision": "de0764d05907364c0c0a8951fd4db24b"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "3fcca647470e5ef9eba4223654fbd0e7"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "a8a73d0869fc0a26a2c57ad2e491ea0d"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "1fc25813b6dec66f112189b1d0b00811"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "1e0cc999477ce14cdd99f68a62dcb9bc"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "2e99f7818d828c6ff7ac47f962df83aa"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "86a994448a8366e15b9657237cb07c45"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "45c70099fc359a03c0eb525f5111fc2e"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "606d514b80ae6182bcbfb46dc2215822"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "10c7f79003aeddc55f998833cf12f815"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "4c1d2cbd34ba114e17322d67bb887657"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "626ce81123109f44c1147e601ab01599"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "105f5d88efabe5ce46088cb82b27c9d4"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "c7640352e2bf690c31d2bb69eadd7dc0"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "96fe64b308a597d24401f8f2c8b8a417"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "880faa4e2ef74a4074b674b3e0bb5469"
  },
  {
    "url": "javascript/节流.html",
    "revision": "00b589ce521f7417b6e8ed3f0ac878e3"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "ee1c00807a184067299f3abdf1d7d3b1"
  },
  {
    "url": "node.js/npm.html",
    "revision": "f3da4b34e0bcf065352cbf7a90cbbdee"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "e8ce54ae5c4c1f967f62cbd4b99026bc"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "d7908d203fa9a6bdc70c983f85ddc428"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "38ff518c4da260c2ad4dc059a3b4492e"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "b3f826b71e4b812d471b0163fef24244"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "80658e079b505846f297436c38f86aba"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "cebb956720c1516df647bc050c06186c"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "5d4b545289d26c6ce0161ac3eb9839a8"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "0c75020c8b6d4fd9dfd2f9cec0adcab8"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "e65445c86f5fcc86f30edf18f62122e6"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "d8caac6920195f14c99e6bab11b31d58"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "9fd873679788b417d10f8108c818c701"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "6dca61b54b8bc3bb21bd72214d903303"
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
