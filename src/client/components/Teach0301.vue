<template>
<div class="main"> 
   <div style="height: 500px;" id="canvas"></div> 
   <qunee-js src="http://192.168.227.10:4000/js/qunee0301.js"> 
   </qunee-js> 
   <div id="teach" v-cloak=""> 
    <div class="teach-nav"> 
     <div class="teach-logo fl" @click="goIndex"> 
      <div class="teach-logo-a" title="物联网教学"> 
       <img class="fl" src="../static/images/logo.png" width="80" height="80" /> 
       <div class="fl teach-logo-font"> 
        <span class="teach-logo-font-strong"><strong>物联网教学</strong></span>
        <br /> 
        <span style="font-size: 10px">IoT Teaching Platform</span> 
       </div> 
      </div> 
     </div> 
     <my-nav v-model="content" class="fl"> 
     </my-nav> 
    </div> 
    <div class="teach-page"> 
     <div class="title "> 
      <div class="teach-select fl" v-clickoutside="handleClose" @mouseover="show=true"> 
       <img src="../static/images/select.png" width="34" height="34" alt="选择课程" title="选择课程" /> 
       <div class="teach-select-text fr">
        选择课程
       </div> 
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
      <div class="teach-title-txt fl">
       <strong>实训3-1：汇川工控与智能网关网络实训</strong>
      </div> 
      <div class="teach-user fr">
<div class="teach-login fr" >
                <span v-if="user"> <div class="uesrname fl">{{user.name+' '}}</div>
            <el-button  type="warning" plain @click="login">注销</el-button>
        </span>
        <el-button v-else type="primary" @click="login" >点击登录</el-button>
            </div>
</div> 
     </div> 
     <div class="teach-console"> 
      <div class="teach-title">
        拓扑界面 
      </div> 
      <div class="teach-console-test"> 
       <a href="#" @click="getData">连线完成，点击测试</a>
       <img class="fr" src="../static/images/test.png" width="20px" height="auto" /> 
      </div> 
      <div class="teach-console-submit"> 
       <a href="#">测试完成，提交结果</a>
       <img class="fr" src="../static/images/submit.png" width="20px" height="auto" /> 
      </div> 
     </div> 
     <div class="teach-structure"> 
      <div class="teach-title">
        网络结构 
      </div> 
      <div class="teach-structure-network"> 
       <img src="../static/images/network0301.png" width="450" height="auto" /> 
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
     <div class="teach-info-content">
      <table border="1" class="gridtable"> 
       <tbody>
        <tr> 
         <td>产品型号 </td> 
         <td>HS1GW智能网关</td> 
         <td>工作电压 </td> 
         <td>AC100V~240V</td> 
        </tr> 
        <tr> 
         <td>报警电流 </td> 
         <td>≤30mA</td> 
         <td>联网方式 </td> 
         <td>ZigBee自组网</td> 
        </tr> 
        <tr> 
         <td>无线组网距离 </td> 
         <td>≤100米(空旷环境)</td> 
         <td>工作温度 </td> 
         <td>-10℃~+50℃</td> 
        </tr> 
        <tr> 
         <td>环境湿度 </td> 
         <td>最大95%RH</td> 
         <td>A 外形尺寸 </td> 
         <td>122*122*52mm</td> 
        </tr> 
        <tr> 
         <td>B 产品尺寸 </td> 
         <td>70*70*53mm</td>
         <td></td> 
         <td></td> 
        </tr>
       </tbody>
      </table>
<table border="1" class="gridtable">
    <tr>
        <td>产品型号	</td>
        <td>HS1DS智能门磁探测器</td>
        <td>工作电压	</td>
        <td>DC3V</td>
    </tr>
    <tr>
        <td>探测角度	</td>
        <td>110º</td>
        <td>探测距离	</td>
        <td>≥20mm</td>
    </tr>
    <tr>
        <td>报警电流	</td>
        <td>≤5uA</td>
        <td>联网方式	</td>
        <td>ZigBee自组网</td>
    </tr>

    <tr>
        <td>无线组网距离	</td>
        <td>≤100米(空旷环境)</td>
        <td>工作温度	</td>
        <td>-10℃~+50℃</td>
    </tr>

    <tr>
        <td>环境湿度	</td>
        <td>最大95%RH</td>
        <td>探测器尺寸		</td>
        <td>60*30*11.8mm</td>
    </tr>
    <tr>
        <td>磁体尺寸		</td>
        <td>65*13*12.5mm</td>
        <td></td>
        <td></td>
    </tr>
</table> 
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
      apiData:[{'img':[[]],'name':[[]],'data':[[]]}]
    }
  },
    mounted (){
setInterval(() =>{
var self = this;
    this.$axios.get('http://192.168.227.10:4000/api/data1').then(function(response){
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
login() {
        this.$router.push('/login')
    },
    logout() {
        this.$store.dispatch('logout').then(() =>{
            this.$router.push('/login')
        })
    },
        handleClose: function () {
                this.show = false;
            },
    	goIndex: function(){
		this.$router.replace({name: 'index'});
	    },
getData:function(){
setInterval(() =>{
	var self = this;
    this.$axios.get('http://192.168.227.10:4000/api/data').then(function(response){
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
	
},
computed: {
    user() {
        return this.$store.state.user
    }
},
}
</script>
