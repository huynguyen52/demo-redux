import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMain.scss";
import logo from "../../assets/images/logo.png";
import { useState } from "react/cjs/react.development";
import Submenu from "./Submenu";

function HeaderMain() {
  const [page, setPage] = useState("home");
  const [submenu, setSubmenu] = useState("");
  const [showSubnav, setShowSubnav] = useState(false);

  const handlePage = (page) => setPage(page);

  const handleHoverMenu = (e) => {
    setSubmenu(e.target.textContent.toLowerCase());
    setShowSubnav(true);
  };
  const handleLeaveMenu = () => {
    setShowSubnav(false);
  };

  return (
    <header>
      <div className="top-div"></div>
      <div className="container">
        <section className="top-bar">
          <ul className="header__links">
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
            <li>
              <Link to="/login">Contact us</Link>
            </li>
            <li>
              <Link to="/login">Wishlist</Link>
            </li>
          </ul>
        </section>
        <nav className="nav-bar">
          <ul className="menu" onMouseLeave={handleLeaveMenu}>
            <li
              className={`menu__item ${page === "home" ? "active" : ""}`}
              onClick={() => handlePage("home")}
            >
              <Link onMouseEnter={handleHoverMenu} to="/">
                Home
              </Link>
            </li>{" "}
            <li
              onClick={() => handlePage("shop")}
              className={`menu__item ${page === "shop" ? "active" : ""}`}
            >
              <Link onMouseEnter={handleHoverMenu} to="/shop">
                Shop
              </Link>
            </li>
            <li
              onClick={() => handlePage("blog")}
              className={`menu__item ${page === "blog" ? "active" : ""}`}
            >
              <Link onMouseEnter={handleHoverMenu} to="/blog">
                Blog
              </Link>
              <Submenu
                isShow={submenu === "blog" && showSubnav ? true : false}
                content={content[0]}
              />
            </li>
            <li
              onClick={() => handlePage("short-code")}
              className={`menu__item ${page === "short-code" ? "active" : ""}`}
            >
              <Link onMouseEnter={handleHoverMenu} to="/short-code">
                Shortcodes
              </Link>
              <Submenu
                isShow={submenu === "shortcodes" && showSubnav ? true : false}
                content={content[1]}
              />
            </li>
            <li
              onClick={() => handlePage("features")}
              className={`menu__item ${page === "features" ? "active" : ""}`}
            >
              <Link onMouseEnter={handleHoverMenu} to="/features">
                features
              </Link>
              <Submenu
                isShow={submenu === "features" && showSubnav ? true : false}
                content={content[2]}
                right={true}
              />
            </li>
            <li
              onClick={() => handlePage("media")}
              className={`menu__item ${page === "media" ? "active" : ""}`}
            >
              <Link onMouseEnter={handleHoverMenu} to="/media">
                Media
              </Link>
              <Submenu
                isShow={submenu === "media" && showSubnav ? true : false}
                content={content[3]}
                right={true}
              />
            </li>
            <li
              onClick={() => handlePage("about-us")}
              className={`menu__item ${page === "about-us" ? "active" : ""}`}
            >
              <Link onMouseEnter={handleHoverMenu} to="/about-us">
                About us
              </Link>
              <Submenu
                isShow={submenu === "about us" && showSubnav ? true : false}
                content={content[4]}
                right={true}
              />
            </li>
          </ul>
        </nav>
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}

const content = [
  {
    page: "blog",
    row: [
      {
        links: [
          {
            label: "List left sidebar",
          },
          {
            label: "List right sidebar",
          },
        ],
      },
    ],
  },
  {
    page: "Shortcodes",
    row: [
      {
        title: "Container",
        links: [
          {
            label: "Accordions & Toggles",
          },
          {
            label: "Message boxes",
          },
          {
            label: "Columns",
          },
          {
            label: "Tabs",
          },
          {
            label: "Lists",
          },
          {
            label: "Divider",
          },
          {
            label: "Blockquote",
          },
          {
            label: "Progress bar & pie chart",
          },
          {
            label: "Map & contact",
          },
          {
            label: "Buttons",
          },
          {
            label: "Services",
          },
        ],
      },
    ],
  },
  {
    page: "Features",
    row: [
      {
        links: [
          {
            label: "Typography",
          },
          {
            label: "FAQs",
          },
        ],
      },
    ],
  },
  {
    page: "Media",
    row: [
      {
        title: "Gallery",
        links: [
          {
            label: "2 Columns",
          },
          {
            label: "3 Columns",
          },
          {
            label: "4 Columns",
          },
          {
            label: "5 Columns",
          },
        ],
      },
      {
        title: "Portfolio",
        links: [
          {
            label: "2 Columns",
          },
          {
            label: "3 Columns",
          },
          {
            label: "4 Columns",
          },
        ],
      },
    ],
  },
  {
    page: "About us",
    row: [
      {
        links: [
          {
            label: "Contact us",
          },
        ],
      },
    ],
  },
];

export default HeaderMain;
