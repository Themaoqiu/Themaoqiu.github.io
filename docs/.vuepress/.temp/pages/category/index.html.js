import comp from "D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/category/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/\",\"title\":\"分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"分类\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"key\":\"category\"},\"layout\":\"BlogCategory\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"分类\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://themaoqiu.github.io/category/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Themaoqiu的个人页面\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"分类\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
