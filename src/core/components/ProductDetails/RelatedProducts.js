import React from "react";
import SingleShopProduct from "../Shop/SingleShopProduct";

const RelatedProducts = ({ products, role }) => {
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
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5">
          {products.map((product) => {
            return (
              <SingleShopProduct
                showAddToSiteButton={role === "1" ? true : false}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
