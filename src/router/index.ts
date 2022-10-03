import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const FacilitiesView = () => import("@/views/FacilitiesView.vue");
const BlogView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/BlogView.vue");
const BlogPostView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/BlogPostView.vue");

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
  {
    path: "/blog/posts/:title",
    name: "BlogPost",
    component: BlogPostView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
