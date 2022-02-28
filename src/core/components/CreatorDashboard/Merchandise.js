import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import StoreSummary from "./StoreSummary";
// import { isAuthenticated } from "../../../auth";
// import {
//   getInfluencerProducts,
//   updateMargin,
//   removInfluencerProducts,
// } from "../../apiCore";
// import { Modal, Button, Form } from "react-bootstrap";
// import { useAlert } from "react-alert";
// import ShowRow from "./ShowRow";

const Merchandise = () => {
//   const alert = useAlert();
//   const {
//     token,
//     user: { _id },
//   } = isAuthenticated();
//   const [products, setProducts] = useState([]);

//   const init = (userId, token) => {
//     getInfluencerProducts(userId, token).then((data) => {
//       setProducts((arr) => [...arr, data]);
//     });
//   };

//   useEffect(() => {}, [products]);

//   useEffect(() => {
//     init(_id, token);
//   }, [_id, token]);

  return (
    <>
      <div className="row">
        <div className="col-md-12  header-wrapper mt-6">
          <h1 className="page-header">MERCHANDISE</h1>
        </div>
      </div>
      <p style={{ margin: "1rem" }} className="page-subtitle">
      Please call on 8445814825 to enable your merchandise or <a
                href="http://wa.me/+918445814825"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
      Click to chat on Whatsapp.
      </a>{" "}
      </p>
      <hr style={{ margin: "1rem" }}  />
      <div style={{ margin: "1rem", "textAlign" : "center" }}  className="row row-cols-xs-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
      <div class="col" style={{"maxWidth" : "250px"}}>
      <div class="product-card">
        <div class="product-media">
          <div class="product-label">
            {/* <label class="label-text sale">
              {product && product.category && product.category.name}
            </label> */}
            {/* <label className="details-label new">lol */}
              {/* {(
                (Number(product.mrp - currentMargin - product.price) * 100) /
                Number(product.mrp)
              ).toFixed(0)}
              % Off */}
            {/* </label> */}
          </div>

          <Link
            // to="#"{{
            //   pathname: `/products/${product._id}`,
            //   state: {
            //     storeTitle: user && user.store_name,
            //     creatorStore: user && `/${user.slug}`,
            //     userId: user && userId,
            //   },
            // }}
            class="product-image"
          >
            <img src={"https://www.printland.in/designer_media/products/123319_preview_1.png"} alt={"photo"} />
          </Link>
        </div>
        <div class="product-content">
          <h6 class="product-name">
              <span>
              {"Fully Customizable Hoodies"}
              </span>
            {/* <Link
              to={{
                pathname: `/products/${product._id}`,
                state: {
                  storeTitle: user && user.store_name,
                  creatorStore: user && `/${user.slug}`,
                  userId: user && userId,
                },
              }}
            >
              
            </Link> */}
          </h6>
          <p class="product-name" style={{"fontSize" : "13px"}}>
          {"Heavy Hoodie | poly cotton | Best Quality"}
          </p>
          {/* <h6 class="product-price">
            <del>
              <i className="fas fa-rupee-sign"></i>
               {product.mrp}
            </del>
            <span>
              <i className="fas fa-rupee-sign"></i>{" "}
              {product.price + currentMargin}
            </span>
          </h6> */}
          {/* <button
            class="product-add"
            title="Add to Cart"
            // onClick={() => addToCart(product)}
          >
            <i class="fas fa-shopping-basket"></i>
            <span>add</span>
          </button> */}
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
      <div class="col" style={{"maxWidth" : "250px"}}>
      <div class="product-card">
        <div class="product-media">
          <div class="product-label">
            {/* <label class="label-text sale">
              {product && product.category && product.category.name}
            </label> */}
            {/* <label className="details-label new">lol */}
              {/* {(
                (Number(product.mrp - currentMargin - product.price) * 100) /
                Number(product.mrp)
              ).toFixed(0)}
              % Off */}
            {/* </label> */}
          </div>

          <Link
            // to="#"{{
            //   pathname: `/products/${product._id}`,
            //   state: {
            //     storeTitle: user && user.store_name,
            //     creatorStore: user && `/${user.slug}`,
            //     userId: user && userId,
            //   },
            // }}
            class="product-image"
          >
            <img src={"https://www.printland.in/designer_media/products/106751_preview_1.jpg"} alt={"photo"} />
          </Link>
        </div>
        <div class="product-content">
          <h6 class="product-name">
              <span>
              {"Fully Customizable T-Shirts"}
              </span>
            {/* <Link
              to={{
                pathname: `/products/${product._id}`,
                state: {
                  storeTitle: user && user.store_name,
                  creatorStore: user && `/${user.slug}`,
                  userId: user && userId,
                },
              }}
            >
              
            </Link> */}
          </h6>
          <p class="product-name" style={{"fontSize" : "13px"}}>
          {"Best Quality | 100% cotton | Bio-wash T-Shirt"}
          </p>
          {/* <h6 class="product-price">
            <del>
              <i className="fas fa-rupee-sign"></i>
               {product.mrp}
            </del>
            <span>
              <i className="fas fa-rupee-sign"></i>{" "}
              {product.price + currentMargin}
            </span>
          </h6> */}
          {/* <button
            class="product-add"
            title="Add to Cart"
            // onClick={() => addToCart(product)}
          >
            <i class="fas fa-shopping-basket"></i>
            <span>add</span>
          </button> */}
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
    </div>
    </>
  );
};

export default Merchandise;
