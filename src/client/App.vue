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
                <li><a>首页</a></li>
                <li><a>热门资源</a></li>
                <li><a>教学</a></li>
                <li><a>热点新闻</a></li>
                <li><a>视频教学</a></li>
            </ul>
        </div>
        <div class="header_second_search fl">
            <input type="text" class="search_text">
            <input type="submit" value="搜 索" class="search_btn fr">
        </div>
            <div id="login" class="fr">
                <a href="#">登 录</a>  /  <a href="#">注 册</a>
            </div>
        </div>
    </div>
    <div id="main">
        <div class="banner-title">
            <strong>物联网新闻</strong>
        </div>
        <div class="banner-content">

        </div>
        <div class="banner-box">
            <article id="slider">
                <input class="slider" checked type='radio' name='slider' id='slide1'/>
                <input class="slider" type='radio' name='slider' id='slide2'/>
                <input class="slider" type='radio' name='slider' id='slide3'/>
                <input class="slider" type='radio' name='slider' id='slide4'/>
                <input class="slider" type='radio' name='slider' id='slide5'/>
                <div id="slides">
                    <div id="container">
                        <div class="inner">
                            <article>
                                <div class='caption'>
                                    <bar>三部门发布加强绿色数据中心建设指导意见<a href="#">详情</a></bar>
                                </div>
                                <img src="./static/images/iot01.jpg" width="942" height="400">
                            </article>
                            <article>
                                <div class='caption'>
                                    <bar>智慧医疗满意度先行 三级公立医院将全部纳入满意度调查平台<a href="#">详情</a></bar>
                                </div>
                                <img src="./static/images/iot02.jpg" width="942" height="400">
                            </article>
                            <article>
                                <div class='caption'>
                                    <bar>智能家电、信息消费成主力 10部门联合印发《实施方案》推动消费增长<a href="#">详情</a></bar>
                                </div>
                                <img src="./static/images/iot03.jpg" width="942" height="400">
                            </article>
                            <article>
                                <div class='caption'>
                                    <bar>工信部公示2018年工业互联网APP优秀解决方案 89家企业入选<a href="#">详情</a></bar>
                                </div>
                                <img src="./static/images/iot04.jpg"width="942" height="400">
                            </article>
                            <article>
                                <div class='caption'>
                                    <bar>三部门发布加强绿色数据中心建设指导意见<a href="#">详情</a></bar>
                                </div>
                                <img src="./static/images/iot05.jpg" width="942" height="400">
                            </article>
                        </div>
                    </div>
                </div>
                <div id="commands">
                    <label for='slide1'></label>
                    <label for='slide2'></label>
                    <label for='slide3'></label>
                    <label for='slide4'></label>
                    <label for='slide5'></label>
                </div>
                <div id="active">
                    <label for='slide1'></label>
                    <label for='slide2'></label>
                    <label for='slide3'></label>
                    <label for='slide4'></label>
                    <label for='slide5'></label>
                </div>
            </article>
        </div>
    </div>
    <div id="footer"></div>
</div>
 <div class="app full-height">
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
