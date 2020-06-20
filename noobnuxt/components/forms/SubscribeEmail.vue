<template>
  <div
    class="columns is-vcentered"
    style="margin-bottom: 1rem;"
    id="subscribe_email"
  >
    <div class="column is-7 has-text-centered">
      <h4 class="title is-4">Join our newsletter!</h4>
      <p class="subtitle is-6">We'll never share your email address.</p>
    </div>
    <div class="column is-5">
      <div
        class="field has-addons"
        style="padding-bottom:10px;padding-left:10px;padding-right:10px;"
      >
        <div class="control is-expanded">
          <input
            class="input"
            type="email"
            placeholder="Email"
            aria-label="email"
            aria-describedby="call-to-action-button-04"
            v-model="email"
          />
        </div>
        <div class="control">
          <button
            class="button"
            style="background-color:#A91E45;color:white;border-color:transparent;"
            id="call-to-action-button-04"
            v-on:click="submit_email"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscribeEmail',
  data: () => {
    return {
      email: ''
    }
  },
  methods: {
    submit_email: () => {
      const self = this
      this.$http
        .post('/api/subscribe_email', { email: this.email })
        .then(function(response) {
          self.$cookies.set('eid', response.data.email_token, { expires: 999 })
        })
        .catch(function(error) {
          console.log(error)
        })
        .then(function() {})
    }
  },
  computed: {}
}
</script>

<style lang="sass" scoped></style>
