import { computed } from "vue";
import { useRoute } from "vue-router";

const useCurrentPage = () => {
  const route = useRoute();
  const page = computed(() => route.query.page as string);
  return computed(() => Number.parseInt(page.value || "1"));
};

export default useCurrentPage;
