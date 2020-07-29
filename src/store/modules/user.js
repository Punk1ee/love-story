import { getToken, setToken, getUserInfo } from '@/utils'

const user = {
  state: {
    username: '',
    password: '',
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    Login({ commit }, userInfo) {
      const user_info = getUserInfo()
      const { username, password } = userInfo
      const canLogin = userInfo && username === user_info.username && password === user_info.password 
      return new Promise((resolve, reject) => {
        if (canLogin) {
          setToken(username)
          resolve()
        } else {
          reject()
        }
      })
      
    }
  }
}

export default user
