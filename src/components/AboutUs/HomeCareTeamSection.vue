<template>
  <dual-item-display class="my-32 md:my-44" :reverse-column="true">
    <template #leftColumn>
      <div
        class="w-5/6 h-60 mt-10 md:h-128 md:w-full md:rounded-2xl duration-500 hover:-translate-y-5 transition-all hover:cursor-pointer"
      >
        <img
          :src="getImgURL('other/resident-red-and-patriotic-sweaters.png')"
          class="w-full h-full rounded-2xl"
        />
      </div>
    </template>

    <!--end col-->

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "HomeCareTeamSection",
  components: {
    DualItemDisplay,
    SimpleDescription,
  },
  setup() {
    const descriptionHeader = "The Home Care Team";

    const descriptionText =
      "Our adult foster home resident care team at Premier Care Homes consists of staff members that are carefully selected in order to meet our own, and your high standards, ensuring each resident is in a secure and respected environment. There is a resident care manager in each home, who has passed the “Ensure Quality Care” course through Northwest Senior Service and a medication administration course. All staff complete yearly continuing education and maintain current Red Cross CPR certifications. Many caregivers have previous medical experience, working formerly as medication aids, medical assistants, LPNs and CNAs. Additionally, a clean criminal record is required of the caregivers for Premier Care Homes. Our homes are well-rounded with medical professionals, including physical therapists, a nurse, and a paramedic. Each home has a RN who provides delegations/staff education and teaching. Our staff works as a team to provide individualized care to each resident in our homes.";

    return { descriptionHeader, descriptionText, getImgURL };
  },
});
</script>
