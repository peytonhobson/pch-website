import { createRouter, createWebHashHistory } from "vue-router";
import { loadImage } from "./loadImage";

import HomeImage from "@/assets/other/landing-hero.jpg";

const HomeView = () => import("@/views/HomeView.vue");
const FacilitiesView = () =>
  import(/* webpackChunkName: "facilities" */ "@/views/FacilitiesView.vue");
const FacilityView = () =>
  import(/* webpackChunkName: "facilities" */ "@/views/FacilityView.vue");
const BlogView = () =>
  import(/* webpackChunkName: "posts" */ "@/views/BlogView.vue");
const BlogPostView = () =>
  import(/* webpackChunkName: "posts" */ "@/views/BlogPostView.vue");
const TestimonialsView = () =>
  import(/* webpackChunkName: "testimonials" */ "@/views/TestimonialsView.vue");
const ResourcesView = () =>
  import(/* webpackChunkName: "resources" */ "@/views/ResourcesView.vue");
const ServicesView = () =>
  import(/* webpackChunkName: "services" */ "@/views/ServicesView.vue");
const AboutUsView = () =>
  import(/* webpackChunkName: "about-us" */ "@/views/AboutUsView.vue");
const EmploymentView = () =>
  import(/* webpackChunkName: "employment" */ "@/views/EmploymentView.vue");
const LocationsView = () =>
  import(/* webpackChunkName: "locations" */ "@/views/LocationsView.vue");
const PageNotFoundView = () =>
  import(/* webpackChunkName: "404" */ "@/views/PageNotFoundView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter() {
      loadImage(HomeImage);
    },
  },
  {
    path: "/Facilities",
    name: "Facilities",
    component: FacilitiesView,
  },
  {
    path: "/Facilities/:name",
    name: "Facility",
    component: FacilityView,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: BlogView,
  },
  {
    path: "/Blog/Posts/:title",
    name: "BlogPost",
    component: BlogPostView,
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: TestimonialsView,
  },
  {
    path: "/Resources",
    name: "Resources",
    component: ResourcesView,
  },
  {
    path: "/Services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/About-Us",
    name: "AboutUs",
    component: AboutUsView,
  },
  {
    path: "/Employment",
    name: "Employment",
    component: EmploymentView,
  },
  {
    path: "/Locations",
    name: "Locations",
    component: LocationsView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app")!.scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
