const {
  fs,
  path
} = require('@vuepress/shared-utils')

const moment = require('moment')
moment.locale('zh-CN')

const getChildren = parent => fs.readdirSync(path.resolve(__dirname, `../${parent}`)).map(filename => filename.slice(0, -3))

const javascriptChildren = getChildren('javascript')
const vscodeChildren = getChildren('vscode')

module.exports = ctx => ({
  base: 'Blog',
  title: `Blog`,
  dest: 'dist',
  evergreen: true,
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).fromNow()
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    smoothScroll: true,

    nav: [
      {
        text: 'vue',
        items: [
          {
            text: '食用composition-api的正确姿势',
            link: '/vue/composition-api/食用composition-api的正确姿势.html'
          }
        ]
      },
      {
        text: `node.js包管理工具`,
        items: [
          {
            text: `npm`,
            link: `/node.js/npm.html`
          },
          {
            text: `yarn`,
            link: `/node.js/yarn.html`
          }
        ]
      },
      {
        text: `系统`,
        items: [
          {
            text: `windows`,
            link: `/system/windows/windows系统下硬盘重装系统.html`,
          },
          {
            text: `mac os`,
            link: `/system/mac os/安装node.js.html`
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
            '/vue/composition-api/食用composition-api的正确姿势.html'
          ]
        }
      ],
      '/node.js/': [
        {
          title: `node.js包管理工具`,
          collapsable: false,
          children: getChildren('node.js')
        }
      ],

      '/system/windows/': [
        {
          title: `windows`,
          collapsable: false,
          children: getChildren('system/windows')
        }
      ],

      '/system/mac os/': [
        {
          title: `mac os`,
          collapsable: false,
          children: [
            `安装node.js`
          ]
        }
      ],

      '/javascript/': [
        {
          title: `javascript`,
          collapsable: false,
          children: javascriptChildren
        }
      ],

      '/vscode/': [
        {
          title: `vscode`,
          collapsable: false,
          children: vscodeChildren
        }
      ]
    }
  }
})
