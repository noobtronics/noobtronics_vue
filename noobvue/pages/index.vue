<template>

  <div class="container">
    <HeaderMenu/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderMenu from '~/components/HeaderMenu.vue'

export default Vue.extend({
  components: {
    HeaderMenu,
  }
})
</script>

<style>

</style>
