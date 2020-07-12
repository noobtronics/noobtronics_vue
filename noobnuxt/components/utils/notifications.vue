<template>
  <div>
    <div class="notificationsdiv">
      <div
        v-for="(n, i) in notifications"
        :key="i"
        class="notification is-primary is-light"
      >
        <button class="delete"></button>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    notifications: function () {
      return this.$store.state.notifications.ids
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
</style>
