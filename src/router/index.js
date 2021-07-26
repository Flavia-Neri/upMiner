import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BusinessHistory from '../views/BusinessHistory.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/business_history',
    name: 'BusinessHistory',
    component:BusinessHistory,
    meta:{
      title:'Histórico Empresarial'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
  document.title ="upMiner - " +  to.meta.title
  }
  else{
    document.title = "upMiner"
  }
  next()
  })