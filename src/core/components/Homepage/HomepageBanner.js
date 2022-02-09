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
                          <input
                            aria-label="Your requested name to be used for a fab store with the URL like https://your-name.co"
                            className="cta-input__input"
                            placeholder="your-name"
                            type="text"
                          />
                          <span aria-hidden="true">.co</span>
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
