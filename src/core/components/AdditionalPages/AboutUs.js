import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./s1.css";
import { isAuthenticated, signout } from "../../../auth";
import Footer from "../Homepage/Footer";


const AboutUs = () => {
  return (
    <>
      <div className="banner">
        <header className="header-style hcontainer" style={{ position: "sticky", top: "0px" }}>
          <Link to="/" className="sitename">
            <h1 className="qlogo">Fabstores</h1>
          </Link>
          <nav>
            <ul>
              {!isAuthenticated() && (
                <li>
                  <Link className="button-72" to="/signin">
                    Log in
                  </Link>
                </li>
              )}

              {!isAuthenticated() && (
                <li>
                  <Link className="button-72" to="/signup">
                    Start For Free
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

              {isAuthenticated() && isAuthenticated().user.role === "0" && (
                <li>
                  <Link className="button-72" to="/admin/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}

              {isAuthenticated() && (
                <li>
                  <Link
                    className="button-72"
                    onClick={() =>
                      signout(() => {
                        // history.push("/");
                      })
                    }
                  >
                    Signout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
        <div className="bgcolora">
          <div className="start-heading text-center">
            <h1>About Us</h1>
          </div>
          <div className="bgarea">
            <p className="beautify">
            Our Mission is to support millions of entrepreneurs with everything they need in selling online.<br />
            We genuinely want to create a platform where anyone who want to launch their online store can do so
             within a minute. They shouldn’t have to worry about products, website, payments or logistics. 
             Everything will be handled by us. If they need something, then It’s their willingness to become 
             a real entrepreneur.<br /><br />
            We are Fabsters who are inspired to democratize selling online. <br /><br />
            Have any doubts? <br />
            Send us a <a href="http://wa.me/+918445814825" target="_blank" style={{"textDecoration": "none"}}>message</a> at +91-8445814825 <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
