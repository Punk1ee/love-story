<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="home-wrapper">
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text="finishedText"
      :error.sync="error"
      :error-text="errorText"
      @load="onLoad"
    >
      <issue v-for="(item, idx) in issues" :key="idx" :source="item" class="van-clearfix" @delete-issue="deleteIssue" />
    </van-list>
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
      loading: false,
      finished: false,
      finishedText: '没有更多了',
      error: false,
      errorText: '请求失败，点击重新加载',
      refreshing: false,
      page: {
        current: 1,
        size: 10
      }
    }
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
        vm.loading = false

        const data = res.data.records
        // 下拉刷新
        if (vm.refreshing) {
          vm.issues = [...data]
          vm.refreshing = false
        } else {
          if (data && data.length) {
            vm.issues = [...vm.issues, ...data]
          }
          if (data.length < this.page.size || !data) {
            vm.finished = true
          }
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
    },
    deleteIssue([id, done]) {
      const idx = this.issues.findIndex(issue => issue.id === id)
      this.issues.splice(idx, 1)
      done()
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
