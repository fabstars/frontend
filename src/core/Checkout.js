import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import OrderList from "./components/Checkout/OrderList";
import cashOnDelivery from "./components/Checkout/cashOnDelivery.jpg";
import cashfree from "./components/Checkout/Cashfree.jpg";
import Layout from "./Layout";
import { createOrder, createOrderCOD } from "./apiCore";
import { cartTotal, emptyCart, getCartItems } from "./cartHelpers";
import { isAuthenticated } from "../auth";
import UserNavbar from "./UserNavbar";
import { useLocation } from "react-router-dom";
import StoreFooter from "./components/CreatorStore/StoreFooter";
import Thankyou from "./components/Checkout/Thankyou";
import { Redirect } from "react-router-dom";

const Checkout = ({ history }) => {
  const [placed, setPlaced] = useState(false);
  const [orderResponse, setOrderResponse] = useState(null);
  const [mode, setMode] = useState("Card");
  const [deliveryDetails, setDeliveryDetails] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    bank_account_number: "1518121112",
    bank_ifsc: "CITI0000001",
    bank_code: 3333,
    order_note: "",
    email: "",
  });
  const location = useLocation();
  const [_id, setId] = useState("");
  useEffect(() => {
    if (location && location.state && location.state.creatorStore)
      setId(location.state.creatorStore.replace("/", ""));
  }, [location]);
  const validInput = () => {
    for (const key of Object.keys(deliveryDetails)) {
      if (deliveryDetails[key] === "") {
        toast.error(
          `Please provide your ${
            key === "fullName"
              ? "Name"
              : key === "mobileNumber"
              ? "Mobile Number"
              : key === "email"
              ? "Email"
              : key
          }`
        );

        return false;
      }
    }
    return true;
  };
  const placeOrder = async () => {
    // const {
    //   token,
    //   user: { _id, email },
    // } = isAuthenticated();
    if (validInput()) {
      const cust_details = { ...deliveryDetails, mode };

      if (mode === "COD") {
        const myOrder = await createOrderCOD(_id, null, {
          creator: _id,
          products: getCartItems(),
          amount: cartTotal(),
          cust_details,
        });
        setOrderResponse(myOrder);
        console.log(orderResponse);
        emptyCart(() => {
          console.log("Cart emptied");
        });
        setPlaced(true);
      } else {
        const orderPlaced = await createOrder(_id, null, {
          creator: _id,
          products: getCartItems(),
          amount: cartTotal(),
          cust_details,
        });
        console.log(orderPlaced);
        if (!orderPlaced.error) {
          window.location.href = orderPlaced.payment_link;
          // setPlaced(true);

          // history.push();
          // window.open(
          //   orderPlaced.payment_link,
          //   "_blank",
          //   "location=yes,height=1000,width=1000,scrollbars=yes,status=yes"
          // );
          // setOrderResponse(orderPlaced.order);
          emptyCart(() => {
            console.log("Cart emptied");
          });
        } else {
          toast.error(orderPlaced.message);
        }
      }
    }
  };

  const DeliveryDetails = () => (
    <div className="col-lg-12 mt-4">
      <div className="account-card">
        <div className="account-title">
          <h4>Delivery Details</h4>
        </div>
        <div className="account-content">
          <div className="row">
            <div className="col-md-12 col-lg-10 alert fade show">
              <div className="form-group">
                <label className="form-label">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your full name"
                  value={deliveryDetails.fullName}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      fullName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Mobile Number <span className="text-danger">*</span>
                </label>
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
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                  value={deliveryDetails.email}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  address <span className="text-danger">*</span>
                </label>
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
                  <label className="form-label">
                    City <span className="text-danger">*</span>
                  </label>
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
                  <label className="form-label">
                    State <span className="text-danger">*</span>
                  </label>
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
                  <label className="form-label">
                    Pincode <span className="text-danger">*</span>
                  </label>
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
              <div className="form-group">
                <label className="form-label">
                  Order Note <span className="text-danger">*</span>
                </label>
                <textarea
                  rows="3"
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Note..."
                  value={deliveryDetails.order_note}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      order_note: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderThankYou = () => (
    <Redirect
      to={{ pathname: "/thank-you", state: { mode: "COD", orderResponse } }}
    />
  );

  return (
    <>
      <UserNavbar />
      {placed ? (
        renderThankYou()
      ) : (
        <section className="inner-section checkout-part">
          <div className="container">
            <div className="row">
              <OrderList />

              <div className="col-lg-12">
                <div className="account-card mb-0">
                  <div className="account-title">
                    <h4>payment mode</h4>
                  </div>
                  <div className="account-content">
                    <div className="row">
                      <div
                        className="col-md-6 col-lg-4 alert fade show"
                        onClick={() => setMode("Card")}
                      >
                        <div
                          className={`payment-card payment ${
                            mode === "Card" ? "active" : ""
                          }`}
                        >
                          <img src={cashfree} alt="payment" />
                          <h4>Pay Online</h4>
                        </div>
                      </div>
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
                    </div>
                  </div>
                </div>
              </div>
              {DeliveryDetails()}
              {/* {mode === "Card" ? <>{cardDetails()}</> : <>{codDetails()}</>} */}

              <div className="checkout-proced" onClick={placeOrder}>
                <div className="btn btn-inline btn-success">place order</div>
              </div>
            </div>
          </div>
        </section>
      )}
      <StoreFooter />
    </>
  );
};

export default Checkout;
