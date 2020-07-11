<template>
  <div class="columns shopprodrow">
    <div class="column prodcolumn">
      <div
        v-for="prod in products"
        :key="prod.cardname + prod.cardtitle"
        class="card"
      >
        <div class="card-image">
          <div style="cursor: pointer;" @click="$router.push('/' + prod.slug)">
            <Picture
              lazyload
              width="150px"
              height="150px"
              :alt="prod.thumb.alt"
              :asrc="prod.thumb.src"
              :resolution="[600, 300, 100]"
              :media="[2000, 300, 100]"
            />
          </div>
        </div>
        <div class="footerblock">
          <footer class="card-footer">
            <nuxt-link :to="'/' + prod.slug"
              ><p class="cardhead">{{ prod.cardname }}</p>
            </nuxt-link>
          </footer>

          <footer class="card-footer">
            <p class="cardsubtitle">{{ prod.cardtitle }}</p>
          </footer>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span class="price"> ₹{{ prod.price }} </span>
            </p>
            <p class="card-footer-item">
              <span>
                <button class="button is-small is-warning">
                  Add to Cart
                </button>
              </span>
            </p>
          </footer>
        </div>
      </div>

      <div class="card hidden"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
}
</script>

<style lang="sass" scoped></style>
