import { createRouter, createWebHistory } from "vue-router";

const homeImage =
  "https://premier-care-homes.s3.amazonaws.com/assets/other/landing-hero.jpg";
const facilitiesImage =
  "https://premier-care-homes.s3.amazonaws.com/assets/other/facilities-hero.jpg";
const testimonialsImage =
  "https://premier-care-homes.s3.amazonaws.com/assets/other/testimonials-hero.jpg";
const resourcesImage =
  "https://premier-care-homes.s3.amazonaws.com/assets/other/resources-hero.jpg";
const servicesImage =
  "https://premier-care-homes.s3.amazonaws.com/assets/other/services-hero.jpg";
const aboutUsImage =
  "https://premier-care-homes.s3.amazonaws.com/assets/other/aboutus-hero.jpg";
const employmentImage =
  "https://premier-care-homes.s3.amazonaws.com/assets/other/employment-hero.jpg";
import { preloadImage } from "@/composables/preloadImage";

const HomeView = () => import("@/views/HomeView.vue");
const FacilitiesView = () =>
  import(/* webpackChunkName: "facilities" */ "@/views/FacilitiesView.vue");
const FacilityView = () =>
  import(/* webpackChunkName: "facilities" */ "@/views/FacilityView.vue");
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
      preloadImage(homeImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/facilities",
    name: "Facilities",
    component: FacilitiesView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(facilitiesImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/facilities/:name",
    name: "Facility",
    component: FacilityView,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: TestimonialsView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(testimonialsImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/resources",
    name: "Resources",
    component: ResourcesView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(resourcesImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(servicesImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUsView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(aboutUsImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/employment",
    name: "Employment",
    component: EmploymentView,
    beforeEnter: (to: any, from: any, next: () => void) => {
      preloadImage(employmentImage).then(() => {
        next(); // Proceed with the route navigation once the image is loaded
      });
    },
  },
  {
    path: "/locations",
    name: "Locations",
    component: LocationsView,
  },
  {
    path: "/staff",
    redirect: { name: "AboutUs" },
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
