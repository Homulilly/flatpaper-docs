import { defineConfig } from 'vitepress'

const zhThemeConfig = {
  nav: [
    { text: '首页', link: '/' },
    { text: '安装', link: '/zh/installation' },
    { text: '配置', link: '/zh/config' },
    { text: '更新日志', link: '/zh/changelog' },
    { text: '演示站点', link: 'https://flatpaper.nep.me/' },
    { text: '主题工具', link: 'https://hexotag.nep.me/' },
    { text: '作者博客', link: 'https://homulilly.com/' }
  ],
  sidebar: [
    {
      text: '开始',
      items: [
        { text: '安装教程', link: '/zh/installation' },
        { text: '配置总览', link: '/zh/config' },
        { text: '更新日志', link: '/zh/changelog' }
      ]
    },
    {
      text: '特色功能',
      items: [
        { text: '提示块', link: '/zh/features/note' },
        { text: '选项卡', link: '/zh/features/tabs' }
      ]
    },
    {
      text: '功能设置',
      items: [
        { text: '图标介绍', link: '/zh/features/icons' },
        {
          text: '特殊页面创建',
          items: [
            { text: '分类页面', link: '/zh/pages/categories' },
            { text: '标签页面', link: '/zh/pages/tags' },
            { text: '404 错误页', link: '/zh/pages/404' },
            { text: '友情链接 ', link: '/zh/pages/links' },
            { text: '朋友圈', link: '/zh/pages/fcircle' }
          ]
        }
      ]
    },
    {
      text: '其他',
      items: [
        { text: '封面图片生成', link: '/zh/others/cover' }
      ]
    }
  ],
  docFooter: {
    prev: '上一页',
    next: '下一页'
  },
  footer: {
    message: 'Sponsor: <a href="https://folio.nep.me/" target="_blank">Folio 看图</a> | <a href="https://endfield.zip/" target="_blank">基质工具箱</a> ',
    copyright: 'Copyright © 2026-present Homulilly'
  },
  outline: {
    label: '页面导航',
    level: [2, 3] as [number, number]
  }
}

export default defineConfig({
  title: "FlatPaper",
  description: "A beautiful Hexo theme",
  head: [
    ['link', { rel: 'icon', href: '/icon-64.png' }]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: zhThemeConfig
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: zhThemeConfig
    }
  },

  themeConfig: {
    logo: '/icon-64.png',
    logoLink: '/',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Homulilly/hexo-theme-flatpaper' }
    ]
  }
})
