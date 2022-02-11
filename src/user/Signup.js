import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth";
import Menu from "../core/Menu";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    role: 1,
  });

  const { name, email, password, success, error, role } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
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
  };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <label className="text-muted">Role</label>

      <div class="form-check">
        <input
          onChange={handleChange("role")}
          class="form-check-input"
          type="radio"
          name="role"
          id="Influencer"
          value={1}
        />
        <label class="form-check-label" for="Influencer">
          Influencer
        </label>
        <br />
        <input
          onChange={handleChange("role")}
          class="form-check-input"
          type="radio"
          name="role"
          id="Customer"
          value={2}
        />
        <label class="form-check-label" for="Customer">
          Customer
        </label>
      </div>
      <br />
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );

  return (
    <>
      <Menu defaultNav={true} />
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </>
  );
};

export default Signup;
