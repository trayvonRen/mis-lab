import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

// elmentUI 框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 粒子特效
import VueParticles from 'vue-particles'

// 动画库
import animated from 'animate.css'

// 通用样式
import './common/styles/reset.css'
import './assets/icon/iconfont.css'
import './common/styles/scrollbar.css'

// axios
import axios from 'axios'

// axios.defaults.baseURL = 'http://172.22.1.114:8081'
axios.defaults.baseURL = 'http://172.22.1.241:8081'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

Vue.use(animated)
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
