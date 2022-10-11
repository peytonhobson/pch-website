<template>
  <section
    class="bg-cover h-[85vh] flex items-center justify-center animate-fadeIn duration-1000"
    :style="`background-image: url(${backgroundImageString})`"
  >
    <div class="flex flex-wrap justify-center">
      <div
        class="text-4xl font-sen md:text-6xl justify-center text-center flex text-white w-full"
      >
        {{ firstRowText }}
      </div>
      <div
        v-if="secondRowText"
        class="text-2xl font-sans text-white mt-5 w-5/6 md:w-2/3"
      >
        {{ secondRowText }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";
import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "StaticHero",
  props: {
    firstRowText: {
      type: String,
      required: true,
    },
    secondRowText: {
      type: String,
      required: false,
      default: undefined,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { backgroundImage } = toRefs(props);

    const backgroundImageString = computed(() =>
      getImgURL(backgroundImage.value)
    );

    return { backgroundImageString };
  },
});
</script>
