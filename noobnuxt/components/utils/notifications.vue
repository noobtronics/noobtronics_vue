<template>
  <div>
    <div class="notificationsdiv">
      <div
        v-for="n in notifications"
        :key="n.id"
        class="notification"
        :class="n.class"
      >
        <button class="delete" @click="deleteNotification(n.id)"></button>
        <div v-html="n.message"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    notifications: function () {
      const nots = []
      this.$store.state.notifications.ids.forEach((item, i) => {
        nots.push(this.$store.state.notifications.data[item])
      })

      return nots
    },
  },
  methods: {
    deleteNotification: function (id) {
      this.$store.commit('deleteNotificationPayload', id)
    },
  },
}
</script>

<style lang="sass">
.notificationsdiv
  position: fixed
  top: 100px
  z-index: 30
  padding: 0 5px
  max-width: 700px
  left: 50%
  transform: translateX(-50%)

+mobile
  .notificationsdiv
    width: calc(100% - 20px)
</style>
