<template>
<div id="index"> 
   <div id="header" v-if="$route.name=='index' || $route.name=='usercenter'"> 
    <div id="header_top"> 
     <div id="logo" class="fl"> 
      <a class="logo-a" title="物联网教学"> <img class="fl" src="./static/images/logo.png" width="80" height="80" /> 
       <div class="fl logo-font"> 
        <span class="logo-font-strong"><strong>物联网教学</strong></span>
        <br /> 
        <span style="font-size: 10px">IoT Teaching Platform</span> 
       </div> </a> 
     </div> 
     <div id="nav" class="menu fl"> 
      <ul> 
       <li>
        <router-link :to="{ name: 'index' }">
         首页
        </router-link></li> 
       <li><a>热门资源</a></li> 
       <li>
        <a v-clickoutside="handleClose" @mouseover="show=true">
         教学<div class="select" v-show="show"> 
       <router-link :to="{ name: 'teach1-1' }">
         实训基础
        </router-link>
<router-link :to="{ name: 'teach2-1' }">
         实训进阶
        </router-link>
       </div> 
        </a></li> 
       <li><a>热点新闻</a></li> 
       <li><a>视频教学</a></li> 
      </ul> 
     </div> 
     <div class="header_second_search fl"> 
      <input type="text" class="search_text" /> 
      <input type="submit" value="" class="search_btn fr" /> 
     </div>
<router-link :to="{ name: 'usercenter' }" v-if="user" class="header-entry">个人中心</router-link>
<div class="header-btn" v-else=""> <el-button type="primary" @click="login">
       点击登录
      </el-button> 
</div>
     <div id="login" class="fr" v-clickoutside="handleClose1" @mouseover="show1=true"> 
<img class="login-img" v-if="user" src="./static/images/user.jpg" > 

<div class="header-nav" v-show="show1">
<img class="header-nav-img" src="./static/images/up.png">
<div class="header-user">
      <span v-if="user"> 
       <div class="uesrname fl">
        {{user.name+' '}}
       </div> 
       <el-button type="warning" plain="" @click="logout" size="small">
        注销
       </el-button> </span> 
      <el-button v-else="" type="primary" @click="login">
       点击登录
      </el-button> 
</div>
</div>
     </div> 
    </div> 
   </div> 
   <router-view></router-view> 
   <div id="footer" v-if="$route.name=='index'"> 
    <div class="footer-logo fl "> 
     <a class="footer-logo-a" title="物联网教学"> <img class="fl" src="./static/images/logo.png" width="80" height="80" /> 
      <div class="fl logo-font"> 
       <span class="logo-font-strong"><strong>物联网教学</strong></span>
       <br /> 
       <span style="font-size: 10px">IoT Teaching Platform</span> 
      </div> </a> 
    </div> 
    <div class="introduce">
      梁艺晖的毕业设计，基于Vue.js的物联网用户平台前端页面开发，使用技术有Vue.js、Express... 
    </div> 
    <div class="copyright"> 
     <a>Copyright &copy; 2018 - 2019 lyh-GDUT.</a> 
    </div> 
   </div> 
  </div>
</template>

<script>
export default {
        methods:
        {
            login() {
                this.$router.push('/login')
            },
            logout() {
                this.$store.dispatch('logout').then(() =>{
                    //this.$router.push('/login')
                })
            },
handleClose: function () {
                this.show = false;
            },
handleClose1: function () {
                this.show1 = false;
            },
        },
        computed: {
            user() {
        if (!this.$store.state.isLogin) {    
            this.$store.state.isLogin=sessionStorage.getItem('isLogin');   //从sessionStorage中读取状态
            this.$store.state.user=JSON.parse(sessionStorage.getItem('user'));
        }
        return this.$store.state.user

    }
        },
        data() {
            return {
                message: 'Express + Vue boilerplate-Konata9',
show: false,
show1: false
            }
        },
      directives: {
       clickoutside:{
	    bind: function (el, binding, vnode) {
            function documentHandler(e) {
                if(el.contains(e.target)){
                    return false;
                }
                if(binding.expression){//判断的是当前的指令 v-clickoutside 有没有写表达式，
                    binding.value(e);//用来执行当前上下文 methods 中指定的函数。
                }
            }
            el.__vueClickOutside__=documentHandler;//documentHandler的引用
            document.addEventListener('mouseover',documentHandler);
        },
        unbind: function (el, binding, vnode) {
            document.removeEventListener('mouseover',el.__vueClickOutside__);//因为自定义指令中不能用this.documentHandler
            delete el.__vueClickOutside__;
        }	
	} 
   },
    };
</script>
<style>
@import './static/css/reset.css';
@import './static/css/index.css';
</style>
