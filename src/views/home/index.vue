<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :error.sync="error"
      @load="onLoad"
    >
      <issue v-for="(item, idx) in issues" :key="idx" :source="item" />
      <!-- <van-cell v-for="(item, idx) in issues" :key="idx" :title="item.text" /> -->
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
      error: false,
      refreshing: false
    };
  },
  methods: {
    onLoad() {
      if (this.refreshing) {
        this.issues = []
        this.refreshing = false
      }

      const data = {}
      const vm = this
      getIssues(data).then(res => {
        setTimeout(() => {
          vm.issues = [...vm.issues, ...res.data]
          vm.loading = false
        }, 1000)
      }).catch(() => {
        this.error = true
      })
    },
    onRefresh() {
      this.loading = true
      this.onLoad()
    }
  }
}
</script>