# 食用composition-api的正确姿势

## 常规js版

```sh
yarn add @vue/composition-api
```

在 `src/plugins` 目录下新建 `composition-api.js`

```js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

在 `src/plugins` 目录下新建 `index.js`

```js
import './composition-api'
```

在 `main.js` 引用

```js
import './plugins'
```

## 常规ts版

```sh
yarn add @vue/composition-api
```

在 `src/plugins` 目录下新建 `composition-api.ts`

```ts
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

在 `src/plugins` 目录下新建 `index.ts`

```ts
import './composition-api'
```

在 `main.ts` 引用

```ts
import './plugins'
```

修改 `.eslintrc.js`

```js
  rules: {
    'no-unused-vars': 'off'
  }
```

如果需要使用 `jsx`，修改 `shim-tsx.d.ts`

```ts
import Vue, { VNode } from 'vue';
import { ComponentRenderProxy } from '@vue/composition-api'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
```

如果需要使用 `refs`，修改 `composition-api.ts`

```ts
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

declare module '@vue/composition-api/dist/component/component' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  }
}
```

## nuxt js版

```sh
yarn add @vue/composition-api
```

在 `plugins` 目录下新建 `composition-api.js`

```js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

修改 `nuxt.config.js` 中 `plugins` 选项

```js
  plugins: [
    '@/plugins/composition-api'
  ]
```

## nuxt ts版

```sh
yarn add @vue/composition-api
```

在 `plugins` 目录下新建 `composition-api.ts`

```ts
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

修改 `nuxt.config.js` 中 `plugins` 选项

```js
  plugins: [
    '@/plugins/composition-api'
  ]
```

```sh
yarn add @nuxt/typescript-build
```

修改 `nuxt.config.js` 中 `buildModules` 选项

```js
  buildModules: [
    '@nuxt/typescript-build'
  ]
```

创建 `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "lib": [
      "esnext",
      "esnext.asynciterable",
      "dom"
    ],
    "esModuleInterop": true,
    "allowJs": true,
    "jsx": "preserve",
    "sourceMap": true,
    "strict": false,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    },
    "types": [
      "@types/node",
      "@nuxt/types"
    ]
  },
  "exclude": [
    "node_modules"
  ]
}
```

```sh
yarn remove @nuxtjs/eslint-config
yarn add @nuxtjs/eslint-config-typescript -D
```

修改 `.eslintrc.js`

```js
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'no-unused-vars': 'off'
  }
```

修改 `package.json` 中的 `scripts` 字段

```
  "lint": "eslint --ext .tsx,.ts,.js,.vue ."
```

如果需要使用 `jsx`，新增 `types` 目录，在 `types` 目录下新增 `shim-tsx.d.ts`

```ts
import Vue, { VNode } from 'vue';
import { ComponentRenderProxy } from '@vue/composition-api'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
```

如果需要使用 `refs`，修改 `composition-api.ts`

```ts
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

declare module '@vue/composition-api/dist/component/component' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  }
}
```

## jsx使用方式

修改 `.eslintrc.js` 文件中 `rules`

```
  rules: {
    'no-unused-vars': 'off'
  }
```

```html
<script lang="jsx">
import {
  createElement
} from '@vue/composition-api'
const h = createElement

export default {
  setup: () => {
    return () => (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </div>
    )
  }
}
</script>
```

## tsx使用方式

修改 `router` 目录中 `index.ts`

```ts
// @ts-ignore
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
```

```html
<script lang="tsx">
import {
  createComponent,
  createElement
} from '@vue/composition-api'
const h = createElement

export default createComponent({
  setup: () => {
    return () => (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </div>
    )
  }
})
</script>
```

## 举个🌰

```html
<script lang="tsx">
import {
  createComponent,
  createElement,
  ref,
  onMounted,
  watch,
  computed,
  reactive
} from '@vue/composition-api'
const h = createElement

interface State {
  [k: string]: {
    name: string
    href: string
  }[]
}

export default createComponent({
  name: 'HelloWorld',

  props: {
    msg: {
      type: String,
      required: true
    }
  },

  setup: (props, { refs, root: { $route, $router } }) => {
    watch(() => $route, (value) => {
      console.log(value)
    })

    const routeName = computed(() => {
      return $route.name
    })

    console.log(routeName.value)

    const state: State = reactive({
      'Installed CLI Plugins': [
        {
          name: 'babel',
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel'
        },
        {
          name: 'typescript',
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript'
        },
        {
          name: 'router',
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router'
        },
        {
          name: 'eslint',
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint'
        }
      ],

      'Essential Links': [
        {
          name: 'Core Docs',
          href: 'https://vuejs.org'
        },
        {
          name: 'Forum',
          href: 'https://forum.vuejs.org'
        },
        {
          name: 'Community Chat',
          href: 'https://chat.vuejs.org'
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/vuejs'
        },
        {
          name: 'News',
          href: 'https://news.vuejs.org'
        }
      ],

      Ecosystem: [
        {
          name: 'vue-router',
          href: 'https://router.vuejs.org'
        },
        {
          name: 'vuex',
          href: 'https://vuex.vuejs.org'
        },
        {
          name: 'vue-devtools',
          href: 'https://github.com/vuejs/vue-devtools#vue-devtools'
        },
        {
          name: 'vue-loader',
          href: 'https://vue-loader.vuejs.org'
        },
        {
          name: 'awesome-vue',
          href: 'https://github.com/vuejs/awesome-vue'
        }
      ]
    })

    const hello = ref(null)

    onMounted(() => {
      console.log(refs.hello)
    })

    return () => (
      <div class="hello" ref="hello">
        <h1>{ props.msg }</h1>
        <p>
          For a guide and recipes on how to configure / customize this project,<br/>
          check out the
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>

        {
          Object.keys(state).map(name => {
            const list = state[name]
            return (
              <div>
                <h3>{ name }</h3>
                <ul>
                  {
                    list.map(({ href, name }) => {
                      return (
                        <li>
                          <a href={href} target="_blank" rel="noopener">{name}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
})
</script>
```
