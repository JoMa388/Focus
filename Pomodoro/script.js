pomodoroNavbar();
const title = document.querySelector("title");
let display = document.querySelector("#display");
let time = document.querySelector("#timeSet");
let containerDisplay = document.querySelector("#containerDisplay");
title.textContent = `${time.value}:00 - Time to Focus!`;
let isRunning = false;
let timer = Number(time.value) * 60;
let countdownTimer = timer;
let timeInterval;

function start() {
  if (!isRunning) {
    isRunning = true;
    timeInterval = setInterval(update, 1000);
    setTimeout(videoControl, 250);
  }
}
// Timer Countdown function
function update() {
  let countDown = countdownTimer--;
  let minutes = Math.floor(countDown / 60);
  let seconds = countDown % 60;
  console.log(timer);
  const minutesString = minutes.toString().padStart(2, 0);
  const secondsString = seconds.toString().padStart(2, 0);
  display.textContent = `${minutesString}:${secondsString}`;
  title.textContent = `${minutesString}:${secondsString} - Time to Focus! `;
  if (countDown == 0) {
    setTimeout(reset, 1000);
  }
}

function stop() {
  setTimeout(1000);
  if (isRunning) {
    clearInterval(timeInterval);
    isRunning = false;
    setTimeout(videoControl, 500);
  }
}
function reset() {
  clearInterval(timeInterval);
  isRunning = false;
  videoControl();
  audioControl();
  display.textContent = `${timer / 60}:00`;
  countdownTimer = timer;
  title.textContent = `${timer / 60}:00 - Time to Focus!`;
  containerDisplay.textContent = `${timer / 60}:00`;
}
function videoControl() {
  const video = document.querySelector("#videoBg");
  isRunning
    ? (video.play(), video.classList.remove("hidden"))
    : (video.pause(), video.classList.add("hidden"));
  audioControl();
  hideContainer();
}
function audioControl() {
  const audio = document.querySelector("#audioBg");
  audio.volume = 0.1;
  isRunning
    ? (audio.play(), audio.classList.remove("hidden"))
    : (audio.pause(), audio.classList.add("hidden"));
}
function hideContainer() {
  let container = document.querySelector(".container");
  let containerDisplay = document.querySelector("#containerDisplay");
  let stopBtn = document.querySelector("#stopBtn");
  if (isRunning) {
    container.classList.add("hidden");
    display.classList.remove("hidden");
    stopBtn.classList.remove("hidden");
  } else {
    containerDisplay.textContent = display.textContent;
    container.classList.remove("hidden");
    display.classList.add("hidden");
    stopBtn.classList.add("hidden");
  }
}
function updateDisplay() {
  let activeTab = tabBox.querySelector(".active");
  let tabValue = activeTab.value;
  let updateTime = document.querySelector(`#${tabValue}`);
  let inputValue = Number(updateTime.value);
  const inputString = inputValue.toString().padStart(2, 0);
  containerDisplay.textContent = `${inputString}:00`;
  timer = Number(inputValue) * 60;
  countdownTimer = timer;
}
// Timer Tab Toggle
const tabs = document.querySelectorAll(".tabBtn");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    let tabValue = tab.value;
    let timeChange = document.querySelector(`#${tabValue}`);
    let inputValue = Number(timeChange.value);
    const inputString = inputValue.toString().padStart(2, 0);
    containerDisplay.textContent = `${inputString}:00`;
    display.textContent = `${inputString}:00`;
    timer = Number(inputValue) * 60;
  });
});

// Modal
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
openButton.addEventListener("click", () => {
  modal.showModal();
});
closeButton.addEventListener("click", () => {
  modal.close();
});
timeDialog.addEventListener("click", (e) => {
  const dialogDimensions = timeDialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    timeDialog.close();
  }
});
