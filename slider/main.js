btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
container = document.querySelector(".container");

let images = new Array(
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg"
);
let image_counter = 0;
btn2.addEventListener("click", next_item);
function next_item() {
  image_counter++;
  if (image_counter >= images.length) {
    image_counter = 0;
  }
  container.style.transition = "background-image 1.5s";
  container.style.backgroundImage = "url(" + images[image_counter] + ")";
}
btn1.addEventListener("click", function back_item() {
  image_counter--;
  if (image_counter < 0) {
    image_counter = images.length - 1;
  }
  container.style.transition = "background-image 1.5s";
  container.style.backgroundImage = "url(" + images[image_counter] + ")";
});

setInterval(next_item, 10000);
