let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("lime");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Theme option clicked", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "lime") {
    document.getElementById("theme-style").href = "./styling/default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "./styling/blue.css";
  }
  if (mode == "grass") {
    document.getElementById("theme-style").href = "./styling/grass.css";
  }
  if (mode == "candy") {
    document.getElementById("theme-style").href = "./styling/candy.css";
  }
  localStorage.setItem("theme", mode);
}
