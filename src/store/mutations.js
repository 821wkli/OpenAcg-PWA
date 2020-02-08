import {
  RECORD_MENU_STATE,
  BUY_CART,
  SAVE_QUESTION,
  SAVE_ADDRESS,
  SAVE_AVANDER,
  RETSET_NAME,
  RECORD_ADDRESS,
  ADD_CART,
  REDUCE_CART,
  INIT_BUYCART,
  CLEAR_CART,
  RECORD_SHOPDETAIL,
  RECORD_USERINFO,
  GET_USERINFO,
  CONFIRM_REMARK,
  CHOOSE_ADDRESS,
  CHOOSE_SEARCH_ADDRESS,
  CONFIRM_INVOICE,
  SAVE_GEOHASH,
  NEED_VALIDATION,
  SAVE_CART_ID_SIG,
  SAVE_ORDER_PARAM,
  CHANGE_ORDER_PARAM,
  ORDER_SUCCESS,
  SAVE_ORDER,
  RECORD_ORDERSCROLL,
  RECORD_ORDERLIST,
  OUT_LOGIN,
  RECORD_ISMOBILE,
  RECORD_BOOK
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
  }
}
