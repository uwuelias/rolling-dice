function changeMode() {
  var element = document.body;
  var modeIcon = document.getElementById("changeIcon");

  element.classList.toggle("light-mode");
  if (element.classList.contains("light-mode")) {
    modeIcon.style.color = "#2b2d42";
  } else {
    modeIcon.style.color = "#edf2f4";
  }
}
