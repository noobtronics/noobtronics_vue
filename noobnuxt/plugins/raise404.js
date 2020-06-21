export default (context, inject) => {
  const raise404 = (that) => {
    if (process.server) {
      that.$nuxt.context.res.statusCode = 404
    }
    throw new Error('Page not found')
  }
  // Inject $hello(msg) in Vue, context and store.
  inject('raise404', raise404)
  // For Nuxt <= 2.12, also add 👇
  context.$raise404 = raise404
}
