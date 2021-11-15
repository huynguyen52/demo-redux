import React from "react";

import "./CartTotal.scss";

function CartTotal() {
  return (
    <div className="cart-total">
      <h3 className="entry-header">Cart totals</h3>
      <table>
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>£1,079.00</td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td className="shipping">
              <ul className="shipping__method">
                <li>
                  <input
                    type="radio"
                    id="flatRateInput"
                    name="shipping-method"
                  />
                  <label htmlFor="flatRateInput">
                    Flat rate: <strong>£20.00</strong>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="shipping-method"
                    id="freeShippingInput"
                  />
                  <label htmlFor="freeShippingInput">Free shipping</label>
                </li>
              </ul>
              <p className="shipping__destination">
                Shipping to <strong>Vietnam.</strong>
              </p>
              <button className="shipping__cta">Change address</button>
              <form action="/" className="shipping__form-address">
                <div className="form-control">
                  <select name="" id="" className="form-input">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="form-control">
                  <input type="text" className="form-input" />
                </div>
                <div className="form-control">
                  <input type="text" className="form-input" />
                </div>
                <button className="btn btn--primary">Update</button>
              </form>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong>£1,079.00</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn--secondary">PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default CartTotal;
