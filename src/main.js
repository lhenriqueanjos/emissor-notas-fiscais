import Vue from 'vue';
import { App } from '@/core';
import router from './core/router.config';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
