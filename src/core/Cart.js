import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addItemToCart,
  cartTotal,
  getCartItems,
  itemTotal,
  removeItemFromCart,
} from "./cartHelpers";

const Cart = ({ cartActive, setCartActive, creatorStore, storeTitle }) => {
  const [cartItems, setCartItems] = useState(getCartItems());
  useEffect(() => {
    if (cartActive === true) setCartItems(getCartItems());
  }, [cartActive]);
  return (
    <aside className={cartActive ? "cart-sidebar active" : "cart-sidebar"}>
      <div className="cart-header">
        <div className="cart-total">
          <i className="fas fa-shopping-basket"></i>
          <span>total item ({itemTotal()})</span>
        </div>
        <button
          className="cart-close"
          onClick={() => {
            console.log("Closing Cart");
            setCartActive(false);
          }}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <ul className="cart-list">
        {cartItems.map((item, index) => {
          return (
            <li className="cart-item">
              <div className="cart-media">
                <Link to={`/products/${item._id}`}>
                  <img src={item.url} alt="product" />
                </Link>
                <button
                  className="cart-delete"
                  onClick={() => {
                    removeItemFromCart(item);
                    setCartItems(getCartItems());
                  }}
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
              <div className="cart-info-group">
                <div className="cart-info">
                  <h6>
                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                  </h6>
                  <p>
                    Unit Price - <i className="fas fa-rupee-sign"></i>{" "}
                    {item.price}
                  </p>
                </div>
                <div className="cart-action-group">
                  <div className="product-action">
                    <button
                      className="action-minus"
                      title="Quantity Minus"
                      onClick={() => {
                        if (Number(item.count) > 1)
                          addItemToCart(
                            item,
                            Number(item.count) - 1,
                            item.price
                          );
                        setCartItems(getCartItems());
                      }}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value={item.count}
                      onChange={(e) => {
                        addItemToCart(item, Number(e.target.value), item.price);
                        setCartItems(getCartItems());
                      }}
                    />
                    <button
                      className="action-plus"
                      title="Quantity Plus"
                      onClick={() => {
                        addItemToCart(item, Number(item.count) + 1, item.price);
                        setCartItems(getCartItems());
                      }}
                    >
                      <i className="fas fa-plus"></i>
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
      <div className="cart-footer">
        {/* <button className="coupon-btn">Do you have a coupon code?</button>
  <form className="coupon-form">
    <input type="text" placeholder="Enter your coupon code" />
    <button type="submit">
      <span>apply</span>
    </button>
  </form> */}
        <Link
          className="cart-checkout-btn"
          to={{
            pathname: `/checkout`,
            state: { storeTitle, creatorStore },
          }}
        >
          <span className="checkout-label">Proceed to Checkout</span>
          <span className="checkout-price">₹{cartTotal()}</span>
        </Link>
      </div>
    </aside>
  );
};

export default Cart;
