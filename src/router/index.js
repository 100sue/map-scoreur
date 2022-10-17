import { createRouter, createWebHistory } from 'vue-router'
import UserLocation from '../views//UserLocation.vue'
import Final from '../views/Final.vue'
import CloseBuy from '../views//CloseBuy.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'userLocation',
      component: UserLocation,
    },
    {
      path: '/final',
      name: 'final',
      component: Final,
    },
    {
      path: '/closeBuy',
      name: 'closeBuy',
      component: CloseBuy,
    }
    
  ]
})

export default router;