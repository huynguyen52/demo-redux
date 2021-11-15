import React, { useState } from "react";
import "./ProductPanel.scss";

function ProductPanel() {
  const tabs = ["description", "information", "review"];
  const [tab, setTab] = useState(tabs[0]);

  return (
    <section className="product-panel">
      <ul className="tab-list">
        <li
          className={`tab-item ${tab === tabs[0] ? "active" : null}`}
          onClick={() => setTab(tabs[0])}
        >
          description
        </li>
        <li
          className={`tab-item ${tab === tabs[1] ? "active" : null}`}
          onClick={() => setTab(tabs[1])}
        >
          Additional Information
        </li>
        <li
          className={`tab-item ${tab === tabs[2] ? "active" : null}`}
          onClick={() => setTab(tabs[2])}
        >
          Review(0)
        </li>
      </ul>
      <div
        className="description"
        style={{ display: `${tab === tabs[0] ? "block" : "none"}` }}
      >
        <h4 className="header">Description</h4>
        <div className="content">
          <h5 className="title">Sample Lorem Ipsum Text</h5>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            natus, hic iusto dolorem tempore, numquam odit quidem soluta veniam
            eum cum accusantium inventore mollitia, ab nemo? Quo provident
            corporis ipsa?
          </p>
        </div>
        <div className="content">
          <h5 className="title">Sample Lorem Ipsum Text</h5>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            natus, hic iusto dolorem tempore, numquam odit quidem soluta veniam
            eum cum accusantium inventore mollitia, ab nemo? Quo provident
            corporis ipsa?
          </p>
        </div>
      </div>
      <div
        className="information"
        style={{ display: `${tab === tabs[1] ? "block" : "none"}` }}
      >
        <h4 className="header">Addition information</h4>
        <table className="product-attribute">
          <tbody>
            <tr>
              <th>Color</th>
              <td>Red, Yellow, Pink</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>Small, Medium, Big</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="review"
        style={{ display: `${tab === tabs[2] ? "block" : "none"}` }}
      >
        <h4 className="header">Review</h4>
        <p className="text">There are no reviews yet.</p>
        <h5 className="title">
          BE THE FIRST TO REVIEW “PELLENTESQUE AUGUE JUST”
        </h5>
        <form action="/" className="review-form">
          <p className="text">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="form-control">
            <label htmlFor="" className="form-label">
              Your rating*
            </label>
            <p className="stars">
              <a href="/" className="star star-1">
                {" "}
              </a>
              <a href="/" className="star star-2">
                {" "}
              </a>
              <a href="/" className="star star-3">
                {" "}
              </a>
              <a href="/" className="star star-4">
                {" "}
              </a>
              <a href="/" className="star star-5">
                {" "}
              </a>
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="" className="form-label">
              Your review*
            </label>
            <textarea
              className="form-input"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="" className="form-label">
              Name*
            </label>
            <input className="form-input" type="text" />
          </div>
          <div className="form-control">
            <label htmlFor="" className="form-label">
              Email*
            </label>
            <input className="form-input" type="email" />
          </div>
          <div className="form-control">
            <input className="form-input" type="checkbox" />
            <label htmlFor="" className="form-label">
              Save my name, and website in this browser for the next time I
              comment.
            </label>
          </div>
          <button className="btn btn--primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ProductPanel;
