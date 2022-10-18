<template>
  <card :body="false" class="max-w-lg w-5/6 md:w-full h-full">
    <template #other>
      <div class="w-full h-full py-5 flex items-center justify-evenly prose">
        <div class="avatar">
          <div class="w-20 h-20 md:w-32 md:h-32 rounded-full">
            <img :src="getImgURL('Headshot.jpg')" class="mt-0" />
          </div>
        </div>
        <h2 class="mt-0">Janelle Leavell</h2>
      </div>
      <div class="w-full h-full py-5 flex items-center justify-evenly prose">
        <div class="avatar">
          <div class="w-20 h-20 md:w-32 md:h-32 rounded-full">
            <img :src="getImgURL('Headshot.jpg')" class="mt-0" />
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
