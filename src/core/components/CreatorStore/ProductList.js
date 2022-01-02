import React from "react";
import SingleProduct from "./SingleProduct";

const ProductList = () => {
  return (
    <div className="container">
      <div className="row">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  );
};

export default ProductList;
