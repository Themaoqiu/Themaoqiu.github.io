import comp from "D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/research/index.html.vue"
const data = JSON.parse("{\"path\":\"/research/\",\"title\":\"Research\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Research\",\"description\":\"Research Section Welcome to my research.\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Research\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Xingjian Wang\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://themaoqiu.github.io/research/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Themaoqiu的个人页面\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Research\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Research Section Welcome to my research.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"research/README.md\",\"excerpt\":\"\\n<p>Welcome to my research.</p>\\n\",\"autoDesc\":true}")
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
