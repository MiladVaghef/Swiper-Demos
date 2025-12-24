import { defaultSl } from "./sliders/defaultSl.js";
import { paginationSlider } from "./sliders/paginationSl.js";
import { dynamicPaginationSl } from "./sliders/dynamicPaginationSl.js";
import { navigationSl } from "./sliders/navigationSl.js";
import { progressSl } from "./sliders/progressSl.js";

addEventListener("DOMContentLoaded", mainSlider);

function mainSlider() {
  const swiper = new Swiper("#main-slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },

    navigation: {
      nextEl: "#main-slider > .swiper-button-next",
      prevEl: "#main-slider > .swiper-button-prev",
    },
  });

  sideSliders();
}

function sideSliders() {
  defaultSl();
  paginationSlider();
  dynamicPaginationSl();
  navigationSl();
  progressSl();
}
