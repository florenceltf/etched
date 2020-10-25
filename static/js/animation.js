const animatedTags = document.querySelectorAll("figure");
const gallery = document.querySelector(".gallery").cloneNode(true);
const indexGallery = document.querySelector("section.index-gallery");

animatedTags.forEach(function (tag) {
  tag.style.opacity = 0;
});


let delay = 1.75;

animatedTags.forEach(function (tag) {
  const tagTop = tag.getBoundingClientRect().top;
  const tagBottom = tag.getBoundingClientRect().bottom;

  if (tagTop < window.innerHeight && tagBottom > 0) {
    tag.style.animation = `fadein 1s ${delay}s both`;
    delay = delay + 0.75;
  } else {
    tag.style.opacity = 1;
    tag.style.animation = "";
  }
});

window.addEventListener('scroll', (x) => {
  if (
    (window.innerHeight + window.pageYOffset)
      >= document.body.offsetHeight
  ) {
    indexGallery.appendChild(gallery.cloneNode(true));
  }
});
