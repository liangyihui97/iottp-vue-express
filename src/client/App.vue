<template>
<div>
    <div id="index">
        <div id="header" >
            <div id="header_top">
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
                        <li><router-link :to="{ name: 'index' }">首页</router-link></li>
                        <li><a>热门资源</a></li>
                        <li><router-link :to="{ name: 'teach' }">教学</router-link></li>
                        <li><a>热点新闻</a></li>
                        <li><a>视频教学</a></li>
                    </ul>
                </div>
                <div class="header_second_search fl">
                    <input type="text" class="search_text">
                    <input type="submit" value="" class="search_btn fr">
                </div>
                <div id="login" class="fr">
                    <a href="#">登 录</a>  /  <a href="#">注 册</a>
                </div>
            </div>
        </div>
   <router-view></router-view>
        
	
        <div id="footer">

	</div>
    </div>
 <div class="app full-height">
    <h1>{{ message }}</h1>
   {{data}}{{columns}}
   

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
      data: [],
      
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
},

};

</script>
<style>
@import './static/css/reset.css';
@import './static/css/index.css';
</style>
