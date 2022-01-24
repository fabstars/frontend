import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { isAuthenticated, signout } from "../../../auth";
import Footer from "../Homepage/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="main-banner main-banner-show">
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
          <h1 style={{ textAlign: "center", marginTop: "10px" }}>Contact us</h1>
          <form
            action="https://getform.io/f/36683389-bdfe-448c-8222-9fc3b5ba757c"
            method="POST"
          >
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                style={{ backgroundColor: "White" }}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                style={{ backgroundColor: "White" }}
                required
              />
            </div>

            <div class="form-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                name="subject"
                style={{ backgroundColor: "White" }}
                required
              />
            </div>
            <div class="form-group">
              <textarea
                placeholder="Write Your Message Here...."
                className="form-control"
                id="message"
                name="message"
                rows="3"
                style={{ backgroundColor: "white" }}
                required
              ></textarea>
            </div>

            <br />
            <button type="submit" class="btn btn-dark">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
