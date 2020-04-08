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
        path: '/404',
        name: '404',
        component: () => import('../pages/404/404.vue')
      },
      {
        path: '/anime',
        name: 'anime',
        component: () => import('../pages/Anime/Anime.vue'),
        redirect: '/anime/list',
        children: [
          {
            path: '/anime/list',
            name: 'list',
            component: () => import('../pages/Anime/children/List.vue')
          },
          {
            path: '/anime/detail/:mid',
            name: 'detail',
            component: () => import('../pages/Anime/children/Detail.vue')
          }
        ]
      },
      {
        path: '*',
        redirect: '/404'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  // This scroll behaviour force the children's page go back to the top so that it could not be affected by parent's scrolling position
  scrollBehavior () {
    document.getElementById('app').scrollIntoView()
  }
})

export default router
