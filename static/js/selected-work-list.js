var projectList = document.getElementsByClassName("selected-work");
var descriptionList = document.getElementsByClassName("description");
var descriptionTag = document.getElementById("description-list")

for (let project of projectList) {
  project.addEventListener('mouseenter', function (event) {
    descriptionTag.style.display = "block";
    for (let description of descriptionList) {
      if (
        description.dataset.selectedWork
        === event.target.dataset.selectedWork
      ) {
        description.style.display = "block";
      } else {
        description.style.display = "none";
      }
    }
  });

  project.addEventListener('mouseleave', function (event) {
    descriptionTag.style.display = "none";
    for (let description of descriptionList) {
      description.style.display = "none";
    }
  });
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  descriptionList.style.display = "none";
};
