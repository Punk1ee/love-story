<template>
  <div class="app-footer-wrap">
    <div class="tab-box">
      <span
        v-for="(tab, index) in tabs.options"
        :key="index"
        class="tab-item"
        :class="{ 'active': tabs.active === tab.name, 'icon-class': tab.icon }"
        @click="goToPage(tab)"
      >
        <svg-icon v-if="tab.icon" :icon-class="tab.icon" />
        <template v-else>{{ tab.name }}</template>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppFooter',
  data() {
    return {
      tabs: {
        options: [
          { name: 'Issues', path: '/home/index' },
          { name: 'NewAdd', path: '/new-add/index', icon: 'photo' },
          { name: 'Display', path: '/me/index' }
        ],
        active: 'Issues'
      }
    }
  },
  computed: {
    ...mapGetters([
      'curView'
    ])
  },
  watch: {
    '$route.path'(nv, ov) {
      if (nv !== ov) {
        this.resetTab(nv)
      }
    }
  },
  created() {
    debugger
    this.initTab()
  },
  methods: {
    ...mapActions([
      'setCurView'
    ]),
    findActiveTabByAttr(attr, val) {
      return this.tabs.options.find(option => option[attr] === val)
    },
    setActive(tab) {
      this.tabs.active = tab.name
    },
    goToPage(tab) {
      this.setCurView(tab)
      this.$router.push({ path: tab.path })
    },
    initTab() {
      const tab = this.curView.name ? this.curView : this.findActiveTabByAttr('name', this.tabs.active)
      this.setActive(tab)
      this.goToPage(tab)
    },
    resetTab(path) {
      const tab = this.findActiveTabByAttr('path', path)
      this.setCurView(tab)
      this.setActive(tab)
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
      cursor: pointer;
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
