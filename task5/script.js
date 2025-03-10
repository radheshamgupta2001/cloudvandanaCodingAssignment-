const images = [
  "https://cdn.pixabay.com/photo/2016/10/04/05/17/stance-1713598_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/10/23/19/11/bmw-7541937_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/10/17/18/55/motorcycle-6719182_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/11/22/16/41/bmw-m4-2970890_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/10/21/06/48/bmw-4565297_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/11/01/21/20/car-6761801_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/01/19/19/49/sports-car-248241_1280.jpg",

];

let currentIndex = 0;
let autoSlideInterval;
const sliderImage = document.getElementById("sliderImage");
const autoSlideBtn = document.getElementById("autoSlideBtn");

function updateImage() {
  sliderImage.src = images[currentIndex];
}

function prevImage() {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  updateImage();
}

function nextImage() {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  updateImage();
}

function toggleAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
    autoSlideBtn.textContent = "Start Auto";
  } else {
    autoSlideInterval = setInterval(nextImage, 1500);
    autoSlideBtn.textContent = "Stop Auto";
  }
}

updateImage();
