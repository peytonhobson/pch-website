import axios from "axios";

import { Resource } from "@/api/types";

const getWebLinks = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const path = process.env.VUE_APP_DATA_PATH_WEB_LINKS;
  const response = await axios.get<Resource[]>(`${baseUrl}${path}`);
  return response.data as Resource[];
};

export default getWebLinks;
