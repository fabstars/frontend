import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import { isAuthenticated } from "../auth";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  showAddMarginBtn = false,
  removeFromSiteBtn = false,
  showAddToSiteButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [user, setUser] = useState({});

  const { id, name, email, role } = user;

  useEffect(() => {
    const auth_user = isAuthenticated();
    if (auth_user) {
      setUser(auth_user.user);
    }
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
        <button
          onClick={addToCart}
          className="btn btn-outline-warning mt-2 mb-2 card-btn-1  "
        >
          Add to cart
        </button>
      )
    );
  };

  const addToSite = () => {
    console.log("Added to site");
  };

  const showAddToSiteBtn = (showAddToSiteButton) => {
    return (
      showAddToSiteButton && (
        <button
          onClick={addToSite}
          className="btn btn-outline-warning mt-2 mb-2 card-btn-1  "
        >
          Add to Site
        </button>
      )
    );
  };

  const addMargin = () => {
    console.log("Add margin");
  };

  const showAddMarginButton = (showAddMarginBtn) => {
    return (
      showAddMarginBtn && (
        <button
          onClick={addMargin}
          className="btn btn-outline-warning card-btn-1  "
        >
          Add Margin
        </button>
      )
    );
  };

  const removeFromSite = () => {
    console.log("Removed from site");
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

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
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

  return (
    <div className="card ">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">
          Category: {product.category && product.category.name}
        </p>
        <p className="black-8">
          Added on {moment(product.createdAt).fromNow()}
        </p>
        {showStock(product.quantity)}
        <br />

        {showViewButton(showViewProductButton)}

        {user && role === "1" && showAddToSiteBtn(showAddToSiteButton)}
        {user && role === "2" && showAddToCartBtn(showAddToCartButton)}
        {Object.entries(user).length === 0 && showLoginToViewBtn()}

        {showAddMarginButton(showAddMarginBtn)}

        {showRemoveButton(showRemoveProductButton)}

        {showRemoveFromSiteButton(removeFromSiteBtn)}

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
};

export default Card;
