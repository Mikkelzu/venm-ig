import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import feather from 'vue-icon'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(feather, 'v-icon')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
