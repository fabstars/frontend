import React from "react";
import AboutProducts from "./components/Homepage/AboutProducts";
import AdditionalDetails from "./components/Homepage/AdditionalDetails";
import CallToAction from "./components/Homepage/CallToAction";
import Footer from "./components/Homepage/Footer";
import HomepageBanner from "./components/Homepage/HomepageBanner";
import LaunchingSteps from "./components/Homepage/LaunchingSteps";
import Testimonial from "./components/Homepage/Testimonial";
import { Link } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";

const LandingPage = ({ history }) => {
  return (
    <>
      <header
        className="header u-container skip-parallax"
        style={{ position: "sticky", top: "0px" }}
      >
        <Link to="/" style={{ marginLeft: "2.8em", textDecoration: "none" }}>
          <h1 className="qaya-logo">Fab</h1>
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
      <HomepageBanner />
      <LaunchingSteps />
      <Testimonial />
      <AboutProducts />
      <AdditionalDetails />
      <CallToAction />
      <Footer />
    </>
  );
};

export default LandingPage;
