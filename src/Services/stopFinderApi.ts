import type { StopFinderResponse } from "../models/StopFinder/StopFinderResponse";
import type { StopLocation } from "../models/StopFinder/StopFinderLocation";
import { get } from "./apiService";

const STOP_BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop_finder";

const buildStopUrl = (searchText: string) => {
  return `${STOP_BASE_URL}?input=${encodeURIComponent(searchText)}&type_origin=any&type_destination=any&language=sv`;
};

export const getStops = async (searchText: string) => {
  const url = buildStopUrl(searchText);
  const response = await get<StopFinderResponse>(url);
  return response.stopLocations;
};

