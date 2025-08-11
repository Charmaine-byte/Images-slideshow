// images in a array
let images = [
  "images/house1.jpg",
  "images/house2.jpg",
  "images/house3.jpg",
  "images/house4.jpg",
  "images/house5.jpg",
  "images/house6.jpg",
];

let currentIndex = 0;

// eventListener to nextSlide button
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}

// eventListener to prevSlide button
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}