import React from "react";
import { Link } from "react-router-dom";
import ManageOrders from "./ManageOrders";
import ManageStore from "./ManageStore";
import ProfileDetails from "./ProfileDetails";
import UserSettings from "./UserSettings";
import { isAuthenticated, signout } from "../../../auth";

const MainContent = ({ toggle, currentTab }) => {
  return (
    <div id="page-wrapper" className={toggle ? "page-wrapper-extended" : ""}>
      <div className=" ">
        <nav
          className="navbar navbar-default navbar-static-top float-right"
          style={{ marginBottom: "0" }}
        >
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <Link
                to={`/${isAuthenticated().user.slug}`}
                className="btn btn-success  "
                target="_blank"
              >
                View Store
              </Link>
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
