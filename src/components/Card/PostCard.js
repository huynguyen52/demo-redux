import React from "react";
import { BiUser } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";
import { FaComments } from "react-icons/fa";

import "./PostCard.scss";

function PostCard() {
  return (
    <article className="post-card">
      <div className="image">
        <img src="https:/picsum.photos/id/1/350/190" alt="photo_2" />
      </div>
      <div className="post-author">
        <span>
          <BiUser />
          Admin
        </span>
        <span>
          <VscCalendar />
          21 May 2015
        </span>
      </div>
      <div className="content">
        <a href="/" className="header">
          Hello wordl!
        </a>
        <p className="desc">
          Welcome to WordPress. This is your first post. Edit or delete it, then
          start blogging!
        </p>
        <div className="extra-content">
          <div className="main">
            <FaComments />
            <input type="text" placeholder="Leave a comment" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
