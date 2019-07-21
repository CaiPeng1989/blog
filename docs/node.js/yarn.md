# yarn

## .yarnrc
```
registry "https://registry.npm.taobao.org/"
chromedriver_cdnurl "https://npm.taobao.org/mirrors/chromedriver"
electron_mirrors "http://npm.taobao.org/mirrors/electron/"
operadriver_cdnurl "http://npm.taobao.org/mirrors/operadriver"
phantomjs_cdnurl "http://npm.taobao.org/mirrors/phantomjs"
puppeteer_download_host "https://storage.googleapis.com.cnpmjs.org"
sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
selenium_cdnurl "http://npm.taobao.org/mirrors/selenium"
```

## 修改 `yarn` 镜像源

::: tip
[镜像源列表](./镜像源列表.html)
:::

::: tip
以下方法任选其一
:::

- 利用 `yarn config set` 命令修改。
```bash
yarn config set registry 镜像源
```

- 利用 `yrm` 修改。[查看 `nrm` 和 `yrm` 的区别](./nrm和yrm的区别.html)
```bash
npm i yrm -g
yrm ues 镜像源别名
```

- 直接修改 `.yarnrc` 文件。打开 `系统盘符:\Users\当前登录用户名` 目录，找到/新建 `.yarnrc` 文件并修改内容。[本人`.yarnrc` 文件内容。](#yarnrc)
```bash
registry "镜像源"
```

## 使用 `yarn` 全局安装 `vue` 脚手架

1. 全局安装vue脚手架

```bash
yarn global add @vue/cli @vue/cli-init
```

2. 尝试执行vue命令，如果报错的话需要 [将 `yarn`的安装位置添加到环境变量](./npm.html#使用npm全局安装yarn并添加环境变量)

```bash
vue -V
```
