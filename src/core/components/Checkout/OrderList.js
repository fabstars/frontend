import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../config";
import {
  addItemToCart,
  cartTotal,
  getCartItems,
  removeItemFromCart,
} from "../../cartHelpers";
import "./style.css";
const OrderList = () => {
  const [cartItems, setCartItems] = useState(getCartItems());
  return (
    <div className="col-lg-12 mt-3">
      <div className="account-card">
        <div className="account-title">
          <h4>Your order</h4>
        </div>
        <div className="account-content">
          <div className="table-scroll">
            <table className="table-list">
              <thead>
                <tr>
                  <th scope="col">Serial</th>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">quantity</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  return (
                    <tr>
                      <td className="table-serial">
                        <h6>{index + 1}</h6>
                      </td>
                      <td className="table-image">
                        <img
                          src={`${API}/product/photo/${item._id}`}
                          alt="product"
                        />
                      </td>
                      <td className="table-name">
                        <h6>{item.name}</h6>
                      </td>
                      <td className="table-price">
                        <h6>{item.price}</h6>
                      </td>

                      <td className="table-quantity">
                        <div className="cart-action-group">
                          <button
                            className="action-minus"
                            title="Quantity Minus"
                            onClick={() => {
                              if (Number(item.count) > 1)
                                addItemToCart(item, Number(item.count) - 1);
                              setCartItems(getCartItems());
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            className="action-input"
                            style={{ width: "50px", textAlign: "center" }}
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
                            className="action-plus"
                            title="Quantity Plus"
                            onClick={() => {
                              addItemToCart(item, Number(item.count) + 1);
                              setCartItems(getCartItems());
                            }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="table-action">
                        <Link to={`/products/${item._id}`}>
                          <i className="fas fa-eye"></i>
                        </Link>
                        <i
                          className="far fa-trash-alt "
                          onClick={() => {
                            removeItemFromCart(item);
                            setCartItems(getCartItems());
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="checkout-charge">
            <ul>
              <li>
                <span>Sub total</span>
                <span>₹ {cartTotal()}</span>
              </li>
              <li>
                <span>delivery fee</span>
                <span>₹ 0.00</span>
              </li>
              <li>
                <span>discount</span>
                <span>₹ 0.00</span>
              </li>
              <li>
                <span>
                  Total<small>(Incl. VAT)</small>
                </span>
                <span>₹ {cartTotal()}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
