<template>
  <div v-if="filteredPost">
    <blog-post :filtered-post="filteredPost" />
  </div>
</template>

<script lang="ts">
import { UPDATE_SELECTED_POST_TITLE } from "@/store/constants";
import { defineComponent, onMounted, computed, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { key } from "@/store";
import { useFilteredPosts, useFetchPostsDispatch } from "@/store/composables";
import BlogPost from "@/components/Blog/BlogPost.vue";

export default defineComponent({
  name: "BlogPostView",
  components: {
    BlogPost,
  },
  setup() {
    const parsePostTitle = () => {
      const route = useRoute();
      const title = (route.params.title as String) || "";
      const parsedTitle = title.replaceAll("_", " ");
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_POST_TITLE, parsedTitle);
    };
    const removePostTitle = () => {
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_POST_TITLE, "");
    };
    onMounted(useFetchPostsDispatch);
    onMounted(parsePostTitle);
    onUnmounted(removePostTitle);

    const filteredPost = computed(() => useFilteredPosts().value[0]);

    return { filteredPost };
  },
});
</script>
