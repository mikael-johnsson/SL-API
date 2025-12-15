import { getTrips } from "./Services/journeyPlannerApi";
import { getStops } from "./Services/stopFinderApi";
import { createHtml } from "./utils/createHtml";

export const handleSubmit = () => {
  const startInput = document.getElementById("input-start") as HTMLInputElement;
  const endInput = document.getElementById("input-end") as HTMLInputElement;
  const btn = document.getElementById("btn-input") as HTMLButtonElement;

  btn.addEventListener("click", async () => {
    if (!startInput.value.trim() || !endInput.value.trim()) {
      alert("Fyll i fälten!");
      return;
    }

    const startValue = startInput.value;
    const endValue = endInput.value;

    const startStops = await getStops(startValue);
    const endStops = await getStops(endValue);

    const startId = startStops[0].id;
    const endId = endStops[0].id;

    const journeys = await getTrips(startId, endId);
    createHtml(journeys);
  });
};
