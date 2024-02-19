<template>
  <card :body="false" class="max-w-lg w-5/6 md:w-full h-full py-10">
    <template #other>
      <div class="w-full h-full flex items-center justify-evenly prose">
        <div class="avatar">
          <div class="w-20 h-20 md:w-32 md:h-32 rounded-full">
            <font-awesome-icon
              :icon="['fas', 'user-circle']"
              class="h-full w-full text-brand-green-gray"
            />
            <!-- <img :src="getImgURL('Headshot.jpg')" class="mt-0" /> -->
          </div>
        </div>
        <h2 class="mt-0">Janelle Leavell</h2>
      </div>
      <div class="w-full h-full pt-10 flex items-center justify-evenly prose">
        <div class="avatar">
          <div class="w-20 h-20 md:w-32 md:h-32 rounded-full">
            <font-awesome-icon
              :icon="['fas', 'user-circle']"
              class="h-full w-full text-brand-green-gray"
            />
            <!-- <img :src="getImgURL('Headshot.jpg')" class="mt-0" /> -->
          </div>
        </div>
        <h2 class="mt-0">Margie Hibner</h2>
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/Shared/Card.vue";
import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "OwnersAndOperatorsCard",
  components: {
    Card,
  },
  setup() {
    return { getImgURL };
  },
});
</script>
