import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  getters: {
    userInfo: state => {
      if (state.userInfo !== '') {
        return state.userInfo
      } else if (JSON.parse(sessionStorage.getItem('userInfo')) !== null) {
        return JSON.parse(sessionStorage.getItem('userInfo'))
      } else {
        return state.userInfo
      }
    }
  },
  mutations,
  actions
})
