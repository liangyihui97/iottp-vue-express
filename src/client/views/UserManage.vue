<template>
 <div id="user">
   <div class="user-nav"> 
    <ul class="nav fl">
<li class="nav-content" @click.stop="handleaChange(0)">
<img src="../static/images/01nav.png" height="25" width="25" class="fl">
<div class="nav-text fl">仪表盘</div>
     </li>
     <li class="nav-content" @click.stop="handleaChange(1)">
<img src="../static/images/userinfo.png" height="25" width="25" class="fl">
<div class="nav-text fl">个人信息</div>
     </li>
      <li class="nav-content nav-active" @click.stop="handleaChange(2)">
<img src="../static/images/usermanage.png" height="25" width="25" class="fl">
<div class="nav-text fl">用户管理</div>
     </li>
      <li class="nav-content" @click.stop="handleaChange(3)">
<img src="../static/images/02nav.png" height="25" width="25" class="fl">
<div class="nav-text fl">资产管理</div>
     </li>

    </ul>
   </div> 
   <div class="teach-page">
{{user.name+' '}}
   </div>
 </div>
</template>

<script>
export default {
       methods: {
    handleaChange: function (index) {

                if(index==0){this.$router.push('/users/dashboard')}
		else if (index==1){this.$router.push('/users/profile')}
		else if(index==2){this.$router.push('/users/manage')}
                else{this.$router.push('/users/asset')}
            }
},
 computed: {
            user() {
        if (!this.$store.state.isLogin) {    
            this.$store.state.isLogin=sessionStorage.getItem('isLogin');   //从sessionStorage中读取状态
            this.$store.state.user=JSON.parse(sessionStorage.getItem('user'));
        }
        return this.$store.state.user

    }
},
        data () {
            return {
               
        }
    }
}
</script>


<style >


</style>
