import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcaseMedical,
  faPeopleCarry,
  faPeopleGroup,
  faBars,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";
import "@/assets/tailwind.css";
import store, { key } from "./store";
import VueLazyload from "vue-lazyload";

library.add(faBriefcaseMedical);
library.add(faPeopleCarry);
library.add(faPeopleGroup);
library.add(faBars);
library.add(faCheck);

createApp(App)
  .use(store, key)
  .use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1,
  })
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
