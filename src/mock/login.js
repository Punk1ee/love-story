const successMessage = '成功'
const errorMessage = '失败'

export default {
  login: config => {
    const validUser = [
      { userName: 'weihaoyue', userId: 1, password: '20170827' },
      { userName: 'punklee', userId: 2, password: 'lp3058493..', admin: true },
      { userName: 'liuxian', userId: 3, password: 'liuxian'},
      { userName: 'lichunhua', userId: 4, password: 'lichunhua' },
      { userName: 'weihaoxue', userId: 5, password: 'weihaoxue' },
      { userName: 'wubozhong', userId: 6, password: 'wubozhong' },
      { userName: 'renqiujing', userId: 7, password: 'renqiujing' },
      { userName: 'jiangwei', userId: 8, password: 'jiangwei' },
      { userName: 'xingdongshen', userId: 9, password: 'xingdongshen' }
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
