import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer u-container">
      <p className="footer-logo" style={{"fontSize": "15px"}}>
        fab &copy; 2021 All rights reserved.
      </p>
      <div className="footer__links">
        <Link className="footer__link" href="" target="_blank" style={{"fontSize": "20px"}}>
          Privacy
        </Link>
        <Link className="footer__link" href="" target="_blank" style={{"fontSize": "20px"}}>
          Terms
        </Link>
        <Link className="footer__link" href="" target="_blank" style={{"fontSize": "20px"}}>
          Contact us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
