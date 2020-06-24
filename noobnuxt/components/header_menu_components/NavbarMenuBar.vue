<template>
  <div class="navbar-menu" :class="{ 'is-active': is_bar_active }">
    <div class="navbar-start">
      <nuxt-link class="navbar-item" to="/">
        Home
      </nuxt-link>
      <div
        class="navbar-item has-dropdown is-hoverable"
        :class="{ 'is-active': is_shop }"
      >
        <a class="navbar-link" @click="is_shop = !is_shop">
          Shop
        </a>
        <div class="navbar-dropdown ">
          <nuxt-link class="navbar-item" to="/shop">All Products</nuxt-link>
          <nuxt-link class="navbar-item" to="/shop/microcontrollers">
            Microcontrollers
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/shop/kits">
            Learning Kits
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/shop/modules">
            Modules
          </nuxt-link>
        </div>
      </div>
      <div
        class="navbar-item has-dropdown is-hoverable"
        :class="{ 'is-active': is_blog }"
      >
        <a class="navbar-link" @click="is_blog = !is_blog">
          Blog
        </a>
        <div class="navbar-dropdown ">
          <nuxt-link class="navbar-item" to="/blog">
            Blog Home
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/blog/arduino">
            Arduino Blog
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/blog/datasheet">
            Datasheet
          </nuxt-link>
        </div>
      </div>
      <div
        class="navbar-item has-dropdown is-hoverable"
        :class="{ 'is-active': is_info }"
      >
        <a class="navbar-link" @click="is_info = !is_info">
          Information
        </a>
        <div class="navbar-dropdown ">
          <nuxt-link class="navbar-item" to="/about-us">
            About Us
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/contact-us">
            Contact Us
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/delivery-locations">
            Delivery Locations
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="navbar-end is-hidden-mobile">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button ">
              <span class="icon">
                <img
                  alt="store icon"
                  src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAiUlEQVRIie2UMQqAMAxFX8WxeJmO4j0EZz1tLyMeQAcpllrtkKBLHwRCAkk+TQqVAiYT2zVrNsJiRd4a9MCQ8dUaNFxyY1+E43wDibk3BYvCkPNTwgKrgoIN6HIKpjghwAJjLuEVpg/mQ9F4M6QHlmLgg0NLCRLV8r9+FbUBAO1DXG1lP1/Tyo0Di5BBbnFxxIoAAAAASUVORK5CYII="
                />
              </span>
              <span>
                Store
              </span>
            </a>
          </p>
          <p class="control">
            <a
              class="button badge is-inverted badge is-badge-danger cartbuttons"
              :data-badge="cart_count > 0 ? cart_count : false"
              href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
            >
              <span class="icon">
                <img
                  alt="checkout icon"
                  src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA1ElEQVRIid3UP2oCQRiG8V8kkFoktZUHEDxEREJOkzN4AzsRBG+QUkj63MBSbZIqTUgC/itWcDGgM+usoC981X48zzsws1xLVlhvZ1CGYJkT/OK+DAm85ERF5zUPrOwJeglK1g59vMGkQOv8PB5r8HwC/C3kiFV8F4Cv0AoRkF3VWMEwFA7NSPgP6jECeI8QdGPhNXwGNh/hLlbQ3wLGsqubNFUs8IdGajjc4kuxdxCcJ3yUKSg9HcwxQzvB3r/M7I49PWVv/3d9trRl7aZ4SLB3wdkAc+mm8AY1w/kAAAAASUVORK5CYII="
                />
              </span>
              <span>Checkout</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarMenuBar',
  data: () => {
    return {
      is_shop: false,
      is_blog: false,
      is_info: false
    }
  },
  computed: {
    is_bar_active: function() {
      return this.$store.state.navbar.MenuBar
    },
    cart_count: function() {
      return this.$store.state.cart.cart_count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
