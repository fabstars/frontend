import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./invoice.css";
import queryString from "query-string";
import axios from "axios";
import { API } from "../../../config";
import moment from "moment";
import { emptyCartItems } from "../../cartHelpers";

const Thankyou = ({ creatorStore, orderResponse, location }) => {
  const [myOrder, setMyOrder] = useState(null);
  const [cust_details, setCustDetails] = useState(null);
  const [mode, setMode] = useState("");
  const [influencer, setInfluencer] = useState(null);
  const [cust_order, setCustOrder] = useState(null);
  const [canceled, setCanceled] = useState(false);

  const init = async (order_id) => {
    const order = await axios.get(`${API}/order/cashfree/${order_id}`);
    console.log(order.data);
    setMyOrder(order.data.cf_order_details);
    setCustDetails(order.data.current_cust);
    setCustOrder(order.data.current_order);
    setInfluencer(order.data.cf_order_details.order_tags.influencerSlug);
    setCanceled(order.data.cf_order_details.order_status === "ACTIVE");
    if (order.data.cf_order_details.order_status !== "ACTIVE") {
      emptyCartItems();
    }
  };

  useEffect(() => {
    console.log(cust_order, cust_details, influencer);
  }, [cust_order, cust_details, influencer]);

  useEffect(() => {
    if (location && location.state && location.state.hasOwnProperty("mode")) {
      setMode("COD");
      setCustOrder(location.state.orderResponse.order);
      setCustDetails(location.state.orderResponse.current_customer);
      setInfluencer(location.state.orderResponse.influencer);
    } else {
      setMode("Card");
      let params = queryString.parse(location.search);
      const order_id = params.order_id;
      init(order_id);
    }
  }, []);

  const redirectCheckOut = () => (
    <Redirect
      to={{
        pathname: "/checkout",
        state: { isCanceled: true, cust_details, cust_order, influencer },
      }}
    />
  );

  return (
    <>
      {canceled && redirectCheckOut()}
      {!canceled && mode === "Card" && myOrder && (
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
                        order number <span>{myOrder.order_id}</span>
                      </h6>
                      <h6>
                        order date{" "}
                        <span>
                          {moment(myOrder.created_at).format("MM/DD/YYYY")}
                        </span>
                      </h6>
                      <h6>
                        total amount <span> ₹ {myOrder.order_amount}</span>
                      </h6>
                      {/* <h6>
                        payment method{" "}
                        <span>
                          {myOrder.hasOwnProperty("cf_order_id")
                            ? "Online"
                            : "Cash on delivery"}{" "}
                        </span>
                      </h6> */}
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
                          {cust_order &&
                            cust_order.products &&
                            cust_order.products.length}{" "}
                          Items
                        </p>
                      </li>

                      <li>
                        <h6>Name</h6>
                        <p>{cust_details && cust_details.name}</p>
                      </li>
                      <li>
                        <h6>Mobile Number</h6>
                        <p>{cust_details && cust_details.mobile}</p>
                      </li>
                      <li>
                        <h6>Delivery Location</h6>
                        <p>
                          {cust_details &&
                            cust_details.cust_address &&
                            cust_details.cust_address.address}
                          ,
                          {cust_details &&
                            cust_details.cust_address &&
                            cust_details.cust_address.city}{" "}
                          ,
                          {cust_details &&
                            cust_details.cust_address &&
                            cust_details.cust_address.state}{" "}
                          -
                          {cust_details &&
                            cust_details.cust_address &&
                            cust_details.cust_address.pincode}
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
                        <p>₹ {cust_order && cust_order.amount}</p>
                      </li>
                      <li>
                        <h6>discount</h6>
                        <p>₹ 0</p>
                      </li>
                      <li>
                        <h6>Payment Method</h6>
                        <p>Online</p>
                      </li>
                      <li>
                        <h6>Total</h6>
                        <p>₹ {cust_order && cust_order.amount}</p>
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
                      {cust_order &&
                        cust_order.products &&
                        cust_order.products.map((product, index) => {
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
                {/* <button class="btn btn-success">
            <i class="icofont-download"></i>
            <span>download invoice</span>
          </button> */}
                <button class="btn btn-success">
                  <Link
                    to={`/${myOrder.order_tags.influencerSlug}`}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <span>Back to Store</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {!canceled && mode === "COD" && cust_order && cust_details && (
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
                        order number
                        <span>{cust_order._id}</span>
                      </h6>
                      <h6>
                        order date{" "}
                        <span>
                          {moment(cust_order.createdAt).format("MM/DD/YYYY")}
                        </span>
                      </h6>
                      <h6>
                        total amount
                        <span> ₹ {cust_order.amount}</span>
                      </h6>
                      {/* <h6>
                        payment method{" "}
                        <span>
                          {myOrder.hasOwnProperty("cf_order_id")
                            ? "Online"
                            : "Cash on delivery"}{" "}
                        </span>
                      </h6> */}
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
                        <p>{cust_order && cust_order.products.length} Items</p>
                      </li>

                      <li>
                        <h6>Name</h6>
                        <p>{cust_details && cust_details.name}</p>
                      </li>
                      <li>
                        <h6>Mobile Number</h6>
                        <p>{cust_details && cust_details.mobile}</p>
                      </li>
                      <li>
                        <h6>Delivery Location</h6>
                        <p>
                          {cust_details && cust_details.cust_address.address},
                          {cust_details && cust_details.cust_address.city} ,
                          {cust_details && cust_details.cust_address.state} -
                          {cust_details && cust_details.cust_address.pincode}
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
                        <p>₹ {cust_order.amount}</p>
                      </li>
                      <li>
                        <h6>discount</h6>
                        <p>₹ 0</p>
                      </li>
                      <li>
                        <h6>Payment Method</h6>
                        <p>Cash On Delivery</p>
                      </li>
                      <li>
                        <h6>Total</h6>
                        <p>₹ {cust_order.amount}</p>
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
                      {cust_order &&
                        cust_order.products &&
                        cust_order.products.map((product, index) => {
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
                {/* <button class="btn btn-success">
            <i class="icofont-download"></i>
            <span>download invoice</span>
          </button> */}
                <button class="btn btn-success">
                  <Link
                    to={`/${influencer.name}`}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <span>Back to Store</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Thankyou;
