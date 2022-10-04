import {
  RECEIVE_POSTS,
  UPDATE_SELECTED_POST_TITLE,
  RECEIVE_TESTIMONIALS,
  RECEIVE_FACILITIES,
  UPDATE_SELECTED_FACILITY_NAME,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Facility, Post, Testimonial } from "@/api/types";

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
};

export default mutations;
