import "../css/app.css";

import "../js/hamburger.js";

document.addEventListener("DOMContentLoaded", () => {
  const headerCollapse = document.getElementById("header-collapse");
  if (window.innerWidth < 1250) {
    headerCollapse.classList.remove("show");
  }
});

// SWIPER

const productsSlider = new Swiper(".products-slider .swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
});
