<template>
  <figure class="image" style="object-fit: cover;">
    <picture v-if="lazyload">
      <source
        v-for="(r, i) in resolution"
        :key="r"
        :media="'(min-width:' + media[i] + 'px)'"
        :data-srcset="src + '-' + r + '.webp ' + r + 'w'"
        type="image/webp"
      />
      <source
        v-for="(r, i) in resolution"
        :key="r"
        :media="'(min-width:' + media[i] + 'px)'"
        :data-srcset="src + '-' + r + '.jpg ' + r + 'w'"
        type="image/jpg"
      />
      <img
        :alt="alt"
        :width="width"
        :height="height"
        :data-src="src + '-' + resolution[0] + '.jpg'"
        class="lazyload"
      />
    </picture>
    <picture v-else>
      <source
        v-for="(r, i) in resolution"
        :key="r"
        :media="'(min-width:' + media[i] + 'px)'"
        :srcset="src + '-' + r + '.webp ' + r + 'w'"
        type="image/webp"
      />
      <source
        v-for="(r, i) in resolution"
        :key="r"
        :media="'(min-width:' + media[i] + 'px)'"
        :srcset="src + '-' + r + '.jpg ' + r + 'w'"
        type="image/jpg"
      />
      <img
        :alt="alt"
        :width="width"
        :height="height"
        :src="src + '-' + resolution[0] + '.jpg'"
      />
    </picture>
  </figure>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: function () {
        return ''
      },
    },
    asrc: {
      type: String,
      default: function () {
        return ''
      },
    },
    width: {
      type: String,
      default: function () {
        return '600px'
      },
    },
    height: {
      type: String,
      default: function () {
        return '600px'
      },
    },
    lazyload: {
      type: Boolean,
      default: function () {
        return false
      },
    },
    resolution: {
      type: Array,
      default: function () {
        return [300]
      },
    },
    media: {
      type: Array,
      default: function () {
        return [100]
      },
    },
  },

  computed: {
    src: function () {
      if (this.asrc.length > 1) {
        return this.asrc
      }
      return ''
    },
  },
}
</script>

<style></style>
