import comp from "D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/open/index.html.vue"
const data = JSON.parse("{\"path\":\"/open/\",\"title\":\"Open-source\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Open-source\",\"description\":\"Research Section Welcome to my open source.\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Open-source\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Xingjian Wang\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://themaoqiu.github.io/open/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Themaoqiu的个人页面\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Open-source\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Research Section Welcome to my open source.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"open/README.md\",\"excerpt\":\"\\n<p>Welcome to my open source.</p>\\n\",\"autoDesc\":true}")
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
