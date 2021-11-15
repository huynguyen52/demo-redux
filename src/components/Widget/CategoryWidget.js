import React from "react";
import { HiPlus } from "react-icons/hi";

import "./CategoryWidget.scss";

function CategoryWidget() {
  return (
    <aside className="widget">
      <h4 className="header">product categories</h4>
      <div className="content">
        <ul className="treeview__list">
          <li className="treeview__item">
            <a href="/">Books and Media</a>
          </li>
          <li className="treeview__item">
            <a href="/">Books and Media</a>
          </li>
          <li className="treeview__item">
            <span className="toggle">
              <a href="/">sadfasdf</a>
              <HiPlus className="toggle__icon" />
            </span>
            <ul className="nested">
              <li className="treeview__item">
                <a href="/">asdfasdf</a>
              </li>
              <li className="treeview__item">
                <a href="/">asdfasdf</a>
              </li>
            </ul>
          </li>
          <li className="treeview__item">
            <a href="/">Books and Media</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default CategoryWidget;
