import axios from "axios";

import { Post } from "@/api/types";

const getPosts = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const path = process.env.VUE_APP_DATA_PATH_POSTS;
  const response = await axios.get<Post[]>(`${baseUrl}${path}`);
  return response.data as Post[];
};

export default getPosts;
