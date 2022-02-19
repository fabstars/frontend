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
import Menu from "../../Menu";
import { toast } from "react-toastify";
import StoreFooter from "../CreatorStore/StoreFooter";

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const [influencer, setInfluencer] = useState(false);
  const [role, setRole] = useState("");

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
  }, [props]);

  const [activeTab, setActiveTab] = useState("Description");
  const [cartActive, setCartActive] = useState(false);
  const alert = useAlert();

  const location = useLocation();
  const [creatorStore, setCreatorStore] = useState("#");
  const [storeTitle, setStoreTitle] = useState("");
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (location && location.state && location.state.creatorStore)
      setCreatorStore(location.state.creatorStore);
    if (location && location.state && location.state.storeTitle)
      setStoreTitle(location.state.storeTitle);
    if (location && location.state && location.state.userId)
      setUserId(location.state.userId);
  }, [location]);
  const [currentMargin, setCurrentMargin] = useState(0);

  const getMargin = () => {
    if (product)
      product.influencer_list.map((influencer, idx) => {
        if (influencer.user_id === userId) {
          setCurrentMargin(influencer.margin);
        }
      });
  };
  useEffect(() => {
    getMargin();
  }, [getMargin, product]);

  return (
    <>
      <Menu defaultNav={false} />
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
                          (Number(product.mrp - currentMargin - product.price) *
                            100) /
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
                        <i className="fas fa-rupee-sign"></i>{" "}
                        {product.price + currentMargin}
                        <small></small>
                      </span>
                    </h3>

                    <div
                      className="details-desc"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
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

                    <>
                      <div className="details-action-group">
                        <button
                          className="product-add"
                          title="Add to Cart"
                          style={{ padding: "7px 0px" }}
                          onClick={() => {
                            addItemToCart(
                              product,
                              1,
                              product.price + currentMargin
                            );
                            toast.success("Product added to cart");
                          }}
                        >
                          <i className="fas fa-shopping-basket"></i>
                          <span>ADD TO CART</span>
                        </button>
                      </div>
                      <div className="details-add-group">
                        <Link
                          className="product-add "
                          to={{
                            pathname: `/checkout`,
                            state: { storeTitle, creatorStore },
                          }}
                          title="Buy Now"
                          style={{ textDecoration: "None",  padding: "7px 0px" }}
                          onClick={() =>
                            addItemToCart(
                              product,
                              1,
                              product.price + currentMargin
                            )
                          }
                        >
                          <i className="far fa-credit-card"></i>
                          <span>buy now</span>
                        </Link>
                      </div>
                    </>
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
      <StoreFooter />
    </>
  );
};

export default ProductDetails;
