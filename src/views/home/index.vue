<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :error.sync="error"
      @load="onLoad"
    >
      <issue v-for="(item, idx) in issues" :key="idx" :source="item" />
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
      const data = {}
      const vm = this
      getIssues(data).then(res => {
        setTimeout(() => {
          if (this.refreshing) {
            this.issues = [...res.data]
            this.refreshing = false
          } else {
            vm.issues = [...vm.issues, ...res.data]
          }
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
