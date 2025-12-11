import type { StopFinderResponse } from "../models/StopFinder/StopFinderResponse";
import { get } from "./apiService";

const STOP_BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder";

const buildStopUrl = (searchText: string) => {
  return `${STOP_BASE_URL}?input=${encodeURIComponent(searchText)}&type_origin=any&type_destination=any&language=sv`;
};

export const getStops = async (searchText: string) => {
  const url = buildStopUrl(searchText);
  const data = await get<StopFinderResponse>(url);
  return response.locations;
};

