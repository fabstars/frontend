import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer u-container">
      <p className="footer-logo" style={{ fontSize: "15px" }}>
        fab &copy; 2022 All rights reserved.
      </p>
      <div className="footer__links">
        <Link
          className="footer__link"
          href=""
          to="/PrivacyPolicy"
          style={{ fontSize: "20px" }}
        >
          Privacy
        </Link>
        <Link
          className="footer__link"
          href=""
          to="/ReturnPolicy"
          style={{ fontSize: "20px" }}
        >
          Return Policy
        </Link>
        <Link
          className="footer__link"
          href=""
          to="/Terms"
          style={{ fontSize: "20px" }}
        >
          Terms of Service
        </Link>
        <Link className="footer__link" to="/about" style={{ fontSize: "20px" }}>
          About us
        </Link>
        <Link
          className="footer__link"
          to="/contact"
          style={{ fontSize: "20px" }}
        >
          Contact us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
