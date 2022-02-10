import React, { useEffect, useState } from "react";
import Menu from "../../../core/Menu";
import { Link, Redirect } from "react-router-dom";
import {
  signup,
  authenticate,
  isAuthenticated,
  googleAuthSignUp,
} from "../../../auth";
import { GoogleLogin } from "react-google-login";
import { useAlert } from "react-alert";

const CreatorSignup = () => {
  const alert = useAlert();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    role: 1,
    loading: false,
    redirectToReferrer: false,
  });
  const {
    name,
    email,
    password,
    success,
    error,
    role,
    loading,
    redirectToReferrer,
  } = values;

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

  const googleSuccess = async (res) => {
    const result = res && res.profileObj ? res.profileObj : undefined;
    const token = res && res.tokenId ? res.tokenId : undefined;
    try {
      setValues({ ...values, error: false });
      googleAuthSignUp({ result, token }).then((data) => {
        console.log("Signup: ", data);
        if (!data) {
          console.log("Something wrong");
        } else if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              redirectToReferrer: true,
            });
          });
        }
      });
    } catch (error) {
      alert.show("Google auth was unsuccessful. Try again later", {
        type: "error",
      });
    }
  };

  const googleFailure = () => {
    console.log("Failed");
    alert.show("Google auth was unsuccessful. Try again later", {
      type: "error",
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, role }).then((data) => {
      console.log("Signup: ", data);
      if (!data) {
        console.log("Something wrong");
      } else if (data.error) {
        setValues({ ...values, error: data.error, success: false });
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
      if (role === 0) {
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
                <GoogleLogin
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                  className="user-form-social"
                  clientId="680948374245-5t9426j4s76qg4e359k6pt2tip0bha5p.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="user-form-social google google-button-auth"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <i className="fab fa-google"></i> Join with Google
                    </button>
                  )}
                />
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
      <Menu defaultNav={true} />

      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </>
  );
};

export default CreatorSignup;
