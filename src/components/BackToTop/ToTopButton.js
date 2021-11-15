import React, { useState, useEffect } from "react";
import "./ToTopButton.scss";

function ToTopButton() {
  const [visibility, setVisibility] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1.5) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    });
  });

  return (
    <div
      className={`back-to-top ${visibility ? "active" : null}`}
      onClick={scrollToTop}
    ></div>
  );
}

export default ToTopButton;
