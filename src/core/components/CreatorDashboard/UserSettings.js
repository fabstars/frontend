import React from "react";
import PayoutList from "./PayoutList";

const UserSettings = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12  header-wrapper mt-6">
          <h1 className="page-header">Settings</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div>
                    <h4>Account Details</h4>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Account Holder Name
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Account Number
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        IFSC Code
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Bank Name
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" />
                      </div>
                    </div>

                    <div className="  text-center">
                      <button className="btn btn-primary">Update</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div>
                    <h4>Login Details</h4>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        Current Password
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-3" style={{ paddingTop: "5px" }}>
                        New Password
                      </div>
                      <div className="col-lg-9">
                        <input className="form-control" type="password" />
                      </div>
                    </div>

                    <div className="  text-center">
                      <button className="btn btn-primary">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PayoutList />
    </>
  );
};

export default UserSettings;
