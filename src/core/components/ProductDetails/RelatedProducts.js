import React from "react";
import SingleProduct from "../CreatorStore/SingleProduct";

const RelatedProducts = ({ products }) => {
  return (
    <section className="inner-section">
      <div className="container">
        {products.length !== 0 && (
          <div className="row">
            <div className="col">
              <div className="section-heading">
                <h3>Related Products</h3>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {products.map((product) => {
            return <SingleProduct product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
