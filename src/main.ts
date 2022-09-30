import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcaseMedical,
  faPeopleCarry,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";
import "@/assets/tailwind.css";

library.add(faBriefcaseMedical);
library.add(faPeopleCarry);
library.add(faPeopleGroup);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
