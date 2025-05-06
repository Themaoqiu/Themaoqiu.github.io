export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/intro.html.js"), meta: {"title":"About me","icon":"circle-info"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章","index":false} }],
  ["/open/NutriRAG.html", { loader: () => import(/* webpackChunkName: "open_NutriRAG.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/open/NutriRAG.html.js"), meta: {"title":"NutriRAG 🍏🔍"} }],
  ["/open/", { loader: () => import(/* webpackChunkName: "open_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/open/index.html.js"), meta: {"title":"Open-source"} }],
  ["/research/", { loader: () => import(/* webpackChunkName: "research_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/research/index.html.js"), meta: {"title":"Research"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"星标","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间轴","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章","index":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
