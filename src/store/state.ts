import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    posts: [],
    selectedCategory: "",
    selectedPostTitle: "",
    testimonials: [],
    facilities: [],
    selectedFacilityName: "",
  };
};

export default state;
