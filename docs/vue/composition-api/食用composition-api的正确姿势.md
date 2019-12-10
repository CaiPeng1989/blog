# 食用composition-api的正确姿势

## 常规js版

<<< @/docs/.vuepress/markdown/fragments/composition-api/index.sh

在 `src/plugins` 目录下新建 `composition-api.js`

<<< @/docs/.vuepress/markdown/fragments/composition-api/js/composition-api.js

在 `src/plugins` 目录下新建 `index.js`

<<< @/docs/.vuepress/markdown/fragments/composition-api/js/index.js

在 `main.js` 引用

<<< @/docs/.vuepress/markdown/fragments/composition-api/js/plugins.js

## 常规ts版

<<< @/docs/.vuepress/markdown/fragments/composition-api/index.sh

在 `src/plugins` 目录下新建 `composition-api.ts`

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/composition-api.ts

在 `src/plugins` 目录下新建 `index.ts`

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/index.ts

在 `main.ts` 引用

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/plugins.ts

修改 `.eslintrc.js`

<<< @/docs/.vuepress/markdown/fragments/composition-api/js/eslintrc.js

如果需要使用 `tsx`，修改 `shim-tsx.d.ts`

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/shim-tsx.d.ts

如果需要使用 `refs`，修改 `composition-api.ts`

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/composition-api-refs.ts

## nuxt js版

<<< @/docs/.vuepress/markdown/fragments/composition-api/index.sh

在 `plugins` 目录下新建 `composition-api.js`

<<< @/docs/.vuepress/markdown/fragments/composition-api/js/composition-api.js

修改 `nuxt.config.js` 中 `plugins` 选项

<<< @/docs/.vuepress/markdown/fragments/composition-api/@nuxt/plugins.js

## nuxt ts版

<<< @/docs/.vuepress/markdown/fragments/composition-api/index.sh

在 `plugins` 目录下新建 `composition-api.ts`

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/composition-api.ts

修改 `nuxt.config.js` 中 `plugins` 选项

<<< @/docs/.vuepress/markdown/fragments/composition-api/@nuxt/plugins.js

安装 `@nuxt/typescript-build`

<<< @/docs/.vuepress/markdown/fragments/composition-api/@nuxt/typescript-build.sh

修改 `nuxt.config.js` 中 `buildModules` 选项

<<< @/docs/.vuepress/markdown/fragments/composition-api/@nuxt/nuxt.config.js

创建 `tsconfig.json`

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/tsconfig.json

移除 `@nuxtjs/eslint-config`，安装 `@nuxtjs/eslint-config-typescript`

<<< @/docs/.vuepress/markdown/fragments/composition-api/@nuxt/eslint-config-typescript.sh

修改 `.eslintrc.js`

<<< @/docs/.vuepress/markdown/fragments/composition-api/@nuxt/eslintrc.js

修改 `package.json` 中的 `scripts` 字段

<<< @/docs/.vuepress/markdown/fragments/composition-api/@nuxt/package.json

如果需要使用 `jsx`，新增 `types` 目录，在 `types` 目录下新增 `shim-tsx.d.ts`

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/shim-tsx.d.ts

如果需要使用 `refs`，修改 `composition-api.ts`

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/composition-api-refs.ts

## jsx使用方式

修改 `.eslintrc.js` 文件中 `rules`

<<< @/docs/.vuepress/markdown/fragments/composition-api/js/eslintrc.js

<<< @/docs/.vuepress/markdown/fragments/composition-api/js/index.vue

## tsx使用方式

修改 `router` 目录中 `index.ts`，添加lint注释

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/router.ts

<<< @/docs/.vuepress/markdown/fragments/composition-api/ts/index.vue

## 举个🌰

<<< @/docs/.vuepress/markdown/fragments/composition-api/example.vue
