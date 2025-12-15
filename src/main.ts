import { getStops } from "./Services/stopFinderApi";
import "./style.css";
import { getGeoLocation } from "./utils/findGeolocation";
import { handleGeolocation } from "./utils/handleGeolocation";

const stops = await getStops("slussen");
console.log("Här är stoppen man får om man söker på slussen: ", stops);

getGeoLocation();
handleGeolocation();
