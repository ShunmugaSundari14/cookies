 import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page" id="contact">
      <div className="contact-header">
        <h1>Let’s talk</h1>
        <p>
          We’d love to hear from you! Fill in the form and we’ll get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" placeholder="Your message..." required></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="contact-footer">
        <p>Or email us directly at <a href="mailto:ammu1412004@gmail.com">ammu1412004@gmail.com</a></p>
      </div>
       <p>CORPORATE OFFICE HATSUN AGRO PRODUCT LTD Plot No. 14, Tamil Nadu Housing Board "A" Road, Sholinganallur, Chennai - 600 119, India. Toll Free Number: 1800-120-3355 Telephone Number: 044-24501622</p>
    </section>
  );
};

export default Contact;
