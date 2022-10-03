import {
  UNIQUE_CATEGORIES,
  INCLUDE_POST_BY_CATEGORY,
  FILTERED_POSTS,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Post } from "@/api/types";

interface IncludePostGetters {
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
    if (state.selectedCategory.length === 0) return true;
    return post.categories.includes(state.selectedCategory);
  },
  [FILTERED_POSTS](state: GlobalState, getters: IncludePostGetters) {
    return state.posts.filter((post) => getters.INCLUDE_POST_BY_CATEGORY(post));
  },
};

export default getters;
