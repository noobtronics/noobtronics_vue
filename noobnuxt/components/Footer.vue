<template>
  <footer class="footer">
    <div class="container">
      <h2 class="c">noobtronics Footer</h2>
      <div class="columns is-desktop">
        <div class="column is-5">
          <a class="title is-5" href="/">noobtronics</a>
          <p class="block">
            For noobs to become pro electronics. We manufacture, sell and blog
            about Open Source hardware.
          </p>
        </div>
        <div class="column">
          <div class="columns is-mobile is-multiline">
            <div class="column is-half">
              <h3 class="title is-6">Products</h3>
              <ul>
                <li>
                  <nuxt-link to="/shop/microcontrollers"
                    >Microcontrollers</nuxt-link
                  >
                </li>
                <li><nuxt-link to="/shop/kits">Arduino Kits</nuxt-link></li>
                <li><nuxt-link to="/shop/modules">Wifi Modules</nuxt-link></li>
                <li><nuxt-link to="/shop">All Products</nuxt-link></li>
              </ul>
            </div>
            <div class="column is-half">
              <h3 class="title is-6">Your Account</h3>
              <ul>
                <li>
                  <nuxt-link to="/cart">Cart({{ cart_count }})</nuxt-link>
                </li>
                <li><nuxt-link to="/account/orders">Your Orders</nuxt-link></li>
              </ul>
            </div>

            <div class="column is-half">
              <h3 class="title is-6">Contact</h3>
              <ul>
                <li><a href="#">+91-9833870385</a></li>
                <li>Aurangabad, India</li>
              </ul>
            </div>
            <div class="column is-half">
              <h3 class="title is-6">Blog</h3>
              <ul>
                <li><nuxt-link to="/">Learn Arduino</nuxt-link></li>
                <li><nuxt-link to="/">Datasheet</nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="columns is-mobile">
        <div class="column"><a href="#">Terms and conditions</a></div>
        <div class="column has-text-right-tablet">
          <p class="subtitle is-6">
            &copy; 2020 noobtronics™ <br />Registered Trademark in India
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    cart_count: function () {
      return this.$store.state.cart.cart_count
    },
  },
}
</script>

<style lang="sass"></style>
