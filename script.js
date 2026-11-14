const theme = document.getElementById("theme");
theme.href = "style.css";

const button = document.getElementById("switch");
let lightModeOn = false;

function changeModes(event) {
  if (!lightModeOn) {
    lightModeOn = true;
    theme.href = "lightMode.css";
  } else if (lightModeOn) {
    lightModeOn = false;
    theme.href = "style.css";
  }
}

button.addEventListener("click", changeModes);
