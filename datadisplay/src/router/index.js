import Vue from 'vue'
import Router from 'vue-router'
import BeforeHome from "../views/before/BeforeHome";
import NowHome from "../views/now/NowHome";
import FutureHome from "../views/future/FutureHome";
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
      component:()=>import('@/views/Home'),
    },
    {
      path:'/test',
      name:'Test',
      component:()=>import('@/views/before/Test')
    },
    {
      path:'/temp',
      name:'Temp',
      component:()=>import('@/views/now/Temp')
    }
  ]
})
