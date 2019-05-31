import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import LookOne from '@/components/LookOne'
import LookTwo from '@/components/LookTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children: [
        {
          path: 'lookone',
          name: 'LookOne',
          component: LookOne
        },
        {
          path: 'looktwo',
          name: 'LookTwo',
          component: LookTwo
        }
      ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
