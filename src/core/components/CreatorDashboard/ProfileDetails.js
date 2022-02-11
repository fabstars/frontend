import React, { useState, Fragment, useEffect } from "react";
import { isAuthenticated } from "../../../auth";
import { read, update, updateUser } from "../../../user/apiUser";
import { useAlert } from "react-alert";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Card } from "react-bootstrap";
import Resizer from "react-image-file-resizer";

const ProfileDetails = ({ location, history }) => {
  // const {
  //   user: { _id, name, email, role },
  // } = isAuthenticated();
  const alert = useAlert();

  const [highlightLinks, setHighlightLinks] = useState([
    {
      text: "",
      url: "",
    },
  ]);

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
    url: "",
    slug: "",
    formData: "",
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
    slug,
    url,
    formData,
    store_name,
  } = values;

  const handleChange = (name) => (e) => {
    const value = name === "url" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, error: false, [name]: value });
  };

  const init = (userId) => {
    read(userId, token).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setHighlightLinks(data.highlightLinks);
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
          formData: new FormData(),
          slug: data.slug !== undefined ? data.slug : "",
        });
      }
    });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("slug", slug);
    if (twitter && twitter.length) formData.set("twitter", twitter);
    if (facebook && facebook.length) formData.set("facebook", facebook);
    if (linkedin && linkedin.length) formData.set("linkedin", linkedin);
    if (youtube && youtube.length) formData.set("youtube", youtube);
    if (instagram && instagram.length) formData.set("instagram", instagram);
    formData.set("role", role);
    formData.set("password", password);
    formData.set("store_name", store_name);
    formData.set("highlightLinks", JSON.stringify(highlightLinks));
    if (values.url) {
      Resizer.imageFileResizer(values.url, 300, 300, "JPEG", 100, 0, (uri) => {
        setValues({ ...values, url: uri });
      });
    }
    update(isAuthenticated().user._id, token, formData).then((data) => {
      if (data.error) {
        alert.show(data.error, { type: "error" });
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

  const handleLink = (index, event) => {
    const current_values = [...highlightLinks];
    current_values[index][event.target.name] = event.target.value;
    setHighlightLinks(current_values);
  };

  const handleRemove = (index) => {
    const current_values = [...highlightLinks];
    current_values.splice(index, 1);
    setHighlightLinks(current_values);
  };

  useEffect(() => {
    init(isAuthenticated().user._id);
  }, []);

  const handleAddFields = () => {
    setHighlightLinks([
      ...highlightLinks,
      {
        text: "",
        url: "",
      },
    ]);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12  header-wrapper mt-6">
          <h1 className="page-header">Dashboard</h1>
        </div>
      </div>
      <p style={{ margin: "1rem" }}>
        Add all your social Media Links here to become popular everywhere:)
        Also, You can add any link in Highlight links. Now, Go to shop to curate
        products and earn money🤑
      </p>
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
                        Profile Image
                      </div>
                      <div className="col-lg-9">
                        <input
                          onChange={handleChange("url")}
                          type="file"
                          name="url"
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Name<span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9">
                        <input
                          style={{ background: "white" }}
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
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Slug
                      </div>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          value={slug}
                          onChange={handleChange("slug")}
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
                      <IconButton onClick={() => handleAddFields()}>
                        <AddIcon />
                      </IconButton>

                      <span>Optional</span>
                    </div>

                    {displayHightlightLinks && (
                      <Fragment>
                        {highlightLinks.map((field, idx) => (
                          <div key={idx} style={{ display: "flex" }}>
                            <Card
                              style={{ width: "100%", marginBottom: "1rem" }}
                            >
                              <Card.Body>
                                <Card.Text>
                                  <input
                                    name="text"
                                    type="text"
                                    value={field.text}
                                    placeholder="Text"
                                    className="form-control"
                                    onChange={(e) => handleLink(idx, e)}
                                  />
                                  <input
                                    name="url"
                                    type="text"
                                    value={field.url}
                                    placeholder="URL"
                                    className="form-control"
                                    onChange={(e) => handleLink(idx, e)}
                                  />
                                </Card.Text>
                                <button
                                  className="mt-3"
                                  style={{
                                    fontSize: "0.8rem",
                                    background: "red",
                                    lineHeight: "1.5rem",
                                    color: "white",
                                    borderRadius: "0.2rem",
                                  }}
                                  onClick={() => handleRemove(idx)}
                                >
                                  Remove
                                </button>
                              </Card.Body>
                            </Card>
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
