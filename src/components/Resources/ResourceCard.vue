<template>
  <card>
    <template #title>
      <h2 class="card-title justify-center">{{ title }}</h2>
    </template>
    <template #body>
      <ul
        class="flex flex-wrap justify-start row-span-6 md:pb-5 md:px-10 list-disc"
      >
        <li
          v-for="resource in resources"
          :key="resource.id"
          class="hover:underline text-left my-1.5"
        >
          <a :href="resource.link" target="_blank" title="">{{
            resource.text
          }}</a>
        </li>
      </ul>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ResourceType } from "@/api/types";
import Card from "@/components/Shared/Card.vue";

export default defineComponent({
  name: "ResourceCard",
  components: {
    Card,
  },
  props: {
    resources: {
      type: Object as () => ResourceType[],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
