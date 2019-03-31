import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: undefined
    },
    mutations: {
        login(state, payload) {
            sessionStorage.setItem("user", JSON.stringify(payload)); //添加到sessionStorage
            sessionStorage.setItem("isLogin", true);
            state.user = payload 
            state.isLogin = true

        },
        logout(state) {
            sessionStorage.removeItem("user"); //移除sessionStorage
            sessionStorage.removeItem("isLogin");
            state.user = ''
            state.isLogin = false
console.log(state.isLogin)
        }
    },
    actions: {
        login(context, payload) {
            context.commit('login', payload)
        },
        logout(context) {
            context.commit('logout')
        }
    }
})

export default store
