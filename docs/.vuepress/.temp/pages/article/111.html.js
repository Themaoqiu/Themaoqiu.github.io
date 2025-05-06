import comp from "D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/article/111.html.vue"
const data = JSON.parse("{\"path\":\"/article/111.html\",\"title\":\"我是猫\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"我是猫\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"我是猫\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"你的名字\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://your-github-username.github.io/article/111.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Themaoqiu\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"我是猫\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"我是猫\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.01,\"words\":3},\"filePathRelative\":\"article/111.md\",\"excerpt\":\"\\n\",\"autoDesc\":true}")
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
