<template>
  <figure
    class="image"
    :class="{
      loadingimage: isLoading && !whiteload,
      loadingimagewhite: isLoading && whiteload,
    }"
    style="object-fit: cover;"
    :style="base64Style"
  >
    <picture v-if="lazyload">
      <source
        v-for="(r, i) in resolution"
        :key="r + 'webp' + src"
        :media="'(min-width:' + media[i] + 'px)'"
        :data-srcset="src + '-' + r + '.webp ' + r + 'w'"
        type="image/webp"
      />
      <source
        v-for="(r, i) in resolution"
        :key="r + 'jpg' + src"
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
        @load="loaded"
      />
    </picture>
    <picture v-else>
      <source
        v-for="(r, i) in resolution"
        :key="r + 'webp' + src"
        :media="'(min-width:' + media[i] + 'px)'"
        :srcset="src + '-' + r + '.webp ' + r + 'w'"
        type="image/webp"
      />
      <source
        v-for="(r, i) in resolution"
        :key="r + 'jpg' + src"
        :media="'(min-width:' + media[i] + 'px)'"
        :srcset="src + '-' + r + '.jpg ' + r + 'w'"
        type="image/jpg"
      />
      <img
        :alt="alt"
        :width="width"
        :height="height"
        :src="src + '-' + resolution[0] + '.jpg'"
        @load="loaded"
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
    base64: {
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
    whiteload: {
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
  data: function () {
    return {
      isLoading: true,
    }
  },

  computed: {
    src: function () {
      if (this.asrc.length > 1) {
        return this.asrc
      }
      return ''
    },
    base64Style: function () {
      if (this.base64.length > 1) {
        return (
          'background-repeat: no-repeat; background-size: cover; background-image: url(data:image/jpg;base64,' +
          this.base64 +
          ')'
        )
      }
      return ''
    },
  },
  watch: {
    asrc: function () {
      this.isLoading = true
    },
  },
  methods: {
    loaded: function () {
      this.isLoading = false
    },
  },
}
</script>

<style></style>
