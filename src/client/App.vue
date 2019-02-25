<template>
<div>
<div id="index">
    <div id="header" >
        <div id="logo" class="fl">
            <a class="logo-a" title="物联网教学">
            <img src="./static/images/logo.png" width="100px" height="100px">
            <div class="fr logo-font">
                <span class="logo-font-strong"><strong>物联网教学</strong></span><br/>
                <span>IoT Teaching Platform</span>
            </div>
            </a>
        </div>
        <div id="nav" class="menu fl">
            <ul>
                <li><a>首页</a></li>
                <li><a>热门资源</a></li>
                <li><a>教师团队</a></li>
                <li><a>热点新闻</a></li>
                <li><a>视频教学</a></li>
            </ul>
        </div>
        <div><input type="text"></div>
        <div id="login"></div>
    </div>
    <div id="main">

    </div>
    <div id="footer"></div> 
</div>
 <div class="app full-height">
    <img src="./static/images/logo.png">
    <h1>{{ message }}</h1>
   {{data}}{{columns}}
    <router-link :to="{ name: 'hello' }">Goto Hello</router-link>
    <router-link :to="{ name: 'teach' }">Goto teach</router-link>
    <router-view></router-view>
<a href="http://192.168.227.10:4000/about.html">trun to about</a>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Express + Vue boilerplate-Konata9',
      columns: [],
      data: []
    }
  },
        mounted (){
var self = this;
    this.$axios
.get('http://192.168.227.10:4000/api/data')
.then(function(response){
self.data = response.data.data;
self.columns = response.data.columns;
});
}
}
</script>

<style>
@import './static/css/reset.css';
@import './static/css/index.css';
</style>
