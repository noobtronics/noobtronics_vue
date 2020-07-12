export default {
  insertNotificationPayload(state, data) {
    state.notifications.data[data.id] = data
    state.notifications.ids.push(data.id)
  },
  deleteNotificationPayload(state, id) {
    const index = state.notifications.ids.indexOf(id)
    if (index > -1) {
      state.notifications.ids.splice(index, 1)
    }
    state.notifications.data[id] = null
  },
}
