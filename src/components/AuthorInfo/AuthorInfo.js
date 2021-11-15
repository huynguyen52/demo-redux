import React from "react";

import "./AuthorInfo.scss";

function AuthorInfo() {
  return (
    <div className="author-info">
      <div className="author-avatar">
        <img src="https://picsum.photos/id/10/74/74" alt="" />
      </div>
      <div className="author-content">
        <h2 className="author-title">About admin</h2>
        <p className="author-biography">
          <a href="/" className="author-link">
            View all post by admin
          </a>
        </p>
      </div>
    </div>
  );
}

export default AuthorInfo;
