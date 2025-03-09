


const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const trimmedValue = event.target.value.trim();
  output.textContent = trimmedValue ? trimmedValue : "Anonymous";
});
