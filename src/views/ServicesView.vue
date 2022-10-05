<template>
  <section
    class="bg-hero-image-don bg-cover h-[85vh] mb-10 flex items-center justify-center"
  >
    <div class="flex flex-wrap justify-center">
      <div
        class="text-4xl font-sen md:text-6xl justify-center text-center flex text-white w-full"
      >
        SERVICES & COST
      </div>
      <div class="text-2xl font-sans text-white mt-5 w-1/3">
        Exceptional, professional care for your loved one in a compassionate,
        home environment.
      </div>
    </div>
  </section>
  <section class="bg-white h-[55vh] flex items-center justify-evenly">
    <div class="grid md:grid-cols-12 grid-cols-1 h-full justify-evenly w-full">
      <div class="md:col-span-5 flex items-center justify-end w-full">
        <!-- Fix later for dynamic image and production link -->
        <div
          class="md:relative h-2/3 w-5/6 md:rounded-xl shadow-md bg-hero-image-trapper bg-cover"
        ></div>
      </div>
      <!--end col-->

      <div
        class="md:col-span-7 flex md:items-center md:justify-center my-7 md:my-0 px-10 md:px-0"
      >
        <div class="lg:ml-4">
          <h4
            class="mb-5 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold font-sen text-left"
          >
            Our Cost
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            The cost of Premier Care Homes is generally lower than nursing homes
            and assisted living facilities. It is based on several factors
            depending on the care needs and services required for the resident
            in order to provide good quality care. We do a complete assessment
            of each individual’s needs. This allows us to quote a fair and
            accurate monthly rate. You can call for our base rate. We accept
            private pay and some long-term care insurance. We are licensed and
            monitored by the State of Oregon.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white h-screen flex items-center justify-evenly">
    <div class="grid md:grid-cols-12 grid-cols-1 h-full justify-evenly w-full">
      <div class="md:col-span-5 flex items-center justify-end w-full py-10">
        <display-card class="w-5/6 py-5 px-10" rows="1">
          <ul class="font-sans">
            <li
              v-for="item in serviceItems"
              :key="item"
              class="text-left my-2 flex"
            >
              <font-awesome-icon
                class="fill-current text-green-500 flex-col pt-1"
                :icon="['fas', 'check']"
              />
              <div class="flex-col ml-2">{{ item }}</div>
            </li>
          </ul>
        </display-card>
      </div>
      <!--end col-->

      <div
        class="md:col-span-7 flex md:items-center md:justify-center my-7 md:my-0 px-10 md:px-0"
      >
        <div class="lg:ml-4">
          <h4
            class="mb-5 md:text-3xl text-2xl lg:leading-normal leading-normal font-sen font-semibold text-left"
          >
            Our Services
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            Services are provided by our Premier Care Homes adult foster home
            resident care team, which has been carefully selected and is
            committed to meet individual care needs in a dignified, respectful
            environment. Each resident care manager has completed and passed the
            “Ensure Quality Care” course through Northwest Senior Service. In
            addition, all caregivers require a clean criminal history. Each home
            has a RN who provides delegation/teaching for our staff.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";

export default defineComponent({
  name: "ServicesView",
  components: {
    DisplayCard,
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

    return { serviceItems };
  },
});
</script>
