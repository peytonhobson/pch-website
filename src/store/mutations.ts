import {
  RECEIVE_POSTS,
  UPDATE_SELECTED_JOB_POST_TITLE,
  RECEIVE_TESTIMONIALS,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Post, Testimonial } from "@/api/types";

const mutations = {
  [RECEIVE_POSTS](state: GlobalState, posts: Post[]) {
    state.posts = posts;
  },
  [UPDATE_SELECTED_JOB_POST_TITLE](
    state: GlobalState,
    selectedJobPostTitle: string
  ) {
    state.selectedJobPostTitle = selectedJobPostTitle;
  },
  [RECEIVE_TESTIMONIALS](state: GlobalState, testimonials: Testimonial[]) {
    state.testimonials = testimonials;
  },
};

export default mutations;
