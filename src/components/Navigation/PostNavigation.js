import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./PostNavigation.scss";

function PostNavigation() {
  return (
    <nav className="navigation post-navigation">
      <div className="nav-link">
        <a href="/" className="nav-post prev-post">
          <FaAngleLeft />
          <span href="/">Post Format: Status</span>
        </a>
        <a href="/" className="nav-post next-post">
          <span href="/">Post Format: Video(Youtube)</span>
          <FaAngleRight />
        </a>
      </div>
    </nav>
  );
}

export default PostNavigation;
