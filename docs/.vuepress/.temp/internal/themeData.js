export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"Themaoqiu\"},\"logo\":\"/logo.jpg\",\"socialLinks\":[{\"icon\":\"github\",\"link\":\"https://github.com/Themaoqiu\"},{\"icon\":\"email\",\"link\":\"mailto:themaoqiu@gmail.com\"}],\"blog\":{\"description\":\"Some daily life\",\"intro\":\"/intro.md\",\"medias\":{\"GitHub\":\"https://github.com/Themaoqiu\",\"Email\":\"mailto:themaoqiu@gmail.com\"}},\"footer\":\"Powered by VuePress2\",\"displayFooter\":true,\"copyright\":\"Copyright © 2025-present Themaoqiu\",\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"星标\",\"empty\":\"$text 为空\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[{\"text\":\"Main\",\"link\":\"/\",\"icon\":\"fluent-color:home-48\"},{\"text\":\"Research\",\"link\":\"/research/\",\"icon\":\"fluent-color:book-open-16\"},{\"text\":\"Open source\",\"link\":\"/open/\",\"icon\":\"fluent-color:code-16\"},{\"text\":\"Blogs\",\"link\":\"/article/\",\"icon\":\"fluent-color:clipboard-text-edit-20\"}],\"sidebar\":{\"/research/\":\"structure\",\"/open/\":\"structure\",\"/article/\":\"structure\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
