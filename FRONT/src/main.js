// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import './assets/css/main.css'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './storage'
import VueResource from 'vue-resource'
import authService from './services/auth'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueRouter);
const router =  new VueRouter({
   mode: 'hash',
   routes: routes
});
router.beforeEach((to, from, next) =>{
  if (to.meta.auth && !authService.isLogin() ){
      next({
        path: "/",
        query: {redirect: to.fullPath}
      });
      return;
  }
  next();

});

Vue.http.interceptors.push(function(request, next){
  var token = window.gApp.$store.state.user.token;
  if (token && token.length > 0){
    request.headers.set('authorization', 'Jwt ' + token);
  }
  next();

});

/* eslint-disable no-new */
window.gApp = new Vue({
  el: '#app',
  store,
  router,
  render: h =>  h(App)
})
