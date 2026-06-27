# 图标介绍 (Built-in Icons)

FlatPaper 主题采用内置的图标 Registry 系统，能够根据配置和模板文件**按需提取并打包**页面所用到的 SVG 图标，实现零外部依赖和极速页面加载，无需引入任何外部图标 CDN。

目前主题支持了 **Lucide** 和 **Font Awesome Free 6** 两套主流图标库。

---

## 预览与检索链接

你可以访问官方的图标库检索页面来挑选你需要的图标：

* **Lucide 图标库**：[Lucide Icons 官方检索 ↗](https://lucide.dev/icons)
* **Font Awesome 6 图标库**：[Font Awesome Free 6 官方检索 ↗](https://fontawesome.com/search?o=r&m=free)

---

## 设置与配置介绍

你可以在站点的菜单导航、Brand Links（顶部辅助导航）、个人社交链接等地方自由使用这些图标：

* **配置指南**：请参阅 [配置总览 - 导航菜单 ↗](/zh/config#导航菜单-menu-nav) 获取基础的配置方法。

### 图标命名规范与示例

#### 1. Lucide 图标 (默认优先)
未加任何前缀的图标名称会自动优先匹配 Lucide 图标库。
```yaml
menu:
  首页:
    link: /
    icon: home        # 匹配 Lucide 库中的 home 图标
  归档:
    link: /archives/
    icon: archive     # 匹配 Lucide 库中的 archive 图标
```

#### 2. Font Awesome Free 6 图标 (需前缀)
使用 Font Awesome 图标时，需要加上对应的类别前缀：
* `fa-brands:` 用于品牌图标（Brands）
* `fa-solid:` 用于实心图标（Solid）
* `fa-regular:` 用于常规图标（Regular）

```yaml
menu:
  GitHub:
    link: https://github.com/
    icon: fa-brands:github       # 匹配 Font Awesome Brands 库
  删除:
    link: /trash/
    icon: fa-solid:trash-can     # 匹配 Font Awesome Solid 库
```

#### 3. 个人卡片社交链接 (Social Profile)
社交链接的对象配置形式同样完全支持使用上述任意图标库：
```yaml
profile:
  social:
    GitHub: https://github.com/yourname    # 按键名自动匹配默认图标
    Mastodon:
      url: https://mastodon.social/@yourname
      icon: fa-brands:mastodon             # 指定使用 Font Awesome 品牌图标
    Blog:
      url: https://homulilly.com
      icon: globe                          # 指定使用 Lucide 图标
```

## 版权信息 (Notices)

主题内置打包的图标版权归属原作者，许可证如下：

* **Lucide 图标** 来自 Lucide 项目，遵循 [ISC 许可证](https://github.com/lucide-icons/lucide/blob/main/LICENSE)。
* **Font Awesome Free 6.7.2 图标** 来自 Fonticons, Inc.。SVG 图标遵循 [CC BY 4.0 协议](https://fontawesome.com/license/free)，字体遵循 SIL OFL 1.1，代码部分遵循 MIT。
* 完整的版权声明说明文件可以查看主题根目录下的 `source/_data/icons/NOTICE.md`。
