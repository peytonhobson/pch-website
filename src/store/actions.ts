import { Commit } from "vuex";

import getPosts from "@/api/getPosts";
import getTestimonials from "@/api/getTestimonials";
import getFacilities from "@/api/getFacilities";
import getWebLinks from "@/api/getWebLinks";
import getPDFDownloads from "@/api/getPDFDownloads";

import {
  FETCH_FACILITIES,
  FETCH_POSTS,
  FETCH_TESTIMONIALS,
  RECEIVE_FACILITIES,
  RECEIVE_POSTS,
  RECEIVE_TESTIMONIALS,
  FETCH_WEB_LINKS,
  FETCH_PDF_DOWNLOADS,
  RECEIVE_WEB_LINKS,
  RECEIVE_PDF_DOWNLOADS,
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
  [FETCH_WEB_LINKS]: async (context: Context) => {
    const webLinks = await getWebLinks();
    context.commit(RECEIVE_WEB_LINKS, webLinks);
  },
  [FETCH_PDF_DOWNLOADS]: async (context: Context) => {
    const pdfDownloads = await getPDFDownloads();
    context.commit(RECEIVE_PDF_DOWNLOADS, pdfDownloads);
  },
};

export default actions;
