import React, { useState } from "react";
import OrderList from "./components/Checkout/OrderList";
import cashOnDelivery from "./components/Checkout/cashOnDelivery.jpg";
import razorpay from "./components/Checkout/razorpay.png";
import Layout from "./Layout";
import { createOrder } from "./apiCore";
import { cartTotal, emptyCart, getCartItems } from "./cartHelpers";
import { isAuthenticated } from "../auth";

const Checkout = () => {
  const [mode, setMode] = useState("COD");
  const [deliveryDetails, setDeliveryDetails] = useState({
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    bank_account_number: "1518121112",
    bank_ifsc: "CITI0000001",
    bank_code: 3333,
    order_note: "Test order",
  });

  const placeOrder = async () => {
    const {
      token,
      user: { _id, email },
    } = isAuthenticated();

    const cust_details = { ...deliveryDetails, email };

    const orderPlaced = await createOrder(_id, token, {
      products: getCartItems(),
      amount: cartTotal(),
      cust_details,
    });
    if (!orderPlaced.error) {
      emptyCart(() => {
        console.log("Placed");
      });
    }
  };
  return (
    <Layout className="container-fluid" jumbotron={false}>
      <section className="inner-section checkout-part">
        <div className="container">
          <div className="row">
            <OrderList />
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Delivery Details</h4>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-12 col-lg-10 alert fade show">
                      <div className="form-group">
                        <label className="form-label">Mobile Number</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your number"
                          value={deliveryDetails.mobileNumber}
                          onChange={(e) =>
                            setDeliveryDetails({
                              ...deliveryDetails,
                              mobileNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">address</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your Address (House no, Building, Street, Area)"
                          value={deliveryDetails.address}
                          onChange={(e) =>
                            setDeliveryDetails({
                              ...deliveryDetails,
                              address: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <label className="form-label">City</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your City"
                            value={deliveryDetails.city}
                            onChange={(e) =>
                              setDeliveryDetails({
                                ...deliveryDetails,
                                city: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-sm-12 col-md-6  col-lg-4">
                          <label className="form-label">State</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your State"
                            value={deliveryDetails.state}
                            onChange={(e) =>
                              setDeliveryDetails({
                                ...deliveryDetails,
                                state: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-sm-12 col-md-6  col-lg-4">
                          <label className="form-label">Pincode</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your pincode"
                            value={deliveryDetails.pincode}
                            onChange={(e) =>
                              setDeliveryDetails({
                                ...deliveryDetails,
                                pincode: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="account-card mb-0">
                <div className="account-title">
                  <h4>payment mode</h4>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div
                      className="col-md-6 col-lg-4 alert fade show"
                      onClick={() => setMode("COD")}
                    >
                      <div
                        className={`payment-card payment ${
                          mode === "COD" ? "active" : ""
                        }`}
                      >
                        <img src={cashOnDelivery} alt="payment" />
                        <h4>cash on Delivery</h4>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 alert fade show"
                      onClick={() => setMode("Card")}
                    >
                      <div
                        className={`payment-card payment ${
                          mode === "Card" ? "active" : ""
                        }`}
                      >
                        <img src={razorpay} alt="payment" />
                        <h4>Pay using card</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="checkout-proced" onClick={placeOrder}>
                  <div className="btn btn-inline btn-success">place order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
