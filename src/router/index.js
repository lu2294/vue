import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/views/Goods'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      components: {
        default:Goods,
          title:Title,
          image:Image,
      }
    },
      {
        path:'/cart',
          name:'cart',
          component:Cart
      }
  ]
})
