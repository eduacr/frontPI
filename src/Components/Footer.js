import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>@2023 Digital Booking</p>
      <div className="footer-icons-container">
        <img className="icon" src="/img/fb.svg" alt="Facebook" />
        <img className="icon" src="/img/linkedin.svg" alt="LinkedIn" />
        <img className="icon" src="/img/tweet.svg" alt="Twitter" />
        <img className="icon" src="/img/ig.svg" alt="Instagram" />
      </div>
    </footer>
  );
}

export default Footer;
