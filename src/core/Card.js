import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import {
  updateMargin,
  addInfluenerItemToSite,
  removInfluencerProducts,
} from "../core/apiCore";
import { isAuthenticated } from "../auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useAlert } from "react-alert";
import { toast } from "react-toastify";

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
      toast.success("Margin updated");
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

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  showAddMarginBtn = false,
  removeFromSiteBtn = false,
  showAddToSiteButton = false,
  showMargin = false,
  userId = "",
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
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
    const products = [product._id];
    addInfluenerItemToSite(user._id, isAuthenticated().token, products).then(
      (data) => {
        toast.success(`${data.message}`);
      }
    );
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
        toast.success(`${data.message}`);
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

  const showMarginQuantity = () => {
    return <p className="black-7">Margin: {currentMargin}</p>;
  };

  const noShow = () => <div></div>;

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
        {showMargin ? showMarginQuantity() : noShow()}
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
