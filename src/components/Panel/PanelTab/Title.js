import React from "react";
import "./Title.scss";

function Title({ title = "Title" }) {
  if (typeof title === "string") {
    return (
      <div className="tab-title">
        <h2>{title}</h2>
      </div>
    );
  }
  if (Array.isArray(title)) {
    return (
      <div className="tab-title">
        {title.map((item, index) => (
          <button className={`${index === 1 ? "active" : null}`} key={index}>
            {item}
          </button>
        ))}
      </div>
    );
  }
}

export default Title;
