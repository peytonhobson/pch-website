import axios from "axios";

import { Facility } from "@/api/types";

const getFacilities = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const path = process.env.VUE_APP_DATA_PATH_FACILITIES;
  const response = await axios.get(`${baseUrl}${path}`);
  return response.data as Facility[];
};

export default getFacilities;
