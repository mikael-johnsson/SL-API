import { handleSubmit } from "./input";
import { getStops } from "./Services/stopFinderApi";
import { autocomleteInput } from "./Services/autocompleteInput ";
import "./style.css";

const stops = await getStops("slussen");
console.log("Här är stoppen man får om man söker på slussen: ", stops);
handleSubmit()

const inputElement = document.querySelector("input") as HTMLInputElement;
autocomleteInput(inputElement, "", [])

