import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: "/",  name: "Home", component: () => import("../views/Home.vue")},
  {path: "/lists", name: "Lists",  component: () => import("../views/Lists.vue")},
  {path: "/counter", name: "Counter",  component: () => import("../views/Counter.vue")},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
