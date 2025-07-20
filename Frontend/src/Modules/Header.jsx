import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import { useUserContext } from "../context/user-context";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useUserContext();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>
            <span className="welcome-text">Welcome to</span>
            <span className="bakery-name">ELISHA BAKERY</span>
          </h1>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#shop">SHOP</a>
          <a href="#orders">ORDERS</a>
          <a href="#contact">CONTACT</a>

          {user ? (
            <div className="profile-wrapper">
              <Link to="/profile" className="profile-avatar">
                {user.name ? user.name.charAt(0).toUpperCase() : "P"}
              </Link>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/registration" className="register-link">
              REGISTER/LOGIN
            </Link>
          )}
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;
