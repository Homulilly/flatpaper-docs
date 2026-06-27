# 安装教程

请确保你已经在本地初始化了一个 Hexo 站点。

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。

## 1. 下载主题

进入站点根目录，并将主题代码克隆到 `themes/flatpaper` 目录下：

```bash
git clone https://github.com/Homulilly/hexo-theme-flatpaper.git themes/flatpaper
```

## 2. 启用主题

修改 Hexo 站点根目录的 `_config.yml`，将主题设置为 `flatpaper`：

```yaml
theme: flatpaper
```

## 3. 安装依赖

FlatPaper 主题自身没有额外的 npm 依赖需要安装（除了 Hexo 默认环境），一些额外的功能需要安装相关的 Hexo 插件：

### RSS

```bash
npm install hexo-generator-feed --save
```

然后在站点 `_config.yml` 中设置：
```yaml
feed:
  enable: true
  type: atom
  path: atom.xml
  limit: 20
  content: true
```
### Sitemap
如需生成站点地图，安装 `hexo-generator-sitemap` 并在站点 `_config.yml` 中补充 sitemap 配置：

```bash
pnpm add hexo-generator-sitemap
```

```yaml
sitemap:
  path: sitemap.xml
```

## 4. 本地预览

在 Hexo 站点根目录运行以下命令以启动本地服务器：

```bash
hexo server
```

打开浏览器访问 `http://localhost:4000` 即可预览你的 Hexo 博客。
