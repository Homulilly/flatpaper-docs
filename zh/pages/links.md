# 友情链接 (Links)

友情链接页面能够以卡片网格的形式展示站点友链。

在 `source/links/index.md` 中，配置 `type: link`：

```yaml
---
title: 友情链接
type: link
subtitle: 这里是一段关于友链的副标题或简介
top_img:               # 顶部图片(可选)
---

这里可以写一段正文内容，会显示在友链卡片上方。
```

## 友链数据配置

主题会自动读取站点根目录下的 `source/_data/links.yml` 文件作为友链卡片数据来源（如果没有 `_data` 文件夹需要手动创建）。基本格式如下：

```yaml
- class_name: 技术大佬
  class_desc: 经常互相串门的博客
  link_list:
    - name: GitHub
      link: https://github.com/
      avatar: https://github.githubassets.com/favicons/favicon.svg
      descr: 面向开发者的代码托管与协作平台。
```

## 顶部图片

可以使用
```yaml
top_img: https://img.nep.me/p/flatpaper/links-top.webp
```

![links-top.png](https://img.nep.me/p/flatpaper/links-top.webp)

预览效果： [Homulilly - 友链](https://homulilly.com/friends/)