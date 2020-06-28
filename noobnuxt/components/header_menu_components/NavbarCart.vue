<template>
  <div
    id="navCart"
    class="navbar-menu is-hidden-desktop"
    :class="{ 'is-active': isCartMenu }"
  >
    <div class="navbar-start">
      <p class="content">Your Cart is Empty</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCartMenu: {
      type: Boolean,
      default: function() {
        return false
      }
    }
  },
  data: function() {
    return {}
  },
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
