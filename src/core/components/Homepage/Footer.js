import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer u-container">
      <p className="footer-logo">
        fab
        <span className="footer__copyright">
          &copy; 2021 All rights reserved.
        </span>
      </p>
      <div className="footer__links">
        <Link className="footer__link" href="" target="_blank">
          Privacy
        </Link>
        <Link className="footer__link" href="" target="_blank">
          Terms
        </Link>
        <Link className="footer__link" href="" target="_blank">
          Contact us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
