const user = {
  state: {
    curView: JSON.parse(sessionStorage.getItem('curView')) || {}
  },

  mutations: {
    SET_CUR_VIEW: (state, { name, path }) => {
      state.curView.name = name
      state.curView.path = path
      sessionStorage.setItem('curView', JSON.stringify({ name, path }))
    }
  },

  actions: {
    setCurView({ commit }, { name, path }) {
      commit('SET_CUR_VIEW', { name, path })
    }
  }
}

export default user
