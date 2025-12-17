import { getTrips } from "./Services/journeyPlannerApi";
import { getStops } from "./Services/stopFinderApi";
import { createHtml } from "./utils/createHtml";
import { getGeoLocation } from "./utils/findGeolocation";

/**
 * This function adds an eventlistener to the input button
 * it gets the destination Id
 * if geoPosCheckbox is checked - get the users geoLocation and
 * continue the user flow from there
 * if not checked - fetch the origin Id and later the trips
 */
export const handleSubmit = () => {
  const startInput = document.getElementById("input-start") as HTMLInputElement;
  const endInput = document.getElementById("input-end") as HTMLInputElement;
  const btn = document.getElementById("btn-input") as HTMLButtonElement;
  const geoPosCheckbox = document.getElementById(
    "geopos-checkbox"
  ) as HTMLInputElement;

  btn.addEventListener("click", async () => {
    const startValue = startInput.value;
    const endValue = endInput.value;

    // vi hämtar destination först,
    // för den behövs oavsett om man använder geolocation eller inte
    const endStops = await getStops(endValue);
    const endId = endStops[0].id;

    if (geoPosCheckbox.checked) {
      // getGeoLocation  kommer samla ihop origin coordinates och destinationId,
      // sen kalla på getTripsWithCoords
      // och till slut kalla på createHtml med resultatet
      getGeoLocation(endId);
    } else {
      if (!startInput.value.trim() || !endInput.value.trim()) {
        alert("Fyll i fälten!");
        return;
      }
      const startStops = await getStops(startValue);
      const startId = startStops[0].id;
      const journeys = await getTrips(startId, endId);
      createHtml(journeys);
    }
  });
};
