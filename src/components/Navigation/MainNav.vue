<template>
  <nav class="w-full bg-white p-2 md:p-6">
    <div class="flex flex-nowrap items-center w-full">
      <router-link to="/" class="flex items-center">
        <img
          src="@/assets/PCH.png"
          class="mr-3 h-16"
          alt="Premier Care Homes Logo"
        />
      </router-link>
      <ul
        v-if="!isMobile"
        class="flex flex-col p-4 mt-4 w-full justify-evenly md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-white"
      >
        <li :key="listItem.text" v-for="listItem in listItems">
          <router-link
            :to="listItem.to"
            class="block py-2 pr-4 pl-3 text-gray-400 hover:text-brand-green-gray md:p-0 font-bold text-lg underline-offset-8 decoration-4 hover:underline"
            aria-current="page"
            >{{ listItem.text }}</router-link
          >
        </li>
      </ul>
      <ul v-else></ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "MainNav",
  setup() {
    const listItems = [
      { text: "Home", to: "/" },
      { text: "Services", to: "/services" },
      { text: "Staff", to: "/staff" },
      { text: "Facilities", to: "/facilities" },
      { text: "Blog", to: "/blog" },
      { text: "Testimonials", to: "/testimonials" },
      { text: "Resources", to: "/resources" },
      { text: "Careers", to: "/careers" },
    ];

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    console.log(isMobile)

    return { listItems, isMobile };
  },
});
</script>
