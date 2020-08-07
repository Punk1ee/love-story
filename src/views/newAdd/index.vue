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
            :before-read="beforeRead"
            :after-read="afterRead"
            @oversize="onOversize"
          />
        </template>
      </van-field>
      <div class="btn-box">
        <van-button round block :loading="publishLoading" type="info" @click.native.stop="publish">
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
        maxCount: 9,
        maxSize: 5 * 1024 * 1024,
        accept: '.jpg,.jpeg,.png',
        formData: []
      },
      publishLoading: false
    }
  },
  methods: {
    onOversize() {
      this.$toast.fail('图片不能超过5M')
    },
    beforeRead(file) {
      let canUpload = true
      if (Array.isArray(file)) {
        for (const item of file) {
          if (!this.resolveSingleFile(item)) {
            canUpload = false
          }
        }
      } else {
        canUpload = this.resolveSingleFile(file)
      }
      return canUpload
    },
    resolveSingleFile(file) {
      const file_after = file.name.slice(file.name.lastIndexOf('.'))
      if (!this.upload.accept.split(',').find(item => item === file_after)) {
        this.$toast.fail('图片格式有误')
        return false
      }
      return true
    },
    afterRead() {
      this.upload.fileList.forEach(file => {
        file.show = false
        file.rate = 0
      })
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
          userName: this.$store.getters.username
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