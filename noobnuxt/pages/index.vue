<template>
  <div class="container">
    <HeaderMenu />

    <section class="hero">
      <div class="hero-body" style="padding: 1.5rem;">
        <div class="container has-text-centered">
          <h1 class="c">noobtronics Homepage</h1>
          <h2 class="title is-4">One Stop Shop to Master Electronics</h2>
          <div class="columns is-centered is-medium">
            <div class="column is-19 has-text-centered">
              <img
                class="
        is-16by9"
                src="/storage/home/first-made-in-india-arduino.jpg"
                width="608"
                height="342"
                alt="made in india arduino"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section fullwidthmobilesection"
      style="padding-bottom: 1rem;"
    >
      <div class="container fullwdithcontainer">
        <h2 class="c">Shop Electronic Components</h2>

        <div v-for="c in catalog" :key="c.name">
          <h3 class="title has-text-centered is-5">{{ c.name }}</h3>

          <div class="columns horizontalprodmainrow">
            <div class="column is-narrow ">
              <div class="columns is-mobile horizontalprodcards">
                <div
                  v-for="prod in c.products"
                  :key="prod.slug + prod.cardtitle"
                  class="column horizontalprodcolumn"
                >
                  <a :href="'/' + prod.slug">
                    <div class="card" style="height: 100%">
                      <div class="card-image">
                        <figure class="image" style="object-fit: cover;">
                          <picture>
                            <source
                              :srcset="prod.thumb.webp"
                              type="image/webp"
                            />
                            <source
                              :srcset="prod.thumb.jpg"
                              type="image/jpeg"
                            />
                            <img
                              :src="prod.thumb.jpg"
                              :alt="prod.thumb.alt"
                              width="150"
                              height="150"
                              loading="lazy"
                            />
                          </picture>
                        </figure>
                      </div>
                      <div class="footerblock">
                        <footer class="card-footer">
                          <p class="cardhead">{{ prod.cardname }}</p>
                        </footer>
                        <footer class="card-footer">
                          <p class="cardsubtitle">{{ prod.cardtitle }}</p>
                        </footer>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-parent">
            <article class="tile is-child notification is-warning">
              <p class="title is-4">> 1000 Orders</p>
              <p class="subtitle is-6">
                noobtronics has now shipped more than 1000 orders
              </p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article
              class="tile is-child notification"
              style="background-color:#A91E45;color:white;"
            >
              <p class="title is-4">> 10,000 Pincodes</p>
              <p class="subtitle is-6">
                All India Delivery via Fedex, Delhivery or SpeedPost
              </p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>

          <div class="tile is-parent ">
            <article
              class="tile is-child notification "
              style="background-color:#1B5A8D;color:white;"
            >
              <p class="title is-4">COD Available</p>
              <p class="subtitle is-6">
                Pay via cash on delivery or online using BHIM / UPI / PayTM /
                RazorPay
              </p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
        <hr />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'

export default {
  components: {
    HeaderMenu
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/api/homepage')
    return {
      meta: data.meta,
      catalog: data.catalog
    }
  },
  data: () => ({}),
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
