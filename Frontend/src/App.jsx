import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Modules/Header.jsx"
import Home from "./Modules/Home.jsx";
import About from "./Modules/About.jsx";
import Shop from "./Modules/Shop.jsx";
import Contact from "./Modules/Contact.jsx";
import LocationSelector from "./Modules/LocationSelector.jsx";
import ScrollToTopButton from './Modules/ScrollToTopButton.jsx';
import Footer from "./Modules/Footer.jsx";
import RegistrationPage from "./Modules/RegistrationPage.jsx";

function MainContent() {
  return (
    <>
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="shop"><Shop /></section>
        <section id="orders"><LocationSelector /></section>
        <section id="contact"><Contact /></section>
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function App() {
  return (

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    
  );
}

export default App;
