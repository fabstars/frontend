import React from "react";

const ProfileDetails = () => {
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
            <div className="panel-heading "> Profile </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-12">
                  <div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Store Title<span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Facebook <span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9 custom-input-wrapper">
                        <input className="form-control float-right custom-input" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Instagram <span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9 custom-input-wrapper">
                        <input className="form-control float-right custom-input" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Youtube <span className="text-danger">*</span>
                      </div>
                      <div className="col-lg-9 custom-input-wrapper">
                        <input className="form-control float-right custom-input" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Twitter
                      </div>
                      <div className="col-lg-9 custom-input-wrapper">
                        <input className="form-control float-right custom-input" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Reddit
                      </div>
                      <div className="col-lg-9 custom-input-wrapper">
                        <input className="form-control float-right custom-input" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Discord
                      </div>
                      <div className="col-lg-9 custom-input-wrapper">
                        <input className="form-control float-right custom-input" />
                      </div>
                    </div>

                    <div className="form-group row">
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
                    </div>

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
