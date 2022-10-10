<template>
  <dual-item-display class="my-36 md:my-44">
    <template #leftColumn>
      <display-card
        class="w-5/6 md:w-full mt-10 py-5 px-5 md:px-10 xl:py-10"
        rows="1"
      >
        <ul class="font-sans prose">
          <li
            v-for="item in serviceItems"
            :key="item"
            class="text-left my-2 flex"
          >
            <font-awesome-icon
              class="fill-current text-green-500 flex-col pt-2"
              :icon="['fas', 'check']"
            />
            <div class="flex-col ml-2">{{ item }}</div>
          </li>
        </ul>
      </display-card>
    </template>
    <!--end col-->

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";

export default defineComponent({
  name: "OurServicesSection",
  components: {
    DisplayCard,
    SimpleDescription,
    DualItemDisplay,
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
      "On-site dental hygienist services",
      "On-site professional beauty services",
      "Hospice care",
    ];

    const descriptionText = `Services are provided by our Premier Care Homes adult foster home resident care team, which has been carefully selected and is committed to meet individual care needs in a dignified, respectful environment. Each resident care manager has completed and passed the “Ensure Quality Care” course through Northwest Senior Service. In addition, all caregivers require a clean criminal history. Each home has a RN who provides delegation/teaching for our staff.`;

    const descriptionHeader = "Our Services";

    return { serviceItems, descriptionHeader, descriptionText };
  },
});
</script>
