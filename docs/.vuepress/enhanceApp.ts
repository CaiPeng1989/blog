export default ({ Vue, isServer }) => {
  if (!isServer) {
    import('@vue/composition-api' /* webpackChunkName: "composition-api" */)
      .then(({ default: VueCompositionApi }) => {
        Vue.use(VueCompositionApi)
      })
  }
}
