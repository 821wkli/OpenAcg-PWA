import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'src/router/router'
import store from 'src/store/'
import {routerMode} from 'src/config/env'
import 'src/config/rem';
import {chinese} from 'src/langs/chinese'

Vue.prototype.$lang = {...chinese}
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})


new Vue({
  router,
  store,
}).$mount('#app')
