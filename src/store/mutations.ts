import {
  RECEIVE_POSTS,
  UPDATE_SELECTED_JOB_POST_TITLE,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Post } from "@/api/types";

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
};

export default mutations;
