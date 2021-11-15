import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductPanel from "../../components/Panel/PanelTab/ProductPanel";
import RelatedSlider from "../../components/Slider/RelatedSlider";
import BannerWidget from "../../components/Widget/BannerWidget";
import CategoryWidget from "../../components/Widget/CategoryWidget";
import ProductWidget from "../../components/Widget/ProductWidget";
import TagWidget from "../../components/Widget/TagWidget";
import TopRateWidget from "../../components/Widget/TopRateWidget";

import "./style.scss";

function index() {
  const sliderBtn = [
    {
      prevElement: <div id="related-slider-btn-prev"></div>,
      nextElement: <div id="related-slider-btn-next"></div>,
      prevSelector: "#related-slider-btn-prev",
      nextSelector: "#related-slider-btn-next",
    },
    {
      prevElement: <div id="related-slider-btn-prev-2"></div>,
      nextElement: <div id="related-slider-btn-next-2"></div>,
      prevSelector: "#related-slider-btn-prev-2",
      nextSelector: "#related-slider-btn-next-2",
    },
  ];

  return (
    <div className="container">
      <main className="wrapper">
        <section className="sidebar">
          <CategoryWidget />
          <BannerWidget />
          <TagWidget />
          <TopRateWidget />
        </section>
        <section id="primary">
          <BreadCrumb />
          <article className="summary">
            <ProductWidget />
            <ProductPanel />
          </article>
          <RelatedSlider
            title="You may also like ..."
            sliderBtn={sliderBtn[0]}
          />
          <RelatedSlider
            title="Related products ..."
            sliderBtn={sliderBtn[1]}
          />
        </section>
      </main>
    </div>
  );
}

export default index;
