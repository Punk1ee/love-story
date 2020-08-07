import Cookie from 'js-cookie'

const user = {
  state: {
    curView: Cookie.getJSON('curView') || {}
  },

  mutations: {
    SET_CUR_VIEW: (state, { name, path }) => {
      state.curView.name = name
      state.curView.path = path
      Cookie.set('curView', { name, path })
    }
  },

  actions: {
    setCurView({ commit }, { name, path }) {
      commit('SET_CUR_VIEW', { name, path })
    }
  }
}

export default user
