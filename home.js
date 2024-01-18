homeNavbar();
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}:${meridiem}`;
  document.querySelector("#clock").textContent = timeString;
  document.querySelector("title").textContent = timeString;
}
function updateDate() {
  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const date = now.getDate();
  const year = now.getFullYear();
  const dateString = `${Days[day]}, ${Months[month]} ${date}, ${year}`;
  document.querySelector("#date").textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);
updateDate();
