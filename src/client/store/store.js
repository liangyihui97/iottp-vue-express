import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: undefined
  },
  mutations: {
    login (state, payload) {
            console.log(JSON.stringify(payload))
sessionStorage.setItem("user", JSON.stringify(payload));  //添加到sessionStorage
        sessionStorage.setItem("isLogin",true);
state.user = payload
 state.isLogin=true
        },
  logout (state) {
sessionStorage.removeItem("user");  //移除sessionStorage
        sessionStorage.removeItem("isLogin");
            state.user = undefined
 state.isLogin=false
        }
  },
  actions: {
    login (context, payload) {
            context.commit('login', payload)
        },
    logout (context) {
            context.commit('logout')
        }
  }
})

export default store
