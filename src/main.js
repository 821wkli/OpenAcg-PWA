import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { chinese } from './config/langs'
import './config/rem'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import FastClick from 'fastclick'
FastClick.attach(document.body)
FastClick.prototype.focus = (ele) => { 'use strict'; ele.focus() }
Vue.use(Toast, {
  type: 'center',
  duration: 3000,
  wordWrap: true,
  width: 'auto'
})
Vue.config.productionTip = false
Vue.prototype.$lang = { ...chinese }
Vue.prototype.$hostURL = `${window.location.protocol}//${window.location.host}`
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
