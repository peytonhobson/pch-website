import { createRouter, createWebHistory } from "vue-router";

import HomeImage from "@/assets/other/landing-hero.jpg";
import FacilitiesImage from "@/assets/other/facilities-hero.jpg";
import TestimonialsImage from "@/assets/other/testimonials-hero.jpg";
import ResourcesImage from "@/assets/other/resources-hero.jpg";
import ServicesImage from "@/assets/other/services-hero.jpg";
import AboutUsImage from "@/assets/other/aboutus-hero.jpg";
import EmploymentImage from "@/assets/other/employment-hero.jpg";
import { preloadImage } from "@/composables/preloadImage";

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
    beforeEnter: (to: any, from: any, next: () => void) => {
      console.log(HomeImage);
      preloadImage(HomeImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/Facilities",
    name: "Facilities",
    component: FacilitiesView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(FacilitiesImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
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
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(TestimonialsImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/Resources",
    name: "Resources",
    component: ResourcesView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(ResourcesImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/Services",
    name: "Services",
    component: ServicesView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(ServicesImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/About-Us",
    name: "AboutUs",
    component: AboutUsView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(AboutUsImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/Employment",
    name: "Employment",
    component: EmploymentView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(EmploymentImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
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
