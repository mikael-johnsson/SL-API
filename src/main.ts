import { getStops } from "./Services/stopFinderApi";
import "./style.css";
import { getGeoposition } from "./utils/findGeolocation";

const stops = await getStops("slussen");
console.log("Här är stoppen man får om man söker på slussen: ", stops);

const coords = await getGeoposition();
console.log(coords);
