import comp from "D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/article/test.html.vue"
const data = JSON.parse("{\"path\":\"/article/test.html\",\"title\":\"我的第一篇博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的第一篇博客\",\"date\":\"2025-05-06T00:00:00.000Z\",\"category\":\"技术\",\"tag\":[\"VuePress\",\"教程\"],\"description\":\"我的第一篇博客 这是博客的正文内容... 使用 Markdown 语法书写。\"},\"readingTime\":{\"minutes\":0.22,\"words\":65},\"filePathRelative\":\"article/test.md\",\"excerpt\":\"\\n<p>这是博客的正文内容...</p>\\n<p>使用 Markdown 语法书写。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
