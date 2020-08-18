<template>
  <div class="login-wrap">
    <p class="introduce">{{ introduce }}</p>
    <van-form>
      <van-field
        v-model="userName"
        name="userName"
        label="Username"
        :rules="[{ required: true, message: 'unvalid username' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="Password"
        :rules="[{ required: true, message: 'unvalid password' }]"
      />
      <div class="btn-box">
        <van-button round block :loading="loading" type="info" @click.native.stop="login">
          Login
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      introduce: 'A place for u',
      userName: '',
      password: '',
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true
      const userInfo = {
        userName: this.userName,
        password: this.password
      }
      this.$store.dispatch('Login', userInfo).then(res => {
        this.loading = false
        this.$router.push({ path: '/home/index' })
      }).catch(() => {
        this.loading = false
        this.$toast.fail('账号或密码错误')
      })
    }
  },
}
</script>

<style lang="less" scoped>
  .login-wrap {
    .introduce {
      padding: 20px 0;
      text-align: center;
    }
    .btn-box {
      margin: 20px;
    }
  }
</style>