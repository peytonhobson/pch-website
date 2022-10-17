<template>
  <nav :class="navClass">
    <div class="flex-1 mx-2 items-center">
      <router-link to="/" class="flex items-center">
        <img
          :src="getImgURL('other/premier-care-homes-logo1.png')"
          class="mr-3 h-16 md:h-20"
          alt="Premier Care Homes Logo"
        />
      </router-link>
    </div>
    <div v-if="!isMobile" class="flex-none">
      <ul
        v-if="!isMobile"
        class="flex flex-col p-4 mr-5 mt-4 w-full justify-end md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
      >
        <li v-for="listItem in listItems" :key="listItem.text">
          <router-link
            :to="listItem.to"
            :class="navItemClass"
            aria-current="page"
            >{{ listItem.text }}</router-link
          >
        </li>
      </ul>
    </div>
    <div v-else class="flex-none mx-2">
      <button class="btn btn-square btn-ghost">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          size="2x"
          :class="mobileIconClass"
          @click="handleDropdown"
        />
      </button>
    </div>
    <Transition>
      <div v-if="isOpen" class="w-full bg-transparent">
        <ul
          class="flex flex-col p-4 w-full justify-evenly md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent"
        >
          <li
            v-for="listItem in listItems"
            :key="listItem.text"
            class="bg-transparent"
          >
            <router-link
              :to="listItem.to"
              class="block py-2 pr-4 pl-3 md:px-0 md:py-5 hover:text-brand-green-gray font-bold text-lg md:text-base underline-offset-8 decoration-4 hover:underline bg-transparent"
              aria-current="page"
              @click="handleDropdown"
              >{{ listItem.text }}</router-link
            >
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  computed,
  onBeforeUnmount,
} from "vue";

import { useRoute } from "vue-router";

import getImgURL from "@/helpers/getImgURL";
import handleNavScroll from "@/composables/handleNavScroll";

export default defineComponent({
  name: "MainNav",
  setup() {
    const listItems = [
      { text: "Home", to: "/" },
      { text: "Services", to: "/Services" },
      { text: "Facilities", to: "/Facilities" },
      { text: "Testimonials", to: "/Testimonials" },
      { text: "About Us", to: "/About-Us" },
    ];

    const isOpen = ref(false);

    const handleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const transparentBackground = ref(true);

    const navClass = computed(() => {
      return {
        ["navbar-main"]: true,
        ["bg-transparent"]: transparentBackground.value && !isOpen.value,
        ["bg-white"]: !transparentBackground.value || isOpen.value,
      };
    });

    const route = useRoute();

    const navItemClass = computed(() => {
      return {
        ["nav-list-item"]: true,
        ["text-white"]:
          transparentBackground.value && !route.path.match(/\/(Facilities\/)/g),
      };
    });

    const mobileIconClass = computed(() => {
      return {
        ["fill-current"]: true,
        ["text-white"]:
          transparentBackground.value &&
          !isOpen.value &&
          !route.path.match(/\/(Facilities\/)/g),
      };
    });

    const handleScroll = () => {
      transparentBackground.value = handleNavScroll();
    };

    onBeforeMount(() => window.addEventListener("scroll", handleScroll));
    onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));

    return {
      listItems,
      isMobile,
      handleDropdown,
      isOpen,
      getImgURL,
      navClass,
      navItemClass,
      mobileIconClass,
    };
  },
});
</script>

<style scoped>
.navbar-main {
  @apply navbar w-full py-2 xl:h-[12vh] fixed flex flex-wrap items-center top-0 z-50 px-0;
  transition: background-color 1s ease 0s;
}

.nav-list-item {
  @apply block py-2 px-7 hover:text-brand-green-gray md:py-0 font-bold text-lg underline-offset-8 decoration-4 hover:underline;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
