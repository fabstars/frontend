import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Menu from "../../Menu";
import main from "./img/main.jpg";

const HomepageBanner = () => {
  return (
    <>
      <Menu></Menu>
      <div className="main-banner main-banner-show">
        <header className="header u-container skip-parallax">
          <h1 className="qaya-logo">fab</h1>
          <nav>
            <ul>
              <li>
                <Link
                  className="button-72"
                  href="https://forms.gle"
                  target="_blank">
                  Get early access
                </Link>
              </li>
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
                        <div className="cta-input__qaya-name">
                          <span aria-hidden="true">fab.store/</span>
                          <input
                            aria-label="Your requested name to be used for a fab store with the URL like https://fab.store/your-name"
                            className="cta-input__input"
                            placeholder="your-name"
                            type="text"
                          />
                        </div>
                        <button className="button-72">
                          Get early access
                        </button>
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
