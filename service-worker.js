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
    "revision": "f55edc7fdb3a463f1bced43775969b31"
  },
  {
    "url": "assets/css/0.styles.e4652b28.css",
    "revision": "4328569f671503e0f214be69a7f233e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.abc03eb8.js",
    "revision": "4c4fb34729d8b01d17924b4a0a4f2fa4"
  },
  {
    "url": "assets/js/11.7deb1693.js",
    "revision": "4a9d884bacac1c0489511e7e77e45358"
  },
  {
    "url": "assets/js/12.d060ee23.js",
    "revision": "53f635469ca3104e18ab806a384c761f"
  },
  {
    "url": "assets/js/13.072947e9.js",
    "revision": "14cbe8ad1b3ad7fe9cb41101562e7b27"
  },
  {
    "url": "assets/js/14.dcebe8a8.js",
    "revision": "1bc6b0bb49601c3f79977b72e68ed8a0"
  },
  {
    "url": "assets/js/15.67af6a0c.js",
    "revision": "7d80f9c37f133fbfb5e0b3185448d25a"
  },
  {
    "url": "assets/js/16.3d6ee986.js",
    "revision": "bacdbebec9029881c6fb06b7e8571cf0"
  },
  {
    "url": "assets/js/17.5cba7332.js",
    "revision": "126f4fcd6669361be71b7c8e41cf2625"
  },
  {
    "url": "assets/js/18.797690b4.js",
    "revision": "75391eba7a0a915368f15306eed5d28c"
  },
  {
    "url": "assets/js/19.936a8061.js",
    "revision": "6dbd8014c90e1a9e26e4f24af698b22f"
  },
  {
    "url": "assets/js/20.9ff9cf9f.js",
    "revision": "d96868e3e84606fc9c43f6c6006acb4f"
  },
  {
    "url": "assets/js/21.497bd6cd.js",
    "revision": "dffa4c5bf4e6185586266426e0a88bd5"
  },
  {
    "url": "assets/js/22.f2cfbc5e.js",
    "revision": "48acb36e882dae8fc6b3fc4a621cbb44"
  },
  {
    "url": "assets/js/23.21921ed9.js",
    "revision": "dbd31ccdae87788d10e6aae2e6189c5f"
  },
  {
    "url": "assets/js/24.6f5c7c94.js",
    "revision": "1ac2382a021b5c479605413da080d614"
  },
  {
    "url": "assets/js/25.bd5abb4c.js",
    "revision": "f3295a914e93ff4aaa22c5be79afb45c"
  },
  {
    "url": "assets/js/26.47f0294c.js",
    "revision": "cd3961d135bf777a1d0bad581a0ff550"
  },
  {
    "url": "assets/js/27.4e769d0f.js",
    "revision": "ddf41284de7d5547e9c8b1aabf05aab8"
  },
  {
    "url": "assets/js/28.f388033b.js",
    "revision": "8cb97579ac6a21e119a3bc5f378a525b"
  },
  {
    "url": "assets/js/29.7870d69f.js",
    "revision": "d8c26efa3a47ff03d98558d5ecb77901"
  },
  {
    "url": "assets/js/3.e23d2e11.js",
    "revision": "4dda72dbc226af8553c97901f5120f98"
  },
  {
    "url": "assets/js/30.39ad2375.js",
    "revision": "5e2190fd39a5206c461e3c1dbfaa1a97"
  },
  {
    "url": "assets/js/31.352dd50a.js",
    "revision": "df91124666e9fd90c4d6242e65e4f2e2"
  },
  {
    "url": "assets/js/32.4518d778.js",
    "revision": "e55d8e70d75d963b95065f07c57a74fe"
  },
  {
    "url": "assets/js/33.b3763067.js",
    "revision": "1a7e23ea3b803fc39c6b7dab115501bb"
  },
  {
    "url": "assets/js/34.0161234e.js",
    "revision": "e5a73fb9938d8fff62cad01e193834f3"
  },
  {
    "url": "assets/js/35.efda1d8f.js",
    "revision": "83baead2559ee05dd8572eb7751442af"
  },
  {
    "url": "assets/js/36.76286b0e.js",
    "revision": "fe3c86e2427ef96c615e2a364beace51"
  },
  {
    "url": "assets/js/37.48a40922.js",
    "revision": "f6acdc212c15e78c349f0dff9554dcdd"
  },
  {
    "url": "assets/js/38.36a22859.js",
    "revision": "985ea5250e2ce43cb5cc85af9e55607e"
  },
  {
    "url": "assets/js/39.f37c8151.js",
    "revision": "17f4dd194286404d14bbdeb6d445a5fe"
  },
  {
    "url": "assets/js/4.8e0d770d.js",
    "revision": "d442d2595b041eb1d5971f2e6f351e5c"
  },
  {
    "url": "assets/js/40.4aad44e0.js",
    "revision": "81630d8d78110ffd950e85052a83caf1"
  },
  {
    "url": "assets/js/41.bd12b299.js",
    "revision": "fd274756cf70c44ebf27cb56fb82e198"
  },
  {
    "url": "assets/js/42.023d23fe.js",
    "revision": "6c7fa7ee2e4dbb2954cdeea1b0fbd4f5"
  },
  {
    "url": "assets/js/43.f0885d47.js",
    "revision": "282fdeb2ad241e9c52cc097caac36a08"
  },
  {
    "url": "assets/js/44.b916c33c.js",
    "revision": "470fd15096c445a093325e0ae60686d7"
  },
  {
    "url": "assets/js/5.763f9e55.js",
    "revision": "2fa353776cc172f4b3a27899c83f89a3"
  },
  {
    "url": "assets/js/6.7dbe80e6.js",
    "revision": "101ce54d567b21e24480d087ef107d68"
  },
  {
    "url": "assets/js/7.fc7078a4.js",
    "revision": "bb840c3d8aa0d9a293a8c8850c08f4b6"
  },
  {
    "url": "assets/js/8.dcb413f9.js",
    "revision": "b7551a93eb830b1025b38c610a53a477"
  },
  {
    "url": "assets/js/9.953f6bdb.js",
    "revision": "0a4c86cab8cec68b7a00c5816f8d7117"
  },
  {
    "url": "assets/js/app.e9343685.js",
    "revision": "fc8e138e90a398b704eb851b847a1fcd"
  },
  {
    "url": "assets/js/vendors~composition-api.f8b2f9eb.js",
    "revision": "14b0db6802e47afa1480e081b8443465"
  },
  {
    "url": "index.html",
    "revision": "b4d3ac9d84353a1c1a7d4a35923a3f83"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "e47eefd04ad33dc908623abbcfc65255"
  },
  {
    "url": "javascript/Array.html",
    "revision": "c644a160e9c3938ef945977a4e49eb42"
  },
  {
    "url": "javascript/Object.html",
    "revision": "df84a26f140ef1397a7d6e2369f182a9"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "165f207c9efe5b05954114c204ace504"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "583aad79cdbd2dee23ac2c30cf16c44a"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "f2c1e433ad431dc6e0a9c44d3979671d"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "07ac99879a0318e86a1a83fa840aedbc"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "d66bae60f017a62ff03457bd483beb6f"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "4085423a890172dd486b541a0dc430ee"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "feab790789ebda6d68fee27431546ec2"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "1fcc426fc19b8d506d80991acf204ed4"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "5dec8aa8baa1a020bca6b73386ac9305"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "5f26d7e45557c682b56f5a381d163d93"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "db68e59fb1d71b3e7c8a264060a03422"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "107f1425897a10e2950fd1e8cdaa0ccf"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "ff587b95db8e481c01a27577bbb98169"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "dc18cd8315da36043a5280aff45facc8"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "51c7606c47e56336436abf1a5443db1f"
  },
  {
    "url": "javascript/节流.html",
    "revision": "46831ee176605263a2a9018d6e968964"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "f033e7723c2e3b71b5648afec97ed60f"
  },
  {
    "url": "node.js/npm.html",
    "revision": "fe4e14bbdabd8e44f8c0f04b25a02313"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "34bdc204e1f2294199a7805de1a164a2"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "25af6f37358039d46be603bd2c86485d"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "ca71e00ca56bb5abccaa3f3d6b37a159"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "56e611beb0ac29e595c5c2a1054318af"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "d5a111b334c81500a7208133defe1ab0"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "2992ba5c14fe4f15347de3d1e153cc0f"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "043b8d9a8b09aa2e51153df2c8ff5bc0"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "d212dd667fe5846fbe6ec60655928635"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "8cdfcae65255ff865cc52c1abac24888"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "95ec58c37b95ec07aa36f42243340607"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "02de771240b3615f2be741ab4329064b"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "e40181e459060b13a955a04f5a88214f"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "727edffca44cb2d0c5be27b49b998de8"
  },
  {
    "url": "vue/vue-next/vue-next尝鲜.html",
    "revision": "3e744372809f499f49a0eb0afc65a4e7"
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
