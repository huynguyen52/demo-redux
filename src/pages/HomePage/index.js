import React from "react";
import Slider from "../../components/Slider/Slider";
import Hero from "../../components/Hero/Hero";
import Panel from "../../components/Panel/PanelTab/Panel";
import ProductSlider from "../../components/Slider/ProductSlider";
import PostSlider from "../../components/Slider/PostSlider";

function index() {
  const productSlider = () => <ProductSlider />;
  const postSlider = () => <PostSlider />;

  return (
    <>
      <div className="container">
        <Slider />
        <Hero />
        <Panel
          panelTitle={["featured", "latest", "best seller"]}
          slider={productSlider()}
        />
      </div>
      <div className="container--bigger">
        <Panel panelTitle={"blog post"} slider={postSlider()} />
      </div>
    </>
  );
}

export default index;
