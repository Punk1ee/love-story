const getters = {
  userName: state => state.user.userName,
  userId: state => state.user.userId,
  token: state => state.user.token,
  curView: state => state.layout.curView
}

export default getters
