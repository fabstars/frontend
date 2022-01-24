import React, { useState, Fragment, useEffect } from "react";
import { isAuthenticated } from "../../../auth";
import { read, update, updateUser } from "../../../user/apiUser";
import { useAlert } from "react-alert";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const ProfileDetails = () => {
  // const {
  //   user: { _id, name, email, role },
  // } = isAuthenticated();
  const alert = useAlert();

  const [displayHightlightLinks, toggleDisplayHightlightLinks] =
    useState(false);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
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
    store_name: "",
    highlightLinks: [
      {
        text: "",
        url: "",
      },
    ],
  });
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
    store_name,
    highlightLinks,
  } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const init = (userId) => {
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
          store_name: !data.store_name ? "My Store" : data.store_name,
        });
      }
    });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    update(isAuthenticated().user._id, token, {
      name,
      email,
      password,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      store_name,
    }).then((data) => {
      if (data.error) {
        alert.show(data.error);
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            name: data.name,
            email: data.email,
            success: true,
          });
        });
        alert.show("User details updated", {
          type: "success",
        });
      }
    });
  };

  useEffect(() => {
    init(isAuthenticated().user._id);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12  header-wrapper mt-6">
          <h1 className="page-header">Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading " style={{ marginBottom: "1rem" }}>
              Profile
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-12">
                  <form>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Name<span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          value={name}
                          onChange={handleChange("name")}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Email<span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9">
                        <input
                          disabled
                          style={{ background: "white" }}
                          className="form-control"
                          value={email}
                          onChange={handleChange("email")}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Store Title<span className="text-danger"></span>
                      </div>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          value={store_name}
                          onChange={handleChange("store_name")}
                        />
                      </div>
                    </div>
                    <div className="my-2">
                      <button
                        onClick={() => toggleSocialInputs(!displaySocialInputs)}
                        type="button"
                        className="btn btn-light"
                        style={{ border: "1px solid black" }}
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
                            style={{ marginLeft: "1rem" }}
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
                            style={{ marginLeft: "1rem" }}
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
                            style={{ marginLeft: "1rem" }}
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
                            style={{ marginLeft: "1rem" }}
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
                            style={{ marginLeft: "1rem" }}
                            type="text"
                            placeholder="Instagram URL"
                            name="instagram"
                            value={instagram}
                            onChange={handleChange("instagram")}
                          />
                        </div>
                      </Fragment>
                    )}

                    <div className="my-2">
                      <button
                        onClick={() =>
                          toggleDisplayHightlightLinks(!displayHightlightLinks)
                        }
                        type="button"
                        className="btn btn-light"
                        style={{ border: "1px solid black" }}
                      >
                        Highlight Links
                      </button>
                      <span>Optional</span>
                    </div>

                    {displayHightlightLinks && (
                      <Fragment>
                        {highlightLinks.map((field, idx) => (
                          <div key={idx} style={{ display: "flex" }}>
                            <input
                              type="text"
                              value={field.text}
                              placeholder="Text"
                              className="form-control"
                              style={{
                                marginRight: "1rem",
                                width: "50%",
                              }}
                            />
                            <input
                              type="text"
                              value={field.url}
                              placeholder="URL"
                              className="form-control"
                            />
                            <IconButton>
                              <RemoveIcon />
                            </IconButton>
                            <IconButton>
                              <AddIcon />
                            </IconButton>
                          </div>
                        ))}
                      </Fragment>
                    )}

                    <div className="  text-center">
                      <button
                        onClick={clickSubmit}
                        className="btn btn-primary mt-3"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
