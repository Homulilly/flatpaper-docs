# 赞赏名单 (Reward List)

在「关于页」等独立页面的正文中放入结构化的 `.reward-list` HTML，即可渲染出手账便签风格的赞赏名单卡片。每张卡片都是带和纸胶带、轻微歪斜的彩色纸条，右上角支持展示圆形头像。

## HTML 结构示例

在 Markdown 页面中直接写入以下 HTML 结构：

```html
<div class="reward-list">
  <div class="reward-list__item reward-list__item--p1">
    <img class="reward-list__avatar no-zoom" src="/images/donor.jpg" alt="昵称" loading="lazy" referrerpolicy="no-referrer">
    <span class="reward-list__name">昵称</span>
    <div class="reward-list__bottom">
      <span class="reward-list__amount">¥100</span>
      <time class="reward-list__date">2026-01-01</time>
    </div>
  </div>
</div>
<p class="reward-list__total">共 <strong>1</strong> 人 · 最新更新时间：<time datetime="2026-01-01">2026-01-01</time></p>
```

### 文本头像回退写法

如果没有赞助者的图片头像，可以省略 `<img>`，改用 `.reward-list__avatar--text` 展示昵称首字符：

```html
<span class="reward-list__avatar reward-list__avatar--text" aria-hidden="true">昵</span>
```

## 视觉与特性

- **金额档位自动配色（人民币纸币色）**：
  客户端脚本会自动解析 `.reward-list__amount` 中的金额数字并匹配对应的纸币色徽章，无需手动编写金额颜色类：
  - `≥ 100`：红色（`reward-list__amount--100`）
  - `≥ 50`：绿色（`reward-list__amount--50`）
  - `≥ 20`：棕黄色（`reward-list__amount--20`）
  - `≥ 10`：蓝色（`reward-list__amount--10`）
  - `≥ 5`：紫色（`reward-list__amount--5`）
  - `≥ 1`：橄榄绿（`reward-list__amount--1`）
  *(如需手动指定，也可直接在元素上添加上述类名覆盖自动判断)*
- **循环便签纸色**：支持 `reward-list__item--p1` 至 `reward-list__item--p5` 五种纸色档位（红 / 蓝 / 绿 / 橙 / 紫），顶部胶带颜色会随纸色自动切换。
- **防灯箱放大**：头像图片带有 `no-zoom` 类名，避免被 Fancybox 包裹后破坏右上角贴纸定位。
- **响应式与深色模式**：桌面端自动多列网格排布，窄屏自动切换为单列；完整适配深色模式与 `prefers-reduced-motion`。
