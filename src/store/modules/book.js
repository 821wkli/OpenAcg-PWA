/**
 * manage states in book page
 **/
import { getStore, setStore } from '../../utils/common'
import { fetchChapterList } from '../../apis'
const book = {
  state: {
    book: {},
    chapterList: [], // total chapters of current book
    currentVolumeChapters: null,
    recentReadingChapterList: [],
    kindleEmailAddress: null
  },
  mutations: {
    SAVE_BOOK: (state, book) => {
      state.book = book
    },
    SAVE_CURRENT_VOLUME_CHAPTERS: (state, value) => {
      state.currentVolumeChapters = value
    },
    SAVE_CHAPTER_LIST: (state, chapterList) => {
      state.chapterList = chapterList
    },
    SAVE_RECENT_READING_CHAPTER_LIST: (state, recentList) => {
      state.recentReadingChapterList = recentList
      setStore('recentReadingChapterList', state.recentReadingChapterList)
    },
    SAVE_KINDLE_EMAIL_ADDRESS: (state, email) => {
      state.kindleEmailAddress = email
      setStore('kindleEmailAddress', state.kindleEmailAddress)
    }
  },
  getters: {
    book: state => state.book,
    recentReadingChapterList: (state) => {
      const ret = state.recentReadingChapterList
      if (ret instanceof Promise) return []
      return ret
    },
    chapterList: state => state.chapterList,
    currentVolumeChapters: state => state.currentVolumeChapters,
    kindleEmailAddress: state => state.kindleEmailAddress
  },
  actions: {
    saveBook ({ commit }, book) {
      commit('SAVE_BOOK', book)
    },
    removeRecentReadingChapterList ({ commit, state }, books) {
      const temp = books
      if (Array.isArray(books)) {
        const diff = [...state.recentReadingChapterList].filter(item => {
          return !temp.includes(item.bookid)
        })
        commit('SAVE_RECENT_READING_CHAPTER_LIST', diff)
      }
    },
    saveRecentReadingChapterList ({ commit, state }, obj) {
      const list = [...state.recentReadingChapterList]
      const pos = list.findIndex(item => item.bookid === obj.bookid)
      if (pos === -1) {
        list.unshift(obj)
      } else {
        list[pos] = obj
      }
      commit('SAVE_RECENT_READING_CHAPTER_LIST', list)
    },
    saveCurrentVolumeChapters ({ commit }, chapters) {
      commit('SAVE_CURRENT_VOLUME_CHAPTERS', chapters)
    },
    saveKindleEmailAddress ({ commit }, email) {
      commit('SAVE_KINDLE_EMAIL_ADDRESS', email)
    },
    async initKindleEmailAddress ({ commit }) {
      const email = await getStore('kindleEmailAddress')
      commit('SAVE_KINDLE_EMAIL_ADDRESS', email)
    },
    async initReadingHistory ({ commit }) {
      const history = await getStore('recentReadingChapterList') || []
      commit('SAVE_RECENT_READING_CHAPTER_LIST', history)
    },
    async initChapterList ({ commit }, book) {
      let chapters = []
      const res = await fetchChapterList(book.id)
      if (res.response) {
        chapters = [...res.response]
      }
      commit('SAVE_CHAPTER_LIST', chapters)
    },
    updateReadingHistory ({ commit, state }, book, chapterid, posY) {
      const historyList = [...state.recentReadingChapterList]
      const obj = {
        book: Object.assign({}, book),
        chapterid: chapterid,
        posY: posY
      }
      const foundIndex = historyList.findIndex(item => item.book.id === book.id)
      if (foundIndex === -1) {
        historyList.push(obj)
      } else {
        historyList[foundIndex] = obj
      }
      commit('SAVE_RECENT_READING_CHAPTER_LIST', obj)
    }
  }
}
export default book
