import { createRouter, createWebHistory } from "vue-router";
import { loadImage } from "./loadImage";

import HomeImage from "@/assets/other/landing-hero.jpg";
import FacilitiesImage from "@/assets/other/facilities-hero.jpg";
import TestimonialsImage from "@/assets/other/testimonials-hero.jpg";
import ResourcesImage from "@/assets/other/resources-hero.jpg";
import ServicesImage from "@/assets/other/services-hero.jpg";
import AboutUsImage from "@/assets/other/aboutus-hero.jpg";
import EmploymentImage from "@/assets/other/employment-hero.jpg";

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
    beforeEnter() {
      loadImage(FacilitiesImage);
    },
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
    beforeEnter() {
      loadImage(TestimonialsImage);
    },
  },
  {
    path: "/Resources",
    name: "Resources",
    component: ResourcesView,
    beforeEnter() {
      loadImage(ResourcesImage);
    },
  },
  {
    path: "/Services",
    name: "Services",
    component: ServicesView,
    beforeEnter() {
      loadImage(ServicesImage);
    },
  },
  {
    path: "/About-Us",
    name: "AboutUs",
    component: AboutUsView,
    beforeEnter() {
      loadImage(AboutUsImage);
    },
  },
  {
    path: "/Employment",
    name: "Employment",
    component: EmploymentView,
    beforeEnter() {
      loadImage(EmploymentImage);
    },
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
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app")!.scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
