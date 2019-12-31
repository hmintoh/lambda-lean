// Dynamic importing based on requested routes
const ViewHome = () => import("~Views/home.vue");
const ViewServices = () => import("~Views/services.vue");
const ViewPortfolio = () => import("~Views/portfolio.vue");

const routes = [
  { path: "/", component: ViewHome },
  { path: "/services", component: ViewServices },
  { path: "/portfolio", component: ViewPortfolio }
];

module.exports = { routes };
