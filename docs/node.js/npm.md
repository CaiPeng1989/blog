# npm

## .npmrc

```
registry=https://registry.npm.taobao.org
chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs
operadriver_cdnurl=https://npm.taobao.org/mirrors/operadriver
selenium_cdnurl=https://npm.taobao.org/mirrors/selenium
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
sass_binary_site=https://npm.taobao.org/mirrors/node-sass
puppeteer_download_host=https://npm.taobao.org/mirrors/chromium-browser-snapshots
shamefully-hoist=true
```

## 修改npm镜像源

::: tip
[镜像源列表](./镜像源列表.html)
:::

::: tip
以下方法任选其一
:::

- 利用 `npm config set` 命令修改。
```
npm config set registry 镜像源
```

- 利用 `nrm` 修改。[查看 `nrm` 和 `yrm` 的区别](./nrm和yrm的区别.html)
```bash
npm i nrm -g
nrm ues 镜像源别名
```

- 直接修改 `.npmrc` 文件（仅适用于windows）。打开 `系统盘符:\Users\当前登录用户名` 目录，找到/新建 `.npmrc` 文件并修改内容。[本人`.npmrc` 文件内容。](#npmrc)
```
registry=镜像源
```

## 使用npm全局安装yarn并添加环境变量

1. 首先当然是全局安装 `yarn`。[修改npm镜像源](#修改-npm-镜像源)

```bash
npm i yarn -g
```

2. 找到/获取 `yarn` 全局接安装到已安装的可执行文件的位置，默认情况下将是：` 系统盘符:\Users\当前登录用户名\AppData\Local\Yarn\bin `。

```bash
yarn global bin
```

3. 将安装位置添加到环境变量 `PATH` 并重新打开 `shell` 即可食用。

4. [修改yarn镜像源](./yarn.html#修改-yarn-镜像源)


5. [使用yarn全局安装vue脚手架。](./yarn.html#使用-yarn-全局安装-vue-脚手架)
