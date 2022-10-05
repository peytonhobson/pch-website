import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    posts: [],
    selectedCategory: "",
    selectedPostTitle: "",
    testimonials: [],
    facilities: [],
    selectedFacilityName: "",
    webLinks: [],
    pdfDownloads: [],
  };
};

export default state;
