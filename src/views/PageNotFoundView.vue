<template>
  <div class="container">
    <div class="flex items-center justify-center">
      <div class="text-center mt-4">
        <img class="mb-4 img-error" src="assets/img/error-404-monochrome.svg" />
        <p class="lead">This requested URL was not found on this server.</p>
        <router-link to="/">Return to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNotFoundView",
  setup() {},
});
</script>
