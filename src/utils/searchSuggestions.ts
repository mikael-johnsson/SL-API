import { getStops } from "../Services/stopFinderApi";
import { createSearchSuggestions } from "./createHtml";

const originInput = document.getElementById("input-start") as HTMLInputElement;
const destinationInput = document.getElementById(
  "input-end"
) as HTMLInputElement;

originInput?.addEventListener("input", async () => {
  if (originInput.value) {
    const locations = await getStops(originInput.value);
    createSearchSuggestions(locations, "origin");
  } else {
    console.log("input empty");
  }
});

destinationInput?.addEventListener("input", async () => {
  if (destinationInput.value) {
    const locations = await getStops(destinationInput.value);
    createSearchSuggestions(locations, "destination");
  } else {
    console.log("input empty");
  }
});
