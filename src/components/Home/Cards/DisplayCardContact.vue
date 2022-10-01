<template>
  <display-card header="Contact Us" :bottomBorder="true">
    <section class=" row-start-2 row-span-1 flex items-center">
      <div class="text-lg text-left p-5">
        We would like to hear from you, talk to you, and/or 
        give you a tour of one of our wonderful homes.
      </div>
    </section>
    <section class="row-start-3 row-span-4 grid grid-rows-6 place-items-center">
      <div class="p-7 row-start-1 row-span-2 grid grid-cols-4 place-items-center">
        <div class="col-start-1 col-span-1 p-2">
          <img src="@/assets/Headshot.jpg" />
        </div>
        <div class="col-start-2 col-span-3 grid grid-rows-4 place-items-center">
          <span class="text-sm w-full text-left font-bold row-start-1 row-span-1">
            Janelle Lefore
          </span>
          <span class="text-sm  w-full text-left row-start-2 row-span-1">Co-Owner/Physical Therapist</span>
          <span class="text-sm w-full text-left row-start-3 row-span-1">503-798-5610</span>
          <span class="text-sm w-full text-left row-start-4 row-span-1">janelle@premiercarehomes.net</span>
        </div> 
      </div>
      <div class="p-7 row-start-3 row-span-2 grid grid-cols-4 place-items-center">
        <div class="col-start-1 col-span-1 p-2">
          <img src="@/assets/Headshot.jpg" />
        </div>
        <div class="col-start-2 col-span-3 grid grid-rows-4 place-items-center">
          <span class="text-sm w-full text-left font-bold row-start-1 row-span-1">
            Janelle Lefore
          </span>
          <span class="text-sm  w-full text-left row-start-2 row-span-1">Co-Owner/Physical Therapist</span>
          <span class="text-sm w-full text-left row-start-3 row-span-1">503-798-5610</span>
          <span class="text-sm w-full text-left row-start-4 row-span-1">janelle@premiercarehomes.net</span>
        </div> 
      </div>
      <div class="p-7 row-start-5 row-span-2 grid grid-cols-4 place-items-center">
        <div class="col-start-1 col-span-1 p-2">
          <img src="@/assets/Headshot.jpg" />
        </div>
        <div class="col-start-2 col-span-3 grid grid-rows-4 place-items-center">
          <span class="text-sm w-full text-left font-bold row-start-1 row-span-1">
            Janelle Lefore
          </span>
          <span class="text-sm  w-full text-left row-start-2 row-span-1">Co-Owner/Physical Therapist</span>
          <span class="text-sm w-full text-left row-start-3 row-span-1">503-798-5610</span>
          <span class="text-sm w-full text-left row-start-4 row-span-1">janelle@premiercarehomes.net</span>
        </div> 
      </div>
      <!-- <div class="w-full row-start-4 row-span-1">
        <action-button text="Learn More" type="card" class="w-full h-full" />
      </div> -->
    </section>
  </display-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    DisplayCard,
    ActionButton,
  },
  setup() {},
});
</script>
