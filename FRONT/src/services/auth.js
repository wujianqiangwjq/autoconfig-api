import store from '../storage'

function isLogin(){
  var token = store.state.user.token
  if (token == ''){
    return false
  }
  return true
}


export default {
  isLogin
}
