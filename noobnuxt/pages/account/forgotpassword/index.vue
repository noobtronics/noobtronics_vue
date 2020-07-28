<template>
  <div class="container fullwdithcontainer">
    <div class="content has-text-centered" style="padding: 50px 10px;">
      <div v-if="user_loggedin">
        <h1 class="title is-3">You are logged in already</h1>
      </div>

      <div v-else>
        <div v-if="state == 0">
          <h1 class="title is-3">Password Reset Form</h1>

          <div class="container has-text-centered">
            <div class="columns is-centered">
              <div class="column is-5 is-4-desktop">
                <form>
                  <div class="field">
                    <div class="control has-icons-left">
                      <input
                        v-model="email"
                        class="input"
                        type="email"
                        placeholder="Email"
                      />
                      <span class="icon is-small is-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 172 172"
                          style="fill: #000000;"
                        >
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="none"
                            stroke-width="1"
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            stroke-miterlimit="10"
                            stroke-dasharray=""
                            stroke-dashoffset="0"
                            font-family="none"
                            font-weight="none"
                            font-size="none"
                            text-anchor="none"
                            style="mix-blend-mode: normal;"
                          >
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#bbbbbb">
                              <path
                                d="M18.92,24.08c-8.4925,0 -15.43969,6.93375 -15.48,15.42625c0,0 0,0.01344 0,0.02688c0,0.01344 0,0.01344 0,0.02687v92.88c0,8.50594 6.97406,15.48 15.48,15.48h134.16c8.50594,0 15.48,-6.97406 15.48,-15.48v-92.88c0,-0.01344 0,-0.01344 0,-0.02687c0,-0.01344 0,-0.02688 0,-0.02688c-0.04031,-8.4925 -6.9875,-15.42625 -15.48,-15.42625zM27.86938,30.96h116.27469l-58.14406,40.5275zM16.42063,31.36313l69.57937,48.50937l69.59281,-48.50937c3.52062,1.06156 6.06031,4.25969 6.08719,8.15656c-0.01344,0.72563 -0.7525,2.17688 -1.8275,3.34594c-1.08844,1.1825 -2.15,1.92156 -2.15,1.92156l-0.01344,0.02688l-71.68906,50.74l-71.68906,-50.74l-0.01344,-0.02688c0,0 -1.06156,-0.73906 -2.15,-1.92156c-1.075,-1.16906 -1.81406,-2.62031 -1.8275,-3.34594c0.02688,-3.89687 2.56656,-7.095 6.10063,-8.15656zM10.32,50.40406l0.02688,0.02687l0.02687,0.01344v0.01344l10.26625,7.25625v83.32594h-1.72c-4.78375,0 -8.6,-3.81625 -8.6,-8.6zM161.68,50.40406v82.03594c0,4.78375 -3.81625,8.6 -8.6,8.6h-1.72v-83.32594l10.26625,-7.25625v-0.01344zM27.52,62.57844l58.48,41.3875l58.48,-41.3875v78.46156h-116.96z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="field is-grouped" style="margin-top: 30px;">
                    <div class="control is-expanded">
                      <a class="button noobbtn" @click="submitForgotPassword()">
                        Submit
                      </a>
                    </div>
                  </div>
                  <p style="margin-top: 30px;">
                    <nuxt-link to="/account/login">Go to Login</nuxt-link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h1 class="title is-3">Almost there!</h1>
          <p class="content">
            <b>We've sent an email to {{ email }}</b>
          </p>
          <p class="content">
            In the email is a link that will to reset your password. Please
            check your email and click that link to continue!
          </p>
          <p style="height: 100px;"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'nocache-default',
  data: function () {
    return {
      email: '',
      state: 0,
    }
  },
  computed: {
    user_loggedin: function () {
      return this.$store.state.user.loggedin
    },
  },
  methods: {
    submitForgotPassword: function () {
      if (this.$validator.isEmpty(this.email)) {
        this.$notify('failed', 'Please enter Email.')
        return
      }

      const self = this
      this.$axios
        .$post('api/user/forgotpassword', {
          email: self.email,
        })
        .then(function (response) {
          self.state = 1
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 400) {
              self.$notify('failed', 'Email does not exists, you can signup')
              return
            }
          }
          self.$notify('failed', 'Server Error Occured <br>Try Refreshing Page')
        })
    },
  },
}
</script>
