import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImage from "./user.png";
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
  }, [width]);
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
            fabStar
          </Link>
        </div>
        <div className="clearfix"></div>
        <div className="sidebar-nav navbar-collapse ">
          <div className="userprofile text-center">
            <div className="userpic">
              {" "}
              <img src={userImage} alt="" className="userpicimg" />{" "}
              <Link to="#" className="btn btn-primary settingbtn">
                <i className="fas fa-camera-retro"></i>
              </Link>{" "}
            </div>
            <h3 className="username">Hrithik Roshan</h3>
          </div>
          <div className="clearfix"></div>

          <ul className="nav">
            <li>
              {" "}
              <Link
                to="#"
                className={currentTab === "Profile" && "active"}
                onClick={() => {
                  setCurrentTab("Profile");
                }}
              >
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </Link>{" "}
            </li>
            <li>
              <Link to="/shop">
                <i className="fas fa-cubes"></i>
                <span> FabStore Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={currentTab === "Store" && "active"}
                onClick={() => {
                  setCurrentTab("Store");
                }}
              >
                <i className="fas fa-boxes"></i>
                <span> Manage Store</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={currentTab === "Orders" && "active"}
                onClick={() => {
                  setCurrentTab("Orders");
                }}
              >
                <i className="fas fa-shopping-bag"></i>
                <span> Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={currentTab === "Settings" && "active"}
                onClick={() => {
                  setCurrentTab("Settings");
                }}
              >
                <i className="fas fa-cog"></i>
                <span> Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;