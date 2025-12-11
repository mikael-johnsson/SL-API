import { getStops } from "./Services/stopFinderApi";
import "./style.css";
import "./input";

// här kan man testa Stop Finder API-anropet
const stops = await getStops("slussen");
console.log(stops);
