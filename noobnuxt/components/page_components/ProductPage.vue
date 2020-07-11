<template>
  <div>
    <div id="product-page-app" class="container prodcontainer">
      <div class="columns prodpagecolumns">
        <div class="column">
          <h1 id="prodh1" class="title">{{ data.meta.h1 }}</h1>
          <div class="categorylinks">
            <span>
              <nuxt-link to="/shop">Shop</nuxt-link>
              >
              <span>
                <nuxt-link :to="'/' + data.sub_category.slug">{{
                  data.sub_category.name
                }}</nuxt-link>
                >
                <span>
                  {{ data.shortname }}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div class="columns prodpagecolumns">
        <div class="column">
          <div class="container has-text-centered">
            <div class="columns is-mobile prodmainphoto">
              <div class="column is-3 showcasecolumn">
                <div
                  v-for="v in data.images.data"
                  :key="v.id"
                  @click="change_image_by_id(v.id)"
                >
                  <Picture
                    width="75px"
                    height="75px"
                    :alt="v.alt"
                    :asrc="v.src"
                    :resolution="[600, 300, 100]"
                    :media="[3000, 2000, 100]"
                  />
                </div>
              </div>

              <div class="column has-text-centered photocolumn">
                <Picture
                  :key="mainimage.id + 'm'"
                  width="300px"
                  height="300px"
                  :alt="mainimage.alt"
                  :asrc="mainimage.src"
                  :resolution="[1000, 600, 100]"
                  :media="[2000, 300, 100]"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div id="proddesccontainer" class="container productdescription">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label"
                  >Variants
                  <img
                    alt="more information icon"
                    src="data:image/png;base64,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"
                  />
                </label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="variants">
                    <div class="buttons are-small is-centered">
                      <a
                        v-for="v in data.variants"
                        :key="v.id"
                        class="variantbutton button is-link is-inverted is-outlined"
                        :class="{
                          'is-focused': selected_variant.id == v.id,
                        }"
                        :disabled="v.is_disabled === 'disabled'"
                        @click="change_variant(v.id)"
                        >{{ v.name }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <nav id="prodlevel" class="level is-mobile">
                <div class="level-item">
                  <div class="level-item">
                    <p
                      class="subtitle is-4"
                      style="width: 12rem; text-align: center;"
                    >
                      Price:
                      <strong
                        id="productprice"
                        v-html="selected_variant.price"
                      ></strong>
                    </p>
                  </div>
                </div>
                <div class="level-item">
                  <p class="level-item">
                    <button id="add-to-cart" class="button is-warning">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </nav>
            </div>

            <div class="content delinfo">
              <p>
                Ships from India. All India Delivery <br />(3-4 days for metros)
              </p>
              <nav class="level is-mobile">
                <p
                  id="product_in_stock"
                  class="level-item"
                  v-html="selected_variant.stock"
                ></p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="hero prodblog">
      <div class="hero-body">
        <div class="container">
          <div class="content" v-html="data.meta.html"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  data: function () {
    return {
      mainimage: '',
      // "images": JSON.parse(document.getElementById('prod_images_json').textContent),
      // "variants": JSON.parse(document.getElementById('prod_variants_json').textContent),
      selected_variant: {
        id: '',
        stock: '',
        price: '',
      },
    }
  },
  head() {
    return {
      style: [
        {
          cssText: ``,
          type: 'text/css',
        },
      ],
    }
  },
  created: function () {
    this.change_image_by_id(this.data.images.mainimage.id)
    this.selected_variant.stock = this.data.variants[0].stock
    this.selected_variant.price = this.data.variants[0].price
  },
  methods: {
    change_image_by_id: function (id) {
      this.mainimage = this.data.images.data[id]
    },
    change_variant: function (id) {
      const variant = this.data.variants_dic[id]
      this.selected_variant.id = variant.id
      this.selected_variant.price = '₹' + variant.price
      this.selected_variant.stock = variant.stock
      this.change_image_by_id(variant.image)
    },
  },
}
</script>

<style lang="sass">


