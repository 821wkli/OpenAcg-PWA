import {
  SAVE_MENU_TOGGLED,
  RECORD_BOOK,
  RECORD_CURRENT_VOLUME_CHAPTERS,
  RECORD_BOOKSHELF_LIST,
  GET_BOOKSELF_LIST,
  RECORD_CURRENT_READING_CHAPTER,
  SAVE_CHAPTER_LIST,
  SAVE_SETTING,
  CLEAR_SEARCH_HISTORY,
  SAVE_HOME_SCROLLING_POSY,
  UPDATE_BOOKSHELF_LIST
  , SAVE_HOTLIST, SAVE_LATEST_BOOK_LIST, SAVE_SEARCH_HISTORY
} from './mutation-types.js'

import {
  setStore,
  getStore, removeStore
} from '../utils/common.js'

export default {
  [SAVE_LATEST_BOOK_LIST] (state, books) {
    state.latestBookList = books
  },
  [SAVE_HOME_SCROLLING_POSY] (state, posY) {
    state.homePagePosY = posY
  },
  [SAVE_HOTLIST] (state, hotList) {
    state.hotList = hotList
  },
  [SAVE_SETTING] (state, { fontSize, darkTheme }) {
    state.setting.fontSize = fontSize
    state.setting.darkTheme = darkTheme
    setStore('setting', state.setting)
  },
  [SAVE_CHAPTER_LIST] (state, chapters) {
    state.chapterList = chapters
  },
  [RECORD_CURRENT_READING_CHAPTER] (state, { bookid, chapterid, posY }) {
    const historyList = getStore('recentReadingChapterList') || []
    const obj = {
      bookid: bookid,
      chapterid: chapterid,
      posY: posY
    }
    const foundIndex = historyList.findIndex(item => item.bookid === bookid)
    if (foundIndex === -1) {
      historyList.push(obj)
    } else {
      historyList[foundIndex] = obj
    }
    state.recentReadingChapterList = historyList
    setStore('recentReadingChapterList', historyList)
  },
  [RECORD_BOOKSHELF_LIST] (state, book) {
    const books = getStore('bookshelf') || []
    const isDuplicated = books.some(item => item.id === book.id)
    if (!isDuplicated) {
      books.push(Object.assign({}, book))
      setStore('bookshelf', books)
      state.bookshelfList = books
    }
  },
  [UPDATE_BOOKSHELF_LIST] (state, list) {
    setStore('bookshelf', list)
    state.bookshelfList = list
  },
  [GET_BOOKSELF_LIST] (state) {
    const books = getStore('bookshelf') || []
    state.bookshelfList = books
  },
  [SAVE_MENU_TOGGLED] (state, menuToggled) {
    state.menuToggled = menuToggled
  },
  [RECORD_BOOK] (state, book) {
    state.book = book
  },
  [RECORD_CURRENT_VOLUME_CHAPTERS] (state, currentVolumeChapters) {
    state.currentVolumeChapters = currentVolumeChapters
  },
  [SAVE_SEARCH_HISTORY] (state, { historyEntry }) {
    const list = getStore('searchHistory') || []
    const isDuplicated = list.some(item => item.id === historyEntry.id)
    if (!isDuplicated) {
      list.push(Object.assign({}, historyEntry))
      setStore('searchHistory', list)
      state.searchHistoryList = list
    }
  },
  [CLEAR_SEARCH_HISTORY] (state, historyList) {
    state.searchHistoryList = null
    removeStore('searchHistory')
  }
}
