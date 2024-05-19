<template>
  <card
    :body="false"
    class="duration-500 xl:hover:-translate-y-5 transition-all bg-white md:max-w-xl md:min-w-[25rem]"
  >
    <template #otherTitle>
      <h2 class="text-3xl pt-5 text-center font-bold">What We Provide</h2>
    </template>
    <template #other>
      <ul class="font-sans w-5/6 xl:w-full py-5 px-5 lg:px-10 xl:py-10 mx-auto">
        <li
          v-for="item in serviceItems"
          :key="item"
          class="text-left my-2 flex"
        >
          <font-awesome-icon
            class="fill-current text-green-500 flex-col pt-2"
            :icon="['fas', 'check']"
          />
          <span class="flex-col ml-2 prose">{{ item }}</span>
        </li>
      </ul>
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
      "Personalized services to meet each individual’s care needs, including: dressing, bathing, feeding assistance, grooming, toileting and assist with mobility.",
      "Laundry (washables only)",
      "Scheduling of appointments and transportation",
      "RN for staff teaching and delegation",
      "Bath aide to complete personalized care",
      "Modified diets (diabetic diet, lactose free, gluten free)",
      "Dysphagia diet — pureed/soft foods and thickened liquids",
      "Visiting Beautician (hair and nail services)",
      "Visiting Nurse Practitioner (optional)",
      "Hospice care",
    ];
    return { serviceItems };
  },
});
</script>
