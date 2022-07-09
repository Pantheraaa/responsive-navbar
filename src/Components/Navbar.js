import React, { useState } from "react";
import "./Navbar.css";
import { Sling as Hamburger } from "hamburger-react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo" style={{ backgroundImage: 'url(' + require('./Logo.png') + ')' }}>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#products">products</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>

        <div className="hamburger-material">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <Hamburger size={25} />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;