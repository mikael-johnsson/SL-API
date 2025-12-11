import type { StopFinderResponse } from "../models/StopFinder/StopFinderResponse";
import { get } from "./apiService";

const STOP_BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder";

const buildStopUrl = (searchText: string) => {
  return `${STOP_BASE_URL}?name_sf=${encodeURIComponent(searchText)}&type_sf=any&any_obj_filter_sf=46`;
};

https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=odenplan&any_obj_filter_sf=2&type_sf=any

export const getStops = async (searchText: string) => {
  const url = buildStopUrl(searchText);
  const data = await get<StopFinderResponse>(url);
  return data.locations;
};

