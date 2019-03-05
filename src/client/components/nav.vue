<template>
<div class="nav">
            <div
            v-for="(item,index) in value"
            :class="navCls(index)"
            @click="handleChange(index)">
            <img :src="item.img" height="25" width="25" class="fl">
            <div class="nav-text fl">{{item.content}}</div>
            </div>
            </div>
</template>
<script>
export default{
          props:['value'],
        data: function(){
            return {
                currentValue: ''
            }
        },
        methods:{
            handleChange: function (index) {
                this.currentValue = index
            },
            navCls: function (index) {
                //console.log(index);
                return[
                    'nav-content',
                    index.toString(),
                    {
                        'nav-active':index === this.currentValue
                    }
                ]
            }
        }
}
</script>
