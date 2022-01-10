import React, { useEffect, useState } from "react";
import tshirt from "./tshirt.webp";
import { API } from "../../../config";

const SingleProduct = ({ product, userId }) => {
  const [currentMargin, setCurrentMargin] = useState(0);

  const getMargin = () => {
    {
      product.influencer_list.map((influencer, idx) => {
        // console.log(influencer.user_id, userId);
        if (influencer.user_id === userId) {
          // console.log(influencer.margin);
          setCurrentMargin(influencer.margin);
        }
      });
    }
  };
  useEffect(() => {}, [currentMargin]);
  useEffect(() => {
    getMargin();
  }, []);
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="product-style mt-4 mb-4">
        <div className="thumb">
          <img
            src={`${API}/product/photo/${product._id}`}
            alt={product.name}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
          {/* <span className="sale">SALE 10%</span>
          <span className="new mt-5">NEW</span> */}
          <ul className="cart-action">
            <li>
              <i className="far fa-heart"></i>
            </li>
            <li>
              <i className="far fa-eye"></i>
            </li>
          </ul>
        </div>
        <div className="content ">
          <span className="brand">{product.category.name}</span>
          {/* <ul className="justify-content-start mb-3">
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="far fa-star"></i>
            </li>
          </ul> */}
          <h6 className="title">{product.name}</h6>
          <div className="d-flex position-relative">
            {/* <div className="content-hover-cart">
              <i className="fas fa-bags-shopping" /> Add to cart
            </div> */}
            <div className="content-cart">
              <i className="fas fa-bags-shopping" />
            </div>
            <div className="content-price d-flex flex-column align-self-center">
              {/* <span className="old-price">
                <i className="fas fa-rupee-sign"></i> 500.00
              </span> */}
              <span className="new-price">
                <i className="fas fa-rupee-sign"></i>{" "}
                {product.price + currentMargin}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
