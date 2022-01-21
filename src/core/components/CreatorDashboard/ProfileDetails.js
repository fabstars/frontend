import React, { useState, Fragment } from "react";
import { isAuthenticated } from "../../../auth";

const ProfileDetails = () => {
  // const {
  //   user: { _id, name, email, role },
  // } = isAuthenticated();

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
  } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

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
              {" "}
              Profile{" "}
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-12">
                  <div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Name<span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Email<span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Store Title<span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" />
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

                    {/* <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Gender
                      </div>
                      <div className="col-lg-9">
                        <select className="form-control">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div> */}

                    <div className="  text-center">
                      <button className="btn btn-primary">Save</button>
                    </div>
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

export default ProfileDetails;
