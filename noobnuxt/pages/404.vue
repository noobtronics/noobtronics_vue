<template>
  <div class="container fullwdithcontainer">
    <div
      class="content has-text-centered"
      style="height: 400px; padding: 100px 0px;"
    >
      <h1>404 error occurred</h1>
      <h2>Page not found, Refresh or go to another url.</h2>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'blog', // you can set a custom layout for the error page
}
</script>
