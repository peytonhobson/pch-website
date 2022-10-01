import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const FacilitiesView = () => import("@/views/FacilitiesView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/facilities",
    name: "facilities",
    component: FacilitiesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
