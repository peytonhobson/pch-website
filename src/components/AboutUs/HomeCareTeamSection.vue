<template>
  <section class="bg-white h-[55vh] flex items-center justify-evenly">
    <div class="grid md:grid-cols-12 grid-cols-1 h-full justify-evenly w-full">
      <div class="md:col-span-5 flex items-center justify-end w-full">
        <!-- Fix later for dynamic image and production link -->
        <div
          class="md:relative h-2/3 w-5/6 md:rounded-xl shadow-md bg-hero-image-trapper bg-cover duration-500 hover:-translate-y-5 transition-all hover:cursor-pointer"
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
            The Home Care Team
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            Our adult foster home resident care team at Premier Care Homes
            consists of staff members that are carefully selected in order to
            meet our own, and your high standards, ensuring each resident is in
            a secure and respected environment. There is a resident care manager
            in each home, who has passed the “Ensure Quality Care” course
            through Northwest Senior Service and a medication administration
            course. All staff complete yearly continuing education and maintain
            current Red Cross CPR certifications. Many caregivers have previous
            medical experience, working formerly as medication aids, medical
            assistants, LPNs and CNAs. Additionally, a clean criminal record is
            required of the caregivers for Premier Care Homes. Our homes are
            well-rounded with medical professionals, including physical
            therapists, a nurse, and a paramedic. Each home has a RN who
            provides delegations/staff education and teaching. Our staff works
            as a team to provide individualized care to each resident in our
            homes. top-image-out-for-a-treat
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeCareTeamSection",
  setup() {},
});
</script>
