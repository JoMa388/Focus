const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
let time = document.querySelector("input");
openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

function updateTime() {
  temp = Number(time.value);
  const display = document.querySelector("#display");
  display.textContent = `${temp}:00`;
}
