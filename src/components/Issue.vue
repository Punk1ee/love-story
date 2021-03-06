<template>
  <div class="issue-item clearfix">
    <van-image
      round
      fit="cover"
      :src="avatarSrc"
      class="avatar fl"
    />
    <div class="content fl">
      <p class="userName">{{ source.userName }}</p>
      <p v-if="source.content" class="text">{{ source.content }}</p>
      <div class="srcs-wrap">
        <div v-for="(src, idx) in contentSrcs" :key="idx" class="src-box">
          <video v-if="isVideo(src)" :src="src" controls />
          <van-image
            v-else
            fit="cover"
            :src="src"
            class="img"
            @click.native.stop="showPreview(idx)"
          />
        </div>
      </div>
      <p class="time-delete">
        <span class="time">{{ formatTime(source.createTime) }}</span>
        <svg-icon v-if="deletePower" icon-class="delete" class="delete" @click.stop="confirmDelete" />
      </p>
    </div>
    <van-image-preview v-model="preview.show" :images="contentSrcs" :start-position="preview.startIdx" />
  </div>
</template>

<script>
import { formatTime } from '@/utils'
import { deleteIssue } from '@/api/home'

export default {
  name: 'Issue',
  props: {
    source: Object,
    default: () => {}
  },
  data() {
    return {
      avatarSrc: 'https://img.yzcdn.cn/vant/cat.jpeg',
      preview: {
        show: false,
        startIdx: 0
      }
    }
  },
  computed: {
    contentSrcs() {
      return JSON.parse(this.source.contentImage)
    },
    deletePower() {
      return this.$store.getters.admin || this.source.userId == this.$store.getters.userId
    }
  },
  methods: {
    isVideo(src) {
      const type = src.slice(src.lastIndexOf('.') + 1)
      return type.toLowerCase() === 'mov'
    },
    showPreview(idx) {
      this.preview.show = true
      this.preview.startIdx = idx
    },
    confirmDelete() {
      this.$dialog.confirm({
        message: '确认删除吗？',
        beforeClose: this.deleteIssue
      })
    },
    deleteIssue(action, done) {
      if (action === 'cancel') return done()
      const params = {
        id: this.source.id,
        userId: this.source.userId
      }
      deleteIssue(params).then(res => {
        this.$emit('delete-issue', [this.source.id, done])
      })
    },
    formatTime
  }
}
</script>

<style lang="less" scoped>
  @avatarSize: 48px;
  .issue-item {
    width: 100%;
    padding: 15px 20px;
    border-bottom: 1px solid #ebedf0;
    .avatar {
      width: @avatarSize;
      height: @avatarSize;
    }
    .content {
      width: calc(~"100% - @{avatarSize}");
      padding-left: 15px;
      .userName {
        color: @themeColor;
        margin-bottom: 5px;
      }
      .text {
        line-height: 1.4;
      }
      .srcs-wrap {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 5px;
        .src-box {
          width: calc(~"(100% - 20px) / 2");
          height: 100px;
          margin-bottom: 5px;
          &:nth-child(odd) {
            margin-right: 5px;
          }
          &:nth-child(even) {
            margin-right: 0;
          }
          & > * {
            width: 100%;
            height: 100%;
          }
          /deep/ .van-image {
            & > * {
              border-radius: 5px;
            }
          }
        }
      }
      .time-delete {
        display: flex;
        justify-content: space-between;
        .time {
          margin-top: 3px;
          font-size: 14px;
          color: #8e8c8c;
        }
        .delete {
          width: 24px;
          height: 24px;
          padding: 4px;
          color: @redColor;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>