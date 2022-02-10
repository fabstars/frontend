import React, { useState, useEffect, Fragment } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { read, update, updateUser } from "./apiUser";
import Menu from "../core/Menu";

const Profile = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    role: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { token } = isAuthenticated();
  const {
    name,
    email,
    password,
    error,
    success,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    role,
  } = values;

  const init = (userId) => {
    // console.log(userId);
    read(userId, token).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({
          ...values,
          name: data.name,
          email: data.email,
          twitter: !data.social ? "" : data.social.twitter,
          facebook: !data.social ? "" : data.social.facebook,
          linkedin: !data.social ? "" : data.social.linkedin,
          youtube: !data.social ? "" : data.social.youtube,
          instagram: !data.social ? "" : data.social.instagram,
          role: data.role,
        });
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    update(match.params.userId, token, {
      name,
      email,
      password,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
    }).then((data) => {
      if (data.error) {
        // console.log(data.error);
        alert(data.error);
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            name: data.name,
            email: data.email,
            success: true,
          });
        });
      }
    });
  };

  const redirectUser = (success) => {
    if (success) {
      if (role === "0") {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
  };

  const profileUpdate = (name, email, password) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          onChange={handleChange("name")}
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          onChange={handleChange("password")}
          className="form-control"
          value={password}
        />
      </div>

      <div className="my-2">
        <button
          onClick={() => toggleSocialInputs(!displaySocialInputs)}
          type="button"
          className="btn btn-light"
        >
          Add Social Network Links
        </button>
        <span>Optional</span>
      </div>

      {displaySocialInputs && (
        <Fragment>
          <div className="form-group social-input">
            <i className="fab fa-twitter fa-2x"></i>
            <input
              type="text"
              placeholder="Twitter URL"
              name="twitter"
              value={twitter}
              onChange={handleChange("twitter")}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-facebook fa-2x"></i>
            <input
              type="text"
              placeholder="Facebook URL"
              name="facebook"
              value={facebook}
              onChange={handleChange("facebook")}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-youtube fa-2x"></i>
            <input
              type="text"
              placeholder="YouTube URL"
              name="youtube"
              value={youtube}
              onChange={handleChange("youtube")}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-linkedin fa-2x"></i>
            <input
              type="text"
              placeholder="Linkedin URL"
              name="linkedin"
              value={linkedin}
              onChange={handleChange("linkedin")}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-instagram fa-2x"></i>
            <input
              type="text"
              placeholder="Instagram URL"
              name="instagram"
              value={instagram}
              onChange={handleChange("instagram")}
            />
          </div>
        </Fragment>
      )}

      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  return (
    <>
      <Menu defaultNav={true} />
      <h2 className="mb-4">Profile update</h2>
      {profileUpdate(name, email, password)}
      {redirectUser(success)}
    </>
  );
};

export default Profile;