.prodcontainer
  background-color: hsl(217, 71%, 33%)
  color: white
  padding: 1rem

  h1
    &.title
      color: white
      margin: 0
      font-size: 1.3rem

  .categorylinks
    margin: 0.5rem 0
    padding: 0.2rem 0
    line-height: 0.7rem

    span
      display: inline
      font-size: 0.7rem
      margin: 0


      a
        color: white




.prodpagecolumns
  margin: 0 !important
  padding: 0
  align-items: stretch

  .column
    padding: 0



.prodmainphoto
  margin: 0
  padding: 0
  background-color: hsl(217, 71%, 33%)
  margin-bottom: 0px !important
  height: 18rem



  .photocolumn
    margin: 0
    padding: 0
    padding-right: 1%
    display: flex
    justify-content: center
    align-items: center



    figure
      width: calc(100% - 5px)
      max-width: 18rem


    img
      object-fit: contain
      margin: 0

  .showcasecolumn
    overflow-y: auto
    width: 22%
    display: flex
    flex-direction: column
    align-items: center
    flex-wrap: nowrap

    &::-webkit-scrollbar
      width: 0
      background: transparent

    figure
      margin: 0.2rem 0
      border: 1px solid rgba(255,255,255,0.6)

      &:hover
        border: 1px solid rgba(255,255,255,0.9)



.productdescription
  color: white

  padding-top: 0.5rem
  padding-bottom: 0.7rem

  #prodh1
    font-size: 1.3rem
  #add-to-cart
    font-weight: bold
  #productprice
    font-size: 1.8rem

  h1
    margin: 0
    color: white
    text-align: center

  .field

    .label
      width: 6rem
      margin: 0 auto
      color: white
      text-align: center

      &:hover
        cursor: pointer

      img
        width: 16px
        display: inline


  .variants
    .subtitle
      color: white
      margin: 0
      margin-top: 0.5rem
      text-align: center
    .buttons
      margin-top: 0.2rem

      .button
        height: 2rem
        padding: 0 0.3rem

  .content
    margin: 0
  .content.is-medium
    font-size: 1rem

  .level
    margin: 0
    margin-top: 0.7rem
    margin-bottom: 0.4rem

  p
    color: white
    font-size: 1rem

  .subtitle strong
    color: white
    font-size: 1.5rem

  .delinfo
    text-align: center
    font-size: 0.8rem
    margin-top: 5px


.prodblog
        font-size: 1rem

        .hero-body
          padding: 0.5rem 0.5rem
          color: #333333

          .container
            background-color: #fafafa
            padding: 0.5rem 1rem
            padding-bottom: 2rem

            .content
              table
                width: auto

                td, th
                  border: 1px dashed hsl(217, 71%, 33%)

              .table.is-striped tbody tr:not(.is-selected):nth-child(odd)
                background-color: #d8f5ff

              .table.is-striped tbody tr:not(.is-selected):nth-child(even), th
                background-color: #fafafa

            h2
              font-size: 1.1rem
              padding-top: 1rem

              &:not(:first-child)
                border-top: 1px dashed #e5e5e5

            h3
              font-size: 1rem
              margin-top: 1rem




+desktop
  .prodcontainer
    margin-top: 10px
    padding: 10px
    max-width: 1000px

  .prodmainphoto
    padding-left: calc(50% - 193px)
    padding-right: calc(50% - 182px)

    .showcasecolumn
      width: 83px !important
      padding: 2px
      padding-right: 6px
      padding-left: 12px


+mobile
  .prodmainphoto
    .showcasecolumn
      width: 80px !important
      padding: 2px
      padding-right: 4px
      padding-left: 12px


+iphone
  .prodmainphoto
    .showcasecolumn
      width: 83px !important
      padding: 2px
      padding-right: 6px
      padding-left: 12px


+iphone_plus
  .prodmainphoto
    padding-left: calc(50% - 193px)
    padding-right: calc(50% - 182px)

    .showcasecolumn
      width: 83px !important
      padding: 2px
      padding-right: 6px
      padding-left: 12px
</style>
