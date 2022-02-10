import React, { Fragment, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { API } from "../config";
import Cart from "./Cart";
import {
  itemTotal,
  cartTotal,
  getCartItems,
  addItemToCart,
  removeItemFromCart,
  setCartStatusActive,
  getCartStatus,
  setCartStatusInActive,
} from "./cartHelpers";
import UserNavbar from "./UserNavbar";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { "background-image": "linear-gradient(#d81d59, #d81d57 50%)" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => {
  const [cartActive, setCartActive] = useState(getCartStatus());
  if (!isAuthenticated() || isAuthenticated().user.role !== "1")
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
            {/* <li>
            <Link className="button-72" style={isActive(history, "/")} to="/">
              Home
            </Link>
          </li> */}

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

            {/* {isAuthenticated() && isAuthenticated().user.role === "1" && (
            <li>
              <Link className="button-72" style={isActive(history, "/user/my-products")} to="/user/my-products">
                My Products
              </Link>
            </li>
          )} */}

            {isAuthenticated() && isAuthenticated().user.role === "2" && (
              <li>
                <Link
                  className="button-72"
                  style={isActive(history, "/cart")}
                  onClick={() => {
                    setCartStatusActive();
                    setCartActive(getCartStatus());
                  }}
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

            {/* {isAuthenticated() && (
            <li>
              <span
                className="button-72"
                style={{ cursor: "pointer", color: "#ffffff" }}
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                Signout
              </span>
            </li>
          )} */}
          </ul>
        </nav>
      </header>
      <Cart cartActive={cartActive} setCartActive={setCartActive} />
    </>
  );
};

export default withRouter(Menu);
