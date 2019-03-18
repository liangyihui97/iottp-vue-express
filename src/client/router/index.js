import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Index from './../components/Index'
import Teach from './../components/Teach'
import Login from './../components/Login'
import Train from './../components/Train'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {path: '/',redirect: '/index'},
    {name: 'login',path:'/login',component: Login},
    {name: 'index', path: '/index', component: Index },
    {name: 'teach', path: '/teach', component: Teach,
children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '/train/:id', component: Train },

        // ...其他子路由
      ] }]
})

export default router
