import React, { useState, useEffect } from "react";
import AboutProducts from "./components/Homepage/AboutProducts";
import AdditionalDetails from "./components/Homepage/AdditionalDetails";
import CallToAction from "./components/Homepage/CallToAction";
import Footer from "./components/Homepage/Footer";
import HomepageBanner from "./components/Homepage/HomepageBanner";
import LaunchingSteps from "./components/Homepage/LaunchingSteps";
import Testimonial from "./components/Homepage/Testimonial";
import "./headerstyle.css";
import { Link } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";
import CreatorStore from "./CreatorStore";

const LandingPage = ({ history }) => {
  const [subDomain, setSubDomain] = useState(null);
  useEffect(() => {
    const host = window.location.host;
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) setSubDomain(arr[0]);
  }, []);
  useEffect(() => {
    console.log("Subdomain: ", subDomain);
  }, [subDomain]);

  if (!subDomain || subDomain === "fabstores" || subDomain === "www")
    return (
      <>
        <header
          className="header-style hcontainer"
          style={{ position: "sticky", top: "0px" }}
        >
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
                        history.push("/");
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
        {/* <header class="header-part" style={{ position: "sticky", top: "0px" }}>
        <div class="container">
          <div class="header-mobile">
            <a href="#">Fabstores</a>
            <button><i class="flaticon-menu"></i></button>
          </div>
          <div class="header-content">
            <a class="header-logo" href="#">
              <img src="demo/images/logo.png" alt="logo"/>
            </a>
            <ul class="header-list">
              <li><a href="#banner-part">home</a></li>
              <li><a href="#demo-part">demos</a></li>
              <li><a href="#feature-part">features</a></li>
              <li><a href="#element-part">elements</a></li>
              <li><a href="#support-part">support</a></li>
            </ul>
            <a class="header-btn" href="#">purchase now</a>
          </div>
        </div>
      </header> */}
        {/* <header class="header-part">
        <div class="container">
          <div class="header-content">
            <div class="header-media-group">
              <button class="header-user">
                <img src="images/user.png" alt="user"/>
              </button>
                <a href="index.html">
                  <img src="images/logo.png" alt="logo"/>
                </a>
              <button class="header-src">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <a href="index.html" class="header-logo">
              <img src="images/logo.png" alt="logo"/>
            </a>
            <a href="login.html" class="header-widget" title="My Account">
              <img src="images/user.png" alt="user"/><span>join</span>
            </a>
            <form class="header-form">
              <input type="text" placeholder="Search anything..." />
              <button><i class="fas fa-search"></i></button>
            </form>
              <div class="header-widget-group">
                <a href="compare.html" class="header-widget" title="Compare List">
                  <i class="fas fa-random"></i><sup>0</sup>
                </a>
                <a href="wishlist.html" class="header-widget" title="Wishlist">
                  <i class="fas fa-heart"></i><sup>0</sup>
                </a>
                <button class="header-widget header-cart" title="Cartlist">
                  <i class="fas fa-shopping-basket"></i>
                  <sup>9+</sup>
                  <span>total price<small>$345.00</small></span>
                </button>
              </div>
            </div>
          </div>
      </header> */}
        <HomepageBanner />
        <LaunchingSteps />
        <Testimonial />
        <AboutProducts />
        <AdditionalDetails />
        <CallToAction />
        <Footer />
      </>
    );
  else return <CreatorStore match={{ params: { slug: subDomain } }} />;
};

export default LandingPage;
