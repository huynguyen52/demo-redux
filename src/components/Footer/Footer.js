import React, { useState, useEffect } from "react";
import "./Footer.scss";

import data from "../../data";

import {
  FaPinterest,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";

const columns = {
  links: [
    {
      id: 1,
      title: "Store location",
      link: "/",
    },
    {
      id: 2,
      title: "Shipping Details",
      link: "/",
    },
    {
      id: 3,
      title: "Track an Order",
      link: "/",
    },
    {
      id: 4,
      title: "Affiliate",
      link: "/",
    },
    {
      id: 5,
      title: "Discount on products",
      link: "/",
    },
  ],
  links1: [
    {
      id: 1,
      title: "Customer Assistance",
      link: "/",
    },
    {
      id: 2,
      title: "Net Transaction",
      link: "/",
    },
    {
      id: 3,
      title: "Delivery Information",
      link: "/",
    },
    {
      id: 4,
      title: "International Shipping",
      link: "/",
    },
    {
      id: 5,
      title: "Discount on products",
      link: "/",
    },
  ],
  links2: [
    {
      id: 1,
      icon: <FaPinterest />,
      title: "Pinterest",
      link: "/",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      title: "Twitter",
      link: "/",
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      title: "Linkedin",
      link: "/",
    },
    {
      id: 4,
      icon: <FaRss />,
      title: "RSS",
      link: "/",
    },
    {
      id: 5,
      icon: <FaYoutube />,
      title: "Youtube",
      link: "/",
    },
  ],
  links3: [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      title:
        "Megnor Comp Pvt Limited, 507-Union Trade Centre, Beside Apple Hospital, Udhana Darwaja, Ring Road, Surat, India",
      link: "/",
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: "(91)-261 3023333",
      link: "/",
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      title: "support@example.com",
      link: "/",
    },
  ],
};

function Footer() {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    const scrollListen = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        setAppear(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollListen);
    };
  }, [appear]);

  const { pages } = data;
  const { links, links1, links2, links3 } = columns;
  const animations = ["from-left", "from-right", "from-bottom", "from-top"];
  const footerWidget = (
    title = "title",
    links = [],
    animation = "from-left"
  ) => {
    return (
      <div className={`footer-widget ${appear ? animation : null}`}>
        <h4 className="header">{title}</h4>
        <div className="content">
          <ul className="link__list">
            {links.map((link) => (
              <li
                key={link.id}
                className={`link__item ${link.icon ? "no-icon" : null}`}
              >
                <a href={link.link}>
                  {link.icon}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-main">
          {footerWidget("information", links)}
          {footerWidget("customer services", links1, animations[3])}
          {footerWidget("Follow me", links2, animations[2])}
          {footerWidget("Get in touch", links3, animations[1])}
        </div>
        <div className="footer-bottom">
          <nav>
            <ul className="footer-menu">
              {pages.map((page) => (
                <li className="footer-menu__item" key={page.id}>
                  <a href={page.link}>{page.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="copy-right">
            © 2021 <a href="/">Tmplasedmela.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
