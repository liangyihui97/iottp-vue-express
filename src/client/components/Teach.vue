<template>
  <div>
    <h1>{{ msg }}</h1>
   {{data}}{{columns}}{{data2}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'this is teach!',
     columns: [],
      data: [],
      data2: [],
    }
  },
 mounted (){
    var self = this;
    this.$axios.get('http://192.168.227.10:4000/api/data').then(function(response){
	self.data = response.data.data;
	self.columns = response.data.columns;
});
this.$axios.get('/v2/music/search?q=周杰伦',).then(function (response) {
        self.data2 = response.data.musics;
    })
    .catch(function (error) {
        console.log(error);
    })
},
}
</script>
