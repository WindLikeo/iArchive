import comp from "E:/Dev/Code/Project/iArchive/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.jpg\",\"heroText\":\"iArchive\",\"tagline\":\"山东大学暑期实训项目——档案管理系统\",\"actions\":[{\"text\":\"项目介绍\",\"link\":\"/intro/\",\"type\":\"primary\"}]},\"git\":{\"updatedTime\":1750659348000,\"contributors\":[{\"name\":\"hql\",\"username\":\"hql\",\"email\":\"2223626558@qq.com\",\"commits\":2,\"url\":\"https://github.com/hql\"}],\"changelog\":[{\"hash\":\"e7177c80ccc4e09a0031e89bf2e569a2daec452d\",\"time\":1750659348000,\"email\":\"2223626558@qq.com\",\"author\":\"hql\",\"message\":\"信息修改\"},{\"hash\":\"277a0114987a65e95c0c76eaae6221f6030ee1d8\",\"time\":1750655236000,\"email\":\"2223626558@qq.com\",\"author\":\"hql\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"README.md\"}")
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
