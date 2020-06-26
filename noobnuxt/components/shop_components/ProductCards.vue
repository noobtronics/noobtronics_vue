<template>
  <div class="columns shopprodrow">
    <div class="column prodcolumn">
      <div
        v-for="(prod, idx) in products"
        :key="prod.cardname + prod.cardtitle"
        class="card"
      >
        <div class="card-image">
          <figure
            class="image"
            style="object-fit: cover; cursor:pointer;"
            @click="$router.push('/' + prod.slug)"
          >
            <picture>
              <source :data-srcset="prod.thumb.webp" type="image/webp" />
              <source :data-srcset="prod.thumb.jpg" type="image/jpeg" />

              <img
                v-if="idx <= 4"
                :src="prod.thumb.jpg"
                :alt="prod.thumb.alt"
                width="150"
                height="150"
              />

              <img
                v-if="idx > 4"
                :data-src="prod.thumb.jpg"
                :alt="prod.thumb.alt"
                width="150"
                height="150"
                class="lazyload"
              />
            </picture>
          </figure>
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
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
