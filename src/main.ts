import { getStops } from "./Services/stopFinderApi";
import "./style.css";
import { getGeoposition } from "./utils/findGeolocation";
import "./utils/findGeolocation";

const stops = await getStops("slussen");
console.log("Här är stoppen man får om man söker på slussen: ", stops);

// allt det här bör refaktoreras till en annan fil
const coords = await getGeoposition();
if (coords) {
  console.log("här är användarens geoLocation:", coords);
}

//hitta checkboxen
const geoPosCheckbox = document.getElementById(
  "geopos-checkbox"
) as HTMLInputElement;

//hitta start input elementet
const startInput = document.getElementById("input-start") as HTMLInputElement;

//lägg till eventlistener som disablear startinput
//om användaren vill använda sin platsinfo
geoPosCheckbox.addEventListener("change", async () => {
  if (geoPosCheckbox.checked) {
    console.log("User says - use my geoPosition");
    startInput.disabled = true;
  } else {
    console.log("User says - do not use my geopositon");
    startInput.disabled = false;
  }
});
//
