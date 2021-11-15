import React from "react";

import "./BannerWidget.scss";

function BannerWidget() {
  return (
    <aside className="widget">
      <a href="/" className="image">
        <img src="https:/picsum.photos/id/250/250" alt="250/250" />
      </a>
    </aside>
  );
}

export default BannerWidget;
