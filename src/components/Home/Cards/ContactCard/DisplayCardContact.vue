<template>
  <display-card header="Contact Us" :bottomBorder="true">
    <section class="row-start-2 row-span-1 flex items-center">
      <div class="text-md md:text-lg text-left p-5 md:py-5 md:px-7">
        We would like to hear from you, talk to you, and/or give you a tour of
        one of our wonderful homes.
      </div>
    </section>
    <section class="row-start-3 row-span-4 grid grid-rows-6 place-items-center">
      <contact-info
        :key="contact.number"
        v-for="contact in contacts"
        image="@/assets/Headshot.jpg"
        :contactInfo="contact"
        :number="contact.number"
      />
    </section>
  </display-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ContactInfo from "@/components/Home/Cards/ContactCard/ContactInfo.vue";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    DisplayCard,
    ActionButton,
    ContactInfo,
  },
  setup() {
    const contacts = [
      {
        name: "Janelle Lefore",
        title: "Co-Owner/Physical Therapist",
        phoneNumber: "503-798-5610",
        email: "janelle@premiercarehomes.net",
        number: "1",
      },
      {
        name: "Margie Hibner",
        title: "Co-Owner/Physical Therapist",
        phoneNumber: "503-302-4750",
        email: "margie@premiercarehomes.net",
        number: "2",
      },
      {
        name: "Scott Leavell",
        title: "Affiliate/Paramedic",
        phoneNumber: "901-326-3521",
        email: "scott@premiercarehomes.net",
        number: "3",
      },
    ];

    return { contacts };
  },
});
</script>
