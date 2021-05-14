const all_photo = document.getElementById("all_photo");
const color = document.getElementById("color_photo");
const black = document.getElementById("black_photo");

const all_pictures = document.querySelector(".all_photos");
const color_pictures = document.querySelector(".color_photos");
const black_pictures = document.querySelector(".black_photos");

function handleAll() {
  all_pictures.classList.remove("hide");
  color_pictures.classList.add("hide");
  black_pictures.classList.add("hide");
}
function handleColor() {
  color_pictures.classList.remove("hide");
  all_pictures.classList.add("hide");
  black_pictures.classList.add("hide");
}
function handleBlack() {
  black_pictures.classList.remove("hide");
  all_pictures.classList.add("hide");
  color_pictures.classList.add("hide");
}

all_photo.addEventListener("click", handleAll);
color.addEventListener("click", handleColor);
black.addEventListener("click", handleBlack);
