<template>
  <nav class="w-full bg-white p-2 md:p-6 h-[15vh] items-center flex">
    <div class="flex flex-nowrap justify-between items-center w-full">
      <router-link to="/" class="flex items-center">
        <img
          src="https://pch-development-data.s3.amazonaws.com/pch_photos/other/premier-care-homes-logo1.png"
          class="mr-3 h-16"
          alt="Premier Care Homes Logo"
        />
      </router-link>
      <ul
        v-if="!isMobile"
        class="flex flex-col p-4 mt-4 w-full justify-evenly md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-white"
      >
        <li v-for="listItem in listItems" :key="listItem.text">
          <router-link
            :to="listItem.to"
            class="block py-2 pr-4 pl-3 text-gray-400 hover:text-brand-green-gray md:p-0 font-bold text-lg underline-offset-8 decoration-4 hover:underline"
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
  <div class="">
    <ul
      v-if="isOpen"
      class="flex flex-col p-4 mt-4 w-full justify-evenly md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-white animate-dropDown"
    >
      <li v-for="listItem in listItems" :key="listItem.text">
        <router-link
          :to="listItem.to"
          class="block py-2 pr-4 pl-3 text-gray-400 hover:text-brand-green-gray md:p-0 font-bold text-lg underline-offset-8 decoration-4 hover:underline"
          aria-current="page"
          @click="handleDropdown"
          >{{ listItem.text }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainNav",
  setup() {
    const listItems = [
      { text: "Home", to: "/" },
      { text: "Services", to: "/services" },
      { text: "Facilities", to: "/facilities" },
      { text: "Blog", to: "/blog" },
      { text: "Testimonials", to: "/testimonials" },
      { text: "Resources", to: "/resources" },
      { text: "Careers", to: "/careers" },
      { text: "About Us", to: "/about_us" },
    ];

    const isOpen = ref(false);

    const handleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    return { listItems, isMobile, handleDropdown, isOpen };
  },
});
</script>
