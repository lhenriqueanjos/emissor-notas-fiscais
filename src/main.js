import Vue from 'vue';
import { App } from '@/core';
import router from './core/router.config';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
