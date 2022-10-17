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
      <main-nav-desktop-list
        :transparent-background="transparentBackground"
        :list-items="listItems"
      />
    </div>
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
    <main-nav-mobile-list
      :is-open="isOpen"
      :list-items="listItems"
      @handle-open="isOpen = !isOpen"
    />
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
import MainNavDesktopList from "@/components/Navigation/MainNavDesktopList.vue";
import MainNavMobileButton from "@/components/Navigation/MainNavMobileButton.vue";
import MainNavMobileList from "./MainNavMobileList.vue";

export default defineComponent({
  name: "MainNav",
  components: {
    MainNavDesktopList,
    MainNavMobileButton,
    MainNavMobileList,
  },
  setup() {
    const listItems = [
      { text: "Home", to: "/" },
      { text: "Services", to: "/Services" },
      { text: "Facilities", to: "/Facilities" },
      { text: "Testimonials", to: "/Testimonials" },
      { text: "About Us", to: "/About-Us" },
    ];

    const isOpen = ref(false);

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
  @apply navbar w-full py-2 xl:h-[12vh] fixed flex flex-wrap items-center top-0 z-50 px-0;
  transition: background-color 1s ease 0s;
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
