import React from "react";

import banner1 from "../../assets/images/top_banner1.png";
import banner2 from "../../assets/images/top_banner2.png";
import banner3 from "../../assets/images/top_banner3.png";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__item">
        <img src={banner1} alt="banner 1" />
      </div>
      <div className="hero__item">
        <img src={banner2} alt="banner 2" />
      </div>
      <div className="hero__item">
        <img src={banner3} alt="banner 3" />
      </div>
    </section>
  );
}

export default Hero;
