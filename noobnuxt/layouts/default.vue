<template>
  <div class="container fullwdithcontainer">
    <HeaderMenu />
    <nuxt keep-alive />
    <hr />
    <Notifications />
    <SubscribeEmail />
    <Footer />
  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'
import Footer from '~/components/Footer.vue'
import SubscribeEmail from '~/components/forms/SubscribeEmail.vue'
import Notifications from '~/components/utils/notifications.vue'

export default {
  components: {
    HeaderMenu,
    Footer,
    SubscribeEmail,
    Notifications,
  },
}
</script>

<style lang="sass"></style>
