import { handleSubmit } from "./input";
import { getStops } from "./Services/stopFinderApi";
import "./style.css";

const stops = await getStops("slussen");
console.log("Här är stoppen man får om man söker på slussen: ", stops);
handleSubmit()