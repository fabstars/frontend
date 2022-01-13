import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { isAuthenticated } from "../../../auth";

const AboutUs = () => {
  return (
    <>
      <div className="main-banner main-banner-show">
        <header className="header u-container skip-parallax">
          <Link to="/" style={{ marginLeft: "2.8em" }}>
            <h1 className="qaya-logo">Fab</h1>
          </Link>
          <nav>
            <ul>
              {!isAuthenticated() && (
                <li style={{ "margin-right": "-70px" }}>
                  <Link className="button-72" to="/signin">
                    Log in
                  </Link>
                </li>
              )}

              {isAuthenticated() &&
                (isAuthenticated().user.role === "1" ||
                  isAuthenticated().user.role === "2") && (
                  <li style={{ "margin-right": "-70px" }}>
                    <Link className="button-72" to="/user/dashboard">
                      Dashboard
                    </Link>
                  </li>
                )}

              {isAuthenticated() && isAuthenticated().user.role === "0" && (
                <li style={{ "margin-right": "-70px" }}>
                  <Link className="button-72" to="/admin/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}

              <li>
                <Link
                  className="button-72"
                  style={{ "margin-right": "-45px" }}
                  to="/get-started"
                  target="_blank"
                >
                  Get Started
                </Link>
              </li>

              <li>
                <Link
                  style={{ "margin-right": "-45px" }}
                  className="button-72"
                  to="/about"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link className="button-72" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div style={{ marginTop: "10px" }} className="container">
          <h1 style={{ textAlign: "center", marginTop: "10px" }}>About us</h1>
          <div>
            Our Mission is to support millions of entrepreneurs with everything
            they need in selling online. We genuinely want to create a platform
            where anyone who want to launch their online store can do so within
            a minute. They shouldn’t have to worry about products, website,
            payments or logistics. Everything will be handled by us. If they
            need something, then It’s their willingness to become a real
            entrepreneur. We are Fabsters who are inspired to democratize
            selling online.
            <br /> Have any doubts?
            <br /> Send us a message at +91-8445814825
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
