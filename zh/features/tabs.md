# 选项卡 (Tabs Block)

[主题效果总览：文章块与交互组件预览](https://flatpaper.nep.me/2026/06/11/theme-feature-overview/)

使用 `{% tabs %}` 可以在文章内创建选项卡，特别适合代码多语言切换或内容归纳对比。

::: details 图片预览
![fpwiki-tabs.png](https://img.nep.me/p/fpwiki-tabs.webp)
:::

## 基本语法

```text
{% tabs [Unique name], [index] %}
可选的描述内容，会显示在选项卡上方
<!-- tab [Tab caption] -->
选项卡 1 的内容
<!-- endtab -->
<!-- tab [Tab caption] -->
选项卡 2 的内容
<!-- endtab -->
{% endtabs %}
```

- **`[Unique name]`**：这组 Tabs 的唯一标识名，如果子 tab 没有写名字，则默认显示为 `标识名 1`, `标识名 2`。
- **`[index]`**：默认展开第几个选项卡（从 1 开始）。如果是 `-1` 则默认全折叠，只显示标签标题。
- **`[Tab caption]`**：该选项卡的具体名称。

## 示例

```text
{% tabs 语言切换, 1 %}
这是一个代码示例的切换：

<!-- tab Python -->
`print("Hello World")`
<!-- endtab -->

<!-- tab JavaScript -->
`console.log("Hello World");`
<!-- endtab -->

{% endtabs %}
```

在上面的示例中，默认展开第一个选项卡（Python）。

写起来太麻烦？

这里提供了一个工具：[Flatpaper Tools - Tabs](https://hexotag.nep.me/tabs)
