import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Index from './../views/Index'
import Teach0101 from './../views/Teach0101'
import Teach0201 from './../views/Teach0201'
import Teach0301 from './../views/Teach0301'
import Login from './../views/Login'
import Register from './../views/Register'
import Usercenter from './../views/Usercenter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/',redirect: '/index'},
    {name: 'login',path:'/login',component: Login},
    {name: 'regist',path:'/regist',component: Register},
    {name: 'index', path: '/index', component: Index },
    {name: 'teach1-1', path: '/teach/train/1/1', component: Teach0101,},
    {name: 'teach2-1', path: '/teach/train/2/1', component: Teach0201,},
    {name: 'teach3-1', path: '/teach/train/3/1', component: Teach0301,},
    {name: 'usercenter', path: '/usercenter', component: Usercenter,}
   ]
})

export default router
