import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    posts: [],
    selectedCategory: "",
    selectedJobPostTitle: "",
    testimonials: [],
  };
};

export default state;
