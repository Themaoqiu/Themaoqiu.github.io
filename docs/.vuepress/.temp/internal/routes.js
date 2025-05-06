export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/intro.html.js"), meta: {"excerpt":"\n<p>这里是你的详细个人介绍。</p>\n<p>你可以写下你的：</p>\n<ul>\n<li>教育背景</li>\n<li>工作经历</li>\n<li>技术栈</li>\n<li>兴趣爱好</li>\n<li>联系方式 (虽然博客信息里已有)</li>\n<li>等等...</li>\n</ul>\n","readingTime":{"minutes":0.23,"words":68},"title":"关于我","icon":"circle-info","type":"article"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"星标","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间轴","index":false} }],
]);
