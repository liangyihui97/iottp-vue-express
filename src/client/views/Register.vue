<template>
  <el-main>
    <el-form 
      :model="ReginForm"
      ref="ReginForm"
      :rules="rule"
      class="regform"
      label-width="0">

      <h3>用户注册</h3>

       <el-form-item>
        <el-radio v-model="ReginForm.userRole" label="学生">学生</el-radio>
       <el-radio v-model="ReginForm.userRole" label="老师">老师</el-radio>
      </el-form-item>


      <el-form-item prop="username">
        <el-input 
          type="text"
          v-model="ReginForm.username"
          placeholder="用户名">
        </el-input>
      </el-form-item>

      <el-form-item prop="pass">
        <el-input 
          type="password"
          v-model="ReginForm.pass"
          placeholder="密码">
        </el-input>
      </el-form-item>

      <el-form-item prop="confirmpassword">
        <el-input 
          type="password"
          v-model="ReginForm.confirmpassword"
          placeholder="确认密码">
        </el-input>
      </el-form-item>

      <el-form-item prop="email">
        <el-input 
          type="email"
          v-model="ReginForm.email"
          placeholder="电子邮件">
        </el-input>
      </el-form-item>

      <el-form-item prop="tel">
        <el-input 
          type="text"
          v-model.number="ReginForm.tel"
          placeholder="电话号码">
        </el-input>
      </el-form-item>

      <el-form-item prop="name">
        <el-input 
          type="text"
          v-model="ReginForm.name"
          placeholder="昵称">
        </el-input>
      </el-form-item>

      <el-form-item >
        <el-button 
          type="primary" 
          class="submitBtn"
          round
          @click.native.prevent="submit"
          :loading="logining">
          注册
        </el-button>
        <el-button 
          class="resetBtn" 
          round
          @click.native.prevent="reset">
          重置
        </el-button>
        <hr>
        <p>已经有账号，马上去<span class="to" @click="tologin">登录</span></p>
      </el-form-item>

    </el-form>
  </el-main>
</template>
<script>
export default {
  data () {
    let confirmpasswordCheck = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('密码是必须的'))
      } else if (value !== this.ReginForm.pass) {
        return callback(new Error('两次输入的密码不一致'))
      } else {
        return callback()
      }
    }
    let telCheck = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('电话号码是必须的'))
      } else if (!Number.isInteger(value)) {
        return callback(new Error('电话号码必须是数字'))
      } else if (value.toString().length !== 11) {
        return callback(new Error('电话号码必须是11位数字'))
      } else {
        callback()
      }
    }
    return {
      ReginForm: {
	userRole: '学生',
        username: '',
        pass: '',
        confirmpassword: '',
        tel: '',
        email: '',
        name: '',
        rtime: this.time(),
      },
      logining: false,
      rule: {
        username: [
          {
            required: true,
            max: 14,
            min: 3,
            message: '用户名是必须的，长度为3-14位',
            trigger: 'blur'
          }
        ],
        pass: [
          {
            required: true,
            message: '密码是必须的！',
            trigger: 'blur'
          }
        ],
        confirmpassword: [
          {
            required: true,
            validator: confirmpasswordCheck,
            trigger: 'blur'
          }
        ],
        tel: [
          {
            required: true,
            validator: telCheck,
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            type: 'email',
            message: '请输入正确的电子邮件格式(xxx@xxx.com)',
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            max: 12,
            min: 2,
            message: '昵称是必须的，最好是汉字',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // ...
    time () {
     var t = new Date();
     return t.toLocaleString();
},
    submit () {
     this.$refs.ReginForm.validate((valid) => {
      if (valid) {
            this.$axios.post('/users/profile/insert', this.ReginForm).then((res) => {
                if (res.data!=='erro'&&res.data!==null) {
                        this.$notify({
                            type: 'success',
                            message: '注册成功!'+res.data.name,
                            duration: 3000
                        })
                        this.$router.go(-1)
                } else if(res.data=='erro'){
this.$message({
                        type: 'error',
                        message: '该用户已经存在！',
                        showClose: true
                    })
}

else {
                    this.$message({
                        type: 'error',
                        message: '格式有误，请重新输入',
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
    },
    reset () {
      this.$refs.ReginForm.resetFields()
    },
    tologin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.regform {
  margin: 20px auto;
  width: 500px;
  background: #f3f3f4;
  box-shadow: 0 0 5px #B4BCCC;
  padding: 30px 30px 0 30px;
  border-radius: 10px; 
}
.regform{background: #fff;}
.submitBtn {
  width: 65%;
}
.to {
  color: #FA5555;
  cursor: pointer;
}
</style>
