import { computed } from "vue";
import { useStore } from "vuex";

import {
  FILTERED_POSTS,
  UNIQUE_CATEGORIES,
  FETCH_POSTS,
} from "@/store/constants";

import { Post } from "@/api/types";

import { key } from "@/store";

/* GETTERS */
export const useFilteredPosts = () => {
  const store = useStore(key);
  return computed<Post[]>(() => store.getters[FILTERED_POSTS]);
};

export const useUniqueCategories = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_CATEGORIES]);
};

/* ACTIONS */
export const useFetchPostsDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_POSTS);
};