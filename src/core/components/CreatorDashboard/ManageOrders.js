import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const ManageOrders = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12  header-wrapper mt-6">
          <h1 className="page-header">ORDERS</h1>
        </div>
      </div>
      <OrderSummary />
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="dataTables_length">
                <label>
                  Show{" "}
                  <select className="form-control input-sm">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>{" "}
                  <span>entries</span>
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="dataTables_filter">
                <label>
                  Search:
                  <input
                    type="search"
                    className="form-control input-sm"
                    placeholder=""
                  />
                </label>
              </div>
            </div>
          </div>
          <table className="table " id="dataTables-userlist">
            <thead>
              <tr>
                <th>User </th>
                <th>Product</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total Price</th>
                <th className="text-center">Total margin</th>
                <th className="text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" ">
                <td>John Doe</td>
                <td>Round neck Tshirt</td>
                <td className="text-center">3</td>
                <td className="text-center">
                  <i className="fas fa-rupee-sign"></i> 400
                </td>
                <td className="text-center">
                  <i className="fas fa-rupee-sign"></i> 40
                </td>
                <td className="text-center">{new Date().toDateString()}</td>
              </tr>

              <tr className="  ">
                <td>Alone Guy</td>
                <td>Round neck Tshirt</td>
                <td className="text-center">3</td>
                <td className="text-center">
                  <i className="fas fa-rupee-sign"></i> 400
                </td>
                <td className="text-center">
                  <i className="fas fa-rupee-sign"></i> 40
                </td>
                <td className="text-center">{new Date().toDateString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="dataTables_info">Showing 1 to 10 of 12 entries</div>
        </div>
        <div className="col-sm-6">
          <div className="dataTables_paginate paging_full_numbers">
            <ul className="pagination">
              <li className="paginate_button previous disabled">
                <div className="btn">&lt;</div>
              </li>
              <li className="paginate_button active">
                <div className="btn">1</div>
              </li>
              <li className="paginate_button ">
                <div className="btn">2</div>
              </li>
              <li className="paginate_button next">
                <div className="btn">&gt;</div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrders;
