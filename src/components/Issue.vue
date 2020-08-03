<template>
  <div class="issue-item clearfix">
    <van-image
      round
      fit="cover"
      :src="source.avatarSrc"
      class="avatar fl"
    />
    <div class="content fl">
      <p class="username">{{ source.username }}</p>
      <p v-if="source.text" class="text">{{ source.text }}</p>
      <div class="img-wrap">
        <van-image
          v-for="(img, idx) in source.imgs"
          :key="idx"
          fit="cover"
          :src="img.src"
          class="img"
          :style="setStyle(idx)"
          @click.native.stop="previewShow = true"
        />
      </div>
      <p class="time">{{ formatTime(source.time) }}</p>
    </div>
    <van-image-preview v-model="previewShow" :images="previewImgs" />
  </div>
</template>

<script>
import { formatTime } from '@/utils'

export default {
  name: 'Issue',
  props: {
    source: Object,
    default: () => {}
  },
  data() {
    return {
      previewShow: false
    }
  },
  computed: {
    previewImgs() {
      return this.source.imgs ? this.source.imgs.map(img => img.src) : []
    }
  },
  methods: {
    setStyle(idx) {
      const rows = Math.ceil(this.source.imgs.length / 3)
      const curRow = Math.ceil((idx + 1) / 3)
      let margin = 0
      let style = {}
      if (idx % 3 !== 2) {
        style.marginRight = '5px'
      }
      if (curRow !== rows) {
        style.marginBottom = '5px'
      }
      return style
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
      .username {
        color: @themeColor;
      }
      .text {
        line-height: 1.4;
        margin: 5px 0;
      }
      .img-wrap {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .img {
          width: 88px;
          height: 88px;
        }
      }
      .time {
        margin-top: 8px;
        font-size: 14px;
        color: #8e8c8c;
      }
    }
  }
</style>