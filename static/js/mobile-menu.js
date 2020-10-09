const menuTag = document.querySelector(".mobile-menu");
const menuBackground = document.querySelector(".menu-background");
const menuText = document.querySelector(".menu-text");
const homeOverlay = document.querySelector(".home");
const scrollTag = document.querySelector(".scroll");
const topTag = document.querySelector("#top");
const middleTag = document.querySelector("#middle");
const bottomTag = document.querySelector("#bottom");
const logoTag = document.querySelector(".logo-container");

menuTag.addEventListener("click", function () {
  if (menuText.innerHTML === "Close") {
    menuBackground.classList.remove("fadein");
    menuBackground.classList.add("fadeout");
    menuText.innerHTML = "Menu";
    if (homeOverlay) { homeOverlay.style.display = "flex"; }
    topTag.classList.remove("top");
    middleTag.classList.remove("middle");
    bottomTag.classList.remove("bottom");
    logoTag.style.display = "block";
  } else {
    menuBackground.style.display = "flex";
    if (homeOverlay) { homeOverlay.style.display = "none"; }
    menuText.innerHTML = "Close";
    menuBackground.classList.add("fadein");
    topTag.classList.add("top");
    middleTag.classList.add("middle");
    bottomTag.classList.add("bottom");
    logoTag.style.display = "none";
  }
});

if (scrollTag) {
  window.onscroll = function (ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      scrollTag.style.display = "none";
      scrollTag.classList.add("fadeout");
    } else {
      scrollTag.style.display = "block";
      scrollTag.classList.add("fadein");
    }
  };
}
