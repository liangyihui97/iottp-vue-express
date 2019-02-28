<template>
  <div class="tabs">
            <div class="tabs-bar">
                <div
                :class="tabCls(item)"
                v-for="(item, index) in navList"
                @click="handleChange(index)">
                {{item.label}}
                </div>
            </div>
            <div class="tabs-content">
                <slot></slot>
            </div>
  </div>
</template>

<script>


export default {
props: {

        value:{
            type: [String,Number]
        }
    },
    data: function(){
        return {
            currentValue: this.value,
            navList: []
        }
    },
    methods: {
        getTabs: function () {
            return this.$children.filter(function(item){
                return item.$options.name === 'pane';/*获取子组件中name属性为pane的组件*/
            })
        },
        updateNav: function () {
            this.navList = [];
            var _this = this;
            this.getTabs().forEach(function (pane,index) {/*pane只是一个对象，不是确切的命名*/
                _this.navList.push({
                    label: pane.label,
                    name: pane.name ||index
                });
                if(!pane.name) pane.name= index;
                if (index ===0){
                    if(!_this.currentValue){/*如果没有设置value，默认为0*/
                        _this.currentValue = pane.name||index;
                    }
                }
            });
            this.updateStatus();
        },
        updateStatus: function () {
            var tabs = this.getTabs();
            var _this = this;
            //显示当前选中的tab对应的 pane组件，隐藏没有选中的
            tabs.forEach(function(tab){
                return tab.show = tab.name === _this.currentValue;
            })
        },
        tabCls: function(item) {//选中的加一些效果
            return [
                'tabs-tab',
                {
                    'tabs-tab-active':item.name === this.currentValue
                }
            ]
        },
        handleChange: function(index){
            var nav = this.navList[index];
            var name = nav.name;
            this.currentValue = name;
            this.$emit('input',name);
            this.$emit('on-click', name);
        }
    },
    watch:{
        value: function (val) {
            this.currentValue = val;
        },
        currentValue: function () {
            this.updateStatus();
        }
    }
}
</script>
