// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)
// import {store} from './store/store'
import VueResource from "vue-resource"
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
// import 'es6-promise/auto'

Vue.use(Vuex)
// Vue.use(VueAxios, axios)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store: store,
  router,
  components: { App },
  template: '<App/>'
})
