import axios from 'axios'
import apiList from '../assets/js/api'

export default {
  getUserInfo ({ commit }) {
    // eslint-disable-next-line
    axios.get(apiList.displayInfo)
      .then(res => {
        if (res.data) {
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
          commit('changeUserInfo', res.data.data)
        }
      })
  }
}
