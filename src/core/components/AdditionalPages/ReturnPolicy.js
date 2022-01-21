import React from "react";
import { Link } from "react-router-dom";
import "./s1.css";
import { isAuthenticated, signout } from "../../../auth";
import Footer from "../Homepage/Footer";

const ReturnPolicy = () => {
  return (
    <>
      <div className="banner">
        <header className="header u-container skip-parallax">
          <Link to="/" style={{ marginLeft: "2.8em" }}>
            <h1 className="qaya-logo">Fab</h1>
          </Link>
          <nav>
            <ul>
              {!isAuthenticated() && (
                <li>
                  <Link className="button-72" to="/signin">
                    Log in
                  </Link>
                </li>
              )}

              {!isAuthenticated() && (
                <li>
                  <Link className="button-72" to="/signup">
                    Start For Free
                  </Link>
                </li>
              )}

              {isAuthenticated() &&
                (isAuthenticated().user.role === "1" ||
                  isAuthenticated().user.role === "2") && (
                  <li>
                    <Link className="button-72" to="/user/dashboard">
                      Dashboard
                    </Link>
                  </li>
                )}

              {isAuthenticated() && isAuthenticated().user.role === "0" && (
                <li>
                  <Link className="button-72" to="/admin/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}

              {isAuthenticated() && (
                <li>
                  <Link
                    className="button-72"
                    onClick={() =>
                      signout(() => {
                        // history.push("/");
                      })
                    }
                  >
                    Signout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
        <div className="bgcolora">
          <div className="start-heading text-center">
            <h1>Return Policy</h1>
          </div>
          <div className="bgarea">
            <h3>Return Policy</h3>
            <p className="beautify">
              The product must be returned to us within 30 days from the date it
              has been delivered to the customer. The product must be returned
              with all tags attached in its original condition along with all
              packing material, courier receipt, invoice & other papers.
            </p>
            <h3>Refund Policy</h3>
            <p className="beautify">
              Once the Product is received by the company successfully, We will
              instantly initiate the refund to your source account or chosen
              method of refund within 7 working days.
            </p>
            <h3>Cancellation Policy</h3>
            <p className="beautify">
              Please note an order can only be canceled within 4 hours of
              placing the order. Once the order is processed after 4 hours, no
              cancellation request will be entertained. However, return is
              possible for all orders/products or you can contact us directly at
              contactfs247@gmail.com.<br></br>
              <span>OR</span>
              <br></br>Customers can CANCEL order only before the Order has been
              shipped/Dispatched. After the Product/s have been shipped, The
              Customer CANNOT Cancel the Orders. However return is possible for
              all orders/products.
            </p>
            <h3>Shipping & Delivery Policies</h3>
            <p className="beautify">
              We ship our products to almost all parts of India. For all areas
              serviced by reputed couriers, the delivery time would be within 3
              to 4 business days of shipping (business days exclude Sundays and
              other holidays). We partner with the best of delivery services in
              India such as FedEx, Bluedart, Gati, EcomExpress, Delhivery,
              Aramex, Xpressbees, Dotzot via Pickrr.<br></br>
              <br></br>
              At times there might be unexpected delays in the delivery of your
              order due to unavoidable and undetermined logistics challenges
              beyond our control for which we are not liable and would request
              its users to cooperate as we continuously tries to avoid such
              instances. Also, we reserve the right to cancel your order at our
              sole discretion in cases where it takes longer than usual delivery
              time or the shipment is physically untraceable and refund the
              amount paid for cancelled product(s) to your source account.
            </p>
            <h3>Contact Us:-</h3>
            <p className="beautify">
              8445814825<br></br>
              contactfs24x7@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
