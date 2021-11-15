import React from "react";
import { ImClock } from "react-icons/im";
import { BiImage, BiUser } from "react-icons/bi";
import { AiOutlineFolder } from "react-icons/ai";
import { FaTags } from "react-icons/fa";

import "./Post.scss";

function Post() {
  return (
    <article className="blog-post">
      <div className="blog-post__image">
        <img src="https://picsum.photos/id/4/1000/200" alt="" />
      </div>
      <div className="blog-post__header">Hello World!!!</div>
      <div className="blog-post__meta">
        <span>
          <ImClock />6 Aug
        </span>
        <a href="/">
          <BiImage />
          <span>Image</span>
        </a>
        <a href="/">
          <AiOutlineFolder />
          <span>Uncategoried</span>
        </a>
        <a href="/">
          <FaTags />
          <span>Images, Post format</span>
        </a>
        <a href="/">
          <BiUser />
          <span>Admin</span>
        </a>
      </div>
      <p className="blog-post__content">
        Mrs. Darling first heard of Peter when she was tidying up her children’s
        minds. It is the nightly custom of every good mother after her children
        are asleep to rummage in their minds and put things straight for next
        morning, repacking into their proper places the many articles that have
        wandered during the day.
      </p>
    </article>
  );
}

export default Post;
