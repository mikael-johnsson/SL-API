import type { JourneyResponse } from "../models/JourneyPlanner/JourneyResponse";
import type { UserCoords } from "../models/UserCoords/UserCoords";
import { createHtml } from "../utils/createHtml";
import { get } from "./apiService";

const BASE_URL = "https://journeyplanner.integration.sl.se/v2/trips";

const buildUrl = (
  startId: string,
  destinationId: string,
  trips: 1 | 2 | 3 = 1
) => {
  return `${BASE_URL}?type_origin=any&type_destination=any&name_origin=${startId}&name_destination=${destinationId}&calc_number_of_trips=${trips}&language=sv`;
};

const buildUrlWithCoords = (
  startCoords: string,
  destinationId: string,
  trips: 1 | 2 | 3 = 1
) => {
  return `${BASE_URL}?type_origin=coord&type_destination=any&name_origin=${startCoords}&name_destination=${destinationId}&calc_number_of_trips=${trips}&language=sv`;
};

export const getTrips = async (startId: string, destinationId: string) => {
  const url = buildUrl(startId, destinationId);

  const data = await get<JourneyResponse>(url);

  return data;
};

export const collectData = (startCoords: UserCoords, destinationId: string) => {
  let coordString: string = "";
  coordString += startCoords.longitude;
  coordString += ":" + startCoords.latitude;
  coordString += ":WGS84";
  getTripsWithCoords(coordString, destinationId);
};

export const getTripsWithCoords = async (
  startCoords: string,
  destinationId: string
) => {
  const url = buildUrlWithCoords(startCoords, destinationId);

  const data = await get<JourneyResponse>(url);
  console.log("data from trips with coords", data);
  createHtml(data);
};
