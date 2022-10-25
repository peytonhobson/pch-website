<template>
  <div class="h-screen w-screen">
    <div class="flex items-center justify-center h-full w-full">
      <div class="text-center mt-4">
        <img
          class="mb-4 img-error"
          :src="getImgURL('error-404-monochrome.svg')"
        />
        <p class="mb-4">This requested URL was not found on this server.</p>
        <router-link to="/">
          <action-button type="primary" text="Return to Home" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import getImgURL from "@/composables/getImgURL";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "PageNotFoundView",
  components: {
    ActionButton,
  },
  setup() {
    return { getImgURL };
  },
});
</script>
