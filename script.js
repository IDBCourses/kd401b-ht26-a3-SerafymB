const theme = document.getElementById("theme1");
theme1.href = "dark.css";

const button = document.getElementById("switch1");
let light = false;

function changeModes(event) {
  if (!light) {
    light = true;
    theme1.href = "light.css";
    console.log("switched to light mode");
  } else if (light) {
    light = false;
    theme1.href = "dark.css";
    console.log("switched to dark mode");
  }
}

button.addEventListener("click", changeModes);
