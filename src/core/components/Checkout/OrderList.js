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
  const clothingOptions = ["S", "M", "L", "XL", "XXL"];
  const shoeSizeOptions = ["6", "7", "8", "9", "10"];
  const jeansOptions = ["28", "30", "32", "34", "36", "38", "40"];
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
                  <th scope="col">Size</th>
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
                        <img src={item.url} alt="product" />
                        <h6 style={{ marginTop: "1rem" }}>{item.name} </h6>
                      </td>
                      <td className="table-name">
                        {item.category && item.category === "Clothing" ? (
                          <select
                            onChange={(e) => {
                              addItemToCart(
                                item,
                                item.count,
                                item.price,
                                e.target.value
                              );
                              setCartItems(getCartItems());
                            }}
                            className="form-select filter-select"
                            style={{
                              minWidth: "80px",
                            }}
                            value={item.size}
                          >
                            {clothingOptions.map((c, i) => (
                              <option key={i} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        ) : item.category === "Jeans" ? (
                          <select
                            onChange={(e) => {
                              addItemToCart(
                                item,
                                item.count,
                                item.price,
                                e.target.value
                              );
                              setCartItems(getCartItems());
                            }}
                            className="form-select filter-select"
                            style={{
                              minWidth: "80px",
                            }}
                            value={item.size}
                          >
                            {jeansOptions.map((c, i) => (
                              <option key={i} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        ) : item.category === "Shoes" ? (
                          <select
                            onChange={(e) => {
                              addItemToCart(
                                item,
                                item.count,
                                item.price,
                                e.target.value
                              );
                              setCartItems(getCartItems());
                            }}
                            className="form-select filter-select"
                            style={{
                              minWidth: "80px",
                            }}
                            value={item.size}
                          >
                            {shoeSizeOptions.map((c, i) => (
                              <option key={i} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <h6>Not Applicable</h6>
                        )}
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
                            style={{ width: "50px", textAlign: "center" }}
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value={item.count}
                            onChange={(e) => {
                              addItemToCart(
                                item,
                                Number(e.target.value),
                                item.price
                              );
                              setCartItems(getCartItems());
                            }}
                          />
                          <button
                            className="action-plus"
                            title="Quantity Plus"
                            onClick={() => {
                              addItemToCart(
                                item,
                                Number(item.count) + 1,
                                item.price
                              );
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
                  Total<small></small>
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
