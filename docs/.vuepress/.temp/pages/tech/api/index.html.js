import comp from "E:/Dev/Code/Project/iArchive/docs/.vuepress/.temp/pages/tech/api/index.html.vue"
const data = JSON.parse("{\"path\":\"/tech/api/\",\"title\":\"OpenAPI 接口文档\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750655236000,\"contributors\":[{\"name\":\"hql\",\"username\":\"hql\",\"email\":\"2223626558@qq.com\",\"commits\":1,\"url\":\"https://github.com/hql\"}],\"changelog\":[{\"hash\":\"277a0114987a65e95c0c76eaae6221f6030ee1d8\",\"time\":1750655236000,\"email\":\"2223626558@qq.com\",\"author\":\"hql\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"tech/api/README.md\"}")
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
