import Vue from 'vue'
import VueRouter from 'vue-router'
import View from './View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:md',
    name: 'Home',
    component: View,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router
