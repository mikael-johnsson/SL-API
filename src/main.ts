import { getStops } from "./Services/stopFinderApi";
import "./style.css";
import { getGeoposition } from "./utils/findGeolocation";
import "./utils/findGeolocation";
import { handleGeolocation } from "./utils/handleGeolocation";

const stops = await getStops("slussen");
console.log("Här är stoppen man får om man söker på slussen: ", stops);

// allt det här bör refaktoreras till en annan fil
const coords = await getGeoposition();
if (coords) {
  console.log("här är användarens geoLocation:", coords);
}

handleGeolocation();
