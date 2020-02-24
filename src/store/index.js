import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import {getStore} from "../config/utils";

Vue.use(Vuex)
const defaultSetting = {
  fontSize:"0.8rem",
  darkTheme:false
}
const state = {
  latestBookList:[],
  homePagePosY:0,
  menuState:false,
  book:null,
  currentVolumeChapters: null,
  bookshelfList:getStore('bookshelf')||[],
  currentReadingChapter:null,
  previousChapter:null,
  nextChapter:null,
  chapterList:[],
  setting:getStore('setting')||defaultSetting,
  hotList: [],
  searchHistoryList:getStore('searchHistory')||[]
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
