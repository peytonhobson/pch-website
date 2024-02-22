<template>
  <card>
    <template #title>
      <h2 class="card-title">Contact Us</h2>
    </template>
    <template #body>
      <p class="text-left pb-0 flex-grow-0">
        We would like to hear from you, talk to you, and/or give you a tour of
        one of our wonderful homes.
      </p>
      <div class="flex flex-col gap-8 justify-center flex-grow">
        <contact-info
          v-for="contact in contacts"
          :key="contact.number"
          image="@/assets/Headshot.jpg"
          :contact-info="contact"
          :number="contact.number"
        />
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ContactInfo from "@/components/Home/Cards/ContactCard/ContactInfo.vue";
import Card from "@/components/Shared/Card.vue";

export default defineComponent({
  name: "ContactCard",
  components: {
    // DisplayCard,
    ContactInfo,
    Card,
  },
  setup() {
    const contacts = [
      {
        name: "Janelle Leavell",
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
