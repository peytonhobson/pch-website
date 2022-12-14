import { Commit } from "vuex";

import getPosts from "@/api/getPosts";
import getTestimonials from "@/api/getTestimonials";
import getFacilities from "@/api/getFacilities";
import getResources from "@/api/getResources";

import {
  FETCH_FACILITIES,
  FETCH_POSTS,
  FETCH_TESTIMONIALS,
  RECEIVE_FACILITIES,
  RECEIVE_POSTS,
  RECEIVE_TESTIMONIALS,
  FETCH_RESOURCES,
  RECEIVE_RESOURCES,
} from "@/store/constants";

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_POSTS]: async (context: Context) => {
    const posts = await getPosts();
    context.commit(RECEIVE_POSTS, posts);
  },
  [FETCH_TESTIMONIALS]: async (context: Context) => {
    const testimonials = await getTestimonials();
    context.commit(RECEIVE_TESTIMONIALS, testimonials);
  },
  [FETCH_FACILITIES]: async (context: Context) => {
    const facilities = await getFacilities();
    context.commit(RECEIVE_FACILITIES, facilities);
  },
  [FETCH_RESOURCES]: async (context: Context) => {
    const resources = await getResources();
    context.commit(RECEIVE_RESOURCES, resources);
  },
};

export default actions;
