import {
  RECORD_MENU_STATE,
  RECORD_BOOK,
  RECORD_CURRENT_VOLUME_CHAPTERS
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
  [RECORD_MENU_STATE](state,menuState){
    state.menuState = menuState;
  },
  [RECORD_BOOK](state,book){
    state.book = book;
  },
  [RECORD_CURRENT_VOLUME_CHAPTERS](state,currentVolumeChapters){
    state.currentVolumeChapters = currentVolumeChapters
  }
}
