# 朋友圈 (Friends Circle)

结合 [Friend-Circle-Lite](https://github.com/willow-god/Friend-Circle-Lite) 生成的友链订阅动态流页面。

在 `source/fcircle/index.md` 中，配置 `type: friends-feed` 并传入相关的 JSON 接口地址即可：

```yaml
---
title: 朋友圈
type: friends-feed
comments: false
# 你的友链朋友圈 all.json 地址
fcl_all_json: https://raw.githubusercontent.com/YourName/Friend-Circle-Lite/refs/heads/page/all.json
page_size: 20       # 每页加载的动态数量
source_label:       # 可选来源标签
top_img:            # 顶部图片（可选）
---
```

::: tip 提示
为了让你的友链能够被 Friend-Circle-Lite 爬取，请确保在主题配置文件中开启了 `fcl.friend_json.enable: true`。开启后，Hexo 会在生成站点时输出 `friend.json` 文件供服务端使用。
:::

## 顶部图片
可以使用 
```
top_img: https://img.nep.me/p/flatpaper/fcircle-top.webp
```

![Fcircle Top_IMG](https://img.nep.me/p/flatpaper/fcircle-top.webp)

预览： [Homulilly - 朋友圈](https://homulilly.com/friends/)
