<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="home-wrapper">
    <van-list
      v-if="issues.length"
      :immediate-check="immediateCheck"
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      @load="onLoad"
    >
      <issue v-for="(item, idx) in issues" :key="idx" :source="item" class="van-clearfix" />
    </van-list>
    <div v-if="showNodata" class="no-data">no data...</div>
  </van-pull-refresh>
</template>

<script>
import { getIssues } from '@/api/home'
import Issue from '@/components/Issue'

export default {
  name: 'Home',
  components: { Issue },
  data() {
    return {
      issues: [],
      immediateCheck: false,
      loading: false,
      finished: false,
      error: false,
      refreshing: false,
      page: {
        current: 1,
        size: 10
      },
      showNodata: false
    }
  },
  mounted() {
    this.onLoad()
  },
  methods: {
    onLoad() {
      const params = {
        current: this.page.current,
        size: this.page.size
      }
      const vm = this
      getIssues(params).then(res => {
        // 分页++
        vm.page.current++
        // 下拉刷新
        if (vm.refreshing) {
          vm.issues = [...res.data.records]
          vm.refreshing = false
        } else {
          if (res.data.records && res.data.records.length) {
            vm.issues = [...vm.issues, ...res.data.records]
          } else {
            // 没有数据则finished
            vm.finished = true
          }
        }
        vm.loading = false
        // 是否展示showNodata
        if (!vm.issues.length) {
          vm.showNodata = true
        }
      }).catch(() => {
        this.error = true
        vm.loading = false
      })
    },
    onRefresh() {
      this.loading = true
      this.page.current = 1
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  min-height: 100%;
  background-color: @themeBg;
  .no-data {
    text-align: center;
    padding-top: 40%;
  }
}
</style>