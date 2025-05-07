import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: "Themaoqiu的个人页面",
  description: "Themaoqiu的个人页面",
  base: "/", // 仓库是 themaoqiu.github.io
  bundler: viteBundler(),

  theme: hopeTheme({
    hostname: "https://themaoqiu.github.io",
    author: {
      name: "Themaoqiu",
    },
    iconAssets: "iconify",
    logo: "/logo.jpg", // 需要放置在 .vuepress/public 目录下
    socialLinks: [
      { 
        icon: "github", 
        link: "https://github.com/Themaoqiu",
      },
      {
        icon: "email",
        link: "mailto:themaoqiu@gmail.com",
      },
    ],
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

    blog: { 
      description: "Some daily life",
      intro: "/intro.md",
      medias: {
        GitHub: "https://github.com/Themaoqiu",
        Email: "mailto:themaoqiu@gmail.com",
      },
    },
    
    plugins: {
      // 博客插件的详细配置
      blog: {
        filter: (page) => {
          return page.filePathRelative?.startsWith("article/") ?? false;
        },
      },

      markdown: {
        align: true,
        attrs: true,
        chartjs: true, 
        codeTabs: true, 
        echarts: true,
        figure: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        math: true,
        mark: true,
        playground: {
          presets: ["ts", "vue"],
        },
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
        sup: true,
        html: true,
        sub: true,
        tabs: true,
        vPre: true,
      },
    },

    footer: "Powered by VuePress2",
    displayFooter: true,
    copyright: "Copyright © 2025-present Themaoqiu",
  }),
});