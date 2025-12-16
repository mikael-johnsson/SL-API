/**
 * disables the origin input field if the geoPosCheckbox is checked
 */
export const handleGeolocation = () => {
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
      startInput.disabled = true;
    } else {
      startInput.disabled = false;
    }
  });
};
