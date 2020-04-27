import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import book from './modules/book'
import bookshelf from './modules/bookshelf'
import search from './modules/search'
import read from './modules/read'
import anime from './modules/anime'
// import { getStore } from '../utils/common'
Vue.use(Vuex)
// const defaultSetting = {
//   fontSize: '0.8rem',
//   darkTheme: false
// }
// const states = {
//   latestBookList: [],
//   homePagePosY: 0,
//   menuToggl  ed: false,
//   book: null,
//   currentVolumeChapters: null,
//   bookshelfList: getStore('bookshelf') || [],
//   currentReadingChapter: null,
//   recentReadingChapterList: getStore('recentReadingChapterList') || [],
//   previousChapter: null,
//   nextChapter: null,
//   chapterList: [],
//   setting: getStore('setting') || defaultSetting,
//   hotList: [],
//   searchHistoryList: getStore('searchHistory') || []
// }
export default new Vuex.Store({
  state: {
    system: ''
  },
  mutations: {
    SAVE_SYSTEM: (state, system) => { state.system = system }

  },
  getters: {
    system: state => state.system
  },
  actions: {
    saveSystem ({ commit, state }, system) {
      commit('SAVE_SYSTEM', system)
    }
  },
  modules: {
    home,
    book,
    bookshelf,
    search,
    read,
    anime
  }
})
