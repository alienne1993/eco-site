import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import axios from 'axios';
import VueAxios from "vue-axios";
import BootstrapVue from 'bootstrap-vue';
import bootstrap from 'bootstrap';
import VueCardPayment from 'vue-card-payment'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-card-payment/dist/vue-card-payment.css'

//Vue.use(VueCardPayment)

Vue.use(BootstrapVue, bootstrap);
Vue.use(VueAxios,axios);

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
