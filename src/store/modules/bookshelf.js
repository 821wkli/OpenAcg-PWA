import { getStore, isEmpty, setStore } from '../../utils/common'
const bookshelf = {
  state: {
    bookshelfList: [],
    checkedAll: false
  },
  mutations: {
    SAVE_BOOKSHELF_LIST: (state, list) => {
      state.bookshelfList = list
      setStore('bookshelf', list)
    },
    SAVE_CHECKALL: (state, checked) => {
      state.checkedAll = checked
    }
  },
  actions: {
    async loadBookshelfList ({ commit }) {
      const list = await getStore('bookshelf')
      commit('SAVE_BOOKSHELF_LIST', list)
    },
    removeBook ({ commit, state }, book) {
      const books = state.bookshelfList.filter(item => {
        return item.id !== book.id
      })
      commit('SAVE_BOOKSHELF_LIST', books)
    },
    checkAll ({ commit, state }) {
      const isCheckedAll = !state.checkedAll
      commit('SAVE_CHECKALL', isCheckedAll)
    },
    updateBookshelf ({ commit, state }, list) {
      commit('SAVE_BOOKSHELF_LIST', list)
    },
    saveBookToBookshelf ({ commit, state }, book) {
      let books = null
      if (isEmpty(state.bookshelfList)) {
        books = []
      } else {
        books = [...state.bookshelfList]
      }
      const isDuplicated = books.some(item => item.id === book.id)
      if (!isDuplicated) {
        books.unshift(book)
      }
      commit('SAVE_BOOKSHELF_LIST', books)
    }
  },
  getters: {
    bookshelfList: (state) => {
      return state.bookshelfList
    },
    isCheckedAll: (state) => {
      return state.checkedAll
    }
  }
}

export default bookshelf
