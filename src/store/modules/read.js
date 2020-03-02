/**
 * manage search state
 **/
import { getStore, setStore } from '../../utils/common'

const read = {
  state: {
    setting: {
      fontSize: '0.8rem',
      darkTheme: false
    }
  },
  mutations: {
    SAVE_SETTING: (state, setting) => {
      state.setting = setting
      setStore('setting', setting)
    }
  },
  actions: {
    saveSetting ({ commit }, setting) {
      commit('SAVE_SETTING', setting)
    },
    initSetting ({ commit }) {
      const cache = getStore('setting') || {}
      commit('SAVE_SETTING', cache)
    }
  },
  getters: {
    setting: state => state.setting
  }
}
export default read
