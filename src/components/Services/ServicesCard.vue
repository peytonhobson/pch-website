<template>
  <card
    :body="false"
    class="duration-500 xl:hover:-translate-y-5 transition-all max-h-128"
  >
    <template #other>
      <div class="flex w-full h-full">
        <ul
          class="grid grid-cols-3 grid-rows-1 w-full py-5 px-5 md:px-10 xl:py-10 justify-items-center"
        >
          <li
            v-for="index in 12"
            :key="index"
            class="text-left px-5 my-3 xl:y-2 flex col-span-1 w-full"
          >
            <font-awesome-icon
              class="fill-current text-green-500 flex-col pt-2"
              :icon="['fas', 'check']"
            />
            <span class="flex-col ml-2">{{ serviceItems[index - 1] }}</span>
          </li>
          <li
            class="text-center px-5 my-3 xl:y-2 flex justify-center col-span-3 w-2/3"
          >
            <font-awesome-icon
              class="fill-current text-green-500 flex-col pt-2"
              :icon="['fas', 'check']"
            />
            <span class="ml-2 w-full">{{ serviceItems[12] }}</span>
          </li>
        </ul>
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/Shared/Card.vue";

export default defineComponent({
  name: "ServicesCard0",
  components: {
    Card,
  },
  setup() {
    const serviceItems = [
      "A homelike setting with 24 hour direct care staff, 5:1 resident to caregiver ratio",
      "Home cooked meals and snacks, diabetic meals offered",
      "Medication management, including insulin.",
      "Laundry (washables only)",
      "Scheduling of appointments and transportation",
      "RN for staff teaching and delegation",
      "Bath aide to complete personalized care",
      "Modified diets (diabetic diet, lactose free, gluten free)",
      "Dysphagia diet — pureed/soft foods and thickened liquids",
      "On-site dental hygienist services",
      "On-site professional beauty services",
      "Hospice care",
      "Personalized services to meet each individual’s care needs, including: dressing, bathing, feeding assistance, grooming, toileting and assist with mobility.",
    ];

    return { serviceItems };
  },
});
</script>
