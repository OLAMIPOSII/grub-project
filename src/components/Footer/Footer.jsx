import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="COMPANY LOGO" />
          <p>
            Your one stop shop for all things GRUB.Our mission is to provide
            delicious, high-quality meals delivered with convenience and care.
            We aim to offer a seamless, reliable service that brings joy to
            every dining experience. Committed to excellence, we prioritize
            customer satisfaction with every order.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>090-676-343-11</li>
            <li>contact@Grub.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">OLAMIPOSI 2025</p>
    </div>
  );
};

export default Footer;
