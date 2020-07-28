<template>
  <div class="container fullwdithcontainer">
    <div class="content has-text-centered" style="padding: 1.5rem 0.5rem;">
      <div class="widthlimit">
        <h1 class="title is-3 cartheading">Cart</h1>

        <div v-if="state == 0">
          <h2 class="title is-4 emptytext">Loading..</h2>
        </div>
        <div v-else>
          <div v-if="cart_count == 0">
            <h2 class="title is-4 emptytext">Your cart is empty</h2>
            <p>
              <nuxt-link to="/shop">Browse All Products</nuxt-link>
            </p>
          </div>
          <div v-else></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'nocache-default',
  async fetch() {
    const self = this
    this.data = await this.$axios
      .$post('api/user/cart/listproducts', {
        trackers: self.$get_trackers(),
      })
      .then(function (response) {
        self.cart_count = response.data.cart_count
        self.state = 1
      })
      .catch(function () {
        self.state = 2
        self.$notify('failed', 'Server Error Occured <br>Try Refreshing Page')
      })
  },
  data: function () {
    return {
      state: 0,
      cart_count: 0,
    }
  },
  computed: {},
  methods: {},
  fetchOnServer: false,
}
</script>

<style lang="sass" scoped>
.widthlimit
  max-width: 1000px
  margin: 0 auto

.cartheading
  text-align: left
  padding-left: 20px

.emptytext
  margin-top: 40px

  & + p
    margin-top: 40px
    margin-bottom: 100px

    a
      font-size: 1.2rem
</style>
