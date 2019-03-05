<template>
<div>
    <div id="teach">
        <div class="teach-nav">
            <div class="nav-class">
                <myNav v-model="content">

                </myNav>
            </div>
        </div>
        <div class="teach-page">

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
                    img: require('../static/images/03nav.png')
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
