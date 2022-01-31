import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../../../auth";
import Menu from "../../../core/Menu";

const CreatorLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const showLoading = () =>
    loading && (
      <div
        className="container"
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "10px",
        }}
      >
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === "0") {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const signUpForm = () => (
    <div>
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <div className="user-form-logo"></div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>welcome!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div
                  className="user-form-group"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <ul className="user-form-social">
                    <li>
                      <a href="#" className="google">
                        <i className="fab fa-google"></i>login with google
                      </a>
                    </li>
                  </ul>
                  <div className="user-form-divider">
                    <p>or</p>
                  </div>
                  <form className="user-form">
                    <div className="form-group">
                      <input
                        onChange={handleChange("email")}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={handleChange("password")}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                      />
                    </div>
                    {/* <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="check"
                    />
                    <label className="form-check-label" for="check">
                      Remember Me
                    </label>
                  </div> */}
                    <div className="form-button">
                      <button onClick={clickSubmit}>login</button>
                      {/* <p>
                      Forgot your password?
                      <a href="reset-password.html">reset here</a>
                    </p> */}
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Don't have any account?
                  <Link to="/signup">Register Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const showError = () => (
    <div
      className="container"
      style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px" }}
    >
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    </div>
  );

  return (
    <>
      <Menu />
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </>
  );
};

export default CreatorLogin;
