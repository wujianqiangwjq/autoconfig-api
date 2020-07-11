const  state = {
  uesrname: '',
  token: ''

}
const mutations = {
  set_token(state, token){
    state.token = token;
  },
  set_username(state, username){
    state.username = username;
  }


}

const  actions = {
  set_token({commit},token){
    commit("set_token", token);
  },
  set_username({commit}, username){
    commit("set_username", username);
  }

}

const userModule = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
}
export default userModule
