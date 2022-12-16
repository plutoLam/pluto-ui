const head = [
  [
    'link',
    {
      rel: 'icon',
      href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/element3.ico',
      type: 'image/svg+xml',
    },
  ],
  [
    'link',
    {
      rel: 'alternate icon',
      href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/element3.png',
      type: 'image/png',
      sizes: '16x16',
    },
  ],
];
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Divider 分割线', link: '/components/divider/' },
      ]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ]
}
const config = {
  title: 'Pluto-UI',
  description: 'Vue3 components for you',
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
export default config