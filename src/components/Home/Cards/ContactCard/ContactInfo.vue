<template>
  <div :class="outerClass">
    <div class="col-start-1 col-span-1 p-2 flex items-center justify-center">
      <img src="@/assets/Headshot.jpg" class="max-h-28" />
    </div>
    <div class="col-start-2 col-span-3 grid grid-rows-4 place-items-center">
      <span class="text-sm w-full text-left font-bold row-start-1 row-span-1">
        {{ contactInfo.name }}
      </span>
      <span class="text-sm w-full text-left row-start-2 row-span-1">{{
        contactInfo.title
      }}</span>
      <span class="text-sm w-full text-left row-start-3 row-span-1">{{
        contactInfo.phoneNumber
      }}</span>
      <span class="text-sm w-full text-left row-start-4 row-span-1">{{
        contactInfo.email
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

//here for commit

interface Contact {
  name: string;
  title: string;
  phoneNumber: string;
  email: string;
}

export default defineComponent({
  name: "ContactInfo",
  props: {
    image: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: Object as () => Contact,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { number } = toRefs(props);

    const rowString = "row-";

    const outerClass = computed(() => {
      return { [rowString.concat(number.value)]: true, ["outer-div"]: true };
    });

    return { outerClass };
  },
});
</script>

<style scoped>
.outer-div {
  @apply p-7 row-span-2 grid grid-cols-4 place-items-center;
}

.row-1 {
  @apply row-start-1;
}

.row-3 {
  @apply row-start-3;
}

.row-5 {
  @apply row-start-5;
}
</style>
