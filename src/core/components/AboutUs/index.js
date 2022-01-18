import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { isAuthenticated, signout } from "../../../auth";
import Footer from "../Homepage/Footer";

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
              <li>
                <Link className="button-72" to="/get-started">
                  Get Started
                </Link>
              </li>
              {!isAuthenticated() && (
                <li>
                  <Link className="button-72" to="/signin">
                    Log in
                  </Link>
                </li>
              )}

              {isAuthenticated() &&
                (isAuthenticated().user.role === "1" ||
                  isAuthenticated().user.role === "2") && (
                  <li>
                    <Link className="button-72" to="/user/dashboard">
                      Dashboard
                    </Link>
                  </li>
                )}

              {isAuthenticated() && (
                <li>
                  <Link className="button-72" onClick={() => signout(() => {})}>
                    Signout
                  </Link>
                </li>
              )}
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
      <Footer />
    </>
  );
};

export default AboutUs;
