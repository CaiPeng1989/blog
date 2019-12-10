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
    "revision": "f053d86905ac2728194803f44c110987"
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
    "url": "assets/js/3.c06ccb03.js",
    "revision": "062a87565e2377c92520e8aee2d20d21"
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
    "url": "assets/js/4.a15ca592.js",
    "revision": "aa327110533a700551a86d10f163d3a2"
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
    "url": "assets/js/app.4af6e0c6.js",
    "revision": "17343dec81107fec3f95a93abf9829c0"
  },
  {
    "url": "index.html",
    "revision": "325fc88e450346418d685b5b1f538ad0"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "188c885500458e6b391a99135df0a083"
  },
  {
    "url": "javascript/Array.html",
    "revision": "8c6a5fffc3e37828ba217d1fbc34b202"
  },
  {
    "url": "javascript/Object.html",
    "revision": "471b01653b688914d912b06f2c19c3b4"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "a156911313151c098ad5543d780e3f62"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "3ff7fd0d266cd66466965cc380ba60b6"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "9c6e284a4a3f2865e32cf5c610702e04"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "0f22b7b72eddbf2995a06b118f880213"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "c8e6e048dca2240a24365287cf1c16e7"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "ddc1a49cb3db73925108b24d0e233461"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "ee49b1b483941066564b84b3abe06bb2"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "5d9a37b36910030de0bfbfdaf3ef81c5"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "e8737a5cff37ffca6bcf0a1ced4046ef"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "ec2b486101bebdce24af42fefafe5b05"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "dbd9d222bf086134380b611ddb7367ab"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "4b6d1f28bb627713e8ec0ce1279e885f"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "15ec1c35afb092bda86cea550c3e25f4"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "0256a35aa0378f1e7785900f4e28d183"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "b896bdb2f5a9cdbce4658cb8562f30b8"
  },
  {
    "url": "javascript/节流.html",
    "revision": "054c1f2f8d65bd12e7b98ab1645964b3"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "d677d40b2fdf3156299b26dfab2b1e61"
  },
  {
    "url": "node.js/npm.html",
    "revision": "660fd17b07e8e01e5b9c8a45baf1d2cf"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "466671756d3f3f5a67b5d692357f09ed"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "d64f8c1fcd9484383b11c527b523baeb"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "5978617047a65c793f7bef0043f38cef"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "c3eb89ef11dd5bdd9ee239adf1a6bd2e"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "73d6a4dc3e9ff978c2cee2ea95b253f7"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "e90edefe34522110e5840cfdfb3a95be"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "6623ce3397170415e344e3b1c0c80cd7"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "a55f8cd0cf2ff87c7122a750594edc0f"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "4af1a5cfb1cd30e9af56ed2adee2c5c4"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "b21bdb152bffc36103c097eb130b9afb"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "42b98c3b8c8bc5c274a4c01b72e13473"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "5fea5f596f4300571a8f285fad76d6c8"
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
