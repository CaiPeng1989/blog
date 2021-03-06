const {
  fs,
  path
} = require('@vuepress/shared-utils')

const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
require('dayjs/locale/zh-cn')

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

const getChildren = parent => fs.readdirSync(path.resolve(__dirname, `../${parent}`)).map(filename => filename.slice(0, -3))

const javascriptChildren = getChildren('javascript')
const vscodeChildren = getChildren('vscode')

module.exports = ctx => ({
  base: '/blog/',
  title: 'Blog',
  dest: 'dist',
  evergreen: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return dayjs(timestamp).fromNow()
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'MySWUpdatePopup',
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ],
    [
      'vuepress-plugin-code-copy',
      {
        align: 'top',
        successText: '复制成功！'
      }
    ],
    'vuepress-plugin-nprogress',
    'vuepress-plugin-reading-progress',
    'vuepress-plugin-typescript'
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    smoothScroll: true,

    nav: [
      {
        text: '前端框架',
        items: [
          {
            text: 'vue',
            items: [
              {
                text: 'vue-next尝鲜',
                link: '/vue/vue-next/vue-next尝鲜.html'
              },
              {
                text: '食用composition-api的正确姿势',
                link: '/vue/composition-api/食用composition-api的正确姿势.html'
              }
            ]
          },
          {
            text: 'react',
            items: [
              {
                text: 'react食用eslint的正确姿势',
                link: '/react/react食用eslint的正确姿势.html'
              }
            ]
          }
        ]
      },
      {
        text: 'node.js包管理工具',
        items: [
          {
            text: 'npm',
            link: '/node.js/npm.html'
          },
          {
            text: 'yarn',
            link: '/node.js/yarn.html'
          }
        ]
      },
      {
        text: '系统',
        items: [
          {
            text: 'windows',
            link: '/system/windows/windows系统下硬盘重装系统.html'
          },
          {
            text: 'mac os',
            link: '/system/mac os/安装node.js.html'
          }
        ]
      },
      {
        text: 'javascript',
        items: javascriptChildren.map(item => {
          return {
            text: item,
            link: `/javascript/${item}.html`
          }
        })
      },
      {
        text: 'vscode',
        items: vscodeChildren.map(item => {
          return {
            text: item,
            link: `/vscode/${item}.html`
          }
        })
      }
    ],

    sidebar: {
      '/vue/': [
        {
          title: 'vue',
          collapsable: false,
          children: [
            '/vue/vue-next/vue-next尝鲜.html',
            '/vue/composition-api/食用composition-api的正确姿势.html'
          ]
        }
      ],
      '/react/': [
        {
          title: 'react',
          collapsable: false,
          children: [
            '/react/react食用eslint的正确姿势.html'
          ]
        }
      ],
      '/node.js/': [
        {
          title: 'node.js包管理工具',
          collapsable: false,
          children: getChildren('node.js')
        }
      ],

      '/system/windows/': [
        {
          title: 'windows',
          collapsable: false,
          children: getChildren('system/windows')
        }
      ],

      '/system/mac os/': [
        {
          title: 'mac os',
          collapsable: false,
          children: [
            '安装node.js'
          ]
        }
      ],

      '/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
          children: javascriptChildren
        }
      ],

      '/vscode/': [
        {
          title: 'vscode',
          collapsable: false,
          children: vscodeChildren
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
})
