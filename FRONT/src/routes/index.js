import Login from '../components/user/login'
import Dashboard from '../components/dashboard/dashboard'
import Test from '../components/dashboard/test'
export default [
    {
      path: '/',
      meta:{
        auth: false
      },
      name: 'login',
      component: Login
    },
    {
      path: "/dashboard",
      meta: {
        auth: true
      },
      name: "dashboard",
      component: Dashboard

    },
    {
      path: "/test",
      meta: {
        auth: true
      },
      name: "test",
      component: Test

    }

  ]
