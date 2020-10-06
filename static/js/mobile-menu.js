const menuTag = document.querySelector(".mobile-menu");
const menuBackground = document.querySelector(".menu-background");
console.log("menuBackground", menuBackground)
const menuText = document.querySelector(".menu-text");
const homeOverlay = document.querySelector(".home");
const scrollTag = document.querySelector(".scroll");
const topTag = document.querySelector("hr.top");
const middleTag = document.querySelector("hr.middle");
const bottomTag = document.querySelector("hr.bottom");
const logoTag = document.querySelector(".logo-container");

topTag.classList.remove("top");
middleTag.classList.remove("middle");
bottomTag.classList.remove("bottom");


menuTag.addEventListener("click", function () {
  console.log("hi")
  if (menuText.innerHTML === "Close") {
    menuBackground.classList.remove("fadein");
    menuBackground.classList.add("fadeout");
    menuText.innerHTML = "Menu";
    homeOverlay.style.display = "flex";
    topTag.classList.remove("top");
    middleTag.classList.remove("middle");
    bottomTag.classList.remove("bottom");
    logoTag.style.display = "block";
  } else {
    menuBackground.style.display = "flex";
    homeOverlay.style.display = "none";
    menuText.innerHTML = "Close";
    menuBackground.classList.add("fadein");
    topTag.classList.add("top");
    middleTag.classList.add("middle");
    bottomTag.classList.add("bottom");
    logoTag.style.display = "none";
  }
});

window.onscroll = function (ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    scrollTag.style.display = "none";
    scrollTag.classList.add("fadeout");
  } else {
    scrollTag.style.display = "block";
    scrollTag.classList.add("fadein");
  }
};

