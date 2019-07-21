module.exports = ctx => ({
  title: `Blog`,
  dest: 'dist',
  evergreen: true,
  plugins: [
    '@vuepress/pwa',
    '@vuepress/nprogress',
    '@vuepress/back-to-top'
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
            link: `/system/mac os/mac os 下安装node.js.html`
          }
        ]
      }
    ],

    sidebar: {
      '/node.js/': [
        {
          title: `node.js包管理工具`,
          collapsable: false,
          children: [
            `镜像源列表`,
            `npm`,
            `yarn`
          ]
        }
      ],

      '/system/windows/': [
        {
          title: `windows`,
          collapsable: false,
          children: [
            `windows系统下硬盘重装系统`,
            `windows10系统数字激活`,
            `windows10系统重置`,
            `windows7升级到windows10并数字激活`
          ]
        }
      ],

      '/system/mac os/': [
        {
          title: `mac os`,
          collapsable: false,
          children: [
            `mac os 下安装node.js`
          ]
        }
      ]
    }
  }
})
