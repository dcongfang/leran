import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Alert from '@/components/common/Alert'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/table',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/table/alert',
          name: 'Alert',
          component: Alert
        }
      ]
    }
  ]
})