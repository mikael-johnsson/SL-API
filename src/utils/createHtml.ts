import type { JourneyResponse } from "../models/JourneyPlanner/JourneyResponse";
import type { Journey } from "../models/JourneyPlanner/Journey";
import type { Leg } from "../models/JourneyPlanner/Leg";

export const createHtml = (response: JourneyResponse) => {
  const journeys = response.journeys;

  const resultDiv = document.getElementById("journey-result");
  if (!resultDiv) return;

  resultDiv.innerHTML = "";

  journeys.forEach((trip: Journey, tripIndex: number) => {
    resultDiv.insertAdjacentHTML(
      "beforeend",
      `<h3>Resa ${tripIndex + 1} – ${Math.round(trip.tripDuration / 60)} min</h3>`
    );

    trip.legs.forEach((leg: Leg, legIndex: number) => {
      const html = `
        <div class="leg">
          <h4>Delresa ${legIndex + 1}</h4>
          <p><strong>Från:</strong> ${leg.origin.name}</p>
          <p><strong>Till:</strong> ${leg.destination.name}</p>
          <p><strong>Varaktighet:</strong> ${leg.duration} sek</p>
        </div>
        <hr />
      `;
      resultDiv.insertAdjacentHTML("beforeend", html);
    });
  });
};
