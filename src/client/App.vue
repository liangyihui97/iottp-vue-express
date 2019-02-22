<template>
  <div class="app full-height">
    <h1>{{ message }}</h1>
   {{data}}{{columns}}
    <router-link :to="{ name: 'hello' }">Goto Hello</router-link>
    <router-view></router-view>
<a href="http://192.168.227.10:4000/about.html">trun to about</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Express + Vue boilerplate-Konata9',
      columns: [],
      data: []
    }
  },
        mounted (){
var self = this;
    this.$axios
.get('http://192.168.227.10:4000/api/data')
.then(function(response){
self.data = response.data.data;
self.columns = response.data.columns;
});
}
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
