# 配置文件解析

本章节详细介绍 FlatPaper 主题 `_config.yml`（或站点覆盖配置 `_config.flatpaper.yml`）中的各个基础功能与 UI 配置项。

对于评论、数据统计、自定义注入等进阶功能，请参阅侧边栏的 **功能设置** 相关章节。

## 基础与全局配置

### 导航菜单 (menu & nav)

```yaml
menu:
  首页:
    link: /
    icon: home
  友链:
    link: /links/
    icon: link
  关于:
    link: /about/
    icon: user 
  # 二级菜单示例
  文章:
    icon: folder
    item:
      分类:
        link: /categories/
        icon: folder
      标签:
        link: /tags/
        icon: tag
      归档:
        link: /archives/
        icon: archive

nav:
  enable: false
  menu:
    - title: Live DEMO
      item:
        - name: FlapaperDemo
          link: https://flatpaper.nep.me/
          icon: leaf
        - name: Homulilly
          link: https://homulilly.com/
          icon: https://homulilly.com/images/avatar.jpg
    - title: Project
      item:
        - name: Flatpaper Tools
          link: https://hexotag.nep.me
          icon: https://hexotag.nep.me/icon.svg
```
- `menu`: 主导航菜单，支持图标和嵌套二级菜单。
- `nav`: 顶部的额外导航栏配置(站点名称前面的按钮)，可用于放置外部项目链接等。

`icon` 会通过内置图标 registry 解析。未加前缀的名称优先匹配 Lucide，因此 `icon: archive` 这类旧写法继续可用。需要 Font Awesome Free 6 时加前缀：

```yaml
menu:
  GitHub:
    link: https://github.com/
    icon: fa-brands:github
  删除:
    link: /trash/
    icon: fa-solid:trash-can
```

FlatPaper 会在主题内置 Lucide 与 Font Awesome Free 6 图标定义，生成时只输出模板与配置实际用到的 symbol，不加载外部图标 CDN。

Font Awesome Free 6 图标来自 Fonticons, Inc.，SVG 图标使用 CC BY 4.0；Lucide 图标使用 ISC License。版权说明见 `source/_data/icons/NOTICE.md`。

### 站点图标 (favicon)

```yaml
favicon: /images/favicon.svg
```

默认使用主题内置的 svg 图标，设为 `false` 则不输出 `<link rel="icon">`，交给浏览器请求根目录下的 `/favicon.ico`。

### 背景特效 (background)

```yaml
background:
  style: default
```
可选项：
- `default` (默认纸纹)
- `grid` (网格)
- `line` (横线)
- `cross` (十字星)
- `dotted` (点阵)

### 全局样式微调 (tape, color, tags, links, buttons)

```yaml
# 默认主题色：orange | purple | sakura | blue | pink | green | black
color: green

# 胶带装饰总开关
tape:
  enable: true

# 标签样式： tape | pill
tags:
  style: tape

# 友链样式： default | tape
links:
  style: tape

# 图标按钮样式： circle（默认圆形，1px 虚线）| tape（手帐贴纸：墨团圆角、手贴歪斜、悬停胶带斜纹）
# 作用于：顶栏 logo/汉堡/搜索/调色盘/明暗切换、社交链接、文章反应按钮、TOC 折叠、搜索关闭、窄屏抽屉关闭
buttons:
  style: circle
```

- `color`: 默认主题色，支持 `orange`, `purple`, `sakura`, `blue`, `pink`, `green`, `black` 等多款小清新配色。
- `tape.enable`: 胶带装饰总开关。
- `tags.style`: 标签样式。
- `links.style`: 友链卡片样式。
- `buttons.style`: 图标按钮样式。

### 页脚 (footer)

```yaml
# 页脚：
# - left 支持 HTML；占位符：{year}=当前年份，{name}=站点 _config.yml 的 author
# - powered 负责主题署名；设为 false 或配置 enable: false 可关闭
# - links 支持一维链接列表（一行）或二维链接列表（多行），同一行内用 " · " 分隔
# 不配置 footer 时默认：左 "© {year} {author}"，右 "Powered by Theme FlatPaper"
footer:
  left: '© {year} By {name}'
  powered:
    enable: true
    prefix: Powered by Theme
    name: FlatPaper
    link: https://github.com/Homulilly/hexo-theme-flatpaper
  links:
    -
      - name: 服务条款
        link: /terms
      - name: 隐私政策
        link: /privacy
    -
      - name: Flatpaper Tools
        link: https://hexotag.nep.me/
```

