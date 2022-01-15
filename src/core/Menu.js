import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history, cartActive, setCartActive }) => (
  <>
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>

        {isAuthenticated() && isAuthenticated().user.role !== "2" && (
          <li className="nav-item">
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
          <li className="nav-item">
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
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/cart")}
              onClick={() => setCartActive(true)}
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
            <li className="nav-item">
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
          <li className="nav-item">
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
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin"
              >
                Signin
              </Link>
            </li>

            <li className="nav-item">
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
          <li className="nav-item">
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
    <aside class={cartActive ? "cart-sidebar active" : "cart-sidebar"}>
      <div class="cart-header">
        <div class="cart-total">
          <i class="fas fa-shopping-basket"></i>
          <span>total item (5)</span>
        </div>
        <button class="cart-close" onClick={() => setCartActive(false)}>
          <i class="fas fa-times"></i>
        </button>
      </div>
      <ul class="cart-list">
        <li class="cart-item">
          <div class="cart-media">
            <Link to={`/products/61c0301fe3aadc911bcce56e`}>
              <img src="images/product/01.jpg" alt="product" />
            </Link>
            <button class="cart-delete">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
          <div class="cart-info-group">
            <div class="cart-info">
              <h6>
                <Link to={`/products/61c0301fe3aadc911bcce56e`}>
                  existing product name
                </Link>
              </h6>
              <p>
                Unit Price - <i className="fas fa-rupee-sign"></i> 8.75
              </p>
            </div>
            <div class="cart-action-group">
              <div class="product-action">
                <button class="action-minus" title="Quantity Minus">
                  <i class="fas fa-minus"></i>
                </button>
                <input
                  class="action-input"
                  title="Quantity Number"
                  type="text"
                  name="quantity"
                  value="1"
                />
                <button class="action-plus" title="Quantity Plus">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <h6>
                <i className="fas fa-rupee-sign"></i> 56.98
              </h6>
            </div>
          </div>
        </li>
      </ul>
      <div class="cart-footer">
        {/* <button class="coupon-btn">Do you have a coupon code?</button>
        <form class="coupon-form">
          <input type="text" placeholder="Enter your coupon code" />
          <button type="submit">
            <span>apply</span>
          </button>
        </form> */}
        <Link class="cart-checkout-btn" to="/checkout">
          <span class="checkout-label">Proceed to Checkout</span>
          <span class="checkout-price">₹ 369.78</span>
        </Link>
      </div>
    </aside>
  </>
);

export default withRouter(Menu);
