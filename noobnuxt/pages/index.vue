<template>
  <div class="container">
    <HeaderMenu />
    {{ title }}
  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'

export default {
  components: {
    HeaderMenu
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/api/homepage')

    return {
      meta: data.meta
    }
  },
  data: () => ({}),
  methods: {},
  head() {
    return {
      title: this.meta.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        }
      ]
    }
  }
}
</script>

<style></style>
