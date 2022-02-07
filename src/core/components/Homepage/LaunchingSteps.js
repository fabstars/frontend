import React from "react";
import "./style.css";

const launchingSteps = () => {
  return (
    <div className="launching-Steps">
      <h1> Launch your website in just 3 steps!</h1>
      <div className="boxes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <i className="fas fa-browser"></i>
                <h3>Get Your .co domain for free</h3>
                <p>
                  Choose your website name and don’t worry we will give .co
                  domain for absolutely free.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <i className="fas fa-tshirt"></i>
                <h3>Add links & products</h3>
                <p>Add your links, select the products and set your price</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-box">
                <i className="fas fa-share-alt-square"></i>
                <h3>Start sharing</h3>
                <p>Woohoo! your site is ready now add it to your bio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default launchingSteps;
