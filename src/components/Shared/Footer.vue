<template>
  <footer class="footer p-10 bg-base-300 text-base-content">
    <div class="flex flex-wrap justify-center">
      <router-link to="/" class="flex items-center justify-center w-full">
        <img
          :src="getImgURL('other/premier-care-homes-logo1.png')"
          class="mr-3 h-16 md:h-20"
          alt="Premier Care Homes Logo"
        />
      </router-link>
      <p>© Premier Care Homes.<br />All rights reserved.</p>
    </div>

    <div>
      <span class="footer-title">Services</span>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </div>
    <div>
      <span class="footer-title">Company</span>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </div>
    <div>
      <span class="footer-title">Legal</span>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "Footer",
  setup() {
    return { getImgURL };
  },
});
</script>
