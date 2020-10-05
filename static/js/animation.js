const animatedTags = document.querySelectorAll(
  "figure"
);

animatedTags.forEach(function (tag) {
  tag.style.opacity = 0;
});

const fadeIn = function () {
  let delay = 1.5;

  animatedTags.forEach(function (tag) {
    tag.style.animation = `fadein 1s ${delay}s both`;
    delay = delay + 0.75;
  });
};

fadeIn();