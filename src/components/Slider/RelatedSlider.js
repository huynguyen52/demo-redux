import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "./RelatedSlider.scss";
import ProductCard from "../Card/ProductCard";

SwiperCore.use([Navigation]);

function RelatedSlider({
  title = "Related ...",
  sliderBtn = {
    prevElement: <div id="related-slider-btn-prev"></div>,
    nextElement: <div id="related-slider-btn-next"></div>,
    prevSelector: "#related-slider-btn-prev",
    nextSelector: "#related-slider-btn-next",
  },
}) {
  const swiperSetting = {
    navigation: {
      prevEl: sliderBtn.prevSelector,
      nextEl: sliderBtn.nextSelector,
    },
    slidesPerView: 3,
    loop: true,
  };

  return (
    <section className="related-slide ">
      <h4 className="header header--related-slider">{title}</h4>
      <div className="slider-container">
        <Swiper {...swiperSetting}>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
        {sliderBtn.prevElement}
        {sliderBtn.nextElement}
      </div>
    </section>
  );
}

export default RelatedSlider;
