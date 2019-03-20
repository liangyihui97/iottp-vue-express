import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'
import axios from 'axios'
import echarts from 'echarts'


import  './element'
import './theme/element/index.css'

Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts 

new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
})


