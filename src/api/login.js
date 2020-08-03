import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/v1/login/login',
    method: 'post',
    data
  })
}