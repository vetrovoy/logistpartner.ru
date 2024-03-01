import "../css/app.css";

import "../js/hamburger.js";

// HEADER COLLAPSE
document.addEventListener("DOMContentLoaded", () => {
  const headerCollapse = document.getElementById("header-collapse");
  if (window.innerWidth <= 1250) {
    headerCollapse.classList.remove("show");
  }
});
// CUSTOM COLLAPSE

const collapseItems = document.querySelectorAll(
  "[data-collapse-custom-target]"
);

const collapseHandleMouseEvent = (element, eventName) => {
  const target = element.dataset?.collapseCustomTarget;
  const targetElement = document.getElementById(target);

  if (!targetElement) return;

  if (eventName === "click") {
    targetElement.classList.toggle("show");
    return;
  }

  if (eventName === "mouseover") {
    targetElement.classList.add("show");
  } else {
    targetElement.classList.remove("show");
  }
};

if (collapseItems.length > 0) {
  collapseItems.forEach((collapse) => {
    if (window.innerWidth <= 1250) {
      collapse.addEventListener("click", (ev) => {
        ev.preventDefault();
        collapseHandleMouseEvent(collapse, "click");
      });
    } else {
      collapse.addEventListener("mouseover", (ev) =>
        collapseHandleMouseEvent(collapse, "mouseover")
      );
      collapse.addEventListener("mouseout", (ev) =>
        collapseHandleMouseEvent(collapse, "mouseout")
      );
    }
  });
}

// SWIPER

const productsSlider = new Swiper(".products-slider .swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
});

const reviewsSlider = new Swiper(".reviews-slider .swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 14,
  navigation: {
    nextEl: ".reviews-slider .swiper-button-next",
    prevEl: ".reviews-slider .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
