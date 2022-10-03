import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    posts: [],
    selectedCategory: "",
  };
};

export default state;
