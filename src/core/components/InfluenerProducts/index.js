import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import { isAuthenticated } from "../../../auth";
import { getInfluencerProducts } from "../../apiCore";
import Card from "../../Card";
import Menu from "../../Menu";

const MyProducts = () => {
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
      <Menu defaultNav={true} />
      <div className="container">
        <div className="row">
          {products &&
            products[0] &&
            products[0].map((product, i) => (
              <div key={i} className="col-6 mb-5">
                <Card
                  product={product}
                  showAddMarginBtn={true}
                  removeFromSiteBtn={true}
                  showMargin={true}
                  userId={_id}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyProducts;
