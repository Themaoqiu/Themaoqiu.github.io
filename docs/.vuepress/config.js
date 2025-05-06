// .vuepress/config.js
import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

// 注意这里从 module.exports 变成了 export default
export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: "Themaoqiu的个人页面",
  description: "Themaoqiu的个人页面",
  base: "/", // 假设你的仓库是 themaoqiu.github.io
  bundler: viteBundler(),

  theme: hopeTheme({
    hostname: "https://themaoqiu.github.io",
    author: {
      name: "Xingjian Wang",
    },
    iconAssets: "iconify",
    logo: "/logo.svg", // 需要放置在 .vuepress/public 目录下

    navbar: [
      { text: "Main", link: "/", icon: "fluent-color:home-48" },
      { text: "Research", link: "/research/", icon: "fluent-color:book-open-16"},
      { text: "Open source", link: "/open/", icon: "fluent-color:code-16"},
      { text: "Blogs", link: "/article/", icon: "fluent-color:clipboard-text-edit-20" },
    ],

    sidebar: {
      "/research/": "structure",
      "/open/": "structure",
      "/article/": "structure",
    },

    blog: { // 这是主题层面关于博客信息展示的配置
      description: "Some daily life",
      intro: "/intro.md", // 确保 intro.md 存在于 docs/ 根目录
      medias: {
        GitHub: "https://github.com/Themaoqiu",
        Email: "mailto:themaoqiu@gmail.com",
      },
    },

    plugins: {
      // 博客插件的详细配置
      blog: {
        filter: (page) => {
          // 确保 page.filePathRelative 存在并且以 "article/" 开头
          return page.filePathRelative?.startsWith("article/") ?? false;
        },
      },

      markdown: {
        // 文本对齐
        align: true,
        // 自定义属性
        attrs: true,
        // Chart.js 图表
        chartjs: true,  // 替换 chart
        // 代码块分组
        codeTabs: true, // 替换 codetabs
        // ECharts 图表
        echarts: true,
        // 图片 Figure 支持
        figure: true,
        // GFM 语法
        gfm: true,
        // 图片懒加载
        imgLazyload: true,
        // 图片尺寸
        imgSize: true,
        // 文件包含
        include: true,
        // 数学公式 (替换 katex)
        math: true,
        // 标记文本
        mark: true,
        // 代码演练场
        playground: {
          presets: ["ts", "vue"],
        },
        // 自定义样式容器
        stylize: [
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
        // 上标
        sup: true,
        // 下标
        sub: true,
        // 选项卡
        tabs: true,
        // v-pre 容器
        vPre: true,
      },
    },

    footer: "Powered by VuePress2",
    displayFooter: true,
    copyright: "Copyright © 2025-present Themaoqiu",
  }),
});