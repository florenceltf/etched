const titleTag = document.querySelector("h2.title");

const toggleHeader = function () {
  const pixels = window.pageYOffset;

  if (pixels > 85) {
    titleTag.classList.add("scrolled");
  } else {
    titleTag.classList.remove("scrolled");
  }
}

toggleHeader();

document.addEventListener("scroll", function () {
  toggleHeader();
})

