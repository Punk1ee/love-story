<template>
  <div class="app-footer-wrap">
    <div class="tab-box">
      <span
        v-for="(tab, index) in tabs.options"
        :key="index"
        class="tab-item"
        :class="{ 'active': tab.active }"
        @click="goToPage(tab)"
      >
        {{ tab.title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      tabs: {
        options: [
          { title: '首页', path: '/home/index', active: true },
          { title: '+', path: '/index1', active: false },
          { title: '我的', path: '/me/index', active: false }
        ]
      }
    }
  },
  methods: {
    goToPage(tab) {
      this.tabs.options.find(option => option.active).active = false
      tab.active = true
      this.$router.push({ path: tab.path })
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .tab-item {
      position: relative;
      padding: 0 4px;
      text-align: center;
      color: @themeBg;
      &.active {
        color: #fff;
        transform: scale(1.06);
        &::after {
          content: ' ';
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 6px;
          left: 0;
          z-index: 1;
          background-color: #fff;
          border-radius: 10px;
        }
      }
    }
  }
</style>
