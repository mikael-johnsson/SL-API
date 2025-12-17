import { handleSubmit } from "./input";
import { getStops } from "./Services/stopFinderApi";
import { autocomleteInput } from "./Services/autocompleteInput ";
import "./style.css";

const stops = await getStops("slussen");
console.log("Här är stoppen man får om man söker på snlussen: ", stops);
handleSubmit()


import { handleGeolocation } from "./utils/handleGeolocation";
import "./style.css";

handleGeolocation();
handleSubmit();
