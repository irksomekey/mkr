document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  var closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
