const {
  fs,
  path
} = require('@vuepress/shared-utils')

const getChildren = parent => fs.readdirSync(path.resolve(__dirname, `../${parent}`)).map(filename => filename.slice(0, -3))

const javascriptChildren = getChildren('javascript')
const vscodeChildren = getChildren('vscode')

module.exports = ctx => ({
  title: `Blog`,
  dest: 'dist',
  evergreen: true,
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
  ],
  themeConfig: {
    themeConfig: {
      lastUpdated: '上次更新',
    },

    nav: [
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
