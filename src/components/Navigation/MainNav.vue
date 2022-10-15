<template>
  <nav :class="navClass">
    <div class="flex flex-nowrap justify-between items-center w-full">
      <router-link to="/" class="flex items-center">
        <img
          :src="getImgURL('other/premier-care-homes-logo1.png')"
          class="mr-3 h-16"
          alt="Premier Care Homes Logo"
        />
      </router-link>
      <ul
        v-if="!isMobile"
        class="flex flex-col p-4 mt-4 w-full justify-evenly md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
      >
        <li v-for="listItem in listItems" :key="listItem.text">
          <router-link
            :to="listItem.to"
            class="block py-2 pr-4 pl-3 text-white hover:text-brand-green-gray md:p-0 font-bold text-lg underline-offset-8 decoration-4 hover:underline"
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
} from "vue";

import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "MainNav",
  setup() {
    const listItems = [
      { text: "Home", to: "/" },
      { text: "Services", to: "/Services" },
      { text: "Facilities", to: "/Facilities" },
      { text: "Blog", to: "/Blog" },
      { text: "Testimonials", to: "/Testimonials" },
      { text: "Resources", to: "/Resources" },
      { text: "Careers", to: "/Careers" },
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
        ["background-transparent"]: transparentBackground.value,
        ["background-white"]: !transparentBackground.value,
      };
    });

    const handleScroll = () => {
      let scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      console.log(scrollTop);
      if (scrollTop > 10) {
        transparentBackground.value = false;
      } else {
        transparentBackground.value = true;
      }
    };

    onBeforeMount(() => window.addEventListener("scroll", handleScroll));
    onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));

    return { listItems, isMobile, handleDropdown, isOpen, getImgURL, navClass };
  },
});
</script>

<style scoped>
.navbar-main {
  @apply w-full p-2 md:p-6 h-[15vh] items-center flex fixed top-0 z-50;
  transition: background-color 1s ease 0s;
}

.background-transparent {
  @apply bg-transparent;
}

.background-white {
  @apply bg-white;
}
</style>
