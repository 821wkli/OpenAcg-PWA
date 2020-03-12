import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../App.vue'),
    children: [
      {
        path: '', redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../pages/Home/Home.vue')
      },
      {
        path: '/book/:bookid',
        name: 'book',
        component: () => import('../pages/Book/Book.vue')
      },
      {
        path: '/bookshelf',
        name: 'bookshelf',
        component: () => import('../pages/Bookshelf/Bookshelf.vue')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('../pages/Search/Search.vue')
      },
      {
        path: '/reader/:bookid',
        name: 'reader',
        component: () => import('../pages/Read/Read.vue')
      },
      {
        path: '/translate',
        name: 'translate',
        component: () => import('../pages/Translate/Translate.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
