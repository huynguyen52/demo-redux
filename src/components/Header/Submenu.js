import React from "react";

import "./Submenu.scss";

function Submenu({
  isShow,
  content = { row: [{ title: null, links: [] }] },
  right = false,
}) {
  const { row } = content;
  if (row) {
    return (
      <div
        className={`sub-menu__wrapper ${right ? "right" : ""} ${
          isShow ? "show" : ""
        }`}
      >
        <div className="sub-menu__content">
          {row.map((col, index) => (
            <div className="sub-menu" key={index}>
              {col.title !== null && (
                <a href="/" className="sub-menu__header">
                  {col.title}
                </a>
              )}
              <ul className="sub-menu__list">
                {col.links.map((link, index) => (
                  <li className="sub-menu__item" key={index}>
                    <a href="/" className="sub-menu__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

export default Submenu;
