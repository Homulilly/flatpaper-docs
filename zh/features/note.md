# 提示块 (Note Block)

[主题效果总览：文章块与交互组件预览](https://flatpaper.nep.me/2026/06/11/theme-feature-overview/)

FlatPaper 主题内置了兼容 NEXT 主题的块级元素（Tags），帮助你在 Markdown 文章中实现更具表现力的排版。

使用 `{% note %}` 标签可以在文章中插入各种风格的提示信息。

::: details 图片预览
![fpwiki-noteblock.png](https://img.nep.me/p/fpwiki-noteblock.webp)
:::

## 基本语法

```text
{% note [class] [title] %}
这是一个提示块的内容。
{% endnote %}
```

- **`class`**：可选，表示提示块的颜色风格。支持 `default`, `primary`, `success`, `info`, `warning`, `danger`。
- **`title`**：可选，当提供标题时，提示块将变为可折叠的形式。

## 示例

**基础提示块：**
```text
{% note success %}
这是一个 Success 提示
{% endnote %}
```

**可折叠提示块：**
```text
{% note warning 这是一个可折叠的警告 %}
点击标题可以展开/折叠内部的详细内容。
{% endnote %}
```

### 替代写法 (Markdown Container)

除了使用 `{% note %}` 标签，你也可以使用更加符合 Markdown 直觉的 `:::` 容器语法，这两种写法的最终效果完全一致：

```text
::: success
这是一个 Success 提示
:::

::: warning 这是一个可折叠的警告
点击标题可以展开/折叠内部的详细内容。
:::
```

> [!TIP]
> **如何选择写法？**
> * **`:::` 容器语法**：书写快速、方便。但请注意，如果未来需要迁移到其他不支持该语法的主题（例如 NexT 或 Anzhiyu），这些提示块需要重新编写（虽然不会报错，但 `:::` 标记会被原样输出为纯文本）。
> * **`{% note %}` 标签语法**：兼容性更好。大多数支持 Note Block 的 Hexo 主题（如 NexT、Anzhiyu 等）都原生支持此种标签写法，便于未来无缝迁移。
> 
> 建议直接使用 [Flatpaper Tools](https://hexotag.nep.me/) 生成并填写 `{% %}`，既能提高编写效率，又能保障迁移兼容性。

## 全局样式配置
你可以在主题配置文件 `_config.yml` 中全局修改提示块的外观：
```yaml
note:
  style: sticky # 支持 flat, simple, modern, sticky, disabled
  icons: true   # 是否显示图标
```

::: info
Flatpaper 的 Note 块是为了兼容从 NEXT 迁移的博客文件，type 后面增加内容会自动变为可折叠的 `details`，而不是只显示标题
:::
