<template>
  <div
    class="rounded-2xl bg-gray-300 flex flex-wrap content-center shadow-2xl p-5"
  >
    <div class="flex flex-row">
      <div class="text-left italic">"{{ testimonial.quote }}"</div>
    </div>
    <div class="flex flex-row mt-5">
      <div class="text-left font-bold">{{ testimonial.author }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { Testimonial } from "@/api/types";

export default defineComponent({
  name: "TestimonialCard",
  props: {
    testimonial: {
      type: Object as () => Testimonial,
      required: true,
    },
  },
  setup() {},
});
</script>
