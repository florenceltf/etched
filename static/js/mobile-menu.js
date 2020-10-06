const menuTag = document.querySelector(".mobile-menu");
const menuBackground = document.querySelector(".menu-background");
const menuText = document.querySelector(".menu-text");
const homeOverlay = document.querySelector(".home");
const scrollTag = document.querySelector(".scroll");

menuTag.addEventListener("click", function () {
  if (menuText.innerHTML === "Close") {
    menuBackground.classList.remove("fadein");
    menuBackground.classList.add("fadeout");
    menuText.innerHTML = "Menu";
    homeOverlay.style.display = "flex";
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

