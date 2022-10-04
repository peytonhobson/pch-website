<template>
  <display-card>
    <div class="flex flex-row">
      <div class="text-left italic">"{{ testimonial.quote }}"</div>
    </div>
    <div class="flex flex-row mt-5">
      <div class="text-left font-bold">{{ testimonial.author }}</div>
    </div>
  </display-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { Testimonial } from "@/api/types";
import DisplayCard from "../Shared/DisplayCard.vue";

export default defineComponent({
  components: { DisplayCard },
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
