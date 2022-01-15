import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../../auth";
import { listRelated, read } from "../../apiCore";
import Layout from "../../Layout";
import { API } from "../../../config";

import "./style.css";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import ProductSpecification from "./ProductSpecification";
import RelatedProducts from "./RelatedProducts";
const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
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
  }, [props]);

  const [activeTab, setActiveTab] = useState("Description");
  const [cartActive, setCartActive] = useState(false);

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
      jumbotron={false}
      cartActive={cartActive}
      setCartActive={setCartActive}
    >
      {!product ? (
        <div style={{ textAlign: "center" }}>
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <>
          <section className="inner-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="details-gallery">
                    <div className="details-label-group">
                      <label className="details-label new">new</label>
                      <label className="details-label off">-10%</label>
                    </div>
                    <ul className="details-preview">
                      <li>
                        <img
                          src={`${API}/product/photo/${product._id}`}
                          alt={product.name}
                        />
                      </li>
                    </ul>
                    {/* <ul className="details-thumb">
                  <li>
                    <img
                      src={`${API}/product/photo/${product._id}`}
                      alt={product.name}
                    />
                  </li>
                </ul> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-content">
                    <h3 className="details-name">{product.name}</h3>
                    <div className="details-meta">
                      <p>
                        BRAND:<Link to="#">Brand</Link>
                      </p>
                    </div>
                    <div className="details-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      {/* <Link to="#">(3 reviews)</Link> */}
                    </div>
                    <h3 className="details-price">
                      <del>
                        <i className="fas fa-rupee-sign"></i>{" "}
                        {(Number(product.price) * 1.2).toFixed(0)}
                      </del>
                      <span>
                        <i className="fas fa-rupee-sign"></i> {product.price}
                        <small></small>
                      </span>
                    </h3>
                    <p className="details-desc">{product.description}</p>
                    {/* <div className="details-list-group">
                  <label className="details-list-title">tags:</label>
                  <ul className="details-tag-list">
                    <li>
                      <Link to="#">organic</Link>
                    </li>
                    <li>
                      <Link to="#">fruits</Link>
                    </li>
                    <li>
                      <Link to="#">chilis</Link>
                    </li>
                  </ul>
                </div> */}
                    <div className="details-list-group">
                      <label className="details-list-title">Share:</label>
                      <ul className="details-share-list">
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="details-add-group">
                      <button className="product-add" title="Add to Cart">
                        <i className="fas fa-shopping-basket"></i>
                        <span>add to cart</span>
                      </button>
                    </div>
                    <div className="details-action-group">
                      <Link
                        className="details-wish wish"
                        to="#"
                        title="Add Your Wishlist List"
                      >
                        <i className="fas fa-heart"></i>
                        <span>add to wish</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ProductSpecification
            product={product}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <RelatedProducts products={relatedProduct} />
        </>
      )}
    </Layout>
  );
};

export default ProductDetails;
