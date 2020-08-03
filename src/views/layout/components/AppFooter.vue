<template>
  <div class="app-footer-wrap">
    <div class="tab-box">
      <span
        v-for="(tab, index) in tabs.options"
        :key="index"
        class="tab-item"
        :class="{ 'active': tab.active, 'icon-class': tab.type === 'icon' }"
        @click="goToPage(tab)"
      >
        <svg-icon v-if="tab.type === 'icon'" :icon-class="tab.title" />
        <template v-else>{{ tab.title }}</template>
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
          { title: 'Home', path: '/home/index', active: true },
          { title: 'photo', type: 'icon', path: '/index1', active: false },
          { title: 'Me', path: '/me/index', active: false }
        ]
      }
    }
  },
  watch: {
    '$route.path'(nv, ov) {
      if (nv !== ov) {
        this.initToCurPath(nv)
      }
    }
  },
  methods: {
    initToCurPath(path) {
      const tab = this.tabs.options.find(option => option.path === path)
      this.setActive(tab)
    },
    setActive(tab) {
      this.tabs.options.find(option => option.active).active = false
      tab.active = true
    },
    goToPage(tab) {
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
      &.icon-class {
        font-size: 24px;
      }
      &.active {
        color: #fff;
        transform: scale(1.06);
        &::after {
          content: ' ';
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 8px;
          left: 0;
          z-index: 1;
          background-color: #fff;
          border-radius: 10px;
        }
      }
    }
  }
</style>
