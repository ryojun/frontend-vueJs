import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Axios from 'axios'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // meta: { auth: true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // meta: { auth: true},
    component: () => import('../views/Register')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//ตรวจสอบสิทธ์การเข้าถึง
router.beforeEach((to, from, next) =>{
  console.log(to.meta.auth)
  if (!to.meta.auth) return next();
  store.dispatch('get_user_login')
  .then(() => next())
  .catch(() => next({name: 'Login'}))
})


export default router