## 侧边栏与个人信息

### 个人资料 (profile)

配置位于侧栏的个人信息卡片。

```yaml
profile:
  role: 日常记录
  bio: 介绍一下自己 — 一两句话，写写你想被别人记住的部分。
  # 头像图片路径（站点根的 source/ 目录下）。留空则使用 CSS 绘制的默认头像。
  avatar:
  # 头像图片形状：square（默认，原始方形）或 circle（应用圆形遮罩）
  avatar_shape: square
  # Profile 卡片站点统计；为空或 false 隐藏，true 显示无链接，其他非空值渲染为链接
  site_info:
    # posts: /archives/
    # categories: /categories/
    # tags: /tags/
  social:
    # 写法 1：键 -> URL（按键名自动匹配图标）
    # GitHub: https://github.com/yourname
    # 写法 2：对象 -> 指定使用某个内置图标（用于自定义命名 / 别名）
    # Mastodon:
    #   url: https://mastodon.social/@yourname
    #   icon: send
    #   tooltip: 在 Mastodon 找我
    # 写法 3：完全自定义 SVG —— 提供 <path>/<circle> 等子元素字符串，
    # 容器视图框为 24x24，颜色用 currentColor
    # 知乎:
    #   url: https://www.zhihu.com/people/yourname
    #   tooltip: 知乎主页
    #   svg: '<path d="M2 2 L22 22"/>'
  rss:
    enable: true
    path: /atom.xml
```
社交平台图标支持自动识别（如 github, twitter 等），也支持指定内置图标或完全自定义 SVG 代码。对象写法可以使用任意 registry 名称，例如 `icon: send`、`icon: fa-brands:mastodon` 或 `icon: fa-solid:globe`。`tooltip` 字段可自定义 hover/focus 时显示的提示文字，未配置时使用键名。

### 欢迎卡片 (welcome)

显示在侧栏的欢迎卡片（默认在右栏），用于写一些信息，也可以放推广外链。

```yaml
welcome:
  label: 今日份记录
  title: 把日子，慢慢写下来
  text: 生活不是每天都精彩，但总有值得收藏的片段。
  cta_text: 开始阅读
  cta_link: archives/
  # 自定义封面图。留空则使用 CSS 绘制的山景默认图。
  # 支持站内相对路径（如 /images/welcome.jpg，放在站点 source/ 下）或绝对 URL。
  # image:
```

## 首页与文章展示

### 首页开屏大图 (home_hero)

首页开屏设置，默认**关闭**，内部信息卡片默认读取站点信息，也可以指定覆盖。

可以选择是否设置背景图片，且支持设置多张随机选择。

可以摆放可以拖动的贴纸，贴纸也支持跳转链接。

```yaml
# 首页开屏大图。默认关闭，不影响已有站点；仅在首页第一页渲染。
# 开启后默认复用 profile 的头像、简介、社交链接与 RSS，也可以在这里覆盖。
home_hero:
  enable: false
  # title: 我的手账
  # subtitle: 今日份记录
  # bio: 写给路过此处的你。
  # avatar: /images/avatar.jpg
  # avatar_shape: circle
  #
  # 背景图。留空时使用主题内置的手账纸张背景；设置后图片会铺满开屏。
  # 也可配置为数组，浏览器每次载入随机使用一张。
  # image: /images/hero.jpg
  # image:
  #   - /images/hero-1.jpg
  #   - /images/hero-2.jpg
  # 移动端是否继续显示背景图；设为 false 时窄屏回退到纸张背景。
  mobile_image: true
  #
  # 背景图暗色遮罩透明度：[顶部, 底部]，范围 0-1。
  # image_overlay: [0.2, 0.2]
  # 底部贴纸按钮的文字与目标锚点；默认进入首页内容区。
  # cta_text: 开始阅读
  # cta_link: "#flatpaper-home-content"
  # 贴纸按钮背景：01-09、random，或自定义图片路径。
  # cta_background: 01
  #
  # Hero 区域的快速导航链接。配置后将替代默认的波浪线分隔符。
  # hero_links:
  #   - name: 归档
  #     link: /archives/
  #   - name: 分类
  #     link: /categories/
  #   - name: Flatpaper Tools
  #     link: https://hexotag.nep.me
  #     alt: Flatpaper Tools
  # 一些贴纸装饰
  stickers:
    enable: true
    draggable: true
    # 内置便签贴纸的文字。
    # note_text: 今日
    # 自定义图片贴纸最多渲染 5 张；加上内置便签后，开屏最多 6 个 sticker。link 可选，不配置则只是可拖动装饰。
    # items:
    #   - image: /images/stickers/memo.png
    #     alt: 手账贴纸
    #     size: 96
    #   - image: /images/stickers/github.png
    #     alt: GitHub
    #     link: https://github.com/yourname
```

