<template>
  <div class="containment relative w-full h-full">
    <slot></slot>
    <label :class="leftLabelClass" @click="prevImg">‹</label>
    <label :class="rightLabelClass" @click="nextImg">›</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";

export default defineComponent({
  name: "ControlLabels",
  props: {
    animate: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["prev", "next"],
  setup(props, { emit }) {
    const { animate } = toRefs(props);

    const leftLabelClass: Object = computed(() => {
      return {
        ["standard-label-left"]: true,
        ["control-left"]: animate.value,
        ["control xl:hidden"]: !animate.value,
      };
    });

    const rightLabelClass: Object = computed(() => {
      return {
        ["standard-label-right"]: true,
        ["control-right"]: animate.value,
        ["control xl:hidden"]: !animate.value,
      };
    });

    const prevImg = () => {
      emit("prev");
    };

    const nextImg = () => {
      emit("next");
    };

    return { nextImg, prevImg, leftLabelClass, rightLabelClass };
  },
});
</script>

<style>
.standard-label-left {
  @apply w-10 h-10 ml-2 md:ml-5 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto;
}

.standard-label-right {
  @apply w-10 h-10 mr-2 md:mr-5 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 right-0 inset-y-0 my-auto;
}

@screen xl {
  .control-left {
    left: -100px;
  }

  .containment:hover > .control-left {
    transform: translateX(100px);
    transition: all 0.3s linear;
  }

  .containment > .control-left {
    transform: translateX(-100px);
    transition: all 0.3s linear;
  }

  .control-right {
    right: -100px;
  }

  .containment:hover > .control-right {
    transform: translateX(-100px);
    transition: all 0.3s linear;
  }

  .containment > .control-right {
    transform: translateX(100px);
    transition: all 0.3s linear;
  }
}

.containment:hover > .control {
  display: block;
}
</style>
