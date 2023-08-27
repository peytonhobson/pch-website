<template>
  <footer class="footer p-10 bg-white text-base-content">
    <div class="flex flex-wrap justify-center">
      <router-link to="/" class="flex items-center justify-center w-full" @click="handleRouteClick">
        <img
          :src="getImgURL('other/premier-care-homes-logo1.png')"
          class="mr-3 h-16 md:h-20"
          alt="Premier Care Homes Logo"
        />
      </router-link>
      <p>© Premier Care Homes.<br />All rights reserved.</p>
    </div>

    <div>
      <span class="footer-title">Care</span>

      <router-link to="/Locations" class="link link-hover" @click="handleRouteClick"
        >Locations</router-link
      >
      <router-link to="/Services" class="link link-hover" @click="handleRouteClick">Services</router-link>
      <router-link to="/Facilities" class="link link-hover" @click="handleRouteClick"
        >Facilities</router-link
      >
      <router-link to="/Testimonials" class="link link-hover" @click="handleRouteClick"
        >Testimonials</router-link
      >
    </div>
    <div>
      <span class="footer-title">Company</span>
      <router-link to="/About-Us" class="link link-hover" @click="handleRouteClick">About Us</router-link>
      <router-link to="/Employment" class="link link-hover" @click="handleRouteClick"
        >Employment</router-link
      >
      <router-link to="/Resources" class="link link-hover" @click="handleRouteClick"
        >Resources</router-link
      >
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "Footer",
  setup() {

    const handleRouteClick = () => {
      window.scrollTo(0, 0);
    };


    return { getImgURL, handleRouteClick };
  },
});
</script>
