let navBar = document.querySelector("nav");
let head = document.querySelector("head");
const navCSS = elementFromHtml(`
<link rel="stylesheet" href="../navBar/navBar.css" />
  `);
function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}
function homeNavbar() {
  const navHome = elementFromHtml(`
  <ul>
    <li><a href="Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="Weather/index.html">Weather</a></li>
    <li><a href="Calculator/index.html">Calculator</a></li>
  </ul>
  <ul class="sidebar">
    <li><a href="Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="Weather/index.html">Weather</a></li>
    <li><a href="Calculator/index.html">Calculator</a></li>
  </ul>

  `);
  const navCSS = elementFromHtml(`
<link rel="stylesheet" href="navBar/navBar.css" />
  `);
  navBar.appendChild(navHome);
  head.appendChild(navCSS);
}
function pomodoroNavbar() {
  const navList = elementFromHtml(`
  <ul>
    <li><a href="../index.html">Home</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="../Weather/index.html">Weather</a></li>
    <li><a href="../Calculator/index.html">Calculator</a></li>
    <li data-open-modal><a>Setting</a></li>
  </ul>
  <ul class="sidebar">
    <li><a href="Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="../Weather/index.html">Weather</a></li>
    <li><a href="../Calculator/index.html">Calculator</a></li>
    <li ><a>Setting</a></li>
  </ul>

  `);
  navBar.appendChild(navList);
  head.appendChild(navCSS);
}
function calculatorNavbar() {
  const navList = elementFromHtml(`
  <ul>
    <li><a href="../index.html">Home</a></li>
    <li><a href="../Pomodoro/index.html">Pomdoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="../Weather/index.html">Weather</a></li>
  </ul>
  <ul class="sidebar">
    <li><a href="../Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="">Weather</a></li>
  </ul>

  `);
  navBar.appendChild(navList);
  head.appendChild(navCSS);
}

function weatherNavbar() {
  const navList = elementFromHtml(`
  <ul>
    <li><a href="../index.html">Home</a></li>
    <li><a href="../Pomodoro/index.html">Pomdoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="../Calculator/index.html">Calculator</a></li>
  </ul>
  <ul class="sidebar">
    <li><a href="../Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="../Calculator/index.html">Calculator</a></li>
  </ul>

  `);
  navBar.appendChild(navList);
  head.appendChild(navCSS);
}
