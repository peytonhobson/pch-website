import {
  UNIQUE_CATEGORIES,
  INCLUDE_POST_BY_CATEGORY,
  MATCH_POST_BY_TITLE,
  FILTERED_POSTS,
  TESTIMONIALS,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Post, Testimonial } from "@/api/types";

interface PostGetters {
  // eslint-disable-next-line
  INCLUDE_POST_BY_CATEGORY: (post: Post) => boolean;
  // eslint-disable-next-line
  MATCH_POST_BY_TITLE: (post: Post) => boolean;
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
  [MATCH_POST_BY_TITLE]: (state: GlobalState) => (post: Post) => {
    if (state.selectedJobPostTitle === "") return true;
    return post.title === state.selectedJobPostTitle;
  },
  [FILTERED_POSTS](state: GlobalState, getters: PostGetters) {
    if (state.posts.length === 0) return [];
    const posts = Object.entries(state.posts)[0][1] as unknown as Post[]; // Production
    // const posts = state.posts; //Development only
    return posts
      .filter((post: Post) => getters.INCLUDE_POST_BY_CATEGORY(post))
      .filter((post: Post) => getters.MATCH_POST_BY_TITLE(post));
  },
  [TESTIMONIALS](state: GlobalState) {
    if (state.testimonials.length === 0) return [];
    const testimonials = Object.entries(
      state.testimonials
    )[0][1] as unknown as Testimonial[]; // Production
    return testimonials;
    // return state.testimonials; // Development only
  },
};

export default getters;
