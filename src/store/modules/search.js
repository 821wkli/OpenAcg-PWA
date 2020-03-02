/**
 * manage search state
 **/
import { getStore, setStore } from '../../utils/common'

const search = {
  state: {
    hotList: [],
    searchHistoryList: []
  },
  mutations: {
    SAVE_HOTLIST: (state, list) => {
      state.hotList = list
    },
    SAVE_SEARCH_HISTORY_LIST: (state, list) => {
      state.searchHistoryList = list
      setStore('searchHistory', list)
    }
  },
  actions: {
    async initSearchHistory ({ commit }) {
      const results = await getStore('searchHistory') || []
      commit('SAVE_SEARCH_HISTORY_LIST', results)
    },
    saveHotList ({ commit }, hotList) {
      commit('SAVE_HOTLIST', hotList)
    },
    saveSearchHistory ({ commit, state }, history) {
      const isDuplicated = state.searchHistoryList.some(item => item.id === history.id)
      if (!isDuplicated) {
        const list = [...state.searchHistoryList]
        list.push(history)
        commit('SAVE_SEARCH_HISTORY_LIST', list)
      }
    },
    cleanSearchHistory ({ commit }) {
      commit('SAVE_SEARCH_HISTORY_LIST', [])
    }
  },
  getters: {
    hotList: (state) => state.hotList,
    searchHistory: state => state.searchHistoryList

  }
}
export default search
