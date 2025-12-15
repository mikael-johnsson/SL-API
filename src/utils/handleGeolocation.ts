export const allowGeolocation = () => {
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
};
