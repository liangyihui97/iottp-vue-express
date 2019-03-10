import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Index from './../components/Index'
import Teach from './../components/Teach'
import Login from './../components/Login'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {path: '/',redirect: '/index'},
    {name: 'login',path:'/login',component: Login},
    {name: 'index', path: '/index', component: Index },
    {name: 'teach', path: '/teach', component: Teach },
    {path: '*',redirect: '/'}
  ]
})

export default router
