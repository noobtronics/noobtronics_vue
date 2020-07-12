<template>
  <div
    id="subscribe_email"
    class="columns is-vcentered"
    style="margin-bottom: 1rem;"
  >
    <div class="column is-7 has-text-centered">
      <h4 class="title is-4">Join our newsletter!</h4>
      <p class="subtitle is-6">We'll never share your email address.</p>
    </div>
    <div class="column is-5">
      <div
        class="field has-addons"
        style="padding-bottom: 10px; padding-left: 10px; padding-right: 10px;"
      >
        <div class="control is-expanded">
          <input
            v-model="email"
            class="input"
            type="email"
            placeholder="Email"
            aria-label="email"
            aria-describedby="call-to-action-button-04"
          />
        </div>
        <div class="control">
          <button
            id="call-to-action-button-04"
            class="button"
            style="
              background-color: #a91e45;
              color: white;
              border-color: transparent;
            "
            @click="submit_email"
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
      email: '',
    }
  },
  methods: {
    submit_email: function () {
      if (!this.$validator.isEmail(this.email)) {
        this.$notify('failed', 'Please enter correct email.')
        return
      }
      const self = this
      this.$axios
        .post('/api/subscribe_email', { email: this.email })
        .then(function (response) {
          if (!self.$cookies.get('eid')) {
            self.$cookies.set('eid', response.data.email_token, {
              expires: 999,
            })
          }
          self.$notify('success', 'You are now subscribed.')
        })
        .catch(function (error) {
          self.$notify('failed', 'Server Error Occured.')
          console.log(error)
        })
        .then(function () {})
    },
  },
}
</script>

<style lang="sass" scoped></style>
