import App from 'src/App'
const home = r => require.ensure([], () => r(require('src/page/home/home')), 'home')
const book = r => require.ensure([], () => r(require('src/page/book/book')), 'book')
const read = r => require.ensure([], () => r(require('src/page/book/children/read')), 'read')
const bookshelf = r => require.ensure([], () => r(require('src/page/bookshelf/bookshelf')), 'bookshelf')
const setting = r => require.ensure([], () => r(require('src/page/setting/setting')), 'setting')
const search = r => require.ensure([], () => r(require('src/page/search/search')), 'search')

const notfound = r => require.ensure([], () => r(require('src/page/404/notfound')), 'notfound')

export default [{
  path: '/',
  component: App,  //top-level route /#/
  children: [      //second-level route, under App.vue component /#/x
    {path: '', redirect: '/home'},               // redirect /#/ to /#/home
    {path: '/home', name:'home',component: home},            //home page
    {
      path: '/book/:bookid', name:'book',component: book,
      children: [
        { path: '', component: book },
      ]
    },    //book detail page
    {
      path: '/reader/:bookid',
      component: read
    },
    {
      path: '/bookshelf',
      component: bookshelf
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path:'/search',
      component:search
    },

    {path:'*',component:notfound}
  ]
}]
