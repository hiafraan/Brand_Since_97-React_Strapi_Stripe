import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Blog</span>
          <span>Support</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Our company was founded on the belief that everyone deserves access
            to products that improve their daily life. With a team of dedicated
            professionals, we are committed to creating products that are both
            innovative and reliable.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            We value your feedback and inquiries, and are here to help. Please
            don't hesitate to reach out to us for any questions or support
            needs. Our dedicated customer support team will respond promptly to
            your message.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Brand Since 97</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/deyjvqjzd/image/upload/v1681205567/payment_fex4ts.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
