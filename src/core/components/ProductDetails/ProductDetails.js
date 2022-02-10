import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../../auth";
import { addInfluenerItemToSite, listRelated, read } from "../../apiCore";
import Layout from "../../Layout";
import { API } from "../../../config";

import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import ProductSpecification from "./ProductSpecification";
import RelatedProducts from "./RelatedProducts";
import { addItemToCart } from "../../cartHelpers";
import { useAlert } from "react-alert";

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const [influencer, setInfluencer] = useState(false);
  const [_id, setUserId] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    const { user } = isAuthenticated();
    if (user && user._id) {
      setUserId(user._id);
    }
    if (user && user.role) {
      setRole(user.role);
    }
  }, []);

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
    console.log("Props", props);
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
    if (isAuthenticated() && role === "1") setInfluencer(true);
  }, [props]);

  const [activeTab, setActiveTab] = useState("Description");
  const [cartActive, setCartActive] = useState(false);
  const alert = useAlert();

  const addToSite = (product) => {
    const products = [product._id];
    addInfluenerItemToSite(_id, isAuthenticated().token, products).then(
      (data) => {
        alert.show(`${data.message}`);
      }
    );
  };
  const location = useLocation();
  const [creatorStore, setCreatorStore] = useState("#");
  const [storeTitle, setStoreTitle] = useState("");
  useEffect(() => {
    if (location && location.state && location.state.creatorStore)
      setCreatorStore(location.state.creatorStore);
    if (location && location.state && location.state.storeTitle)
      setStoreTitle(location.state.storeTitle);
  }, []);
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
                      <label className="details-label sale">
                        {product.category && product.category.name}
                      </label>
                      <label className="details-label new">
                        {(
                          (Number(product.mrp - product.price) * 100) /
                          Number(product.mrp)
                        ).toFixed(0)}
                        % Off
                      </label>
                    </div>
                    <ul className="details-preview">
                      <li>
                        <img src={product.url} alt={product.name} />
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

                    <h3 className="details-price">
                      <del>
                        <i className="fas fa-rupee-sign"></i> {product.mrp}
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

                    {isAuthenticated() && role === "1" ? (
                      <div className="details-add-group">
                        <button
                          className="product-add"
                          title="Add to Site"
                          onClick={() => addToSite(product)}
                        >
                          <i className="fas fa-shopping-basket"></i>
                          <span>add to site</span>
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="details-add-group">
                          <button
                            className="product-add"
                            title="Add to Cart"
                            onClick={() => addItemToCart(product, 1)}
                          >
                            <i className="fas fa-shopping-basket"></i>
                            <span>add to cart</span>
                          </button>
                        </div>
                        <div className="details-action-group">
                          <Link
                            className="details-wish wish"
                            to={{
                              pathname: `/checkout`,
                              state: { storeTitle, creatorStore },
                            }}
                            title="Buy Now"
                            style={{ textDecoration: "None" }}
                            onClick={() => addItemToCart(product, 1)}
                          >
                            <i className="far fa-credit-card"></i>
                            <span>buy now</span>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <ProductSpecification
            product={product}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          /> */}
          <RelatedProducts
            products={relatedProduct}
            role={isAuthenticated() ? role : "0"}
          />
        </>
      )}
    </Layout>
  );
};

export default ProductDetails;
