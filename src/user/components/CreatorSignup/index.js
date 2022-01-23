import React, { useEffect, useState } from "react";
import Menu from "../../../core/Menu";
import { Link, Redirect } from "react-router-dom";
import { signup, authenticate, isAuthenticated } from "../../../auth";

const CreatorSignup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    role: 1,
    confirm_password: "",
  });
  const { name, email, password, success, error, role, confirm_password } =
    values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

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

  const showSuccess = () => (
    <div
      className="container"
      style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px" }}
    >
      <div
        className="alert alert-info"
        style={{ display: success ? "" : "none" }}
      >
        New account is created. Please <Link to="/signin">Signin</Link>
      </div>
    </div>
  );

  const clickSubmit = (event) => {
    if (confirm_password !== password) {
      setValues({ ...values, error: "Passwords do not match", success: false });
    } else {
      event.preventDefault();
      setValues({ ...values, error: false });
      signup({ name, email, password, role }).then((data) => {
        console.log("Signup: ", data);
        if (!data) {
          console.log("Something wrong");
        } else if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            role: 1,
            success: true,
          });
        }
      });
    }
  };
  const signUpForm = () => (
    <section class="user-form-part">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
            <div class="user-form-card">
              <div class="user-form-title">
                <h2>Join Now!</h2>
                <p>Setup A New Account In A Minute</p>
              </div>
              <div
                class="user-form-group"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <ul class="user-form-social">
                  <li>
                    <a href="#" class="google">
                      <i class="fab fa-google"></i>Join with google
                    </a>
                  </li>
                </ul>
                <div class="user-form-divider">
                  <p>or</p>
                </div>
                <form class="user-form">
                  <div class="form-group">
                    <input
                      onChange={handleChange("name")}
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      value={name}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onChange={handleChange("email")}
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      value={email}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onChange={handleChange("password")}
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      value={password}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onChange={handleChange("confirm_password")}
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      value={confirm_password}
                    />
                  </div>

                  <div class="form-button">
                    <button onClick={clickSubmit}>Register</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="user-form-remind">
              <p>
                Already Have An Account?
                <Link to="/signin">login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Menu />
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </>
  );
};

export default CreatorSignup;
