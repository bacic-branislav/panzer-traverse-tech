import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { title: "Panzer Controls" },
    component: HomePage
  },
  {
    path: '/downloads',
    name: 'downloads',
    meta: { title: "Downloads | Panzer Controls" },
    component: () => import(/* webpackChunkName: "downloads" */ '../views/DownloadsPage.vue')
  },
  {
    path: '/downloads/:product',
    name: 'download-product',
    meta: { title: "Details | Panzer Controls" },
    component: () => import(/* webpackChunkName: "downloads product" */ '../views/DetailsPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: "Login | Panzer Controls" },
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: "Register | Panzer Controls" },
    component: () => import(/* webpackChunkName: "register" */ '../views/auth/RegisterPage.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: { title: "Not Found" },
    component: () => import(/* webpackChunkName: "404" */ '../views/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to:any) => {
  document.title = to.meta.title;
});

export default router;