> 由于可拖动贴纸的存在，Hero 内的站外链接跳转前会询问。

### 列表与排版相关

```yaml
# 首页文章卡片摘要的最大字符数（无 <!-- more --> 时按正文截断）
excerpt_length: 96
# 侧边栏随机文章展示数量
random_posts: 5
# 随机文章候选池大小；从生成期最新 N 篇中抽取，0 或留空表示不限
random_posts_pool: 100
# 文章页侧栏 TOC 下方的最新文章组件；默认关闭。limit 默认为 5。
latest_posts:
  enable: false
  limit: 5
# 文章页底部"相关文章"展示数量；0 表示禁用；不配置则默认 3 篇
related_posts: 4
```

### 首页置顶轮播 (featured)

```yaml
# 首页轮播置顶（最多 4 项；按文章 slug / 路径 / 标题任一匹配）
featured:
  # - hello-world
  # - markdown-elements-showcase
  # - 2026/05/09/weekend-photowalk-notes

# 轮播自动播放（毫秒，0 表示关闭）
featured_autoplay: 5000

# 首页 featured 图片左侧折线特效
featured_image_zigzag: true
```

### 文章顶部图片 (post_top_img)

```yaml
# 文章页顶部图片：
# 留空禁用；top_img 只使用文章 front-matter 的 top_img；fallback 则 top_img 优先，缺省时按 cover/thumbnail/image/banner/正文首图解析。
post_top_img:
  mode: fallback
```

### 文章样式 (article)

```yaml
# 文章正文加粗文本是否使用主题色；设为 false 则只保留默认加粗。
article:
  strong_accent: true
```
正文加粗文本是否使用主题强调色，关闭后仅保留默认加粗。
- `tags.style`: `tape` 或 `pill` (文章标签样式)

### 块元素与代码 (note & code)

```yaml
# {% note %} 提示块外观风格：
#   flat      左侧实色条 + 淡背景填充（默认）
#   simple    无背景，仅左侧实色条 + 细边框 — 干净低调
#   modern    完全填充的圆角盒，无左侧条
#   sticky    便签贴纸：直角、右下微阴影，顶部中间条纹胶带
#   disabled  去掉所有装饰，保留语义结构
# icons：是否在正文/标题前显示圆形图标徽章（true | false）
note:
  style: sticky
  icons: true

# 代码块外观主题： simple | dark | sand | light
code:
  theme: simple
```

## 评论与互动

### 评论系统 (comments)

只在文章和独立页面渲染。

```yaml
# 评论系统选择： twikoo | artalk （留空 / 删除则不启用评论区）
# 只在文章和独立页面（layout: page）渲染；单篇可在 front-matter 用 `comments: false` 关闭。
comments:

# Twikoo（https://twikoo.js.org，需自行部署后端 https://twikoo.js.org/quick-start.html）
twikoo:
  envId:                                # Twikoo 后端 URL，例如：https://twikoo.example.com
  # cdn:                                # 可选；覆盖默认 jsDelivr CDN（私有镜像 / 企业 CDN）

# Artalk（https://artalk.js.org，需自行部署后端 https://artalk.js.org/guide/deploy.html）
artalk:
  server:                               # Artalk 后端 URL，例如：https://artalk.example.com
  site:                                 # 站点名（需与 Artalk 后台已注册的站点一致）
  # cdn_css:                            # 可选；覆盖默认 jsDelivr CSS
  # cdn_js:                             # 可选；覆盖默认 jsDelivr JS
```

### 互动区打赏 (reactions)

文章底部评论上方追加自定义弹窗（如收款二维码）。

