import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="wrapHeader">
        <div className="logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/Header/Logo.png`}
              alt=""
            />
          </Link>
        </div>
        <ul className="nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
