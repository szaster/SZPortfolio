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
  });
}

function setTheme(mode) {
  if (mode == "lime") {
    document.getElementsById("theme-style").href = "default.css";
  }
  if (mode == "blue") {
    document.getElementsById("theme-style").href = "blue.css";
  }
  if (mode == "grass") {
    document.getElementsById("theme-style").href = "grass.css";
  }
  if (mode == "candy") {
    document.getElementsById("theme-style").href = "candy.css";
  }
  localStorage.setItem("theme", mode);
}
