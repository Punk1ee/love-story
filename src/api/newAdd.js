import request from '@/utils/request'

export function upload({ formData, params }, callback) {
  return request({
    url: '/shuoshuo/publish',
    method: 'post',
    // processData: false,
    // onUploadProgress: progressEvent => {
    //   if (progressEvent.lengthComputable) {
    //     callback && typeof callback === 'function' && callback(progressEvent)
    //   }
    // },
    params,
    data: formData
  })
}
