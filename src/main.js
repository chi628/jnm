import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import { localize } from 'vee-validate';
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate/dist/vee-validate.full.esm';
import tw from 'vee-validate/dist/locale/zh_TW.json';
import $ from 'jquery';
import App from './App.vue';
import router from './router';

window.$ = $;
localize('zh_TW', tw);
Vue.component('Loading', Loading);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(VueAxios, axios);
Vue.filter('money', (money) => {
  const parts = money.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
});

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
