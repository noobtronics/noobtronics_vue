import Vue from 'vue'
import validator from 'validator'
import cookies from 'js-cookie'
import Picture from '../components/utils/picture.vue'

Vue.component('Picture', Picture)
Vue.prototype.$validator = validator
Vue.prototype.$cookies = cookies
