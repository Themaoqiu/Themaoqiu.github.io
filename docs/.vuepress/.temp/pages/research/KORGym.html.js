import comp from "D:/software/VScode/web/themaoqiu.github.io/docs/.vuepress/.temp/pages/research/KORGym.html.vue"
const data = JSON.parse("{\"path\":\"/research/KORGym.html\",\"title\":\"KORGym: A Dynamic Game Platform for LLM Reasoning Evaluation\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"KORGym: A Dynamic Game Platform for LLM Reasoning Evaluation\",\"author\":\"Themaoqiu\",\"date\":\"2025-05-23T00:00:00.000Z\",\"categories\":[\"AI\",\"Research\",\"Reasoning\"],\"tags\":[\"KORGym\",\"通用推理\",\"大语言模型\",\"强化学习\",\"多模态\"],\"description\":\"很幸运今年有机会能参与到两篇字节团队的论文，感谢ge Zhang给我的机会和学长的大力推荐。另外一篇ScaleLong敬请期待~ Overview KORGym关注于衡量模型独立于其庞大预训练知识的通用推理能力 (general reasoning capacity)，为此设计了五十余款python小游戏，涵盖文字和多模态等形式与五种不同逻辑类型。让模...\"},\"readingTime\":{\"minutes\":5.08,\"words\":1523},\"filePathRelative\":\"research/KORGym.md\",\"excerpt\":\"<p>很幸运今年有机会能参与到两篇字节团队的论文，感谢ge Zhang给我的机会和学长的大力推荐。另外一篇ScaleLong敬请期待~</p>\\n<h2>Overview</h2>\\n<p>KORGym关注于衡量模型独立于其庞大预训练知识的通用推理能力 (general reasoning capacity)，为此设计了五十余款python小游戏，涵盖文字和多模态等形式与五种不同逻辑类型。让模型在一个”训练场“上进行游戏推理，通过不同参数设置和不同的游戏表现评估模型的推理能力。作为团队唯一本科生(doge), 我在其中负责了一部分游戏和平台的适配(虽然相对难的那个还是jiajun主动帮我做了~), 然后测试代码看能否在平台上跑通, 也算是第一次在实际工作中用GPU集群进行大规模推理.</p>\",\"autoDesc\":true}")
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
