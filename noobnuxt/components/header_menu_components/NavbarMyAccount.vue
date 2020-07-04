<template>
  <div
    id="navAccount"
    class="navbar-menu is-hidden-desktop"
    :class="{ 'is-active': isAccountMenuActive }"
  >
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
        Log In
      </a>
      <a class="navbar-item" href="https://bulma.io/">
        Sign Up
      </a>
      <a class="navbar-item" href="https://bulma.io/">
        Your Orders
      </a>
      <a class="navbar-item" href="https://bulma.io/">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAccountMenuActive: {
      type: Boolean,
      default: function () {
        return false
      },
    },
  },
  data: function () {
    return {}
  },
  computed: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
