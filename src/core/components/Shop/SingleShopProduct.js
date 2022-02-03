import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { Button, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../../auth";
import { API } from "../../../config";
import {
  updateMargin,
  addInfluenerItemToSite,
  removInfluencerProducts,
} from "../../apiCore";
import { addItem, updateItem, removeItem } from "../../cartHelpers";
function MyVerticallyCenteredModal(props) {
  const alert = useAlert();
  const [margin, setMargin] = useState(0);
  const handleMarginSubmit = (e) => {
    e.preventDefault();
    updateMargin(
      isAuthenticated().token,
      props.userId,
      props.product._id,
      margin
    ).then((data) => {
      alert.show("Margin updated");
    });
  };
  const handleChange = (e) => {
    setMargin(e.target.value);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update margin for {props.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label className="text-muted">Margin</label>
            <input
              type="number"
              className="form-control"
              onChange={handleChange}
              value={margin}
            />
          </div>
          <Button style={{ marginLeft: "5px" }} onClick={handleMarginSubmit}>
            Update
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const SingleShopProduct = ({
  product,
  productAdded = false,
  showAddToCartButton = true,
  showAddToSiteButton = false,
  userId = "",
  setRun = (f) => f,
  run = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [user, setUser] = useState({});
  const [currentMargin, setCurrentMargin] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [refresh, setRefresh] = useState(true);
  const alert = useAlert();

  const { id, name, email, role } = user;

  const getMargin = () => {
    {
      product.influencer_list.map((influencer, idx) => {
        if (influencer.user_id === userId) {
          setCurrentMargin(influencer.margin);
        }
      });
    }
  };

  useEffect(() => {}, [refresh]);

  useEffect(() => {}, [currentMargin]);

  useEffect(() => {
    const auth_user = isAuthenticated();
    if (auth_user) {
      setUser(auth_user.user);
    }
    getMargin();
  }, []);

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
            View Product
          </button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button className="product-add" title="Add to Cart" onClick={addToCart}>
          <i className="fas fa-shopping-basket"></i>
          <span>Add to cart</span>
        </button>
      )
    );
  };

  const addToSite = () => {
    const products = [product._id];
    addInfluenerItemToSite(user._id, isAuthenticated().token, products).then(
      (data) => {
        alert.show(`${data.message}`);
      }
    );
  };

  const showAddToSiteBtn = (showAddToSiteButton) => {
    return (
      showAddToSiteButton && (
        <button className="product-add" title="Add to Cart" onClick={addToSite}>
          <i className="fas fa-shopping-basket"></i>
          <span>Add to Site</span>
        </button>
      )
    );
  };

  const showAddMarginButton = (showAddMarginBtn) => {
    return (
      showAddMarginBtn && (
        <>
          <button
            onClick={() => setModalShow(true)}
            className="btn btn-outline-warning card-btn-1  "
          >
            Update Margin
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            product={product}
            userId={userId}
          />
        </>
      )
    );
  };

  const removeFromSite = () => {
    const products = [product._id];
    removInfluencerProducts(user._id, isAuthenticated().token, products).then(
      (data) => {
        alert.show(`${data.message}`);
        window.location.reload(false);
      }
    );
  };

  const showRemoveFromSiteButton = (removeFromSiteBtn) => {
    return (
      removeFromSiteBtn && (
        <button
          onClick={removeFromSite}
          className="btn btn-outline-danger card-btn-1 ml-2"
        >
          Remove from site
        </button>
      )
    );
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };

  const showLoginToViewBtn = () => {
    return (
      <Link to="/signin" className="btn btn-outline-warning mt-2 mb-2">
        Login to Proceed
      </Link>
    );
  };

  const showMarginQuantity = () => {
    return <p className="black-7">Margin: {currentMargin}</p>;
  };

  const noShow = () => <div></div>;
  return (
    <div
      className="col col-xs-12 col-sm-6 col-md-4 col-lg-3"
      style={{ padding: "5px", minWidth: "160px" }}
    >
      <div className="product-card">
        <div className="product-media">
          <div className="product-label">
            <label className="label-text sale">
              {product.category && product.category.name}
            </label>
          </div>
          {/* <button className="product-wish wish">
            <i className="fas fa-heart"></i>
          </button> */}
          {shouldRedirect(redirect)}

          <Link to={`/products/${product._id}`} className="product-image">
            <img
              src={product.url}
              alt={product.name}
              style={{
                height: "180px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Link>
        </div>
        <div className="product-content">
          {/* <div className="product-rating">
            <i className="active fas fa-star"></i>
            <i className="active fas fa-star"></i>
            <i className="active fas fa-star"></i>
            <i className="active fas fa-star"></i>
            <i className="active far fa-star"></i>
            <a href="product-video.html">(4)</a>
          </div> */}
          <h6 className="product-name">
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </h6>
          <h6 className="product-price">
            <del>
              <i className="fas fa-rupee-sign"></i>
              {product.mrp}
            </del>
            <span>
              <i className="fas fa-rupee-sign"></i> {product.price}
            </span>
          </h6>

          {user && role === "1" && showAddToSiteBtn(showAddToSiteButton)}
          {user && role === "2" && showAddToCartBtn(showAddToCartButton)}

          {/* <button
          className="product-add"
          title="Add to Cart"
          onClick={() => addItemToCart(product, 1)}
        >
          <i className="fas fa-shopping-basket"></i>
          <span>add</span>
        </button> */}
          <div className="product-action">
            <button className="action-minus" title="Quantity Minus">
              <i className="icofont-minus"></i>
            </button>
            <input
              className="action-input"
              title="Quantity Number"
              type="text"
              name="quantity"
              value="1"
            />
            <button className="action-plus" title="Quantity Plus">
              <i className="icofont-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShopProduct;
