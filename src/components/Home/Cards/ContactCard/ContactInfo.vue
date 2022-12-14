<template>
  <div :class="outerClass">
    <div
      class="col-start-1 col-span-1 pr-2 py-2 md:p-2 flex items-center justify-center"
    >
      <div class="avatar">
        <div class="w-20 rounded-full">
          <img :src="getImgURL('Headshot.jpg')" class="mt-0" />
        </div>
      </div>
    </div>
    <div class="col-start-2 col-span-3 grid grid-rows-4 place-items-center">
      <span
        class="text-xs xl:text-sm w-full text-left font-bold row-start-1 row-span-1 font-sans"
      >
        {{ contactInfo.name }}
      </span>
      <span
        class="text-xs xl:text-sm w-full text-left row-start-2 row-span-1 font-sans"
        >{{ contactInfo.title }}</span
      >
      <span
        class="text-xs xl:text-sm w-full text-left row-start-3 row-span-1 font-sans"
        >{{ contactInfo.phoneNumber }}</span
      >
      <a
        :href="`mailto:${contactInfo.email}`"
        class="text-xs xl:text-sm w-full text-left row-start-4 row-span-1 font-sans"
        >{{ contactInfo.email }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";
import getImgURL from "@/composables/getImgURL";

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

    return { outerClass, getImgURL };
  },
});
</script>

<style scoped>
.outer-div {
  @apply md:px-2 row-span-2 grid grid-cols-4 place-items-center;
}

.row-1 {
  @apply row-start-1;
}

.row-2 {
  @apply row-start-3;
}

.row-3 {
  @apply row-start-5;
}
</style>
