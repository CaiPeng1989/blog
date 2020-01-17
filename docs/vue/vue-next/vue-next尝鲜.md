# vue-next尝鲜

## 使用vue-cli创建项目

```sh
vue create vue-next-test
```

## 添加 `vue-cli-plugin-vue-next`

```sh
vue add vue-next
```

插件执行完毕后我们可以看到 `main.js` 的代码被修改了

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp().mount(App, '#app')
```

此时项目可以正常运行

## 尝试修改 `App.vue`

<<< @/docs/.vuepress/markdown/fragments/vue-next/App.vue
