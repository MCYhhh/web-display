<template>
  <div id="login">
    <el-form ref="form" :model="LoginForm" label-width="0px" class="loginbox">
      <h3>登录界面</h3>
      <el-form-item label="">
        <el-input v-model="LoginForm.name" placeholder="账号" auto-complete="off" type="text"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="LoginForm.password" placeholder="密码" auto-complete="off" type="password"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit" style="width: 30%;background-color: palegoldenrod;border: none">登录</el-button>
        <el-button style="width: 30%;background-color: palegoldenrod;border: none" v-on:click="toRegister()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      LoginForm: {
        name: '',
        password: '',
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!',this.LoginForm);
      this.$message({
        message: '登录成功',
        type: 'success'
      });

    },
    toRegister(){
      this.$router.push("/register")
    }
  }
}
</script>

<style scoped>
    #login{
      background-position: center;
      height: 100%;
      width: 100%;
      background-size: cover;
      position: fixed;
    }
    div{
      margin: 0;
      padding: 0;
    }
    .loginbox{
      border-radius: 15px;
      background-clip: padding-box;
      margin: 90px auto;
      width: 350px;
      padding: 35px 35px 15px 35px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
    }
    .el-form-item{
      padding-bottom: 20px;
    }
</style>
