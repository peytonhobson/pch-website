import { RECEIVE_POSTS } from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Post } from "@/api/types";

const mutations = {
  [RECEIVE_POSTS](state: GlobalState, posts: Post[]) {
    state.posts = posts;
  },
};

export default mutations;
