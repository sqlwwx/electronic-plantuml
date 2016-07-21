import Vue from 'vue'
import 'photon/dist/css/photon.css'

Vue.config.debug = true

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
