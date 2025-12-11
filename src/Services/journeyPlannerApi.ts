import type { JourneyResponse } from "../models/JourneyPlanner/JourneyResponse";
import { get } from "./apiService";

const BASE_URL = "https://journeyplanner.integration.sl.se/v2/trips";

const buildUrl = (startId: string, destinationId: string, trips: 1 | 2 | 3 = 3) => {
  return `${BASE_URL}?type_origin=any&type_destination=any&name_origin=${startId}&name_destination=${destinationId}&calc_number_of_trips=${trips}&language=sv`;
};

export const getTrips = async (startId: string, destinationId: string) => {
  const url = buildUrl(startId, destinationId);
  const data = await get<JourneyResponse>(url);
  return response.journeys;
};

