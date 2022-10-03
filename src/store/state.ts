import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    posts: [],
    selectedCategory: "",
    selectedJobPostTitle: "",
  };
};

export default state;
