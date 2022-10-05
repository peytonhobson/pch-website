import {
  RECEIVE_POSTS,
  UPDATE_SELECTED_POST_TITLE,
  RECEIVE_TESTIMONIALS,
  RECEIVE_FACILITIES,
  UPDATE_SELECTED_FACILITY_NAME,
  RECEIVE_PDF_DOWNLOADS,
  RECEIVE_WEB_LINKS,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Facility, Post, Testimonial, Resource } from "@/api/types";

const mutations = {
  [RECEIVE_POSTS](state: GlobalState, posts: Post[]) {
    state.posts = posts;
  },
  [UPDATE_SELECTED_POST_TITLE](state: GlobalState, selectedPostTitle: string) {
    state.selectedPostTitle = selectedPostTitle;
  },
  [RECEIVE_TESTIMONIALS](state: GlobalState, testimonials: Testimonial[]) {
    state.testimonials = testimonials;
  },
  [RECEIVE_FACILITIES](state: GlobalState, facilities: Facility[]) {
    state.facilities = facilities;
  },
  [UPDATE_SELECTED_FACILITY_NAME](
    state: GlobalState,
    selectedFacilityName: string
  ) {
    state.selectedFacilityName = selectedFacilityName;
  },
  [RECEIVE_WEB_LINKS](state: GlobalState, webLinks: Resource[]) {
    state.webLinks = webLinks;
  },
  [RECEIVE_PDF_DOWNLOADS](state: GlobalState, pdfDownloads: Resource[]) {
    state.pdfDownloads = pdfDownloads;
  },
};

export default mutations;
