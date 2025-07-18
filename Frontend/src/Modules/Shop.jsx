import React from "react";
import "./Shop.css";
import { useNavigate } from "react-router-dom";

import Cookies1 from "../assets/Cookies1.jpg";
import Cookies2 from "../assets/Cookies2.jpg";
import Cookies3 from "../assets/Cookies3.jpg";
import Cookies4 from "../assets/Cookies4.jpg";

import Cookies5 from "../assets/Cookies5.jpg";
import Cookies6 from "../assets/Cookies6.jpg";
import Cookies7 from "../assets/Cookies7.jpg";
import Cookies8 from "../assets/Cookies8.jpg";

import Cookies9 from "../assets/Cookies9.jpg";
import Cookies10 from "../assets/Cookies10.jpg";
import Cookies11 from "../assets/Cookies11.jpg";
import Cookies12 from "../assets/Cookies12.jpg";

import Cookies13 from "../assets/Cookies13.jpg";
import Cookies14 from "../assets/Cookies14.jpg";
import Cookies15 from "../assets/Cookies15.jpg";
import Cookies16 from "../assets/Cookies16.jpg";

const Shop = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Branding Poster", price: "₹450.00 INR", image: Cookies1 },
    { id: 2, name: "Abstract Cover Art", price: "₹550.00 INR", image: Cookies2 },
    { id: 3, name: "Typography Print", price: "₹650.00 INR", image: Cookies3 },
    { id: 4, name: "Geometric Shapes", price: "₹750.00 INR", image: Cookies4 },
  ];

  const cakes = [
    { id: 1, name: "MADEIRA CAKE", price: "₹550.00 INR", image: Cookies5 },
    { id: 2, name: "GINGER BREAD", price: "₹450.00 INR", image: Cookies6 },
    { id: 3, name: "Midnight Bloom Berry", price: "₹350.00 INR", image: Cookies7 },
    { id: 4, name: "CHELSEA BUFF", price: "₹250.00 INR", image: Cookies8 },
  ];

  const chocolate = [
    { id: 1, name: "MARS BAR", price: "₹1420.00 INR", image: Cookies9 },
    { id: 2, name: "CURLT WURLY", price: "₹1430.00 INR", image: Cookies10 },
    { id: 3, name: "DOUBLE DECKER", price: "₹1440.00 INR", image: Cookies11 },
    { id: 4, name: "TERRY'S ORANGE", price: "₹2450.00 INR", image: Cookies12 },
  ];

  const donuts = [
    { id: 1, name: "GLAZED DONUT", price: "₹180.00 INR", image: Cookies13 },
    { id: 2, name: "ICED DONUT", price: "₹250.00 INR", image: Cookies14 },
    { id: 3, name: "YEAST DONUTS", price: "₹150.00 INR", image: Cookies15 },
    { id: 4, name: "SPRINKLE DONUTS", price: "₹140.00 INR", image: Cookies16 },
  ];

  return (
    <section className="shop-page" id="shop">
      <div className="shop-header">
        <h1>Shop Our Orders</h1>
        <p>Explore our curated collection of creative prints & posters.</p>
      </div>

      {/* CREAMY PUFF */}
      <h2>CREAMY PUFF</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="order-now-button" onClick={() => navigate("/registration")}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cakes */}
      <h2>Cakes</h2>
      <div className="product-grid">
        {cakes.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="order-now-button" onClick={() => navigate("/registration")}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chocolate */}
      <h2>Chocolate</h2>
      <div className="product-grid">
        {chocolate.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="order-now-button" onClick={() => navigate("/registration")}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Donuts */}
      <h2>Donuts</h2>
      <div className="product-grid">
        {donuts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="order-now-button" onClick={() => navigate("/registration")}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
