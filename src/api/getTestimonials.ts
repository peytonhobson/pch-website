import axios from "axios";

import { Testimonial } from "@/api/types";

const getPosts = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const path = process.env.VUE_APP_DATA_PATH_TESTIMONIALS;
  const response = await axios.get<Testimonial[]>(`${baseUrl}${path}`);
  return response.data as Testimonial[];
};

export default getPosts;
