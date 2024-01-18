function homeNavbar() {
  const navBar = document.querySelector("nav");
  const head = document.querySelector("head");
  function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
  }
  const navList = elementFromHtml(`
  <ul>
    <li><a href="Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="">Weather</a></li>
    <li id="settingNav"><a href="">Setting</a></li>
  </ul>
  <ul class="sidebar">
    <li><a href="Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="">Weather</a></li>
    <li id="settingNav"><a href="">Setting</a></li>
  </ul>

  `);
  const navCSS = elementFromHtml(`
<link rel="stylesheet" href="navBar/navBar.css" />
  `);
  navBar.appendChild(navList);
  head.appendChild(navCSS);
}
function pomodorNavbar() {
  const navBar = document.querySelector("nav");
  const head = document.querySelector("head");
  function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
  }
  const navList = elementFromHtml(`
  <ul>
    <li><a href="Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="">Weather</a></li>
    <li id="settingNav"><a href="">Setting</a></li>
  </ul>
  <ul class="sidebar">
    <li><a href="Pomodoro/index.html">Pomodoro</a></li>
    <li><a href="">Calendar</a></li>
    <li><a href="">Weather</a></li>
    <li id="settingNav"><a href="">Setting</a></li>
  </ul>

  `);
  const navCSS = elementFromHtml(`
<link rel="stylesheet" href="navBar/navBar.css" />
  `);
  navBar.appendChild(navList);
  head.appendChild(navCSS);
}
