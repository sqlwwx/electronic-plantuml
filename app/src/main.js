import Vue from 'vue'
import VueElectron from 'vue-electron'
import 'photon/dist/css/photon.css'

Vue.use(VueElectron)
Vue.config.debug = true

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
