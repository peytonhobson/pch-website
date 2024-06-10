<template>
  <div class="flex items-center gap-8">
    <div class="w-20 h-20 rounded-full overflow-hidden">
      <img
        :src="image"
        class="mt-0 object-cover h-full w-full"
        loading="lazy"
      />
    </div>
    <div class="flex-col">
      <p class="text-xs xl:text-sm text-left font-bold font-sans my-0">
        {{ contactInfo.name }}
      </p>
      <p class="text-xs xl:text-sm text-left font-sans my-0">
        {{ contactInfo.title }}
      </p>
      <p class="text-xs xl:text-sm text-left font-sans my-0">
        {{ contactInfo.phoneNumber }}
      </p>
      <a
        :href="`mailto:${contactInfo.email}`"
        class="text-xs xl:text-sm text-left font-sans"
        >{{ contactInfo.email }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

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
  @apply flex;
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
