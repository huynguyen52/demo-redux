import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { AiFillHeart } from "react-icons/ai";

import "./ProductWidget.scss";

SwiperCore.use([Navigation]);

function ProductWidget() {
  const swiperSetting = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      prevEl: ".widget-product__btn-prev",
      nextEl: ".widget-product__btn-next",
    },
    loop: true,
  };
  return (
    <article className="widget widget-product">
      <div className="image">
        <div className="thumb-nail">
          <img src="https:/picsum.photos/id/157/300/300" alt="cake" />
        </div>
        <div className="slider-container slider-container--widget-product">
          <Swiper {...swiperSetting} tag="section" wrapperTag="ul">
            <SwiperSlide tag="li">
              <img src="https:/picsum.photos/id/249/150/150" alt="cake" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <img src="https:/picsum.photos/id/250/150/150" alt="cake" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <img src="https:/picsum.photos/id/247/150/150" alt="cake" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <img src="https:/picsum.photos/id/248/150/150" alt="cake" />
            </SwiperSlide>
          </Swiper>
          <div className="widget-product__btn-prev"></div>
          <div className="widget-product__btn-next"></div>
        </div>
      </div>
      <div className="content">
        <h1 className="header">Cras eget augue</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At pariatur
          quaerat saepe ab qui! Aut esse unde similique repellendus inventore
          corporis repellat illo delectus nihil. Deserunt quibusdam nemo quidem.
          Beatae!
        </p>
        <form action="#" className="add-to-cart-form">
          <input type="number" className="quantity-input" />
          <button className="btn btn--primary">Add to Cart</button>
        </form>
        <div className="price">
          <del>$200.00</del>
          $500.00
        </div>
        <div className="add-to-wishlist">
          <AiFillHeart className="add-to-wishlist__icon" />
          <span>
            <a href="/" className="add-to-wishlist__cta">
              Add to Wishlist
            </a>
          </span>
        </div>
        <div className="sku">
          <span>SKU:</span>N/A
        </div>
        <div className="meta">
          <span>Categories: </span>
          <a href="/">sdafa</a>,<a href="/">sdafa</a>,<a href="/">sdafa</a>,
        </div>
        <div className="meta">
          <span>Tags: </span>
          <a href="/">sdafa</a>,<a href="/">sdafa</a>,<a href="/">sdafa</a>,
        </div>
      </div>
    </article>
  );
}

export default ProductWidget;
