import { getToken, setToken } from '@/utils'
import { login } from '@/api/login'
import Cookie from 'js-cookie'

const user = {
  state: {
    userName: Cookie.get('userName') || '',
    userId: Cookie.get('userId') || '',
    token: getToken() || ''
  },

  mutations: {
    SET_USER: (state, { userName, userId }) => {
      state.userName = userName
      state.userId = userId
      Cookie.set('userName', userName)
      Cookie.set('userId', userId)
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