import { getToken, setToken } from '@/utils'
import { login } from '@/api/login'

const user = {
  state: {
    userName: sessionStorage.getItem('userName') || '',
    userId: sessionStorage.getItem('userId') || '',
    admin: sessionStorage.getItem('admin') || false,
    token: getToken() || ''
  },

  mutations: {
    SET_USER: (state, { userName, userId, admin }) => {
      state.userName = userName
      state.userId = userId
      state.admin = !!admin
      sessionStorage.setItem('userName', userName)
      sessionStorage.setItem('userId', userId)
      sessionStorage.setItem('admin', admin)
    },
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    }
  },

  actions: {
    Login({ commit }, userInfo) {
      const { userName, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ userName: userName.trim(), password: password }).then(response => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          commit('SET_USER', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })

    }
  }
}

export default user