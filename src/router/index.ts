import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/plugins/firebase";
import HomePage from '../views/HomePage.vue';

const checkLoggedUser = (to: any, from: any, next: any) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) next({ name: 'downloads' })
    else next()
  });
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { title: "Panzer Controls" },
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: "About Us | Panzer Controls" },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
  },
  {
    path: '/downloads',
    name: 'downloads',
    meta: { title: "Downloads | Panzer Controls" },
    component: () => import(/* webpackChunkName: "downloads" */ '../views/DownloadsPage.vue'),
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
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/LoginPage.vue'),
    beforeEnter: checkLoggedUser
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: "Register | Panzer Controls" },
    component: () => import(/* webpackChunkName: "register" */ '../views/auth/RegisterPage.vue'),
    beforeEnter: checkLoggedUser
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
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

router.beforeEach((to:any) => {
  document.title = to.meta.title;
});

export default router;
