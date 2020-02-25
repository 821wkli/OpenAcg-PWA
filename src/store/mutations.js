import {
  RECORD_MENU_STATE,
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

} from './mutation-types.js'
import {
  getUser
} from "../service/apis";
import {
  setStore,
  getStore, removeStore,
} from '../config/utils'
import {INIT_SHOPID, RECORD_SHOPID, SAVE_HOTLIST, SAVE_LATEST_BOOK_LIST, SAVE_SEARCH_HISTORY} from "./mutation-types";

export default {
  [SAVE_LATEST_BOOK_LIST](state, books) {
    state.latestBookList = books;
  },
  [SAVE_HOME_SCROLLING_POSY](state, posY) {
    state.homePagePosY = posY
  },
  [SAVE_HOTLIST](state, hotList) {
    state.hotList = hotList;
  },
  [SAVE_SETTING](state, {fontSize, darkTheme}) {
    state.setting.fontSize = fontSize;
    state.setting.darkTheme = darkTheme;
    setStore('setting', state.setting);
  },
  [SAVE_CHAPTER_LIST](state, chapters) {
    state.chapterList = chapters
  },
  [RECORD_CURRENT_READING_CHAPTER](state, {bookid, chapterid, posY}) {
    let historyList = getStore('recentReadingChapterList') || [];
    let obj = {
      bookid: bookid,
      chapterid: chapterid,
      posY: posY
    }
    let foundIndex = historyList.findIndex(item => item.bookid === bookid);
    if(foundIndex ===-1){
      historyList.push(obj);
    }
    else{
      historyList[foundIndex] = obj;
    }
    state.recentReadingChapterList = historyList
    setStore('recentReadingChapterList', historyList);
  },
  [RECORD_BOOKSHELF_LIST](state, book) {
    let books = getStore('bookshelf') || [];
    let isDuplicated = books.some(item => item.id === book.id);
    if (!isDuplicated) {
      books.push(Object.assign({}, book));
      setStore('bookshelf', books)
      state.bookshelfList = books;
    }
  },
  [UPDATE_BOOKSHELF_LIST](state, list) {
    setStore('bookshelf', list);
    state.bookshelfList = list;
  },
  [GET_BOOKSELF_LIST](state) {
    let books = getStore('bookshelf') || [];
    state.bookshelfList = books;

  },
  [RECORD_MENU_STATE](state, menuState) {
    state.menuState = menuState;
  },
  [RECORD_BOOK](state, book) {
    state.book = book;
  },
  [RECORD_CURRENT_VOLUME_CHAPTERS](state, currentVolumeChapters) {
    state.currentVolumeChapters = currentVolumeChapters
  },
  [SAVE_SEARCH_HISTORY](state, {historyEntry}) {
    let list = getStore('searchHistory') || [];
    let isDuplicated = list.some(item => item.id === historyEntry.id);
    if (!isDuplicated) {
      list.push(Object.assign({}, historyEntry));
      setStore('searchHistory', list)
      state.searchHistoryList = list;
    }
  },
  [CLEAR_SEARCH_HISTORY](state, historyList) {
    state.searchHistoryList = null;
    removeStore('searchHistory');
  }
}
