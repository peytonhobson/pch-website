import { computed } from "vue";
import { useStore } from "vuex";

import {
  FILTERED_POSTS,
  UNIQUE_CATEGORIES,
  FETCH_POSTS,
  FETCH_TESTIMONIALS,
  TESTIMONIALS,
  FETCH_FACILITIES,
  FILTERED_FACILITIES, //
} from "@/store/constants";

import { Post, Testimonial, Facility } from "@/api/types";

import { key } from "@/store";

/* GETTERS */
export const useFilteredPosts = () => {
  const store = computed(() => useStore(key));
  return computed<Post[]>(() => store.value.getters[FILTERED_POSTS]);
};

export const useUniqueCategories = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_CATEGORIES]);
};

export const useTestimonials = () => {
  const store = computed(() => useStore(key));
  return computed<Testimonial[]>(() => store.value.getters[TESTIMONIALS]);
};

export const useFilteredFacilities = () => {
  const store = computed(() => useStore(key));
  console.log(store.value.getters[FILTERED_FACILITIES]);
  return computed<Facility[]>(() => store.value.getters[FILTERED_FACILITIES]);
};

/* ACTIONS */
export const useFetchPostsDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_POSTS);
};

export const useFetchTestimonialsDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_TESTIMONIALS);
};

export const useFetchFacilitiesDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_FACILITIES);
};
