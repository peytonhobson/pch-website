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
          <ul class="list-disc font-sans">
            <li class="text-left my-2">
              A homelike setting with 24 hour direct care staff, 5:1 resident to
              caregiver ratio
            </li>
            <li class="text-left my-2">
              Home cooked meals and snacks, diabetic meals offered
            </li>
            <li class="text-left my-2">
              Medication management, including insulin.
            </li>
            <li class="text-left my-2">
              Personalized services to meet each individual’s care needs,
              including: dressing, bathing, feeding assistance, grooming,
              toileting and assist with mobility.
            </li>
            <li class="text-left my-2">Laundry (washables only)</li>
            <li class="text-left my-2">
              Scheduling of appointments and transportation
            </li>
            <li class="text-left my-2">Scheduled activities and outings</li>
            <li class="text-left my-2">
              RN&nbsp;for staff teaching and delegation
            </li>
            <li class="text-left my-2">
              Bath aide to complete personalized care
            </li>
            <li class="text-left my-2">Memory care</li>
            <li class="text-left my-2">
              Modified diets (diabetic diet, lactose free, gluten free)
            </li>
            <li class="text-left my-2">
              Dysphagia diet — pureed/soft foods and thickened liquids
            </li>
            <li class="text-left my-2">On-site dental hygienist services</li>
            <li class="text-left my-2">On-site professional beauty services</li>
            <li class="text-left my-2">Hospice care</li>
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
  setup() {},
});
</script>
