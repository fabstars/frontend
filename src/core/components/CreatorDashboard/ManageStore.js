import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoreSummary from "./StoreSummary";
import { isAuthenticated } from "../../../auth";
import { getInfluencerProducts } from "../../apiCore";

const ManageStore = () => {
  const {
    token,
    user: { _id },
  } = isAuthenticated();
  const [products, setProducts] = useState([]);
  const [margins, setMargins] = useState([]);

  const init = (userId, token) => {
    getInfluencerProducts(userId, token).then((data) => {
      setProducts((arr) => [...arr, data]);
    });
  };

  const getMargin = (product) => {
    {
      product.influencer_list.map((influencer, idx) => {
        if (influencer.user_id === _id) {
          console.log(influencer.user_id, _id);
          console.log(influencer.margin);
          product["margin"] = influencer.margin;
        }
      });
    }
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
      <StoreSummary />
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
                <th>Product </th>
                <th className="text-center">Price per Item</th>
                <th className="text-center">margin per Item</th>
                {/* <th className="text-center">status</th> */}
              </tr>
            </thead>
            {products &&
              products[0] &&
              products[0].map((product, i) => (
                <tbody key={i}>
                  <tr className=" ">
                    <td>{product.name}</td>
                    <td className="text-center">
                      <i className="fas fa-rupee-sign"></i> {product.price}
                    </td>
                    <td className="text-center">
                      <i className="fas fa-rupee-sign"></i>
                      {getMargin(product)} {product["margin"]}
                    </td>
                    {/* <td className="text-center">
                      <span className="status active">Active</span>
                    </td> */}
                  </tr>
                </tbody>
              ))}
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

export default ManageStore;
