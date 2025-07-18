import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>
            Welcome! <br />
            <span>ELISHA BAKERY</span>
          </h1>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#shop">SHOP</a>
          <a href="#orders">ORDERS</a>
          <Link to="/registration">REGISTER</Link>
          <a href="#contact">CONTACT</a>
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;
