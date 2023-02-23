import Vue from 'vue'
import Router from 'vue-router'
import BeforeHome from "../views/before/BeforeHome";
import NowHome from "../views/now/NowHome";
import FutureHome from "../views/future/FutureHome";
import Login from "../views/Login";
import Register from "../views/Register";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/before',
      name: 'BeforeHome',
      component: BeforeHome
    },
    {
      path: '/now',
      name: 'NowHome',
      component: NowHome
    },
    {
      path: '/future',
      name: 'FutureHome',
      component: FutureHome
    },
    {
      path:'/home',
      name:'Home',
      component:()=>import('@/views/Home')
    }
  ]
})
