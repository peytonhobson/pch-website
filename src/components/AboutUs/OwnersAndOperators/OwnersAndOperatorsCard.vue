<template>
  <card :body="false" class="max-w-lg w-5/6 md:w-full h-full py-10">
    <template #other>
      <div class="w-full h-full flex items-center justify-evenly prose">
        <div class="avatar">
          <div class="w-20 h-20 md:w-32 md:h-32 rounded-full">
            <img
              src="https://premier-care-homes.s3.amazonaws.com/headshot/janelle_headshot.jpeg"
              class="mt-0 object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <h2 class="mt-0">Janelle Leavell</h2>
      </div>
      <div class="w-full h-full pt-10 flex items-center justify-evenly prose">
        <div class="avatar">
          <div class="w-20 h-20 md:w-32 md:h-32 rounded-full">
            <img
              src="https://premier-care-homes.s3.amazonaws.com/headshot/margie_headshot.jpeg"
              class="mt-0 object-cover"
              loading="lazy"
            />
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

export default defineComponent({
  name: "OwnersAndOperatorsCard",
  components: {
    Card,
  },
  setup() {},
});
</script>
