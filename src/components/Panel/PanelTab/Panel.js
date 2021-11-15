import React from "react";

import "./Panel.scss";
import Title from "./Title";

function Panel({ panelTitle, slider }) {
  return (
    <article className="panel">
      {<Title title={panelTitle} />}
      {slider}
    </article>
  );
}

export default Panel;
