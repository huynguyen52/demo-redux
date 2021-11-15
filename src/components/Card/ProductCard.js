import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/actions/cartAction";

function Card({
  title = "Product",
  image = "https://picsum.photos/id/157/350/350",
  price = 0,
  id = -1,
}) {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <Link to="/product" className="image">
        <img src={image} alt="" />
        <div className="on-sale">Sale!</div>
        <button className="btn btn--primary btn-cta">Quick view</button>
      </Link>
      <div className="content">
        <a href="/" className="header">
          {title}
        </a>
        <div className="price">
          <del>$260.00</del>${price.toFixed(2)}
        </div>
        <div className="extra-content">
          <button
            className="btn btn--primary"
            onClick={() => dispatch(addToCart(id))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
