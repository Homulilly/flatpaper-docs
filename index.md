---
layout: home

hero:
  name: "FlatPaper"
  text: "主题文档"
  tagline: "手账风 · 极简 · 充满活力的 Hexo 博客主题。重新定义记录生活的仪式感。"
  image:
    src: /icon.png
    alt: FlatPaper Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/installation
    - theme: alt
      text: 配置总览
      link: /zh/config
    - theme: alt
      text: GitHub 源码
      link: https://github.com/Homulilly/hexo-theme-flatpaper

features:
  - title: 独特的手账美学
    details: 撕纸、胶带、网格背景、随意贴。摆脱传统博客的死板，用最治愈的纸质观感记录日常。
  - title: 极致的响应速度
    details: 精简的静态资源加载策略，极速首屏体验。在保持华丽视觉的同时，绝不向性能妥协。
  - title: 优雅可爱的朋友圈
    details: 深度定制整合 Friend-Circle-Lite 朋友圈组件，让你的独立博客不再是一座孤岛。
    link: https://homulilly.com/friends/
    linkText: 查看效果
  - title: 灵活自由的配置
    details: 提供多款清新主题配色、丰富的个性化挂件与自定义 HTML 注入，打造属于你的独特空间。
  - title: 开箱即用的互动
    details: 内置 Twikoo、Artalk 多款主流评论系统支持，帮助你轻松搭建与读者的交流桥梁，接收宝贵反馈。
  - title: 简单轻量的部署
    details: 基于 Hexo 8.x 静态框架构建，配合详尽的文档介绍，几分钟即可快速将站点零成本部署上线。
---

<style>
/* 给主标题加一点酷炫的绿色渐变色 */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #10b981 10%, #34d399 90%);
}
html.dark {
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #34d399 0%, #6ee7b7 100%);
}
</style>
