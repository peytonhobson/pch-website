<template>
  <nav :class="navClass">
    <div class="mx-2 items-center justify-start cursor-pointer">
      <router-link to="/" class="flex items-center">
        <img
          :src="getImgURL('other/premier-care-homes-logo1.png')"
          class="h-16 min-w-[12rem] lg:h-20 lg:min-w-[15rem] hover:cursor-pointer"
          alt="Premier Care Homes Logo"
        />
      </router-link>
    </div>
    <main-nav-desktop-list
      v-if="!isMobile"
      :transparent-background="transparentBackground"
      :list-items="listItems"
    />
    <div v-else class="flex-none mx-2">
      <main-nav-mobile-button
        :white-text="
          transparentBackground &&
          !isOpen &&
          !route.path.match(/\/(Facilities\/)/g)
        "
        @click="isOpen = !isOpen"
      />
    </div>
    <main-nav-mobile-list :is-open="isOpen" :list-items="listItems" />
  </nav>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  computed,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  watch,
} from "vue";

import { useRoute } from "vue-router";

import getImgURL from "@/composables/getImgURL";
import handleNavScroll from "@/composables/handleNavScroll";
import MainNavDesktopList from "@/components/Navigation/MainNavDesktopList.vue";
import MainNavMobileButton from "@/components/Navigation/MainNavMobileButton.vue";
import MainNavMobileList from "./MainNavMobileList.vue";

interface Route {
  text: string;
  to: string;
}

export default defineComponent({
  name: "MainNav",
  components: {
    MainNavDesktopList,
    MainNavMobileButton,
    MainNavMobileList,
  },
  setup() {
    const listItems = ref([] as Route[]);

    onBeforeMount(
      () =>
        (listItems.value = [
          { text: "Home", to: "/" },
          { text: "Services", to: "/Services" },
          { text: "Facilities", to: "/Facilities" },
          { text: "Testimonials", to: "/Testimonials" },
          { text: "About Us", to: "/About-Us" },
        ])
    );

    const isOpen = ref(false);

    const isMobile = ref(window.innerWidth < 768);

    // Step 2: Define the resize handler function
    function handleResize() {
      isMobile.value = window.innerWidth < 768;
    }

    // Step 3: Add the event listener when the component mounts
    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    // Remove the event listener when the component unmounts
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    const transparentBackground = ref(true);

    const route = useRoute();

    // Write watcher for route that sets isOpen to false
    watch(
      () => route.path,
      () => (isOpen.value = false)
    );

    const navClass = computed(() => {
      return {
        ["navbar-main"]: true,
        ["bg-transparent"]:
          transparentBackground.value &&
          !isOpen.value &&
          !route.path.match(/\/(Facilities\/)/g),
        ["bg-white shadow-md"]:
          !transparentBackground.value ||
          isOpen.value ||
          route.path.match(/\/(Facilities\/)/g),
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
      isOpen,
      getImgURL,
      navClass,
      transparentBackground,
      route,
    };
  },
});
</script>

<style scoped>
.navbar-main {
  @apply navbar w-full py-2 xl:h-[12vh] fixed flex flex-wrap justify-between items-center top-0 z-50 px-0;
  transition: background-color 0.5s ease 0s;
}

.v-enter-active,
v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transition: none;
}
</style>
