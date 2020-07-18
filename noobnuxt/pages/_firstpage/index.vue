<template>
  <div class="container fullwdithcontainer">
    <div v-if="!found">
      <Error404 />
    </div>
    <div v-else>
      <component :is="component" :data="data" />
    </div>
  </div>
</template>

<script>
import Error404 from '~/components/error/Error404.vue'
import SubCategoryPage from '~/components/page_components/SubCategoryPage.vue'

export default {
  components: {
    Error404,
    SubCategoryPage,
  },
  async fetch() {
    const that = this
    this.found = true

    const data = await this.$axios
      .$get('api/static/firstpage', {
        slug: '/' + this.$route.params.firstpage,
      })
      .catch(() => {
        that.found = false
        that.$raise404(that)
      })

    if (data) {
      this.found = true
      if (data.meta.model === 'SubCategory') {
        this.component = 'SubCategoryPage'
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
