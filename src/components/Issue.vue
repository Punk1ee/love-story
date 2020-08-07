<template>
  <div class="issue-item clearfix">
    <van-image
      round
      fit="cover"
      :src="source.avatarSrc || 'https://img.yzcdn.cn/vant/cat.jpeg'"
      class="avatar fl"
    />
    <div class="content fl">
      <p class="username">{{ source.userName }}</p>
      <p v-if="source.content" class="text">{{ source.content }}</p>
      <div class="img-wrap">
        <van-image
          v-for="(img, idx) in contentImgs"
          :key="idx"
          fit="cover"
          :src="img"
          class="img"
          :style="setStyle(idx)"
          @click.native.stop="previewShow = true"
        />
      </div>
      <p class="time">{{ formatTime(source.createTime) }}</p>
    </div>
    <van-image-preview v-model="previewShow" :images="contentImgs" />
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
    contentImgs() {
      return JSON.parse(this.source.contentImage)
    }
  },
  methods: {
    setStyle(idx) {
      const rows = Math.ceil(this.source.contentImage.length / 3)
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
          width: calc(~"(100% - 30px) / 3");
          height: 80px;
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