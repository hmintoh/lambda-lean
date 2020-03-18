import Vue from "vue";
import VueHead from "vue-head";
import VueRouter from "vue-router";
import Vue2TouchEvents from "vue2-touch-events";

import App from "./app.vue";
import router from "./router";
import "~Styles/_.scss";

Vue.use(VueHead);
Vue.use(VueRouter);
Vue.use(Vue2TouchEvents);

const Router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  root: "/",
  routes: router.routes
});

const root = new Vue({
  router: Router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new CustomEvent("app.rendered"));
  }
});

document.addEventListener("DOMContentLoaded", function() {
  root.$mount("#app");
});
