// Dynamic importing based on requested routes
const ViewHome = () => import("~Views/home.vue");
const ViewServices = () => import("~Views/services.vue");

const routes = [
  { path: "/", component: ViewHome },
  { path: "/services", component: ViewServices }
];

module.exports = { routes };
