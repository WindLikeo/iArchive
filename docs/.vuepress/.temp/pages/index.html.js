import comp from "E:/Dev/Code/Project/iArchive/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.png\",\"heroText\":\"iArchive\",\"tagline\":\"AI驱动的沉浸式阅读与学习平台\",\"actions\":[{\"text\":\"项目介绍\",\"link\":\"/intro/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"AI驱动\",\"details\":\"利用大语言模型和知识图谱技术...\"},{\"title\":\"沉浸体验\",\"details\":\"多模态交互提升沉浸感\"},{\"title\":\"智能推荐\",\"details\":\"个性化学习路线与阅读建议\"}]},\"git\":{},\"filePathRelative\":\"README.md\"}")
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
