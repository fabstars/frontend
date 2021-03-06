import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import { isAuthenticated } from "../auth";
import Menu from "./Menu";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const [influencer, setInfluencer] = useState(false);

  const {
    user: { role },
  } = isAuthenticated();

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
    if (role === "1") setInfluencer(true);
  }, [props, role]);

  return (
    <>
      <Menu defaultNav={true} />
      <div className="row">
        <div className="col-8">
          {product && product.description && (
            <Card
              product={product}
              showViewProductButton={false}
              showAddToSiteButton={influencer}
            />
          )}
        </div>

        <div className="col-4">
          <h4>Related products</h4>
          {relatedProduct.map((p, i) => (
            <div className="mb-3" key={i}>
              {isAuthenticated() && isAuthenticated().user.role === "1" ? (
                <Card product={p} showAddToSiteButton={true} />
              ) : (
                <Card product={p} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
