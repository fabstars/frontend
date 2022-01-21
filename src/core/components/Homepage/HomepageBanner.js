import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Menu from "../../Menu";
import main from "./img/main.jpg";
import { isAuthenticated, signout } from "../../../auth";

const HomepageBanner = ({ history }) => {
  return (
    <>
      {/* <Menu></Menu> */}
      <div className="main-banner main-banner-show">
        <header className="header u-container skip-parallax">
          <Link to="/" style={{ marginLeft: "2.8em" }}>
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
        <div className="d-table" style={{ marginTop: "-10px" }}>
          <div className="d-table-cell">
            <div className="container">
              <div className="row" style={{ marginBottom: "100px" }}>
                <div className="col-lg-6 col-md-12">
                  <div className="hero-content">
                    <h1>Build Your Creator Business</h1>
                    <p>
                      Launch your personalized website <br />
                      Share it with your Auidence <br />
                      Earn more Money
                    </p>
                    <section className="cta-input">
                      <form className="cta-input__container">
                        <div className="cta-input__qaya-name mb-2">
                          <span aria-hidden="true">fabstores.co/</span>
                          <input
                            aria-label="Your requested name to be used for a fab store with the URL like https://fabstores.co/your-name"
                            className="cta-input__input"
                            placeholder="your-name"
                            type="text"
                          />
                        </div>
                        {!isAuthenticated() && (
                          <Link className="button-72" to="/signup">
                            Start For Free
                          </Link>
                        )}
                      </form>
                    </section>
                    <p className="hero-footer">
                      Totally free & takes less than 30 seconds
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="hero-video">
                    <img className="site-owner" src={main} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageBanner;
