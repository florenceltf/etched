const cursorTag = document.querySelector("div.cursor")

document.addEventListener("mousemove", function (event) {
  const x = event.clientX;
  const y = event.clientY + window.pageYOffset;

  cursorTag.style.transform = `translate(${x}px, ${y - 20}px)`
});

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   $("#cursor").css("display", "none");
// };