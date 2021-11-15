import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import BannerWidget from "../../components/Widget/BannerWidget";
import CategoryWidget from "../../components/Widget/CategoryWidget";
import TagWidget from "../../components/Widget/TagWidget";
import TopRateWidget from "../../components/Widget/TopRateWidget";
import ProductCard from "../../components/Card/ProductCard";
import { useSelector } from "react-redux";
import { AiOutlineTable } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";

import "./style.scss";

function ShopPage() {
  const products = useSelector((state) => state.cart.products);

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
          <BreadCrumb />
          <h2 className="entry-header">shop</h2>
          <div className="show-entities">Showing 1–9 of 14 results</div>
          <div className="control-panel">
            <nav className="gridlist-toggle">
              <a href="/" className="gridlist-toggle__btn grid">
                <AiOutlineTable />
              </a>
              <a href="/" className="gridlist-toggle__btn list">
                <BsListUl />
              </a>
            </nav>
            <form action="#" className="ordering">
              <div className="form-control">
                <select name="" id="" className="form-input">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </form>
          </div>
          <div className="panel row">
            {products.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ShopPage;
