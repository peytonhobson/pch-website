<template>
  <div
    class="w-5/6 xl:w-2/5 xl:h-128 rounded-2xl bg-gray-200 grid grid-cols-1 shadow-2xl my-5"
  >
    <div
      v-if="header"
      class="w-full text-5xl md:text-6xl md:h-20 rounded-t-2xl flex items-center justify-center py-3 md:py-0 border-2 border-b-black"
    >
      <div class="self-center font-sen">
        {{ header }}
      </div>
    </div>
    <ul class="flex flex-wrap justify-start row-span-6 py-5 px-10 list-disc">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ResourceType } from "@/api/types";

export default defineComponent({
  name: "ResourceCard",

  props: {
    resources: {
      type: Object as () => ResourceType[],
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
