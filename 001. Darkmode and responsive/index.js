/* dropdown menu*/
function closeAllDropdowns() {
  let dropdowns = document.querySelectorAll(".dropdown-expand");
  if (dropdowns) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("dropdown-expand");
    });
  }
}

window.onclick = (e) => {
  let toggle = e.target.dataset.toggle;
  // console.log(toggle);
  let content = document.getElementById(toggle);
  if (content) {
    content.classList.toggle("dropdown-expand");
  } else {
    closeAllDropdowns();
  }
};

window.onkeyup = (e) => {
  if (e.keyCode === 27) {
    closeAllDropdowns();
  }
};

/* sidebar */
const body = document.body;

function collapseSidebar() {
  body.classList.toggle("sidebar-expand");
}

/* theme darkmode */
const themeCookieName = "theme";
const themeDark = "dark";
const themeLight = "light";

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

  let expires = "expires=" + d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function loadTheme() {
  let theme = getCookie(themeCookieName);
  body.classList.add(theme === "" ? themeLight : theme);
}
function switchTheme() {
  if (body.classList.contains(themeLight)) {
    body.classList.remove(themeLight);
    body.classList.add(themeDark);

    setCookie(themeCookieName, themeDark);
  } else {
    body.classList.remove(themeDark);
    body.classList.add(themeLight);

    setCookie(themeCookieName, themeLight);
  }
}
loadTheme();
