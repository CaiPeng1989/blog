export default ({ Vue, isServer }) => {
  if (!isServer) {
    import('@vue/composition-api' /* webpackChunkName: "composition-api" */).then((module) => {
      Vue.use(module.default)
    })
  }
}
