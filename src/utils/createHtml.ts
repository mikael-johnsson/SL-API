import type { JourneyResponse } from "../models/JourneyPlanner/JourneyResponse";

export const createHtml = (journeys: JourneyResponse) => {
  console.log("Journey Response in createHtmlFunction:", journeys);

  const resultDiv = document.getElementById("journey-result");
  if (!resultDiv) return;

  resultDiv.innerHTML = "";

  journeys.forEach((trip, tripIndex) => {
    const totalMinutes = Math.round(trip.tripDuration / 60);

    resultDiv.insertAdjacentHTML(
      "beforeend",
      `<h3>Resa ${tripIndex + 1} – ${totalMinutes} min</h3>`
    );

    trip.legs.forEach((leg, legIndex) => {
      const transport = leg.transportation
        ? `${leg.transportation.product.name} ${leg.transportation.number ?? ""}`
        : "Gång";

      const html = `
        <div class="leg">
          <h4>Delresa ${legIndex + 1}</h4>
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