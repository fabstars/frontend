import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImage from "./user.png";
import { isAuthenticated, signout } from "../../../auth";

const Sidebar = ({ toggle, setToggle, setCurrentTab, currentTab }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  useEffect(() => {
    if (Number(width) < 1180) {
      setToggle(true);
    }
    if (Number(width) > 1180) {
      setToggle(false);
    }
  }, [setToggle, width]);
  return (
    <div className={toggle ? "menusmall" : ""}>
      <div className="navbar-default sidebar">
        <div className="navbar-header">
          <div
            className="btn btn-block navbar-toggle"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {" "}
            <i className="fas fa-bars"></i>
          </div>
          <Link className="navbar-brand" to="/">
            FabStores
          </Link>
        </div>
        <div className="clearfix"></div>
        <div className="sidebar-nav navbar-collapse ">
          <div className="userprofile text-center">
            <div className="userpic">
              {" "}
              <img
                src={
                  isAuthenticated() &&
                  isAuthenticated().user &&
                  isAuthenticated().user.url &&
                  isAuthenticated().user.url !== ""
                    ? isAuthenticated().user.url
                    : userImage
                }
                alt=""
                className="userpicimg"
              />{" "}
              {/* <input
                type="file"
                className="btn btn-primary settingbtn"
                name="file"
                style={{ fontSize: "0px", paddingLeft: "1.7rem" }}
              /> */}
            </div>
            <h3 className="username">{isAuthenticated().user.name}</h3>
          </div>
          <div className="clearfix"></div>

          <ul
            className="nav"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <li>
              {" "}
              <Link
                to="/user/dashboard"
                className={currentTab === "Profile" && "active"}
                onClick={() => {
                  setCurrentTab("Profile");
                }}
              >
                <i className="fas fa-user"></i>
                <div className="desc">Dashboard</div>
              </Link>{" "}
            </li>
            <li>
              <Link to="/commingsoon">
                <i className="fas fa-cubes"></i>
                <div className="desc">Shop</div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={currentTab === "merchandise" && "active"}
                onClick={() => {
                  setCurrentTab("merchandise");
                }}
              >
                <i class="fas fa-solid fa-badge-check"></i>
                <div className="desc">Merchandise</div>
              </Link>
            </li>
            {/* <li>
              <Link
                to="#"
                className={currentTab === "Store" && "active"}
                onClick={() => {
                  setCurrentTab("Store");
                }}
              >
                <i className="fas fa-boxes"></i>
                <div className="desc">Manage Products</div>
              </Link>
            </li> */}
            <li>
              <Link to="#" onClick={() => signout(() => {})}>
                <i className="fas fa-sign-out"></i>
                <div className="desc">Logout</div>
              </Link>
            </li>
            {/* <li>
              <Link
                to="#"
                className={currentTab === "Settings" && "active"}
                onClick={() => {
                  setCurrentTab("Settings");
                }}
              >
                <i className="fas fa-cog"></i>
                <div className="desc">Highlight Links</div>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
