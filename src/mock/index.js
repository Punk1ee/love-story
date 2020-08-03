import Mock from 'mockjs'
import loginAPI from './login'
import homeAPI from './home'

Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
    this.custom.xhr.responseType = this.responseType
  }
  this.proxy_send(...arguments)
}

Mock.mock(/\/api\/v1\/login\/login/, 'post', loginAPI.login)
Mock.mock(/\/api\/v1\/home\/issue/, 'post', homeAPI.getIssues)

export default Mock
