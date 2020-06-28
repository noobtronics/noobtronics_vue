<template>
  <div
    id="navSearch"
    class="navbar-menu is-hidden-desktop"
    :class="{ 'is-active': isSearchMenuActive }"
  >
    <div class="field has-addons" style="padding: 5px;">
      <div class="control is-expanded">
        <input
          class="input"
          placeholder="find product, blog eg. 'arduino uno' "
          aria-label="email"
          aria-describedby="call-to-action-search"
        />
      </div>
      <div class="control">
        <button id="call-to-action-search" class="button is-danger">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSearchMenuActive: {
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
