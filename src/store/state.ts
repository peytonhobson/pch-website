import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    posts: [],
    selectedCategory: "",
    selectedPostTitle: "",
    testimonials: [],
    facilities: [],
    selectedFacilityName: "",
    resources: {
      pdfDownloads: [],
      webLinks: [],
    },
  };
};

export default state;
