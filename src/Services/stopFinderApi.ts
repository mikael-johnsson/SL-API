import type { StopFinderResponse } from "../models/StopFinder/StopFinderResponse";
import { get } from "./apiService";

const STOP_BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder";

/**
 *
 * @param searchText the text entered in the input field by the user
 * @returns the url to the API endpoint
 */
const buildStopUrl = (searchText: string) => {
  return `${STOP_BASE_URL}?name_sf=${encodeURIComponent(
    searchText
  )}&type_sf=any&any_obj_filter_sf=46`;
};

/**
 *
 * @param searchText the text entered in the input field by the user
 * @returns
 */
export const getStops = async (searchText: string) => {
  const url = buildStopUrl(searchText);
  const data = await get<StopFinderResponse>(url);
  return data.locations;
};
