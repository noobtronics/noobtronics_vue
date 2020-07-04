<template>
  <div class="container fullwdithcontainer">
    <HeaderMenu />
    <div
      class="content has-text-centered"
      style="height: 400px; padding: 100px 0px;"
    >
      <h1>An error occurred</h1>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    HeaderMenu,
    Footer,
  },
  layout: 'blog', // you can set a custom layout for the error page
}
</script>