```yaml
# 文章底部互动区（评论 / 分享 一行）追加的自定义条目，常用于"赞赏 / 打赏"。
# 鼠标 hover 或点击按钮后，气泡弹出一张图片（一般是收款二维码）。可添加多个。
# 每项字段：
#   type   目前仅支持 image（弹出一张图片）
#   name   按钮旁文字，如 赞赏 / 微信 / 支付宝（缺省为 赞赏）
#   icon   图标名：gift（默认）| alipay | weixin | paypal | heart 或任意内置图标
#   align  left（靠左，与"评论"同侧）| right（靠右，与"分享"同侧，默认）
#   image  图片路径（站点 source/ 下的相对路径，如 /images/reward.jpg）或绝对 URL
#   title  可选；气泡标题，缺省用 name
reactions:
  custom:
    # - type: image
    #   name: 赞赏
    #   icon: weixin
    #   align: right
    #   image: /images/reward-weixin.jpg
    #   title: 微信赞赏
    # - type: image
    #   name: 支付宝
    #   icon: alipay
    #   align: right
    #   image: /images/reward-alipay.jpg
```

### Friend-Circle-Lite (fcl)

```yaml
# Friend-Circle-Lite 兼容数据
# https://github.com/willow-god/Friend-Circle-Lite
# 构建时会读取 source/_data/links.yml，并在站点根目录输出 /friend.json
# 只有配置了非空 rss 字段的友链会写入 friend.json。
# 将该 URL 填入 Friend-Circle-Lite 的 spider_settings.json_url 即可复用友链数据。
fcl:
  friend_json:
    enable: true
    path: friend.json
```

## 高级与拓展

### 搜索索引上限 (search)

```yaml
# 前端搜索索引上限（0 或留空 = 不限）。文章很多时调小可减小首屏 JSON 体积。
search:
  limit: 0
```

### 统计与广告系统

```yaml
# Umami 网站统计（https://umami.is）
# enable 为 true 时，会在每个页面 </head> 前注入 Umami tracker：
umami:
  enable: false
  host:                                 # 例如：analytics.example.com
  website_id:                           # 例如：xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  # domains: example.com,www.example.com

# Google Analytics 4 / Google tag (gtag.js)
google_analytics:
  enable: false
  measurement_id:                       # 例如：G-12345678

# Google AdSense
# enable 为 true 且 client 合法时，会在每个页面 <head> 中注入 AdSense loader
# client  发布商 ID，形如 ca-pub-1234567890123456
adsense:
  enable: false
  client:
  account: false
  # 预置广告位：每项留空则该位置不渲染。
  slots:
    post_top:
    post_bottom:
    sidebar:
```

- **umami**: 隐私友好的开源网站统计。
- **google_analytics**: Google Analytics 4 (GA4) 衡量 ID 配置。
- **adsense**: Google AdSense 客户端 ID 以及 `post_top`, `post_bottom`, `sidebar` 广告位（slots）配置。

### 功能集成

```yaml
# Fancybox 图片灯箱（https://fancyapps.com/fancybox/）
# 启用后，文章页与独立页面（layout: page）的正文 <img> 自动用 Fancybox 包裹
fancybox:
  enable: true
  # cdn_css:                            # 可选；覆盖默认 jsDelivr CSS
  # cdn_js:

# Google Fonts。默认关闭；开启后会在 <head> 注入 Google Fonts CSS。
# cdn 可填写镜像域名，用于覆盖 https://fonts.googleapis.com，例如 https://fonts.loli.net。
google_fonts:
  enable: false
  cdn: https://fonts.googleapis.com
  # text_font: Noto Sans JP:wght@400;700
  # text: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
  fonts:
    # - Noto Sans SC
  mono:
    # - JetBrains Mono
```

- **fancybox**: 启用后自动给正文图片增加点击放大、切换的灯箱功能。
- **google_fonts**: 启用自动注入自定义字体，支持配置 CDN 以及单独的等宽字体（`mono`）。

### 自定义注入 (inject)

在 `<head>` 或 `<body>` 末尾直接注入 HTML。

```yaml
# 自定义 css 与 js 注入
# head：每个条目原样输出到 </head> 之前
# bottom：每个条目原样输出到 </body> 之前
# 条目为完整 HTML 字符串（<link> / <script> / <style> 等均可）
inject:
  head:
    # - <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media='all'">
    # - <script src="/js/xxx.js"></script>
  bottom:
    # - <script src="/js/xxx.js" defer></script>
```
