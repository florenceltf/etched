const menuTag = document.querySelector(".mobile-menu");
const menuBackground = document.querySelector(".menu-background");
const menuText = document.querySelector(".menu-text");
const homeOverlay = document.querySelector(".home");


menuTag.addEventListener("click", function () {
  if (menuText.innerHTML === "Close") {
    menuBackground.style.display = "none";
    menuText.innerHTML = "Menu";
    homeOverlay.style.display = "flex";

  } else {
    menuBackground.style.display = "flex";
    homeOverlay.style.display = "none";
    menuText.innerHTML = "Close";
  }
});

