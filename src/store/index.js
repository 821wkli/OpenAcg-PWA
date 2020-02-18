import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import {getStore} from "../config/utils";

Vue.use(Vuex)
const setting = {
  fontSize:"0.8rem",
  darkTheme:false
}
const state = {
  menuState:false,
  book:null,
  currentVolumeChapters: null,
  bookshelfList:[],
  currentReadingChapter:null,
  previousChapter:null,
  nextChapter:null,
  chapterList:[],
  setting:getStore('setting')||defaultSetting
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
