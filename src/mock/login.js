const successMessage = '成功'
const errorMessage = '失败'

export default {
  login: config => {
    const validUser = [
      {
        username: 'weihaoyue',
        password: '20170827'
      },
      {
        username: 'punklee',
        password: '20170827'
      }
    ]
    const { username, password } = JSON.parse(config.body) 
    const valid = validUser.find(user => {
      return user.username === username && user.password === password
    })
    const code = valid ? 1 : 0 
    const data = valid ? { token: username } : null
    const message = valid ? successMessage : errorMessage
    return {
      code,
      data,
      message
    }
  }
}
