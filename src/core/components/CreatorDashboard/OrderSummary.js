import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <div className="panel panel-blue">
          <div className="panel-heading">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="huge text-center">12</div>
                <div>Total Orders</div>
              </div>
            </div>
          </div>
          <Link to="#">
            <div className="panel-footer">
              {" "}
              <span className="text-center float-left">View Details</span>{" "}
              <span className="float-right">
                <i className="fa fa-arrow-circle-right"></i>
              </span>
              <div className="clearfix"></div>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="panel panel-green">
          <div className="panel-heading">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="huge text-center">12</div>
                <div>Total Earnings</div>
              </div>
            </div>
          </div>
          <Link to="#">
            <div className="panel-footer">
              {" "}
              <span className="text-center float-left">View Details</span>{" "}
              <span className="float-right">
                <i className="fa fa-arrow-circle-right"></i>
              </span>
              <div className="clearfix"></div>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="panel panel-yellow">
          <div className="panel-heading">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="huge text-center">12</div>
                <div>Active Products</div>
              </div>
            </div>
          </div>
          <Link to="#">
            <div className="panel-footer">
              {" "}
              <span className="text-center float-left">View Details</span>{" "}
              <span className="float-right">
                <i className="fa fa-arrow-circle-right"></i>
              </span>
              <div className="clearfix"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
