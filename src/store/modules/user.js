import { getToken, setToken, getUserInfo } from '@/utils'
import { login } from '@/api/login'
import Cookie from 'js-cookie'

const user = {
  state: {
    username: Cookie.get('username') || '',
    token: getToken()
  },

  mutations: {
    SET_USER: (state, { username }) => {
      state.username = username
      Cookie.set('username', username)
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    Login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          commit('SET_USER', userInfo)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
      
    }
  }
}

export default user
