import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { isAuthenticated, signout } from "../../../auth";
import Footer from "../Homepage/Footer";
import { useAlert } from "react-alert";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/36683389-bdfe-448c-8222-9fc3b5ba757c", {
      method: "POST",
      body: formData,
    }).then(() => {
      setQuery({ name: "", email: "", message: "", mobile: "" });
      toast.success("Message sent!!");
    });
  };
  alert = useAlert();
  return (
    <>
      <div className="banner">
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
        <div style={{ marginTop: "20px" }} className="container">
          <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
            Contact us
          </h1>
          <form onSubmit={formSubmit}>
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                style={{ backgroundColor: "White" }}
                required
                value={query.name}
                onChange={handleParam()}
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
                value={query.email}
                onChange={handleParam()}
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                minLength="10"
                maxLength="10"
                className="form-control"
                id="mobile"
                placeholder="Phone number"
                name="mobile"
                style={{ backgroundColor: "White" }}
                value={query.mobile}
                onChange={handleParam()}
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
                value={query.message}
                onChange={handleParam()}
              ></textarea>
            </div>

            <br />
            <div style={{ textAlign: "center" }}>
              <button type="submit" class="btn btn-dark">
                Send
              </button>
            </div>
          </form>
          <div className="boxes-area" style={{ marginBottom: "-5rem" }}>
            <div className="container">
              <div className="row" style={{ height: "150%" }}>
                <div className="col-lg-4 col-md-6">
                  <div className="single-box">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>Head Office</h3>
                    <p style={{ fontSize: "17.5px" }}>
                      M-2, TDI City, Sector-59, Patla, Haryana, 131023
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-box">
                    <i class="fas fa-phone"></i>
                    <h3>Phone Number</h3>
                    <p>+91-8445814825</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                  <div className="single-box">
                    <i class="fas fa-envelope"></i>
                    <h3>Support Mail</h3>
                    <p> info@fabstores.co</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
