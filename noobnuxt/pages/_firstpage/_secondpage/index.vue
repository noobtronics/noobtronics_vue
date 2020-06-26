<template>
  <div class="container fullwdithcontainer">
    <HeaderMenu />
    <div v-if="!found">
      <Error404 />
    </div>
    <div v-else>
      <component :is="component" :data="data" />
    </div>
    <hr />
    <SubscribeEmail />
    <Footer />
  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'
import Error404 from '~/components/error/Error404.vue'
import Footer from '~/components/Footer.vue'
import SubscribeEmail from '~/components/forms/SubscribeEmail.vue'

import ProductPage from '~/components/page_components/ProductPage.vue'

export default {
  components: {
    HeaderMenu,
    Footer,
    SubscribeEmail,
    Error404,
    ProductPage
  },
  async fetch() {
    const that = this
    this.found = true

    const data = await this.$axios
      .$post('/api/static/secondpage', {
        slug:
          '/' +
          this.$route.params.firstpage +
          '/' +
          this.$route.params.secondpage
      })
      .catch(() => {
        that.found = false
        that.$raise404(that)
      })

    if (data) {
      this.found = true
      if (data.meta.model === 'Product') {
        this.component = 'ProductPage'
      }
      this.meta = data.meta
      this.data = data
    }
    return data
  },
  data() {
    return {
      found: false,
      data: {},
      component: '',
      meta: {},
      name: ''
    }
  },
  computed: {
    categoryH2: function() {
      const nameList = []
      for (const i of this.categorys) {
        let name = i.name
        name = name.replace(this.name, '')
        nameList.push(name.trim())
      }
      return nameList.join(', ') + ' ' + this.name
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 7200000) {
      this.$fetch()
    }
  },
  methods: {},
  fetchOnServer: true,
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
