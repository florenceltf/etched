$(document).ready(function () {

  const cursorTag = document.querySelector("div.cursor");

var cursorX;
var cursorY;

function updateCursor() {
  if (cursorX && cursorY) {
    const x = cursorX;
    const y = cursorY + window.pageYOffset;

    cursorTag.style.display = "block";
    cursorTag.style.transform = `translate(${x}px, ${y - 20}px)`;
  }
}

document.addEventListener("mousemove", function (event) {
  cursorX = event.clientX;
  cursorY = event.clientY;
  updateCursor();
});

window.addEventListener('scroll', updateCursor);


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  cursorTag.style.display = "none";
};

});