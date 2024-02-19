<template>
  <card :body="false" class="w-5/6 md:w-full h-full max-w-lg">
    <template #other>
      <div
        class="w-full h-full py-8 md:py-16 flex items-center justify-evenly prose"
      >
        <div class="avatar">
          <div class="w-20 h-20 md:w-32 md:h-32 rounded-full">
            <font-awesome-icon
              :icon="['fas', 'user-circle']"
              class="h-full w-full text-brand-green-gray"
            />
            <!-- <img :src="getImgURL('Headshot.jpg')" class="mt-0" /> -->
          </div>
        </div>
        <h2 class="mt-0">Scott Leavell</h2>
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/Shared/Card.vue";
import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "AffiliatesCard",
  components: {
    Card,
  },
  setup() {
    return { getImgURL };
  },
});
</script>
