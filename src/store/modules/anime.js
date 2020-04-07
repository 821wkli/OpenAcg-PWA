/**
 * manager states in anime page
 **/

const anime = {
  state: {
    currentAnime: {}
  },
  mutations: {
    SAVE_CURRENT_ANIME: (state, anime) => { state.currentAnime = anime }
  },
  getters: {
    currentAnime: state => state.currentAnime
  },
  actions: {
    saveCurrentAnime ({ commit, state }, anime) {
      commit('SAVE_CURRENT_ANIME', anime)
    }
  }
}

export default anime
