import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { chinese } from './config/langs'
import { baseFontSize } from './config/rem'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
console.log(baseFontSize)
Vue.use(Toast, {
  type: 'center',
  duration: 3000,
  wordWrap: true,
  width: '6rem'
})
Vue.config.productionTip = false
Vue.prototype.$lang = { ...chinese }
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
