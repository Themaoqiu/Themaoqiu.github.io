---
# .vuepress/README.md 或 .vuepress/index.md

# 标识为 Home 页面
home: true

# Hero (大标题) 区域配置
heroImage: /avatar.png # 大头像图片，放在 .vuepress/public/ 目录下
heroText: 你的名字或昵称 # 主标题
tagline: 一句简短的介绍或座右铭 # 副标题

# 功能按钮配置
actions:
  - text: 快速开始 🚀 # 按钮文字
    link: /guide/ # 按钮链接 (指向你的指南或博客等)
    type: primary # 按钮类型: primary (主要的), secondary (次要的)
  - text: 查看博客 📄
    link: /article/
    type: secondary

# Features (特性介绍，对应你往下滑的个人介绍部分)
features:
  - title: 特性/技能 1
    icon: rocket # 图标 (参考 Theme Hope 图标文档)
    details: 这是关于特性/技能 1 的详细描述，可以介绍你的某个项目、技能或想法。
  - title: 特性/技能 2
    icon: code # 图标
    details: 这是关于特性/技能 2 的详细描述。
  - title: 关于我
    icon: user # 图标
    details: 在这里可以写更详细的自我介绍，比如你的经历、兴趣爱好等。你可以添加 Markdown 语法，比如 **加粗**、*斜体*、[链接](...) 等。

# 页脚版权信息 (如果希望主页不同)
# copyright: false # 如果不想在主页显示版权
# footer: Custom Homepage Footer # 自定义主页页脚

---

## 这里是 Frontmatter 下方的内容

这部分内容会显示在 Features 区块的下方。你可以在这里添加更多的 Markdown 内容，例如：

* 最近的更新
* 一些想法
* 或者其他你想展示的内容