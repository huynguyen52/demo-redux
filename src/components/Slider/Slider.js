import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.min.css";

import "./slider.scss";
import slide1 from "../../assets/images/11.png";
import slide2 from "../../assets/images/22.png";
import slide3 from "../../assets/images/33.png";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function Slider() {
  const slide = [];
  for (let i = 0; i < 3; i++) {
    slide.push(
      <SwiperSlide key={i} tag="li">
        <img
          src={`https:/picsum.photos/id/${i + 1}/1000/410`}
          alt={`slide_${i + 1}`}
        />
      </SwiperSlide>
    );
  }
  const swiperSetting = {
    navigation: {
      prevEl: ".slider-button-prev",
      nextEl: ".slider-button-next",
    },
    pagination: {
      clickable: true,
    },
    loop: true,
    // autoplay: { delay: 3000 },
    slidesPerView: 1,
    spaceBetween: 50,
    effect: "fade",
  };
  return (
    <>
      <div className="slider-container">
        <Swiper tag="section" wrapperTag="ul" {...swiperSetting}>
          <SwiperSlide tag="li">
            <img src={slide1} alt="slide_11" />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <img src={slide2} alt="slide_22" />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <img src={slide3} alt="slide_33" />
          </SwiperSlide>
        </Swiper>
        <div className="slider-button-prev"></div>
        <div className="slider-button-next"></div>
      </div>
    </>
  );
}

export default Slider;
