import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
    }
  ]
})
