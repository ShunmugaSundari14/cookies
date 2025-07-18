import React from "react";
import AbtImg from "../assets/Chef1.jpg";
import cbtImg from"../assets/Chef2.jpg";
import bakeryBasketImage from '../assets/top3.jpg';
import "./About.css";


const About = () => {
  return (
    <section className="about-page" id="about">
      <div className="about-hero">
        <h1><b>About Elisha!</b></h1>
        <p>We are a creative design studio helping brands tell powerful stories.</p>
      </div>

      <div className="about-section">
          <div className="about-image">
        {/* Referencing an image in public/images/ */}
        <img src={AbtImg} alt="Another Studio View" />
      </div>
        <div className="about-text">
          <h2>Our Philosophy</h2>
          <p style={{fontSize: "1.3rem", textAlign: "justify"}}>
             Elisha, we believe in crafting experiences that captivate and inspire.
            Our approach blends design thinking with storytelling to create memorable digital moments.
            Our Cake Shops are conveniently located in local markets and communities to ensure the easy 
            availability of your favorite Monginis cakes, cupcakes, and more. Whether it is for a
            birthday, anniversary, wedding, or just an evening at home, Monginis has the perfect
            custom-made, personalized cake for you or your choice from our off-the-shelf customer
            favorites! Great quality, service, and ethics has developed Monginis into a household
            name with our 700+ outlets. On an average 1,40,000 customers visit our cake shop daily
            across the country. Our Cake Shops owners are dedicated to the absolute satisfaction of 
            the customer. Additionally, our long shelf life packaged cakes products are available 
            across 10,00,000 outlets nationally with a sizeable presence in Mall, Super markets and 
            on Railway stations
          </p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-image">
        {/* Referencing an image in public/images/ */}
        <img src={cbtImg} alt="Another Studio View" />
      </div>
        <div className="about-text">
          <h2>Our Studio</h2>
          <p style={{fontSize: "1.3rem" , textAlign: "justify"}}>
            
            Based in a modern space surrounded by nature, our studio fosters creativity
            and collaboration. We bring together strategy, design, and development under one roof.
            Our journey began with one humble shop in Fort, Mumbai and grew to over one thousand locations 
            throughout India under the inspiring vision of our founder, Hussein Khorakiwala in the early 1956. 
            Since then, our family has combined their years of experience with the vision of a community of
            collaborative shop owners, suppliers and other partners working together to create a brand name
            in the market to grow their business to what it is today.In order to achieve this, the family
            offers franchises to budding entrepreneurs & distributors partnering with them to ensure 
            success and excellence.
          </p>
        </div>
         
      </div>



      <div className="about-mission">
        
        <h2>OUR MISSION </h2>
        <p style={{fontSize: "1.3rem", textAlign: "justify" , fontStyle:"normal"}}></p>
          <p>
          To empower brands with elegant and effective digital experiences that drive
          engagement and growth.Our mission is to offer gourmet cakes, pastries, cupcakes,
          cookies, and more that are universally enjoyed by family and friends and make
          Monginis a part of all life’s celebrations and memories
        </p> 
        <button className="order-now-button" onClick={() => navigate("/registration")}>
                VIST
              </button>
            
      </div>
    </section>
  );
};

export default About;
