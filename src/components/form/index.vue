<template>
  <div>
    <WForm :model="userInfo" :rules="rules" ref="loginForm">
      <WFormItem label="用户名" prop="username">
        <WInput v-model="userInfo.username" placeholder="请输入用户名" />
      </WFormItem>
      <WFormItem label="密码" prop="password">
        <WInput type="password" v-model="userInfo.password" placeholder="请输入密码" />
      </WFormItem>
      <!-- 提交按钮 -->
      <WFormItem>
        <button @click="login">登录</button>
      </WFormItem>
    </WForm>
  </div>
</template>

<script>
import WForm from './WForm'
import WFormItem from './WFormItem'
import WInput from './WInput'

export default {
  data(){
    return {
      userInfo: {
        username: "wang",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    login(){
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          this.$notice({
            title: '提示信息',
            message: '登录成功！'
          }).show();

        } else {
          console.log("error submit!");
          return false;
        }
      })
    }
  },

  components: {
    WForm,
    WFormItem,
    WInput
  }
}
</script>

<style>

</style>