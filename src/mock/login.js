const successMessage = '成功'
const errorMessage = '失败'

export default {
  login: config => {
    const validUser = [
      {
        userName: 'weihaoyue',
        userId: 1,
        password: '20170827'
      },
      {
        userName: 'punklee',
        userId: 2,
        password: '20170827'
      }
    ]
    const { userName, password } = JSON.parse(config.body) 
    const valid = validUser.find(user => {
      return user.userName === userName && user.password === password
    })
    const code = valid ? 200 : 0 
    const data = valid ? { token: valid.userName, userId: valid.userId, userName: valid.userName  } : null
    const message = valid ? successMessage : errorMessage
    return {
      code,
      data,
      message
    }
  }
}
