// images in a array
let images = [
  "images/yandisa1.jpg",
  "images/yandisa2.jpg",
  "images/zinhle.jpg",
  "images/yandisa3.jpg",
  "images/me1.jpg",
  "images/me2.jpg",
  "images/mom.jpg",
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