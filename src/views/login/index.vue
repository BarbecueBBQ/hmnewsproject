<template>
  <div class="login-wrap">
    <van-nav-bar title="登录" />
    <form action="/">
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          label="手机号"
          right-icon="question-o"
          placeholder="请输入手机号"
          clearable
        />

        <van-field v-model="user.code" label="验证码" placeholder="请输入验证码" required  type="password"/>
      </van-cell-group>
      <van-button type="info" block>登录</van-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang="less" >
.van-nav-bar {
  background-color: #0096fa;

  .van-nav-bar__title {
    color: white;
  }
}
</style>
