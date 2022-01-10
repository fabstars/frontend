import React from "react";
import { Link } from "react-router-dom";
import ManageOrders from "./ManageOrders";
import ManageStore from "./ManageStore";
import ProfileDetails from "./ProfileDetails";
import UserSettings from "./UserSettings";

const MainContent = ({ toggle, currentTab }) => {
  return (
    <div id="page-wrapper" className={toggle ? "page-wrapper-extended" : ""}>
      <div className=" ">
        <nav
          className="navbar navbar-default navbar-static-top float-right"
          style={{ marginBottom: "0" }}
        >
          <ul className="nav navbar-top-links navbar-right float-right">
            <li>
              <Link to="/creatorstore/hrithik-roshan" className="btn ">
                View Store
              </Link>
            </li>
            <li>
              {" "}
              <Link to="login.html" className="btn">
                <i className="fa fa-sign-out fa-fw"></i> Logout
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>

      {currentTab === "Profile" && <ProfileDetails />}
      {currentTab === "Store" && <ManageStore />}
      {currentTab === "Orders" && <ManageOrders />}
      {currentTab === "Settings" && <UserSettings />}
    </div>
  );
};

export default MainContent;
