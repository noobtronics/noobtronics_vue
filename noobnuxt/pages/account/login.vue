<template>
  <div class="container fullwdithcontainer">
    <div class="content has-text-centered" style="padding: 50px 10px;">
      <div v-if="user_loggedin">
        <h1 class="title is-3">You are logged in already</h1>
      </div>

      <div v-else>
        <h1 class="title is-3">Log In</h1>

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
                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      v-model="password"
                      class="input"
                      type="password"
                      placeholder="Password"
                      @keyup.enter="doLogin()"
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
                              d="M115.3475,0c-11.85187,0 -23.08562,4.91813 -32.035,13.8675c-10.15875,10.14531 -15.02312,22.91094 -13.6525,36.4425c0.81969,7.99531 3.91031,15.96375 8.7075,23.3275l-45.4725,45.58l-5.805,-5.805c-1.37062,-1.37062 -2.95625,-2.43219 -4.73,-2.795c-1.77375,-0.36281 -3.64156,-0.01344 -5.0525,0.645c-2.82187,1.31688 -4.70312,3.52063 -6.7725,5.59l-4.1925,4.1925c-2.06937,2.06938 -4.16562,3.95063 -5.4825,6.7725c-0.65844,1.41094 -1.11531,3.17125 -0.7525,4.945c0.36281,1.77375 1.42438,3.35938 2.795,4.73l5.805,5.805l-4.515,4.6225v0.1075c-5.42875,5.49594 -5.57656,14.41844 -0.1075,19.8875h0.1075c5.4825,5.46906 14.39156,5.46906 19.8875,0l74.2825,-74.2825c8.76125,5.71094 18.28844,8.9225 27.8425,8.9225c11.85188,0 22.97813,-4.91812 31.9275,-13.8675c10.15875,-10.14531 15.03656,-23.01844 13.6525,-36.55c-1.23625,-12.21469 -7.60562,-24.28156 -17.63,-34.2925c-11.34125,-11.35469 -25.0475,-17.845 -38.8075,-17.845zM115.3475,6.88c11.59656,0 23.67688,5.49594 33.97,15.8025c9.08375,9.07031 14.53938,19.87406 15.5875,30.2075c1.1825,11.52938 -2.70094,22.05094 -11.61,30.96c-7.83406,7.83406 -17.0925,11.825 -27.09,11.825c-11.59656,0 -23.78437,-5.49594 -34.0775,-15.8025c-9.08375,-9.07031 -14.52594,-19.87406 -15.5875,-30.2075c-1.16906,-11.52937 2.6875,-22.05094 11.61,-30.96c7.83406,-7.83406 17.2,-11.825 27.1975,-11.825zM116.53,19.6725c-7.06812,0 -13.63906,3.01 -19.0275,8.385c-6.04687,6.04688 -8.98969,13.73313 -8.17,21.715c0.79281,7.68625 4.78375,15.31875 11.18,21.715c7.2025,7.18906 15.81594,11.395 24.4025,11.395c7.06813,0 13.63906,-2.99656 19.0275,-8.385c6.04688,-6.03344 9.09719,-13.71969 8.2775,-21.715c-0.79281,-7.68625 -4.87781,-15.31875 -11.2875,-21.715c-7.18906,-7.2025 -15.81594,-11.395 -24.4025,-11.395zM116.53,26.5525c6.31563,0 13.37031,3.14438 19.565,9.3525c5.49594,5.4825 8.65375,11.81156 9.245,17.5225c0.60469,5.93938 -1.41094,11.40844 -6.235,16.2325c-4.35375,4.35375 -8.96281,6.3425 -14.19,6.3425c-6.31562,0 -13.24937,-3.25187 -19.4575,-9.46c-5.49594,-5.49594 -8.76125,-11.81156 -9.3525,-17.5225c-0.60469,-5.93937 1.41094,-11.30094 6.235,-16.125c4.35375,-4.34031 8.96281,-6.3425 14.19,-6.3425zM82.4525,79.335c1.505,1.85438 3.10406,3.64156 4.8375,5.375c1.73344,1.73344 3.53406,3.3325 5.375,4.8375l-73.4225,73.4225c-2.86219,2.84875 -7.36375,2.84875 -10.2125,0c-2.86219,-2.86219 -2.86219,-7.36375 0,-10.2125zM20.7475,117.39c0.1075,0 0.14781,-0.01344 0.215,0c0.13438,0.02688 0.47031,0.14781 1.1825,0.86l5.805,5.805l-14.405,14.405l-5.805,-5.805c-0.71219,-0.71219 -0.83312,-1.14219 -0.86,-1.29c-0.02687,-0.14781 0,-0.18812 0.215,-0.645c0.43,-0.90031 2.08281,-2.74125 4.1925,-4.8375l4.085,-4.1925h0.1075c2.06938,-2.06937 3.82969,-3.77594 4.73,-4.1925c0.22844,-0.1075 0.43,-0.1075 0.5375,-0.1075z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="field is-grouped" style="margin-top: 30px;">
                  <div class="control is-expanded">
                    <a class="button is-fullwidth noobbtn" @click="doLogin()">
                      Log In!
                    </a>
                  </div>
                  <div class="control is-expanded">
                    <a
                      class="button is-fullwidth noobbtn"
                      @click="gotoSignup()"
                    >
                      Sign up!
                    </a>
                  </div>
                </div>
                <p style="margin-top: 30px;">
                  <nuxt-link to="/account/forgotpassword"
                    >Forgot Password ?</nuxt-link
                  >
                </p>
                <p style="margin-top: 20px;">
                  By signing in you agree with the
                  <nuxt-link to="/terms-and-conditions"
                    >Terms and Conditions</nuxt-link
                  >
                  and
                  <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>.
                </p>
              </form>
            </div>
          </div>
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
      password: '',
    }
  },
  computed: {
    user_loggedin: function () {
      return this.$store.state.user.loggedin
    },
  },
  methods: {
    gotoSignup: function () {
      const url = '/account/signup'
      this.$router.push(url)
    },
    doLogin: function () {
      if (this.$validator.isEmpty(this.email)) {
        this.$notify('failed', 'Please enter Email.')
        return
      }
      if (this.$validator.isEmpty(this.password)) {
        this.$notify('failed', 'Please enter Password.')
        return
      }

      const self = this
      this.$axios
        .$post('api/user/login', {
          email: self.email,
          password: self.password,
          trackers: self.$get_trackers(),
        })
        .then(function (response) {
          self.$notify('success', 'You are loggedin')
          self.$set_default(response)
          self.$router.push('/account')
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 400) {
              self.$notify('failed', 'Email does not exists, you can signup')
              return
            }
            if (error.response.status === 401) {
              self.$notify('failed', 'Password verification failed')
              return
            }
          }
          self.$notify('failed', 'Server Error Occured <br>Try Refreshing Page')
        })
    },
  },
}
</script>
