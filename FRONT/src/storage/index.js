import VueX from 'vuex'
import Vue from 'vue'
import User from './user'

Vue.use(VueX)

const  store = new VueX.Store({
modules:{
  user:User
}
});
export default store
