import { collectData } from "../Services/journeyPlannerApi";

export const getGeoLocation = (destinationId: string) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log("this is users position: ", pos.coords);
    collectData(pos.coords, destinationId);
  });
};

// add a call to this function on button click, with parameter endId
