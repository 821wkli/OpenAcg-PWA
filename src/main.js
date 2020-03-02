import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { chinese } from './config/langs'
import './config/rem'
Vue.config.productionTip = false
Vue.prototype.$lang = { ...chinese }
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
