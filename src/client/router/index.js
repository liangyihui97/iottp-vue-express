import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Index from './../components/Index'
import Teach0101 from './../components/Teach0101'
import Teach0201 from './../components/Teach0201'
import Login from './../components/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/',redirect: '/index'},
    {name: 'login',path:'/login',component: Login},
    {name: 'index', path: '/index', component: Index },
    {name: 'teach1-1', path: '/teach/train/1/1', component: Teach0101,},
    {name: 'teach2-1', path: '/teach/train/2/1', component: Teach0201,}
	]
})

export default router
