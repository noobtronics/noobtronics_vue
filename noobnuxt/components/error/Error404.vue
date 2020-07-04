<template>
  <div>
    <div
      class="content has-text-centered"
      style="height: 400px; padding: 100px 0px;"
    >
      <h1 class="title is-3">{{ name }} Page Not Found</h1>
      <br />
      <h2 class="subtitle is-3">404 Error</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: function () {
        return ''
      },
    },
  },
}
</script>

<style lang="sass" scoped></style>
