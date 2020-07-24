export default (context, inject) => {
  const notify = function (status, message) {
    if (status === 'success') {
      this.$store.dispatch('insertNotification', {
        data: {
          class: 'is-warning',
          message: '<b>Success</b><br>' + message,
        },
        timeout: 2000,
      })
    }
    if (status === 'failed') {
      this.$store.dispatch('insertNotification', {
        data: {
          class: 'is-danger is-light',
          message: '<b>Failure</b><br>' + message,
        },
        timeout: 2000,
      })
    }
    if (status === 'cartadded') {
      this.$store.dispatch('insertNotification', {
        data: {
          class: 'is-info is-light',
          message: '<b>Added to Cart!</b><br>' + message,
        },
        timeout: 2000,
      })
    }
  }
  // Inject $hello(msg) in Vue, context and store.
  inject('notify', notify)
}
