# 堆叠相册 (Stack Album)

FlatPaper 提供了扑克牌堆叠式相册标签，支持在文章或独立页面中展示一组像扑克牌一样叠放的照片：点击最上层的照片，它会被抽起并滑入牌堆底部（澎湃 OS 相册风格），最上层清晰显示，下方各层带有景深模糊效果。

## 1. 基础堆叠相册 (`stackalbum`)

使用 `{% stackalbum %}` 标签包裹一组 Markdown 图片即可：

```markdown
{% stackalbum %}
![横图](https://example.com/landscape.jpg "h")
![竖图](https://example.com/portrait.jpg "v")
![自动](https://example.com/auto.jpg)
{% endstackalbum %}
```

### 参数与属性说明

- **容器尺寸**：标签支持传入可选参数 `宽,高` 控制容器尺寸（默认 `480,480`），例如 `{% stackalbum 520,480 %}`。容器实际高度会自动取 `高` 参数与卡片实际所需高度中的较大值，避免竖图较多时溢出到下方正文。
- **卡片方向声明**：每张图片可通过 Markdown title 声明方向：
  - `"h"`：横屏卡片（`480×320`）
  - `"v"`：竖屏卡片（`320×480`）
  - 不填写时，客户端会根据图片自身的宽高比自动判断横竖方向。
- **交互与无障碍**：
  - 点击最上层卡片触发翻牌动画（抽起 `0.26s` → 滑落 `0.38s`），动画期间锁定点击以防连点交错。
  - 支持键盘聚焦：聚焦牌堆后按 `Enter` 或 `→` 即可翻到下一张。
  - 窄屏或窄栏容器下会自动按可用宽度等比缩放整个牌堆。

---

## 2. 悬停翻牌清单 (`stackalbumnav`)

`{% stackalbumnav <数据路径> %}` 会渲染一个**小号牌堆 + 标题列表**。当鼠标悬停或键盘聚焦列表中的某个名字时，对应的封面会自动翻到牌堆最上层；移开或失焦后恢复初始顺序。非常适合用在「关于页」展示番剧、书单、影单、游戏清单等内容。

### 使用方法

数据路径是必填参数：第一段对应站点 `source/_data/` 目录下的文件名（不含扩展名），其余部分按点号 `.` 逐级下钻，最终指向一个数组列表。

```markdown
{% stackalbumnav about.comic.comic_list %}
{% stackalbumnav anime.list %}
{% stackalbumnav books %}
```

例如 `{% stackalbumnav about.comic.comic_list %}` 对应读取 `source/_data/about.yml`：

```yaml
comic:
  comic_list:
    - name: 鲤氏侦探事务所
      href: https://www.bilibili.com/bangumi/media/md28351530
      cover: https://img.example.com/cover.webp
```

### 数据字段兼容

列表中的每个条目支持多种常用字段别名：

| 用途 | 支持的字段名 |
| :--- | :--- |
| 标题 | `name` 或 `title` |
| 链接 | `href`、`link` 或 `url` |
| 封面 | `cover`、`image` 或 `src` |

> 若数据路径解析不到、目标不是列表或列表为空，该标签不会输出任何内容。

## 行为与特性

- **防盗链兼容**：相册图片默认携带 `referrerpolicy="no-referrer"`，可正常加载常见防盗链图床（如 B 站 `i0.hdslb.com`）；单张图片加载失败时会自动补齐策略并重试一次。
- **防灯箱冲突**：相册图片自带 `no-zoom` 类名，不会被主题的 Fancybox 灯箱包裹，点击仅触发翻牌。
- **无 JS 优雅降级**：在禁用 JavaScript 的环境下，卡片会保持普通块级排列，所有照片均可完整浏览。
