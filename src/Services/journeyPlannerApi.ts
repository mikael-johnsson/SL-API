import type { JourneyResponse } from "../models/JourneyPlanner/JourneyResponse";
import { get } from "./apiService";
// import { getGeoposition } from "../utils/findGeolocation";

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
  return `${BASE_URL}?type_origin=coords&type_destination=any&name_origin=${startCoords}&name_destination=${destinationId}&calc_number_of_trips=${trips}&language=sv`;
};

export const getTrips = async (startId: string, destinationId: string) => {
  const url = buildUrl(startId, destinationId);

  const data = await get<JourneyResponse>(url);

  return data;
};

// export const getTripsWithCoords = async (destinationId: string) => {
//   console.log("inne i funktion");

//   const coords = await getGeoposition();
//   if (coords) {
//     let coordsString: string = "";
//     coordsString += coords?.latitude.toString();
//     coordsString += ":" + coords?.longitude.toString();
//     coordsString += ":WGS84";
//     console.log("här är coords string", coordsString);
//   } else {
//     console.log("nåt blev fel");
//   }
// };
