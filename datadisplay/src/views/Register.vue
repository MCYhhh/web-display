<template xmlns: xmlns:>
  <div class="back">
  <div class="totalbox">
  <div>
    <div class="pre-box" :style="{'transform':isLogin? 'translateX(100%)':'none' ,'transform':isRegister? 'translateX(100%)':'none' ,'background-color':isLogin?'rgb(165, 200, 241)':'rgb(211, 202, 245)'}">
      <h2 >Welcome to the Mystery Discovery Hall</h2>
      <p style="color: #f3edca">ENJOIN YOURSELF</p>
      <div class="img">
      </div>
    </div>
    <el-form ref="registerFormRef" :model="RegisterForm" class="registerbox" :style="{'background-color':isRegister?'rgb(165, 200, 241)':'rgb(211, 202, 245)','opacity':isLogin?'0':'1','transition':'1s'}"  >
        <div class="title-box">
          <h1 style="color: #f3f2ec">注  册</h1>
        </div>
        <el-form-item prop="name">
          <el-input type="text" placeholder="用户名"  v-model="RegisterForm.name" prefix-icon="el-icon-user-solid" ></el-input>
        </el-form-item>
      <el-form-item prop="password">
          <el-input  type="password" placeholder="密码(6-20位包含数字、字母、特殊字符)"  v-model="RegisterForm.password" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item prop="checkpwd">
        <el-input  type="password" placeholder="确认密码" pattern="(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,20}" v-model="RegisterForm.checkpwd" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item prop="email">
          <el-input  type="text" placeholder="邮箱" v-model="RegisterForm.email" pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"  prefix-icon="el-icon-message"></el-input>
      </el-form-item>
        <el-form-item class="btn-box">
          <el-button type="success" v-on:click="toRegister()" style="background-color: palegoldenrod;border: none">注册</el-button>
          <el-button  v-on:click="resetRegister()">重置</el-button>
          <p @click="login()">已有账号？去登录</p>
        </el-form-item>
    </el-form>
  </div>
  <div>
    <el-form ref="loginFormRef" :model="LoginForm" :rules="loginFormRules" class="loginbox" :style="{'background-color':isLogin?'rgb(211, 202, 245)':'rgb(165, 200, 241)','opacity':isLogin?'1':'0','transition':'1s'}" >
        <div class="title-box">
          <h1 style="color: #f3f2ec">登  录</h1>
        </div>
      <el-form-item prop="name">
        <el-input  placeholder="用户名"  v-model="LoginForm.name" prefix-icon="el-icon-user-solid" ></el-input>
      </el-form-item>
      <el-form-item prop="password">
          <el-input type="password" placeholder="密码(6-20位包含数字、字母、特殊字符)" v-model="LoginForm.password" pattern="(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,20}" required prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
        <el-form-item class="btn-box">
          <el-button type="success" v-on:click="toLogin()" style="background-color: palegoldenrod;border: none">登录</el-button>
          <el-button  v-on:click="resetLogin()">重置</el-button>
          <p @click="register()">没有账号？去注册</p>
        </el-form-item>
      </el-form>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      LoginForm: {
        //这是登录表单的数据绑定对象
        name: '',
        password: '',
      },
      isRegister: false,
      isLogin: true,
      RegisterForm: {
        //这是登录表单的数据绑定对象
        name: '',
        password: '',
        checkpwd: '',
        email: '',
      },
      //这是表单的验证规则对象
      registerFormRules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          // pattern="(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,20}"
          {validate:Pwd, required: true, message: '请输入用户密码', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
        ],
        checkpwd: [
          // pattern="(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,20}"
          {validate:checkPwd, required: true, message: '请输入用户密码', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
        ],
        email:[{required: true, message: '请填写邮箱', trigger: 'blur'},],
      },
      loginFormRules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          // pattern="(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,20}"
          {validate:Pwd, required: true, message: '请输入用户密码', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
        ],
      },
    }
    var Pwd=(rule,value,callback)=>{
      var reg = /(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,20}/;
      if(this.RegisterForm.password.length>=6 && this.RegisterForm.password.length<=20){
        if(!reg.test(this.RegisterForm.password)){
          callback("请输入正确的密码");
        }else {
          callback();
        }
      }else {
        if(!value)
          return callback(new Error("密码不能为空"));
        else
          callback("请输入正确的密码");
      }
    }
    var checkPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.RegisterForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
  },
  methods:{
    //点击去登录，css样式改变
    login(){
      this.isLogin=true
      this.isRegister=false

    },
    //点击去注册，实现css变化
    register(){
      this.isRegister=true
      this.isLogin=false
    },
    //登录成功，跳转到home
    toLogin(){
      this.$refs.loginFormRef.validate(async (valid)=>{
        console.log(valid)
        if(valid){
          this.$message.success("登录成功！")
          this.$router.push("/home")
        }
      })
    },
    //注册成功，显示注册成功
    toRegister(){
      this.$refs.registerFormRef.validate(async (valid)=>{
        console.log(valid)
        if(valid){
          this.$message.success("注册成功，请去登录！")
        }
      })
      this.isRegister=false
      this.isLogin=true
    },
    //登录界面重置
    resetLogin(){
      // this.LoginForm=null
      this.LoginForm.name=""
      this.LoginForm.password=""
    },
    //注册界面重置
    resetRegister(){
      // this.RegisterForm=null
      this.RegisterForm.name=""
        this.RegisterForm.password=""
        this.RegisterForm.checkpwd=""
        this.RegisterForm.email=""
    }
  }

}
</script>

<style scoped>
  .totalbox{
    display: flex;
    margin: 0 auto;
    height: 100%;
    width: 60%;
    background: linear-gradient(to right, rgb(162, 201, 246), rgb(231, 202, 245));
  }
  .el-form{
    width: 550px;
    margin: 10px;
    box-shadow: 3px 4px 10px 2px rgba(0,0,0,0.5)
  }
  .el-form-item{
    width: 60%;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  .loginbox{
    position: absolute;
    top: 260px;
  }
  .pre-box{
    margin-left: 10px;
    margin-top: -50px;
    height: 710px;
    width: calc(1100px /2);
    border: 4px;
    border-radius: 4px;
    background: rgb(165, 200, 241);
    box-shadow:4px 4px 3px rgba(0,0,0,.1);
    transition: 0.5s ease-in-out;
  }
  .back{
    background:url("../assets/images/back2.jpg");
    background-size: 100% 100% ;
    height: 100%;
    width: 100%;
    position: fixed;
    top: -20px;
  }
  h2{
    color: white;
    padding: 15px 5px 0 5px;
    font-size: 40px;
  }
  .img{
    height: 450px;
    width: 450px;
    margin: 20px auto;
    border-radius: 50%;
    overflow: hidden;
    background-image: url("../assets/images/prebackgroud.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    box-shadow:4px 4px 3px rgba(0,0,0,.1);
    transition: 0.5s;
  }
  .totalbox{
    margin: 100px auto;
    height: 690px;
  }
  .registerbox{
   position: absolute;
    top: 260px;
  }

</style>
