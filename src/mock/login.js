const successMessage = '成功'
const errorMessage = '失败'

export default {
  login: config => {
    const validUser = [
      { userName: 'weihaoyue', userId: 1, password: 'weihaoyue' },
      { userName: 'punklee', userId: 2, password: 'punklee', admin: true },
      { userName: 'weihaoxue', userId: 3, password: 'weihaoxue' },
      { userName: 'renqiujing', userId: 4, password: 'renqiujing' },
      { userName: 'wubozhong', userId: 5, password: 'wubozhong' },
      { userName: 'jiangwei', userId: 6, password: 'jiangwei' },
      { userName: 'xingdongshen', userId: 7, password: 'xingdongshen' },
      { userName: 'liuxian', userId: 8, password: 'liuxian' },
      { userName: 'lichunhua', userId: 9, password: 'lichunhua' }
    ]
    const { userName, password } = JSON.parse(config.body) 
    const valid = validUser.find(user => {
      return user.userName === userName && user.password === password
    })
    const code = valid ? 200 : 0 
    const data = valid ? { token: valid.userName, userId: valid.userId, userName: valid.userName, admin: valid.admin  } : null
    const message = valid ? successMessage : errorMessage
    return {
      code,
      data,
      message
    }
  }
}
