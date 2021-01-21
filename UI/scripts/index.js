let tootleButton = document.getElementById("tootle-nav-btn");
let Navigation = document.getElementById("mobile-navigation");
let close = document.getElementById("close-navigation-btn");

tootleButton.addEventListener("click", () => {
  // show navigation
  Navigation.style.display = "block";
});

close.addEventListener("click", () => {
  // close navigation
  Navigation.style.display = "none";
});