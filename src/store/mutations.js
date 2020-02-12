import {
  RECORD_MENU_STATE,
  RECORD_BOOK,
  RECORD_CURRENT_VOLUME_CHAPTERS,
  RECORD_BOOKSHELF_LIST,
  GET_BOOKSELF_LIST
} from './mutation-types.js'
import {
  getUser
} from "../service/apis";
import {
  setStore,
  getStore,
} from '../config/utils'
import {INIT_SHOPID, RECORD_SHOPID} from "./mutation-types";

export default {
  [RECORD_BOOKSHELF_LIST](state, book) {
    let books = getStore('bookshelf') || [];
    let isDuplicated = books.some(item=>item.id === book.id);
    if(!isDuplicated){
      books.push(Object.assign({}, book));
      setStore('bookshelf', books)
      state.bookshelfList = books;
    }
  },
  [GET_BOOKSELF_LIST](state){
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
  }
}
