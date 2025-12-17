import type { JourneyResponse } from "../models/JourneyPlanner/JourneyResponse";
import type { Journey } from "../models/JourneyPlanner/Journey";
import type { Leg } from "../models/JourneyPlanner/Leg";
import type { StopLocation } from "../models/StopFinder/StopLocation";

export const createHtml = (response: JourneyResponse) => {
  const journeys = response.journeys;

  const resultDiv = document.getElementById("journey-result");
  if (!resultDiv) return;

  resultDiv.innerHTML = "";

  const formatTime = (isoString?: string) => {
    if (!isoString) return "Okänd";
    const date = new Date(isoString);
    return date.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  journeys.forEach((trip: Journey, tripIndex: number) => {
    const totalMinutes = Math.round(trip.tripDuration / 60);
    resultDiv.insertAdjacentHTML(
      "beforeend",
      `<h3>Resa ${tripIndex + 1} – ${totalMinutes} min</h3>`
    );

    trip.legs.forEach((leg: Leg) => {
      const minutes = Math.floor(leg.duration / 60);
      const seconds = leg.duration % 60;

      const departureTime = formatTime(leg.origin.departureTimePlanned);
      const arrivalTime = formatTime(leg.destination.arrivalTimePlanned);

      const html = `
        <div class="leg">
          <p><strong>Från:</strong> ${leg.origin.name}</p>
          <p><strong>Till:</strong> ${leg.destination.name}</p>
          <p><strong>Färdmedel:</strong> ${
            leg.transportation?.product.name ?? "Okänd"
          }</p>
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

/**
 *
 * @param locations list of StopLoctions
 * @param type a string that determines if the locations are
 * from the origin or destination input field
 */
export const createSearchSuggestions = (
  locations: StopLocation[],
  type: string
) => {
  let searchSuggestionList: HTMLElement | null;

  if (type === "origin") {
    searchSuggestionList = document.getElementById("search-origin-list");
  } else {
    searchSuggestionList = document.getElementById("search-destination-list");
  }
  if (searchSuggestionList) {
    searchSuggestionList.innerHTML = "";
  }

  console.log(searchSuggestionList);

  locations.forEach((loc) => {
    const locationEl = document.createElement("li");
    locationEl.innerHTML = loc.disassembledName
      ? loc.disassembledName
      : loc.name;
    locationEl.addEventListener("click", () => {
      if (type === "origin") {
        (document.getElementById("input-start") as HTMLInputElement).value =
          locationEl.innerHTML;
      } else {
        (document.getElementById("input-end") as HTMLInputElement).value =
          locationEl.innerHTML;
      }

      if (searchSuggestionList) {
        searchSuggestionList.innerHTML = "";
      }
    });
    searchSuggestionList?.appendChild(locationEl);
  });
};
