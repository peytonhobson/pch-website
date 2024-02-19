import { ref } from "vue";

// Reactive state
const loading = ref(false);

// Functions to manipulate the state
const setLoading = (state: boolean) => {
  loading.value = state;
};

const useLoadingState = () => {
  return { loading, setLoading };
};

export default useLoadingState;
