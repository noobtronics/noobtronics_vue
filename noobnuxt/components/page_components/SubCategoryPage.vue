<template>
  <section class="section fullwidthmobilesection shoppagesection">
    <div class="container fullwdithcontainer">
      <div>
        <h1 class="c">{{ data.meta.h1 }}</h1>
        <h2 class="title is-5 has-text-centered">Browse All {{ data.name }}</h2>
        <ProductCards :products="data.products" />
        <div class="content" v-html="data.meta.html"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCards from '~/components/shop_components/ProductCards.vue'

export default {
  components: {
    ProductCards,
  },
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
}
</script>

<style lang="sass" scoped>
h2
  margin-top: 1rem
</style>
