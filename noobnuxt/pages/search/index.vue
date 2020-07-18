<template>
  <div class="container fullwdithcontainer">
    <section class="section fullwidthmobilesection shoppagesection">
      <div class="container fullwdithcontainer">
        <h2 class="title is-5 has-text-centered shophead">
          Search result for '{{ $route.query.keyword }}'
        </h2>
        <ProductCards :products="products" />
      </div>
    </section>
  </div>
</template>

<script>
import ProductCards from '~/components/shop_components/ProductCards.vue'

export default {
  components: {
    ProductCards,
  },
  async fetch() {
    this.data = await this.$axios.$get('api/search', {
      keyword: this.$route.query.keyword,
    })
    this.products = this.data.products
    this.keyword = this.data.keyword
  },
  data() {
    return {
      data: {},
      categorys: [],
      products: [],
      meta: {},
      name: '',
      keyword: '',
    }
  },
  head() {
    return {
      title: 'Search - ' + this.keyword + ' | noobtronics',
    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 7200000) {
      this.$fetch()
    }
  },
  methods: {},
  fetchOnServer: false,
}
</script>

<style></style>
