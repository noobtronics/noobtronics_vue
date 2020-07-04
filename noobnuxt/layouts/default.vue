<template>
  <div class="container fullwdithcontainer">
    <HeaderMenu />
    <nuxt keep-alive />
    <hr />
    <SubscribeEmail />
    <Footer />
  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'
import Footer from '~/components/Footer.vue'
import SubscribeEmail from '~/components/forms/SubscribeEmail.vue'

export default {
  components: {
    HeaderMenu,
    Footer,
    SubscribeEmail,
  },
}
</script>

<style lang="sass"></style>
