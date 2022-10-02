<template>
  <main class="py-6">
    <paginator />
    <div class="mb-12">{% include summary.html post=post %}</div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Paginator from "@/components/Blog/Paginator.vue";

export default defineComponent({
  name: "BlogView",
  components: {
    Paginator,
  },
  setup() {},
});
</script>
