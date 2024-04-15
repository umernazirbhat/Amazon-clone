document.addEventListener("DOMContentLoaded", function () {
  let logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", function () {
      location.reload();
    });
  } else {
    console.error("Logo element not found.");
  }
});
