import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  menuState:false,
  book:null,
  currentVolumeChapters: null,
  bookshelfList:[],
  currentReadingChapter:null,
  previousChapter:null,
  nextChapter:null,
  chapterList:[],
  setting:{}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
