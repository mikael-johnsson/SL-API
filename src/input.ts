

import { getStops } from "./Services/stopFinderApi";

export const handleSubmit = () => {
const startInput = document.getElementById("input-start") as HTMLInputElement;
const endInput = document.getElementById("input-end") as HTMLInputElement;
const btn = document.getElementById("btn-input") as HTMLButtonElement;
 const geoPosCheckbox = document.getElementById( "geopos-checkbox" ) as HTMLInputElement;

  geoPosCheckbox.addEventListener("change", () => {
    if (geoPosCheckbox.checked) {
      console.log("User says - use my geoPosition");
      startInput.disabled = true;
    } else {
      ;
    }
  });

  btn.addEventListener("click",async ()=> {
  if (!startInput.value.trim() || !endInput.value.trim()) {
    alert("Fyll i fälten!");
    return;
  }

  const startValue = startInput.value;
  const endValue = endInput.value;

  const startStops = await getStops(startValue);
  const endStops = await getStops(endValue);

  console.log("Start:", startValue);
  console.log("End:", endValue);

  console.log("start-station", startStops);
  console.log("End-station", endStops);

  });

};




