

const startInput = document.getElementById("input-start")as HTMLInputElement
const endInput = document.getElementById("input-end") as HTMLInputElement;
const btn = document.getElementById("btn-input") as HTMLButtonElement


btn.addEventListener("click", () => {
  if (!startInput.value.trim() || !endInput.value.trim()) {
    alert("Fyll i fälten!");
    return;
  }

  const startValue = startInput.value;
  const endValue = endInput.value;


  console.log("Start:", startValue);
  console.log("End:", endValue);
});

