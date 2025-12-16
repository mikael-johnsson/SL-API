import type { JourneyResponse } from "../models/JourneyPlanner/JourneyResponse";
import type { Journey } from "../models/JourneyPlanner/Journey";
import type { Leg } from "../models/JourneyPlanner/Leg";

export const createHtml = (response: JourneyResponse) => {
  const journeys = response.journeys;

  const resultDiv = document.getElementById("journey-result");
  if (!resultDiv) return;

  resultDiv.innerHTML = "";

  const formatTime = (isoString?: string) => {
    if (!isoString) return "Okänd";
    const date = new Date(isoString);
    return date.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
  };

  journeys.forEach((trip: Journey, tripIndex: number) => {
    const totalMinutes = Math.round(trip.tripDuration / 60);
    resultDiv.insertAdjacentHTML(
      "beforeend",
      `<h3>Resa ${tripIndex + 1} – ${totalMinutes} min</h3>`
    );

    trip.legs.forEach((leg: Leg, legIndex: number) => {
      const minutes = Math.floor(leg.duration / 60);
      const seconds = leg.duration % 60;

      const departureTime = formatTime(leg.origin.departureTimePlanned);
      const arrivalTime = formatTime(leg.destination.arrivalTimePlanned);

      const html = `
        <div class="leg">
          <p><strong>Från:</strong> ${leg.origin.name}</p>
          <p><strong>Till:</strong> ${leg.destination.name}</p>
          <p><strong>Färdmedel:</strong> ${leg.transportation?.product.name ?? "Okänd"}</p>
          <p><strong>Avgång:</strong> ${departureTime}</p>
          <p><strong>Ankomst:</strong> ${arrivalTime}</p>
          <p><strong>Varaktighet:</strong> ${minutes} min ${seconds} sek</p>
        </div>
        <hr />
      `;

      resultDiv.insertAdjacentHTML("beforeend", html);
    });
  });
};

