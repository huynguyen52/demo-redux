import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import PostCard from "../Card/PostCard";
import "./PostSlider.scss";

SwiperCore.use([Navigation]);

function PostSlider() {
  const settingSwiper = {
    slidesPerView: 3,
    navigation: {
      prevEl: ".slider-button-prev--panel",
      nextEl: ".slider-button-next--panel",
    },
    loop: true,
  };
  return (
    <div className="slider-container">
      <Swiper {...settingSwiper} tag="section" wrapperTag="ul">
        <SwiperSlide tag="li" className="bg-transpant">
          <PostCard />
        </SwiperSlide>

        <SwiperSlide tag="li" className="bg-transpant">
          <PostCard />
        </SwiperSlide>

        <SwiperSlide tag="li" className="bg-transpant">
          <PostCard />
        </SwiperSlide>

        <SwiperSlide tag="li" className="bg-transpant">
          <PostCard />
        </SwiperSlide>
        <SwiperSlide tag="li" className="bg-transpant">
          <PostCard />
        </SwiperSlide>
        <SwiperSlide tag="li" className="bg-transpant">
          <PostCard />
        </SwiperSlide>
        <SwiperSlide tag="li" className="bg-transpant">
          <PostCard />
        </SwiperSlide>
      </Swiper>
      <div className=" slider-button-prev--panel"></div>
      <div className=" slider-button-next--panel"></div>
    </div>
  );
}

export default PostSlider;
