import { getStops } from "./stopFinderApi";

type stop = { id: string; name: string };

export const autocomleteInput = (
  input: HTMLInputElement,
  list: HTMLDListElement,
  select: (Stop: stop) => void
) => {
  const fetchAndDisplayStops = async () => {
    const value = input.value.trim();
    list.innerHTML = "";

    if (value.length < 2) return;

    const stops: stop[] = await getStops(value);
    stops.slice(0, 5).forEach((stop) => {
      const li = document.createElement("li");
      li.textContent = stop.name;
      li.addEventListener("click", () => {
        input.value = stop.name;
        list.innerHTML = "";
        select(stop);
      });
      list.appendChild(li);
    });
  };

  // Listen for input changes
  input.addEventListener("input", fetchAndDisplayStops);

  // Listen for click on input field
  input.addEventListener("click", fetchAndDisplayStops);
};
