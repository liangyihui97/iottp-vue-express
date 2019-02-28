<template>
  <div class="pane" v-show="show">
            <slot></slot>
  </div>
</template>
<script>
export default {
    name: 'pane',
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    
    data: function () {
        return {
            show: true
        }
    },
    methods: {
        updateNav: function () {
            this.$parent.updateNav();
        }
    },
    watch: {
        label () {
            this.updateNav();
        }
    },
    mounted: function () {
        this.updateNav();
    }
}
</script>
