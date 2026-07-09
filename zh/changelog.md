# 更新日志 (CHANGELOG)

[Flatpaper - Releases](https://github.com/Homulilly/hexo-theme-flatpaper/releases/)

## v0.4.0
2026-07-05

**新增**

- **留言板（Guestbook）页面支持**：
  将页面评论渲染为一面彩色便签风格的「留言墙」。
  - 纸片与胶带颜色、歪斜角度由留言 ID 确定性生成。
  - 支持从 Twikoo (HTML) 或 Artalk (Markdown/HTML) 自动提取文本与图片/表情。
  - 支持默认随机排序与最新优先排序（最新优先模式下采用网格布局）。
  - 支持通过 `page_size` 限制每页加载数量并可展开加载更多。
  - 仅展示主楼留言（最多 100 条），支持渲染 Markdown 开场白于墙面之上。
  *(注意：需在主题配置中启用 Twikoo 或 Artalk 评论系统)*

## v0.3.6
2026-07-03

**新增**

- 增加 `package.json` 文件以支持规范化的 npm 包管理。

**优化**

- **性能优化与代码重构**：
  - 优化代码块事件监听逻辑，通过事件委托机制优化大量行的点击/双击复制/高亮处理性能，降低内存开销。
  - 优化随机文章推荐卡片的数据加载，实现接口请求和解析的缓存（`randomPostsCache`），避免重复请求与渲染。
- **细节调整**：
  - 暗色模式切换时，自动同步修改 `theme-color` meta 标签的 `content` 属性。
  - 优化表格换行逻辑，并增加列的最低宽度。
  - 优化 TOC 目录，防止悬浮时出现溢出滚动条。

**修复**

- 修复 Markdown 表格对齐失效的问题。
- 修复图标命名，将 `wechat` 图标重命名为 `weixin`。

## v0.3.5
2026-07-02

**新增**

- Hero Image 的 CTA Button 样式调整，支持使用自定义背景图片
- 社交链接 Hover 时显示 Tooltip
- Hero Image 支持配置窄屏布局下是否显示背景图片
  默认开启，禁用可以设置
  ```yaml
  home_hero:
    mobile_image: false
  ```

**修复**

- 修复 Hero CTA 中英文字母 p、j、g、q、y 显示被截断的问题
- 修复 Hero 开启 Image、但关闭窄屏模式 Image 时，hero_links 可见性异常的问题


## v0.3.4
2026-06-27

**新增：**
 - 主题内置全部 Lucide-icon 与 Font Awesome 6 Free
 - 构建时按需选取
 
Lucide 系列直接填写图标名称， `fa-<type>:<name>` 使用 Font Awesome 6 

## v0.3.3
2026-06-26

**新增**：

设置页面顶部的 `frontmatter` 即可，不写即关闭
```yaml
top_img:   # path or url
```

**修复**
修复了文章顶部图片在手机浏览器的样式问题


## v0.3.2
2026-06-26
**新增**
- 可以设置一些简单的背景特效
- 增加了文章页面顶图的设置

**调整**

- 重构了 **Tabs Block** 的样式
- 重构了 **Footer** 部分的链接设置，可以更简单的设置 Footer 链接

::: warning BreakChange
: 放弃解析 footer.right 的内容，改为 footer.powered 与 footer.links 字段

> 如果没在 Footer 添加过链接没有影响
:::

## v0.3.1
2026-06-24

**新增朋友圈**

朋友圈功能基于 [Friend-Circle-Lite](https://github.com/willow-god/Friend-Circle-Lite) 实现

- 支持生成 Friend-Circle-Lite 所需的 `friend.json`，从其生成的 `all.json` 解析朋友圈页面

使用 Hexo 创建页面，比如 `source/fcircle/index.md`
```yaml
---
title: 朋友圈
type: friends-feed
comments: false
fcl_all_json: https://raw.githubusercontent.com/<Name>/<Repo>/refs/heads/page/all.json
page_size: 20
source_label:
---
```

- `title`: 页面的标题，随意填写
- `type`: 页面类型，固定 `friends-feed`
- `comments`: 是否开启评论，`true` 开启， 默认 `false` 关闭
- `fcl_all_json`: FCL 的 `all.json` 的链接， `https://raw.githubusercontent.com/<Name>/<Repo>/refs/heads/page/all.json`
- `page_size`: 第一页显示的文章数量
- `source_label`: 来源连接的显示文字，不填则不显示来源

**优化**
- 优化首页 Hero Image 的样式，去除了重复的阴影遮罩
- 调整了友链页面的样式

## v0.3.0
*2026.06.24*

**新增 Google Fonts 支持**

新增了 Google Fonts 支持，可分别配置正文字体与 Mono 代码字体，支持文本切片(text=)与 CDN 加载。

## v0.2.3
*2026.06.23*

**调整开屏大图样式**
- 重构社交链接样式
- 可以设置导航链接
- 调整快速访问跳转按钮样式，并且访问后关闭对话框
- 调整无图片的背景：移除渐变与 radial-gradient 装饰

## v0.2.1
*2026.06.22*

**新增功能 GA4**
- 支持 Google Analytics GA4

默认关闭，在主题配置中增加配置开启
```yaml
google_analytics:
  enable: true
  measurement_id:  G-XXXXXXXXXX
```

## v0.2.0 
*2026.06.22*

**视觉系统大幅调整**

主线从虚线边框更换为纸张/胶带风格，包括卡片纸面阴影、胶带位置、友链 hover、标签 tape、tabs、表格、图片圆角、暗色模式对比度等。

- 新增首页开屏 Hero
- 新增自定义 404 页面支持
- 替换 Fallback 封面图
- 新增文章正文加粗主题色开关
- 新增紫色主题色
- 新增友链样式配置
- 新增社交图标按钮样式配置
- 文档补全：补了 hero、404、配置兼容原则、语言切换示例、`layout/development` 中的 `home-hero.ejs` 与 `home_hero` i18n 说明。

## v0.1.0
*2026.06.22*

第一次打包 GitHub Release ，主体功能都已完工，正常使用了一个月。

**功能**

- 支持 Artalk、Twikoo 评论系统
- 支持快速设置 Google AdSence 自动广告
- 支持 Umami 统计系统
- 支持友链页面

初始使用虚线边框的样式版本保留在 [style/dashed](https://github.com/Homulilly/hexo-theme-flatpaper/blob/style/dashed/README_zh.md) 分支。

## v0.0.0
*2026.05.16*

Hexo Theme Flatpaper init commit.
