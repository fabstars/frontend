import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { isAuthenticated } from "../../../auth";
import { getInfluencerProducts } from "../../apiCore";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ProductList = ({ userId, user }) => {
  const { token } = isAuthenticated();

  const [products, setProducts] = useState([]);

  const init = (userId, token) => {
    getInfluencerProducts(userId, token).then((data) => {
      setProducts((arr) => [...arr, data]);
    });
  };

  useEffect(() => {}, [products]);

  useEffect(() => {
    init(userId, token);
  }, [token, userId]);

  const showProducts = () => {
    return products[0].map((product, i) => (
      <SingleProduct key={i} product={product} userId={userId} user={user} />
    ));
  };

  return (
    <div style={{ margin: "3em 0em 3em 0em" }}>
      {products.length ? (
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5">
            {products.length ? showProducts() : ""}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      )}
    </div>
  );
};

export default ProductList;
