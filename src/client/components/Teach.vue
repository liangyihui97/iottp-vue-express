<template>
<div class="main">
<div style="height: 500px;" id="canvas"></div>
<qunee-js src="./js/qunee.js">
</qunee-js>
<div id="teach" v-cloak>
                <div class="teach-nav">
                    <div class="teach-logo fl" @click="goIndex">
                        <div class="teach-logo-a" title="物联网教学" >
                            <img  class="fl" src="../static/images/logo.png" width="80" height="80">
                            <div class="fl teach-logo-font">
                                <span class="teach-logo-font-strong"><strong>物联网教学</strong></span><br/>
                                <span style="font-size: 10px">IoT Teaching Platform</span>
                            </div>
                        </div>
                    </div>
                    <my-nav v-model="content" class="fl">

                    </my-nav>
                </div>
		<div class="teach-page">
                    <div class="title ">
                        <div class="teach-select " v-clickoutside="handleClose"@mouseover="show=true">
                            <img src="../static/images/select.png" width="34" height="34" alt="选择课程" title="选择课程">
                            <div class="teach-select-text fr">选择课程</div>
                            <div class="dropdown" v-show="show">
                                <p><a href="#">实训1</a></p>
                                <p><a href="#">实训2</a></p>
                                <p><a href="#">实训3</a></p>
                                <p><a href="#">实训4</a></p>
                                <p><a href="#">实训5</a></p>
                                <p><a href="#">实训6</a></p>
                                <p><a href="#">实训7</a></p>
                                <p><a href="#">实训8</a></p>
                                <p><a href="#">实训9</a></p>
                                <p><a href="#">实训10</a></p>
                                <p><a href="#">实训11</a></p>
                                <p><a href="#">实训12</a></p>
                                <p><a href="#">实训13</a></p>
                                <p><a href="#">实训14</a></p>
                            </div>
                        </div>
                        <div class="teach-title-txt "><strong>实训1：门磁传感器ZigBee无线网络实训</strong></div>
                        <div class="teach-user fr"></div>
                    </div>
                    <div class="teach-console">
                        <div class="teach-title">
                            拓扑界面
                        </div>

                        <div class="teach-console-test">
                            <a href="#" @click="getData">连线完成，点击测试</a><img class="fr" src="../static/images/test.png" width="20px" height="auto">
                        </div>
                        <div class="teach-console-submit">
                            <a href="#">测试完成，提交结果</a><img class="fr" src="../static/images/submit.png" width="20px" height="auto">
                        </div>
                    </div>
                    <div class="teach-structure">
                        <div class="teach-title">
                            网络结构
                        </div>
                        <div class="teach-structure-network">
                            <img src="../static/images/network.png" width="450"height="auto">
                        </div>
                    </div>
                    <div class="teach-data">
                        <div class="teach-title">
                            设备检测
                        </div>
                        <my-data v-model="apiData">
                        </my-data>
                    </div>
                    <div class="teach-chart">
                        <div class="teach-title">
                            可视化
                        </div>
                        <div class="mychart fl" id="myChart" :style="{width: '550px', height: '300px'}"></div>
			<div class="mychart fl" id="myChart2" :style="{width: '550px', height: '300px'}"></div>
                    </div>
		    <div class="teach-info">
		        <div class="teach-title">
                            产品说明
                        </div>
			<div>
				
产品型号	
HS1GW智能网关

工作电压	AC100V~240V
平均功耗	≤0.5W
报警电流	≤30mA
联网方式	ZigBee自组网
无线组网距离 	≤100米(空旷环境)
工作温度	-10℃~+50℃
环境湿度	最大95%RH
A 外形尺寸	122*122*52mm
B 产品尺寸	70*70*53mm
			</div>
		    </div>
                </div>
            </div>
</div>
</template>

<script>
import myNav from './nav'
import myData from './myData'

export default {
components:{
	myNav,
	myData,
	'qunee-js': {
                render(createElement) {
                    return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
                },
                props: {
                    src: { type: String, required: true },
                },
            }
},
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      columns: [],
      data: [],
      data2: [],
      content:[
                {
                    content: '仪表盘',
                    img: require('../static/images/01nav.png')
                },
                {
                    content:'设备管理',
                    img: require('../static/images/02nav.png')
                },
                {
                    content:'教学内容',
                    img: require('../static/images/03nav.png'),
		    texts:['基础实训模块','智能家居实训模块','工业级实训模块']
                }
                ],
      show: false,
      apiData:[{'img':[],'name':[],'data':[]}]
    }
  },
    mounted (){
setInterval(() =>{
var self = this;
    this.$axios.get('http://192.168.227.10:4000/api/data').then(function(response){
	self.data = response.data
}).catch(function(error){
console.log(error);
});
},200000)

this.drawLine();

//this.$axios.get('/v2/music/search?q=周杰伦',).then(function (response) {
//        self.data2 = response.data.musics;
//    })
  //  .catch(function (error) {
    //    console.log(error);
   // })

//qunee method 1
// const s = document.createElement('script');
//s.type = 'text/javascript';
//s.src = './js/qunee.js';
//document.getElementById("canvas").appendChild(s);
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
    methods:{
        handleClose: function () {
                this.show = false;
            },
    	goIndex: function(){
		this.$router.replace({name: 'index'});
	    },
getData:function(){
setInterval(() =>{
	var self = this;
    this.$axios.get('http://192.168.227.10:4000/api/data1').then(function(response){
	self.data = response.data.data;
	self.columns = response.data.columns;
	self.apiData = response.data.apiData;
});},4000)
    },
drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'),'light')
        // 绘制图表
        myChart.setOption({
            title: { text: 'HS1DS-E信息图表' ,textstyle:{color:'#888888',},left:'center' },
            tooltip: {},
            xAxis: {
                data: ["开合次数","工作时间(h)","数量","上行(Kb/s)","下行(Kb/s)"]
            },
            yAxis: {},
            series: [{
                name: '参数',
                type: 'bar',
                data: [5, 20, 2, 10, 20]
            }]
        });
var myChart2 = this.$echarts.init(document.getElementById('myChart2'),'light');
        myChart2.setOption({title: { text: '历史平均速率(kb/s)' ,textstyle:{color:'#888888',},left:'center' },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [19, 12, 20, 15, 18, 15, 19],
            type: 'line',
            areaStyle: {}
        }]
    });
    }
	
}
}
</script>
