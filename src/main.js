import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";
import { store } from "./store/store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
