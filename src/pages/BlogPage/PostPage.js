import React from "react";
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";
import PostNavigation from "../../components/Navigation/PostNavigation";
import Post from "../../components/Post/Post";
import BannerWidget from "../../components/Widget/BannerWidget";
import CategoryWidget from "../../components/Widget/CategoryWidget";
import TagWidget from "../../components/Widget/TagWidget";
import TopRateWidget from "../../components/Widget/TopRateWidget";

import "./PostPage.scss";

function PostPage() {
  return (
    <div className="container">
      <main className="wrapper">
        <section className="sidebar">
          <CategoryWidget />
          <BannerWidget />
          <TagWidget />
          <TopRateWidget />
        </section>
        <section id="primary">
          <Post />
          <AuthorInfo />
          <PostNavigation />
        </section>
      </main>
    </div>
  );
}

export default PostPage;
