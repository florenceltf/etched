const gallery = document.querySelector(".gallery");

window.addEventListener('scroll', (x) => {
  if (
    (window.innerHeight + window.pageYOffset)
      >= document.body.offsetHeight
  ) {
    document.body.appendChild(gallery.cloneNode(true));
  }
});
