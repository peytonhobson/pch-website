import axios from "axios";

import { Post } from "@/api/types";

const getPosts = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const path = process.env.VUE_APP_DATA_PATH;
  const response = await axios.get<Post[]>(`${baseUrl}${path}`);
  return response.data;
};

export default getPosts;
