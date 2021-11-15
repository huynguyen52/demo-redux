import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import ProductCard from "../Card/ProductCard";
import "./ProductSlider.scss";

SwiperCore.use([Navigation]);

function ProductSlider() {
  const settingSwiper = {
    slidesPerView: 4,
    navigation: {
      prevEl: ".slider-button-prev--product-panel",
      nextEl: ".slider-button-next--product-panel",
    },
    loop: true,
  };
  return (
    <div className="slider-container">
      <Swiper {...settingSwiper} tag="section" wrapperTag="ul">
        <SwiperSlide tag="li" className="bg-transpant">
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide tag="li" className="bg-transpant">
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide tag="li" className="bg-transpant">
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide tag="li" className="bg-transpant">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide tag="li" className="bg-transpant">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide tag="li" className="bg-transpant">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide tag="li" className="bg-transpant">
          <ProductCard />
        </SwiperSlide>
      </Swiper>
      <div className="slider-button-prev--product-panel"></div>
      <div className="slider-button-next--product-panel"></div>
    </div>
  );
}

export default ProductSlider;
