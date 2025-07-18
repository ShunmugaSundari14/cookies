import React from 'react';
import "./Home.css";
import bakeryBasketImage from '../assets/top3.jpg'; 
 
const HeroSection = () => {
  return (
    <section className="cookie-section-container">
      <div className="cookie-text-content">
        <h2 className="cookie-section-title" >Our Delicious Chocolate Chip Cookies</h2>
        <p className="cookie-section-description"> 
          Baked fresh daily with the finest chocolate chips and a touch of secret family love.
          Perfectly crisp on the outside, chewy on the inside, and irresistibly good.
          A timeless classic for every sweet craving.</p>
    
      </div>
      <div>
        <h1 style={{fontSize: "3rem"}}>ELISHA'S BAKERY: A SWEET TALE </h1>
        <p style={{fontSize: "2rem", fontStyle:"normal",textAlign:'justify  '}}>      
    
        Once upon a time, "Elisha's Bakery" wasn't just a name; it was a symbol of love, perseverance, and unwavering hope. This is the story of Elisha, an English lady, and her husband. One evening, her husband, deeply troubled by financial struggles, poured out his heart to his wife. Elisha felt the pain in his every word.It was at that moment an extraordinary idea sparked in her mind.
Determined to alleviate her husband's distress, Elisha made a resolute decision. Her passion and love for baking inspired her to start a small bakery right from their home. What began as a tiny dream slowly blossomed into a grand culinary empire. Every cake and bun crafted by Elisha's hands carried love and positivity.  </p>
      </div>
     
    </section>
  );
};


   

export default HeroSection;

