import axios from "axios";
import type { RegionItem } from "../types/types";
export const fethAllRegions = async (): Promise<Array<RegionItem>> => {
  const response = await axios.get(`/regions.json`);
  return response.data;
};
