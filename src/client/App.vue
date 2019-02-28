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
        <div class="body">
            <div id="main">
                <div class="banner-title news">
                    <div class="banner-title-both">
                        <img class="img-l fl" src="./static/images/news.png" width="30" height="30">
                        <strong class="fl">物联网新闻</strong>
                        <img class="img-r fl" src="./static/images/news.png" width="30" height="30">
                    </div>
                </div>
                <div class="banner-slider">
                    <div class="banner-content fl">
                        <div class="fl">
                            <ul>
                                <li><div><a>三部门发布加强绿色数据中心建设指导意见</a></div></li>
                                <li><div><a>智慧医疗满意度先行 三级公立医院将全部纳入满意度调查平台</a></div></li>
                                <li><div><a>智能家电、信息消费成主力 10部门联合印发《实施方案》推动消费增长</a></div></li>
                                <li><div><a>工信部公示2018年工业互联网APP优秀解决方案 89家企业入选</a></div></li>
                                <li><div><a>三部门发布加强绿色数据中心建设指导意见</a></div></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="banner-box fl">
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
                                            <img src="./static/images/iot01.jpg" width="942" height="405">
                                        </article>
                                        <article>
                                            <div class='caption'>
                                                <bar>智慧医疗满意度先行 三级公立医院将全部纳入满意度调查平台<a href="#">详情</a></bar>
                                            </div>
                                            <img src="./static/images/iot02.jpg" width="942" height="405">
                                        </article>
                                        <article>
                                            <div class='caption'>
                                                <bar>智能家电、信息消费成主力 10部门联合印发《实施方案》推动消费增长<a href="#">详情</a></bar>
                                            </div>
                                            <img src="./static/images/iot03.jpg" width="942" height="405">
                                        </article>
                                        <article>
                                            <div class='caption'>
                                                <bar>工信部公示2018年工业互联网APP优秀解决方案 89家企业入选<a href="#">详情</a></bar>
                                            </div>
                                            <img src="./static/images/iot04.jpg" width="942" height="405">
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
                <div class="main-class">
                    <div class="banner-title video fl">
                        <div class="banner-title-both">
                            <img class="img-l fl" src="./static/images/video.png" width="30" height="30">
                            <strong class="fl">物联网视频</strong>
                            <img class="img-r fl" src="./static/images/video.png" width="30" height="30">
                        </div>
                        <div id="app1" v-cloak>
                            <tabs v-model="activeKey">
                                <pane label="全部" name="1">
                                    <div>
                                        <div class="video-content u-clist">
                                            <div class="fl"><img src="./static/images/video01.png"></div>
                                            <div class="content">
                                                <div class="content-title fl">
                                                    <a>物联网导论</a>
                                                </div>
                                                <div class="content-main fl">
                                                    今年来，物联网技术以“随风潜入夜，润物细无声”的方式正在悄悄的影响着我们的学习、工作和生活，不知不觉间我们已经处在被物联网包围的智慧化时代，什么是物联网？…
                                                </div>
                                            </div>
                                        </div>
                                        <div class="video-content u-clist">
                                            <div class="fl"><img src="./static/images/video02.png"></div>
                                            <div class="content">
                                                <div class="content-title fl">
                                                    <a>物联网工程导论</a>
                                                </div>
                                                <div class="content-main fl">
                                                    是国家战略性新兴产业的重要组成部分，引领了继计算机、互联网之后世界信息产业发展的第三次浪潮。物联网工程是2010年开始设置的战略性新兴产业相关专业。此课…
                                                </div>
                                            </div>
                                        </div>
                                        <div class="video-content u-clist">
                                            <div class="fl"><img src="./static/images/video03.jpg"></div>
                                            <div class="content">
                                                <div class="content-title fl">
                                                    <a>物联网概论</a>
                                                </div>
                                                <div class="content-main fl">
                                                    物联网是非常重要也受到高度关注的议题，主要诉求是"物物联网"或是"万物联网"，就是将全球对象以及各式各样的传感器等等也连上网络，除了数据与数据收集分析外，也可以回馈进行各…                            </div>
                                            </div>
                                        </div>
                                        <div class="video-content u-clist">
                                            <div >
                                                <div class="fl"><img src="./static/images/video04.jpg"></div>
                                                <div class="content">
                                                    <div class="content-title fl">
                                                        <a>物联网工程导论</a>
                                                    </div>
                                                    <div class="content-main fl">
                                                        物联网作为电子信息前沿技术，发展前景十分广阔。本课程由物联网国家共享课程资源库团队精心打造，以丰富、生动的课程资源，为初次接触物联网的您解答…                          </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="video-content u-clist">
                                            <div class="fl"><img src="./static/images/video05.jpg"></div>
                                            <div class="content">
                                                <div class="content-title fl">
                                                    <a>带你揭开神秘的物联网</a>
                                                </div>
                                                <div class="content-main fl">
                                                    今年来，物联网技术以“随风潜入夜，润物细无声”的方式正在悄悄的影响着我们的学习、工作和生活，不知不觉间我们已经处在被
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </pane>
                                <pane label="正在进行" name="2">
                                    标签二的内容
                                </pane>
                                <pane label="即将开始" name="3">
                                    标签三的内容
                                </pane>
                            </tabs>
                        </div>

                    </div>
                    <div class="banner-title other fr">
                        <div class="banner-title-both ">
                            <img class="img-l fl" src="./static/images/other.png" width="30" height="30">
                            <strong class="fl">热门资源</strong>
                            <img class="img-r fl" src="./static/images/other.png" width="30" height="30">
                        </div>
                    </div>
                </div>
                <div class="main-other fr">

                </div>
            </div >
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
import pane from './components/pane'
import tabs from './components/tabs'


export default {
components:{pane,tabs},
  data () {
    return {
      message: 'Express + Vue boilerplate-Konata9',
      columns: [],
      data: [],
      activeKey: '1'
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
