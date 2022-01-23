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

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => {
  const [cartActive, setCartActive] = useState(getCartStatus());

  return (
    <>
      <div>
        <ul
          className="nav nav-tabs bg-primary"
          style={{ padding: "0", borderRadius: "0px" }}
        >
          <li
            className="nav-item"
            style={{ padding: "0px", width: "10rem", textAlign: "center" }}
          >
            <Link className="nav-link" style={isActive(history, "/")} to="/">
              Home
            </Link>
          </li>

          {isAuthenticated() && isAuthenticated().user.role !== "2" && (
            <li
              className="nav-item"
              style={{ padding: "0px", width: "10rem", textAlign: "center" }}
            >
              <Link
                className="nav-link"
                style={isActive(history, "/shop")}
                to="/shop"
              >
                Shop
              </Link>
            </li>
          )}

          {isAuthenticated() && isAuthenticated().user.role === "1" && (
            <li
              className="nav-item"
              style={{ padding: "0px", width: "10rem", textAlign: "center" }}
            >
              <Link
                className="nav-link"
                style={isActive(history, "/user/my-products")}
                to="/user/my-products"
              >
                My Products
              </Link>
            </li>
          )}
          {isAuthenticated() && isAuthenticated().user.role === "2" && (
            <li
              className="nav-item"
              style={{ padding: "0px", width: "10rem", textAlign: "center" }}
            >
              <Link
                className="nav-link"
                style={isActive(history, "/cart")}
                onClick={() => {
                  setCartStatusActive();
                  setCartActive(getCartStatus());
                }}
              >
                Cart{" "}
                <sup>
                  <small className="cart-badge">{itemTotal()}</small>
                </sup>
              </Link>
            </li>
          )}

          {isAuthenticated() &&
            (isAuthenticated().user.role === "1" ||
              isAuthenticated().user.role == "2") && (
              <li
                className="nav-item"
                style={{ padding: "0px", width: "10rem", textAlign: "center" }}
              >
                <Link
                  className="nav-link"
                  style={isActive(history, "/user/dashboard")}
                  to="/user/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}

          {isAuthenticated() && isAuthenticated().user.role === "0" && (
            <li
              className="nav-item"
              style={{ padding: "0px", width: "10rem", textAlign: "center" }}
            >
              <Link
                className="nav-link"
                style={isActive(history, "/admin/dashboard")}
                to="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {!isAuthenticated() && (
            <Fragment>
              <li
                className="nav-item"
                style={{ padding: "0px", width: "10rem", textAlign: "center" }}
              >
                <Link
                  className="nav-link"
                  style={isActive(history, "/signin")}
                  to="/signin"
                >
                  Signin
                </Link>
              </li>

              <li
                className="nav-item"
                style={{ padding: "0px", width: "10rem", textAlign: "center" }}
              >
                <Link
                  className="nav-link"
                  style={isActive(history, "/signup")}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <li
              className="nav-item"
              style={{ padding: "0px", width: "10rem", textAlign: "center" }}
            >
              <span
                className="nav-link"
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
          )}
        </ul>
      </div>
      <Cart cartActive={cartActive} setCartActive={setCartActive} />
    </>
  );
};

export default withRouter(Menu);
