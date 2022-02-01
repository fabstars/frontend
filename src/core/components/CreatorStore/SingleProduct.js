import React, { useEffect, useState } from "react";
import tshirt from "./tshirt.webp";
import { API } from "../../../config";
import "./style1.css";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../cartHelpers";

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
  }, [getMargin]);
  return (
    <div class="col">
        <div class="product-card">
          <div class="product-media">
            <div class="product-label">
              <label class="label-text off">-10%</label>
            </div>
            <button class="product-wish wish">
              <i class="fas fa-heart"></i>
            </button>
            <Link to={`/products/${product._id}`} class="product-image">
              <img
                src={`${API}/product/photo/${product._id}`}
                alt={product.name}
              />
            </Link>
          </div>
          <div class="product-content">
            <div class="product-rating">
              <i className="active fas fa-star"></i>
              <i className="active fas fa-star"></i>
              <i className="active fas fa-star"></i>
              <i className="active fas fa-star"></i>
              <i className="active far fa-star"></i>
              <a href="product-video.html">(4)</a>
            </div>
            <h6 class="product-name">
              <Link to={`/products/${product._id}`}>{product.name}</Link>
            </h6>
            <h6 class="product-price">
              <del>
                <i className="fas fa-rupee-sign"></i>34
              </del>
              <span>
                <i className="fas fa-rupee-sign"></i>{" "}
                {product.price + currentMargin}
              </span>
            </h6>
            <button
              class="product-add"
              title="Add to Cart"
              onClick={() => addItemToCart(product, 1)}
            >
              <i class="fas fa-shopping-basket"></i>
              <span>add</span>
            </button>
            <div class="product-action">
              <button class="action-minus" title="Quantity Minus">
                <i class="icofont-minus"></i>
              </button>
              <input
                class="action-input"
                title="Quantity Number"
                type="text"
                name="quantity"
                value="1"
              />
              <button class="action-plus" title="Quantity Plus">
                <i class="icofont-plus"></i>
              </button>
            </div>
          </div>
        </div>
    </div>

    //<div className="col-lg-4 col-md-6 col-sm-6 col-12">
    //   <div className="product-style mt-4 mb-4">
    //     <div className="thumb">
    //       <img
    //         src={`${API}/product/photo/${product._id}`}
    //         alt={product.name}
    //         style={{ maxHeight: "100%", maxWidth: "100%" }}
    //       />
    //       {/* <span className="sale">SALE 10%</span>
    //       <span className="new mt-5">NEW</span> */}
    //       <ul className="cart-action">
    //         <li>
    //           <i className="far fa-heart"></i>
    //         </li>
    //         <li>
    //           <i className="far fa-eye"></i>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="content ">
    //       <span className="brand">{product.category.name}</span>
    //       {/* <ul className="justify-content-start mb-3">
    //         <li>
    //           <i className="fas fa-star"></i>
    //         </li>
    //         <li>
    //           <i className="fas fa-star"></i>
    //         </li>
    //         <li>
    //           <i className="fas fa-star"></i>
    //         </li>
    //         <li>
    //           <i className="fas fa-star"></i>
    //         </li>
    //         <li>
    //           <i className="far fa-star"></i>
    //         </li>
    //       </ul> */}
    //       <h6 className="title">{product.name}</h6>
    //       <div className="d-flex position-relative">
    //         {/* <div className="content-hover-cart">
    //           <i className="fas fa-bags-shopping" /> Add to cart
    //         </div> */}
    //         <div className="content-cart">
    //           <i className="fas fa-bags-shopping" />
    //         </div>
    //         <div className="content-price d-flex flex-column align-self-center">
    //           {/* <span className="old-price">
    //             <i className="fas fa-rupee-sign"></i> 500.00
    //           </span> */}
    //           <span className="new-price">
    //             <i className="fas fa-rupee-sign"></i>{" "}
    //             {product.price + currentMargin}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SingleProduct;
