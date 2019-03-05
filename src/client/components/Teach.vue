<template>
<div>
    <div id="teach">
        <div class="teach-nav">
                <my-nav v-model="content">

                </my-nav>
        </div>
        <div class="teach-page">
            <div class="teach-title">
                <div class="teach-title-txt fl">实训1：门磁传感器ZigBee无线网络实训</div>
                <div class="teach-user fr"></div>
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
                ]
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
}
</script>
