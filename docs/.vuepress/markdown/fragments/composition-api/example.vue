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
