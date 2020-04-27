/**
 * manager states in anime page
 **/

const anime = {
  state: {
    currentAnime: {},
    searchResult: []
  },
  mutations: {
    SAVE_CURRENT_ANIME: (state, anime) => { state.currentAnime = anime },
    SAVE_SEARCH_RESULT: (state, results) => { state.searchResult = results }
  },
  getters: {
    currentAnime: state => state.currentAnime,
    searchResult: state => state.searchResult
  },
  actions: {
    saveCurrentAnime ({ commit, state }, anime) {
      commit('SAVE_CURRENT_ANIME', anime)
    },
    saveSearchResults ({ commit, state }, searchResult) {
      commit('SAVE_SEARCH_RESULT', searchResult)
    }
  }
}

export default anime
