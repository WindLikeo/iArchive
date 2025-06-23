export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Dev/Code/Project/iArchive/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/tech/api/", { loader: () => import(/* webpackChunkName: "tech_api_index.html" */"E:/Dev/Code/Project/iArchive/docs/.vuepress/.temp/pages/tech/api/index.html.js"), meta: {"title":"OpenAPI 接口文档"} }],
  ["/tech/backend/", { loader: () => import(/* webpackChunkName: "tech_backend_index.html" */"E:/Dev/Code/Project/iArchive/docs/.vuepress/.temp/pages/tech/backend/index.html.js"), meta: {"title":"后端开发"} }],
  ["/tech/frontend/", { loader: () => import(/* webpackChunkName: "tech_frontend_index.html" */"E:/Dev/Code/Project/iArchive/docs/.vuepress/.temp/pages/tech/frontend/index.html.js"), meta: {"title":"前端开发"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Dev/Code/Project/iArchive/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
