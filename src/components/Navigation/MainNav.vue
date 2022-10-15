<template>
  <nav :class="navClass">
    <div class="flex flex-nowrap justify-between items-center w-full">
      <router-link to="/" class="flex items-center">
        <img
          :src="getImgURL('other/premier-care-homes-logo1.png')"
          class="mr-3 h-20"
          alt="Premier Care Homes Logo"
        />
      </router-link>
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
      <div v-else class="mr-2 border border-black px-2 py-1">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          size="2x"
          @click="handleDropdown"
        />
      </div>
    </div>
  </nav>
  <div>
    <ul
      v-if="isOpen"
      class="flex flex-col p-4 mt-4 w-full justify-evenly md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-white animate-dropDown"
    >
      <li v-for="listItem in listItems" :key="listItem.text">
        <router-link
          :to="listItem.to"
          class="block py-2 pr-4 pl-3 md:px-0 md:py-5 text-gray-400 hover:text-brand-green-gray font-bold text-lg md:text-base underline-offset-8 decoration-4 hover:underline"
          aria-current="page"
          @click="handleDropdown"
          >{{ listItem.text }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  computed,
  onBeforeUnmount,
  watch,
} from "vue";

import { useRoute } from "vue-router";

import getImgURL from "@/helpers/getImgURL";

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
        ["bg-transparent"]: transparentBackground.value,
        ["bg-white"]: !transparentBackground.value,
      };
    });

    const route = useRoute();

    watch(
      () => route.path,
      () => console.log(route.path)
    );

    const navItemClass = computed(() => {
      return {
        ["nav-list-item"]: true,
        ["text-white"]:
          transparentBackground.value && !route.path.match("/Facilities/"),
      };
    });

    const handleScroll = () => {
      let scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      if (scrollTop > 10) {
        transparentBackground.value = false;
      } else {
        transparentBackground.value = true;
      }
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
    };
  },
});
</script>

<style scoped>
.navbar-main {
  @apply w-full p-2 md:p-6 h-[12vh] items-center flex fixed top-0 z-50;
  transition: background-color 1s ease 0s;
}

.nav-list-item {
  @apply block py-2 px-7 hover:text-brand-green-gray md:py-0 font-bold text-lg underline-offset-8 decoration-4 hover:underline;
}
</style>
