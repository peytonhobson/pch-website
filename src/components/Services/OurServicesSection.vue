<template>
  <div
    class="flex flex-col lg:flex-row gap-20 px-10 md:px-20 items-center justify-evenly"
  >
    <div class="prose text-left md:max-w-xl lg:max-w-lg">
      <h2 class="text-4xl mb-5 text-center">Services</h2>
      <p>
        The resident care team is dedicated to providing personalized care in a
        dignified and respectful environment. Each member of our team has been
        carefully selected to ensure the highest quality of service.
      </p>

      <p>
        <strong>Experienced Care Team:</strong> Our resident care managers have
        all completed and passed the "Ensure Quality Care" course through
        Northwest Senior Service. Additionally, caregivers are required to pass
        a 6-hour dementia class, a safe medication administration course, and
        must be CPR and First Aid certified. These measures ensure the safety
        and well-being of our residents.
      </p>

      <p>
        <strong>Rigorous Screening:</strong> All caregivers undergo thorough
        background checks upon hiring and every two years thereafter to ensure
        the safety and well-being of our residents.
      </p>
      <p>
        <strong>Professional Oversight:</strong> Each home is supported by a
        registered nurse (RN) who provides delegation and training for our
        staff, ensuring high standards of care.
      </p>
    </div>
    <services-card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServicesCard from "@/components/Services/ServicesCard.vue";
export default defineComponent({
  name: "OurServicesSection",
  components: {
    ServicesCard,
  },
  setup() {
    const descriptionText = `Services are provided by our Premier Care Homes adult foster home resident care team, which has been carefully selected and is committed to meet individual care needs in a dignified, respectful environment. Each resident care manager has completed and passed the “Ensure Quality Care” course through Northwest Senior Service. In addition, all caregivers require a clean criminal history. Each home has a RN who provides delegation/teaching for our staff.`;
    const descriptionHeader = "Our Services";
    return { descriptionHeader, descriptionText };
  },
});
</script>
