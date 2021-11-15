import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import BannerWidget from "../../components/Widget/BannerWidget";
import CategoryWidget from "../../components/Widget/CategoryWidget";
import TagWidget from "../../components/Widget/TagWidget";
import TopRateWidget from "../../components/Widget/TopRateWidget";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import "./CartPage.scss";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { adjustQuantityCart } from "../../redux/actions/cartAction";
import CartTotal from "../../components/CartTotal/CartTotal";
import RelatedSlider from "../../components/Slider/RelatedSlider";

function CartPage() {
  const carts = useSelector((state) => state.cart.carts);
  const [inputs, setInputs] = useState(carts);

  const dispatch = useDispatch();
  const handleInput = (e) => {
    const newInputs = inputs.map((prod) =>
      prod.id === parseInt(e.target.name)
        ? { ...prod, quantity: e.target.value }
        : prod
    );
    setInputs(newInputs);
    dispatch(
      adjustQuantityCart(parseInt(e.target.name), parseInt(e.target.value))
    );
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    const newInputs = inputs.filter((prod) => prod.id !== id);
    setInputs(newInputs);
  };

  const sliderBtn = [
    {
      prevElement: <div id="related-slider-btn-prev"></div>,
      nextElement: <div id="related-slider-btn-next"></div>,
      prevSelector: "#related-slider-btn-prev",
      nextSelector: "#related-slider-btn-next",
    },
  ];

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
          <h2 className="entry-header">cart</h2>
          <div className="cart">
            <table className="cart-table">
              <thead>
                <tr>
                  <td colSpan="3">Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody>
                {inputs.map((prod) => (
                  <tr key={prod.id}>
                    <td>
                      <button
                        className="rmv-product"
                        onClick={() => handleRemove(prod.id)}
                      >
                        <FaTimes />
                      </button>
                    </td>
                    <td>
                      <Link to="/" className="cart-image">
                        <img src={prod.image} alt="" />
                      </Link>
                    </td>
                    <td>
                      <Link to="/" className="cart-title">
                        {prod.title}
                      </Link>
                    </td>
                    <td>£{prod.price}</td>
                    <td>
                      <input
                        type="number"
                        className="quantity-input"
                        value={prod.quantity}
                        onChange={handleInput}
                        name={prod.id}
                      />
                    </td>
                    <td>£{(prod.price * prod.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="6">
                    <div className="coupon">
                      <div className="coupon__form">
                        <input
                          type="text"
                          placeholder="Apply code"
                          className="coupon__input"
                        />
                        <button className="btn btn--primary">
                          Apply Coupon
                        </button>
                      </div>
                      <button className="btn btn--secondary">
                        Update cart
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
            <CartTotal />
            <RelatedSlider
              title="You may be interested in ..."
              sliderBtn={sliderBtn[0]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default CartPage;
