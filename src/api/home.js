import request from '@/utils/request'

export function getIssues(params) {
  return request({
    url: '/shuoshuo/list',
    method: 'get',
    params
  })
}

export function deleteIssue(params) {
  return request({
    url: '/shuoshuo',
    method: 'delete',
    params
  })
}
