import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { isAuthenticated } from "../../../auth";
import { getInfluencerProducts } from "../../apiCore";

const ProductList = ({ userId }) => {
  const { token } = isAuthenticated();

  const [products, setProducts] = useState([]);

  const init = (userId, token) => {
    getInfluencerProducts(userId, token).then((data) => {
      if (data.error) {
        console.log("Something went wrong", data.error);
      } else {
        // setProducts(data)
        setProducts((arr) => [...arr, data]);
      }
    });
  };

  useEffect(() => {}, [products]);

  useEffect(() => {
    init(userId, token);
  }, []);

  const showProducts = () => {
    return products[0].map((product, i) => (
      <SingleProduct key={i} product={product} />
    ));
  };

  return (
    <div className="container">
      <div className="row">{products.length ? showProducts() : ""}</div>
    </div>
  );
};

export default ProductList;
