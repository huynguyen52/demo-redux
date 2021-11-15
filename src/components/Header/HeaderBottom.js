import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes, FaShoppingBasket } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import "./HeaderBottom.scss";

import { fetchProduct, removeFromCart } from "../../redux/actions/cartAction";
import { useLocation } from "react-use";

function HeaderBottom() {
  const [isCartExpand, setIsCartExpand] = useState(false);
  const carts = useSelector((state) => state.cart.carts);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cartContainerRef = useRef(null);
  const cartRef = useRef(null);
  //get tracks broser's location
  const browserLocation = useLocation();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  useEffect(() => {
    let count = 0;
    let price = 0;
    carts.forEach((prod) => {
      count += prod.quantity;
      price += prod.quantity * prod.price;
    });
    setCartAmount(count);
    setCartTotalPrice(price.toFixed(2));
  }, [cartAmount, carts]);

  // expand cart
  useEffect(() => {
    const cartHeight = cartRef.current.getBoundingClientRect().height;
    if (isCartExpand) {
      cartContainerRef.current.style.height = `${cartHeight}px`;
    } else {
      cartContainerRef.current.style.height = `0px`;
      setIsCartExpand(false);
    }
    //dont expand cart in cart page
    if (browserLocation.pathname === "/cart") {
      cartContainerRef.current.style.height = `0px`;
      setIsCartExpand(false);
    }
  }, [isCartExpand, carts, browserLocation]);

  const cartContent = (list = []) => {
    return list.length === 0 ? (
      <p className="empty-message">No products in the cart</p>
    ) : (
      <ul className="sub-cart__list">
        {list.map((item) => (
          <li className="cart-item" key={item.id}>
            <button
              className="cart-item__close"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <FaTimes />
            </button>

            <Link to="/" className="cart-item__img">
              <img src={item.image} alt="cakw 10" />
            </Link>
            <div className="cart-item__content">
              <Link to="/" className="cart-item__title">
                {item.title}
              </Link>
              <p className="cart-item__quantity">
                {item.quantity} x £{item.price}
              </p>
            </div>
          </li>
        ))}
        <p className="total">
          <strong>Subtotal:</strong>£{cartTotalPrice}
        </p>
        <div className="buttons">
          <Link to="/cart" className="btn btn--primary">
            View cart
          </Link>
          <button className="btn btn--primary">Checkout</button>
        </div>
      </ul>
    );
  };

  return (
    <section className="header-bottom">
      <div
        className="header-cart"
        onClick={() => setIsCartExpand(!isCartExpand)}
      >
        <FaShoppingBasket className="cart-icon" />
        <span>{cartAmount} Items</span>
        <AiFillCaretDown className="cta-icon" />
      </div>
      <aside ref={cartContainerRef} className="sub-cart">
        <div ref={cartRef} className="sub-cart__content">
          {cartContent(carts)}
        </div>
      </aside>
      <div className="header-search">
        <form>
          <input type="text" placeholder="Search products..." />
          <button className="btn btn--primary btn--search">
            <BiSearch />
          </button>
        </form>
      </div>
    </section>
  );
}

export default HeaderBottom;
