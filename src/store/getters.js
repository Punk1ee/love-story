const getters = {
  username: state => state.user.username,
  token: state => state.user.token,
  curView: state => state.layout.curView
}

export default getters
