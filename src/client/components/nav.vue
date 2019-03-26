<template>
<ul class="nav">
            <li
            v-for="(item,index) in value"
            :class="navCls(index)"
            :style="height(index)"
            @click="handleChange(index)">
            <img :src="item.img" height="25" width="25" class="fl">
            <div class="nav-text fl">{{item.content}}</div>
            <ul class="fl">
            <li class="nav-text-sub"v-for="(text,index) in item.texts"
            :style="visibility(index)"
            @click.stop="handleaChange(index)"><a :class="navaCls(index)">{{text}}</a></li></ul>
            </li>
</ul>
</template>
<script>
export default{
          props:['value'],
        data: function(){
            return {
                currentValue: 2,
                currentAvalue: 0,
                showtext: 2
            }
        },
        methods:{
            /*点击聚焦或失焦*/
            handleChange: function (index) {
                if(this.currentValue !== index) {
                    this.currentValue = index;
                }else{
                    this.currentValue = '';
                }

            },
            handleaChange: function (index) {

                if(index==0){this.$router.push('/teach/train/1/1')}
		else if (index==1){this.$router.push('/teach/train/2/1')}
		else{this.$router.push('/teach/train/3/1')}

            },
            navCls: function (index) {
                return[
                    'nav-content',
                    index.toString(),
                    {
                        'nav-active':index === this.currentValue
                    }
                ]
            },
            navaCls:function(index){
		var str = this.$route.path.split("/")[3]-1;
		return{
                    'nav-a-active':str==index
                }
            },
            show: function (index) {
                if(this.showtext === index) this.showtext = 'true';
                return this.showtext
            },
            visibility: function (index) {
                if(index === this.currentValue){
                    return 'visibility:visible;display: block;'
                }
            },
            height: function (index) {

                if(index ===2){
                    return 'height:200px'
                }
            }
        }
}
</script>
