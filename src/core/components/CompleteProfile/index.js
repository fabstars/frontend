import React from "react";
import { Link } from "react-router-dom";

const CompeteProfile = () => (
  <>
    <header
      className="header-style hcontainer"
      style={{
        marginBottom: "40px",
        paddingTop: "0.9rem",
        paddingBottom: "0.9rem",
      }}
    >
      <Link to="/" className="sitename">
        <h1 className="qlogo">Fabstores</h1>
      </Link>
    </header>
    <div>
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
                  <form class="user-form">
                    <div class="form-group">
                      <input
                        // onChange={handleChange("name")}
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        // value={name}
                        required
                      />
                    </div>

                    <div class="form-button">
                      <button>Continue</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default CompeteProfile;
