if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  const cursorTag = document.querySelector("div.cursor");

  var cursorX;
  var cursorY;

  function updateCursor() {
    if (cursorX && cursorY) {
      const x = cursorX;
      const y = cursorY + window.pageYOffset;

      cursorTag.style.transform = `translate(${x}px, ${y - 20}px)`;
    }
  }

  document.addEventListener("mouseenter", function () {
    cursorTag.style.display = "block";
  });

  document.addEventListener("mouseleave", function () {
    cursorTag.style.display = "none";
  });

  document.addEventListener("mousemove", function (event) {
    cursorX = event.clientX;
    cursorY = event.clientY;
    updateCursor();
  });

  window.addEventListener('scroll', updateCursor);

}
