<template>
<div>
<div id="teach">
                <div class="teach-nav">
                    <my-nav v-model="content">

                    </my-nav>
                </div>
                <div class="teach-page">
                    <div class="teach-title">
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
                        <div class="teach-title-txt ">实训1：门磁传感器ZigBee无线网络实训</div>
                        <div class="teach-user fr"></div>
                    </div>
			<div class="teach-console">
                        <div class="teach-console-title">
                            拓扑界面
                        </div>
                    </div>
                    <div class="teach-structure">
                        <div class="teach-structure-title">
                            网络结构
                        </div>
                    </div>
                    <div class="teach-data">
                        <div class="teach-data-title">
                            设备检测
                        </div>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
import myNav from './nav'
export default {
components:{myNav},
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
                    content:'财产管理',
                    img: require('../static/images/02nav.png')
                },
                {
                    content:'教学内容',
                    img: require('../static/images/03nav.png'),
		    texts:['基础实训模块','智能家居实训模块','工业级实训模块']
                }
                ],
      show: false
    }
  },
    mounted (){
    var self = this;
    this.$axios.get('http://192.168.227.10:4000/api/data').then(function(response){
	self.data = response.data.data;
	self.columns = response.data.columns;
});
//this.$axios.get('/v2/music/search?q=周杰伦',).then(function (response) {
//        self.data2 = response.data.musics;
//    })
  //  .catch(function (error) {
    //    console.log(error);
   // })
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
            }
    }
}
</script>
