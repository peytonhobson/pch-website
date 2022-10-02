import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const FacilitiesView = () => import("@/views/FacilitiesView.vue");
const BlogView = () => import("@/views/BlogView.vue");

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
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
