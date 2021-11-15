import React from "react";

import "./BreadCrumb.scss";

function BreadCrumb() {
  return (
    <nav className="bread-crumb">
      <span>
        <a href="/">Home</a>
      </span>
      &nbsp;/&nbsp;
      <span>
        <a href="/">dark chocolate</a>
      </span>
      &nbsp;/&nbsp;
      <span>
        <a href="/">dark chocolate</a>
      </span>
      &nbsp;/&nbsp;
      <span>Cras eget augue</span>
    </nav>
  );
}

export default BreadCrumb;
