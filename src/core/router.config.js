import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes as notaFiscalRoutes } from '../nota-fiscal';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...notaFiscalRoutes,
  ],
});

export default router;
