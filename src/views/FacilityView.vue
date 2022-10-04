<template>
  <facility></facility>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import Facility from "@/components/Facilities/Facility.vue";

export default defineComponent({
  name: "FacilityView",
  components: {
    Facility,
  },
  setup() {
    const parseJobPostTitle = () => {
      const route = useRoute();
      const title = (route.params.title as String) || "";
      const parsedTitle = title.replaceAll("_", " ");
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_JOB_POST_TITLE, parsedTitle);
    };
    const removeJobPostTitle = () => {
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_JOB_POST_TITLE, "");
    };
    onMounted(useFetchPostsDispatch);
    onMounted(parseJobPostTitle);
    onUnmounted(removeJobPostTitle);

    const filteredPost = computed(() => useFilteredPosts().value[0]);

    return { filteredPost };
  },
});
</script>
