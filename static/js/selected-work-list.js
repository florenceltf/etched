var projectList = document.getElementsByClassName("selected-work");
var descriptionList = document.getElementsByClassName("description");

for (let project of projectList) {
  project.addEventListener('mouseenter', function (event) {
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
    for (let description of descriptionList) {
      description.style.display = "none";
    }
  });
}
