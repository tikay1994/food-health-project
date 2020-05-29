import React from "react";
import "./style.css";
function Footer(props) {
  return (
    <div className="footer">
      <div>2020 © Food - Health</div>
      <div>
        <a href="#" className="contact-link">
          About
        </a>
        <a href="#" className="contact-link">
          Support
        </a>
        <a href="#" className="contact-link">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Footer;
