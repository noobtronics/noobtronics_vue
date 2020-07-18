<template>
  <div class="container fullwdithcontainer">
    <section class="section fullwidthmobilesection shoppagesection">
      <div class="container fullwdithcontainer">
        <div v-if="!found">
          <Error404 name="Category" />
        </div>
        <div v-else>
          <h1 class="c">{{ meta.h1 }}</h1>
          <h2 class="c">Browse among {{ categoryH2 }}</h2>

          <h2 class="title is-5 has-text-centered shophead">
            Browse By Category
          </h2>
          <div class="buttons is-centered">
            <nuxt-link
              v-for="cat in categorys"
              :key="cat.name"
              class="button is-medium is-active"
              :to="'/' + cat.slug"
            >
              {{ cat.name }}
            </nuxt-link>
          </div>

          <h2 class="title is-5 has-text-centered">Browse All {{ name }}</h2>
          <ProductCards :products="products" />

          <div class="content" v-html="meta.html"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Error404 from '~/components/error/Error404.vue'
import ProductCards from '~/components/shop_components/ProductCards.vue'

export default {
  components: {
    Error404,
    ProductCards,
  },
  async fetch() {
    const that = this
    this.found = true

    const data = await this.$axios
      .$get('api/static/shoppage', {
        params: {
          slug: '/shop/' + this.$route.params.category,
        },
      })
      .catch(() => {
        that.found = false
        that.$raise404(that)
      })

    if (data) {
      this.found = true
      this.categorys = data.categorys
      this.products = data.products
      this.meta = data.meta
      this.name = data.name
    }
    return data
  },
  data() {
    return {
      found: false,
      categorys: [],
      products: [],
      meta: {},
      name: '',
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.keywords,
        },
        {
          name: 'viewporttest',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://noobtronics.in' }],
    }
  },
  computed: {
    categoryH2: function () {
      const nameList = []
      for (const i of this.categorys) {
        let name = i.name
        name = name.replace(this.name, '')
        nameList.push(name.trim())
      }
      return nameList.join(', ') + ' ' + this.name
    },
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 7200000) {
      this.$fetch()
    }
  },
  methods: {},
  fetchOnServer: true,
}
</script>

<style></style>
