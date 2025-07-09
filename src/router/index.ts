import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DasboardPage from '../views/DasboardPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    meta: { title: "Panzer Controls" },
    component: DasboardPage
  },
  {
    path: '/downloads',
    name: 'downloads',
    meta: { title: "Downloads | Panzer Controls" },
    component: () => import(/* webpackChunkName: "downloads" */ '../views/DownloadsPage.vue')
  },
  {
    path: '/downloads/:slug',
    name: 'download-details',
    meta: { title: "Download Details | Panzer Controls" },
    component: () => import(/* webpackChunkName: "downloads details" */ '../views/DetailsPage.vue')
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
