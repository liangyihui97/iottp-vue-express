<template>
    <div class="body">
        <div id="main">
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
                                        <img src="../static/images/iot01.jpg" width="942" height="405">
                                    </article>
                                    <article>
                                        <div class='caption'>
                                            <bar>智慧医疗满意度先行 三级公立医院将全部纳入满意度调查平台<a href="#">详情</a></bar>
                                        </div>
                                        <img src="../static/images/iot02.jpg" width="942" height="405">
                                    </article>
                                    <article>
                                        <div class='caption'>
                                            <bar>智能家电、信息消费成主力 10部门联合印发《实施方案》推动消费增长<a href="#">详情</a></bar>
                                        </div>
                                        <img src="../static/images/iot03.jpg" width="942" height="405">
                                    </article>
                                    <article>
                                        <div class='caption'>
                                            <bar>工信部公示2018年工业互联网APP优秀解决方案 89家企业入选<a href="#">详情</a></bar>
                                        </div>
                                        <img src="../static/images/iot04.jpg" width="942" height="405">
                                    </article>
                                    <article>
                                        <div class='caption'>
                                            <bar>三部门发布加强绿色数据中心建设指导意见<a href="#">详情</a></bar>
                                        </div>
                                        <img src="../static/images/iot05.jpg" width="942" height="400">
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
                        <img class="img-l fl" src="../static/images/video.png" width="40" height="40">
                        <strong class="fl">教学视频</strong>
                    </div>
                    <div id="app" v-cloak>
                        <tabs v-model="activeKey">
                            <pane label="全部视频" name="1">
                                <div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video01.png"></div>
                                        <div class="content">
                                            <div class="content-title ">
                                                <a>物联网导论</a>
                                            </div>
                                            <div class="content-main ">
                                                今年来，物联网技术以“随风潜入夜，润物细无声”的方式正在悄悄的影响着我们的学习、工作和生活，不知不觉间我们已经处在被物联网包围的智慧化时代，什么是物联网？…
                                            </div>
                                            <div class="content-time">
                                                2019-02-08 开课
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video02.png"></div>
                                        <div class="content">
                                            <div class="content-title ">
                                                <a>物联网工程导论</a>
                                            </div>
                                            <div class="content-main ">
                                                是国家战略性新兴产业的重要组成部分，引领了继计算机、互联网之后世界信息产业发展的第三次浪潮。物联网工程是2010年开始设置的战略性新兴产业相关专业。此课…
                                            </div>
                                            <div class="content-time">
                                                2019-01-12 开课
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video03.jpg"></div>
                                        <div class="content">
                                            <div class="content-title ">
                                                <a>物联网概论</a>
                                            </div>
                                            <div class="content-main ">
                                                物联网是非常重要也受到高度关注的议题，主要诉求是"物物联网"或是"万物联网"，就是将全球对象以及各式各样的传感器等等也连上网络，除了数据与数据收集分析外，也可以回馈进行各…
                                            </div>
                                            <div class="content-time">
                                                2019-04-08 开课
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div >
                                            <div class="video-img fl"><img src="../static/images/video04.jpg"></div>
                                            <div class="content">
                                                <div class="content-title ">
                                                    <a>物联网工程导论</a>
                                                </div>
                                                <div class="content-main ">
                                                    物联网作为电子信息前沿技术，发展前景十分广阔。本课程由物联网国家共享课程资源库团队精心打造，以丰富、生动的课程资源，为初次接触物联网的您解答…
                                                </div>
                                            </div>
                                            <div class="content-time">
                                                2019-04-08 开课
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video05.jpg"></div>
                                        <div class="content">
                                            <div class="content-title ">
                                                <a>带你揭开神秘的物联网</a>
                                            </div>
                                            <div class="content-main ">
                                                今年来，物联网技术以“随风潜入夜，润物细无声”的方式正在悄悄的影响着我们的学习、工作和生活，不知不觉间我们已经处在被
                                            </div>
                                            <div class="content-time">
                                                2019-04-08 开课
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </pane>
                            <pane label="正在进行" name="2">

                                <div>
                                </div>
                                <div class="video-content u-clist">
                                    <div class="video-img fl"><img src="../static/images/video02.png"></div>
                                    <div class="content">
                                        <div class="content-title ">
                                            <a>物联网工程导论</a>
                                        </div>
                                        <div class="content-main ">
                                            是国家战略性新兴产业的重要组成部分，引领了继计算机、互联网之后世界信息产业发展的第三次浪潮。物联网工程是2010年开始设置的战略性新兴产业相关专业。此课…
                                        </div>
                                        <div class="content-time">
                                            2019-04-08 开课
                                        </div>
                                    </div>
                                </div>
                                <div class="video-content u-clist">
                                    <div class="video-img fl"><img src="../static/images/video03.jpg"></div>
                                    <div class="content">
                                        <div class="content-title ">
                                            <a>物联网概论</a>
                                        </div>
                                        <div class="content-main ">
                                            物联网是非常重要也受到高度关注的议题，主要诉求是"物物联网"或是"万物联网"，就是将全球对象以及各式各样的传感器等等也连上网络，除了数据与数据收集分析外，也可以回馈进行各…
                                        </div>
                                        <div class="content-time">
                                            2019-04-08 开课
                                        </div>
                                    </div>
                                </div>
                                <div class="video-content u-clist">
                                    <div class="video-img fl"><img src="../static/images/video01.png"></div>
                                    <div class="content">
                                        <div class="content-title ">
                                            <a>物联网导论</a>
                                        </div>
                                        <div class="content-main ">
                                            今年来，物联网技术以“随风潜入夜，润物细无声”的方式正在悄悄的影响着我们的学习、工作和生活，不知不觉间我们已经处在被物联网包围的智慧化时代，什么是物联网？…
                                        </div>
                                        <div class="content-time">
                                            2019-04-08 开课
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div >
                                            <div class="video-img fl"><img src="../static/images/video04.jpg"></div>
                                            <div class="content">
                                                <div class="content-title ">
                                                    <a>物联网工程导论</a>
                                                </div>
                                                <div class="content-main ">
                                                    物联网作为电子信息前沿技术，发展前景十分广阔。本课程由物联网国家共享课程资源库团队精心打造，以丰富、生动的课程资源，为初次接触物联网的您解答…
                                                </div>
                                                <div class="content-time">
                                                    2019-04-08 开课
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video05.jpg"></div>
                                        <div class="content">
                                            <div class="content-title ">
                                                <a>带你揭开神秘的物联网</a>
                                            </div>
                                            <div class="content-main ">
                                                今年来，物联网技术以“随风潜入夜，润物细无声”的方式正在悄悄的影响着我们的学习、工作和生活，不知不觉间我们已经处在被
                                            </div>
                                            <div class="content-time">
                                                2019-04-08 开课
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </pane>
                            <pane label="即将开始" name="3">
                                <div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video05.jpg"></div>
                                        <div class="content">
                                            <div class="content-title">
                                                <a>带你揭开神秘的物联网</a>
                                            </div>
                                            <div class="content-main">
                                                今年来，物联网技术以“随风潜入夜，润物细无声”的方式正在悄悄的影响着我们的学习、工作和生活，不知不觉间我们已经处在被
                                            </div>
                                            <div class="content-time">
                                                2019-04-08 开课
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video01.png"></div>
                                        <div class="content">
                                            <div class="content-title ">
                                                <a>物联网导论</a>
                                            </div>
                                            <div class="content-main ">
                                                今年来，物联网技术以“随风潜入夜，润物细无声”的方式正在悄悄的影响着我们的学习、工作和生活，不知不觉间我们已经处在被物联网包围的智慧化时代，什么是物联网？…
                                            </div>
                                            <div class="content-time">
                                                2019-04-08 开课
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video02.png"></div>
                                        <div class="content">
                                            <div class="content-title ">
                                                <a>物联网工程导论</a>
                                            </div>
                                            <div class="content-main ">
                                                是国家战略性新兴产业的重要组成部分，引领了继计算机、互联网之后世界信息产业发展的第三次浪潮。物联网工程是2010年开始设置的战略性新兴产业相关专业。此课…
                                            </div>
                                            <div class="content-time">
                                                2019-04-08 开课
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div class="video-img fl"><img src="../static/images/video03.jpg"></div>
                                        <div class="content">
                                            <div class="content-title ">
                                                <a>物联网概论</a>
                                            </div>
                                            <div class="content-main ">
                                                物联网是非常重要也受到高度关注的议题，主要诉求是"物物联网"或是"万物联网"，就是将全球对象以及各式各样的传感器等等也连上网络，除了数据与数据收集分析外，也可以回馈进行各…
                                            </div>
                                            <div class="content-time">
                                                2019-04-08 开课
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-content u-clist">
                                        <div >
                                            <div class="video-img fl"><img src="../static/images/video04.jpg"></div>
                                            <div class="content">
                                                <div class="content-title ">
                                                    <a>物联网工程导论</a>
                                                </div>
                                                <div class="content-main ">
                                                    物联网作为电子信息前沿技术，发展前景十分广阔。本课程由物联网国家共享课程资源库团队精心打造，以丰富、生动的课程资源，为初次接触物联网的您解答…
                                                </div>
                                                <div class="content-time">
                                                    2019-04-08 开课
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </pane>
                        </tabs>
                    </div>

                </div>


                <div class="banner-title other fr">
                    <div class="banner-title-both  ">
                        <img class="img-l fl" src="../static/images/other.png" width="40" height="40">
                        <strong class="fl">热门资源</strong>
                    </div>
                    <div class="data-all">
                        <template v-for="txt in txts">
                            <div class="data fl">
                                <a>
                                    <img :src="txt.src" width="20" height="20" class="fl">
                                    <div class="fl">
                                        {{txt.content}}
                                    </div>
                                </a>
                            </div>
                        </template>

                    </div>
                </div>
            </div>
            <div class="main-other fr">

            </div>
        </div>
    </div>
</template>

<script>
import pane from './pane'
import tabs from './tabs'
    export default {
components:{pane,tabs},
        data () {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                msg: 'Hello World!',
                activeKey: '1',
                txts:[
                    {
                        src:require('../static/images/01xls.png'),
                        content: '物联网教学表格.xls'
                    },
                    {
                        src:require('../static/images/02doc.png'),
                        content: '物联网教学文档资料.txt'
                    },

                    {
                        src:require('../static/images/03pdf.png'),
                        content: '物联网导论.pdf'
                    },
                    {
                        src:require("../static/images/04ppt.png"),
                        content: '物联网教学.ppt'
                    }
                ]
            }
        }
    }
</script>
