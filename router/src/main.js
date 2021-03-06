
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'hash'
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
