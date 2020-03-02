/**
 * manage states in home page
 **/
const home = {
  state: {
    latestBookList: [],
    menuToggled: false,
    homePagePosY: 0
  },
  mutations: {
    SAVE_MENU_TOGGLED: (state, isToggled) => {
      state.menuToggled = isToggled
    },
    SAVE_LATEST_BOOK_LIST: (state, books) => {
      state.latestBookList = books
    },
    SAVE_HOME_SCROLLING_POSY: (state, posY) => {
      state.homePagePosY = posY
    },
    SAVE_HOTLIST: (state, hotList) => {
      state.hotList = hotList
    }
  },
  getters: {
    homePagePosY: state => state.homePagePosY,
    latestBookList: state => state.latestBookList,
    isMenuToggled: state => state.menuToggled
  },
  actions: {
    saveMenuToggled ({ commit }, toggleState) {
      commit('SAVE_MENU_TOGGLED', toggleState)
    },
    saveHomeScrollingPosY ({ commit }, posY) {
      commit('SAVE_HOME_SCROLLING_POSY', posY)
    },
    saveLatestBookList ({ commit }, bookList) {
      commit('SAVE_LATEST_BOOK_LIST', bookList)
    },
    removeLatestBookList ({ commit }) {
      commit('SAVE_LATEST_BOOK_LIST', null)
    }
  }
}

export default home
