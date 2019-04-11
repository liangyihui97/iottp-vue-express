<template>
  <div class="login-main"> 
   <el-row type="flex" justify="center"> 
    <el-col :span="6" style="height:330px;width:380px;margin-right:10px;"> 
     <h3 class="font-bold">欢迎来到物联网用户平台</h3> 
     <p>物联网专业是一个涉及计算机科学与技术、软件工程、通信工程、电子工程、网络工程等多专业学科的交叉专业，毕业学生从事多领域的工作，其配套实验室建设直接关系到学生的培养。</p> 
     <p>这是我的一个毕设项目，在这里你可以学习有关物联网设备的使用方法，包括：组装、链接、维护和数据的获取。</p> 
     <p>在这里，老师会手把手教学，结合事实画面和图表，学生能更轻松的掌握知识。</p> 
     <p>让我们开始吧！</p> 
     <br /> 
     <p><strong>Copyright</strong> lyh &copy; 2018-2019</p> 
    </el-col> 
    <el-col :span="6"> 
     <div class="login"> 
      <div class="login-logo"> 
       <img class="fl" src="../static/images/logo.png" width="60px" height="60px" /> 
       <span class="fl" style="font-size: 24px;margin-left: 20px;margin-top:11px;">登录</span> 
      </div> 
      <div class="login-submit"> 
       <el-form ref="loginForm" :model="user" :rules="rules" status-icon="" label-width="80px"> 
        <el-form-item label="用户名" prop="username"> 
         <el-input v-model="user.username"></el-input> 
        </el-form-item> 
        <el-form-item label="密码" prop="pass"> 
         <el-input v-model="user.pass" type="password"></el-input> 
        </el-form-item> 
        <el-form-item> 
         <el-button type="primary" icon="el-icon-upload" @click="login">
          登录
         </el-button>
	<el-button  @click="regist">
          注册
         </el-button>
        </el-form-item> 
       </el-form> 
      </div> 
     </div> 
    </el-col> 
   </el-row> 
  </div> 
</template>

<script>
export default {
       methods: {
    regist() {
                this.$router.push('/regist')
            },
    login() {
    this.$refs.loginForm.validate((valid) => {
        if (valid) {
            this.$axios.post('/users/profile/validate', this.user).then((res) => {
                if (res.data) {
                    this.$store.dispatch('login', res.data).then(() => {
                        this.$notify({
                            type: 'success',
                            message: '欢迎你,' + res.data.name + '!',
                            duration: 3000
                        })
                        this.$router.push('index')
                        //this.$router.go(-1)
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: '用户名或密码错误',
                        showClose: true
                    })
                }
            }).catch((err) => {
                this.$message({
                    type: 'error',
                    message: '网络错误，请重试',
                    showClose: true
                })
            })
        }
        else {
            return false
        }
    })
}
},
        data () {
            return {
                user: {},
                rules: {
                    username: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>


<style >
body {
	background: #f3f3f4;
	height: 100%;
	font-family: "open sans", "Helvetica Neue", 微软雅黑, Helvetica, Arial, sans-serif;
	color: rgb(103, 106, 108);
}

.login-main {
	margin-top: 100px;
}

.login-main p {
	font-size: 13px;
}

.el-col {
}

.font-bold {
	font-weight: 600;
	font-size: 24px;
}

.login {
	background-color: #fff;
	padding: 10px 10px;
	margin-top: 25px;
	margin-left: 10px;
	border-radius: 10px;
}

.el-form-el-form-item {
	padding-left: 125px;
}

.el-form-item__content buttom {
	margin-left: 125px;
}

.login {
	height: 260px;
	width: 350px;
}

.login-logo {
	position: absolute;
}

.login-submit {
	position: absolute;
	top: 115px;
}
</style>
