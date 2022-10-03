import { Commit } from "vuex";

import getPosts from "@/api/getPosts";

import { FETCH_POSTS, RECEIVE_POSTS } from "@/store/constants";

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_POSTS]: async (context: Context) => {
    const posts = await getPosts();
    context.commit(RECEIVE_POSTS, posts);
  },
};

export default actions;
