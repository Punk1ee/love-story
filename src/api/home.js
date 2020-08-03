import request from '@/utils/request'

export function getIssues(data) {
  return request({
    url: '/api/v1/home/issue',
    method: 'post',
    data
  })
}
