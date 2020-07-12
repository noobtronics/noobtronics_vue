<template>
  <div class="navbar-menu" :class="{ 'is-active': isMenuBarActive }">
    <div class="navbar-start">
      <nuxt-link class="navbar-item" to="/">
        Home
      </nuxt-link>
      <div
        class="navbar-item has-dropdown is-hoverable"
        :class="{ 'is-active': isShop }"
      >
        <a class="navbar-link" @click="isShop = !isShop">Shop</a>
        <div class="navbar-dropdown">
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
        :class="{ 'is-active': isBlog }"
      >
        <a class="navbar-link" @click="isBlog = !isBlog">
          Blog
        </a>
        <div class="navbar-dropdown">
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
        :class="{ 'is-active': isInfo }"
      >
        <a class="navbar-link" @click="isInfo = !isInfo">
          Information
        </a>
        <div class="navbar-dropdown">
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
            <nuxt-link to="/shop" class="bd-tw-button button">
              <span class="icon">
                <img
                  alt="store icon"
                  src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAiUlEQVRIie2UMQqAMAxFX8WxeJmO4j0EZz1tLyMeQAcpllrtkKBLHwRCAkk+TQqVAiYT2zVrNsJiRd4a9MCQ8dUaNFxyY1+E43wDibk3BYvCkPNTwgKrgoIN6HIKpjghwAJjLuEVpg/mQ9F4M6QHlmLgg0NLCRLV8r9+FbUBAO1DXG1lP1/Tyo0Di5BBbnFxxIoAAAAASUVORK5CYII="
                />
              </span>
            </nuxt-link>
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
              <span>Cart</span>
            </a>
          </p>
          <p class="control">
            <a
              class="button badge is-inverted badge is-badge-danger cartbuttons"
              :data-badge="cart_count > 0 ? cart_count : false"
              href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
            >
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 172 172"
                  style="fill: #000000;"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    style="mix-blend-mode: normal;"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#000000">
                      <path
                        d="M77.73077,0c-10.10397,0.10337 -21.78426,5.0649 -28.52885,17.36538c-6.35697,11.29267 -8.26923,25.35036 -4.13462,38.24519c-0.64603,1.44712 -1.83474,2.55829 -2.06731,4.34135c-1.13702,8.03666 2.11899,14.67788 4.96154,19.43269c0.05169,0.12921 0.12921,0.28426 0.20673,0.41346c1.18871,1.78305 2.3774,2.14483 3.72115,3.10096c0.59435,2.32572 2.92007,8.26923 8.26923,15.29808c0.02584,0.90445 -0.23257,2.76503 -1.24038,4.54808c-0.69772,1.21454 -1.00781,1.52464 -1.44712,2.06731c-10.93089,2.29988 -21.0607,6.09856 -28.94231,11.57692c-8.60517,5.99519 -15.29808,13.95433 -15.29808,23.77404v7.44231c0,6.09856 3.82452,11.13762 8.47596,14.26442c4.65144,3.1268 10.3107,5.14243 16.74519,6.61538c12.89483,2.92007 29.1232,3.79868 44.86058,4.13462c15.89243,0 32.04327,-2.40324 44.65385,-5.99519c6.30529,-1.80889 11.80949,-3.85036 16.125,-6.40865c2.14483,-1.26622 3.95372,-2.48077 5.58173,-4.34135c1.62801,-1.86058 3.10096,-4.49639 3.10096,-7.64904v-7.23558c0,-9.69051 -6.43449,-17.75301 -14.88462,-23.77404c-7.90745,-5.60757 -18.16647,-9.71635 -29.35577,-11.99038c-0.18089,-0.12921 -0.95613,-0.64603 -1.65385,-1.65385c-0.72356,-1.05949 -1.1887,-1.44712 -0.41346,-3.30769c2.29988,-3.38522 4.31551,-6.82212 5.78846,-9.92308c0.98197,-2.06731 1.34375,-4.08293 1.86058,-5.99519c2.01563,-1.78305 8.11419,-7.72656 8.88942,-18.39904c0,-0.12921 0,-0.28426 0,-0.41346c0,-4.80649 -0.46514,-7.88161 -1.44712,-10.33654c-0.05168,-0.15504 -0.15504,-0.28426 -0.20673,-0.41346c1.70553,-7.10637 2.45493,-16.69351 0.20673,-26.66827c-1.29206,-5.73678 -3.66947,-11.39603 -8.26923,-15.71154c-3.95372,-3.69531 -9.79387,-5.375 -16.125,-4.96154c-1.83474,-1.67969 -3.25601,-3.72115 -5.58173,-4.75481c-4.03125,-1.75721 -8.8119,-2.73918 -13.85096,-2.6875zM77.9375,13.23077c3.1268,-0.02584 6.09856,0.49099 8.26923,1.44712c2.17067,0.95613 3.20433,2.48077 3.10096,2.27404c1.34375,2.66166 4.31551,4.10878 7.23558,3.51442c4.34135,-0.85276 5.91767,-0.18089 7.64904,1.44712c1.73137,1.62801 3.41106,4.90986 4.34135,9.09615c1.88642,8.34676 0.54267,20.28546 -0.41346,23.15385c-0.67187,2.14483 -0.20673,4.47055 1.24038,6.20192c0.05169,0.12921 0.36178,1.70553 0.41346,4.75481c-0.4393,6.02103 -5.375,10.54327 -5.375,10.54327c-1.42128,1.11118 -2.29988,2.76503 -2.48077,4.54808c-0.18089,0.36178 -0.72356,2.60997 -1.65385,4.54808c-1.24038,2.60997 -3.07512,5.71094 -5.16827,8.68269c-0.23257,0.33594 -0.4393,0.67188 -0.62019,1.03365c-2.97176,6.40865 -1.08533,13.07572 1.44712,16.74519c2.53246,3.66947 5.78846,5.58173 5.78846,5.58173c0.69772,0.41346 1.47296,0.69772 2.27404,0.82692c10.38822,1.83474 19.82031,5.76262 26.25481,10.33654c6.43449,4.57392 9.30288,9.48378 9.30288,13.02404v6.20192c-0.33594,0.33594 -1.03365,0.93029 -2.27404,1.65385c-2.71334,1.60217 -7.20974,3.56611 -12.81731,5.16827c-11.13762,3.17849 -26.46154,5.34916 -40.93269,5.375c-0.07753,0 -0.12921,0 -0.20673,0c-15.29808,-0.33594 -30.93209,-1.42128 -41.96635,-3.92788c-5.55589,-1.26622 -9.79387,-2.94591 -12.19712,-4.54808c-2.40324,-1.60216 -2.6875,-2.11899 -2.6875,-3.30769v-7.44231c0,-3.41106 2.89423,-8.21754 9.50962,-12.81731c6.61538,-4.59976 16.28005,-8.5018 26.66827,-10.33654c1.44712,-0.25841 2.73919,-0.98197 3.72115,-2.06731c0,0 2.2482,-2.45493 4.13462,-5.78846c1.88642,-3.33353 4.05709,-8.01081 2.89423,-13.85096c-0.25841,-1.16286 -0.82692,-2.2482 -1.65385,-3.10096c-5.94351,-6.48618 -7.64904,-14.26442 -7.64904,-14.26442c-0.41346,-1.96394 -1.70553,-3.64363 -3.51442,-4.54808c-1.1887,-0.59435 -0.8786,-0.46514 -1.24038,-1.03365h-0.20673c-1.13702,-2.22235 -3.07512,-9.35456 -2.89423,-10.54327c0,-0.07753 0,-0.12921 0,-0.20673c0.07753,-0.56851 -0.02584,-0.51683 0,-0.62019c0.05169,-0.07753 0.15505,-0.12921 0.20673,-0.20673c0,0 0.02584,-0.25841 0,-0.20673c0.33594,-0.41346 0.82692,-0.7494 1.03365,-1.24038c0.59435,-1.31791 0.82692,-2.3774 0.82692,-3.10096c-0.05168,-0.85276 -0.25841,-1.70553 -0.62019,-2.48077c-3.64363,-8.86358 -2.14483,-21.00901 2.89423,-29.97596c0.07753,0 0.12921,0 0.20673,0c4.4964,-8.19171 10.87921,-10.49158 17.15865,-10.54327zM46.10096,53.33654c-0.41346,0.49099 -0.54267,1.11118 -0.82692,1.65385c0.07753,-0.38762 -0.02584,-0.51683 0.20673,-1.03365c0.12921,-0.25841 0.4393,-0.36178 0.62019,-0.62019z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMenuBarActive: {
      type: Boolean,
      default: function () {
        return false
      },
    },
  },
  data: function () {
    return {
      isShop: false,
      isBlog: false,
      isInfo: false,
    }
  },
  computed: {
    cart_count: function () {
      return this.$store.state.cart.cart_count
    },
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass"></style>
