import {
  UNIQUE_CATEGORIES,
  INCLUDE_POST_BY_CATEGORY,
  FILTERED_POSTS,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Post } from "@/api/types";

interface IncludePostGetters {
  // eslint-disable-next-line
  INCLUDE_POST_BY_CATEGORY: (post: Post) => boolean;
}

const getters = {
  [UNIQUE_CATEGORIES](state: GlobalState) {
    const uniqueOrganizations = new Set<string>();
    state.posts.forEach((post) =>
      post.categories.forEach((category) => uniqueOrganizations.add(category))
    );
    return uniqueOrganizations;
  },
  [INCLUDE_POST_BY_CATEGORY]: (state: GlobalState) => (post: Post) => {
    if (state.selectedCategory === "") return true;
    return post.categories.includes(state.selectedCategory);
  },
  [FILTERED_POSTS](state: GlobalState, getters: IncludePostGetters) {
    if (state.posts.length === 0) return [];
    const posts = Object.entries(state.posts)[0][1] as unknown as Post[];
    return posts.filter((post: Post) => getters.INCLUDE_POST_BY_CATEGORY(post));
  },
};

export default getters;
