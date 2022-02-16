import React from "react";
import { Link } from "react-router-dom";
import "./invoice.css";
const Thankyou = ({ creatorStore, orderResponse }) => {
  return (
    <section class="inner-section invoice-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="alert-info">
              <p>Thank you! We have recieved your order.</p>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="account-card">
              <div class="account-title">
                <h4>order recieved</h4>
              </div>
              <div class="account-content">
                <div class="invoice-recieved">
                  <h6>
                    order number{" "}
                    <span>{orderResponse && orderResponse.orderID}</span>
                  </h6>
                  <h6>
                    order date{" "}
                    <span>{orderResponse && orderResponse.orderDate}</span>
                  </h6>
                  <h6>
                    total amount{" "}
                    <span> ₹ {orderResponse && orderResponse.amount}</span>
                  </h6>
                  <h6>
                    payment method{" "}
                    <span>
                      {orderResponse &&
                        orderResponse.cust_details &&
                        orderResponse.cust_details.mode === "COD" &&
                        "Cash on delivery"}{" "}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="account-card">
              <div class="account-title">
                <h4>Order Details</h4>
              </div>
              <div class="account-content">
                <ul class="invoice-details">
                  <li>
                    <h6>Total Item</h6>
                    <p>
                      {orderResponse &&
                        orderResponse.products &&
                        orderResponse.products.length}{" "}
                      Items
                    </p>
                  </li>

                  <li>
                    <h6>Name</h6>
                    <p>
                      {orderResponse &&
                        orderResponse.cust_details &&
                        orderResponse.cust_details.fullName}
                    </p>
                  </li>
                  <li>
                    <h6>Mobile Number</h6>
                    <p>
                      {orderResponse &&
                        orderResponse.cust_details &&
                        orderResponse.cust_details.mobileNumber}
                    </p>
                  </li>
                  <li>
                    <h6>Delivery Location</h6>
                    <p>
                      {orderResponse &&
                        orderResponse.cust_details &&
                        orderResponse.cust_details.address}
                      ,
                      {orderResponse &&
                        orderResponse.cust_details &&
                        orderResponse.cust_details.city}{" "}
                      ,
                      {orderResponse &&
                        orderResponse.cust_details &&
                        orderResponse.cust_details.state}{" "}
                      -
                      {orderResponse &&
                        orderResponse.cust_details &&
                        orderResponse.cust_details.pincode}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="account-card">
              <div class="account-title">
                <h4>Amount Details</h4>
              </div>
              <div class="account-content">
                <ul class="invoice-details">
                  <li>
                    <h6>Sub Total</h6>
                    <p>₹ {orderResponse && orderResponse.amount}</p>
                  </li>
                  <li>
                    <h6>discount</h6>
                    <p>₹ 0</p>
                  </li>
                  <li>
                    <h6>Payment Method</h6>
                    <p>
                      {orderResponse &&
                        orderResponse.cust_details &&
                        orderResponse.cust_details.mode === "COD" &&
                        "Cash on delivery"}
                    </p>
                  </li>
                  <li>
                    <h6>Total</h6>
                    <p>₹ {orderResponse && orderResponse.amount}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="table-scroll">
              <table class="table-list">
                <thead>
                  <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {orderResponse &&
                    orderResponse.products &&
                    orderResponse.products.map((product, index) => {
                      return (
                        <tr>
                          <td class="table-serial">
                            <h6>{index + 1}</h6>
                          </td>
                          <td class="table-image">
                            <img src={product.url} alt={product.name} />
                          </td>
                          <td class="table-name">
                            <h6>{product.name}</h6>
                          </td>
                          <td class="table-price">
                            <h6>₹ {product.price}</h6>
                          </td>

                          <td class="table-quantity">
                            <h6>{product.count}</h6>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center mt-5">
            <button class="btn btn-success">
              <i class="icofont-download"></i>
              <span>download invoice</span>
            </button>
            <div class="back-home">
              <Link to={creatorStore}>Back to Store</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;
