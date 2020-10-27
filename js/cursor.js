const cursorTag = document.querySelector("div.cursor");

function showCursor() {
  cursorTag.style.display = "block";
}

function hideCursor() {
  cursorTag.style.display = "none";
}

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var cursorX;
  var cursorY;

  function updateCursor() {
    if (cursorX && cursorY) {
      const x = cursorX;
      const y = cursorY + window.pageYOffset;

      cursorTag.style.transform = `translate(${x}px, ${y - 15}px)`;
      showCursor();
    }
  }

  document.addEventListener("mouseenter", showCursor);
  document.addEventListener("mouseleave", hideCursor);

  document.addEventListener("mousemove", function (event) {
    cursorX = event.clientX;
    cursorY = event.clientY;
    updateCursor();
  });

  window.addEventListener('scroll', updateCursor);

}
