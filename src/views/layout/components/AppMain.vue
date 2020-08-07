<template>
  <div class="app-main-wrap">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() { return this.$route.path }
  }
}
</script>
