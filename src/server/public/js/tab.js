Vue.component('pane', {
    name: 'pane',
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
        default:
            ''
        }
    },
    template: '<div class="pane" v-show="show">\n' + '            <slot></slot>\n' + '        </div>',
    data: function() {
        return {
            show: true
        }
    },
    methods: {
        updateNav: function() {
            this.$parent.updateNav();
        }
    },
    watch: {
        label() {
            this.updateNav();
        }
    },
    mounted: function() {
        this.updateNav();
    }
});

Vue.component('tabs', {
    template: '   <div class="tabs">\n' + '            <div class="tabs-bar">\n' + '                <div\n' + '                :class="tabCls(item)"\n' + '                v-for="(item, index) in navList"\n' + '                @click="handleChange(index)">\n' + '                {{item.label}}\n' + '            </div>\n' + '         </div>\n' + '                <div class="tabs-content">\n' + '                <slot></slot>\n' + '            </div>\n' + '        </div>',
    props: {
        value: {
            type: [String, Number]
        }
    },
    data: function() {
        return {
            currentValue: this.value,
            navList: []
        }
    },
    methods: {
        getTabs: function() {
            return this.$children.filter(function(item) {
                return item.$options.name === 'pane';
          
            })
        },
        updateNav: function() {
            this.navList = [];
            var _this = this;
            this.getTabs().forEach(function(pane, index) {
                
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                });
                if (!pane.name) pane.name = index;
                if (index === 0) {
                    if (!_this.currentValue) {
                       
                        _this.currentValue = pane.name || index;
                    }
                }
            });
            this.updateStatus();
        },
        updateStatus: function() {
            var tabs = this.getTabs();
            var _this = this;
            
            tabs.forEach(function(tab) {
                return tab.show = tab.name === _this.currentValue;
            })
        },
        tabCls: function(item) {
            return ['tabs-tab', {
                'tabs-tab-active': item.name === this.currentValue
            }]
        },
        handleChange: function(index) {
            var nav = this.navList[index];
            var name = nav.name;
            this.currentValue = name;
            this.$emit('input', name);
            this.$emit('on-click', name);
        }
    },
    watch: {
        value: function(val) {
            this.currentValue = val;
        },
        currentValue: function() {
            this.updateStatus();
        }
    }
});
var app = new Vue({
    el: '#app1',
    data: {
        activeKey: '1'
    }
});
