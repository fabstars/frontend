import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoreSummary from "./StoreSummary";
import { isAuthenticated } from "../../../auth";
import {
  getInfluencerProducts,
  updateMargin,
  removInfluencerProducts,
} from "../../apiCore";
import { Modal, Button, Form } from "react-bootstrap";
import { useAlert } from "react-alert";
import ShowRow from "./ShowRow";

const ManageStore = () => {
  const alert = useAlert();
  const {
    token,
    user: { _id },
  } = isAuthenticated();
  const [products, setProducts] = useState([]);

  const init = (userId, token) => {
    getInfluencerProducts(userId, token).then((data) => {
      setProducts((arr) => [...arr, data]);
    });
  };


  useEffect(() => {}, [products]);

  useEffect(() => {
    init(_id, token);
  }, []);


  return (
    <>
      <div className="row">
        <div className="col-md-12  header-wrapper mt-6">
          <h1 className="page-header">PRODUCTS</h1>
        </div>
      </div>
      {/* <StoreSummary /> */}
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {/* <div className="dataTables_length">
                <label>
                  Show{" "}
                  <select className="form-control input-sm">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>{" "}
                  <span>entries</span>
                </label>
              </div> */}
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
                <th>Product </th>
                <th className="text-center">Price per Item</th>
                <th className="text-center">margin per Item</th>
                <th className="text-center">Update margin</th>
                <th className="text-center">remove from site</th>
              </tr>
            </thead>
              <tbody >
            {products &&
              products[0] &&
              products[0].map((product, i) => <ShowRow product={product} i={i} products={products} _id={_id}/>)}
              </tbody>
          </table>
        </div>
      </div>
      {/* <div className="row">
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
      </div> */}
    </>
  );
};

export default ManageStore;
