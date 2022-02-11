import React, { Fragment, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { isAuthenticated } from "../auth";
import UserNavbar from "./UserNavbar";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { "background-image": "linear-gradient(#d81d59, #d81d57 50%)" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ defaultNav }) => {
  const history = useHistory();
  useEffect(() => {
    console.log(defaultNav);
  }, []);
  if (
    !defaultNav &&
    (!isAuthenticated() || isAuthenticated().user.role !== "1")
  )
    return <UserNavbar />;
  return (
    <>
      <header
        className="header-style hcontainer"
        style={{ marginBottom: "40px" }}
      >
        <Link to="/" className="sitename">
          <h1 className="qlogo">Fabstores</h1>
        </Link>
        <nav>
          <ul>
            {isAuthenticated() && isAuthenticated().user.role !== "2" && (
              <li>
                <Link
                  className="button-72"
                  style={isActive(history, "/shop")}
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === "2" && (
              <li>
                <Link
                  className="button-72"
                  style={isActive(history, "/cart")}
                  to="#"
                >
                  Cart{" "}
                </Link>
              </li>
            )}

            {isAuthenticated() &&
              (isAuthenticated().user.role === "1" ||
                isAuthenticated().user.role === "2") && (
                <li>
                  <Link
                    className="button-72"
                    style={isActive(history, "/user/dashboard")}
                    to="/user/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}

            {isAuthenticated() && isAuthenticated().user.role === "0" && (
              <li>
                <Link
                  className="button-72"
                  style={isActive(history, "/admin/dashboard")}
                  to="/admin/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {!isAuthenticated() && (
              <Fragment>
                <li>
                  <Link
                    className="button-72"
                    style={isActive(history, "/signin")}
                    to="/signin"
                  >
                    Signin
                  </Link>
                </li>

                <li>
                  <Link
                    className="button-72"
                    style={isActive(history, "/signup")}
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default withRouter(Menu);
