<template>
  <div class="container fullwdithcontainer">
    <section class="section fullwidthmobilesection shoppagesection">
      <div class="container fullwdithcontainer">
        <h1 class="c">{{ meta.h1 }}</h1>
        <h2 class="c">Browse All Electronic Components and Kits</h2>

        <h2 class="title is-5 has-text-centered shophead">
          Browse By Category
        </h2>
        <div class="buttons is-centered">
          <nuxt-link
            v-for="cat in categorys"
            :key="cat.name"
            class="button  is-medium is-active"
            :to="'/shop/' + cat.slug"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>

        <h2 class="title is-5 has-text-centered">Browse All</h2>
        <ProductCards :products="products" />
      </div>
    </section>
  </div>
</template>

<script>
import ProductCards from '~/components/shop_components/ProductCards.vue'

export default {
  components: {
    ProductCards
  },
  async fetch() {
    this.data = await this.$axios.$post('api/static/shoppage', {
      slug: '/shop'
    })
    this.categorys = this.data.categorys
    this.products = this.data.products
    this.meta = this.data.meta
    this.name = this.data.name
  },
  data() {
    return {
      data: {},
      categorys: [],
      products: [],
      meta: {},
      name: ''
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 7200000) {
      this.$fetch()
    }
  },
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
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.keywords
        },
        { name: 'viewporttest', content: 'width=device-width, initial-scale=1' }
      ],
      link: [{ rel: 'canonical', href: 'https://noobtronics.in' }]
    }
  }
}
</script>

<style></style>
