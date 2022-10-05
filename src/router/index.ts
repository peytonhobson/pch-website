import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const FacilitiesView = () =>
  import(/* webpackChunkName: "facilities" */ "@/views/FacilitiesView.vue");
const FacilityView = () =>
  import(/* webpackChunkName: "facilities" */ "@/views/FacilityView.vue");
const BlogView = () =>
  import(/* webpackChunkName: "posts" */ "@/views/BlogView.vue");
const BlogPostView = () =>
  import(/* webpackChunkName: "posts" */ "@/views/BlogPostView.vue");
const TestimonialsView = () => import("@/views/TestimonialsView.vue");
const ResourcesView = () => import("@/views/ResourcesView.vue");
const ServicesView = () => import("@/views/ServicesView.vue");
const AboutUsView = () => import("@/views/AboutUsView.vue");

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
    path: "/facilities/:name",
    name: "Facility",
    component: FacilityView,
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
  {
    path: "/testimonials",
    name: "Testimonials",
    component: TestimonialsView,
  },
  {
    path: "/resources",
    name: "Resources",
    component: ResourcesView,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/about_us",
    name: "AboutUs",
    component: AboutUsView,
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
