import axios from "axios";

import { Post } from "@/api/types";

const getPosts = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get<Post[]>(`${baseUrl}/posts`);
  return response.data;
};

export default getPosts;
