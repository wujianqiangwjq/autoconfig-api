<template>
<div class="login-back">
    <div class="login-container">
      <el-form :model='user'  ref="user">
        <el-form-item style="text-align:center">
          <h1>用户登录</h1>
        </el-form-item>
          <el-form-item prop="username" style="text-align:center">
              <el-input type="text" autofocus="true" v-model="user.username" auto-complete="off" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item >
              <el-input type="password" autofocus="true" v-model="user.password" auto-complete="off"  placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" style="width: 150px; margin-top: 10px; margin-left: 40px;"  @click="login">登录</el-button>
              <el-button type="primary" style="width: 150px; margin-top: 10px;"  @click="register">注册</el-button>
          </el-form-item>
      </el-form>
    </div>
</div>

</template>
<script>
import Vue from 'vue'
import store from '../../storage'
export default {
  data(){
    	return {
	      user: { username: '', password: ''},
	    }
  },
  methods:{

    login(){
     Vue.http.post("v1/login", {name: this.user.username, passwd:this.user.password}, {headers:{
      'Content-Type':'application/json'
      }}).then(rep =>{
        console.log(rep.data.token);
        store.dispatch("user/set_token", rep.data.token);
        this.$router.push({path: "/dashboard"});

      }, res=>{
        this.$message("登录失败")
      });

    },
    register(){
      Vue.http.post("v1/user",{name: this.user.username, passwd:this.user.password}, {headers:{
      'Content-Type':'application/json'
      }}).then(res =>{
         this.$message('注册成功');
      }, res=>{
        this.$message("注册失败")
      });

    }

  }


}
</script>
<style>
.login-back {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/back.png);
  overflow: hidden;
}
.login-container {
  position: absolute;
  transform: translate(-50%, -50%);
   min-width:400px;
   min-height: 300px;
   top:50%;
   left: 50%;
   background: #fff;
   border-radius: 4px;
}
</style>
