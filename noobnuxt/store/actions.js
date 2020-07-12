export default {
  insertNotification(context, payload) {
    const data = payload.data
    const id = Math.floor(Math.random() * 10000)
    data.id = id
    context.commit('insertNotificationPayload', data)
    setTimeout(function () {
      context.commit('deleteNotificationPayload', data.id)
    }, payload.timeout)
  },
}
