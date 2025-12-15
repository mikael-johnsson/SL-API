import type { JourneyResponse, Journey, Leg } from "../models/JourneyPlanner/Journey";

const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const createHtml = (response: JourneyResponse) => {
  console.log("Journey Response in createHtmlFunction:", response);

  const journeys = response.journeys;

  const resultDiv = document.getElementById("journey-result");
  if (!resultDiv) return;

  resultDiv.innerHTML = "";

  journeys.forEach((trip: Journey, tripIndex: number) => {
    const totalMinutes = Math.round(trip.tripDuration / 60);

    resultDiv.insertAdjacentHTML(
      "beforeend",
      `<h3>Resa ${tripIndex + 1} – ${totalMinutes} min</h3>`
    );

    trip.legs.forEach((leg: Leg, legIndex: number) => {
      const transport = leg.transportation
        ? `${leg.transportation.product.name} ${leg.transportation.number ?? ""}`
        : "Gång";

      const html = `
        <div class="leg">
          <h4>Delresa ${legIndex + 1}</h4>
          <p><strong>Transport:</strong> ${transport}</p>
          <p><strong>Från:</strong> ${leg.origin.name}</p>
          <p><strong>Till:</strong> ${leg.destination.name}</p>
          <p><strong>Avgång:</strong> ${formatTime(leg.departureTimePlanned)}</p>
          <p><strong>Ankomst:</strong> ${formatTime(leg.arrivalTimePlanned)}</p>
        </div>
        <hr />
      `;

      resultDiv.insertAdjacentHTML("beforeend", html);
    });
  });
};
