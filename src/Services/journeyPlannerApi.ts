import type { JourneyResponse } from "../models/JourneyPlanner/JourneyResponse";
import type { UserCoords } from "../models/UserCoords/UserCoords";
import { createHtml } from "../utils/createHtml";
import { get } from "./apiService";

const BASE_URL = "https://journeyplanner.integration.sl.se/v2/trips";

/**
 *
 * @param startId the ID of the origin the user entered earlier
 * @param destinationId the ID of the destination the user entered earlier
 * @param trips amount of trips the API should respond with
 * @returns the URL to the API endpoint
 */
const buildUrl = (
  startId: string,
  destinationId: string,
  trips: 1 | 2 | 3 = 1
) => {
  return `${BASE_URL}?type_origin=any&type_destination=any&name_origin=${startId}&name_destination=${destinationId}&calc_number_of_trips=${trips}&language=sv`;
};

/**
 *
 * @param startCoords coordinates of the users current geoLocation
 * @param destinationId the ID of the destination the user entered earlier
 * @param trips amount of trips the API should respond with
 * @returns the URL to the API endpoint
 */
const buildUrlWithCoords = (
  startCoords: string,
  destinationId: string,
  trips: 1 | 2 | 3 = 1
) => {
  return `${BASE_URL}?type_origin=coord&type_destination=any&name_origin=${startCoords}&name_destination=${destinationId}&calc_number_of_trips=${trips}&language=sv`;
};

/**
 *
 * @param startId the ID of the origin the user entered earlier
 * @param destinationId the ID of the destination the user entered earlier
 * @returns the API response
 */
export const getTrips = async (startId: string, destinationId: string) => {
  const url = buildUrl(startId, destinationId);

  const data = await get<JourneyResponse>(url);

  return data;
};

/**
 * Puts together the coordinates string with the origin coordinates object
 * @param startCoords coordinate object of the users current geoLocation
 * @param destinationId the ID of the destination the user entered earlier
 */
export const collectData = (startCoords: UserCoords, destinationId: string) => {
  let coordString: string = "";
  coordString += startCoords.longitude;
  coordString += ":" + startCoords.latitude;
  coordString += ":WGS84";

  getTripsWithCoords(coordString, destinationId);
};

/**
 *
 * @param startCoords coordinates of the users current geoLocation
 * @param destinationId the ID of the destination the user entered earlier
 */
export const getTripsWithCoords = async (
  startCoords: string,
  destinationId: string
) => {
  const url = buildUrlWithCoords(startCoords, destinationId);

  const data = await get<JourneyResponse>(url);
  createHtml(data);
};
