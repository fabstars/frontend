import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import {
  addItemToCart,
  cartTotal,
  getCartItems,
  getCartStatus,
  itemTotal,
  removeItemFromCart,
  setCartStatusInActive,
} from "./cartHelpers";

const Cart = ({ cartActive, setCartActive }) => {
  const [cartItems, setCartItems] = useState(getCartItems());
  useEffect(() => {
    if (cartActive === true) setCartItems(getCartItems());
  }, [cartActive]);
  return (
    <aside class={cartActive ? "cart-sidebar active" : "cart-sidebar"}>
      <div class="cart-header">
        <div class="cart-total">
          <i class="fas fa-shopping-basket"></i>
          <span>total item ({itemTotal()})</span>
        </div>
        <button
          class="cart-close"
          onClick={() => {
            setCartStatusInActive();
            setCartActive(getCartStatus());
          }}
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <ul class="cart-list">
        {cartItems.map((item, index) => {
          return (
            <li class="cart-item">
              <div class="cart-media">
                <Link to={`/products/${item._id}`}>
                  <img src={`${API}/product/photo/${item._id}`} alt="product" />
                </Link>
                <button
                  class="cart-delete"
                  onClick={() => {
                    removeItemFromCart(item);
                    setCartItems(getCartItems());
                  }}
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
              <div class="cart-info-group">
                <div class="cart-info">
                  <h6>
                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                  </h6>
                  <p>
                    Unit Price - <i className="fas fa-rupee-sign"></i>{" "}
                    {item.price}
                  </p>
                </div>
                <div class="cart-action-group">
                  <div class="product-action">
                    <button
                      class="action-minus"
                      title="Quantity Minus"
                      onClick={() => {
                        if (Number(item.count) > 1)
                          addItemToCart(item, Number(item.count) - 1);
                        setCartItems(getCartItems());
                      }}
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                    <input
                      class="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value={item.count}
                      onChange={(e) => {
                        addItemToCart(item, Number(e.target.value));
                        setCartItems(getCartItems());
                      }}
                    />
                    <button
                      class="action-plus"
                      title="Quantity Plus"
                      onClick={() => {
                        addItemToCart(item, Number(item.count) + 1);
                        setCartItems(getCartItems());
                      }}
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <h6>
                    <i className="fas fa-rupee-sign"></i>{" "}
                    {Number(item.price) * Number(item.count)}
                  </h6>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div class="cart-footer">
        {/* <button class="coupon-btn">Do you have a coupon code?</button>
  <form class="coupon-form">
    <input type="text" placeholder="Enter your coupon code" />
    <button type="submit">
      <span>apply</span>
    </button>
  </form> */}
        <Link
          class="cart-checkout-btn"
          to="/checkout"
          onClick={() => setCartStatusInActive()}
        >
          <span class="checkout-label">Proceed to Checkout</span>
          <span class="checkout-price">₹{cartTotal()}</span>
        </Link>
      </div>
    </aside>
  );
};

export default Cart;
