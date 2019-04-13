<template>
 <div id="user">
   <div class="user-nav"> 
    <ul class="nav fl">
<li class="nav-content" @click.stop="handleaChange(0)">
<img src="../static/images/01nav.png" height="25" width="25" class="fl">
<div class="nav-text fl">仪表盘</div>
     </li>
     <li class="nav-content nav-active" @click.stop="handleaChange(1)">
<img src="../static/images/userinfo.png" height="25" width="25" class="fl">
<div class="nav-text fl">个人信息</div>
     </li>
      <li class="nav-content" @click.stop="handleaChange(2)" v-if="user.userRole=='老师'">
<img src="../static/images/usermanage.png" height="25" width="25" class="fl">
<div class="nav-text fl">用户管理</div>
     </li>
      <li class="nav-content" @click.stop="handleaChange(3)">
<img src="../static/images/02nav.png" height="25" width="25" class="fl">
<div class="nav-text fl">资产管理</div>
     </li>

    </ul>
   </div> 
   <div class="user-page">
                <div class="user-info">
                    <div class="user-title"><h3>个人信息</h3></div>
                    <table>
                        <tbody>
                        <tr>
                            <td colspan="2"><img src="../static/images/user.jpg" class="uer-img"></td>
                        </tr>
                        <tr>
                            <td class="text-navy">用户名</td>
                            <td>{{user.username}}</td>
                        </tr>
                        <tr>
                            <td class="text-navy">名称</td>
                            <td>{{user.name}}</td>
                        </tr>
                        <tr>
                            <td class="text-navy">角色</td>
                            <td>{{user.userRole}}</td>
                        </tr>
                        <tr>
                            <td class="text-navy">电话</td>
                            <td>{{user.tel}}</td>
                        </tr>
                        <tr>
                            <td class="text-navy">邮件</td>
                            <td>{{user.email}}</td>
                        </tr>
                        <tr>
                            <td class="text-navy">创建日期</td>
                            <td>{{user.rtime}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
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
