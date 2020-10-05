const menuTag = document.querySelector(".mobile-menu");
const menuBackground = document.querySelector(".menu-background");
const menuText = document.querySelector(".menu-text");
const homeOverlay = document.querySelector(".home");
const scrollTag = document.querySelector(".scroll");
const containerTag = document.querySelector(".container");


menuTag.addEventListener("click", function () {
  if (menuText.innerHTML === "Close") {
    menuBackground.style.display = "none";
    menuText.innerHTML = "Menu";
    homeOverlay.style.display = "flex";
    containerTag.style.display = "block";

  } else {
    menuBackground.style.display = "flex";
    homeOverlay.style.display = "none";
    menuText.innerHTML = "Close";
  }
});

window.onscroll = function (ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    scrollTag.style.display = "none";
  } else {
    scrollTag.style.display = "block";
  }
};

