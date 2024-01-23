calculatorNavbar();
const display = document.querySelector("#display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
  let total = display.value;
  console.log(total);
  numbertotal = Number(total);
  console.log(total);
}
