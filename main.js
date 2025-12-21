import { defaultSl } from "./sliders/defaultSl.js";
import { paginationSlider } from "./sliders/paginationSl.js";
import { dynamicPaginationSl } from "./sliders/dynamicPaginationSl.js";

addEventListener("DOMContentLoaded", mainSlider);

function mainSlider() {
  const swiper = new Swiper("#main-slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  sideSliders();
}

function sideSliders() {
  defaultSl();
  paginationSlider();
  dynamicPaginationSl();
}
