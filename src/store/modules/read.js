/**
 * manage search state
 **/
import { getStore, setStore } from '../../utils/common'

const read = {
  state: {
    setting: {
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
    async initSetting ({ commit }) {
      const cache = await getStore('setting') || {
        fontSize: '0.8rem',
        darkTheme: false
      }
      commit('SAVE_SETTING', cache)
    }
  },
  getters: {
    setting: state => state.setting
  }
}
export default read
