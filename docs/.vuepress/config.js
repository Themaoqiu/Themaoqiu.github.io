// .vuepress/config.ts
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  // 站点配置
  lang: "zh-CN", // 语言
  title: "Themaoqiu", // 网站标题
  description: "Themaoqiu的个人页面", // 网站描述
  bundler: viteBundler(),
  // 主题配置
  theme: hopeTheme({
    // == 基础配置 ==
    hostname: "https://your-github-username.github.io", // 部署站点的域名
    author: {
      name: "你的名字", // 作者名
      // url: "你的个人链接", // 可选
    },
    iconAssets: "iconfont", // 图标资源，可选 'iconfont' 或 'fontawesome'
    logo: "/logo.svg", // 导航栏 Logo，需要放置在 .vuepress/public 目录下

    // == 导航栏 (Navbar) 配置 ==
    navbar: [
      { text: "主页", link: "/", icon: "home" }, // 主页链接
      { text: "博客", link: "/article/", icon: "blog" }, // 博客页面链接 (路径可以自定义)
      // 你可以添加更多导航项，例如：
      // {
      //   text: "指南",
      //   icon: "lightbulb",
      //   prefix: "/guide/",
      //   children: ["", "page1", "page2"], // 假设你有 guide/README.md, guide/page1.md 等
      // },
    ],

    // == 侧边栏 (Sidebar) 配置 ==
    // Theme Hope 通常会自动生成侧边栏，但你也可以手动配置
    // sidebar: "structure", // 基于文件结构自动生成
    // 或者手动配置:
    // sidebar: {
    //   "/guide/": [ /* guide 页面的侧边栏 */ ],
    //   "/article/": "structure", // 博客文章列表自动生成
    // },

    // == 博客 (Blog) 配置 ==
    blog: {
      description: "这是我的博客描述...",
      intro: "/intro.html", // 点击博主信息跳转的介绍页面路径
      medias: { // 社交媒体链接
        GitHub: "https://github.com/Themaoqiu",
        Email: "mailto:your-email@example.com",
        // Zhihu: "https://www.zhihu.com/people/your-zhihu-id",
        // BiliBili: "https://space.bilibili.com/your-bilibili-id",
        // 添加更多... 参考 Theme Hope 文档
      },
    },

    // == 加密配置 (可选) ==
    // encrypt: {
    //   config: {
    //     "/secret/": ["your-password"], // 为 /secret/ 路径下的页面设置密码
    //   },
    // },

    // == 插件配置 ==
    plugins: {
      // 启用博客功能
      blog: true, // 或者传入对象进行详细配置 new BlogOptions()

      // 启用评论功能 (可选，以 Giscus 为例)
      // comment: {
      //   provider: "Giscus",
      //   repo: "your-github-username/your-repo-name", // 你的评论仓库
      //   repoId: "your-repo-id",
      //   category: "Announcements",
      //   categoryId: "your-category-id",
      // },

      // 启用 Markdown 增强
      mdEnhance: {
        align: true, // 自定义对齐
        attrs: true, // 属性支持
        chart: true, // Chart.js 图表
        codetabs: true, // 代码块分组
        // demo: true, // 代码演示
        echarts: true, // ECharts 图表
        figure: true, // 图片 Figure
        // flowchat: true, // flowchart 流程图
        gfm: true, // GFM 语法
        imgLazyload: true, // 图片懒加载
        imgSize: true, // 图片尺寸
        include: true, // 文件包含
        katex: true, // KaTeX 数学公式
        mark: true, // 标记
        // mermaid: true, // Mermaid 图表
        playground: { // 代码演练场
          presets: ["ts", "vue"],
        },
        // presentation: { // 幻灯片
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
        stylize: [ // 自定义样式容器
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true, // 下标
        sup: true, // 上标
        tabs: true, // 选项卡
        vPre: true, // v-pre 容器
        // vuePlayground: true, // Vue 演练场
      },

      // 其他插件... 例如 PWA, SEO, Sitemap 等，请参考 Theme Hope 文档
    },

    // == 页脚 (Footer) 配置 ==
    footer: "默认页脚 | <a href='https://theme-hope.vuejs.press/' target='_blank'>VuePress Theme Hope</a>", // 页脚内容，支持 HTML
    displayFooter: true, // 显示页脚
    copyright: "Copyright © 2024-present 你的名字", // 版权信息

    // ... 其他你想要配置的主题选项
  }),

  // 如果你需要自定义构建工具配置 (例如 Vite 或 Webpack)
  

  // VuePress 插件 (不属于主题自带的)
  // plugins: [],
});