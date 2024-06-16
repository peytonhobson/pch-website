import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcaseMedical,
  faPeopleCarry,
  faPeopleGroup,
  faBars,
  faCheck,
  faUserCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";
import "@/assets/tailwind.css";
import VueLazyload from "vue-lazyload";
import useLoadingState from "@/composables/useLoadingState";
import { createGtm } from "@gtm-support/vue-gtm";

library.add(faBriefcaseMedical);
library.add(faPeopleCarry);
library.add(faPeopleGroup);
library.add(faBars);
library.add(faCheck);
library.add(faUserCircle);
library.add(faSpinner);

const app = createApp(App);
const { setLoading } = useLoadingState();

router.beforeEach((to, from, next) => {
  if (!from.name) {
    setLoading(true);
  }
  next();
});

router.afterEach(() => {
  setLoading(false);
});

app
  .use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1,
  })
  .use(router)
  .use(
    createGtm({
      id: "G-ET3W75J93L",
      vueRouter: router,
    })
  )
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
