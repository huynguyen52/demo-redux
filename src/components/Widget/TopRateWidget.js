import React from "react";

import "./TopRateWidget.scss";

function TopRateWidget() {
  return (
    <aside className="widget">
      <h4 className="header">top rated products</h4>
      <div className="content">
        <ul className="product__list">
          <li className="product__item">
            <a href="/" className="image">
              <img src="https:/picsum.photos/id/1/70/70" alt="product 1" />
            </a>
            <div className="desc">
              <a href="/">imperdiet eu</a>
              <p className="price">$699.00</p>
            </div>
          </li>
          <li className="product__item">
            <a href="/" className="image">
              <img src="https:/picsum.photos/id/1/70/70" alt="product 1" />
            </a>
            <div className="desc">
              <a href="/">imperdiet eu</a>
              <p className="price">$699.00</p>
            </div>
          </li>
          <li className="product__item">
            <a href="/" className="image">
              <img src="https:/picsum.photos/id/1/70/70" alt="product 1" />
            </a>
            <div className="desc">
              <a href="/">imperdiet eu</a>
              <p className="price">$699.00</p>
            </div>
          </li>
          <li className="product__item">
            <a href="/" className="image">
              <img src="https:/picsum.photos/id/1/70/70" alt="product 1" />
            </a>
            <div className="desc">
              <a href="/">imperdiet eu</a>
              <p className="price">$699.00</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default TopRateWidget;
