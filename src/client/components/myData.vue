<template>
<div class="teach-data-axios"> 
   <div class="teach-node-img fl"> 
    <div class="teach-node-img-content" v-for="itemimg in value[0].img">
     <img :src="itemimg" />
    </div> 
   </div> 
   <div class="teach-data-name fl"> 
    <div class="teach-data-name-content " v-for="(itemname) in value[0].name"> 
     <div v-for="(itemn,key) in itemname">
      <div :class="right(itemn)">
       {{itemn}}
      </div>
     </div> 
    </div> 
   </div> 
   <div class="teach-data-data fl"> 
    <div class="teach-data-data-content" v-for="(itemdata) in value[0].data"> 
     <div v-for="itemd in itemdata">
      <div :class="right(itemd)">
       {{itemd}}
      </div>
     </div> 
    </div> 
   </div> 
  </div>
</template>

<script>
export default{
 props:['value'],
 methods:{
            right: function (itemd) {
                if(itemd==='正常'||itemd==='已连接'){return 'right'}
                else if(itemd==='关闭'||itemd==='未连接'){return 'error'}
            }
        }

}
</script>
