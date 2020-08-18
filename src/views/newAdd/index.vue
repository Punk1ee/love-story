<template>
  <div class="new-add-wrap">
    <van-form>
      <van-field
        v-model="issue.content"
        :placeholder="issue.plh"
        type="textarea"
      />       
      <van-field name="uploader">
        <template #input>
          <van-uploader
            v-model="upload.fileList"
            multiple
            :max-count="upload.maxCount"
            :max-size="upload.maxSize"
            :accept="upload.accept"
            @oversize="onOversize"
          />
        </template>
      </van-field>
      <div class="btn-box">
        <van-button round block :loading="publishLoading" :disabled="disablePublish" type="info" @click.native.stop="publish">
          发表
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { upload } from '@/api/newAdd'

export default {
  name: 'NewAdd',
  data() {
    return {
      issue: {
        content: '',
        plh: '说点什么吧...'
      },
      upload: {
        fileList: [],
        maxCount: 4,
        maxSize: 50 * 1024 * 1024,
        accept: 'image/*,video/*',
        formData: []
      },
      publishLoading: false
    }
  },
  computed: {
    disablePublish() {
      return (!this.issue.content.trim().length && !this.upload.fileList.length) || this.publishLoading
    }
  },
  methods: {
    onOversize(file) {
      this.$toast.fail('单个文件大小不能超过50MB')
    },
    publish() {
      this.publishLoading = true
      let formData = new FormData()
      this.upload.fileList.forEach(item => {
        formData.append('file', item.file)
      })
      const data = {
        formData,
        params: {
          content: this.issue.content,
          userName: this.$store.getters.userName,
          userId: this.$store.getters.userId,
        }
      }

      upload(data, this.setProgress).then(res => {
        this.afterUpload()
        this.$toast.success('发表成功')
        this.$router.push({ path: '/home' })
      }).catch(() => {
        this.afterUpload()
      })
    },
    afterUpload() {
      this.publishLoading = false
      this.issue.content = ''
      this.upload.fileList = []
    }
  }
}
</script>

<style lang="less" scoped>
  .new-add-wrap {
    .btn-box {
      margin: 20px;
    }
  }
</style>