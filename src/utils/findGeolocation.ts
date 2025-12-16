import { collectData } from "../Services/journeyPlannerApi";

/**
 *
 * @param destinationId the ID of the destination
 * the user entered in the input earlier
 * used here only to pass along to collectData
 */
export const getGeoLocation = (destinationId: string) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    collectData(pos.coords, destinationId);
  });
};
